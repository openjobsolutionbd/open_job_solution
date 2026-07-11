// BCS MCQ – app.js
// Cache management সম্পূর্ণ sw.js-এ। নতুন version deploy করতে
// শুধু sw.js-এ CACHE_VERSION বাড়ান — বাকি সব automatic।

// APP_VERSION — sw.js এর CACHE_VERSION এর সাথে sync রাখুন
const APP_VERSION = 'v1.18';

const SUBJECTS = [
  { id: 'all', label: 'সব কুইজ', varName: null, marks: null },
  { id: 'science', label: 'বিজ্ঞান', varName: 'data_science', marks: 15 },
  { id: 'computer', label: 'কম্পিউটার', varName: 'data_computer', marks: 15 },
  { id: 'geography', label: 'ভূগোল', varName: 'data_geography', marks: 10 },
  { id: 'bangla', label: 'বাংলা', varName: 'data_bangla', marks: 30 },
  { id: 'english', label: 'English', varName: 'data_english', marks: 30 },
  { id: 'bangladesh', label: 'বাংলাদেশ', varName: 'data_bangladesh', marks: 25 },
  { id: 'international', label: 'আন্তর্জাতিক', varName: 'data_international', marks: 25 },
  { id: 'math', label: 'গণিত', varName: 'data_math', marks: 20 },
  { id: 'mental', label: 'মানসিক', varName: 'data_mental', marks: 15 },
  { id: 'ethics', label: 'নৈতিকতা', varName: 'data_ethics', marks: 10 },
];

const SUBJECT_ICONS = {
  all: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></rect></svg>',
  science: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v6.2L4.6 18.5A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.4-2.5L14 9.2V3"/><path d="M7.5 14h9"/></svg>',
  computer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>',
  geography: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18"/></svg>',
  bangla: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  english: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
  bangladesh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>',
  international: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  math: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><path d="M16 14v4"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/></svg>',
  mental: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.498.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/></svg>',
  ethics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16 19 8 22 16c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M2 16 5 8 8 16c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>',
  written: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  primary: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
};

const ITEMS_PER_PAGE = 50;

function toBn(n) {
  const d = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(n).split('').map(ch => d[parseInt(ch)] ?? ch).join('');
}

// ✅ SECURITY FIX: Escape HTML special characters to prevent render breaks
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, char => map[char]);
}

let answeredState = {};
let errorCounts = {};
let bookmarks = {};
let currentSubject = 'all';
let currentMode = 'normal';
let searchQuery = '';
let readingMode = false;
let currentPage = 1;
let filteredQuestions = [];

const LS = {
  save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} },
  load(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch(e){ return d; } }
};

// LocalStorage size guard — answered entries 2000-এর বেশি হলে ছেঁটে ফেলে
const MAX_LS_ENTRIES = 2000;
function pruneLocalStorage() {
  try {
    const ans = LS.load('bcs_answers', {});
    const keys = Object.keys(ans);
    if (keys.length > MAX_LS_ENTRIES) {
      const pruned = {};
      keys.slice(-MAX_LS_ENTRIES).forEach(k => { pruned[k] = ans[k]; });
      LS.save('bcs_answers', pruned);
    }
  } catch(e) {}
}

function saveAll() {
  LS.save('bcs_answers', answeredState);
  LS.save('bcs_errors', errorCounts);
  LS.save('bcs_bookmarks', bookmarks);
  LS.save('bcs_reading', readingMode);
  LS.save('bcs_mode', currentMode);
}

function loadAll() {
  answeredState = LS.load('bcs_answers', {});
  errorCounts = LS.load('bcs_errors', {});
  bookmarks = LS.load('bcs_bookmarks', {});
  readingMode = LS.load('bcs_reading', false);
  currentMode = LS.load('bcs_mode', 'normal');
  Object.keys(answeredState).forEach(k => {
    if (typeof answeredState[k] === 'boolean')
      answeredState[k] = { correct: answeredState[k], selected: -1 };
  });
  migrateLegacyIds();
}

