#!/usr/bin/env python3
"""একটা মাসের সেশন-ফাইলগুলো একটা 'সংকলিত' ফাইলে একত্র করে — ঐচ্ছিক মাসশেষের গোছানো।

একাধিক সেশন একসাথে কাজ করলে প্রতিটা সেশন নিজের আলাদা ফাইল বানায়
(`docs/ghotonaprobaho/2026-09-<স্কোপ>.md`)। মাস শেষে ফোল্ডার গোছাতে সেগুলো একটা
`<YYYY-MM>-consolidated.md`-এ মেলানো যায়। সাইটের আউটপুটে কোনো পার্থক্য হয় না — সেটা
নিশ্চিত করাই এই টুলের মূল নিরাপত্তা: একত্র করার আগে ও পরে build চালিয়ে ইনডেক্স-JSON
হুবহু এক কি না মেলায়; না মিললে সব আগের অবস্থায় ফিরিয়ে দেয়।

ব্যবহার:
  python3 scripts/consolidate_month.py <ghotonaprobaho|top-news> <YYYY-MM>            # শুধু পরিকল্পনা
  python3 scripts/consolidate_month.py <ghotonaprobaho|top-news> <YYYY-MM> --apply    # সত্যিই করা

চালানোর আগে নিশ্চিত হোন অন্য কোনো খোলা PR ওই ফাইলগুলো ছুঁয়ে নেই
(`bash scripts/claim_check.sh docs/ghotonaprobaho/<ফাইল>`), নইলে সেই PR-এ সংঘর্ষ হবে।
MCQ ও আর্কাইভ এই টুলের বাইরে — MCQ-র উত্তর-কী ফাইল-ভিত্তিক (BUG-17), তাই ফাইল মেলানো
নিরাপদ নয়; build এমনিতেই একই মাসের MCQ ফাইলগুলো একটা সেটে জোড়া লাগায়।

কিছু ক্ষেত্রে টুল ইচ্ছে করেই থেমে হাতে মেলাতে বলে: একই ঘটনা দুই ফাইলে ভিন্ন টপিক-লিংক
নিয়ে থাকলে, বা কোনো ফাইলে বহু-লাইনের বুলেট/অপ্রত্যাশিত লাইন থাকলে।
"""
import json
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_index as _bi  # noqa: E402

ROOT = _bi.ROOT
KINDS = {
    "ghotonaprobaho": (ROOT / "docs" / "ghotonaprobaho", ROOT / "docs" / "ghotonaprobaho-index.json"),
    "top-news": (ROOT / "docs" / "top-news", ROOT / "docs" / "top-news-index.json"),
}
CAT_RE = re.compile(r"^\*\*(.+?)\*\*\s*$")


class ConsolidateError(Exception):
    pass


def _strip_links(raw):
    """বুলেটের কাঁচা লেখা থেকে [[…]] লিংক-মার্কআপ সরিয়ে সাইটে যে টেক্সট দেখায় সেটা ফেরত দেয়
    (build_index.parse_item_terms-এর একই নিয়ম) — ডুপ্লিকেট চিনতে।"""
    if _bi.inline_term_re.search(raw):
        return _bi.inline_term_re.sub(lambda m: m.group(1), raw).strip()
    lm = _bi.legacy_related_topic_re.match(raw)
    return lm.group(1).strip() if lm else raw.strip()


def _key(raw):
    return _bi._norm_text(_strip_links(raw))


