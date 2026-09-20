#!/usr/bin/env bash
# কাজ শুরুর আগে: আমি যে টপিক/ফাইলে হাত দেব, সেটা কি অন্য কোনো খোলা PR বা branch
# ইতিমধ্যে ধরে রেখেছে? (একাধিক সেশন একসাথে কাজ করলে সংঘর্ষ আগেই এড়াতে —
# PR_GUIDE.md-এর "একাধিক সেশন একসাথে কাজ" অংশ দেখুন।)
#
# ব্যবহার:
#   bash scripts/claim_check.sh <টপিক-slug | ফাইলপাথ> [আরও...]
#   উদাহরণ: bash scripts/claim_check.sh julai-jadughar
#           bash scripts/claim_check.sh docs/topics/julai-jadughar.md archive/2026-09-p10.md
# slug (কোনো '/' বা '.md' নেই) দিলে docs/topics/<slug>.md ধরা হয়।
#
# ফল: কেউ না ছুঁয়ে থাকলে exit 0; চেক করা না গেলে (নেটওয়ার্ক/rate-limit) exit 3। অন্য কোনো খোলা PR ওই ফাইল বদলাচ্ছে, বা কোনো
# branch-এর নামে ওই slug আছে — এমন হলে তালিকা দেখিয়ে exit 1 (অপেক্ষা করুন/আলাদা
# টপিক নিন)। GH_TOKEN সেট থাকলে ব্যবহার হয় (rate-limit বেশি); না থাকলেও চলে।
set -uo pipefail

if [ $# -eq 0 ]; then
  echo "ব্যবহার: bash scripts/claim_check.sh <টপিক-slug | ফাইলপাথ> [আরও...]"
  exit 2
fi

python3 - "$@" <<'PY'
import json, os, sys, urllib.request

REPO = "openjobsolutionbd/open_current_affairs"
args = sys.argv[1:]
targets = [a if ("/" in a or a.endswith(".md")) else f"docs/topics/{a}.md" for a in args]
slugs = [a for a in args if "/" not in a and not a.endswith(".md")]


def gh(path):
    headers = {"Accept": "application/vnd.github+json"}
    tok = os.environ.get("GH_TOKEN")
    if tok:
        headers["Authorization"] = f"Bearer {tok}"
    req = urllib.request.Request(f"https://api.github.com/repos/{REPO}{path}", headers=headers)
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read())


try:
    prs = gh("/pulls?state=open&per_page=100")
    branches = gh("/branches?per_page=100")
except Exception as e:  # নেটওয়ার্ক/rate-limit — চেক না করা গেলে নীরবে "ফাঁকা" বলা উচিত না
    print(f"⚠️  GitHub থেকে তথ্য আনা যায়নি ({e}) — এই চেক করা গেল না; নিজে খোলা PR/branch দেখে নিন।")
    print("   (GH_TOKEN সেট করলে rate-limit সমস্যা সাধারণত মেটে।)")
    sys.exit(3)  # "ফাঁকা" নয়, "অজানা" — তাই আলাদা exit code

hits, pr_branches = [], set()
for pr in prs:
    pr_branches.add(pr["head"]["ref"])
    files, page = [], 1
    while True:
        batch = gh(f"/pulls/{pr['number']}/files?per_page=100&page={page}")
        files += [f["filename"] for f in batch]
        if len(batch) < 100:
            break
        page += 1
    common = sorted(set(files) & set(targets))
    named = [s for s in slugs if s in pr["head"]["ref"]]
    if common or named:
        why = [f"ফাইল বদলাচ্ছে: {', '.join(common)}"] if common else []
        if named:
            why.append(f"branch-নামে slug আছে: {pr['head']['ref']}")
        hits.append(f"  • PR #{pr['number']} — {pr['title']}\n      " + " | ".join(why))

for b in branches:
    name = b["name"]
    if name == "main" or name in pr_branches:
        continue
    named = [s for s in slugs if s in name]
    if named:
        hits.append(f"  • খোলা branch (PR নেই): {name} — কেউ এই টপিকে কাজ শুরু করেছে")

if hits:
    print("⛔ অন্য কেউ ইতিমধ্যে এতে হাত দিয়েছে — নিজে শুরু না করে অপেক্ষা করুন বা আলাদা টপিক নিন:")
    print("\n".join(hits))
    sys.exit(1)
print(f"✓ ফাঁকা — {', '.join(targets)} কোনো খোলা PR/branch ছুঁয়ে নেই। কাজ শুরু করতে পারেন;")
print("  প্রথম commit-এর পরেই branch push করুন, যাতে অন্যরা আপনার দখল দেখতে পায়।")
PY
