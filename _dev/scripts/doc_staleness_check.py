#!/usr/bin/env python3
"""
current-affairs/AGENTS.md ও current-affairs/EDITORIAL_MEMORY.md-এ পুরনো/ভাঙা/
stale কনটেন্ট স্বয়ংক্রিয়ভাবে ধরে — যাতে migration/rename/rewrite-এর পর হাতে
মনে করে না ঘেঁটে দেখলেও ভুল নির্দেশনা রিপোতে পড়ে না থাকে।

চারটা generic চেক (কোনোটাই হার্ডকোডেড "এই নির্দিষ্ট স্ট্রিং" তালিকা না, তাই
ভবিষ্যতে নতুন migration/rename হলেও ফাইল না বদলে ধরবে):

  ১. **retired repo রেফারেন্স** — `github.com/openjobsolutionbd/<repo>` বা
     `api.github.com/repos/openjobsolutionbd/<repo>` যেখানে repo বর্তমান
     রিপো (`open_job_solution`) না। (কারণ: `open_current_affairs` স্ট্যান্ডঅ্যালোন
     রিপো ২০২৬-০৯-এ subtree merge দিয়ে এই monorepo-তে চলে এসেছে, sync
     workflow বাতিল — কিন্তু কিছু ডকে পুরনো রিপোর ক্লোন-URL/API-endpoint রয়ে
     গেছে।)
  ২. **ভাঙা ফাইল-রেফারেন্স** — ব্যাকটিক-কোটেড পাথ/স্ক্রিপ্ট-নাম যা `current-affairs/`
     বা রিপো-রুটে আর নেই।
  ৩. **ভাঙা workflow রেফারেন্স** — টেক্সটে উল্লেখ করা `*.yml` ফাইল
     `.github/workflows/`-এ নেই (যেমন বাতিল হওয়া `sync-to-job-solution.yml`)।
  ৪. **stale হাতে-লেখা "বর্তমান অবস্থা"/"সর্বশেষ" স্ন্যাপশট** — এই হেডিংগুলোর
     নিজেদেরই দ্রুত stale হয়ে যাওয়ার কথা (root AGENTS.md এই কারণেই এই প্যাটার্ন
     বাদ দিয়ে সবসময় live script-এ যাচাই করার নিয়ম করেছে)। এখানে ৬০ দিনের
     বেশি পুরনো তারিখ/মাস পাওয়া গেলে ফ্ল্যাগ করা হয়।
  ৫. **undocumented script** — `current-affairs/scripts/`-এ ফাইল আছে কিন্তু
     `AGENTS.md`-এ নাম-উল্লেখ নেই (root `_dev/check_docs_consistency.js`-এর
     একই ধরনের চেকের সমতুল্য, শুধু current-affairs/scripts/-এর জন্য)।
  ৬. **ফাইলের আকার থ্রেশহোল্ড** — কমপ্রেশন-পরামর্শ (EDITORIAL_MEMORY.md আগে
     একবার ম্যানুয়ালি কমপ্রেস হয়েছিল, ২০২৬-০৮-১৫; এবার script মনে করিয়ে দেবে)।

**এই script নিজে থেকে prose মুছে না** — এডিটোরিয়াল সিদ্ধান্ত ভুলবশত হারানোর
ঝুঁকি নেওয়া হয় না (repo-র নিজের নীতি: "যেখানে ভুল হলে সত্যিকারের ক্ষতি হয়,
সেখানে কখনো শর্টকাট না")। শুধু রিপোর্ট করে ও ব্যর্থ exit code দেয়, যাতে
`current-affairs-docs-staleness.yml` workflow GitHub Issue বানিয়ে/আপডেট করে
জানায় — বাস্তব "ঝেড়ে ফেলা"টা তখন একজন এডিটোরিয়াল সেশনে সিদ্ধান্ত নিয়ে করে।

ব্যর্থ হলে: exit code 1 + /tmp/doc_staleness_report.md-এ রিপোর্ট।
ম্যানুয়াল ব্যবহার: python3 _dev/scripts/doc_staleness_check.py
"""
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
CURRENT_REPO = "open_job_solution"
WORKFLOWS_DIR = ROOT / ".github" / "workflows"
STALE_SNAPSHOT_DAYS = 60
SIZE_BUDGET_BYTES = {
    "current-affairs/AGENTS.md": 35_000,
    "current-affairs/EDITORIAL_MEMORY.md": 20_000,
}
TARGET_FILES = [ROOT / p for p in SIZE_BUDGET_BYTES]