def _parse_days(text, fname):
    """ঘটনাপ্রবাহ ফাইল -> [{"date", "cats": [[নাম, [কাঁচা বুলেট]]]}]। অপ্রত্যাশিত কিছু পেলে থামে।"""
    days, day, cat = [], None, None
    for ln in text.split("\n"):
        s = ln.rstrip()
        if s.startswith("## "):
            day = {"date": s[3:].strip(), "cats": []}
            days.append(day)
            cat = None
        elif day is None or not s.strip():
            continue  # শিরোনাম/ভূমিকা বা ফাঁকা লাইন
        elif CAT_RE.match(s):
            cat = [CAT_RE.match(s).group(1).strip(), []]
            day["cats"].append(cat)
        elif s.startswith("- "):
            if cat is None:
                raise ConsolidateError(f"{fname}: '{day['date']}'-এ বিভাগ-শিরোনাম ছাড়া বুলেট — হাতে ঠিক করুন")
            cat[1].append(s[2:].strip())
        else:
            raise ConsolidateError(
                f"{fname}: অপ্রত্যাশিত লাইন ('{s[:50]}…') — বহু-লাইনের বুলেট? হাতে মেলান, টুল এখানে থামল"
            )
    return days


def _parse_top(text, fname):
    """টপ নিউজ ফাইল -> [(তারিখ-হেডিং, কাঁচা হাইলাইট)]।"""
    out, day = [], None
    for ln in text.split("\n"):
        s = ln.rstrip()
        if s.startswith("## "):
            day = s[3:].strip()
        elif day is None or not s.strip():
            continue
        elif s.startswith("- "):
            out.append((day, s[2:].strip()))
        else:
            raise ConsolidateError(f"{fname}: অপ্রত্যাশিত লাইন ('{s[:50]}…') — হাতে মেলান, টুল এখানে থামল")
    return out


def _dup_check(kept_raw, new_raw, where):
    if _bi._norm_text(kept_raw) != _bi._norm_text(new_raw):
        raise ConsolidateError(
            f"একই ঘটনা ভিন্ন লিংক-মার্কআপে দুই ফাইলে আছে ({where}):\n  ১) {kept_raw}\n  ২) {new_raw}\n"
            "— কোনটা রাখবেন হাতে ঠিক করে আবার চালান।"
        )


def merge_days(files):
    """files: [(ফাইলনাম, টেক্সট)], নামক্রমে। ফেরত: সংকলিত ফাইলের টেক্সট।
    ক্রম/ডুপ্লিকেট/বিভাগ-ক্রমের নিয়ম build_index.compile_ghotonaprobaho-এর হুবহু একই।"""
    merged, order = {}, []
    for fname, text in files:
        for d in _parse_days(text, fname):
            mk = _bi._merge_key(_bi.bengali_date_sort_key(d["date"]), d["date"])
            if mk not in merged:
                merged[mk] = {"date": d["date"], "cats": [], "items": {}, "files": set()}
                order.append(mk)
            slot = merged[mk]
            slot["files"].add(fname)
            for cname, raws in d["cats"]:
                target = next((c for c in slot["cats"] if c[0] == cname), None)
                for raw in raws:
                    k = _key(raw)
                    if k in slot["items"]:
                        _dup_check(slot["items"][k], raw, f"'{d['date']}'")
                        continue
                    slot["items"][k] = raw
                    if target is None:
                        target = [cname, []]
                        slot["cats"].append(target)
                    target[1].append(raw)
    blocks = []
    for mk in sorted(order, key=lambda k: _bi.bengali_date_sort_key(merged[k]["date"])):
        slot = merged[mk]
        cats = slot["cats"]
        if len(slot["files"]) > 1:
            cats = sorted(cats, key=lambda c: _bi._CATEGORY_PRIORITY.get(c[0], 99))
        body = "".join(f"\n**{cn}**\n\n" + "\n".join(f"- {r}" for r in rs) + "\n" for cn, rs in cats)
        blocks.append(f"## {slot['date']}\n\n{body}")
    return "\n".join(blocks)


