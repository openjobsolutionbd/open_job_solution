#!/usr/bin/env python3
"""
build_index.py-এর ফাংশনগুলোর জন্য ছোট, নির্দিষ্ট regression টেস্ট —
আগে ধরা পড়া bug (দেখুন BUGFIX.md) যেন চুপচাপ আবার ফিরে না আসে।

নিয়ম (AGENTS.md-এও লেখা আছে): ভবিষ্যতে build_index.py-তে নতুন কোনো bug
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
