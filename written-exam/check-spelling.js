#!/usr/bin/env node
// check-spelling.js (written-exam)
// ============================================================
// written-exam/data/exams/*.json ফাইলগুলো থেকে সব স্ট্রিং ভ্যালু বের করে
// _dev/check-spelling.js-এর মতো cspell (bn ডিকশনারি + _dev/known-words.txt)
// দিয়ে বানান চেক করে। কোনো আর্গুমেন্ট ছাড়া চালালে সব exam ফাইল চেক করে;
// নির্দিষ্ট ফাইল দিতে চাইলে: node check-spelling.js data/exams/xxx.json
//
// advisory — hard-fail করে না, শুধু রিপোর্ট করে।
// ============================================================

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DEV = path.join(ROOT, '_dev');

function collectStrings(node, out, skipKeys) {
  if (node == null) return;
  if (typeof node === 'string') {
    out.push(node);
    return;
  }
  if (Array.isArray(node)) {
    for (const item of node) collectStrings(item, out, skipKeys);
    return;
  }
  if (typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (skipKeys.has(k)) continue;
      collectStrings(v, out, skipKeys);
    }
  }
}

// id, subject, topic, label, type — এগুলো slug/মেটাডেটা, বানান-চেকের দরকার নেই
const SKIP_KEYS = new Set(['id', 'examId', 'subject', 'topic', 'label', 'type', 'qno', 'marks']);

// 'ভুল/অশুদ্ধ ঠিক করুন' জাতীয় প্রশ্নের ভুল-পাশটা (rows[][0] / parts[].q)
// ইচ্ছাকৃত ভুল — স্পেলচেক করার দরকার নেই, শুধু সঠিক পাশটা (rows[][1] / parts[].a)
// চেক হবে। topic-এর নাম অনেক variant-এ আছে (spelling, শুদ্ধ বানান,
// প্রমিত বানানরূপ, বাক্য শুদ্ধিকরণ...) তাই কীওয়ার্ড দিয়ে মেলানো হচ্ছে,
// আর table-type-এ columns হেডার ('Incorrect'/'অশুদ্ধ') দিয়েও শনাক্ত করা হচ্ছে।
function isCorrectionTopic(topic) {
  if (!topic) return false;
  return /spelling|শুদ্ধ|শুদ্ধি|correct/i.test(topic);
}
function isCorrectionColumns(columns) {
  if (!Array.isArray(columns) || columns.length < 2) return false;
  const first = columns[0];
  return first === 'Incorrect' || first === 'অশুদ্ধ';
}
// একটা মিশ্র-বিষয়ের প্রশ্নের মধ্যে একটা sub-part একা 'ভুল বানান/অশুদ্ধি সংশোধন
// করুন' জাতীয় হতে পারে (parent topic পুরোপুরি spelling না) — সেই part-এর q
// টেক্সটেই সনাক্ত করা হচ্ছে
function partLooksLikeCorrectionPrompt(qText) {
  if (typeof qText !== 'string') return false;
  return /অশুদ্ধি সংশোধন|ভুল বানান|শুদ্ধ (করে )?লিখ/u.test(qText);
}

function stringsForItem(item, skipKeys) {
  const strs = [];
  const looksLikeCorrection = isCorrectionTopic(item.topic) || isCorrectionColumns(item.columns);
  if (looksLikeCorrection && item.type === 'table' && Array.isArray(item.rows)) {
    const { rows, ...rest } = item;
    collectStrings(rest, strs, skipKeys);
    for (const row of rows) {
      if (Array.isArray(row) && row.length >= 2) strs.push(row[row.length - 1]);
    }
  } else if (
    looksLikeCorrection &&
    (item.type === 'sub-parts' || item.type === 'short-qa') &&
    Array.isArray(item.parts)
  ) {
    const { parts, ...rest } = item;
    collectStrings(rest, strs, skipKeys);
    for (const p of parts) {
      if (p && typeof p === 'object' && 'a' in p) strs.push(p.a);
      else collectStrings(p, strs, skipKeys);
    }
  } else if (item.type === 'short-qa' && Array.isArray(item.parts)) {
    // পুরো প্রশ্নটা spelling-বিষয়ক না, কিন্তু কোনো একটা sub-part হতে পারে
    const { parts, ...rest } = item;
    collectStrings(rest, strs, skipKeys);
    for (const p of parts) {
      if (p && typeof p === 'object' && partLooksLikeCorrectionPrompt(p.q)) {
        if ('a' in p) strs.push(p.a);
        if (p.label) strs.push(p.label);
      } else {
        collectStrings(p, strs, skipKeys);
      }
    }
  } else {
    collectStrings(item, strs, skipKeys);
  }
  // বাক্য/নির্দেশের মাঝে বা শেষে বসানো বিসর্গ (ঃ) কোলনের বিকল্প হিসেবে ব্যবহৃত
  // (যেমন "করুনঃ x + y = ...") — বানান-ভুল না, তাই স্ট্রিপ করে দিচ্ছি
  return strs.map((s) => (typeof s === 'string' ? s.replace(/ঃ(?=\s|$)/gu, '') : s));
}

