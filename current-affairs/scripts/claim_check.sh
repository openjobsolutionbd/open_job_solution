#!/usr/bin/env bash
# একাধিক সেশনের জন্য টপিক/ফাইলের "দখল" — কাজ শুরুর আগে চেক, আর চাইলে পারমাণবিক (atomic) তালা।
# (PR_GUIDE.md-এর "একাধিক সেশন একসাথে কাজ" অংশ দেখুন।)
#
# ব্যবহার:
#   bash scripts/claim_check.sh <টপিক-slug | ফাইলপাথ> [আরও...]     # শুধু দেখা: কেউ ছুঁয়ে আছে কি?
#   bash scripts/claim_check.sh --claim <নাম> [আরও...]              # দেখে ফাঁকা হলে দখল নেওয়া (তালা)
#   bash scripts/claim_check.sh --release <নাম> [আরও...]            # কাজ শেষে/পরিত্যক্ত হলে দখল ছাড়া
#   উদাহরণ: bash scripts/claim_check.sh --claim julai-jadughar
#
# <নাম> = টপিক-slug বা আপনার সেশন-স্কোপ (ছোট-হাতের a-z, 0-9, '-'; কমপক্ষে ৩ অক্ষর)। slug
# (কোনো '/' বা '.md' নেই) দিলে docs/topics/<slug>.md ধরা হয়।
#
# কীভাবে তালা কাজ করে: --claim GitHub-এ `claim/<নাম>` নামে একটা branch বানায়। একই নামে দুটো
# ref বানানো যায় না — তাই দুই সেশন একই সময়ে চেষ্টা করলেও ঠিক একজনই পায় (আগে শুধু-দেখা
# চেকে দুজনেই "ফাঁকা" দেখত, কারণ কেউ push না করা পর্যন্ত দখল অদৃশ্য ছিল)। দখলের commit-বার্তায়
# মালিক (CLAIM_OWNER env, না থাকলে 'অজানা') ও সময় থাকে; তাই দেখার সময় বয়স জানা যায়,
# আর CLAIM_STALE_DAYS (ডিফল্ট ৩) দিনের বেশি পুরনো দখল "সম্ভবত পরিত্যক্ত" চিহ্নিত হয়।
# নিজের দখল (একই CLAIM_OWNER) হলে সেটা বাধা নয়। কাজ merge হলে/ছাড়লে --release করুন।
#
# exit code: 0 ফাঁকা/সফল | 1 অন্য কেউ ধরে আছে | 2 ব্যবহার-ভুল | 3 চেক/দখল করা যায়নি
# (নেটওয়ার্ক/rate-limit/টোকেন নেই — "অজানা", "ফাঁকা" নয়)। --claim/--release-এ GH_TOKEN
# (repo write) লাগে; শুধু-দেখায় না থাকলেও চলে (তবে rate-limit কম)।
set -uo pipefail

