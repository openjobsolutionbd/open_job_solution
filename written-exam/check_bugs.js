// check_bugs.js — job-solution.js এর জন্য বাগ-চেকার (v2, renderer.js এর সাথে মিলিয়ে সংশোধিত)
// Usage: node check_bugs.js

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const dir = __dirname;

function loadArray(file, varName) {
  const code = fs.readFileSync(path.join(dir, file), 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code + `\nthis.__OUT__ = ${varName};`, sandbox);
  return sandbox.__OUT__;
}

let hadError = false;
function report(label, items) {
  if (items.length) {
    hadError = true;
    console.log(`\n❌ ${label} (${items.length})`);
    items.slice(0, 50).forEach(i => console.log('   - ' + i));
    if (items.length > 50) console.log(`   ... and ${items.length - 50} more`);
  } else {
    console.log(`✅ ${label}: none`);
  }
}

let questions, exams;
try {
  questions = loadArray('data/job-solution.js', 'JOB_SOLUTIONS');
} catch (e) {
  console.log('❌ job-solution.js failed to parse/execute:', e.message);
  process.exit(1);
}
try {
  exams = loadArray('exam-archive.js', 'EXAM_ARCHIVE');
} catch (e) {
  console.log('❌ exam-archive.js failed to parse/execute:', e.message);
  process.exit(1);
}
console.log(`Loaded ${questions.length} questions across job-solution.js, ${exams.length} exams in exam-archive.js\n`);

// ── 1. Duplicate question IDs ────────────────────────────────
const idCount = {};
questions.forEach(q => { idCount[q.id] = (idCount[q.id] || 0) + 1; });
report('Duplicate question IDs', Object.entries(idCount).filter(([,c]) => c > 1).map(([id,c]) => `${id} (${c}x)`));

// ── 2. Missing required base fields (topic excluded — unused by app, optional) ─
const baseRequired = ['id', 'examId', 'subject', 'qno', 'marks', 'type', 'question'];
const missingBase = [];
questions.forEach(q => {
  baseRequired.forEach(f => {
    if (q[f] === undefined || q[f] === null || q[f] === '') {
      missingBase.push(`${q.id || '(no id)'} missing "${f}"`);
    }
  });
});
report('Missing required base fields', missingBase);

// ── 3. examId not found in exam-archive.js ───────────────────
const examIds = new Set(exams.map(e => e.id));
const orphanExamIds = [...new Set(questions.filter(q => !examIds.has(q.examId)).map(q => q.examId))];
report('examId referenced in job-solution.js but missing from exam-archive.js', orphanExamIds);

// ── 4. exam-archive.js entries with zero questions ────────────
const usedExamIds = new Set(questions.map(q => q.examId));
const emptyExams = exams.filter(e => !usedExamIds.has(e.id)).map(e => e.id);
report('exam-archive.js entries with no matching questions', emptyExams);

// ── 5. id prefix mismatch with examId ─────────────────────────
const idPrefixMismatch = [];
questions.forEach(q => {
  if (typeof q.id === 'string' && typeof q.examId === 'string' && !q.id.startsWith(q.examId + '-q')) {
    idPrefixMismatch.push(`${q.id} (examId: ${q.examId})`);
  }
});
report('Question id not matching "{examId}-q{qno}" pattern', idPrefixMismatch);

// ── 6. Duplicate qno within the same exam ─────────────────────
const byExam = {};
questions.forEach(q => { (byExam[q.examId] = byExam[q.examId] || []).push(q); });
const dupQno = [];
Object.entries(byExam).forEach(([examId, qs]) => {
  const seen = {};
  qs.forEach(q => { seen[q.qno] = (seen[q.qno] || 0) + 1; });
  Object.entries(seen).filter(([,c]) => c > 1).forEach(([qno,c]) => dupQno.push(`${examId} qno ${qno} (${c}x)`));
});
report('Duplicate qno within same exam', dupQno);

// ── 7. totalQuestions mismatch ────────────────────────────────
const qCountMismatch = [];
exams.forEach(e => {
  const actual = (byExam[e.id] || []).length;
  if (e.totalQuestions !== undefined && actual !== e.totalQuestions) {
    qCountMismatch.push(`${e.id}: archive says ${e.totalQuestions}, actual ${actual}`);
  }
});
report('totalQuestions mismatch (exam-archive.js vs actual question count)', qCountMismatch);

// ── 8. totalMarks mismatch (KNOWN ISSUE — needs source-exam verification, not auto-fixable) ─
const marksMismatch = [];
exams.forEach(e => {
  const qs = byExam[e.id] || [];
  const sum = Math.round(qs.reduce((s, q) => s + (Number(q.marks) || 0), 0) * 100) / 100;
  if (e.totalMarks !== undefined && sum !== e.totalMarks) {
    marksMismatch.push(`${e.id}: archive totalMarks=${e.totalMarks}, sum of question marks=${sum} (diff ${sum - e.totalMarks})`);
  }
});
report('totalMarks mismatch (exam-archive.js vs sum of question marks) — needs source verification', marksMismatch);