function buildTextBlob(examId, items) {
  const lines = [];
  for (const item of items) {
    const qid = `${examId}-q${item.qno}`;
    lines.push(`###${qid}###`);
    const strs = stringsForItem(item, SKIP_KEYS);
    for (const s of strs) lines.push(s);
  }
  return lines.join('\n');
}

function defaultFiles() {
  const dir = path.join(ROOT, 'written-exam', 'data', 'exams');
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => path.join('written-exam', 'data', 'exams', f));
}

function main() {
  const args = process.argv.slice(2);
  const files = args.length > 0 ? args : defaultFiles();

  const tmpDir = fs.mkdtempSync(path.join(DEV, '.spellcheck-tmp-'));
  const configPath = path.join(DEV, 'cspell.json');

  const blobsByBase = new Map(); // basename(no ext) -> {file, blob}
  for (const file of files) {
    const absPath = path.isAbsolute(file) ? file : path.join(ROOT, file);
    const examId = path.basename(absPath, '.json');
    const items = JSON.parse(fs.readFileSync(absPath, 'utf8'));
    const blob = buildTextBlob(examId, items);
    const txtPath = path.join(tmpDir, examId + '.txt');
    fs.writeFileSync(txtPath, blob, 'utf8');
    blobsByBase.set(examId, { file, blob });
  }

  let stdout = '';
  try {
    stdout = execFileSync(
      'npx',
      ['cspell', '--no-progress', '--config', configPath, path.join(tmpDir, '*.txt')],
      { cwd: DEV, encoding: 'utf8', maxBuffer: 1024 * 1024 * 50, shell: false }
    );
  } catch (e) {
    stdout = e.stdout || '';
  }

  const perFileIssues = new Map(); // examId -> lines[]
  for (const rawLine of stdout.split('\n')) {
    const m = rawLine.match(/^(.*\.spellcheck-tmp-[^/]+\/([^/]+)\.txt):(\d+):(\d+) - (.*)$/);
    if (!m) continue;
    const examId = m[2];
    const lineNo = parseInt(m[3], 10) - 1;
    const rest = m[5];
    const blob = blobsByBase.get(examId)?.blob || '';
    const blobLines = blob.split('\n');
    let id = '?';
    for (let i = lineNo; i >= 0; i--) {
      const idm = (blobLines[i] || '').match(/^###(.+)###$/);
      if (idm) {
        id = idm[1];
        break;
      }
    }
    const wordm = rest.match(/Unknown word \(([^)]+)\)/);
    const word = wordm ? wordm[1] : rest;
    if (!perFileIssues.has(examId)) perFileIssues.set(examId, []);
    perFileIssues.get(examId).push(`[${id}] ${word}`);
  }

  fs.rmSync(tmpDir, { recursive: true, force: true });

  if (perFileIssues.size === 0) {
    console.log('সব ফাইল ঠিক আছে।');
    return;
  }

  for (const [examId, lines] of perFileIssues) {
    const { file } = blobsByBase.get(examId);
    console.log(`\u26a0\ufe0f  ${file}:`);
    for (const l of lines) console.log(`   ${l}`);
  }
  console.log(
    '\nউপরের শব্দগুলো ঠিক থাকলে _dev/known-words.txt এ যোগ করে দিন (এক লাইনে একটা শব্দ), এরপর আর ফ্ল্যাগ হবে না।'
  );
  console.log('(এটা advisory চেক — merge আটকাবে না।)');
  process.exitCode = 1;
}

main();
