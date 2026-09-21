#!/usr/bin/env python3
"""
build_index.py ও verify_site.py-এর ফাংশনগুলোর জন্য ছোট, নির্দিষ্ট regression
টেস্ট — আগে ধরা পড়া bug (দেখুন BUGFIX.md) যেন চুপচাপ আবার ফিরে না আসে।
এই একটা ফাইলই preflight.sh-এ হার্ডকোড করা প্রজেক্টের একমাত্র Python
regression-টেস্ট এন্ট্রি পয়েন্ট, তাই scripts/-এর অন্য কোনো .py স্ক্রিপ্টে
নতুন bug ধরা পড়লেও (শুধু build_index.py না) তার regression test এখানেই
যোগ হয়।

নিয়ম (AGENTS.md-এও লেখা আছে): ভবিষ্যতে এই স্ক্রিপ্টগুলোতে নতুন কোনো bug
পাওয়া/ঠিক করা হলে, BUGFIX.md-এ এন্ট্রি লেখার পাশাপাশি এখানে একটা
matching test যোগ করতে হবে।

চালানোর নিয়ম: python3 scripts/test_build_index.py
(scripts/preflight.sh কোড-ফাইল বদলালে এটা স্বয়ংক্রিয়ভাবে চালায়)
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
from build_index import strip_markdown  # noqa: E402
from build_index import parse_mcq_file  # noqa: E402
import build_index as _bi  # noqa: E402
import consolidate_month as _cm  # noqa: E402

tests = []


def test(name):
    def deco(fn):
        tests.append((name, fn))
        return fn
    return deco


@test("strip_markdown — table separator row-এ stray double-space থাকা উচিত নয় (BUG-10)")
def _():
    body = "লাইন এক\n|কলাম১|কলাম২|\n|---|---|\n|ক|খ|\nলাইন শেষ"
    out = strip_markdown(body)
    assert "  " not in out, f"stray double-space পাওয়া গেছে: {out!r} (BUGFIX.md BUG-10)"


@test("strip_markdown — heading হ্যাশ ও bold/italic মার্কার সরে যাওয়া উচিত")
def _():
    out = strip_markdown("## শিরোনাম\n**বোল্ড** ও *ইটালিক* টেক্সট")
    assert "#" not in out, f"heading হ্যাশ রয়ে গেছে: {out!r}"
    assert "*" not in out, f"bold/italic মার্কার রয়ে গেছে: {out!r}"
    assert "শিরোনাম" in out and "বোল্ড" in out and "ইটালিক" in out


@test("parse_mcq_file — বিভিন্ন সেকশনে প্রশ্ন-নাম্বার ওভারল্যাপ করলেও, উত্তর-কী সেকশনের বাইরে (ফাইলের শেষে consolidated) থাকলে কোনো সেকশন হারিয়ে যাওয়া বা ভুল সেকশনের উত্তর বসে যাওয়া উচিত না (BUG-17)")
def _():
    import tempfile

    # ম্যাগাজিনের একটা প্রচলিত কনভেনশন: সব বিভাগের প্রশ্ন আগে, তারপর
    # ফাইলের শেষে সবগুলোর উত্তর-কী একসাথে (consolidated) — প্রতি বিভাগেই
    # নাম্বারিং নতুন করে ১ থেকে শুরু।
    sample = (
        "## বিভাগ ১\n"
        "১. প্রথম বিভাগের প্রথম প্রশ্ন?\n"
        "ক) ক১ খ) খ১ গ) গ১ ঘ) ঘ১\n\n"
        "২. প্রথম বিভাগের দ্বিতীয় প্রশ্ন?\n"
        "ক) ক২ খ) খ২ গ) গ২ ঘ) ঘ২\n\n"
        "## বিভাগ ২\n"
        "১. দ্বিতীয় বিভাগের প্রথম প্রশ্ন?\n"
        "ক) খক১ খ) খখ১ গ) খগ১ ঘ) খঘ১\n\n"
        "২. দ্বিতীয় বিভাগের দ্বিতীয় প্রশ্ন?\n"
        "ক) খক২ খ) খখ২ গ) খগ২ ঘ) খঘ২\n\n"
        "**উত্তর (বিভাগ ১):** ১.ক ২.খ\n\n"
        "**উত্তর (বিভাগ ২):** ১.গ ২.ঘ\n"
    )
    with tempfile.TemporaryDirectory() as d:
        path = Path(d) / "sample.md"
        path.write_text(sample, encoding="utf-8")
        sections = parse_mcq_file(path)

    names = [s["name"] for s in sections]
    assert "বিভাগ ১" in names, (
        f"'বিভাগ ১' সেকশনটাই আউটপুট থেকে হারিয়ে গেছে (পাওয়া গেছে শুধু: {names}) — "
        "দুই সেকশনে একই প্রশ্ন-নাম্বার (১, ২...) থাকলে question_lookup shared/global "
        "থাকলে প্রথম সেকশনের প্রশ্ন উত্তর-কী কখনো মেলে না, ফলে চুপচাপ বাদ পড়ে যায়। (BUGFIX.md BUG-17)"
    )
    assert "বিভাগ ২" in names, f"'বিভাগ ২' সেকশনও হারিয়ে গেছে (পাওয়া গেছে: {names})"

    sec1 = next(s for s in sections if s["name"] == "বিভাগ ১")
    sec2 = next(s for s in sections if s["name"] == "বিভাগ ২")
    assert len(sec1["questions"]) == 2, f"বিভাগ ১-এ ২টা প্রশ্ন থাকা উচিত, পাওয়া গেছে {len(sec1['questions'])}টা"
    assert len(sec2["questions"]) == 2, f"বিভাগ ২-এ ২টা প্রশ্ন থাকা উচিত, পাওয়া গেছে {len(sec2['questions'])}টা"

    q1_1 = next(q for q in sec1["questions"] if q["number"] == "১")
    q2_1 = next(q for q in sec2["questions"] if q["number"] == "১")
    assert q1_1["answer_index"] == 0, (
        f"বিভাগ ১-এর প্রশ্ন ১-এর উত্তর 'ক' (index 0) হওয়া উচিত, পাওয়া গেছে {q1_1['answer_index']} — "
        "সম্ভবত ভুল সেকশনের উত্তর-কী প্রয়োগ হয়েছে। (BUGFIX.md BUG-17)"
    )
    assert q2_1["answer_index"] == 2, (
        f"বিভাগ ২-এর প্রশ্ন ১-এর উত্তর 'গ' (index 2) হওয়া উচিত, পাওয়া গেছে {q2_1['answer_index']} — "
        "সম্ভবত ভুল সেকশনের উত্তর-কী প্রয়োগ হয়েছে। (BUGFIX.md BUG-17)"
    )


@test("generate_sitemap_and_robots — প্রতিটা টপিকের lastmod তার নিজের last_updated হওয়া উচিত, সবসময় আজকের তারিখ না (BUG-23)")
def _():
    import build_index
    import tempfile
    import datetime as _dt

    tmp_dir = Path(tempfile.mkdtemp())
    orig_sitemap, orig_robots = build_index.SITEMAP_OUTPUT, build_index.ROBOTS_OUTPUT
    build_index.SITEMAP_OUTPUT = tmp_dir / "sitemap.xml"
    build_index.ROBOTS_OUTPUT = tmp_dir / "robots.txt"
    try:
        build_index.generate_sitemap_and_robots([{"slug": "purono-topic", "last_updated": "2020-01"}])
        content = build_index.SITEMAP_OUTPUT.read_text(encoding="utf-8")
        today = _dt.date.today().isoformat()

        assert "2020-01" in content, (
            f"টপিকের lastmod তার নিজের last_updated (2020-01) ব্যবহার করছে না: {content!r} (BUGFIX.md BUG-23)"
        )
        block = content[content.index("purono-topic"): content.index("purono-topic") + 200]
        assert today not in block, (
            f"টপিকের lastmod-এ আজকের তারিখ বসে গেছে, নিজের last_updated না — bug ফিরে এসেছে: {block!r} (BUGFIX.md BUG-23)"
        )
    finally:
        build_index.SITEMAP_OUTPUT, build_index.ROBOTS_OUTPUT = orig_sitemap, orig_robots


@test("verify_site.main() — docs/index.html অনুপস্থিত থাকলে ক্র্যাশ না করে স্পষ্ট বাংলা এরর দিয়ে থামা উচিত (BUG-25)")
def _():
    import io
    import contextlib
    import verify_site  # noqa: E402  (scripts/ ইতিমধ্যে sys.path-এ আছে)

    index_html = verify_site.DOCS_DIR / "index.html"
    tmp_path = index_html.with_name("index.html.bug25-test-moved")
    assert index_html.exists(), f"{index_html} আগে থেকেই নেই — টেস্ট-সেটআপেই সমস্যা।"
    index_html.rename(tmp_path)
    try:
        buf = io.StringIO()
        raised_ok = False
        try:
            with contextlib.redirect_stdout(buf):
                verify_site.main()
        except SystemExit as e:
            raised_ok = e.code == 1
        except Exception as e:  # UnboundLocalError-সহ অন্য যেকোনো ক্র্যাশ এখানে ধরা পড়বে
            assert False, (
                f"docs/index.html অনুপস্থিত থাকলে verify_site.main() ক্র্যাশ করছে "
                f"({type(e).__name__}: {e}) — স্পষ্ট এরর দেখানোর বদলে। (BUGFIX.md BUG-25)"
            )
        assert raised_ok, "verify_site.main() প্রত্যাশিতভাবে exit code 1 দিয়ে থামেনি। (BUGFIX.md BUG-25)"
        assert "index.html" in buf.getvalue() and "পাওয়া যায়নি" in buf.getvalue(), (
            f"docs/index.html অনুপস্থিত থাকার স্পষ্ট বার্তা প্রিন্ট হয়নি: {buf.getvalue()[-300:]!r} (BUGFIX.md BUG-25)"
        )
    finally:
        if tmp_path.exists():
            tmp_path.rename(index_html)


# ---------------------------------------------------------------------------
# একাধিক সেশন একসাথে কাজ (২০২৬-০৯-২০): প্রতিটা সেশন নিজের আলাদা ফাইল বানায়, তাই
# ঘটনাপ্রবাহ/টপ নিউজ/MCQ-তে একই তারিখ/মাস একাধিক ফাইলে থাকতে পারে — build সেগুলো
# জোড়া লাগায়। এই টেস্টগুলো সেই আচরণ পাহারা দেয় (দেখুন AGENTS.md, PR_GUIDE.md)।
# ---------------------------------------------------------------------------
import contextlib  # noqa: E402
import io  # noqa: E402
import json  # noqa: E402
import tempfile  # noqa: E402


@contextlib.contextmanager
def _patched(**attrs):
    old = {k: getattr(_bi, k) for k in attrs}
    for k, v in attrs.items():
        setattr(_bi, k, v)
    try:
        yield
    finally:
        for k, v in old.items():
            setattr(_bi, k, v)


def _compile(kind, files, slugs=()):
    """kind: 'gh' | 'tn' | 'mcq'। files: {ফাইলনাম: টেক্সট}। slugs: বৈধ টপিক-slug। ফেরত: (আউটপুট-JSON, stderr)।"""
    cfg = {
        "gh": ("GHOTONAPROBAHO_DIR", "GHOTONAPROBAHO_OUTPUT_FILE", lambda: _bi.compile_ghotonaprobaho(set(slugs))),
        "tn": ("TOP_NEWS_DIR", "TOP_NEWS_OUTPUT_FILE", lambda: _bi.compile_top_news(set(slugs))),
        "mcq": ("MCQ_DIR", "MCQ_OUTPUT_FILE", lambda: _bi.compile_mcq()),
    }[kind]
    with tempfile.TemporaryDirectory() as td:
        d = Path(td) / "src"
        d.mkdir()
        for name, text in files.items():
            (d / name).write_text(text, encoding="utf-8")
        out = Path(td) / "out.json"
        err = io.StringIO()
        with _patched(**{cfg[0]: d, cfg[1]: out}), \
                contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(err):
            cfg[2]()
        return json.loads(out.read_text(encoding="utf-8")), err.getvalue()


def _gh_days(data):
    return [d for m in data["months"] for d in m["days"]]


@test("compile_ghotonaprobaho — একই তারিখ দুই সেশন-ফাইলে থাকলে বিল্ড ভাঙে না; একটা দিনে জোড়া লাগে, একই নামের ক্যাটাগরির বুলেট একত্র")
def _():
    a = "## ২০ আগস্ট ২০২৬\n\n\n**বাংলাদেশ**\n\n- ক-বুলেট\n"
    b = "## ২০ আগস্ট ২০২৬\n\n\n**বাংলাদেশ**\n\n- খ-বুলেট\n\n**আন্তর্জাতিক**\n\n- গ-বুলেট\n"
    data, _err = _compile("gh", {"2026-09-a.md": a, "2026-09-b.md": b})
    days = _gh_days(data)
    assert len(days) == 1, f"একই তারিখ একটাই দিন হওয়া উচিত, পাওয়া গেছে {len(days)}টা"
    cats = {c["category"]: [i["text"] for i in c["items"]] for c in days[0]["categories"]}
    assert cats.get("বাংলাদেশ") == ["ক-বুলেট", "খ-বুলেট"], f"বাংলাদেশ-এর বুলেট ঠিক জোড়া লাগেনি: {cats}"
    assert cats.get("আন্তর্জাতিক") == ["গ-বুলেট"], f"আন্তর্জাতিক বিভাগ হারিয়েছে: {cats}"


@test("compile_ghotonaprobaho — '০১ আগস্ট' ও '১ আগস্ট' একই দিন ধরা হয় (দুই সেশনের লেখার ধরন আলাদা হলেও)")
def _():
    a = "## ০১ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- এক\n"
    b = "## ১ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- দুই\n"
    data, _err = _compile("gh", {"2026-09-a.md": a, "2026-09-b.md": b})
    assert len(_gh_days(data)) == 1, "'০১ আগস্ট' আর '১ আগস্ট' আলাদা দিন হয়ে গেছে"


@test("compile_ghotonaprobaho — একই ফাইলের ভেতরে একই তারিখ-হেডিং দুইবার থাকলে এখনও বিল্ড-এরর (সম্পাদনার ভুল ধরতে)")
def _():
    dup = "## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- এক\n\n## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- দুই\n"
    try:
        _compile("gh", {"x.md": dup})
    except _bi.BuildError as e:
        assert "একই ফাইলে" in str(e), f"এরর-বার্তা প্রত্যাশিত নয়: {e}"
        return
    assert False, "একই ফাইলে ডুপ্লিকেট তারিখ-হেডিং থাকা সত্ত্বেও BuildError ওঠেনি"


@test("compile_ghotonaprobaho — হুবহু একই বুলেট দুই ফাইলে থাকলে বিল্ড থামে না (নইলে bot generated ফাইল আপডেট করতে পারত না); একটা রেখে stderr-এ সতর্কতা")
def _():
    a = "## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- একই ঘটনা\n"
    b = "## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- একই   ঘটনা\n- আলাদা ঘটনা\n"
    data, err = _compile("gh", {"2026-09-a.md": a, "2026-09-b.md": b})
    items = [i["text"] for c in _gh_days(data)[0]["categories"] for i in c["items"]]
    assert items.count("একই ঘটনা") == 1 and "আলাদা ঘটনা" in items, f"ডুপ্লিকেট বাদ/নতুন রাখা ঠিক হয়নি: {items}"
    assert "সতর্কতা" in err, f"ডুপ্লিকেট নিয়ে stderr-এ সতর্কতা আসেনি: {err!r}"


@test("compile_top_news — দুই সেশন-ফাইলের একই তারিখ জোড়া লাগে; হুবহু একই হাইলাইট একবার থাকে")
def _():
    a = "## ২১ আগস্ট ২০২৬\n- হাইলাইট এক\n"
    b = "## ২১ আগস্ট ২০২৬\n- হাইলাইট এক\n- হাইলাইট দুই\n"
    data, err = _compile("tn", {"2026-09-a.md": a, "2026-09-b.md": b})
    texts = [i["text"] for i in data["items"]]
    assert texts.count("হাইলাইট এক") == 1 and "হাইলাইট দুই" in texts, f"টপ নিউজ জোড়া/ডুপ্লিকেট ঠিক নয়: {texts}"
    assert "সতর্কতা" in err, "ডুপ্লিকেট হাইলাইটে stderr সতর্কতা আসেনি"


@test("compile_mcq — '2026-09-<স্কোপ>.md' সেশন-ফাইলগুলো একই মাসের একটা সেটে জোড়া লাগে; মাস-নাম/রেঞ্জ-নাম আগের মতোই আলাদা সেট")
def _():
    def sec(name, ans):
        return f"## {name}\n১. প্রশ্ন?\nক) ক খ) খ গ) গ ঘ) ঘ\n\n**উত্তর:** ১.{ans}\n"
    files = {
        "2026-09-p10.md": sec("বিভাগ এ", "ক"),
        "2026-09-p11.md": sec("বিভাগ বি", "খ"),
        "2026-08.md": sec("আগস্ট", "গ"),
        "2026-07-15_2026-08-14.md": sec("রেঞ্জ", "ঘ"),
    }
    data, _err = _compile("mcq", files)
    sets = {s["id"]: s for s in data["sets"]}
    assert set(sets) == {"2026-09", "2026-08", "2026-07-15_2026-08-14"}, f"সেট-আইডি ভুল: {sorted(sets)}"
    assert sets["2026-09"]["question_count"] == 2 and len(sets["2026-09"]["sections"]) == 2, (
        f"2026-09 সেটে দুই ফাইলের দুই সেকশন/২ প্রশ্ন থাকা উচিত: {sets['2026-09']['question_count']}"
    )


def _gh_items(data):
    return [i for d in _gh_days(data) for c in d["categories"] for i in c["items"]]


@test("ডুপ্লিকেট বাদ দেওয়ার সময় টপিক-লিংক হারায় না — লিংক-বিহীন ফাইল আগে পড়া হোক বা পরে (ফাইলনামের ক্রম যা-ই হোক)")
def _():
    plain = "## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- রাষ্ট্রপতি নির্বাচিত হন ফখরুল।\n"
    linked = "## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- রাষ্ট্রপতি নির্বাচিত হন [[ফখরুল|my-topic]]।\n"
    for a, b in [(plain, linked), (linked, plain)]:
        data, err = _compile("gh", {"2026-09-a.md": a, "2026-09-b.md": b}, slugs=["my-topic"])
        items = _gh_items(data)
        assert len(items) == 1, f"একটাই বুলেট থাকা উচিত: {items}"
        assert items[0]["terms"] == [{"phrase": "ফখরুল", "slug": "my-topic"}], (
            f"টপিক-লিংক হারিয়ে গেছে (ফাইল-ক্রম অনুযায়ী): {items[0].get('terms')}"
        )
    # শুধু লিংক-বিহীনটা আগে পড়া অবস্থায় stderr-এ লিংক-যোগের কথা থাকে
    _d, err = _compile("gh", {"2026-09-a.md": plain, "2026-09-b.md": linked}, slugs=["my-topic"])
    assert "টপিক-লিংক" in err, f"stderr-এ লিংক যোগ হওয়ার কথা নেই: {err!r}"


@test("compile_top_news — ডুপ্লিকেট হাইলাইটেও টপিক-লিংক হারায় না")
def _():
    plain = "## ২১ আগস্ট ২০২৬\n- নতুন রাষ্ট্রপতি শপথ নেন ফখরুল।\n"
    linked = "## ২১ আগস্ট ২০২৬\n- নতুন রাষ্ট্রপতি শপথ নেন [[ফখরুল|my-topic]]।\n"
    data, _err = _compile("tn", {"2026-09-a.md": plain, "2026-09-b.md": linked}, slugs=["my-topic"])
    assert len(data["items"]) == 1 and data["items"][0]["terms"] == [{"phrase": "ফখরুল", "slug": "my-topic"}], (
        f"টপ নিউজে টপিক-লিংক হারিয়েছে: {data['items']}"
    )


@test("compile_ghotonaprobaho — মাস-চেনা-যায়-না এমন ভিন্ন টাইপো-হেডিং দুই ফাইলে থাকলে ভুলে এক দিন হয়ে একটা হেডিং গিলে ফেলে না; একই টাইপো-হেডিং হলে জোড়া লাগে")
def _():
    a = "## ১৫ আগষ্ট ২০২৬\n\n**বাংলাদেশ**\n\n- টাইপো-এক\n"
    b = "## ১৫ সেপ্টেবর ২০২৬\n\n**বাংলাদেশ**\n\n- টাইপো-দুই\n"
    data, _err = _compile("gh", {"2026-09-a.md": a, "2026-09-b.md": b})
    assert len(_gh_days(data)) == 2, f"ভিন্ন টাইপো-হেডিং এক দিন হয়ে গেছে: {[d['date'] for d in _gh_days(data)]}"
    c = "## ১৫ আগষ্ট ২০২৬\n\n**বাংলাদেশ**\n\n- টাইপো-তিন\n"
    data, _err = _compile("gh", {"2026-09-a.md": a, "2026-09-c.md": c})
    assert len(_gh_days(data)) == 1, "হুবহু একই (টাইপো) হেডিং দুই ফাইলে জোড়া লাগা উচিত"


@test("compile_ghotonaprobaho — একাধিক ফাইল জোড়া লাগলে বিভাগের ক্রম বাংলাদেশ→আন্তর্জাতিক; একক ফাইলের দিনে ফাইলের নিজের ক্রমই থাকে")
def _():
    a = "## ২০ আগস্ট ২০২৬\n\n**আন্তর্জাতিক**\n\n- আ১\n"
    b = "## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- বা১\n"
    data, _err = _compile("gh", {"2026-09-a.md": a, "2026-09-b.md": b})
    assert [c["category"] for c in _gh_days(data)[0]["categories"]] == ["বাংলাদেশ", "আন্তর্জাতিক"], "জোড়া-লাগা দিনে বিভাগের ক্রম ঠিক নয়"
    only_intl_first = "## ২১ আগস্ট ২০২৬\n\n**আন্তর্জাতিক**\n\n- আ২\n\n**বাংলাদেশ**\n\n- বা২\n"
    data, _err = _compile("gh", {"2026-09-x.md": only_intl_first})
    assert [c["category"] for c in _gh_days(data)[0]["categories"]] == ["আন্তর্জাতিক", "বাংলাদেশ"], "একক ফাইলের দিনের ক্রম বদলে গেছে"


@test("compile_ghotonaprobaho — দুই ফাইলে আলাদা শব্দে লেখা প্রায়-একই ঘটনায় সতর্কতা (দুটোই থাকে); সম্পর্কহীন বুলেটে সতর্কতা নেই")
def _():
    a = "## ১০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- প্রধানমন্ত্রী তারেক রহমান প্রথমবারের মতো চট্টগ্রাম সফরে যান।\n"
    b = "## ১০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- প্রধানমন্ত্রী তারেক রহমান প্রথমবারের মতো চট্টগ্রাম সফর করেন।\n"
    data, err = _compile("gh", {"2026-09-a.md": a, "2026-09-b.md": b})
    assert len(_gh_items(data)) == 2, "প্রায়-ডুপ্লিকেট বাদ পড়া উচিত না (শুধু সতর্কতা)"
    assert "প্রায় একই ঘটনা" in err, f"প্রায়-ডুপ্লিকেট সতর্কতা আসেনি: {err!r}"
    c = "## ১০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- জাপানের দক্ষিণ-পশ্চিমাঞ্চলে ৭.১ মাত্রার শক্তিশালী ভূমিকম্প আঘাত হানে।\n"
    _d, err2 = _compile("gh", {"2026-09-a.md": a, "2026-09-c.md": c})
    assert "প্রায় একই ঘটনা" not in err2, f"সম্পর্কহীন বুলেটে ভুল সতর্কতা: {err2!r}"


@test("compile_mcq — একই মাসে মূল মাসিক ফাইল আগে, সেশন-ফাইল পরে; অঙ্ক-দিয়ে-শুরু স্কোপে সতর্কতা (রেঞ্জ-নামে নেই)")
def _():
    def sec(n):
        return f"## {n}\n১. প্রশ্ন?\nক) ক খ) খ গ) গ ঘ) ঘ\n\n**উত্তর:** ১.ক\n"
    data, _err = _compile("mcq", {"2026-08.md": sec("মূল"), "2026-08-p12.md": sec("সেশন")})
    assert [s["name"] for s in data["sets"][0]["sections"]] == ["মূল", "সেশন"], "মূল মাসিক ফাইলের সেকশন আগে আসা উচিত"
    data, err = _compile("mcq", {"2026-09-p10.md": sec("এ"), "2026-09-12-15.md": sec("বি")})
    assert "স্কোপ অঙ্ক দিয়ে শুরু" in err, f"অঙ্ক-শুরু স্কোপে সতর্কতা আসেনি: {err!r}"
    _d, err = _compile("mcq", {"2026-07-15_2026-08-14.md": sec("রেঞ্জ")})
    assert "স্কোপ" not in err, f"বৈধ রেঞ্জ-নামে ভুল সতর্কতা: {err!r}"


@test("consolidate_month — একত্র করা ফাইল দিয়ে build করলে ইনডেক্স মূল সেশন-ফাইলগুলোর হুবহু একই (ঘটনাপ্রবাহ): জোড়া-দিন, বিভাগ-ক্রম, ডুপ্লিকেট, টপিক-লিংক")
def _():
    a = ("# একটা শিরোনাম\n\n## ২০ আগস্ট ২০২৬\n\n\n**আন্তর্জাতিক**\n\n- আ১\n- একই ঘটনা [[ফখরুল|my-topic]]\n\n"
         "## ২১ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- বা২১\n")
    b = ("## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- বা১\n\n**আন্তর্জাতিক**\n\n- একই   ঘটনা [[ফখরুল|my-topic]]\n- আ২\n\n"
         "## ০১ সেপ্টেম্বর ২০২৬\n\n**বাংলাদেশ**\n\n- বা০১\n")
    c = "## ১ সেপ্টেম্বর ২০২৬\n\n**আন্তর্জাতিক**\n\n- আ০১\n"
    files = {"2026-09-a.md": a, "2026-09-b.md": b, "2026-09-c.md": c}
    before, _e = _compile("gh", files, slugs=["my-topic"])
    merged = _cm.merge_days(sorted(files.items()))
    after, _e = _compile("gh", {"2026-09-consolidated.md": merged}, slugs=["my-topic"])
    assert json.dumps(before, ensure_ascii=False, sort_keys=True) == json.dumps(after, ensure_ascii=False, sort_keys=True), (
        "একত্র করার পর ইনডেক্স বদলে গেছে:\n" + json.dumps(before, ensure_ascii=False) + "\n" + json.dumps(after, ensure_ascii=False)
    )


@test("consolidate_month — টপ নিউজে একত্র করার পর ইনডেক্স হুবহু একই (একই তারিখের একাধিক হাইলাইট, ডুপ্লিকেট, টপিক-লিংক)")
def _():
    a = "## ২১ আগস্ট ২০২৬\n- হাইলাইট এক\n- নতুন রাষ্ট্রপতি [[ফখরুল|my-topic]]\n\n## ২০ আগস্ট ২০২৬\n- বিশ\n"
    b = "## ২১ আগস্ট ২০২৬\n- নতুন   রাষ্ট্রপতি [[ফখরুল|my-topic]]\n- হাইলাইট দুই\n"
    files = {"2026-09-a.md": a, "2026-09-b.md": b}
    before, _e = _compile("tn", files, slugs=["my-topic"])
    merged = _cm.merge_top(sorted(files.items()))
    after, _e = _compile("tn", {"2026-09-consolidated.md": merged}, slugs=["my-topic"])
    assert json.dumps(before, ensure_ascii=False) == json.dumps(after, ensure_ascii=False), (
        "টপ নিউজ একত্র করার পর বদলে গেছে:\n" + json.dumps(before, ensure_ascii=False) + "\n" + json.dumps(after, ensure_ascii=False)
    )


@test("consolidate_month — একই ঘটনা ভিন্ন লিংক-মার্কআপে থাকলে বা বহু-লাইনের বুলেট পেলে থামে (ভুল মেলানোর চেয়ে হাতে ঠিক করা ভালো)")
def _():
    a = "## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- একই ঘটনা।\n"
    b = "## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- একই [[ঘটনা|my-topic]]।\n"
    try:
        _cm.merge_days([("a.md", a), ("b.md", b)])
    except _cm.ConsolidateError as e:
        assert "ভিন্ন লিংক" in str(e), f"এরর-বার্তা প্রত্যাশিত নয়: {e}"
    else:
        assert False, "ভিন্ন লিংক-মার্কআপে ডুপ্লিকেট থাকা সত্ত্বেও থামেনি"
    multi = "## ২০ আগস্ট ২০২৬\n\n**বাংলাদেশ**\n\n- প্রথম লাইন\n  দ্বিতীয় লাইন\n"
    try:
        _cm.merge_days([("m.md", multi)])
    except _cm.ConsolidateError as e:
        assert "অপ্রত্যাশিত লাইন" in str(e)
    else:
        assert False, "বহু-লাইনের বুলেটে থামেনি"


def main():
    passed, failed = 0, []
    for name, fn in tests:
        try:
            fn()
            passed += 1
        except AssertionError as e:
            failed.append((name, str(e)))
    if failed:
        print(f"✗ test_build_index.py ব্যর্থ — {passed}/{len(tests)} পাস, {len(failed)}টা ব্যর্থ:\n")
        for name, msg in failed:
            print(f"  ✗ {name}\n    {msg}\n")
        sys.exit(1)
    print(f"✓ test_build_index.py পাস — {passed}/{len(tests)}টা।")


if __name__ == "__main__":
    main()
