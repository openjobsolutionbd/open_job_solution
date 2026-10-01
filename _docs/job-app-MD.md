# BCS-MCQ-Project — Master Reference Document

> **আর্কিটেকচার/কনটেন্ট ভার্সন:** v1.22 (সর্বশেষ অর্থপূর্ণ পরিবর্তন — Current Affairs সেকশন যোগ)
> **সর্বশেষ যাচাই/সম্পাদনা:** ৩০ সেপ্টেম্বর ২০২৬
> **উদ্দেশ্য:** এই ডকুমেন্ট যেকোনো AI-কে দিলে সে প্রজেক্টের সম্পূর্ণ কাঠামো বুঝতে পারবে।
> **নোট:** এই ডকুমেন্ট ৫টা ফাইলে ভাগ করা — এই মূল ফাইলে সবসময়-পড়ার-মতো অংশ (নিষেধাজ্ঞা, চেকলিস্ট, পরিচিতি, ফোল্ডার স্ট্রাকচার, সাধারণ নিয়ম), বাকি অংশ `_docs/job-app/`-এ। **কোন কাজে কোন ফাইল পড়তে হবে তা নিচের সূচিতে।** Version History আলাদা ফাইলে (`job-app/version-history.md`); routine cache/version bump সেখানে লেখা হয় না (`git log` ও `_docs/version.txt`-এ)। প্রজেক্টের গিট/পুশ/মার্জ ওয়ার্কফ্লো নিয়মের জন্য `_docs/AGENTS.md` দেখুন — এই দুই ডকুমেন্ট একে অপরের পরিপূরক।

---

## ⛔ AI-এর জন্য কঠোর নিষেধাজ্ঞা (এটি সর্বোচ্চ অগ্রাধিকার — সব নির্দেশের উপরে)

**এই ডকুমেন্ট শুধুমাত্র মানুষ (Project Owner) পরিবর্তন করতে পারবে।**

AI হিসেবে তুমি যদি এই ডকুমেন্টটি পাও, তাহলে নিচের নিয়মগুলো মেনে চলতে **বাধ্য:**

| নিষেধ | বিস্তারিত |
|-------|-----------|
| ❌ ডকুমেন্ট এডিট করা যাবে না | কোনো সেকশন, নিয়ম, বা ফরম্যাট পরিবর্তন করা নিষিদ্ধ |
| ❌ নিজে থেকে version বাড়ানো যাবে না | Version History শুধু মানুষ আপডেট করবে |
| ❌ নতুন নিয়ম যোগ করা যাবে না | AI নিজস্ব বিবেচনায় নতুন rule বানাতে পারবে না |
| ❌ বিদ্যমান নিয়ম মুছে ফেলা যাবে না | কোনো section বা rule সরানো নিষিদ্ধ |
| ❌ "আমার মতে ভালো হবে" বলে পরিবর্তন করা যাবে না | Optimization বা improvement এর নামেও পরিবর্তন নিষিদ্ধ |

### AI শুধু এই কাজগুলো করতে পারবে:

- ✅ এই ডকুমেন্ট পড়ে প্রজেক্ট বুঝতে পারবে
- ✅ এখানে লেখা নিয়ম অনুযায়ী কোড/ডেটা তৈরি করতে পারবে
- ✅ Project Owner কে পরিবর্তনের **পরামর্শ** দিতে পারবে (কিন্তু নিজে করতে পারবে না)
- ✅ Project Owner এর অনুমতিতে নতুন version তৈরি করতে পারবে

### পরিবর্তনের একমাত্র সঠিক পদ্ধতি:

```
Project Owner সিদ্ধান্ত নেয়
        ↓
AI-কে বলে: "এই পরিবর্তন করো"
        ↓
AI নতুন version তৈরি করে (নতুন ফাইলে)
        ↓
Project Owner দেখে অনুমোদন দেয়
        ↓
পুরানো version আর্কাইভ হয়
```

