// renderer.js — Question type renderer
// প্রতিটা type-এর জন্য আলাদা HTML তৈরি করে

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// একাধিক অংশের উত্তরে (idiom/translate/sentence-change/short-qa) ডেটায়
// label ফাঁকা থাকলে এখান থেকে ক্রমানুসারে (ক, খ, গ, ঘ...) বসে।
const BN_PART_LABELS = ['ক','খ','গ','ঘ','ঙ','চ','ছ','জ','ঝ','ঞ','ট','ঠ','ড','ঢ','ণ'];
function toBnDigits(num) {
  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(num).replace(/[0-9]/g, d => bnDigits[d]);
}
function partLabel(p, i) {
  return p.label || BN_PART_LABELS[i] || String(i + 1);
}
function partLabelHtml(p, i) {
  return `<span class="part-label">${escHtml(partLabel(p, i))})</span>`;
}
// যে প্রশ্নগুলোর parts আসলে মূল পরীক্ষার ধারাবাহিক নম্বরই টেনে আনে
// (যেমন প্রশ্ন ১৮-এর ভেতরের প্রথম sub-part-ও লেবেল "১৮"), সেখানে কার্ডের
// উপরের "১৮." badge-টা আলাদা কিছু বোঝায় না — ভেতরের নম্বরই আসল।
// তাই সেই badge দেখানোর দরকার নেই।
function hasRedundantQNo(q) {
  const parts = q.parts;
  if (!Array.isArray(parts) || !parts.length || q.qno == null) return false;
  const first = parts[0];
  return !!(first && first.label && first.label === toBnDigits(q.qno));
}

// চিঠির ভাষা (বাংলা/ইংরেজি) প্রশ্নের নিজের "subject" ফিল্ড থেকে নেওয়া হয়
// (এটা সবসময় নির্ভরযোগ্য) — প্রাপকের (to) লাইনে "Sir/Madam/Mayor" এই
// নির্দিষ্ট শব্দ খুঁজে ভাষা আন্দাজ করা হতো আগে, যেটা "The Supervisor",
// "The Deputy Commissioner" এই ধরনের পদবিতে ভুল ফল দিত (বাংলা সম্বোধন
// দেখাতো ইংরেজি চিঠিতেও)। লিঙ্গ (Madam/Ms./Mrs./মহোদয়া হলে নারী) এখনও
// to লাইন থেকেই আন্দাজ করা হয় — এর জন্য আলাদা কোনো নির্ভরযোগ্য ফিল্ড নেই।
function letterSalutation(to, subject) {
  const t = to || '';
  const isFemale = /\bMadam\b|\bMs\.|\bMrs\./i.test(t) || /মহোদয়া/.test(t);
  const isEnglish = subject === 'english';
  if (isEnglish) return isFemale ? 'Madam,' : 'Sir,';
  return isFemale ? 'মহোদয়া,' : 'মহোদয়,';
}

