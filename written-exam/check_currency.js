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
//   ২খ) LOG_CHANGED (নজর): item-এর "logs" রেফ (ঘটনাপ্রবাহ/টপ-নিউজের নির্দিষ্ট তারিখ)-এর
//      বুলেট বদলেছে/বেড়েছে কিনা।
//   ২গ) WATCH_NEW (নজর): item-এর "watch" শব্দ ঘটনাপ্রবাহ/টপ-নিউজের নতুন/বদলানো বুলেটে
//      এসেছে কিনা (তারিখ আগে থেকে জানা না থাকলেও ধরে)।
//   ২ঘ) FACT_CHANGED (নজর): item-এর "facts" রেফ (_docs/verified-facts.json-এর সারি)-এর যাচাই-করা
//      অবস্থা (status) বদলেছে কিনা। কোন প্রশ্ন কোন যাচাই-করা তথ্যের ওপর নির্ভর করে, এটাই সেই সংযোগ।
//   ৩) REVIEW_DUE (নজর): reviewAfter তারিখ পেরিয়ে গেছে কিনা।
//
// এই স্ক্রিপ্ট উত্তর নিজে বদলায় না — শুধু জানায়। সিদ্ধান্ত রিভিউয়ের পর।
//
// ব্যবহার:
//   node check_currency.js                    # পরীক্ষা + রিপোর্ট প্রিন্ট
//   node check_currency.js --report out.md    # রিপোর্ট ফাইলেও লেখে
//   node check_currency.js --validate-only    # শুধু কাঠামো (PR ব্লক করার জন্য)
//   node check_currency.js --find "শব্দ"     # টপিক/ঘটনাপ্রবাহ/টপ-নিউজ সবখানে খুঁজে রেফ দেখায়
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
const DOCS_DIR = process.env.CURRENCY_DOCS_DIR || path.dirname(TOPICS_DIR); // ঘটনাপ্রবাহ/টপ-নিউজ এখানকার সাবফোল্ডারে
const LOG_KINDS = ['ghotonaprobaho', 'top-news']; // তারিখ-ভিত্তিক লগ (## <তারিখ> হেডিং)
const FACTS_FILE = process.env.CURRENCY_FACTS_FILE || path.join(__dirname, '..', '_docs', 'verified-facts.json'); // যাচাই-খাতা (মূল ফাইল)
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

// তারিখ-ভিত্তিক লগ (ঘটনাপ্রবাহ / টপ-নিউজ): সব ফাইল পড়ে একই তারিখের বুলেট জোড়া লাগায়।
// build_index.py-ও একই তারিখ জোড়া লাগায়, তাই নতুন সেশনের আলাদা ফাইল হলেও হ্যাশ ঠিক থাকে।
// বুলেটগুলো সাজিয়ে নেওয়া হয় — ফাইলের ক্রম বা লাইনের ক্রম বদলালে সতর্কতা আসে না।
let _logCache = null;
function loadLogs() {
  if (_logCache) return _logCache;
  const out = {};
  for (const kind of LOG_KINDS) {
    const dir = path.join(DOCS_DIR, kind);
    const days = new Map();
    if (fs.existsSync(dir)) {
      for (const f of fs.readdirSync(dir).filter(n => n.endsWith('.md')).sort()) {
        const md = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r\n/g, '\n');
        let cur = null;
        for (const line of md.split('\n')) {
          const m = line.match(/^##\s+(.+?)\s*$/);
          if (m) { cur = m[1]; if (!days.has(cur)) days.set(cur, new Set()); continue; }
          const t = line.replace(/\s+/g, ' ').trim();
          if (cur && t) days.get(cur).add(t);
        }
      }
    }
    out[kind] = days;
  }
  _logCache = out;
  return out;
}

// রেফ ফরম্যাট: "ghotonaprobaho:২৬ আগস্ট ২০২৬" বা "top-news:২৬ আগস্ট ২০২৬"
function parseLogRef(ref) {
  const i = typeof ref === 'string' ? ref.indexOf(':') : -1;
  if (i < 0) return null;
  const kind = ref.slice(0, i);
  if (!LOG_KINDS.includes(kind)) return null;
  return { kind, date: ref.slice(i + 1).trim() };
}

function logSection(ref) {
  const r = parseLogRef(ref);
  if (!r) return null;
  const day = loadLogs()[r.kind].get(r.date);
  return day ? [...day].sort().join('\n') : null;
}

function logHashes(refs) {
  const out = {};
  for (const r of refs || []) {
    const sec = logSection(r);
    if (sec !== null) out[r] = hashOf(sec);
  }
  return out;
}

