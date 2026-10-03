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
// গণিতের লেখার সব ইংরেজি অঙ্ক বাংলায় — $...$ সমীকরণের ভেতরেরগুলোও।
// (আগে সমীকরণের ভেতরে ইংরেজি অঙ্ক রেখে দেওয়া হতো, ফলে একই লাইনে "১০% বৃদ্ধিতে ... = 11x/10"
//  এর মতো বাংলা-ইংরেজি অঙ্ক মিশে যেত।) সমীকরণের ভেতরে অঙ্ক সরাসরি বদলালে MathJax-এর STIX
// ফন্টে গ্লিফ থাকে না, তাই প্রতিটা অঙ্ক-গুচ্ছ \text{...}-এ মুড়ে দেওয়া হয় — তাতে MathJax সেগুলো
// সাধারণ টেক্সট হিসেবে (পেজের বাংলা ফন্টে) আঁকে এবং বাকি TeX-এর অর্থ বদলায় না।
function toBnDigitsTex(tex) {
  return tex.replace(
    /(\\(?:text|mbox|textrm|textbf|textit)\{[^{}]*\})|(\\[A-Za-z]+|\\.)|((?:^|[\^_]))?(\d+(?:[.,]\d+)*)/g,
    (m, textCmd, cmd, prefix, num) => {
      if (textCmd) return toBnDigits(textCmd);   // \text{২ টি}-এর ভেতরে সরাসরি বাংলা অঙ্ক
      if (cmd) return cmd;                       // \frac, \times, \% ইত্যাদি অক্ষত
      const pre = prefix || '';
      // x^23 — TeX-এ শুধু প্রথম অঙ্কটা সুপারস্ক্রিপ্ট; সেই অর্থ ঠিক রাখতে প্রথম অঙ্ক আলাদা মোড়ানো
      if ((pre === '^' || pre === '_') && num.length > 1) {
        return pre + '\\text{' + toBnDigits(num[0]) + '}\\text{' + toBnDigits(num.slice(1)) + '}';
      }
      return pre + '\\text{' + toBnDigits(num) + '}';
    });
}
function toBnDigitsInMath(str) {
  return String(str == null ? '' : str)
    .split(/(\$[^$]*\$)/)
    .map((part, i) => i % 2 === 1 ? '$' + toBnDigitsTex(part.slice(1, -1)) + '$' : toBnDigits(part))
    .join('');
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

// ══════════════════════════════════════════
// বর্তমান অবস্থা (data/current-status.json)
// আসল উত্তর অপরিবর্তিত থাকে; সময়ের সাথে বদলানো প্রশ্নের নিচে আলাদা নোট বসে।
// ডেটা লোড না হলে বা status ফাঁকা থাকলে কিছুই দেখায় না।
// ══════════════════════════════════════════
const BN_MONTHS = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
function formatBnDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) return '';
  return `${toBnDigits(parseInt(m[3], 10))} ${BN_MONTHS[parseInt(m[2], 10) - 1] || ''} ${toBnDigits(m[1])}`;
}
function currentStatusHtml(cs) {
  if (!cs || !cs.text) return '';
  const when = formatBnDate(cs.asOf);
  return `<div class="current-status" role="note">
    <span class="cs-label">📌 বর্তমান অবস্থা${when ? ` (${escHtml(when)})` : ''}:</span>
    ${escHtml(cs.text).replace(/\n/g, '<br>')}
  </div>`;
}
let _currentStatusPromise = null;
function loadCurrentStatus() {
  if (!_currentStatusPromise) {
    _currentStatusPromise = fetch('data/current-status.json', { cache: 'no-cache' })
      .then(r => (r.ok ? r.json() : null))
      .then(d => (d && Array.isArray(d.items) ? d.items : []))
      .catch(() => []);
  }
  return _currentStatusPromise;
}
// প্রশ্ন/অংশের ভেতরে in-memory বসায় (ফাইলের ডেটা বদলায় না)
async function applyCurrentStatus(questions) {
  const items = await loadCurrentStatus();
  if (!items.length) return;
  const byId = new Map(questions.map(q => [q.id, q]));
  for (const it of items) {
    if (!it.status) continue;
    const cs = { text: it.status, asOf: it.asOf };
    for (const tg of it.targets || []) {
      const q = byId.get(tg.id);
      if (!q) continue;
      if (tg.part == null) q.currentStatus = cs;
      else if (Array.isArray(q.parts) && q.parts[tg.part]) q.parts[tg.part].currentStatus = cs;
    }
  }
}