function renderAnswer(q) {
  switch (q.type) {

    case 'paragraph': {
      const paragraphs = escHtml(q.answer).split(/\n\n/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
      return `<div class="ans-paragraph">${paragraphs}</div>`;
    }

    case 'sub-parts':
      return `<div class="ans-parts">${(q.parts || []).map((p, i) => `
        <div class="ans-part">
          ${partLabelHtml(p, i)}
          <div class="part-body">
            ${p.q ? `<span class="part-q">${escHtml(p.q)}</span> <span class="part-eq">=</span> ` : ''}
            <span class="part-a">${escHtml(p.a)}</span>
          </div>
        </div>`).join('')}</div>`;

    case 'table':
      const cols = q.columns || [];
      const rows = q.rows || [];
      return `<div class="ans-table-wrap"><table class="ans-table">
        <thead><tr>${cols.map(c => `<th>${escHtml(c)}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${escHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>`;

    case 'math':
      const stepsHtml = (q.steps || []).map(s =>
        `<div class="math-step">${escHtml(s)}</div>`).join('');
      const altHtml = q.alternative ? `
        <div class="alt-solution">
          <div class="alt-label">বিকল্প সমাধান:</div>
          ${(q.alternative.steps || []).map(s => `<div class="math-step">${escHtml(s)}</div>`).join('')}
          <div class="math-answer">উত্তর: ${escHtml(q.alternative.answer)}</div>
        </div>` : '';
      return `<div class="ans-math">
        ${stepsHtml}
        <div class="math-answer">∴ উত্তর: ${escHtml(q.answer)}</div>
        ${altHtml}
      </div>`;

    case 'translate':
      return `<div class="ans-parts">${(q.parts || []).map((p, i) => `
        <div class="ans-part">
          ${partLabelHtml(p, i)}
          <div class="part-body">
            <span class="trans-source">${escHtml(p.source)}</span>
            <span class="trans-arrow"> ➜ </span>
            <span class="trans-target">${escHtml(p.target)}</span>
          </div>
        </div>`).join('')}</div>`;

    case 'fill-gaps':
      return `<div class="ans-parts">${(q.parts || []).map((p, i) => `
        <div class="ans-part">
          ${partLabelHtml(p, i)}
          <div class="part-body">
            <span class="part-q">${escHtml(p.sentence)}</span>
            <span class="fill-answer">→ <strong>${escHtml(p.answer)}</strong></span>
          </div>
        </div>`).join('')}</div>`;

    case 'sentence-change':
      return `<div class="ans-parts">${(q.parts || []).map((p, i) => `
        <div class="ans-part">
          ${partLabelHtml(p, i)}
          <div class="part-body">
            <span class="sent-original">${escHtml(p.original)}</span>
            <span class="sent-arrow"> ➜ </span>
            <span class="sent-changed">${escHtml(p.changed)}</span>
          </div>
        </div>`).join('')}</div>`;

    case 'idiom':
      return `<div class="ans-parts">${(q.parts || []).map((p, i) => `
        <div class="ans-part">
          ${partLabelHtml(p, i)}
          <div class="part-body">
            <span class="idiom-phrase">${escHtml(p.phrase)}</span>
            <span class="idiom-eq"> = </span>
            <span class="idiom-meaning">${escHtml(p.meaning)}</span>
            ${p.example ? `<span class="idiom-example"> — ${escHtml(p.example)}</span>` : ''}
          </div>
        </div>`).join('')}</div>`;

    case 'short-qa':
      return `<div class="ans-parts">${(q.parts || []).map((p, i) => `
        <div class="ans-part">
          ${partLabelHtml(p, i)}
          <div class="part-body">
            <span class="part-q">${escHtml(p.q)}</span>
            <span class="short-answer">— ${escHtml(p.a)}</span>
          </div>
        </div>`).join('')}</div>`;

    case 'letter':
      const l = q.letter || {};
      return `<div class="ans-letter">
        ${l.date ? `<div class="letter-date">${escHtml(l.date)}</div>` : ''}
        <div class="letter-to">${escHtml(l.to || '').replace(/\n/g, '<br>')}</div>
        ${l.subject ? `<div class="letter-subject"><strong>${q.subject === 'english' ? 'Subject:' : 'বিষয়:'}</strong> ${escHtml(l.subject)}</div>` : ''}
        <div class="letter-salutation">${letterSalutation(l.to, q.subject)}</div>
        <div class="letter-body">${(l.body || '').length ? escHtml(l.body).split(/\n\n/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('') : ''}</div>
        <div class="letter-closing">${escHtml(l.closing || '')}</div>
        <div class="letter-sender">${escHtml(l.sender || '').replace(/\n/g, '<br>')}</div>
      </div>`;

    case 'read-fill':
      return `<div class="ans-read-fill">
        <div class="passage">${escHtml(q.passage || '')}</div>
        <div class="passage-answers"><strong>উত্তর:</strong> ${escHtml(q.answers || '')}</div>
      </div>`;

    default:
      return `<div class="ans-paragraph">${escHtml(q.answer || '')}</div>`;
  }
}