// শব্দ-নজর ("watch"): item-এ কয়েকটা নির্দিষ্ট শব্দ দেওয়া থাকে (যেমন "ইউক্রেন", "আসিয়ান")।
// ঘটনাপ্রবাহ/টপ-নিউজের যে বুলেটে ওই শব্দ আছে সেগুলোর ছাপ (হ্যাশ) accept-এর সময় জমা থাকে।
// পরে নতুন বা বদলানো বুলেট এলে WATCH_NEW ধরে — নির্দিষ্ট তারিখ আগে থেকে জানা না থাকলেও চলে।
function watchLines(words) {
  const out = new Map(); // হ্যাশ → "kind:তারিখ  বুলেট"
  const logs = loadLogs();
  for (const kind of LOG_KINDS) {
    for (const [date, set] of logs[kind]) {
      for (const line of set) {
        if ((words || []).some(w => line.includes(w))) out.set(hashOf(kind + '|' + date + '|' + line), `${kind}:${date}  ${line}`);
      }
    }
  }
  return out;
}

function watchSeen(words) {
  return [...watchLines(words).keys()].sort();
}

function topicHashes(topics) {
  const out = {};
  for (const t of topics) {
    const sec = currentSection(t);
    if (sec !== null) out[t] = hashOf(sec);
  }
  return out;
}

// যাচাই-খাতা (_docs/verified-facts.json): id → সারি। ফাইল না থাকলে null।
let _factsCache;
function loadFacts() {
  if (_factsCache !== undefined) return _factsCache;
  if (!fs.existsSync(FACTS_FILE)) { _factsCache = null; return null; }
  const doc = JSON.parse(fs.readFileSync(FACTS_FILE, 'utf8'));
  const m = new Map();
  for (const sec of doc.sections || []) for (const f of sec.facts || []) m.set(f.id, f);
  _factsCache = m;
  return m;
}

