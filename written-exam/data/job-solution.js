// ============================================================
// job-solution.js — Written Exam Data
// ============================================================
// প্রতিটা question-এর structure নিচে দেখুন।
// নতুন প্রশ্ন যোগ করতে এই ফাইল এডিট করুন।
// exam-archive.js এও সংশ্লিষ্ট exam entry থাকতে হবে।
// ============================================================

// ── Question Types ──────────────────────────────────────────
//
// "sub-parts"      → ক) খ) গ) — সন্ধি, সমাস, কারক, এক কথায়
//                    parts: [{ label, q, a }]
//
// "table"          → দুই কলামের ছক
//                    columns: [col1, col2], rows: [[c1, c2]]
//                    optional: columns3 for 3-column tables
//
// "paragraph"      → দীর্ঘ রচনা / অনুচ্ছেদ / ভাবসম্প্রসারণ
//                    answer: "string"
//
// "math"           → ধাপে ধাপে সমাধান
//                    steps: ["step1", "step2"]
//                    answer: "চূড়ান্ত উত্তর"
//                    alternative: { steps, answer } — optional
//
// "translate"      → অনুবাদ (বাংলা↔ইংরেজি)
//                    parts: [{ label, source, target }]
//
// "fill-gaps"      → শূন্যস্থান পূরণ (preposition/verb/article)
//                    parts: [{ sentence, answer }]
//
// "sentence-change"→ voice change / transform / correct sentence
//                    parts: [{ label, original, changed }]
//
// "idiom"          → বাগধারা / phrase with meaning + example
//                    parts: [{ label, phrase, meaning, example }]
//
// "letter"         → পত্র / আবেদনপত্র
//                    to: "প্রাপক"
//                    subject: "বিষয়"
//                    body: "মূল পত্র"
//                    closing: "ধন্যবাদান্তে / Yours faithfully"
//                    sender: "প্রেরকের নাম"
//
// "read-fill"      → passage পড়ে শূন্যস্থান পূরণ
//                    passage: "পুরো paragraph blanks সহ"
//                    answers: "a) ... b) ... c) ..."
//
// "short-qa"       → সাধারণ জ্ঞান, ছোট প্রশ্ন-উত্তর
//                    parts: [{ label, q, a }]
//
// ────────────────────────────────────────────────────────────

