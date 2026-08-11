#!/usr/bin/env python3
"""
এই স্ক্রিপ্ট docs/topics/ ফোল্ডারের সব .md ফাইল স্ক্যান করে
একটা topics-index.json ফাইল বানায়, যা ওয়েবসাইটের সার্চ ফিচার ব্যবহার করে।

এই ফাইল হাতে চালানোর দরকার নেই — GitHub Action স্বয়ংক্রিয়ভাবে
প্রতিটা পুশের পর এটা চালিয়ে দেয়।
"""
import datetime
import html
import json
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    yaml = None

ROOT = Path(__file__).resolve().parent.parent
DOCS_DIR = ROOT / "docs"
# টপিক ও ঘটনাপ্রবাহ সোর্স ফাইলগুলো এখন সরাসরি docs/-এর ভেতরেই রাখা হয় —
# আলাদা root-level সোর্স ফোল্ডার আর docs/-এর কপি, এই দুই জায়গার বদলে
# একটাই কপি রাখা হচ্ছে। তাই এখানে TOPICS_DIR ও DOCS_TOPICS_DIR একই path,
# এবং build-এ আর shutil.copytree করার দরকার নেই।
TOPICS_DIR = DOCS_DIR / "topics"
OUTPUT_FILE = DOCS_DIR / "topics-index.json"
VERSION_FILE = ROOT / "VERSION"
VERSION_OUTPUT = DOCS_DIR / "version.json"
SW_TEMPLATE = ROOT / "scripts" / "sw_template.js"
SW_OUTPUT = DOCS_DIR / "sw.js"

GHOTONAPROBAHO_DIR = DOCS_DIR / "ghotonaprobaho"
GHOTONAPROBAHO_OUTPUT_FILE = DOCS_DIR / "ghotonaprobaho-index.json"

TOP_NEWS_DIR = DOCS_DIR / "top-news"
TOP_NEWS_OUTPUT_FILE = DOCS_DIR / "top-news-index.json"

MCQ_DIR = DOCS_DIR / "mcq"
MCQ_OUTPUT_FILE = DOCS_DIR / "mcq-index.json"

# TASK: প্রতিটা টপিকের জন্য আলাদা, সার্চ-ইঞ্জিন-বান্ধব একটা স্ট্যাটিক HTML
# পাতা তৈরি হয় docs/topic/<slug>/index.html-এ। কারণ: মূল সাইট একটা single
# page app (সব কিছু hash-এ, যেমন /#slug) — সার্চ ইঞ্জিন সাধারণত hash-এর
# পরের অংশ আলাদা পাতা হিসেবে চেনে না, তাই প্রতিটা টপিক আলাদাভাবে গুগলে
# আসতে পারে না। এই ছোট পাতাগুলোতে টাইটেল ও বিবরণ আগে থেকেই লেখা থাকে
# (গুগল সরাসরি পড়তে পারে), আর পাতাটা লোড হওয়ার সাথে সাথেই মূল অ্যাপে
# (/#slug) নিয়ে যায় — তাই সাধারণ ভিজিটরের অভিজ্ঞতা অপরিবর্তিত থাকে।
SITE_BASE_URL = "https://open-current-affairs.pages.dev"
TOPIC_PAGES_DIR = DOCS_DIR / "topic"
SITEMAP_OUTPUT = DOCS_DIR / "sitemap.xml"
ROBOTS_OUTPUT = DOCS_DIR / "robots.txt"

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n?(.*)$", re.DOTALL)

# TASK 7 / TASK 10: last_updated অবশ্যই ISO-সাজানোর-উপযোগী ফরম্যাটে থাকতে হবে
# (YYYY-MM বা YYYY-MM-DD) — যাতে স্ট্রিং-তুলনাতেই সময়ানুক্রম ঠিক থাকে, আলাদা
# পার্সিং লাগে না এবং লোকালাইজড (বাংলা মাসের নাম) স্ট্রিং দিয়ে সর্ট করতে হয় না।
DATE_RE = re.compile(r"^\d{4}-\d{2}(-\d{2})?$")

# টপিকের ফাইলনাম-ই স্লাগ হিসেবে ব্যবহৃত হয় (আলাদা frontmatter slug ফিল্ড নেই) —
# তাই স্লাগ-ভ্যালিডেশন ফাইলনামের উপর হয়।
SLUG_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")

class BuildError(Exception):
    """একটা ভ্যালিডেশন সমস্যা বোঝায় — এটা ধরা পড়লে বিল্ড অবশ্যই
    নন-জিরো এক্সিট-কোড দিয়ে থামবে, আংশিক/পুরনো আউটপুট থেকে যাবে না।"""

BENGALI_DIGITS = str.maketrans("০১২৩৪৫৬৭৮৯", "0123456789")
BENGALI_MONTHS = {
    "জানুয়ারি": 1, "ফেব্রুয়ারি": 2, "মার্চ": 3, "এপ্রিল": 4,
    "মে": 5, "জুন": 6, "জুলাই": 7, "আগস্ট": 8,
    "সেপ্টেম্বর": 9, "অক্টোবর": 10, "নভেম্বর": 11, "ডিসেম্বর": 12,
}


