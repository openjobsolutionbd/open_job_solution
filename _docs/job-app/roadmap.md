# Automation App — পরিকল্পনা (ভবিষ্যৎ)

> **এটি `_docs/job-app-MD.md`-এর একটি অংশ** (ফাইল ভাগ করা হয়েছে যাতে কাজের সময় শুধু প্রয়োজনীয় অংশ পড়লেই চলে)। সেকশন নম্বর মূল ডকুমেন্টের সাথে অভিন্ন — পুরো সূচি: [`../job-app-MD.md`](../job-app-MD.md)।
> **⛔ মূল ফাইলের "AI-এর জন্য কঠোর নিষেধাজ্ঞা" ব্লক এই ফাইলেও সমানভাবে প্রযোজ্য** — শুধু Project Owner-এর নির্দেশে পরিবর্তন করা যাবে।
> **এতে আছে:** §১৬ Automation App পরিকল্পনা (এখনো তৈরি হয়নি — সব সেকশনের জন্য প্রযোজ্য পরিকল্পনা)
> **কখন পড়বেন:** শুধু Automation App নিয়ে কাজ করার সময়। কোনো সেকশনের ডেটা-এন্ট্রি বা সংশোধনের কাজে লাগবে না।

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

