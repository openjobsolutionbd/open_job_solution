#!/usr/bin/env python3
"""session_status.sh-এর বিশ্লেষণ অংশ।

দুই স্তরে কাজ করে:
  ১) git-ভিত্তিক (API ছাড়াই, rate-limit লাগে না): সব remote branch-এর ahead/behind,
     শেষ কমিট, কোন ফোল্ডার/ফাইল ছুঁয়েছে, এবং দুই branch একই ফাইলে হাত দিলে সংঘর্ষ-সতর্কতা।
  ২) GitHub API (GH_TOKEN থাকলে ভালো): PR নম্বর, claim, activity feed, merged/abandoned PR।
     API সীমা শেষ বা টোকেন ভুল হলে ১ম স্তর দিয়েই চলে, আর কারণ ও করণীয় বলে দেয়।

ব্যবহার: session_status.sh [স্কোপ-কীওয়ার্ড]   (যেমন: current-affairs, written-exam, 523)
"""
import json, os, re, subprocess, sys, time, urllib.error, urllib.request
from datetime import datetime, timedelta, timezone

REPO = os.environ.get("SS_REPO", "openjobsolutionbd/open_job_solution")
TOKEN = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN") or ""
SCOPE = (sys.argv[1] if len(sys.argv) > 1 else "").strip().lower()
ACTIVE_DAYS = 7          # এর বেশি পুরনো branch সংঘর্ষ-বিশ্লেষণে ধরা হয় না
CLAIM_STALE_DAYS = 3     # এর বেশি পুরনো claim 'পরিত্যক্ত?' চিহ্নিত
DHAKA = timezone(timedelta(hours=6))
# auto-generated ফাইল — একাধিক branch-এ বদলালে সংঘর্ষ ধরা হবে না (build থেকে আবার তৈরি হয়)
GENERATED = re.compile(
    r"(^|/)(sw\.js|version\.json|VERSION|version\.txt|package-lock\.json|CHANGELOG\.md|"
    r"topics-index\.json|ghotonaprobaho-index\.json|top-news-index\.json|job-solution\.js)$"
    r"|^current-affairs/docs/topic/|^docs/topic/"
)
warnings = []


def sh(*args):
    r = subprocess.run(args, capture_output=True, text=True)
    return r.stdout.strip() if r.returncode == 0 else ""


def age(ts):
    d = max(0, time.time() - ts)
    if d < 3600: return f"{int(d // 60)} মিনিট"
    if d < 86400: return f"{int(d // 3600)} ঘণ্টা"
    return f"{int(d // 86400)} দিন"


def iso_ts(s):
    return datetime.fromisoformat(s.replace("Z", "+00:00")).timestamp()


api_error = None


def get(url):
    """(data, error) ফেরত দেয়। একবার rate-limit ধরা পড়লে বাকি কল আর করে না।"""
    global api_error
    if api_error:
        return None, api_error
    h = {"Accept": "application/vnd.github+json", "User-Agent": "session-status"}
    if TOKEN:
        h["Authorization"] = f"Bearer {TOKEN}"
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=20) as r:
            return json.load(r), None
    except urllib.error.HTTPError as e:
        if e.code in (403, 429) and e.headers.get("X-RateLimit-Remaining") == "0":
            reset = e.headers.get("X-RateLimit-Reset")
            when = datetime.fromtimestamp(int(reset), DHAKA).strftime("%H:%M") if reset else "?"
            api_error = f"API rate-limit শেষ (রিসেট ~{when} ঢাকা সময়)" + ("" if TOKEN else " — GH_TOKEN সেট নেই")
        elif e.code == 401:
            api_error = "GH_TOKEN ভুল বা মেয়াদোত্তীর্ণ (HTTP 401)"
        else:
            api_error = f"GitHub API এরর HTTP {e.code}"
    except Exception as e:  # নেটওয়ার্ক ইত্যাদি
        api_error = f"API-তে পৌঁছানো যায়নি: {e}"
    return None, api_error


# ---------- ১) git-ভিত্তিক branch বিশ্লেষণ (API লাগে না) ----------
branches = []
fmt = "%(refname:short)|%(committerdate:unix)|%(authorname)|%(subject)"
for line in sh("git", "for-each-ref", f"--format={fmt}", "refs/remotes/origin").splitlines():
    name, ts, author, subj = (line.split("|", 3) + ["", "", ""])[:4]
    name = name.removeprefix("origin/")
    if name in ("HEAD", "main", "origin") or not ts.isdigit():
        continue
    behind, ahead = (sh("git", "rev-list", "--left-right", "--count", f"origin/main...origin/{name}") or "0 0").split()
    files = sh("git", "diff", "--name-only", f"origin/main...origin/{name}").splitlines() if int(ahead) else []
    # squash-merge হলে ahead কখনো ০ হয় না — তাই ফাইলগুলো main-এর সাথে হুবহু মিললে 'merged' ধরা হয়
    same = bool(files) and subprocess.run(["git", "diff", "--quiet", "origin/main", f"origin/{name}", "--", *files]).returncode == 0
    branches.append(dict(name=name, ts=int(ts), author=author, subj=subj,
                         ahead=int(ahead), behind=int(behind), files=files,
                         merged=(int(ahead) == 0 or same)))
