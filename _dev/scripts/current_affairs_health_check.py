#!/usr/bin/env python3
"""
open_job_solution-এর current-affairs/docs/ (open_current_affairs থেকে
sync হওয়া লাইভ output) নিয়মিত স্বয়ংক্রিয়ভাবে পরীক্ষা করে।

এটা repo-র নিজের ফাইল সরাসরি পড়ে, লাইভ ওয়েবসাইটে HTTP fetch করে না —
কারণ:
  ১. প্রোডাকশন ডোমেইন এই repo-তে কোথাও ঘোষিত নেই (কোনো CNAME/homepage
     ফিল্ড পাওয়া যায়নি), তাই নির্ভরযোগ্যভাবে জানা নেই।
  ২. repo-ফাইল সরাসরি পড়া নেটওয়ার্ক-নির্ভরতা/false-alarm এড়ায় (deploy
     ল্যাগ, CDN cache, transient network এরর ইত্যাদির কারণে ভুল অ্যালার্ম
     হবে না)।

ভবিষ্যতে সত্যিকারের লাইভ ডোমেইন জানা থাকলে একটা HTTP-based স্তর যোগ করা
যায় (deploy নিজে সত্যিই সফল হয়েছে কিনা তার প্রমাণ), কিন্তু এই স্ক্রিপ্ট
সেটার বিকল্প না, সম্পূরক হবে।

ব্যর্থ হলে: exit code 1 + /tmp/health_check_report.md-এ বিস্তারিত রিপোর্ট
(GitHub Issue-এর বডি হিসেবে ব্যবহৃত হয়)।
"""
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
CA_DOCS = ROOT / "current-affairs" / "docs"
OLD_DOMAIN = "open-current-affairs.pages.dev"

problems = []


def check_old_domain():
    if not CA_DOCS.exists():
        problems.append(f"`current-affairs/docs/` ফোল্ডারই খুঁজে পাওয়া যায়নি — সিঙ্ক কি কখনো সফলভাবে চলেছে?")
        return
    offenders = []
    for path in CA_DOCS.rglob("*"):
        if path.is_file() and path.suffix in {".html", ".json", ".xml", ".txt", ".js"}:
            try:
                text = path.read_text(encoding="utf-8")
            except (UnicodeDecodeError, OSError):
                continue
            if OLD_DOMAIN in text:
                offenders.append(str(path.relative_to(ROOT)))
    if offenders:
        sample = "\n".join(f"  - `{f}`" for f in offenders[:10])
        more = f"\n  - (+আরও {len(offenders) - 10}টা)" if len(offenders) > 10 else ""
        problems.append(
            f"**পুরনো ডোমেইন ফিরে এসেছে ({len(offenders)}টা ফাইল):** `{OLD_DOMAIN}` পাওয়া গেছে —\n"
            f"{sample}{more}\n"
            f"  → সম্ভবত `open_current_affairs`-এর `scripts/build_index.py`-তে regression, "
            f"অথবা sync workflow-এর ডোমেইন-ফিক্স ধাপ বাদ পড়েছে।"
        )


def check_json_validity():
    json_files = ["topics-index.json", "ghotonaprobaho-index.json", "top-news-index.json", "mcq-index.json", "version.json"]
    for name in json_files:
        path = CA_DOCS / name
        if not path.exists():
            problems.append(f"**অনুপস্থিত ফাইল:** `current-affairs/docs/{name}` নেই — build/sync অসম্পূর্ণ থাকতে পারে।")
            continue
        try:
            json.loads(path.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError) as e:
            problems.append(f"**ভাঙা JSON:** `current-affairs/docs/{name}` পার্স করা যাচ্ছে না ({e})।")


def check_cache_scope():
    sw = CA_DOCS / "sw.js"
    if sw.exists():
        text = sw.read_text(encoding="utf-8")
        if not re.search(r'\.filter\(\s*\(?\w+\)?\s*=>\s*\w+\.startsWith\(\s*["\']oca-cache-["\']', text):
            problems.append(
                "**cache-scope রিগ্রেশন:** `current-affairs/docs/sw.js`-এর activate handler-এ "
                "'oca-cache-' প্রিফিক্স-ফিল্টার পাওয়া যায়নি — এটা আবার পুরো origin-এর cache মুছে "
                "ফেলতে পারে (অন্য অ্যাপের cache-সহ)।"
            )
    index_html = CA_DOCS / "index.html"
    if index_html.exists():
        text = index_html.read_text(encoding="utf-8")
        if "cache-refresh-btn" in text and not re.search(
            r'\.filter\(\s*\(?\w+\)?\s*=>\s*\w+\.startsWith\(\s*["\']oca-cache-["\']', text
        ):
            problems.append(
                "**cache-scope রিগ্রেশন:** `current-affairs/docs/index.html`-এর cache-refresh "
                "বাটনে 'oca-cache-' প্রিফিক্স-ফিল্টার পাওয়া যায়নি।"
            )


