#!/usr/bin/env python3
"""
PR-safety চেক — GitHub Actions-এর pr-check.yml থেকে চালানো হয়।

চারটা জিনিস যাচাই করে:
1. এই PR কোনো auto-generated ফাইল বদলাচ্ছে কিনা (এগুলো শুধু main-branch
   build workflow-এর তৈরি করার কথা, কোনো session-এর হাতে-edit করার কথা না)।
2. এই PR-এর ফাইলগুলোর সাথে অন্য কোনো *খোলা* PR-এর ফাইল ওভারল্যাপ করছে কিনা —
   মানে দুইটা Claude session একই সময়ে একই ফাইলে হাত দিয়েছে কিনা। এটা আসল
   git conflict না-ও হতে পারে (আলাদা লাইন এডিট করলে চুপচাপ মার্জ হয়ে যাবে),
   কিন্তু একই ফাইলে দুই সেশনের সমান্তরাল এডিট মানেই একজনের কাজ আরেকজনের
   কনটেক্সট না জেনে করা — তাই এটা risk হিসেবে গণ্য করে PR-কে ব্যর্থ দেখানো হয়,
   ব্যবহারকারী নিজে চোখে দেখে বুঝে সিদ্ধান্ত নেবেন।
   (ধরা হয়: docs/topics, docs/ghotonaprobaho, docs/top-news, docs/mcq, docs/proshnottor, archive।)
3. নতুন (added/renamed) ফাইলের নাম একাধিক-সেশন নিয়ম মানছে কিনা — ঘটনাপ্রবাহ/টপ নিউজ/
   MCQ/আর্কাইভে `<YYYY-MM>-<স্কোপ>.md` (স্কোপ ইংরেজি ছোট-অক্ষরে শুরু)। নইলে build
   ফাইলটা মাসের সেটে জোড়া লাগায় না, বা পুরনো "rename করে extend" নিয়ম ফিরে আসে।
4. শেয়ার্ড নথিতে (CHANGELOG.md, BUGFIX.md, EDITORIAL_MEMORY.md, AGENTS.md, PR_GUIDE.md,
   PROJECT.md, README.md, MCQ_GUIDE.md) অন্য খোলা PR-এর সাথে ওভারল্যাপ — এটা শুধু
   ℹ️ তথ্য-নোট (PR ব্যর্থ করে না), কারণ এগুলো সিস্টেম-বদলের সময় সম্পাদিত হয় ও সাধারণত একজনই ছোঁয়।

exit code 0 = নিরাপদ, 1 = সমস্যা পাওয়া গেছে (PR কমেন্টে বিস্তারিত লেখা হয়)।
"""
import json
import os
import re
import sys
import urllib.request

# ২০২৬-০৯ subtree migration-এর পর এই প্রজেক্ট আর repo-র রুটে নেই —
# openjobsolutionbd/open_job_solution-এর ভেতরে current-affairs/ সাবফোল্ডারে থাকে।
# GitHub PR files API রিপো-রুট-থেকে-আপেক্ষিক পাথ দেয় (যেমন
# "current-affairs/docs/topics/2026-09-x.md"), তাই সব প্রিফিক্সে এই সাবফোল্ডার
# জোড়া লাগানো হলো — নইলে এই গার্ডগুলো নিঃশব্দে কিছুই ধরবে না।
SUBTREE_PREFIX = "current-affairs/"

GENERATED_PREFIXES = [
    SUBTREE_PREFIX + "docs/topics-index.json",
    SUBTREE_PREFIX + "docs/ghotonaprobaho-index.json",
    SUBTREE_PREFIX + "docs/top-news-index.json",
    SUBTREE_PREFIX + "docs/sw.js",
    SUBTREE_PREFIX + "docs/version.json",
    SUBTREE_PREFIX + "docs/sitemap.xml",
    SUBTREE_PREFIX + "docs/robots.txt",
    SUBTREE_PREFIX + "docs/topic/",  # প্রতিটা টপিকের auto-generated SEO পাতা
    SUBTREE_PREFIX + "docs/mcq-index.json",  # docs/mcq/*.md থেকে compile_mcq() যা বানায় — আগে এখানে বাদ পড়েছিল
]

SOURCE_PREFIXES = [
    SUBTREE_PREFIX + "docs/topics/",
    SUBTREE_PREFIX + "docs/ghotonaprobaho/",
    SUBTREE_PREFIX + "docs/top-news/",
    SUBTREE_PREFIX + "docs/mcq/",  # আগে এখানে বাদ পড়েছিল — MCQ ফাইলে সমান্তরাল-সেশন সংঘর্ষ ধরা পড়ত না
    SUBTREE_PREFIX + "docs/proshnottor/",  # সাইটে wire করা না হলেও এটা আসল সোর্স/আর্কাইভ কনটেন্ট, তাই একই কারণে দরকার
    SUBTREE_PREFIX + "archive/",  # আগে বাদ ছিল — আর্কাইভ-ফাইলে সমান্তরাল-সেশন সংঘর্ষ ধরা পড়ত না (২০২৬-০৯-২১)
]

