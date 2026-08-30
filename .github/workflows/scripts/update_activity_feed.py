#!/usr/bin/env python3
"""
main branch-এ push হওয়ার পর pin করা "লাইভ অ্যাক্টিভিটি ফিড" ইস্যুতে
(label: activity-feed) একটা নতুন এন্ট্রি যোগ করে। .github/workflows/activity-feed.yml
থেকে কল হয় — সব ইনপুট environment variable থেকে আসে, শেল স্ট্রিং-ইন্টারপোলেশন
এড়াতে (কমিট মেসেজে বিশেষ ক্যারেক্টার থাকলেও নিরাপদ থাকার জন্য)।
"""
import json
import os
import sys
import urllib.request
from datetime import datetime, timezone

GH_TOKEN = os.environ["GH_TOKEN"]
REPO = os.environ["REPO"]
COMMIT_MSG = os.environ.get("COMMIT_MSG", "")
COMMIT_SHA = os.environ["COMMIT_SHA"]
COMMIT_AUTHOR = os.environ.get("COMMIT_AUTHOR", "unknown")

API = f"https://api.github.com/repos/{REPO}"
MAX_ENTRIES = 40
START_MARKER = "<!-- FEED-START -->"
END_MARKER = "<!-- FEED-END -->"


def gh_request(method, path, body=None):
    url = f"{API}{path}"
    data = json.dumps(body).encode("utf-8") if body is not None else None
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Authorization", f"Bearer {GH_TOKEN}")
    req.add_header("Accept", "application/vnd.github+json")
    if data is not None:
        req.add_header("Content-Type", "application/json")
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode("utf-8"))


def main():
    issues = gh_request("GET", "/issues?state=open&labels=activity-feed&per_page=1")
    if not issues:
        print("::warning::activity-feed label-সহ কোনো খোলা ইস্যু পাওয়া যায়নি — স্কিপ করা হচ্ছে।")
        return

    issue_number = issues[0]["number"]
    current_body = issues[0]["body"] or ""

    short_sha = COMMIT_SHA[:7]
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    first_line = COMMIT_MSG.split("\n", 1)[0].strip()
    commit_url = f"https://github.com/{REPO}/commit/{COMMIT_SHA}"

    new_line = f"- **{timestamp}** — [`{short_sha}`]({commit_url}) {first_line} (@{COMMIT_AUTHOR})"

    start_idx = current_body.find(START_MARKER)
    end_idx = current_body.find(END_MARKER)

    if start_idx == -1 or end_idx == -1:
        print("::error::ইস্যু বডিতে FEED-START/FEED-END মার্কার পাওয়া যায়নি।")
        sys.exit(1)

    before = current_body[: start_idx + len(START_MARKER)]
    after = current_body[end_idx:]
    existing_block = current_body[start_idx + len(START_MARKER) : end_idx].strip()

    entries = [new_line]
    if existing_block:
        entries.extend(line for line in existing_block.split("\n") if line.strip())
    entries = entries[:MAX_ENTRIES]

    new_body = before + "\n\n" + "\n".join(entries) + "\n\n" + after

    gh_request("PATCH", f"/issues/{issue_number}", {"body": new_body})
    print(f"✅ ফিড ইস্যু #{issue_number} আপডেট হয়েছে।")


if __name__ == "__main__":
    main()
