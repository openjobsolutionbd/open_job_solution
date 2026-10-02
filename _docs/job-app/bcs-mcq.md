# BCS MCQ — id ফরম্যাট ও ডেটা ফরম্যাট

> **এটি `_docs/job-app-MD.md`-এর একটি অংশ** (ফাইল ভাগ করা হয়েছে যাতে কাজের সময় শুধু প্রয়োজনীয় অংশ পড়লেই চলে)। সেকশন নম্বর মূল ডকুমেন্টের সাথে অভিন্ন — পুরো সূচি: [`../job-app-MD.md`](../job-app-MD.md)।
> **⛔ মূল ফাইলের "AI-এর জন্য কঠোর নিষেধাজ্ঞা" ব্লক এই ফাইলেও সমানভাবে প্রযোজ্য** — শুধু Project Owner-এর নির্দেশে পরিবর্তন করা যাবে।
> **এতে আছে:** §৫-ক BCS id ফরম্যাট ও BCS Subject Code টেবিল, §৮ BCS MCQ ডেটা ফরম্যাট
> **কখন পড়বেন:** `bcs-mcq/`-এ প্রশ্ন যোগ/সংশোধনের আগে। (Primary বা মন্ত্রণালয় MCQ-এর কাজে লাগবে না — সেগুলোর জন্য [`primary-mcq.md`](./primary-mcq.md) ও [`ministry-mcq.md`](./ministry-mcq.md)।)

---

## ৫-ক. BCS MCQ — id ফরম্যাট (সেকশন ৫-এর অংশ)

> Written Exam ও exam-archive.js-এর id নিয়ম [`written-exam.md`](./written-exam.md)-এর §৫-এ।

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