def merge_top(files):
    """টপ নিউজের সেশন-ফাইল মেলানো — ক্রম: ফাইলের নামক্রম, তারপর ফাইলের ভেতরের ক্রম (build-এর মতো)।"""
    by_date, order, seen = {}, [], {}
    for fname, text in files:
        for date, raw in _parse_top(text, fname):
            mk = _bi._merge_key(_bi.bengali_date_sort_key(date), date)
            k = (mk, _key(raw))
            if k in seen:
                _dup_check(seen[k], raw, f"'{date}'")
                continue
            seen[k] = raw
            if mk not in by_date:
                by_date[mk] = (date, [])
                order.append(mk)
            by_date[mk][1].append(raw)
    blocks = []
    for mk in sorted(order, key=lambda k: _bi.bengali_date_sort_key(by_date[k][0])):
        date, raws = by_date[mk]
        blocks.append(f"## {date}\n" + "\n".join(f"- {r}" for r in raws) + "\n")
    return "\n".join(blocks)


def _build():
    r = subprocess.run([sys.executable, str(ROOT / "scripts" / "build_index.py")], capture_output=True, text=True, cwd=ROOT)
    if r.returncode != 0:
        raise ConsolidateError("build_index.py ব্যর্থ:\n" + (r.stderr or r.stdout)[-600:])


def run(kind, month, apply):
    src_dir, index_file = KINDS[kind]
    pat = re.compile(rf"^{re.escape(month)}-[a-z]")
    paths = sorted(p for p in src_dir.glob("*.md") if pat.match(p.stem))
    target = src_dir / f"{month}-consolidated.md"
    if len(paths) == 0 or (len(paths) == 1 and paths[0] == target):
        print(f"✓ {month}-এর কোনো একত্র করার মতো সেশন-ফাইল নেই।")
        return 0
    files = [(p.name, p.read_text(encoding="utf-8")) for p in paths]
    merger = merge_days if kind == "ghotonaprobaho" else merge_top
    body = merger(files)
    title = "দৈনিক ঘটনাপ্রবাহ" if kind == "ghotonaprobaho" else "টপ নিউজ"
    header = (
        f"# {title} — {month} সংখ্যা (একত্রিত)\n\n"
        f"*(`scripts/consolidate_month.py` দিয়ে {len(paths)}টা সেশন-ফাইল একত্র করা — সাইটে কোনো পার্থক্য নেই।)*\n\n"
    )
    print(f"পরিকল্পনা — {kind}/{month}: {len(paths)}টা ফাইল → {target.name}")
    for p in paths:
        print(f"   • {p.name}")
    if not apply:
        print("\n(এটা শুধু পরিকল্পনা — সত্যিই করতে শেষে --apply দিন। আগে অন্য খোলা PR নেই নিশ্চিত করুন।)")
        return 0
    _build()
    before = index_file.read_bytes()
    target.write_text(header + body + "\n", encoding="utf-8")
    removed = [p for p in paths if p != target]
    for p in removed:
        p.unlink()
    try:
        _build()
        same = index_file.read_bytes() == before
    except ConsolidateError:
        same = False
    if not same:
        for name, text in files:  # আগের অবস্থায় ফেরত
            (src_dir / name).write_text(text, encoding="utf-8")
        if target.name not in {n for n, _ in files}:
            target.unlink(missing_ok=True)
        print("✗ একত্র করার পর সাইটের ইনডেক্স আগের সাথে হুবহু মেলেনি — সব আগের অবস্থায় ফিরিয়ে দেওয়া হয়েছে। "
              "টুলের বাইরের কোনো বিশেষ ফরম্যাট আছে কি না দেখে হাতে মেলান।")
        return 1
    print(f"✓ একত্র হয়েছে ({len(removed)}টা ফাইল মুছে {target.name}); ইনডেক্স হুবহু আগের মতো — যাচাই করা।")
    print("  এবার `bash scripts/safe_add.sh` দিয়ে stage করে commit/PR করুন (generated ফাইল commit-এ যাবে না)।")
    return 0


def main(argv):
    args = [a for a in argv if not a.startswith("--")]
    if len(args) != 2 or args[0] not in KINDS or not re.match(r"^\d{4}-\d{2}$", args[1]):
        print(__doc__)
        return 2
    try:
        return run(args[0], args[1], "--apply" in argv)
    except ConsolidateError as e:
        print(f"✗ {e}")
        return 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
