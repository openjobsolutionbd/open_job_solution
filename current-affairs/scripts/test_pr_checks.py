#!/usr/bin/env python3
"""pr_checks.py ও pr_build_warnings.py-এর বিশুদ্ধ (pure) ফাংশনের regression টেস্ট — নেটওয়ার্ক/টোকেন
ছাড়াই চলে। preflight.sh সবসময় চালায়; CI-তে pr-check.yml-এও একটা ধাপ।

কেন: ২০২৬-০৯-২১-এর নিজস্ব-পর্যালোচনায় ধরা পড়েছিল যে PR_GUIDE.md বলছিল সংঘর্ষ-চেক "একই ফাইল"
ধরে, অথচ `archive/`, `CHANGELOG.md` ইত্যাদি সেই তালিকার বাইরে ছিল — দাবি আর কোড আলাদা হয়ে গিয়েছিল।
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import pr_build_warnings as bw  # noqa: E402
import pr_checks as pc  # noqa: E402
import site_status as ss  # noqa: E402

_tests = []


def test(name):
    def deco(fn):
        _tests.append((name, fn))
        return fn
    return deco


@test("archive/ সংঘর্ষ-চেকের আওতায় (আগে বাদ ছিল — PR_GUIDE-এর দাবির সাথে কোড মিলছিল না)")
def _():
    assert pc.find_source_overlap(["archive/2026-09-p12.md"], ["archive/2026-09-p12.md", "x"]) == ["archive/2026-09-p12.md"]


@test("বিদ্যমান আচরণ অটুট: টপিক/ঘটনাপ্রবাহ/টপ নিউজ/MCQ ওভারল্যাপ ধরা পড়ে; অমিল ফাইলে নয়")
def _():
    mine = ["docs/topics/a.md", "docs/ghotonaprobaho/2026-09-x.md", "docs/top-news/2026-09-x.md", "docs/mcq/2026-09-x.md"]
    assert pc.find_source_overlap(mine, mine) == sorted(mine)
    assert pc.find_source_overlap(mine, ["docs/topics/other.md"]) == []


@test("CHANGELOG.md ইত্যাদি শেয়ার্ড নথি: সোর্স-সংঘর্ষে নয় (ব্যর্থ করে না), কিন্তু শেয়ার্ড-নোটে ধরা পড়ে")
def _():
    assert pc.find_source_overlap(["CHANGELOG.md"], ["CHANGELOG.md"]) == []
    assert pc.find_shared_overlap(["CHANGELOG.md", "docs/topics/a.md"], ["CHANGELOG.md"]) == ["CHANGELOG.md"]
    assert pc.find_shared_overlap(["scripts/x.py"], ["scripts/x.py"]) == []


@test("generated-ফাইল guard আগের মতোই কাজ করে")
def _():
    assert pc.find_generated(["docs/topics-index.json", "docs/topic/x/index.html", "docs/topics/a.md"]) == [
        "docs/topics-index.json", "docs/topic/x/index.html"]


@test("নতুন ফাইলের নাম: বৈধ সেশন/মাস-নাম পাস")
def _():
    ok = [
        ("docs/ghotonaprobaho/2026-09-tothyo-probaho-p12.md", "added"),
        ("docs/top-news/2026-09-p12.md", "added"),
        ("docs/mcq/2026-09-p10-11.md", "added"),
        ("docs/mcq/2026-09.md", "added"),
        ("archive/2026-09-p12.md", "added"),
        ("archive/2026-09.md", "added"),
    ]
    assert pc.bad_new_filenames(ok) == [], pc.bad_new_filenames(ok)


@test("নতুন ফাইলের নাম: পুরনো রেঞ্জ-নাম, অঙ্ক-শুরু স্কোপ, বড়-হাতের/আন্ডারস্কোর নাম, rename-ও ধরা পড়ে")
def _():
    bad = [
        ("docs/ghotonaprobaho/2026-09-15_2026-10-14.md", "added"),   # পুরনো রেঞ্জ-নাম
        ("docs/mcq/2026-09-12-15.md", "added"),                      # অঙ্ক-শুরু স্কোপ
        ("docs/top-news/2026-09-Tothyo.md", "added"),                # বড়-হাতের
        ("docs/top-news/2026-09-tothyo_p12.md", "added"),            # আন্ডারস্কোর
        ("docs/ghotonaprobaho/2026-09-p12.md", "renamed"),           # rename-ও যাচাই — নাম বৈধ, তাই এটা পাস
        ("docs/ghotonaprobaho/2026-04-25_2026-09-01.md", "renamed"), # পুরনো "rename করে extend" ফিরে এলে
    ]
    flagged = [n for n, _ in pc.bad_new_filenames(bad)]
    assert flagged == [
        "docs/ghotonaprobaho/2026-09-15_2026-10-14.md",
        "docs/mcq/2026-09-12-15.md",
        "docs/top-news/2026-09-Tothyo.md",
        "docs/top-news/2026-09-tothyo_p12.md",
        "docs/ghotonaprobaho/2026-04-25_2026-09-01.md",
    ], flagged


@test("বিদ্যমান ফাইল সম্পাদনা/মোছা নামের নিয়মে আটকায় না (পুরনো মাসিক ফাইলে ভুল-সংশোধন চলে); সাবফোল্ডার/অন্য ফোল্ডার উপেক্ষিত")
def _():
    keep = [
        ("docs/ghotonaprobaho/2026-04-25_2026-08-27.md", "modified"),
        ("docs/ghotonaprobaho/2026-01-22_2026-02-26.md", "removed"),
        ("docs/topics/AnyName.md", "added"),
        ("archive/sub/whatever.md", "added"),
    ]
    assert pc.bad_new_filenames(keep) == [], pc.bad_new_filenames(keep)


@test("pr_build_warnings — শুধু 'সতর্কতা:' লাইন, অনন্য, ক্রম ঠিক; অন্য লগ-লাইন বাদ")
def _():
    log = "তৈরি হলো: x\nসতর্কতা: এক\n  সতর্কতা: দুই  \nহ্যালো\nসতর্কতা: এক\n"
    assert bw.extract_warnings(log) == ["সতর্কতা: এক", "সতর্কতা: দুই"]
    assert bw.extract_warnings("কিছু নেই\nতৈরি হলো") == []


@test("pr_build_warnings — কমেন্টে মার্কার থাকে (আপডেট/মোছার জন্য), ৩০টার বেশি হলে ছাঁটা")
def _():
    body = bw.render(["সতর্কতা: ক"])
    assert body.startswith(bw.MARKER) and "সতর্কতা: ক" in body
    many = bw.render([f"সতর্কতা: {i}" for i in range(45)])
    assert "আরও 15টা" in many and many.count("\n- সতর্কতা:") == 30, many.count("\n- সতর্কতা:")


@test("site_status — সর্বশেষ run সফল ও Issue নেই হলে সব-ঠিক; ব্যর্থ run বা খোলা Issue থাকলে 🚨 ও সব-ঠিক নয়")
def _():
    good = [{"conclusion": "success", "head_sha": "abcdef1234", "created_at": "2026-09-21T10:00:00Z"}]
    lines, ok = ss.summarize(good, [])
    assert ok and "✓" in lines[0] and "abcdef1" in lines[0], lines
    bad = [{"conclusion": "failure", "head_sha": "1234567890", "created_at": "2026-09-21T11:00:00Z", "html_url": "https://x/run"}] + good
    lines, ok = ss.summarize(bad, [])
    assert not ok and "🚨" in lines[0] and "https://x/run" in lines[1], lines
    lines, ok = ss.summarize(good, [{"number": 7, "title": "T", "html_url": "https://x/i/7"}])
    assert not ok and any("#7" in l for l in lines), lines
    lines, ok = ss.summarize([], [])
    assert ok and "পাওয়া যায়নি" in lines[0], lines


@test("site_status — শুধু সর্বশেষ run-ই ধরা হয়: আগে ব্যর্থ থাকলেও সর্বশেষ সফল হলে সব-ঠিক")
def _():
    runs = [{"conclusion": "success", "head_sha": "aaaaaaa1", "created_at": "2026-09-21T12:00:00Z"},
            {"conclusion": "failure", "head_sha": "bbbbbbb2", "created_at": "2026-09-21T11:00:00Z"}]
    _lines, ok = ss.summarize(runs, [])
    assert ok


def main():
    failed = []
    for name, fn in _tests:
        try:
            fn()
        except AssertionError as e:
            failed.append((name, f"অ্যাসার্শন: {e}"))
        except Exception as e:  # noqa: BLE001
            failed.append((name, f"{type(e).__name__}: {e}"))
    if failed:
        print(f"✗ test_pr_checks.py ব্যর্থ — {len(_tests) - len(failed)}/{len(_tests)} পাস, {len(failed)}টা ব্যর্থ:")
        for n, e in failed:
            print(f"  ✗ {n}\n      {e}")
        sys.exit(1)
    print(f"✓ test_pr_checks.py পাস — {len(_tests)}/{len(_tests)}টা।")


if __name__ == "__main__":
    main()