# শেয়ার্ড নথি: ওভারল্যাপ হলে শুধু তথ্য-নোট (ব্যর্থ করে না)। এগুলোও subtree-এর ভেতরেই থাকে।
SHARED_FILES = {
    SUBTREE_PREFIX + f for f in (
        "CHANGELOG.md", "BUGFIX.md", "EDITORIAL_MEMORY.md", "AGENTS.md",
        "PR_GUIDE.md", "PROJECT.md", "README.md", "MCQ_GUIDE.md",
    )
}

# নতুন ফাইলের নামের নিয়ম (একাধিক-সেশন ব্যবস্থা): মাস + '-' + ইংরেজি-অক্ষরে-শুরু স্কোপ।
SESSION_NAME_RE = re.compile(r"^\d{4}-\d{2}-[a-z][a-z0-9-]*\.md$")
MONTH_OR_SESSION_RE = re.compile(r"^\d{4}-\d{2}(-[a-z][a-z0-9-]*)?\.md$")
NAME_RULES = [
    (SUBTREE_PREFIX + "docs/ghotonaprobaho/", SESSION_NAME_RE, "`docs/ghotonaprobaho/<YYYY-MM>-<স্কোপ>.md`"),
    (SUBTREE_PREFIX + "docs/top-news/", SESSION_NAME_RE, "`docs/top-news/<YYYY-MM>-<স্কোপ>.md`"),
    (SUBTREE_PREFIX + "docs/mcq/", MONTH_OR_SESSION_RE, "`docs/mcq/<YYYY-MM>-<স্কোপ>.md` (বা পুরো মাস একজনের হলে `<YYYY-MM>.md`)"),
    (SUBTREE_PREFIX + "archive/", MONTH_OR_SESSION_RE, "`archive/<YYYY-MM>-<স্কোপ>.md` (বা `<YYYY-MM>.md`)"),
]

# import-এ ভাঙে না (scripts/test_pr_checks.py এটা import করে); আসল চালানোয় main() চেক করে।
TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO = os.environ.get("REPO", "")
PR_NUMBER = os.environ.get("PR_NUMBER", "")
API = "https://api.github.com"


def gh(path, method="GET"):
    req = urllib.request.Request(
        f"{API}{path}",
        method=method,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Accept": "application/vnd.github+json",
        },
    )
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read())


def gh_files_status(pr_number):
    """[(ফাইলনাম, status)] — status: added/modified/removed/renamed ইত্যাদি।"""
    files, page = [], 1
    while True:
        batch = gh(f"/repos/{REPO}/pulls/{pr_number}/files?per_page=100&page={page}")
        if not batch:
            break
        files.extend((f["filename"], f.get("status", "")) for f in batch)
        page += 1
    return files


def gh_files(pr_number):
    return [name for name, _status in gh_files_status(pr_number)]


# ---- বিশুদ্ধ (pure) ফাংশন: নেটওয়ার্ক ছাড়া টেস্ট করা যায় ----

def find_generated(files):
    return [f for f in files if any(f.startswith(p) for p in GENERATED_PREFIXES)]


def source_files(files):
    return {f for f in files if any(f.startswith(p) for p in SOURCE_PREFIXES)}


def find_source_overlap(my_files, other_files):
    return sorted(source_files(my_files) & set(other_files))


def find_shared_overlap(my_files, other_files):
    return sorted((set(my_files) & SHARED_FILES) & set(other_files))


def bad_new_filenames(files_with_status):
    """নতুন (added/renamed) ফাইলের নাম নিয়ম না মানলে [(ফাইল, প্রত্যাশিত-নাম-বর্ণনা)]।
    বিদ্যমান ফাইল সম্পাদনা (modified/removed) এখানে ধরা হয় না — পুরনো মাসিক ফাইলে ভুল-সংশোধন চলে।"""
    bad = []
    for name, status in files_with_status:
        if status not in ("added", "renamed"):
            continue
        for prefix, rx, human in NAME_RULES:
            if name.startswith(prefix) and "/" not in name[len(prefix):]:
                if not rx.match(name[len(prefix):]):
                    bad.append((name, human))
                break
    return bad


def post_comment(body):
    req = urllib.request.Request(
        f"{API}/repos/{REPO}/issues/{PR_NUMBER}/comments",
        method="POST",
        data=json.dumps({"body": body}).encode(),
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json",
        },
    )
    urllib.request.urlopen(req)