branches.sort(key=lambda b: -b["ts"])

# ---------- ২) API ----------
base = f"https://api.github.com/repos/{REPO}"
open_prs, _ = get(f"{base}/pulls?state=open&per_page=50")
closed_prs, _ = get(f"{base}/pulls?state=closed&sort=updated&direction=desc&per_page=30")   # একবারই — merged/abandoned দুটোর জন্য
claims, _ = get(f"{base}/issues?state=open&labels=claim&per_page=30")
feed, _ = get(f"{base}/issues?state=open&labels=activity-feed&per_page=1")
if not isinstance(open_prs, list): open_prs = None
if not isinstance(closed_prs, list): closed_prs = None
if not isinstance(claims, list): claims = None

pr_by_head = {p["head"]["ref"]: p for p in (open_prs or [])}
merged_heads = {p["head"]["ref"] for p in (closed_prs or []) if p.get("merged_at")}

# ---------- আউটপুট ----------
if api_error:
    print(f"\n⚠️  {api_error}")
    print("    → নিচে শুধু git-ভিত্তিক তথ্য (branch/সংঘর্ষ) — PR নম্বর, claim, feed ও merged তালিকা বাদ।")
    if not TOKEN:
        print('    → সমাধান: export GH_TOKEN="<PAT>" দিয়ে আবার চালান (ওই একই কমান্ডে টোকেন দিন)।')
    warnings.append("GitHub API অনুপলব্ধ — claim/PR তথ্য যাচাই হয়নি")

if feed and isinstance(feed, list) and feed:
    body = feed[0].get("body") or ""
    s, e = body.find("<!-- FEED-START -->"), body.find("<!-- FEED-END -->")
    if s != -1 and e != -1:
        print("\n== 🟢 লাইভ অ্যাক্টিভিটি ফিড ==")
        print(f"  (সম্পূর্ণ ইতিহাস: https://github.com/{REPO}/issues/{feed[0]['number']})\n")
        print(body[s + 19:e].strip() or "  (এখনো কোনো এন্ট্রি নেই)")

print("\n== 🔒 সক্রিয় কাজের ক্লেইম (label: claim) ==")
if claims is None:
    print("  (API ছাড়া দেখা গেল না)")
elif not claims:
    print("  (কোনো সক্রিয় claim নেই)")
for c in claims or []:
    days = (time.time() - iso_ts(c["created_at"])) / 86400
    stale = days > CLAIM_STALE_DAYS
    print(f"  #{c['number']} {c['title']}  ({age(iso_ts(c['created_at']))} আগে){'  ⚠️ পরিত্যক্ত?' if stale else ''}")
    if stale:
        warnings.append(f"claim #{c['number']} {days:.0f} দিনের পুরনো — পরিত্যক্ত হতে পারে, ব্যবহারকারীকে জিজ্ঞেস করুন")

print("\n== খোলা branch (main বাদে) — git থেকে সরাসরি ==")
active, done, old = [], [], []
now = time.time()
for b in branches:
    known_merged = b["merged"] or b["name"] in merged_heads
    if b["name"] in pr_by_head:
        b["tag"] = f"PR #{pr_by_head[b['name']]['number']}"
    elif known_merged:
        b["tag"] = "✓ merged"
    elif api_error or open_prs is None:
        b["tag"] = "PR-অবস্থা অজানা"
    else:
        b["tag"] = "⚠️ PR নেই"
    if known_merged and b["name"] not in pr_by_head:
        done.append(b)
    elif now - b["ts"] > ACTIVE_DAYS * 86400 and b["name"] not in pr_by_head:
        old.append(b)
    else:
        active.append(b)
        if b["tag"] == "⚠️ PR নেই":
            warnings.append(f"branch '{b['name']}'-এ কমিট আছে কিন্তু PR নেই (আগের সেশনের অসম্পূর্ণ কাজ?)")


def where(b):
    dirs = {}
    for f in b["files"]:
        if not GENERATED.search(f):
            k = "/".join(f.split("/")[:2]) if f.startswith(("current-affairs/", "written-exam/", "bcs-mcq/", "primary-mcq/")) else f.split("/")[0]
            dirs[k] = dirs.get(k, 0) + 1
    return ", ".join(f"{k}({v})" for k, v in sorted(dirs.items(), key=lambda x: -x[1])[:3])


