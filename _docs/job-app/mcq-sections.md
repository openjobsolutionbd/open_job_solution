# MCQ সেকশনের ডেটা ফরম্যাট — BCS, Primary, মন্ত্রণালয়

> **এটি `_docs/job-app-MD.md`-এর একটি অংশ** (ফাইল ভাগ করা হয়েছে যাতে কাজের সময় শুধু প্রয়োজনীয় অংশ পড়লেই চলে)। সেকশন নম্বর মূল ডকুমেন্টের সাথে অভিন্ন — পুরো সূচি: [`../job-app-MD.md`](../job-app-MD.md)।
> **⛔ মূল ফাইলের "AI-এর জন্য কঠোর নিষেধাজ্ঞা" ব্লক এই ফাইলেও সমানভাবে প্রযোজ্য** — শুধু Project Owner-এর নির্দেশে পরিবর্তন করা যাবে।
> **এতে আছে:** §৫-ক id ফরম্যাট (BCS/Primary), §৮ BCS MCQ, §৯ Primary MCQ, §৯-ক মন্ত্রণালয়ের MCQ
> **কখন পড়বেন:** `bcs-mcq/` বা `mcq-job-solution/` (primary-mcq, ministry-mcq)-এ প্রশ্ন যোগ/সংশোধনের আগে।

---

## ৫-ক. BCS MCQ ও Primary MCQ — id ফরম্যাট (সেকশন ৫-এর অংশ)

> Written Exam ও exam-archive.js-এর id নিয়ম [`written-exam-data.md`](./written-exam-data.md)-এর §৫-এ।

### BCS MCQ — id ফরম্যাট

```
bcs-{NN}-{subject-code}-q{NNN}
```

| অংশ | নিয়ম | উদাহরণ |
|-----|-------|---------|
| `bcs` | সবসময় `bcs` | `bcs` |
| `{NN}` | BCS পরীক্ষার নম্বর | `44`, `45` |
| `{subject-code}` | নিচের BCS Subject Code টেবিল থেকে | `sci` |
| `q{NNN}` | প্রশ্ন নম্বর, ৩ সংখ্যায় | `q001`, `q025` |

### BCS Subject Code টেবিল

| subject | code |
|---------|------|
| `science.js` | `sci` |
| `computer.js` | `comp` |
| `geography.js` | `geo` |
| `bangla.js` | `ban` |
| `english.js` | `eng` |
| `bangladesh.js` | `bd` |
| `international.js` | `intl` |
| `math.js` | `math` |
| `mental.js` | `mental` |
| `ethics.js` | `ethics` |

### Primary MCQ — id ফরম্যাট

```
{subject-prefix}{NNN}
```

| subject | prefix | উদাহরণ |
|---------|--------|---------|
| bangla | `pb` | `pb001` |
| math | `pm` | `pm001` |
| english | `pe` | `pe001` |
| gk | `pg` | `pg001` |
| child | `pc` | `pc001` |

উদাহরণ: `pb001`, `pm012`, `pc003`

---

## ৮. BCS MCQ ডেটা ফরম্যাট

প্রতিটি subject ফাইলে (`science.js`, `bangla.js` ইত্যাদি) এই ফরম্যাট:

```javascript
const SCIENCE_QUESTIONS = [

  {
    id: "bcs-44-sci-q001",
    bcs: 44,
    question: "কোন মৌলিক অধাতু সাধারণ তাপমাত্রায় তরল?",
    options: {
      a: "আয়োডিন",
      b: "ব্রোমিন",
      c: "পারদ",
      d: "সালফার"
    },
    answer: "b"
  },

  {
    id: "bcs-44-sci-q002",
    bcs: 44,
    question: "সমুদ্রের গভীরতা মাপার যন্ত্রের নাম কি?",
    options: {
      a: "ব্যারোমিটার",
      b: "থার্মোমিটার",
      c: "ফ্যাদোমিটার",
      d: "অ্যানিমোমিটার"
    },
    answer: "c"
  }

];
```

### BCS MCQ ফিল্ডের মানে

