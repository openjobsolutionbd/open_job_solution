#!/bin/bash
# scripts/safe_add.sh — `git add -A` করে, কিন্তু auto-generated ফাইল
# (scripts/pr_checks.py-এর GENERATED_PREFIXES) স্বয়ংক্রিয়ভাবে বাদ দিয়ে।
#
# কেন লাগে: preflight.sh/build_index.py চালালে docs/topics-index.json,
# docs/sitemap.xml, docs/topic/*/index.html ইত্যাদি working tree-তে
# পরিবর্তিত/নতুন হয়ে যায় — `git add -A` করলে এগুলো ভুলবশত স্টেজড হয়ে
# যেতে পারে, যেটা pr_checks.py PR-এ থাকতে দেয় না (main-এ merge হওয়ার
# পর update-wiki.yml-এর bot-ই এগুলো regenerate করে সরাসরি main-এ commit করে)।
#
# ব্যবহার: commit করার ঠিক আগে `git add -A`-এর বদলে এটা চালান:
#   bash scripts/safe_add.sh
#
# তালিকার একমাত্র উৎস scripts/pr_checks.py — এখানে আলাদা কপি রাখা
# হয়নি যাতে দুই জায়গায় ড্রিফট না হয়।

set -e
cd "$(git rev-parse --show-toplevel)"

# নিরাপত্তা-জাল: এই স্ক্রিপ্টের যেকোনো ধাপ ব্যর্থ হলে (যেমন pr_checks.py-এর
# ফরম্যাট বদলে গিয়ে regex-parsing ভেঙে গেলে) — git add -A দিয়ে ততক্ষণে
# staged হয়ে যাওয়া সব পরিবর্তন (generated ফাইল-সহ) স্বয়ংক্রিয়ভাবে unstage
# হয়ে যাবে, যাতে ভুলবশত commit না হয়ে যায়। সফল হলে ট্র্যাপ নিষ্ক্রিয় করা হয়।
trap 'echo "✗ safe_add.sh ব্যর্থ হয়েছে — নিরাপত্তার জন্য সব স্টেজড পরিবর্তন unstage করা হলো। উপরের এরর দেখে সমস্যা ঠিক করে আবার চালান।" >&2; git reset >/dev/null 2>&1 || true' ERR

git add -A

EXCLUDED=$(python3 -c "
import re, ast, subprocess
src = open('scripts/pr_checks.py', encoding='utf-8').read()
m = re.search(r'GENERATED_PREFIXES\s*=\s*(\[[^\]]*\])', src, re.S)
GENERATED_PREFIXES = ast.literal_eval(re.sub(r'#.*', '', m.group(1)))
staged = subprocess.run(['git','diff','--cached','--no-renames','--name-only'], capture_output=True, text=True).stdout.splitlines()
excluded = [f for f in staged if any(f.startswith(p) for p in GENERATED_PREFIXES)]
print('\n'.join(excluded))
")

if [ -n "$EXCLUDED" ]; then
  while IFS= read -r f; do
    [ -z "$f" ] && continue
    git reset -- "$f" >/dev/null 2>&1 || true
    if git cat-file -e HEAD:"$f" 2>/dev/null; then
      git checkout -- "$f"        # আগে থেকে ট্র্যাকড ফাইল — HEAD-এর অবস্থায় ফিরিয়ে দাও
    else
      rm -f "$f"                  # নতুন (untracked) auto-generated ফাইল — মুছে দাও
    fi
  done <<< "$EXCLUDED"
  find docs/topic -type d -empty -delete 2>/dev/null || true

  echo "⚠️  auto-generated ফাইল বাদ দেওয়া হলো (commit-এ যাবে না, bot workflow regenerate করবে):"
  echo "$EXCLUDED" | sed 's/^/  - /'
else
  echo "✓ কোনো auto-generated ফাইল স্টেজড হয়নি।"
fi

echo ""
echo "=== এখন staged আছে ==="
git status --porcelain | grep '^[MARCD]' || echo "  (কিছুই স্টেজড নেই)"

trap - ERR
