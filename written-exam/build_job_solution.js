#!/usr/bin/env node
// build_job_solution.js
// written-exam/data/exams/*.json থেকে সব পরীক্ষার ডেটা পড়ে
// written-exam/data/job-solution.js পুনরায় জেনারেট করে।
//
// ব্যবহার: node written-exam/build_job_solution.js
// নতুন এক্সাম যোগ করার পর এবং validate_data.js চালানোর আগে এটা চালান।

const fs   = require("fs");
const path = require("path");

const EXAMS_DIR = path.resolve(__dirname, "data/exams");
const OUT_FILE  = path.resolve(__dirname, "data/job-solution.js");

// ── 1. Read all exam JSON files (sorted → deterministic order) ──
const files = fs.readdirSync(EXAMS_DIR)
  .filter(f => f.endsWith(".json"))
  .sort();

if (files.length === 0) {
  console.error(`❌ ${EXAMS_DIR}-এ কোনো .json ফাইল নেই।`);
  process.exit(1);
}

let allQuestions = [];
let hadError = false;
for (const file of files) {
  const filePath = path.join(EXAMS_DIR, file);
  let arr;
  try {
    arr = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    console.error(`❌ ${file}: JSON পড়তে ব্যর্থ — ${e.message}`);
    hadError = true;
    continue;
  }
  if (!Array.isArray(arr)) {
    console.error(`❌ ${file}: কনটেন্ট একটা array হওয়া উচিত, কিন্তু তা নয়`);
    hadError = true;
    continue;
  }
  if (arr.length === 0) {
    console.error(`❌ ${file}: খালি array — অন্তত একটা প্রশ্ন থাকা উচিত`);
    hadError = true;
    continue;
  }
  allQuestions = allQuestions.concat(arr);
}

if (hadError) {
  console.error(`\n❌ উপরের ফাইল(গুলো) ঠিক করুন, তারপর আবার চালান। কোনো ফাইল লেখা হয়নি।`);
  process.exit(1);
}

console.log(`✔ ${files.length}টি ফাইল পড়া হয়েছে, মোট ${allQuestions.length}টি প্রশ্ন`);

// ── 2. Serialize each question object to JS (Bengali preserved, no unicode escapes) ──
function toJS(obj, indent) {
  // JSON.stringify with ensure_ascii=false equivalent: just use JSON.stringify
  // then unescape any \uXXXX sequences for Bengali readability
  return JSON.stringify(obj, null, indent)
    .replace(/\\u([\dA-Fa-f]{4})/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    );
}

// ── 3. Build the output file content ──
const header = `// ============================================================
// job-solution.js — Written Exam Data (AUTO-GENERATED — EDIT করবেন না)
// সোর্স: written-exam/data/exams/*.json
// রিফ্রেশ করতে: node written-exam/build_job_solution.js
// ============================================================

// ── Question Types ──────────────────────────────────────────
//
// "sub-parts"      → ক) খ) গ) — সন্ধি, সমাস, কারক, এক কথায়
//                    parts: [{ label, q, a }]
//
// "table"          → দুই বা তার বেশি কলামের ছক
//                    columns: [col1, col2, ...], rows: [[c1, c2, ...], ...]
//                    (৩+ কলামের টেবিলের জন্য columns/rows-এই আরেকটা এলিমেন্ট
//                    যোগ করুন — renderer.js যেকোনো সংখ্যক কলাম generic ভাবে
//                    হ্যান্ডেল করে। আলাদা কোনো "columns3" ফিল্ড নেই/দরকার নেই।)
//
// "paragraph"      → দীর্ঘ রচনা / অনুচ্ছেদ / ভাবসম্প্রসারণ
//                    answer: "string"
//
// "math"           → ধাপে ধাপে সমাধান
//                    steps: ["step1", "step2"]
//                    answer: "চূড়ান্ত উত্তর"
//                    alternative: { steps, answer } — optional
//
// "translate"      → অনুবাদ (বাংলা↔ইংরেজি)
//                    parts: [{ label, source, target }]
//
// "fill-gaps"      → শূন্যস্থান পূরণ (preposition/verb/article)
//                    parts: [{ sentence, answer }]
//
// "sentence-change"→ voice change / transform / correct sentence
//                    parts: [{ label, original, changed }]
//
// "idiom"          → বাগধারা / phrase with meaning + example
//                    parts: [{ label, phrase, meaning, example }]
//
// "letter"         → পত্র / আবেদনপত্র
//                    to: "প্রাপক"
//                    subject: "বিষয়"
//                    body: "মূল পত্র"
//                    closing: "ধন্যবাদান্তে / Yours faithfully"
//                    sender: "প্রেরকের নাম"
//
// "read-fill"      → passage পড়ে শূন্যস্থান পূরণ
//                    passage: "পুরো paragraph blanks সহ"
//                    answers: "a) ... b) ... c) ..."
//
// "short-qa"       → সাধারণ জ্ঞান, ছোট প্রশ্ন-উত্তর
//                    parts: [{ label, q, a }]
//
// ────────────────────────────────────────────────────────────

`;

// এক-লাইন (compact) ফরম্যাট ব্যবহার করা হচ্ছে ইচ্ছাকৃতভাবে — এই ফাইল
// auto-generated ও এডিট করার জন্য না (এডিট করতে হয় data/exams/*.json-এ),
// তাই readability-র চেয়ে ছোট ফাইল সাইজ ও দ্রুত browser load বেশি জরুরি।
// (multi-line ফরম্যাটে ফাইল সাইজ ~970KB থেকে ~1.7MB হয়ে যায়।)
const questionLines = allQuestions
  .map(q => "  " + toJS(q, null).replace(/\n/g, "\n  "))
  .join(",\n\n");

const footer = `\n\n  // পরবর্তী পরীক্ষার data এখানে যোগ করবেন না — data/exams/-এ নতুন ফাইল যোগ করুন\n];`;

const output = header + "const JOB_SOLUTIONS = [\n" + questionLines + footer + "\n";

// ── 4. Write output ──
fs.writeFileSync(OUT_FILE, output, "utf8");
const lineCount = output.split("\n").length;
const sizeKB    = (Buffer.byteLength(output, "utf8") / 1024).toFixed(1);
console.log(`✅ লেখা হয়েছে: ${OUT_FILE}`);
console.log(`   ${allQuestions.length}টি প্রশ্ন | ${files.length}টি পরীক্ষা | ${lineCount} লাইন | ${sizeKB} KB`);