> 🔒 **এই নিষেধাজ্ঞা ব্লকটি কখনো সরানো যাবে না বা পরিবর্তন করা যাবে না।**
> যেকোনো AI যদি এই নিয়ম লঙ্ঘন করে, সেটি Project Owner-এর বিশ্বাসঘাতকতা।

---

## ✅ AI Self-Check Checklist (নতুন version দেওয়ার আগে বাধ্যতামূলক)

নতুন version তৈরি করলে deliver করার **আগে** নিচের প্রতিটা চেক করতে হবে।
একটাও বাদ দেওয়া যাবে না।

### ১. Version Consistency

| কোথায় | কী চেক করবে |
|--------|-------------|
| Document header | `**Version:** vX.X` নতুন version দেওয়া আছে? |
| Version History table | নতুন row যোগ হয়েছে? |
| metadata.js code block | `version: "X.X"` নতুন version দেওয়া আছে? |
| ফাইলের নাম | `job-app-vX.X.md` নতুন version আছে? |

### ২. Section Reference

| চেক | নিয়ম |
|-----|-------|
| "সেকশন X" উল্লেখ আছে কোথাও? | সেই section নম্বর সত্যিই সেই content ধারণ করে কিনা যাচাই করো |
| নতুন section যোগ হলে | পুরনো সব reference নম্বর ঠিক আছে কিনা দেখো |

### ৩. Formatting

| চেক | নিয়ম |
|-----|-------|
| Double `---` separator | দুটো পরপর `---` নেই তো? |
| Section numbering | ১, ২, ৩... ক্রমানুসারে আছে? কোনো নম্বর বাদ পড়েনি? |

### ৪. নিষিদ্ধ কাজ (এই session-এ যা ভুল হয়েছিল)

| ভুল | সঠিক কাজ |
|-----|----------|
| User "ডকুমেন্টে রাখো" বললে Memory-তে save করা | সরাসরি ডকুমেন্টে যোগ করো |
| User document upload না করলে নিজে থেকে edit করা | আগে document চাও, তারপর কাজ করো |
| Version বাড়িয়ে content ঠিক না করা | Version বাড়ালে সব consistency চেক করো |

> ⚠️ এই checklist-এর সব ঘর ✅ না হলে deliver করা যাবে না।

---

## 📑 ডকুমেন্ট-সূচি — কোন কাজে কোন ফাইল পড়বেন (বাধ্যতামূলক)

এই মূল ফাইলের সব অংশ (নিষেধাজ্ঞা, চেকলিস্ট, §১, §২, §১০–§১৪) **সব কাজেই** পড়তে হবে। নিচের ফাইলগুলো **কাজ অনুযায়ী** পড়ুন — সংশ্লিষ্ট ফাইল না পড়ে সেই ধরনের কাজ শুরু করা যাবে না। সেকশন নম্বর সব ফাইলে অভিন্ন, তাই "Section ৬ দেখুন" লেখা থাকলে নিচের টেবিল থেকে ফাইল খুঁজে নিন।

| ফাইল | কোন সেকশন | কখন পড়বেন |
|------|-----------|-------------|
| `_docs/job-app-MD.md` (এই ফাইল) | নিষেধাজ্ঞা, চেকলিস্ট, §১, §২, §১০, §১১, §১২, §১৩, §১৪ | **সবসময়** |
| [`job-app/written-exam-data.md`](./job-app/written-exam-data.md) | §৩, §৪, §৫, §৬, §৭ | `written-exam/`-এ এক্সাম/প্রশ্ন যোগ বা সংশোধন; id বা `examId` নিয়ে যেকোনো কাজ |
| [`job-app/mcq-sections.md`](./job-app/mcq-sections.md) | §৫-ক, §৮, §৯, §৯-ক | `bcs-mcq/`, `primary-mcq/`, `ministry-mcq/`-এ প্রশ্ন যোগ বা সংশোধন |
| [`job-app/topics-and-roadmap.md`](./job-app/topics-and-roadmap.md) | §১৫, §১৬, §১৭ | প্রশ্নে `topic` দেওয়ার সময়; `validateQuestion()` বা Automation App নিয়ে কাজ |
| [`job-app/version-history.md`](./job-app/version-history.md) | Version History | শুধু নতুন অর্থপূর্ণ পরিবর্তনের রো যোগ করার সময় |