def bengali_date_sort_key(date_str):
    """'২৫ এপ্রিল ২০২৬'-এর মতো লেখাকে (year, month_number, day)-এ রূপান্তর করে,
    যাতে সময়ানুক্রমে (নতুন থেকে পুরনো) সাজানো যায়। বুঝতে না পারলে সবচেয়ে
    পুরনো ধরে নেয় (তালিকার নিচে চলে যায়), বিল্ড ভেঙে পড়ে না — তবে চুপচাপ
    না থেকে stderr-এ একটা সতর্কতা দেয়, যাতে ভুল বানান/ফরম্যাট ধরা পড়ে।"""
    try:
        parts = date_str.strip().split()
        day = int(parts[0].translate(BENGALI_DIGITS))
        month_name = parts[1]
        year = int(parts[2].translate(BENGALI_DIGITS))
        month_num = BENGALI_MONTHS.get(month_name, 0)
        if month_num == 0:
            print(f"সতর্কতা: '{date_str}' থেকে মাসের নাম চেনা যায়নি, সর্ট-এ এটা সবচেয়ে পুরনো ধরা হবে।", file=sys.stderr)
        return (year, month_num, day)
    except Exception:
        print(f"সতর্কতা: '{date_str}' পার্স করা যায়নি (প্রত্যাশিত ফরম্যাট: 'দিন মাস বছর'), সর্ট-এ এটা সবচেয়ে পুরনো ধরা হবে।", file=sys.stderr)
        return (0, 0, 0)


def parse_item_terms(item_text, valid_slugs, path):
    """একটা বুলেট-লাইনের টেক্সট থেকে [[phrase|slug]] বা পুরনো [[slug]] ফরম্যাটের
    টার্মগুলো বের করে, স্লাগ ভ্যালিডেট করে, এবং (পরিষ্কার item_text, terms) রিটার্ন
    করে। ঘটনাপ্রবাহ ও টপ নিউজ — দুই পার্সারই এই একই লজিক শেয়ার করে।"""
    terms = []
    inline_matches = list(inline_term_re.finditer(item_text))
    if inline_matches:
        for im in inline_matches:
            phrase = im.group(1).strip()
            slug = im.group(2).strip()
            if slug not in valid_slugs:
                raise BuildError(
                    f"{path.name}: '[[{phrase}|{slug}]]' রেফারেন্স করা টপিক "
                    f"docs/topics/-এ পাওয়া যায়নি (এন্ট্রি: \"{item_text}\")। "
                    f"বানান ঠিক আছে কিনা, বা টপিক ফাইলটা মুছে/rename হয়েছে কিনা দেখুন।"
                )
            if not phrase:
                raise BuildError(
                    f"{path.name}: '[[{phrase}|{slug}]]'-এর বাক্যাংশ অংশ খালি "
                    f"থাকতে পারবে না (এন্ট্রি: \"{item_text}\")।"
                )
            terms.append({"phrase": phrase, "slug": slug})
        item_text = inline_term_re.sub(lambda mm: mm.group(1), item_text).strip()
    else:
        lm = legacy_related_topic_re.match(item_text)
        if lm:
            item_text = lm.group(1).strip()
            slug = lm.group(2).strip()
            if slug not in valid_slugs:
                raise BuildError(
                    f"{path.name}: '[[{slug}]]' রেফারেন্স করা টপিক "
                    f"docs/topics/-এ পাওয়া যায়নি (এন্ট্রি: \"{item_text}\")। "
                    f"বানান ঠিক আছে কিনা, বা টপিক ফাইলটা মুছে/rename হয়েছে কিনা দেখুন।"
                )
            terms.append({"phrase": item_text, "slug": slug})

    # একই বাক্যাংশ একাধিক টার্মে ওভারল্যাপ করলে ক্লায়েন্ট-সাইড হাইলাইটিং
    # ভেঙে যেতে পারে (যেমন একটা টার্মের বাক্যাংশ আরেকটার ভেতরে বসে থাকা) —
    # তাই বিল্ড-টাইমেই সেটা ধরে ফেলা হয়, রানটাইমে চুপচাপ ভুল রেন্ডার হওয়ার
    # চেয়ে স্পষ্ট এরর দেখানো ভালো।
    for i, t1 in enumerate(terms):
        for j, t2 in enumerate(terms):
            if i != j and t1["phrase"] in t2["phrase"] and t1["phrase"] != t2["phrase"]:
                raise BuildError(
                    f"{path.name}: '\"{t1['phrase']}\"' বাক্যাংশটি '\"{t2['phrase']}\"' "
                    f"-এর ভেতরে বসে আছে (এন্ট্রি: \"{item_text}\")। একটা টার্মের বাক্যাংশ "
                    f"আরেকটার ভেতরে থাকলে হাইলাইটিং ভুল জায়গায় হতে পারে — বাক্যাংশগুলো "
                    f"এমনভাবে বাছুন যাতে একটা আরেকটার সাবস্ট্রিং না হয়।"
                )
    return item_text, terms


inline_term_re = re.compile(r"\[\[([^\[\]|]+)\|([a-z0-9-]+)\]\]")
legacy_related_topic_re = re.compile(r"^(.*?)\s*\[\[([a-z0-9-]+)\]\]\s*$")


