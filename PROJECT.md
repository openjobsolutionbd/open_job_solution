# Open Current Affairs — Project Notes

## ১. প্রজেক্ট কী

Open Current Affairs একটি static, topic-based current-affairs knowledge-base। প্রতিটি বিষয় `docs/topics/`-এ আলাদা Markdown page হিসেবে থাকে। Page-এ সর্বশেষ তথ্য এবং পরিবর্তনের ইতিহাস—দুইটিই থাকে। Website-এ search, topic reading, দৈনিক ঘটনাপ্রবাহ (daily events timeline), টপ নিউজ, dark mode এবং offline support আছে। প্রতিটি টপিকের জন্য আলাদা crawlable SEO পাতা (`docs/topic/<slug>/`), `sitemap.xml` ও `robots.txt`-ও জেনারেট হয়, যাতে সার্চ ইঞ্জিন প্রতিটি টপিক আলাদাভাবে ইনডেক্স করতে পারে।

## ২. Source ও generated output

```text
open-current-affairs/
├── PROJECT.md                 ← এই ফাইল (মাস্টার ডকুমেন্টেশন — সিস্টেম কীভাবে বানানো)
├── EDITORIAL_MEMORY.md        ← ক্রমবর্ধমান নিয়ম-খাতা (কনটেন্ট কীভাবে লেখা/গোছানো — প্রতি সেশনে আগে পড়তে হয়)
├── archive/                   ← মাসিক source/reference documents (ফাইনাল, প্রসেস-করা; দেখুন ৭নং সেকশন)
├── scripts/build_index.py     ← validation ও build script
├── scripts/sw_template.js     ← service-worker template
└── docs/                      ← Cloudflare Pages deploy root — এবং একইসাথে topic content-এর একমাত্র সোর্স
    ├── index.html              ← website application
    ├── vendor/                 ← local Markdown renderer ও sanitizer
    ├── fonts/                  ← বাংলা ওয়েবফন্ট (Kalpurush, Hind Siliguri, Noto Serif Bengali)
    ├── manifest.json           ← PWA metadata
    ├── icon-*.png              ← PWA icons
    ├── topics/                 ← একমাত্র মূল topic content (হাতে edit করার সোর্স)
    ├── topics-index.json      ← generated search index
    ├── topic/<slug>/index.html ← generated — প্রতিটি টপিকের আলাদা crawlable SEO পাতা (meta description, canonical, OG ট্যাগসহ), লোড হলেই মূল অ্যাপে (`/#slug`) রিডাইরেক্ট করে
    ├── ghotonaprobaho/         ← দৈনিক ঘটনাপ্রবাহের হাতে-লেখা সোর্স `.md` ফাইল (হাতে edit করার সোর্স)
    ├── ghotonaprobaho-index.json ← generated দৈনিক ঘটনাপ্রবাহ feed
    ├── top-news/               ← টপ নিউজ ট্যাবের হাতে-লেখা সোর্স `.md` ফাইল (হাতে edit করার সোর্স)
    ├── top-news-index.json    ← generated টপ নিউজ feed
    ├── sitemap.xml             ← generated — হোমপেজ + প্রতিটা টপিক পাতার sitemap
    ├── robots.txt              ← generated — crawler নির্দেশনা
    ├── sw.js                  ← generated service worker
    └── version.json           ← generated version (footer-এ দেখানো হয়)