// v1.8 মাইগ্রেশন — id format "1" থেকে "science-1" এ পরিবর্তনের কারণে
// v1.8-এর আগের সব answered/error/bookmark ডেটা পুরনো (collision-prone, ভুলভাবে
// একাধিক বিষয়ের মধ্যে মিশে যাওয়া) id দিয়ে সেভ করা ছিল। সেই ডেটা নতুন
// subject-prefixed id-র সাথে নির্ভরযোগ্যভাবে মেলানো সম্ভব নয় (কোন subject-এর
// id 1, তা আগে কখনো রেকর্ড করা হয়নি)। তাই একবারমাত্র, পুরনো বিশুদ্ধ-সংখ্যা
// key গুলো (যেমন "1", "42") সরিয়ে ফেলা হয় — নতুন সঠিক id দিয়ে আবার শুরু হোক।
function migrateLegacyIds() {
  const MIGRATION_FLAG = 'bcs_migrated_v1_8_subject_ids';
  if (LS.load(MIGRATION_FLAG, false)) return;

  const isLegacyKey = (k) => /^\d+$/.test(k);

  [answeredState, errorCounts, bookmarks].forEach(store => {
    Object.keys(store).forEach(k => {
      if (isLegacyKey(k)) delete store[k];
    });
  });

  LS.save(MIGRATION_FLAG, true);
  saveAll();
}

