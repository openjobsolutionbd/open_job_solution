#!/usr/bin/env python3
"""build-লগের 'সতর্কতা:' লাইনগুলো PR-এ একটা কমেন্টে দেখায় — PR ব্যর্থ করে না।

কেন: build দুই সেশনের ডুপ্লিকেট/প্রায়-ডুপ্লিকেট/স্কোপ-নামের সমস্যায় শুধু stderr-এ সতর্কতা
দেয়। CI-লগে সেটা কেউ খোলে না; কিন্তু PR-লেখক সেশন PR-কমেন্ট পড়ে, আর merge-এর আগে ঠিক
করার সুযোগ ওখানেই। কমেন্টটা প্রতিবার আপডেট হয় (নতুন কমেন্ট জমে না); সতর্কতা না থাকলে
আগের কমেন্ট মুছে যায়।

ব্যবহার (pr-check.yml থেকে): python3 scripts/pr_build_warnings.py <build.log>
env: GITHUB_TOKEN, REPO, PR_NUMBER (না থাকলে কিছু না করে exit 0 — লোকালে নিরাপদ)।
"""
import json
import os
import sys
import urllib.request

MARKER = "<!-- build-warnings -->"
MAX_LINES = 30


def extract_warnings(log_text):
    """লগ থেকে 'সতর্কতা:' দিয়ে শুরু হওয়া অনন্য লাইন, ক্রম বজায় রেখে।"""
    seen, out = set(), []
    for ln in log_text.split("\n"):
        s = ln.strip()
        if s.startswith("সতর্কতা:") and s not in seen:
            seen.add(s)
            out.append(s)
    return out


def render(warnings):
    shown = warnings[:MAX_LINES]
    more = len(warnings) - len(shown)
    return (
        MARKER + "\n## ⚠️ build সতর্কতা (PR ব্যর্থ নয় — কিন্তু merge-এর আগে দেখে নিন)\n\n"
        + "\n".join(f"- {w}" for w in shown)
        + (f"\n- … আরও {more}টা (build-লগে)" if more > 0 else "")
        + "\n\n*ডুপ্লিকেট বা প্রায়-ডুপ্লিকেট হলে একটা বাদ দিন; স্কোপ-নামের সতর্কতা হলে ফাইলের নাম ঠিক করুন "
        "(`PR_GUIDE.md` → একাধিক সেশন একসাথে কাজ)। এই কমেন্ট স্বয়ংক্রিয় ও প্রতি push-এ আপডেট হয়।*"
    )


def _call(method, path, token, data=None):
    req = urllib.request.Request(
        f"https://api.github.com{path}",
        method=method,
        data=None if data is None else json.dumps(data).encode(),
        headers={
            "Authorization": f"Bearer {token}",
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        raw = r.read()
        return json.loads(raw) if raw else {}


def main(argv):
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN", "")
    repo, pr = os.environ.get("REPO", ""), os.environ.get("PR_NUMBER", "")
    if not (token and repo and pr):
        print("(GITHUB_TOKEN/REPO/PR_NUMBER নেই — PR-কমেন্ট বাদ)")
        return 0
    log = ""
    if argv and os.path.exists(argv[0]):
        with open(argv[0], encoding="utf-8", errors="replace") as f:
            log = f.read()
    warnings = extract_warnings(log)
    existing, page = None, 1
    while existing is None:
        batch = _call("GET", f"/repos/{repo}/issues/{pr}/comments?per_page=100&page={page}", token)
        if not batch:
            break
        existing = next((c for c in batch if MARKER in c.get("body", "")), None)
        if len(batch) < 100:
            break
        page += 1
    if warnings:
        body = render(warnings)
        if existing:
            _call("PATCH", f"/repos/{repo}/issues/comments/{existing['id']}", token, {"body": body})
        else:
            _call("POST", f"/repos/{repo}/issues/{pr}/comments", token, {"body": body})
        print(f"⚠️  {len(warnings)}টা build সতর্কতা PR-কমেন্টে দেখানো হলো (ব্যর্থ নয়)।")
    else:
        if existing:
            _call("DELETE", f"/repos/{repo}/issues/comments/{existing['id']}", token)
        print("✓ build সতর্কতা নেই।")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
