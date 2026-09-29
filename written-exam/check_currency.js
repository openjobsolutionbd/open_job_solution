#!/usr/bin/env node
// check_currency.js
// ============================================================
// written-exam-এর সময়-সংবেদনশীল প্রশ্নগুলো স্বয়ংক্রিয়ভাবে নজরে রাখে।
//
// ডেটা: written-exam/data/current-status.json
//   প্রতিটা item = একটা প্রশ্ন (একাধিক পরীক্ষায় থাকলে targets-এ সবগুলো)।
//   আসল উত্তর (data/exams/*.json) এই স্ক্রিপ্ট কখনো ছোঁয় না।
//
// কী পরীক্ষা করে:
//   ১) কাঠামো (ERROR): target-এর id/part আছে কিনা, qMatch মেলে কিনা,
//      topic ফাইল আছে কিনা, class/তারিখ ঠিক কিনা।
//   ২) TOPIC_CHANGED (নজর): item-এর কারেন্ট অ্যাফেয়ার্স পাতার
//      "## বর্তমান তথ্য" অংশ বদলেছে কিনা (হ্যাশ মিলিয়ে)।
//   ৩) REVIEW_DUE (নজর): reviewAfter তারিখ পেরিয়ে গেছে কিনা।
//
// এই স্ক্রিপ্ট উত্তর নিজে বদলায় না — শুধু জানায়। সিদ্ধান্ত রিভিউয়ের পর।
//
// ব্যবহার:
//   node check_currency.js                    # পরীক্ষা + রিপোর্ট প্রিন্ট
//   node check_currency.js --report out.md    # রিপোর্ট ফাইলেও লেখে
//   node check_currency.js --validate-only    # শুধু কাঠামো (PR ব্লক করার জন্য)
//   node check_currency.js --init             # যেসব item-এ হ্যাশ নেই সেগুলোতে বসায়
//   node check_currency.js --accept <key|all> [--review-in-days N] [--status "নোট"]
//                                             # রিভিউ শেষ: হ্যাশ হালনাগাদ, verifiedOn বসানো,
//                                             # reviewAfter সরানো; --status দিলে নোটও (asOf=আজ) বসে
//                                             # (--status শুধু একটা key-র সাথে চলে, all-এর সাথে নয়)
//
// exit code: 0 = সব ঠিক, 1 = কাঠামোগত ERROR, 2 = শুধু নজর-দেওয়ার-মতো বিষয় আছে
// ============================================================

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { loadAllQuestions } = require('./load_exams');

// পথগুলো env দিয়ে বদলানো যায় — শুধু check_currency.test.js-এর জন্য (আলাদা নমুনা ডেটায় চালাতে)
const STATUS_FILE = process.env.CURRENCY_STATUS_FILE || path.join(__dirname, 'data', 'current-status.json');
const TOPICS_DIR = process.env.CURRENCY_TOPICS_DIR || path.join(__dirname, '..', 'current-affairs', 'docs', 'topics');
const EXAMS_DIR = process.env.CURRENCY_EXAMS_DIR || undefined; // ফাঁকা হলে load_exams-এর ডিফল্ট
const CLASSES = ['fast', 'slow', 'past', 'future'];
const REVIEW_DAYS = { fast: 45, slow: 180 };
const SECTION_HEADING = '## বর্তমান তথ্য';

function today() {
  // পরীক্ষার জন্য CURRENCY_TODAY=YYYY-MM-DD দিয়ে আজকের তারিখ বদলানো যায়
  return process.env.CURRENCY_TODAY || new Date().toISOString().slice(0, 10);
}

function isIsoDate(s) {
  return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(Date.parse(s));
}