// ══════════════════════════════════════════════════════════
// ⚠️ থিম (dark/light) — v1.18 বাগফিক্স
// ══════════════════════════════════════════════════════════
// থিম কখনো LS.save/LS.load (JSON.stringify/parse) দিয়ে হ্যান্ডল করা
// যাবে না। root, primary-mcq, ও written-exam — সব জায়গায় থিম প্লেইন
// স্ট্রিং হিসেবে (JSON.stringify ছাড়া) localStorage-এ সেভ হয় এবং
// <head>-এর ইনলাইন স্ক্রিপ্টও প্লেইন স্ট্রিং হিসেবেই পড়ে। এই ফাইলেও
// আগে LS wrapper দিয়ে থিম লোড করা হতো, ফলে JSON.parse("dark") এ
// error হয়ে catch ব্লক ধরে ফেলত এবং সবসময় 'light' এ রিসেট হয়ে যেত —
// এমনকি localStorage-এ থিম আসলে ঠিকভাবে "dark" লেখা থাকলেও।
// তাই থিমের জন্য সবসময় plain localStorage.getItem/setItem ব্যবহার
// করতে হবে, LS.save/LS.load নয়।
function initTheme() {
  let t = localStorage.getItem('bcs_theme') || 'light';
  // পুরনো corrupted মান (এই বাগের কারণে ভুলভাবে '"light"'/'"dark"'
  // quote-সহ সেভ হয়ে থাকলে) থাকলে নিরাপদে পরিষ্কার করে নেয়
  t = t.replace(/^"|"$/g, '');
  if (t !== 'dark' && t !== 'light') t = 'light';
  applyTheme(t);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('bcs_theme', theme); // ⚠️ plain string — JSON.stringify নয়
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

function updateReadingModeUI() {
  const btn = document.getElementById('readingModeBtn');
  const banner = document.getElementById('readingModeBanner');
  if (btn) btn.classList.toggle('reading-active', readingMode);
  if (banner) banner.classList.toggle('visible', readingMode);
}

function toggleReadingMode() {
  readingMode = !readingMode;
  if (readingMode && currentMode !== 'normal') {
    currentMode = 'normal';
    document.getElementById('bookmarkModeBtn').classList.remove('active');
    document.getElementById('weakModeBtn').classList.remove('active');
  }
  saveAll();
  updateReadingModeUI();
  currentPage = 1;
  renderAll();
}

function getAllQuestions() {
  let all = [];
  SUBJECTS.forEach(s => {
    if (s.varName && typeof window[s.varName] !== 'undefined') {
      all = all.concat(window[s.varName]);
    }
  });
  return all;
}

function getSubjectQuestions(subjectId) {
  if (subjectId === 'all') return getAllQuestions();
  const subj = SUBJECTS.find(s => s.id === subjectId);
  if (!subj || !subj.varName) return [];
  if (typeof window[subj.varName] === 'undefined') return null;
  return window[subj.varName];
}

function normalizeText(str) {
  if (!str) return '';
  return str.normalize('NFC').toLowerCase().trim();
}

function getFiltered() {
  const pool = getSubjectQuestions(currentSubject);
  if (pool === null) return null;
  let result = [...pool];
  if (searchQuery.trim()) {
    const q = normalizeText(searchQuery);
    result = result.filter(item =>
      normalizeText(item.question).includes(q) ||
      (item.topic && normalizeText(item.topic).includes(q)) ||
      (Array.isArray(item.options) && item.options.some(o => normalizeText(o).includes(q)))
    );
  }
  if (currentMode === 'bookmark') result = result.filter(q => bookmarks[q.id]);
  if (currentMode === 'weak') {
    result = [...result].sort((a, b) => {
      const ea = errorCounts[a.id] || 0;
      const eb = errorCounts[b.id] || 0;
      return eb !== ea ? eb - ea : String(a.id).localeCompare(String(b.id));
    });
  }
  return result;
}

function updateScoreBar() {
  const total = filteredQuestions.length;
  const answered = filteredQuestions.filter(q => answeredState.hasOwnProperty(q.id));
  const corr = answered.filter(q => answeredState[q.id]?.correct === true).length;
  const incorr = answered.filter(q => answeredState[q.id]?.correct === false).length;
  document.getElementById('totalCount').textContent = toBn(total);
  document.getElementById('correctCount').textContent = toBn(corr);
  document.getElementById('incorrectCount').textContent = toBn(incorr);
  document.getElementById('pendingCount').textContent = toBn(total - answered.length);
  const pct = total > 0 ? (answered.length / total) * 100 : 0;
  document.getElementById('progressFill').style.width = pct + '%';
}

function renderPagination(totalItems) {
  const container = document.getElementById('paginationContainer');
  container.innerHTML = '';
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) return;
  const prevBtn = document.createElement('button');
  prevBtn.className = 'page-btn page-nav';
  prevBtn.textContent = '⬅️';
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderAll(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  container.appendChild(prevBtn);
  for (let i = 1; i <= totalPages; i++) {
    const showBtn = i === 1 || i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2);
    if (!showBtn) {
      const lastChild = container.lastElementChild;
      if (!lastChild || !lastChild.classList.contains('page-ellipsis')) {
        const dots = document.createElement('span');
        dots.className = 'page-ellipsis';
        dots.textContent = '…';
        container.appendChild(dots);
      }
      continue;
    }
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
    btn.textContent = toBn(i);
    btn.addEventListener('click', () => {
      if (i !== currentPage) { currentPage = i; renderAll(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    });
    container.appendChild(btn);
  }
  const nextBtn = document.createElement('button');
  nextBtn.className = 'page-btn page-nav';
  nextBtn.textContent = '➡️';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) { currentPage++; renderAll(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  container.appendChild(nextBtn);
}

function handleAnswer(qId, selectedIdx, correctIdx, optBtns, explainWrap, card) {
  if (readingMode || answeredState.hasOwnProperty(qId)) return;
  const isCorrect = selectedIdx === correctIdx;
  answeredState[qId] = { correct: isCorrect, selected: selectedIdx };
  if (isCorrect) {
    card.classList.add('answered-correct');
  } else {
    card.classList.add('answered-incorrect');
    errorCounts[qId] = (errorCounts[qId] || 0) + 1;
  }
  saveAll();
  optBtns.forEach(b => b.classList.add('disabled'));
  optBtns[correctIdx].classList.add('correct-choice');
  optBtns[correctIdx].querySelector('.opt-icon').textContent = '✓';
  if (!isCorrect) {
    optBtns[selectedIdx].classList.add('incorrect-choice');
    optBtns[selectedIdx].querySelector('.opt-icon').textContent = '✗';
  }
  optBtns.forEach((b, i) => {
    if (i !== correctIdx && i !== selectedIdx) b.classList.add('dimmed');
  });
  explainWrap.classList.add('visible');
  updateScoreBar();
}

function toggleBookmark(qId, btn) {
  const svg = btn.querySelector('svg');
  if (bookmarks[qId]) {
    delete bookmarks[qId];
    btn.classList.remove('active');
    if (svg) svg.setAttribute('fill', 'none');
  } else {
    bookmarks[qId] = true;
    btn.classList.add('active');
    if (svg) svg.setAttribute('fill', 'currentColor');
  }
  const card = btn.closest('.question-card');
  if (card) card.classList.toggle('bookmarked', !!bookmarks[qId]);
  if (currentMode === 'bookmark' && !bookmarks[qId]) {
    filteredQuestions = filteredQuestions.filter(q => q.id !== qId);
    const totalPages = Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE);
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);
    saveAll();
    renderAll();
    return;
  }
  saveAll();
}

function renderAll() {
  const result = getFiltered();
  const container = document.getElementById('questionsContainer');
  const paginationContainer = document.getElementById('paginationContainer');
  container.innerHTML = '';
  paginationContainer.innerHTML = '';
  const readingBanner = document.getElementById('readingModeBanner');
  if (readingBanner) readingBanner.classList.toggle('visible', readingMode);
  if (result === null) {
    const subj = SUBJECTS.find(s => s.id === currentSubject);
    container.innerHTML = `<div class="coming-soon-banner"><div class="icon">🚀</div><h3>${subj ? subj.label : ''}–আসছে শীঘ্রই</h3><p>এই বিভাগের প্রশ্ন শীঘ্রই যুক্ত হবে।</p></div>`;
    filteredQuestions = [];
    updateScoreBar();
    return;
  }
  filteredQuestions = result;
  const rc = document.getElementById('resultCount');
  if (rc) {
    if (searchQuery.trim()) rc.textContent = `"${searchQuery}"–${toBn(filteredQuestions.length)}টি প্রশ্ন।`;
    else if (currentMode === 'bookmark') rc.textContent = `${toBn(filteredQuestions.length)}টি চিহ্নিত প্রশ্ন আছে।`;
    else rc.textContent = '';
  }
  if (filteredQuestions.length === 0) {
    container.innerHTML = `<div class="no-results">${currentMode === 'bookmark' ? '📌কোনো চিহ্নিত প্রশ্ন খুঁজে পাচ্ছি না। কিছু প্রশ্ন চিহ্নিত করুন?' : '🔍কোনো মেলে এমন প্রশ্ন খুঁজে পাচ্ছি না।'}</div>`;
    updateScoreBar();
    return;
  }
  if (currentPage > Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE)) currentPage = 1;
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = filteredQuestions.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const frag = document.createDocumentFragment();
  pageItems.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    const wasAnswered = answeredState.hasOwnProperty(q.id);
    if (readingMode) {
      card.classList.add('reading-revealed');
    } else if (wasAnswered) {
      card.classList.add(answeredState[q.id]?.correct ? 'answered-correct' : 'answered-incorrect');
    }
    if (bookmarks[q.id]) card.classList.add('bookmarked');
    let optsHtml = '';
    q.options.forEach((opt, i) => {
      let cls = '', iconTxt = '';
      if (readingMode) {
        if (i === q.correctIndex) { cls = ' correct-choice'; iconTxt = '✓'; }
        else cls = ' dimmed';
      } else if (wasAnswered) {
        const state = answeredState[q.id];
        if (i === q.correctIndex) {
          cls = ' correct-choice'; iconTxt = '✓';
        } else if (state && i === state.selected && !state.correct) {
          cls = ' incorrect-choice'; iconTxt = '✗';
        } else {
          cls = ' dimmed';
        }
      }
      optsHtml += `<button class="option-btn${cls}${(readingMode || wasAnswered) ? ' disabled' : ''}" data-opt="${i}" type="button"><span class="opt-label">${['ক','খ','গ','ঘ'][i]}</span><span class="opt-text">${escapeHtml(opt)}</span><span class="opt-icon">${iconTxt}</span></button>`;
    });
    const errCount = errorCounts[q.id] || 0;
    const examName = (q.exam || '').split(',')[0].trim();
    const globalIdx = startIdx + idx;
    card.innerHTML = `<div class="question-body"><span class="q-num">${toBn(globalIdx + 1)}।</span><div class="q-text-wrap"><span class="q-text">${escapeHtml(q.question)}</span><span class="q-exam">${escapeHtml(examName)}</span>${errCount > 0 ? `<span class="tags error" style="margin-left:6px">${toBn(errCount)}✗</span>` : ''}</div><button class="icon-btn bookmark-btn${bookmarks[q.id] ? ' active' : ''}" data-qid="${q.id}" title="চিহ্নিত করুন"><svg class="bm-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="8.5" height="8.5" fill="${bookmarks[q.id] ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button></div><div class="options-list">${optsHtml}</div><div class="explanation-wrap${(wasAnswered || readingMode) ? ' visible' : ''}"><div class="explanation-box"><strong>ব্যাখ্যা:</strong> ${escapeHtml(q.explanation || '—')}</div></div>`;
    const optBtns = Array.from(card.querySelectorAll('.option-btn'));
    const explainWrap = card.querySelector('.explanation-wrap');
    const bmBtn = card.querySelector('.bookmark-btn');
    if (!readingMode && !wasAnswered) {
      optBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          handleAnswer(q.id, parseInt(btn.dataset.opt), q.correctIndex, optBtns, explainWrap, card);
        });
      });
    }
    bmBtn.addEventListener('click', () => toggleBookmark(q.id, bmBtn));
    frag.appendChild(card);
  });
  container.appendChild(frag);
  renderPagination(filteredQuestions.length);
  updateScoreBar();
}

