#!/usr/bin/env node
/**
 * explanations.js — bcs-mcq ব্যাখ্যার ডেটাবেস (_dev/explanations.json) ব্যবহারের হেল্পার
 *
 * উদ্দেশ্য: একই প্রশ্ন বারবার নতুন করে ব্যাখ্যা না লিখে আগে যাচাইকৃত ব্যাখ্যা খুঁজে নেওয়া,
 * এবং আগের ভুল (যেমন ভুল correctIndex, ভুল তথ্যের ব্যাখ্যা) যেন আবার কপি না হয়।
 *
 * কমান্ড:
 *   node _dev/explanations.js lookup <candidates.json>
 *       candidates.json = [{"question": "...", "options": [...], "correctIndex": 0}, ...]
 *       প্রতিটা প্রশ্নের জন্য জানায়: DB-তে যাচাইকৃত ব্যাখ্যা আছে / শুধু ডেটা ফাইলে আছে (অযাচাইকৃত) /
 *       উত্তর মেলে না / কোথাও নেই (নতুন লিখতে হবে)
 *   node _dev/explanations.js check
 *       DB-এর প্রতিটা এন্ট্রি ডেটা ফাইলের সাথে মেলায়: উত্তর না মিললে exit 1;
 *       ব্যাখ্যা আলাদা হলে (যাচাইকৃত DB ব্যাখ্যা ≠ ডেটা ফাইলের ব্যাখ্যা) সতর্কবার্তা
 *   node _dev/explanations.js add <id> [--verified] [--source URL]... [--note "টেক্সট"]
 *       ডেটা ফাইল থেকে <id>-এর প্রশ্ন/উত্তর/ব্যাখ্যা DB-তে তোলে বা হালনাগাদ করে
 *
 * নীতি: শুধু সোর্স/গাণিতিক হিসেবে যাচাই করা ব্যাখ্যাতেই --verified দিন। আন্দাজে লেখা ব্যাখ্যা
 * verified:false থাকবে। ডেটা ফাইলগুলোই মূল উৎস — বিদ্যমান ~১৫০০ ব্যাখ্যা DB-তে কপি করা হয় না,
 * lookup সরাসরি ডেটা ফাইলেও খোঁজে।
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'bcs-mcq', 'data');
const DB_PATH = path.join(__dirname, 'explanations.json');
const SUBJECTS = ['bangla', 'english', 'math', 'computer', 'bangladesh', 'international', 'science', 'ethics', 'geography', 'mental'];

function normalize(q) {
  return String(q || '')
    .normalize('NFC')
    .toLowerCase()
    .replace(/[\s\-–—?।'"‘’“”,.:;()\[\]_]/g, '');
}

function loadAll() {
  const all = [];
  for (const s of SUBJECTS) {
    const file = path.join(DATA_DIR, s + '.js');
    if (!fs.existsSync(file)) continue;
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
    const arr = vm.runInContext('data_' + s, sandbox) || [];
    arr.forEach((e) => all.push({ file: s + '.js', ...e }));
  }
  return all;
}

function loadDb() {
  if (!fs.existsSync(DB_PATH)) return { entries: {} };
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function saveDb(db) {
  const sorted = {};
  Object.keys(db.entries).sort().forEach((k) => (sorted[k] = db.entries[k]));
  fs.writeFileSync(DB_PATH, JSON.stringify({ entries: sorted }, null, 2) + '\n', 'utf8');
}

const sameOpts = (a, b) =>
  Array.isArray(a) && Array.isArray(b) &&
  JSON.stringify(a.map(normalize).sort()) === JSON.stringify(b.map(normalize).sort());
const baseKey = (k) => String(k).split('#')[0];

const answerText = (e) => (Array.isArray(e.options) ? String(e.options[e.correctIndex] || '').trim() : '');

function cmdLookup(candFile) {
  if (!candFile) return die('ব্যবহার: node _dev/explanations.js lookup <candidates.json>');
  const cands = JSON.parse(fs.readFileSync(candFile, 'utf8'));
  const db = loadDb();
  const all = loadAll();
  const byKey = {};
  all.forEach((e) => (byKey[normalize(e.question)] = byKey[normalize(e.question)] || []).push(e));

  cands.forEach((c, i) => {
    const key = normalize(c.question);
    const ans = answerText(c);
    let dbe = db.entries[key + '#' + normalize(ans)] || db.entries[key];
    // একই প্রশ্ন-লেখা কিন্তু ভিন্ন বিকল্প = ভিন্ন প্রশ্ন; DB-এন্ট্রিতে বিকল্প থাকলে মিলিয়ে দেখি
    if (dbe && Array.isArray(dbe.options) && Array.isArray(c.options) && !sameOpts(dbe.options, c.options)) dbe = null;
    let inData = byKey[key] || [];
    const sameQ = inData.filter((e) => sameOpts(e.options, c.options));
    if (sameQ.length) inData = sameQ;
    const label = `#${i + 1} ${String(c.question).slice(0, 45)}`;
    if (dbe && dbe.verified) {
      const mismatch = ans && dbe.answer && ans !== dbe.answer;
      console.log(`${mismatch ? '⚠️ উত্তর-অমিল' : '✅ যাচাইকৃত'}  ${label}${mismatch ? `  (নতুন উত্তর "${ans}" ≠ DB "${dbe.answer}")` : ''}\n    ${dbe.explanation}`);
    } else if (inData.length) {
      const e = inData[0];
      const mismatch = ans && answerText(e) && ans !== answerText(e);
      console.log(`${mismatch ? '⚠️ উত্তর-অমিল' : '🟡 ডেটা ফাইলে আছে (অযাচাইকৃত)'}  ${label}  → ${e.file}#${e.id} [${e.exam}]${mismatch ? `  (নতুন "${ans}" ≠ বিদ্যমান "${answerText(e)}")` : ''}\n    ${e.explanation}`);
    } else {
      console.log(`❌ নেই — নতুন ব্যাখ্যা লিখুন  ${label}`);
    }
  });
}

function cmdCheck() {
  const db = loadDb();
  const all = loadAll();
  const byKey = {};
  all.forEach((e) => (byKey[normalize(e.question)] = byKey[normalize(e.question)] || []).push(e));
  let errors = 0;
  Object.entries(db.entries).forEach(([key, d]) => {
    let cands = byKey[baseKey(key)] || [];
    if (Array.isArray(d.options)) {
      // বিকল্পসহ সংরক্ষিত এন্ট্রি: শুধু একই বিকল্পের প্রশ্নের সাথে মেলাই
      cands = cands.filter((e) => sameOpts(e.options, d.options));
    } else if (cands.length > 1 && cands.some((e) => answerText(e) === d.answer)) {
      // পুরোনো এন্ট্রি (বিকল্প নেই) + একই লেখার একাধিক প্রশ্ন: অন্তত একটার উত্তর মিললেই ঠিক
      cands = cands.filter((e) => answerText(e) === d.answer);
    }
    cands.forEach((e) => {
      if (d.answer && answerText(e) && d.answer !== answerText(e)) {
        errors++;
        console.log(`❌ উত্তর-অমিল ${e.file}#${e.id}: ডেটা ফাইলে "${answerText(e)}", DB-তে "${d.answer}"`);
      }
      if (d.verified && String(d.explanation).trim() !== String(e.explanation).trim()) {
        console.log(`⚠️ ব্যাখ্যা আলাদা ${e.file}#${e.id} — DB-র যাচাইকৃত ব্যাখ্যা ডেটা ফাইলে বসান`);
      }
    });
  });
  console.log(errors ? `\n${errors}টা সমস্যা` : '✅ DB ও ডেটা ফাইলের উত্তর মিলছে');
  process.exit(errors ? 1 : 0);
}

function cmdAdd(args) {
  const id = args[0];
  if (!id) return die('ব্যবহার: node _dev/explanations.js add <id> [--verified] [--source URL] [--note "..."]');
  const verified = args.includes('--verified');
  const sources = [];
  let note;
  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--source') sources.push(args[++i]);
    else if (args[i] === '--note') note = args[++i];
  }
  const e = loadAll().find((x) => x.id === id);
  if (!e) return die(`id "${id}" কোনো ডেটা ফাইলে পাওয়া যায়নি`);
  const db = loadDb();
  const entry = { question: e.question, answer: answerText(e), options: e.options, explanation: e.explanation, verified };
  if (sources.length) entry.sources = sources;
  if (note) entry.note = note;
  // একই প্রশ্ন-লেখার ভিন্ন প্রশ্নের (ভিন্ন বিকল্প) জন্য আলাদা কী: <প্রশ্ন>#<উত্তর>
  let key = normalize(e.question);
  const prev = db.entries[key];
  if (prev && !(Array.isArray(prev.options) ? sameOpts(prev.options, e.options) : prev.answer === answerText(e))) {
    key = key + '#' + normalize(answerText(e));
  }
  db.entries[key] = entry;
  saveDb(db);
  console.log(`✅ DB-তে ${verified ? 'যাচাইকৃত' : 'অযাচাইকৃত'} এন্ট্রি সেভ: ${id}`);
}

function die(msg) {
  console.error(msg);
  process.exit(2);
}

const [cmd, ...rest] = process.argv.slice(2);
if (cmd === 'lookup') cmdLookup(rest[0]);
else if (cmd === 'check') cmdCheck();
else if (cmd === 'add') cmdAdd(rest);
else die('কমান্ড: lookup | check | add — বিস্তারিত ফাইলের মাথায় দেখুন');