> **ভাগ করা ফাইল বদলালে:** `_dev/check_docs_consistency.js` (CI-র required check) নিশ্চিত করে — `_docs/job-app/`-এ ঠিক উপরের ৪টা ফাইলই আছে, প্রতিটা সেকশন-শিরোনাম মোট ঠিক একবার আছে (কোনোটা হারায়নি/ডুপ্লিকেট হয়নি), এবং প্রতিটা ফাইল এই সূচিতে উল্লিখিত। নতুন অংশ-ফাইল বানাতে হলে স্ক্রিপ্টের `PARTS` তালিকা ও এই সূচি একসাথে আপডেট করুন।

---

## ১. প্রজেক্ট পরিচিতি

**অ্যাপের নাম: Open Job Solution**

এটি বাংলাদেশের চাকরি পরীক্ষার প্রস্তুতির একটি ওয়েব অ্যাপ।
Cloudflare Pages-এ হোস্ট করা। কোনো GitHub dependency নেই।

রুটে (`/`) একটা হোম পেজ থাকে — সেখান থেকে তিনটা সেকশনে যাওয়া যায়:

| অ্যাপ | ফোল্ডার | কাজ |
|-------|---------|-----|
| BCS MCQ | `/bcs-mcq/` | MCQ প্র্যাকটিস |
| MCQ Job Solution (হাব) | `/mcq-job-solution/` | তিনটা সাব-সেকশনের প্রবেশদ্বার (নিচের তিনটা) |
| ↳ Primary MCQ | `/mcq-job-solution/primary-mcq/` | প্রাথমিক পরীক্ষার MCQ |
| ↳ NCTB MCQ | `/mcq-job-solution/nctb-mcq/` | NCTB পাঠ্যবইভিত্তিক MCQ (আপাতত "শীঘ্রই আসছে" পেজ) |
| ↳ বিভিন্ন মন্ত্রণালয়ের MCQ | `/mcq-job-solution/ministry-mcq/` | মন্ত্রণালয়/বছর ফিল্টারসহ নিয়োগ পরীক্ষার MCQ সমাধান |
| Written Exam | `/written-exam/` | লিখিত পরীক্ষার প্রশ্নব্যাংক |

### 🔒 মূল নিয়ম — সেকশন স্বাধীনতা (Section Independence)

তিনটা সেকশন **সম্পূর্ণ স্বাধীন**। একটা সেকশন আরেকটার উপর নির্ভর করবে না।

- প্রতিটা সেকশনের **নিজস্ব** `style.css`, `sw.js` থাকবে — কোনো ফাইল শেয়ার হবে না
- প্রতিটা সেকশন নিজের ডিজাইন, রং, layout, ও নিয়মে চলবে — অন্য সেকশনের সাথে মেলাতে হবে না
- প্রতিটা সেকশনের ডেটা ফরম্যাট আলাদা হতে পারে (সেকশন ৮ ও ৯ দেখুন) — এটা bug নয়, ইচ্ছাকৃত সিদ্ধান্ত
- একটা সেকশন এডিট করার সময় AI অন্য সেকশনের ফাইল ছোঁবে না, এবং অন্য সেকশনের convention অনুমান করে বসাবে না
- শুধু **হোম পেজে ফেরার link** (`⬅️ হোমে ফিরুন` প্যাটার্ন) প্রতিটা সেকশনে বাধ্যতামূলক — এটাই একমাত্র common জিনিস

### 📲 PWA নিয়ম — একটাই PWA

সেকশন স্বাধীন হলেও, **পুরো অ্যাপ মিলে একটাই PWA** — নাম "Open Job Solution"। তিনটা আলাদা PWA না।