// সারির ছাপ শুধু "status" থেকে — একই ফল নিয়ে আবার যাচাই করলে (শুধু তারিখ বদলালে) সতর্কতা আসে না
function factHashes(ids) {
  const out = {};
  const facts = loadFacts();
  for (const id of ids || []) {
    const f = facts && facts.get(id);
    if (f) out[id] = hashOf(f.status);
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
    if (it.facts != null) {
      if (!Array.isArray(it.facts) || it.facts.length === 0 || it.facts.some(x => typeof x !== 'string')) {
        errors.push(`${where} "facts" ফাঁকা-নয় id-এর array হতে হবে`);
      } else {
        const facts = loadFacts();
        if (!facts) errors.push(`${where} "facts" আছে কিন্তু যাচাই-খাতা (_docs/verified-facts.json) পাওয়া যায়নি`);
        else for (const id of it.facts) if (!facts.has(id)) errors.push(`${where} যাচাই-খাতায় এই id নেই: ${id}`);
      }
    }
    if (it.watch != null) {
      if (!Array.isArray(it.watch) || it.watch.length === 0 || it.watch.some(w => typeof w !== 'string' || !w.trim())) {
        errors.push(`${where} "watch" ফাঁকা-নয় শব্দের array হতে হবে`);
      }
    }
    if (it.logs != null) {
      if (!Array.isArray(it.logs)) errors.push(`${where} "logs" array হতে হবে`);
      else {
        for (const r of it.logs) {
          if (!parseLogRef(r)) errors.push(`${where} logs-এর রেফ ভুল (ফরম্যাট "ghotonaprobaho:<তারিখ>" বা "top-news:<তারিখ>"): ${JSON.stringify(r)}`);
          else if (logSection(r) === null) errors.push(`${where} লগে এই তারিখ নেই: ${r}`);
        }
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
    if (it.logHashes) {
      const changedLogs = [];
      for (const r of it.logs || []) {
        const sec = logSection(r);
        if (sec === null) continue;
        if (it.logHashes[r] && it.logHashes[r] !== hashOf(sec)) changedLogs.push(r);
      }
      if (changedLogs.length) out.push({ type: 'LOG_CHANGED', item: it, detail: changedLogs });
    }
    if (it.watch && it.watchSeen) {
      const seen = new Set(it.watchSeen);
      const fresh = [...watchLines(it.watch)].filter(([h]) => !seen.has(h)).map(([, txt]) => txt);
      if (fresh.length) out.push({ type: 'WATCH_NEW', item: it, detail: fresh });
    }
    if (it.factHashes) {
      const cur = factHashes(it.facts);
      const changedFacts = (it.facts || []).filter(id => it.factHashes[id] && cur[id] && it.factHashes[id] !== cur[id]);
      if (changedFacts.length) out.push({ type: 'FACT_CHANGED', item: it, detail: changedFacts });
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
  const logChanged = found.filter(f => f.type === 'LOG_CHANGED');
  const watchNew = found.filter(f => f.type === 'WATCH_NEW');
  const factChanged = found.filter(f => f.type === 'FACT_CHANGED');
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
  if (logChanged.length) {
    L.push(`### ঘটনাপ্রবাহ/টপ-নিউজের তারিখ বদলেছে (${logChanged.length}টা প্রশ্ন)`);
    L.push('যে তারিখের এন্ট্রির সাথে প্রশ্ন যুক্ত, সেখানে বুলেট যোগ/বদল হয়েছে — উত্তর এখনো ঠিক কিনা দেখা দরকার।');
    L.push('');
    for (const f of logChanged) {
      L.push(`- \`${f.item.key}\` [${f.item.class}] — তারিখ: ${f.detail.join(', ')} — ${targetsLabel(f.item)}`);
    }
    L.push('');
  }
  if (factChanged.length) {
    L.push(`### যাচাই-খাতার তথ্য বদলেছে (${factChanged.length}টা প্রশ্ন)`);
    L.push('প্রশ্নের সাথে যুক্ত যাচাই-করা তথ্য (`_docs/verified-facts.json`) বদলেছে — প্রশ্নের উত্তর (বছর-নির্দিষ্ট প্রশ্ন হলে সেই বছরের তথ্য রেখে) এখনো ঠিক কিনা দেখা দরকার।');
    L.push('');
    for (const f of factChanged) {
      L.push(`- \`${f.item.key}\` [${f.item.class}] — তথ্য: ${f.detail.join(', ')} — ${targetsLabel(f.item)}`);
    }
    L.push('');
  }
  if (watchNew.length) {
    L.push(`### নজরে-রাখা শব্দে নতুন খবর এসেছে (${watchNew.length}টা প্রশ্ন)`);
    L.push('প্রশ্নের সাথে যুক্ত শব্দটা ঘটনাপ্রবাহ/টপ-নিউজে নতুন বা বদলানো বুলেটে এসেছে — উত্তর এখনো ঠিক কিনা দেখা দরকার।');
    L.push('');
    for (const f of watchNew) {
      L.push(`- \`${f.item.key}\` [${f.item.class}] — ${targetsLabel(f.item)}`);
      for (const t of f.detail.slice(0, 5)) L.push(`  - ${t.slice(0, 140)}`);
      if (f.detail.length > 5) L.push(`  - …আরও ${f.detail.length - 5}টা`);
    }
    L.push('');
  }
  if (due.length) {
    L.push(`### রিভিউয়ের সময় হয়েছে (${due.length}টা প্রশ্ন)`);
    L.push('');
    for (const f of due) {
      L.push(`- \`${f.item.key}\` [${f.item.class}] — নির্ধারিত ${f.detail} — ${targetsLabel(f.item)}${(f.item.topics.length || (f.item.logs || []).length || (f.item.watch || []).length || (f.item.facts || []).length) ? '' : ' — কারেন্ট অ্যাফেয়ার্সে সংযোগ নেই, ওয়েবে যাচাই লাগবে'}`);
    }
    L.push('');
  }
  if (!changed.length && !logChanged.length && !watchNew.length && !factChanged.length && !due.length) L.push('নজর দেওয়ার মতো কিছু নেই।');
  L.push('');
  L.push('রিভিউ শেষে: `node written-exam/check_currency.js --accept <key>` (সব একসাথে: `--accept all`)।');
  return L.join('\n');
}

function findRefs(term) {
  const needle = term.replace(/\s+/g, ' ').trim();
  let n = 0;
  if (fs.existsSync(TOPICS_DIR)) {
    for (const f of fs.readdirSync(TOPICS_DIR).filter(x => x.endsWith('.md')).sort()) {
      const md = fs.readFileSync(path.join(TOPICS_DIR, f), 'utf8').replace(/\s+/g, ' ');
      if (md.includes(needle)) { console.log(`topic: ${f.replace(/\.md$/, '')}`); n++; }
    }
  }
  const logs = loadLogs();
  for (const kind of LOG_KINDS) {
    for (const [date, set] of logs[kind]) {
      for (const line of set) {
        if (line.includes(needle)) { console.log(`${kind}:${date}  → ${line.slice(0, 90)}`); n++; }
      }
    }
  }
  if (!n) console.log('কোথাও মেলেনি');
}

function main() {
  const args = process.argv.slice(2);
  const flag = n => args.includes(n);
  const val = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };

  // সংযোগ খোঁজার সাহায্যকারী: পুরো কারেন্ট অ্যাফেয়ার্সে (টপিক + ঘটনাপ্রবাহ + টপ-নিউজ) শব্দ খুঁজে রেফ দেখায়
  if (val('--find')) { findRefs(val('--find')); return; }

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
      if (!it.logHashes && (it.logs || []).length) { it.logHashes = logHashes(it.logs); n++; }
      if (it.watch && !it.watchSeen) { it.watchSeen = watchSeen(it.watch); n++; }
      if ((it.facts || []).length && !it.factHashes) { it.factHashes = factHashes(it.facts); n++; }
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
      if ((it.logs || []).length) it.logHashes = logHashes(it.logs);
      if ((it.watch || []).length) it.watchSeen = watchSeen(it.watch);
      if ((it.facts || []).length) it.factHashes = factHashes(it.facts);
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