```

**নোট (v1.1-এর কোনো এক পর্যায়ে বদলেছে):** আগে root-level আলাদা `topics/` ফোল্ডার ছিল (হাতে-edit করার সোর্স) যেখান থেকে build script `docs/topics/`-এ কপি করত। এখন সেই দুই-ফোল্ডার ব্যবস্থা আর নেই — `docs/topics/`-ই একইসাথে সোর্স এবং deploy হওয়া কনটেন্ট (single copy)। `scripts/build_index.py`-এর `TOPICS_DIR` সরাসরি `docs/topics/` নির্দেশ করে এবং কোনো `copytree` ধাপ নেই।

**গুরুত্বপূর্ণ (v1.0.0-এর পর যোগ হয়েছে):** যেকোনো কনটেন্ট-আপডেট কাজ শুরু করার আগে Claude অবশ্যই `EDITORIAL_MEMORY.md` পড়বে — সেখানে ব্যবহারকারীর আগের সিদ্ধান্ত থেকে জমা হওয়া ফরম্যাট/স্টাইল/কাঠামো-নিয়ম থাকে। নতুন কোনো স্থায়ী-যোগ্য সিদ্ধান্ত এলে Claude নিজে থেকেই সেখানে যোগ করে, কাজ শেষে ব্যবহারকারীকে জানিয়ে দেয়।

`docs/topics/`, `docs/ghotonaprobaho/` ও `docs/top-news/` হাতে edit করার source। `docs/topics-index.json`, `docs/ghotonaprobaho-index.json`, `docs/top-news-index.json`, `docs/topic/`, `docs/sitemap.xml`, `docs/robots.txt`, `docs/sw.js` ও `docs/version.json` build output—এগুলো হাতে edit করা উচিত নয়।

`archive/` website runtime-এ ব্যবহৃত হয় না; এটি source verification ও reference-এর জন্য রাখা হয়।

## ৩. Build flow

`python3 scripts/build_index.py` চালালে:

1. `docs/topics/*.md` frontmatter ও section structure validate হয়।
2. `scripts/sw_template.js` থেকে VERSION বসিয়ে `docs/sw.js` তৈরি হয়।
3. `VERSION` থেকে `docs/version.json` তৈরি হয় — ওয়েবসাইটের ফুটারে ভার্সন নম্বর দেখাতে ব্যবহৃত হয়।
4. `docs/ghotonaprobaho/*.md` থেকে `docs/ghotonaprobaho-index.json` তৈরি হয় (মাস অনুযায়ী গ্রুপ করে, নতুন থেকে পুরনো সাজানো)। কোনো বুলেটের শেষে `[[topic-slug]]` থাকলে সেটা `docs/topics/`-এর বিদ্যমান slug-এর সাথে মিলছে কিনা যাচাই হয় — না মিললে build ব্যর্থ হয় (টাইপো ধরার জন্য কড়া ভ্যালিডেশন)।
5. `docs/top-news/*.md` থেকে `docs/top-news-index.json` তৈরি হয় (নতুন থেকে পুরনো সাজানো একটাই ফ্ল্যাট তালিকা)। `docs/top-news/` ফোল্ডার না থাকলেও build ব্যর্থ হয় না — শুধু এই ফিচার বাদ দিয়ে চলে।
6. `docs/topics-index.json` search-এর জন্য তৈরি হয়।
7. প্রতিটা টপিকের জন্য `docs/topic/<slug>/index.html` — crawlable SEO পাতা (meta description, canonical, Open Graph ট্যাগ) — তৈরি হয়, যা লোড হয়েই মূল অ্যাপে (`/#slug`) রিডাইরেক্ট করে।
8. `docs/sitemap.xml` (হোমপেজ + প্রতিটা টপিক পাতা) ও `docs/robots.txt` তৈরি হয়।

আলাদা কপি-করার ধাপ নেই — `docs/topics/`-এর ফাইলগুলোই সরাসরি validate হয়, কোথাও থেকে কপি করা হয় না।

Validation ব্যর্থ হলে build non-zero exit করে এবং generated output লেখার আগেই থামে।

## ৪. Deployment

Cloudflare Pages-এর output directory `docs`। তাই `docs/` path বদলালে Cloudflare configuration-ও বদলাতে হবে। push-এর পর `.github/workflows/update-wiki.yml` build+verify চালিয়ে generated output সরাসরি `main`-এ commit করে (PR ছাড়া, ২০২৬-০৯-২০ থেকে) — Cloudflare Pages সেই commit-ই deploy করে। এই bot-push শুধু তখনই কাজ করে যখন `main`-এ branch protection/ruleset নেই; চালু থাকলে workflow স্পষ্ট এরর দিয়ে fail করবে (তখন github-actions-কে bypass দিতে হবে)। তবে Workflow-এর actual behavior যাচাই না করে generated output fresh হয়েছে ধরে নেওয়া যাবে না।

**Git push/PR workflow ও কনফার্মেশন ফরম্যাট (ব্যবহারকারীর নির্দেশে):**
- main branch protected — সরাসরি push যাবে না। প্রতিটা push আলাদা ব্রাঞ্চ থেকে PR খুলে merge করতে হবে (CI চেক informational, blocking নয়)। *(২০২৬-০৯-২১ থেকে সত্যিই কার্যকর: `required_pull_request_reviews` চালু, `enforce_admins: false`। bot এখন `WORKFLOW_PAT`-এর মাধ্যমে সরাসরি push করে — সেই PAT-এর owner (`openjobsolutionbd`) repo-admin, আর `enforce_admins: false` থাকায় admin-এর push "require pull request"-কে bypass করে (GitHub-এর ডকুমেন্টেড আচরণ, বাস্তবে যাচাই করা)। **সীমাবদ্ধতা:** এই bypass identity-ভিত্তিক, PAT-ভিত্তিক নয় — অর্থাৎ এই admin অ্যাকাউন্টের যেকোনো টোকেন (এই সেশনকে দেওয়া টোকেনসহ) সরাসরি push করেও protection এড়াতে পারবে। তাই protection মূলত অন্য কোনো কম-অনুমতির টোকেন/কলাবরেটরের ভুল-push ঠেকায়, এই admin-অ্যাকাউন্টকে নয় — branch+PR নিয়ম তাদের জন্য এখনো আচরণগত, প্রযুক্তিগত নয়। `enforce_admins` ভুলে `true` হয়ে গেলে bot-এর push-ও আটকাবে; তখন update-wiki-র ব্যর্থতা-Issue (v1.12.0) সতর্ক করবে।)*
- GitHub token ব্যবহারকারী পেস্ট করলে শুধু ওই সেশনেই ব্যবহার হবে, কোথাও সংরক্ষণ করা যাবে না। Push/PR কাজ শেষে token revoke করার রিমাইন্ডার দেওয়া যাবে না — ব্যবহারকারী নিজেই সেটা সামলাবেন।
- প্রতিটা সফল push/PR-merge-এর কনফার্মেশন বার্তার শেষে বোল্ড করে **"✅ পুশ সম্পূর্ণ"** লাইনটা লিখতে হবে (চ্যাট ইন্টারফেসে রঙিন টেক্সট দেখানো যায় না, তাই বোল্ড+চেকমার্ক সবুজ রঙের বিকল্প হিসেবে ব্যবহৃত হয়)।

## ৫. নিরাপত্তা ও রক্ষণাবেক্ষণ

- Markdown rendering-এর আগে sanitizer ব্যবহার করতে হবে।
- Topic filename lowercase slug format-এ রাখতে হবে।
- `title`, `tags` ও `last_updated` frontmatter valid রাখতে হবে।
- নতুন topic যোগ বা পুরনো topic বদলানোর পর build চালাতে হবে।
- বড় system change-এর পর `TEST_CHECKLIST.md` অনুসরণ করতে হবে।

## ৬. বর্তমান scope

এই project-এর website search, topic-reading, দৈনিক ঘটনাপ্রবাহ, টপ নিউজ, ও ইন্টারেক্টিভ MCQ কুইজ — সবগুলো নিয়েই। **(সংশোধন, ২০২৬-০৮-১২):** এখানে আগে ভুলভাবে লেখা ছিল "Quiz/MCQ এই scope-এর অংশ না" — বাস্তবে MCQ-এর নিজস্ব হাতে-লেখা raw সোর্স (`docs/mcq/*.md`), আলাদা build ধাপ (`compile_mcq()` → `docs/mcq-index.json`, `scripts/build_index.py`-এ), এবং লাইভ ওয়েবসাইটে ইন্টারেক্টিভ কুইজ UI (📝 MCQ ট্যাব, `docs/index.html`) — এই তিনটাই এখন সত্যিই আছে ও scope-এর অংশ। কোনো একটা session সম্ভবত পুরনো তথ্য দিয়ে এই লাইন লিখেছিল বা MCQ যোগ হওয়ার পর এই লাইন আপডেট করা হয়নি।

`docs/proshnottor/*.md` (প্র/উ আর্কাইভ) এখনও raw সোর্স হিসেবেই আছে, ওয়েবসাইটে wire করা হয়নি — এটা এখনো scope-এর বাইরে, যতক্ষণ না আলাদাভাবে যোগ করার সিদ্ধান্ত হয়।

পুরনো পরিবর্তনের ইতিহাস `CHANGELOG.md`-এ historical record হিসেবে থাকতে পারে, কিন্তু নতুন runtime বা maintenance নির্দেশনা হিসেবে ব্যবহার করা যাবে না।

## ৭. নতুন সংখ্যা প্রসেসিং: এক-ধাপ ওয়ার্কফ্লো (staging সিস্টেম বাদ, ২০২৬-০৮)

**২০২৬-০৮ পর্যন্ত এখানে একটা ৩-ধাপ staging সিস্টেম ছিল** (`archive-staging/YYYY-MM/` ফোল্ডারে raw OCR প্রথমে জমা, `STATUS.md`-এ pending/confirmed ট্র্যাক করে, পরে আলাদা সেশনে `docs/`-এ distribute)। ব্যবহারকারীর সিদ্ধান্তে এটা **সম্পূর্ণ বাদ দেওয়া হয়েছে** — একাধিক সমান্তরাল সেশন একই staging ফাইলে/`STATUS.md`-এ হাত দেওয়ার সংঘর্ষ, এবং দুই-ধাপে কাজ ভাগ হওয়ার overhead এড়াতে। `archive-staging/` ফোল্ডার ও `STAGING_GUIDE.md` মুছে ফেলা হয়েছে (git history-তে থেকে গেছে)।

**নতুন পদ্ধতি — সরাসরি এক ধাপে:**

1. ব্যবহারকারী ম্যাগাজিন পেজের ছবি/PDF দেয়।
2. Claude OCR করে/পড়ে, নিজে আরেকবার জুম করে রিচেক করে।
3. অনিশ্চিত কিছু থাকলে (অস্পষ্ট নাম, সংখ্যা, তারিখ) অনুমান না করে ব্যবহারকারীকে জিজ্ঞেস করে, প্রয়োজনে ওয়েব সার্চে যাচাই করে।
4. `bash scripts/check_topic.sh "কীওয়ার্ড"` দিয়ে ডুপ্লিকেট-চেক — বিদ্যমান টপিক থাকলে সেখানে merge, না থাকলে নতুন ফাইল।
5. কনফার্মেশনের পর **সরাসরি** সঠিক গন্তব্যে বসানো হয় — `docs/topics/*.md` (স্থায়ী বিষয়), `docs/ghotonaprobaho/*.md` (তারিখ-ভিত্তিক ঘটনা; প্রতি সেশন নিজের নতুন ফাইলে — `PR_GUIDE.md` "একাধিক সেশন"), `docs/top-news/*.md` (হাইলাইট), বা `docs/mcq/*.md` (MCQ আর্কাইভ) — কোনো intermediate staging ফাইল ছাড়াই।
6. `python3 scripts/build_index.py` + `scripts/verify_site.py` (বা একসাথে `preflight.sh`) দিয়ে validate।
7. Commit + push।

**একাধিক পেজ/টপিক একসাথে দিলে:** প্রতিটা টপিক আলাদাভাবে ব্যবহারকারীকে দেখিয়ে কনফার্ম করিয়ে নিয়ে তারপর commit করুন — মাঝপথের অবস্থা bash sandbox-এ (`/home/claude/work/` জাতীয় স্ক্র্যাচ ফোল্ডারে) রাখা যায়, কিন্তু সেটা repo-তে commit হওয়া "staging" না, শুধু কাজ চলাকালীন অস্থায়ী ফাইল।

**`archive/` ফোল্ডার (ফাইনাল রেফারেন্স) এই পরিবর্তনে প্রভাবিত হয়নি** — এটা আলাদা, ঐচ্ছিক concept (সম্পূর্ণ ম্যাগাজিন সংখ্যার raw টেক্সট আর্কাইভ)। বাস্তবে এটা অনিয়মিতভাবে রক্ষণাবেক্ষণ হয়েছে (এখন পর্যন্ত শুধু `archive/2026-04.md` আছে) — staging বাদ দেওয়ার সিদ্ধান্তের সাথে এর ভবিষ্যৎ সরাসরি সম্পর্কিত না, তাই অপরিবর্তিত রাখা হলো।

## ৮. ভবিষ্যৎ পরিকল্পনা (Roadmap)

**`docs/topics/` স্কেলিং:** টপিক সংখ্যা যখন অনেক বেড়ে যাবে (কয়েকশো ছাড়িয়ে যাওয়ার পর থেকেই বিবেচনা করা উচিত), তখন নিচের দুইটা পরিবর্তন দরকার হবে:

1. **সাব-ফোল্ডার কাঠামো:** `docs/topics/`-কে বছর/মাস অনুযায়ী সাব-ফোল্ডারে ভাগ করা (যেমন `docs/topics/2026/07/`) — একটা ফ্ল্যাট ফোল্ডারে হাজার হাজার ফাইল থাকলে GitHub-এর ওয়েব ইন্টারফেসে ব্রাউজ করা কঠিন হয়ে যায়। এতে `scripts/build_index.py`-এ ফাইল খোঁজার লজিক আপডেট করতে হবে।
2. **সার্চ/ফিল্টার UX:** `docs/index.html`-এ বর্তমান সার্চের পাশাপাশি ক্যাটাগরি বা ট্যাগ অনুযায়ী ফিল্টার/pagination যোগ করা, যাতে বড় তালিকায় নির্দিষ্ট টপিক খুঁজে পাওয়া সহজ থাকে।

কারিগরিভাবে (repo সাইজ, GitHub সীমা, ওয়েবসাইট লোডিং স্পিড) ৫,০০০+ টপিক ফাইলেও কোনো সমস্যা হবে না — এই দুইটা পরিবর্তন শুধু ব্যবহারযোগ্যতার (usability) জন্য দরকার হবে, জরুরি কোনো ভাঙন এড়ানোর জন্য নয়।
