#!/usr/bin/env bash
# merge-এর সময়ের ফাঁক কমাতে: premerge_check.sh চালিয়ে সাথে সাথে (মানুষের হাতে অপেক্ষা
# ছাড়া) সেই একই commit merge করে দেয়। premerge_check.sh আলাদাভাবে চালিয়ে তারপর হাতে
# merge বোতাম চাপলে মাঝে যত সেকেন্ড যায়, ততক্ষণ অন্য কোনো PR merge হয়ে সমন্বয় বদলে
# যাওয়ার সুযোগ থাকে (এখনও পুরোপুরি বন্ধ করা যায় না — GitHub-এ আসল merge-queue ছাড়া এই
# ফাঁক আপেক্ষিকভাবে ছোট করাই সম্ভব, শূন্য করা নয়; residual risk-এর জন্যই update-wiki.yml-এর
# ব্যর্থতা-Issue আছে)।
#
# ব্যবহার: bash scripts/safe_merge.sh <PR_NUMBER> [merge_method]
#   merge_method: squash (ডিফল্ট) | merge | rebase
# env: GH_TOKEN (repo write)
# exit code: 0 merge হয়েছে | 1 premerge_check ব্যর্থ (merge হয়নি) | 2 ব্যবহার-ভুল |
#            3 API/নেটওয়ার্ক সমস্যা (merge হয়নি)
set -uo pipefail

if [ $# -lt 1 ]; then
  echo "ব্যবহার: bash scripts/safe_merge.sh <PR_NUMBER> [squash|merge|rebase]"
  exit 2
fi
PR="$1"
METHOD="${2:-squash}"
ROOT=$(git rev-parse --show-toplevel 2>/dev/null) || { echo "✗ git রিপোর ভেতরে চালান"; exit 2; }
cd "$ROOT" || exit 2
: "${GH_TOKEN:?GH_TOKEN সেট করুন (repo write অনুমতি সহ)}"

REPO="openjobsolutionbd/open_job_solution"
API="https://api.github.com/repos/$REPO"

pr_json=$(curl -s -H "Authorization: Bearer $GH_TOKEN" -H "Accept: application/vnd.github+json" "$API/pulls/$PR")
head_ref=$(python3 -c "import json,sys; print(json.load(sys.stdin)['head']['ref'])" <<< "$pr_json" 2>/dev/null)
head_sha=$(python3 -c "import json,sys; print(json.load(sys.stdin)['head']['sha'])" <<< "$pr_json" 2>/dev/null)
if [ -z "$head_ref" ] || [ -z "$head_sha" ]; then
  echo "✗ PR #$PR-এর তথ্য আনা যায়নি — PR নম্বর ও GH_TOKEN ঠিক আছে কিনা দেখুন।"
  exit 3
fi
echo "PR #$PR ← branch '$head_ref' (${head_sha:0:7})"

# ওই branch-টা checkout করে premerge_check.sh চালানো (আপনার local branch না ছুঁয়ে)
CUR=$(git rev-parse --abbrev-ref HEAD)
git fetch -q origin "$head_ref" || { echo "✗ origin থেকে '$head_ref' fetch করা গেল না"; exit 3; }
git checkout -q -B "_safe_merge_tmp_$PR" "origin/$head_ref"

echo "== premerge_check.sh চালানো হচ্ছে =="
if ! bash scripts/premerge_check.sh; then
  echo "✗ premerge_check ব্যর্থ — merge করা হলো না। উপরের ব্যর্থতা আগে ঠিক করুন।"
  git checkout -q "$CUR"
  git branch -q -D "_safe_merge_tmp_$PR" 2>/dev/null
  exit 1
fi
git checkout -q "$CUR"
git branch -q -D "_safe_merge_tmp_$PR" 2>/dev/null

# চেক পাস করার সাথে সাথে সেই একই head_sha merge — মাঝে যত কম সময়, সমন্বয়-ঝুঁকি তত কম
echo "== merge করা হচ্ছে (sha ${head_sha:0:7} নিশ্চিত করে, method=$METHOD) =="
resp=$(curl -s -X PUT -H "Authorization: Bearer $GH_TOKEN" -H "Accept: application/vnd.github+json" \
  "$API/pulls/$PR/merge" -d "{\"merge_method\":\"$METHOD\",\"sha\":\"$head_sha\"}")
merged=$(python3 -c "import json,sys; print(json.load(sys.stdin).get('merged', False))" <<< "$resp" 2>/dev/null)
if [ "$merged" = "True" ]; then
  msha=$(python3 -c "import json,sys; print(json.load(sys.stdin).get('sha','')[:7])" <<< "$resp")
  echo "✓ merge হয়েছে ($msha)। এবার Actions → 'Update wiki index' run-এর ফল দেখুন (session_status.sh চালালেও দেখা যাবে)।"
  exit 0
fi
echo "✗ merge ব্যর্থ — API-র বার্তা:"
python3 -c "import json,sys; d=json.load(sys.stdin); print('  ', d.get('message', d))" <<< "$resp"
echo "  সম্ভাব্য কারণ: এই মুহূর্তে PR-এর sha বদলে গেছে (কেউ নতুন push করেছে) — আবার চালান, অথবা হাতে merge/মেলান।"
exit 3
