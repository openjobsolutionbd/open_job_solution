#!/usr/bin/env node
// migrate_to_per_exam.js
//
// ⚠️  এই স্ক্রিপ্ট একবারই চালানো হয়েছে (2026-08-29 তারিখে) —
//     পুরনো monolithic job-solution.js থেকে written-exam/data/exams/
//     ফোল্ডারে প্রতিটা পরীক্ষার জন্য আলাদা JSON ফাইল বানাতে।
//     মাইগ্রেশন সম্পন্ন। এটা আবার চালানোর দরকার নেই।
//
//     নতুন এক্সাম যোগ করতে এই স্ক্রিপ্টের বদলে সরাসরি
//     written-exam/data/exams/<examId>.json ফাইল তৈরি করুন, তারপর
//     written-exam/build_job_solution.js চালান।
//
//     এই ফাইলটা শুধু ইতিহাস/রেফারেন্স হিসেবে রাখা হয়েছে।
//
// বর্তমান job-solution.js থেকে প্রতিটা examId-র জন্য আলাদা JSON ফাইল তৈরি করে।

const fs   = require("fs");
const path = require("path");

const SRC     = path.resolve(__dirname, "data/job-solution.js");
const OUT_DIR = path.resolve(__dirname, "data/exams");

// ── 1. Load via vm module (safe eval with own context, handles var declarations) ──
const vm  = require("vm");
const src = fs.readFileSync(SRC, "utf8");
const ctx = vm.createContext({});
vm.runInContext(src.replace("const JOB_SOLUTIONS", "var JOB_SOLUTIONS"), ctx);
const JOB_SOLUTIONS = ctx.JOB_SOLUTIONS;

if (!Array.isArray(JOB_SOLUTIONS)) {
  console.error("❌ JOB_SOLUTIONS লোড করা যায়নি।");
  process.exit(1);
}

const totalBefore = JOB_SOLUTIONS.length;
console.log(`✔ লোড হয়েছে: ${totalBefore}টি প্রশ্ন`);

// ── 2. Group by examId ──
const groups = {};
for (const q of JOB_SOLUTIONS) {
  if (!q.examId) { console.error("examId নেই:", q.id); process.exit(1); }
  (groups[q.examId] = groups[q.examId] || []).push(q);
}
const examIds = Object.keys(groups).sort();
console.log(`✔ মোট ${examIds.length}টি পরীক্ষা পাওয়া গেছে`);

// ── 3. Write one JSON per examId ──
fs.mkdirSync(OUT_DIR, { recursive: true });
for (const examId of examIds) {
  const filePath = path.join(OUT_DIR, `${examId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(groups[examId], null, 2), "utf8");
}
console.log(`✔ ${examIds.length}টি JSON ফাইল লেখা হয়েছে → ${OUT_DIR}`);

// ── 4. Verify: re-read every file, confirm total question count matches ──
let totalAfter = 0;
for (const examId of examIds) {
  const arr = JSON.parse(fs.readFileSync(path.join(OUT_DIR, `${examId}.json`), "utf8"));
  totalAfter += arr.length;
}

if (totalBefore !== totalAfter) {
  console.error(`❌ প্রশ্ন সংখ্যা মেলেনি! আগে: ${totalBefore}, পরে: ${totalAfter}`);
  process.exit(1);
}
console.log(`✅ যাচাই সম্পন্ন: ${totalAfter}টি প্রশ্ন — আগে ও পরে সমান।`);
console.log(`✅ সব ${examIds.length}টি examId উপস্থিত, কোনোটা বাদ পড়েনি।`);