BN_DIGITS = str.maketrans("০১২৩৪৫৬৭৮৯", "0123456789")
BN_MONTHS = {
    "জানুয়ারি": 1, "ফেব্রুয়ারি": 2, "মার্চ": 3, "এপ্রিল": 4, "মে": 5, "জুন": 6,
    "জুলাই": 7, "আগস্ট": 8, "সেপ্টেম্বর": 9, "অক্টোবর": 10, "নভেম্বর": 11, "ডিসেম্বর": 12,
}

problems = []  # each: (file_relpath, message)


def norm_digits(s):
    return s.translate(BN_DIGITS)


def check_retired_repo_refs(rel, text):
    pattern = re.compile(r"(?:github\.com/|api\.github\.com/repos/)openjobsolutionbd/([A-Za-z0-9_.-]+)")
    seen = set()
    for m in pattern.finditer(text):
        repo = m.group(1).removesuffix(".git")
        if repo != CURRENT_REPO and repo not in seen:
            seen.add(repo)
            problems.append((
                rel,
                f"পুরনো/retired রিপো রেফারেন্স: `openjobsolutionbd/{repo}` — বর্তমান রিপো "
                f"`{CURRENT_REPO}`, সম্ভবত migrate/merge হওয়ার পর URL আপডেট হয়নি।",
            ))


_BASENAME_CACHE = {}


def _basename_exists(name):
    """current-affairs/ ও রিপো-রুটে (রিকার্সিভলি, .git বাদে) এই বেসনেইম আছে কিনা।
    এজেন্ট-ডকে প্রায়ই পুরো পাথ না দিয়ে শুধু ফাইলনাম রেফার করা হয় (যেমন `build_index.py`,
    আসল পাথ `current-affairs/scripts/build_index.py`) — তাই এক্সাক্ট-পাথ মিল না পেলেই
    'ভাঙা' ধরা যাবে না, পুরো ট্রি-তে বেসনেইম খোঁজা লাগবে।
    """
    if not _BASENAME_CACHE:
        for base in (ROOT / "current-affairs", ROOT):
            for p in base.rglob("*"):
                if ".git" in p.parts:
                    continue
                _BASENAME_CACHE.setdefault(p.name, []).append(p)
    return name in _BASENAME_CACHE


def _suffix_exists(rel_suffix):
    """স্ল্যাশ-সহ আংশিক পাথ (যেমন `js_tests/run.mjs`, আসল পাথ
    `current-affairs/scripts/js_tests/run.mjs`) — বেসনেইম দিয়ে ক্যাশ থেকে
    candidates বের করে পুরো suffix মিলছে কিনা দেখে।
    """
    leaf = rel_suffix.rsplit("/", 1)[-1]
    _basename_exists(leaf)  # ক্যাশ পপুলেট নিশ্চিত করা
    for p in _BASENAME_CACHE.get(leaf, []):
        if p.as_posix().endswith("/" + rel_suffix) or p.as_posix().endswith(rel_suffix):
            return True
    return False


def check_broken_file_refs(rel, text):
    candidates = set(re.findall(r"`([^`\s]+\.[A-Za-z0-9]{1,5}|[\w./-]+/[\w./-]+)`", text))
    for c in sorted(candidates):
        start = text.find(f"`{c}`")
        preceding = text[max(0, start - 20):start]
        following = text[start + len(c) + 2:start + len(c) + 42]
        if any(w in preceding for w in ("যেমন", "উদাহরণ")):
            continue  # উদাহরণ-স্বরূপ ফাইলনাম (নামকরণ-কনভেনশন বোঝাতে), আসল রেফারেন্স না
        if re.search(r"#\d{2,5}", preceding) or re.search(r"#\d{2,5}", following):
            continue  # নির্দিষ্ট PR/Issue-এর প্রস্তাব/আলোচনার প্রসঙ্গে উল্লেখ, বর্তমান-অবস্থার দাবি না
        if "://" in c or c.startswith("<") or ">" in c or c.startswith("http"):
            continue
        if c.startswith("/home/") or c.startswith("/tmp/"):
            continue  # sandbox স্ক্র্যাচ পাথ, রিপো ফাইল না
        if not re.search(r"[./]", c):
            continue
        if any(ch in c for ch in "<>*"):
            continue
        if "/" in c:
            if any((base / c).exists() for base in (ROOT / "current-affairs", ROOT)) or _suffix_exists(c):
                continue
        elif _basename_exists(c):
            continue
        problems.append((rel, f"ভাঙা ফাইল-রেফারেন্স: `{c}` — `current-affairs/`-এ বা রিপো-রুটে কোথাও পাওয়া গেল না।"))


