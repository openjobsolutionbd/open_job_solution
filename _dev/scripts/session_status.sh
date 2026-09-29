#!/usr/bin/env bash
# যেকোনো নতুন টাস্কের আগে চালান:   bash _dev/scripts/session_status.sh [স্কোপ]
#   স্কোপ (ঐচ্ছিক) = কীওয়ার্ড, যেমন current-affairs / written-exam / 523 — মিললে সেই কাজ
#   আগে থেকে চলছে কিনা আলাদা করে দেখায়।
#
# কারণ: local sandbox কথোপকথনের সাথে মেলে না; একমাত্র নির্ভরযোগ্য সোর্স GitHub remote।
# এই স্ক্রিপ্ট কিছু ব্লক করে না — শুধু বাস্তব অবস্থা ও ঝুঁকি (সংঘর্ষ, পরিত্যক্ত claim,
# PR-হীন branch) এক নজরে দেখায়। বিশ্লেষণ: _dev/scripts/session_status_report.py
set -uo pipefail
cd "$(dirname "$0")/../.."

echo "== রিপোর বর্তমান অবস্থা =="

# সব remote branch একবারে আনা (ahead/behind ও সংঘর্ষ-বিশ্লেষণের জন্য), মুছে ফেলা branch ছাঁটাই
if [ "$(git rev-parse --is-shallow-repository 2>/dev/null)" = "true" ]; then
  git fetch --unshallow --quiet 2>/dev/null || true
fi
if ! git fetch origin '+refs/heads/*:refs/remotes/origin/*' --prune --quiet 2>/tmp/session_fetch.log; then
  echo "✗ git fetch ব্যর্থ — নেটওয়ার্ক সমস্যা হতে পারে:"; cat /tmp/session_fetch.log; exit 1
fi

LOCAL=$(git rev-parse HEAD 2>/dev/null)
REMOTE=$(git rev-parse origin/main 2>/dev/null)
AHEAD=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo "?")    # remote-এ যা আছে, local-এ নেই
BEHIND=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "?")   # local-এ যা আছে, push হয়নি
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
LW=""

echo "local HEAD:  $LOCAL  ($BRANCH)"
echo "remote HEAD: $REMOTE"
if [ "$LOCAL" = "$REMOTE" ]; then
  echo "✓ local ও remote সমান।"
else
  if [ "$AHEAD" != "0" ] && [ "$AHEAD" != "?" ]; then
    echo "⚠️  remote-এ $AHEAD টা নতুন কমিট আছে যা local-এ নেই — অন্য অ্যাকাউন্ট/চ্যাট থেকে push হয়েছে।"
    LW+="local main-এর পেছনে $AHEAD কমিট — কাজ শুরুর আগে 'git rebase origin/main'"$'\n'
  fi
  if [ "$BEHIND" != "0" ] && [ "$BEHIND" != "?" ]; then
    echo "ℹ️  local-এ $BEHIND টা কমিট আছে যা এখনো push হয়নি।"
    LW+="local-এ $BEHIND টা unpushed কমিট — আগের সেশনের অসম্পূর্ণ কাজ হতে পারে"$'\n'
  fi
fi

echo ""
echo "== uncommitted পরিবর্তন (working directory) =="
CHANGES=$(git status --short)
if [ -z "$CHANGES" ]; then
  echo "✓ working directory পরিষ্কার।"
else
  echo "⚠️  নিচের পরিবর্তন কমিট হয়নি — এই সেশনের নতুন কাজ নাকি পুরনো branch-এর অবশিষ্টাংশ, নিশ্চিত না হয়ে এগোবেন না:"
  echo "$CHANGES"
  LW+="uncommitted পরিবর্তন আছে"$'\n'
fi

echo ""
echo "সর্বশেষ ৩টা কমিট:"; git log --oneline -3

SS_LOCAL_WARNINGS="$LW" python3 "$(dirname "$0")/session_status_report.py" "$@"
