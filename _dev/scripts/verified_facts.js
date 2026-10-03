#!/usr/bin/env node
// verified_facts.js
// ============================================================
// যাচাই-খাতার (_docs/verified-facts.json) সাহায্যকারী। মূল ফাইল JSON; পড়ার জন্য
// _docs/verified-facts.md এই স্ক্রিপ্ট JSON থেকে বানায় — হাতে বদলানো যাবে না।
//
// এই স্ক্রিপ্ট ওয়েবে কিছু খোঁজে না, কোনো তথ্যের মানও নিজে বদলায় না।
// শুধু: কাঠামো যাচাই, Markdown ভিউ বানানো, মেয়াদ-পেরোনো সারি খুঁজে বলা।
//
// ব্যবহার:
//   node _dev/scripts/verified_facts.js --render            # JSON থেকে .md বানায়
//   node _dev/scripts/verified_facts.js --check             # কাঠামো ঠিক + .md হুবহু JSON-এর সাথে মেলে কিনা
//   node _dev/scripts/verified_facts.js --due [--report f]  # মেয়াদ-পেরোনো সারি ও প্রভাবিত প্রশ্নের তালিকা
//   node _dev/scripts/verified_facts.js --update <id> --status "নতুন অবস্থা" [--source "সূত্র"] [--review 2027-03|fixed|always]
//                                                           # মানুষের চোখের সামনে যাচাইয়ের পর সারি বদলায় (তারিখ=আজ) ও .md নতুন করে বানায়
//
// exit code: --check → 0 ঠিক / 1 সমস্যা; --due → 0 কিছু বাকি নেই / 2 মেয়াদ-পেরোনো আছে / 1 কাঠামোগত সমস্যা
// ============================================================

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const JSON_FILE = process.env.VF_JSON_FILE || path.join(ROOT, '_docs', 'verified-facts.json');
const MD_FILE = process.env.VF_MD_FILE || path.join(ROOT, '_docs', 'verified-facts.md');
const STATUS_FILE = process.env.VF_STATUS_FILE || path.join(ROOT, 'written-exam', 'data', 'current-status.json');

const BN = '০১২৩৪৫৬৭৮৯';
const bn = s => String(s).replace(/\d/g, d => BN[d]);
const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const REVIEW_RE = /^\d{4}-\d{2}(-\d{2})?$/;

function today() {
  return process.env.VF_TODAY || new Date().toISOString().slice(0, 10);
}
// তারিখটা বাস্তবে আছে কিনা — "২০২৬-০২-৩০"-এর মতো অসম্ভব তারিখ ধরে (Date.parse এগুলো মেনে নিতে পারে)
function isIsoDate(s) {
  if (typeof s !== 'string' || !DATE_RE.test(s)) return false;
  const d = new Date(s + 'T00:00:00Z');
  return !isNaN(d) && d.toISOString().slice(0, 10) === s;
}
function isValidReview(r) {
  if (typeof r !== 'string' || !REVIEW_RE.test(r)) return false;
  const m = Number(r.slice(5, 7));
  return r.length === 7 ? m >= 1 && m <= 12 : isIsoDate(r);
}
// Markdown টেবিলের ঘরে '|' বা নতুন লাইন থাকলে টেবিল ভেঙে যায়
const CELL_BAD = /[|\r\n]/;
// "2027-02" মানে ওই মাসের ১ তারিখ থেকে মেয়াদ-পেরোনো ধরা হয়
function reviewDate(r) {
  if (!REVIEW_RE.test(r)) return null;
  return r.length === 7 ? r + '-01' : r;
}

function load() {
  return JSON.parse(fs.readFileSync(JSON_FILE, 'utf8'));
}
function save(doc) {
  fs.writeFileSync(JSON_FILE, JSON.stringify(doc, null, 2) + '\n', 'utf8');
}
function allFacts(doc) {
  return (doc.sections || []).flatMap(s => s.facts || []);
}

