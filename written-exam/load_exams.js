// load_exams.js
// written-exam/data/exams/*.json থেকে সব পরীক্ষার প্রশ্ন একসাথে করে রিটার্ন করে।
// job-solution.js (এখন বাদ দেওয়া হয়েছে) যে কাজ করত, সেটার জায়গায়
// এই helper ব্যবহার করে check_bugs.js, generate_index.js, validate_data.js।
//
// ব্যবহার:
//   const { loadAllQuestions } = require('./load_exams');
//   const questions = loadAllQuestions();

const fs = require('fs');
const path = require('path');

function loadAllQuestions(examsDir) {
  const dir = examsDir || path.join(__dirname, 'data', 'exams');
  const files = fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .sort();

  let all = [];
  for (const file of files) {
    const filePath = path.join(dir, file);
    const arr = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!Array.isArray(arr)) {
      throw new Error(`${file}: কনটেন্ট একটা array হওয়া উচিত`);
    }
    all = all.concat(arr);
  }
  return all;
}

module.exports = { loadAllQuestions };
