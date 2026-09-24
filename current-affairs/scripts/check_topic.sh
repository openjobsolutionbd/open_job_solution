#!/usr/bin/env bash
# নতুন টপিক যোগ করার আগে ডুপ্লিকেট আছে কিনা চেক করার জন্য।
# আগে এই চেক archive/*.md (হাজার+ লাইনের raw মাসিক সোর্স) এবং
# docs/topics/*.md সব ফাইল গ্রেপ করে করা হতো। docs/topics-index.json-এ
# প্রতিটা টপিকের slug/title/tags আগে থেকেই কমপ্যাক্ট আকারে আছে, তাই
# শুধু সেটা গ্রেপ করলেই যথেষ্ট — অনেক কম টেক্সট পড়তে হয়।
#
# docs/topics-index.json auto-generated এবং কখনো সরাসরি commit করা হয় না
# (CI push-এর পরে রিবিল্ড করে) — তাই committed কপি স্টেল থাকতে পারে,
# বিশেষ করে খুব সম্প্রতি merge হওয়া টপিক এতে না-ও থাকতে পারে (২০২৬-০৮-১৭তে
# এভাবেই একবার ভুলভাবে "নতুন টপিক" বলে রিপোর্ট হয়েছিল)। তাই চেক করার আগে
# প্রতিবার লোকালি নিঃশব্দে রিবিল্ড করে নেওয়া হয় (এই রিবিল্ড কখনো commit হয় না,
# শুধু লোকাল চেকের জন্য) — নিশ্চিত করতে যে ইনডেক্স আসল docs/topics/*.md
# ফাইলগুলোর সাথেই সবসময় মিলছে।
#
# ব্যবহার: bash scripts/check_topic.sh "কীওয়ার্ড"
set -uo pipefail
cd "$(dirname "$0")/.."

if [ $# -eq 0 ]; then
  echo "ব্যবহার: bash scripts/check_topic.sh \"কীওয়ার্ড\""
  exit 1
fi

if ! python3 scripts/build_index.py > /tmp/check_topic_rebuild.log 2>&1; then
  echo "⚠️  ইনডেক্স রিবিল্ড ব্যর্থ হয়েছে (স্টেল ইনডেক্স দিয়েই চেক চলছে, ফলাফল ভুল হতে পারে):"
  cat /tmp/check_topic_rebuild.log
fi

echo "== docs/topics-index.json-এ '$1' খোঁজা হচ্ছে (title/tags/slug) [রিবিল্ড করা, commit হবে না] =="
python3 -c "
import json, sys
q = sys.argv[1].lower()
data = json.load(open('docs/topics-index.json', encoding='utf-8'))
hits = [t for t in data.get('topics', [])
        if q in t.get('title','').lower()
        or q in t.get('slug','').lower()
        or any(q in tag.lower() for tag in t.get('tags', []))]
if hits:
    for t in hits:
        print(f\"  মিলেছে: {t['slug']}  —  {t['title']}\")
else:
    print('  কোনো মিল পাওয়া যায়নি — সম্ভবত নতুন টপিক।')
" "$1"