function addDays(iso, n) {
  const d = new Date(iso + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

// কারেন্ট অ্যাফেয়ার্স পাতার "## বর্তমান তথ্য" অংশ (পরের "## " পর্যন্ত)
function currentSection(slug) {
  const file = path.join(TOPICS_DIR, slug + '.md');
  if (!fs.existsSync(file)) return null;
  const md = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const start = md.indexOf(SECTION_HEADING);
  if (start === -1) return '';
  const rest = md.slice(start + SECTION_HEADING.length);
  const next = rest.search(/\n## /);
  return (next === -1 ? rest : rest.slice(0, next)).replace(/\s+/g, ' ').trim();
}

function hashOf(text) {
  return crypto.createHash('sha1').update(text, 'utf8').digest('hex').slice(0, 12);
}

function topicHashes(topics) {
  const out = {};
  for (const t of topics) {
    const sec = currentSection(t);
    if (sec !== null) out[t] = hashOf(sec);
  }
  return out;
}

function readStatusFile() {
  return JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'));
}

function writeStatusFile(doc) {
  fs.writeFileSync(STATUS_FILE, JSON.stringify(doc, null, 2) + '\n', 'utf8');
}

function buildQuestionIndex() {
  const idx = new Map();
  for (const q of loadAllQuestions(EXAMS_DIR)) idx.set(q.id, q);
  return idx;
}

function validate(doc, qIndex) {
  const errors = [];
  if (!doc || !Array.isArray(doc.items)) {
    return ['current-status.json-এ "items" array নেই'];
  }
  const keys = new Set();
  const seenTargets = new Map();
  for (const it of doc.items) {
    const where = `[${it.key || '(key নেই)'}]`;
    if (!it.key) errors.push(`${where} "key" নেই`);
    else if (keys.has(it.key)) errors.push(`${where} key ডুপ্লিকেট`);
    keys.add(it.key);
    if (!CLASSES.includes(it.class)) errors.push(`${where} class ভুল: ${JSON.stringify(it.class)}`);
    if (typeof it.status !== 'string') errors.push(`${where} "status" স্ট্রিং হতে হবে (ফাঁকা "" চলবে)`);
    if (it.status && !isIsoDate(it.asOf)) errors.push(`${where} status আছে কিন্তু "asOf" (YYYY-MM-DD) নেই`);
    if (it.asOf != null && !isIsoDate(it.asOf)) errors.push(`${where} "asOf" তারিখ ভুল`);
    if (it.reviewAfter != null && !isIsoDate(it.reviewAfter)) errors.push(`${where} "reviewAfter" তারিখ ভুল`);
    if (it.verifiedOn != null && !isIsoDate(it.verifiedOn)) errors.push(`${where} "verifiedOn" তারিখ ভুল`);
    if (!Array.isArray(it.topics)) errors.push(`${where} "topics" array নেই`);
    else {
      for (const t of it.topics) {
        if (!fs.existsSync(path.join(TOPICS_DIR, t + '.md'))) errors.push(`${where} topic পাতা নেই: ${t}`);
      }
    }
    if (!Array.isArray(it.targets) || it.targets.length === 0) {
      errors.push(`${where} "targets" ফাঁকা`);
      continue;
    }
    for (const tg of it.targets) {
      const tk = `${tg.id}#${tg.part == null ? '-' : tg.part}`;
      if (seenTargets.has(tk)) errors.push(`${where} target ডুপ্লিকেট (${tk}), আগে ছিল ${seenTargets.get(tk)}-তে`);
      seenTargets.set(tk, it.key);
      const q = qIndex.get(tg.id);
      if (!q) { errors.push(`${where} প্রশ্ন পাওয়া যায়নি: ${tg.id}`); continue; }
      let text;
      if (tg.part == null) {
        text = q.question || '';
      } else {
        const p = Array.isArray(q.parts) ? q.parts[tg.part] : null;
        if (!p) { errors.push(`${where} ${tg.id}-এ parts[${tg.part}] নেই`); continue; }
        text = p.q || '';
      }
      const norm = s => String(s).replace(/\s+/g, ' ').trim();
      if (tg.qMatch && !norm(text).startsWith(norm(tg.qMatch))) {
        errors.push(`${where} ${tg.id}${tg.part == null ? '' : `[part ${tg.part}]`}: প্রশ্নের শুরু আর qMatch মেলে না (ডেটা সরে গেছে?)`);
      }
    }
  }
  return errors;
}

function findings(doc) {
  const out = [];
  const now = today();
  let withoutStatus = 0;
  for (const it of doc.items) {
    if (!it.status) withoutStatus++;
    if (it.topicHashes) {
      const changed = [];
      for (const t of it.topics || []) {
        const sec = currentSection(t);
        if (sec === null) continue;
        if (it.topicHashes[t] && it.topicHashes[t] !== hashOf(sec)) changed.push(t);
      }
      if (changed.length) out.push({ type: 'TOPIC_CHANGED', item: it, detail: changed });
    }
    if (it.reviewAfter && it.reviewAfter <= now) {
      out.push({ type: 'REVIEW_DUE', item: it, detail: it.reviewAfter });
    }
  }
  return { list: out, withoutStatus };
}

function targetsLabel(it) {
  const t = it.targets.slice(0, 3).map(x => `${x.id.replace(/^job-/, '')}${x.part == null ? '' : ` (অংশ ${x.part + 1})`}`);
  return t.join(', ') + (it.targets.length > 3 ? ` +${it.targets.length - 3}` : '');
}

function buildReport(doc, found, withoutStatus) {
  const L = [];
  const changed = found.filter(f => f.type === 'TOPIC_CHANGED');
  const due = found.filter(f => f.type === 'REVIEW_DUE');
  L.push(`## written-exam — বর্তমান-অবস্থা নজরদারি (${today()})`);
  L.push('');
  L.push(`মোট ${doc.items.length}টা প্রশ্ন নজরে আছে। বর্তমান-অবস্থার নোট লেখা হয়েছে ${doc.items.length - withoutStatus}টার, বাকি ${withoutStatus}টা এখনো ফাঁকা।`);
  L.push('');
  if (changed.length) {
    L.push(`### কারেন্ট অ্যাফেয়ার্স পাতা বদলেছে (${changed.length}টা প্রশ্ন)`);
    L.push('"## বর্তমান তথ্য" অংশ বদলেছে, তাই এই প্রশ্নগুলোর উত্তর/নোট এখনো ঠিক কিনা দেখা দরকার।');
    L.push('');
    for (const f of changed) {
      L.push(`- \`${f.item.key}\` [${f.item.class}] — পাতা: ${f.detail.join(', ')} — ${targetsLabel(f.item)}`);
    }
    L.push('');
  }
  if (due.length) {
    L.push(`### রিভিউয়ের সময় হয়েছে (${due.length}টা প্রশ্ন)`);
    L.push('');
    for (const f of due) {
      L.push(`- \`${f.item.key}\` [${f.item.class}] — নির্ধারিত ${f.detail} — ${targetsLabel(f.item)}${f.item.topics.length ? '' : ' — কারেন্ট অ্যাফেয়ার্স পাতা নেই, ওয়েবে যাচাই লাগবে'}`);
    }
    L.push('');
  }
  if (!changed.length && !due.length) L.push('নজর দেওয়ার মতো কিছু নেই।');
  L.push('');
  L.push('রিভিউ শেষে: `node written-exam/check_currency.js --accept <key>` (সব একসাথে: `--accept all`)।');
  return L.join('\n');
}

function main() {
  const args = process.argv.slice(2);
  const flag = n => args.includes(n);
  const val = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };

  const doc = readStatusFile();
  const qIndex = buildQuestionIndex();

  const errors = validate(doc, qIndex);
  if (errors.length) {
    console.error(`❌ current-status.json-এ ${errors.length}টা সমস্যা:`);
    errors.slice(0, 50).forEach(e => console.error('  ' + e));
    if (val('--report')) fs.writeFileSync(val('--report'), '## written-exam current-status কাঠামোগত সমস্যা\n\n' + errors.map(e => '- ' + e).join('\n') + '\n');
    process.exit(1);
  }

  if (flag('--init')) {
    let n = 0;
    for (const it of doc.items) {
      if (!it.topicHashes && it.topics.length) { it.topicHashes = topicHashes(it.topics); n++; }
    }
    writeStatusFile(doc);
    console.log(`✅ ${n}টা item-এ topicHashes বসানো হলো`);
    return;
  }

  const acceptKey = val('--accept');
  if (acceptKey) {
    const targets = acceptKey === 'all' ? doc.items : doc.items.filter(i => i.key === acceptKey);
    if (!targets.length) { console.error(`❌ key পাওয়া যায়নি: ${acceptKey}`); process.exit(1); }
    const extra = val('--review-in-days');
    const newStatus = val('--status');
    if (newStatus != null && acceptKey === 'all') {
      console.error('❌ --status সব item-এ একসাথে বসানো যায় না, একটা key দিন');
      process.exit(1);
    }
    for (const it of targets) {
      if (newStatus != null) { it.status = newStatus; it.asOf = today(); }
      it.verifiedOn = today();
      if (it.topics.length) it.topicHashes = topicHashes(it.topics);
      const days = extra != null ? Number(extra) : REVIEW_DAYS[it.class];
      if (days) it.reviewAfter = addDays(today(), days);
    }
    writeStatusFile(doc);
    console.log(`✅ ${targets.length}টা item রিভিউ-সম্পন্ন হিসেবে চিহ্নিত হলো`);
    return;
  }

  if (flag('--validate-only')) {
    console.log(`✅ কাঠামো ঠিক আছে (${doc.items.length}টা item)`);
    return;
  }

  const { list, withoutStatus } = findings(doc);
  const report = buildReport(doc, list, withoutStatus);
  console.log(report);
  if (val('--report')) fs.writeFileSync(val('--report'), report + '\n');
  if (list.length) process.exit(2);
}

main();
