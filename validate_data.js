// validate_data.js
// ============================================================
// প্রশ্নের ডেটা push হওয়ার সাথে সাথেই স্বয়ংক্রিয়ভাবে যাচাই করে:
// missing field, ভুল সংখ্যক option, correctIndex/answer out-of-range,
// ডুপ্লিকেট id, exam-archive-এর সাথে totalQuestions না মেলা — ইত্যাদি।
// কোনো সমস্যা পেলে GitHub Actions-এ লাল দেখাবে, ঠিক কোন প্রশ্নে
// সমস্যা সেটাও বলে দেবে। চালানো: node validate_data.js
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
let issues = [];

function loadJsVar(relPath, varName) {
  const code = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  try {
    vm.runInContext(code, sandbox, { filename: relPath });
  } catch (e) {
    issues.push(`[${relPath}] ফাইলটা লোড/চালাতে ব্যর্থ হয়েছে: ${e.message}`);
    return null;
  }
  try {
    return vm.runInContext(varName, sandbox);
  } catch (e) {
    issues.push(`[${relPath}] "${varName}" ভেরিয়েবল খুঁজে পাওয়া যায়নি`);
    return null;
  }
}

function checkOptionsBased(loc, q, optionsField, answerField, expectedCount) {
  if (!q[optionsField] || !Array.isArray(q[optionsField])) {
    issues.push(`[${loc}] "${optionsField}" নেই বা array না`);
  } else {
    if (q[optionsField].length !== expectedCount) {
      issues.push(`[${loc}] "${optionsField}"-এ ${q[optionsField].length}টা item আছে, ${expectedCount}টা হওয়া উচিত`);
    }
    q[optionsField].forEach((o, oi) => {
      if (o === null || o === undefined || o === '') issues.push(`[${loc}] "${optionsField}"[${oi}] খালি`);
    });
  }
  if (typeof q[answerField] !== 'number') {
    issues.push(`[${loc}] "${answerField}" সংখ্যা না (${JSON.stringify(q[answerField])})`);
  } else if (Array.isArray(q[optionsField]) && (q[answerField] < 0 || q[answerField] >= q[optionsField].length)) {
    issues.push(`[${loc}] "${answerField}" (${q[answerField]}) options-এর সীমার বাইরে`);
  }
}

function checkDuplicateIds(entries, label) {
  const seen = {};
  entries.forEach(({ id, where }) => {
    if (!id) return;
    (seen[id] = seen[id] || []).push(where);
  });
  Object.entries(seen).forEach(([id, wheres]) => {
    if (wheres.length > 1) issues.push(`[${label}] ডুপ্লিকেট id "${id}" — ${wheres.join(', ')}-এ আছে`);
  });
}

// ── ১. bcs-mcq/data/*.js ──────────────────────────────────
{
  const dir = path.join(ROOT, 'bcs-mcq', 'data');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  const idEntries = [];
  files.forEach(f => {
    const code = fs.readFileSync(path.join(dir, f), 'utf8');
    const varMatch = code.match(/var\s+(data_\w+)/);
    if (!varMatch) { issues.push(`[bcs-mcq/data/${f}] data_ ভেরিয়েবল পাওয়া যায়নি`); return; }
    const arr = loadJsVar(path.join('bcs-mcq', 'data', f), varMatch[1]);
    if (!Array.isArray(arr)) return;
    arr.forEach((q, idx) => {
      const loc = `bcs-mcq/data/${f}#${idx} (id=${q.id})`;
      if (!q.id) issues.push(`[${loc}] id নেই`);
      if (!q.question) issues.push(`[${loc}] question নেই`);
      checkOptionsBased(loc, q, 'options', 'correctIndex', 4);
      idEntries.push({ id: q.id, where: `bcs-mcq/data/${f}` });
    });
  });
  checkDuplicateIds(idEntries, 'bcs-mcq (সব subject মিলিয়ে)');
}

// ── ২. primary-mcq/data/data.js ───────────────────────────
{
  const DATA = loadJsVar(path.join('primary-mcq', 'data', 'data.js'), 'PRIMARY_DATA');
  if (DATA) {
    const idEntries = [];
    Object.entries(DATA).forEach(([subj, arr]) => {
      arr.forEach((q, idx) => {
        const loc = `primary-mcq/${subj}#${idx} (id=${q.id})`;
        if (!q.id) issues.push(`[${loc}] id নেই`);
        if (!q.q) issues.push(`[${loc}] প্রশ্নের লেখা (q) নেই`);
        checkOptionsBased(loc, q, 'options', 'answer', 4);
        if (!q.explanation) issues.push(`[${loc}] ব্যাখ্যা (explanation) নেই`);
        idEntries.push({ id: q.id, where: `primary-mcq/${subj}` });
      });
    });
    checkDuplicateIds(idEntries, 'primary-mcq (সব subject মিলিয়ে)');
  }
}