| ফাইল | কোথায় | কাজ |
|------|--------|-----|
| `manifest.json` | **শুধু root-এ** (`/manifest.json`) | App name, icon, install prompt — একমাত্র উৎস |
| `sw.js` (root) | `/sw.js` | শুধু হোম পেজ cache করে, scope `/` |
| `sw.js` (প্রতি সেকশনে) | `/bcs-mcq/sw.js` ইত্যাদি | নিজের ফোল্ডারের জন্য আলাদা scope — অফলাইন কাজ চালায়, কিন্তু কোনো manifest.json নেই, তাই আলাদা install prompt আসবে না |

কোনো সেকশনের `index.html`-এ `<link rel="manifest">` থাকবে না — শুধু root `index.html`-এ থাকবে।

---

## ২. সম্পূর্ণ ফোল্ডার স্ট্রাকচার

```
📂 BCS-MCQ-Project              ← শুধু এই ফোল্ডার Cloudflare-এ আপলোড হয়
│
├── 📄 index.html               ← হোম পেজ (সেকশন বাছাই)
├── 📄 manifest.json            ← ★ একমাত্র manifest — "Open Job Solution" PWA
├── 📄 sw.js                    ← root SW, শুধু হোম পেজ cache করে (scope: /)
├── 📄 _headers
├── 📄 _redirects
│
├── 📁 bcs-mcq/                  ← সেকশন ১
│   ├── index.html / app.js / style.css / sw.js / version.txt
│   └── 📁 data/                 (science.js, computer.js, geography.js, bangla.js,
│                                  english.js, bangladesh.js, international.js,
│                                  math.js, mental.js, ethics.js)
│
├── 📁 mcq-job-solution/         ← সেকশন ২ (হাব — ভেতরে তিনটা সাব-সেকশন)
│   ├── index.html / sw.js       (হাব পেজ; sw.js হাব ও nctb-mcq/ পেজ cache করে)
│   ├── 📁 primary-mcq/          ← আগে root-এর primary-mcq/ ছিল; পুরোপুরি এখানে ঢুকে গেছে
│   │   ├── index.html / style.css / sw.js
│   │   └── 📁 data/
│   │       └── data.js          ← ⚠️ root-এ সরাসরি data.js না, data/ সাবফোল্ডারে
│   ├── 📁 nctb-mcq/             (আপাতত শুধু "শীঘ্রই আসছে" index.html)
│   └── 📁 ministry-mcq/         ← "বিভিন্ন মন্ত্রণালয়ের MCQ" (written-exam-এর মতো তালিকা + ফিল্টার)
│       ├── index.html / style.css / sw.js / mcq-renderer.js
│       ├── exam-archive.js      ← পরীক্ষার তালিকা (ministry/post/date/totalQuestions)
│       └── 📁 data/exams/<examId>.json
│
├── 📁 written-exam/             ← সেকশন ৩
│   ├── index.html / style.css / sw.js / renderer.js
│   ├── exam-archive.js
│   ├── PROGRESS.md              ← ডেটা-এন্ট্রি ট্র্যাকিং, কাজ শুরুর আগে অবশ্যই পড়ুন
│   ├── load_exams.js            ← exams/*.json লোড+মার্জ করার শেয়ার্ড helper (script-দের জন্য)
│   ├── check_bugs.js            ← ডেটা বাগ-চেকার (advisory, CI-তে required না)
│   ├── check-spelling.js        ← বাংলা spellcheck (advisory, CI-তে required না)
│   ├── generate_index.js        ← EXAM_INDEX.md রিজেনারেট করে
│   └── 📁 data/                 ← ⚠️ root-এ সরাসরি না, data/ সাবফোল্ডারে
│       └── 📁 exams/            ← ★ একমাত্র ডেটার উৎস — প্রতিটা পরীক্ষা একটা আলাদা .json ফাইলে
│                                  (ব্রাউজার সরাসরি এখান থেকেই fetch() করে, কোনো
│                                   একত্রিত "সব প্রশ্ন" ফাইল নেই — নিচে Section ৪ দেখুন)
│
├── 📁 current-affairs/          ← সেকশন ৪ (বাংলা কারেন্ট অ্যাফেয়ার্স)
│   └── 📁 docs/                 ← ⚠️ generated/synced — সরাসরি এডিট করবেন না
│       (mcq/, topics/, top-news/, ghotonaprobaho/ ইত্যাদি সাবফোল্ডার)
│
├── 📁 books/                    ← সেকশন ৫ (বই রিডার)
│   ├── index.html / book.html / style.css / sw.js
│   └── 📁 data/
│       └── manifest.js
│
├── 📁 _assets/                  ← shared static (fonts, icons, floating-search.js)
│
├── 📁 _docs/                    ← গভর্নেন্স/রেফারেন্স ডকুমেন্ট (এই ফাইল, AGENTS.md ইত্যাদি) — deploy হয় না
│   └── 📁 job-app/              ← এই ফাইলের ভাগ-করা অংশ (written-exam-data, mcq-sections, topics-and-roadmap, version-history)
├── 📁 _dev/                     ← স্ক্রিপ্ট (validate_data.js, session_status.sh, update_version.py) — deploy হয় না
└── 📁 _staging/                 ← ডেটা-এন্ট্রির অস্থায়ী কাজ (books-staging) — deploy হয় না

📁 admin/                       ← ⚠️ BCS-MCQ-Project ফোল্ডারের বাইরে রাখতে হবে
    └── metadata.js           ← কখনো Cloudflare-এ যাবে না
```

