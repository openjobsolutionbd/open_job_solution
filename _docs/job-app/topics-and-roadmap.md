# Topic System ও ভবিষ্যৎ পরিকল্পনা

> **এটি `_docs/job-app-MD.md`-এর একটি অংশ** (ফাইল ভাগ করা হয়েছে যাতে কাজের সময় শুধু প্রয়োজনীয় অংশ পড়লেই চলে)। সেকশন নম্বর মূল ডকুমেন্টের সাথে অভিন্ন — পুরো সূচি: [`../job-app-MD.md`](../job-app-MD.md)।
> **⛔ মূল ফাইলের "AI-এর জন্য কঠোর নিষেধাজ্ঞা" ব্লক এই ফাইলেও সমানভাবে প্রযোজ্য** — শুধু Project Owner-এর নির্দেশে পরিবর্তন করা যাবে।
> **এতে আছে:** §১৫ Pending Implementation Tasks, §১৬ Automation App পরিকল্পনা, §১৭ Topic System (অনুমোদিত topic তালিকাসহ)
> **কখন পড়বেন:** প্রশ্নে `topic` ফিল্ড দেওয়ার সময় (§১৭-এর তালিকা), `validateQuestion()` বা Automation নিয়ে কাজ করার সময়।

---

## ১৫. Pending Implementation Tasks

### ⏳ validateQuestion() — বাস্তবায়ন বাকি

**অবস্থা:** পরিকল্পিত, এখনো তৈরি হয়নি

**কাজটা কী:**
`data/exams/<examId>.json`-এ নতুন প্রশ্ন যোগ করার আগে যাচাই করবে — ডেটা সঠিক কিনা।

**যা যাচাই করবে:**

| চেক | নিয়ম |
|-----|-------|
| `id` format | `job-{YYYY}-{exam-slug}-q{NN}` মেনে চলছে কিনা |
| `examId` | খালি নয়, এবং `exam-archive.js`-এ এই `id` দিয়ে একটা entry সত্যিই আছে কিনা |
| `subject` value | শুধু `bangla` / `english` / `general-knowledge` / `math` — অন্য কিছু নয় |
| `topic` value | দেওয়া থাকলে Section ১৭-এর তালিকায় আছে কিনা |
| `qno` type | সংখ্যা (number), string বা বাংলা সংখ্যা নয় |
| `type` value | renderer.js-এ যে ধরনগুলো সাপোর্ট করে তার একটা কিনা |
| `id` uniqueness | একই `id` আগে আছে কিনা (Duplicate Guard) |

**Schema যা confirm হয়েছে (Section ৬ থেকে):**

```javascript
{
  id: "job-2025-dc-q01",            // বাধ্যতামূলক, unique
  examId: "job-2025-dc",  // বাধ্যতামূলক, exam-archive.js এর id এর সাথে মিলতে হবে
  subject: "bangla",                // বাধ্যতামূলক, ৪টির মধ্যে একটি
  topic: "পত্রলিখন",                 // ঐচ্ছিক
  qno: 1,                           // বাধ্যতামূলক, সংখ্যা
  marks: 5,                         // বাধ্যতামূলক
  type: "letter",                   // বাধ্যতামূলক — renderer.js এর type অনুযায়ী
  question: "প্রশ্নের টেক্সট",       // বাধ্যতামূলক
  // type অনুযায়ী আরো ফিল্ড: answer / parts / steps / letter / columns+rows ইত্যাদি
}
```

> মন্ত্রণালয়, পদ, তারিখ, সময়, পূর্ণমান এখানে থাকে না — সেগুলো `exam-archive.js`-এ আলাদা থাকে (Section ৭ দেখুন)।

**কখন বানাবে:** Written Exam কাজ শেষ হলে।

**AI-এর জন্য নির্দেশ:** এই সেকশন দেখলে সরাসরি `validateQuestion()` এবং `assertUniqueId()` function লিখতে পারবে — আর schema জিজ্ঞেস করতে হবে না।

---

### ✅ পরীক্ষা-ভিত্তিক ডেটা স্প্লিট + Lazy Loading — সম্পূর্ণ সমাধান হয়ে গেছে

**অবস্থা:** সম্পন্ন। এই কাজটা দুই ধাপে হয়েছে:

1. **প্রথম ধাপ (PR #204):** `job-solution.js`-এ সব পরীক্ষার সব প্রশ্ন এক ফাইলে থাকায় (১৫০০+ প্রশ্ন) একাধিক সেশন সমান্তরালে কাজ করলে বারবার merge conflict হতো — সমাধানে ডেটা `data/exams/<examId>.json`-এ ভাঙা হলো, কিন্তু `job-solution.js`-কে তখন **build-time-এ auto-generate** করে রাখা হয়েছিল (git-conflict সমস্যা সমাধান হলো, browser load-time সমস্যা তখনও থেকে গিয়েছিল)।
2. **দ্বিতীয় ধাপ:** `job-solution.js` ও তার build script (`build_job_solution.js`) সম্পূর্ণ বাদ দেওয়া হলো। এখন `written-exam/index.html` কোনো এক্সাম খোলার সময় সরাসরি সেই একটা `data/exams/<examId>.json` ফাইল ব্রাউজারে `fetch()` করে — সত্যিকারের runtime lazy loading।

**চূড়ান্ত আর্কিটেকচার:** বিস্তারিত Section ৪ দেখুন।

**Trade-off (সচেতনভাবে গ্রহণ করা):** আগে পুরো `job-solution.js` precache হতো বলে একবার অ্যাপ খুললে সব এক্সাম offline-এ পাওয়া যেত। এখন যে এক্সাম আগে একবারও খোলা হয়নি সেটা internet ছাড়া দেখা যাবে না (`written-exam/sw.js` শুধু আগে-fetch-করা এক্সাম runtime-এ cache করে)। **owner-এর সিদ্ধান্ত (২০২৬-০৮-৩০):** এই ট্রেড-অফ গ্রহণযোগ্য, বাংলাদেশে নেট-কানেকশন যথেষ্ট ভালো — "অফলাইনের জন্য ডাউনলোড" জাতীয় ফিচার প্রস্তাব করার দরকার নেই, এটা pending কাজ না।

**বাতিল হয়ে যাওয়া ফাইল:** `bangla.js`, `english.js`, `general-knowledge.js`, `math.js` (subject-filter ভিউ, কখনো ব্যবহৃতই হয়নি), `build_job_solution.js`, `data/job-solution.js` — সব মুছে ফেলা হয়েছে।

বিস্তারিত নিয়ম: `written-exam/data/exams/README.md`।

---

## ১৬. Automation App — পরিকল্পনা

### উদ্দেশ্য

প্রশ্নপত্রের ছবি দিলে AI নিজেই extract করে সঠিক ফরম্যাটে সাজিয়ে `.js` ফাইল তৈরি করে দেবে। Project Owner শুধু approve করবেন এবং Cloudflare-এ আপলোড করবেন।

### Workflow

```
Project Owner ছবি আপলোড করবেন
        ↓
AI বুঝবে — BCS MCQ / Primary MCQ / Written — কোন section
        ↓
প্রশ্ন, উত্তর, metadata extract করবে
        ↓
এই document-এর নিয়ম অনুযায়ী সঠিক ফরম্যাটে সাজাবে
        ↓
Project Owner preview দেখবেন, ভুল থাকলে ঠিক করবেন
        ↓
"Approve" করলে আপডেট করা .js ফাইল download হবে
        ↓
Project Owner Cloudflare Pages-এ আপলোড করবেন  ← একমাত্র manual কাজ
```

### তিনটা Section-এর জন্য আলাদা নিয়ম

| Section | AI কী করবে | Output ফাইল |
|---------|-----------|-------------|
| BCS MCQ | প্রশ্ন + ৪টা option + উত্তর extract, `bcs-NN-{subject}-q{NNN}` format | `data/{subject}.js` |
| Primary MCQ | বিষয় চিনবে, `pb/pm/pe/pg/pc` prefix দিয়ে id বানাবে | `mcq-job-solution/primary-mcq/data/data.js` |
| মন্ত্রণালয়ের MCQ | মন্ত্রণালয়, পদ, তারিখ, প্রশ্ন + সঠিক উত্তর extract করবে (অপশন/ব্যাখ্যা পরে), `<examId>-qNN` format | `mcq-job-solution/ministry-mcq/data/exams/<examId>.json` + `exam-archive.js` |
| Written Exam | মন্ত্রণালয়, পদ, তারিখ, প্রশ্ন extract করবে, `job-{YYYY}-{code}-q{NN}` format | `written-exam/data/exams/<examId>.json` + `exam-archive.js` |

### AI-এর জন্য নির্দেশ

ছবি পেলে প্রথমে section চিনবে, তারপর সেই section-এর নিয়ম (Section ৫, ৬, ৭, ৮, বা ৯) অনুযায়ী ফরম্যাট করবে। id generate করার আগে বিদ্যমান ফাইলের সর্বশেষ id দেখে নেবে যাতে duplicate না হয়।

### অবস্থা

⏳ পরিকল্পিত — এখনো তৈরি হয়নি।

---

## ১৭. Topic System — বিষয়ের ভেতরে সূক্ষ্ম ফিল্টার

### উদ্দেশ্য

`subject` দিয়ে বড় ভাগ হয় (বাংলা/ইংরেজি/গণিত/সাধারণ জ্ঞান)।
`topic` দিয়ে সেই ভাগের ভেতরে আরো সূক্ষ্মভাবে খোঁজা যাবে।

উদাহরণ: "শুধু সমাস প্রশ্ন দেখতে চাই" → `subject: "bangla"` + `topic: "সমাস"`

### নিয়ম

- `topic` ফিল্ড সবসময় **ঐচ্ছিক**
- পুরানো ডেটায় `topic` না থাকলে কোনো সমস্যা নেই — ফিল্টার স্বয়ংক্রিয়ভাবে স্কিপ করবে
- নিচের অনুমোদিত তালিকার বাইরে কোনো topic ব্যবহার করা যাবে না
- নিশ্চিত না হলে topic বাদ দেওয়াই ভালো — ভুল topic দেওয়া যাবে না

### অনুমোদিত Topic তালিকা

#### বাংলা (`subject: "bangla"`)

| topic মান | কোন ধরনের প্রশ্ন |
|-----------|-----------------|
| `সমাস` | ব্যাসবাক্যসহ সমাস নির্ণয় |
| `সন্ধি` | সন্ধি বিচ্ছেদ ও নির্ণয় |
| `কারক` | কারক ও বিভক্তি নির্ণয় |
| `বাগধারা` | বাগধারার অর্থ ও বাক্য গঠন |
| `এক-কথায়-প্রকাশ` | এক কথায় প্রকাশ |
| `বিপরীত-শব্দ` | বিপরীত বা বিলোম শব্দ |
| `প্রতিশব্দ` | সমার্থক বা প্রতিশব্দ |
| `শুদ্ধিকরণ` | বানান বা বাক্য শুদ্ধিকরণ |
| `ভাবসম্প্রসারণ` | ভাবসম্প্রসারণ |
| `পত্রলিখন` | আবেদনপত্র, চিঠি, দরখাস্ত |
| `রচনা` | প্রবন্ধ বা রচনা |
| `অনুবাদ` | বাংলা থেকে ইংরেজি বা ইংরেজি থেকে বাংলা অনুবাদ |
| `ব্যাকরণ-অন্যান্য` | উপরের কোনো category-তে পড়ে না এমন বাংলা ব্যাকরণ |

#### ইংরেজি (`subject: "english"`)

| topic মান | কোন ধরনের প্রশ্ন |
|-----------|-----------------|
| `paragraph` | Paragraph writing |
| `letter` | Letter, application writing |
| `translation` | Translation (Bengali to English / English to Bengali) |
| `fill-in-the-blanks` | Fill in the blanks (preposition, article, tense) |
| `sentence-making` | Sentence making with idioms/phrases |
| `grammar` | Tense, voice, narration, transformation |
| `vocabulary` | Synonyms, antonyms, spelling |
| `english-others` | উপরের কোনো category-তে পড়ে না এমন ইংরেজি প্রশ্ন |

#### গণিত (`subject: "math"`)

| topic মান | কোন ধরনের প্রশ্ন |
|-----------|-----------------|
| `বীজগণিত` | সমীকরণ, উৎপাদক, সরলীকরণ |
| `পাটিগণিত` | শতকরা, লাভ-ক্ষতি, সুদ-আসল, অনুপাত |
| `জ্যামিতি` | ক্ষেত্রফল, পরিসীমা, কোণ |
| `সংখ্যাতত্ত্ব` | গসাগু, লসাগু, মৌলিক সংখ্যা |
| `পরিসংখ্যান` | গড়, মধ্যক, প্রচুরক |
| `math-others` | উপরের কোনো category-তে পড়ে না এমন গণিত প্রশ্ন |

#### সাধারণ জ্ঞান (`subject: "general-knowledge"`)

| topic মান | কোন ধরনের প্রশ্ন |
|-----------|-----------------|
| `বাংলাদেশ` | বাংলাদেশের ইতিহাস, ভূগোল, সরকার, অর্থনীতি |
| `আন্তর্জাতিক` | বিশ্বের দেশ, সংস্থা, চুক্তি, ঘটনা |
| `বিজ্ঞান` | সাধারণ বিজ্ঞান, প্রযুক্তি |
| `সাম্প্রতিক` | সাম্প্রতিক ঘটনা ও খবর |
| `gk-others` | উপরের কোনো category-তে পড়ে না এমন সাধারণ জ্ঞান |

### UI তে কীভাবে দেখাবে

```
বিষয় → বাংলা ▼
টপিক → সমাস ▼       ← বিষয় বাছাই করলে সেই বিষয়ের topic অটো আসবে
         সন্ধি
         কারক
         বাগধারা
         ...
```

বাংলা বাছাই করলে বাংলার topic, ইংরেজি বাছাই করলে ইংরেজির topic।

### validateQuestion() এ যোগ করার নিয়ম (Section ১৫ দেখুন)

`topic` ফিল্ড থাকলে যাচাই করতে হবে —
- সংশ্লিষ্ট `subject` এর অনুমোদিত তালিকায় আছে কিনা
- না থাকলে error দেবে