def parse_ghotonaprobaho_file(path, valid_slugs):
    """ghotonaprobaho/*.md ফাইলের একটা থেকে দিন-ভিত্তিক এন্ট্রি বের করে।
    প্রত্যাশিত ফরম্যাট:
      ## ২৫ এপ্রিল ২০২৬
      **বাংলাদেশ**
      - বুলেট এক
      - বুলেট দুই [[topic-slug]]
      **আন্তর্জাতিক**
      - বুলেট তিন
    একই ফাইলে একাধিক মাসের এন্ট্রি থাকলেও সমস্যা নেই — প্রতিটা দিন নিজের
    তারিখ থেকেই বছর/মাস বের করে, তাই ফাইলের নাম/বিভাজনের উপর নির্ভর করে না।

    একই লাইনে একাধিক শব্দ/বাক্যাংশ আলাদা আলাদা টপিকের সাথে লিংক করতে চাইলে
    `[[বাক্যাংশ|slug]]` ফরম্যাট ব্যবহার করুন, একই লাইনে যতগুলো দরকার ততগুলো
    বসানো যায় — যেমন:
      - বিশ্ব স্বাস্থ্য সংস্থা ([[WHO|who]]) কঙ্গোতে [[ইবোলা|ebola]] প্রাদুর্ভাবকে
        জরুরি অবস্থা ঘোষণা করে।
    পুরনো সংক্ষিপ্ত ফরম্যাটও (লাইনের একদম শেষে শুধু `[[slug]]`, কোনো "|" ছাড়া)
    আগের মতোই কাজ করে — তখন পুরো লাইনটাই একটা টার্ম হিসেবে গণ্য হয়।
    দুই ফরম্যাট একসাথে একই লাইনে মেশানো যাবে না; কোনো লাইনে `[[বাক্যাংশ|slug]]`
    প্যাটার্ন পাওয়া গেলে সেটাই প্রাধান্য পায়, পুরনো ফরম্যাট উপেক্ষা হয়।
    সবক্ষেত্রেই slug অবশ্যই docs/topics/-এ বিদ্যমান কোনো টপিকের সাথে মিলতে
    হবে, নাহলে বিল্ড ব্যর্থ হবে (টাইপো ধরার জন্য ইচ্ছাকৃতভাবে কড়া)।
    """
    text = path.read_text(encoding="utf-8").lstrip("\ufeff")
    day_entries = []
    current_date = None
    current_category = None

    date_re = re.compile(r"^##\s+(.+?)\s*$")
    category_re = re.compile(r"^\*\*(.+?)\*\*\s*$")
    bullet_re = re.compile(r"^-\s+(.+?)\s*$")

    for raw_line in text.splitlines():
        line = raw_line.strip()
        if not line:
            continue
        m = date_re.match(line)
        if m:
            current_date = {
                "date": m.group(1).strip(),
                "_sort": bengali_date_sort_key(m.group(1).strip()),
                "categories": [],
            }
            day_entries.append(current_date)
            current_category = None
            continue
        m = category_re.match(line)
        if m and current_date is not None:
            current_category = {"category": m.group(1).strip(), "items": []}
            current_date["categories"].append(current_category)
            continue
        m = bullet_re.match(line)
        if m and current_category is not None:
            item_text, terms = parse_item_terms(m.group(1).strip(), valid_slugs, path)
            current_category["items"].append({
                "text": item_text,
                "terms": terms,
            })
            continue
        # লাইন # হেডিং (টাইটেল) বা *(তারিখ পরিসীমা)* মন্তব্য হলে উপেক্ষা করা হয় —
        # এগুলো শুধু ফাইলের ভেতরের নোট, আউটপুটে দরকার নেই।

    return day_entries


