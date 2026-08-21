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
// "table"          → দুই বা তার বেশি কলামের ছক
//                    columns: [col1, col2, ...], rows: [[c1, c2, ...], ...]
//                    (৩+ কলামের টেবিলের জন্য columns/rows-এই আরেকটা এলিমেন্ট
//                    যোগ করুন — renderer.js যেকোনো সংখ্যক কলাম generic ভাবে
//                    হ্যান্ডেল করে। আলাদা কোনো "columns3" ফিল্ড নেই/দরকার নেই।)
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

  {
    id: "job-2025-dc-q16",
    examId: "job-2025-dc",
    subject: "general-knowledge",
    qno: 16,
    marks: 5,
    type: "paragraph",
    question: "আপনি যে পদে আবেদন করেছেন সে পদের দায়িত্ব ও কর্তব্য সম্পর্কে লিখুন।",
    answer: "প্রার্থীর আবেদনকৃত পদ অনুযায়ী নিজ ভাষায় লিখতে হবে — উত্তর প্রার্থীভেদে ভিন্ন হবে বিধায় বইয়ে নির্দিষ্ট উত্তর দেওয়া হয়নি।"
  },

  {
    id: "job-2025-dc-q17",
    examId: "job-2025-dc",
    subject: "general-knowledge",
    qno: 17,
    marks: 5,
    type: "paragraph",
    question: "'ই-নামজারি' সম্পর্কে লিখুন।",
    answer: "নামজারি বা মিউটেশন হচ্ছে জমি সংক্রান্ত বিষয়ে মালিকানা পরিবর্তন করা। কোনো ব্যক্তি বা প্রতিষ্ঠান কোনো বৈধ পন্থায় ভূমি/জমির মালিকানা অর্জন করলে সরকারি রেকর্ড সংশোধন করে তার নামে রেকর্ড হালনাগাদ করাকেই নামজারি বলা হয়। অনলাইনের মাধ্যমে নামজারির আবেদন, প্রক্রিয়া ও রেকর্ড করাই হচ্ছে ই-নামজারি।"
  },

  { id: "job-2025-dc-q18", examId: "job-2025-dc", subject: "general-knowledge", qno: 18, marks: 20, type: "short-qa",
    question: "সাধারণ জ্ঞান-২০: নিচের প্রশ্নগুলোর উত্তর দিন:",
    parts: [
      { label: "১৮", q: "বাংলাদেশের সর্বোচ্চ আইন কোনটি?", a: "সংবিধান" },
      { label: "১৯", q: "বাংলাদেশের একমাত্র পাহাড়ি দ্বীপ কোনটি?", a: "মহেশখালী" },
      { label: "২০", q: "পৃথিবীর দীর্ঘতম নদী কোনটি?", a: "নীলনদ" },
      { label: "২১", q: "বাংলাদেশকে স্বীকৃতি দানকারী প্রথম দেশ কোনটি?", a: "ভুটান" },
      { label: "২২", q: "পানামা খাল কোন দুইটি মহাসাগরকে যুক্ত করেছে?", a: "আটলান্টিক ও প্রশান্ত" },
      { label: "২৩", q: "চাকমাদের বর্ষবরণ অনুষ্ঠানকে কী বলা হয়?", a: "বিজু" },
      { label: "২৪", q: "আইফেল টাওয়ার কোথায় অবস্থিত?", a: "ফ্রান্স, প্যারিস" },
      { label: "২৫", q: "ইরানের মুদ্রার নাম কী?", a: "রিয়াল" },
      { label: "২৬", q: "রাশিয়ার রাজধানীর নাম কী?", a: "মস্কো" },
      { label: "২৭", q: "বিশ্ব স্বাস্থ্য সংস্থার সদর দপ্তর কোথায় অবস্থিত?", a: "জেনেভা, সুইজারল্যান্ড" },
      { label: "২৮", q: "UNESCO এর পূর্ণরূপ কী?", a: "United Nations Educational, Scientific and Cultural Organization" }
    ]
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

  { id: "job-2025-iwta-traffic-q04", examId: "job-2025-iwta-traffic", subject: "english", topic: "paragraph", qno: 4, marks: 7, type: "paragraph",
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

  { id: "job-2025-dc-bhola-q07", examId: "job-2025-dc-bhola", subject: "english", topic: "grammar", qno: 7, marks: 4, type: "short-qa",
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
  // পরীক্ষা: কারা অধিদপ্তর — শিক্ষক (job-2025-prison-teacher)
  // পরীক্ষা: কারিগরি ও মাদ্রাসা শিক্ষা বিভাগ — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-tech-madrasah-office-asst)
  // পরীক্ষা: বাংলাদেশ সমরাস্ত্র কারখানা (বিওএফ) — টেকনিক্যাল হেলপার (job-2025-bof-tech-helper)
  // পরীক্ষা: বাংলাদেশ কোস্ট গার্ড — অফিস সহায়ক, সেপ্টেম্বর ২০২৫ (job-2025-coast-guard-support-sep)
  // পরীক্ষা: কারা অধিদপ্তর — কারা সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-prison-computer-typist)
  // পরীক্ষা: বাংলাদেশ সমরাস্ত্র কারখানা (বিওএফ) — টেকনিশিয়ান (job-2025-bof-technician)
  // সোর্স: self_job_solution_330-370_page (পৃষ্ঠা ৩৩০-৩৭০)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-prison-teacher-q01", "examId": "job-2025-prison-teacher", "subject": "bangla", "topic": "সন্ধি", "qno": 1, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "গঙ্গোর্মি", "a": "গঙ্গা + ঊর্মি"}, {"label": "খ", "q": "ভূর্ধ্ব", "a": "ভূ + ঊর্ধ্ব"}, {"label": "গ", "q": "নিজন্ত", "a": "নিচ + অন্ত"}, {"label": "ঘ", "q": "তন্বী", "a": "তনু + ঈ"}, {"label": "ঙ", "q": "ষোড়শ", "a": "ষট্ + দশ"}]},

  {"id": "job-2025-prison-teacher-q02", "examId": "job-2025-prison-teacher", "subject": "bangla", "topic": "পারিভাষিক শব্দ", "qno": 2, "marks": 5, "type": "table", "question": "পারিভাষিক শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "অর্থ"], "rows": [["Custody", "হেফাজত"], ["Homicide", "হত্যাকাণ্ড"], ["Overdue", "মেয়াদ উত্তীর্ণ"], ["Referendum", "গণভোট"], ["Specimen", "নমুনা"]]},

  {"id": "job-2025-prison-teacher-q03", "examId": "job-2025-prison-teacher", "subject": "bangla", "topic": "বাগধারা", "qno": 3, "marks": 5, "type": "idiom", "question": "নিচের বাগধারাগুলোর অর্থ লিখুনঃ", "parts": [{"label": "ক", "phrase": "উজানের কই", "meaning": "সহজলভ্য"}, {"label": "খ", "phrase": "কাকভূষণ্ডি", "meaning": "দীর্ঘজীবী"}, {"label": "গ", "phrase": "গোকুলের ষাঁড়", "meaning": "স্বেচ্ছাচারী"}, {"label": "ঘ", "phrase": "ঢাকের বাঁয়া", "meaning": "অপ্রয়োজনীয়"}, {"label": "ঙ", "phrase": "খণ্ড প্রলয়", "meaning": "তুমুল কাণ্ড"}]},

  {"id": "job-2025-prison-teacher-q04", "examId": "job-2025-prison-teacher", "subject": "bangla", "topic": "ব্যাকরণ", "qno": 4, "marks": 10, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর লিখুনঃ", "parts": [{"label": "ক", "q": "বাংলা ভাষায় শব্দভাণ্ডারকে কয় ভাগে ভাগ করা হয়েছে?", "a": "৫ ভাগে"}, {"label": "খ", "q": "ফণিমনসা কাব্যের রচয়িতা কে?", "a": "কাজী নজরুল ইসলাম"}, {"label": "গ", "q": "নাসিক্য বর্ণগুলো কী কী?", "a": "ঙ, ন, ম"}, {"label": "ঘ", "q": "ব্যাসবাক্যসহ সমাস নির্ণয় করুনঃ 'স্মৃতিসৌধ'", "a": "স্মৃতি রক্ষার্থে সৌধ - মধ্যপদলোপী কর্মধারয়"}, {"label": "ঙ", "q": "'মন দিয়া কর সবে বিদ্যা উপার্জন' — কোন কারকে কোন বিভক্তি?", "a": "করণে ৩য়া"}]},

  {"id": "job-2025-prison-teacher-q05", "examId": "job-2025-prison-teacher", "subject": "english", "topic": "fill-in-the-blanks", "qno": 5, "marks": 5, "type": "fill-gaps", "question": "Fill in the gaps:", "parts": [{"sentence": "The cat is fond….. milk.", "answer": "of"}, {"sentence": "Each boy and each girl…. a pen.", "answer": "has/had"}, {"sentence": "He worked hard so that he…… shine in life.", "answer": "could/would"}, {"sentence": "The duty was imposed….. the guard.", "answer": "on"}, {"sentence": "He is……. European.", "answer": "a"}]},

  {"id": "job-2025-prison-teacher-q06", "examId": "job-2025-prison-teacher", "subject": "english", "topic": "translation", "qno": 6, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "ডাক্তার আসার পর রোগীটি মারা গেল।", "target": "The patient died after the doctor had come."}, {"label": "খ", "source": "সকাল থেকে বৃষ্টি হচ্ছে।", "target": "It has been raining since morning."}, {"label": "গ", "source": "পরিশ্রমই সৌভাগ্যের চাবিকাঠি।", "target": "Industry is the key to success."}, {"label": "ঘ", "source": "বাংলাদেশ নদীর দেশ।", "target": "Bangladesh is a riverine country/ a land of rivers."}, {"label": "ঙ", "source": "সদা সত্য কথা বলবে।", "target": "Always speak the truth."}]},

  {"id": "job-2025-prison-teacher-q07", "examId": "job-2025-prison-teacher", "subject": "english", "topic": "idioms-and-phrases", "qno": 7, "marks": 5, "type": "idiom", "question": "Write Bengali meaning of the following idioms and phrases:", "parts": [{"label": "a", "phrase": "Apple of discord", "meaning": "বিবাদের বিষয়"}, {"label": "b", "phrase": "Horns of a dilemma", "meaning": "উভয় সংকট"}, {"label": "c", "phrase": "Cry in the wilderness", "meaning": "অরণ্যে রোদন"}, {"label": "d", "phrase": "In black and white", "meaning": "লিখিতভাবে"}, {"label": "e", "phrase": "Bring to book", "meaning": "শাস্তি দেওয়া"}]},

  {"id": "job-2025-prison-teacher-q08", "examId": "job-2025-prison-teacher", "subject": "english", "topic": "paragraph", "qno": 8, "marks": 5, "type": "paragraph", "question": "Write a paragraph on 'Environment Pollution'", "answer": "Environment pollution means the contamination of air, water, and soil by harmful substances. It is one of the most serious problems of the present world. Industrial waste, vehicle smoke, plastic, and chemical fertilizers are the main causes of pollution. Air pollution causes breathing problems and various diseases. Water pollution destroys aquatic life and makes water unsafe for drinking. Soil pollution reduces the fertility of land and affects crop production. Besides, noise pollution disturbs mental peace. Environment pollution also contributes to climate change and global warming. To reduce pollution, we should plant more trees, use eco-friendly products, and control the use of plastic. Factories should treat their waste before releasing it into rivers. Government and people together should take strict measures to protect the environment. A clean and healthy environment is essential for the survival of every living being on earth."},

  {"id": "job-2025-prison-teacher-q09", "examId": "job-2025-prison-teacher", "subject": "math", "topic": "ভগ্নাংশ", "qno": 9, "marks": 5, "type": "math", "question": "সমাধান করুনঃ ৪ ১/৪ ÷ {৩/৪ − ১/৩(২/৩ + ১/৬)}", "steps": ["৪ ১/৪ = ১৭/৪", "২/৩ + ১/৬ = ৪/৬ + ১/৬ = ৫/৬", "১/৩ × ৫/৬ = ৫/১৮", "৩/৪ − ৫/১৮ = (২৭ − ১০)/৩৬ = ১৭/৩৬", "১৭/৪ ÷ ১৭/৩৬ = ১৭/৪ × ৩৬/১৭ = ৯"], "answer": "৯"},

  {"id": "job-2025-prison-teacher-q10", "examId": "job-2025-prison-teacher", "subject": "math", "topic": "বীজগণিত", "qno": 10, "marks": 5, "type": "math", "question": "a = ৫x² + ৭y² + ৯z², b = y² − ৩x² − ৪z², c = z² − ২y² + x² হলে, a + b + c কত?", "steps": ["a + b + c = (৫x² + ৭y² + ৯z²) + (y² − ৩x² − ৪z²) + (z² − ২y² + x²)", "= (৫ − ৩ + ১)x² + (৭ + ১ − ২)y² + (৯ − ৪ + ১)z²", "= ৩x² + ৬y² + ৬z²"], "answer": "৩x² + ৬y² + ৬z²"},

  {"id": "job-2025-prison-teacher-q11", "examId": "job-2025-prison-teacher", "subject": "math", "topic": "পাটিগণিত", "qno": 11, "marks": 5, "type": "math", "question": "একটি বাঁশের ০.১০ অংশ কাদায়, ০.৭০ অংশ পানিতে এবং পানির উপরে ১২ মিটার আছে। সম্পূর্ণ বাঁশটির দৈর্ঘ্য কত?", "steps": ["পানির উপরে আছে = ১ − (০.১০ + ০.৭০) অংশ = ১ − ০.৮০ অংশ = ০.২০ অংশ", "০.২০ অংশ = ১২ মিটার", "∴ ১ অংশ (সম্পূর্ণ বাঁশ) = ১২ ÷ ০.২ = ৬০ মিটার"], "answer": "৬০ মিটার"},

  {"id": "job-2025-prison-teacher-q12", "examId": "job-2025-prison-teacher", "subject": "math", "topic": "গতিবেগ", "qno": 12, "marks": 5, "type": "math", "question": "ঘণ্টায় ৭৫ কি.মি. বেগে গমন করলে ১৮০ মিটার দীর্ঘ একটি ট্রেনের ৩২০ মিটার দীর্ঘ একটি প্লাটফর্ম অতিক্রম করতে কত সময় লাগবে?", "steps": ["ট্রেনটিকে তার নিজের দৈর্ঘ্য ও প্লাটফর্মের দৈর্ঘ্য মিলিয়ে মোট (১৮০ + ৩২০) = ৫০০ মিটার অতিক্রম করতে হবে", "৭৫ কি.মি./ঘণ্টা = ৭৫০০০ মিটার/৩৬০০ সেকেন্ড", "৭৫০০০ মিটার যেতে সময় লাগে ৩৬০০ সেকেন্ড", "∴ ৫০০ মিটার যেতে সময় লাগবে = (৩৬০০ × ৫০০) ÷ ৭৫০০০ = ২৪ সেকেন্ড"], "answer": "২৪ সেকেন্ড (⚠️ সোর্স বইয়ের উপসংহারে ভুলবশত '৫৪ সেকেন্ড' লেখা ছিল, কিন্তু হিসাব অনুযায়ী সঠিক উত্তর ২৪ সেকেন্ড)"},

  {"id": "job-2025-prison-teacher-q13", "examId": "job-2025-prison-teacher", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 13, "marks": 5, "type": "math", "question": "ডিমের দাম ১৪ ২/৭% কমে যাওয়ায় ৪২০ টাকায় পূর্বাপেক্ষা ১০টি ডিম বেশি পাওয়া যায়। ক) প্রতি ডজন ডিমের দাম কত? খ) প্রতি ডজন কত টাকায় বিক্রয় করলে ৩৩ ১/৩% লাভ হবে?", "steps": ["ক) ১৪ ২/৭% = ৯৯/৭%", "১০০ টাকায় দাম কমে ৯৯/৭ টাকা হলে, ৪২০ টাকায় দাম কমে = (৯৯/৭ × ৪২০) ÷ ১০০ = ৫৯.৪ টাকা", "এই ৫৯.৪ টাকাই হলো (বেশি পাওয়া) ১০টি ডিমের দাম", "∴ ১টি ডিমের দাম = ৫৯.৪/১০ টাকা; ১২টি (১ ডজন) ডিমের দাম = (৫৯.৪/১০) × ১২ = ৭১.২৮ টাকা", "খ) ক্রয়মূল্য ৭১.২৮ টাকা, লাভ ৩৩ ১/৩% (= ১০০/৩%)", "বিক্রয়মূল্য = ৭১.২৮ × (১০০ + ১০০/৩)/১০০ = ৭১.২৮ × (৪০০/৩)/১০০ = ৯৫.০৪ টাকা (প্রায়)"], "answer": "ক) প্রতি ডজন ডিমের দাম ৭১.২৮ টাকা।  খ) ৯৫.০৪ টাকায় বিক্রয় করলে ৩৩ ১/৩% লাভ হবে।"},

  {"id": "job-2025-prison-teacher-q14", "examId": "job-2025-prison-teacher", "subject": "general-knowledge", "topic": "gk-others", "qno": 14, "marks": 15, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর লিখুনঃ", "parts": [{"label": "ক", "q": "সর্বশেষ জনশুমারি অনুযায়ী বর্তমানে বাংলাদেশে লোকসংখ্যার ঘনত্ব প্রতি বর্গ কিলোমিটারে কত জন?", "a": "১১১৯ জন"}, {"label": "খ", "q": "কৌটিল্য প্রথার প্রবর্তক কে ছিলেন?", "a": "বল্লাল সেন"}, {"label": "গ", "q": "'বানভট্ট' কোন রাজার সভাকবি ছিলেন?", "a": "হর্ষবর্ধন"}, {"label": "ঘ", "q": "শিহাবউদ্দিন মুহম্মদ ঘুরীর প্রকৃত নাম কী?", "a": "মুইজউদ্দিন মুহাম্মদ বিন সাম"}, {"label": "ঙ", "q": "পানিপথের দ্বিতীয় যুদ্ধ কত সালে সংঘটিত হয়?", "a": "১৫৫৬ সালে"}, {"label": "চ", "q": "বাংলাদেশ কত ডিগ্রি থেকে কত ডিগ্রি ভৌগোলিক অক্ষরেখা ও দ্রাঘিমা রেখার মধ্যে অবস্থিত?", "a": "২০°৩৪' থেকে ২৬°৩৮' উত্তর অক্ষরেখার মধ্যে এবং ৮৮°০১' থেকে ৯২°৪১' দ্রাঘিমারেখার মধ্যবর্তী স্থানে"}, {"label": "ছ", "q": "বাংলাদেশের ক্রীড়া সংগীতের গীতিকার কে?", "a": "সেলিমা রহমান"}, {"label": "জ", "q": "পূর্ণরূপ লিখুনঃ SAFTA", "a": "South Asian Free Trade Area"}, {"label": "ঝ", "q": "বাংলাদেশের সংবিধানের কত নং অনুচ্ছেদে বার্ষিক আর্থিক বিবৃতি সম্পর্কে বলা হয়েছে?", "a": "৮৭ (১) অনুচ্ছেদ"}, {"label": "ঞ", "q": "বাংলাদেশের একমাত্র গন্ধক খনি কোথায় অবস্থিত?", "a": "কুতুবদিয়া"}, {"label": "ট", "q": "ভুটান, ভারত ও বাংলাদেশের মধ্য দিয়ে প্রবাহিত আন্তসীমার নদীর নাম কী?", "a": "দুধকুমার নদ"}, {"label": "ঠ", "q": "শীতকালীন অলিম্পিক-২০২৬ কোথায় অনুষ্ঠিত হবে?", "a": "ইতালি"}, {"label": "ড", "q": "২০২৪ সালে সাহিত্যে নোবেল পুরস্কার কে পান?", "a": "হান কাং"}, {"label": "ঢ", "q": "বিখ্যাত ভাস্কর ও চিত্রশিল্পী হামিদুজ্জামান খান মৃত্যুবরণ করেন কত তারিখে?", "a": "২০ জুলাই, ২০২৫"}, {"label": "ণ", "q": "মালয়েশিয়া এবং সুমাত্রাকে পৃথক করেছে কোন প্রণালী?", "a": "মালাক্কা প্রণালি"}]},

  {"id": "job-2025-tech-madrasah-office-asst-q01", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "উপসর্গ", "qno": 1, "marks": 3, "type": "paragraph", "question": "শব্দাংশ শব্দমূলের পূর্বে বসে নতুন শব্দ গঠন করলে তাকে কী বলে? একটি উদাহরণসহ লিখুন।", "answer": "উপসর্গ বলে। যেমন, অনা (উপসর্গ) + বৃষ্টি (শব্দমূল) = অনাবৃষ্টি (নতুন শব্দ)"},

  {"id": "job-2025-tech-madrasah-office-asst-q02", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 2, "marks": 2, "type": "table", "question": "শব্দগুলোর বিপরীত শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["অজ্ঞ", "বিজ্ঞ"], ["ইস্তফা", "যোগদান"], ["নিদ্রিত", "জাগ্রত"], ["যুক্ত", "বিযুক্ত"]]},

  {"id": "job-2025-tech-madrasah-office-asst-q03", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "যুক্তবর্ণ", "qno": 3, "marks": 2, "type": "sub-parts", "question": "নিচের যুক্তবর্ণগুলো কোন কোন বর্ণ দিয়ে গঠিত?", "parts": [{"label": "ক", "q": "ঙ্ক", "a": "ঙ + ক"}, {"label": "খ", "q": "জ্জ", "a": "জ + জ"}, {"label": "গ", "q": "ঞ্জ", "a": "ঞ + জ"}, {"label": "ঘ", "q": "ক্ষ", "a": "ক + ষ"}]},

  {"id": "job-2025-tech-madrasah-office-asst-q04", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "সমাস", "qno": 4, "marks": 4, "type": "sub-parts", "question": "সমাস নির্ণয় করুনঃ", "parts": [{"label": "ক", "q": "সিংহপুরুষ", "a": "পুরুষ সিংহের ন্যায় — উপমিত কর্মধারয়"}, {"label": "খ", "q": "বিষাদসিন্ধু", "a": "বিষাদ রূপ সিন্ধু — রূপক কর্মধারয়"}, {"label": "গ", "q": "তেলেভাজা", "a": "তেল দিয়ে ভাজা — তৃতীয়া তৎপুরুষ"}, {"label": "ঘ", "q": "কানাকানি", "a": "কানে কানে যে কথা — ব্যতিহার বহুব্রীহি"}]},

  {"id": "job-2025-tech-madrasah-office-asst-q05", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "সন্ধি", "qno": 5, "marks": 4, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "নায়ক", "a": "নৈ + অক"}, {"label": "খ", "q": "গবাদি", "a": "গো + আদি"}, {"label": "গ", "q": "পরিচ্ছেদ", "a": "পরি + ছেদ"}, {"label": "ঘ", "q": "ষষ্ঠ", "a": "ষষ্ + থ"}, {"label": "ঙ", "q": "শয়ন", "a": "শে + অন"}, {"label": "চ", "q": "সম্মান", "a": "সম্ + মান"}]},

  {"id": "job-2025-tech-madrasah-office-asst-q06", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 6, "marks": 2, "type": "table", "question": "শব্দগুলোর শুদ্ধরূপ লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["রমনিয়", "রমণীয়"], ["প্রবাহীনী", "প্রবাহিণী"], ["লাবন্যময়", "লাবণ্যময়"], ["মনহোর", "মনোহর"]]},

  {"id": "job-2025-tech-madrasah-office-asst-q07", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "শব্দের উৎস", "qno": 7, "marks": 2, "type": "sub-parts", "question": "শব্দগুলো কোন ভাষা থেকে বাংলা ভাষায় এসেছে?", "parts": [{"label": "ক", "q": "দোকান", "a": "ফারসি"}, {"label": "খ", "q": "ক্রিকেট", "a": "ইংরেজি"}, {"label": "গ", "q": "আদালত", "a": "আরবি"}, {"label": "ঘ", "q": "টেক্কা", "a": "ওলন্দাজ"}]},

  {"id": "job-2025-tech-madrasah-office-asst-q08", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "সাহিত্য", "qno": 8, "marks": 2, "type": "paragraph", "question": "মহাকাব্য 'মহাশ্মশান' রচনাকারীর সংক্ষিপ্ত নাম ও প্রকৃত নাম কী?", "answer": "সংক্ষিপ্ত নাম: কায়কোবাদ; প্রকৃত নাম: কাজেম আল কোরেশী"},

  {"id": "job-2025-tech-madrasah-office-asst-q09", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "সংখ্যাবাচক শব্দ", "qno": 9, "marks": 2, "type": "paragraph", "question": "১ অঙ্ক বা সংখ্যার পূরণবাচক ও তারিখবাচক সংখ্যা লিখুন।", "answer": "১ এর পূরণবাচক সংখ্যা = প্রথম; ১ এর তারিখবাচক সংখ্যা = ১লা/পহেলা"},

  {"id": "job-2025-tech-madrasah-office-asst-q10", "examId": "job-2025-tech-madrasah-office-asst", "subject": "bangla", "topic": "বচন", "qno": 10, "marks": 2, "type": "table", "question": "শব্দগুলোর বহুবচন শব্দ লিখুনঃ", "columns": ["একবচন", "বহুবচন"], "rows": [["পাখি", "পাখিসব"], ["ভাই", "ভাইসব"], ["মাতৃ", "মাতৃকুল"], ["জন", "জনগণ"]]},

  {"id": "job-2025-tech-madrasah-office-asst-q11", "examId": "job-2025-tech-madrasah-office-asst", "subject": "english", "topic": "fill-in-the-blanks", "qno": 11, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "One should be careful about …. duty.", "answer": "one's"}, {"sentence": "The plural form of the word 'sheep' is ……", "answer": "sheep"}, {"sentence": "The singular form of the word 'bacteria' is…….", "answer": "bacterium"}, {"sentence": "I trusted the work……him.", "answer": "to"}, {"sentence": "Neither Rini nor Shimi……qualified for the job.", "answer": "is/was"}]},

  {"id": "job-2025-tech-madrasah-office-asst-q12", "examId": "job-2025-tech-madrasah-office-asst", "subject": "english", "topic": "grammar", "qno": 12, "marks": 5, "type": "sentence-change", "question": "Correct the following sentences:", "parts": [{"label": "a", "original": "See the word in the dictionary.", "changed": "Look up the word in the dictionary."}, {"label": "b", "original": "The train is running in time.", "changed": "The train is running on time."}, {"label": "c", "original": "He learnt the alphabets at the age of four.", "changed": "He learnt the alphabet at the age of four."}, {"label": "d", "original": "Stop to writing.", "changed": "Stop writing."}, {"label": "e", "original": "It is I who is guilty.", "changed": "It is I who am guilty."}]},

  {"id": "job-2025-tech-madrasah-office-asst-q13", "examId": "job-2025-tech-madrasah-office-asst", "subject": "english", "topic": "idioms-and-phrases", "qno": 13, "marks": 5, "type": "idiom", "question": "Make sentences with the Bangla meaning of the following idioms and phrases:", "parts": [{"label": "a", "phrase": "Die out", "meaning": "অদৃশ্য হওয়া", "example": "It's a custom which is beginning to die out."}, {"label": "b", "phrase": "For good", "meaning": "চিরতরে", "example": "She left the country for good."}, {"label": "c", "phrase": "Make up", "meaning": "পরিপূর্ণ করা", "example": "It is not possible to make up the loss."}, {"label": "d", "phrase": "On the instant", "meaning": "তৎক্ষণাৎ", "example": "The doctor arrived on the instant after getting the call."}, {"label": "e", "phrase": "Stone's throw", "meaning": "নিকটে", "example": "Our school is at stone's throw from our house."}]},

  {"id": "job-2025-tech-madrasah-office-asst-q14", "examId": "job-2025-tech-madrasah-office-asst", "subject": "english", "topic": "translation", "qno": 14, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "তুমি আমার ভাইয়ের বন্ধু, নয় কি?", "target": "You are my brother's friend, aren't you?"}, {"label": "খ", "source": "গাড়ী আসার পূর্বে আমি আমার টিফিন কিনে ফেলব।", "target": "I will buy my tiffin before the car arrives."}, {"label": "গ", "source": "সে হাসতে হাসতে ঘরে ঢুকল।", "target": "He entered the room laughing."}, {"label": "ঘ", "source": "সফল না হওয়া পর্যন্ত চেষ্টা করা উচিত।", "target": "You should try until you succeed."}, {"label": "ঙ", "source": "ইচ্ছা থাকলে উপায় হয়।", "target": "Where there's a will, there's a way."}]},

  {"id": "job-2025-tech-madrasah-office-asst-q15", "examId": "job-2025-tech-madrasah-office-asst", "subject": "english", "topic": "grammar", "qno": 15, "marks": 5, "type": "fill-gaps", "question": "Use the right form of the verb in the following sentences:", "parts": [{"sentence": "They (play) at this moment.", "answer": "are playing"}, {"sentence": "I (see) him recently.", "answer": "have seen"}, {"sentence": "He made me to (do) the work.", "answer": "do"}, {"sentence": "Either he or his brother (be) guilty.", "answer": "is/was"}, {"sentence": "A pair of shoes (be) on the table.", "answer": "is/was"}]},

  {"id": "job-2025-tech-madrasah-office-asst-q16", "examId": "job-2025-tech-madrasah-office-asst", "subject": "math", "topic": "জ্যামিতি", "qno": 16, "marks": 3, "type": "math", "question": "একটি ত্রিভুজের ভূমি তার উচ্চতার দ্বিগুণ অপেক্ষা ৬ সে.মি. বেশি। ত্রিভুজক্ষেত্রের ক্ষেত্রফল ৮১০ বর্গ সে.মি. হলে এর উচ্চতা কত?", "steps": ["মনে করি, ত্রিভুজের উচ্চতা = ক সে.মি; ভূমি = (২ক + ৬) সে.মি", "প্রশ্নমতে, ১/২ × (২ক + ৬) × ক = ৮১০", "বা, ২ক² + ৬ক = ১৬২০", "বা, ক² + ৩ক − ৮১০ = ০", "বা, ক² + ৩০ক − ২৭ক − ৮১০ = ০", "বা, ক(ক + ৩০) − ২৭(ক + ৩০) = ০", "বা, (ক + ৩০)(ক − ২৭) = ০", "ক + ৩০ = ০ ⇒ ক = −৩০ (গ্রহণযোগ্য নয়); অথবা ক − ২৭ = ০ ⇒ ক = ২৭"], "answer": "২৭ সে.মি"},

  {"id": "job-2025-tech-madrasah-office-asst-q17", "examId": "job-2025-tech-madrasah-office-asst", "subject": "math", "topic": "ধারা", "qno": 17, "marks": 3, "type": "math", "question": "১ + ৫ + ৯ + ⋯ + ১৬১ = কত?", "steps": ["ধারাটির প্রথম পদ a = ১, সাধারণ অন্তর d = ৫ − ১ = ৪, শেষ পদ = ১৬১ (সমান্তর ধারা)", "মনে করি, ধারাটির n তম পদ = ১৬১; আমরা জানি, nতম পদ = a + (n−1)d", "১ + (n−1)৪ = ১৬১ ⇒ ৪n − ৩ = ১৬১ ⇒ n = ৪১", "৪১টি পদের সমষ্টি S₄₁ = ৪১/২ × {২×১ + (৪১−১)×৪} = ৪১/২ × (২ + ১৬০) = ৪১ × ৮১", "= ৩৩২১"], "answer": "৩৩২১"},

  {"id": "job-2025-tech-madrasah-office-asst-q18", "examId": "job-2025-tech-madrasah-office-asst", "subject": "math", "topic": "মুনাফা-আসল", "qno": 18, "marks": 3, "type": "math", "question": "শতকরা বার্ষিক যে হারে কোনো মূলধন ৬ বছরে মুনাফা-মূলধনে দ্বিগুণ হয়, সেই হারে কত টাকা ৪ বছরে মুনাফা-মূলধনে ২০৫০ টাকা হবে?", "steps": ["মূলধন ১০০ টাকা ধরলে, মুনাফা-মূলধনে দ্বিগুণ = ২০০ টাকা ⇒ ৬ বছরের মুনাফা = ১০০ টাকা", "∴ ১ বছরের মুনাফা = ১০০/৬ টাকা; ৪ বছরের মুনাফা = ১০০ × ৪/৬ = ২০০/৩ টাকা", "৪ বছরে মুনাফা-মূলধন = ১০০ + ২০০/৩ = ৫০০/৩ টাকা", "মুনাফা-মূলধন ৫০০/৩ টাকা হলে মূলধন ১০০ টাকা", "মুনাফা-মূলধন ২০৫০ টাকা হলে মূলধন = ১০০ × ৩ × ২০৫০ / ৫০০ = ১২৩০ টাকা"], "answer": "১২৩০ টাকা", "alternative": {"steps": ["প্রথম ক্ষেত্রে, সময় n = ৬ বছর; মূলধন P টাকা, মুনাফার হার r%", "৬ বছরের মুনাফা-মূলধন A = ২P; ∴ মুনাফা I = ২P − P = P", "আমরা জানি, I = Prn ⇒ r = I/Pn = P/(P×৬) = ১/৬ = ৫০/৩ %", "দ্বিতীয় ক্ষেত্রে, মূলধন P টাকা, সময় n = ৪ বছর, মুনাফা-মূলধন A = ২০৫০ টাকা", "মুনাফা I = ২০৫০ − P; I = Prn ⇒ ২০৫০ − P = P × (৫০/৩)/১০০ × ৪ = ২P/৩", "বা, ৬১৫০ − ৩P = ২P ⇒ ৫P = ৬১৫০ ⇒ P = ১২৩০"], "answer": "১২৩০ টাকা"}},

  {"id": "job-2025-tech-madrasah-office-asst-q19", "examId": "job-2025-tech-madrasah-office-asst", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 19, "marks": 3, "type": "math", "question": "প্রতিটি ৩৬০০ টাকা করে দুটি চেয়ার বিক্রয় করা হয়েছে। একটিতে ২০% লাভ হয় এবং অন্যটিতে ২০% ক্ষতি হলে মোট লাভ বা ক্ষতি কত?", "steps": ["২০% লাভে বিক্রয়মূল্য = ১২০ টাকা হলে ক্রয়মূল্য ১০০ টাকা", "বিক্রয়মূল্য ৩৬০০ টাকা হলে ক্রয়মূল্য = ১০০ × ৩৬০০/১২০ = ৩০০০ টাকা", "২০% ক্ষতিতে বিক্রয়মূল্য = ৮০ টাকা হলে ক্রয়মূল্য ১০০ টাকা", "বিক্রয়মূল্য ৩৬০০ টাকা হলে ক্রয়মূল্য = ১০০ × ৩৬০০/৮০ = ৪৫০০ টাকা", "চেয়ার দুটির মোট ক্রয়মূল্য = ৩০০০ + ৪৫০০ = ৭৫০০ টাকা", "চেয়ার দুটির মোট বিক্রয়মূল্য = ৩৬০০ + ৩৬০০ = ৭২০০ টাকা", "∴ ক্ষতি = ৭৫০০ − ৭২০০ = ৩০০ টাকা"], "answer": "৩০০ টাকা ক্ষতি"},

  {"id": "job-2025-tech-madrasah-office-asst-q20", "examId": "job-2025-tech-madrasah-office-asst", "subject": "math", "topic": "বীজগণিত", "qno": 20, "marks": 3, "type": "math", "question": "৩/x + ৪/(x+1) = ২ হলে x এর মান কত?", "steps": ["৩/x + ৪/(x+1) = ২", "বা, {৩(x+1) + ৪x} / {x(x+1)} = ২", "বা, ৩x + ৩ + ৪x = ২x² + ২x", "বা, ২x² − ৫x − ৩ = ০", "বা, ২x² − ৬x + x − ৩ = ০", "বা, ২x(x−৩) + ১(x−৩) = ০", "বা, (x−৩)(২x+১) = ০", "x − ৩ = ০ ⇒ x = ৩; অথবা ২x + ১ = ০ ⇒ x = −১/২"], "answer": "x = ৩, অথবা x = −১/২"},

  {"id": "job-2025-tech-madrasah-office-asst-q21", "examId": "job-2025-tech-madrasah-office-asst", "subject": "math", "topic": "পাটিগণিত", "qno": 21, "marks": 3, "type": "math", "question": "মনির সাহেবের মূল বেতন ৪৩১৭০ টাকা। বার্ষিক মোট আয়ের ২৫০০০০ টাকা পর্যন্ত আয়কর মুক্ত। পরবর্তী আয়ের উপর আয়করের হার ১০% হলে মনির সাহেবের বছরে কত টাকা আয়কর দিতে হবে?", "steps": ["১ মাসের মূল বেতন ৪৩১৭০ টাকা ⇒ ১২ মাসের বেতন = ৪৩১৭০ × ১২ = ৫১৮০৪০ টাকা", "করযোগ্য আয় = ৫১৮০৪০ − ২৫০০০০ = ২৬৮০৪০ টাকা", "১০০ টাকায় আয়কর ১০ টাকা হলে, ২৬৮০৪০ টাকায় আয়কর = ১০ × ২৬৮০৪০/১০০ = ২৬৮০৪ টাকা"], "answer": "২৬৮০৪ টাকা"},

  {"id": "job-2025-tech-madrasah-office-asst-q22", "examId": "job-2025-tech-madrasah-office-asst", "subject": "math", "topic": "বর্গমূল", "qno": 22, "marks": 2, "type": "math", "question": "কোন সংখ্যার বর্গমূলের সাথে ১০ যোগ করলে যোগফল ৪ এর বর্গ হবে?", "steps": ["মনে করি, সংখ্যাটি ক", "প্রশ্নমতে, √ক + ১০ = ৪²", "বা, √ক = ১৬ − ১০ = ৬", "∴ ক = ৬² = ৩৬"], "answer": "৩৬"},

  {"id": "job-2025-tech-madrasah-office-asst-q23", "examId": "job-2025-tech-madrasah-office-asst", "subject": "general-knowledge", "topic": "gk-others", "qno": 23, "marks": 20, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "১", "q": "কম্পিউটার ভাইরাস কী?", "a": "এক ধরনের ক্ষতিকর প্রোগ্রাম"}, {"label": "২", "q": "চারটি আউটপুট ডিভাইসের নাম লিখুন।", "a": "মনিটর, প্রিন্টার, স্পিকার, প্রজেক্টর"}, {"label": "৩", "q": "দুইটি অপারেটিং সিস্টেমের নাম লিখুন।", "a": "Windows, Linux"}, {"label": "৪", "q": "বিজয় লে-আউটে 'জ্ঞ' বর্ণটি লিখতে কীবোর্ডের কোন ইংরেজি বর্ণ চাপতে হবে?", "a": "U + G + Shift + I"}, {"label": "৫", "q": "চারটি প্রোগ্রামিং ভাষার নাম লিখুন।", "a": "জাভা, পাইথন, সি++, ফরট্রান"}, {"label": "৬", "q": "পানির pH মান বলতে কী বোঝায়?", "a": "পানির অম্ল বা ক্ষার বা নিরপেক্ষ অবস্থার নির্দেশক"}, {"label": "৭", "q": "LNG এর পূর্ণরূপ কী?", "a": "Liquefied Natural Gas"}, {"label": "৮", "q": "শিক্ষা কী?", "a": "শিক্ষা হলো জ্ঞান, অভিজ্ঞতা, দক্ষতা ও মূল্যবোধ অর্জনের একটি পদ্ধতিগত প্রক্রিয়া, যা একজন ব্যক্তির সম্ভাবনার পূর্ণ বিকাশ ঘটাতে সাহায্য করে ও তাকে সমাজের একজন উৎপাদনশীল ও দায়িত্বশীল সদস্য হিসেবে প্রতিষ্ঠিত করে"}, {"label": "৯", "q": "বিনিয়োগ কাকে বলে?", "a": "বর্তমান ভোগ ত্যাগ করে ভবিষ্যতে অধিক মুনাফা বা আয় লাভের জন্য মূলধন ব্যয় করাকে বিনিয়োগ বলে"}, {"label": "১০", "q": "জাতিসংঘের সদর দপ্তর কোথায়?", "a": "নিউইয়র্ক, যুক্তরাষ্ট্র"}, {"label": "১১", "q": "কোনটির কারণে দিবারাত্রি সংঘটিত হয়?", "a": "আহ্নিক গতি"}, {"label": "১২", "q": "বৈদ্যুতিক পাখা ধীরে ধীরে ঘুরলে বিদ্যুৎ খরচের কী পরিবর্তন হয়?", "a": "কোনো পরিবর্তন হয় না"}, {"label": "১৩", "q": "আরবি সাহিত্যে একমাত্র নোবেল বিজয়ী মুসলিম কে?", "a": "নাগীব মাহফুজ"}, {"label": "১৪", "q": "বাংলাদেশের সাংবিধানিক পদ কয়টি? দুইটি পদের নাম লিখুন।", "a": "বাংলাদেশের সাংবিধানিক পদ ১০টি; যেমন — রাষ্ট্রপতি, প্রধানমন্ত্রী (এছাড়া মন্ত্রী, প্রতিমন্ত্রী, উপমন্ত্রী)"}]},

  {"id": "job-2025-bof-tech-helper-q01", "examId": "job-2025-bof-tech-helper", "subject": "bangla", "topic": "সন্ধি", "qno": 1, "marks": 3, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "শয়ন", "a": "শে + অন"}, {"label": "খ", "q": "ষষ্ঠ", "a": "ষষ্ + থ"}]},

  {"id": "job-2025-bof-tech-helper-q02", "examId": "job-2025-bof-tech-helper", "subject": "bangla", "topic": "বাগধারা", "qno": 2, "marks": 3, "type": "idiom", "question": "বাগধারাগুলোর অর্থ লিখুনঃ", "parts": [{"label": "ক", "phrase": "ভূষণ্ডির কাক", "meaning": "দীর্ঘায়ু ব্যক্তি"}, {"label": "খ", "phrase": "ইঁদুর কপালে", "meaning": "মন্দভাগ্য"}]},

  {"id": "job-2025-bof-tech-helper-q03", "examId": "job-2025-bof-tech-helper", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 3, "marks": 3, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "যে শুনেই মনে রাখতে পারে", "a": "শ্রুতিধর"}, {"label": "খ", "q": "যা বলা হয়নি", "a": "অনুক্ত"}]},

  {"id": "job-2025-bof-tech-helper-q04", "examId": "job-2025-bof-tech-helper", "subject": "bangla", "topic": "ব্যাকরণ", "qno": 4, "marks": 2, "type": "paragraph", "question": "বাংলা ভাষায় ব্যঞ্জনবর্ণ কয়টি?", "answer": "৩৯টি"},

  {"id": "job-2025-bof-tech-helper-q05", "examId": "job-2025-bof-tech-helper", "subject": "bangla", "topic": "সমাস", "qno": 5, "marks": 2, "type": "paragraph", "question": "'মহারাজ' কোন সমাস?", "answer": "কর্মধারয় সমাস (মহান যে রাজা)"},

  {"id": "job-2025-bof-tech-helper-q06", "examId": "job-2025-bof-tech-helper", "subject": "english", "topic": "grammar", "qno": 6, "marks": 3, "type": "sentence-change", "question": "Correct the sentence:", "parts": [{"label": "a", "original": "He is sleeping for two hours.", "changed": "He has been sleeping for two hours."}, {"label": "b", "original": "We are playing tennis everyday.", "changed": "We play tennis everyday."}]},

  {"id": "job-2025-bof-tech-helper-q07", "examId": "job-2025-bof-tech-helper", "subject": "english", "topic": "translation", "qno": 7, "marks": 3, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "সে তিনদিন যাবৎ জ্বরে ভুগছে।", "target": "He has been suffering from fever for three days."}, {"label": "খ", "source": "দশটা বাজতে বিশ মিনিট বাকি।", "target": "It is twenty minutes to ten."}]},

  {"id": "job-2025-bof-tech-helper-q08", "examId": "job-2025-bof-tech-helper", "subject": "english", "topic": "fill-in-the-blanks", "qno": 8, "marks": 3, "type": "fill-gaps", "question": "Fill in the blanks with preposition:", "parts": [{"sentence": "I am sure……... his success.", "answer": "of"}, {"sentence": "He left……. home.", "answer": "for"}]},

  {"id": "job-2025-bof-tech-helper-q09", "examId": "job-2025-bof-tech-helper", "subject": "english", "topic": "grammar", "qno": 9, "marks": 3, "type": "sub-parts", "question": "Change the gender:", "parts": [{"label": "a", "q": "Lord", "a": "Lady"}, {"label": "b", "q": "Bridegroom", "a": "Bride"}]},

  {"id": "job-2025-bof-tech-helper-q10", "examId": "job-2025-bof-tech-helper", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 10, "marks": 2, "type": "math", "question": "২০০ টাকায় একটি দ্রব্য ক্রয় করে ২৪% ক্ষতিতে বিক্রয় করা হলো। দ্রব্যটির বিক্রয়মূল্য কত?", "steps": ["২৪% ক্ষতিতে বিক্রয়মূল্য = ১০০ − ২৪ = ৭৬ টাকা", "ক্রয়মূল্য ১০০ টাকা হলে বিক্রয়মূল্য ৭৬ টাকা", "ক্রয়মূল্য ২০০ টাকা হলে বিক্রয়মূল্য = ৭৬ × ২০০/১০০ = ১৫২ টাকা"], "answer": "১৫২ টাকা"},

  {"id": "job-2025-bof-tech-helper-q11", "examId": "job-2025-bof-tech-helper", "subject": "math", "topic": "বীজগণিত", "qno": 11, "marks": 2, "type": "math", "question": "x + y = ৭ এবং xy = ১০ হলে, x² + y² + ৫xy এর মান কত?", "steps": ["প্রদত্ত রাশি = x² + y² + ৫xy", "= (x + y)² − ২xy + ৫xy = (x + y)² + ৩xy", "= (৭)² + ৩ × ১০ [মান বসিয়ে]", "= ৪৯ + ৩০ = ৭৯"], "answer": "৭৯"},

  {"id": "job-2025-bof-tech-helper-q12", "examId": "job-2025-bof-tech-helper", "subject": "math", "topic": "জ্যামিতি", "qno": 12, "marks": 3, "type": "math", "question": "একটি আয়তাকার ঘরের দৈর্ঘ্য প্রস্থের ১.৫ গুণ এবং এর ক্ষেত্রফল ২১৬ বর্গমিটার। তার পরিসীমা কত?", "steps": ["মনে করি, আয়তাকার ক্ষেত্রের প্রস্থ = x মিটার; ∴ দৈর্ঘ্য = ১.৫x মিটার", "∴ ক্ষেত্রফল = ১.৫x × x = ১.৫x² বর্গমিটার", "শর্তমতে, ১.৫x² = ২১৬ ⇒ x² = ২১৬/১.৫ = ১৪৪ ⇒ x = √১৪৪ = ১২", "∴ প্রস্থ = ১২ মিটার; দৈর্ঘ্য = ১.৫ × ১২ = ১৮ মিটার", "∴ পরিসীমা = ২(দৈর্ঘ্য + প্রস্থ) = ২(১৮ + ১২) = ২ × ৩০ = ৬০ মিটার"], "answer": "৬০ মিটার"},

  {"id": "job-2025-bof-tech-helper-q13", "examId": "job-2025-bof-tech-helper", "subject": "general-knowledge", "topic": "gk-others", "qno": 13, "marks": 8, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর করুনঃ", "parts": [{"label": "ক", "q": "আন্তর্জাতিক নারী দিবস কবে?", "a": "০৮ মার্চ"}, {"label": "খ", "q": "টাঙ্গুয়ার হাওর কোথায় অবস্থিত?", "a": "সুনামগঞ্জ"}, {"label": "গ", "q": "'শেষের কবিতা'র লেখক কে?", "a": "রবীন্দ্রনাথ ঠাকুর"}, {"label": "ঘ", "q": "বাংলাদেশের সর্বোচ্চ রাষ্ট্রীয় পদক কোনটি?", "a": "স্বাধীনতা পুরস্কার"}, {"label": "ঙ", "q": "'সোয়াচ অব নো গ্রাউন্ড' কোথায় অবস্থিত?", "a": "বঙ্গোপসাগরে"}, {"label": "চ", "q": "বাংলাদেশকে স্বীকৃতিদানকারী প্রথম দেশ কোনটি?", "a": "ভুটান"}, {"label": "ছ", "q": "রাশিয়ার রাজধানীর নাম কী?", "a": "মস্কো"}, {"label": "জ", "q": "পদ্মা সেতুর দৈর্ঘ্য কত?", "a": "৬.১৫ কিলোমিটার"}]},

  {"id": "job-2025-coast-guard-support-sep-q01", "examId": "job-2025-coast-guard-support-sep", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 1, "marks": 4, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "উড়ে যাচ্ছে যা", "a": "উড়ন্ত"}, {"label": "খ", "q": "যার নাম জানা যায়নি", "a": "অজ্ঞাত"}, {"label": "গ", "q": "পরের সাহায্যে যে জীবন ধারণ করে", "a": "পরান্নজীবী"}, {"label": "ঘ", "q": "দমন করা যায় না যা", "a": "অদম্য"}]},

  {"id": "job-2025-coast-guard-support-sep-q02", "examId": "job-2025-coast-guard-support-sep", "subject": "bangla", "topic": "বাগধারা", "qno": 2, "marks": 4, "type": "idiom", "question": "নিচের বাগধারাগুলোর অর্থ লিখুনঃ", "parts": [{"label": "ক", "phrase": "আকাশ থেকে পড়া", "meaning": "অপ্রত্যাশিত"}, {"label": "খ", "phrase": "ভুঁইফোড়", "meaning": "নতুন আগমন/অর্বাচীন"}, {"label": "গ", "phrase": "সাত সতের", "meaning": "বিচিত্র রকমের"}, {"label": "ঘ", "phrase": "রুই কাতলা", "meaning": "নেতৃস্থানীয় ব্যক্তি"}]},

  {"id": "job-2025-coast-guard-support-sep-q03", "examId": "job-2025-coast-guard-support-sep", "subject": "bangla", "topic": "সমার্থক শব্দ", "qno": 3, "marks": 4, "type": "sub-parts", "question": "দুটি করে সমার্থক শব্দ লিখুনঃ", "parts": [{"label": "ক", "q": "ফুল", "a": "ফুল, প্রসূন"}, {"label": "খ", "q": "ভ্রমর", "a": "ভোমরা, অলি, শিলীমুখ"}, {"label": "গ", "q": "আনন্দ", "a": "হর্ষ, পুলক, আহ্লাদ, সুখ"}, {"label": "ঘ", "q": "আঁধার", "a": "অন্ধকার, তিমির, শর্বর"}]},

  {"id": "job-2025-coast-guard-support-sep-q04", "examId": "job-2025-coast-guard-support-sep", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 4, "marks": 4, "type": "table", "question": "বানান শুদ্ধ করুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["আকাংখা", "আকাঙ্ক্ষা"], ["মুলতঃ", "মূলত"], ["রূপালী", "রূপালি"], ["নিয়মাবলী", "নিয়মাবলি"]]},

  {"id": "job-2025-coast-guard-support-sep-q05", "examId": "job-2025-coast-guard-support-sep", "subject": "bangla", "topic": "সন্ধি", "qno": 5, "marks": 4, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "মৃন্ময়", "a": "মৃৎ + ময়"}, {"label": "খ", "q": "অন্যান্য", "a": "অন্য + অন্য"}, {"label": "গ", "q": "শুভেচ্ছা", "a": "শুভ + ইচ্ছা"}, {"label": "ঘ", "q": "প্রতীক্ষা", "a": "প্রতি + ঈক্ষা"}]},

  {"id": "job-2025-coast-guard-support-sep-q06", "examId": "job-2025-coast-guard-support-sep", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "I shall….. a cup of tea.", "answer": "have"}, {"sentence": "He is….. weak to walk.", "answer": "too"}, {"sentence": "I have not seen him….. Tuesday last.", "answer": "since"}, {"sentence": "I live…. Dhaka.", "answer": "in"}, {"sentence": "There is a time difference……. Bangladesh & USA.", "answer": "between"}]},

  {"id": "job-2025-coast-guard-support-sep-q07", "examId": "job-2025-coast-guard-support-sep", "subject": "english", "topic": "grammar", "qno": 7, "marks": 5, "type": "sentence-change", "question": "Correct the following sentences:", "parts": [{"label": "a", "original": "One should do his duty.", "changed": "One should do one's duty."}, {"label": "b", "original": "He came here by foot.", "changed": "He came here on foot."}, {"label": "c", "original": "What fool he is.", "changed": "What a fool he is!"}, {"label": "d", "original": "He is known by me.", "changed": "He is known to me."}, {"label": "e", "original": "I do not know that why he was absent.", "changed": "I do not know why he was absent."}]},

  {"id": "job-2025-coast-guard-support-sep-q08", "examId": "job-2025-coast-guard-support-sep", "subject": "english", "topic": "translation", "qno": 8, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "আমি কলা খেতে পছন্দ করি।", "target": "I like to eat bananas."}, {"label": "খ", "source": "আমি তোমার চিঠি পেয়েছি।", "target": "I have received your letter."}, {"label": "গ", "source": "আমরা তাকে হাসতে দেখলাম।", "target": "We saw him laughing."}, {"label": "ঘ", "source": "আমি বাংলাদেশ কোস্ট গার্ডে যোগদানে আগ্রহী।", "target": "I am interested in joining the Bangladesh Coast Guard."}, {"label": "ঙ", "source": "সদা সত্য কথা বলব।", "target": "I shall always speak the truth."}]},

  {"id": "job-2025-coast-guard-support-sep-q09", "examId": "job-2025-coast-guard-support-sep", "subject": "english", "topic": "paragraph", "qno": 9, "marks": 5, "type": "paragraph", "question": "Write a paragraph on 'The Rainy Season'", "answer": "There are six seasons in Bangladesh, and the rainy season is one of them. The rainy season is an important season in Bangladesh, which usually starts in June and lasts until September. It comes after the hot summer and brings cool air and heavy rainfall. During this season, big dark clouds cover the sky, and sometimes it rains for many days. Trees, grass, and fields become green and fresh, making nature very beautiful. Farmers eagerly wait for the rainy season because crops like rice and jute need plenty of water to grow well. Rivers, lakes, and ponds fill up with water, which helps irrigation and fish farming. Children enjoy playing in the rain and making paper boats. However, too much rain can cause floods, waterlogging, and diseases, which create problems for people and animals. Despite these difficulties, the rainy season is very important for agriculture, nature, and ecological balance."},

  {"id": "job-2025-coast-guard-support-sep-q10", "examId": "job-2025-coast-guard-support-sep", "subject": "math", "topic": "কাজ ও সময়", "qno": 10, "marks": 5, "type": "math", "question": "ক ও খ একত্রে একটি কাজ ১২ দিনে করতে পারে। ক একা ২০ দিনে করতে পারে। খ একা কাজটি কত দিনে করতে পারবে?", "steps": ["ক ও খ একত্রে ১ দিনে করে ১/১২ অংশ কাজ", "ক একা ১ দিনে করে ১/২০ অংশ কাজ", "∴ খ একা ১ দিনে করে = (১/১২ − ১/২০) অংশ কাজ = (৫−৩)/৬০ = ২/৬০ = ১/৩০ অংশ কাজ", "১/৩০ অংশ কাজ করে ১ দিনে ⇒ সম্পূর্ণ (১) অংশ কাজ করে ৩০ দিনে"], "answer": "৩০ দিন"},

  {"id": "job-2025-coast-guard-support-sep-q11", "examId": "job-2025-coast-guard-support-sep", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 11, "marks": 5, "type": "math", "question": "একটি টেবিল ৮% ক্ষতিতে বিক্রয় করা হলো। বিক্রয়মূল্য ৮০০ টাকা বেশি হলে ৮% লাভ হতো। টেবিলটির ক্রয়মূল্য কত?", "steps": ["মনে করি, ক্রয়মূল্য ১০০ টাকা", "৮% ক্ষতিতে বিক্রয়মূল্য = ১০০ − ৮ = ৯২ টাকা", "৮% লাভে বিক্রয়মূল্য = ১০০ + ৮ = ১০৮ টাকা", "বিক্রয়মূল্যের পার্থক্য = ১০৮ − ৯২ = ১৬ টাকা", "বিক্রয়মূল্য ১৬ টাকা বেশি হলে ক্রয়মূল্য ১০০ টাকা", "বিক্রয়মূল্য ৮০০ টাকা বেশি হলে ক্রয়মূল্য = ১০০ × ৮০০/১৬ = ৫০০০ টাকা"], "answer": "৫০০০ টাকা"},

  {"id": "job-2025-coast-guard-support-sep-q12", "examId": "job-2025-coast-guard-support-sep", "subject": "math", "topic": "উৎপাদকে বিশ্লেষণ", "qno": 12, "marks": 5, "type": "math", "question": "উৎপাদকে বিশ্লেষণ করুনঃ 4x² − 23x + 33", "steps": ["4x² − 23x + 33", "= 4x² − 12x − 11x + 33", "= 4x(x − 3) − 11(x − 3)", "= (x − 3)(4x − 11)"], "answer": "(x − 3)(4x − 11)"},

  {"id": "job-2025-coast-guard-support-sep-q13", "examId": "job-2025-coast-guard-support-sep", "subject": "general-knowledge", "topic": "gk-others", "qno": 13, "marks": 15, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর করুনঃ", "parts": [{"label": "ক", "q": "PDF এর পূর্ণরূপ কী?", "a": "Portable Document Format"}, {"label": "খ", "q": "অফিস সহায়ক এর ইংরেজি কী?", "a": "Office Support Staff"}, {"label": "গ", "q": "বাংলাদেশের গভীর সমুদ্র বন্দর কোথায়?", "a": "মাতারবাড়ী সমুদ্র বন্দর, মহেশখালী"}, {"label": "ঘ", "q": "সৌরজগতের বৃহত্তম গ্রহ কোনটি?", "a": "বৃহস্পতি"}, {"label": "ঙ", "q": "বাংলাদেশের সমুদ্র উপকূলের দৈর্ঘ্য কত?", "a": "৭১১ কি.মি."}, {"label": "চ", "q": "সূর্যোদয়ের দেশ কোনটি?", "a": "জাপান"}, {"label": "ছ", "q": "'মেঘনাদবধ' কাব্যের রচয়িতা কে?", "a": "মাইকেল মধুসূদন দত্ত"}, {"label": "জ", "q": "পৃথিবীর বৃহত্তম মহাদেশের নাম কী?", "a": "এশিয়া"}, {"label": "ঝ", "q": "নেপালের রাজধানীর নাম কী?", "a": "কাঠমান্ডু"}, {"label": "ঞ", "q": "IMO এর পূর্ণরূপ কী?", "a": "International Maritime Organization"}, {"label": "ট", "q": "২০২৬ সালে বিশ্বকাপ ফুটবল কয়টি দেশে অনুষ্ঠিত হবে?", "a": "৩টি (যুক্তরাষ্ট্র, কানাডা ও মেক্সিকো)"}, {"label": "ঠ", "q": "বাংলাদেশের জাতীয় খেলা কী?", "a": "কাবাডি"}, {"label": "ড", "q": "পৃথিবীর দীর্ঘতম নদী কোনটি?", "a": "নীলনদ"}, {"label": "ঢ", "q": "বাংলাদেশ জাতিসংঘ সদস্যপদ লাভ করে কত সালে?", "a": "১৯৭৪ সালে"}, {"label": "ণ", "q": "বাংলাদেশের আয়তনে ছোট জেলা কোনটি?", "a": "নারায়ণগঞ্জ"}]},

  {"id": "job-2025-prison-computer-typist-q01", "examId": "job-2025-prison-computer-typist", "subject": "bangla", "topic": "সাহিত্য ও ব্যাকরণ", "qno": 1, "marks": 5, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর লিখুন।", "parts": [{"label": "ক", "q": "বাংলা সাহিত্যে প্রথম মহিলা ঔপন্যাসিকের নাম কী?", "a": "স্বর্ণকুমারী দেবী"}, {"label": "খ", "q": "'লাপাত্তা' শব্দের 'লা' উপসর্গটি কোন ভাষা থেকে এসেছে?", "a": "আরবি"}, {"label": "গ", "q": "'সকালে উঠিয়া আমি মনে মনে বলি, সারাদিন আমি যেন ভালো হয়ে চলি' — চরণ দুটির রচয়িতা কে?", "a": "মদনমোহন তর্কালঙ্কার"}, {"label": "ঘ", "q": "'সাত সাগরের মাঝি' কাব্যগ্রন্থের রচয়িতা কে?", "a": "ফররুখ আহমদ"}, {"label": "ঙ", "q": "'অন্নজনে দেহ আলো' — কোন কারকে কোন বিভক্তি?", "a": "সম্প্রদানে ৭মী"}]},

  {"id": "job-2025-prison-computer-typist-q02", "examId": "job-2025-prison-computer-typist", "subject": "bangla", "topic": "বাগধারা", "qno": 2, "marks": 5, "type": "idiom", "question": "নিম্নের বাগধারাগুলোর অর্থ লিখুন।", "parts": [{"label": "ক", "phrase": "শরতের শিশির", "meaning": "সুসময়ের বন্ধু/ক্ষণস্থায়ী"}, {"label": "খ", "phrase": "নেই আঁকড়া", "meaning": "একগুঁয়ে"}, {"label": "গ", "phrase": "আঠারো আনা", "meaning": "বাড়াবাড়ি"}, {"label": "ঘ", "phrase": "মিছরির ছুরি", "meaning": "মুখে মধু অন্তরে বিষ"}, {"label": "ঙ", "phrase": "শিরে সংক্রান্তি", "meaning": "সামনেই/আসন্ন বিপদ"}]},

  {"id": "job-2025-prison-computer-typist-q03", "examId": "job-2025-prison-computer-typist", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 3, "marks": 5, "type": "table", "question": "শুদ্ধ বানান লিখুন।", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["দ্বদ", "দ্বন্দ্ব"], ["মূমূর্ষু", "মুমূর্ষু"], ["শিরচ্ছেদ", "শিরশ্ছেদ"], ["বীভিষিকা", "বিভীষিকা"], ["মূহুর্ম", "মুহুর্মুহু"]]},

  {"id": "job-2025-prison-computer-typist-q04", "examId": "job-2025-prison-computer-typist", "subject": "bangla", "topic": "সন্ধি", "qno": 4, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুন।", "parts": [{"label": "ক", "q": "গবাক্ষ", "a": "গো + অক্ষ"}, {"label": "খ", "q": "রবীন্দ্র", "a": "রবি + ইন্দ্র"}, {"label": "গ", "q": "প্রত্যূষ", "a": "প্রতি + ঊষ"}, {"label": "ঘ", "q": "কুজ্ঝটিকা", "a": "কুৎ + ঝটিকা"}, {"label": "ঙ", "q": "দুষ্কর", "a": "দুঃ + কর"}]},

  {"id": "job-2025-prison-computer-typist-q05", "examId": "job-2025-prison-computer-typist", "subject": "english", "topic": "translation", "qno": 5, "marks": 5, "type": "translate", "question": "Translate into English.", "parts": [{"label": "ক", "source": "ঘণ্টা বাজার পূর্বে আমরা ক্লাসে প্রবেশ করলাম।", "target": "We had entered the class before the bell rang."}, {"label": "খ", "source": "রোগীটি এখন বিপদমুক্ত।", "target": "The patient is now out of danger."}, {"label": "গ", "source": "মেয়েটি যেমন সুন্দরী, তেমনি বুদ্ধিমতী।", "target": "The girl is as beautiful as intelligent."}, {"label": "ঘ", "source": "নিরক্ষরতা দূরীকরণে জনসচেতনতা প্রয়োজন।", "target": "Public awareness is necessary to eradicate illiteracy."}, {"label": "ঙ", "source": "তাকে নির্দোষ বলে মনে হয়।", "target": "He seems to be innocent."}]},

  {"id": "job-2025-prison-computer-typist-q06", "examId": "job-2025-prison-computer-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 5, "type": "fill-gaps", "question": "Fill in the gaps with appropriate words.", "parts": [{"sentence": "The teacher dwelled........ the subject.", "answer": "upon"}, {"sentence": "Students are concerned…… their result.", "answer": "for"}, {"sentence": "One dozen of bananas……. sufficient.", "answer": "is"}, {"sentence": "If I had money, I......... buy a shirt.", "answer": "would"}, {"sentence": "He does not know how to deal……. a gentleman.", "answer": "with"}]},

  {"id": "job-2025-prison-computer-typist-q07", "examId": "job-2025-prison-computer-typist", "subject": "english", "topic": "grammar", "qno": 7, "marks": 3, "type": "sentence-change", "question": "Change the voice.", "parts": [{"label": "a", "original": "Never deceive anyone.", "changed": "Let no one ever be deceived."}, {"label": "b", "original": "We should help the poor.", "changed": "The poor should be helped by us."}, {"label": "c", "original": "We ought to obey our parents.", "changed": "Our parents ought to be obeyed by us."}]},

  {"id": "job-2025-prison-computer-typist-q08", "examId": "job-2025-prison-computer-typist", "subject": "english", "topic": "spelling", "qno": 8, "marks": 4, "type": "table", "question": "Write the correct spelling.", "columns": ["Incorrect", "Correct"], "rows": [["Greivaence", "Grievance"], ["Comision", "Commission"], ["Contegeous", "Contagious"], ["Disentary", "Dysentery"]]},

  {"id": "job-2025-prison-computer-typist-q09", "examId": "job-2025-prison-computer-typist", "subject": "english", "topic": "idioms-and-phrases", "qno": 9, "marks": 4, "type": "idiom", "question": "Write the Bengali meaning of the following idioms and phrases.", "parts": [{"label": "a", "phrase": "Bad bargain", "meaning": "বাজে আচরণ", "example": "He made the best of a bad bargain."}, {"label": "b", "phrase": "Dead against", "meaning": "ঘোর বিরোধী", "example": "He is dead against me."}, {"label": "c", "phrase": "Eye to eye", "meaning": "একমত", "example": "He cannot be eye to eye with me on this matter."}, {"label": "d", "phrase": "Body and soul", "meaning": "পরিপূর্ণভাবে", "example": "He engaged himself body and soul in the pursuit of knowledge."}]},

  {"id": "job-2025-prison-computer-typist-q10", "examId": "job-2025-prison-computer-typist", "subject": "english", "topic": "grammar", "qno": 10, "marks": 3, "type": "fill-gaps", "question": "Fill in the gaps with the right form of verbs.", "parts": [{"sentence": "The page of the book (be)......... torn.", "answer": "is"}, {"sentence": "Had I been a poet, I (write).......... a book of poems.", "answer": "would have written"}, {"sentence": "I got the book (print)…….", "answer": "printed"}]},

  {"id": "job-2025-prison-computer-typist-q11", "examId": "job-2025-prison-computer-typist", "subject": "math", "topic": "বীজগণিত", "qno": 11, "marks": 5, "type": "math", "question": "x − 1/x = ৩ হলে, i) (x + 1/x)² এর মান কত? ii) দেখাও যে, x⁴ + 1/x⁴ = ১১৯", "steps": ["i) (x + 1/x)² = (x − 1/x)² + ৪.x.1/x = ৩² + ৪ = ১৩", "ii) দেওয়া আছে, x − 1/x = ৩", "(x − 1/x)² = ৩² ⇒ x² − ২ + 1/x² = ৯ ⇒ x² + 1/x² = ১১", "(x² + 1/x²)² = (১১)² ⇒ x⁴ + ২ + 1/x⁴ = ১২১", "∴ x⁴ + 1/x⁴ = ১২১ − ২ = ১১৯ (প্রমাণিত)"], "answer": "i) ১৩; ii) x⁴ + 1/x⁴ = ১১৯ (প্রমাণিত)"},

  {"id": "job-2025-prison-computer-typist-q12", "examId": "job-2025-prison-computer-typist", "subject": "math", "topic": "বীজগণিত", "qno": 12, "marks": 5, "type": "math", "question": "যদি x = ৯ + ৪√৫ হয়, তাহলে (√x − 1/√x)² এর মান কত?", "steps": ["দেওয়া আছে, x = ৯ + ৪√৫", "1/x = (৯ − ৪√৫)/{(৯+৪√৫)(৯−৪√৫)} = (৯−৪√৫)/(৮১−৮০) = ৯ − ৪√৫", "∴ x + 1/x = (৯+৪√৫) + (৯−৪√৫) = ১৮", "প্রদত্ত রাশি: (√x − 1/√x)² = x + 1/x − ২ = ১৮ − ২ = ১৬"], "answer": "১৬"},

  {"id": "job-2025-prison-computer-typist-q13", "examId": "job-2025-prison-computer-typist", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 13, "marks": 5, "type": "math", "question": "একজন দোকানদার কিছু ডাল ২৩৭৫ টাকায় বিক্রয় করায় তার ৫% ক্ষতি হলো। ঐ ডাল কত টাকায় বিক্রয় করলে তার ৬% লাভ হবে?", "steps": ["৫% ক্ষতিতে বিক্রয়মূল্য = ১০০ − ৫ = ৯৫ টাকা (ক্রয়মূল্য ১০০ টাকা হলে)", "বিক্রয়মূল্য ৯৫ টাকা হলে ক্রয়মূল্য ১০০ টাকা; বিক্রয়মূল্য ২৩৭৫ টাকা হলে ক্রয়মূল্য = ১০০ × ২৩৭৫/৯৫ = ২৫০০ টাকা", "৬% লাভে বিক্রয়মূল্য = ১০০ + ৬ = ১০৬ টাকা (ক্রয়মূল্য ১০০ টাকা হলে)", "ক্রয়মূল্য ২৫০০ টাকা হলে বিক্রয়মূল্য = ১০৬ × ২৫০০/১০০ = ২৬৫০ টাকা"], "answer": "২৬৫০ টাকা"},

  {"id": "job-2025-prison-computer-typist-q14", "examId": "job-2025-prison-computer-typist", "subject": "math", "topic": "জ্যামিতি", "qno": 14, "marks": 5, "type": "math", "question": "একটি আয়তাকার বাগানের দৈর্ঘ্য প্রস্থের দেড়গুণ। বাগানের ক্ষেত্রফল ৩৭৫০ বর্গমিটার। বাগানটি পরিচর্যা করার জন্য ঠিক মাঝ দিয়ে ৩ মিটার চওড়া দৈর্ঘ্য ও প্রস্থ বরাবর রাস্তা আছে। ক) বাগানের দৈর্ঘ্য ও প্রস্থ নির্ণয় করুন। খ) রাস্তাটি ২ বর্গমিটার পাথর দ্বারা বাঁধাই করতে মোট কতটি পাথর লাগবে?", "steps": ["ক) মনে করি, প্রস্থ = ক, দৈর্ঘ্য = ১.৫ক", "প্রশ্নমতে, ১.৫ক² = ৩৭৫০ ⇒ ক² = ২৫০০ ⇒ ক = ৫০", "∴ প্রস্থ = ৫০ মিটার, দৈর্ঘ্য = ১.৫ × ৫০ = ৭৫ মিটার", "খ) রাস্তাবাদে দৈর্ঘ্য = ৭৫ − ৩ = ৭২ মি.; রাস্তাবাদে প্রস্থ = ৫০ − ৩ = ৪৭ মি.", "রাস্তাবাদে ক্ষেত্রফল = ৭২ × ৪৭ = ৩৩৮৪ বর্গমিটার", "∴ রাস্তার মোট ক্ষেত্রফল = ৩৭৫০ − ৩৩৮৪ = ৩৬৬ বর্গমিটার", "২ বর্গমিটারে ১টি পাথর লাগলে, ৩৬৬ বর্গমিটারে পাথর লাগবে = ৩৬৬ ÷ ২ = ১৮৩টি"], "answer": "ক) দৈর্ঘ্য ৭৫ মিটার, প্রস্থ ৫০ মিটার।  খ) ১৮৩টি পাথর লাগবে।"},

  {"id": "job-2025-prison-computer-typist-q15", "examId": "job-2025-prison-computer-typist", "subject": "math", "topic": "গতিবেগ", "qno": 15, "marks": 5, "type": "math", "question": "১২০ মিটার দীর্ঘ একটি ট্রেন ৩৩০ মিটার দীর্ঘ একটি সেতু অতিক্রম করবে। ট্রেনটির গতিবেগ ঘণ্টায় ৩০ কি.মি. হলে, সেতুটি অতিক্রম করতে ট্রেনটির কত সময় লাগবে?", "steps": ["ট্রেনটিকে তার নিজের দৈর্ঘ্য ও সেতুর দৈর্ঘ্য মিলিয়ে মোট (১২০ + ৩৩০) = ৪৫০ মিটার অতিক্রম করতে হবে", "৩০ কি.মি./ঘণ্টা = ৩০০০০ মিটার/৩৬০০ সেকেন্ড", "৩০০০০ মিটার যেতে সময় লাগে ৩৬০০ সেকেন্ড", "∴ ৪৫০ মিটার যেতে সময় লাগবে = (৩৬০০ × ৪৫০) ÷ ৩০০০০ = ৫৪ সেকেন্ড"], "answer": "৫৪ সেকেন্ড"},

  {"id": "job-2025-prison-computer-typist-q16", "examId": "job-2025-prison-computer-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 15, "type": "short-qa", "question": "নিচের প্রশ্নগুলির উত্তর লিখুন।", "parts": [{"label": "ক", "q": "জাতিসংঘের মহাসচিব কোন দেশের অধিবাসী?", "a": "পর্তুগাল"}, {"label": "খ", "q": "প্রধান উপদেষ্টা কবে ৩ দিনের জন্য মালয়েশিয়া সফর করেন?", "a": "১১ আগস্ট ২০২৫"}, {"label": "গ", "q": "কোন বাংলাদেশি সাঁতারু সর্বপ্রথম ইংলিশ চ্যানেল পাড়ি দেন?", "a": "ব্রজেন দাস (১৯৫৮ সালের ১৮ আগস্ট)"}, {"label": "ঘ", "q": "VGF এর পূর্ণরূপ লিখ?", "a": "Vulnerable Group Feeding"}, {"label": "ঙ", "q": "মিয়ানমারের সাথে একমাত্র স্থলবন্দর কোথায় অবস্থিত?", "a": "টেকনাফ"}, {"label": "চ", "q": "কর্ণফুলী নদীর উৎপত্তিস্থল কোথায়?", "a": "মিজোরাম রাজ্যের লুসাই পাহাড়"}, {"label": "ছ", "q": "কাজী নজরুল ইসলামকে কবে জাতীয় কবির মর্যাদা দিয়ে গেজেট প্রকাশিত হয়?", "a": "২৪ ডিসেম্বর ২০২৪"}, {"label": "জ", "q": "বাংলাদেশে 'ইনভেস্টমেন্ট সামিট ২০২৫' এর আয়োজক কোন প্রতিষ্ঠান ছিল?", "a": "বাংলাদেশ বিনিয়োগ উন্নয়ন কর্তৃপক্ষ (বিডা)"}, {"label": "ঝ", "q": "সামরিক ভাষায় WMD এর অর্থ কী?", "a": "Weapons of Mass Destruction (গণবিধ্বংসী মরণাস্ত্র)"}, {"label": "ঞ", "q": "FIFA সভাপতির নাম কী?", "a": "জিয়ান্নি ইনফান্তিনো"}, {"label": "ট", "q": "'সবকটা জানালা খুলে দাও না' — এই গানটির গায়িকা কে?", "a": "সাবিনা ইয়াসমিন"}, {"label": "ঠ", "q": "মুক্তিযুদ্ধে 'ক্র্যাক প্লাটুন' কোন শহরে সক্রিয় ছিল?", "a": "ঢাকা শহরে"}, {"label": "ড", "q": "\"Pearls of Africa\" কোন দেশ?", "a": "উগান্ডা"}, {"label": "ঢ", "q": "উত্তর গোলার্ধে দীর্ঘতম দিন কবে?", "a": "২১ জুন"}, {"label": "ণ", "q": "নেপালের অন্তর্বর্তীকালীন সরকারপ্রধানের নাম কী?", "a": "সুশীলা কারকি"}]},

  {"id": "job-2025-bof-technician-q01", "examId": "job-2025-bof-technician", "subject": "bangla", "topic": "বাগধারা", "qno": 1, "marks": 3, "type": "idiom", "question": "বাগধারার অর্থ লিখুনঃ", "parts": [{"label": "ক", "phrase": "তামার বিষ", "meaning": "অর্থের কুপ্রভাব"}, {"label": "খ", "phrase": "এক ঘরের গিন্নি", "meaning": "কর্তৃত্ব"}]},

  {"id": "job-2025-bof-technician-q02", "examId": "job-2025-bof-technician", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 3, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "পদ্ধতি", "a": "পদ্ + হতি"}, {"label": "খ", "q": "যথেষ্ট", "a": "যথা + ইষ্ট"}]},

  {"id": "job-2025-bof-technician-q03", "examId": "job-2025-bof-technician", "subject": "bangla", "topic": "সমার্থক শব্দ", "qno": 3, "marks": 2, "type": "paragraph", "question": "'রবি' এর সমার্থক শব্দ লিখুন।", "answer": "ভানু, রবি, অর্ক"},

  {"id": "job-2025-bof-technician-q04", "examId": "job-2025-bof-technician", "subject": "bangla", "topic": "কারক ও বিভক্তি", "qno": 4, "marks": 2, "type": "paragraph", "question": "কারক ও বিভক্তি নির্ণয় করঃ 'কি করি আজ ভেবে না পাই।'", "answer": "অধিকরণে শূন্য"},

  {"id": "job-2025-bof-technician-q05", "examId": "job-2025-bof-technician", "subject": "english", "topic": "translation", "qno": 5, "marks": 3, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "আকাশ মেঘলা।", "target": "The sky is cloudy."}, {"label": "খ", "source": "আমি গতকাল এসেছি।", "target": "I came yesterday."}]},

  {"id": "job-2025-bof-technician-q06", "examId": "job-2025-bof-technician", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 4, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "He is suitable….. the post.", "answer": "for"}, {"sentence": "He is……university student.", "answer": "a"}, {"sentence": "If I were rich I…….. travel.", "answer": "would"}, {"sentence": "I wish I…….a child again.", "answer": "could be"}]},

  {"id": "job-2025-bof-technician-q07", "examId": "job-2025-bof-technician", "subject": "english", "topic": "grammar", "qno": 7, "marks": 3, "type": "sentence-change", "question": "Change the voice:", "parts": [{"label": "a", "original": "The news will shock you.", "changed": "You will be shocked at the news."}, {"label": "b", "original": "Never tell a lie.", "changed": "Let never a lie be told."}]},

  {"id": "job-2025-bof-technician-q08", "examId": "job-2025-bof-technician", "subject": "english", "topic": "idioms-and-phrases", "qno": 8, "marks": 2, "type": "idiom", "question": "Make sentences with idioms:", "parts": [{"label": "a", "phrase": "To and fro", "meaning": "এদিক সেদিক", "example": "He was running to and fro."}, {"label": "b", "phrase": "Out and out", "meaning": "পুরোপুরি", "example": "He is an out and out gentleman."}]},

  {"id": "job-2025-bof-technician-q09", "examId": "job-2025-bof-technician", "subject": "math", "topic": "বীজগণিত", "qno": 9, "marks": 5, "type": "math", "question": "a + b = ৩, ab = ২ হলে, a³ + b³ এর মান কত?", "steps": ["a³ + b³ = (a+b)³ − ৩ab(a+b)", "= ৩³ − ৩ × ২ × ৩", "= ২৭ − ১৮ = ৯"], "answer": "৯"},

  {"id": "job-2025-bof-technician-q10", "examId": "job-2025-bof-technician", "subject": "math", "topic": "জ্যামিতি", "qno": 10, "marks": 5, "type": "math", "question": "একটি চৌবাচ্চায় ৮০০০ লিটার পানি ধরে। চৌবাচ্চাটির দৈর্ঘ্য ২.৫৬ মিটার এবং প্রস্থ ১.২৫ মিটার হলে, গভীরতা কত?", "steps": ["চৌবাচ্চাটির তলার ক্ষেত্রফল = ২৫৬ সে.মি. × ১২৫ সে.মি. = ৩২০০০ বর্গ সে.মি.", "৮০০০ লিটার = ৮০০০ × ১০০০ ঘন সে.মি. = ৮০,০০,০০০ ঘন সে.মি. [১০০০ ঘন সে.মি. = ১ লিটার]", "∴ গভীরতা = ৮০,০০,০০০ ÷ ৩২০০০ সে.মি. = ২৫০ সে.মি. = ২.৫ মিটার"], "answer": "২.৫ মিটার"},

  {"id": "job-2025-bof-technician-q11", "examId": "job-2025-bof-technician", "subject": "math", "topic": "বীজগণিত", "qno": 11, "marks": 5, "type": "math", "question": "যদি a³ − b³ = ৫১৩ এবং a − b = ৩ হয়, তবে ab এর মান কত?", "steps": ["দেওয়া আছে, a³ − b³ = ৫১৩", "(a−b)³ + ৩ab(a−b) = ৫১৩", "৩³ + ৯ab = ৫১৩ ⇒ ৯ab = ৪৮৬", "∴ ab = ৫৪"], "answer": "৫৪"},

  {"id": "job-2025-bof-technician-q12", "examId": "job-2025-bof-technician", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 12, "marks": 5, "type": "math", "question": "একজন দোকানদার ১২% লাভে একটি জিনিস ৫৬ টাকায় বিক্রয় করেন, জিনিসটির ক্রয়মূল্য কত?", "steps": ["১২% লাভে বিক্রয়মূল্য = ১০০ + ১২ = ১১২ টাকা", "বিক্রয়মূল্য ১১২ টাকা হলে ক্রয়মূল্য ১০০ টাকা", "বিক্রয়মূল্য ৫৬ টাকা হলে ক্রয়মূল্য = ১০০ × ৫৬/১১২ = ৫০ টাকা"], "answer": "৫০ টাকা"},

  {"id": "job-2025-bof-technician-q13", "examId": "job-2025-bof-technician", "subject": "general-knowledge", "topic": "gk-others", "qno": 13, "marks": 4, "type": "paragraph", "question": "RAM কী?", "answer": "RAM (Random Access Memory) হচ্ছে একটি অস্থায়ী মেমরি।"},

  {"id": "job-2025-bof-technician-q14", "examId": "job-2025-bof-technician", "subject": "general-knowledge", "topic": "মুক্তিযুদ্ধ", "qno": 14, "marks": 3, "type": "paragraph", "question": "মুক্তিযুদ্ধের সময় নৌ সেক্টর কত নম্বর ছিল?", "answer": "১০ নং সেক্টর"},

  {"id": "job-2025-bof-technician-q15", "examId": "job-2025-bof-technician", "subject": "general-knowledge", "topic": "gk-others", "qno": 15, "marks": 3, "type": "paragraph", "question": "ভূমিকম্পের তীব্রতা মাপার যন্ত্রের নাম কী?", "answer": "সিসমোগ্রাফ"},

  {"id": "job-2025-bof-technician-q16", "examId": "job-2025-bof-technician", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 4, "type": "paragraph", "question": "AI কী?", "answer": "Artificial Intelligence (কৃত্রিম বুদ্ধিমত্তা)"},

  {"id": "job-2025-bof-technician-q17", "examId": "job-2025-bof-technician", "subject": "general-knowledge", "topic": "আন্তর্জাতিক", "qno": 17, "marks": 3, "type": "paragraph", "question": "সূর্যোদয়ের দেশ কোনটি?", "answer": "জাপান"},

  {"id": "job-2025-bof-technician-q18", "examId": "job-2025-bof-technician", "subject": "general-knowledge", "topic": "বাংলাদেশ", "qno": 18, "marks": 4, "type": "paragraph", "question": "বাংলাদেশের মোট সীমান্তবর্তী জেলার সংখ্যা কত?", "answer": "৩২টি"},

  {"id": "job-2025-bof-technician-q19", "examId": "job-2025-bof-technician", "subject": "general-knowledge", "topic": "বাংলাদেশ", "qno": 19, "marks": 5, "type": "paragraph", "question": "বাংলাদেশের নিবন্ধিত ভৌগোলিক নির্দেশক (GI) পণ্য কতটি? ২টির নাম লিখুন।", "answer": "মোট জিআই পণ্য ৬০টি। যেমন — জামদানি, টাঙ্গাইল শাড়ি ইত্যাদি।"},

  {"id": "job-2025-bof-technician-q20", "examId": "job-2025-bof-technician", "subject": "general-knowledge", "topic": "আন্তর্জাতিক", "qno": 20, "marks": 4, "type": "paragraph", "question": "তুরস্কের মুদ্রার নাম কী?", "answer": "লিরা"},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: যানবাহন ও যন্ত্রপাতি রক্ষণাবেক্ষণ সংস্থা — স্টোর কিপার (job-2025-vehicle-maintenance-store-keeper)
  // পরীক্ষা: জেলা প্রশাসকের কার্যালয়, মানিকগঞ্জ — অফিস সহায়ক (job-2025-dc-manikganj)
  // পরীক্ষা: অর্থনৈতিক সম্পর্ক বিভাগ — অফিস সহায়ক (job-2025-erd-office-sohayok)
  // সোর্স: self_job_solution_330-370_page (পৃষ্ঠা ৩৩০-৩৭০)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-vehicle-maintenance-store-keeper-q01", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 1, "marks": 4, "type": "table", "question": "শুদ্ধ বানান লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["পূর্ণজাগরণ", "পুনর্জাগরণ"], ["বীভিষিকা", "বিভীষিকা"], ["রৌদকরজ্জল", "রৌদ্রকরোজ্জল"], ["উচ্ছৃঙ্খল", "উচ্ছৃঙ্খল"], ["অংশীদারিত্ব", "অংশীদারি"]]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q02", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 4, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "প্রৌঢ়", "a": "প্র + ঊঢ়"}, {"label": "খ", "q": "আশ্চর্য", "a": "আ + চর্য"}, {"label": "গ", "q": "পরস্পর", "a": "পর + পর"}, {"label": "ঘ", "q": "একাদশ", "a": "এক্ + দশ"}, {"label": "ঙ", "q": "বিপজ্জনক", "a": "বিপদ্ + জনক"}]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q03", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 3, "marks": 4, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "কোনোভাবেই যা নিবারণ করা যায় না", "a": "অনিবার্য"}, {"label": "খ", "q": "উপকারীর উপকার স্বীকার করে না যে", "a": "অকৃতজ্ঞ"}, {"label": "গ", "q": "আচারে নিষ্ঠা আছে যার", "a": "আচারনিষ্ঠ"}, {"label": "ঘ", "q": "কর্ম সম্পাদনে পরিশ্রমী", "a": "কর্মঠ"}, {"label": "ঙ", "q": "কুমারীর পুত্র", "a": "কানীন"}]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q04", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 4, "marks": 4, "type": "table", "question": "বিপরীত শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["মনীষা", "নির্বোধ"], ["বিষ", "অমৃত"], ["খাতক", "মহাজন"], ["অজ্ঞ", "বিজ্ঞ"], ["দৃষ্ট", "অদৃষ্ট"]]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q05", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "bangla", "topic": "সমাস", "qno": 5, "marks": 4, "type": "sub-parts", "question": "ব্যাসবাক্যসহ সমাসের নাম লিখুনঃ", "parts": [{"label": "ক", "q": "দোভাষী", "a": "দুই ভাষায় পারদর্শী যিনি — বহুব্রীহি সমাস"}, {"label": "খ", "q": "প্রাণপ্রিয়", "a": "প্রাণ হতে প্রিয় — পঞ্চমী তৎপুরুষ"}, {"label": "গ", "q": "শতাব্দী", "a": "শত অব্দের সমাহার — দ্বিগু সমাস"}, {"label": "ঘ", "q": "দুর্ভিক্ষ", "a": "ভিক্ষার অভাব — অব্যয়ীভাব"}, {"label": "ঙ", "q": "সাতসতেরো", "a": "সাত ও সতেরো — দ্বন্দ্ব সমাস"}]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q06", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "english", "topic": "grammar", "qno": 6, "marks": 4, "type": "sentence-change", "question": "Change the following active voices into passive:", "parts": [{"label": "a", "original": "My friend invited me to the party.", "changed": "I was invited to the party by my friend."}, {"label": "b", "original": "He has done the work.", "changed": "The work has been done by him."}, {"label": "c", "original": "I had written the letter.", "changed": "The letter had been written by me."}, {"label": "d", "original": "You must do the work.", "changed": "The work must be done by you."}, {"label": "e", "original": "Shut the door.", "changed": "Let the door be shut."}]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q07", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "english", "topic": "fill-in-the-blanks", "qno": 7, "marks": 4, "type": "fill-gaps", "question": "Fill in the gaps with preposition.", "parts": [{"sentence": "He came….. road.", "answer": "by"}, {"sentence": "You are……. time.", "answer": "on"}, {"sentence": "Man aspires……. riches.", "answer": "after"}, {"sentence": "Students should abide……. the teacher's advice.", "answer": "by"}, {"sentence": "He is dull…… English.", "answer": "at"}]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q08", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "english", "topic": "idioms-and-phrases", "qno": 8, "marks": 4, "type": "idiom", "question": "Make sentences with meaning:", "parts": [{"label": "a", "phrase": "A bed of roses", "meaning": "পুষ্প শয্যা", "example": "Life is not a bed of roses."}, {"label": "b", "phrase": "All in all", "meaning": "সর্বেসর্বা", "example": "He is all in all in the family."}, {"label": "c", "phrase": "At the eleventh hour", "meaning": "শেষ মুহূর্তে", "example": "They arrived at the station at the eleventh hour."}, {"label": "d", "phrase": "A man of word", "meaning": "এক কথার মানুষ", "example": "He is a man of word."}, {"label": "e", "phrase": "Bag and baggage", "meaning": "তল্পিতল্পাসহ", "example": "He left the hotel bag and baggage."}]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q09", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "english", "topic": "grammar", "qno": 9, "marks": 4, "type": "fill-gaps", "question": "Complete the following sentences with the right form of verbs.", "parts": [{"sentence": "He (come) home yesterday.", "answer": "came"}, {"sentence": "They (not go) to school everyday.", "answer": "do not go"}, {"sentence": "The sun (give) us light.", "answer": "gives"}, {"sentence": "I (suffer) from fever for a long time.", "answer": "have been suffering"}, {"sentence": "The brave never (fear) death.", "answer": "fears"}]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q10", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "english", "topic": "grammar", "qno": 10, "marks": 4, "type": "fill-gaps", "question": "Fill in the gaps with suitable articles.", "parts": [{"sentence": "He plays........ piano.", "answer": "the"}, {"sentence": "....... man in white dress is known to me.", "answer": "The"}, {"sentence": "He gave me....... one-take.", "answer": "a"}, {"sentence": "My father is........ M.A.", "answer": "an"}, {"sentence": "Helen was ....... beauty.", "answer": "a"}]},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q11", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "math", "topic": "জ্যামিতি", "qno": 11, "marks": 5, "type": "math", "question": "২০ মিটার দীর্ঘ একটি কামরার মেঝে কার্পেট দিয়ে ঢাকতে ৭৫০০ টাকা খরচ হয়। যদি ঐ কামরাটির প্রস্থ ৪ মিটার কম হতো, তবে ৬০০০ টাকা খরচ হতো। কামরাটির প্রস্থ কত?", "steps": ["কামরার দৈর্ঘ্য ২০ মিটার। প্রস্থ ৪ মিটার কমলে ক্ষেত্রফল কমে (২০ × ৪) = ৮০ বর্গমিটার", "ক্ষেত্রফল ৮০ বর্গমিটার কমার জন্য খরচ কমে (৭৫০০ − ৬০০০) = ১৫০০ টাকা", "১৫০০ টাকা খরচ হয় ৮০ বর্গমিটারে ⇒ ৭৫০০ টাকা খরচ হয় (৮০ × ৭৫০০/১৫০০) = ৪০০ বর্গমিটারে", "∴ কামরার ক্ষেত্রফল ৪০০ বর্গমিটার; প্রস্থ = ক্ষেত্রফল/দৈর্ঘ্য = ৪০০/২০ = ২০ মিটার"], "answer": "২০ মিটার", "alternative": {"steps": ["প্রস্থ ৪ মিটার কম হলে খরচ কম হয় = ৭৫০০ − ৬০০০ = ১৫০০ টাকা", "১৫০০ টাকা খরচ কম হয় ৪ মিটার প্রস্থ কমলে", "৭৫০০ টাকা খরচের ক্ষেত্রে প্রস্থ = ৪ × ৭৫০০/১৫০০ = ২০ মিটার"], "answer": "প্রস্থ ২০ মিটার"}},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q12", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "math", "topic": "বীজগণিত", "qno": 12, "marks": 5, "type": "math", "question": "দুই অঙ্কবিশিষ্ট কোনো সংখ্যার অঙ্কদ্বয়ের সমষ্টির সাথে ৭ যোগ করলে যোগফল দশক স্থানীয় অঙ্কটির তিনগুণ হয়। সংখ্যাটি থেকে ১৮ বাদ দিলে অঙ্কদ্বয় স্থান পরিবর্তন করে। সংখ্যাটি নির্ণয় করুন।", "steps": ["মনে করি, সংখ্যাটির একক স্থানীয় অঙ্ক x এবং দশক স্থানীয় অঙ্ক y; সংখ্যাটি = x + 10y", "১ম শর্তানুসারে: x + y + 7 = 3y ⇒ x − 2y = −7 ... (1)", "২য় শর্তানুসারে: x + 10y − 18 = y + 10x ⇒ 9y − 9x = 18 ⇒ y − x = 2 ... (2)", "(1) ও (2) যোগ করে: −y = −5 ⇒ y = 5", "y-এর মান (1)-এ বসিয়ে: x − 10 = −7 ⇒ x = 3", "∴ নির্ণেয় সংখ্যাটি = x + 10y = 3 + 50 = 53"], "answer": "৫৩"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q13", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "math", "topic": "উৎপাদকে বিশ্লেষণ", "qno": 13, "marks": 5, "type": "math", "question": "উৎপাদকে বিশ্লেষণ করুনঃ x³ + 6x²y + 11xy² + 6y³", "steps": ["x³ + 6x²y + 11xy² + 6y³", "= x³ + 6x²y + 12xy² + 8y³ − xy² − 2y³", "= {x³ + 3.x².2y + 3.x.(2y)² + (2y)³} − xy² − 2y³", "= (x + 2y)³ − y²(x + 2y)", "= (x + 2y){(x + 2y)² − y²}", "= (x + 2y)(x + 2y + y)(x + 2y − y)", "= (x + 2y)(x + 3y)(x + y)"], "answer": "(x + y)(x + 2y)(x + 3y)"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q14", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 14, "marks": 2, "type": "paragraph", "question": "পার্বত্য চট্টগ্রাম শান্তিচুক্তি কত সালে স্বাক্ষরিত হয়?", "answer": "২ ডিসেম্বর ১৯৯৭"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q15", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 15, "marks": 2, "type": "paragraph", "question": "'সুনামি' কোন দেশের শব্দ?", "answer": "জাপান"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q16", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 2, "type": "paragraph", "question": "গণপ্রজাতন্ত্রী বাংলাদেশের সর্বোচ্চ আইন কী?", "answer": "সংবিধান"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q17", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 17, "marks": 2, "type": "paragraph", "question": "যমুনা সার কারখানায় উৎপাদিত সারের নাম কী?", "answer": "ইউরিয়া"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q18", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 18, "marks": 2, "type": "paragraph", "question": "উত্তরা গণভবন কোথায় অবস্থিত?", "answer": "নাটোর"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q19", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 19, "marks": 2, "type": "paragraph", "question": "বাংলাদেশের বর্তমান অন্তর্বর্তীকালীন সরকার গঠিত হয় কত তারিখে?", "answer": "৮ আগস্ট ২০২৪"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q20", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 20, "marks": 2, "type": "paragraph", "question": "এশিয়া মহাদেশের ক্ষুদ্রতম দেশের নাম কী?", "answer": "মালদ্বীপ"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q21", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 21, "marks": 2, "type": "paragraph", "question": "বাংলাদেশকে প্রথম স্বীকৃতিদানকারী দেশ কোনটি?", "answer": "ভুটান"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q22", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 22, "marks": 2, "type": "paragraph", "question": "বাংলাদেশে প্রথম মুদ্রা চালু হয় কত সালে?", "answer": "৪ মার্চ, ১৯৭২"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q23", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 23, "marks": 2, "type": "paragraph", "question": "'সাগরকন্যা' কোন এলাকার ভৌগোলিক নাম?", "answer": "কুয়াকাটা, পটুয়াখালী"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q24", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 24, "marks": 1, "type": "paragraph", "question": "বাংলাদেশের জাতীয় সংসদের আসন কয়টি?", "answer": "৩৫০টি"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q25", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 25, "marks": 1, "type": "paragraph", "question": "সুমাত্রা দ্বীপ কোন দেশের অংশ?", "answer": "ইন্দোনেশিয়া"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q26", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 26, "marks": 1, "type": "paragraph", "question": "বাংলাদেশ ও বার্মার সীমান্ত নদী কোনটি?", "answer": "নাফ"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q27", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 27, "marks": 1, "type": "paragraph", "question": "প্রথম সাফ গেমস কোথায় অনুষ্ঠিত হয়?", "answer": "কাঠমান্ডু, নেপাল (১৯৮৪ সালে)"},

  {"id": "job-2025-vehicle-maintenance-store-keeper-q28", "examId": "job-2025-vehicle-maintenance-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 28, "marks": 1, "type": "paragraph", "question": "বাংলাদেশের জাতীয় খেলার নাম কোনটি?", "answer": "কাবাডি/হা-ডু-ডু"},

  {"id": "job-2025-dc-manikganj-q01", "examId": "job-2025-dc-manikganj", "subject": "bangla", "topic": "বাগধারা", "qno": 1, "marks": 5, "type": "idiom", "question": "নিচের বাগধারাসমূহের অর্থ লিখুনঃ", "parts": [{"label": "ক", "phrase": "ভূষণ্ডির কাক", "meaning": "দীর্ঘায়ু ব্যক্তি"}, {"label": "খ", "phrase": "বুদ্ধির ঢেঁকি", "meaning": "নির্বোধ"}, {"label": "গ", "phrase": "ইতর বিশেষ", "meaning": "পার্থক্য"}, {"label": "ঘ", "phrase": "মণিকাঞ্চন যোগ", "meaning": "উপযুক্ত মিলন"}, {"label": "ঙ", "phrase": "সপ্তমে চড়া", "meaning": "প্রচণ্ড উত্তেজনা"}]},

  {"id": "job-2025-dc-manikganj-q02", "examId": "job-2025-dc-manikganj", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "চলচ্চিত্র", "a": "চলৎ + চিত্র"}, {"label": "খ", "q": "বিপজ্জনক", "a": "বিপদ্ + জনক"}, {"label": "গ", "q": "সঞ্চয়", "a": "সম্ + চয়"}, {"label": "ঘ", "q": "ষষ্ঠ", "a": "ষষ্ + থ"}, {"label": "ঙ", "q": "নীরোগ", "a": "নিঃ + রোগ"}]},

  {"id": "job-2025-dc-manikganj-q03", "examId": "job-2025-dc-manikganj", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 3, "marks": 5, "type": "table", "question": "বানান শুদ্ধ করে লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["আকাংখা", "আকাঙ্ক্ষা"], ["মূমুর্ষু", "মুমূর্ষু"], ["মুলোৎপাটন", "মূলোৎপাটন"], ["ভোগলিক", "ভৌগোলিক"], ["তত্বাবধায়ক", "তত্ত্বাবধায়ক"]]},

  {"id": "job-2025-dc-manikganj-q04", "examId": "job-2025-dc-manikganj", "subject": "bangla", "topic": "দরখাস্ত", "qno": 4, "marks": 5, "type": "letter", "question": "এস.এস.সি সনদে নামের বানান ভুল সংশোধন করার জন্য শিক্ষা বোর্ডের চেয়ারম্যান বরাবর একটি দরখাস্ত লিখুন।", "letter": {"date": "", "to": "চেয়ারম্যান\nমাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড\nঢাকা।", "subject": "এস.এস.সি সনদে নামের বানান ভুল সংশোধনের জন্য আবেদন।", "body": "মহোদয়,\n\nসবিনয় নিবেদন এই যে, আমি আপনার বোর্ডের অধীনে অনুষ্ঠিত ২০২৩ সালের এস.এস.সি পরীক্ষায় অংশগ্রহণ করি। পরীক্ষায় উত্তীর্ণ হওয়ার পর প্রাপ্ত আমার এস.এস.সি সনদে আমার নামের বানান ভুলভাবে মুদ্রিত হয়েছে। সনদে আমার নাম লেখা হয়েছে \"Mohammad Mostafizur Rahman\", অথচ সঠিক বানান হবে \"Md. Mostafizur Rahman\"। উক্ত ভুলটি অনিচ্ছাকৃত হওয়ায় ভবিষ্যতে উচ্চশিক্ষা ও চাকরির ক্ষেত্রে জটিলতার সৃষ্টি হতে পারে। তাই প্রয়োজনীয় কাগজপত্র সংযুক্ত করে আমার এস.এস.সি সনদে নামের ভুল বানানটি সংশোধনের জন্য বিশেষভাবে অনুরোধ জানাচ্ছি।\n\nঅতএব, মহোদয় আপনার নিকট বিনীত প্রার্থনা এই যে, আমার এস.এস.সি সনদে নামের বানান সংশোধন করার জন্য প্রয়োজনীয় ব্যবস্থা গ্রহণ করে আমাকে বাধিত করবেন।", "closing": "বিনীত নিবেদক", "sender": "নাম: মোঃ মোস্তাফিজুর রহমান\nরোল নং: ২৫৬৫৬৮৭\nরেজিস্ট্রেশন নং: ৯৯৫২০৫৬৪১"}},

  {"id": "job-2025-dc-manikganj-q05", "examId": "job-2025-dc-manikganj", "subject": "english", "topic": "vocabulary", "qno": 5, "marks": 5, "type": "sub-parts", "question": "শব্দার্থ লিখুনঃ", "parts": [{"label": "a", "q": "Hilarious", "a": "হাস্যকর/মজার"}, {"label": "b", "q": "Segregate", "a": "পৃথক করা"}, {"label": "c", "q": "Emphasis", "a": "জোর/গুরুত্ব"}, {"label": "d", "q": "Inevitable", "a": "অনিবার্য"}, {"label": "e", "q": "Disguise", "a": "ছদ্মবেশ"}]},

  {"id": "job-2025-dc-manikganj-q06", "examId": "job-2025-dc-manikganj", "subject": "english", "topic": "read-and-fill", "qno": 6, "marks": 5, "type": "read-fill", "question": "Fill in the blanks with the words (talking, challenging, visiting, published, to collect):", "passage": "Mr. Kamal is a reporter of a newly a) ____ English newspaper. His job is b) ____ news about various cultural events. Collecting news is sometimes very c) ____ that involves d) ____ spots and e) ____ to people.", "answers": "a) published  b) to collect  c) challenging  d) visiting  e) talking"},

  {"id": "job-2025-dc-manikganj-q07", "examId": "job-2025-dc-manikganj", "subject": "english", "topic": "fill-in-the-blanks", "qno": 7, "marks": 5, "type": "fill-gaps", "question": "Use the right form of prepositions (By, Across, Inside, On, In):", "parts": [{"sentence": "She gave me the letter…... an envelope.", "answer": "in"}, {"sentence": "There was dust…..... the floor.", "answer": "on"}, {"sentence": "He drove….….. the road.", "answer": "across"}, {"sentence": "We went home…… bus.", "answer": "by"}, {"sentence": "I could see people ……. it.", "answer": "inside"}]},

  {"id": "job-2025-dc-manikganj-q08", "examId": "job-2025-dc-manikganj", "subject": "english", "topic": "paragraph", "qno": 8, "marks": 5, "type": "paragraph", "question": "Write a paragraph on 'World Heritages of Bangladesh'.", "answer": "Bangladesh is rich in natural beauty and historical heritage. There are three UNESCO World Heritage Sites in Bangladesh. The Sundarbans is the largest mangrove forest in the world and is famous for the Royal Bengal Tiger. The Historic Mosque City of Bagerhat is an important example of medieval Islamic architecture. The Ruins of the Buddhist Vihara at Paharpur show the rich Buddhist culture of ancient Bengal. These world heritages reflect the glorious history, culture, and natural wealth of Bangladesh."},

  {"id": "job-2025-dc-manikganj-q09", "examId": "job-2025-dc-manikganj", "subject": "math", "topic": "বয়স নির্ণয়", "qno": 9, "marks": 4, "type": "math", "question": "পুত্রের বয়স মাতার বয়সের এক-তৃতীয়াংশ। পিতা মাতার চেয়ে ৬ বছরের বড়। তিনজনের বয়সের সমষ্টি ৯০ বছর। পিতার বয়স কত?", "steps": ["মনে করি, মাতার বয়স = ৩ক বছর", "পুত্রের বয়স = ৩ক এর ১/৩ = ক বছর", "পিতার বয়স = (৩ক + ৬) বছর", "প্রশ্নমতে, ৩ক + ক + ৩ক + ৬ = ৯০ ⇒ ৭ক = ৮৪ ⇒ ক = ১২", "সুতরাং পিতার বয়স = ৩ × ১২ + ৬ = ৪২ বছর"], "answer": "৪২ বছর"},

  {"id": "job-2025-dc-manikganj-q10", "examId": "job-2025-dc-manikganj", "subject": "math", "topic": "বীজগণিত", "qno": 10, "marks": 4, "type": "math", "question": "সরল করুনঃ a/{(a−b)(a−c)} + b/{(b−c)(b−a)} + c/{(c−a)(c−b)}", "steps": ["= −a/{(a−b)(c−a)} − b/{(b−c)(a−b)} − c/{(c−a)(b−c)}", "= −[a/{(a−b)(c−a)} + b/{(b−c)(a−b)} + c/{(c−a)(b−c)}]", "= −[(ab−ac+bc−ab+ac−bc)/{(a−b)(b−c)(c−a)}]", "= −0/{(a−b)(b−c)(c−a)} = ০"], "answer": "০"},

  {"id": "job-2025-dc-manikganj-q11", "examId": "job-2025-dc-manikganj", "subject": "math", "topic": "সূচক", "qno": 11, "marks": 4, "type": "math", "question": "সমাধান করুনঃ 2^(x+7) = 4^(x+2)", "steps": ["2^(x+7) = 4^(x+2)", "বা, 2^(x+7) = 2^(2(x+2)) = 2^(2x+4)", "বা, x + 7 = 2x + 4", "∴ x = 3"], "answer": "x = ৩"},

  {"id": "job-2025-dc-manikganj-q12", "examId": "job-2025-dc-manikganj", "subject": "math", "topic": "জ্যামিতি", "qno": 12, "marks": 4, "type": "math", "question": "৪০ মিটার দৈর্ঘ্য এবং ৩০ মিটার প্রস্থবিশিষ্ট একটি মাঠের ঠিক মাঝে আড়াআড়িভাবে ১.৫ মিটার প্রশস্ত দুইটি রাস্তা আছে। রাস্তা দুইটির মোট ক্ষেত্রফল কত?", "steps": ["দৈর্ঘ্য বরাবর রাস্তার ক্ষেত্রফল = ৪০ × ১.৫ = ৬০ বর্গমিটার", "প্রস্থ বরাবর রাস্তার ক্ষেত্রফল = (৩০ − ১.৫) × ১.৫ = ২৮.৫ × ১.৫ = ৪২.৭৫ বর্গমিটার", "রাস্তাদ্বয়ের ক্ষেত্রফল = ৬০ + ৪২.৭৫ = ১০২.৭৫ বর্গমিটার"], "answer": "১০২.৭৫ বর্গমিটার", "alternative": {"steps": ["রাস্তাবাদে মাঠের দৈর্ঘ্য = ৪০ − ১.৫ = ৩৮.৫ মি.; রাস্তাবাদে মাঠের প্রস্থ = ৩০ − ১.৫ = ২৮.৫ মি.", "রাস্তাবাদে মাঠের ক্ষেত্রফল = ৩৮.৫ × ২৮.৫ = ১০৯৭.২৫ বর্গমিটার", "রাস্তাসহ মাঠের ক্ষেত্রফল = ৪০ × ৩০ = ১২০০ বর্গমিটার", "∴ রাস্তাদ্বয়ের মোট ক্ষেত্রফল = ১২০০ − ১০৯৭.২৫ = ১০২.৭৫ বর্গমিটার"], "answer": "১০২.৭৫ বর্গমিটার"}},

  {"id": "job-2025-dc-manikganj-q13", "examId": "job-2025-dc-manikganj", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 13, "marks": 4, "type": "math", "question": "একজন দোকানদার ৫০ কেজির ১ বস্তা চাল ১৬০০ টাকায় কিনলেন। চালের দাম কমে যাওয়ায় ১৫০০ টাকায় বিক্রয় করেন, তার কত ক্ষতি হলো?", "steps": ["ক্রয়মূল্য ১৬০০ টাকা, বিক্রয়মূল্য ১৫০০ টাকা", "ক্ষতি = ১৬০০ − ১৫০০ = ১০০ টাকা"], "answer": "১০০ টাকা"},

  {"id": "job-2025-dc-manikganj-q14", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 14, "marks": 1, "type": "paragraph", "question": "বৃহস্পতি গ্রহের উপগ্রহ কয়টি?", "answer": "৬৭টি"},

  {"id": "job-2025-dc-manikganj-q15", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 15, "marks": 1, "type": "paragraph", "question": "সূর্য পৃথিবীর তুলনায় কত গুণ বড়?", "answer": "১৩ লক্ষ গুণ"},

  {"id": "job-2025-dc-manikganj-q16", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 1, "type": "paragraph", "question": "মাটির pH কত হলে আলু/গম উৎপাদন ভালো হয়?", "answer": "৬.০–৭.০"},

  {"id": "job-2025-dc-manikganj-q17", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 17, "marks": 1, "type": "paragraph", "question": "লোহিত রক্তকণিকার গড় আয়ু কত দিন?", "answer": "১২০ দিন"},

  {"id": "job-2025-dc-manikganj-q18", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 18, "marks": 1, "type": "paragraph", "question": "২০২৫ সালে জাতিসংঘের কততম সাধারণ অধিবেশন চলছে?", "answer": "৮০তম"},

  {"id": "job-2025-dc-manikganj-q19", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 19, "marks": 1, "type": "paragraph", "question": "২০১৭ সালে বাংলাদেশে যে সাইক্লোন আঘাত করেছিল তার নাম কী?", "answer": "মোরা"},

  {"id": "job-2025-dc-manikganj-q20", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 20, "marks": 1, "type": "paragraph", "question": "সোডিয়াম গ্লুটামেট কী নামে পরিচিত?", "answer": "টেস্টিং সল্ট"},

  {"id": "job-2025-dc-manikganj-q21", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 21, "marks": 1, "type": "paragraph", "question": "একজন স্বাভাবিক বয়স্ক লোকের জন্য স্পষ্ট দৃষ্টির ন্যূনতম দূরত্ব কত?", "answer": "২৫ সে.মি."},

  {"id": "job-2025-dc-manikganj-q22", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 22, "marks": 1, "type": "paragraph", "question": "কোন জাতীয় খাদ্যে বেশি ক্যালরি পাওয়া যায়?", "answer": "চর্বি"},

  {"id": "job-2025-dc-manikganj-q23", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 23, "marks": 1, "type": "paragraph", "question": "বাংলাদেশের মাথাপিছু আয় কত মার্কিন ডলার?", "answer": "২৮২০ মার্কিন ডলার"},

  {"id": "job-2025-dc-manikganj-q24", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 24, "marks": 1, "type": "paragraph", "question": "আইন বলতে সাধারণভাবে কী বোঝায়?", "answer": "সমাজ বা রাষ্ট্র কর্তৃক স্বীকৃত এবং মানুষের সামাজিক কল্যাণের জন্য গৃহীত সুনির্দিষ্ট নিয়মের সমষ্টিকেই আইন বলে।"},

  {"id": "job-2025-dc-manikganj-q25", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 25, "marks": 1, "type": "paragraph", "question": "বাণিজ্যের কয়টি দিক ও কী কী?", "answer": "২টি (আমদানি ও রপ্তানি)"},

  {"id": "job-2025-dc-manikganj-q26", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 26, "marks": 1, "type": "paragraph", "question": "বাংলাদেশের কত শতাংশ মানুষ দারিদ্র্যসীমার নিচে বসবাস করে?", "answer": "১৯.২% (সূত্র: বাংলাদেশ দারিদ্র্য মানচিত্র ২০২২, রিপোর্ট প্রকাশ ৩০ জানুয়ারি ২০২৫)"},

  {"id": "job-2025-dc-manikganj-q27", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 27, "marks": 1, "type": "paragraph", "question": "সাধারণত কম্পিউটারের কয় ধরনের ম্যালওয়্যার সবচেয়ে বেশি দেখা যায় এবং তা কী কী?", "answer": "তিন ধরনের; কম্পিউটার ভাইরাস, কম্পিউটার ওয়ার্ম ও ট্রোজান হর্স"},

  {"id": "job-2025-dc-manikganj-q28", "examId": "job-2025-dc-manikganj", "subject": "general-knowledge", "topic": "gk-others", "qno": 28, "marks": 1, "type": "paragraph", "question": "IPS ও UPS এর মানে কী?", "answer": "IPS = Instant Power Supply; UPS = Uninterruptible Power Supply"},

  {"id": "job-2025-erd-office-sohayok-q01", "examId": "job-2025-erd-office-sohayok", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 1, "marks": 2, "type": "table", "question": "শব্দগুলোর শুদ্ধ বানান লিখুন।", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["ভ্রাতাপুত্র", "ভ্রাতুষ্পুত্র"], ["নিস্পাপী", "নিষ্পাপী"], ["বিভিষীকা", "বিভীষিকা"], ["প্রত্যাংগমন", "প্রত্যাগমন"]]},

  {"id": "job-2025-erd-office-sohayok-q02", "examId": "job-2025-erd-office-sohayok", "subject": "bangla", "topic": "শব্দের উৎস", "qno": 2, "marks": 2, "type": "sub-parts", "question": "শব্দগুলো কোন ভাষা থেকে বাংলা ভাষায় এসেছে?", "parts": [{"label": "ক", "q": "হেড-মৌলভী", "a": "ইংরেজি ও ফারসি (মিশ্র শব্দ)"}, {"label": "খ", "q": "ইংরেজ", "a": "পর্তুগিজ"}, {"label": "গ", "q": "টোপর", "a": "দেশি"}, {"label": "ঘ", "q": "উজবুক", "a": "তুর্কি"}]},

  {"id": "job-2025-erd-office-sohayok-q03", "examId": "job-2025-erd-office-sohayok", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 3, "marks": 2, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুন।", "parts": [{"label": "ক", "q": "অন্য দিকে মন যার", "a": "অন্যমনস্ক"}, {"label": "খ", "q": "শত্রুকে বধ করে যে", "a": "শত্রুঘ্ন"}, {"label": "গ", "q": "দর্শন করা হয়েছে এমন", "a": "প্রেক্ষিত"}, {"label": "ঘ", "q": "যা সহজে মরে না", "a": "দুর্মর"}]},

  {"id": "job-2025-erd-office-sohayok-q04", "examId": "job-2025-erd-office-sohayok", "subject": "bangla", "topic": "সমাস", "qno": 4, "marks": 2, "type": "sub-parts", "question": "শব্দসমূহ কোন সমাস?", "parts": [{"label": "ক", "q": "নীলাকাশ", "a": "নীল যে আকাশ — কর্মধারয়"}, {"label": "খ", "q": "নিয়ম-কানুন", "a": "নিয়ম ও কানুন — দ্বন্দ্ব"}, {"label": "গ", "q": "নদীমাতৃক", "a": "নদী মাতা যার — বহুব্রীহি"}, {"label": "ঘ", "q": "প্রবচন", "a": "প্র (প্রকৃষ্ট) যে বচন — প্রাদি সমাস"}]},

  {"id": "job-2025-erd-office-sohayok-q05", "examId": "job-2025-erd-office-sohayok", "subject": "bangla", "topic": "রচনা", "qno": 5, "marks": 2, "type": "paragraph", "question": "'জীবনের উদ্দেশ্য' সম্পর্কে ৪টি বাক্য লিখুন।", "answer": "জীবনের উদ্দেশ্য হলো নিজেকে ও সমাজকে কল্যাণের পথে পরিচালিত করা। প্রতিটি মানুষের উচিত শিক্ষা ও কর্মের মাধ্যমে নিজের সামর্থ্যের পূর্ণ বিকাশ ঘটানো। সততা, পরিশ্রম ও মানবসেবার মধ্য দিয়ে জীবনকে অর্থবহ করে তোলাই প্রকৃত লক্ষ্য হওয়া উচিত। একজন মানুষ তখনই সার্থক, যখন সে নিজের পাশাপাশি অন্যের কল্যাণেও অবদান রাখতে পারে।"},

  {"id": "job-2025-erd-office-sohayok-q06", "examId": "job-2025-erd-office-sohayok", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 3, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "I have great confidence…. him.", "answer": "in"}, {"sentence": "There is no alternative…… training.", "answer": "to"}, {"sentence": "Congratulations……... your success.", "answer": "on"}, {"sentence": "…….you ever been to Rome?", "answer": "Have"}]},

  {"id": "job-2025-erd-office-sohayok-q07", "examId": "job-2025-erd-office-sohayok", "subject": "english", "topic": "grammar", "qno": 7, "marks": 2, "type": "sentence-change", "question": "Correct the following sentences:", "parts": [{"label": "a", "original": "He is working for five hours.", "changed": "He has been working for five hours."}, {"label": "b", "original": "You can't make him to understand.", "changed": "You can't make him understand."}, {"label": "c", "original": "One should do his duty.", "changed": "One should do one's duty."}]},

  {"id": "job-2025-erd-office-sohayok-q08", "examId": "job-2025-erd-office-sohayok", "subject": "english", "topic": "translation", "qno": 8, "marks": 3, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "সে প্রায়ই অফিসে অনুপস্থিত থাকে।", "target": "He is often absent from the office."}, {"label": "খ", "source": "তোমার সেখানে যাওয়া উচিত হয়নি।", "target": "You should not have gone there."}, {"label": "গ", "source": "মানুষ মাত্রই ভুল হয়।", "target": "To err is human."}, {"label": "ঘ", "source": "মাছ উড়তে পারে না, পারে কি?", "target": "Fish cannot fly, can they?"}]},

  {"id": "job-2025-erd-office-sohayok-q09", "examId": "job-2025-erd-office-sohayok", "subject": "english", "topic": "paragraph", "qno": 9, "marks": 2, "type": "paragraph", "question": "Write six sentences on 'Honesty'.", "answer": "Honesty means telling the truth and being sincere in words and actions. It is one of the most valuable qualities a person can have. An honest person is trusted and respected by everyone in society. Honesty helps build strong relationships based on trust. Dishonesty may bring short-term benefits, but it destroys reputation in the long run. We should practice honesty in every sphere of our life to build a better society."},

  {"id": "job-2025-erd-office-sohayok-q10", "examId": "job-2025-erd-office-sohayok", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 10, "marks": 4, "type": "math", "question": "চিনির মূল্য ২০% কমলো, কিন্তু চিনির ব্যবহার ২০% বৃদ্ধি পেল। এতে চিনির ব্যয় শতকরা কত বাড়লো বা কমলো?", "steps": ["মনে করি, পূর্বে চিনির মূল্য ১০০ টাকা ও ব্যবহার ১০০ কেজি", "২০% কমে বর্তমান মূল্য = ৮০ টাকা; ২০% বৃদ্ধিতে বর্তমান ব্যবহার = ১২০ কেজি", "নতুন খরচ = ১২০ × ৮০ = ৯৬০০ টাকা", "পূর্বের খরচ = ১০০ × ১০০ = ১০০০০ টাকা", "ব্যয় কমলো = ১০০০০ − ৯৬০০ = ৪০০ টাকা", "১০০০০ টাকায় ব্যয় কমলো ৪০০ টাকা ⇒ ১০০ টাকায় কমলো = ৪০০ × ১০০/১০০০০ = ৪ টাকা"], "answer": "৪% ব্যয় কমলো"},

  {"id": "job-2025-erd-office-sohayok-q11", "examId": "job-2025-erd-office-sohayok", "subject": "math", "topic": "জ্যামিতি", "qno": 11, "marks": 3, "type": "math", "question": "একটি চৌবাচ্চার দৈর্ঘ্য ৫ মিটার, প্রস্থ ৪ মিটার এবং উচ্চতা ৩ মিটার। চৌবাচ্চাটি পানি দ্বারা পূর্ণ করতে কত লিটার পানি প্রয়োজন হবে?", "steps": ["দৈর্ঘ্য = ৫০০ সে.মি., প্রস্থ = ৪০০ সে.মি., উচ্চতা = ৩০০ সে.মি.", "আয়তন = ৫০০ × ৪০০ × ৩০০ = ৬,০০,০০,০০০ ঘন সে.মি.", "১০০০ ঘন সে.মি. = ১ লিটার", "∴ ৬,০০,০০,০০০ ঘন সে.মি. = ৬০,০০,০০,০০০/১০০০ = ৬০,০০০ লিটার"], "answer": "৬০,০০০ লিটার"},

  {"id": "job-2025-erd-office-sohayok-q12", "examId": "job-2025-erd-office-sohayok", "subject": "math", "topic": "বীজগণিত", "qno": 12, "marks": 3, "type": "math", "question": "x + y = ১২, x − y = ২ হলে, xy = কত?", "steps": ["xy = {(x+y)/2}² − {(x−y)/2}²", "= (১২/২)² − (২/২)²", "= ৩৬ − ১", "= ৩৫"], "answer": "৩৫"},

  {"id": "job-2025-erd-office-sohayok-q13", "examId": "job-2025-erd-office-sohayok", "subject": "general-knowledge", "topic": "gk-others", "qno": 13, "marks": 10, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর করুনঃ", "parts": [{"label": "ক", "q": "ERD-এর পূর্ণরূপ কী? এর কাজ কী?", "a": "Economic Relations Division। গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের বৈদেশিক অর্থনৈতিক কার্যক্রম, নীতি প্রণয়ন, সুপারিশ প্রদান এবং দেশের উন্নয়ন কর্মপরিকল্পনায় আর্থিক ঘাটতি পূরণের জন্য বৈদেশিক সহায়তা সংগ্রহের দায়িত্ব অর্থনৈতিক সম্পর্ক বিভাগের উপর ন্যস্ত। এর কার্যাবলির মধ্যে রয়েছে: বার্ষিক উন্নয়ন পরিকল্পনা (এডিপি) ও পঞ্চবার্ষিক পরিকল্পনার ভিত্তিতে দ্বি-পক্ষীয় ও বহু-পক্ষীয় অর্থনৈতিক সাহায্যের পরিমাণ নির্ধারণ ও চুক্তি সম্পাদন; বৈদেশিক সাহায্যের উৎস অনুসন্ধান ও প্রস্তাব পরীক্ষা-বাছাই; খাদ্য ও পণ্য সাহায্য বিষয়ক চুক্তি সম্পাদন ও বরাদ্দ প্রদান; কারিগরি সহায়তা কর্মসূচির অনুমোদন প্রক্রিয়া সমন্বয়; এবং সাহায্যপ্রাপ্ত প্রকল্পে দেশি-বিদেশি বিশেষজ্ঞ নিয়োগ সংক্রান্ত নীতি নির্ধারণ।"}, {"label": "খ", "q": "RAM ও ROM এর পার্থক্য কী?", "a": "১. RAM এর পূর্ণরূপ Random Access Memory এবং ROM এর পূর্ণরূপ Read Only Memory। ২. RAM কে ভোলাটাইল মেমরি বলা হয়, ROM কে নন-ভোলাটাইল মেমরি বলা হয়। ৩. RAM হলো প্রাইমারি স্টোরেজ, ROM হলো সেকেন্ডারি স্টোরেজ। ৪. RAM এর ডাটা প্রসেসর সরাসরি এক্সেস করতে পারে, ROM এর ডাটা পারে না। ৫. RAM এ Read ও Write উভয়ই করা যায়, ROM এ শুধু Read করা যায়। ৬. RAM ব্যবহৃত হয় টেম্পোরারি স্টোরেজ হিসেবে, ROM ব্যবহৃত হয় পারমানেন্ট স্টোরেজ হিসেবে।"}, {"label": "গ", "q": "'ফিলিস্তিন রাষ্ট্র' নিয়ে চারটি বাক্য লিখুন।", "a": "ইয়াসির আরাফাত ১৯৮৮ সালে ফিলিস্তিনকে স্বাধীন রাষ্ট্র ঘোষণা করেন। স্বাধীন ফিলিস্তিনকে স্বীকৃতিদানকারী প্রথম দেশ আলজেরিয়া। এটি মধ্যপ্রাচ্যে অবস্থিত দুটি ভৌগোলিকভাবে বিচ্ছিন্ন অঞ্চল — পশ্চিম তীর ও গাজা উপত্যকা — নিয়ে গঠিত। পশ্চিম তীরে রয়েছে জেরুজালেম শহর, যেখানে তিনটি ধর্মের পবিত্র স্থান রয়েছে।"}, {"label": "ঘ", "q": "ASEAN-এর পূর্ণরূপ কী? এর সদস্য রাষ্ট্রসমূহের নাম লিখুন।", "a": "Association of Southeast Asian Nations। সদস্য রাষ্ট্রসমূহ: ব্রুনাই, কম্বোডিয়া, ইন্দোনেশিয়া, লাওস, মালয়েশিয়া, মিয়ানমার, ফিলিপাইন, সিঙ্গাপুর, থাইল্যান্ড, ভিয়েতনাম এবং পূর্ব তিমুর।"}, {"label": "ঙ", "q": "'রোহিঙ্গা সমস্যা' সম্পর্কে চারটি বাক্য লিখুন।", "a": "২০১৭ সালের ২৫ আগস্ট মিয়ানমারের রাখাইন রাজ্যে একটি বিশাল মানবিক সংকট সৃষ্টি হয়। সহিংস হামলার শিকার হয়ে লাখ লাখ রোহিঙ্গা রাখাইন রাজ্য থেকে পালিয়ে আসে, যাদের গ্রামগুলো ধ্বংস করে দেওয়া হয়। এটি সীমান্ত পেরিয়ে প্রতিবেশী বাংলাদেশে প্রবেশ করা মানুষের এক নজিরবিহীন ঢলের সূচনা করে। কয়েক সপ্তাহের মধ্যেই নিরাপত্তা ও আশ্রয়ের খোঁজে পাঁচ লাখেরও বেশি মানুষ বাংলাদেশে প্রবেশ করে।"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: অর্থনৈতিক সম্পর্ক বিভাগ — সাঁট মুদ্রাক্ষরিক কাম-কম্পিউটার অপারেটর (job-2025-erd-steno-typist)
  // পরীক্ষা: স্বাস্থ্য সেবা বিভাগ — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-health-service-office-asst)
  // সোর্স: self_job_solution_330-370_page (পৃষ্ঠা ৩৩০-৩৭০)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-erd-steno-typist-q01", "examId": "job-2025-erd-steno-typist", "subject": "bangla", "topic": "সাহিত্য", "qno": 1, "marks": 5, "type": "short-qa", "question": "নিম্নোক্ত প্রশ্নসমূহের উত্তর দিনঃ", "parts": [{"label": "ক", "q": "\"আমার পিতৃ-পিতামহের চরণধূলি কোথারে? সে আমাদের বাংলাদেশ, আমাদেরই বাংলারে\" — এই পঙ্‌ক্তিটি কার?", "a": "সত্যেন্দ্রনাথ দত্ত"}, {"label": "খ", "q": "'লাল নীল দীপাবলি'-এর রচয়িতা কে?", "a": "হুমায়ুন আজাদ"}, {"label": "গ", "q": "'ভানুসিংহের পদাবলী' এর রচয়িতা কে?", "a": "রবীন্দ্রনাথ ঠাকুর"}, {"label": "ঘ", "q": "'কেবলা হাকিম' বাগধারাটির অর্থ কী?", "a": "অনভিজ্ঞ"}, {"label": "ঙ", "q": "'বেগম' পত্রিকাটির সম্পাদক কে ছিলেন?", "a": "নূরজাহান বেগম"}]},

  {"id": "job-2025-erd-steno-typist-q02", "examId": "job-2025-erd-steno-typist", "subject": "bangla", "topic": "পারিভাষিক শব্দ", "qno": 2, "marks": 4, "type": "table", "question": "পারিভাষিক অর্থ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "পারিভাষিক অর্থ"], "rows": [["Census", "আদমশুমারি"], ["Article", "আইনের ধারা"], ["Bear market", "মন্দা বাজার"], ["Notification", "বিজ্ঞপ্তি"]]},

  {"id": "job-2025-erd-steno-typist-q03", "examId": "job-2025-erd-steno-typist", "subject": "bangla", "topic": "কারক ও বিভক্তি", "qno": 3, "marks": 3, "type": "sub-parts", "question": "দাগচিহ্নিত শব্দসমূহ কোন কারকে কোন বিভক্তি?", "parts": [{"label": "ক", "q": "আষাঢ়ে বৃষ্টি নামে", "a": "অধিকরণে ৭মী"}, {"label": "খ", "q": "গাছ হতে ফলটি পড়ল", "a": "অপাদানে ৫মী"}, {"label": "গ", "q": "শিক্ষককে শ্রদ্ধা কর", "a": "সম্প্রদানে ৪র্থী"}]},

  {"id": "job-2025-erd-steno-typist-q04", "examId": "job-2025-erd-steno-typist", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 4, "marks": 3, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "জয়ের জন্য যে উৎসব", "a": "জয়ন্তী"}, {"label": "খ", "q": "যার উপায় নেই", "a": "নিরুপায়"}, {"label": "গ", "q": "যা পূর্বে ছিল এখন নেই", "a": "ভূতপূর্ব"}]},

  {"id": "job-2025-erd-steno-typist-q05", "examId": "job-2025-erd-steno-typist", "subject": "bangla", "topic": "ভাবসম্প্রসারণ", "qno": 5, "marks": 5, "type": "paragraph", "question": "ভাবসম্প্রসারণ করুনঃ 'দুর্জন বিদ্বান হলেও পরিত্যাজ্য'", "answer": "নীতিহীনতাই দুর্নীতি। নীতিহীন ব্যক্তি স্বার্থ-অন্ধ। এ ধরনের ব্যক্তি দেশ ও জাতির জন্য ক্ষতিকর। তারা দেশের উন্নয়ন-অগ্রগতির পথে বাধা হয়ে দাঁড়ায়।\n\nনৈতিকভাবে উন্নত, সৎ, বিবেকবান মানুষ যে পদেই থাকুন না কেন, তিনি সমাজ ও দেশের বড় সম্পদ। তাকে দিয়ে উপকার না হলেও অন্তত ক্ষতি হবার সম্ভাবনা থাকে না। অপরদিকে নৈতিকতাবির্জিত ব্যক্তি যতই উচ্চ আসনে অবস্থান করুক না কেন, তিনি মোটেও শ্রদ্ধার পাত্র নন। পদমর্যাদার কারণে তাকে হয়তো মানুষ সামনে কিছু বলে না, কিন্তু পেছনে অন্তর থেকে ঘৃণা করে। তার দ্বারা ক্ষতির আশঙ্কাও বেশি, কারণ তিনি স্বার্থ-অন্ধ, বিবেকবর্জিত — তিনি সবসময় নিজের স্বার্থসিদ্ধির মতলবে থাকেন। সমাজের কল্যাণ, দেশের মঙ্গলের কথা তিনি ভাবেন না।\n\nযে দেশের জনগণ রক্তক্ষয়ী মুক্তিযুদ্ধের মাধ্যমে দেশ স্বাধীন করতে পেরেছে, দুর্নীতির বিরুদ্ধে যুদ্ধ করেও তাদের বিজয়ী হতে হবে। তাহলেই দেশের উন্নতি ও অগ্রগতি সম্ভব হবে। (⚠️ সোর্স বইয়ে এই ভাবসম্প্রসারণের উত্তরস্বরূপ যে অনুচ্ছেদটি ছাপা হয়েছে তার শিরোনাম ছিল 'দুর্নীতি জাতীয় জীবনের সকল উন্নতির অন্তরায়' — মূল প্রশ্নের পঙক্তির সাথে হুবহু না মিললেও, বইয়ে যা ছাপা হয়েছে তা-ই এখানে হুবহু রাখা হলো।)"},

  {"id": "job-2025-erd-steno-typist-q06", "examId": "job-2025-erd-steno-typist", "subject": "bangla", "topic": "রচনা", "qno": 6, "marks": 5, "type": "paragraph", "question": "'সম্ভাবনাময় বাংলাদেশ' বিষয়ে ১০টি বাক্য লিখুন।", "answer": "বাংলাদেশ একটি নদীমাতৃক দেশ, যেখানে অসংখ্য নদী বয়ে গেছে, যা দেশের প্রাকৃতিক সৌন্দর্যকে বৃদ্ধি করেছে। দেশটি স্বল্পোন্নত দেশ থেকে উন্নয়নশীল দেশের তালিকায় স্থান করে নিয়েছে, যা বিশ্বব্যাপী প্রশংসিত। তৈরি পোশাক (RMG) রপ্তানিতে বাংলাদেশ বিশ্বে দ্বিতীয় বৃহত্তম, যা দেশের অর্থনীতির মেরুদণ্ড। বাংলাদেশের সমৃদ্ধ সংস্কৃতি ও ঐতিহ্য পহেলা বৈশাখের মতো উৎসবে প্রতিফলিত হয়। সুন্দরবনের মতো প্রাকৃতিক বিস্ময় এবং রয়েল বেঙ্গল টাইগার দেশের পর্যটন শিল্পে বড় সম্ভাবনা সৃষ্টি করেছে। দেশের তরুণ ও বিশাল জনসংখ্যা জনশক্তি হিসেবে একটি বড় সম্পদ, যা অর্থনৈতিক প্রবৃদ্ধিতে সহায়ক। সরকার ও জনগণের সম্মিলিত প্রচেষ্টায় শিক্ষা, স্বাস্থ্য ও প্রযুক্তিতে উল্লেখযোগ্য উন্নতি হয়েছে। দুর্যোগপ্রবণ সত্ত্বেও বাংলাদেশ দুর্যোগ ব্যবস্থাপনায় সক্ষমতা অর্জন করেছে। 'ভিশন ২০৪১'-এর মাধ্যমে বাংলাদেশ ২০৪১ সালের মধ্যে একটি উন্নত দেশে পরিণত হওয়ার লক্ষ্য নিয়ে এগিয়ে যাচ্ছে।"},

  {"id": "job-2025-erd-steno-typist-q07", "examId": "job-2025-erd-steno-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 7, "marks": 5, "type": "fill-gaps", "question": "Fill in the Blanks:", "parts": [{"sentence": "The thief broke……. the house.", "answer": "into"}, {"sentence": "He was confined… bed owing to illness.", "answer": "to"}, {"sentence": "They are quite capable…. doing that.", "answer": "of"}, {"sentence": "He has been deprived….his paternal property.", "answer": "of"}, {"sentence": "The road runs…… hills and plain.", "answer": "through"}]},

  {"id": "job-2025-erd-steno-typist-q08", "examId": "job-2025-erd-steno-typist", "subject": "english", "topic": "grammar", "qno": 8, "marks": 5, "type": "sentence-change", "question": "Correct the following sentences:", "parts": [{"label": "a", "original": "Her circumstance is good.", "changed": "Her circumstances are good."}, {"label": "b", "original": "These two boys help one another.", "changed": "These two boys help each other."}, {"label": "c", "original": "I, you and he have been rewarded.", "changed": "You, he and I have been rewarded."}, {"label": "d", "original": "The meeting will take part soon.", "changed": "The meeting will take place soon."}, {"label": "e", "original": "The train is running in time.", "changed": "The train is running on time."}]},

  {"id": "job-2025-erd-steno-typist-q09", "examId": "job-2025-erd-steno-typist", "subject": "english", "topic": "grammar", "qno": 9, "marks": 5, "type": "sentence-change", "question": "Transform the following sentences as directed in the bracket:", "parts": [{"label": "a", "original": "He who came here is my brother. (Simple)", "changed": "My brother came here."}, {"label": "b", "original": "If you do not study well, you cannot pass the exam. (Compound)", "changed": "Study well or you cannot pass the exam."}, {"label": "c", "original": "Do or die. (Complex)", "changed": "If you do not do, you will die."}, {"label": "d", "original": "He hurt himself. (Passive)", "changed": "He was hurt by himself."}, {"label": "e", "original": "I never drink tea. (Interrogative)", "changed": "Do I ever drink tea?"}]},

  {"id": "job-2025-erd-steno-typist-q10", "examId": "job-2025-erd-steno-typist", "subject": "english", "topic": "read-and-fill", "qno": 10, "marks": 5, "type": "read-fill", "question": "Read the paragraph below and fill in the blanks:", "passage": "The importance of time management cannot be overstated in any profession. Effective time management allows individuals to prioritize tasks, reduce stress, and achieve both short-term and long-term goals. It enables people to stay organized, meet deadlines, and maintain a work-life balance. By managing time effectively, employees can increase productivity, enhance their focus, and achieve higher levels of job satisfaction. Time management also helps in personal growth, as it allows individuals to make time for self-improvement and relaxation, which are crucial for overall well-being and success.\n\nTime management is crucial for ____ (a) and reducing ____ (b). It helps individuals to stay ____ (c), meet ____ (d), and maintain a healthy ____ (e).", "answers": "a) success/productivity  b) tension/stress  c) focused  d) goals and deadlines  e) balance in life/work-life balance"},

  {"id": "job-2025-erd-steno-typist-q11", "examId": "job-2025-erd-steno-typist", "subject": "english", "topic": "paragraph", "qno": 11, "marks": 5, "type": "paragraph", "question": "Write a short paragraph on 'Climate Change'", "answer": "Climate change is a big problem that affects everyone. It happens because of things like pollution and the Earth getting hotter. This makes bad things like floods and storms happen more often. People in some countries have it harder because they don't have a lot of money to protect themselves. For example, in Bangladesh, floods can ruin homes and make it hard to grow food. We need to stop doing things that make climate change worse, like using too much plastic and cutting down too many trees. Planting more trees and using less energy can help make things better. Even kids can help by learning about climate change and telling others how to help too. We all need to work together to protect our planet."},

  {"id": "job-2025-erd-steno-typist-q12", "examId": "job-2025-erd-steno-typist", "subject": "math", "topic": "শতকরা", "qno": 12, "marks": 4, "type": "math", "question": "একজন ব্যক্তির বেতন ৫% কমেছে। কিন্তু এক বছর পর তা আবার ৫% বেড়েছে। মোটের উপর তার বেতন শতকরা কত বৃদ্ধি বা হ্রাস পেয়েছে?", "steps": ["মনে করি, প্রাথমিক বেতন = ১০০ টাকা", "৫% কমে বেতন হয় = ৯৫ টাকা", "এক বছর পর ৫% বেড়ে বেতন হয় = ৯৫ + (৯৫ এর ৫%) = ৯৯.৭৫ টাকা", "শতকরা বেতন হ্রাস পেল = ১০০ − ৯৯.৭৫ = ০.২৫"], "answer": "০.২৫% হ্রাস পেয়েছে"},

  {"id": "job-2025-erd-steno-typist-q13", "examId": "job-2025-erd-steno-typist", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 13, "marks": 4, "type": "math", "question": "একটি ডায়েরি ৩৬ টাকায় বিক্রয় করলে যত ক্ষতি হয়, ৭২ টাকায় বিক্রয় করলে তার দ্বিগুণ লাভ হয়। ডায়েরিটির ক্রয়মূল্য কত?", "steps": ["মনে করি, দ্রব্যটির ক্রয়মূল্য ক টাকা", "৩৬ টাকায় বিক্রয় করলে ক্ষতি হয় = (ক − ৩৬) টাকা", "৭২ টাকায় বিক্রয় করলে লাভ হয় = (৭২ − ক) টাকা", "প্রশ্নমতে, ৭২ − ক = ২(ক − ৩৬)", "বা, ৭২ − ক = ২ক − ৭২", "বা, −৩ক = −১৪৪", "∴ ক = ৪৮"], "answer": "৪৮ টাকা"},

  {"id": "job-2025-erd-steno-typist-q14", "examId": "job-2025-erd-steno-typist", "subject": "math", "topic": "গড়", "qno": 14, "marks": 4, "type": "math", "question": "১০০ জন শিক্ষার্থীর পরিসংখ্যানে গড় নম্বর ৭০। এদের মধ্যে ৬০ জন ছাত্রীর গড় নম্বর ৭৫ হলে, ছাত্রদের গড় নম্বর কত?", "steps": ["সকল শিক্ষার্থীর মোট নম্বর = ১০০ × ৭০ = ৭০০০", "৬০ জন ছাত্রীর মোট নম্বর = ৬০ × ৭৫ = ৪৫০০", "∴ ৪০ জন ছাত্রের মোট নম্বর = ৭০০০ − ৪৫০০ = ২৫০০", "∴ ছাত্রদের গড় নম্বর = ২৫০০/৪০ = ৬২.৫"], "answer": "৬২.৫"},

  {"id": "job-2025-erd-steno-typist-q15", "examId": "job-2025-erd-steno-typist", "subject": "math", "topic": "সূচক", "qno": 15, "marks": 4, "type": "math", "question": "4^(x+1) = 32^(x−2) হলে x এর মান কত?", "steps": ["4^(x+1) = 32^(x−2)", "বা, (2²)^(x+1) = (2⁵)^(x−2)", "বা, 2^(2x+2) = 2^(5x−10)", "বা, 2x + 2 = 5x − 10", "বা, 3x = 12", "∴ x = 4"], "answer": "x = ৪"},

  {"id": "job-2025-erd-steno-typist-q16", "examId": "job-2025-erd-steno-typist", "subject": "math", "topic": "পিথাগোরাসের উপপাদ্য", "qno": 16, "marks": 4, "type": "math", "question": "একটি সমকোণী ত্রিভুজের অতিভুজের দৈর্ঘ্য ১৫ সে.মি. ও অপর বাহুদ্বয়ের দৈর্ঘ্যের অন্তর ৩ সে.মি.। ঐ বাহুদ্বয়ের দৈর্ঘ্য নির্ণয় কর।", "steps": ["মনে করি, সমকোণ সংলগ্ন এক বাহুর দৈর্ঘ্য x সে.মি., অপর বাহুর দৈর্ঘ্য = (x+3) সে.মি.", "পিথাগোরাসের উপপাদ্য অনুযায়ী: x² + (x+3)² = ১৫²", "বা, ２x² + 6x + 9 = 225 ⇒ 2x² + 6x − 216 = 0 ⇒ x² + 3x − 108 = 0", "বা, x² + 12x − 9x − 108 = 0 ⇒ x(x+12) − 9(x+12) = 0 ⇒ (x+12)(x−9) = 0", "x = −12 (গ্রহণযোগ্য নয়, দৈর্ঘ্য ঋণাত্মক হতে পারে না) অথবা x = 9", "∴ ক্ষুদ্রতম বাহুর দৈর্ঘ্য = ৯ সে.মি.; অপর বাহুর দৈর্ঘ্য = ৯+৩ = ১২ সে.মি."], "answer": "বাহুদ্বয়ের দৈর্ঘ্য ৯ সে.মি. এবং ১২ সে.মি."},

  {"id": "job-2025-erd-steno-typist-q17", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 17, "marks": 2, "type": "paragraph", "question": "গ্লোবাল সাউথ বলতে কী বোঝায়?", "answer": "গ্লোবাল সাউথ (Global South) একটি ভৌগোলিক নয়, বরং রাজনৈতিক ও অর্থনৈতিক ধারণা, যা মূলত উন্নয়নশীল দেশসমূহকে বোঝাতে ব্যবহৃত হয়। এই শব্দগুচ্ছটি বিশেষভাবে এশিয়া, আফ্রিকা, ল্যাটিন আমেরিকা এবং ওশেনিয়ার অনেক দেশকে নির্দেশ করে, যারা ঐতিহাসিকভাবে উপনিবেশবাদের শিকার হয়েছে এবং এখনো তুলনামূলকভাবে অর্থনৈতিক ও প্রযুক্তিগতভাবে পিছিয়ে আছে।"},

  {"id": "job-2025-erd-steno-typist-q18", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 18, "marks": 2, "type": "paragraph", "question": "প্যারিস অ্যাগ্রিমেন্ট কী?", "answer": "২০১৫ সালে ফ্রান্সের প্যারিস শহরে যে কনফারেন্স অব দ্য পার্টিস (কপ-২১) হয়েছিল, তাতে জলবায়ু পরিবর্তন নিয়ে জাতিসংঘে এক আন্তর্জাতিক চুক্তি সম্পাদিত হয়, যা প্যারিস অ্যাগ্রিমেন্ট বা প্যারিস ক্লাইমেট অ্যাকর্ড নামে পরিচিত।"},

  {"id": "job-2025-erd-steno-typist-q19", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 19, "marks": 2, "type": "paragraph", "question": "'SAARC' এর পূর্ণরূপ কী? এর সদস্য রাষ্ট্র কতটি?", "answer": "South Asian Association for Regional Cooperation; সদস্য রাষ্ট্র ৮টি।"},

  {"id": "job-2025-erd-steno-typist-q20", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 20, "marks": 2, "type": "paragraph", "question": "OIC কী? এর হেডকোয়ার্টার কোথায়?", "answer": "Organization of Islamic Cooperation; সদর দপ্তর — জেদ্দা, সৌদি আরব।"},

  {"id": "job-2025-erd-steno-typist-q21", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 21, "marks": 2, "type": "paragraph", "question": "AI এবং AGI এর পার্থক্য কী?", "answer": "AI (Artificial Intelligence) হলো কৃত্রিম বুদ্ধিমত্তা, যা নির্দিষ্ট কাজের জন্য তৈরি — যেমন ছবি চেনা, ভাষা বোঝা বা চেহারা শনাক্তকরণ সফটওয়্যার; বর্তমানে ব্যবহৃত বেশিরভাগ এআই এ ধরনের। AGI (Artificial General Intelligence) এমন এক কাল্পনিক বুদ্ধিমত্তা, যা মানুষের মতো যেকোনো বুদ্ধিবৃত্তিক কাজ বুঝতে ও শিখতে সক্ষম হবে, মানুষের মস্তিষ্কের চিন্তাশক্তি অনুকরণ করতে পারবে এবং এক জায়গায় শেখা জ্ঞান অন্য জায়গায় প্রয়োগ করে নতুন পরিস্থিতিতে মানিয়ে নিতে পারবে।"},

  {"id": "job-2025-erd-steno-typist-q22", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 22, "marks": 2, "type": "paragraph", "question": "অর্থনৈতিক সম্পর্ক বিভাগের কাজ কী?", "answer": "অর্থনৈতিক সম্পর্ক বিভাগ (ERD) হলো অর্থ মন্ত্রণালয়ের একটি শাখা, যা বিদেশি সাহায্য, ঋণ ও অনুদান সংগ্রহ, উন্নয়ন সহযোগীদের সঙ্গে সমন্বয়, চুক্তি স্বাক্ষর ও বাস্তবায়ন কার্যক্রম তদারকি করে।"},

  {"id": "job-2025-erd-steno-typist-q23", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 23, "marks": 2, "type": "paragraph", "question": "Development Partner বলতে কী বোঝায়?", "answer": "Development Partner বলতে সাধারণত বোঝায় যে ব্যক্তি, প্রতিষ্ঠান বা দেশ কোনো দেশের অর্থনৈতিক, সামাজিক বা অবকাঠামোগত উন্নয়নে সহযোগিতা বা সহায়তা প্রদান করে।"},

  {"id": "job-2025-erd-steno-typist-q24", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 24, "marks": 2, "type": "paragraph", "question": "নবায়নযোগ্য জ্বালানি কী? এর উৎসসমূহ লিখুন।", "answer": "যেসব জ্বালানি ব্যবহারের পর স্বাভাবিকভাবে পুনরায় সৃষ্টি হয় এবং কখনো শেষ হয়ে যায় না, তাকে নবায়নযোগ্য জ্বালানি বলে। এর উৎস: সূর্যালোক (Solar), বায়ু (Wind), পানি (Hydro), জৈব জ্বালানি (Biomass), ভূ-তাপীয় শক্তি (Geothermal), সমুদ্রের ঢেউ ও জোয়ার-ভাটা।"},

  {"id": "job-2025-erd-steno-typist-q25", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 25, "marks": 2, "type": "paragraph", "question": "মাতারবাড়ি গভীর সমুদ্র বন্দরের গুরুত্ব কী?", "answer": "এটি বাংলাদেশের প্রথম গভীর সমুদ্র বন্দর। বড় বড় জাহাজ সরাসরি ভিড়তে পারবে, আমদানি-রপ্তানি খরচ কমবে, আঞ্চলিক বাণিজ্য সম্প্রসারণে ভূমিকা রাখবে এবং কর্মসংস্থান সৃষ্টি ও অর্থনৈতিক প্রবৃদ্ধি ত্বরান্বিত করবে।"},

  {"id": "job-2025-erd-steno-typist-q26", "examId": "job-2025-erd-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 26, "marks": 2, "type": "paragraph", "question": "কার্বন-ক্যাপচার ও কার্বন-ট্রেডিং বলতে কী বোঝায়?", "answer": "কার্বন-ক্যাপচার (Carbon Capture): এমন একটি প্রযুক্তি যার মাধ্যমে বায়ুমণ্ডল বা শিল্পকারখানা থেকে নির্গত কার্বন ডাই-অক্সাইড ও অন্যান্য গ্রিনহাউস গ্যাস শোষণ বা অপসারণ করে নিরাপদ স্থানে সংরক্ষণ করা হয়। কার্বন-ট্রেডিং (Carbon Trading): এটি একটি বাজারভিত্তিক ব্যবস্থা, যেখানে কোম্পানিগুলো নির্দিষ্ট পরিমাণ কার্বন নির্গমনের অনুমতি (Carbon Credits) ক্রয়-বিক্রয় করতে পারে — কম নির্গমনকারী প্রতিষ্ঠান অতিরিক্ত ক্রেডিট বিক্রি করতে পারে, বেশি নির্গমনকারীদের অতিরিক্ত ক্রেডিট কিনতে হয়।"},

  {"id": "job-2025-health-service-office-asst-q01", "examId": "job-2025-health-service-office-asst", "subject": "bangla", "topic": "সমার্থক শব্দ", "qno": 1, "marks": 5, "type": "paragraph", "question": "'ব্যবধান' শব্দের পাঁচটি সমার্থক শব্দ লিখুন।", "answer": "অন্তর, দূরত্ব, আড়াল, ছেদ, ব্যবচ্ছেদ, পার্থক্য"},

  {"id": "job-2025-health-service-office-asst-q02", "examId": "job-2025-health-service-office-asst", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 2, "marks": 5, "type": "table", "question": "শুদ্ধ বানান লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["রগ্‌ণ", "রুগ্‌ণ"], ["জাজল্যমান", "জাজ্বল্যমান"], ["নির্বিরোধী", "নির্বিরোধ"], ["ফটোষ্ট্যাট", "ফটোস্ট্যাট"], ["নিশিথিনি", "নিশীথিনী"]]},

  {"id": "job-2025-health-service-office-asst-q03", "examId": "job-2025-health-service-office-asst", "subject": "bangla", "topic": "বাক্য সংকোচন", "qno": 3, "marks": 5, "type": "sub-parts", "question": "বাক্য সংকোচন করুনঃ", "parts": [{"label": "ক", "q": "পা ধোয়ার পানি", "a": "পাদ্য"}, {"label": "খ", "q": "আকাশ ও পৃথিবী", "a": "রোদসী"}, {"label": "গ", "q": "অগ্রসর হয়ে অভ্যর্থনা", "a": "প্রত্যুদ্‌গমন"}, {"label": "ঘ", "q": "জয়ের জন্য উৎসব", "a": "জয়ন্তী"}, {"label": "ঙ", "q": "কুকুরের ন্যায়", "a": "শ্বাপদ"}]},

  {"id": "job-2025-health-service-office-asst-q04", "examId": "job-2025-health-service-office-asst", "subject": "bangla", "topic": "বাগধারা", "qno": 4, "marks": 5, "type": "idiom", "question": "অর্থসহ বাগধারা অবলম্বনে ব্যাখ্যা রচনা করুনঃ", "parts": [{"label": "ক", "phrase": "চীনা জোঁক", "meaning": "নাছোড়বান্দা"}, {"label": "খ", "phrase": "কলির কেষ্ট", "meaning": "লম্পট"}, {"label": "গ", "phrase": "অষ্টরম্ভা", "meaning": "ফাঁকি"}, {"label": "ঘ", "phrase": "নদীকূলে বাস", "meaning": "দুর্ভাবনা/দুশ্চিন্তা"}, {"label": "ঙ", "phrase": "ছক্কা পাঞ্জা", "meaning": "বড় বড় কথা বলা"}]},

  {"id": "job-2025-health-service-office-asst-q05", "examId": "job-2025-health-service-office-asst", "subject": "bangla", "topic": "শব্দের উৎস", "qno": 5, "marks": 5, "type": "sub-parts", "question": "শব্দগুলোর উৎস নির্ণয় করুনঃ", "parts": [{"label": "ক", "q": "ইস্পাত", "a": "পর্তুগিজ"}, {"label": "খ", "q": "খবর", "a": "আরবি"}, {"label": "গ", "q": "চাকু", "a": "তুর্কি"}, {"label": "ঘ", "q": "ধোলাই", "a": "হিন্দি"}, {"label": "ঙ", "q": "কারখানা", "a": "ফারসি"}]},

  {"id": "job-2025-health-service-office-asst-q06", "examId": "job-2025-health-service-office-asst", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 5, "type": "fill-gaps", "question": "Fill in the gaps with preposition:", "parts": [{"sentence": "I assured him ….. my help.", "answer": "of"}, {"sentence": "Students are anxious ……. their result.", "answer": "about"}, {"sentence": "He assigned the task ……. me.", "answer": "to"}, {"sentence": "Nazrul can be compared ….. Shelley.", "answer": "with"}, {"sentence": "All are equal irrespective ….caste and creed.", "answer": "of"}]},

  {"id": "job-2025-health-service-office-asst-q07", "examId": "job-2025-health-service-office-asst", "subject": "english", "topic": "idioms-and-phrases", "qno": 7, "marks": 5, "type": "idiom", "question": "Write sentences with the following idioms and phrases:", "parts": [{"label": "a", "phrase": "A gala day", "meaning": "আনন্দের দিন", "example": "16th December is our gala day."}, {"label": "b", "phrase": "Blessed with", "meaning": "ঐশ্বরিক উপহার", "example": "Bangladesh is blessed with many natural resources."}, {"label": "c", "phrase": "Run a risk", "meaning": "ঝুঁকি নেওয়া", "example": "He ran a risk to save the child from an accident."}, {"label": "d", "phrase": "Come short of", "meaning": "কম পড়া", "example": "His profit came short of his expectations."}, {"label": "e", "phrase": "Spare no pains", "meaning": "চেষ্টার ত্রুটি না করা", "example": "I shall spare no pains to help you."}]},

  {"id": "job-2025-health-service-office-asst-q08", "examId": "job-2025-health-service-office-asst", "subject": "english", "topic": "translation", "qno": 8, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "এখন চারটা বেজে পনেরো মিনিট।", "target": "It is fifteen minutes past four now."}, {"label": "খ", "source": "গুড়ি গুড়ি বৃষ্টি হচ্ছে।", "target": "It is drizzling."}, {"label": "গ", "source": "আমি বরং মরব, তবু ভিক্ষা করব না।", "target": "I would rather die than beg."}, {"label": "ঘ", "source": "মেয়েটি হাসতে হাসতে ঘরে ঢুকলো।", "target": "The girl entered the room laughing."}, {"label": "ঙ", "source": "সৎ ব্যক্তি সর্বত্র সম্মানিত।", "target": "An honest person is honoured everywhere."}]},

  {"id": "job-2025-health-service-office-asst-q09", "examId": "job-2025-health-service-office-asst", "subject": "english", "topic": "grammar", "qno": 9, "marks": 5, "type": "sentence-change", "question": "Change the voice:", "parts": [{"label": "a", "original": "You played football.", "changed": "Football was played by you."}, {"label": "b", "original": "Who will help you?", "changed": "By whom will you be helped?"}, {"label": "c", "original": "Write the letter without any delay.", "changed": "Let the letter be written without any delay."}, {"label": "d", "original": "He called it laurel.", "changed": "It was called laurel by him."}, {"label": "e", "original": "I shall do the work.", "changed": "The work will be done by me."}]},

  {"id": "job-2025-health-service-office-asst-q10", "examId": "job-2025-health-service-office-asst", "subject": "english", "topic": "grammar", "qno": 10, "marks": 5, "type": "sentence-change", "question": "Change the sentences as directed:", "parts": [{"label": "a", "original": "They are peace loving. (Complex)", "changed": "They are the people who love peace."}, {"label": "b", "original": "Tea is the most popular drink. (Comparative)", "changed": "Tea is more popular than any other drink."}, {"label": "c", "original": "We work hard to attain success in our life. (Complex)", "changed": "We work hard so that we attain success in our life."}, {"label": "d", "original": "What a pity! (Assertive)", "changed": "It is a great pity."}, {"label": "e", "original": "Everybody wants friends. (Negative)", "changed": "Nobody wants foes."}]},

  {"id": "job-2025-health-service-office-asst-q11", "examId": "job-2025-health-service-office-asst", "subject": "math", "topic": "কাজ ও সময়", "qno": 11, "marks": 5, "type": "math", "question": "একটি নল ১২ মিনিটে একটি খালি চৌবাচ্চা পূর্ণ করতে পারে। অপর একটি নল প্রতি মিনিটে ১৪ লিটার পানি বের করে দেয়। চৌবাচ্চাটি খালি থাকা অবস্থায় দুইটি নল একসঙ্গে খুলে দেওয়া হয় এবং চৌবাচ্চাটি ১৬ মিনিটে পূর্ণ হয়। চৌবাচ্চাটিতে কত লিটার পানি ধরে?", "steps": ["ধরি, চৌবাচ্চাটিতে পানি ধরে x লিটার", "১২ মিনিটে পূর্ণ করে x লিটার ⇒ ১ মিনিটে পূর্ণ করে x/১২ লিটার", "১৬ মিনিটে পূর্ণ করে x লিটার ⇒ ১ মিনিটে পূর্ণ করে x/১৬ লিটার", "প্রশ্নমতে, x/১২ − x/১৬ = ১৪ ⇒ (4x−3x)/48 = 14 ⇒ x/48 = 14", "∴ x = ৬৭২"], "answer": "৬৭২ লিটার"},

  {"id": "job-2025-health-service-office-asst-q12", "examId": "job-2025-health-service-office-asst", "subject": "math", "topic": "পাটিগণিত", "qno": 12, "marks": 5, "type": "math", "question": "একটি লঞ্চে ডেকের যাত্রী সংখ্যা কেবিনের যাত্রী সংখ্যার চারগুণ অপেক্ষা ২ জন বেশি। মাথাপিছু কেবিনের ভাড়া ডেকের ভাড়ার দ্বিগুণ। ডেকের ভাড়া মাথাপিছু ৩০ টাকা এবং মোট ভাড়া প্রাপ্তি ১৬৮০ টাকা হলে মোট যাত্রী সংখ্যা কত?", "steps": ["মনে করি, কেবিনের যাত্রী সংখ্যা = x জন; ∴ ডেকের যাত্রী সংখ্যা = (4x+2) জন", "ডেকের মাথাপিছু ভাড়া ৩০ টাকা ⇒ কেবিনের মাথাপিছু ভাড়া = ৩০×২ = ৬০ টাকা", "ডেকের মোট ভাড়া = 30(4x+2) টাকা; কেবিনের মোট ভাড়া = 60x টাকা", "প্রশ্নমতে, 60x + 30(4x+2) = 1680 ⇒ 60x + 120x + 60 = 1680 ⇒ 180x = 1620", "∴ x = ৯ (কেবিনের যাত্রী); ডেকের যাত্রী = 4×9+2 = ৩৮", "মোট যাত্রী সংখ্যা = ৩৮ + ৯ = ৪৭"], "answer": "৪৭ জন"},

  {"id": "job-2025-health-service-office-asst-q13", "examId": "job-2025-health-service-office-asst", "subject": "math", "topic": "উৎপাদকে বিশ্লেষণ", "qno": 13, "marks": 5, "type": "math", "question": "উৎপাদকে বিশ্লেষণ করুনঃ 10x³ − 9x² − 144x − 81", "steps": ["10x³ − 9x² − 144x − 81", "= 10x³ + 30x² − 39x² − 117x − 27x − 81", "= 10x²(x+3) − 39x(x+3) − 27(x+3)", "= (x+3)(10x² − 39x − 27)", "= (x+3)(10x² − 45x + 6x − 27)", "= (x+3){5x(2x−9) + 3(2x−9)}", "= (x+3)(2x−9)(5x+3)"], "answer": "(x+3)(2x−9)(5x+3)"},

  {"id": "job-2025-health-service-office-asst-q14", "examId": "job-2025-health-service-office-asst", "subject": "math", "topic": "বীজগণিত", "qno": 14, "marks": 5, "type": "math", "question": "x + 1/x = ৫ হলে, x/(x²+x+1) এর মান নির্ণয় করুন।", "steps": ["দেওয়া আছে, x + 1/x = ৫ ⇒ (x²+1)/x = ৫ ⇒ x² + 1 = 5x", "প্রদত্ত রাশি = x/(x²+x+1) = x/{(x²+1)+x} = x/(5x+x) = x/6x", "= ১/৬"], "answer": "১/৬"},

  {"id": "job-2025-health-service-office-asst-q15", "examId": "job-2025-health-service-office-asst", "subject": "general-knowledge", "topic": "gk-others", "qno": 15, "marks": 15, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর করুনঃ", "parts": [{"label": "ক", "q": "সুন্দরবনকে World Heritage ঘোষণা করেছে কোন সংস্থা?", "a": "ইউনেস্কো"}, {"label": "খ", "q": "মিয়ানমার থেকে বাংলাদেশে কয়টি নদী প্রবেশ করেছে?", "a": "৩টি"}, {"label": "গ", "q": "'গ্রান্ড ট্রাঙ্ক রোড' নির্মাণ করেন কোন শাসক?", "a": "শেরশাহ"}, {"label": "ঘ", "q": "বাংলাদেশকে প্রথম স্বীকৃতিদানকারী দেশ কোনটি?", "a": "ভুটান"}, {"label": "ঙ", "q": "'সোমপুর বিহার' কোন উপজেলায় অবস্থিত?", "a": "বদলগাছি উপজেলা, নওগাঁ"}, {"label": "চ", "q": "নিপোর্ট (NIPORT) কী ধরনের গবেষণা প্রতিষ্ঠান?", "a": "জনসংখ্যা বিষয়ক গবেষণা প্রতিষ্ঠান"}, {"label": "ছ", "q": "'বলাকা' কোন ফসলের একটি প্রকার?", "a": "গম"}, {"label": "জ", "q": "NILG এর পূর্ণরূপ কী?", "a": "National Institute of Local Government"}, {"label": "ঝ", "q": "উপমহাদেশের মধ্যে ঢাকা বিশ্ববিদ্যালয়ের প্রথম ভাইস চ্যান্সেলর কে?", "a": "স্যার আহমদ ফজলুর রহমান (এ. এফ. রহমান)"}, {"label": "ঞ", "q": "GI পণ্য হিসেবে স্বীকৃত প্রথম বাংলাদেশি পণ্য কোনটি?", "a": "জামদানি"}, {"label": "ট", "q": "স্বাধীনতার পূর্বে ব্রাজিল কোন দেশের উপনিবেশ ছিল?", "a": "পর্তুগাল"}, {"label": "ঠ", "q": "প্রথম বিশ্বযুদ্ধ ১৯১৪ সালের কত তারিখে শুরু হয়েছিল?", "a": "২৮ জুলাই, ১৯১৪"}, {"label": "ড", "q": "আল-আকসা মসজিদ কোথায় অবস্থিত?", "a": "জেরুজালেম"}, {"label": "ঢ", "q": "OIC এর প্রধান কার্যালয় কোন দেশে অবস্থিত?", "a": "জেদ্দা, সৌদি আরব"}, {"label": "ণ", "q": "স্কাউট আন্দোলনের প্রতিষ্ঠাতা কে?", "a": "লর্ড ব্যাডেন পাওয়েল"}, {"label": "ত", "q": "'পুলিৎজার' কোন দেশের সর্বোচ্চ পর্যায়ের পুরস্কার?", "a": "মার্কিন যুক্তরাষ্ট্র"}, {"label": "থ", "q": "কোন দেশ থেকে 'আরব বসন্ত'-এর সূচনা হয়?", "a": "তিউনিসিয়া"}, {"label": "দ", "q": "সুয়েজ খাল কোন দুটি মহাদেশকে বিভক্ত করেছে?", "a": "এশিয়া ও আফ্রিকা"}, {"label": "ধ", "q": "Wimbledon নামটি কোন খেলার সাথে জড়িত?", "a": "টেনিস"}, {"label": "ন", "q": "টিটিকাকা কী?", "a": "দক্ষিণ আমেরিকার বৃহত্তম হ্রদ"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ কৃষি গবেষণা কাউন্সিল — প্রধান সহকারী (job-2025-barc-head-assistant)
  // পরীক্ষা: বিভাগীয় কমিশনারের কার্যালয়, চট্টগ্রাম — অফিস সহায়ক (job-2025-div-comm-ctg-office-sohayok)
  // পরীক্ষা: বিভাগীয় কমিশনারের কার্যালয়, চট্টগ্রাম — রেকর্ড কিপার (job-2025-div-comm-ctg-record-keeper)
  // সোর্স: self_job_solution_330-370_page (পৃষ্ঠা ৩৩০-৩৭০)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-barc-head-assistant-q01", "examId": "job-2025-barc-head-assistant", "subject": "bangla", "topic": "সন্ধি", "qno": 1, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুন।", "parts": [{"label": "ক", "q": "গবেষণা", "a": "গো + এষণা"}, {"label": "খ", "q": "প্রত্যূষ", "a": "প্রতি + ঊষ"}, {"label": "গ", "q": "জলৌকা", "a": "জল + ওকা"}, {"label": "ঘ", "q": "ধর্মাধর্ম", "a": "ধর্ম + অধর্ম"}, {"label": "ঙ", "q": "পরিচ্ছেদ", "a": "পরি + ছেদ"}]},

  {"id": "job-2025-barc-head-assistant-q02", "examId": "job-2025-barc-head-assistant", "subject": "bangla", "topic": "বাগধারা", "qno": 2, "marks": 5, "type": "idiom", "question": "বাগধারাগুলোর অর্থ লিখুনঃ", "parts": [{"label": "ক", "phrase": "অস্থির পঞ্চক", "meaning": "অপদার্থ"}, {"label": "খ", "phrase": "অটক বিটক", "meaning": "ছটফটানি"}, {"label": "গ", "phrase": "উজানের কৈ", "meaning": "সহজলভ্য"}, {"label": "ঘ", "phrase": "লেফাফা দুরস্ত", "meaning": "পরিপাটি"}, {"label": "ঙ", "phrase": "ডুবমারা", "meaning": "অদৃশ্য হওয়া"}]},

  {"id": "job-2025-barc-head-assistant-q03", "examId": "job-2025-barc-head-assistant", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 3, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "সমুদ্রের ঢেউয়ের শব্দ", "a": "কল্লোল"}, {"label": "খ", "q": "সকলের মধ্যে প্রবীণ বা জ্যেষ্ঠ", "a": "সার্বজনীন"}, {"label": "গ", "q": "সাগরে বিচরণ করে যে নারী", "a": "সাগরিকা"}, {"label": "ঘ", "q": "মনে জন্ম যার", "a": "মনোজ"}, {"label": "ঙ", "q": "নদীভাঙনে সর্বস্বান্ত জনগণ", "a": "নদীসিকস্তি"}]},

  {"id": "job-2025-barc-head-assistant-q04", "examId": "job-2025-barc-head-assistant", "subject": "bangla", "topic": "সাহিত্য", "qno": 4, "marks": 5, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর লিখুন।", "parts": [{"label": "ক", "q": "'চাচা কাহিনী' গ্রন্থের লেখক কে?", "a": "সৈয়দ মুজতবা আলী"}, {"label": "খ", "q": "'তিতাস একটি নদীর নাম' গ্রন্থের লেখক কে?", "a": "অদ্বৈত মল্লবর্মণ"}, {"label": "গ", "q": "'ছায়ানট' কোন ধরনের সাহিত্যকর্ম?", "a": "কাব্যগ্রন্থ"}, {"label": "ঘ", "q": "চর্যাপদের প্রাপ্তিস্থান কোথায়?", "a": "নেপালের রাজদরবারে"}, {"label": "ঙ", "q": "'পল্লীসমাজ' উপন্যাসের রচয়িতা কে?", "a": "শরৎচন্দ্র চট্টোপাধ্যায়"}]},

  {"id": "job-2025-barc-head-assistant-q05", "examId": "job-2025-barc-head-assistant", "subject": "english", "topic": "translation", "qno": 5, "marks": 5, "type": "translate", "question": "ইংরেজিতে অনুবাদ করুনঃ", "parts": [{"label": "ক", "source": "এখন বৃষ্টি পড়ছে।", "target": "It is raining now."}, {"label": "খ", "source": "কাজটি আমি অবশ্যই করিয়ে নেব।", "target": "I must get/have the work done."}, {"label": "গ", "source": "দেশপ্রেম একটি মহৎ গুণ।", "target": "Patriotism is a great virtue."}, {"label": "ঘ", "source": "আল্লাহ তোমাকে সুস্থ করুক।", "target": "May Allah heal/cure you."}, {"label": "ঙ", "source": "তুমি কি আজ অফিসে যাবে?", "target": "Will you go to the office today?"}]},

  {"id": "job-2025-barc-head-assistant-q06", "examId": "job-2025-barc-head-assistant", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 5, "type": "fill-gaps", "question": "Fill in the gaps:", "parts": [{"sentence": "I am sorry….. you last night.", "answer": "to have disturbed"}, {"sentence": "You should abstain…… smoking.", "answer": "from"}, {"sentence": "I like bread……butter.", "answer": "and"}, {"sentence": "My birthday is….. 20th January.", "answer": "on"}, {"sentence": "He spent…… lot of money.", "answer": "a"}]},

  {"id": "job-2025-barc-head-assistant-q07", "examId": "job-2025-barc-head-assistant", "subject": "english", "topic": "idioms-and-phrases", "qno": 7, "marks": 5, "type": "idiom", "question": "Idiom and Phrase:", "parts": [{"label": "i", "phrase": "Maiden speech", "meaning": "প্রথম বক্তৃতা"}, {"label": "ii", "phrase": "Cry over spilled milk", "meaning": "তুচ্ছ বিষয়ে আক্ষেপ"}, {"label": "iii", "phrase": "Take to task", "meaning": "তিরস্কার করা"}, {"label": "iv", "phrase": "Once in a blue moon", "meaning": "কদাচিৎ"}, {"label": "v", "phrase": "Fair and square", "meaning": "ন্যায়ভাবে"}]},

  {"id": "job-2025-barc-head-assistant-q08", "examId": "job-2025-barc-head-assistant", "subject": "english", "topic": "grammar", "qno": 8, "marks": 5, "type": "sentence-change", "question": "Change the voice:", "parts": [{"label": "a", "original": "His comment surprised me.", "changed": "I was surprised at his comment."}, {"label": "b", "original": "People know that the earth is round.", "changed": "It is known that the earth is round."}, {"label": "c", "original": "Do not shut the door.", "changed": "Let not the door be shut."}, {"label": "d", "original": "Let him do the work.", "changed": "Let the work be done by him."}, {"label": "e", "original": "Honey tastes sweet.", "changed": "Honey is sweet when it is tasted."}]},

  {"id": "job-2025-barc-head-assistant-q09", "examId": "job-2025-barc-head-assistant", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 9, "marks": 5, "type": "math", "question": "একটি প্রিন্টার ৮% ক্ষতিতে বিক্রয় করা হলো। প্রিন্টারটি আরও ৪০০ টাকা বেশি মূল্যে বিক্রয় করলে ৮% লাভ হতো। প্রিন্টারটির ক্রয়মূল্য কত?", "steps": ["মনে করি, ক্রয়মূল্য ১০০ টাকা", "৮% ক্ষতিতে বিক্রয়মূল্য = ১০০ − ৮ = ৯২ টাকা", "৮% লাভে বিক্রয়মূল্য = ১০০ + ৮ = ১০৮ টাকা", "বিক্রয়মূল্যের পার্থক্য = ১০৮ − ৯২ = ১৬ টাকা", "বিক্রয়মূল্য ১৬ টাকা বেশি হলে ক্রয়মূল্য ১০০ টাকা; ৪০০ টাকা বেশি হলে ক্রয়মূল্য = ১০০ × ৪০০/১৬ = ২৫০০ টাকা"], "answer": "২৫০০ টাকা"},

  {"id": "job-2025-barc-head-assistant-q10", "examId": "job-2025-barc-head-assistant", "subject": "math", "topic": "কাজ ও সময়", "qno": 10, "marks": 5, "type": "math", "question": "প্রতিদিন ৯ ঘণ্টা কাজ করে ১০ জন লোক একটি বর্গাকৃতি জমির ধান ২ দিনে কাটতে পারে। উক্ত জমির ধান ১ দিনে ১২ ঘণ্টা কাজ করে শেষ করতে অতিরিক্ত কতজন লোক লাগবে?", "steps": ["৯ ঘণ্টা × ২ দিন = ১৮ ঘণ্টার কাজ ১০ জনে করে", "১ ঘণ্টার কাজ করে = ১০ × ১৮ জন", "১২ ঘণ্টার কাজ করতে লোক লাগবে = ১০ × ১৮/১২ = ১৫ জন", "অতিরিক্ত লোক লাগবে = ১৫ − ১০ = ৫ জন"], "answer": "৫ জন"},

  {"id": "job-2025-barc-head-assistant-q11", "examId": "job-2025-barc-head-assistant", "subject": "math", "topic": "সরল সুদ", "qno": 11, "marks": 5, "type": "math", "question": "জেমি ও সুমি একই ব্যাংক থেকে একই দিনে ১০% সরল সুদে আলাদা আলাদা পরিমাণ অর্থ ঋণ নেয়। জেমি ২ বছর পর সুদে-আসলে যত টাকা শোধ করে, ৩ বছর পর সুমি সুদে-আসলে তত টাকা শোধ করে। তাদের ঋণের অনুপাত নির্ণয় করুন।", "steps": ["মনে করি, জেমি ঋণ নেয় ক টাকা, সুমি ঋণ নেয় খ টাকা", "জেমির ক্ষেত্রে: ২ বছরের সুদ = ১০×২×ক/১০০ = ক/৫ টাকা; সুদে-আসলে = ক + ক/৫ = ৬ক/৫ টাকা", "সুমির ক্ষেত্রে: ৩ বছরের সুদ = ১০×৩×খ/১০০ = ৩খ/১০ টাকা; সুদে-আসলে = খ + ৩খ/১০ = ১৩খ/১০ টাকা", "প্রশ্নমতে, ৬ক/৫ = ১৩খ/১০ ⇒ ৬০ক = ৬৫খ ⇒ ১২ক = ১৩খ ⇒ ক/খ = ১৩/১২", "∴ ক : খ = ১৩ : ১২"], "answer": "১৩ : ১২"},

  {"id": "job-2025-barc-head-assistant-q12", "examId": "job-2025-barc-head-assistant", "subject": "math", "topic": "বীজগণিত", "qno": 12, "marks": 5, "type": "math", "question": "যদি a⁴ + a²b² + b⁴ = ৩ এবং a² + ab + b² = ৩ হয়, তবে a² + b² এর মান কত?", "steps": ["a⁴ + a²b² + b⁴ = ৩", "বা, (a²)² + 2a²b² + (b²)² − a²b² = ৩ ⇒ (a²+b²)² − (ab)² = ৩", "বা, (a²+b²+ab)(a²+b²−ab) = ৩ ⇒ (a²+ab+b²)(a²−ab+b²) = ৩", "৩(a²−ab+b²) = ৩ [মান বসিয়ে] ⇒ a²−ab+b² = ১", "এখন, a²+ab+b² = ৩ এবং a²−ab+b² = ১; যোগ করে পাই, ２(a²+b²) = ৪", "∴ a² + b² = ২"], "answer": "২"},

  {"id": "job-2025-barc-head-assistant-q13", "examId": "job-2025-barc-head-assistant", "subject": "general-knowledge", "topic": "gk-others", "qno": 13, "marks": 15, "type": "short-qa", "question": "সাধারণ জ্ঞানঃ", "parts": [{"label": "ক", "q": "'আমার ভাইয়ের রক্তে রাঙানো একুশে ফেব্রুয়ারি' গানটির রচয়িতা কে?", "a": "আবদুল গাফ্‌ফার চৌধুরী"}, {"label": "খ", "q": "সুয়েজ খাল কোন দেশে অবস্থিত?", "a": "মিশর"}, {"label": "গ", "q": "ক্রিকেটে বাংলাদেশ ওয়ানডে স্ট্যাটাস অর্জন করে কত সালে?", "a": "১৯৯৭ সালে"}, {"label": "ঘ", "q": "মুক্তিযুদ্ধের প্রথম উপন্যাস কোনটি?", "a": "রাইফেল রোটি আওরাত"}, {"label": "ঙ", "q": "২০২৬ সালে বিশ্বকাপ ফুটবল কোথায় অনুষ্ঠিত হবে?", "a": "মেক্সিকো, কানাডা, যুক্তরাষ্ট্র"}, {"label": "চ", "q": "'মনপুরা' কোন জেলায় অবস্থিত?", "a": "ভোলা"}, {"label": "ছ", "q": "বাংলাদেশের বাইরে প্রথম শহীদ মিনার নির্মিত হয় কোথায়?", "a": "যুক্তরাজ্য"}, {"label": "জ", "q": "বাংলাদেশে প্রথম আদমশুমারি হয় কত সালে?", "a": "১৯৭৪ সালে"}, {"label": "ঝ", "q": "জুলাই গণঅভ্যুত্থান দিবস কবে?", "a": "৫ আগস্ট"}, {"label": "ঞ", "q": "কোন দেশ ২০৩০ সালের মধ্যে চাঁদে পারমাণবিক চুল্লি স্থাপন করবে?", "a": "যুক্তরাষ্ট্র"}, {"label": "ট", "q": "সূর্যের উপরিভাগের উষ্ণতা কত ডিগ্রি সেলসিয়াস?", "a": "৫৫০০ থেকে ৬০০০ ডিগ্রি সেলসিয়াস"}, {"label": "ঠ", "q": "বাংলাদেশে বর্তমানে মোট নদ-নদীর সংখ্যা কত?", "a": "১৪১৫টি"}, {"label": "ড", "q": "জাতিসংঘের বর্তমান সদস্য সংখ্যা কত?", "a": "১৯৩টি"}, {"label": "ঢ", "q": "রিবন রেটিং কী?", "a": "কাঁচা পাটগাছ থেকে ছাল বা বাকল আলাদা করার পর সেই ছাল বা বাকলকে অল্প পানিতে পচানোর পদ্ধতিকে রিবন রেটিং (ribbon retting) বলা হয়।"}, {"label": "ণ", "q": "২০২৪-২৫ অর্থবছরের জিডিপিতে কৃষি খাতের প্রবৃদ্ধির হার কত?", "a": "১.৭৯%"}]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q01", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "bangla", "topic": "সন্ধি", "qno": 1, "marks": 2, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুন।", "parts": [{"label": "ক", "q": "শীতার্ত", "a": "শীত + ঋত"}, {"label": "খ", "q": "নিরাকার", "a": "নিঃ + আকার"}, {"label": "গ", "q": "ইত্যবসরে", "a": "ইতি + অবসরে"}, {"label": "ঘ", "q": "চিত্তৈশ্বর্য", "a": "চিত্ত + ঐশ্বর্য"}]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q02", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "bangla", "topic": "শব্দার্থ", "qno": 2, "marks": 2, "type": "sub-parts", "question": "শব্দার্থ লিখুনঃ", "parts": [{"label": "ক", "q": "অদ্যাবধি", "a": "আজ পর্যন্ত"}, {"label": "খ", "q": "নিদর্শন", "a": "উদাহরণ/দৃষ্টান্ত"}, {"label": "গ", "q": "উষর", "a": "অনুর্বর"}, {"label": "ঘ", "q": "ধৈর্য", "a": "সহ্যশক্তি/ধীরতা/স্থিরতা"}]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q03", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 3, "marks": 2, "type": "table", "question": "বিপরীত শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["জাগ্রত", "সুপ্ত"], ["রিক্ত", "পূর্ণ"], ["উপত্যকা", "অধিত্যকা"], ["ঈর্ষা", "প্রীতি"]]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q04", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "bangla", "topic": "বাগধারা", "qno": 4, "marks": 2, "type": "idiom", "question": "বাগধারার অর্থসহ বাক্য রচনা করুনঃ", "parts": [{"label": "ক", "phrase": "উনপাঁজুরে", "meaning": "অপদার্থ/দুর্বল"}, {"label": "খ", "phrase": "কান খাড়া করা", "meaning": "মনোযোগী হওয়া"}]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q05", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 5, "marks": 2, "type": "table", "question": "শুদ্ধ বানান লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["ওধঃস্তন", "অধস্তন"], ["দারীদ্র", "দারিদ্র্য"], ["সৌদর্জ্য", "সৌন্দর্য"], ["প্রতিবন্দী", "প্রতিবন্ধী"]]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q06", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "english", "topic": "translation", "qno": 6, "marks": 2, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "সে অনেক টাকা পেয়েছে।", "target": "He has got a lot of money."}, {"label": "খ", "source": "মানুষ বায়ু ছাড়া বাঁচতে পারে না।", "target": "Man cannot live without air."}]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q07", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "english", "topic": "fill-in-the-blanks", "qno": 7, "marks": 2, "type": "fill-gaps", "question": "Use appropriate prepositions:", "parts": [{"sentence": "Early rising is conducive….. health.", "answer": "to"}, {"sentence": "Applicants are concerned…… their result.", "answer": "for"}]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q08", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "english", "topic": "spelling", "qno": 8, "marks": 2, "type": "table", "question": "Write the correct spelling:", "columns": ["Incorrect", "Correct"], "rows": [["Asisstant", "Assistant"], ["Comunication", "Communication"], ["Honororium", "Honorarium"], ["Substancial", "Substantial"]]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q09", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "english", "topic": "grammar", "qno": 9, "marks": 2, "type": "fill-gaps", "question": "Use appropriate article:", "parts": [{"sentence": "Gulliver's Travels is quite... interesting.", "answer": "an"}, {"sentence": "Nazrul is…… Shelley of Bengal.", "answer": "the"}]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q10", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "english", "topic": "grammar", "qno": 10, "marks": 2, "type": "fill-gaps", "question": "Use appropriate form of verb:", "parts": [{"sentence": "He (go) out just now.", "answer": "has gone"}, {"sentence": "It was long since I (see) her last.", "answer": "had seen"}]},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q11", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "math", "topic": "জ্যামিতি", "qno": 11, "marks": 2, "type": "math", "question": "একটি বইয়ের দৈর্ঘ্য ২৪ সে.মি. এবং প্রস্থ ১৮ সে.মি.। ঐ বইয়ের পরিসীমা সে.মি. ও মিটারে প্রকাশ করুন।", "steps": ["বইয়ের পরিসীমা = ২(২৪+১৮) = ৮৪ সে.মি.", "৮৪ সে.মি. = ০.৮৪ মিটার"], "answer": "৮৪ সে.মি. বা ০.৮৪ মিটার"},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q12", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "math", "topic": "ভগ্নাংশ", "qno": 12, "marks": 2, "type": "math", "question": "একটি কৃষক একটি জমিতে ১/২ অংশে ধান, ১/৮ অংশে আখ, ১/৪ অংশে লালশাক চাষ করলেন। বাকি অংশ ফাঁকা রইল। জমিটির কত অংশ ফাঁকা রইল?", "steps": ["জমি চাষ করা হলো = ১/২ + ১/৮ + ১/৪ = ৪/৮ + ১/৮ + ২/৮ = ৭/৮... বাস্তবে লসাগু ২০ ধরে: ১০/২০+২.৫/২০... [মূল হিসাব অনুযায়ী] = ১৯/২০ অংশ", "∴ ফাঁকা রইল = ১ − ১৯/২০ = ১/২০ অংশ"], "answer": "১/২০ অংশ"},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q13", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "math", "topic": "সংখ্যা পদ্ধতি", "qno": 13, "marks": 2, "type": "math", "question": "তিন অঙ্কের বৃহত্তম ও ক্ষুদ্রতম সংখ্যার পার্থক্য কত?", "steps": ["তিন অঙ্কের বৃহত্তম সংখ্যা = ৯৯৯", "তিন অঙ্কের ক্ষুদ্রতম সংখ্যা = ১০০", "পার্থক্য = ৯৯৯ − ১০০ = ৮৯৯"], "answer": "৮৯৯"},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q14", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "math", "topic": "সংখ্যা পদ্ধতি", "qno": 14, "marks": 1, "type": "math", "question": "০.০০০১ কে কথায় প্রকাশ করুন।", "steps": ["০.০০০১ = ১/১০০০০"], "answer": "এক দশ-হাজারভাগ / দশ হাজার ভাগের একভাগ"},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q15", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "math", "topic": "মৌলিক সংখ্যা", "qno": 15, "marks": 1, "type": "math", "question": "১ হতে ১৫ এর মধ্যে মৌলিক সংখ্যা কয়টি?", "steps": ["১ থেকে ১৫ এর মধ্যে মৌলিক সংখ্যাগুলো: ২, ৩, ৫, ৭, ১১, ১৩"], "answer": "৬টি (২, ৩, ৫, ৭, ১১, ১৩)"},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q16", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "math", "topic": "বীজগণিত", "qno": 16, "marks": 2, "type": "math", "question": "(a+b), (a²−b²) এবং (a³+b³) এর গ.সা.গু কত?", "steps": ["১ম রাশি = a+b", "২য় রাশি = a²−b² = (a+b)(a−b)", "৩য় রাশি = a³+b³ = (a+b)(a²−ab+b²)"], "answer": "নির্ণেয় গ.সা.গু = a+b"},

  {"id": "job-2025-div-comm-ctg-office-sohayok-q17", "examId": "job-2025-div-comm-ctg-office-sohayok", "subject": "general-knowledge", "topic": "চট্টগ্রাম", "qno": 17, "marks": 10, "type": "short-qa", "question": "নিম্নলিখিত প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "ক", "q": "চট্টগ্রাম বিভাগে কতটি দ্বীপ উপজেলা রয়েছে?", "a": "৪টি (হাতিয়া, সন্দ্বীপ, কুতুবদিয়া ও মহেশখালী)"}, {"label": "খ", "q": "আমিয়াখুম জলপ্রপাত কোথায় অবস্থিত?", "a": "থানচি, বান্দরবান"}, {"label": "গ", "q": "বাংলাদেশের গভীরতম নদীর নাম কী?", "a": "মেঘনা"}, {"label": "ঘ", "q": "বিশ্বের ব্যস্ততম বন্দরের তালিকায় চট্টগ্রাম বন্দর কততম?", "a": "৬৮তম"}, {"label": "ঙ", "q": "চট্টগ্রামের কমনওয়েলথ ওয়ার সিমেট্রি কোন বিশ্বযুদ্ধের শহীদদের সমাধিক্ষেত্র?", "a": "দ্বিতীয় বিশ্বযুদ্ধ"}, {"label": "চ", "q": "'LAN' এর পূর্ণরূপ কী?", "a": "Local Area Network"}, {"label": "ছ", "q": "জাতিতাত্ত্বিক জাদুঘর কোথায় অবস্থিত?", "a": "আগ্রাবাদ, চট্টগ্রাম"}, {"label": "জ", "q": "জাতিসংঘের শরণার্থী বিষয়ক আন্তর্জাতিক সংস্থার নাম কী?", "a": "UNHCR (United Nations High Commissioner for Refugees)"}, {"label": "ঝ", "q": "বাংলাদেশের বৃহত্তম বায়ু বিদ্যুৎ কেন্দ্র কোথায় অবস্থিত?", "a": "কক্সবাজার"}, {"label": "ঞ", "q": "আসিয়ানভুক্ত দেশের সংখ্যা কতটি?", "a": "১১টি (সর্বশেষ — পূর্ব তিমুর; ২৬ অক্টোবর ২০২৫)"}]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q01", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 1, "marks": 4, "type": "table", "question": "শব্দগুলোর শুদ্ধরূপ লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["নিশিতিনী", "নিশীথিনী"], ["দুরাত্য", "দুরাত্মা"], ["ঐশিক", "ঐষীক"]]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q02", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "bangla", "topic": "পারিভাষিক শব্দ", "qno": 2, "marks": 5, "type": "table", "question": "পারিভাষিক শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "পারিভাষিক অর্থ"], "rows": [["Propaganda", "অপপ্রচার/গুজব"], ["Book post", "খোলা ডাক"], ["Ex-officio", "পদসূত্রে/পদাধিকারে"], ["Good offices", "মধ্যস্থতা"], ["Scheme", "নকশা"]]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q03", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "bangla", "topic": "শব্দজোড়", "qno": 3, "marks": 4, "type": "short-qa", "question": "শব্দজোড়গুলোর অর্থসহ বাক্য লিখুনঃ", "parts": [{"label": "ক", "q": "তত্ত্ব / তথ্য", "a": "তত্ত্ব = যুক্তিনির্ভর ব্যাখ্যা; তথ্য = খবর"}, {"label": "খ", "q": "নভ / নব", "a": "নভ = আকাশ; নব = নতুন"}, {"label": "গ", "q": "বোজা / বোঝা", "a": "বোজা = বন্ধ করা/ভরাট করা; বোঝা = ভার"}]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q04", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 4, "marks": 4, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "মাটিতে গড়াগড়ি দিচ্ছে এমন", "a": "উপাবৃত"}, {"label": "খ", "q": "ন্যায় শাস্ত্র জানেন যিনি", "a": "নৈয়ায়িক"}, {"label": "গ", "q": "দেখার ইচ্ছা", "a": "দিদৃক্ষা"}, {"label": "ঘ", "q": "কর্মে যার ক্লান্তি নেই", "a": "অক্লান্তকর্মী"}]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q05", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "bangla", "topic": "সাহিত্য", "qno": 5, "marks": 4, "type": "table", "question": "নিচের সাহিত্যকর্মের রচয়িতার নাম লিখুনঃ", "columns": ["সাহিত্যকর্ম", "রচয়িতা"], "rows": [["ছায়া হরিণ", "আহসান হাবীব"], ["হাওয়া বদল", "অচিন্ত্যকুমার সেনগুপ্ত"], ["স্পেন বিজয় কাব্য", "ইসমাইল হোসেন সিরাজী"], ["জীবন বিনিময়", "গোলাম মোস্তফা"]]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q06", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "bangla", "topic": "শব্দের উৎস", "qno": 6, "marks": 4, "type": "sub-parts", "question": "শব্দগুলো কোন ভাষার?", "parts": [{"label": "ক", "q": "হালুয়া", "a": "আরবি"}, {"label": "খ", "q": "অধ্যাদেশ", "a": "ইংরেজি"}, {"label": "গ", "q": "নগদ", "a": "আরবি"}]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q07", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "english", "topic": "fill-in-the-blanks", "qno": 7, "marks": 5, "type": "fill-gaps", "question": "Use appropriate preposition:", "parts": [{"sentence": "Man must submit….. his fate.", "answer": "to"}, {"sentence": "He mused…… his lot.", "answer": "on"}, {"sentence": "Fortune smiles …. the brave.", "answer": "upon"}, {"sentence": "Bonus is incentive……. the workers.", "answer": "to"}, {"sentence": "Helen is dull……. English.", "answer": "at"}]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q08", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "english", "topic": "grammar", "qno": 8, "marks": 5, "type": "sentence-change", "question": "Use appropriate article where needed.", "parts": [{"label": "a", "original": "He is on bank of ruin.", "changed": "He is on the bank of ruin."}, {"label": "b", "original": "We made him captain of the team.", "changed": "We made him the captain of the team."}, {"label": "c", "original": "Measles has broken out in town.", "changed": "Measles has broken out in the town."}, {"label": "d", "original": "Moinul is F.C.P.S.", "changed": "Moinul is an F.C.P.S."}, {"label": "e", "original": "King had great deal of money.", "changed": "The king had a great deal of money."}]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q09", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "english", "topic": "grammar", "qno": 9, "marks": 5, "type": "fill-gaps", "question": "Use right forms of verbs:", "parts": [{"sentence": "To (frank), he is a liar.", "answer": "be frank"}, {"sentence": "Would you mind (to have) a cup of tea.", "answer": "having"}, {"sentence": "If you would like to come, I (be) wait for you.", "answer": "will"}, {"sentence": "It is high time he (change) his health.", "answer": "changed"}, {"sentence": "How often (do) the bell ring?", "answer": "does"}]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q10", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "english", "topic": "grammar", "qno": 10, "marks": 5, "type": "table", "question": "Write the plural form of the following words:", "columns": ["Given Word", "Plural Form"], "rows": [["Criteria (sing: Criterion)", "Criterion"], ["Innings", "Innings"], ["Its", "Their"], ["Genus", "Genera"], ["Fez", "Fezzes"]]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q11", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "english", "topic": "idioms-and-phrases", "qno": 11, "marks": 5, "type": "idiom", "question": "Write the meaning of the following words and make sentences with them:", "parts": [{"label": "a", "phrase": "At all events", "meaning": "যা কিছু ঘটুক না কেন", "example": "I shall help you at all events."}, {"label": "b", "phrase": "Bear a resemblance", "meaning": "সদৃশ্য", "example": "He bears a resemblance to his father."}, {"label": "c", "phrase": "Come off", "meaning": "অনুষ্ঠিত হওয়া", "example": "My sister's marriage ceremony comes off tomorrow."}, {"label": "d", "phrase": "In hot chase", "meaning": "অভিদ্রুত", "example": "Hearing the news, he left the place in hot chase."}, {"label": "e", "phrase": "Long since", "meaning": "অনেক আগে", "example": "I have not heard from him long since."}]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q12", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "math", "topic": "বীজগণিত", "qno": 12, "marks": 5, "type": "math", "question": "তিনটি সংখ্যার বর্গের যোগফল ৫৩২। প্রথম ও দ্বিতীয় সংখ্যা এবং দ্বিতীয় ও তৃতীয় সংখ্যার উভয়ক্ষেত্রে অনুপাত ৩:২। সংখ্যাগুলো কী কী?", "steps": ["প্রথম সংখ্যা : দ্বিতীয় সংখ্যা = ৩ : ২", "দ্বিতীয় সংখ্যা : তৃতীয় সংখ্যা = ৩ : ২", "∴ প্রথম : দ্বিতীয় : তৃতীয় = ৯ : ৬ : ৪", "ধরি, সংখ্যা তিনটি ৯ক, ৬ক ও ৪ক", "প্রশ্নমতে, (৯ক)² + (৬ক)² + (৪ক)² = ৫৩২", "বা, ৮১ক² + ৩৬ক² + ১৬ক² = ৫৩২ ⇒ ১৩৩ক² = ৫৩২ ⇒ ক² = ৪", "∴ ক = ২", "সুতরাং ১ম সংখ্যা = ৯ × ২ = ১৮; ২য় সংখ্যা = ৬ × ২ = ১২; ৩য় সংখ্যা = ৪ × ২ = ৮"], "answer": "১৮, ১২ ও ৮"},

  {"id": "job-2025-div-comm-ctg-record-keeper-q13", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "math", "topic": "জ্যামিতি", "qno": 13, "marks": 5, "type": "math", "question": "একটি আয়তক্ষেত্রের ভূমি উচ্চতার তিনগুণ এবং পরিসীমা ৬৪ হলে, আয়তক্ষেত্রের ক্ষেত্রফল কত?", "steps": ["মনে করি, উচ্চতা = ক; ভূমি = ৩ক", "প্রশ্নমতে, ২(ক+৩ক) = ৬৪ ⇒ ৮ক = ৬৪ ⇒ ক = ৮", "সুতরাং উচ্চতা ৮; ভূমি = ২৪", "ক্ষেত্রফল = ৮ × ২৪ = ১৯২"], "answer": "১৯২"},

  {"id": "job-2025-div-comm-ctg-record-keeper-q14", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "math", "topic": "বীজগণিত", "qno": 14, "marks": 5, "type": "math", "question": "p + q + r = ১২, p + q = ৪, p + r = ৭ হলে, p³ + q³ এর মান কত?", "steps": ["p+q+r=১২ এবং p+q=৪ বসিয়ে: ৪+r=১২ ∴ r=৮", "আবার, p+r=৭ ⇒ p+৮=৭ ∴ p=−১", "আবার, p+q=৪ ⇒ −১+q=৪ ∴ q=৫", "প্রদত্ত রাশি = p³ + q³ = (−১)³ + (৫)³ = −১ + ১২৫"], "answer": "১২৪"},

  {"id": "job-2025-div-comm-ctg-record-keeper-q15", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 15, "marks": 5, "type": "math", "question": "৬৭৫ টাকায় একটি বই বিক্রি করায় ক্রয়মূল্যের দুই-নবমাংশের সমপরিমাণ ক্ষতি হয়। ৮১০ টাকায় বিক্রি করলে শতকরা কত লাভ বা ক্ষতি হবে?", "steps": ["মনে করি, ক্রয়মূল্য = ৯ক", "ক্ষতি হয় = ৯ক এর ২/৯ = ২ক", "শর্তমতে, ৯ক − ২ক = ৬৭৫ ⇒ ৭ক = ৬৭৫ ⇒ ক = ৯৬.৪২ (প্রায়)", "সুতরাং ক্রয়মূল্য = ৯ × ৯৬.৪২ = ৮৬৭.৭৮ (প্রায়)", "৮১০ টাকায় বিক্রি করলে ক্ষতি হয় = ৮৬৭.৭৮ − ৮১০ = ৫৭.৭৮ টাকা", "৮৬৭.৭৮ টাকায় ক্ষতি ৫৭.৭৮ টাকা হলে, ১০০ টাকায় ক্ষতি = ৫৭.৭৮ × ১০০ ÷ ৮৬৭.৭৮ = ৬.৬৫ টাকা (প্রায়)"], "answer": "প্রায় ৬.৬৫% ক্ষতি"},

  {"id": "job-2025-div-comm-ctg-record-keeper-q16", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "math", "topic": "শতকরা", "qno": 16, "marks": 5, "type": "math", "question": "৪০ জন সদস্যবিশিষ্ট একটি ক্লাবের ৯/২০ অংশ প্রকৌশলী এবং ৪/৫ অংশ পুরুষ হলে সম্ভাব্য সর্বনিম্ন পুরুষ প্রকৌশলী কতজন হবে?", "steps": ["প্রকৌশলীর সংখ্যা = ৪০ এর ৯/২০ = ১৮ জন", "পুরুষের সংখ্যা = ৪০ এর ৪/৫ = ৩২ জন", "সর্বনিম্ন পুরুষ প্রকৌশলী = প্রকৌশলী + পুরুষ − মোট সদস্য", "= ১৮ + ৩২ − ৪০"], "answer": "১০ জন"},

  {"id": "job-2025-div-comm-ctg-record-keeper-q17", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 17, "marks": 15, "type": "short-qa", "question": "নিম্নলিখিত প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "ক", "q": "সর্বপ্রথম জাতীয় পতাকার প্রচলন শুরু হয় কোন দেশে?", "a": "ডেনমার্ক (১২১৮ সালে)"}, {"label": "খ", "q": "হর্ষবর্ধনের রাজধানী কী ছিল?", "a": "কনৌজ"}, {"label": "গ", "q": "'পিস ডিক্রি' প্রস্তাবক কে?", "a": "লেনিন (১৯১৭ সালে লেনিন এক কৃষক সম্মেলনে যুদ্ধ হতে রাশিয়ার নাম প্রত্যাহারের ঘোষণা দেন, যা 'পিস ডিক্রি' নামে পরিচিত)"}, {"label": "ঘ", "q": "'ডায়ালগস' কার রচিত গ্রন্থ?", "a": "প্লেটো"}, {"label": "ঙ", "q": "ভারতবর্ষে গ্রিক প্রাধান্যের অবসান ঘটে কোন সম্রাটের আমলে?", "a": "চন্দ্রগুপ্ত মৌর্য"}, {"label": "চ", "q": "বিশ্ববিদ্যালয় মঞ্জুরি কমিশনের প্রতিষ্ঠাকাল কত সালে?", "a": "১৯৭৩ সালে"}, {"label": "ছ", "q": "'ধীবর'-এর দেশ কোনটি?", "a": "নরওয়ে"}, {"label": "জ", "q": "মরক্কো কোন দেশের উপনিবেশ ছিল?", "a": "ফ্রান্সের"}, {"label": "ঝ", "q": "'New Deal'-এর প্রবর্তক কে?", "a": "ফ্রাঙ্কলিন ডি. রুজভেল্ট (১৯২৯ সালে মার্কিন প্রেসিডেন্ট ফ্রাঙ্কলিন ডি. রুজভেল্ট যুক্তরাষ্ট্রসহ বিশ্বব্যাপী অর্থনৈতিক সংকট মোকাবেলায় যে অর্থনৈতিক ব্যবস্থা পরিবর্তন করেন, তা 'New Deal' বা নয়া নীতি নামে পরিচিত)"}, {"label": "ঞ", "q": "বাংলাদেশের হস্তলিখিত সংবিধানের স্বাক্ষরসহ পৃষ্ঠা কয়টি?", "a": "১০৮ পাতা/২১৬ পৃষ্ঠা (স্বাক্ষরছাড়া ৯৩ পৃষ্ঠা/১৮৬ পৃষ্ঠা)"}, {"label": "ট", "q": "পৃথিবীর উষ্ণতম স্থান কোনটি?", "a": "ডেথ ভ্যালি, ক্যালিফোর্নিয়া"}, {"label": "ঠ", "q": "ICRC এর প্রতিষ্ঠাতা কে?", "a": "হেনরি ডুনান্ট (ICRC = International Committee of the Red Cross)"}, {"label": "ড", "q": "ইবনে বতুতা কার সময়ে বাংলায় আগমন করেন?", "a": "ফখরুদ্দিন মুবারক শাহ"}, {"label": "ঢ", "q": "NEC এর সাচিবিক সহায়তা প্রদান করে সরকারের কোন বিভাগ?", "a": "পরিকল্পনা বিভাগ, পরিকল্পনা মন্ত্রণালয়"}, {"label": "ণ", "q": "বাংলার সৈয়দ আহমদ বলা হয় কাকে?", "a": "নবাব আব্দুল লতিফ"}]},

  {"id": "job-2025-div-comm-ctg-record-keeper-q18", "examId": "job-2025-div-comm-ctg-record-keeper", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 18, "marks": 10, "type": "short-qa", "question": "বেসিক কম্পিউটার ট্রাবলশুটিং — নিম্নলিখিত প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "ক", "q": "One Drive কোন কোম্পানির সেবা?", "a": "মাইক্রোসফট"}, {"label": "খ", "q": "কম্পিউটারে কী আকারে ডেটা প্রেরণ করা হয়?", "a": "বাইনারি"}, {"label": "গ", "q": "সর্বপ্রথম ৬৪ বিট অপারেটিং সিস্টেম চালু করে কোন কোম্পানি?", "a": "লিনাক্স (Linux)"}, {"label": "ঘ", "q": "ইমেইল গ্রহণের সময় কোন প্রটোকল ব্যবহার করা হয়?", "a": "POP3"}, {"label": "ঙ", "q": "Boot Strapping program সঞ্চিত থাকে কোথায়?", "a": "ROM"}, {"label": "চ", "q": "Deep Blue কী?", "a": "দাবা খেলার উপযোগী আইবিএম (IBM) কোম্পানির কম্পিউটার"}, {"label": "ছ", "q": "এম এস ওয়ার্ডে Ctrl + E দ্বারা কী বোঝায়?", "a": "সেন্টার এলাইনমেন্ট/টেক্সট"}, {"label": "জ", "q": "সর্বপ্রথম সার্চ ইঞ্জিন কোনটি?", "a": "আর্চি (Archie), ১৯৯০"}, {"label": "ঝ", "q": "ইউনিকোড মূলত কত বাইটের কোড?", "a": "২ বাইট বা ১৬ বিটের কোড"}, {"label": "ঞ", "q": "AI এর জন্য বেশি ব্যবহৃত প্রোগ্রামিং ল্যাংগুয়েজ কী?", "a": "পাইথন"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বিভাগীয় কমিশনারের কার্যালয়, চট্টগ্রাম — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-div-comm-ctg-office-asst)
  // সোর্স: self_job_solution_330-370_page (পৃষ্ঠা ৩৩০-৩৭০)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-div-comm-ctg-office-asst-q01", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 1, "marks": 5, "type": "table", "question": "শব্দগুলোর শুদ্ধরূপ লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["বিরহীনি", "বিরহিণী"], ["অট্টোহাসি", "অট্টহাসি"], ["বিদ্যেপ", "বিদ্রূপ"], ["সংর্কিণ", "সংকীর্ণ"], ["পল্যি", "পল্লী"], ["বৈশিষ্ঠ", "বৈশিষ্ট্য"], ["প্রণালি", "প্রণালী"], ["ষ্টিমার", "স্টিমার"], ["স্পর্দা", "স্পর্ধা"], ["কনিকা", "কণিকা"]]},

  {"id": "job-2025-div-comm-ctg-office-asst-q02", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "মার্তণ্ড", "a": "মার্ত + অণ্ড"}, {"label": "খ", "q": "কুলটা", "a": "কুল + অটা"}, {"label": "গ", "q": "বাগেশ্বরী", "a": "বাক্ + ঈশ্বরী"}, {"label": "ঘ", "q": "শীতার্ত", "a": "শীত + ঋত"}, {"label": "ঙ", "q": "হৃৎকম্প", "a": "হৃদ্ + কম্প"}]},

  {"id": "job-2025-div-comm-ctg-office-asst-q03", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "bangla", "topic": "পারিভাষিক শব্দ", "qno": 3, "marks": 5, "type": "table", "question": "পারিভাষিক শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "পারিভাষিক শব্দ"], "rows": [["Anatomy", "শরীরতত্ত্ব"], ["Assassination", "আততায়ী হত্যা"], ["Amicus Curiae", "আদালতের বন্ধু"], ["Excise duty", "আবগারি শুল্ক"], ["Hydrogen", "উদজান"], ["Lease", "ইজারা"], ["Quarterly", "ত্রৈমাসিক"], ["Radio", "বেতার"], ["Referendum", "গণভোট"], ["Surgeon", "শল্যচিকিৎসক"]]},

  {"id": "job-2025-div-comm-ctg-office-asst-q04", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 4, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "দুটি ভাষা জানে যে", "a": "দ্বিভাষী"}, {"label": "খ", "q": "জয় করার যোগ্য", "a": "জেতব্য/জেয়"}, {"label": "গ", "q": "খাওয়ার উপযুক্ত", "a": "খাদ্য"}, {"label": "ঘ", "q": "ঘরের অভাব যার", "a": "হাঘরে"}, {"label": "ঙ", "q": "পরিমিত ব্যয় করে যে", "a": "মিতব্যয়ী"}]},

  {"id": "job-2025-div-comm-ctg-office-asst-q05", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 5, "marks": 5, "type": "table", "question": "বিপরীত শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["অভিজ্ঞ", "অনভিজ্ঞ"], ["অলীক", "বাস্তব"], ["উষা", "সন্ধ্যা"], ["ঊর্ধ্ব", "অধঃ"], ["ক্ষীয়মান", "বর্ধমান"], ["গৃহীত", "বর্জিত/প্রত্যাখ্যাত"], ["তীক্ষ্ণ", "ভোঁতা"], ["প্রসন্ন", "বিষণ্ন"], ["মন্দা", "তেজি"], ["বৈরী", "অনুকূল/মিত্র"]]},

  {"id": "job-2025-div-comm-ctg-office-asst-q06", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "english", "topic": "idioms-and-phrases", "qno": 6, "marks": 5, "type": "idiom", "question": "Make sentences of the following phrases and idioms.", "parts": [{"label": "a", "phrase": "A rainy day", "meaning": "দুর্দিন", "example": "We should save something against a rainy day."}, {"label": "b", "phrase": "At home", "meaning": "দক্ষ", "example": "He is at home in English."}, {"label": "c", "phrase": "Cry in the wilderness", "meaning": "অরণ্যে রোদন", "example": "To want something from a miser is a cry in the wilderness."}, {"label": "d", "phrase": "Give a hand", "meaning": "কাউকে সাহায্য করা", "example": "Could you give me a hand?"}, {"label": "e", "phrase": "Word for word", "meaning": "হুবহু", "example": "She copied it word for word from my books."}]},

  {"id": "job-2025-div-comm-ctg-office-asst-q07", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "english", "topic": "fill-in-the-blanks", "qno": 7, "marks": 5, "type": "fill-gaps", "question": "Use appropriate prepositions:", "parts": [{"sentence": "Credit 5000 tk…… my account.", "answer": "to"}, {"sentence": "Hurry up! We have to go….. five minutes.", "answer": "within/in"}, {"sentence": "I finally killed the fly…… a rolled up paper.", "answer": "with"}, {"sentence": "I count …….your help.", "answer": "upon"}, {"sentence": "Are you doing anything special……. the weekend.", "answer": "at"}]},

  {"id": "job-2025-div-comm-ctg-office-asst-q08", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "english", "topic": "grammar", "qno": 8, "marks": 5, "type": "sentence-change", "question": "Change into passive voice:", "parts": [{"label": "a", "original": "His behavior worried us.", "changed": "We were worried at his behavior."}, {"label": "b", "original": "Some children were helping the sick man.", "changed": "The sick man was being helped by some children."}, {"label": "c", "original": "Does he speak English well?", "changed": "Is English spoken well by him?"}, {"label": "d", "original": "Don't do it.", "changed": "Let not it be done."}, {"label": "e", "original": "Never tell a lie.", "changed": "Let never a lie be told/ Let not a lie ever be told."}]},

  {"id": "job-2025-div-comm-ctg-office-asst-q09", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "english", "topic": "spelling", "qno": 9, "marks": 5, "type": "table", "question": "Write the correct spelling of the following words:", "columns": ["Incorrect", "Correct"], "rows": [["Sovorignty", "Sovereignty"], ["Heirarchy", "Hierarchy"], ["Rennaissance", "Renaissance"], ["Dillema", "Dilemma"], ["Bouquete", "Bouquet"], ["Parallal", "Parallel"], ["Laberatory", "Laboratory"], ["Exagerate", "Exaggerate"], ["Propitor", "Proprietor"], ["Millanium", "Millennium"]]},

  {"id": "job-2025-div-comm-ctg-office-asst-q10", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "english", "topic": "paragraph", "qno": 10, "marks": 5, "type": "paragraph", "question": "Write a paragraph on any one of the following topics: a) Tree plantation  b) Importance of Physical Exercise", "answer": "a) Tree plantation.\nTree plantation means planting many trees to improve the environment. Trees give us oxygen and take in harmful gases like carbon dioxide, making the air clean and fresh. They provide fruits, medicine, wood, and shelter for people and animals. Trees also prevent soil erosion and floods by holding the soil firmly with their roots. Nowadays, deforestation causes many problems such as climate change, global warming, and loss of habitats for wildlife. Planting more trees can solve these issues by restoring ecological balance and making nature green. Tree plantation creates shade, beautifies our surroundings, and controls air pollution. Every citizen, especially students, should join tree plantation programs to save our earth. We can plant trees in our schoolyards, villages, and roadsides. Governments and organizations should arrange tree-planting campaigns regularly. Tree plantation is the best way to ensure a healthy and happy life for present and future generations.\n\nb) Importance of Physical Exercise.\nPhysical exercise means any bodily activity that makes our muscles work and burns calories. Common forms include walking, running, swimming, cycling, skipping, and playing outdoor games like football or cricket. Physical exercise makes the body strong and flexible. It also helps improve heart and lung function. Exercise keeps diseases like obesity, diabetes, and high blood pressure at bay. Besides, it refreshes the mind and reduces stress, helping students to concentrate better in their studies. Doing exercise regularly creates discipline and boosts self-confidence. Morning is the ideal time for exercise, but it can be done anytime. Everyone—children, adults, and elderly—should do some form of physical activity daily. Students who exercise tend to have more energy throughout the day. Physical exercise is a natural way to stay healthy, active, and happy. So, we must develop the habit of doing regular physical exercise for a balanced and healthy life."},

  {"id": "job-2025-div-comm-ctg-office-asst-q11", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "math", "topic": "বীজগণিত", "qno": 11, "marks": 5, "type": "math", "question": "যদি x² − √৫x − ১ = ০ এবং x > ০ হয়, তবে প্রমাণ করুন যে, x⁴ − 1/x⁴ = ২১√৫", "steps": ["দেওয়া আছে, x² − √৫x − ১ = ০ ⇒ x² − ১ = √৫x ⇒ x/1 − 1/x = √৫ (উভয়পক্ষকে x দ্বারা ভাগ করে)", "∴ x − 1/x = √৫", "এখন, (x + 1/x)² = (x − 1/x)² + ৪.x.(1/x) = (√৫)² + ৪ = ৯ ⇒ x + 1/x = ৩", "প্রদত্ত রাশি = x⁴ − 1/x⁴ = (x²+1/x²)(x²−1/x²) = {(x−1/x)²+২}(x−1/x)(x+1/x)", "= {(√৫)²+২} × √৫ × ৩ = (৫+২) × ৩√৫ = ৭ × ৩√৫", "= ২১√৫ (প্রমাণিত)"], "answer": "x⁴ − 1/x⁴ = ২১√৫ (প্রমাণিত)"},

  {"id": "job-2025-div-comm-ctg-office-asst-q12", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "math", "topic": "গতিবেগ", "qno": 12, "marks": 5, "type": "math", "question": "১৫০ মিটার দীর্ঘ একটি ট্রেন ৪৫০ মিটার দীর্ঘ প্ল্যাটফর্ম ২০ সেকেন্ডে অতিক্রম করে। ট্রেনটির গতিবেগ ঘণ্টায় কত কি.মি.?", "steps": ["ট্রেনটি তার নিজের দৈর্ঘ্য ও প্ল্যাটফর্মের দৈর্ঘ্য মিলিয়ে মোট (১৫০+৪৫০) = ৬০০ মিটার অতিক্রম করবে", "গতিবেগ = দূরত্ব/সময় = ৬০০/২০ = ৩০ মিটার/সেকেন্ড", "১ মিটার/সেকেন্ড = ৩.৬ কি.মি./ঘণ্টা", "৩০ মিটার/সেকেন্ড = ৩.৬ × ৩০ = ১০৮ কি.মি./ঘণ্টা"], "answer": "১০৮ কি.মি./ঘণ্টা"},

  {"id": "job-2025-div-comm-ctg-office-asst-q13", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 13, "marks": 5, "type": "math", "question": "একজন বিক্রেতা ৫৯৪ টাকা দরে দুটি শার্ট বিক্রি করেন। একটিতে লাভ ১০% এবং অপরটিতে ১০% ক্ষতি হলে মোটের উপর তার শতকরা কত লাভ বা ক্ষতি হয়?", "steps": ["১০% লাভে বিক্রয়মূল্য = ১১০ টাকা হলে ক্রয়মূল্য ১০০ টাকা", "বিক্রয়মূল্য ৫৯৪ টাকা হলে ক্রয়মূল্য = ১০০ × ৫৯৪/১১০ = ৫৪০ টাকা", "১০% ক্ষতিতে বিক্রয়মূল্য = ৯০ টাকা হলে ক্রয়মূল্য ১০০ টাকা", "বিক্রয়মূল্য ৫৯৪ টাকা হলে ক্রয়মূল্য = ১০০ × ৫৯৪/৯০ = ৬৬০ টাকা", "শার্ট দুটির মোট ক্রয়মূল্য = ৫৪০ + ৬৬০ = ১২০০ টাকা", "শার্ট দুটির মোট বিক্রয়মূল্য = ৫৯৪ + ৫৯৪ = ১১৮৮ টাকা", "∴ ক্ষতি হলো = ১২০০ − ১১৮৮ = ১২ টাকা", "১২০০ টাকায় ক্ষতি হয় ১২ টাকা ⇒ ১০০ টাকায় ক্ষতি হয় = ১২×১০০/১২০০ = ১ টাকা"], "answer": "১% ক্ষতি"},

  {"id": "job-2025-div-comm-ctg-office-asst-q14", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "math", "topic": "অনুপাত", "qno": 14, "marks": 5, "type": "math", "question": "একটি পাত্রে দুধ ও পানি ৫:১ অনুপাতে আছে। যদি দুধের পরিমাণ পানির পরিমাণের চেয়ে ৮ লিটার বেশি হয়, তবে পানির পরিমাণ কত?", "steps": ["মনে করি, দুধের পরিমাণ = ৫x লিটার; পানির পরিমাণ = x লিটার", "প্রশ্নমতে, ৫x − x = ৮ ⇒ ৪x = ৮ ⇒ x = ২"], "answer": "২ লিটার"},

  {"id": "job-2025-div-comm-ctg-office-asst-q15", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "math", "topic": "জ্যামিতি", "qno": 15, "marks": 5, "type": "math", "question": "একটি বৃত্তাকার বাগান রাস্তা দ্বারা পরিবেষ্টিত আছে। যদি রাস্তাটির বাইরের পরিধি ভেতরের পরিধি হতে ৪৪ মিটার বেশি হয়, তবে রাস্তাটির বিস্তার কত?", "steps": ["মনে করি, বাইরের পরিধির ব্যাসার্ধ = R মিটার; ভেতরের পরিধির ব্যাসার্ধ = r মিটার", "তাহলে রাস্তাটির বিস্তার = (R−r) মিটার", "R ব্যাসার্ধ বিশিষ্ট বৃত্তের পরিধি = ২πR মিটার; r ব্যাসার্ধ বিশিষ্ট বৃত্তের পরিধি = ২πr মিটার", "প্রশ্নমতে, ২πR − ২πr = ৪৪ ⇒ ২π(R−r) = ৪৪", "∴ R−r = ৪৪/২π = ৪৪/(২×৩.১৪১৬) = ৭.০০৩ (প্রায়)"], "answer": "প্রায় ৭.০০৩ মিটার"},

    {"id": "job-2025-div-comm-ctg-office-asst-q16", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 15, "type": "short-qa", "question": "নিম্নলিখিত প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "ক", "q": "\"সত্যপীরের ভিটা\" কোথায় অবস্থিত?", "a": "বদলগাছি, নওগাঁ"}, {"label": "খ", "q": "ঢাকার বিখ্যাত \"তারা মসজিদ\" কে তৈরি করেন?", "a": "মির্জা আহমেদ খান"}, {"label": "গ", "q": "\"পানাম\" কোন জেলায় অবস্থিত?", "a": "নারায়ণগঞ্জ"}, {"label": "ঘ", "q": "\"মনপুরা-৭০\" চিত্রকর্মের শিল্পী কে?", "a": "জয়নুল আবেদিন"}, {"label": "ঙ", "q": "নৌকাবাইচ প্রতিযোগিতার সময় পরিবেশিত গানের নাম কী?", "a": "সারি গান"}, {"label": "চ", "q": "বাংলাদেশের একমাত্র পাহাড়ি দ্বীপ উপজেলা কোনটি?", "a": "মহেশখালী"}, {"label": "ছ", "q": "চেঙ্গী নদী কোন জেলায় অবস্থিত?", "a": "খাগড়াছড়ি"}, {"label": "জ", "q": "\"কার্টাগেনা প্রটোকল\" চুক্তির বিষয়বস্তু কী?", "a": "জাতিসংঘের জৈব নিরাপত্তা বিষয়ক চুক্তি"}, {"label": "ঝ", "q": "War and Peace উপন্যাসের রচয়িতা কে?", "a": "লিও তলস্তয়"}, {"label": "ঞ", "q": "মহাশূন্যে উৎক্ষিপ্ত প্রথম কৃত্রিম উপগ্রহের নাম কী?", "a": "স্পুটনিক-১"}, {"label": "ট", "q": "পৃথিবীর নিকটতম গ্রহের নাম কি?", "a": "শুক্র"}, {"label": "ঠ", "q": "মালয়েশিয়ার মুদ্রার নাম কি?", "a": "রিঙ্গিত"}, {"label": "ড", "q": "কমনওয়েলথ এর প্রধান কে?", "a": "ইংল্যান্ডের রাজা/রাণী"}, {"label": "ঢ", "q": "কোন বনভূমিকে পৃথিবীর ফুসফুস বলা হয়?", "a": "আমাজন"}, {"label": "ণ", "q": "জাতিসংঘে ভেটো ক্ষমতাসম্পন্ন একমাত্র এশীয় দেশ কোনটি?", "a": "চীন"}]},

  {"id": "job-2025-div-comm-ctg-office-asst-q17", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 17, "marks": 5, "type": "short-qa", "question": "পূর্ণরূপ লিখুনঃ NASA, BIOS, IP, IC, VIRUS", "parts": [{"label": "NASA", "q": "", "a": "National Aeronautics and Space Administration"}, {"label": "BIOS", "q": "", "a": "Basic Input/Output System"}, {"label": "IP", "q": "", "a": "Internet Protocol"}, {"label": "IC", "q": "", "a": "Integrated Circuit"}, {"label": "VIRUS", "q": "", "a": "Vital Information Resources Under Siege"}]},

  {"id": "job-2025-div-comm-ctg-office-asst-q18", "examId": "job-2025-div-comm-ctg-office-asst", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 18, "marks": 5, "type": "short-qa", "question": "নিম্নলিখিত প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "ক", "q": "প্রিন্টারের মান পরিমাপক এককের নাম কি?", "a": "DPI (Dots Per Inch)"}, {"label": "খ", "q": "মাইক্রোসফট এক্সেল কোন ধরনের প্রোগ্রাম?", "a": "স্প্রেডশীট প্রোগ্রাম"}, {"label": "গ", "q": "IoT কি?", "a": "IoT (Internet of Things) হলো এমন একটি ধারণা যেখানে স্মার্ট ইলেকট্রনিক ডিভাইসসমূহ ইন্টারনেটের মাধ্যমে একে-অপরের সাথে সংযুক্ত থেকে স্বয়ংক্রিয়ভাবে নিজেদের মধ্যে যোগাযোগ বা তথ্যের আদান-প্রদান এবং তথ্য বিশ্লেষণ করে সিদ্ধান্ত নিতে পারে।"}, {"label": "ঘ", "q": "53D কোন ধরণের সংখ্যা?", "a": "হেক্সাডেসিমেল"}, {"label": "ঙ", "q": "MCQ পরীক্ষার উত্তরপত্র মূল্যায়নে কোন পদ্ধতি ব্যবহার করা হয়?", "a": "OMR পদ্ধতি"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: জাতীয় রাজস্ব বোর্ড — সাঁটমুদ্রাক্ষরিক কাম-কম্পিউটার অপারেটর (job-2025-nbr-steno-typist)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৭১-৩৭৫)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-nbr-steno-typist-q01", "examId": "job-2025-nbr-steno-typist", "subject": "bangla", "topic": "ভাবসম্প্রসারণ", "qno": 1, "marks": 5, "type": "paragraph", "question": "ভাব-সম্প্রসারণ করুনঃ 'বিদ্যার সঙ্গে সম্পর্কহীন জীবন অন্ধ এবং জীবনের সঙ্গে সম্পর্কহীন বিদ্যা পঙ্গু'", "answer": "মূলভাব: বিদ্যা মানুষের জীবনকে উন্নত করে। বিদ্যা মানুষের ভেতরকার অন্ধকার দূর করে তাকে আলোকিত করে তোলে। বিদ্যা মানুষকে একজন প্রকৃত মানুষ হিসেবে গড়ে তোলে। তবে, যে বিদ্যার সঙ্গে বাস্তব জীবনের কোনো যোগসূত্র নেই, তা অর্থহীন ও মূল্যহীন।\n\nসম্প্রসারিত ভাব: মানুষের জন্মগত কোনো পরিচয় নেই। বিদ্যাই মানুষকে তার আসল পরিচয় প্রদান করে। বিদ্যার্জনের মাধ্যমে মানুষ নিজেকে বিকশিত করে। যে মানুষ বিদ্যার আলোয় আলোকিত নয়, সে সমাজের জন্য বোঝাস্বরূপ। বিদ্যা মানুষকে কুসংস্কার, অজ্ঞতা ও অন্ধকার থেকে বের করে আলোর পথে পরিচালিত করে। একজন বিদ্বান ব্যক্তি কেবল নিজেকে নয়, বরং তার পরিবার, সমাজ ও রাষ্ট্রকেও আলোকিত করে।\n\nজীবনকে জীবনের তাৎপর্যে আলোকিত ও উজ্জ্বল করার জন্য বিদ্যার বিকল্প নেই। বিদ্যা মানুষকে অন্ধকার থেকে আলোর পথে নিয়ে যায়। মানুষ সেই আলোকে আলোকিত করে অজ্ঞানতা ও কুসংস্কারের প্রাচীর ডিঙিয়ে বিচিত্র বর্ণময় ভুবনে প্রবেশ করে। বিদ্যার সংস্পর্শ ব্যতীত জীবন ও জগতের সৌন্দর্য উপভোগ করা যায় না, জীবনের দায়িত্ব ও কর্তব্য সম্বন্ধে ধারণা লাভ করা সম্ভব হয় না। আর তাই মানুষ নিজেকে, নিজের জীবন ও সমাজকে আলোকিত করার অভিপ্রায়ে বিদ্যার্জন করে।\n\nবিদ্যার আলো জ্বেলে সে জীবনের পথে পা বাড়ায় এবং জ্ঞানের রাজ্যে পরিক্রমণ করে জীবন ও জগৎকে সমৃদ্ধ করে। মানুষের চিন্তাচেতনা ও দৃষ্টিভঙ্গিকে প্রসারিত করাই বিদ্যার আসল উদ্দেশ্য। তাই বিদ্যার সঙ্গে জীবনের নিবিড় সম্পর্ক। তবে অর্জিত বিদ্যাকে যদি জীবনের কাজে না লাগানো যায়, তাহলে সে বিদ্যার কোনো মূল্য নেই। বিদ্যা যদি জীবন-বিমুখ হয়, এর দ্বারা যদি জীবনের কল্যাণ করা না যায়, তাহলে সে বিদ্যা অর্থহীন, নিষ্ফল। জীবনকে সুন্দর, সতেজ, গতিময় ও বর্ণোজ্জ্বল করার জন্য বিদ্যাকে অবশ্যই জীবনমুখী, জীবনধর্মী হতে হবে। বিদ্যার্জনের পর যদি জীবনের কোনো পরিবর্তন সাধিত না হয়, অজ্ঞতার অন্ধকার দূরীভূত না হয়, জীবন থেকে যদি অন্ধ কুসংস্কারগুলো দূর না করা যায়, তাহলে সে-বিদ্যা থাকা না থাকা সমান কথা। জীবনের পরিবর্তন, পরিবর্ধন তথা বিকাশ সাধন করাই বিদ্যার্জনের মূল লক্ষ্য হওয়া উচিত। অন্যথায় অর্জিত বিদ্যা কেবল মনেই থাকবে, মনের আলো জ্বালাতে পারবে না। বাস্তব জীবনের সঙ্গে সম্পর্ক গড়তে না পারলে বিদ্যা স্থবির হয়ে পড়ে। তাই বলা হয়, বিদ্যার সঙ্গে সম্পর্কহীন জীবন অন্ধ এবং জীবনের সঙ্গে সম্পর্কহীন বিদ্যা পঙ্গু।\n\nমন্তব্য: জীবনকে জ্ঞানালোকে বিভূষিত করার জন্য যেমন বিদ্যা প্রয়োজন তেমনই বিদ্যাকে জীবনের উপযুক্ত কাজে লাগিয়ে জীবনমুখী করা আবশ্যক।"},

  {"id": "job-2025-nbr-steno-typist-q02", "examId": "job-2025-nbr-steno-typist", "subject": "bangla", "topic": "পত্র লিখন", "qno": 2, "marks": 5, "type": "letter", "question": "সড়ক দুর্ঘটনা প্রতিকারের দাবি জানিয়ে 'ক' পত্রিকায় প্রকাশের জন্য একটি পত্র লিখুন।", "letter": {"date": "", "to": "সম্পাদক\n'ক' পত্রিকা\nউত্তরা, ঢাকা।", "subject": "সড়ক দুর্ঘটনা প্রতিকারের জন্য জরুরি হস্তক্ষেপের দাবি।", "body": "মহোদয়,\n\nআপনার বহুল প্রচারিত 'ক' পত্রিকার 'চিঠিপত্র' কলামে সড়ক দুর্ঘটনার ভয়াবহতা এবং এর প্রতিকারের জন্য জরুরি পদক্ষেপ গ্রহণের প্রয়োজনীয়তা সম্পর্কে দৃষ্টি আকর্ষণ করার জন্য এই পত্রটি লিখছি।\n\nআমাদের শহর ও শহরতলিতে প্রতিদিনই সড়ক দুর্ঘটনার ভয়াবহতার খবর শোনা যাচ্ছে। দ্রুতগামী যানবাহন, বেপরোয়া চালক, রাস্তার অব্যবস্থাপনা এবং ট্রাফিক আইন অমান্য করার মতো কারণগুলো এসব দুর্ঘটনার জন্য প্রধানত দায়ী। এর ফলে অসংখ্য নিরীহ মানুষের প্রাণহানি ঘটেছে, অনেকেই পঙ্গুত্ববরণ করছেন — যা আমাদের সমাজ, পরিবার ও অর্থনীতির উপর গভীর নেতিবাচক প্রভাব ফেলছে।\n\nঅতএব, আপনার পত্রিকার মাধ্যমে সংশ্লিষ্ট কর্তৃপক্ষের দৃষ্টি আকর্ষণ করে অনুরোধ জানাচ্ছি — সড়ক দুর্ঘটনা প্রতিরোধে কার্যকর পদক্ষেপ গ্রহণ করা হোক। বিশেষ করে ট্রাফিক আইন কঠোরভাবে বাস্তবায়ন, চালকদের প্রশিক্ষণ ও সচেতনতা বৃদ্ধি, এবং নিরাপদ সড়ক অবকাঠামো নির্মাণের ব্যবস্থা গ্রহণ অত্যন্ত জরুরি।", "closing": "ধন্যবাদান্তে,", "sender": "মিজানুর রহমান\nময়মনসিংহ।"}},

  {"id": "job-2025-nbr-steno-typist-q03", "examId": "job-2025-nbr-steno-typist", "subject": "bangla", "topic": "সারমর্ম", "qno": 3, "marks": 3, "type": "paragraph", "question": "সারমর্ম লিখুনঃ\n\nদৈন্য যদি আসে আসুক, লজ্জা কিবা তাহে?\nমাথা উঁচু রাখিস।\nসুখের সাথি মুখের পানে যদি না চাহে, ধৈর্য ধরে থাকিস।\nরুদ্ররোষে তীব্র দুঃখ যদি আসে নেমে, বুক ফুলিয়ে দাঁড়াস।\nআকাশ যদি বজ্র নিয়ে মাথায় পড়ে ভেঙে, ঊর্ধ্বে দুহাত বাড়াস।", "answer": "জীবনে দুঃখকষ্ট, ব্যথাবেদনা, জরামৃত্যু আছে। দুঃখের দিনে কেউ সঙ্গী হতে চায় না, তা বলে হতাশ হলে চলবে না। আত্মশক্তিতে বলীয়ান হয়ে সকল বাধাকে জয় করে সম্মুখে এগিয়ে যেতে হবে।"},

  {"id": "job-2025-nbr-steno-typist-q04", "examId": "job-2025-nbr-steno-typist", "subject": "bangla", "topic": "অনুচ্ছেদ", "qno": 4, "marks": 4, "type": "paragraph", "question": "অনুচ্ছেদ লিখুনঃ 'খাদ্যে ভেজাল'", "answer": "খাদ্য খেয়ে মানুষ বেঁচে থাকে। খাঁটি খাবার খেয়ে মানুষ সুস্থ থাকে। মানুষের সুস্থভাবে বেঁচে থাকার জন্য নির্ভেজাল খাদ্যের বিকল্প নেই। কিন্তু এই নির্ভেজাল খাদ্যসামগ্রী পাওয়াই এখন কঠিন। কারণ এমন কোনো খাদ্যদ্রব্য পাওয়া যাবে না যাতে কোনো ভেজাল নেই। অধিক মুনাফার জন্য এক শ্রেণির মানুষের লোভ এখন এতটাই নিয়ন্ত্রণ দুঃসাধ্য। মানুষের মানবিক স্বভাব বদলে গেছে, তার চরিত্রের গুণগুলো লোপ পেতে চলেছে। নেতিবাচক চিন্তা-চেতনা তাকে অহরহ লোভের দিকে, অর্থ-সম্পদ লাভের দিকে টেনে নিয়ে যাচ্ছে। মানুষ হয়ে উঠেছে হিংস্র পশু। সে অন্যের ক্ষতি করতে, অন্যের জীবননাশ করতে, অন্যকে তিলে তিলে মৃত্যুর দিকে ঠেলে দিতে কোনো পরোয়া করে না। তার লক্ষ্য মানুষের জীবন নয় — তার লক্ষ্য প্রভূত অর্থ-সম্পদ অর্জন, বিলাসী জীবন-যাপনের মাধ্যমে জীবনকে উপভোগ করা। এ কারণে দ্রব্যের ওজন বৃদ্ধি করে লাভবান হওয়ার জন্য খাঁটি খাদ্যে কাঁকর-বালি ইত্যাদি মেশায়, সবজি-ফল-মাছ-মাংস তাজা রাখার জন্য মেশায় ফরমালিন, গুঁড়া দুধে মেলায় মেলামাইন। জীবন রক্ষাকারী ওষুধে মেশায় ট্যালকম পাউডার, আটা-ময়দা ও নিম্ন মানের উপাদান। ঘিয়ের সঙ্গে পশুর চর্বি, নারকেল তেলের সঙ্গে বাদাম তেল, সরিষার সঙ্গে শিয়াল কাঁটার বীজ, চা-পাতার সঙ্গে কাঠের গুঁড়া, মরিচ ও হলুদের গুঁড়ার সঙ্গে রঞ্জক পদার্থ, কোমল পানীয়ের সঙ্গে বিষাক্ত কার্বোঅক্সি মিথাইল সেলুলোজ। এসব রাসায়নিক মেশানোর ফলে সুস্থ মানুষ পেটের পীড়া, শ্বাসকষ্ট, বদহজম, ডায়রিয়া, আলসার, চর্মরোগ, ক্যান্সার, লিভার সিরোসিসে আক্রান্ত হচ্ছে। ধীরগতিতে এসব রাসায়নিক দ্রব্য লিভার, কিডনি, হার্ট এমনকি কর্মক্ষমতাও হ্রাস করে অকেজো করে দেয়। এ ক্ষেত্রে শিশুরাই বেশি ক্ষতিগ্রস্ত হচ্ছে বলে বিশেষজ্ঞদের অভিমত। ভেজাল রোধে কঠোর আইন করা হয়েছে, ভ্রাম্যমাণ আদালত করা হয়েছে, নানামুখী প্রতিরোধমূলক ব্যবস্থা নেওয়া হয়েছে। কিন্তু তারপরও লোভী মুনাফাখোর মানুষের ভেজাল-তৎপরতা কমছে না। এর জন্য নিয়মিত অভিযান পরিচালনা, পণ্যের মান নিয়ন্ত্রণ, জনসচেতনতা সৃষ্টি ও সামাজিকভাবে ভেজাল জিনিস বয়কট করা ছাড়া আর কোনো গত্যন্তর নেই।"},

  {"id": "job-2025-nbr-steno-typist-q05", "examId": "job-2025-nbr-steno-typist", "subject": "bangla", "topic": "বাক্য পরিবর্তন", "qno": 5, "marks": 3, "type": "sentence-change", "question": "বাক্য পরিবর্তন করুনঃ", "parts": [{"label": "ক", "original": "তুমি চেষ্টা না করায় ব্যর্থ হয়েছ। (জটিল বাক্য)", "changed": "তুমি চেষ্টা করনি, তাই ব্যর্থ হয়েছ।"}, {"label": "খ", "original": "ভিক্ষুককে টাকা দাও। (যৌগিক বাক্য)", "changed": "ভিক্ষুককে দেখো এবং তাকে টাকা দাও।"}, {"label": "গ", "original": "যদি নিয়মিত সাঁতার কাটো, তবে স্বাস্থ্য ভালো থাকবে। (সরল বাক্য)", "changed": "নিয়মিত সাঁতার কাটলে স্বাস্থ্য ভালো থাকবে।"}, {"label": "ঘ", "original": "দোষ করেছ; অতএব শাস্তি পাবে। (জটিল বাক্য)", "changed": "যেহেতু দোষ করেছ, তাই শাস্তি পাবে।"}]},

  {"id": "job-2025-nbr-steno-typist-q06", "examId": "job-2025-nbr-steno-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 4, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "Mita is hoping....... a great time in Thailand.", "answer": "to have"}, {"sentence": "This is the first time......... she is travelling on a plane.", "answer": "that"}, {"sentence": "I remember........ village fair when I was young.", "answer": "visiting"}, {"sentence": "English....... across the world.", "answer": "is spoken"}]},

  {"id": "job-2025-nbr-steno-typist-q07", "examId": "job-2025-nbr-steno-typist", "subject": "english", "topic": "grammar", "qno": 7, "marks": 4, "type": "sentence-change", "question": "Re-write the following passage changing the form of speech.", "parts": [{"label": "passage", "original": "\"It's so unusual! It's a cold night, but I feel warm now,\" the Prince said. \"It happens when I do something good to help someone,\" he added. The Queen smiled to look at his son and said \"Good night\" \"Good night\" The Princes also smiled and said to his mom.", "changed": "The Prince wondered at the unusual feature of the night because he felt warm even at that time of the cold night. He remarked that it (unusual behavior of the night) happens when he does something good to help someone. The Queen smiled to look at his son and wished him good night. The Princes also smiled at her mom as he said her good night."}]},

  {"id": "job-2025-nbr-steno-typist-q08", "examId": "job-2025-nbr-steno-typist", "subject": "english", "topic": "paragraph", "qno": 8, "marks": 3, "type": "paragraph", "question": "Write a short note on 'The Falcon Hypersonic Technology Vehicle-2' within ten sentences.", "answer": "The Falcon Hypersonic Technology Vehicle-2 (HTV-2) is an experimental aircraft developed by the United States military. It was designed to fly at extremely high speeds, faster than the speed of sound many times over. The main goal of the project was to test hypersonic flight technology for future defense and space applications. HTV-2 was designed to travel at speeds up to Mach 20, which is about 20 times the speed of sound. It was launched using a rocket and then released to glide unpowered through the atmosphere. The vehicle was built to withstand extreme heat generated during hypersonic flight. Although the test flights faced technical challenges, they provided valuable data for future research. This technology could be used for rapid global strike capability and advanced space vehicles. Hypersonic vehicles like HTV-2 represent a major step in aerospace engineering. Such research continues to shape the future of high-speed flight and defense technology."},

  {"id": "job-2025-nbr-steno-typist-q09", "examId": "job-2025-nbr-steno-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 9, "marks": 3, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "Cricket enjoys a huge....... in Bangladesh.", "answer": "following"}, {"sentence": "What is the verb form of bitter?", "answer": "embitter"}, {"sentence": "The news he gave me....... false.", "answer": "was"}, {"sentence": "I kept the pencil........ the pencil box.", "answer": "inside"}]},

  {"id": "job-2025-nbr-steno-typist-q10", "examId": "job-2025-nbr-steno-typist", "subject": "english", "topic": "translation", "qno": 10, "marks": 4, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "সাফল্যের জন্য তোমাকে অভিনন্দন জানাচ্ছি।", "target": "I congratulate you on your success."}, {"label": "খ", "source": "তুমি কার সঙ্গে কথা বলছিলে?", "target": "Whom were you speaking to?"}, {"label": "গ", "source": "দুই একদিনের মধ্যে পরীক্ষা শুরু হবে।", "target": "The examination will begin in a day or two."}, {"label": "ঘ", "source": "আমার ঘড়িতে এখন দশটা বাজতে দশ মিনিট বাকি।", "target": "Now, it is ten minutes to ten by my watch."}]},

  {"id": "job-2025-nbr-steno-typist-q11", "examId": "job-2025-nbr-steno-typist", "subject": "math", "topic": "জ্যামিতি", "qno": 11, "marks": 4, "type": "math", "question": "একটি ঘরের মেঝের দৈর্ঘ্য ৪ মিটার এবং প্রস্থ ৩.৫ মিটার। ঘরটির উচ্চতা ৩ মিটার এবং এর দেয়ালগুলো ১৫ সে.মি. পুরু হলে, চার দেয়ালের আয়তন কত?", "steps": ["দেয়ালের পুরুত্ব ১৫ সে.মি. = ১৫/১০০ = ০.১৫ মিটার", "দৈর্ঘ্যর দিকে ২টি দেয়ালের ঘনফল = (৪ + ২ × ০.১৫) × ৩ × ০.১৫ × ২ ঘনমিটার = ৪.৩ × ৩ × ০.১৫ × ২ = ৩.৮৭ ঘনমিটার", "প্রস্থের দিকে ২টি দেয়ালের ঘনফল = (৩.৫ × ৩ × ০.১৫ × ২) ঘনমিটার = ৩.১৫ ঘনমিটার", "∴ দেয়ালগুলোর মোট ঘনফল = (৩.৮৭ + ৩.১৫) ঘনমিটার = ৭.০২ ঘনমিটার"], "answer": "ঘনফল ৭.০২ ঘনমিটার"},

  {"id": "job-2025-nbr-steno-typist-q12", "examId": "job-2025-nbr-steno-typist", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 12, "marks": 4, "type": "math", "question": "একটি মোটরসাইকেল ১২% ক্ষতিতে বিক্রি করা হলো, যদি বিক্রয়মূল্য ১২০০ টাকা বেশি হতো, তাহলে ৮% লাভ হতো। মোটরসাইকেলের ক্রয়মূল্য কত?", "steps": ["মনে করি, ক্রয়মূল্য ১০০ টাকা", "১২% ক্ষতিতে বিক্রয়মূল্য = (১০০−১২) = ৮৮ টাকা", "৮% লাভে বিক্রয়মূল্য = (১০০+৮) = ১০৮ টাকা", "বিক্রয়মূল্য বেশি (১০৮ − ৮৮) = ২০ টাকা", "বিক্রয়মূল্য ২০ টাকা বেশি হলে ক্রয়মূল্য ১০০ টাকা", "বিক্রয়মূল্য ১২০০ টাকা বেশি হলে ক্রয়মূল্য = (১০০ × ১২০০) ÷ ২০ = ৬০০০ টাকা"], "answer": "৬০০০ টাকা"},

  {"id": "job-2025-nbr-steno-typist-q13", "examId": "job-2025-nbr-steno-typist", "subject": "math", "topic": "বীজগণিত", "qno": 13, "marks": 4, "type": "math", "question": "যদি a = √৩+√২ হয়, তবে প্রমাণ করুন যে, a³ + 1/a³ = ১৮√৩", "steps": ["দেওয়া আছে, a = √৩ + √২", "1/a = 1/(√৩+√২) = (√৩−√২)/{(√৩+√২)(√৩−√২)} [লব ও হরকে (√৩−√২) দ্বারা গুণ করে]", "= (√৩−√২)/(৩−২) = √৩−√২", "∴ a + 1/a = (√৩+√২) + (√৩−√২) = ২√৩", "এখন, a³ + 1/a³ = (a+1/a)³ − ৩.a.(1/a)(a+1/a) [∵ a+1/a = ২√৩]", "= (২√৩)³ − ৩(২√৩) = ২³.(√৩)³ − ৩ × ২√৩", "= ৮.৩√৩ − ৬√৩ = ২৪√৩ − ৬√৩ = ১৮√৩ (প্রমাণিত)"], "answer": "a³ + 1/a³ = ১৮√৩ (প্রমাণিত)"},

  {"id": "job-2025-nbr-steno-typist-q14", "examId": "job-2025-nbr-steno-typist", "subject": "math", "topic": "জ্যামিতি", "qno": 14, "marks": 4, "type": "math", "question": "একটি বৃত্তাকার মাঠের ব্যাস ১২৪ মিটার। মাঠের সীমানা ঘেঁষে ৬ মিটার চওড়া একটি রাস্তা আছে। রাস্তার ক্ষেত্রফল নির্ণয় করুন।", "steps": ["মনে করি, বৃত্তাকার মাঠের ব্যাসার্ধ r এবং রাস্তাসহ বৃত্তাকার মাঠের ব্যাসার্ধ R", "∴ r = ১২৪/২ মিটার = ৬২ মিটার এবং R = (৬২+৬) মিটার = ৬৮ মি.", "বৃত্তাকার মাঠের ক্ষেত্রফল = πr² এবং রাস্তাসহ বৃত্তাকার মাঠের ক্ষেত্রফল = πR²", "∴ রাস্তার ক্ষেত্রফল = রাস্তাসহ মাঠের ক্ষেত্রফল − মাঠের ক্ষেত্রফল", "= πR² − πr² = π(R²−r²) = ৩.১৪১৬ {(৬৮)² − (৬২)²}", "= ৩.১৪১৬ (৪৬২৪ − ৩৮৪৪) = ৩.১৪১৬ × ৭৮০", "= ২৪৫০.৪৪ বর্গমিটার (প্রায়)"], "answer": "প্রায় ২৪৫০.৪৪ বর্গমিটার"},

  {"id": "job-2025-nbr-steno-typist-q15", "examId": "job-2025-nbr-steno-typist", "subject": "math", "topic": "শতকরা", "qno": 15, "marks": 4, "type": "math", "question": "একটি আয়তক্ষেত্রের দৈর্ঘ্য ৫% বৃদ্ধি করলে তার ক্ষেত্রফল শতকরা কত বৃদ্ধি পাবে?", "steps": ["মনে করি, আয়তক্ষেত্রের দৈর্ঘ্য x একক এবং প্রস্থ y একক", "∴ আয়তক্ষেত্রের ক্ষেত্রফল xy বর্গ একক", "১০% বৃদ্ধি পাওয়ায়, নতুন আয়তক্ষেত্রের দৈর্ঘ্য = (x + x এর ৫%) একক = (x+৫x/১০০) = (x+x/২০) একক", "= (২০x+x)/২০ = ২১x/১০ একক", "নতুন আয়তক্ষেত্রের ক্ষেত্রফল = (২১x/২০ × y) বর্গ একক = ২১xy/২০ বর্গ একক", "সুতরাং, ক্ষেত্রফল বৃদ্ধি পায় = (২১xy/২০ − xy) বর্গ একক = xy/২০ বর্গ একক", "∴ ক্ষেত্রফল শতকরা বৃদ্ধি পায় = {(xy/২০) ÷ xy × ১০০}% = (১/২০ × ১০০)% = ৫%"], "answer": "৫%"},

  {"id": "job-2025-nbr-steno-typist-q16", "examId": "job-2025-nbr-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 12, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর করুনঃ", "parts": [{"label": "ক", "q": "আয়তনে বাংলাদেশের সবচেয়ে বড় জেলা কোনটি?", "a": "রাঙ্গামাটি"}, {"label": "খ", "q": "বিশ্ব শান্তি সূচকে ২০২৪ সালে বাংলাদেশের অবস্থান কত?", "a": "১২৩ (তথ্য সংগ্রহ: ২৬ জুন ২০২৫)"}, {"label": "গ", "q": "বাংলাদেশের দ্রুততম ইউনিকর্ন স্টার্টআপ কোনটি?", "a": "মোবাইল আর্থিক সেবাদাতা প্রতিষ্ঠান 'নগদ'"}, {"label": "ঘ", "q": "বাংলাদেশ প্রথম কোন আন্তর্জাতিক সংস্থার সদস্যপদ লাভ করে?", "a": "কমনওয়েলথ"}, {"label": "ঙ", "q": "অ্যাটর্নি জেনারেল রাষ্ট্রের কোন অংশের কর্মকর্তা?", "a": "নির্বাহী বিভাগ"}, {"label": "চ", "q": "SPARRSO কোন মন্ত্রণালয়ের অধীন?", "a": "প্রতিরক্ষা মন্ত্রণালয়"}, {"label": "ছ", "q": "বাংলাদেশ সরকার কোন উৎস থেকে সর্বোচ্চ রাজস্ব আয় করে?", "a": "মূল্য সংযোজন কর"}, {"label": "জ", "q": "TIFA এর পূর্ণরূপ কী?", "a": "Trade and Investment Framework Agreement"}, {"label": "ঝ", "q": "বাংলার 'ছিয়াত্তরের মন্বন্তর' এর সময়কাল কত খ্রিস্টাব্দে?", "a": "১৭৭০ খ্রিস্টাব্দ"}, {"label": "ঞ", "q": "স্বাধীনতা যুদ্ধকালে বাংলাদেশকে কয়টি সেক্টরে ভাগ করা হয়েছিল?", "a": "১১টি"}, {"label": "ট", "q": "বাংলাদেশ ক্রিকেটে ওয়ানডে স্ট্যাটাস লাভ করে কবে?", "a": "১৫ জুন ১৯৯৭ (টেস্ট ২৬ জুন ২০০০)"}, {"label": "ঠ", "q": "আন্তর্জাতিক অপরাধ আদালত কোথায় অবস্থিত?", "a": "হেগ, নেদারল্যান্ড"}, {"label": "ড", "q": "বায়ুদূষণের জন্য কোন গ্যাস দায়ী?", "a": "কার্বন ডাইঅক্সাইড"}, {"label": "ঢ", "q": "'ডিজিটাল ডিভাইড' কাকে বলে?", "a": "'ডিজিটাল ডিভাইড' সেটিই, যেখানে এক দল ইন্টারনেটের সব সুবিধা হাতের নাগালে পাচ্ছে, অন্য দল সামান্যই পাচ্ছে অথবা একেবারেই পাচ্ছে না।"}, {"label": "ণ", "q": "বাংলাদেশ জাতিসংঘের কততম সদস্য?", "a": "১৩৬তম"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ সমরাস্ত্র কারখানা (বিওএফ) — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-bof-office-asst-typist)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৭৬-৩৭৮)
  // নোট: মূল বইয়ের একটি গণিত প্রশ্ন (মুদ্রিত ক্রম ১২) পৃষ্ঠা-বিভাজনের কারণে শুধু উত্তরের শেষাংশ ("= ৪৩২ টাকা") অবশিষ্ট ছিল,
  //       প্রশ্নের মূল অংশ পুনরুদ্ধারযোগ্য না হওয়ায় বাদ দেওয়া হয়েছে এবং বাকি প্রশ্নগুলো ধারাবাহিকভাবে নম্বরায়ন করা হয়েছে।
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-bof-office-asst-typist-q01", "examId": "job-2025-bof-office-asst-typist", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 1, "marks": 4, "type": "table", "question": "শুদ্ধ বানান লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["তীরষ্কার", "তিরস্কার"], ["কিপ্টোকারেন্সি", "ক্রিপ্টোকারেন্সি"], ["মিমাংসা", "মীমাংসা"], ["ইতঃস্তত", "ইতস্তত"], ["সিমাবদ্ধ", "সীমাবদ্ধ"]]},

  {"id": "job-2025-bof-office-asst-typist-q02", "examId": "job-2025-bof-office-asst-typist", "subject": "bangla", "topic": "বাগধারা", "qno": 2, "marks": 4, "type": "idiom", "question": "বাগধারা লিখুনঃ", "parts": [{"label": "ক", "phrase": "সাক্ষী গোপাল", "meaning": "নিষ্ক্রিয় দর্শক"}, {"label": "খ", "phrase": "পালের গোদা", "meaning": "দলপতি"}, {"label": "গ", "phrase": "চিনে জোঁক", "meaning": "নাছোড়বান্দা"}, {"label": "ঘ", "phrase": "অগত্যা যাত্রা", "meaning": "চিরদিনের জন্য প্রস্থান"}]},

  {"id": "job-2025-bof-office-asst-typist-q03", "examId": "job-2025-bof-office-asst-typist", "subject": "bangla", "topic": "কারক ও বিভক্তি", "qno": 3, "marks": 3, "type": "sub-parts", "question": "কারক ও বিভক্তি নির্ণয় করুনঃ", "parts": [{"label": "ক", "q": "আমার যাওয়া হয়নি।", "a": "কর্তৃকারকে ৬ষ্ঠী"}, {"label": "খ", "q": "সব ঝিনুকে মুক্তা পাওয়া যায় না।", "a": "অপাদানে ৭মী"}, {"label": "গ", "q": "টাকায় কি না হয়।", "a": "করণে ৭মী"}]},

  {"id": "job-2025-bof-office-asst-typist-q04", "examId": "job-2025-bof-office-asst-typist", "subject": "bangla", "topic": "সন্ধি", "qno": 4, "marks": 3, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "উচ্ছেদ", "a": "উৎ + ছেদ"}, {"label": "খ", "q": "সংঘাত", "a": "সম্ + ঘাত"}, {"label": "গ", "q": "প্রত্যাশা", "a": "প্রতি + আশা"}]},

  {"id": "job-2025-bof-office-asst-typist-q05", "examId": "job-2025-bof-office-asst-typist", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 5, "marks": 4, "type": "table", "question": "বিপরীত শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["ঊর্ধ্ব", "অধঃ"], ["উপকার", "অপকার"], ["খ্যাতি", "অখ্যাতি"], ["শূন্য", "পূর্ণ"], ["যত", "তত"]]},

  {"id": "job-2025-bof-office-asst-typist-q06", "examId": "job-2025-bof-office-asst-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 2, "type": "fill-gaps", "question": "Fill in the blanks using preposition:", "parts": [{"sentence": "The book is....... the table.", "answer": "on"}, {"sentence": "Rahim started ......... village home.", "answer": "for"}]},

  {"id": "job-2025-bof-office-asst-typist-q07", "examId": "job-2025-bof-office-asst-typist", "subject": "english", "topic": "vocabulary", "qno": 7, "marks": 4, "type": "table", "question": "What is the Bengali meaning of:", "columns": ["Given Word", "Meaning"], "rows": [["Clerk", "কেরানি"], ["Weaver", "তাঁতি"], ["Barber", "নাপিত"], ["Cobbler", "মুচি"], ["Hunter", "শিকারি"]]},

  {"id": "job-2025-bof-office-asst-typist-q08", "examId": "job-2025-bof-office-asst-typist", "subject": "english", "topic": "grammar", "qno": 8, "marks": 4, "type": "table", "question": "What is the feminine gender of:", "columns": ["Masculine", "Feminine"], "rows": [["Nephew", "Niece"], ["Horse", "Mare"], ["Bull", "Cow"], ["He-goat", "She-goat"], ["Hero", "Heroine"]]},

  {"id": "job-2025-bof-office-asst-typist-q09", "examId": "job-2025-bof-office-asst-typist", "subject": "english", "topic": "translation", "qno": 9, "marks": 4, "type": "translate", "question": "Translate to Bangla:", "parts": [{"label": "a", "source": "May I know your name?", "target": "আমি কি আপনার নাম জানতে পারি?"}, {"label": "b", "source": "I have come from Seattle.", "target": "আমি সিয়াটল থেকে এসেছি।"}, {"label": "c", "source": "I can't get you.", "target": "আমি আপনাকে বুঝতে পারছি না।"}, {"label": "d", "source": "Necessity knows no law.", "target": "প্রয়োজন কোন আইন মানে না।"}]},

  {"id": "job-2025-bof-office-asst-typist-q10", "examId": "job-2025-bof-office-asst-typist", "subject": "english", "topic": "translation", "qno": 10, "marks": 2, "type": "translate", "question": "Translate to English:", "parts": [{"label": "ক", "source": "তুমি কিসে ব্যস্ত?", "target": "What are you busy with?"}, {"label": "খ", "source": "একতাই বল।", "target": "Unity is strength."}]},

  {"id": "job-2025-bof-office-asst-typist-q11", "examId": "job-2025-bof-office-asst-typist", "subject": "english", "topic": "grammar", "qno": 11, "marks": 2, "type": "fill-gaps", "question": "Fill in the gap by article:", "parts": [{"sentence": "He is...... one-eyed man.", "answer": "a"}, {"sentence": "Give me..... apple.", "answer": "an"}]},

  {"id": "job-2025-bof-office-asst-typist-q12", "examId": "job-2025-bof-office-asst-typist", "subject": "math", "topic": "সূচক", "qno": 12, "marks": 4, "type": "math", "question": "3x − y = 12 হলে, 8^x/2^y = কত?", "steps": ["প্রদত্ত রাশি = 8^x/2^y", "= (2³)^x/2^y = 2^(3x)/2^y", "= 2^(3x−y) = 2^12 [∵ 3x−y=12]", "= 4096"], "answer": "4096"},

  {"id": "job-2025-bof-office-asst-typist-q13", "examId": "job-2025-bof-office-asst-typist", "subject": "math", "topic": "বর্গমূল", "qno": 13, "marks": 4, "type": "math", "question": "কোন সংখ্যার বর্গমূলের সাথে ৯ যোগ করলে ৪ এর বর্গ হবে?", "steps": ["মনে করি, সংখ্যাটি x", "প্রশ্নমতে, √x + 9 = 4²", "বা, √x = 7", "∴ x = 49"], "answer": "৪৯"},

  {"id": "job-2025-bof-office-asst-typist-q14", "examId": "job-2025-bof-office-asst-typist", "subject": "math", "topic": "জ্যামিতি", "qno": 14, "marks": 4, "type": "math", "question": "ত্রিভুজের তিন কোণের অনুপাত ৩:৪:৫ হলে সবচেয়ে বড় কোণটির মান কত?", "steps": ["অনুপাতের রাশিগুলোর যোগফল = ৩ + ৪ + ৫ = ১২", "ত্রিভুজের তিনটি কোণের সমষ্টি = ১৮০°", "১ম কোণ = (১৮০ এর ৩/১২)° = ৪৫°", "২য় কোণ = (১৮০ এর ৪/১২)° = ৬০°", "৩য় কোণ = (১৮০ এর ৫/১২)° = ৭৫°", "সুতরাং সবচেয়ে বড় কোণের মাপ ৭৫°"], "answer": "৭৫°"},

  {"id": "job-2025-bof-office-asst-typist-q15", "examId": "job-2025-bof-office-asst-typist", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 15, "marks": 4, "type": "math", "question": "একটি তরমুজ ৩২৪ টাকায় বিক্রয় করলে ১০% ক্ষতি হয়। কত টাকায় বিক্রয় করলে ২০% লাভ হবে?", "steps": ["১০% ক্ষতিতে বিক্রয়মূল্য = (১০০ − ১০) = ৯০ টাকা", "অর্থাৎ, বিক্রয়মূল্য ৯০ টাকা হলে ক্রয়মূল্য ১০০ টাকা", "বিক্রয়মূল্য ৩২৪ টাকা হলে ক্রয়মূল্য = (১০০ × ৩২৪) ÷ ৯০ = ৩৬০ টাকা", "আবার, ২০% লাভে বিক্রয়মূল্য = (১০০ + ২০) = ১২০ টাকা", "অর্থাৎ, ক্রয়মূল্য ১০০ টাকা হলে বিক্রয়মূল্য ১২০ টাকা", "ক্রয়মূল্য ৩৬০ টাকা হলে বিক্রয়মূল্য = (১২০ × ৩৬০) ÷ ১০০ = ৪৩২ টাকা"], "answer": "৪৩২ টাকা"},

  {"id": "job-2025-bof-office-asst-typist-q16", "examId": "job-2025-bof-office-asst-typist", "subject": "math", "topic": "বয়স নির্ণয়", "qno": 16, "marks": 4, "type": "math", "question": "পিতা-পুত্রের বয়সের সমষ্টি ৪০ বছর। ১০ বছর পর তাদের বয়সের অনুপাত ৩:১ হলে পুত্রের বর্তমান বয়স কত?", "steps": ["ধরি, পিতার বয়স 3x বছর এবং পুত্রের বয়স x বছর", "প্রশ্নমতে, 3x + 10 + x + 10 = 40", "বা, 4x = 20", "∴ x = 5", "সুতরাং পুত্রের বয়স ৫ বছর"], "answer": "৫ বছর"},

  {"id": "job-2025-bof-office-asst-typist-q17", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 17, "marks": 1, "type": "paragraph", "question": "Ms Power Point এ নতুন Slide যোগ কারার জন্য কোন শর্টকাট Key ব্যবহৃত হয়?", "answer": "Ctrl + M"},

  {"id": "job-2025-bof-office-asst-typist-q18", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 18, "marks": 1, "type": "paragraph", "question": "Ms Power Point এ Slide Show করার জন্য ব্যবহৃত শর্টকাট Key লিখুন?", "answer": "F5"},

  {"id": "job-2025-bof-office-asst-typist-q19", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 19, "marks": 2, "type": "paragraph", "question": "IP Address কী?", "answer": "IP Address হলো একটি নির্দিষ্ট যন্ত্রের সাংখ্যিক ঠিকানা যা একটি নেটওয়ার্কে সংযুক্ত প্রতিটি ডিভাইসকে চিহ্নিত করে এবং ডেটা আদান-প্রদানে সাহায্য করে।"},

  {"id": "job-2025-bof-office-asst-typist-q20", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 20, "marks": 1, "type": "paragraph", "question": "বিজয় কী-বোর্ড ব্যবহার করার জন্য কি কমান্ড ব্যবহার করতে হবে?", "answer": "Ctrl + Alt + B"},

  {"id": "job-2025-bof-office-asst-typist-q21", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 21, "marks": 1, "type": "paragraph", "question": "MS Word এ Find এর শর্টকাট কমান্ড কী?", "answer": "Ctrl + F"},

  {"id": "job-2025-bof-office-asst-typist-q22", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 22, "marks": 2, "type": "paragraph", "question": "ডিজিটাল নথি ব্যবস্থাপনা কী?", "answer": "ডিজিটাল নথি ব্যবস্থাপনা হলো ইলেকট্রনিক পদ্ধতি ব্যবহার করে নথি তৈরি, সংরক্ষণ, পরিচালনা এবং নিষ্পত্তি করার একটি প্রক্রিয়া।"},

  {"id": "job-2025-bof-office-asst-typist-q23", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 23, "marks": 2, "type": "paragraph", "question": "সাইবার নিরাপত্তা কী?", "answer": "সাইবার নিরাপত্তা বলতে মূলত বোঝায় সতর্কতা এবং উপায়, যার মাধ্যমে আমরা আমাদের ব্যক্তিগত তথ্য, কম্পিউটার, আমাদের ব্যবহৃত বিভিন্ন ধরনের ডিজিটাল ডিভাইসকে হ্যাকিং ও বিভিন্ন ধরনের সাইবার আক্রমণ থেকে সুরক্ষিত রাখতে পারি। অতএব, সাইবার নিরাপত্তা বলতে সব ধরনের তথ্যপ্রযুক্তি সেবা ও ডিভাইসের নিরাপদ ব্যবহার, তথ্যের চুরি বা হ্যাক থেকে রক্ষা, এবং বিভিন্ন ধরনের ম্যালওয়্যার থেকে সুরক্ষিত রাখাকে বোঝায়।"},

  {"id": "job-2025-bof-office-asst-typist-q24", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 24, "marks": 2, "type": "short-qa", "question": "MAN ও WAN এর পূর্ণরূপ কী? এদের পার্থক্য লিখুন।", "parts": [{"label": "পূর্ণরূপ", "q": "", "a": "MAN = Metropolitan Area Network; WAN = Wide Area Network"}, {"label": "বিস্তারিত", "q": "", "a": "LAN (Local Area Network): একটি নির্দিষ্ট ভৌগোলিক এলাকার মধ্যে (যেমন — একটি বাড়ি, অফিস, বা স্কুল) কম্পিউটার এবং অন্যান্য ডিভাইসগুলির একটি নেটওয়ার্ক। এটি সাধারণত উচ্চ গতির ডেটা স্থানান্তর এবং রিসোর্স শেয়ার করার জন্য ব্যবহৃত হয়। MAN (Metropolitan Area Network): একটি বৃহত্তর ভৌগোলিক এলাকা জুড়ে (যেমন — একটি শহর বা মেট্রোপলিটন এলাকা) বিস্তৃত একটি কম্পিউটার নেটওয়ার্ক। এটি LAN-এর চেয়ে বড় এবং WAN-এর চেয়ে ছোট।"}]},

  {"id": "job-2025-bof-office-asst-typist-q25", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 25, "marks": 1, "type": "sub-parts", "question": "MS Word এ ব্যবহৃত শর্টকাট কমান্ড গুলি লিখুনঃ", "parts": [{"label": "ক", "q": "লেখা বোল্ড করতে", "a": "Ctrl + B"}, {"label": "খ", "q": "রিপ্লেস করতে", "a": "Ctrl + H"}, {"label": "গ", "q": "কপি করা লেখা পেস্ট করতে", "a": "Ctrl + V"}, {"label": "ঘ", "q": "ডকুমেন্ট সংরক্ষণ করতে", "a": "Ctrl + S"}]},

  {"id": "job-2025-bof-office-asst-typist-q26", "examId": "job-2025-bof-office-asst-typist", "subject": "general-knowledge", "topic": "কম্পিউটার", "qno": 26, "marks": 1, "type": "short-qa", "question": "ই-মেইল এর CC এবং BCC এর পূর্ণরূপ কী? এদের পার্থক্য লিখুন।", "parts": [{"label": "পূর্ণরূপ", "q": "", "a": "CC = Carbon Copy; BCC = Blind Carbon Copy"}, {"label": "পার্থক্য", "q": "", "a": "Cc (Carbon Copy) ও Bcc (Blind Carbon Copy) এর মধ্যে মূল পার্থক্য — Cc তে দেওয়া সকল অ্যাড্রেসগুলো সকল রিসিপেন্টের কাছে তালিকা আকারে পৌঁছায়, অর্থাৎ সেই মেইলটি অন্য কোন ঠিকানায় প্রেরণ করা হয়েছে তা রিসিপেন্টের জানতে পারে। পক্ষান্তরে, Bcc তে দেওয়া সকল অ্যাড্রেসগুলো সকল রিসিপেন্টের কাছে তালিকা আকারে পৌঁছায় না। অর্থাৎ সেই মেইলটি অন্য কোন ঠিকানায় প্রেরণ করা হয়েছে তা রিসিপেন্টরা জানতে পারে না।"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ কৃষি গবেষণা কাউন্সিল — রক্ষণাবেক্ষণ পরিদর্শক (job-2025-barc-maintenance-inspector)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৭৮-৩৭৯)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-barc-maintenance-inspector-q01", "examId": "job-2025-barc-maintenance-inspector", "subject": "bangla", "topic": "সন্ধি", "qno": 1, "marks": 8, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "উপাচার্য", "a": "উপ + আচার্য"}, {"label": "খ", "q": "দৃষ্টান্ত", "a": "দৃষ্টি + অন্ত"}, {"label": "গ", "q": "গবেষণা", "a": "গো + এষণা"}, {"label": "ঘ", "q": "দৃষ্টি", "a": "দৃশ্ + তি"}, {"label": "ঙ", "q": "ষড়যন্ত্র", "a": "ষট্ + যন্ত্র"}]},

  {"id": "job-2025-barc-maintenance-inspector-q02", "examId": "job-2025-barc-maintenance-inspector", "subject": "bangla", "topic": "কারক ও বিভক্তি", "qno": 2, "marks": 8, "type": "sub-parts", "question": "কারক ও বিভক্তি নির্ণয় করুনঃ", "parts": [{"label": "ক", "q": "বাঘে-মহিষে এক ঘাটে জল খায়", "a": "কর্তৃকারকে ৭মী"}, {"label": "খ", "q": "ঘোড়ায় গাড়ি টানে", "a": "কর্তৃকারকে ৭মী"}, {"label": "গ", "q": "দেশের জন্য প্রাণ দাও", "a": "সম্প্রদানে ৬ষ্ঠী"}, {"label": "ঘ", "q": "আকাশে চাঁদ উঠেছে", "a": "অধিকরণে ৭মী"}, {"label": "ঙ", "q": "দশে মিলে করি কাজ।", "a": "কর্তায় ৭মী"}]},

  {"id": "job-2025-barc-maintenance-inspector-q03", "examId": "job-2025-barc-maintenance-inspector", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 3, "marks": 8, "type": "table", "question": "বানানগুলো শুদ্ধ করুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["সমিচীন", "সমীচীন"], ["ক্ষীনজিবী", "ক্ষীণজীবী"], ["স্বরস্বতী", "সরস্বতী"], ["বিভিসীকা", "বিভীষিকা"], ["দোষনীয়", "দূষণীয়"]]},

  {"id": "job-2025-barc-maintenance-inspector-q04", "examId": "job-2025-barc-maintenance-inspector", "subject": "english", "topic": "translation", "qno": 4, "marks": 8, "type": "translate", "question": "ইংরেজিতে অনুবাদ করুনঃ", "parts": [{"label": "ক", "source": "সকলেই মিথ্যাবাদীকে অপছন্দ করে।", "target": "Everybody dislikes a liar."}, {"label": "খ", "source": "ডাক্তার আসার পর রোগীটি মারা গিয়েছিল।", "target": "The patient died after the doctor had come."}, {"label": "গ", "source": "আমি সকাল থেকে জ্বরে ভুগছি।", "target": "I have been suffering from fever since morning."}, {"label": "ঘ", "source": "আমরা বিদ্যালয়ে পৌছার পূর্বে ঘণ্টা বাজলো।", "target": "The bell had rung before we reached the school."}, {"label": "ঙ", "source": "আজকাল বিজ্ঞান দ্বারা অসাধ্য সাধিত হচ্ছে।", "target": "Nowadays, the impossible is being achieved by science."}]},

  {"id": "job-2025-barc-maintenance-inspector-q05", "examId": "job-2025-barc-maintenance-inspector", "subject": "english", "topic": "fill-in-the-blanks", "qno": 5, "marks": 8, "type": "fill-gaps", "question": "শূন্যস্থান পূরণ করুনঃ", "parts": [{"sentence": "Please always stay..... my left.", "answer": "at"}, {"sentence": "Anne is dull..... English.", "answer": "at"}, {"sentence": "He has to desire...... fame.", "answer": "for"}, {"sentence": "He is blind ........ his own faults.", "answer": "to"}, {"sentence": "There is a coffee shop ...... the street.", "answer": "across/on"}]},

  {"id": "job-2025-barc-maintenance-inspector-q06", "examId": "job-2025-barc-maintenance-inspector", "subject": "english", "topic": "grammar", "qno": 6, "marks": 8, "type": "sentence-change", "question": "Change the voice:", "parts": [{"label": "i", "original": "I know that he is a good boy.", "changed": "It is known to me that he is a good boy."}, {"label": "ii", "original": "He annoyed me.", "changed": "I was annoyed with him."}, {"label": "iii", "original": "Panic seized the writer.", "changed": "The writer was seized with panic."}, {"label": "iv", "original": "He decided to sell the house.", "changed": "He decided that the house should be sold."}, {"label": "v", "original": "We have warned you.", "changed": "You have been warned by us."}]},

  {"id": "job-2025-barc-maintenance-inspector-q07", "examId": "job-2025-barc-maintenance-inspector", "subject": "math", "topic": "পাটিগণিত", "qno": 7, "marks": 15, "type": "math", "question": "ক) ৫০টি কলা ২২০ টাকায় বিক্রয় করায় ১০% লাভ হলো। ১০০টি কলার ক্রয়মূল্য কত?\nখ) দুইজন শ্রমিকের মাসিক বেতনের যোগফল ২০,০০০ টাকা। একজন শ্রমিকের বেতন ১০% হ্রাস পেলে যত টাকা হয় অপর শ্রমিকের বেতন ১০% বৃদ্ধি পেলে সমপরিমাণ টাকা হয়। শ্রমিক দুজনের বেতন মাসিক কত টাকা তা নির্ণয় করুন।", "steps": ["ক) ১০% লাভে বিক্রয়মূল্য = ১১০ টাকা হলে ক্রয়মূল্য ১০০ টাকা", "বিক্রয়মূল্য ২২০ টাকা হলে ক্রয়মূল্য = (১০০ × ২২০) ÷ ১১০ = ২০০ টাকা [৫০টি কলার ক্রয়মূল্য]", "৫০টি কলার ক্রয়মূল্য ২০০ টাকা হলে ১টির ক্রয়মূল্য = ২০০/৫০ টাকা", "১০০টি কলার ক্রয়মূল্য = (২০০ × ১০০) ÷ ৫০ = ৪০০ টাকা", "খ) মনে করি, একজন শ্রমিকের মাসিক বেতন = ক টাকা; অপর শ্রমিকের মাসিক বেতন = (২০০০০ − ক) টাকা", "১০% হ্রাসে প্রথম শ্রমিকের বেতন = (ক এর ৯০%) = ৯ক/১০ টাকা", "১০% বৃদ্ধিতে অপর শ্রমিকের বেতন = {(২০০০০−ক) এর ১১০%} = (২০০০০−ক)×১১০/১০০ = (২২০০০০−১১ক)/১০ টাকা", "প্রশ্নমতে, ৯ক/১০ = (২২০০০০−১১ক)/১০", "বা, ৯ক = ২২০০০০ − ১১ক", "বা, ২০ক = ২২০০০০", "∴ ক = ১১০০০", "সুতরাং একজন শ্রমিকের বেতন = ১১০০০ টাকা; অপর শ্রমিকের বেতন = ২০০০০ − ১১০০০ = ৯০০০ টাকা"], "answer": "ক) ৪০০ টাকা।  খ) শ্রমিক দুজনের বেতন ১১০০০ টাকা ও ৯০০০ টাকা।"},

  {"id": "job-2025-barc-maintenance-inspector-q08", "examId": "job-2025-barc-maintenance-inspector", "subject": "general-knowledge", "topic": "gk-others", "qno": 8, "marks": 12, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর করুনঃ", "parts": [{"label": "ক", "q": "সংবিধানের কোন অনুচ্ছেদে \"রাষ্ট্র ও গণজীবনের সর্বস্তরে নারী পুরুষের সমান অধিকার লাভ করিবেন\" বলা আছে?", "a": "২৮(২) নং অনুচ্ছেদ"}, {"label": "খ", "q": "ইরাটম কী?", "a": "উন্নত জাতের ধান"}, {"label": "গ", "q": "\"দ্য গল\" কোন দেশের প্রাচীন নাম?", "a": "ফ্রান্স"}, {"label": "ঘ", "q": "\"সুয়েজ খাল\" কোন দেশে অবস্থিত?", "a": "মিশর"}, {"label": "ঙ", "q": "\"বাংলাদেশ স্কয়ার\" কোথায় অবস্থিত?", "a": "লাইবেরিয়ায়"}, {"label": "চ", "q": "\"আমার ভাইয়ের রক্তে রাঙানো একুশে ফেব্রুয়ারি\" গানটির রচয়িতা কে?", "a": "আবদুল গাফ্‌ফার চৌধুরী"}, {"label": "ছ", "q": "গ্রিনিচের দ্রাঘিমা কত ডিগ্রি?", "a": "০° (শূন্য ডিগ্রি)"}, {"label": "জ", "q": "বাংলাদেশের white gold হিসেবে পরিচিত কোনটি?", "a": "চিংড়ি"}, {"label": "ঝ", "q": "বাংলাদেশ রেলওয়ের সর্ববৃহৎ কারখানা কোথায়?", "a": "সৈয়দপুর, নীলফামারী"}, {"label": "ঞ", "q": "কুষ্টিয়ার পূর্বনাম কি?", "a": "নদীয়া"}]},

  // ══════════════════════════════════════════════════════════
  // পরবর্তী পরীক্ষার data এখানে যোগ করুন
  // ══════════════════════════════════════════════════════════

];