> নিয়ম: git/পুশ/মার্জ ওয়ার্কফ্লো `_docs/AGENTS.md`-এ, ডেটা-এন্ট্রি প্রগ্রেস প্রতিটা সেকশনের নিজের PROGRESS.md/STATUS.md ফাইলে (যেমন `written-exam/PROGRESS.md`) — এই ফাইলে সেগুলো ডুপ্লিকেট করা হয় না, সবসময় ঐ ফাইলগুলোই দেখুন সর্বশেষ অবস্থার জন্য।

প্রতিটা সেকশনের `sw.js` নিজের ফোল্ডারে নিজের scope নিয়ে কাজ করে (`/bcs-mcq/`, `/mcq-job-solution/` (হাব) ও তার ভেতরে `primary-mcq/`, `ministry-mcq/` প্রতিটার নিজস্ব sw.js, `/written-exam/`) — অফলাইন cache-এর জন্য। root `sw.js`-এর scope `/` হলেও এটা শুধু হোম পেজ handle করে; সেকশনগুলোর বেশি specific scope থাকায় browser সেগুলোকেই priority দেয়। `_headers` ফাইলে প্রতিটা scope-এর জন্য `Service-Worker-Allowed` আলাদাভাবে declare করতে হবে।

---

## ১০. admin/ ফোল্ডার সুরক্ষা

`admin/` ফোল্ডার **কখনো** Cloudflare Pages-এ যাবে না।

### সঠিক ফোল্ডার কাঠামো

```
📂 আমার-কম্পিউটার/
│
├── 📁 BCS-MCQ-Project/    ← এটাই Cloudflare-এ আপলোড হয়
│   ├── index.html
│   ├── written-exam/
│   └── ...
│
└── 📁 admin/              ← BCS-MCQ-Project-এর বাইরে, কখনো আপলোড হয় না
    └── metadata.js
```

> **নিয়ম:** `admin/` ফোল্ডারটি সবসময় `BCS-MCQ-Project` ফোল্ডারের **বাইরে** রাখতে হবে। ভেতরে রাখলে ভুলে আপলোড হয়ে যাওয়ার ঝুঁকি আছে।

---

## ১১. AI Processing Workflow

```
Exam Image / PDF
      ↓
OCR (ছবি থেকে লেখা বের করা)
      ↓
Metadata Extract (মন্ত্রণালয়, পদ, তারিখ, সময়, পূর্ণমান)
      ↓
exam-archive.js এ নতুন entry তৈরি (id ঠিক করা — Section ৫)
      ↓
Question Split (প্রশ্নগুলো আলাদা করা)
      ↓
Subject Classification (বিষয় নির্ধারণ)
      ↓
data/exams/<examId>.json নতুন ফাইল তৈরি — প্রতিটা প্রশ্নে examId যোগ করতে হবে
                         (exam-archive.js এ তৈরি করা id এর সাথে হুবহু মিলিয়ে,
                          এবং ফাইলের নামও সেই id-এর সাথে হুবহু মিলতে হবে)
      ↓
Cloudflare Pages Upload
```

