// মন্ত্রণালয়ের MCQ — প্রশ্ন-কার্ড রেন্ডারার
//
// ডেটা ফরম্যাট (data/exams/<examId>.json — একটা array, প্রতিটা প্রশ্ন একটা object):
//   id, examId, subject, qno   → আবশ্যক
//   q                          → প্রশ্ন (আবশ্যক)
//   answer                     → সঠিক উত্তরের লেখা (আবশ্যক)
//   options                    → ঐচ্ছিক। থাকলে ২–৬টা স্ট্রিং, এবং তার মধ্যে ঠিক একটা answer-এর সাথে হুবহু মিলবে
//   explanation                → ঐচ্ছিক ব্যাখ্যা
// options না থাকলে শুধু "উত্তর: …" দেখায়; পরে options/explanation যোগ করলে
// এই ফাইল বা পেজে কোনো পরিবর্তন লাগবে না — কার্ড নিজে থেকেই MCQ আকারে দেখাবে।

const MCQ_LABELS = ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ'];

function mcqEsc(str) {
  if (str === undefined || str === null) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function mcqBn(num) {
  const d = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, x => d[x]);
}

function renderMcqCard(q) {
  const num = q.qno ? mcqBn(q.qno) + '.' : '';
  const opts = Array.isArray(q.options) ? q.options : [];

  let body;
  if (opts.length) {
    body = '<div class="options-list">' + opts.map((o, i) => {
      const ok = o === q.answer;
      return '<div class="option-btn disabled ' + (ok ? 'correct-choice' : 'dimmed') + '">' +
        '<span style="font-weight:700">' + (MCQ_LABELS[i] || '') + ')</span>' +
        '<span>' + mcqEsc(o) + '</span></div>';
    }).join('') + '</div>';
  } else {
    body = '<div class="answer-body"><strong>উত্তর:</strong> ' + mcqEsc(q.answer) + '</div>';
  }

  const exp = q.explanation
    ? '<div class="answer-body">💡 ' + mcqEsc(q.explanation) + '</div>'
    : '';

  return '<div class="question-body">' +
      '<span class="q-num">' + num + '</span>' +
      '<div class="q-text-wrap"><div class="q-text">' + mcqEsc(q.q) + '</div></div>' +
    '</div>' + body + exp;
}
