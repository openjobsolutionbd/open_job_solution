#!/usr/bin/env python3
"""কনটেন্টের আসল কভারেজ দেখায় — ফাইলের নাম থেকে নয়, ফাইলের ভেতরের তারিখ/শিরোনাম থেকে।

কেন: ফাইলের নাম কভারেজ বলে না (যেমন `2026-10-tothyo-probaho-p04-05.md` ২৭ আগস্ট–২৬ সেপ্টেম্বরের ঘটনা ধরে,
কিন্তু নামে কোনো রেঞ্জ নেই)। নাম দেখে "কভারেজ ২৭ আগস্টে শেষ" বলার ভুল আগে হয়েছে (BUGFIX.md BUG-31)।

ব্যবহার:  python3 scripts/content_coverage.py
শুধু পড়ে, কিছু বদলায় না; কখনো ব্যর্থ হয় না (exit 0) — session_status.sh-এর শেষে চলে।
"""
import re
import sys
from pathlib import Path

DOCS = Path(__file__).resolve().parent.parent / "docs"
FOLDERS = [
    ("ghotonaprobaho", "ঘটনাপ্রবাহ"),
    ("top-news", "টপ নিউজ"),
    ("mcq", "MCQ"),
    ("proshnottor", "প্রশ্নোত্তর"),
]
BN_DIGITS = str.maketrans("০১২৩৪৫৬৭৮৯", "0123456789")
MONTHS = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
          "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]
BN_NUM = str.maketrans("0123456789", "০১২৩৪৫৬৭৮৯")
DATE_H = re.compile(r"^##\s+([০-৯0-9]{1,2})\s+(" + "|".join(MONTHS) + r")\s+([০-৯0-9]{4})\s*$", re.M)


def fmt(d):
    y, m, day = d
    return f"{str(day).translate(BN_NUM)} {MONTHS[m - 1]} {str(y).translate(BN_NUM)}"


def scan(path):
    text = path.read_text(encoding="utf-8", errors="replace")
    title = next((l[2:].strip() for l in text.splitlines() if l.startswith("# ")), "(শিরোনাম নেই)")
    rng = next((m for m in re.finditer(r"^\*\(([^)\n]+)\)\*\s*$", text, re.M)
                if re.search("|".join(MONTHS), m.group(1)) and re.search(r"[০-৯0-9]", m.group(1))), None)
    dates = []
    for day, mon, year in DATE_H.findall(text):
        dates.append((int(year.translate(BN_DIGITS)), MONTHS.index(mon) + 1, int(day.translate(BN_DIGITS))))
    return title, (rng.group(1) if rng else None), sorted(dates)


def main():
    print("== কনটেন্টের আসল কভারেজ (ফাইলের ভেতর থেকে পড়া — নাম থেকে অনুমান না) ==")
    for folder, label in FOLDERS:
        files = sorted((DOCS / folder).glob("*.md"))
        print(f"\n[{label}] docs/{folder}/ — {len(files)}টা ফাইল")
        latest = None
        for f in files:
            title, rng, dates = scan(f)
            span = f"{fmt(dates[0])} → {fmt(dates[-1])} ({len(dates)}টা তারিখ)" if dates else "তারিখ-শিরোনাম নেই (মাসিক/পেজ-ভিত্তিক ফাইল)"
            print(f"  - {f.name}: {title}")
            print(f"      তারিখ: {span}" + (f" | ফাইলের রেঞ্জ-লাইন: {rng}" if rng else ""))
            if dates and (latest is None or dates[-1] > latest):
                latest = dates[-1]
        if latest:
            print(f"  ▶ সর্বশেষ তারিখ: {fmt(latest)}")
    print("\nℹ️  এক ফাইল ম্যাগাজিনের শুধু নির্দিষ্ট পেজ কভার করতে পারে (শিরোনামে পেজ-নম্বর দেখুন) — "
          "'কভারেজ শেষ/ফাঁক আছে' বলার আগে এই তালিকা + archive/ মিলিয়ে নিন।")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception as e:  # স্ট্যাটাস-টুল কখনো কাজ আটকাবে না
        print(f"⚠️ content_coverage.py চলেনি: {e}")
        sys.exit(0)
