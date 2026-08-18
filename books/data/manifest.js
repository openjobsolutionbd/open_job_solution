// ══════════════════════════════════════════════════════════════════
// বই সমূহ — মেটাডেটা ম্যানিফেস্ট
//
// এই ফাইলে শুধু বই/বিষয়ের তালিকা ও আইকন আছে — আসল প্রশ্ন-উত্তর/কনটেন্ট
// এখানে নেই। কনটেন্ট পরে যোগ হবে, তখন content.js নামে আলাদা ফাইলে
// (বা user যেভাবে ঠিক করবেন) — এই ম্যানিফেস্ট বদলাতে হবে না।
//
// bcs-mcq/app.js-এর SUBJECT_ICONS থেকে হুবহু কপি করা (visual
// ধারাবাহিকতার জন্য, নতুন করে ডিজাইন করা হয়নি)।
// ══════════════════════════════════════════════════════════════════

const BOOK_ICONS = {
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
  // "সাধারণ জ্ঞান" — bcs-mcq-এর আইকন সেটে সরাসরি মিল নেই (ওখানে
  // বাংলাদেশ/আন্তর্জাতিক আলাদা), তাই written-exam-এর নিজস্ব একটা
  // সাধারণ বাল্ব-আইকন যোগ করা হলো, একই স্ট্রোক-স্টাইলে।
  'general-knowledge': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z"/></svg>'
};

const BOOKS = {
  bcs: {
    id: 'bcs',
    title: 'BCS MCQ বই',
    desc: 'bcs-mcq-এর প্রশ্নব্যাংক থেকে বিষয়ভিত্তিক সাজানো',
    sourceApp: '/bcs-mcq/',
    subjects: [
      { id: 'bangla',        label: 'বাংলা',              marks: 30 },
      { id: 'english',       label: 'English',            marks: 30 },
      { id: 'bangladesh',    label: 'বাংলাদেশ বিষয়াবলী',  marks: 25 },
      { id: 'international', label: 'আন্তর্জাতিক বিষয়াবলী', marks: 25 },
      { id: 'math',          label: 'গণিত',               marks: 20 },
      { id: 'science',       label: 'বিজ্ঞান',            marks: 15 },
      { id: 'computer',      label: 'কম্পিউটার',          marks: 15 },
      { id: 'mental',        label: 'মানসিক দক্ষতা',       marks: 15 },
      { id: 'geography',     label: 'ভূগোল',              marks: 10 },
      { id: 'ethics',        label: 'নৈতিকতা',            marks: 10 }
    ]
  },
  written: {
    id: 'written',
    title: '১১-২০তম গ্রেডের লিখিত বই',
    desc: 'written-exam-এর প্রশ্ন-উত্তর থেকে বিষয়ভিত্তিক সাজানো',
    sourceApp: '/written-exam/',
    subjects: [
      { id: 'bangla',             label: 'বাংলা' },
      { id: 'english',            label: 'ইংরেজি' },
      { id: 'math',               label: 'গণিত' },
      { id: 'general-knowledge',  label: 'সাধারণ জ্ঞান' }
    ]
  }
};
