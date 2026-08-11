#!/usr/bin/env python3
"""
PR-safety চেক — GitHub Actions-এর pr-check.yml থেকে চালানো হয়।

দুইটা জিনিস যাচাই করে:
1. এই PR কোনো auto-generated ফাইল বদলাচ্ছে কিনা (এগুলো শুধু main-branch
   build workflow-এর তৈরি করার কথা, কোনো session-এর হাতে-edit করার কথা না)।
2. এই PR-এর ফাইলগুলোর সাথে অন্য কোনো *খোলা* PR-এর ফাইল ওভারল্যাপ করছে কিনা —
   মানে দুইটা Claude session একই সময়ে একই ফাইলে হাত দিয়েছে কিনা। এটা আসল
   git conflict না-ও হতে পারে (আলাদা লাইন এডিট করলে চুপচাপ মার্জ হয়ে যাবে),
   কিন্তু একই ফাইলে দুই সেশনের সমান্তরাল এডিট মানেই একজনের কাজ আরেকজনের
   কনটেক্সট না জেনে করা — তাই এটা risk হিসেবে গণ্য করে PR-কে ব্যর্থ দেখানো হয়,
   ব্যবহারকারী নিজে চোখে দেখে বুঝে সিদ্ধান্ত নেবেন।

exit code 0 = নিরাপদ, 1 = সমস্যা পাওয়া গেছে (PR কমেন্টে বিস্তারিত লেখা হয়)।
"""
import json
import os
import sys
import urllib.request

GENERATED_PREFIXES = [
    "docs/topics-index.json",
    "docs/ghotonaprobaho-index.json",
    "docs/top-news-index.json",
    "docs/sw.js",
    "docs/version.json",
    "docs/sitemap.xml",
    "docs/robots.txt",
    "docs/topic/",  # প্রতিটা টপিকের auto-generated SEO পাতা
]

SOURCE_PREFIXES = [
    "docs/topics/",
    "docs/ghotonaprobaho/",
    "docs/top-news/",
]

TOKEN = os.environ["GITHUB_TOKEN"]
REPO = os.environ["REPO"]
PR_NUMBER = os.environ["PR_NUMBER"]
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


def gh_files(pr_number):
    files, page = [], 1
    while True:
        batch = gh(f"/repos/{REPO}/pulls/{pr_number}/files?per_page=100&page={page}")
        if not batch:
            break
        files.extend(f["filename"] for f in batch)
        page += 1
    return files


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
    my_files = gh_files(PR_NUMBER)
    problems = []

    # ১. generated ফাইল guard
    touched_generated = [
        f for f in my_files if any(f.startswith(p) for p in GENERATED_PREFIXES)
    ]
    if touched_generated:
        problems.append(
            "### ⚠️ auto-generated ফাইল সরাসরি বদলানো হয়েছে\n"
            "এই ফাইলগুলো হাতে edit করা উচিত না — `build_index.py` main-এ merge "
            "হওয়ার পর নিজে থেকে বানায়:\n"
            + "\n".join(f"- `{f}`" for f in touched_generated)
            + "\n\nএগুলো এই PR থেকে বাদ দিন (শুধু `docs/topics/`, "
            "`docs/ghotonaprobaho/`, `docs/top-news/`-এর মূল ফাইল বদলান)।"
        )

    # ২. অন্য খোলা PR-এর সাথে ফাইল-সংঘর্ষ
    my_source_files = {f for f in my_files if any(f.startswith(p) for p in SOURCE_PREFIXES)}
    if my_source_files:
        open_prs = gh(f"/repos/{REPO}/pulls?state=open&per_page=100")
        for pr in open_prs:
            if str(pr["number"]) == str(PR_NUMBER):
                continue
            other_files = set(gh_files(pr["number"]))
            overlap = my_source_files & other_files
            if overlap:
                problems.append(
                    f"### ⚠️ অন্য খোলা কাজের (PR #{pr['number']} — {pr['title']}) "
                    "সাথে একই ফাইলে সংঘর্ষের ঝুঁকি\n"
                    "নিচের ফাইল(গুলো) এই PR আর PR #" + str(pr["number"]) + " — "
                    "দুইটাতেই একসাথে বদলানো হচ্ছে:\n"
                    + "\n".join(f"- `{f}`" for f in sorted(overlap))
                    + "\n\nদুইটা আলাদা Claude session হয়তো একই বিষয়ে একই সময়ে "
                    "কাজ করেছে। দুইটা কনটেন্ট মিলিয়ে দেখে একটাকে বাদ দিন বা "
                    "দুইটার সেরা অংশ একসাথে করে একটাতে merge করুন, তারপর আবার "
                    "চেষ্টা করুন।"
                )

    if problems:
        post_comment(
            "## 🔍 স্বয়ংক্রিয় নিরাপত্তা-চেক — মনোযোগ দরকার\n\n"
            + "\n\n---\n\n".join(problems)
            + "\n\n*এই কমেন্টটা স্বয়ংক্রিয়ভাবে তৈরি — merge করার আগে এগুলো ঠিক করুন।*"
        )
        print("সমস্যা পাওয়া গেছে, PR কমেন্টে বিস্তারিত দেখুন।", file=sys.stderr)
        sys.exit(1)

    print("✓ generated-ফাইল guard ও অন্য PR-এর সাথে সংঘর্ষ চেক — দুটোই পাস।")


if __name__ == "__main__":
    main()