// ── ৩. written-exam/data/job-solution.js ──────────────────
{
  const JOBS = loadJsVar(path.join('written-exam', 'data', 'job-solution.js'), 'JOB_SOLUTIONS');
  const ARCHIVE = loadJsVar(path.join('written-exam', 'exam-archive.js'), 'EXAM_ARCHIVE');

  if (JOBS) {
    const idEntries = [];
    const checkParts = (loc, q, fields) => {
      if (!Array.isArray(q.parts) || !q.parts.length) { issues.push(`[${loc}] "parts" নেই বা খালি`); return; }
      q.parts.forEach((p, pi) => fields.forEach(f => {
        if (p[f] === undefined || p[f] === '') issues.push(`[${loc}] parts[${pi}].${f} খালি`);
      }));
    };

    JOBS.forEach((q, idx) => {
      const loc = `written-exam#${idx} (id=${q.id}, type=${q.type})`;
      if (!q.id) issues.push(`[${loc}] id নেই`);
      if (!q.question) issues.push(`[${loc}] question নেই`);
      if (!q.examId) issues.push(`[${loc}] examId নেই`);
      idEntries.push({ id: q.id, where: 'written-exam' });

      switch (q.type) {
        case 'paragraph':
          if (!q.answer) issues.push(`[${loc}] answer নেই`);
          break;
        case 'sub-parts':
          checkParts(loc, q, ['a']);
          break;
        case 'table':
          if (!Array.isArray(q.columns) || !q.columns.length) issues.push(`[${loc}] columns নেই`);
          if (!Array.isArray(q.rows) || !q.rows.length) issues.push(`[${loc}] rows নেই`);
          else q.rows.forEach((r, ri) => {
            if (!Array.isArray(r)) issues.push(`[${loc}] rows[${ri}] array না`);
            else if (q.columns && r.length !== q.columns.length) issues.push(`[${loc}] rows[${ri}]-এ ${r.length}টা কলাম, columns-এ ${q.columns.length}টা`);
          });
          break;
        case 'math':
          if (!Array.isArray(q.steps) || !q.steps.length) issues.push(`[${loc}] steps নেই`);
          if (q.answer === undefined || q.answer === '') issues.push(`[${loc}] answer নেই`);
          break;
        case 'translate':
          checkParts(loc, q, ['source', 'target']);
          break;
        case 'fill-gaps':
          checkParts(loc, q, ['sentence', 'answer']);
          break;
        case 'sentence-change':
          checkParts(loc, q, ['original', 'changed']);
          break;
        case 'idiom':
          checkParts(loc, q, ['phrase', 'meaning']);
          break;
        case 'short-qa':
          checkParts(loc, q, ['a']);
          break;
        case 'letter':
          if (!q.letter) issues.push(`[${loc}] letter object নেই`);
          else ['to', 'body'].forEach(f => { if (!q.letter[f]) issues.push(`[${loc}] letter.${f} খালি`); });
          break;
        case 'read-fill':
          if (!q.passage) issues.push(`[${loc}] passage নেই`);
          if (!q.answers) issues.push(`[${loc}] answers নেই`);
          break;
        default:
          issues.push(`[${loc}] অজানা type: "${q.type}"`);
      }
    });
    checkDuplicateIds(idEntries, 'written-exam');

    // exam-archive.js-এর totalQuestions আসল সংখ্যার সাথে মিলছে কিনা
    if (ARCHIVE) {
      const counts = {};
      JOBS.forEach(q => { counts[q.examId] = (counts[q.examId] || 0) + 1; });
      const archiveIds = new Set();
      ARCHIVE.forEach(ex => {
        archiveIds.add(ex.id);
        const actual = counts[ex.id] || 0;
        if (actual !== ex.totalQuestions) {
          issues.push(`[exam-archive.js: ${ex.id}] totalQuestions লেখা আছে ${ex.totalQuestions}, আসলে প্রশ্ন আছে ${actual}টা`);
        }
      });
      const orphanIds = new Set(JOBS.filter(q => !archiveIds.has(q.examId)).map(q => q.examId));
      orphanIds.forEach(id => issues.push(`[written-exam] examId "${id}"-এর কোনো প্রশ্নের জন্য exam-archive.js-এ কোনো এন্ট্রি নেই`));
    }
  }
}

// ── ফলাফল ─────────────────────────────────────────────────
if (issues.length) {
  console.log(`❌ ডেটাতে ${issues.length}টা সমস্যা পাওয়া গেছে:\n`);
  issues.forEach(i => console.log(' - ' + i));
  process.exit(1);
} else {
  console.log('✅ সব ডেটা ঠিক আছে — কোনো সমস্যা পাওয়া যায়নি।');
}