> **⚠️ ভুল এড়াতে:** exam-archive.js এর `id` আগে ঠিক করে নিতে হবে, তারপর `data/exams/<সেই-id>.json` ফাইলের প্রতিটা প্রশ্নে সেই `id`-টাই `examId` হিসেবে বসাতে হবে। দুটো জায়গায় (এবং ফাইলের নামে) বানান বা অক্ষর এক বিন্দু আলাদা হলে প্রশ্ন পরীক্ষায় দেখাবে না।

---

## ১২. Subject Classification নিয়ম

AI শুধু এই ৪টি subject ব্যবহার করবে — নতুন কোনো subject বানাবে না:

| subject value | কোন ধরনের প্রশ্ন |
|---------------|-----------------|
| `bangla` | বাংলা ব্যাকরণ, সাহিত্য, ভাষা |
| `english` | English grammar, literature, vocabulary |
| `general-knowledge` | সাধারণ জ্ঞান, বাংলাদেশ, আন্তর্জাতিক, বিজ্ঞান |
| `math` | গণিত, সমীকরণ, পরিসংখ্যান |

subject নির্ধারণের পর, সম্ভব হলে Section ১৭-এর তালিকা থেকে সঠিক `topic` যোগ করতে হবে।
topic নিশ্চিত না হলে বাদ দেওয়া যাবে — ভুল topic দেওয়া যাবে না।

---

## ১৩. metadata.js — শুধু লোকাল

এই ফাইল `admin/` ফোল্ডারে থাকবে — Cloudflare-এ আপলোড হবে না।

```javascript
const APP_METADATA = {
  version: "1.7",
  subjects: [
    { id: "bangla",            name: "বাংলা" },
    { id: "english",           name: "English" },
    { id: "general-knowledge", name: "সাধারণ জ্ঞান" },
    { id: "math",              name: "গণিত" }
  ],
  examTypes: [
    "BCS", "NTRCA", "Primary", "Bank", "BPSC", "Other"
  ]
};
```

---

## ১৪. AI-এর জন্য গুরুত্বপূর্ণ নিয়ম