if not branches:
    print("  (main ছাড়া কোনো branch নেই)")
for b in active:
    print(f"  - {b['name']}  [{b['tag']}]  ↑{b['ahead']} ↓{b['behind']}  {age(b['ts'])} আগে  {where(b)}")
if not active and branches:
    print("  (সক্রিয় branch নেই)")
if old:
    print(f"  … আরও {len(old)}টা পুরনো (>{ACTIVE_DAYS} দিন), main-এ মেলেনি — হয় ফেলে দেওয়া, নয় অসম্পূর্ণ: "
          + ", ".join(b["name"] for b in old[:6]) + (" …" if len(old) > 6 else ""))
if done:
    print(f"  ✓ {len(done)}টা branch ইতিমধ্যে main-এ merge হয়েছে (মুছে ফেলা যায়)")

if open_prs is not None:
    print("\n== খোলা Pull Request ==")
    if not open_prs:
        print("  (কোনো খোলা PR নেই)")
    for p in open_prs:
        created = iso_ts(p["created_at"])
        ref = p["head"]["ref"]
        print(f"  #{p['number']} [{ref}] {p['title']}  ({age(created)} আগে)")
        if ref.startswith(("bot/", "auto/")) and time.time() - created > 86400:
            warnings.append(f"bot/auto PR #{p['number']} {age(created)} ধরে আটকে — Actions ট্যাবে 'Approve and run workflows' লাগতে পারে")

# ---------- সংঘর্ষ-বিশ্লেষণ ----------
touched = {}
for b in active:
    for f in b["files"]:
        if not GENERATED.search(f):
            touched.setdefault(f, []).append(b["name"])
clash = {f: n for f, n in touched.items() if len(n) > 1}
print(f"\n== ⚔️ সংঘর্ষ-ঝুঁকি (গত {ACTIVE_DAYS} দিনে সক্রিয় branch, একই ফাইলে একাধিক) ==")
if not clash:
    print("  ✓ কোনো ওভারল্যাপ নেই")
else:
    for f, names in sorted(clash.items())[:15]:
        print(f"  ⚠️ {f}  ← {', '.join(names)}")
    warnings.append(f"{len(clash)}টা ফাইলে একাধিক সক্রিয় branch হাত দিয়েছে — ওই ফাইল ধরার আগে আগে merge হওয়া অপেক্ষা করুন বা ব্যবহারকারীকে জানান")

if closed_prs is not None:
    print("\n== সর্বশেষ merge হওয়া PR ==")
    merged = [p for p in closed_prs if p.get("merged_at")][:10]
    for p in merged or []:
        print(f"  #{p['number']} {p['title']}  ({p['merged_at'][:10]})")
    if not merged: print("  (তথ্য নেই)")
    print("\n== সাম্প্রতিক বাতিল/abandoned PR (merge হয়নি) ==")
    ab = [p for p in closed_prs if not p.get("merged_at")][:5]
    for p in ab:
        print(f"  #{p['number']} [{p['head']['ref']}] {p['title']}  (বন্ধ: {p['closed_at'][:10]})")
    if not ab: print("  (কোনো abandoned PR নেই)")

# ---------- স্কোপ ফিল্টার ----------
if SCOPE:
    hits = []
    for b in branches:
        if SCOPE in b["name"].lower() or any(SCOPE in f.lower() for f in b["files"] if not GENERATED.search(f)):
            hits.append(f"branch {b['name']} ({age(b['ts'])} আগে)")
    for p in open_prs or []:
        if SCOPE in p["title"].lower() or SCOPE in p["head"]["ref"].lower():
            hits.append(f"PR #{p['number']} {p['title']}")
    for c in claims or []:
        if SCOPE in c["title"].lower():
            hits.append(f"claim #{c['number']} {c['title']}")
    print(f"\n== 🎯 স্কোপ '{SCOPE}'-এর সাথে মিলে যাওয়া চলমান কাজ ==")
    if hits:
        for h in hits: print(f"  • {h}")
        warnings.append(f"স্কোপ '{SCOPE}'-এ আগে থেকেই কাজ চলছে (উপরের তালিকা) — পুনরাবৃত্তি/ওভারল্যাপ এড়াতে মিলিয়ে দেখুন")
    else:
        print("  ✓ এই স্কোপে অন্য কারো চলমান কাজ পাওয়া যায়নি")

# ---------- সারসংক্ষেপ ----------
print("\n== 🚦 সারসংক্ষেপ ==")
extra = os.environ.get("SS_LOCAL_WARNINGS", "")
warnings = [w for w in extra.split("\n") if w] + warnings
if not warnings:
    print("  ✅ কোনো সমস্যা নেই — কাজ শুরু করা যায়।")
else:
    for w in warnings: print(f"  ⚠️ {w}")