function validate(doc) {
  const errors = [];
  if (!doc || typeof doc !== 'object') return ['JSON পড়া যায়নি'];
  if (!Array.isArray(doc.sections) || !doc.sections.length) errors.push('"sections" নেই');
  const ids = new Set();
  for (const s of doc.sections || []) {
    if (!s.title) errors.push('একটা section-এর "title" নেই');
    for (const f of s.facts || []) {
      const w = `[${f.id || '(id নেই)'}]`;
      if (!f.id || !ID_RE.test(f.id)) errors.push(`${w} id ভুল (ছোট ইংরেজি অক্ষর, সংখ্যা ও হাইফেন)`);
      else if (ids.has(f.id)) errors.push(`${w} id ডুপ্লিকেট — একই তথ্যের দুটো সারি রাখা যাবে না`);
      ids.add(f.id);
      for (const k of ['label', 'status', 'source']) {
        if (typeof f[k] !== 'string' || !f[k].trim()) errors.push(`${w} "${k}" ফাঁকা`);
      }
      for (const k of ['label', 'status', 'source', 'reviewNote']) {
        if (typeof f[k] === 'string' && CELL_BAD.test(f[k])) errors.push(`${w} "${k}"-এ '|' চিহ্ন বা নতুন লাইন চলবে না (টেবিল ভেঙে যায়)`);
      }
      if (!isIsoDate(f.date)) errors.push(`${w} "date" YYYY-MM-DD হতে হবে`);
      if (!(f.review === 'fixed' || f.review === 'always' || isValidReview(f.review))) {
        errors.push(`${w} "review" হতে হবে YYYY-MM, YYYY-MM-DD, fixed বা always`);
      }
    }
  }
  for (const k of ['intro', 'unverified', 'caughtErrors']) {
    if (!Array.isArray(doc[k])) errors.push(`"${k}" array নেই`);
  }
  return errors;
}

function reviewCell(f) {
  if (f.review === 'fixed') return 'স্থির';
  if (f.review === 'always') return f.reviewNote || 'প্রতিবার';
  return bn(f.review);
}

function render(doc) {
  const facts = allFacts(doc);
  const latest = facts.map(f => f.date).sort().pop();
  const L = [];
  L.push(`# ${doc.title}`);
  L.push('');
  L.push('> ⚙️ **এই ফাইল স্বয়ংক্রিয়ভাবে বানানো — হাতে বদলাবেন না।** মূল ফাইল [`verified-facts.json`](./verified-facts.json)। সারি বদলাতে: `node _dev/scripts/verified_facts.js --update <id> --status "..."` (বা JSON সম্পাদনা করে `--render`)। মেয়াদ-পেরোনো সারি সাপ্তাহিক নজরদারি খুঁজে Issue খোলে (`verified-facts-watch.yml`) — কিন্তু নিজে কোনো তথ্য বদলায় না।');
  L.push('');
  for (const p of doc.intro) { L.push(p); L.push(''); }
  L.push(`সর্বশেষ হালনাগাদ: ${bn(latest)}`);
  L.push('');
  for (const s of doc.sections) {
    L.push(`## ${s.title}`);
    L.push('');
    L.push('| তথ্য | যাচাই-করা অবস্থা | তারিখ | সূত্র | পুনর্যাচাই |');
    L.push('|---|---|---|---|---|');
    for (const f of s.facts) {
      L.push(`| ${f.label} | ${f.status} | ${bn(f.date)} | ${f.source} | ${reviewCell(f)} |`);
    }
    L.push('');
  }
  L.push(`## ${doc.unverifiedTitle}`);
  L.push('');
  for (const u of doc.unverified) L.push(`- ${u}`);
  L.push('');
  L.push(`## ${doc.bcsNoteTitle}`);
  L.push('');
  L.push(doc.bcsNote);
  L.push('');
  L.push(`## ${doc.caughtErrorsTitle}`);
  L.push('');
  for (const e of doc.caughtErrors) L.push(`- ${e}`);
  return L.join('\n') + '\n';
}

// কোন প্রশ্ন কোন তথ্যের ওপর নির্ভর করে (written-exam/data/current-status.json-এর "facts" থেকে)
function dependents() {
  const map = new Map();
  if (!fs.existsSync(STATUS_FILE)) return map;
  const doc = JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'));
  for (const it of doc.items || []) {
    for (const id of it.facts || []) {
      if (!map.has(id)) map.set(id, []);
      map.get(id).push(it);
    }
  }
  return map;
}

function dueFacts(doc) {
  const now = today();
  return allFacts(doc).filter(f => {
    const d = reviewDate(f.review);
    return d && d <= now;
  });
}