def compile_ghotonaprobaho(valid_slugs):
    """ghotonaprobaho/ ফোল্ডারের সব .md ফাইল থেকে দিন-ভিত্তিক ঘটনাপ্রবাহ
    একত্র করে docs/ghotonaprobaho-index.json বানায় (মাস অনুযায়ী গ্রুপ করা,
    নতুন থেকে পুরনো সাজানো)।"""
    if not GHOTONAPROBAHO_DIR.exists():
        print("তথ্য: ghotonaprobaho/ ফোল্ডার নেই, এই ফিচার বাদ দিয়ে বিল্ড চলবে।")
        return

    all_days = []
    seen_dates = {}  # তারিখ-টেক্সট -> কোন ফাইলে প্রথম দেখা গেছে (ডুপ্লিকেট ধরার জন্য)
    for path in sorted(GHOTONAPROBAHO_DIR.glob("*.md")):
        for d in parse_ghotonaprobaho_file(path, valid_slugs):
            date_key = d["date"].strip()
            if date_key in seen_dates:
                raise BuildError(
                    f"'{date_key}' তারিখটা একাধিক ফাইলে পাওয়া গেছে "
                    f"({seen_dates[date_key]} এবং {path.name}) — একটা ফাইল থেকে বাদ দিন।"
                )
            else:
                seen_dates[date_key] = path.name
            all_days.append(d)

    all_days.sort(key=lambda d: d["_sort"], reverse=True)

    by_month = {}
    month_order = []
    for d in all_days:
        year, month_num, day = d["_sort"]
        month_key = f"{year:04d}-{month_num:02d}" if month_num else "অজানা"
        if month_key not in by_month:
            by_month[month_key] = {
                "month_key": month_key,
                "month_label": " ".join(d["date"].strip().split()[1:]) if month_num else "অজানা মাস",
                "days": [],
            }
            month_order.append(month_key)
        del d["_sort"]
        by_month[month_key]["days"].append(d)

    months = [by_month[k] for k in month_order]

    GHOTONAPROBAHO_OUTPUT_FILE.write_text(
        json.dumps({"months": months}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    total_days = sum(len(m["days"]) for m in months)
    print(f"তৈরি হলো: {GHOTONAPROBAHO_OUTPUT_FILE} ({len(months)} মাস, {total_days} দিন)")
    # ghotonaprobaho/*.md এখন সরাসরি docs/ghotonaprobaho/-এই থাকে (আলাদা
    # root-level সোর্স ফোল্ডার নেই), তাই এখানে আর কপি করার দরকার নেই।


def parse_top_news_file(path, valid_slugs):
    """top-news/*.md ফাইলের একটা থেকে তারিখ-ভিত্তিক এক-লাইন হাইলাইট বের করে।
    ঘটনাপ্রবাহের মতোই ফরম্যাট, তবে ক্যাটাগরি (বাংলাদেশ/আন্তর্জাতিক) ছাড়া —
    প্রতিটা তারিখে সাধারণত একটা মাত্র সবচেয়ে গুরুত্বপূর্ণ লাইন থাকে:
      ## ১৪ মে ২০২৬
      - বগুড়াকে দেশের ১৩তম সিটি কর্পোরেশন গঠন করে প্রজ্ঞাপন জারি।
    একই তারিখে একাধিক বুলেট থাকলেও সমস্যা নেই, সবগুলোই যোগ হয়।
    [[বাক্যাংশ|slug]] লিংক-সিনট্যাক্স ঘটনাপ্রবাহের মতোই কাজ করে।
    """
    text = path.read_text(encoding="utf-8").lstrip("\ufeff")
    items = []
    current_date = None

    date_re = re.compile(r"^##\s+(.+?)\s*$")
    bullet_re = re.compile(r"^-\s+(.+?)\s*$")

    for raw_line in text.splitlines():
        line = raw_line.strip()
        if not line:
            continue
        m = date_re.match(line)
        if m:
            current_date = m.group(1).strip()
            continue
        m = bullet_re.match(line)
        if m and current_date is not None:
            item_text, terms = parse_item_terms(m.group(1).strip(), valid_slugs, path)
            items.append({
                "date": current_date,
                "_sort": bengali_date_sort_key(current_date),
                "text": item_text,
                "terms": terms,
            })
            continue
        # # হেডিং (টাইটেল) লাইন উপেক্ষা করা হয়।

    return items


def compile_top_news(valid_slugs):
    """top-news/ ফোল্ডারের সব .md ফাইল থেকে গুরুত্বপূর্ণ হাইলাইটগুলো একত্র করে
    docs/top-news-index.json বানায় (নতুন থেকে পুরনো সাজানো, একটাই ফ্ল্যাট
    তালিকা — 'এক পলকে দেখা'-র জন্য মাস-ভিত্তিক ভাগ/পেজিনেশন ছাড়াই)।"""
    if not TOP_NEWS_DIR.exists():
        print("তথ্য: top-news/ ফোল্ডার নেই, এই ফিচার বাদ দিয়ে বিল্ড চলবে।")
        return

    all_items = []
    for path in sorted(TOP_NEWS_DIR.glob("*.md")):
        all_items.extend(parse_top_news_file(path, valid_slugs))

    all_items.sort(key=lambda it: it["_sort"], reverse=True)
    for it in all_items:
        del it["_sort"]

    TOP_NEWS_OUTPUT_FILE.write_text(
        json.dumps({"items": all_items}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"তৈরি হলো: {TOP_NEWS_OUTPUT_FILE} ({len(all_items)} টি হাইলাইট)")


BN_LETTER_TO_INDEX = {"ক": 0, "খ": 1, "গ": 2, "ঘ": 3}

MCQ_SECTION_RE = re.compile(r"^##\s+(.+?)\s*$")
MCQ_QUESTION_RE = re.compile(r"^([০-৯]+)\.\s*(.+?)\s*$")
MCQ_OPTION_TOKEN_RE = re.compile(r"([কখগঘ])\)\s*(.+?)(?=\s+[কখগঘ]\)|$)")
MCQ_ANSWER_PAIR_RE = re.compile(r"([০-৯]+)\.([কখগঘ])")


def parse_mcq_file(path):
    """docs/mcq/*.md (raw MCQ আর্কাইভ) থেকে স্ট্রাকচার্ড প্রশ্ন-তালিকা বের করে।

    প্রত্যাশিত ফরম্যাট:
      ## বিভাগের নাম
      ১. প্রশ্নের টেক্সট...
      ক) অপশন১ খ) অপশন২ গ) অপশন৩ ঘ) অপশন৪
      ...
      **উত্তর:** ১.গ ২.ক ...
    কোনো লাইন এই প্যাটার্নে না মিললে সেটা নীরবে উপেক্ষা করা হয় (যেমন
    ভূমিকা-টেক্সট, ⚠️ নোট, ফ্রন্টম্যাটার-বহির্ভূত মন্তব্য ইত্যাদি) — MCQ
    আর্কাইভ ফাইল ভ্যালিডেশনের আওতায় পড়ে না, তাই partial parse এখানে
    ক্ষতিকর নয়, শুধু সেই প্রশ্নটা ওয়েবসাইটের কুইজে দেখাবে না।
    """
    text = path.read_text(encoding="utf-8").lstrip("\ufeff")
    lines = text.splitlines()

    sections = []  # [{name, questions:[{number, text, options:[...], answer_index}]}]
    current_section = None
    pending_question = None  # {number, text} — অপশন লাইনের অপেক্ষায়
    # number(str) -> {section_questions_list, question_dict} — উত্তর-কী মেলানোর জন্য
    question_lookup = {}

    def ensure_section(name):
        nonlocal current_section
        for s in sections:
            if s["name"] == name:
                current_section = s
                return
        current_section = {"name": name, "questions": []}
        sections.append(current_section)

    for raw_line in lines:
        line = raw_line.strip()
        if not line:
            continue

        m = MCQ_SECTION_RE.match(line)
        if m:
            ensure_section(m.group(1).strip())
            pending_question = None
            continue

        m = MCQ_QUESTION_RE.match(line)
        if m and current_section is not None:
            pending_question = {"number": m.group(1), "text": m.group(2)}
            continue

        if pending_question is not None and ("ক)" in line):
            opts = MCQ_OPTION_TOKEN_RE.findall(line)
            if len(opts) >= 2:
                q = {
                    "number": pending_question["number"],
                    "text": pending_question["text"],
                    "options": [o[1].strip() for o in opts],
                    "answer_index": None,
                }
                current_section["questions"].append(q)
                question_lookup[q["number"]] = q
            pending_question = None
            continue

        if line.startswith("**উত্তর"):
            for num, letter in MCQ_ANSWER_PAIR_RE.findall(line):
                q = question_lookup.get(num)
                if q is not None:
                    q["answer_index"] = BN_LETTER_TO_INDEX.get(letter)
            continue

    # যেসব প্রশ্নে উত্তর-কী মেলেনি বা অপশন ৪টার কম, সেগুলো বাদ দেওয়া হয়
    # (ওয়েবসাইটের ইন্টারেক্টিভ কুইজে ভুল/অসম্পূর্ণ প্রশ্ন দেখানো ঠিক না)।
    for s in sections:
        s["questions"] = [
            q for q in s["questions"]
            if q["answer_index"] is not None and len(q["options"]) >= 2
        ]
    sections = [s for s in sections if s["questions"]]

    return sections


def compile_mcq():
    """docs/mcq/ ফোল্ডারের সব .md আর্কাইভ ফাইল থেকে ইন্টারেক্টিভ কুইজের জন্য
    docs/mcq-index.json বানায়। MCQ আর্কাইভ ফাইল টপিক-ভ্যালিডেশনের আওতায়
    পড়ে না (আলাদা frontmatter দরকার নেই) — তাই এখানে কোনো পার্স-সমস্যা হলে
    গোটা বিল্ড থামে না, শুধু সংশ্লিষ্ট প্রশ্ন/ফাইল বাদ পড়ে।
    """
    if not MCQ_DIR.exists():
        print("তথ্য: docs/mcq/ ফোল্ডার নেই, এই ফিচার বাদ দিয়ে বিল্ড চলবে।")
        return

    quiz_sets = []  # প্রতিটা ফাইল একটা আলাদা "সেট" (সাধারণত এক সংখ্যার MCQ)
    for path in sorted(MCQ_DIR.glob("*.md")):
        sections = parse_mcq_file(path)
        if sections:
            total_q = sum(len(s["questions"]) for s in sections)
            quiz_sets.append({
                "id": path.stem,
                "label": path.stem,
                "sections": sections,
                "question_count": total_q,
            })

    quiz_sets.sort(key=lambda s: s["id"], reverse=True)

    MCQ_OUTPUT_FILE.write_text(
        json.dumps({"sets": quiz_sets}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    total = sum(s["question_count"] for s in quiz_sets)
    print(f"তৈরি হলো: {MCQ_OUTPUT_FILE} ({len(quiz_sets)} সেট, {total} প্রশ্ন)")


def parse_frontmatter_yaml(block, path):
    """ফ্রন্টম্যাটার ব্লক real YAML দিয়ে পার্স করে (pyyaml আবশ্যক)।
    এতে ব্র্যাকেট-স্টাইল (tags: [a, b]) আর ব্লক-লিস্ট (tags:\n  - a\n  - b)
    দুটোই সঠিকভাবে সাপোর্ট হয় — কোনো কাস্টম/দুর্বল পার্সার না রেখে।
    পার্স ব্যর্থ হলে BuildError তোলে (বিল্ড থামানোর জন্য)।"""
    try:
        data = yaml.safe_load(block)
    except yaml.YAMLError as e:
        raise BuildError(f"{path.name}: frontmatter YAML পার্স করা যায়নি — {e}")
    if not isinstance(data, dict):
        raise BuildError(f"{path.name}: frontmatter একটা key: value ম্যাপ হতে হবে")
    # YAML 'YYYY-MM-DD' কে auto-parse করে datetime.date বানিয়ে ফেলে (quote ছাড়া লিখলে) —
    # সবসময় ISO স্ট্রিং-এই রাখা হয় (TASK 10: internal-এ সবসময় ISO)।
    if isinstance(data.get("last_updated"), (datetime.date, datetime.datetime)):
        data["last_updated"] = data["last_updated"].isoformat()[:10]
    return data


def extract_snippet(body, limit=160):
    for line in body.splitlines():
        line = line.strip()
        if line and not line.startswith("#") and not line.startswith("|"):
            return (line[:limit] + "…") if len(line) > limit else line
    return ""


def strip_markdown(body):
    """মার্কডাউন সিনট্যাক্স সরিয়ে সাদামাটা টেক্সট বানায়, যাতে ফুল-টেক্সট
    সার্চের সময় হ্যাশ/পাইপ/তারকা চিহ্নের কারণে মিল খুঁজে পেতে সমস্যা না হয়।"""
    text = body
    text = re.sub(r"^#{1,6}\s*", "", text, flags=re.MULTILINE)      # হেডিং হ্যাশ
    text = re.sub(r"^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?\s*$", "", text, flags=re.MULTILINE)
    text = re.sub(r"\|", " ", text)                                    # টেবিলের পাইপ
    text = re.sub(r"^-{2,}\s*$", " ", text, flags=re.MULTILINE)        # টেবিলের ড্যাশ-লাইন
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)                       # বোল্ড
    text = re.sub(r"\*(.*?)\*", r"\1", text)                           # ইটালিক
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{2,}", "\n", text)
    return text.strip()


def validate_topic(path, meta, body):
    """প্রতিটা টপিক ফাইলের frontmatter ও গঠন কড়াভাবে যাচাই করে (TASK 7).
    এখানে যা কিছু সমস্যা পাওয়া যায় তার প্রতিটাই এখন থেকে বিল্ড-ফেইলিং এরর
    (আগে শুধু সতর্কতা ছিল, কিন্তু TASK 9 অনুযায়ী ভুল মেটাডেটা/মিসিং ফিল্ডে
    বিল্ড অবশ্যই non-zero এক্সিট-কোড দিয়ে থামতে হবে)।"""
    errors = []

    title = meta.get("title")
    if not isinstance(title, str) or not title.strip():
        errors.append("title নেই বা খালি")

    tags = meta.get("tags")
    if not isinstance(tags, list):
        errors.append(
            "tags অবশ্যই একটা array/list হতে হবে (যেমন 'tags:\\n  - অর্থনীতি\\n  - GDP' "
            f"অথবা 'tags: [অর্থনীতি, GDP]') — পাওয়া গেছে: {tags!r}"
        )
    elif len(tags) == 0:
        errors.append("tags খালি — কমপক্ষে একটা ট্যাগ দরকার")
    elif not all(isinstance(t, str) and t.strip() for t in tags):
        errors.append("tags-এর প্রতিটা আইটেম non-empty টেক্সট হতে হবে")

    last_updated = meta.get("last_updated")
    if not isinstance(last_updated, str) or not DATE_RE.match(last_updated.strip()):
        errors.append(
            f"last_updated সঠিক ISO ফরম্যাটে নেই (YYYY-MM বা YYYY-MM-DD হওয়া উচিত) — পাওয়া গেছে: {last_updated!r}"
        )

    slug = path.stem
    if not SLUG_RE.match(slug):
        errors.append(f"ফাইলনাম/স্লাগ '{slug}' বৈধ নয় (শুধু lowercase অক্ষর/সংখ্যা/হাইফেন অনুমোদিত)")

    if "বর্তমান তথ্য" not in body:
        errors.append('"বর্তমান তথ্য" সেকশন খুঁজে পাওয়া যায়নি')
    if "পরিবর্তনের ইতিহাস" not in body:
        errors.append('"পরিবর্তনের ইতিহাস" সেকশন খুঁজে পাওয়া যায়নি')

    return errors


def write_version_json():
    """VERSION ফাইলের সংখ্যাটা docs/version.json-এ লিখে দেয়, যাতে এই ফাইলটা
    ম্যানুয়ালি এডিট করে ভুলে VERSION-এর সাথে out-of-sync না থেকে যায়।"""
    version = VERSION_FILE.read_text(encoding="utf-8").strip() if VERSION_FILE.exists() else "0"
    VERSION_OUTPUT.write_text(
        json.dumps({"version": version}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"তৈরি হলো: {VERSION_OUTPUT} (version: {version})")


def generate_topic_pages(entries):
    """প্রতিটা টপিকের জন্য docs/topic/<slug>/index.html বানায় — একটা ছোট,
    সার্চ-ইঞ্জিন-বান্ধব স্ট্যাটিক পাতা যাতে টাইটেল ও বিবরণ আগে থেকেই লেখা
    থাকে (গুগল crawl করার সময় সরাসরি পড়তে পারে), আর লোড হওয়ার সাথে সাথেই
    মূল single-page-app-এ (/#slug) রিডাইরেক্ট করে দেয় — তাই সাধারণ
    ভিজিটরের অভিজ্ঞতা অপরিবর্তিত থাকে, শুধু সার্চ ইঞ্জিনের জন্য প্রতিটা
    টপিক এখন থেকে আলাদা crawlable URL পায়।

    পুরনো টপিক মুছে ফেলা হলে বা rename হলে এতিম (stale) পাতা যেন থেকে না
    যায়, তাই প্রতিবার পুরো docs/topic/ ফোল্ডার মুছে নতুন করে বানানো হয়।
    """
    import shutil

    if TOPIC_PAGES_DIR.exists():
        shutil.rmtree(TOPIC_PAGES_DIR)
    TOPIC_PAGES_DIR.mkdir(parents=True, exist_ok=True)

    for e in entries:
        slug = e["slug"]
        title = html.escape(e["title"])
        description = html.escape(e["snippet"] or e["title"])
        canonical = f"{SITE_BASE_URL}/topic/{slug}/"
        app_url = f"{SITE_BASE_URL}/#{slug}"

        page_html = f"""<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — Open Current Affairs</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{canonical}">
<meta property="og:type" content="article">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:url" content="{canonical}">
<meta name="robots" content="index, follow">
<meta http-equiv="refresh" content="0; url={app_url}">
<script>location.replace({json.dumps(app_url)});</script>
</head>
<body>
<p>এই টপিকটা দেখতে <a href="{app_url}">এখানে ক্লিক করুন</a> — যদি স্বয়ংক্রিয়ভাবে না নিয়ে যায়।</p>
<h1>{title}</h1>
<p>{description}</p>
</body>
</html>
"""
        page_dir = TOPIC_PAGES_DIR / slug
        page_dir.mkdir(parents=True, exist_ok=True)
        (page_dir / "index.html").write_text(page_html, encoding="utf-8")

    print(f"তৈরি হলো: {TOPIC_PAGES_DIR}/<slug>/index.html ({len(entries)} টি পাতা)")


def generate_sitemap_and_robots(entries):
    """docs/sitemap.xml ও docs/robots.txt বানায়, যাতে সার্চ ইঞ্জিন সহজে
    হোমপেজ এবং প্রতিটা টপিক-পাতা খুঁজে পায়।"""
    today = datetime.date.today().isoformat()

    urls = [f"{SITE_BASE_URL}/"]
    urls.extend(f"{SITE_BASE_URL}/topic/{e['slug']}/" for e in entries)

    url_entries = "\n".join(
        f"  <url>\n    <loc>{html.escape(u)}</loc>\n    <lastmod>{today}</lastmod>\n  </url>"
        for u in urls
    )
    sitemap = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{url_entries}\n"
        "</urlset>\n"
    )
    SITEMAP_OUTPUT.write_text(sitemap, encoding="utf-8")
    print(f"তৈরি হলো: {SITEMAP_OUTPUT} ({len(urls)} টি URL)")

    # গুগল সার্চে (Googlebot) ইনডেক্স হওয়ার অনুমতি খোলা রাখা হলো, কিন্তু
    # পরিচিত AI-ট্রেনিং রোবটগুলোকে (কনটেন্ট মডেল-ট্রেনিংয়ে ব্যবহারের জন্য
    # সংগ্রহ করে) নিষেধ করা হলো — ব্যবহারকারীর সুস্পষ্ট সিদ্ধান্ত অনুযায়ী।
    # এটা robots.txt-এর প্রমিত আচরণ মেনেই কাজ করে: কোনো নির্দিষ্ট
    # user-agent-এর জন্য আলাদা নিয়ম থাকলে সেটাই প্রযোজ্য হয়, নাহলে সবার
    # জন্য সাধারণ "*" নিয়ম প্রযোজ্য হয় (যা এখনো খোলা — তাই Bing-এর মতো
    # অন্যান্য সাধারণ সার্চ ইঞ্জিন প্রভাবিত হয় না)। robots.txt একটা
    # স্বেচ্ছা-মেনে-চলার নিয়ম মাত্র, জোর করে আটকানোর প্রযুক্তিগত ব্যবস্থা
    # না — তবে বড় কোম্পানিগুলো (Google, OpenAI, Anthropic) সাধারণত এটা
    # মেনে চলে বলে জানিয়েছে। এই তালিকা সময়ে সময়ে হালনাগাদ করা দরকার
    # হতে পারে, কারণ নতুন AI রোবট নিয়মিত যোগ হচ্ছে।
    ai_training_bots = [
        "GPTBot",            # OpenAI — মডেল ট্রেনিং
        "Google-Extended",   # Google-এর AI ট্রেনিং (Googlebot সার্চের থেকে আলাদা)
        "ClaudeBot",         # Anthropic — মডেল ট্রেনিং
        "CCBot",             # Common Crawl — অনেক LLM-এর ডেটাসোর্স
        "Bytespider",        # ByteDance — মডেল ট্রেনিং
        "Meta-ExternalAgent",# Meta — AI ট্রেনিং
        "Applebot-Extended", # Apple — AI ট্রেনিং (Applebot সার্চের থেকে আলাদা)
    ]
    robots_lines = ["User-agent: Googlebot", "Allow: /", ""]
    for bot in ai_training_bots:
        robots_lines.append(f"User-agent: {bot}")
        robots_lines.append("Disallow: /")
        robots_lines.append("")
    robots_lines.append("User-agent: *")
    robots_lines.append("Allow: /")
    robots_lines.append("")
    robots_lines.append(f"Sitemap: {SITE_BASE_URL}/sitemap.xml")
    robots = "\n".join(robots_lines) + "\n"
    ROBOTS_OUTPUT.write_text(robots, encoding="utf-8")
    print(f"তৈরি হলো: {ROBOTS_OUTPUT}")


def stamp_service_worker():
    """VERSION ফাইলের সংখ্যাটা sw.js-এর ক্যাশ-নামে বসিয়ে docs/sw.js বানায়।
    এভাবে প্রতিবার ভার্সন বাড়লেই ব্যবহারকারীর ব্রাউজার পুরনো ক্যাশ ফেলে
    দিয়ে সব ফাইল নতুন করে ডাউনলোড করবে — অটো ক্যাশ-ক্লিন।"""
    if not SW_TEMPLATE.exists():
        print("সতর্কতা: sw_template.js পাওয়া যায়নি, sw.js আপডেট করা হলো না।", file=sys.stderr)
        return
    version = VERSION_FILE.read_text(encoding="utf-8").strip() if VERSION_FILE.exists() else "0"
    template = SW_TEMPLATE.read_text(encoding="utf-8")
    stamped = template.replace("__VERSION__", version)
    SW_OUTPUT.write_text(stamped, encoding="utf-8")
    print(f"তৈরি হলো: {SW_OUTPUT} (cache: oca-cache-{version})")


def _main():
    # TASK 9: বিল্ড দুই ধাপে হয় — আগে সব কিছু ভ্যালিডেট করা হয়, তারপরই
    # (এবং শুধুমাত্র সবকিছু ঠিক থাকলেই) কোনো আউটপুট ফাইল লেখা হয় বা
    # docs/topics/ কপি করা হয়। কোনো এক জায়গায় সমস্যা পেলে গোটা বিল্ড
    # non-zero এক্সিট-কোড দিয়ে থামে — আংশিক বা পুরনো/ভুল আউটপুট থাকে না।
    if yaml is None:
        print("✗ বিল্ড ব্যর্থ: pyyaml ইনস্টল নেই (প্রয়োজনীয় ডিপেন্ডেন্সি অনুপস্থিত)।", file=sys.stderr)
        print("   ঠিক করতে: pip install pyyaml", file=sys.stderr)
        sys.exit(1)

    if not TOPICS_DIR.exists():
        print("✗ বিল্ড ব্যর্থ: docs/topics/ ফোল্ডার পাওয়া যায়নি।", file=sys.stderr)
        sys.exit(1)

    all_errors = []
    entries = []

    for path in sorted(TOPICS_DIR.glob("*.md")):
        text = path.read_text(encoding="utf-8")
        # কিছু এডিটর (যেমন Windows Notepad) UTF-8 ফাইলের শুরুতে একটা অদৃশ্য
        # BOM ক্যারেক্টার যোগ করে দেয়, যেটা থাকলে নিচের frontmatter regex
        # (যা ফাইলের একদম শুরু থেকে '---' খোঁজে) ম্যাচ করতে ব্যর্থ হতো এবং
        # পুরো বিল্ড আটকে যেত। এখানেই স্ট্রিপ করে দেওয়া হচ্ছে, যাতে এমন
        # ফাইল থাকলেও নীরবে ঠিকভাবে পার্স হয়।
        text = text.lstrip("\ufeff")
        match = FRONTMATTER_RE.match(text)
        if not match:
            all_errors.append(f"{path.name}: frontmatter (---...---) পাওয়া যায়নি")
            continue
        try:
            meta = parse_frontmatter_yaml(match.group(1), path)
        except BuildError as e:
            all_errors.append(str(e))
            continue
        body = match.group(2)
        errors = validate_topic(path, meta, body)
        if errors:
            all_errors.extend(f"{path.name}: {e}" for e in errors)
            continue
        entries.append({
            "slug": path.stem,
            "title": meta.get("title", path.stem),
            "tags": meta.get("tags", []),
            "last_updated": meta.get("last_updated", ""),
            "snippet": extract_snippet(body),
            "body": strip_markdown(body),
            "file": f"topics/{path.name}",
        })

    if all_errors:
        print(f"✗ বিল্ড ব্যর্থ — {len(all_errors)} টা ভ্যালিডেশন সমস্যা পাওয়া গেছে:", file=sys.stderr)
        for e in all_errors:
            print(f"  ✗ {e}", file=sys.stderr)
        sys.exit(1)

    print(f"✓ সব ({len(entries)}) টপিক ফাইল ভ্যালিডেশন পাস করেছে।")

    # এখান থেকে সব ভ্যালিডেশন পাস করেছে — এখন থেকেই ফাইল-সিস্টেমে লেখা শুরু।
    # topics/*.md এখন সরাসরি docs/topics/-এই থাকে (আলাদা root-level সোর্স
    # ফোল্ডার নেই), তাই আগের মতো docs/topics/-এ আলাদা করে কপি করার দরকার নেই।

    stamp_service_worker()
    write_version_json()

    try:
        compile_ghotonaprobaho({e["slug"] for e in entries})
    except BuildError as e:
        print(f"✗ বিল্ড ব্যর্থ — {e}", file=sys.stderr)
        sys.exit(1)

    try:
        compile_top_news({e["slug"] for e in entries})
    except BuildError as e:
        print(f"✗ বিল্ড ব্যর্থ — {e}", file=sys.stderr)
        sys.exit(1)

    compile_mcq()

    OUTPUT_FILE.write_text(
        json.dumps({"topics": entries}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"তৈরি হলো: {OUTPUT_FILE} ({len(entries)} টি টপিক)")

    generate_topic_pages(entries)
    generate_sitemap_and_robots(entries)

def main():
    """`_main()`-কে wrap করে রাখা হয়েছে — কোনো অপ্রত্যাশিত/অচেনা সমস্যায়ও
    (যা উপরের নির্দিষ্ট ভ্যালিডেশনগুলো ধরতে পারেনি) বিল্ড যেন কাঁচা Python
    traceback না দেখিয়ে একটা পরিষ্কার এরর-মেসেজ দিয়ে non-zero exit করে।"""
    try:
        _main()
    except SystemExit:
        raise
    except Exception as e:
        print(f"✗ বিল্ড ব্যর্থ — অপ্রত্যাশিত সমস্যা: {type(e).__name__}: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
