#!/usr/bin/env bash
# নতুন টপিক যোগ করার আগে ডুপ্লিকেট আছে কিনা চেক করার জন্য।
# আগে এই চেক archive/*.md (হাজার+ লাইনের raw মাসিক সোর্স) এবং
# docs/topics/*.md সব ফাইল গ্রেপ করে করা হতো। docs/topics-index.json-এ
# প্রতিটা টপিকের slug/title/tags আগে থেকেই কমপ্যাক্ট আকারে আছে, তাই
# শুধু সেটা গ্রেপ করলেই যথেষ্ট — অনেক কম টেক্সট পড়তে হয়।
#
# ব্যবহার: bash scripts/check_topic.sh "কীওয়ার্ড"
set -uo pipefail
cd "$(dirname "$0")/.."

if [ $# -eq 0 ]; then
  echo "ব্যবহার: bash scripts/check_topic.sh \"কীওয়ার্ড\""
  exit 1
fi

echo "== docs/topics-index.json-এ '$1' খোঁজা হচ্ছে (title/tags/slug) =="
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