function buildReport(doc, due) {
  const deps = dependents();
  const L = [];
  L.push(`## যাচাই-খাতা (verified-facts) — মেয়াদ-পেরোনো তথ্য (${today()})`);
  L.push('');
  L.push(`খাতায় মোট ${allFacts(doc).length}টা সারি আছে; এর মধ্যে ${due.length}টার "পুনর্যাচাই" তারিখ পেরিয়ে গেছে।`);
  L.push('');
  for (const f of due) {
    L.push(`- \`${f.id}\` — **${f.label}** (পুনর্যাচাই ছিল ${f.review}, শেষ যাচাই ${f.date})`);
    L.push(`  - এখন খাতায় আছে: ${f.status.slice(0, 160)}`);
    const d = deps.get(f.id) || [];
    if (d.length) {
      L.push(`  - এর ওপর নির্ভরশীল প্রশ্ন (${d.length}টা): ${d.slice(0, 6).map(i => '`' + i.key + '`').join(', ')}${d.length > 6 ? ` +${d.length - 6}` : ''}`);
    }
  }
  L.push('');
  L.push('**এই Issue কিছুই নিজে বদলায়নি।** পরের ধাপ: একটা Claude সেশনে এই সারিগুলো ওয়েবে যাচাই করুন (মানুষের চোখের সামনে), তারপর `node _dev/scripts/verified_facts.js --update <id> --status "..."` চালান। তথ্য বদলালে নির্ভরশীল প্রশ্নের উত্তর `written-exam/check_currency.js` নিজে ধরে আলাদা Issue-তে জানাবে।');
  return L.join('\n');
}

function main() {
  const args = process.argv.slice(2);
  const flag = n => args.includes(n);
  const val = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };

  const doc = load();
  const errors = validate(doc);
  if (errors.length) {
    console.error(`❌ verified-facts.json-এ ${errors.length}টা সমস্যা:`);
    errors.forEach(e => console.error('  ' + e));
    if (val('--report')) fs.writeFileSync(val('--report'), '## verified-facts.json কাঠামোগত সমস্যা\n\n' + errors.map(e => '- ' + e).join('\n') + '\n');
    process.exit(1);
  }

  if (flag('--render')) {
    fs.writeFileSync(MD_FILE, render(doc), 'utf8');
    console.log(`✅ ${path.relative(ROOT, MD_FILE)} নতুন করে বানানো হলো`);
    return;
  }

  if (flag('--update')) {
    const id = val('--update');
    if (!id || id.startsWith('--')) { console.error('❌ --update-এর পর সারির id দিতে হবে (যেমন: --update prime-minister --status "...")'); process.exit(1); }
    const f = allFacts(doc).find(x => x.id === id);
    if (!f) { console.error(`❌ id পাওয়া যায়নি: ${id}`); process.exit(1); }
    const status = val('--status');
    if (!status) { console.error('❌ --status "নতুন যাচাই-করা অবস্থা" দিতে হবে'); process.exit(1); }
    f.status = status;
    if (val('--source')) f.source = val('--source');
    if (val('--review')) {
      f.review = val('--review');
      if (f.review !== 'always') delete f.reviewNote;
    }
    f.date = today();
    const again = validate(doc);
    if (again.length) { console.error('❌ বদল রাখা গেল না:\n  ' + again.join('\n  ')); process.exit(1); }
    save(doc);
    fs.writeFileSync(MD_FILE, render(doc), 'utf8');
    console.log(`✅ ${id} হালনাগাদ হলো (তারিখ ${today()}), .md নতুন করে বানানো হলো`);
    return;
  }

  if (flag('--due')) {
    const due = dueFacts(doc);
    if (!due.length) { console.log(`নজর দেওয়ার মতো কিছু নেই (${allFacts(doc).length}টা সারির কোনোটার মেয়াদ পেরোয়নি)।`); return; }
    const report = buildReport(doc, due);
    console.log(report);
    if (val('--report')) fs.writeFileSync(val('--report'), report + '\n');
    process.exit(2);
  }

  // ডিফল্ট = --check
  const onDisk = fs.existsSync(MD_FILE) ? fs.readFileSync(MD_FILE, 'utf8') : '';
  if (onDisk !== render(doc)) {
    const msg = '_docs/verified-facts.md আর verified-facts.json মিলছে না। .md হাতে বদলানো হয়েছে, নয়তো JSON বদলে .md বানানো হয়নি — `node _dev/scripts/verified_facts.js --render` চালান (হাতে বদল থাকলে আগে সেটা JSON-এ তুলুন)।';
    console.error('❌ ' + msg);
    if (val('--report')) fs.writeFileSync(val('--report'), '## verified-facts কাঠামোগত সমস্যা\n\n- ' + msg + '\n');
    process.exit(1);
  }
  console.log(`✅ verified-facts ঠিক আছে (${allFacts(doc).length}টা সারি, .md মিলছে)`);
}

main();