function renderTabs() {
  const bar = document.getElementById('subjectTabs');
  bar.innerHTML = '';
  SUBJECTS.forEach(s => {
    const icon = `<span class="tab-icon">${SUBJECT_ICONS[s.id] || ''}</span>`;
    if (s.external) {
      const link = document.createElement('a');
      link.className = 'tab-btn';
      link.href = s.external;
      link.innerHTML = `${icon}${s.label}`;
      bar.appendChild(link);
      return;
    }
    const isAll = s.varName === null;
    const available = isAll || typeof window[s.varName] !== 'undefined';
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (s.id === currentSubject ? ' active' : '');
    btn.dataset.subject = s.id;
    if (isAll) {
      btn.innerHTML = `${icon}সব কুইজ (${toBn(getAllQuestions().length)})`;
    } else if (available) {
      btn.innerHTML = `${icon}${s.label} (${toBn(window[s.varName].length)})`;
    } else {
      btn.innerHTML = `${icon}${s.label} <span class="coming-soon">আসছে শীঘ্রই</span>`;
    }
    btn.addEventListener('click', () => {
      currentSubject = s.id;
      currentPage = 1;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAll();
    });
    bar.appendChild(btn);
  });
}

function fullReset() {
  const ok = window.confirm('আপনি নিশ্চিত? সব উত্তর, চিহ্ন এবং ত্রুটি মুছে যাবে?');
  if (!ok) return;
  answeredState = {}; errorCounts = {}; bookmarks = {};
  readingMode = false;
  currentMode = 'normal';
  document.getElementById('weakModeBtn').classList.remove('active');
  document.getElementById('bookmarkModeBtn').classList.remove('active');
  currentPage = 1;
  saveAll();
  updateReadingModeUI();
  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function init() {
  pruneLocalStorage();
  loadAll();
  initTheme();
  // Display version
  const versionEl = document.getElementById('appVersion');
  if (versionEl) versionEl.textContent = APP_VERSION;
  renderTabs();
  updateReadingModeUI();
  renderAll();
  const weakBtn = document.getElementById('weakModeBtn');
  const bmModeBtn = document.getElementById('bookmarkModeBtn');
  if (currentMode === 'weak') weakBtn.classList.add('active');
  if (currentMode === 'bookmark') bmModeBtn.classList.add('active');
  weakBtn.addEventListener('click', function () {
    if (currentMode === 'weak') { currentMode = 'normal'; this.classList.remove('active'); }
    else {
      currentMode = 'weak'; this.classList.add('active'); bmModeBtn.classList.remove('active');
      if (readingMode) { readingMode = false; updateReadingModeUI(); }
    }
    currentPage = 1;
    saveAll();
    renderAll();
  });
  bmModeBtn.addEventListener('click', function () {
    if (currentMode === 'bookmark') { currentMode = 'normal'; this.classList.remove('active'); }
    else {
      currentMode = 'bookmark'; this.classList.add('active'); weakBtn.classList.remove('active');
      if (readingMode) { readingMode = false; updateReadingModeUI(); }
    }
    currentPage = 1;
    saveAll();
    renderAll();
  });
  document.getElementById('themeBtn').addEventListener('click', toggleTheme);
  document.getElementById('readingModeBtn').addEventListener('click', toggleReadingMode);
  document.getElementById('headerResetBtn').addEventListener('click', fullReset);
  document.getElementById('resetBtn').addEventListener('click', fullReset);
  let searchTimer;
  document.getElementById('searchInput').addEventListener('input', function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { searchQuery = this.value; currentPage = 1; renderAll(); }, 280);
  });
  const scrollBtn = document.getElementById('scrollTopBtn');
  let lastScrollY = 0;
  const header = document.querySelector('.app-header');
  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    scrollBtn.classList.toggle('visible', currentY > 400);
    const delta = currentY - lastScrollY;
    if (delta > 5 && currentY > 80) {
      header.classList.add('header-hidden');
    } else if (delta < -5 || currentY <= 80) {
      header.classList.remove('header-hidden');
    }
    lastScrollY = currentY;
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', init);