// ── 9. Type-specific schema checks (letter fields live under q.letter, not top-level) ─
const typeErrors = [];
function need(cond, q, msg) { if (!cond) typeErrors.push(`${q.id}: ${msg}`); }

questions.forEach(q => {
  switch (q.type) {
    case 'sub-parts':
    case 'short-qa':
      need(Array.isArray(q.parts) && q.parts.length > 0, q, `type "${q.type}" missing non-empty "parts" array`);
      if (Array.isArray(q.parts)) q.parts.forEach((p, i) => {
        need(typeof p.a === 'string' && p.a.length > 0, q, `parts[${i}].a is empty`);
      });
      break;
    case 'translate':
      need(Array.isArray(q.parts) && q.parts.length > 0, q, 'type "translate" missing "parts"');
      if (Array.isArray(q.parts)) q.parts.forEach((p, i) => {
        need(typeof p.source === 'string' && p.source.length > 0, q, `parts[${i}].source is empty`);
        need(typeof p.target === 'string' && p.target.length > 0, q, `parts[${i}].target is empty`);
      });
      break;
    case 'fill-gaps':
      need(Array.isArray(q.parts) && q.parts.length > 0, q, 'type "fill-gaps" missing "parts"');
      if (Array.isArray(q.parts)) q.parts.forEach((p, i) => {
        need(typeof p.sentence === 'string' && p.sentence.length > 0, q, `parts[${i}].sentence is empty`);
        need(typeof p.answer === 'string' && p.answer.length > 0, q, `parts[${i}].answer is empty`);
      });
      break;
    case 'sentence-change':
      need(Array.isArray(q.parts) && q.parts.length > 0, q, 'type "sentence-change" missing "parts"');
      if (Array.isArray(q.parts)) q.parts.forEach((p, i) => {
        need(typeof p.original === 'string' && p.original.length > 0, q, `parts[${i}].original is empty`);
        need(typeof p.changed === 'string' && p.changed.length > 0, q, `parts[${i}].changed is empty`);
      });
      break;
    case 'idiom':
      need(Array.isArray(q.parts) && q.parts.length > 0, q, 'type "idiom" missing "parts"');
      if (Array.isArray(q.parts)) q.parts.forEach((p, i) => {
        need(typeof p.phrase === 'string' && p.phrase.length > 0, q, `parts[${i}].phrase is empty`);
        need(typeof p.meaning === 'string' && p.meaning.length > 0, q, `parts[${i}].meaning is empty`);
      });
      break;
    case 'table':
      need(Array.isArray(q.columns) && q.columns.length > 0, q, 'type "table" missing "columns"');
      need(Array.isArray(q.rows) && q.rows.length > 0, q, 'type "table" missing "rows"');
      if (Array.isArray(q.columns) && Array.isArray(q.rows)) {
        q.rows.forEach((r, i) => {
          if (!Array.isArray(r) || r.length !== q.columns.length) {
            typeErrors.push(`${q.id}: table row ${i} has ${Array.isArray(r) ? r.length : 'invalid'} cells, expected ${q.columns.length}`);
          }
        });
      }
      break;
    case 'paragraph':
      need(typeof q.answer === 'string' && q.answer.length > 0, q, 'type "paragraph" missing "answer"');
      break;
    case 'math':
      need(Array.isArray(q.steps) && q.steps.length > 0, q, 'type "math" missing "steps"');
      need(typeof q.answer === 'string' && q.answer.length > 0, q, 'type "math" missing "answer"');
      break;
    case 'letter': {
      const l = q.letter || {};
      ['to', 'subject', 'body', 'closing', 'sender'].forEach(f =>
        need(typeof l[f] === 'string' && l[f].length > 0, q, `type "letter" missing "letter.${f}"`));
      break;
    }
    case 'read-fill':
      need(typeof q.passage === 'string' && q.passage.length > 0, q, 'type "read-fill" missing "passage"');
      need(typeof q.answers !== 'undefined', q, 'type "read-fill" missing "answers"');
      break;
    default:
      typeErrors.push(`${q.id}: unknown type "${q.type}"`);
  }
});
report('Type-specific schema violations', typeErrors);

// ── 10. marks not a positive number ────────────────────────────
const badMarks = questions.filter(q => typeof q.marks !== 'number' || q.marks <= 0).map(q => `${q.id}: marks=${JSON.stringify(q.marks)}`);
report('Non-positive or non-numeric "marks"', badMarks);

// ── 11. qno gaps per exam (may mean missing/un-entered questions) ─
const qnoGaps = [];
Object.entries(byExam).forEach(([examId, qs]) => {
  const nos = qs.map(q => q.qno).sort((a,b) => a-b);
  for (let i = 1; i < nos.length; i++) {
    if (nos[i] !== nos[i-1] + 1) qnoGaps.push(`${examId}: gap between qno ${nos[i-1]} and ${nos[i]}`);
  }
});
report('qno gaps within an exam (likely un-entered questions, not auto-fixable)', qnoGaps);

console.log('\n' + (hadError ? '⚠️  Issues found — see above.' : '🎉 No issues found.'));
