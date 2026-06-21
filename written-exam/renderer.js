// renderer.js — Question type renderer
// প্রতিটা type-এর জন্য আলাদা HTML তৈরি করে

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderAnswer(q) {
  switch (q.type) {

    case 'paragraph': {
      const paragraphs = escHtml(q.answer).split(/\n\n/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
      return `<div class="ans-paragraph">${paragraphs}</div>`;
    }

    case 'sub-parts':
      return `<div class="ans-parts">${(q.parts || []).map(p => `
        <div class="ans-part">
          <span class="part-label">${escHtml(p.label)})</span>
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
      return `<div class="ans-parts">${(q.parts || []).map(p => `
        <div class="ans-part">
          <span class="part-label">${escHtml(p.label)})</span>
          <div class="part-body">
            <div class="trans-source">${escHtml(p.source)}</div>
            <div class="trans-arrow">➜</div>
            <div class="trans-target">${escHtml(p.target)}</div>
          </div>
        </div>`).join('')}</div>`;

    case 'fill-gaps':
      return `<div class="ans-parts">${(q.parts || []).map((p, i) => `
        <div class="ans-part">
          <span class="part-label">${i + 1}.</span>
          <div class="part-body">
            <span class="part-q">${escHtml(p.sentence)}</span>
            <span class="fill-answer">→ <strong>${escHtml(p.answer)}</strong></span>
          </div>
        </div>`).join('')}</div>`;

    case 'sentence-change':
      return `<div class="ans-parts">${(q.parts || []).map(p => `
        <div class="ans-part">
          <span class="part-label">${escHtml(p.label)})</span>
          <div class="part-body">
            <div class="sent-original">${escHtml(p.original)}</div>
            <div class="sent-arrow">➜</div>
            <div class="sent-changed">${escHtml(p.changed)}</div>
          </div>
        </div>`).join('')}</div>`;

    case 'idiom':
      return `<div class="ans-parts">${(q.parts || []).map(p => `
        <div class="ans-part">
          <span class="part-label">${escHtml(p.label)})</span>
          <div class="part-body">
            <span class="idiom-phrase">${escHtml(p.phrase)}</span>
            <span class="idiom-eq"> = </span>
            <span class="idiom-meaning">${escHtml(p.meaning)}</span>
            ${p.example ? `<div class="idiom-example">✍ ${escHtml(p.example)}</div>` : ''}
          </div>
        </div>`).join('')}</div>`;

    case 'short-qa':
      return `<div class="ans-parts">${(q.parts || []).map(p => `
        <div class="ans-part">
          <span class="part-label">${escHtml(p.label)})</span>
          <div class="part-body">
            <span class="part-q">${escHtml(p.q)}</span>
            <div class="short-answer">উত্তর: ${escHtml(p.a)}</div>
          </div>
        </div>`).join('')}</div>`;

    case 'letter':
      const l = q.letter || {};
      return `<div class="ans-letter">
        ${l.date ? `<div class="letter-date">${escHtml(l.date)}</div>` : ''}
        <div class="letter-to">${escHtml(l.to || '').replace(/\n/g, '<br>')}</div>
        ${l.subject ? `<div class="letter-subject"><strong>বিষয়/Subject:</strong> ${escHtml(l.subject)}</div>` : ''}
        <div class="letter-salutation">${l.to?.includes('Mayor') || l.to?.includes('Sir') ? 'Sir,' : 'মহোদয়,'}</div>
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
