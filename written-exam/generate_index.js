// generate_index.js — data/exams/*.json ও exam-archive.js থেকে একটা রিডেবল
// ইনডেক্স (EXAM_INDEX.md) বানায়। মূল সোর্স ওই দুইটাই — নতুন exam
// যোগ/এডিট করার পর এই স্ক্রিপ্ট চালিয়ে ইনডেক্স রিফ্রেশ করে নিন।
//
// Usage: node generate_index.js

const fs = require('fs');
const vm = require('vm');
const path = require('path');
const { loadAllQuestions } = require('./load_exams');

const dir = __dirname;

function loadArray(file, varName) {
  const code = fs.readFileSync(path.join(dir, file), 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code + `\nthis.__OUT__ = ${varName};`, sandbox);
  return sandbox.__OUT__;
}

const questions = loadAllQuestions();
const exams = loadArray('exam-archive.js', 'EXAM_ARCHIVE');

const byExam = {};
questions.forEach(q => { (byExam[q.examId] = byExam[q.examId] || []).push(q); });

const sorted = [...exams].sort((a, b) => (a.date || '').localeCompare(b.date || ''));
sorted.reverse(); // নতুন তারিখ আগে

let md = '# Written Exam ইনডেক্স\n\n';
md += '> এই ফাইলটা `written-exam/data/exams/*.json` ও `written-exam/exam-archive.js`\n';
md += '> থেকে `generate_index.js` দিয়ে অটো-জেনারেট করা একটা রিডেবল ইনডেক্স।\n';
md += '> **মূল সোর্স ওই দুইটাই** — এই ইনডেক্স সরাসরি এডিট করবেন না।\n';
md += '> নতুন exam যোগ/এডিট করার পর `node generate_index.js` চালিয়ে রিফ্রেশ করুন।\n';
md += '> তারিখ অনুযায়ী সাজানো (নতুন থেকে পুরোনো)।\n\n';
md += `মোট exam: **${exams.length}**টা, মোট প্রশ্ন: **${questions.length}**টা\n\n`;
md += '| তারিখ | Exam ID (examId) | মন্ত্রণালয় | পদ | প্রশ্ন সংখ্যা | মোট মার্ক |\n';
md += '|---|---|---|---|---|---|\n';
sorted.forEach(e => {
  const count = (byExam[e.id] || []).length;
  md += `| ${e.date || '-'} | \`${e.id}\` | ${e.ministry || '-'} | ${e.post || '-'} | ${count} | ${e.totalMarks || '-'} |\n`;
});

fs.writeFileSync(path.join(dir, 'EXAM_INDEX.md'), md);
console.log(`EXAM_INDEX.md লেখা হয়েছে — ${exams.length} exam, ${questions.length} প্রশ্ন`);