- **`data/exams/<examId>.json` একমাত্র ডেটা সোর্স** — প্রতিটা পরীক্ষা তার নিজের ফাইলে, একটা মনোলিথিক ফাইলে সব প্রশ্ন জড়ো করা যাবে না
- ফাইলের নাম হুবহু `examId`-এর সাথে মিলতে হবে (ব্রাউজার সরাসরি এই নাম দিয়েই fetch করে)
- `id` সবসময় unique — সেকশন ৫-এর নিয়ম মেনে বানাতে হবে, কখনো duplicate করা যাবে না
- প্রতিটা প্রশ্নে `examId` **বাধ্যতামূলক** — সংশ্লিষ্ট `exam-archive.js` entry-র `id` এর সাথে হুবহু মিলতে হবে (Section ৫ দেখুন); না মিললে প্রশ্ন UI তে দেখাবে না
- `qno` সবসময় সংখ্যা (number) — `"০১"` এর মতো string বা বাংলা সংখ্যা লেখা যাবে না; UI নিজেই বাংলা সংখ্যায় রূপান্তর করে দেখায়
- `exam-archive.js`-এ `date` সবসময় `YYYY-MM-DD` ফরম্যাটে লিখতে হবে
- `subject` ফিল্ডে শুধু: `bangla` / `english` / `general-knowledge` / `math`
- **গণিতের সমীকরণ `$...$` এর ভেতরে MathJax (LaTeX) সিনট্যাক্স দিয়ে লিখতে হবে** — যেমন `$64x^3 - 240x^2y$`। বিয়োগ চিহ্নের জন্য সবসময় সাধারণ হাইফেন (`-`) ব্যবহার করতে হবে, কখনো en-dash (`–`) বা em-dash (`—`) ব্যবহার করা যাবে না — কারণ MathJax এই চিহ্নগুলোকে বিয়োগ চিহ্ন হিসেবে চেনে না
- `ministry`, `post`, `date`, `duration`, `totalMarks` — এগুলো শুধু `exam-archive.js`-এ থাকবে, `data/exams/*.json`-এর প্রশ্নে পুনরাবৃত্তি করা যাবে না
- `written-exam/index.html`-এ প্রথমে `exam-archive.js` লোড হয়; প্রশ্নের ডেটা (`data/exams/<examId>.json`) exam খোলার সময় on-demand fetch হয়, আগে থেকে script tag দিয়ে লোড করা হয় না
- `admin/` ফোল্ডার সবসময় `BCS-MCQ-Project`-এর বাইরে রাখতে হবে
- কোনো প্রকাশক বা বইয়ের নাম রাখা যাবে না
- নতুন subject category বানানো যাবে না
- `topic` ফিল্ড **ঐচ্ছিক** — নিশ্চিত না হলে বাদ দেওয়া যাবে, কিন্তু ভুল topic দেওয়া যাবে না
- `topic` এর মান শুধু Section ১৭-এর অনুমোদিত তালিকা থেকে নিতে হবে — নিজে থেকে নতুন topic বানানো যাবে না
- **সেকশন স্বাধীনতা ভাঙা যাবে না** — `bcs-mcq/`, `mcq-job-solution/primary-mcq/`, `mcq-job-solution/ministry-mcq/`, `written-exam/` একে অন্যের `style.css`, `sw.js`, বা ডেটা ফরম্যাট ব্যবহার করবে না (সেকশন ১ দেখুন)
- **`manifest.json` শুধু root-এ থাকবে** — কোনো সেকশনের `index.html`-এ `<link rel="manifest">` যোগ করা যাবে না (অ্যাপ একটাই PWA — "Open Job Solution")
- প্রতিটা সেকশনের নিজস্ব `index.html`-এ `⬅️ হোমে ফিরুন` link থাকা বাধ্যতামূলক
- **`<script src="...">` এর path আর আসল ফাইলের লোকেশন হুবহু মিলতে হবে** — কোনো ফাইল `data/` সাবফোল্ডারে থাকলে `src="data/filename.js"` লিখতে হবে, শুধু `src="filename.js"` লিখলে ব্রাউজার ভুল জায়গায় খুঁজবে এবং পুরো সেকশন ভেঙে যাবে (v1.15-এ এই কারণে Primary MCQ ভাঙা ছিল)
- **HTML-এর `class="..."` আর CSS-এর সিলেক্টর নাম অক্ষরে-অক্ষরে এক হতে হবে** — একবচন/বহুবচন (`tag` বনাম `tags`) ভুল হলে স্টাইল প্রয়োগ হবে না, কোনো error ছাড়াই চুপচাপ ভেঙে থাকবে (v1.15-এ এই কারণে error badge স্টাইলহীন ছিল)
- **কোনো SVG ইনলাইন বসালে হয় SVG-তে `width`/`height` দিতে হবে, নয়তো তাকে ধরে রাখা wrapper-এ CSS দিয়ে সাইজ বেঁধে দিতে হবে** — নাহলে ব্রাউজার ডিফল্ট ৩০০×১৫০px সাইজ নেয় (v1.15-এ এই কারণে ট্যাব আইকন বিশাল দেখাত)
- নতুন কোনো `index.html`/`app.js`/`style.css` জমা দেওয়ার আগে নিচের ক্রস-চেক করতে হবে: (১) যত `<script src>` আছে সব আসল ফাইলের সাথে মেলে কিনা, (২) JS-এ ব্যবহৃত প্রতিটা `class="..."` নাম CSS ফাইলে হুবহু সংজ্ঞায়িত আছে কিনা

---

> **নোট:** এই ডকুমেন্ট BCS-MCQ-Project এর চূড়ান্ত রেফারেন্স।
> নতুন সিদ্ধান্ত হলে version বাড়িয়ে নতুন ফাইল তৈরি করুন।