if [ $# -eq 0 ]; then
  sed -n '2,24p' "$0" | sed 's/^# \{0,1\}//'
  exit 2
fi

python3 - "$@" <<'PY'
import datetime as dt
import json
import os
import re
import sys
import urllib.error
import urllib.request

REPO = "openjobsolutionbd/open_job_solution"
STALE_DAYS = float(os.environ.get("CLAIM_STALE_DAYS", "3"))
OWNER = os.environ.get("CLAIM_OWNER", "").strip()
NAME_RE = re.compile(r"^[a-z0-9][a-z0-9-]{2,60}$")

argv = sys.argv[1:]
mode, args = "check", []
for a in argv:
    if a == "--claim":
        mode = "claim"
    elif a == "--release":
        mode = "release"
    else:
        args.append(a)
if not args:
    print("ব্যবহার: bash scripts/claim_check.sh [--claim|--release] <টপিক-slug | ফাইলপাথ> [আরও...]")
    sys.exit(2)


def gh(path, method="GET", data=None):
    """(status, json) ফেরত — HTTP-এরর হলেও ভাঙে না; নেটওয়ার্ক-এরর হলে (0, বার্তা)।"""
    headers = {"Accept": "application/vnd.github+json"}
    tok = os.environ.get("GH_TOKEN")
    if tok:
        headers["Authorization"] = f"Bearer {tok}"
    req = urllib.request.Request(
        f"https://api.github.com/repos/{REPO}{path}",
        method=method,
        data=None if data is None else json.dumps(data).encode(),
        headers=headers,
    )
    try:
        with urllib.request.urlopen(req, timeout=25) as r:
            raw = r.read()
            return r.status, (json.loads(raw) if raw else {})
    except urllib.error.HTTPError as e:
        try:
            body = json.loads(e.read())
        except Exception:
            body = {}
        return e.code, body
    except Exception as e:  # noqa: BLE001
        return 0, {"message": str(e)}


def unknown(msg):
    print(f"⚠️  {msg}")
    print("   (GH_TOKEN সেট করলে rate-limit সমস্যা সাধারণত মেটে। এটা 'ফাঁকা' নয় — নিজে খোলা PR/branch দেখে নিন।)")
    sys.exit(3)


def slug_in(text, slug):
    """শব্দ-সীমা মিলিয়ে: 'a' লিখলে 'spellcheck-bangla'-র ভেতরের 'a' মিলবে না।"""
    return re.search(rf"(?<![A-Za-z0-9]){re.escape(slug)}(?![A-Za-z0-9])", text) is not None


def parse_owner_time(commit):
    msg = commit.get("commit", {}).get("message", "")
    m = re.search(r"দখল:\s*(.+)", msg)
    owner = (m.group(1).strip() if m else "অজানা")
    date = commit.get("commit", {}).get("committer", {}).get("date", "")
    age = None
    if date:
        age = (dt.datetime.now(dt.timezone.utc) - dt.datetime.fromisoformat(date.replace("Z", "+00:00"))).total_seconds() / 86400
    return owner, age


targets = [a if ("/" in a or a.endswith(".md")) else f"docs/topics/{a}.md" for a in args]
slugs = [a for a in args if "/" not in a and not a.endswith(".md")]
# দখলের নাম: slug হলে সেটাই; ফাইলপাথ হলে ফাইলের নাম (.md ছাড়া) — নিয়ম মেলে কিনা যাচাই
claim_names = []
for a in args:
    base = a if ("/" not in a and not a.endswith(".md")) else re.sub(r"\.md$", "", a.rsplit("/", 1)[-1])
    claim_names.append(base)

if mode in ("claim", "release"):
    bad = [n for n in claim_names if not NAME_RE.match(n)]
    if bad:
        print(f"⛔ দখলের নাম বৈধ নয়: {', '.join(bad)} — ছোট-হাতের a-z, 0-9, '-' (৩–৬১ অক্ষর, অক্ষর/অঙ্ক দিয়ে শুরু)।")
        sys.exit(2)

# ---------------- release ----------------
if mode == "release":
    if not os.environ.get("GH_TOKEN"):
        unknown("দখল ছাড়তে GH_TOKEN (repo write) লাগে।")
    rc = 0
    for n in claim_names:
        st, body = gh(f"/git/refs/heads/claim/{n}", "DELETE")
        if st == 204:
            print(f"✓ দখল ছাড়া হলো: claim/{n}")
        elif st in (404, 422):
            print(f"ℹ️  '{n}' নামে কোনো দখল নেই (আগেই ছাড়া হয়েছে?)।")
        else:
            print(f"⚠️  claim/{n} ছাড়া গেল না (HTTP {st}: {body.get('message','')}) — টোকেনে write-অনুমতি আছে?")
            rc = 3
    sys.exit(rc)

# ---------------- দেখা (check / claim-এর প্রথম ধাপ) ----------------
st, prs = gh("/pulls?state=open&per_page=100")
if st != 200:
    unknown(f"খোলা PR-এর তালিকা আনা যায়নি (HTTP {st}: {prs.get('message','') if isinstance(prs, dict) else ''})")
st, branches = gh("/branches?per_page=100")
if st != 200:
    unknown(f"branch-তালিকা আনা যায়নি (HTTP {st})")

hits, pr_branches = [], set()
short = [s for s in slugs if len(s) < 4]
if short:
    print(f"ℹ️  slug খুব ছোট ({', '.join(short)}) — branch-নামে মিলানো বাদ; ফাইল-ওভারল্যাপ ও দখল দেখা হচ্ছে।")
long_slugs = [s for s in slugs if len(s) >= 4]

for pr in prs:
    pr_branches.add(pr["head"]["ref"])
    files, page = [], 1
    while True:
        st, batch = gh(f"/pulls/{pr['number']}/files?per_page=100&page={page}")
        if st != 200:
            unknown(f"PR #{pr['number']}-এর ফাইল-তালিকা আনা যায়নি (HTTP {st})")
        files += [f["filename"] for f in batch]
        if len(batch) < 100:
            break
        page += 1
    common = sorted(set(files) & set(targets))
    named = [s for s in long_slugs if slug_in(pr["head"]["ref"], s)]
    if common or named:
        why = [f"ফাইল বদলাচ্ছে: {', '.join(common)}"] if common else []
        if named:
            why.append(f"branch-নামে slug আছে: {pr['head']['ref']}")
        hits.append(f"  • PR #{pr['number']} — {pr['title']}\n      " + " | ".join(why))

own_claims = []
for b in branches:
    name = b["name"]
    if name == "main" or name in pr_branches:
        continue
    if name.startswith("claim/"):
        cslug = name[len("claim/"):]
        if cslug in claim_names or cslug in slugs:
            st, commit = gh(f"/commits/{b['commit']['sha']}")
            owner, age = parse_owner_time(commit if st == 200 else {})
            age_txt = f"{age:.1f} দিন আগে" if age is not None else "সময় অজানা"
            stale = age is not None and age > STALE_DAYS
            if OWNER and owner == OWNER:
                own_claims.append(cslug)
                continue
            hits.append(
                f"  • দখল আছে: {name} — মালিক: {owner}, {age_txt}"
                + (f"  ← {STALE_DAYS:g} দিনের বেশি পুরনো, সম্ভবত পরিত্যক্ত; মালিককে জিজ্ঞেস করুন বা `--release {cslug}`" if stale else "")
            )
        continue
    named = [s for s in long_slugs if slug_in(name, s)]
    if named:
        hits.append(f"  • খোলা branch (PR নেই): {name} — কেউ এই টপিকে কাজ শুরু করেছে")

if hits:
    print("⛔ অন্য কেউ ইতিমধ্যে এতে হাত দিয়েছে — নিজে শুরু না করে অপেক্ষা করুন বা আলাদা টপিক নিন:")
    print("\n".join(hits))
    sys.exit(1)

if mode == "check":
    tag = f" (আপনার নিজের দখল: {', '.join(own_claims)})" if own_claims else ""
    print(f"✓ ফাঁকা — {', '.join(targets)} কোনো খোলা PR/branch/দখল ছুঁয়ে নেই{tag}।")
    print("  একসাথে দুজন শুরু করলে দুজনেই এটা দেখবে — নিশ্চিত হতে `--claim` দিয়ে দখল নিন।")
    sys.exit(0)

# ---------------- claim: পারমাণবিক তালা ----------------
if not os.environ.get("GH_TOKEN"):
    unknown("দখল নিতে GH_TOKEN (repo write) লাগে।")
st, ref = gh("/git/ref/heads/main")
if st != 200:
    unknown(f"main-এর অবস্থা আনা যায়নি (HTTP {st})")
main_sha = ref["object"]["sha"]
st, mc = gh(f"/git/commits/{main_sha}")
if st != 200:
    unknown(f"main-এর tree আনা যায়নি (HTTP {st})")
now = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
rc = 0
for n in claim_names:
    if n in own_claims:
        print(f"✓ '{n}' আগে থেকেই আপনার দখলে (মালিক: {OWNER})।")
        continue
    msg = (
        f"claim: {n}\n\nদখল: {OWNER or 'অজানা'}\nসময়: {now}\n"
        f"কাজ শেষ/পরিত্যক্ত হলে ছাড়ুন: bash scripts/claim_check.sh --release {n}"
    )
    st, nc = gh("/git/commits", "POST", {"message": msg, "tree": mc["tree"]["sha"], "parents": [main_sha]})
    if st != 201:
        unknown(f"দখলের commit বানানো গেল না (HTTP {st}: {nc.get('message','')})")
    st, created = gh("/git/refs", "POST", {"ref": f"refs/heads/claim/{n}", "sha": nc["sha"]})
    if st == 201:
        print(f"🔒 দখল নেওয়া হলো: claim/{n} — এখন এটা আপনার। কাজ merge হলে/ছাড়লে: --release {n}")
    elif st == 422:  # Reference already exists — অন্য কেউ এইমাত্র/আগে নিয়েছে
        st2, b = gh(f"/branches/claim/{n}")
        owner, age = ("অজানা", None)
        if st2 == 200:
            st3, commit = gh(f"/commits/{b['commit']['sha']}")
            owner, age = parse_owner_time(commit if st3 == 200 else {})
        when = f"{age:.1f} দিন আগে" if age is not None else "সময় অজানা"
        print(f"⛔ '{n}' এইমাত্র/ইতিমধ্যে অন্য কেউ দখল করেছে (মালিক: {owner}, {when}) — আপনি পাননি।")
        rc = 1
    else:
        unknown(f"দখল নেওয়া গেল না (HTTP {st}: {created.get('message','')}) — টোকেনে write-অনুমতি আছে?")
sys.exit(rc)
PY