_RETIRED_QUALIFIERS = ("পুরনো", "retired", "বাতিল", "আগে")


def check_workflow_refs(rel, text):
    existing = {p.name for p in WORKFLOWS_DIR.glob("*.yml")} if WORKFLOWS_DIR.exists() else set()
    for m in re.finditer(r"[\w-]+\.yml", text):
        name = m.group()
        if name in existing:
            continue
        preceding = text[max(0, m.start() - 40):m.start()]
        following = text[m.end():m.end() + 40]
        if any(w in preceding for w in _RETIRED_QUALIFIERS):
            continue  # স্পষ্টভাবে 'পুরনো/retired/বাতিল' হিসেবে উল্লেখ করা ঐতিহাসিক রেফারেন্স, বর্তমান দাবি না
        if re.search(r"#\d{2,5}", preceding) or re.search(r"#\d{2,5}", following):
            continue  # নির্দিষ্ট PR/Issue-এর প্রস্তাব/আলোচনার প্রসঙ্গে উল্লেখ, বর্তমান-অবস্থার দাবি না
        problems.append((rel, f"ভাঙা workflow রেফারেন্স: `{name}` — `.github/workflows/`-এ নেই (বাতিল/rename হয়েছে?)।"))


def _extract_dates(section):
    found_dates = []
    for iso_m in re.finditer(r"(20\d{2})-(\d{2})(?:-(\d{2}))?", section):
        y, mo, d = int(iso_m.group(1)), int(iso_m.group(2)), int(iso_m.group(3) or 1)
        if 1 <= mo <= 12:
            try:
                found_dates.append(datetime(y, mo, d, tzinfo=timezone.utc))
            except ValueError:
                pass
    for name, mo in BN_MONTHS.items():
        for year_m in re.finditer(re.escape(name) + r"\s+(20\d{2})", section):
            found_dates.append(datetime(int(year_m.group(1)), mo, 1, tzinfo=timezone.utc))
    return found_dates


def check_stale_snapshot(rel, text):
    now = datetime.now(timezone.utc)
    for heading_m in re.finditer(r"^#{1,4}\s*.*(সর্বশেষ|বর্তমান অবস্থা).*$", text, re.MULTILINE):
        heading_dates = _extract_dates(norm_digits(heading_m.group()))
        if heading_dates:
            # হেডিং নিজেই একটা নির্দিষ্ট মাস/তারিখ দাবি করছে (যেমন "সর্বশেষ প্রসেস হওয়া
            # সংখ্যা: মার্চ ২০২৬") — এটাই আসল দাবি, বডি-র মধ্যেকার পরের (সম্ভবত বেশি
            # সাম্প্রতিক, তাই বিভ্রান্তিকর) "as of" তারিখ দিয়ে এটা মাস্ক করা যাবে না।
            found_dates = heading_dates
        else:
            sec_start = heading_m.end()
            next_heading = re.search(r"^#{1,4}\s", text[sec_start:], re.MULTILINE)
            sec_end = sec_start + (next_heading.start() if next_heading else len(text) - sec_start)
            found_dates = _extract_dates(norm_digits(text[sec_start:sec_end]))

        if found_dates:
            newest = max(found_dates)
            age_days = (now - newest).days
            if age_days > STALE_SNAPSHOT_DAYS:
                heading_text = heading_m.group().strip().lstrip("#").strip()
                problems.append((
                    rel,
                    f"stale স্ন্যাপশট সেকশন \"{heading_text}\" — এতে থাকা সবচেয়ে নতুন তারিখ/মাস "
                    f"~{age_days} দিনের পুরনো (>{STALE_SNAPSHOT_DAYS} দিনের সীমা)। এই ধরনের "
                    f"হাতে-লেখা 'বর্তমান অবস্থা' নোট নিজে থেকেই দ্রুত stale হয় — root "
                    f"`_docs/AGENTS.md` এই কারণে এই প্যাটার্ন বাদ দিয়ে সবসময় লাইভ স্ক্রিপ্টে "
                    f"(`session_status.sh`/`check_topic.sh`) যাচাই করার নিয়ম করেছে। আপডেট করুন "
                    f"বা একই প্যাটার্নে সরিয়ে ফেলুন।",
                ))


