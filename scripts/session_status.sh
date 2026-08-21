#!/usr/bin/env bash
# যেকোনো নতুন টাস্ক শুরু করার আগে এটা চালান — বিশেষ করে যদি:
#   - এটা একটা নতুন চ্যাট/সেশন হয়
#   - এই একই চ্যাটে আগের কোনো মেসেজ edit করে আবার শুরু করা হয়
#   - অন্য কোনো Claude অ্যাকাউন্ট/চ্যাট থেকে একই রিপোতে কাজ হয়ে থাকতে পারে
#
# কারণ: local sandbox-এর অবস্থা কথোপকথনের সাথে সবসময় মেলে না —
# একমাত্র জিনিস যেটা সবসময় নির্ভরযোগ্য তা হলো GitHub-এর remote অবস্থা।
# main branch এখন protected (branch+PR+check বাধ্যতামূলক), তাই
# open_current_affairs-এর মতোই এখানেও একই সতর্কতা দরকার।
#
# এটা কিছু ব্লক করে না — শুধু বর্তমান বাস্তব অবস্থা এক নজরে দেখায়,
# যাতে নতুন কাজ শুরুর আগে ভুল ধারণা নিয়ে এগোনো না হয়।
set -uo pipefail
cd "$(dirname "$0")/.."

echo "== রিপোর বর্তমান অবস্থা =="

git fetch origin main --quiet 2>/tmp/session_fetch.log
if [ $? -ne 0 ]; then
  echo "✗ git fetch ব্যর্থ — নেটওয়ার্ক সমস্যা হতে পারে:"
  cat /tmp/session_fetch.log
  exit 1
fi

LOCAL=$(git rev-parse HEAD 2>/dev/null)
REMOTE=$(git rev-parse origin/main 2>/dev/null)
AHEAD=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo "?")
BEHIND=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "?")

echo "local HEAD:  $LOCAL"
echo "remote HEAD: $REMOTE"

if [ "$LOCAL" = "$REMOTE" ]; then
  echo "✓ local ও remote সমান।"
elif [ "$AHEAD" != "0" ] && [ "$AHEAD" != "?" ]; then
  echo "⚠️  remote-এ $AHEAD টা কমিট আছে যা local-এ নেই — সম্ভবত অন্য কোনো অ্যাকাউন্ট/চ্যাট থেকে push হয়েছে।"
  echo "    নতুন কাজ শুরুর আগে 'git rebase origin/main' করে নিন।"
fi
if [ "$BEHIND" != "0" ] && [ "$BEHIND" != "?" ]; then
  echo "ℹ️  local-এ $BEHIND টা কমিট আছে যা এখনো push হয়নি (আগের কোনো session-এর অসম্পূর্ণ কাজ হতে পারে)।"
fi

echo ""
echo "== uncommitted পরিবর্তন (working directory) =="
CHANGES=$(git status --short)
if [ -z "$CHANGES" ]; then
  echo "✓ working directory পরিষ্কার — কোনো stray/অসম্পূর্ণ পরিবর্তন নেই।"
else
  echo "⚠️  নিচের পরিবর্তনগুলো আছে কিন্তু কমিট হয়নি — এগুলো এই সেশনের নতুন কাজ নাকি"
  echo "    আগের কোনো abandoned branch-এর অবশিষ্টাংশ, তা নিশ্চিত না হয়ে এগোবেন না:"
  echo "$CHANGES"
fi

echo ""
echo "সর্বশেষ ৩টা কমিট:"
git log --oneline -3

echo ""
echo "== অন্য সেশন/অ্যাকাউন্ট ইতিমধ্যে কোন কাজ করে রেখেছে কিনা (GitHub-এর লাইভ অবস্থা) =="
echo "কোনো নতুন কাজ শুরুর আগে নিচের তালিকায় মিলিয়ে দেখুন — একই বিষয়ে branch/PR"
echo "আগে থেকে থাকলে বা merge হয়ে গিয়ে থাকলে পুনরাবৃত্তি করবেন না।"
echo ""

REPO="openjobsolutionbd/open_job_solution"
AUTH_HEADER=()
if [ -n "${GH_TOKEN:-}" ]; then
  AUTH_HEADER=(-H "Authorization: Bearer ${GH_TOKEN}")
fi

echo "--- খোলা branch (main বাদে) ---"
curl -s "${AUTH_HEADER[@]}" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/${REPO}/branches?per_page=100" \
  | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    branches = [b['name'] for b in data if b.get('name') != 'main']
    if not branches:
        print('  (main ছাড়া কোনো branch নেই)')
    for b in branches:
        print(f'  - {b}')
except Exception as e:
    print(f'  ✗ পড়া যায়নি: {e}')
"

echo ""
echo "--- খোলা Pull Request ---"
curl -s "${AUTH_HEADER[@]}" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/${REPO}/pulls?state=open&per_page=30" \
  | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    if not data:
        print('  (কোনো খোলা PR নেই)')
    for pr in data:
        print(f\"  #{pr['number']} [{pr['head']['ref']}] {pr['title']}  (খোলা হয়েছে: {pr['created_at'][:10]})\")
except Exception as e:
    print(f'  ✗ পড়া যায়নি: {e}')
"

echo ""
echo "--- সর্বশেষ ১০টা merge হওয়া PR (সম্পন্ন কাজ) ---"
curl -s "${AUTH_HEADER[@]}" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/${REPO}/pulls?state=closed&sort=updated&direction=desc&per_page=15" \
  | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    merged = [pr for pr in data if pr.get('merged_at')][:10]
    if not merged:
        print('  (তথ্য নেই)')
    for pr in merged:
        print(f\"  #{pr['number']} {pr['title']}  (merge: {pr['merged_at'][:10]})\")
except Exception as e:
    print(f'  ✗ পড়া যায়নি: {e}')
"

echo ""
echo "--- সাম্প্রতিক বাতিল/abandoned PR (merge হয়নি) ---"
curl -s "${AUTH_HEADER[@]}" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/${REPO}/pulls?state=closed&sort=updated&direction=desc&per_page=15" \
  | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    closed_unmerged = [pr for pr in data if not pr.get('merged_at')][:5]
    if not closed_unmerged:
        print('  (কোনো abandoned PR নেই)')
    for pr in closed_unmerged:
        print(f\"  #{pr['number']} [{pr['head']['ref']}] {pr['title']}  (বন্ধ: {pr['closed_at'][:10]})\")
except Exception as e:
    print(f'  ✗ পড়া যায়নি: {e}')
"
