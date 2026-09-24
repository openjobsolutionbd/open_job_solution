#!/usr/bin/env bash
# merge করার ঠিক আগে: আপনার branch + এই মুহূর্তের origin/main মিলিয়ে build/verify/টেস্ট চালায়।
#
# কেন: PR-এর CI শুধু PR খোলার সময়ের main-এর সাথে চেক করে। এর মধ্যে অন্য কোনো PR merge হয়ে
# গেলে দুটো আলাদাভাবে ঠিক PR একসাথে merge হয়ে build ভাঙতে পারে (বাস্তবে প্রমাণিত: একটা PR
# টপিক সরাল, আরেকটা সেই টপিকের লিংক দিল — দুটো একা পাস, একসাথে build ব্যর্থ)। তখন bot কিছু
# push করে না, আর সবার নতুন কনটেন্ট লাইভ হয় না। এই স্ক্রিপ্ট সেই সমন্বয়টা merge-এর আগেই ধরে।
#
# কীভাবে: অস্থায়ী git worktree-তে origin/main নিয়ে আপনার commit করা branch (HEAD) merge করে
# (commit ছাড়া) সেখানেই build_index.py + verify_site.py + টেস্টগুলো চালায়। আপনার working
# tree ছোঁয় না। commit না-করা পরিবর্তন এই চেকে নেই — আগে commit করুন।
#
# ব্যবহার: bash scripts/premerge_check.sh        (merge-এর ঠিক আগে; PR_GUIDE.md ধাপ ৬ দেখুন)
# exit code: 0 নিরাপদ | 1 সমস্যা (git সংঘর্ষ বা build/verify/টেস্ট ব্যর্থ) | 2 রিপো-ভুল | 3 fetch করা যায়নি
# সীমা: এটা "এই মুহূর্তের" main-এর সাথে; মাঝখানে main আরও এগোলে ঝুঁকি থেকে যায় — merge করেই দ্রুত
# ফল দেখুন; ব্যর্থ হলে update-wiki নিজে GitHub Issue (site-build-failed) খোলে।
set -uo pipefail

ROOT=$(git rev-parse --show-toplevel 2>/dev/null) || { echo "✗ git রিপোর ভেতরে চালান"; exit 2; }
cd "$ROOT" || exit 2

git fetch -q origin main 2>/dev/null || { echo "⚠️  origin/main fetch করা যায়নি — চেক করা গেল না (এটা 'নিরাপদ' নয়)"; exit 3; }
BRANCH_SHA=$(git rev-parse HEAD)
BASE=$(git rev-parse --short origin/main)
if [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ]; then
  echo "ℹ️  আপনার HEAD ও origin/main একই কমিট — মেলানোর কিছু নেই।"; exit 0
fi

WT=$(mktemp -d)
cleanup() { git worktree remove --force "$WT" >/dev/null 2>&1; rm -rf "$WT"; }
trap cleanup EXIT
git worktree add -q --detach "$WT" origin/main || { echo "✗ অস্থায়ী worktree বানানো গেল না"; exit 2; }
cd "$WT" || exit 2

echo "== $(git -C "$ROOT" rev-parse --abbrev-ref HEAD) (${BRANCH_SHA:0:7}) + origin/main ($BASE) মিলিয়ে চেক =="
if ! git -c user.name=premerge -c user.email=premerge@local merge --no-commit --no-ff "$BRANCH_SHA" >/tmp/premerge_merge.log 2>&1; then
  echo "✗ origin/main-এর সাথে git সংঘর্ষ — আগে নিজের branch-এ মেলান:"
  echo "    git fetch origin && git merge origin/main   (সংঘর্ষ মিলিয়ে, preflight, push)"
  git diff --name-only --diff-filter=U | sed 's/^/    সংঘর্ষ: /'
  exit 1
fi

run() {  # $1=লেবেল  $2...=কমান্ড
  local label=$1; shift
  if ! "$@" >/tmp/premerge_step.log 2>&1; then
    echo "✗ $label ব্যর্থ (আপনার branch একা ঠিক থাকলেও main-এর সাথে মিলিয়ে ব্যর্থ — অন্য একটা সাম্প্রতিক merge-এর সাথে সমন্বয়ের সমস্যা হতে পারে):"
    tail -n 14 /tmp/premerge_step.log | sed 's/^/    /'
    exit 1
  fi
  echo "✓ $label"
}
run "build_index.py" python3 scripts/build_index.py
if grep -q 'সতর্কতা' /tmp/premerge_step.log; then
  echo "⚠️  build সতর্কতা (ব্যর্থ নয়, কিন্তু দেখুন):"; grep 'সতর্কতা' /tmp/premerge_step.log | sed 's/^/    /'
fi
run "verify_site.py" python3 scripts/verify_site.py
run "verify_integration_bugs.py" python3 scripts/verify_integration_bugs.py
run "test_build_index.py" python3 scripts/test_build_index.py
[ -f scripts/test_pr_checks.py ] && run "test_pr_checks.py" python3 scripts/test_pr_checks.py
echo "✓ নিরাপদ — আপনার branch + origin/main ($BASE) মিলিয়েও build/verify/টেস্ট পাস। এখন merge করতে পারেন (এরপর update-wiki-র ফল দেখুন)।"
exit 0