def check_undocumented_scripts(rel, text):
    if not rel.endswith("AGENTS.md"):
        return
    scripts_dir = Path(rel).parent / "scripts"
    if not (ROOT / scripts_dir).exists():
        return
    for p in sorted((ROOT / scripts_dir).rglob("*")):
        if p.is_file() and p.suffix in (".sh", ".py", ".js", ".mjs") and p.name not in text:
            problems.append((
                rel,
                f"undocumented script: `{p.relative_to(ROOT)}` — ফাইল আছে কিন্তু `{rel}`-এ "
                f"নামোল্লেখ নেই (নতুন স্ক্রিপ্ট যোগ হলে টেবিলে যোগ করতে ভুলে যাওয়া একটা পরিচিত প্যাটার্ন)।",
            ))


def check_size_budget(rel, text):
    budget = SIZE_BUDGET_BYTES.get(rel)
    size = len(text.encode("utf-8"))
    if budget and size > budget:
        problems.append((
            rel,
            f"ফাইলের আকার {size:,} বাইট, থ্রেশহোল্ড {budget:,} বাইট ছাড়িয়ে গেছে — কমপ্রেশন পাস "
            f"বিবেচনা করুন (পুরনো/সুপারসিডেড এন্ট্রি সংক্ষিপ্ত করা, বিস্তারিত ইতিহাস `git log -p` "
            f"-এই থাকবে; EDITORIAL_MEMORY.md-এ আগে একবার এভাবে কমপ্রেস হয়েছিল, ২০২৬-০৮-১৫)।",
        ))


def main():
    for path in TARGET_FILES:
        if not path.exists():
            problems.append((str(path.relative_to(ROOT)), "ফাইলটাই খুঁজে পাওয়া যায়নি।"))
            continue
        rel = str(path.relative_to(ROOT))
        text = path.read_text(encoding="utf-8")
        check_retired_repo_refs(rel, text)
        check_broken_file_refs(rel, text)
        check_workflow_refs(rel, text)
        check_stale_snapshot(rel, text)
        check_undocumented_scripts(rel, text)
        check_size_budget(rel, text)

    if problems:
        report_lines = [
            f"স্বয়ংক্রিয় doc-staleness পরীক্ষায় "
            f"({datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}) "
            f"{len(problems)}টা সমস্যা পাওয়া গেছে:\n",
        ]
        for i, (rel, msg) in enumerate(problems):
            report_lines.append(f"{i + 1}. **`{rel}`** — {msg}\n")
        report_lines.append(
            "\n---\n*এই script কোনো কনটেন্ট নিজে থেকে মুছে না (এডিটোরিয়াল সিদ্ধান্ত হারানোর "
            "ঝুঁকি এড়াতে) — একটা সেশনে পড়ে সিদ্ধান্ত নিয়ে ঠিক করুন। "
            "স্বয়ংক্রিয়ভাবে `current-affairs-docs-staleness.yml` workflow থেকে তৈরি; "
            "পরবর্তী সফল পরীক্ষায় নিজে থেকেই বন্ধ হয়ে যাবে।*"
        )
        Path("/tmp/doc_staleness_report.md").write_text("\n".join(report_lines), encoding="utf-8")
        print(f"✗ {len(problems)}টা সমস্যা পাওয়া গেছে — বিস্তারিত /tmp/doc_staleness_report.md-এ।")
        for rel, msg in problems:
            print(f"  - [{rel}] {msg.splitlines()[0]}")
        sys.exit(1)

    print("✓ doc-staleness পরীক্ষা পাস — ভাঙা রেফারেন্স/stale স্ন্যাপশট/আকার-সীমা কোনো সমস্যা নেই।")


if __name__ == "__main__":
    main()