const JOB_SOLUTIONS = [

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: জেলা প্রশাসকের কার্যালয়, জয়পুরহাট
  // id prefix: job-2025-dc
  // ══════════════════════════════════════════════════════════

  {
    id: "job-2025-dc-q01",
    examId: "job-2025-dc",
    subject: "bangla",
    qno: 1,
    marks: 5,
    type: "letter",
    question: "ধরুন আপনার নাম হাবিব। আপনি জয়পুরহাট জেলার সদর থানার ধলাহার ইউনিয়নের বাসিন্দা। আপনার এলাকায় একটি পাঠাগার স্থাপনের জন্য ইউনিয়ন পরিষদের চেয়ারম্যান বরাবর একটি আবেদনপত্র লিখুন।",
    letter: {
      date: "২৯ আগস্ট, ২০২৫",
      to: "চেয়ারম্যান\nধলাহার ইউনিয়ন পরিষদ\nজয়পুরহাট সদর, জয়পুরহাট।",
      subject: "ধলাহার ইউনিয়নে একটি পাঠাগার স্থাপনের জন্য আবেদন।",
      body: "সবিনয় নিবেদন এই যে, আমি হাবিব, আপনার ইউনিয়নের একজন স্থায়ী বাসিন্দা। আপনার সদয় অবগতির জন্য জানাচ্ছি যে, ধলাহার ইউনিয়ন একটি বৃহৎ এলাকা হলেও এখানে কোনো পাঠাগার নেই। এর ফলে এলাকার শিক্ষার্থী ও জ্ঞানপিপাসু মানুষেরা বই পড়ার সুযোগ থেকে বঞ্চিত হচ্ছে।\n\nবর্তমান যুগে তথ্যপ্রযুক্তি ও শিক্ষার গুরুত্ব অপরিসীম। একটি পাঠাগার শুধু বই পড়ার স্থান নয়, এটি জ্ঞানচর্চা, সৃজনশীলতা এবং সুস্থ বিনোদনের একটি কেন্দ্র। আমাদের ইউনিয়নে একটি পাঠাগার প্রতিষ্ঠিত হলে এলাকার তরুণ সমাজ মোবাইল ও অন্যান্য প্রযুক্তির অপব্যবহার থেকে দূরে থেকে বই পড়ায় মনোনিবেশ করতে পারবে।\n\nঅতএব, বিনীত অনুরোধ এই যে, এলাকার শিক্ষা ও সংস্কৃতির উন্নয়নের স্বার্থে ধলাহার ইউনিয়নে একটি পাঠাগার স্থাপনের জন্য দ্রুত প্রয়োজনীয় ব্যবস্থা গ্রহণ করতে আপনার মর্জি হয়।",
      closing: "বিনীত নিবেদক,",
      sender: "হাবিব\nগ্রাম: ধলাহার, ইউনিয়ন: ধলাহার\nজয়পুরহাট সদর, জয়পুরহাট"
    }
  },

  {
    id: "job-2025-dc-q02",
    examId: "job-2025-dc",
    subject: "bangla",
    qno: 2,
    marks: 5,
    type: "paragraph",
    question: "ভাবসম্প্রসারণ করুন: 'বিদ্যার সঙ্গে সম্পর্কহীন জীবন অন্ধ এবং জীবনের সঙ্গে সম্পর্কহীন বিদ্যা পঙ্গু।'",
    answer: "মূলভাব: বিদ্যা মানুষের জীবনকে উন্নত করে। বিদ্যা মানুষের ভেতরকার অন্ধকার দূর করে তাকে আলোকিত করে তোলে। তবে, যে বিদ্যার সঙ্গে বাস্তব জীবনের কোনো যোগসূত্র নেই, তা অর্থহীন ও মূল্যহীন।\n\nসম্প্রসারিত ভাব: মানুষের জন্মগত কোনো পরিচয় নেই। বিদ্যাই মানুষকে তার আসল পরিচয় প্রদান করে। যে মানুষ বিদ্যার আলোয় আলোকিত নয়, সে সমাজের জন্য বোঝাস্বরূপ। বিদ্যা মানুষকে কুসংস্কার, অজ্ঞতা ও অন্ধকার থেকে বের করে আলোর পথে পরিচালিত করে।\n\nতবে, যে বিদ্যা জীবন থেকে বিচ্ছিন্ন, তা অর্থহীন। কারণ বাস্তব জীবনের সমস্যা সমাধানে যদি বিদ্যা কাজে না আসে, তবে তা কেবল বইয়ের পাতায় সীমাবদ্ধ থাকে। প্রকৃত বিদ্যা মানুষকে মানবিক ও উদার করে তোলে এবং জীবনের সব ক্ষেত্রে ইতিবাচক প্রভাব ফেলে।\n\nপরিশেষে বলা যায়, কেবল পুঁথিগত বিদ্যা অর্জনই যথেষ্ট নয়, বরং যে বিদ্যা জীবনের জন্য কল্যাণকর এবং বাস্তবসম্মত, তাই প্রকৃত বিদ্যা।"
  },

  {
    id: "job-2025-dc-q03",
    examId: "job-2025-dc",
    subject: "bangla",
    qno: 3,
    marks: 5,
    type: "table",
    question: "ব্যাসবাক্যসহ সমাস নির্ণয় করুন:",
    columns: ["শব্দ", "ব্যাসবাক্য", "সমাসের নাম"],
    rows: [
      ["মনমাঝি", "মন রূপ মাঝি", "রূপক কর্মধারয়"],
      ["আলুনি", "লবণের অভাব", "অব্যয়ীভাব"],
      ["যথানিয়ম", "নিয়মকে অতিক্রম না করে", "অব্যয়ীভাব"],
      ["পসুরি", "পাঁচ সেরের সমাহার", "দ্বিগু সমাস"],
      ["শশব্যস্ত", "শশকের ন্যায় ব্যস্ত", "উপমান কর্মধারয়"]
    ]
  },

  {
    id: "job-2025-dc-q04",
    examId: "job-2025-dc",
    subject: "bangla",
    qno: 4,
    marks: 5,
    type: "table",
    question: "নিম্নরেখ শব্দগুলির কারক ও বিভক্তি নির্ণয় করুন:",
    columns: ["বাক্য", "কারক ও বিভক্তি"],
    rows: [
      ["তিলে তেল আছে", "অধিকরণে ৭মী"],
      ["পাইলটে ভাল লেখা হয়", "করণে ৭মী"],
      ["ধোপাকে কাপড় দাও", "কর্মে ২য়া"],
      ["অর্থ অনর্থ ঘটায়", "কর্তায় শূন্য"],
      ["অঞ্জনে দেহ আলো", "সম্প্রদানে ৭মী"]
    ]
  },

  {
    id: "job-2025-dc-q05",
    examId: "job-2025-dc",
    subject: "bangla",
    qno: 5,
    marks: 5,
    type: "idiom",
    question: "অর্থসহ বাক্য গঠন করুন:",
    parts: [
      { label: "ক", phrase: "চশমখোর", meaning: "বেহায়া", example: "চশমখোর মানুষের সাথে মিশতে নেই।" },
      { label: "খ", phrase: "তালকানা", meaning: "বেতাল হওয়া", example: "সে একেবারে তালকানা হয়ে গেছে।" },
      { label: "গ", phrase: "হাতটান", meaning: "চুরির অভ্যাস", example: "হাতটান মানুষকে বিশ্বাস করা যায় না।" },
      { label: "ঘ", phrase: "চাঁদের হাট", meaning: "আনন্দের প্রাচুর্য", example: "বিয়েবাড়িতে যেন চাঁদের হাট বসেছে।" },
      { label: "ঙ", phrase: "ভালুক জ্বর", meaning: "অনিয়মিত/ক্ষণস্থায়ী", example: "তার ভালুক জ্বর দেখা দিয়েছে।" }
    ]
  },

  {
    id: "job-2025-dc-q06",
    examId: "job-2025-dc",
    subject: "english",
    qno: 6,
    marks: 5,
    type: "paragraph",
    question: "Write a paragraph on 'Career Planning'",
    answer: "Career planning means thinking about your future job and how to reach it. It helps you know your interests, skills, and strengths. With career planning, you can choose the right study and training. It saves time and helps you make better decisions. Starting early gives you a clear goal and builds confidence. It also helps you adjust to changes in the job market. Career planning is not done once; it continues as you grow. Teachers, parents, and career guides can help you plan better. In today's world, good career planning leads to success and happiness. Every student should plan their career for a bright future."
  },

  {
    id: "job-2025-dc-q07",
    examId: "job-2025-dc",
    subject: "english",
    qno: 7,
    marks: 5,
    type: "idiom",
    question: "Make sentences with meaning:",
    parts: [
      { label: "ক", phrase: "Get rid of", meaning: "মুক্তি পাওয়া", example: "You should get rid of smoking." },
      { label: "খ", phrase: "Bring to mind", meaning: "স্মরণ করা", example: "I could not bring to mind his name." },
      { label: "গ", phrase: "Dark horse", meaning: "অজ্ঞাত পরিচয়", example: "The new candidate was a dark horse in the election." },
      { label: "ঘ", phrase: "Close to", meaning: "নিকটে", example: "The school is close to my college." },
      { label: "ঙ", phrase: "In vain", meaning: "বৃথা", example: "All his hopes were in vain." }
    ]
  },

  {
    id: "job-2025-dc-q08",
    examId: "job-2025-dc",
    subject: "english",
    qno: 8,
    marks: 5,
    type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "সকাল থেকে মুষলধারে বৃষ্টি হচ্ছে।", target: "It has been raining cats and dogs since morning." },
      { label: "খ", source: "আয় বুঝে ব্যয় কর।", target: "Cut your coat according to your cloth." },
      { label: "গ", source: "তার ঠাণ্ডা লেগেছে।", target: "He has caught cold." },
      { label: "ঘ", source: "সে কি স্কুলে যাচ্ছে না?", target: "Isn't he going to school?" },
      { label: "ঙ", source: "সূর্য পশ্চিম দিকে অস্ত যায়।", target: "The sun sets in the west." }
    ]
  },

  {
    id: "job-2025-dc-q09",
    examId: "job-2025-dc",
    subject: "english",
    qno: 9,
    marks: 5,
    type: "fill-gaps",
    question: "Fill in the blanks with preposition:",
    parts: [
      { sentence: "She called me ....... the telephone.", answer: "by" },
      { sentence: "Please look ...... the matter.", answer: "into" },
      { sentence: "He is dull .......... English.", answer: "at" },
      { sentence: "His school is adjacent ....... his home.", answer: "to" },
      { sentence: "Paper is made ......... wood.", answer: "from" }
    ]
  },

  {
    id: "job-2025-dc-q10",
    examId: "job-2025-dc",
    subject: "english",
    qno: 10,
    marks: 5,
    type: "letter",
    question: "Write a letter to the Mayor of Rajshahi city corporation drawing his attention to establish a playground in Rajshahi city.",
    letter: {
      date: "",
      to: "The Mayor\nRajshahi City Corporation\nRajshahi.",
      subject: "Application for establishing a playground in Rajshahi city.",
      body: "I am a resident of Rajshahi city. Many children and young people live in our area. But there is no playground for them. Children play on the roads which is very risky. A playground will help them play safely. It will also keep them healthy and cheerful. In the absence of a playground, many children spend time in bad activities. A playground can save them from this problem.\n\nTherefore, I request you to kindly take steps to establish a playground in Rajshahi city.",
      closing: "Yours faithfully,",
      sender: "Nihal Rahman\nRajshahi City"
    }
  },

  {
    id: "job-2025-dc-q11",
    examId: "job-2025-dc",
    subject: "math",
    qno: 11,
    marks: 5,
    type: "math",
    question: "$(4x - 5y)$ এর ঘন নির্ণয় করুন।",
    steps: [
      "$(4x - 5y)^3$",
      "$= (4x)^3 - 3(4x)^2(5y) + 3(4x)(5y)^2 - (5y)^3$",
      "$= 64x^3 - 240x^2y + 300xy^2 - 125y^3$"
    ],
    answer: "$64x^3 - 240x^2y + 300xy^2 - 125y^3$"
  },

  {
    id: "job-2025-dc-q12",
    examId: "job-2025-dc",
    subject: "math",
    qno: 12,
    marks: 5,
    type: "math",
    question: "সরল করুন: $\\frac{x^2 + 3x - 4}{x^2 - 7x + 12} \\div \\frac{x^2 - 16}{x^2-9} \\times \\frac{(x-4)^2}{(x-1)^2}$",
    steps: [
      "$= \\frac{(x+4)(x-1)}{(x-4)(x-3)} \\div \\frac{(x-4)(x+4)}{(x-3)(x+3)} \\times \\frac{(x-4)(x-4)}{(x-1)(x-1)}$",
      "$= \\frac{(x+4)(x-1)}{(x-4)(x-3)} \\times \\frac{(x-3)(x+3)}{(x-4)(x+4)} \\times \\frac{(x-4)(x-4)}{(x-1)(x-1)}$",
      "$= \\frac{x+3}{x-1}$"
    ],
    answer: "$\\frac{x+3}{x-1}$"
  },

  {
    id: "job-2025-dc-q13",
    examId: "job-2025-dc",
    subject: "math",
    qno: 13,
    marks: 5,
    type: "math",
    question: "দুই অঙ্কবিশিষ্ট কোনো সংখ্যার একক স্থানীয় অঙ্কটি দশক স্থানীয় অঙ্ক অপেক্ষা ২ বেশি। অঙ্কদ্বয় স্থান বিনিময় করলে যে সংখ্যা পাওয়া যাবে তা প্রদত্ত সংখ্যার দ্বিগুণ অপেক্ষা ৬ কম হবে। সংখ্যাটি নির্ণয় করুন।",
    steps: [
      "মেনে করি, দশক স্থানীয় অঙ্কটি $x$",
      "$\\therefore$ একক স্থানীয় অঙ্কটি হবে $x + 2$",
      "$\\therefore$ সংখ্যাটি $= 10x + (x + 2) = 11x + 2$",
      "অঙ্কদ্বয় স্থান বিনিময় করলে: $10(x + 2) + x = 11x + 20$",
      "প্রশ্নমতে: $11x + 20 = 2(11x + 2) - 6$",
      "$11x + 20 = 22x - 2$",
      "$11x = 22$ $\\therefore x = 2$",
      "সংখ্যাটি $= 11 \\times 2 + 2 = 24$"
    ],
    answer: "সংখ্যাটি ২৪।"
  },

  {
    id: "job-2025-dc-q14",
    examId: "job-2025-dc",
    subject: "math",
    qno: 14,
    marks: 5,
    type: "math",
    question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য 10% বৃদ্ধি এবং প্রস্থ 10% হ্রাস পেলে আয়তক্ষেত্রের ক্ষেত্রফল শতকরা কত বৃদ্ধি বা হ্রাস পাবে?",
    steps: [
      "মেনে করি, দৈর্ঘ্য $x$ একক, প্রস্থ $y$ একক",
      "10% বৃদ্ধিতে নতুন দৈর্ঘ্য $= \\frac{11x}{10}$ একক",
      "10% হ্রাসে নতুন প্রস্থ $= \\frac{9y}{10}$ একক",
      "নতুন ক্ষেত্রফল $= \\frac{11x}{10} \\times \\frac{9y}{10} = \\frac{99xy}{100}$ বর্গ একক",
      "ক্ষেত্রফল হ্রাস $= xy - \\frac{99xy}{100} = \\frac{xy}{100}$",
      "শতকরা হ্রাস $= \\frac{xy/100}{xy} \\times 100 = 1\\%$"
    ],
    answer: "ক্ষেত্রফল ১% হ্রাস পায়।"
  },

  {
    id: "job-2025-dc-q15",
    examId: "job-2025-dc",
    subject: "math",
    qno: 15,
    marks: 5,
    type: "math",
    question: "পঁচিশ পয়সা ও পঞ্চাশ পয়সার মোট ১২০ টি মুদ্রায় ৩৫ টাকা হয়। কোন প্রকারের মুদ্রার সংখ্যা কত?",
    steps: [
      "মেনে করি, পঞ্চাশ পয়সার মুদ্রার সংখ্যা $= x$ টি",
      "$\\therefore$ পঁচিশ পয়সার মুদ্রার সংখ্যা $= (120 - x)$ টি",
      "$50x + 25(120 - x) = 3500$ পয়সা",
      "$50x + 3000 - 25x = 3500$",
      "$25x = 500$ $\\therefore x = 20$"
    ],
    answer: "পঞ্চাশ পয়সার মুদ্রা ২০টি, পঁচিশ পয়সার মুদ্রা ১০০টি।"
  }

  // ══════════════════════════════════════════════════════════
  // পরবর্তী পরীক্ষার data এখানে যোগ করুন
  // ══════════════════════════════════════════════════════════

];