def main():
    if not (TOKEN and REPO and PR_NUMBER):
        print("GITHUB_TOKEN/REPO/PR_NUMBER env সেট নেই — এটা GitHub Actions-এ চালানোর কথা।", file=sys.stderr)
        sys.exit(2)
    my_status = gh_files_status(PR_NUMBER)
    my_files = [n for n, _ in my_status]
    problems, notes = [], []

    # ১. generated ফাইল guard — এখন main-এর branch protection-এর কারণে কোনো bot
    # সরাসরি push করে না; PR-লেখককেই build_index.py চালিয়ে generated ফাইলসহ
    # commit করতে হয়, তাই সেগুলো এখানে বাদ দেওয়ার দরকার নেই — উল্টো generated
    # আউটপুট বাসি (stale) কিনা সেটা validate ধাপে (rebuild + diff) যাচাই হয়।
    touched_generated = find_generated(my_files)
    if touched_generated:
        problems.append(
            "### ⚠️ auto-generated ফাইল সরাসরি বদলানো হয়েছে (হাতে না, build দিয়ে বানান)\n"
            "নিচের ফাইলগুলো হাতে-এডিট না করে PR-এর build/verify ধাপ নিজে থেকে "
            "`build_index.py` চালিয়ে regenerate করবে — লোকালি চালিয়ে diff commit করুন:\n"
            + "\n".join(f"- `{f}`" for f in touched_generated)
        )

    # ২. অন্য খোলা PR-এর সাথে ফাইল-সংঘর্ষ (+ শেয়ার্ড নথির তথ্য-নোট)
    if source_files(my_files) or (set(my_files) & SHARED_FILES):
        open_prs = gh(f"/repos/{REPO}/pulls?state=open&per_page=100")
        for other_pr in open_prs:
            if str(other_pr["number"]) == str(PR_NUMBER):
                continue
            other_files = gh_files(other_pr["number"])
            overlap = find_source_overlap(my_files, other_files)
            if overlap:
                problems.append(
                    f"### ⚠️ অন্য খোলা কাজের (PR #{other_pr['number']} — {other_pr['title']}) "
                    "সাথে একই ফাইলে সংঘর্ষের ঝুঁকি\n"
                    "নিচের ফাইল(গুলো) এই PR আর PR #" + str(other_pr["number"]) + " — "
                    "দুইটাতেই একসাথে বদলানো হচ্ছে:\n"
                    + "\n".join(f"- `{f}`" for f in overlap)
                    + "\n\nদুইটা আলাদা Claude session হয়তো একই বিষয়ে একই সময়ে "
                    "কাজ করেছে। দুইটা কনটেন্ট মিলিয়ে দেখে একটাকে বাদ দিন বা "
                    "দুইটার সেরা অংশ একসাথে করে একটাতে merge করুন, তারপর আবার "
                    "চেষ্টা করুন।"
                )
            shared = find_shared_overlap(my_files, other_files)
            if shared:
                notes.append(
                    f"### ℹ️ শেয়ার্ড নথিতে PR #{other_pr['number']}-এর সাথে ওভারল্যাপ (তথ্য — ব্যর্থ করছে না)\n"
                    + "\n".join(f"- `{f}`" for f in shared)
                    + "\n\nএগুলো দুই PR-এ একসাথে বদলাচ্ছে; একটা merge হলে অন্যটাকে `git fetch origin && "
                    "git merge origin/main` করে মেলাতে হতে পারে (`CHANGELOG.md`-এ `.gitattributes`-এর union merge কাজ করে)।"
                )

    # ৩. নতুন ফাইলের নামের নিয়ম
    bad = bad_new_filenames(my_status)
    if bad:
        problems.append(
            "### ⚠️ নতুন ফাইলের নাম একাধিক-সেশন নিয়ম মানছে না\n"
            + "\n".join(f"- `{n}` → হওয়া উচিত {h}" for n, h in bad)
            + "\n\nস্কোপ = আপনার branch-এর slug (ইংরেজি ছোট-অক্ষরে শুরু, শুধু `a-z0-9-`)। "
            "নইলে build ফাইলটা মাসের সেটে জোড়া লাগায় না, বা আগের \"rename করে extend\" "
            "নিয়ম ফিরে আসে (দেখুন `PR_GUIDE.md` → একাধিক সেশন একসাথে কাজ)।"
        )

    if problems or notes:
        head = ("## 🔍 স্বয়ংক্রিয় নিরাপত্তা-চেক — মনোযোগ দরকার\n\n" if problems
                else "## 🔍 স্বয়ংক্রিয় নিরাপত্তা-চেক — তথ্য\n\n")
        foot = ("\n\n*এই কমেন্টটা স্বয়ংক্রিয়ভাবে তৈরি — merge করার আগে এগুলো ঠিক করুন।*" if problems
                else "\n\n*এই কমেন্টটা স্বয়ংক্রিয়ভাবে তৈরি — শুধু জানানোর জন্য, PR ব্যর্থ নয়।*")
        post_comment(head + "\n\n---\n\n".join(problems + notes) + foot)
    if problems:
        print("সমস্যা পাওয়া গেছে, PR কমেন্টে বিস্তারিত দেখুন।", file=sys.stderr)
        sys.exit(1)

    print("✓ generated-ফাইল guard, অন্য PR-এর সাথে সংঘর্ষ ও নতুন-ফাইলের নাম চেক — সব পাস।"
          + (" (শেয়ার্ড-নথি তথ্য-নোট পোস্ট হয়েছে।)" if notes else ""))


if __name__ == "__main__":
    main()