// লেখা মূলত ইংরেজি (ল্যাটিন) হলে true — এগুলো justify হবে, বাংলা আগের মতোই
function isLatinText(str) {
  const t = String(str || '');
  const latin = (t.match(/[A-Za-z]/g) || []).length;
  const bn = (t.match(/[\u0980-\u09FF]/g) || []).length;
  return latin > 0 && latin >= bn * 2;
}
function enAttr(str) { return isLatinText(str) ? ' ans-en" lang="en' : ''; }

function renderAnswer(q) {
  switch (q.type) {

    case 'paragraph': {
      const paragraphs = escHtml(q.answer).split(/\n\n/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
      return `<div class="ans-paragraph${enAttr(q.answer)}">${paragraphs}${currentStatusHtml(q.currentStatus)}</div>`;
    }

    case 'sub-parts':
      return `<div class="ans-parts">${(q.parts || []).map((p, i) => `
        <div class="ans-part">
          ${partLabelHtml(p, i)}
          <div class="part-body">
            ${p.q ? `<span class="part-q">${escHtml(p.q)}</span> <span class="part-eq">=</span> ` : ''}
            <span class="part-a">${escHtml(p.a)}</span>
            ${currentStatusHtml(p.currentStatus)}
          </div>
        </div>`).join('')}</div>`;

    case 'table':
      const cols = q.columns || [];
      const rows = q.rows || [];
      return `<div class="ans-table-wrap"><table class="ans-table">
        <thead><tr>${cols.map(c => `<th>${escHtml(c)}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${escHtml(c)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>`;

    // গণিতের ধাপ/উত্তরে সব ইংরেজি অঙ্ক (1.10x, 2525 − x) বাংলা অঙ্কে (১.১০x, ২৫২৫ − x) দেখানো হয়;
    // ডেটা ফাইল অপরিবর্তিত — শুধু দেখানোর সময় রূপান্তর
    case 'math':
      const stepsHtml = (q.steps || []).map(s =>
        `<div class="math-step">${escHtml(toBnDigitsInMath(s))}</div>`).join('');
      const altHtml = q.alternative ? `
        <div class="alt-solution">
          <div class="alt-label">বিকল্প সমাধান:</div>
          ${(q.alternative.steps || []).map(s => `<div class="math-step">${escHtml(toBnDigitsInMath(s))}</div>`).join('')}
          <div class="math-answer">উত্তর: ${escHtml(toBnDigitsInMath(q.alternative.answer))}</div>
        </div>` : '';
      return `<div class="ans-math">
        ${stepsHtml}
        <div class="math-answer">∴ উত্তর: ${escHtml(toBnDigitsInMath(q.answer))}</div>
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
            ${currentStatusHtml(p.currentStatus)}
          </div>
        </div>`).join('')}</div>`;

    case 'letter':
      const l = q.letter || {};
      return `<div class="ans-letter">
        ${l.date ? `<div class="letter-date">${escHtml(l.date)}</div>` : ''}
        <div class="letter-to">${escHtml(l.to || '').replace(/\n/g, '<br>')}</div>
        ${l.subject ? `<div class="letter-subject"><strong>${q.subject === 'english' ? 'Subject:' : 'বিষয়:'}</strong> ${escHtml(l.subject)}</div>` : ''}
        <div class="letter-salutation">${letterSalutation(l.to, q.subject)}</div>
        <div class="letter-body${enAttr(l.body)}">${(l.body || '').length ? escHtml(l.body).split(/\n\n/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('') : ''}</div>
        <div class="letter-closing">${escHtml(l.closing || '')}</div>
        <div class="letter-sender">${escHtml(l.sender || '').replace(/\n/g, '<br>')}</div>
      </div>`;

    case 'read-fill':
      return `<div class="ans-read-fill">
        <div class="passage${enAttr(q.passage)}">${escHtml(q.passage || '')}</div>
        <div class="passage-answers"><strong>উত্তর:</strong> ${escHtml(q.answers || '')}</div>
      </div>`;

    default:
      return `<div class="ans-paragraph${enAttr(q.answer)}">${escHtml(q.answer || '')}${currentStatusHtml(q.currentStatus)}</div>`;
  }
}
