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
  },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: কারিগরি শিক্ষা অধিদপ্তর — সহকারী কাম কিপার
  // id prefix: job-2025-tech-edu-keeper
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-tech-edu-keeper-q01", examId: "job-2025-tech-edu-keeper", subject: "bangla", qno: 1, marks: 2, type: "paragraph",
    question: "কবি কাজী নজরুল ইসলামের চারটি কাব্যগ্রন্থের নাম লিখুন।",
    answer: "অগ্নিবীণা, বিষের বাঁশি, সাম্যবাদী, ভাঙার গান।" },

  { id: "job-2025-tech-edu-keeper-q02", examId: "job-2025-tech-edu-keeper", subject: "bangla", qno: 2, marks: 2, type: "paragraph",
    question: "বাংলা অক্ষরের প্রথম মুদ্রিত বইয়ের নাম কী? এবং এর রচয়িতা কে?",
    answer: "'রাজা প্রতাপাদিত্য চরিত্র' এবং রচয়িতা রামরাম বসু।" },

  { id: "job-2025-tech-edu-keeper-q03", examId: "job-2025-tech-edu-keeper", subject: "bangla", qno: 3, marks: 2, type: "paragraph",
    question: "মাইকেল মধুসূদন দত্তের প্রথম প্রকাশিত কাব্য কোনটি? কত সালে প্রকাশিত হয়?",
    answer: "The Captive Lady; ১৮৪৯ সালে।" },

  { id: "job-2025-tech-edu-keeper-q04", examId: "job-2025-tech-edu-keeper", subject: "bangla", qno: 4, marks: 2, type: "paragraph",
    question: "নীহাররঞ্জন গুপ্ত এর ছদ্ম নাম কী?",
    answer: "বানভট্ট।" },

  { id: "job-2025-tech-edu-keeper-q05", examId: "job-2025-tech-edu-keeper", subject: "bangla", qno: 5, marks: 2, type: "paragraph",
    question: "বাংলা ভাষায় প্রচলিত চারটি জাপানি শব্দ লিখুন।",
    answer: "রিকশা, সুনামি, কারেট, প্যাগোডা।" },

  { id: "job-2025-tech-edu-keeper-q06", examId: "job-2025-tech-edu-keeper", subject: "bangla", topic: "সন্ধি", qno: 6, marks: 4, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["ঈষদুষ্ণ", "ঈষৎ + উষ্ণ"],
      ["বিদ্যুদ্বেগ", "বিদ্যুৎ + বেগ"],
      ["যশোবন্ত", "যশঃ + বন্ত"],
      ["তদনুসারে", "তৎ + অনুসারে"]
    ] },

  { id: "job-2025-tech-edu-keeper-q07", examId: "job-2025-tech-edu-keeper", subject: "bangla", topic: "শুদ্ধিকরণ", qno: 7, marks: 4, type: "table",
    question: "শুদ্ধ বানান লিখুন:",
    columns: ["অশুদ্ধ", "শুদ্ধ"],
    rows: [
      ["মানষিক", "মানসিক"],
      ["অহোরাত্রি", "অহোরাত্র"],
      ["অধ্যাবসায়", "অধ্যবসায়"],
      ["স্বতোফূর্ত", "স্বতঃস্ফূর্ত"]
    ] },

  { id: "job-2025-tech-edu-keeper-q08", examId: "job-2025-tech-edu-keeper", subject: "bangla", topic: "এক-কথায়-প্রকাশ", qno: 8, marks: 4, type: "table",
    question: "এক কথায় প্রকাশ করুন:",
    columns: ["বাক্য", "এক কথায়"],
    rows: [
      ["বাঘের চামড়া", "কৃত্তি"],
      ["বন্দনা করার যোগ্য", "বন্দনীয়/পূজনীয়"],
      ["ভীষণ কাঁদছে এমন", "রোরুদ্যমান"],
      ["জল আর্দ্র যে ভূমি", "জলাভূমি"]
    ] },

  { id: "job-2025-tech-edu-keeper-q09", examId: "job-2025-tech-edu-keeper", subject: "bangla", qno: 9, marks: 4, type: "idiom",
    question: "অর্থসহ বাক্য রচনা করুন:",
    parts: [
      { label: "ক", phrase: "খণ্ড প্রলয়", meaning: "তুমুল কাণ্ড, ভীষণ ব্যাপার" },
      { label: "খ", phrase: "মন না মতি", meaning: "অস্থির মানব মন" },
      { label: "গ", phrase: "কানাকড়ি", meaning: "অতি নগণ্য পরিমাণ" },
      { label: "ঘ", phrase: "একচোখা", meaning: "পক্ষপাতদুষ্ট" }
    ] },

  { id: "job-2025-tech-edu-keeper-q10", examId: "job-2025-tech-edu-keeper", subject: "bangla", qno: 10, marks: 2, type: "paragraph",
    question: "কার সম্পাদনা এবং কোন সংস্থা থেকে চর্যাপদ গ্রন্থাকারে প্রকাশিত হয়?",
    answer: "মহামহোপাধ্যায় হরপ্রসাদ শাস্ত্রীর সম্পাদনায় 'বঙ্গীয় সাহিত্য পরিষদ' হতে চর্যাপদ প্রকাশিত হয়।" },

  { id: "job-2025-tech-edu-keeper-q11", examId: "job-2025-tech-edu-keeper", subject: "math", topic: "পাটিগণিত", qno: 11, marks: 6, type: "math",
    question: "একটি বাঁশের 2/4 অংশ লাল, 1/8 অংশ কালো এবং 2/9 অংশ সবুজ কাগজে আবৃত। অবশিষ্ট অংশ ৬ মিটার হলে, বাঁশটির দৈর্ঘ্য কত?",
    steps: [
      "মেনে করি, মোট বাঁশের দৈর্ঘ্য = 1 অংশ",
      "কাগজ দ্বারা আবৃত অংশ = (2/4 + 1/8 + 2/9) অংশ = (36+9+16)/72 অংশ = 61/72 অংশ",
      "সুতরাং, অবশিষ্ট অংশ = (1 - 61/72) = 11/72 অংশ",
      "প্রশ্নমতে, 11/72 অংশ = 6 মিটার"
    ],
    answer: "বাঁশটির দৈর্ঘ্য ৩৬০ মিটার।" },

  { id: "job-2025-tech-edu-keeper-q12", examId: "job-2025-tech-edu-keeper", subject: "math", topic: "পাটিগণিত", qno: 12, marks: 6, type: "math",
    question: "প্রকৃত গতিবেগ ঘণ্টায় ৭ কি.মি। এরূপ নৌকায় স্রোতের অনুকূলে ৩৩ কি.মি পথ যেতে ৩ ঘণ্টা সময় লেগেছে। ফিরে আসার সময় নৌকাটির কত সময় লাগবে?",
    steps: [
      "স্রোতের অনুকূলে, নৌকার গতিবেগ = 33/3 = 11 কিমি/ঘণ্টা",
      "স্রোতের বেগ = নৌকার কার্যকরী বেগ - প্রকৃত বেগ = 11 - 7 = 4 কিমি/ঘণ্টা",
      "স্রোতের প্রতিকূলে, নৌকার কার্যকরী বেগ = 7 - 4 = 3 কিমি/ঘণ্টা",
      "৩ কি.মি. ফিরে আসে ১ ঘণ্টায়, সুতরাং ৩৩ কি.মি. ফিরে আসতে সময় = 33/3 = 11 ঘণ্টা"
    ],
    answer: "১১ ঘণ্টা।" },

  { id: "job-2025-tech-edu-keeper-q13", examId: "job-2025-tech-edu-keeper", subject: "math", topic: "পাটিগণিত", qno: 13, marks: 6, type: "math",
    question: "একটি গ্রামের মোট জনসংখ্যার 4/9 ভাগ লোক পুরুষ। যদি পুরুষের ৩০% বিবাহিত হয়, তাহলে মোট জনসংখ্যার শতকরা কতজন মহিলা অবিবাহিত?",
    steps: [
      "মেনে করি, মোট জনসংখ্যা = 9ক জন",
      "পুরুষের সংখ্যা = 9ক এর 4/9 = 4ক জন",
      "মহিলার সংখ্যা = 9ক - 4ক = 5ক",
      "বিবাহিত পুরুষ = 4ক এর 30% = 1.5ক জন, তাই বিবাহিত মহিলাও = 1.5ক জন",
      "অবিবাহিত মহিলা = 5ক - 1.5ক = 2.5ক জন",
      "শতকরা হার = (2.5ক × 100)/9ক = 27.78%"
    ],
    answer: "২৭.৭৮%" },

  { id: "job-2025-tech-edu-keeper-q14", examId: "job-2025-tech-edu-keeper", subject: "math", topic: "বীজগণিত", qno: 14, marks: 6, type: "math",
    question: "a + 1/a = √2 হলে, a^4 + 1/a^4 = কত?",
    steps: [
      "প্রদত্ত রাশি = a^4 + 1/a^4 = (a^2)^2 + (1/a^2)^2",
      "= (a^2 + 1/a^2)^2 - 2",
      "= {(a + 1/a)^2 - 2}^2 - 2",
      "= {(√2)^2 - 2}^2 - 2  [মান বসিয়ে]",
      "= (2 - 2)^2 - 2 = 0 - 2 = -2"
    ],
    answer: "-2" },

  { id: "job-2025-tech-edu-keeper-q15", examId: "job-2025-tech-edu-keeper", subject: "math", topic: "জ্যামিতি", qno: 15, marks: 6, type: "math",
    question: "একটি ত্রিভুজের ভূমি তার উচ্চতার দ্বিগুণ অপেক্ষা ৬ সে.মি. বেশি। ত্রিভুজটির ক্ষেত্রফল ৮১০ বর্গ সে.মি হলে উচ্চতা কত?",
    steps: [
      "মেনে করি, উচ্চতা = ক, তাই ভূমি = 2ক + 6",
      "প্রশ্নমতে, 1/2 × (ভূমি × উচ্চতা) = 810",
      "(2ক + 6) × ক = 1620",
      "ক^2 + 3ক - 810 = 0",
      "ক(ক + 30) - 27(ক + 30) = 0",
      "(ক + 30)(ক - 27) = 0",
      "ক = -30 (গ্রহণযোগ্য নয়) অথবা ক = 27"
    ],
    answer: "উচ্চতা ২৭ সে.মি।" },

  { id: "job-2025-tech-edu-keeper-q16", examId: "job-2025-tech-edu-keeper", subject: "english", topic: "paragraph", qno: 16, marks: 10, type: "paragraph",
    question: "Write a short note (not less than ten sentences): \"Control of corruption in Bangladesh\"",
    answer: "Corruption is a big problem in Bangladesh. It slows down the country's development and creates inequality. Many sectors like education, health, and government offices suffer from corruption. To stop it, the government must make all work transparent and fair. The Anti-Corruption Commission (ACC) should take strong action against corrupt people. Using digital services can reduce bribery and make systems cleaner. People should learn to be honest and follow rules. Teachers and parents can help students understand the value of honesty. Strong laws and fair punishment are needed for corrupt persons. If everyone works together, Bangladesh can reduce corruption and move toward progress." },

  { id: "job-2025-tech-edu-keeper-q17", examId: "job-2025-tech-edu-keeper", subject: "english", topic: "translation", qno: 17, marks: 5, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "সে এতই গর্বিত অনুভব করলো যে, সে কোন কথা বলতে পারলো না।", target: "He felt so proud that he couldn't say a word." },
      { label: "খ", source: "সে প্রতিজ্ঞা করলো যে, সে আর কখনো বিলম্বে অফিসে আসবে না।", target: "He vowed that he would never come to the office late again." },
      { label: "গ", source: "ভিক্ষার চাল কাঁড়া আর আকাঁড়া।", target: "Beggars must not be choosers." },
      { label: "ঘ", source: "পুলিশ আসার আগে চোরটি পালিয়ে গেল।", target: "The thief had fled before the police arrived." },
      { label: "ঙ", source: "রবিবার হতে মুষলধারে বৃষ্টি হচ্ছিল।", target: "It had been raining cats and dogs since Sunday." }
    ] },

  { id: "job-2025-tech-edu-keeper-q18", examId: "job-2025-tech-edu-keeper", subject: "english", topic: "sentence-making", qno: 18, marks: 5, type: "idiom",
    question: "Make sentences with meaning:",
    parts: [
      { label: "ক", phrase: "Through and through", meaning: "পুরোপুরি", example: "He is honest through and through." },
      { label: "খ", phrase: "Run short", meaning: "ঘাটতি/কমতি", example: "I ran short of money." },
      { label: "গ", phrase: "Stand aside", meaning: "পাশে দাঁড়ানো", example: "Please stand aside." },
      { label: "ঘ", phrase: "Point of no return", meaning: "ফিরে যাওয়ার উপায় নেই", example: "The climbers passed the point of return before the storm began." },
      { label: "ঙ", phrase: "Read between the lines", meaning: "তাৎপর্য বোঝা", example: "Try to read between the lines of the letter." }
    ] },

  { id: "job-2025-tech-edu-keeper-q19", examId: "job-2025-tech-edu-keeper", subject: "english", topic: "fill-in-the-blanks", qno: 19, marks: 5, type: "fill-gaps",
    question: "Fill in the blanks with preposition:",
    parts: [
      { sentence: "The principal had an enquiry.... the case.", answer: "into" },
      { sentence: "The leader arrives....... a decision at last.", answer: "at" },
      { sentence: "Feed the baby.......... milk.", answer: "on" },
      { sentence: "He is an antipathy........ smoking.", answer: "to" },
      { sentence: "There is no alternative........ training.", answer: "to" }
    ] },

  { id: "job-2025-tech-edu-keeper-q20", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "gk-others", qno: 20, marks: 2, type: "short-qa",
    question: "পূর্ণরূপ লিখুন:",
    parts: [
      { label: "ক", q: "BANBEIS", a: "Bangladesh Bureau of Educational Information and Statistics" },
      { label: "খ", q: "WiMAX", a: "Worldwide Interoperability for Microwave Access" }
    ] },

  { id: "job-2025-tech-edu-keeper-q21", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 21, marks: 2, type: "paragraph",
    question: "এশিয়ার দীর্ঘতম নদীর নাম কী?", answer: "ইয়াংসিকিয়াং।" },

  { id: "job-2025-tech-edu-keeper-q22", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 22, marks: 2, type: "paragraph",
    question: "স্বাধীন বাংলাদেশের প্রথম ব্যক্তি হিসাবে কে বুটেনের নাইট উপাধি লাভ করেন?", answer: "স্যার ফজলে হাসান আবেদ।" },

  { id: "job-2025-tech-edu-keeper-q23", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 23, marks: 2, type: "paragraph",
    question: "জনসংখ্যা বিবেচনায় মুসলিম বিশ্বে ক্ষুদ্রতম দেশ কোনটি?", answer: "মালদ্বীপ।" },

  { id: "job-2025-tech-edu-keeper-q24", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 24, marks: 2, type: "paragraph",
    question: "বাংলার কোন সুলতান ১৭ বার ভারত আক্রমণ করেন?", answer: "সুলতান মাহমুদ গজনবী।" },

  { id: "job-2025-tech-edu-keeper-q25", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 25, marks: 2, type: "paragraph",
    question: "জেরুজালেম কোন কোন ধর্মালম্বীদের জন্য পবিত্র স্থান?", answer: "ইসলাম, ইহুদি ও খ্রিস্ট ধর্ম।" },

  { id: "job-2025-tech-edu-keeper-q26", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 26, marks: 2, type: "paragraph",
    question: "ইংরেজিতে বাংলাদেশের জাতীয় সংসদের নাম লিখুন।", answer: "House of the Nation." },

  { id: "job-2025-tech-edu-keeper-q27", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 27, marks: 2, type: "paragraph",
    question: "বাংলাদেশ বিমানের লোগো ও স্লোগান লিখুন।", answer: "বলাকা; আকাশে শান্তির নীড়।" },

  { id: "job-2025-tech-edu-keeper-q28", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 28, marks: 2, type: "paragraph",
    question: "কোন বিদেশি রাষ্ট্রপ্রধান সর্ব প্রথম বাংলাদেশের জাতীয় সংসদে ভাষণ দেন?", answer: "যুগোস্লাভিয়ার রাষ্ট্রপতি মার্শাল জোসেফ টিটো।" },

  { id: "job-2025-tech-edu-keeper-q29", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 29, marks: 2, type: "paragraph",
    question: "আধুনিক তুরস্কের প্রতিষ্ঠাতা কে?", answer: "মোস্তফা কামাল আতাতুর্ক।" },

  { id: "job-2025-tech-edu-keeper-q30", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 30, marks: 2, type: "paragraph",
    question: "বাংলাদেশে আর্সেনিকের অনুমোদিত মাত্রা কত?", answer: "০.০৫ মিলিগ্রাম।" },

  { id: "job-2025-tech-edu-keeper-q31", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 31, marks: 2, type: "paragraph",
    question: "বাংলাদেশ সরকারের রাজস্ব আয়ের প্রধান উৎস কোনটি?", answer: "মূল্য সংযোজন কর (ভ্যাট)।" },

  { id: "job-2025-tech-edu-keeper-q32", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 32, marks: 2, type: "paragraph",
    question: "ফারাওরা কোন দেশের রাজা ছিলেন?", answer: "মিশর।" },

  { id: "job-2025-tech-edu-keeper-q33", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 33, marks: 2, type: "paragraph",
    question: "বাংলাদেশের চিংড়ি সম্পদকে কি বলা হয়?", answer: "হোয়াইট গোল্ড।" },

  { id: "job-2025-tech-edu-keeper-q34", examId: "job-2025-tech-edu-keeper", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 34, marks: 2, type: "paragraph",
    question: "কারিগরি ও মাদ্রাসা শিক্ষা বিভাগের ইংরেজি নাম কী?", answer: "Technical and Madrasah Education Division." },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: কারিগরি শিক্ষা অধিদপ্তর — ড্রাইভার কাম মেকানিক
  // id prefix: job-2025-tech-edu-driver
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-tech-edu-driver-q01", examId: "job-2025-tech-edu-driver", subject: "bangla", qno: 1, marks: 2, type: "paragraph",
    question: "'বিদ্রোহী' কবিতার রচয়িতা কে?", answer: "কাজী নজরুল ইসলাম।" },

  { id: "job-2025-tech-edu-driver-q02", examId: "job-2025-tech-edu-driver", subject: "bangla", qno: 2, marks: 2, type: "paragraph",
    question: "রবীন্দ্রনাথ ঠাকুর কত সালে নোবেল পুরস্কার পান?", answer: "১৯১৩ সালে।" },

  { id: "job-2025-tech-edu-driver-q03", examId: "job-2025-tech-edu-driver", subject: "bangla", qno: 3, marks: 2, type: "paragraph",
    question: "বাংলা সাহিত্যে সাহিত্য সম্রাট বলা হয় কাকে?", answer: "বঙ্কিমচন্দ্র চট্টোপাধ্যায়কে।" },

  { id: "job-2025-tech-edu-driver-q04", examId: "job-2025-tech-edu-driver", subject: "bangla", qno: 4, marks: 2, type: "paragraph",
    question: "বাংলা ভাষায় প্রচলিত ২টি চীনা শব্দ লিখুন।", answer: "চা, চিনি।" },

  { id: "job-2025-tech-edu-driver-q05", examId: "job-2025-tech-edu-driver", subject: "bangla", qno: 5, marks: 2, type: "paragraph",
    question: "বাংলা ভাষার শব্দসমূহ অর্থ অনুসারে কত প্রকার?", answer: "৩ প্রকার — যৌগিক, রূঢ়ি ও যোগরূঢ়।" },

  { id: "job-2025-tech-edu-driver-q06", examId: "job-2025-tech-edu-driver", subject: "bangla", topic: "সন্ধি", qno: 6, marks: 4, type: "table",
    question: "সন্ধি-বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["হিমালয়", "হিম + আলয়"],
      ["গবেষণা", "গো + এষণা"],
      ["পরীক্ষা", "পরি + ঈক্ষা"],
      ["দিগন্ত", "দিক্ + অন্ত"]
    ] },

  { id: "job-2025-tech-edu-driver-q07", examId: "job-2025-tech-edu-driver", subject: "bangla", topic: "কারক", qno: 7, marks: 2, type: "table",
    question: "কারক ও বিভক্তি নির্ণয় করুন:",
    columns: ["বাক্য", "কারক ও বিভক্তি"],
    rows: [
      ["পাখিতে ধান খায়", "কর্তৃকারকে ৭মী"],
      ["সরিষাতে তেল হয়", "অপাদানে ৭মী"]
    ] },

  { id: "job-2025-tech-edu-driver-q08", examId: "job-2025-tech-edu-driver", subject: "bangla", topic: "শুদ্ধিকরণ", qno: 8, marks: 4, type: "table",
    question: "শুদ্ধ বানান লিখুন:",
    columns: ["অশুদ্ধ", "শুদ্ধ"],
    rows: [
      ["অনিষ্ঠ", "অনিষ্ট"],
      ["সাক্ষর", "বানানটি শুদ্ধ আছে"],
      ["অপক্ষেমান", "অপেক্ষমাণ"],
      ["বাকদন্তা", "বাগদত্তা"]
    ] },

  { id: "job-2025-tech-edu-driver-q09", examId: "job-2025-tech-edu-driver", subject: "bangla", topic: "এক-কথায়-প্রকাশ", qno: 9, marks: 4, type: "table",
    question: "এক কথায় প্রকাশ করুন:",
    columns: ["বাক্য", "এক কথায়"],
    rows: [
      ["আল্লাহকে বিশ্বাস করে না যে", "নাস্তিক"],
      ["চিরকাল ধরিয়া স্থায়ী", "চিরস্থায়ী"],
      ["প্রমাণ করা যায় যা", "প্রমাণিত"],
      ["বীজ বপনের উপযুক্ত সময়", "জো"]
    ] },

  { id: "job-2025-tech-edu-driver-q10", examId: "job-2025-tech-edu-driver", subject: "bangla", qno: 10, marks: 2, type: "idiom",
    question: "অর্থসহ বাক্য রচনা করুন:",
    parts: [
      { label: "ক", phrase: "দুধের মাছি", meaning: "সুসময়ের বন্ধু" },
      { label: "খ", phrase: "কৈ মাছের প্রাণ", meaning: "দীর্ঘজীবী" }
    ] },

  { id: "job-2025-tech-edu-driver-q11", examId: "job-2025-tech-edu-driver", subject: "english", topic: "translation", qno: 11, marks: 5, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "সে যায়।", target: "He goes." },
      { label: "খ", source: "এখন সকাল দশটা বেজে পনের মিনিট।", target: "It is fifteen minutes past ten." },
      { label: "গ", source: "পাখিরা গান গায়।", target: "Birds sing a song." },
      { label: "ঘ", source: "সে না হেসে পারে না।", target: "He can not but laugh." },
      { label: "ঙ", source: "আমার বন্ধু ইংরেজিতে ভাল।", target: "My friend is good at English." }
    ] },

  { id: "job-2025-tech-edu-driver-q12", examId: "job-2025-tech-edu-driver", subject: "english", topic: "paragraph", qno: 12, marks: 5, type: "paragraph",
    question: "Write a short note (not less than seven sentences): My country.",
    answer: "Bangladesh is my country. It is a small but beautiful country in South Asia. It is surrounded by India, Myanmar and the Bay of Bengal. Bangladesh is known for its rivers, green fields and rich culture. Rice and jute are the main crops grown here. The people of Bangladesh are hospitable and hardworking. Dhaka is the capital city of Bangladesh. I love my country very much and I am proud to be a citizen of Bangladesh." },

  { id: "job-2025-tech-edu-driver-q13", examId: "job-2025-tech-edu-driver", subject: "english", topic: "sentence-making", qno: 13, marks: 5, type: "idiom",
    question: "Make sentences with meaning:",
    parts: [
      { label: "ক", phrase: "Black sheep", meaning: "কুলাঙ্গার", example: "He is a black sheep." },
      { label: "খ", phrase: "At a glance", meaning: "এক নজরে", example: "I read the story at a glance." },
      { label: "গ", phrase: "At first sight", meaning: "প্রথম দর্শনে", example: "I liked the book at first sight." },
      { label: "ঘ", phrase: "Addicted to", meaning: "আসক্ত", example: "He is addicted to smoking." },
      { label: "ঙ", phrase: "Consist of", meaning: "গঠিত", example: "The committee consists of ten members." }
    ] },

  { id: "job-2025-tech-edu-driver-q14", examId: "job-2025-tech-edu-driver", subject: "english", topic: "fill-in-the-blanks", qno: 14, marks: 5, type: "fill-gaps",
    question: "Fill in the blanks with preposition:",
    parts: [
      { sentence: "The cow lives........ grass.", answer: "on" },
      { sentence: "The students are going....... school.", answer: "to" },
      { sentence: "Divide the mangoes........ two brothers.", answer: "between" },
      { sentence: "Don't lean .......... the wall.", answer: "against" },
      { sentence: "We live......... Bangladesh.", answer: "in" }
    ] },

  { id: "job-2025-tech-edu-driver-q15", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বিজ্ঞান", qno: 15, marks: 3, type: "paragraph",
    question: "স্পার্ক প্লাগ কোন ধরনের ইঞ্জিনে ব্যবহার হয় এবং এর কাজ কি?",
    answer: "পেট্রোল বা ডিজেল ইঞ্জিনে ব্যবহৃত হয়। সিলিন্ডারের মধ্যে থাকা বাতাস ও জ্বালানীর মিশ্রণকে প্রজ্বলিত করাই এর কাজ।" },

  { id: "job-2025-tech-edu-driver-q16", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বিজ্ঞান", qno: 16, marks: 3, type: "paragraph",
    question: "সিলিন্ডারের BDC এবং TDC বলতে কি বুঝায়?",
    answer: "BDC (Bottom Dead Centre) হলো সিলিন্ডারের ভেতরে পিস্টনের সর্বনিম্ন অবস্থান। TDC (Top Dead Centre) হলো সিলিন্ডারের ভেতরে পিস্টনের সর্বোচ্চ বা শীর্ষ অবস্থান।" },

  { id: "job-2025-tech-edu-driver-q17", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বিজ্ঞান", qno: 17, marks: 3, type: "paragraph",
    question: "ইঞ্জিন ঠান্ডা করার প্রক্রিয়া কত প্রকার ও কি কি?",
    answer: "২ প্রকার। যথা: বায়ুপ্রবাহ ও তরলপ্রবাহ।" },

  { id: "job-2025-tech-edu-driver-q18", examId: "job-2025-tech-edu-driver", subject: "math", topic: "পাটিগণিত", qno: 18, marks: 6, type: "math",
    question: "৩৫ লিটার অকটেন ও পেট্রোল মিশ্রণে পেট্রোল ও অকটেনের অনুপাত ৪:৩। এতে আর কত অকটেন মেশালে পেট্রোল ও অকটেনের অনুপাত ৪:৫ হবে?",
    steps: [
      "পেট্রোলের পরিমাণ = 35 এর 8/9 = 20 লিটার",
      "অকটেনের পরিমাণ = 35 এর 3/9 = 15 লিটার (মিশ্রণ ৪:৩ অনুপাত মেনে)",
      "ধরি, x লিটার অকটেন মেশালে অনুপাত ৪:৫ হবে",
      "শর্তমতে, 20/(15+x) = 8/5",
      "60 + 8x = 100",
      "8x = 80",
      "x = 10"
    ],
    answer: "আরও ১০ লিটার অকটেন মেশাতে হবে।" },

  { id: "job-2025-tech-edu-driver-q19", examId: "job-2025-tech-edu-driver", subject: "math", topic: "পাটিগণিত", qno: 19, marks: 6, type: "math",
    question: "জ্বালানি তেলের মূল্য ২৫% বৃদ্ধি পাওয়ায় তেলের ব্যবহার এমনভাবে কমানো হলো যেন তেল বাবদ ব্যয় বৃদ্ধি পেল না। গাড়ীর মালিক তেলের ব্যবহার শতকরা কত কমাল?",
    steps: [
      "২৫% বৃদ্ধি পাওয়ায় বর্তমান মূল্য = ১২৫ টাকা (পূর্বমূল্য ১০০ টাকা ধরে)",
      "বর্তমান মূল্য ১২৫ টাকা হলে পূর্বমূল্য ১০০ টাকা",
      "বর্তমান ১০০ টাকায় পূর্বের হিসেবে পরিমাণ = (100×100)/125 = 80 টাকা",
      "তেলের ব্যবহার শতকরা কমালো = (100 - 80)% = 20%"
    ],
    alternative: {
      steps: [
        "মূল্য বৃদ্ধি পায় = (125 - 100) টাকা = 25 টাকা",
        "১২৫ টাকায় কমাতে হবে ২৫ টাকা",
        "১০০ টাকায় কমাতে হবে = (25×100)/125 = 20 টাকা"
      ],
      answer: "২০%"
    },
    answer: "২০%।" },

  { id: "job-2025-tech-edu-driver-q20", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 20, marks: 2, type: "paragraph",
    question: "বাংলাদেশের দীর্ঘতম নদীর নাম কী?", answer: "পদ্মা।" },

  { id: "job-2025-tech-edu-driver-q21", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 21, marks: 2, type: "paragraph",
    question: "জনসংখ্যা বিবেচনায় মুসলিম বিশ্বে ক্ষুদ্রতম দেশ কোনটি?", answer: "মালদ্বীপ।" },

  { id: "job-2025-tech-edu-driver-q22", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 22, marks: 2, type: "paragraph",
    question: "কোন সুলতান ১৭ বার ভারত আক্রমণ করেন?", answer: "সুলতান মাহমুদ।" },

  { id: "job-2025-tech-edu-driver-q23", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 23, marks: 2, type: "paragraph",
    question: "ষাট গম্বুজ মসজিদ কোন জেলায় অবস্থিত?", answer: "বাগেরহাট।" },

  { id: "job-2025-tech-edu-driver-q24", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 24, marks: 2, type: "paragraph",
    question: "বাংলাদেশ বিমানের স্লোগান কী?", answer: "আকাশে শান্তির নীড়।" },

  { id: "job-2025-tech-edu-driver-q25", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 25, marks: 2, type: "paragraph",
    question: "গণচীনের প্রতিষ্ঠাতা কে?", answer: "মাও সে তুং।" },

  { id: "job-2025-tech-edu-driver-q26", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 26, marks: 2, type: "paragraph",
    question: "আধুনিক মালয়েশিয়ার প্রতিষ্ঠাতা কে?", answer: "মাহাথির মুহাম্মদ।" },

  { id: "job-2025-tech-edu-driver-q27", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 27, marks: 2, type: "paragraph",
    question: "BRTA এর পূর্ণরূপ কী?", answer: "Bangladesh Road Transport Authority." },

  { id: "job-2025-tech-edu-driver-q28", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 28, marks: 2, type: "paragraph",
    question: "১৫০০ সিসি উর্ধ্ব গাড়ির অগ্রীম বাৎসরিক আয়কর কত?", answer: "২৫,০০০ টাকা।" },

  { id: "job-2025-tech-edu-driver-q29", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 29, marks: 2, type: "paragraph",
    question: "বাংলাদেশের চিংড়ি সম্পদকে কি বলা হয়?", answer: "হোয়াইট গোল্ড (সাদা সোনা)।" },

  { id: "job-2025-tech-edu-driver-q30", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 30, marks: 2, type: "paragraph",
    question: "নীল নদের দেশ কোনটি?", answer: "মিশর।" },

  { id: "job-2025-tech-edu-driver-q31", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "gk-others", qno: 31, marks: 2, type: "paragraph",
    question: "দু'টি ইলেকট্রিক গাড়ির নাম লিখুন।", answer: "Tesla Model 3; Nissan Leaf." },

  { id: "job-2025-tech-edu-driver-q32", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 32, marks: 2, type: "paragraph",
    question: "বাংলাদেশের রেলওয়ে কয়টি অঞ্চলে বিভক্ত?", answer: "২টি।" },

  { id: "job-2025-tech-edu-driver-q33", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 33, marks: 2, type: "paragraph",
    question: "পরীবিবির মাজার কোথায় অবস্থিত?", answer: "লালবাগ কেল্লা, ঢাকা।" },

  { id: "job-2025-tech-edu-driver-q34", examId: "job-2025-tech-edu-driver", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 34, marks: 2, type: "paragraph",
    question: "চলনবিল কোন কোন জেলায় অবস্থিত?", answer: "নাটোর, সিরাজগঞ্জ ও পাবনা।" },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: কারিগরি শিক্ষা অধিদপ্তর — সাঁটলিপিকার কাম-কম্পিউটার অপারেটর
  // id prefix: job-2025-tech-edu-steno
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-tech-edu-steno-q01", examId: "job-2025-tech-edu-steno", subject: "bangla", qno: 1, marks: 2, type: "paragraph",
    question: "বাংলা সাহিত্যের মধ্যযুগের প্রথম নিদর্শন কী?", answer: "শ্রীকৃষ্ণকীর্তন।" },

  { id: "job-2025-tech-edu-steno-q02", examId: "job-2025-tech-edu-steno", subject: "bangla", qno: 2, marks: 2, type: "paragraph",
    question: "'স্বপ্নাতুর কবি' কার উপাধি?", answer: "সৈয়দ ইসমাইল হোসেন সিরাজী।" },

  { id: "job-2025-tech-edu-steno-q03", examId: "job-2025-tech-edu-steno", subject: "bangla", qno: 3, marks: 2, type: "paragraph",
    question: "'তেইশ নম্বর তৈলচিত্র' গ্রন্থটির রচয়িতা কে এবং কোন শ্রেণির রচনা?",
    answer: "আলাউদ্দিন আল আজাদ। মনস্তাত্ত্বিক উপন্যাস।" },

  { id: "job-2025-tech-edu-steno-q04", examId: "job-2025-tech-edu-steno", subject: "bangla", topic: "ব্যাকরণ-অন্যান্য", qno: 4, marks: 3, type: "paragraph",
    question: "'কি' ও 'কী' এর মধ্যে পার্থক্য কী?",
    answer: "যেসব প্রশ্নের জবাব 'হ্যাঁ' বা 'না' দ্বারা দেয়া যায় না, সেক্ষেত্রে 'কী' ব্যবহৃত হয়। যেমন: তোমার নাম কী? — এখানে 'কী' সর্বনাম পদ। এছাড়া বিশেষণ (কী আনন্দ!), বিশেষণের বিশেষণ (কী সুন্দর!) এবং ক্রিয়া-বিশেষণ (কী ভাবে?) হিসেবেও 'কী' ব্যবহৃত হয়।\n\nআর যেসব প্রশ্নের জবাব 'হ্যাঁ' বা 'না' দ্বারা দেয়া যায়, সেক্ষেত্রে 'কি' ব্যবহৃত হয়। যেমন: তুমি কি ঢাকা গিয়েছিলে? — এখানে 'কি' অব্যয় পদ।" },

  { id: "job-2025-tech-edu-steno-q05", examId: "job-2025-tech-edu-steno", subject: "bangla", qno: 5, marks: 2, type: "paragraph",
    question: "গঠন অনুসারে বাংলা ভাষার শব্দ কত প্রকার ও কী কী?", answer: "২ প্রকার; যথা মৌলিক শব্দ ও সাধিত শব্দ।" },

  { id: "job-2025-tech-edu-steno-q06", examId: "job-2025-tech-edu-steno", subject: "bangla", topic: "সন্ধি", qno: 6, marks: 4, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["তন্বী", "তনু + ঈ"],
      ["উজ্জ্বল", "উৎ + জ্বল"],
      ["নয়ন", "নে + অন"],
      ["কুজ্ঝটিকা", "কুৎ + ঝটিকা"]
    ] },

  { id: "job-2025-tech-edu-steno-q07", examId: "job-2025-tech-edu-steno", subject: "bangla", topic: "কারক", qno: 7, marks: 2, type: "table",
    question: "কারক ও বিভক্তি নির্ণয় করুন:",
    columns: ["বাক্য", "কারক ও বিভক্তি"],
    rows: [
      ["দরিদ্রকে সাহায্য করুন।", "সম্প্রদানে ৪র্থী"],
      ["সে কলেরায় মারা গেছে", "করণে ৭মী"]
    ] },

  { id: "job-2025-tech-edu-steno-q08", examId: "job-2025-tech-edu-steno", subject: "bangla", topic: "শুদ্ধিকরণ", qno: 8, marks: 3, type: "table",
    question: "শুদ্ধ বানান লিখুন:",
    columns: ["অশুদ্ধ", "শুদ্ধ"],
    rows: [
      ["স্বপরিবার", "সপরিবার"],
      ["অশ্রজল", "অশ্রু"],
      ["উল্লেখিত", "উল্লিখিত"]
    ] },

  { id: "job-2025-tech-edu-steno-q09", examId: "job-2025-tech-edu-steno", subject: "bangla", topic: "এক-কথায়-প্রকাশ", qno: 9, marks: 2, type: "table",
    question: "এক কথায় প্রকাশ করুন:",
    columns: ["বাক্য", "এক কথায়"],
    rows: [
      ["চক্ষুর নিমেষ কাল", "পলক"],
      ["বলা হচ্ছে যা", "বক্ষ্যমাণ"]
    ] },

  { id: "job-2025-tech-edu-steno-q10", examId: "job-2025-tech-edu-steno", subject: "bangla", qno: 10, marks: 2, type: "idiom",
    question: "অর্থসহ বাক্য রচনা করুন:",
    parts: [
      { label: "ক", phrase: "জিলাপির প্যাঁচ", meaning: "কুটিলতা/কূটবুদ্ধি" },
      { label: "খ", phrase: "হাড় হাভাতে", meaning: "হতভাগ্য" }
    ] },

  { id: "job-2025-tech-edu-steno-q11", examId: "job-2025-tech-edu-steno", subject: "math", topic: "সংখ্যাতত্ত্ব", qno: 11, marks: 6, type: "math",
    question: "কোন ক্ষুদ্রতম সংখ্যা হতে ১ বিয়োগ করলে বিয়োগফল ৯, ১২ ও ১৫ দ্বারা নিঃশেষে বিভাজ্য হবে?",
    steps: [
      "৯, ১২, ১৫ এর ল.সা.গু নির্ণয়: 3 | 9, 12, 15 → 3, 4, 5",
      "নির্ণেয় ল.সা.গু = 3 × 3 × 4 × 5 = 180",
      "নির্ণেয় সংখ্যা = 180 + 1 = 181"
    ],
    answer: "১৮১" },

  { id: "job-2025-tech-edu-steno-q12", examId: "job-2025-tech-edu-steno", subject: "math", topic: "পাটিগণিত", qno: 12, marks: 6, type: "math",
    question: "একটি গ্রামের মোট জনসংখ্যার 4/9 ভাগ লোক পুরুষ। যদি পুরুষের ৩০% বিবাহিত হয়, তাহলে মোট জনসংখ্যার শতকরা কতজন মহিলা অবিবাহিত?",
    steps: [
      "মেনে করি, মোট জনসংখ্যা = 9ক জন",
      "পুরুষের সংখ্যা = 9ক এর 4/9 = 4ক জন",
      "মহিলার সংখ্যা = 9ক - 4ক = 5ক",
      "বিবাহিত পুরুষ = 4ক এর 30% = 1.5ক জন, তাই বিবাহিত মহিলাও হবে 1.5ক জন",
      "অবিবাহিত মহিলা = 5ক - 1.5ক = 3.5ক জন",
      "শতকরা হার = (3.5ক × 100)/9ক ≈ 38.89%"
    ],
    answer: "প্রায় ৩৮.৮৯% (উৎস বইয়ে ভিন্ন হিসাব ২৭.৭৮% দেওয়া আছে, প্রশ্নটির মূল সমাধানে গরমিল থাকায় দুই ধরনের হিসাব দেখা যায়)।" },

  { id: "job-2025-tech-edu-steno-q13", examId: "job-2025-tech-edu-steno", subject: "math", topic: "পাটিগণিত", qno: 13, marks: 6, type: "math",
    question: "৫ ফুট দীর্ঘ ১টি তারকে এমনভাবে ২ ভাগ করা হলো যেন এক অংশ অন্য অংশের 2/3। ছোট অংশটি কত ইঞ্চি?",
    steps: [
      "৫ ফুট দৈর্ঘ্যের তারটির এক অংশ অন্য অংশের 2/3",
      "৩ অংশের পরিমাণ = ৩ ফুট এবং ২ অংশের পরিমাণ = ২ ফুট",
      "সুতরাং ছোট অংশটি = ২ ফুট = ২৪ ইঞ্চি"
    ],
    answer: "২৪ ইঞ্চি" },

  { id: "job-2025-tech-edu-steno-q14", examId: "job-2025-tech-edu-steno", subject: "math", topic: "বীজগণিত", qno: 14, marks: 6, type: "math",
    question: "x^4 + x^2 + 1 এর একটি উৎপাদক x^2 + x + 1 হলে অপর উৎপাদকটি কত?",
    steps: [
      "x^4 + x^2 + 1",
      "= (x^2)^2 + 2x^2 + 1 - x^2",
      "= (x^2 + 1)^2 - x^2",
      "= (x^2 + x + 1)(x^2 - x + 1)"
    ],
    answer: "x^2 - x + 1" },

  { id: "job-2025-tech-edu-steno-q15", examId: "job-2025-tech-edu-steno", subject: "math", topic: "জ্যামিতি", qno: 15, marks: 6, type: "math",
    question: "একটি কোণের মান তার পূরক কোণের মানের অর্ধেকের সমান। কোণটির মান কত?",
    steps: [
      "মেনে করি, কোণটি = x",
      "পূরক কোণ = 90 - x",
      "প্রশ্নমতে, x = (90 - x)/2",
      "2x = 90 - x",
      "3x = 90",
      "x = 30"
    ],
    answer: "৩০°" },

  { id: "job-2025-tech-edu-steno-q16", examId: "job-2025-tech-edu-steno", subject: "english", topic: "paragraph", qno: 16, marks: 5, type: "paragraph",
    question: "Write a short note (not less than seven sentences): Technical and Vocational Education in Bangladesh",
    answer: "Technical and vocational education in Bangladesh provides students with practical skills for various jobs. It focuses on training in areas like engineering, agriculture, healthcare, and information technology. This type of education helps reduce unemployment by preparing skilled workers for industries. Both government and private institutions offer technical and vocational courses. Students can start training after completing school or college. It combines classroom learning with hands-on experience to make students job-ready. With the growth of industries in Bangladesh, technical and vocational education plays a vital role in the country's development." },

  { id: "job-2025-tech-edu-steno-q17", examId: "job-2025-tech-edu-steno", subject: "english", topic: "translation", qno: 17, marks: 5, type: "translate",
    question: "ইংরেজিতে অনুবাদ করুন:",
    parts: [
      { label: "ক", source: "আমি গত কয়েকদিন যাবৎ জ্বর জ্বর বোধ করছি।", target: "I have been feeling feverish for the past few days." },
      { label: "খ", source: "পাপের ধন প্রায়শ্চিত্তে যায়।", target: "Ill got, ill spent." },
      { label: "গ", source: "আমি সন্ধ্যার পর কদাচিৎ বাইরে যাই।", target: "I hardly go out after dusk/evening." },
      { label: "ঘ", source: "সোহেল সুস্থ না হওয়া পর্যন্ত তার মা তাকে সেবা করতে থাকবে।", target: "Shohel's mother will continue to take care of him until Shohel recovers." }
    ] },

  { id: "job-2025-tech-edu-steno-q18", examId: "job-2025-tech-edu-steno", subject: "english", topic: "fill-in-the-blanks", qno: 18, marks: 5, type: "fill-gaps",
    question: "Fill in the gaps:",
    parts: [
      { sentence: "I am fatigued....... wide travelling.", answer: "with" },
      { sentence: "He fantasized...... winning the first prize.", answer: "about" },
      { sentence: "He deals......... stationary goods.", answer: "in" },
      { sentence: "Rahman is quick....... understanding.", answer: "of" },
      { sentence: "I have great respect.......... him.", answer: "for" }
    ] },

  { id: "job-2025-tech-edu-steno-q19", examId: "job-2025-tech-edu-steno", subject: "english", topic: "sentence-making", qno: 19, marks: 5, type: "idiom",
    question: "Make sentence with appropriates:",
    parts: [
      { label: "ক", phrase: "At sixes and sevens", meaning: "এলোমেলো", example: "The books are at sixes and sevens on the table." },
      { label: "খ", phrase: "Hold water", meaning: "গ্রহণযোগ্য", example: "His explanation will not hold water." },
      { label: "গ", phrase: "Head and heart", meaning: "বুদ্ধিতে ও হৃদয়ের বৃত্তিতে", example: "He was head and heart a great man." },
      { label: "ঘ", phrase: "In vain", meaning: "বৃথা", example: "All his attempts/hopes were in vain." },
      { label: "ঙ", phrase: "A man of word", meaning: "এক কথার মানুষ", example: "He is a man of his word." }
    ] },

  { id: "job-2025-tech-edu-steno-q20", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 20, marks: 2, type: "paragraph",
    question: "সেন্টমার্টিন দ্বীপের আয়তন কত বর্গমাইল?", answer: "৩.০৮৯ বর্গমাইল (৮ বর্গ কি.মি)।" },

  { id: "job-2025-tech-edu-steno-q21", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 21, marks: 2, type: "paragraph",
    question: "Repo Rate কী?", answer: "যে সুদহারে একটি দেশের কেন্দ্রীয় ব্যাংক বাণিজ্যিক ব্যাংকসমূহকে ঋণ দেয় সেটিই সুদহার নীতি বা Repo Rate।" },

  { id: "job-2025-tech-edu-steno-q22", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 22, marks: 2, type: "paragraph",
    question: "বাংলাদেশের প্রথম পানি জাদুঘর কোথায় অবস্থিত?", answer: "কলাপাড়া, পটুয়াখালী।" },

  { id: "job-2025-tech-edu-steno-q23", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 23, marks: 2, type: "paragraph",
    question: "বাল্টিক রাষ্ট্রসমূহের নাম লিখুন।", answer: "এস্তোনিয়া, লিথুয়ানিয়া ও লাটভিয়া।" },

  { id: "job-2025-tech-edu-steno-q24", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 24, marks: 2, type: "paragraph",
    question: "বাংলাদেশ রেলওয়ের দীর্ঘতম রেলরুট কোনটি?", answer: "ঢাকা থেকে পঞ্চগড়।" },

  { id: "job-2025-tech-edu-steno-q25", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "বিজ্ঞান", qno: 25, marks: 2, type: "paragraph",
    question: "কোন গ্যাস নিজে নিজে জ্বলে না কিন্তু অন্যকে জ্বলতে সাহায্য করে?", answer: "অক্সিজেন।" },

  { id: "job-2025-tech-edu-steno-q26", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 26, marks: 2, type: "paragraph",
    question: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড কয়টি?", answer: "১টি।" },

  { id: "job-2025-tech-edu-steno-q27", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 27, marks: 2, type: "paragraph",
    question: "নিঝুম দ্বীপ কোন নদীর মোহনায় অবস্থিত?", answer: "মেঘনা নদী।" },

  { id: "job-2025-tech-edu-steno-q28", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 28, marks: 2, type: "paragraph",
    question: "NATO এর পূর্ণরূপ কী?", answer: "North Atlantic Treaty Organization." },

  { id: "job-2025-tech-edu-steno-q29", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "gk-others", qno: 29, marks: 2, type: "paragraph",
    question: "'ব্লাক বক্স' কী?", answer: "বিমানের 'ফ্লাইট ডেটা রেকর্ডার'।" },

  { id: "job-2025-tech-edu-steno-q30", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 30, marks: 2, type: "paragraph",
    question: "জাতিসংঘ বিশ্ববিদ্যালয় কোথায় অবস্থিত?", answer: "টোকিও, জাপান।" },

  { id: "job-2025-tech-edu-steno-q31", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 31, marks: 2, type: "paragraph",
    question: "'ওয়ার্ল্ড ইকোনমিক ফোরাম' এর সদর দপ্তর কোথায় অবস্থিত?", answer: "কলোগনি, সুইজারল্যান্ড।" },

  { id: "job-2025-tech-edu-steno-q32", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "বিজ্ঞান", qno: 32, marks: 2, type: "paragraph",
    question: "প্রকৃতিতে সবচেয়ে শক্ত পদার্থ কোনটি?", answer: "হীরা।" },

  { id: "job-2025-tech-edu-steno-q33", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 33, marks: 2, type: "paragraph",
    question: "ম্যাগনাকার্টা কী?",
    answer: "ম্যাগনাকার্টা হলো একটি ঐতিহাসিক দলিল, যা ইংল্যান্ডের রাজা জন ১২১৫ সালের ১৫ জুন স্বাক্ষর করেন। এটি রাজা ও প্রজাদের মধ্যে এক ধরনের চুক্তি ছিল, যার মাধ্যমে রাজাকে কিছু নির্দিষ্ট সীমার মধ্যে থাকতে বাধ্য করা হয়।" },

  { id: "job-2025-tech-edu-steno-q34", examId: "job-2025-tech-edu-steno", subject: "general-knowledge", topic: "gk-others", qno: 34, marks: 2, type: "short-qa",
    question: "পূর্ণরূপ লিখুন: ICSID, BTEB",
    parts: [
      { label: "ICSID", q: "", a: "International Centre for Settlement of Investment Disputes" },
      { label: "BTEB", q: "", a: "Bangladesh Technical Education Board" }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: অভ্যন্তরীণ নৌ পরিবহন কর্তৃপক্ষ — ট্রাফিক সুপারভাইজার
  // id prefix: job-2025-iwta-traffic
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-iwta-traffic-q01", examId: "job-2025-iwta-traffic", subject: "bangla", qno: 1, marks: 8, type: "short-qa",
    question: "নিম্নলিখিত প্রশ্নের সঠিক উত্তর লিখুন:",
    parts: [
      { label: "ক", q: "'সূর্য-দীঘল বাড়ী' উপন্যাসের রচয়িতা কে?", a: "আবু ইসহাক" },
      { label: "খ", q: "'উন্মূলন' শব্দের অর্থ কী?", a: "বিনাশ" },
      { label: "গ", q: "মেনাহর- এর স্ত্রীবাচক শব্দ কী?", a: "মেনোহরা" },
      { label: "ঘ", q: "'উদ্ধার' শব্দের সন্ধি বিচ্ছেদ কী?", a: "উৎ + হার" },
      { label: "ঙ", q: "সরল বাক্যকে জটিল বাক্যে রূপান্তর করুন: সত্যবাদীকে সবাই শ্রদ্ধা করে।", a: "যে ব্যক্তি সত্য কথা বলে, তাকে সবাই শ্রদ্ধা করে।" },
      { label: "চ", q: "'চাঁদের হাট' বাগধারাটির অর্থ কী?", a: "আনন্দের প্রাচুর্য/প্রিয়জনের সমাগম" },
      { label: "ছ", q: "অশুদ্ধি সংশোধন করুন: রেজিস্ট্রাশণ।", a: "রেজিস্ট্রেশন" },
      { label: "জ", q: "এক কথায় প্রকাশ করুন: যা দণ্ড হয় না।", a: "অদাহ্য" }
    ] },

  { id: "job-2025-iwta-traffic-q02", examId: "job-2025-iwta-traffic", subject: "bangla", qno: 2, marks: 7, type: "letter",
    question: "এন.আই.ডি কার্ডে নিজের নামের বানান সংশোধনের জন্য যথাযথ কর্তৃপক্ষ বরাবর একটি আবেদনপত্র লিখুন।",
    letter: {
      date: "০৫ জুলাই ২০২৫",
      to: "নির্বাচন কর্মকর্তা\nফুলপুর উপজেলা নির্বাচন অফিস, ময়মনসিংহ",
      subject: "জাতীয় পরিচয়পত্রে নামের বানান সংশোধনের আবেদন।",
      body: "বিনীতভাবে জানানো যাচ্ছে যে, আমি মিনহাজ, পিতা: মনিরুল ইসলাম, মাতা: রেহানা বেগম, ঠিকানা: ফুলপুর, ময়মনসিংহ। আমার জাতীয় পরিচয়পত্র (NID) নম্বর: ০৫২৫৮৬২৬৪০। উল্লেখ্য, আমার জাতীয় পরিচয়পত্রে আমার নামের বানান ভুলভাবে \"মনরুল ইসলাম\" উল্লেখ রয়েছে। সঠিক বানান হওয়া উচিত \"মনিরুল ইসলাম\"। একাডেমিক সার্টিফিকেট, জন্মনিবন্ধন এবং অন্যান্য সরকারি কাগজপত্রে আমার নাম এই সঠিক বানানেই লেখা আছে।\n\nঅতএব, মহোদয়ের কাছে বিনীত অনুরোধ, আমার জাতীয় পরিচয়পত্রে আমার নামের সঠিক বানান \"মনিরুল\" হিসেবে সংশোধনের প্রয়োজনীয় ব্যবস্থা গ্রহণ করার জন্য অনুরোধ জানাচ্ছি। আমি প্রয়োজনীয় কাগজপত্র সংযুক্ত করলাম।\n\nসংযুক্তি:\n১। ভুল নামের NID ফটোকপি\n২। শিক্ষাগত সনদের ফটোকপি\n৩। জন্ম সনদের ফটোকপি",
      closing: "বিনীত,",
      sender: "মনিরুল ইসলাম\nমোবাইল: ০১৭১১৫২৬৬"
    } },

  { id: "job-2025-iwta-traffic-q03", examId: "job-2025-iwta-traffic", subject: "english", qno: 3, marks: 8, type: "short-qa",
    question: "Write only the correct answer:",
    parts: [
      { label: "a", q: "Fill in the blank with article: .......earth moves around the sun.", a: "The" },
      { label: "b", q: "Fill in the blank with preposition: The scientist looked...... the microscope.", a: "through" },
      { label: "c", q: "Rearrange the sentence: darkness/the inside/due to the van/I/of/couldn't see", a: "I couldn't see due to the darkness inside of the van." },
      { label: "d", q: "Fill in the blank: I have not seen him ........Thursday last.", a: "since" },
      { label: "e", q: "Change the sentence to active voice: The policy has been criticized by experts for its lack of clarity.", a: "Experts have criticized the policy for its lack of clarity." },
      { label: "f", q: "Correct the sentence: Neither manager or his officers were present in the meeting.", a: "Neither the manager nor his officers were present in the meeting." },
      { label: "g", q: "Write the appropriate verb: I wish I study hard for this recruitment test.", a: "studied" },
      { label: "h", q: "Translate to English: বিনা মেঘে বজ্রপাত", a: "A bolt from the blue" }
    ] },

  { id: "job-2025-iwta-traffic-q08", examId: "job-2025-iwta-traffic", subject: "english", topic: "paragraph", qno: 8, marks: 7, type: "paragraph",
    question: "Write an essay on \"River Ports of Bangladesh\"",
    answer: "Bangladesh is a riverine country where river ports play a vital role in transportation and trade. Important river ports like Dhaka (Sadarghat), Narayanganj, Khulna, Barisal, Chandpur, and Ashuganj help connect different parts of the country. Sadarghat is one of the busiest river ports in the world, serving thousands of passengers daily. These ports are important for carrying goods like jute, rice, and industrial products. They reduce pressure on roads and are cost-effective. However, many ports face problems like siltation, poor maintenance, and outdated infrastructure. With proper development and management, river ports can boost the economy and improve communication across the country." },

  { id: "job-2025-iwta-traffic-q05", examId: "job-2025-iwta-traffic", subject: "math", topic: "math-others", qno: 5, marks: 25, type: "sub-parts",
    question: "নিম্নলিখিত গাণিতিক যুক্তির প্রশ্নের সমাধান করুন:",
    parts: [
      { label: "ক", q: "একটি নৌকা ৮% ক্ষতিতে বিক্রয় করা হলো। নৌকাটি আরো ৮,০০০ টাকা বেশি দামে বিক্রয় করলে ৮% লাভ হতো। নৌকাটির ক্রয়মূল্য কত?", a: "মেনে করি ক্রয়মূল্য ১০০ টাকা। ৮% ক্ষতিতে বিক্রয়মূল্য ৯২ টাকা, ৮% লাভে বিক্রয়মূল্য ১০৮ টাকা। পার্থক্য ১৬ টাকা = ৮০০০ টাকার সাথে সমানুপাতিক। সুতরাং ক্রয়মূল্য = (100×8000)/16 = ৫০,০০০ টাকা।" },
      { label: "খ", q: "বার্ষিক শতকরা ১০ টাকা মুনাফায় ৫,০০০ টাকার ৩ বছরের সরল মুনাফা এবং চক্রবৃদ্ধি মুনাফার পার্থক্য কত?", a: "সরল মুনাফা = 5000×(10/100)×3 = ১৫০০ টাকা। চক্রবৃদ্ধি মুনাফা = 5000×(1.1)^3 − 5000 = ১৬৫৫ টাকা। পার্থক্য = (1655−1500) = ১৫৫ টাকা।" },
      { label: "গ", q: "৯ জন ব্যক্তি একটি দোকানে খাবার খেতে গেলো। তাদের মধ্যে ৮ জন প্রত্যেকে ১২ টাকা করে খরচ করল এবং নবম ব্যক্তি গড় খরচের চেয়ে ৮ টাকা বেশি খরচ করলে তারা মোট কত টাকা খরচ করলো?", a: "মেনে করি গড় খরচ = ক টাকা। 9ক = (8×12) + ক + 8 → 8ক = 104 → ক = 13। মোট খরচ = 9×13 = ১১৭ টাকা।" },
      { label: "ঘ", q: "x + y = 4 হলে, x³ + y³ + 12xy এর মান কত?", a: "x³+y³+12xy = (x+y)³ − 3xy(x+y) + 12xy = 4³ − 12xy + 12xy = ৬৪।" },
      { label: "ঙ", q: "a² + b² = c² হলে, দেখাও যে, a⁶ + b⁶ + 3a²b²c² = c⁶", a: "L.H.S. = (a²)³+(b²)³+3a²b²c² = (a²+b²)³ − 3a²b²(a²+b²) + 3a²b²c² = c⁶ − 3a²b²c² + 3a²b²c² = c⁶ = R.H.S. (প্রমাণিত)" }
    ] },

  { id: "job-2025-iwta-traffic-q06", examId: "job-2025-iwta-traffic", subject: "general-knowledge", qno: 6, marks: 15, type: "short-qa",
    question: "নিম্নলিখিত প্রশ্নের সঠিক উত্তর লিখুন:",
    parts: [
      { label: "ক (বাংলাদেশ)", q: "বাংলাদেশের ২০২৫-২৬ অর্থবছরের মোট বাজেটের পরিমাণ কত?", a: "৭ লাখ ৯০ হাজার কোটি টাকা" },
      { label: "খ (বাংলাদেশ)", q: "ঢাকা শহরের প্রাচীনতম নাম কী?", a: "জাহাঙ্গীর নগর" },
      { label: "গ (বাংলাদেশ)", q: "ইংরেজি ক্যালেন্ডার অনুসারে বাংলাদেশের সবচেয়ে শীতলতম মাস কোনটি?", a: "জানুয়ারি" },
      { label: "ঘ (বাংলাদেশ)", q: "মুক্তিযুদ্ধে বাংলাদেশের প্রথম শত্রুমুক্ত জেলার নাম কী?", a: "যশোর" },
      { label: "ঙ (বাংলাদেশ)", q: "বাংলাদেশের সবচেয়ে বড় বিলের নাম কী?", a: "চলন বিল" },
      { label: "চ (বাংলাদেশ)", q: "আয়তনের দিক থেকে এশিয়ার ক্ষুদ্রতম দেশের নাম কী?", a: "মালদ্বীপ" },
      { label: "ছ (বাংলাদেশ)", q: "এক কাঠায় কত শতাংশ?", a: "১.৬৫ শতাংশ" },
      { label: "জ (বাংলাদেশ)", q: "বাংলাদেশের একমাত্র পাহাড় বেষ্টিত দ্বীপের নাম কী?", a: "মহেশখালী" },
      { label: "ঝ (বাংলাদেশ)", q: "বাংলাদেশের সবচেয়ে খরস্রোতা নদীর নাম কী?", a: "কর্ণফুলী" },
      { label: "ঞ (বাংলাদেশ)", q: "একুশে ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে স্বীকৃতি দিয়েছে কোন সংস্থা?", a: "ইউনেস্কো" },
      { label: "ট (আন্তর্জাতিক)", q: "পৃথিবীর দীর্ঘতম নদীর নাম কী?", a: "নীল নদ" },
      { label: "ঠ (আন্তর্জাতিক)", q: "ইউরোপীয় ইউনিয়নের মুদ্রার নাম কী?", a: "ইউরো" },
      { label: "ড (আন্তর্জাতিক)", q: "আয়তনে উত্তর আমেরিকার সবচেয়ে বড় দেশের নাম কী?", a: "কানাডা" },
      { label: "ঢ (আন্তর্জাতিক)", q: "২০২৮ সালের গ্রীষ্মকালীন অলিম্পিক কোন দেশে অনুষ্ঠিত হবে?", a: "যুক্তরাষ্ট্র" },
      { label: "ণ (আন্তর্জাতিক)", q: "সিঙ্গাপুরের রাজধানীর নাম কী?", a: "সিঙ্গাপুর সিটি" }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: জেলা প্রশাসকের কার্যালয়, ভোলা — অফিস সহায়ক/নিরাপত্তা প্রহরী
  // id prefix: job-2025-dc-bhola
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-dc-bhola-q01", examId: "job-2025-dc-bhola", subject: "bangla", qno: 1, marks: 4, type: "paragraph",
    question: "অসমাপিকা ক্রিয়া কাকে বলে? উদাহরণসহ উল্লেখ করুন।",
    answer: "যে ক্রিয়া দ্বারা বাক্যের পরিসমাপ্তি ঘটে না অর্থাৎ বক্তার কথা অসম্পূর্ণ থেকে যায় তাকে অসমাপিকা ক্রিয়া বলে। যেমন, 'আমি ভাত খেয়ে স্কুলে যাবো।' — এখানে 'খেয়ে' অসমাপিকা ক্রিয়া।" },

  { id: "job-2025-dc-bhola-q02", examId: "job-2025-dc-bhola", subject: "bangla", topic: "সন্ধি", qno: 2, marks: 4, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["পরীক্ষা", "পরি + ঈক্ষা"],
      ["নায়ক", "নৈ + অক"]
    ] },

  { id: "job-2025-dc-bhola-q03", examId: "job-2025-dc-bhola", subject: "bangla", topic: "বিপরীত-শব্দ", qno: 3, marks: 4, type: "paragraph",
    question: "'পরলোক' এর বিপরীত শব্দ কোনটি?", answer: "ইহলোক।" },

  { id: "job-2025-dc-bhola-q04", examId: "job-2025-dc-bhola", subject: "bangla", topic: "বাগধারা", qno: 4, marks: 4, type: "idiom",
    question: "অর্থসহ বাক্য রচনা করুন:",
    parts: [
      { label: "", phrase: "একই খুড়ে মাথা কামানো", meaning: "একই স্বভাবের হওয়া", example: "একই স্বভাবের, তাদের আচরণ দেখে মনে হচ্ছে তারা সবাই একই খুড়ে মাথা কামানো।" }
    ] },

  { id: "job-2025-dc-bhola-q05", examId: "job-2025-dc-bhola", subject: "english", topic: "grammar", qno: 5, marks: 4, type: "sentence-change",
    question: "Passive করুন:",
    parts: [
      { label: "", original: "Honey tastes sweet.", changed: "Honey is tasted sweet." }
    ] },

  { id: "job-2025-dc-bhola-q06", examId: "job-2025-dc-bhola", subject: "english", topic: "translation", qno: 6, marks: 4, type: "translate",
    question: "ইংরেজিতে অনুবাদ করুন:",
    parts: [
      { label: "", source: "আমি চাকরি পাওয়ার পর আমার বোনকে বিয়ে দেব।", target: "After getting a job, I will marry off my sister." }
    ] },

  { id: "job-2025-dc-bhola-q07", examId: "job-2025-dc-bhola", subject: "english", topic: "gender-change", qno: 7, marks: 4, type: "short-qa",
    question: "Masculine/Feminine Gender:",
    parts: [ { label: "", q: "Widow এর Masculine Gender কি?", a: "Widower" } ] },

  { id: "job-2025-dc-bhola-q08", examId: "job-2025-dc-bhola", subject: "english", topic: "grammar", qno: 8, marks: 4, type: "sentence-change",
    question: "বাক্যটি সংশোধন করুন:",
    parts: [
      { label: "", original: "He is junior than me.", changed: "He is junior to me." }
    ] },

  { id: "job-2025-dc-bhola-q09", examId: "job-2025-dc-bhola", subject: "english", topic: "fill-in-the-blanks", qno: 9, marks: 4, type: "fill-gaps",
    question: "শূন্যস্থান পূরণ করুন:",
    parts: [
      { sentence: "Jafor usually travels... bus.", answer: "by" }
    ] },

  { id: "job-2025-dc-bhola-q10", examId: "job-2025-dc-bhola", subject: "math", topic: "পাটিগণিত", qno: 10, marks: 4, type: "math",
    question: "0.01 + 0.0001 = ?",
    steps: ["0.0100", "+ 0.0001"],
    answer: "0.0101" },

  { id: "job-2025-dc-bhola-q11", examId: "job-2025-dc-bhola", subject: "math", topic: "math-others", qno: 11, marks: 4, type: "math",
    question: "সবচেয়ে সরল গঠনের এককোষী প্রাণী আমিবা। সংখ্যা ও আয়তন প্রতিদিন জ্যামিতিক হারে (সাধারণ অনুপাত-২) বৃদ্ধি পায়। যদি একটি গবেষণাধীন গ্লাস বীকারে রাখা একটি আমিবা বংশবৃদ্ধি করে ১৫ দিনে ঐ বীকারের পূর্ণ করতে পারে তবে ঐ বীকারের অর্ধেক আমিবা দ্বারা পূর্ণ হতে কতদিন লাগবে?",
    steps: [
      "আমিবার সংখ্যা প্রতিদিন দ্বিগুণ হয় (জ্যামিতিক হারে বৃদ্ধি, সাধারণ অনুপাত ২)",
      "অর্থাৎ পূর্ণ হওয়ার একদিন আগে তা ছিল অর্ধেক",
      "সুতরাং বীকার অর্ধেক পূর্ণ ছিল 15 − 1 = 14 দিন পর"
    ],
    answer: "১৪ দিন" },

  { id: "job-2025-dc-bhola-q12", examId: "job-2025-dc-bhola", subject: "math", topic: "math-others", qno: 12, marks: 4, type: "math",
    question: "একটি পুকুরে ৫০টি ব্যাঙের মধ্যে ১০টি ব্যাঙ মারা গিয়ে পানিতে ভেসে উঠল। ঐ পুকুরে মোট আর কয়টি ব্যাঙ থাকবে?",
    steps: ["১০টি ব্যাঙ মারা যাওয়ার পরও মৃত ব্যাঙগুলো পুকুরের পানিতেই ভেসে থাকে, পুকুর থেকে সরে যায় না"],
    answer: "৫০টি" },

  { id: "job-2025-dc-bhola-q13", examId: "job-2025-dc-bhola", subject: "math", topic: "math-others", qno: 13, marks: 4, type: "math",
    question: "৩০ মাইল/ঘন্টা বেগে প্রবাহমান বাতাসের অনুকূলে একটি ট্রেন চলমান আছে। ইঞ্জিনের ধোঁয়া খাড়া উপরের দিকে নির্গত হচ্ছে। ট্রেনের গতিবেগ কত?",
    steps: [
      "ধোঁয়া যদি খাড়া উপর দিকে যায়, তাহলে বুঝতে হবে ট্রেন ও বাতাসের মধ্যে কোনো আপেক্ষিক গতি নেই",
      "যেহেতু ট্রেন বাতাসের অনুকূলে চলছে এবং ধোঁয়া খাড়া উঠছে, তাই ট্রেনের গতি বাতাসের গতির সমান হতে হবে"
    ],
    answer: "৩০ মাইল/ঘণ্টা" },

  { id: "job-2025-dc-bhola-q14", examId: "job-2025-dc-bhola", subject: "math", topic: "পাটিগণিত", qno: 14, marks: 4, type: "math",
    question: "একটি দুর্গে ৩০ জন সৈন্যের ৩৫ দিনের খাবার আছে। দুর্গে আরও ৫ জন সৈন্য যোগ হলে সেই খাবারে কতদিন চলবে?",
    steps: [
      "মোট সৈন্য সংখ্যা = 30 + 5 = 35 জন",
      "৩০ জন সৈন্যের খাবার আছে ৩৫ দিনের",
      "১ জনের খাবার চলবে (35×30)/1 দিন",
      "৩৫ জনের খাবার চলবে (35×30)/35 = 30 দিন"
    ],
    answer: "৩০ দিন" },

  { id: "job-2025-dc-bhola-q15", examId: "job-2025-dc-bhola", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 15, marks: 4, type: "paragraph",
    question: "কোন জেলাকে হিমালয় কন্যা বলা হয়?", answer: "পঞ্চগড়।" },

  { id: "job-2025-dc-bhola-q16", examId: "job-2025-dc-bhola", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 16, marks: 4, type: "paragraph",
    question: "বাংলাদেশের প্রবাল দ্বীপ কোনটি?", answer: "সেন্টমার্টিন।" },

  { id: "job-2025-dc-bhola-q17", examId: "job-2025-dc-bhola", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 17, marks: 4, type: "paragraph",
    question: "ইরানে ইসলামী বিপ্লব কবে হয়েছিল?", answer: "১৯৭৯ সালে।" },

  { id: "job-2025-dc-bhola-q18", examId: "job-2025-dc-bhola", subject: "general-knowledge", topic: "সাম্প্রতিক", qno: 18, marks: 4, type: "paragraph",
    question: "আমেরিকা ইরানে কখন আক্রমণ করেছিল?", answer: "২২ জুন ২০২৫।" },

  { id: "job-2025-dc-bhola-q19", examId: "job-2025-dc-bhola", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 19, marks: 4, type: "paragraph",
    question: "বরিশাল প্রশাসনিক বিভাগ কবে কার্যক্রম শুরু করে?", answer: "১ জানুয়ারি ১৯৯৩।" },

  { id: "job-2025-dc-bhola-q20", examId: "job-2025-dc-bhola", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 20, marks: 4, type: "paragraph",
    question: "ভোলা জেলা প্রশাসনের প্রধান কর্মকর্তার পদবী ও নাম কী?", answer: "জেলা প্রশাসক; জনাব মো. আজাদ।" },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ কোস্ট গার্ড — উচ্চমান সহকারী
  // id prefix: job-2025-coast-guard-uhs
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-coast-guard-uhs-q01", examId: "job-2025-coast-guard-uhs", subject: "bangla", topic: "এক-কথায়-প্রকাশ", qno: 1, marks: 5, type: "table",
    question: "এক কথায় প্রকাশ করুন:",
    columns: ["বাক্য", "এক কথায়"],
    rows: [
      ["ভয় নেই যার", "নির্ভীক"],
      ["লাভের ইচ্ছা", "লিপ্সা"],
      ["দিবসের শেষ ভাগ", "অপরাহ্ন"],
      ["যা অতি দীর্ঘ নয়", "নাতিদীর্ঘ"],
      ["চক্ষুর অগোচরে", "পরোক্ষ"]
    ] },

  { id: "job-2025-coast-guard-uhs-q02", examId: "job-2025-coast-guard-uhs", subject: "bangla", topic: "বাগধারা", qno: 2, marks: 4, type: "idiom",
    question: "নিচের বাগধারাগুলোর অর্থ লিখুন:",
    parts: [
      { label: "", phrase: "লেফাফা দুরস্ত", meaning: "বাহিরে পরিপাটি" },
      { label: "", phrase: "বর্ণচোরা", meaning: "কপট ব্যক্তি" },
      { label: "", phrase: "আটকপালে", meaning: "হতভাগ্য" },
      { label: "", phrase: "কান পাতলা", meaning: "সহজেই বিশ্বাসপ্রবণ" }
    ] },

  { id: "job-2025-coast-guard-uhs-q03", examId: "job-2025-coast-guard-uhs", subject: "bangla", topic: "সন্ধি", qno: 3, marks: 4, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["কথোপকথন", "কথা + উপকথন"],
      ["সম্পদ", "সম্ + পদ"],
      ["নায়ক", "নৈ + অক"],
      ["নাবিক", "নৌ + ইক"]
    ] },

  { id: "job-2025-coast-guard-uhs-q04", examId: "job-2025-coast-guard-uhs", subject: "bangla", topic: "শুদ্ধিকরণ", qno: 4, marks: 5, type: "table",
    question: "বানান শুদ্ধ করুন:",
    columns: ["অশুদ্ধ", "শুদ্ধ"],
    rows: [
      ["মুহুর্ত", "মুহূর্ত"],
      ["ইতমধ্যে", "ইতোমধ্যে"],
      ["জীগিশা", "জিগীষা"],
      ["নূন্যতম", "ন্যূনতম"],
      ["সান্তনা", "সান্ত্বনা"]
    ] },

  { id: "job-2025-coast-guard-uhs-q05", examId: "job-2025-coast-guard-uhs", subject: "english", topic: "paragraph", qno: 5, marks: 8, type: "paragraph",
    question: "Write a paragraph (10 sentences): 'Bangladesh Coast Guard'",
    answer: "Bangladesh Coast Guard (BCG) is a maritime law enforcement agency of Bangladesh. It was established in 1995 to protect the country's maritime interests. The main duties of the Coast Guard include anti-smuggling operations, search and rescue, and prevention of piracy. It also protects fishermen and marine resources along the coastal areas. The Coast Guard works closely with the Bangladesh Navy in times of need. It plays an important role in disaster management during cyclones and natural calamities in coastal regions. It helps prevent illegal fishing and trafficking through the sea routes. The force operates with modern ships and equipment to patrol the coastal waters. Bangladesh Coast Guard also assists in maintaining maritime security in the Bay of Bengal. Overall, it plays a vital role in safeguarding the maritime boundary and economic interests of Bangladesh." },

  { id: "job-2025-coast-guard-uhs-q06", examId: "job-2025-coast-guard-uhs", subject: "english", topic: "sentence-making", qno: 6, marks: 4, type: "idiom",
    question: "Make sentence with meaning following the Idiom & Phrase:",
    parts: [
      { label: "", phrase: "Back and forth", meaning: "এদিক ওদিক", example: "The bird flew back and forth." },
      { label: "", phrase: "Once in a blue moon", meaning: "কালেভদ্রে", example: "He comes to his village once in a blue moon." },
      { label: "", phrase: "Crocodile tears", meaning: "মায়া-কান্না", example: "He shed crocodile tears at his father's death." },
      { label: "", phrase: "Bring to light", meaning: "প্রকাশ করা", example: "At last the truth was brought to light." }
    ] },

  { id: "job-2025-coast-guard-uhs-q07", examId: "job-2025-coast-guard-uhs", subject: "english", topic: "translation", qno: 7, marks: 5, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "", source: "দুয়ে দুয়ে চার।", target: "Two and two makes four." },
      { label: "", source: "নাচতে না জানলে উঠান বাঁকা।", target: "A bad workman quarrels with his tools." },
      { label: "", source: "চারটা বাজতে দশ মিনিট বাকি।", target: "It is ten minutes past four." },
      { label: "", source: "স্বদেশপ্রেম মহৎ গুণ।", target: "Patriotism is a noble/great virtue." },
      { label: "", source: "আমি ইংরেজিতে ভালো।", target: "I am good at English." }
    ] },

  { id: "job-2025-coast-guard-uhs-q08", examId: "job-2025-coast-guard-uhs", subject: "english", topic: "fill-in-the-blanks", qno: 8, marks: 4, type: "fill-gaps",
    question: "Fill in the blank:",
    parts: [
      { sentence: "I am accustomed....... such a life.", answer: "to" },
      { sentence: "I tried...... avoiding doing the same thing day after day.", answer: "avoiding" },
      { sentence: "You can go......... the highway.", answer: "along" },
      { sentence: "You should do.......... your duties.", answer: "your" }
    ] },

  { id: "job-2025-coast-guard-uhs-q09", examId: "job-2025-coast-guard-uhs", subject: "math", topic: "math-others", qno: 9, marks: 6, type: "short-qa",
    question: "নিচের প্রশ্নগুলোর উত্তর করুন:",
    parts: [
      { label: "ক", q: "রম্বসের ক্ষেত্রফল লিখুন?", a: "১/২ × কর্ণদ্বয়ের গুণফল" },
      { label: "খ", q: "গ.সা.গু এর পূর্ণরূপ লিখুন?", a: "গরিষ্ঠ সাধারণ গুণনীয়ক" },
      { label: "গ", q: "বৃত্তের ক্ষেত্রফল লিখুন?", a: "π × ব্যাসার্ধ² (πr²)" },
      { label: "ঘ", q: "৪ ডিগ্রি সেলসিয়াস তাপমাত্রায় ১ ঘনসেন্টিমিটার বিশুদ্ধ পানির ওজন কত?", a: "১ গ্রাম" }
    ] },

  { id: "job-2025-coast-guard-uhs-q10", examId: "job-2025-coast-guard-uhs", subject: "math", topic: "বীজগণিত", qno: 10, marks: 6, type: "math",
    question: "(x+6)(x+4) কে দুটি রাশির বর্গের অন্তররূপে প্রকাশ করুন।",
    steps: [
      "ধরি, x + 6 = a এবং x + 4 = b",
      "প্রদত্ত রাশি: ab = {(a+b)/2}² − {(a−b)/2}²",
      "= {(x+6+x+4)/2}² − {(x+6−x−4)/2}²",
      "= {(2x+10)/2}² − (2/2)²",
      "= {(x+5)}² − 1²"
    ],
    answer: "(x+5)² − 1²" },

  { id: "job-2025-coast-guard-uhs-q11", examId: "job-2025-coast-guard-uhs", subject: "math", topic: "জ্যামিতি", qno: 11, marks: 6, type: "math",
    question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য ৪০ মিটার এবং প্রস্থ ৩০ মিটার ৩০ সেন্টিমিটার হলে ক্ষেত্রফল কত?",
    steps: [
      "দৈর্ঘ্য = ৪০ মিটার",
      "প্রস্থ = ৩০ মিটার ৩০ সেন্টিমিটার = 30.3 মিটার",
      "ক্ষেত্রফল = (40 × 30.3) বর্গ মিটার = 1212 বর্গ মিটার"
    ],
    answer: "১২১২ বর্গমিটার" },

  { id: "job-2025-coast-guard-uhs-q12", examId: "job-2025-coast-guard-uhs", subject: "general-knowledge", qno: 12, marks: 10, type: "short-qa",
    question: "প্রশ্নের উত্তর লিখুন: (বি.দ্র: সোর্স বইয়ে এই প্রশ্নপত্রের কিছু প্রশ্ন মিসিং ছিল)",
    parts: [
      { label: "ক", q: "PLO কত সালে গঠিত হয়?", a: "২৮ মে, ১৯৬৪ সালে" },
      { label: "খ", q: "নেভাল একাডেমি কোথায় অবস্থিত?", a: "পতেঙ্গা, চট্টগ্রাম" },
      { label: "গ", q: "২য় বিশ্বযুদ্ধ কত সালে হয়?", a: "১ সেপ্টেম্বর ১৯৩৯ থেকে ২ সেপ্টেম্বর ১৯৪৫" },
      { label: "ঘ", q: "প্রথম অভিষেক ম্যাচে বাংলাদেশের পক্ষে সেঞ্চুরি করেন কে?", a: "আমিনুল ইসলাম বুলবুল" },
      { label: "ঙ", q: "বাংলাদেশের নৌবাহিনীর সামরিক অভিযানকে কী বলা হয়?", a: "নৌ অভিযান" },
      { label: "চ", q: "মোসাদ কোন দেশের গোয়েন্দা সংস্থা?", a: "ইসরায়েল" },
      { label: "ছ", q: "AI এর পূর্ণরূপ কী?", a: "Artificial Intelligence" },
      { label: "জ", q: "4IR এর পূর্ণরূপ কী?", a: "Fourth Industrial Revolution" },
      { label: "ঝ", q: "জাতীয় স্মৃতিসৌধের স্থপতি কে?", a: "সৈয়দ মাইনুল হোসেন" },
      { label: "ঞ", q: "প্রথম পানি পথের যুদ্ধ কত সালে হয়?", a: "১৫২৬ খ্রি." }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ নৌ বাহিনী — অফিস সহকারী কাম-কম্পিউটার অপারেটর
  // id prefix: job-2025-navy-office
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-navy-office-q01", examId: "job-2025-navy-office", subject: "bangla", topic: "ভাবসম্প্রসারণ", qno: 1, marks: 5, type: "paragraph",
    question: "ভাবসম্প্রসারণ লিখুন: 'অন্যায় যে করে আর অন্যায় যে সহে, তব ঘৃণা তারে যেন তৃণ সম দহে।'",
    answer: "যে অন্যায় করে এবং যে সেই অন্যায় সহ্য করে, তারা উভয়ে সমান অপরাধী, উভয়ে সমান ঘৃণার পাত্র।\n\nআইনের দৃষ্টিতে অন্যায়কারীকে অপরাধী মনে করা হয়। তাই তার জন্য শাস্তির বিধান থাকে। আবার অনেক মানুষ আছে যারা সরাসরি অন্যায় করে না, কিন্তু পেছনে থেকে অন্যায়কারীকে সহায়তা করে বা অন্যায় করতে উৎসাহিত করে। আইনের আওতায় এরাও কখনো কখনো অপরাধী হিসেবে গণ্য হয়। আবার এমনও লোক থাকে যারা প্রত্যক্ষ বা পরোক্ষভাবে অন্যায় করে না, অন্যায় ঘটার সময়ে শুধু নীরব দর্শকের ভূমিকা পালন করে। আইনের চোখে তাদের অপরাধী বলা যায় না। কিন্তু বিবেকের চোখে এই নীরব দর্শকেরাও এক অর্থে অন্যায় ঘটাতে সহযোগিতা করে। কেননা অন্যায় সংঘটিত হওয়ার সময়ে তারা যদি সরব প্রতিবাদীর ভূমিকা পালন করত, তাহলে অন্যায় ঘটত না।\n\nসমাজ থেকে অন্যায়কে দূর করতে আইনের শাসন প্রতিষ্ঠার পাশাপাশি বিবেকবান সচেতন মানুষের উপস্থিতিও জরুরি, যারা অন্যায়ের প্রতিবাদে সব সময় সোচ্চার হবে। অন্যায়কারীকে যথাযথভাবে শাস্তি দিলে এবং অন্যায় করতে না দিলে সমাজ থেকে অন্যায় চিরতরে দূর হয়। তাই অন্যায়কারী এবং অন্যায়-সহকারী উভয়ই সমাজে নিন্দনীয়।" },

  { id: "job-2025-navy-office-q02", examId: "job-2025-navy-office", subject: "bangla", topic: "সন্ধি", qno: 2, marks: 3, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["মনন্তর", "মনু + অন্তর"],
      ["ষোড়শ", "ষট্ + দশ"],
      ["প্রত্যাবর্তন", "প্রতি + আবর্তন"]
    ] },

  { id: "job-2025-navy-office-q03", examId: "job-2025-navy-office", subject: "bangla", topic: "কারক", qno: 3, marks: 3, type: "table",
    question: "বিভক্তিসহ কারক নির্ণয় করুন।",
    columns: ["বাক্য", "কারক ও বিভক্তি"],
    rows: [
      ["অঞ্জনে দেহ আলো", "সম্প্রদানে ৭মী"],
      ["চোরে না শুনে ধর্মের কাহিনী", "কর্তায় ৭মী"],
      ["গাছে কাঁঠাল গোঁফে তেল", "অধিকরণে ৭মী"]
    ] },

  { id: "job-2025-navy-office-q04", examId: "job-2025-navy-office", subject: "bangla", topic: "সমাস", qno: 4, marks: 3, type: "short-qa",
    question: "ব্যাসবাক্যসহ সমাস নির্ণয় ও বাগধারার অর্থ লিখুন:",
    parts: [
      { label: "ক (সমাস)", q: "পঙ্কজ", a: "পঙ্কে জন্মে যা — উপপদ তৎপুরুষ সমাস" },
      { label: "খ (বাগধারা)", q: "বিড়ালের আড়াই পা", a: "ক্ষণস্থায়ী" },
      { label: "গ (বাগধারা)", q: "নিরানব্বইয়ের ধাক্কা", a: "সঞ্চয়ের প্রবৃত্তি" }
    ] },

  { id: "job-2025-navy-office-q05", examId: "job-2025-navy-office", subject: "bangla", topic: "ব্যাকরণ-অন্যান্য", qno: 5, marks: 3, type: "table",
    question: "বাক্য সংকোচন করুনঃ",
    columns: ["বাক্য", "সংকোচন"],
    rows: [
      ["তালু থেকে উচ্চারিত", "তালব্য"],
      ["প্রতিকার করার ইচ্ছা", "প্রতিচিকীর্ষা"],
      ["খেয়া পার করে যে", "পাটনী"]
    ] },

  { id: "job-2025-navy-office-q06", examId: "job-2025-navy-office", subject: "bangla", topic: "শুদ্ধিকরণ", qno: 6, marks: 3, type: "table",
    question: "শুদ্ধ বানান লিখুনঃ",
    columns: ["অশুদ্ধ", "শুদ্ধ"],
    rows: [
      ["বিভিষিকা", "বিভীষিকা"],
      ["উপরোক্ত", "উপর্যুক্ত"],
      ["অদ্যবধি", "অদ্যাবধি"]
    ] },

  { id: "job-2025-navy-office-q07", examId: "job-2025-navy-office", subject: "english", topic: "sentence-making", qno: 7, marks: 4, type: "idiom",
    question: "Make sentences with the following idioms and phrases with appropriate meaning:",
    parts: [
      { label: "", phrase: "Sine die", meaning: "অনির্দিষ্ট কালের জন্য", example: "He left the village sine die." },
      { label: "", phrase: "Blue blood", meaning: "অভিজাত বংশীয়", example: "He is proud of his blue blood." },
      { label: "", phrase: "Run into debt", meaning: "ঋণগ্রস্ত হওয়া", example: "He ran into debt." },
      { label: "", phrase: "Hard up", meaning: "অভাবগ্রস্ত", example: "Most of our countrymen are hard up nowadays." }
    ] },

  { id: "job-2025-navy-office-q08", examId: "job-2025-navy-office", subject: "english", topic: "grammar", qno: 8, marks: 4, type: "sentence-change",
    question: "Correct the following sentences:",
    parts: [
      { label: "", original: "Rich is not always happy.", changed: "The rich are not always happy." },
      { label: "", original: "I examined his pulse.", changed: "I felt his pulse." },
      { label: "", original: "It is raining since morning.", changed: "It has been raining since morning." },
      { label: "", original: "The old man was died yesterday.", changed: "The old man died yesterday." }
    ] },

  { id: "job-2025-navy-office-q09", examId: "job-2025-navy-office", subject: "english", topic: "translation", qno: 9, marks: 3, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "", source: "আমি তাকে গান গাইতে শুনলাম।", target: "I heard him singing a song." },
      { label: "", source: "গত সন্ধ্যা থেকে বৃষ্টি হচ্ছে।", target: "It has been raining since last evening." },
      { label: "", source: "শিশুটিকে দেখে তার মাতৃত্ব জেগে উঠল।", target: "The mother in her arose seeing the baby." }
    ] },

  { id: "job-2025-navy-office-q10", examId: "job-2025-navy-office", subject: "english", topic: "grammar", qno: 10, marks: 4, type: "sentence-change",
    question: "Transform the following sentences as directed:",
    parts: [
      { label: "", original: "How nice the scenery is! (Assertive)", changed: "The scenery is very nice." },
      { label: "", original: "He is poor but honest. (Complex)", changed: "Though he is poor, he is honest." },
      { label: "", original: "He is so weak that he cannot walk. (Simple)", changed: "He was too weak to walk." },
      { label: "", original: "Everybody hates a liar. (Interrogative)", changed: "Who does not hate a liar?" }
    ] },

  { id: "job-2025-navy-office-q11", examId: "job-2025-navy-office", subject: "english", topic: "paragraph", qno: 11, marks: 5, type: "paragraph",
    question: "Write a paragraph on 'Importance of Saving Water' in ten sentences.",
    answer: "Water is one of the most essential resources for life. Without water, humans, animals, and plants cannot survive. Saving water helps to ensure that future generations have enough to use. Many areas of the world face water scarcity, making conservation very important. Wasting water can lead to environmental problems and reduce clean water availability. Simple actions like turning off taps and fixing leaks can save a lot of water. Using water wisely in farming and industries also contributes to conservation. Rainwater harvesting is an effective method to collect and store water. Saving water reduces the energy needed for treatment and distribution. Therefore, everyone should take responsibility to save water for a sustainable future." },

  { id: "job-2025-navy-office-q12", examId: "job-2025-navy-office", subject: "math", topic: "বীজগণিত", qno: 12, marks: 5, type: "math",
    question: "প্রমাণ করুন যে, (a + b)^4 - (a - b)^4 = 8ab(a^2 + b^2)",
    steps: [
      "(a + b)^4 - (a - b)^4",
      "= {(a+b)^2}^2 - {(a-b)^2}^2",
      "= {(a+b)^2 + (a-b)^2} × {(a+b)^2 - (a-b)^2}",
      "= 2(a^2+b^2) × 4ab",
      "= 8ab(a^2 + b^2)"
    ],
    answer: "(a+b)^4 − (a−b)^4 = 8ab(a²+b²) (প্রমাণিত)" },

  { id: "job-2025-navy-office-q13", examId: "job-2025-navy-office", subject: "math", topic: "বীজগণিত", qno: 13, marks: 5, type: "math",
    question: "যদি a = √3 + √2 হয়, তবে প্রমাণ করুন যে, a^3 + 1/a^3 = 18√3",
    steps: [
      "1/a = 1/(√3+√2) = (√3−√2)/{(√3)²−(√2)²} = (√3−√2)/1 = √3−√2",
      "a + 1/a = (√3+√2) + (√3−√2) = 2√3",
      "a^3 + 1/a^3 = (a+1/a)^3 − 3(a)(1/a)(a+1/a)",
      "= (2√3)^3 − 3(2√3) = 8×3√3 − 6√3 = 24√3 − 6√3"
    ],
    answer: "18√3 (প্রমাণিত)" },

  { id: "job-2025-navy-office-q14", examId: "job-2025-navy-office", subject: "math", topic: "পাটিগণিত", qno: 14, marks: 5, type: "math",
    question: "দুই অঙ্কবিশিষ্ট কোনো সংখ্যার একক স্থানীয় অঙ্কটি দশক স্থানীয় অঙ্ক অপেক্ষা ২ বেশি। অঙ্কদ্বয় স্থান বিনিময় করলে যে সংখ্যা পাওয়া যাবে তা প্রদত্ত সংখ্যার দ্বিগুণ অপেক্ষা ৬ কম হবে। সংখ্যাটি নির্ণয় করুন।",
    steps: [
      "মেনে করি, দশক স্থানীয় অঙ্কটি x, একক স্থানীয় অঙ্কটি x + 2",
      "সংখ্যাটি = 10x + (x+2) = 11x + 2",
      "স্থান বিনিময়ের পর সংখ্যা = 10(x+2) + x = 11x + 20",
      "প্রশ্নমতে, 11x + 20 = 2(11x+2) − 6",
      "11x + 20 = 22x − 2",
      "11x = 22 → x = 2",
      "সংখ্যাটি = 11×2 + 2 = 24"
    ],
    answer: "সংখ্যাটি ২৪।" },

  { id: "job-2025-navy-office-q15", examId: "job-2025-navy-office", subject: "math", topic: "সংখ্যাতত্ত্ব", qno: 15, marks: 4, type: "math",
    question: "দুইটি সংখ্যার গ.সা.গু ও ল.সা.গু যথাক্রমে ২ এবং ৩৬০। একটি সংখ্যা ৩৬ হলে অপরটি কত?",
    steps: [
      "অপর সংখ্যাটি = (গ.সা.গু × ল.সা.গু) / একটি সংখ্যা",
      "= (2 × 360) / 36"
    ],
    answer: "২০" },

  { id: "job-2025-navy-office-q16", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 16, marks: 2, type: "paragraph",
    question: "বাংলাদেশের একমাত্র জলবিদ্যুৎ কেন্দ্র কোথায় অবস্থিত?", answer: "কাপ্তাই, রাঙামাটি।" },

  { id: "job-2025-navy-office-q17", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 17, marks: 2, type: "paragraph",
    question: "সুনীল অর্থনীতি বা ব্লু-ইকোনমি বলতে কী বুঝায়?", answer: "সমুদ্র সম্পদ নির্ভর পরিচালিত অর্থনীতিই হলো ব্লু/সুনীল/সমুদ্র ইকোনমি।" },

  { id: "job-2025-navy-office-q18", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 18, marks: 2, type: "paragraph",
    question: "ব্রিকস জোটের সদস্য সংখ্যা কত?", answer: "১০টি।" },

  { id: "job-2025-navy-office-q19", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "gk-others", qno: 19, marks: 2, type: "paragraph",
    question: "'গুগল পে' কী?", answer: "ডিজিটাল ওয়ালেট।" },

  { id: "job-2025-navy-office-q20", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "বিজ্ঞান", qno: 20, marks: 2, type: "paragraph",
    question: "AI বলতে কী বুঝায়?",
    answer: "Artificial Intelligence (AI) বা কৃত্রিম বুদ্ধিমত্তা হলো একটি কম্পিউটার সফটওয়্যার, যা তথ্য বিশ্লেষণের মাধ্যমে যন্ত্র বা অ্যাপ্লিকেশনকে মানুষের বুদ্ধি ও চিন্তাশক্তির আদলে কাজের উপযোগী করে তোলে।" },

  { id: "job-2025-navy-office-q21", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 21, marks: 2, type: "paragraph",
    question: "বাংলাদেশে মোট সমুদ্র বন্দর কয়টি এবং কী কী?", answer: "৩টি; চট্টগ্রাম, মোংলা ও পায়রা সমুদ্র বন্দর।" },

  { id: "job-2025-navy-office-q22", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 22, marks: 2, type: "paragraph",
    question: "বাংলাদেশের জাতীয় পতাকার দৈর্ঘ্য-প্রস্থের অনুপাত কত?", answer: "১০ : ৬ (৫ : ৩)।" },

  { id: "job-2025-navy-office-q23", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 23, marks: 2, type: "paragraph",
    question: "কোন দেশকে ইউরোপের শস্যভাণ্ডার বলা হয়?", answer: "ইউক্রেন।" },

  { id: "job-2025-navy-office-q24", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 24, marks: 2, type: "paragraph",
    question: "ফরায়েজি আন্দোলনের প্রবর্তক কে?", answer: "হাজী শরীয়তুল্লাহ।" },

  { id: "job-2025-navy-office-q25", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 25, marks: 2, type: "paragraph",
    question: "পদ্মা ও মেঘনা নদীর মিলন স্থানের নাম কী?", answer: "চাঁদপুর।" },

  { id: "job-2025-navy-office-q26", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "gk-others", qno: 26, marks: 3, type: "short-qa",
    question: "পূর্ণরূপ লিখ: FBCCI, ILO, UNESCO",
    parts: [
      { label: "FBCCI", q: "", a: "Federation of Bangladesh Chambers of Commerce and Industry" },
      { label: "ILO", q: "", a: "International Labour Organization" },
      { label: "UNESCO", q: "", a: "United Nations Educational, Scientific and Cultural Organization" }
    ] },

  { id: "job-2025-navy-office-q27", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 27, marks: 2, type: "paragraph",
    question: "'ডায়েট' কোন দেশের পার্লামেন্টের নাম?", answer: "জাপান।" },

  { id: "job-2025-navy-office-q28", examId: "job-2025-navy-office", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 28, marks: 2, type: "paragraph",
    question: "তিব্বতের রাজধানীর নাম কী?", answer: "লাসা।" },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ কোস্ট গার্ড — অফিস সহায়ক
  // id prefix: job-2025-coast-guard-support
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-coast-guard-support-q01", examId: "job-2025-coast-guard-support", subject: "bangla", topic: "এক-কথায়-প্রকাশ", qno: 1, marks: 4, type: "table",
    question: "এক কথায় প্রকাশ করুন:",
    columns: ["বাক্য", "এক কথায়"],
    rows: [
      ["উড়ে যাচ্ছে যা", "উড়ন্ত"],
      ["যার নাম জানা যায় নি", "অজ্ঞাত"],
      ["পরের সাহায্যে যে জীবন ধারন করে", "পরান্নজীবী"],
      ["দমন করা যায় না যা", "অদম্য"]
    ] },

  { id: "job-2025-coast-guard-support-q02", examId: "job-2025-coast-guard-support", subject: "bangla", topic: "বাগধারা", qno: 2, marks: 4, type: "idiom",
    question: "নিচের বাগধারাগুলোর অর্থ লিখুন:",
    parts: [
      { label: "", phrase: "আকাশ থেকে পড়া", meaning: "অপ্রত্যাশিত" },
      { label: "", phrase: "ভুঁইফোড়", meaning: "নতুন আগমন/অর্বাচীন" },
      { label: "", phrase: "সাত সতের", meaning: "বিচিত্র রকমের" },
      { label: "", phrase: "রুই কাতলা", meaning: "নেতৃস্থানীয় ব্যক্তি" }
    ] },

  { id: "job-2025-coast-guard-support-q03", examId: "job-2025-coast-guard-support", subject: "bangla", topic: "প্রতিশব্দ", qno: 3, marks: 4, type: "table",
    question: "০২টি করে সমার্থক শব্দ লিখুন:",
    columns: ["শব্দ", "সমার্থক"],
    rows: [
      ["ফুল", "কুসুম, প্রসূন"],
      ["ভ্রমর", "ভোমরা, অলি"],
      ["আনন্দ", "হর্ষ, পুলক"],
      ["আঁধার", "অন্ধকার, তিমির"]
    ] },

  { id: "job-2025-coast-guard-support-q04", examId: "job-2025-coast-guard-support", subject: "bangla", topic: "শুদ্ধিকরণ", qno: 4, marks: 4, type: "table",
    question: "বানান শুদ্ধ করুন:",
    columns: ["অশুদ্ধ", "শুদ্ধ"],
    rows: [
      ["আকাংখা", "আকাঙ্ক্ষা"],
      ["মুলতঃ", "মূলত"],
      ["রুপালী", "রুপালি"],
      ["নিয়মাবলী", "নিয়মাবলি"]
    ] },

  { id: "job-2025-coast-guard-support-q05", examId: "job-2025-coast-guard-support", subject: "bangla", topic: "সন্ধি", qno: 5, marks: 4, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["মৃন্ময়", "মৃৎ + ময়"],
      ["অন্যান্য", "অন্য + অন্য"],
      ["শুভেচ্ছা", "শুভ + ইচ্ছা"],
      ["প্রতীক্ষা", "প্রতি + ঈক্ষা"]
    ] },

  { id: "job-2025-coast-guard-support-q06", examId: "job-2025-coast-guard-support", subject: "english", topic: "fill-in-the-blanks", qno: 6, marks: 4, type: "fill-gaps",
    question: "খালি ঘর পূরণ করুন:",
    parts: [
      { sentence: "I shall.....a cup of tea.", answer: "have" },
      { sentence: "He is...... weak to walk.", answer: "too" },
      { sentence: "I have not seen him.....Tuesday last.", answer: "since" },
      { sentence: "I live.... Dhaka.", answer: "in" },
      { sentence: "There is time difference....... Bangladesh & USA.", answer: "between" }
    ] },

  { id: "job-2025-coast-guard-support-q07", examId: "job-2025-coast-guard-support", subject: "english", topic: "grammar", qno: 7, marks: 4, type: "sentence-change",
    question: "Correct the following sentences:",
    parts: [
      { label: "", original: "One should do his duty.", changed: "One should do one's duty." },
      { label: "", original: "He came here by foot.", changed: "He came here on foot." },
      { label: "", original: "What fool he is.", changed: "What a fool he is!" },
      { label: "", original: "He is known by me.", changed: "He is known to me." },
      { label: "", original: "I do not know that why he was absent.", changed: "I do not know why he was absent." }
    ] },

  { id: "job-2025-coast-guard-support-q08", examId: "job-2025-coast-guard-support", subject: "english", topic: "translation", qno: 8, marks: 5, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "", source: "আমি কলা খেতে পছন্দ করি।", target: "I like to eat bananas." },
      { label: "", source: "আমি তোমার চিঠি পেয়েছি।", target: "I have received your letter." },
      { label: "", source: "আমরা তাকে হাসতে দেখলাম।", target: "We saw him laughing." },
      { label: "", source: "আমি বাংলাদেশ কোস্ট গার্ডে যোগদানে আগ্রহী।", target: "I am interested to join the Bangladesh Coast Guard." },
      { label: "", source: "সদা সত্য কথা বলব।", target: "I will always speak the truth." }
    ] },

  { id: "job-2025-coast-guard-support-q09", examId: "job-2025-coast-guard-support", subject: "english", topic: "paragraph", qno: 9, marks: 7, type: "paragraph",
    question: "Write a paragraph on 'The Rainy Season'",
    answer: "There are six seasons in Bangladesh, and the rainy season is one of them. The rainy season is an important season in Bangladesh, which usually starts in June and lasts until September. It comes after the hot summer and brings cool air and heavy rainfall. During this season, big dark clouds cover the sky, and sometimes it rains for many days. Trees, grass, and fields become green and fresh, making nature very beautiful. Farmers eagerly wait for the rainy season because crops like rice and jute need plenty of water to grow well. Rivers, lakes, and ponds fill up with water, which helps irrigation and fish farming. Children enjoy playing in the rain and making paper boats. However, too much rain can cause floods, waterlogging, and diseases, which create problems for people and animals. Despite these difficulties, the rainy season is very important for agriculture, nature, and ecological balance." },

  { id: "job-2025-coast-guard-support-q10", examId: "job-2025-coast-guard-support", subject: "math", topic: "পাটিগণিত", qno: 10, marks: 5, type: "math",
    question: "ক ও খ একত্রে একটি কাজ ১২ দিনে করতে পারে। ক একা ২০ দিনে করতে পারে। খ একা কাজটি কত দিনে করতে পারবে?",
    steps: [
      "ক ও খ একত্রে ১ দিনে করে 1/12 অংশ কাজ",
      "ক একা ১ দিনে করে 1/20 অংশ কাজ",
      "খ একা ১ দিনে করে = (1/12 − 1/20) = (5−3)/60 = 2/60 = 1/30 অংশ কাজ",
      "1/30 অংশ কাজ করে ১ দিনে, সুতরাং সম্পূর্ণ কাজ করে (30×1)/1 = 30 দিনে"
    ],
    answer: "৩০ দিন" },

  { id: "job-2025-coast-guard-support-q11", examId: "job-2025-coast-guard-support", subject: "math", topic: "পাটিগণিত", qno: 11, marks: 5, type: "math",
    question: "একটি টেবিল ৮% ক্ষতিতে বিক্রয় করা হলো। বিক্রয়মূল্য ৮০০ টাকা বেশি হলে ৮% লাভ হতো। টেবিলটির ক্রয়মূল্য কত?",
    steps: [
      "মেনে করি, ক্রয়মূল্য ১০০ টাকা",
      "৮% ক্ষতিতে বিক্রয়মূল্য (100−8) = 92 টাকা",
      "৮% লাভে বিক্রয়মূল্য (100+8) = 108 টাকা",
      "বিক্রয়মূল্য বেশি (108−92) = 16 টাকা",
      "১৬ টাকা বেশি হলে ক্রয়মূল্য ১০০ টাকা হলে, ৮০০ টাকা বেশি হলে ক্রয়মূল্য = (100×800)/16 = 5000 টাকা"
    ],
    answer: "ক্রয়মূল্য ৫০০০ টাকা।" },

  { id: "job-2025-coast-guard-support-q12", examId: "job-2025-coast-guard-support", subject: "math", topic: "বীজগণিত", qno: 12, marks: 5, type: "math",
    question: "উৎপাদকে বিশ্লেষণ করুন: 4x² − 23x + 33",
    steps: [
      "4x² − 23x + 33",
      "= 4x² − 12x − 11x + 33",
      "= 4x(x − 3) − 11(x − 3)"
    ],
    answer: "(x − 3)(4x − 11)" },

  { id: "job-2025-coast-guard-support-q13", examId: "job-2025-coast-guard-support", subject: "general-knowledge", qno: 13, marks: 14, type: "short-qa",
    question: "নিচের প্রশ্নগুলোর উত্তর করুন:",
    parts: [
      { label: "ক", q: "PDF এর পূর্ণরূপ কি?", a: "Portable Document Format" },
      { label: "খ", q: "অফিস সহায়ক এর ইংরেজি কি?", a: "Office Support Staff" },
      { label: "গ", q: "বাংলাদেশের গভীর সমুদ্র বন্দর কোথায়?", a: "মাতারবাড়ী সমুদ্র বন্দর, মহেশখালী" },
      { label: "ঘ", q: "পৃথিবীর সৌরজগৎ এর বৃহত্তম গ্রহ কোনটি?", a: "বৃহস্পতি" },
      { label: "ঙ", q: "বাংলাদেশের সমুদ্র উপকূলের দৈর্ঘ্য কত?", a: "৭১১ কি.মি" },
      { label: "চ", q: "সূর্য উদয়ের দেশ কোনটি?", a: "জাপান" },
      { label: "ছ", q: "'মেঘনাদবধ কাব্য' রচয়িতা কে?", a: "মাইকেল মধুসূদন দত্ত" },
      { label: "জ", q: "পৃথিবীর বৃহত্তম মহাদেশের নাম কি?", a: "এশিয়া" },
      { label: "ঝ", q: "নেপালের রাজধানীর নাম কি?", a: "কাঠমান্ডু" },
      { label: "ঞ", q: "IMO এর পূর্ণরূপ কি?", a: "International Maritime Organization" },
      { label: "ট", q: "২০২৬ সালে বিশ্বকাপ ফুটবল কয়টি দেশে অনুষ্ঠিত হবে?", a: "৩টি (যুক্তরাষ্ট্র, কানাডা ও মেক্সিকো)" },
      { label: "ঠ", q: "বাংলাদেশের জাতীয় খেলা কি?", a: "কাবাডি" },
      { label: "ড", q: "পৃথিবীর দীর্ঘতম নদী কোনটি?", a: "নীলনদ" },
      { label: "ঢ", q: "বাংলাদেশ জাতিসংঘ সদস্যপদ লাভ করে কত সালে?", a: "১৯৭৪ সালে" },
      { label: "ণ", q: "বাংলাদেশে আয়তনে ছোট জেলা কোনটি?", a: "নারায়ণগঞ্জ" }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ হাউজ বিল্ডিং ফাইন্যান্স কর্পোরেশন — ডাটা এন্ট্রি অপারেটর
  // id prefix: job-2025-hbfc-data-entry
  // ⚠️ অসম্পূর্ণ: সোর্স বইয়ের এই অংশ ১০ নং প্রশ্নের সমাধানের মাঝপথে কাটা।
  // শুধু ০১-০৯ নং প্রশ্ন (সম্পূর্ণ তথ্যসহ) এখানে যোগ করা হয়েছে।
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-hbfc-data-entry-q01", examId: "job-2025-hbfc-data-entry", subject: "bangla", topic: "এক-কথায়-প্রকাশ", qno: 1, marks: 5, type: "table",
    question: "এক কথায় প্রকাশ করুন:",
    columns: ["বাক্য", "এক কথায়"],
    rows: [
      ["হনন করার ইচ্ছা", "জিঘাংসা"],
      ["যিনি বক্তব্য দানে পটু", "বাগ্মী"],
      ["পা থেকে মাথা পর্যন্ত", "আপাদমস্তক"],
      ["বুকে হেঁটে চলে যে", "সরীসৃপ/উরগ"],
      ["যুদ্ধ থেকে যে বীর পালায় না", "সংশপ্তক"]
    ] },

  { id: "job-2025-hbfc-data-entry-q02", examId: "job-2025-hbfc-data-entry", subject: "bangla", topic: "শুদ্ধিকরণ", qno: 2, marks: 5, type: "table",
    question: "বানান শুদ্ধ করুন:",
    columns: ["অশুদ্ধ", "শুদ্ধ"],
    rows: [
      ["বনোষধি", "বনৌষধি"],
      ["মুমূর্ষূ", "মুমূর্ষু"],
      ["ভীবিষীকা", "বিভীষিকা"],
      ["আনসাংগিক", "আনুষঙ্গিক"],
      ["বিদুসী", "বিদুষী"]
    ] },

  { id: "job-2025-hbfc-data-entry-q03", examId: "job-2025-hbfc-data-entry", subject: "bangla", topic: "বিপরীত-শব্দ", qno: 3, marks: 5, type: "table",
    question: "বিপরীত শব্দ লিখুন:",
    columns: ["প্রদত্ত শব্দ", "বিপরীত শব্দ"],
    rows: [
      ["হাল", "সাবেক"],
      ["খাতক", "মহাজন"],
      ["বাচাল", "স্বল্পভাষী"],
      ["লিপ্সা", "নির্লিপ্ত"],
      ["কনিষ্ঠ", "জ্যেষ্ঠ"]
    ] },

  { id: "job-2025-hbfc-data-entry-q04", examId: "job-2025-hbfc-data-entry", subject: "bangla", topic: "সন্ধি", qno: 4, marks: 5, type: "table",
    question: "সন্ধি বিচ্ছেদ করুনঃ",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["মনীষা", "মনস্ + ঈষা"],
      ["তৎকর", "তৎ + কর"],
      ["ষোড়শ", "ষট্ + দশ"],
      ["অন্বেষণ", "অনু + এষণ"],
      ["উজ্জ্বল", "উৎ + জ্বল"]
    ] },

  { id: "job-2025-hbfc-data-entry-q05", examId: "job-2025-hbfc-data-entry", subject: "english", topic: "fill-in-the-blanks", qno: 5, marks: 5, type: "fill-gaps",
    question: "Fill in the blanks:",
    parts: [
      { sentence: "I am going to market...... foot.", answer: "on" },
      { sentence: "Don't smile....... at the poor.", answer: "at" },
      { sentence: "This is ......... unique case.", answer: "a" },
      { sentence: "Who were you talking......?", answer: "to" },
      { sentence: "The more you read, the more you learn.", answer: "the, the" }
    ] },

  { id: "job-2025-hbfc-data-entry-q06", examId: "job-2025-hbfc-data-entry", subject: "english", topic: "grammar", qno: 6, marks: 5, type: "table",
    question: "Change the numbers (plural form লিখুন):",
    columns: ["Given number", "Plural/Opposite number"],
    rows: [
      ["Deer", "Deer"],
      ["Loaf", "Loaves"],
      ["Louse", "Lice"],
      ["Ox", "Oxen"],
      ["Alumnus", "Alumni"]
    ] },

  { id: "job-2025-hbfc-data-entry-q07", examId: "job-2025-hbfc-data-entry", subject: "english", topic: "grammar", qno: 7, marks: 5, type: "sentence-change",
    question: "Correct the following sentences:",
    parts: [
      { label: "", original: "He resigned from the post.", changed: "He resigned the post." },
      { label: "", original: "You are in wrong.", changed: "You are in the wrong." },
      { label: "", original: "Let Monir and I go.", changed: "Let Monir and me go." },
      { label: "", original: "Pen the word.", changed: "Pen through the word." },
      { label: "", original: "The boy resembles to his father.", changed: "The boy resembles his father." }
    ] },

  { id: "job-2025-hbfc-data-entry-q08", examId: "job-2025-hbfc-data-entry", subject: "english", topic: "translation", qno: 8, marks: 5, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "", source: "লোকটি যেমন বোকা তেমন গরীব।", target: "The man is as foolish as he is poor." },
      { label: "", source: "শিশুটি ঘুমাচ্ছে, তাই না?", target: "The baby is sleeping, isn't it?" },
      { label: "", source: "বেশির ভাগ ছাত্রই ইংরেজিতে দুর্বল।", target: "Most of the students are weak in English." },
      { label: "", source: "বাংলাদেশ নদীমাতৃক দেশ।", target: "Bangladesh is a riverine country." },
      { label: "", source: "গতকাল আমার ভাল ঘুম হয়েছে।", target: "I slept a sound sleep yesterday." }
    ] },

  { id: "job-2025-hbfc-data-entry-q09", examId: "job-2025-hbfc-data-entry", subject: "math", topic: "জ্যামিতি", qno: 9, marks: 10, type: "math",
    question: "কোন সমকোণী ত্রিভুজের অতিভুজ ১৩ সে.মি এবং পরিসীমা ৩০ সে.মি। ত্রিভুজটির ক্ষেত্রফল কত?",
    steps: [
      "মেনে করি, ভূমি a এবং উচ্চতা b, অতিভুজ c = 13 সেমি",
      "প্রশ্নমতে, a + b + c = 30 → a + b = 17",
      "পিথাগোরাসের উপপাদ্য অনুসারে, a² + b² = c² = 169",
      "আমরা জানি, (a+b)² = a² + b² + 2ab",
      "(17)² = 169 + 2ab",
      "289 = 169 + 2ab → 2ab = 120 → ab = 60",
      "সমকোণী ত্রিভুজের ক্ষেত্রফল = (1/2) × ভূমি × উচ্চতা = (1/2) × ab = (1/2) × 60"
    ],
    answer: "৩০ বর্গ সে.মি" },

  // ⚠️ job-2025-hbfc-data-entry-q10: সোর্স বইয়ের এই প্রশ্নের সমাধান পৃষ্ঠা শেষে কাটা গেছে।
  // সমাধান শুরু হয়েছিল কিন্তু শেষ হয়নি। সম্পূর্ণ তথ্যের জন্য মূল বই দেখুন।
  { id: "job-2025-hbfc-data-entry-q10", examId: "job-2025-hbfc-data-entry", subject: "math", topic: "পাটিগণিত", qno: 10, marks: 10, type: "math",
    question: "কোনো আসল ৩ বছরের মুনাফা-আসলে ১৫৭৮ টাকা এবং ৫ বছরের মুনাফা-আসলে ১৮৩০ টাকা হয়। আসল ও মুনাফার হার নির্ণয় করুন।",
    steps: [
      "আসল + ৫ বছরের মুনাফা = ১৮৩০ টাকা",
      "আসল + ৩ বছরের মুনাফা = ১৫৭৮ টাকা",
      "বিয়োগ করে: ২ বছরের মুনাফা = ২৫২ টাকা",
      "১ বছরের মুনাফা = ২৫২/২ = ১২৬ টাকা",
      "৩ বছরের মুনাফা = ১২৬ × ৩ = ৩৭৮ টাকা",
      "আসল = ১৫৭৮ − ৩৭৮ = ১২০০ টাকা",
      "মুনাফার হার = (১ বছরের মুনাফা × ১০০) / আসল = (১২৬ × ১০০) / ১২০০ = ১০.৫%"
    ],
    answer: "আসল = ১২০০ টাকা এবং মুনাফার হার = ১০.৫% (⚠️ সোর্স বইয়ে সম্পূর্ণ সমাধান পাওয়া যায়নি, এটি গণনাকৃত উত্তর)" },

  // ══════════════════════════════════════════════════════════
  // পরবর্তী পরীক্ষার data এখানে যোগ করুন
  // ══════════════════════════════════════════════════════════

];