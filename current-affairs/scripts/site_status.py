#!/usr/bin/env python3
"""সাইট build-এর অবস্থা: সর্বশেষ `update-wiki` run সফল কিনা, আর `site-build-failed` Issue খোলা আছে কিনা।

কেন: update-wiki ব্যর্থ হলে bot কিছু push করে না, ফলে কারও নতুন কনটেন্টই লাইভ হয় না — অথচ কোনো PR/
কমিটে তা দেখা যায় না (এই নীরব-stale অবস্থাই আসল সমস্যা ছিল)। session_status.sh প্রতিটা সেশনের শুরুতে
এটা চালায়, তাই ব্যর্থতা সবার আগে চোখে পড়ে।

ব্যবহার: python3 scripts/site_status.py    (GH_TOKEN থাকলে ব্যবহার হয়; না থাকলেও চলে)
exit code সবসময় 0 — এটা তথ্য দেয়, ব্লক করে না।
"""
import json
import os
import sys
import urllib.request

REPO = "openjobsolutionbd/open_job_solution"


def summarize(runs, issues):
    """runs: সম্পন্ন update-wiki run-এর তালিকা (নতুন আগে); issues: খোলা site-build-failed Issue।
    ফেরত: (লাইনের তালিকা, সব-ঠিক কিনা)।"""
    lines, ok = [], True
    if not runs:
        lines.append("  (কোনো সম্পন্ন update-wiki run পাওয়া যায়নি)")
        return lines, ok
    last = runs[0]
    when = (last.get("created_at") or "")[:16].replace("T", " ")
    sha = (last.get("head_sha") or "")[:7]
    if last.get("conclusion") == "success":
        lines.append(f"  ✓ সর্বশেষ update-wiki run সফল ({sha}, {when} UTC) — নতুন কনটেন্ট লাইভ হচ্ছে।")
    else:
        ok = False
        lines.append(
            f"  🚨 সর্বশেষ update-wiki run ব্যর্থ ({last.get('conclusion')}; কমিট {sha}, {when} UTC) — "
            "নতুন কনটেন্ট লাইভ সাইটে যাচ্ছে না!"
        )
        lines.append(f"     run: {last.get('html_url', '')}")
        lines.append("     আগে এটা ঠিক করুন (PR_GUIDE.md → 'সাইট build ব্যর্থ হলে'); নতুন কাজ পরে।")
    for i in issues or []:
        ok = False
        lines.append(f"  🚨 খোলা সতর্কতা-Issue #{i.get('number')}: {i.get('title')} — {i.get('html_url')}")
    return lines, ok


def _get(path):
    headers = {"Accept": "application/vnd.github+json"}
    tok = os.environ.get("GH_TOKEN")
    if tok:
        headers["Authorization"] = f"Bearer {tok}"
    req = urllib.request.Request(f"https://api.github.com/repos/{REPO}{path}", headers=headers)
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read())


def main():
    try:
        runs = _get("/actions/workflows/update-wiki.yml/runs?branch=main&status=completed&per_page=5").get("workflow_runs", [])
        issues = [i for i in _get("/issues?labels=site-build-failed&state=open&per_page=5") if "pull_request" not in i]
    except Exception as e:  # noqa: BLE001 — rate-limit/নেটওয়ার্ক; ব্যর্থ হলেও session_status থামবে না
        print(f"  ⚠️  সাইট build-এর অবস্থা আনা যায়নি ({e}) — Actions ট্যাবে নিজে দেখুন।")
        return 0
    lines, _ok = summarize(runs, issues)
    print("\n".join(lines))
    return 0


if __name__ == "__main__":
    sys.exit(main())
