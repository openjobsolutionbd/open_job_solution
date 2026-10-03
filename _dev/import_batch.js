#!/usr/bin/env node
/**
 * import_batch.js — বাংলা MCQ (bcs-mcq/data/bangla.js)-এ এক পরীক্ষার প্রশ্নের ব্যাচ নিরাপদে যোগ করে।
 *
 * কেন: হাতে হাতে id বসানো/ডুপ্লিকেট দেখা/ফাইল জোড়া দিতে গিয়ে একাধিক সেশনের মধ্যে id-সংঘর্ষ ও
 * ভুলের ঝুঁকি থাকে। এই স্ক্রিপ্ট সবসময় ফাইলের বর্তমান সর্বোচ্চ id-র পরের id বসায় (তাই push-এর ঠিক
 * আগে main থেকে সর্বশেষ ফাইল নিয়ে চালান), এবং সব subject ফাইলে ডুপ্লিকেট দেখে।
 *
 * ব্যবহার:
 *   node _dev/import_batch.js <batch.json> --exam "৩৬তম বিসিএস প্রিলিমিনারি পরীক্ষা" [--dry]
 *   batch.json = [{"question","options":[৪টি],"correctIndex":0-3,"topic":"ভাষা|সাহিত্য","explanation"}, ...]
 *
 * নিয়ম: প্রশ্ন-লেখা ও বিকল্প (ক্রম বাদে) দুটোই একই হলে ডুপ্লিকেট — যোগ হয় না। শুধু প্রশ্ন-লেখা এক,
 * বিকল্প ভিন্ন হলে ভিন্ন প্রশ্ন হিসেবে যোগ হয়। যোগের পর `node _dev/validate_data.js` চালান।
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'bcs-mcq', 'data');
const TARGET = path.join(DATA_DIR, 'bangla.js');
const SUBJECTS = ['bangla', 'english', 'math', 'computer', 'bangladesh', 'international', 'science', 'ethics', 'geography', 'mental'];
const TOPICS = ['ভাষা', 'সাহিত্য'];

const norm = (q) => String(q || '').normalize('NFC').toLowerCase().replace(/[\s\-–—?।'"‘’“”,.:;()\[\]_]/g, '');
const sameOpts = (a, b) => JSON.stringify(a.map(norm).sort()) === JSON.stringify(b.map(norm).sort());
const die = (m) => { console.error('❌ ' + m); process.exit(2); };

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--'));
const ei = args.indexOf('--exam');
const exam = ei >= 0 ? args[ei + 1] : null;
const dry = args.includes('--dry');
if (!file || !exam) die('ব্যবহার: node _dev/import_batch.js <batch.json> --exam "<পরীক্ষার নাম>" [--dry]');

const batch = JSON.parse(fs.readFileSync(file, 'utf8'));
const existing = [];
let maxId = 0;
for (const s of SUBJECTS) {
  const f = path.join(DATA_DIR, s + '.js');
  if (!fs.existsSync(f)) continue;
  const sb = {};
  vm.createContext(sb);
  vm.runInContext(fs.readFileSync(f, 'utf8'), sb, { filename: f });
  (vm.runInContext('data_' + s, sb) || []).forEach((e) => {
    existing.push(e);
    if (s === 'bangla') maxId = Math.max(maxId, Number(String(e.id).split('-')[1]) || 0);
  });
}

const out = [];
let dup = 0, bad = 0;
batch.forEach((b, i) => {
  const label = `#${i + 1} ${String(b.question).slice(0, 40)}`;
  const problems = [];
  if (!b.question || !String(b.question).trim()) problems.push('প্রশ্ন নেই');
  if (!Array.isArray(b.options) || b.options.length !== 4 || b.options.some((o) => !String(o).trim())) problems.push('৪টি বিকল্প লাগবে');
  if (!Number.isInteger(b.correctIndex) || b.correctIndex < 0 || b.correctIndex > 3) problems.push('correctIndex ০–৩ হতে হবে');
  if (!TOPICS.includes(b.topic)) problems.push(`topic হতে হবে ${TOPICS.join('/')}`);
  if (!b.explanation || String(b.explanation).trim().length < 20) problems.push('ব্যাখ্যা নেই/খুব ছোট');
  if (problems.length) { bad++; console.log(`⛔ ${label}: ${problems.join('; ')}`); return; }
  const k = norm(b.question);
  const hit = existing.find((e) => norm(e.question) === k && Array.isArray(e.options) && sameOpts(e.options, b.options));
  if (hit) { dup++; console.log(`🟡 ডুপ্লিকেট (বাদ) ${label} → ${hit.id} [${hit.exam}]`); return; }
  out.push({ id: `bangla-${++maxId}`, exam, subject: 'বাংলা', topic: b.topic, question: b.question, options: b.options, correctIndex: b.correctIndex, explanation: b.explanation });
});

console.log(`\nযোগ হবে: ${out.length}, ডুপ্লিকেট: ${dup}, ত্রুটিপূর্ণ: ${bad}`);
if (bad) die('ত্রুটিপূর্ণ প্রশ্ন ঠিক না করা পর্যন্ত কিছু লেখা হয়নি');
if (!out.length || dry) { console.log(dry ? '(--dry: কিছু লেখা হয়নি)' : 'নতুন কিছু নেই'); process.exit(0); }

let src = fs.readFileSync(TARGET, 'utf8').replace(/\s+$/, '');
if (!src.endsWith('}];')) die('bangla.js-এর শেষ `}];` পাওয়া যায়নি — হাতে দেখুন');
src = src.slice(0, -2) + ',' + JSON.stringify(out).slice(1, -1) + '];\n';
fs.writeFileSync(TARGET, src);
console.log(`✅ ${out[0].id} থেকে ${out[out.length - 1].id} পর্যন্ত যোগ হয়েছে। এবার: node _dev/validate_data.js`);