def check_sync_freshness():
    """
    version.json-এ কোনো timestamp নেই (শুধু {"version": "x.y.z"}), তাই
    git history থেকে current-affairs/docs/topics-index.json সর্বশেষ কবে
    বদলেছে তা দেখা হচ্ছে। এর জন্য workflow-এ 'fetch-depth: 0' (পূর্ণ
    history) থাকতে হবে — shallow clone-এ এই চেক ভুল ফলাফল দিতে পারে,
    তাই shallow হলে চেক স্কিপ করে সতর্ক করা হচ্ছে (silent no-op না)।
    """
    import subprocess

    try:
        is_shallow = subprocess.run(
            ["git", "rev-parse", "--is-shallow-repository"],
            cwd=ROOT, capture_output=True, text=True, check=True,
        ).stdout.strip()
    except (subprocess.CalledProcessError, FileNotFoundError):
        return

    if is_shallow == "true":
        problems.append(
            "**সিঙ্ক-ফ্রেশনেস চেক স্কিপড:** shallow clone-এ git history অসম্পূর্ণ, তাই সর্বশেষ "
            "সিঙ্কের তারিখ নির্ভরযোগ্যভাবে বের করা যায়নি — workflow checkout-এ `fetch-depth: 0` আছে কিনা দেখুন।"
        )
        return

    marker = CA_DOCS / "topics-index.json"
    if not marker.exists():
        return
    try:
        last_touch = subprocess.run(
            ["git", "log", "-1", "--format=%cI", "--", str(marker.relative_to(ROOT))],
            cwd=ROOT, capture_output=True, text=True, check=True,
        ).stdout.strip()
    except subprocess.CalledProcessError:
        return
    if not last_touch:
        return
    try:
        last_time = datetime.fromisoformat(last_touch)
    except ValueError:
        return
    age_days = (datetime.now(timezone.utc) - last_time.astimezone(timezone.utc)).days
    if age_days > 7:
        problems.append(
            f"**সিঙ্ক পুরনো:** `topics-index.json` সর্বশেষ বদলেছে {age_days} দিন আগে "
            f"({last_touch}) — sync workflow (প্রতি ৩ দিনে চলার কথা) সম্ভবত আটকে আছে বা "
            f"ব্যর্থ হচ্ছে। `open_current_affairs`-এর Actions ট্যাব চেক করুন।"
        )


def main():
    check_old_domain()
    check_json_validity()
    check_cache_scope()
    check_sync_freshness()

    if problems:
        report_lines = [
            f"স্বয়ংক্রিয় স্বাস্থ্য-পরীক্ষায় ({datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}) "
            f"{len(problems)}টা সমস্যা পাওয়া গেছে:\n",
        ]
        report_lines.extend(f"{i+1}. {p}\n" for i, p in enumerate(problems))
        report_lines.append(
            "\n---\n*এই Issue স্বয়ংক্রিয়ভাবে `current-affairs-health-check.yml` workflow থেকে "
            "তৈরি। পরবর্তী সফল পরীক্ষায় নিজে থেকেই বন্ধ হয়ে যাবে।*"
        )
        Path("/tmp/health_check_report.md").write_text("\n".join(report_lines), encoding="utf-8")
        print(f"✗ {len(problems)}টা সমস্যা পাওয়া গেছে — বিস্তারিত /tmp/health_check_report.md-এ।")
        for p in problems:
            print(f"  - {p.splitlines()[0]}")
        sys.exit(1)

    print("✓ স্বাস্থ্য-পরীক্ষা পাস — পুরনো ডোমেইন নেই, JSON ঠিক আছে, cache-scope ঠিক আছে, সিঙ্ক সাম্প্রতিক।")


if __name__ == "__main__":
    main()