| ফিল্ড | মানে | নোট |
|-------|------|-----|
| `id` | প্রশ্নের আলাদা পরিচয় | সেকশন ৫-ক-র (BCS) নিয়ম মেনে |
| `bcs` | কততম BCS পরীক্ষা | সংখ্যা |
| `question` | প্রশ্নের টেক্সট | |
| `options` | ৪টি বিকল্প | সবসময় `a`, `b`, `c`, `d` |
| `answer` | সঠিক উত্তরের key | `"a"` / `"b"` / `"c"` / `"d"` |

---

## ৯. Primary MCQ ডেটা ফরম্যাট

`mcq-job-solution/primary-mcq/data/data.js` ফাইলে বিষয় অনুযায়ী আলাদা array-তে প্রশ্ন থাকে:

```javascript
const PRIMARY_DATA = {

  bangla: [
    {
      id: "pb001",
      year: "২০২৩",             // বাংলা সংখ্যায়
      q: "বাংলা ভাষার উদ্ভব হয়েছে কোন ভাষা থেকে?",
      options: ["সংস্কৃত", "প্রাকৃত", "পালি", "অপভ্রংশ"],
      answer: 1,                // 0=প্রথম, 1=দ্বিতীয়, 2=তৃতীয়, 3=চতুর্থ
      explanation: "ব্যাখ্যা এখানে"
    }
  ],

  math:    [ /* একই ফরম্যাট */ ],
  english: [ /* একই ফরম্যাট */ ],
  gk:      [ /* একই ফরম্যাট */ ],
  child:   [ /* শিশু বিকাশ — একই ফরম্যাট */ ]

};
```

### Primary MCQ ফিল্ডের মানে

| ফিল্ড | মানে | নোট |
|-------|------|-----|
| `id` | প্রশ্নের আলাদা পরিচয় | subject prefix + সিরিয়াল নম্বর — যেমন `pb001` (bangla), `pm001` (math), `pe001` (english), `pg001` (gk), `pc001` (child) |
| `year` | পরীক্ষার বছর | বাংলা সংখ্যায় string — যেমন `"২০২৩"` |
| `q` | প্রশ্নের টেক্সট | |
| `options` | ৪টি বিকল্প | Array — `["ক", "খ", "গ", "ঘ"]` ক্রমে |
| `answer` | সঠিক উত্তরের index | `0` / `1` / `2` / `3` (options array-এর position) |
| `explanation` | উত্তরের ব্যাখ্যা | |

### Primary MCQ বিষয় তালিকা

| key | বিষয় |
|-----|-------|
| `bangla` | বাংলা |
| `math` | গণিত |
| `english` | English |
| `gk` | সাধারণ জ্ঞান |
| `child` | শিশু বিকাশ |

---

## ৯-ক. মন্ত্রণালয়ের MCQ (`mcq-job-solution/ministry-mcq/`) ডেটা ফরম্যাট

- `exam-archive.js` → `EXAM_ARCHIVE` array: `id`, `ministry`, `post`, `date` (`YYYY-MM-DD`), `totalQuestions` (ঠিক ওই JSON-এর প্রশ্নসংখ্যা)
- `data/exams/<id>.json` → array; প্রতিটা প্রশ্ন: `id`, `examId` (= ফাইলের নাম), `subject` (`bangla`/`english`/`math`/`general-knowledge`), `qno` (number), `q`, `answer` — সব আবশ্যক
- **`options`** (২–৬টা string, তার ঠিক একটা `answer`-এর সাথে হুবহু মিলবে) ও **`explanation`** — ঐচ্ছিক। ম্যাগাজিন-সমাধানে শুধু সঠিক উত্তর ছাপা থাকে, তাই আপাতত "প্রশ্ন + উত্তর" আকারে দেখায়; পরে options/ব্যাখ্যা যোগ করলে কার্ড নিজে থেকেই MCQ আকারে দেখাবে (কোড বদলাতে হবে না)
- UI: written-exam-এর মতো "সব মন্ত্রণালয় / সব বছর / রিসেট" ফিল্টার ও সার্চ; `_dev/validate_data.js` এই ফরম্যাট CI-তে যাচাই করে
- এখানকার প্রশ্ন **MCQ-উৎসের** — লিখিত পরীক্ষার প্রশ্ন `written-exam/`-এই থাকবে, এখানে মেশানো যাবে না
