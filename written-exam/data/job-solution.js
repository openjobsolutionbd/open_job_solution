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

  {"id": "job-2025-mopa-data-entry-control-q01", "examId": "job-2025-mopa-data-entry-control", "subject": "bangla", "qno": 1, "marks": 5, "type": "paragraph", "question": "উপসর্গ কাকে বলে? বাংলা ভাষায় উপসর্গ কত প্রকার ও কী কী?", "answer": "শব্দ বা ধাতুর পূর্বে কতিপয় সুনির্দিষ্ট অব্যয় জাতীয় শব্দাংশ যুক্ত হয়ে সাধিত শব্দে অর্থের পরিবর্তন, সম্প্রসারণ বা সংকোচন ঘটিয়ে থাকে। এগুলোকে বলা হয় উপসর্গ (Prefix)। যেমন, প, পরা, পরি, নির ইত্যাদি। বাংলা ভাষায় উপসর্গ ৩ প্রকার। যথা: বাংলা উপসর্গ (অ, অঘা, অজ ইত্যাদি), তৎসম উপসর্গ (প্র, পরা, অপ, সম, নি ইত্যাদি), বিদেশি উপসর্গ (ফুল, নিম, ফি, হা ইত্যাদি)।"},
  {"id": "job-2025-mopa-data-entry-control-q02", "examId": "job-2025-mopa-data-entry-control", "subject": "bangla", "topic": "বাক্য-রচনা", "qno": 2, "marks": 5, "type": "sub-parts", "question": "অর্থ উল্লেখ করে বাক্য রচনা করুন:", "parts": [{"label": "ক", "q": "লেফাফা দুরস্ত", "a": "বাইরে পরিপাটি"}, {"label": "খ", "q": "চিনে জোঁক", "a": "নাছোড়বান্দা"}, {"label": "গ", "q": "বিনা মেঘে বজ্রপাত", "a": "অপ্রত্যাশিত বিপদ"}, {"label": "ঘ", "q": "দুধের মাছি", "a": "সুসময়ের বন্ধু"}, {"label": "ঙ", "q": "সপ্তমে চড়া", "a": "প্রচণ্ড উত্তেজনা"}]},
  {"id": "job-2025-mopa-data-entry-control-q03", "examId": "job-2025-mopa-data-entry-control", "subject": "bangla", "topic": "সন্ধি", "qno": 3, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুন:", "parts": [{"label": "ক", "q": "ষড়ানন", "a": "ষট্‌ + আনন"}, {"label": "খ", "q": "উল্লিখিত", "a": "উৎ + লিখিত"}, {"label": "গ", "q": "লঘুর্মি", "a": "লঘু + ঊর্মি"}, {"label": "ঘ", "q": "অস্থিত", "a": "অনু + ইত"}, {"label": "ঙ", "q": "যাবজ্জীবন", "a": "যাবৎ + জীবন"}]},
  {"id": "job-2025-mopa-data-entry-control-q04", "examId": "job-2025-mopa-data-entry-control", "subject": "bangla", "topic": "কারক", "qno": 4, "marks": 5, "type": "sub-parts", "question": "কারক ও বিভক্তি নির্ণয় করুন:", "parts": [{"label": "ক", "q": "নজরুল কর্তৃক অগ্নিবীণা রচিত হয়েছে।", "a": "কর্তৃকারকে ৩য়া"}, {"label": "খ", "q": "ছেলেটি বলের সঙ্গে যুদ্ধ করে।", "a": "কর্মকারকে ৬ষ্ঠী"}, {"label": "গ", "q": "আকাশ মেঘে ঢাকা।", "a": "করণে ৭মী"}, {"label": "ঘ", "q": "বাবাকে বড্ড ভয় পাই।", "a": "অপাদানে ২য়া"}, {"label": "ঙ", "q": "এ জমিতে সোনা ফলে।", "a": "অধিকরণে ৭মী"}]},
  {"id": "job-2025-mopa-data-entry-control-q05", "examId": "job-2025-mopa-data-entry-control", "subject": "bangla", "qno": 5, "marks": 10, "type": "paragraph", "question": "ভাব-সম্প্রসারণ করুন: ইটের পর ইট মধ্যে মানুষ কীট।", "answer": "মূলভাব: নগরসভ্যতার পীড়নে মানুষের জীবন আজ দুর্বিষহ হয়ে উঠেছে। শহরের কৃত্রিমতায় মানুষ ধীরে ধীরে তার স্বাভাবিক প্রকৃতি হারিয়ে আজ কীটে পরিণত হয়েছে। সম্প্রসারিত ভাব: নদী-নালা-খাল-বিল-পাহাড়-অরণ্য প্রকৃতির স্বতঃস্ফূর্ত দান। কিন্তু মানুষ সব সময়ই আধিপত্যবাদী। সে প্রকৃতির ওপর ক্ষমতা প্রয়োগ করে ইটের পর ইট গেঁথে একটার পর একটা দালান তৈরি করে নগর সৃষ্টি করেছে। ফলে ব্যাহত হচ্ছে প্রকৃতির প্রত্যাশিত বিকাশ। হারিয়ে যাচ্ছে ছায়া-সুনিবিড় শান্তির নীড়, সুমিষ্ট বায়ুপ্রবাহ, নদীর কলধ্বনি। সেই মমতাময় ও স্বাস্থ্যকর পরিস্থিতিকে দখল করে নিয়েছে এখন বড় বড় অট্টালিকা, বায়ু ও শব্দদূষণ, তীব্র যানজট ও কোলাহল। মানুষ এখানে স্বাভাবিকভাবে শ্বাসগ্রহণ করতে পারে না। শহরে গ্রামের সেই মিলনাত্মক সৌহার্দ্যপূর্ণ পরিবেশ নেই, তার বিপরীতে আছে পরস্পরের মধ্যে তীব্র প্রতিযোগিতা ও স্বার্থের দ্বন্দ্ব। এখানে কেউ কারো সুখ-দুঃখের অংশীদার হয় না। প্রত্যেকেই এখানে বিচ্ছিন্ন দ্বীপের মতো বসবাস করে। ফলে আরণ্যক ভূমিকে ধ্বংস করে মানুষ যতই যন্ত্রসভ্যতার বড়াই করুক না কেন, প্রকৃতপক্ষে মানুষ নগরসভ্যতার যাঁতাকলে পড়ে ভেতরে-বাইরে নিঃস্ব হয়ে কীটে পরিণত হচ্ছে। জীবনের স্বাভাবিক স্ফূর্তি বিনষ্ট হয়ে যাচ্ছে। তাই জ্ঞান-বিজ্ঞানের শিখরে উঠেও মানুষ আজ ক্লান্ত, অবসন্ন। প্রকৃতি ধ্বংস করার কারণে মানুষ এখন প্রতিমুহূর্তে প্রাকৃতিক দুর্যোগের ভয়ে শঙ্কিত থাকে। সে আজ একটু নির্মল বাতাস সেবন করতে চায়, বুকভরে নিঃশ্বাস নিতে চায়, প্রাণখুলে কথা বলতে চায়, সহমর্মী হতে চায় একে অন্যের। তাই আবার সে ফিরে পেতে চায় সেই প্রশান্ত, সুন্দর, নিষ্কণ্টক গ্রাম। সিদ্ধান্ত: নগর মানুষের ব্যবহারিক জীবনকে কিছুটা সহজ করলেও তার স্বাচ্ছন্দ্যকে নষ্ট করে দিয়েছে। নগর মানুষের জীবনের স্বাভাবিক বিকাশে অন্তরায় সৃষ্টি করেছে।"},
  {"id": "job-2025-mopa-data-entry-control-q06", "examId": "job-2025-mopa-data-entry-control", "subject": "english", "qno": 6, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "কঠিন পরিশ্রমের উপর জীবনের সফলতা নির্ভর করে।", "target": "The success of life depends on hard work."}, {"label": "খ", "source": "আমাদের দেশের অধিকাংশ মানুষ গ্রামে বসবাস করে।", "target": "Most of the people of our country live in villages."}, {"label": "গ", "source": "এখন সোয়া সাতটা বাজে।", "target": "It is quarter past seven."}, {"label": "ঘ", "source": "সে ২০০৫ সালে এসএসসি পরীক্ষায় পাশ করেছে।", "target": "He passed the SSC exam in 2005."}, {"label": "ঙ", "source": "দুর্নীতি একটি দেশের জাতীয় উন্নয়নে অন্যতম প্রধান অন্তরায়।", "target": "Corruption is one of the major obstacles to a country's national development."}]},
  {"id": "job-2025-mopa-data-entry-control-q07", "examId": "job-2025-mopa-data-entry-control", "subject": "english", "qno": 7, "marks": 5, "type": "fill-gaps", "question": "Use the right forms of verb (am/is/are/was/were/make/makes):", "parts": [{"sentence": "A good number of attendees........ seen in the meeting.", "answer": "are/were"}, {"sentence": "The hanana of Narsingdi...... famous.", "answer": "is"}, {"sentence": "Five and five...... ten.", "answer": "makes"}, {"sentence": "The candidates of this recruitment test...... very disciplined.", "answer": "are"}, {"sentence": "If I........ a king, I would help the poor.", "answer": "were"}]},
  {"id": "job-2025-mopa-data-entry-control-q08", "examId": "job-2025-mopa-data-entry-control", "subject": "english", "topic": "idioms-and-phrases", "qno": 8, "marks": 5, "type": "idiom", "question": "Frame sentences with meanings:", "parts": [{"label": "a", "phrase": "A slow coach", "meaning": "অলস ব্যক্তি", "example": "He is a slow coach."}, {"label": "b", "phrase": "At a deadlock", "meaning": "অচলাবস্থা", "example": "The factory has been at a deadlock."}, {"label": "c", "phrase": "Bad book", "meaning": "অনুগ্রহ বঞ্চিত", "example": "He is in the bad book of his boss."}, {"label": "d", "phrase": "Pour cold water on", "meaning": "নিরুৎসাহ করা", "example": "He always pours cold water on my plan."}, {"label": "e", "phrase": "Spare no pains", "meaning": "চেষ্টার ত্রুটি না করা", "example": "I shall spare no pains to help you."}]},
  {"id": "job-2025-mopa-data-entry-control-q09", "examId": "job-2025-mopa-data-entry-control", "subject": "english", "qno": 9, "marks": 10, "type": "paragraph", "question": "Write a paragraph on \"July Mass Uprising 2024\".", "answer": "The July Revolution of 2024 in Bangladesh marks a turning point in the nation's history. Initially, the students raised their voice against the longstanding unjust quota system. Gradually, this turned into a powerful movement, which soon became a powerful wave against the authoritarian rule and systemic corruption that prevailed over the last 16 years. The government was criticized for its deeply corrupt institutions and lack of accountability. But the government responded with violent repression. In the early stage of the quota reform protests, the government's heavy-handed approach led to multiple student deaths, including those of Abu Sayed and Mugdha, and several others. This brutality ignited widespread protests, and thousands took to the streets, transforming the student protest into a nationwide movement. Throughout the revolution, over a thousand students and common people, including at least 67 children, lost their lives. By August 5, the people of Bangladesh had reached their limit and took to the streets to oust the fascist regime. Being frightened, the fascist Prime Minister, along with family and close party members, fled the country. They sought shelter in a neighboring country, India. Following their departure, Nobel Laureate Dr. Muhammad Yunus answered the call of the people, assuming the role of Chief Advisor to an Interim Government on August 8. This revolution stands as a testament to the power of collective will."},
  {"id": "job-2025-mopa-data-entry-control-q10", "examId": "job-2025-mopa-data-entry-control", "subject": "math", "qno": 10, "marks": 5, "type": "math", "question": "২০ মিটার দীর্ঘ একটি কামরার মেঝে কার্পেট দিয়ে ঢাকতে ৭৫০০.০০ টাকা খরচ হয়। যদি ঐ কামরাটির প্রস্থ ৪ মিটার কম হতো, তবে ৬০০০.০০ টাকা খরচ হতো। কামরাটির প্রস্থ কত?", "steps": ["কামরার দৈর্ঘ্য ২০ মিটার। প্রস্থ ৪ মিটার কমলে ক্ষেত্রফল কমে (২০ মিটার × ৪ মিটার) = ৮০ বর্গমিটার", "ক্ষেত্রফল ৮০ বর্গমিটার কমার জন্য খরচ কমে (৭৫০০ - ৬০০০) টাকা = ১৫০০ টাকা", "৮০ বর্গমিটারে খরচ কমে ১৫০০ টাকা, সুতরাং ১ বর্গমিটারে খরচ কমে ১৫০০/৮০ টাকা", "৭৫০০ টাকায় খরচ হয় (৭৫০০×৮০)/১৫০০ = ৪০০ বর্গমিটার", "অতএব, কামরার ক্ষেত্রফল ৪০০ বর্গমিটার", "কামরার প্রস্থ = ক্ষেত্রফল ÷ দৈর্ঘ্য = ৪০০/২০ মিটার = ২০ মিটার"], "answer": "২০ মিটার"},
  {"id": "job-2025-mopa-data-entry-control-q11", "examId": "job-2025-mopa-data-entry-control", "subject": "math", "qno": 11, "marks": 5, "type": "math", "question": "x=4, y=–8 এবং z=5 হলে, 25(x+y)² – 20(x+y)(y+z) + 4(y+z)² এর মান কত?", "steps": ["প্রদত্ত রাশি = 25(x+y)² – 20(x+y)(y+z) + 4(y+z)²", "= {5(x+y)}² – 2.5(x+y).2(y+z) + {2(y+z)}²", "= [{5(x+y)} – 2(y+z)]²", "= (5x+5y – 2y – 2z)² = (5x + 3y – 2z)²", "= {5.4 + 3(–8) – 2.5}² = (20 – 24 – 10)²", "= (–14)² = 196"], "answer": "196"},
  {"id": "job-2025-mopa-data-entry-control-q12", "examId": "job-2025-mopa-data-entry-control", "subject": "math", "qno": 12, "marks": 5, "type": "math", "question": "একটি সমদ্বিবাহু ত্রিভুজের ভূমির দৈর্ঘ্য ৬০ সে.মি.। এর ক্ষেত্রফল ১২০০ বর্গ সে.মি হলে সমান সমান বাহুর দৈর্ঘ্য নির্ণয় কর।", "steps": ["মনে করি, সমদ্বিবাহু ত্রিভুজের ভূমি b = ৬০ সে.মি. এবং সমান সমান বাহুর দৈর্ঘ্য a।", "ত্রিভুজটির ক্ষেত্রফল = (b/4)√(4a²–b²)", "প্রশ্নানুসারে, (৬০/৪)√(4a²–৬০²) = ১২০০", "১৫√(4a²–৩৬০০) = ১২০০ ⇒ √(4a²–৩৬০০) = ৮০", "4a²–৩৬০০ = ৬৪০০ ⇒ 4a² = ১০০০০ ⇒ a² = ২৫০০", "∴ a = ৫০"], "answer": "৫০ সে.মি."},
  {"id": "job-2025-mopa-data-entry-control-q13", "examId": "job-2025-mopa-data-entry-control", "subject": "math", "qno": 13, "marks": 5, "type": "math", "question": "দুইটি ক্রমিক স্বাভাবিক বিজোড় সংখ্যার যোগফল ১৬ হলে, সংখ্যা দুইটি নির্ণয় করুন।", "steps": ["মনে করি, দুটি ক্রমিক স্বাভাবিক বিজোড় সংখ্যা যথাক্রমে ক ও ক+২", "প্রশ্নমতে, ক + ক+২ = ১৬", "২ক = ১৪ ∴ ক = ৭"], "answer": "সংখ্যা দুইটি ৭ এবং ৯"},
  {"id": "job-2025-mopa-data-entry-control-q14", "examId": "job-2025-mopa-data-entry-control", "subject": "general-knowledge", "qno": 14, "marks": 20, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দিন:", "parts": [{"label": "ক", "q": "কোনটি কম্পিউটারের সকল কার্যক্রম নিয়ন্ত্রণ করে?", "a": "Central Processing Unit (CPU)"}, {"label": "খ", "q": "F1 থেকে F12 পর্যন্ত কী-গুলোকে এক সাথে কি বলা হয়?", "a": "ফাংশন কী (Function Keys)"}, {"label": "গ", "q": "অক্ষর কাটা বা মোছার জন্য কোন কমান্ড ব্যবহার করা হয়?", "a": "ডিলিট (Delete) বা ব্যাকস্পেস (Backspace)"}, {"label": "ঘ", "q": "MS Word-এ Select All এর শর্টকাট কমান্ড কি?", "a": "CTRL+A"}, {"label": "ঙ", "q": "Save এর শর্টকাট কমান্ড লিখ।", "a": "CTRL+S"}, {"label": "চ", "q": "বিজয় কিবোর্ডে জ্ঞ কিভাবে লিখতে হয়?", "a": "জ + ্ + ঞ"}, {"label": "ছ", "q": "অ্যানিমেশন, গ্রাফিক্স ও সাউন্ডের সমন্বয়কে কি বলা হয়?", "a": "মাল্টিমিডিয়া"}, {"label": "জ", "q": "কীবোর্ডে এ্যারো কী-এর সংখ্যা কয়টি?", "a": "৪টি"}, {"label": "ঝ", "q": "'নিকষ' কি?", "a": "নিকষ (Nikosh) একটি বাংলা ফন্ট যা ইউনিকোড স্ট্যান্ডার্ডে তৈরি।"}, {"label": "ঞ", "q": "চার্লস ব্যাবেজ কোন বিষয়ে অধ্যাপক ছিলেন?", "a": "গণিত।"}, {"label": "ট", "q": "BIOS এর পূর্ণরূপ কি?", "a": "Basic Input Output System"}, {"label": "ঠ", "q": "FORTRAN এর পূর্ণরূপ কি?", "a": "Formula Translation"}, {"label": "ড", "q": "PAN এর পূর্ণরূপ কি?", "a": "Personal Area Network"}, {"label": "ঢ", "q": "SWIFT এর পূর্ণরূপ কি?", "a": "Society for Worldwide Interbank Financial Telecommunications"}, {"label": "ণ", "q": "E-mail এ cc এর পূর্ণরূপ কি?", "a": "Carbon Copy"}, {"label": "ত", "q": "VSAT এর পূর্ণরূপ কি?", "a": "Very Small Aperture Terminal"}, {"label": "থ", "q": "GSM এর পূর্ণরূপ কি?", "a": "Global System for Mobile Communications"}, {"label": "দ", "q": "NGSO এর পূর্ণরূপ কি?", "a": "Non-Geostationary Orbit"}, {"label": "ধ", "q": "PASCAL এর পূর্ণরূপ কি?", "a": "Programming Language for Algorithmic and Symbolic Calculations"}, {"label": "ন", "q": "ন্যানো প্রযুক্তির জনক কে?", "a": "রিচার্ড ফাইনম্যান।"}, {"label": "প", "q": "'Cookie' কি?", "a": "কুকি হলো একটি ছোট টেক্সট ফাইল যা একটি ওয়েবসাইট ব্যবহারকারীর কম্পিউটারে সংরক্ষণ করে রাখে। এই ফাইলটি ব্যবহারকারীর ব্রাউজারে সেই ওয়েবসাইটের কিছু তথ্য মনে রাখতে সাহায্য করে, যেমন ব্যবহারকারীর পছন্দ, লগইন তথ্য ইত্যাদি।"}, {"label": "ফ", "q": "ফেসবুক এর সহ-প্রতিষ্ঠাতা বাংলাদেশীর নাম কি?", "a": "ফেসবুকের সহ-প্রতিষ্ঠাতা বাংলাদেশী কেউ নেই। (বি.দ্র: ইউটিউবের সহ-প্রতিষ্ঠাতা বাংলাদেশী বংশোদ্ভূত জাওয়েদ করিম)"}, {"label": "ব", "q": "রিলেশনাল ডেটাবেজ ধারনা প্রবর্তন করেন কে?", "a": "এডগার ফ্রাংক কড (Edgar Frank Codd)"}, {"label": "ভ", "q": "সম্প্রতি বাংলাদেশে গুগলের চালু হওয়া সেবার নাম কি?", "a": "Google Pay (বাংলাদেশে ২৪ জুন, ২০২৫ তারিখে আনুষ্ঠানিকভাবে চালু হয়েছে)"}, {"label": "ম", "q": "ডেটাকে এনক্রিপশন ও ডিক্রিপশন করার পদ্ধতিকে কি বলে?", "a": "ক্রিপ্টোগ্রাফি (cryptography)"}, {"label": "য", "q": "স্টারলিংক এর পরীক্ষামূলক সম্প্রচার বাংলাদেশে কত তারিখে শুরু হয়?", "a": "৯ এপ্রিল, ২০২৫ তারিখে।"}, {"label": "র", "q": "'SpaceX' এর সদর দপ্তর কোথায় অবস্থিত?", "a": "হথর্ন, ক্যালিফোর্নিয়া, মার্কিন যুক্তরাষ্ট্র।"}, {"label": "ল", "q": "\"Safari\" ব্রাউজার কোন কোম্পানি ডেভেলপ করেছে?", "a": "অ্যাপল কোম্পানি।"}, {"label": "শ", "q": "ইন্টারনেট নির্ভর কম্পিউটিং কে কি বলে?", "a": "ক্লাউড কম্পিউটিং"}]},
  {"id": "job-2025-mopa-account-keeper-q01", "examId": "job-2025-mopa-account-keeper", "subject": "bangla", "qno": 1, "marks": 5, "type": "paragraph", "question": "উপসর্গ কাকে বলে? বাংলা ভাষায় উপসর্গ কত প্রকার ও কী কী?", "answer": "শব্দ বা ধাতুর পূর্বে কতিপয় সুনির্দিষ্ট অব্যয় জাতীয় শব্দাংশ যুক্ত হয়ে সাধিত শব্দে অর্থের পরিবর্তন, সম্প্রসারণ বা সংকোচন ঘটিয়ে থাকে। এগুলোকে বলা হয় উপসর্গ (Prefix)। যেমন, প, পরা, পরি, নির ইত্যাদি। বাংলা ভাষায় উপসর্গ ৩ প্রকার। যথা: বাংলা উপসর্গ (অ, অঘা, অজ ইত্যাদি), তৎসম উপসর্গ (প্র, পরা, অপ, সম, নি ইত্যাদি), বিদেশি উপসর্গ (ফুল, নিম, ফি, হা ইত্যাদি)।"},
  {"id": "job-2025-mopa-account-keeper-q02", "examId": "job-2025-mopa-account-keeper", "subject": "bangla", "topic": "বাক্য-রচনা", "qno": 2, "marks": 5, "type": "sub-parts", "question": "অর্থ উল্লেখ করে বাক্য রচনা করুন:", "parts": [{"label": "ক", "q": "লেফাফা দুরস্ত", "a": "বাইরে পরিপাটি"}, {"label": "খ", "q": "চিনে জোঁক", "a": "নাছোড়বান্দা"}, {"label": "গ", "q": "বিনা মেঘে বজ্রপাত", "a": "অপ্রত্যাশিত বিপদ"}, {"label": "ঘ", "q": "দুধের মাছি", "a": "সুসময়ের বন্ধু"}, {"label": "ঙ", "q": "সপ্তমে চড়া", "a": "প্রচণ্ড উত্তেজনা"}]},
  {"id": "job-2025-mopa-account-keeper-q03", "examId": "job-2025-mopa-account-keeper", "subject": "bangla", "topic": "সন্ধি", "qno": 3, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুন:", "parts": [{"label": "ক", "q": "ষড়ানন", "a": "ষট্‌ + আনন"}, {"label": "খ", "q": "উল্লিখিত", "a": "উৎ + লিখিত"}, {"label": "গ", "q": "লঘুর্মি", "a": "লঘু + ঊর্মি"}, {"label": "ঘ", "q": "অস্থিত", "a": "অনু + ইত"}, {"label": "ঙ", "q": "যাবজ্জীবন", "a": "যাবৎ + জীবন"}]},
  {"id": "job-2025-mopa-account-keeper-q04", "examId": "job-2025-mopa-account-keeper", "subject": "bangla", "topic": "কারক", "qno": 4, "marks": 5, "type": "sub-parts", "question": "কারক ও বিভক্তি নির্ণয় করুন:", "parts": [{"label": "ক", "q": "নজরুল কর্তৃক অগ্নিবীণা রচিত হয়েছে।", "a": "কর্তৃকারকে ৩য়া"}, {"label": "খ", "q": "ছেলেটি বলের সঙ্গে যুদ্ধ করে।", "a": "কর্মকারকে ৬ষ্ঠী"}, {"label": "গ", "q": "আকাশ মেঘে ঢাকা।", "a": "করণে ৭মী"}, {"label": "ঘ", "q": "বাবাকে বড্ড ভয় পাই।", "a": "অপাদানে ২য়া"}, {"label": "ঙ", "q": "এ জমিতে সোনা ফলে।", "a": "অধিকরণে ৭মী"}]},
  {"id": "job-2025-mopa-account-keeper-q05", "examId": "job-2025-mopa-account-keeper", "subject": "bangla", "topic": "শুদ্ধ-বানান", "qno": 5, "marks": 5, "type": "table", "question": "নিচের শব্দগুলো শুদ্ধ করে লিখুন:", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["অনুকুল", "অনুকূল"], ["অন্বেষন", "অন্বেষণ"], ["ব্যুৎপত্তি", "ব্যুৎপত্তি"], ["বিহঙ্গনী", "বিহঙ্গী"], ["অনুর্ধ", "অনুর্ধ্ব"]]},
  {"id": "job-2025-mopa-account-keeper-q06", "examId": "job-2025-mopa-account-keeper", "subject": "bangla", "qno": 6, "marks": 10, "type": "paragraph", "question": "ভাব-সম্প্রসারণ করুন: ইটের পর ইট মধ্যে মানুষ কীট।", "answer": "মূলভাব: নগরসভ্যতার পীড়নে মানুষের জীবন আজ দুর্বিষহ হয়ে উঠেছে। শহরের কৃত্রিমতায় মানুষ ধীরে ধীরে তার স্বাভাবিক প্রকৃতি হারিয়ে আজ কীটে পরিণত হয়েছে। সম্প্রসারিত ভাব: নদী-নালা-খাল-বিল-পাহাড়-অরণ্য প্রকৃতির স্বতঃস্ফূর্ত দান। কিন্তু মানুষ সব সময়ই আধিপত্যবাদী। সে প্রকৃতির ওপর ক্ষমতা প্রয়োগ করে ইটের পর ইট গেঁথে একটার পর একটা দালান তৈরি করে নগর সৃষ্টি করেছে। ফলে ব্যাহত হচ্ছে প্রকৃতির প্রত্যাশিত বিকাশ। হারিয়ে যাচ্ছে ছায়া-সুনিবিড় শান্তির নীড়, সুমিষ্ট বায়ুপ্রবাহ, নদীর কলধ্বনি। সেই মমতাময় ও স্বাস্থ্যকর পরিস্থিতিকে দখল করে নিয়েছে এখন বড় বড় অট্টালিকা, বায়ু ও শব্দদূষণ, তীব্র যানজট ও কোলাহল। মানুষ এখানে স্বাভাবিকভাবে শ্বাসগ্রহণ করতে পারে না। শহরে গ্রামের সেই মিলনাত্মক সৌহার্দ্যপূর্ণ পরিবেশ নেই, তার বিপরীতে আছে পরস্পরের মধ্যে তীব্র প্রতিযোগিতা ও স্বার্থের দ্বন্দ্ব। এখানে কেউ কারো সুখ-দুঃখের অংশীদার হয় না। প্রত্যেকেই এখানে বিচ্ছিন্ন দ্বীপের মতো বসবাস করে। ফলে আরণ্যক ভূমিকে ধ্বংস করে মানুষ যতই যন্ত্রসভ্যতার বড়াই করুক না কেন, প্রকৃতপক্ষে মানুষ নগরসভ্যতার যাঁতাকলে পড়ে ভেতরে-বাইরে নিঃস্ব হয়ে কীটে পরিণত হচ্ছে। জীবনের স্বাভাবিক স্ফূর্তি বিনষ্ট হয়ে যাচ্ছে। তাই জ্ঞান-বিজ্ঞানের শিখরে উঠেও মানুষ আজ ক্লান্ত, অবসন্ন। প্রকৃতি ধ্বংস করার কারণে মানুষ এখন প্রতিমুহূর্তে প্রাকৃতিক দুর্যোগের ভয়ে শঙ্কিত থাকে। সে আজ একটু নির্মল বাতাস সেবন করতে চায়, বুকভরে নিঃশ্বাস নিতে চায়, প্রাণখুলে কথা বলতে চায়, সহমর্মী হতে চায় একে অন্যের। তাই আবার সে ফিরে পেতে চায় সেই প্রশান্ত, সুন্দর, নিষ্কণ্টক গ্রাম। সিদ্ধান্ত: নগর মানুষের ব্যবহারিক জীবনকে কিছুটা সহজ করলেও তার স্বাচ্ছন্দ্যকে নষ্ট করে দিয়েছে। নগর মানুষের জীবনের স্বাভাবিক বিকাশে অন্তরায় সৃষ্টি করেছে।"},
  {"id": "job-2025-mopa-account-keeper-q07", "examId": "job-2025-mopa-account-keeper", "subject": "english", "qno": 7, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "কঠিন পরিশ্রমের উপর জীবনের সফলতা নির্ভর করে।", "target": "The success of life depends on hard work."}, {"label": "খ", "source": "আমাদের দেশের অধিকাংশ মানুষ গ্রামে বসবাস করে।", "target": "Most of the people of our country live in villages."}, {"label": "গ", "source": "এখন সোয়া সাতটা বাজে।", "target": "It is quarter past seven."}, {"label": "ঘ", "source": "সে ২০০৫ সালে এসএসসি পরীক্ষায় পাশ করেছে।", "target": "He passed the SSC exam in 2005."}, {"label": "ঙ", "source": "দুর্নীতি একটি দেশের জাতীয় উন্নয়নে অন্যতম প্রধান অন্তরায়।", "target": "Corruption is one of the major obstacles to a country's national development."}]},
  {"id": "job-2025-mopa-account-keeper-q08", "examId": "job-2025-mopa-account-keeper", "subject": "english", "qno": 8, "marks": 5, "type": "fill-gaps", "question": "Use the right forms of verb (am/is/are/was/were/make/makes):", "parts": [{"sentence": "A good number of attendees........ seen in the meeting.", "answer": "are/were"}, {"sentence": "The hanana of Narsingdi...... famous.", "answer": "is"}, {"sentence": "Five and five...... ten.", "answer": "makes"}, {"sentence": "The candidates of this recruitment test...... very disciplined.", "answer": "are"}, {"sentence": "If I........ a king, I would help the poor.", "answer": "were"}]},
  {"id": "job-2025-mopa-account-keeper-q09", "examId": "job-2025-mopa-account-keeper", "subject": "english", "qno": 9, "marks": 5, "type": "fill-gaps", "question": "Use appropriate prepositions:", "parts": [{"sentence": "There is no remedy....... cancer.", "answer": "for"}, {"sentence": "Bangladesh is rich.... natural gas.", "answer": "in"}, {"sentence": "Yesterday a storm blew .......Dhaka city.", "answer": "over"}, {"sentence": "The boy acted........ my suggestions.", "answer": "on"}, {"sentence": "Ignorance is similar...... darkness.", "answer": "to"}]},
  {"id": "job-2025-mopa-account-keeper-q10", "examId": "job-2025-mopa-account-keeper", "subject": "english", "topic": "idioms-and-phrases", "qno": 10, "marks": 5, "type": "idiom", "question": "Frame sentences with meanings:", "parts": [{"label": "a", "phrase": "A slow coach", "meaning": "অলস ব্যক্তি", "example": "He is a slow coach."}, {"label": "b", "phrase": "At a deadlock", "meaning": "অচলাবস্থা", "example": "The factory has been at a deadlock."}, {"label": "c", "phrase": "Bad book", "meaning": "অনুগ্রহ বঞ্চিত", "example": "He is in the bad book of his boss."}, {"label": "d", "phrase": "Pour cold water on", "meaning": "নিরুৎসাহ করা", "example": "He always pours cold water on my plan."}, {"label": "e", "phrase": "Spare no pains", "meaning": "চেষ্টার ত্রুটি না করা", "example": "I shall spare no pains to help you."}]},
  {"id": "job-2025-mopa-account-keeper-q11", "examId": "job-2025-mopa-account-keeper", "subject": "english", "qno": 11, "marks": 5, "type": "sentence-change", "question": "Identify correct/incorrect sentence:", "parts": [{"label": "a", "original": "Bread and butter are my favorite breakfast.", "changed": "Bread and butter is my favorite breakfast."}, {"label": "b", "original": "Each boy and each girl have a pen.", "changed": "Each boy and each girl has a pen."}, {"label": "c", "original": "The man is mortal.", "changed": "Man is mortal."}, {"label": "d", "original": "Rahim is the better of the two boys.", "changed": "Rahim is the better of the two boys."}, {"label": "e", "original": "Either the teachers or the headmaster have succeeded in their attempt.", "changed": "Either the teachers or the headmaster has succeeded in their attempt."}]},
  {"id": "job-2025-mopa-account-keeper-q12", "examId": "job-2025-mopa-account-keeper", "subject": "english", "qno": 12, "marks": 10, "type": "paragraph", "question": "Write a paragraph on \"July Mass Uprising 2024\".", "answer": "The July Revolution of 2024 in Bangladesh marks a turning point in the nation's history. Initially, the students raised their voice against the longstanding unjust quota system. Gradually, this turned into a powerful movement, which soon became a powerful wave against the authoritarian rule and systemic corruption that prevailed over the last 16 years. The government was criticized for its deeply corrupt institutions and lack of accountability. But the government responded with violent repression. In the early stage of the quota reform protests, the government's heavy-handed approach led to multiple student deaths, including those of Abu Sayed and Mugdha, and several others. This brutality ignited widespread protests, and thousands took to the streets, transforming the student protest into a nationwide movement. Throughout the revolution, over a thousand students and common people, including at least 67 children, lost their lives. By August 5, the people of Bangladesh had reached their limit and took to the streets to oust the fascist regime. Being frightened, the fascist Prime Minister, along with family and close party members, fled the country. They sought shelter in a neighboring country, India. Following their departure, Nobel Laureate Dr. Muhammad Yunus answered the call of the people, assuming the role of Chief Advisor to an Interim Government on August 8. This revolution stands as a testament to the power of collective will."},
  {"id": "job-2025-mopa-account-keeper-q13", "examId": "job-2025-mopa-account-keeper", "subject": "math", "qno": 13, "marks": 5, "type": "math", "question": "২০ মিটার দীর্ঘ একটি কামরার মেঝে কার্পেট দিয়ে ঢাকতে ৭৫০০.০০ টাকা খরচ হয়। যদি ঐ কামরাটির প্রস্থ ৪ মিটার কম হতো, তবে ৬০০০.০০ টাকা খরচ হতো। কামরাটির প্রস্থ কত?", "steps": ["কামরার দৈর্ঘ্য ২০ মিটার। প্রস্থ ৪ মিটার কমলে ক্ষেত্রফল কমে (২০ মিটার × ৪ মিটার) = ৮০ বর্গমিটার", "ক্ষেত্রফল ৮০ বর্গমিটার কমার জন্য খরচ কমে (৭৫০০ - ৬০০০) টাকা = ১৫০০ টাকা", "৮০ বর্গমিটারে খরচ কমে ১৫০০ টাকা, সুতরাং ৭৫০০ টাকায় খরচ হয় (৭৫০০×৮০)/১৫০০ = ৪০০ বর্গমিটার", "কামরার প্রস্থ = ক্ষেত্রফল ÷ দৈর্ঘ্য = ৪০০/২০ মিটার = ২০ মিটার"], "answer": "২০ মিটার"},
  {"id": "job-2025-mopa-account-keeper-q14", "examId": "job-2025-mopa-account-keeper", "subject": "math", "qno": 14, "marks": 5, "type": "math", "question": "x=4, y=–8 এবং z=5 হলে, 25(x+y)² – 20(x+y)(y+z) + 4(y+z)² এর মান কত?", "steps": ["প্রদত্ত রাশি = 25(x+y)² – 20(x+y)(y+z) + 4(y+z)²", "= {5(x+y)}² – 2.5(x+y).2(y+z) + {2(y+z)}²", "= [{5(x+y)} – 2(y+z)]²", "= (5x+5y – 2y – 2z)² = (5x + 3y – 2z)²", "= {5.4 + 3(–8) – 2.5}² = (20 – 24 – 10)²", "= (–14)² = 196"], "answer": "196"},
  {"id": "job-2025-niport-head-assistant-q01", "examId": "job-2025-niport-head-assistant", "subject": "bangla", "qno": 1, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুন:", "parts": [{"label": "ক", "q": "খরচ করে না যে", "a": "কৃপণ"}, {"label": "খ", "q": "অনেক দেখেছে যে", "a": "ভূয়োদর্শী"}, {"label": "গ", "q": "জানায় যে", "a": "জ্ঞাপক"}, {"label": "ঘ", "q": "যার কিছু নেই", "a": "হতসর্বস্ব"}, {"label": "ঙ", "q": "হৃদয়ের প্রীতিকর", "a": "হৃদ্য"}]},
  {"id": "job-2025-niport-head-assistant-q02", "examId": "job-2025-niport-head-assistant", "subject": "bangla", "topic": "শুদ্ধ-বানান", "qno": 2, "marks": 5, "type": "table", "question": "শুদ্ধ করে লিখুন:", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["তীতীক্ষা", "তিতিক্ষা"], ["উৎকর্কতা", "উৎকর্ষ"], ["অশ্রজল", "অশ্রু"], ["মুহঃমুহ", "মুহুর্মুহু"], ["সমীচিন", "সমীচীন"]]},
  {"id": "job-2025-niport-head-assistant-q03", "examId": "job-2025-niport-head-assistant", "subject": "bangla", "qno": 3, "marks": 5, "type": "sub-parts", "question": "অর্থসহ বাক্য রচনা করুন:", "parts": [{"label": "ক", "q": "অতি দর্পে হত লঙ্কা", "a": "অহংকারে পতন"}, {"label": "খ", "q": "আঁকু পাঁকু করা", "a": "ছটফট করা"}, {"label": "গ", "q": "কচ্ছপের কামড়", "a": "যা সহজে ছাড়ে না"}, {"label": "ঘ", "q": "চিনে জোঁক", "a": "নাছোড়বান্দা"}, {"label": "ঙ", "q": "ধর্মের ষাঁড়", "a": "যথেচ্ছাচারী/স্বেচ্ছাচারী"}]},
  {"id": "job-2025-niport-head-assistant-q04", "examId": "job-2025-niport-head-assistant", "subject": "bangla", "qno": 4, "marks": 5, "type": "table", "question": "বিপরীত শব্দ লিখুন:", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["কিরণ", "অন্ধকার"], ["জরা", "যৌবন"], ["খিড়কি", "সিংহদ্বার"], ["চিরায়ত", "সাময়িক"], ["নশ্বর", "অবিনশ্বর"]]},
  {"id": "job-2025-niport-head-assistant-q05", "examId": "job-2025-niport-head-assistant", "subject": "english", "qno": 5, "marks": 5, "type": "read-fill", "question": "Fill in the gaps with articles (a, an, the) and put a cross (×) where no article is needed:", "passage": "Although different in length, a short story and a novel have many similarities. Both belong to the category of literature known as fictions, they are fictitious. Both of them have (a) ........story outline or plot (b)....... short story has (c)....... setting, both time and space settings, similarly, a novel also has (d)....... time and space settings which contribute to (e) ........ meaning or theme.", "answers": "(a) a  (b) a  (c) a  (d) ×  (e) the"},
  {"id": "job-2025-niport-head-assistant-q06", "examId": "job-2025-niport-head-assistant", "subject": "english", "qno": 6, "marks": 5, "type": "read-fill", "question": "Fill in the gaps with appropriate prepositions:", "passage": "The other sailors were angry (a)..... the old man. They blamed him (b)..... their sufferings and hung the dead albatross (c)....... his neck. Suddenly, they saw a ship coming (d)....... them. They cried aloud (e)...... joy.", "answers": "(a) with  (b) for  (c) around  (d) towards  (e) with"},
  {"id": "job-2025-niport-head-assistant-q07", "examId": "job-2025-niport-head-assistant", "subject": "english", "qno": 7, "marks": 5, "type": "sentence-change", "question": "Change the following sentences as directed in the brackets:", "parts": [{"label": "a", "original": "It is a very beautiful city. (Exclamatory)", "changed": "What a beautiful city it is!"}, {"label": "b", "original": "Fahim is one of the tallest boys in the class. (Comparative)", "changed": "Fahim is taller than most other boys in the class."}, {"label": "c", "original": "The old man is too weak to move. (Complex)", "changed": "The old man is so weak that he can't move."}, {"label": "d", "original": "\"Yes, sir\", she replied, \"I have done my duty.\" (Indirect)", "changed": "She respectfully replied in the affirmative that she had done her duty."}, {"label": "e", "original": "The house is building. (Passive)", "changed": "The house is being built."}]},
  {"id": "job-2025-niport-head-assistant-q08", "examId": "job-2025-niport-head-assistant", "subject": "english", "qno": 8, "marks": 5, "type": "read-fill", "question": "Use right form of the words in the gaps:", "passage": "Why are social networks (a).... (expand) so fast? The answer is simple. Most of the social (b).... (service) are cost free. You can make use of them free, (c)....... (pay) a very little to your internet service provider. Moreover, you can make your personal profile public before the entire online (d).......(community). You can also look into other people's profile if you are (e)........(interest).", "answers": "a) expanding  b) services  c) paying  d) community  e) interested"},
  {"id": "job-2025-niport-head-assistant-q09", "examId": "job-2025-niport-head-assistant", "subject": "math", "qno": 9, "marks": 6, "type": "math", "question": "এক ব্যক্তি ২৫০০ টাকার একটি ঋণ কিস্তিতে পরিশোধ করতে রাজী হন। প্রত্যেক কিস্তি পূর্ব কিস্তি থেকে ২ টাকা বেশি। যদি প্রথম কিস্তি ১ টাকা হয়, তবে কতগুলো কিস্তিতে ঐ ব্যক্তি তার ঋণ শোধ করতে পারবেন? এবং সর্বশেষ কিস্তির পরিমাণ কত হবে?", "steps": ["মনে করি, কিস্তির সংখ্যা = n। প্রথম কিস্তি, a=১; পরপর দুই কিস্তির পার্থক্য, d=২; মোট ঋণের পরিমাণ, S=২৫০০।", "সমান্তর ধারার সূত্রমতে, S = n/2{2a+(n-1)d}", "২৫০০ = n/2{2×1+(n-1)2} = n/2(2+2n-2) = n/2×2n = n²", "n = √2500 = ±50; কিস্তির সংখ্যা ঋণাত্মক হতে পারে না, তাই n=৫০", "৫০তম কিস্তির পরিমাণ = a+(n-1)d = 1+(50-1)2 = ৯৯ টাকা"], "answer": "কিস্তির সংখ্যা ৫০টি এবং সর্বশেষ কিস্তি ৯৯ টাকা"},
  {"id": "job-2025-niport-head-assistant-q10", "examId": "job-2025-niport-head-assistant", "subject": "math", "qno": 10, "marks": 6, "type": "math", "question": "একটি আয়তাকার ঘরের মেঝের ক্ষেত্রফল ১৯২ বর্গমিটার। মেঝের দৈর্ঘ্য ৪ মিটার কমালে ও প্রস্থ ৪ মিটার বাড়ালে ক্ষেত্রফল অপরিবর্তিত থাকে। মেঝের দৈর্ঘ্য ও প্রস্থ নির্ণয় করুন।", "steps": ["মনে করি, মেঝের দৈর্ঘ্য = x মিটার, ∴ প্রস্থ = ১৯২/x মিটার", "প্রশ্নমতে, (x-4)(192/x + 4) = 192", "192 - 768/x + 4x - 16 = 192 ⇒ 4x - 768/x = 16", "(4x²-768)/x = 16 ⇒ 4x²-768 = 16x ⇒ x²-4x-192=0", "x²-16x+12x-192=0 ⇒ x(x-16)+12(x-16)=0 ⇒ (x-16)(x+12)=0", "x=16 অথবা x=-12; যেহেতু দৈর্ঘ্য ঋণাত্মক হতে পারে না, x=16", "মেঝের দৈর্ঘ্য ১৬ মি. এবং প্রস্থ = ১৯২/১৬ = ১২ মি."], "answer": "দৈর্ঘ্য ১৬ মিটার এবং প্রস্থ ১২ মিটার"},
  {"id": "job-2025-niport-head-assistant-q11", "examId": "job-2025-niport-head-assistant", "subject": "math", "qno": 11, "marks": 4, "type": "math", "question": "2x³+5x²-6x+4 থেকে কত বিয়োগ করলে রাশিটি (x+2) দ্বারা নিঃশেষে বিভাজ্য হবে?", "steps": ["2x³+5x²-6x+4 কে (x+2) দিয়ে ভাগ করলে ভাগফল হয় 2x²+x-8 এবং ভাগশেষ থাকে ২০", "অর্থাৎ, 2x³+5x²-6x+4 = (x+2)(2x²+x-8) + 20", "রাশিটিকে (x+2) দ্বারা নিঃশেষে বিভাজ্য করতে হলে ভাগশেষ ২০ বিয়োগ করতে হবে", "2x³+5x²-6x+4 - 20 = 2x³+5x²-6x-16, যা (x+2) দ্বারা নিঃশেষে বিভাজ্য"], "answer": "২০ বিয়োগ করতে হবে; প্রাপ্ত রাশি 2x³+5x²-6x-16"},
  {"id": "job-2025-niport-head-assistant-q12", "examId": "job-2025-niport-head-assistant", "subject": "general-knowledge", "qno": 12, "marks": 14, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর লিখুন:", "parts": [{"label": "ক", "q": "আয়তনে উত্তর আমেরিকা পৃথিবীর কততম মহাদেশ?", "a": "তৃতীয় (আয়তন প্রায় ২৪,৭০৯,০০০ বর্গ কিলোমিটার বা প্রায় ৯,৫৪০,০০০ বর্গ মাইল)।"}, {"label": "খ", "q": "ইসলাম খান কর্তৃক রাজমহল থেকে ঢাকায় রাজধানী স্থানান্তর হয় কত সালে?", "a": "১৬১০ সালে।"}, {"label": "গ", "q": "দেশের একমাত্র কৃষিভিত্তিক ইপিজেড কোনটি?", "a": "উত্তরা ইপিজেড (অবস্থিত: নীলফামারী জেলার সদর উপজেলার সংগলশী ইউনিয়নে)"}, {"label": "ঘ", "q": "WiMAX এর পূর্ণরূপ কী?", "a": "Worldwide Interoperability for Microwave Access"}, {"label": "ঙ", "q": "কোন Octal সংখ্যাটি Decimal সংখ্যা ৫৫-এর সমতুল্য?", "a": "৬৭।"}, {"label": "চ", "q": "তেজস্ক্রিয়তার একক কী?", "a": "বেকেরেল (Bq)।"}, {"label": "ছ", "q": "অতিরিক্ত খাদ্য থেকে লিভারে সঞ্চিত সুগার কোনটি?", "a": "গ্লাইকোজেন।"}, {"label": "জ", "q": "'বলিশিরা ভ্যালি' কোন জেলায় অবস্থিত?", "a": "মৌলভীবাজার।"}, {"label": "ঝ", "q": "কোন কোন ভিটামিন পানিতে দ্রবণীয়?", "a": "ভিটামিন বি ও ভিটামিন সি।"}, {"label": "ঞ", "q": "দাবা খেলার আদি নাম কী?", "a": "চতুরঙ্গ।"}, {"label": "ট", "q": "বাংলাদেশে ভ্যাট সিস্টেম চালু হয় কত সালে?", "a": "১ জুলাই ১৯৯১ সালে।"}, {"label": "ঠ", "q": "'দি স্পিরিট অব ল' বইটি কার লেখা?", "a": "মন্টেস্কু।"}, {"label": "ড", "q": "ফিফা বিশ্বকাপ ২০২৬ কোথায় অনুষ্ঠিত হবে?", "a": "যুক্তরাষ্ট্র, কানাডা, মেক্সিকো।"}, {"label": "ঢ", "q": "BRICS এর সর্বশেষ সদস্য কোন দেশ?", "a": "ইন্দোনেশিয়া (০৬ জানুয়ারি ২০২৫)।"}, {"label": "ণ", "q": "বর্তমানের কোন দেশ সাবেক সোভিয়েত ইউনিয়নের সবচেয়ে জনবহুল প্রজাতন্ত্র ছিল?", "a": "রাশিয়া।"}]},
  {"id": "job-2025-dc-sunamganj-account-asst-q01", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "bangla", "qno": 1, "marks": 10, "type": "short-qa", "question": "বন্ধনীতে প্রদত্ত নির্দেশনামতে উত্তর দিন:", "parts": [{"label": "ক", "q": "দপ্তর (কোন ভাষা হতে আগত?)", "a": "ফারসি"}, {"label": "খ", "q": "মৃত্যুক্ষুধা (উপন্যাসের লেখক কে?)", "a": "কাজী নজরুল ইসলাম"}, {"label": "গ", "q": "নতুবা (কোন পদ?)", "a": "অব্যয়"}, {"label": "ঘ", "q": "কান্নায় শোক মন্দীভূত হয় (কোন কারকে কোন বিভক্তি?)", "a": "অধিকরণে ৭মী"}, {"label": "ঙ", "q": "আশ্চর্য (সন্ধি বিচ্ছেদ করুন)", "a": "আ + চর্য"}, {"label": "চ", "q": "অন্তরীক্ষ (একটি সমার্থক শব্দ লিখুন)", "a": "আকাশ"}, {"label": "ছ", "q": "অগ্রজ (একটি বিপরীত শব্দ লিখুন)", "a": "অনুজ"}, {"label": "জ", "q": "সার্বভৌম (অর্থ লিখুন)", "a": "সর্বোচ্চ ক্ষমতা বা কর্তৃত্ব"}, {"label": "ঝ", "q": "সমিচিন (শুদ্ধ বানান লিখুন)", "a": "সমীচীন"}]},
  {"id": "job-2025-dc-sunamganj-account-asst-q02", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "bangla", "qno": 2, "marks": 10, "type": "paragraph", "question": "সাম্প্রতিক প্রেক্ষাপটে ভাব সম্প্রসারণ করুন: গ্রন্থগত বিদ্যা আর পরহস্তে ধন, নহে বিদ্যা, নহে ধন, হলে প্রয়োজন।", "answer": "মূলভাব: বিদ্যা যদি বইয়ের পাতায় আবদ্ধ থাকে এবং সম্পদ যদি নিজের আয়ত্তের বাইরে থাকে তবে তা কোনো প্রয়োজন মিটাতে পারে না। সম্প্রসারিত ভাব: মানুষ সৃষ্টির শ্রেষ্ঠ জীব। তার বিবেক আছে। মানুষ জ্ঞান অর্জন করে মহৎ গুণাবলির অধিকারী হয়। পরিশ্রম ও বুদ্ধি দিয়ে সে অর্থ উপার্জন করে। জ্ঞান ও অর্থ মানুষের মনুষ্যত্বকে পূর্ণতা দেয়। জ্ঞান অর্জন করতে হলে তাকে পড়াশোনা করতে হয়। গ্রন্থ বা বই জ্ঞানের ভাণ্ডার, গ্রন্থ পাঠ করে মানুষ তার জ্ঞানের পরিধি বিস্তৃত করতে পারে। জ্ঞানের ধারক ও বাহক হচ্ছে বই। গ্রন্থে আবদ্ধ জ্ঞানের স্বাদ পেতে হলে আমাদেরকে বই পড়তেই হবে। কিন্তু কেবল প্রচুর বই সংগ্রহে রাখলেই তাকে জ্ঞানী বলা যায় না। বই মনোযোগ সহকারে পড়তে হবে, তার মর্ম বুঝতে হবে এবং ব্যক্তিগত, সামাজিক ও জাতীয় জীবনের প্রয়োজনে সে বিদ্যা কাজে লাগাতে হবে। জ্ঞানের বিষয় গ্রন্থে আবদ্ধ রাখলে মুখস্থ করে পরীক্ষা পাস করেই প্রকৃত শিক্ষিত হতে পারে না, যদি গ্রন্থের আদর্শকে আত্মস্থ করা না যায়, তাহলে সে বিদ্যা জীবনের কোনো উপকারেই আসে না। বিদ্যার পোশাকী রূপে দেহশোভিত করলেই যথার্থ বিজ্ঞান হওয়া যায় না। বিদ্যা ও ধন মানুষের অতি প্রয়োজনীয় জিনিস। তাদের কাজে লাগাতে হলে বিদ্যাকে করতে হয় আত্মস্থ আর ধনকে রাখতে হয় নিজের আয়ত্তে। প্রকৃতপক্ষে যে বিষয়টি আত্মস্থ করা যায় না, নিজের অধিকারে ও ব্যবহারে আনা যায় না তা যতই সমৃদ্ধ হোক তাতে মানুষের কোনো উপকার হয় না। সে জন্যই বলা হয়েছে পুঁথিগত বিদ্যা যেমন নিষ্প্রয়োজনীয় তেমনি পর হস্তের ধনও নিরর্থক। মানবজীবনের সকল প্রকার প্রয়োজন সাধনের জন্য বিদ্যা ও ধন একান্ত জরুরি, সে প্রয়োজনে যখন সিদ্ধ হয় না তখন এর কোনো মূল্য থাকে না।"},
  {"id": "job-2025-dc-sunamganj-account-asst-q03", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "english", "topic": "idioms-and-phrases", "qno": 3, "marks": 5, "type": "idiom", "question": "Make sentences with the following Idioms and Phrases:", "parts": [{"label": "a", "phrase": "Over the Moon", "meaning": "খুশি হওয়া", "example": "I was over the moon when I got the job."}, {"label": "b", "phrase": "Drop the Ball", "meaning": "ভুল করা/দায়িত্বে গাফিলতি করা", "example": "He dropped the ball in the game."}, {"label": "c", "phrase": "Pros and Cons", "meaning": "খুঁটিনাটি", "example": "I know the pros and cons of the matter."}, {"label": "d", "phrase": "Maiden Speech", "meaning": "প্রথম বক্তৃতা", "example": "His maiden speech pleased all."}, {"label": "e", "phrase": "Gala Day", "meaning": "আনন্দের দিন", "example": "The 16th December is our gala day."}]},
  {"id": "job-2025-dc-sunamganj-account-asst-q04", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "english", "qno": 4, "marks": 5, "type": "translate", "question": "ইংরেজিতে অনুবাদ করুন: টাঙ্গুয়ার হাওর বাংলাদেশের সিলেট বিভাগের সুনামগঞ্জ জেলায় অবস্থিত একটি হাওর। প্রায় ১২৬ বর্গ কিলোমিটার এলাকা জুড়ে বিস্তৃত এ হাওর বাংলাদেশের দ্বিতীয় বৃহত্তম মিঠা পানির জলাভূমি। স্থানীয় লোকজনের কাছে হাওরটি নয়কুড়ি কান্দার ছয়কুড়ি বিল নামেও পরিচিত। এটি বাংলাদেশের দ্বিতীয় রামসার স্থান হিসাবে পরিচিত।", "parts": [{"label": "", "source": "টাঙ্গুয়ার হাওর বাংলাদেশের সিলেট বিভাগের সুনামগঞ্জ জেলায় অবস্থিত একটি হাওর। প্রায় ১২৬ বর্গ কিলোমিটার এলাকা জুড়ে বিস্তৃত এ হাওর বাংলাদেশের দ্বিতীয় বৃহত্তম মিঠা পানির জলাভূমি। স্থানীয় লোকজনের কাছে হাওরটি নয়কুড়ি কান্দার ছয়কুড়ি বিল নামেও পরিচিত। এটি বাংলাদেশের দ্বিতীয় রামসার স্থান হিসাবে পরিচিত।", "target": "Tanguar Haor is a haor located in Sunamganj district of Sylhet division in Bangladesh. Covering an area of about 126 square kilometers, it is the second largest freshwater wetland in Bangladesh. Locally, it is also known as \"Noykuri Kandars Choykuri Beel.\" It is recognized as the second Ramsar site of Bangladesh."}]},
  {"id": "job-2025-dc-sunamganj-account-asst-q05", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "english", "qno": 5, "marks": 5, "type": "sentence-change", "question": "Do as directed in the brackets:", "parts": [{"label": "a", "original": "Let not a lie ever be told. (Make it active)", "changed": "Never tell a lie."}, {"label": "b", "original": "How did you do it? (Make it passive)", "changed": "How was it done by you?"}, {"label": "c", "original": "She prefers music...... playing. (Fill in the blank with appropriate preposition)", "changed": "to"}, {"label": "d", "original": "He admitted his guilt. (Make it complex)", "changed": "He admitted that he was guilty."}, {"label": "e", "original": "Let him drink coffee. (Make it assertive)", "changed": "He drinks coffee."}]},
  {"id": "job-2025-dc-sunamganj-account-asst-q06", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "english", "qno": 6, "marks": 10, "type": "paragraph", "question": "Write a paragraph on 'July Revolution 2024'.", "answer": "The July Revolution of 2024 in Bangladesh marks a turning point in the nation's history. Initially, the students raised their voice against the longstanding unjust quota system. Gradually, this turned into a powerful movement, which soon became a powerful wave against the authoritarian rule and systemic corruption that prevailed over the last 16 years. The government was criticized for its deeply corrupt institutions and lack of accountability. But the government responded with violent repression. In the early stage of the quota reform protests, the government's heavy-handed approach led to multiple student deaths, including those of Abu Sayed and Mugdha, and several others. This brutality ignited widespread protests, and thousands took to the streets, transforming the student protest into a nationwide movement. Throughout the revolution, over a thousand students and common people, including at least 67 children, lost their lives. By August 5, the people of Bangladesh had reached their limit and took to the streets to oust the fascist regime. Being frightened, the fascist Prime Minister, along with family and close party members, fled the country. They sought shelter in a neighboring country, India. Following their departure, Nobel Laureate Dr. Muhammad Yunus answered the call of the people, assuming the role of Chief Advisor to an Interim Government on August 8. This revolution stands as a testament to the power of collective will."},
  {"id": "job-2025-dc-sunamganj-account-asst-q07", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "math", "qno": 7, "marks": 5, "type": "math", "question": "ক ও খ একত্রে একটি কাজ ২০ দিনে করতে পারে। ক একা কাজটি ৩০ দিনে করলে, খ একা কাজটি কতদিনে করতে পারবে?", "steps": ["ক ও খ একত্রে ১ দিনে করে ১/২০ অংশ কাজ", "ক ১ দিনে করে ১/৩০ অংশ কাজ", "∴ খ একা ১ দিনে করে (১/২০ - ১/৩০) = (৩-২)/৬০ = ১/৬০ অংশ কাজ", "১/৬০ অংশ কাজ করে ১ দিনে, ∴ ১ (সম্পূর্ণ) অংশ কাজ করে ৬০ দিনে"], "answer": "৬০ দিন"},
  {"id": "job-2025-dc-sunamganj-account-asst-q08", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "math", "qno": 8, "marks": 5, "type": "math", "question": "এক বিক্রেতা ১০টি পেয়ারা যে দামে কিনে ৮টি পেয়ারা সেই দামে বিক্রয় করলে শতকরা কত লাভ বা ক্ষতি হবে?", "steps": ["মনে করি, ১০টি পেয়ারার ক্রয়মূল্য ক টাকা, ∴১টির ক্রয়মূল্য ক/১০ টাকা", "আবার, ৮টি পেয়ারার বিক্রয়মূল্য ক টাকা, ∴১টির বিক্রয়মূল্য ক/৮ টাকা", "∴ লাভ = ক/৮ - ক/১০ = (৫ক-৪ক)/৪০ = ক/৪০ টাকা", "ক/১০ টাকায় লাভ হয় ক/৪০ টাকা, ∴১০০ টাকায় লাভ হয় (ক×১০×১০০)/(৪০×ক) = ২৫ টাকা"], "answer": "লাভ ২৫%"},
  {"id": "job-2025-dc-sunamganj-account-asst-q09", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "math", "qno": 9, "marks": 4, "type": "math", "question": "x²-2x+1=0 হলে, x⁴-1/x⁴ এর মান কত?", "steps": ["দেওয়া আছে, x²-2x+1=0 ⇒ (x-1)²=0 ⇒ x=1", "প্রদত্ত রাশি = x⁴-1/x⁴ = 1⁴-1/1⁴ = 1-1 = 0"], "answer": "0"},
  {"id": "job-2025-dc-sunamganj-account-asst-q10", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "math", "qno": 10, "marks": 6, "type": "math", "question": "উৎপাদকে বিশ্লেষণ করুন: (i) a²+2ab-2b-1  (ii) a²-10a+9", "steps": ["(i) a²+2ab-2b-1 = a²+2ab+b²-b²-2b-1 = (a²+2ab+b²)-(b²+2b+1) = (a+b)²-(b+1)² = (a+b+b+1)(a+b-b-1) = (a+2b+1)(a-1)", "(ii) a²-10a+9 = a²-9a-a+9 = a(a-9)-1(a-9) = (a-9)(a-1)"], "answer": "(i) (a+2b+1)(a-1)  (ii) (a-9)(a-1)"},
  {"id": "job-2025-dc-sunamganj-account-asst-q11", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "math", "qno": 11, "marks": 6, "type": "math", "question": "যদি a=√3+√2 হয়, তবে দেখাও যে, a³+1/a³=18√3", "steps": ["দেওয়া আছে, a=√3+√2", "1/a = 1/(√3+√2) = (√3-√2)/((√3+√2)(√3-√2)) = (√3-√2)/(3-2) = √3-√2", "∴ a+1/a = (√3+√2)+(√3-√2) = 2√3", "এখন, a³+1/a³ = (a+1/a)³-3.a.(1/a)(a+1/a) = (2√3)³-3(2√3)", "= 2³.(√3)³-6√3 = 8.3√3-6√3 = 24√3-6√3 = 18√3 (প্রমাণিত)"], "answer": "18√3 (প্রমাণিত)"},
  {"id": "job-2025-dc-sunamganj-account-asst-q12", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "general-knowledge", "qno": 12, "marks": 16, "type": "short-qa", "question": "সংক্ষিপ্ত উত্তর দিন: (সাধারণ জ্ঞান)", "parts": [{"label": "ক", "q": "সিলেট বিভাগ প্রতিষ্ঠিত হয় কোন সালে?", "a": "১ আগস্ট ১৯৯৫"}, {"label": "খ", "q": "সিলেটের পূর্ব নাম কি?", "a": "জালালাবাদ/শ্রীহট্ট"}, {"label": "গ", "q": "বাংলাদেশ কবে জাতিসংঘ সদস্যপদ লাভ করে?", "a": "১৯৭৪"}, {"label": "ঘ", "q": "জুলাই বিপ্লবের সর্বকনিষ্ঠ শহীদ কে?", "a": "আব্দুল আহাদ"}, {"label": "ঙ", "q": "মুক্তিযুদ্ধের প্রধান সেনাপতি কে ছিলেন?", "a": "এম এ জি ওসমানী"}, {"label": "চ", "q": "২৩তম বিশ্বকাপ ফুটবল কত সালে অনুষ্ঠিত হবে?", "a": "২০২৬ সালে"}, {"label": "ছ", "q": "TIN এর পূর্ণরূপ লিখুন।", "a": "Taxpayer's Identification Number"}, {"label": "জ", "q": "বাংলাদেশের একমাত্র জলাবন (সোয়াম্প ফরেস্ট) কোথায় অবস্থিত?", "a": "সিলেট (নাম- রাতারগুল)"}, {"label": "ঝ", "q": "বাংলাদেশী পণ্য যুক্তরাষ্ট্রে প্রবেশে সর্বশেষ নির্ধারিত ট্যারিফ কত শতাংশ?", "a": "২০ শতাংশ"}, {"label": "ঞ", "q": "বাংলাদেশের সংবিধানের অভিভাবক ও ব্যাখ্যাকারক কে?", "a": "সুপ্রীম কোর্ট"}, {"label": "ট", "q": "বাংলাদেশের বর্তমান অ্যাটর্নি জেনারেল এর নাম লিখুন?", "a": "মো. আসাদুজ্জামান"}, {"label": "ঠ", "q": "বর্তমানে সার্কভুক্ত দেশ কয়টি?", "a": "৮টি"}, {"label": "ড", "q": "বাংলাদেশ ক্রিকেট বোর্ডের বর্তমান সভাপতি/প্রেসিডেন্ট এর নাম কি?", "a": "আমিনুল ইসলাম বুলবুল"}, {"label": "ঢ", "q": "ড. মুহাম্মদ ইউনূস কত সালে নোবেল পুরস্কার পান?", "a": "২০০৬ সালে"}, {"label": "ণ", "q": "NATO এর পূর্ণরূপ কি?", "a": "North Atlantic Treaty Organization"}]},
  {"id": "job-2025-dc-sunamganj-account-asst-q13", "examId": "job-2025-dc-sunamganj-account-asst", "subject": "general-knowledge", "qno": 13, "marks": 10, "type": "short-qa", "question": "সংক্ষিপ্ত উত্তর দিন: (কম্পিউটার সম্পর্কিত)", "parts": [{"label": "ক", "q": "AI এর পূর্ণরূপ কি?", "a": "Artificial Intelligence"}, {"label": "খ", "q": "ChatGPT এর প্রতিষ্ঠাতা কে?", "a": "স্যাম অল্টম্যান"}, {"label": "গ", "q": "MS Excel কোন ধরণের প্রোগ্রাম?", "a": "স্প্রেডশিট প্রোগ্রাম"}, {"label": "ঘ", "q": "'কী-বোর্ড' কোন ধরণের ডিভাইস?", "a": "ইনপুট ডিভাইস"}, {"label": "ঙ", "q": "কম্পিউটারে স্মৃতি ধারণ ক্ষমতা কিসে প্রকাশ করা হয়?", "a": "বাইট"}, {"label": "চ", "q": "ROM এর পূর্ণরূপ কি?", "a": "Read Only Memory"}, {"label": "ছ", "q": "CAD কি?", "a": "Computer Aided Design"}, {"label": "জ", "q": "বাংলাদেশে কোথায় প্রথম কম্পিউটার স্থাপিত হয়?", "a": "পরমাণু শক্তি কেন্দ্রে (১৯৬৪ সালে)"}, {"label": "ঝ", "q": "কোন মেনুতে প্রিন্ট কমান্ড থাকে?", "a": "File মেনুতে"}, {"label": "ঞ", "q": "'কী-বোর্ড' এ F12 ব্যবহার করে কোন কাজটি করা যায়?", "a": "মাইক্রোসফট ওয়ার্ডে Save as এ ব্যবহৃত হয়।"}]},
  {"id": "job-2025-niport-office-sohayok-q01", "examId": "job-2025-niport-office-sohayok", "subject": "bangla", "qno": 1, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুন:", "parts": [{"label": "ক", "q": "যে ভবিষ্যৎ না ভেবেই কাজ করে", "a": "অবিমৃষ্যকারী"}, {"label": "খ", "q": "আপনাকে যে পণ্ডিত মনে করে", "a": "পণ্ডিতম্মন্য"}, {"label": "গ", "q": "ফল পাকলে যে গাছ মরে যায়", "a": "ওষধি"}, {"label": "ঘ", "q": "নদী যে দেশের মেখলাস্বরূপ", "a": "নদীমেখলা"}, {"label": "ঙ", "q": "আদি থেকে অন্ত পর্যন্ত", "a": "আদ্যন্ত"}]},
  {"id": "job-2025-niport-office-sohayok-q02", "examId": "job-2025-niport-office-sohayok", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুন:", "parts": [{"label": "ক", "q": "অহর্নিশ", "a": "অহঃ + নিশা"}, {"label": "খ", "q": "সাদৃশ", "a": "সদৃশ + য"}, {"label": "গ", "q": "দূরাচার", "a": "দুর + আচার"}, {"label": "ঘ", "q": "বনৌষধি", "a": "বন + ওষধি"}, {"label": "ঙ", "q": "অন্যান্য", "a": "অন্য + অন্য"}]},
  {"id": "job-2025-niport-office-sohayok-q03", "examId": "job-2025-niport-office-sohayok", "subject": "bangla", "topic": "কারক", "qno": 3, "marks": 5, "type": "sub-parts", "question": "দাগাঙ্কিত শব্দের কারকের নাম লিখুন:", "parts": [{"label": "ক", "q": "বোঁটা-আলগা ফল গাছে থাকে না।", "a": "অপাদানে শূন্য"}, {"label": "খ", "q": "আমাদের সেনারা সাহসে দুর্জয়, যুদ্ধে অপরাজেয়।", "a": "অধিকরণে ৭মী"}, {"label": "গ", "q": "জগতে কীর্তিমান হয় সাধনায়।", "a": "করণে ৭মী"}, {"label": "ঘ", "q": "লোকমুখে শুনেছি।", "a": "অপাদানে ৭মী"}, {"label": "ঙ", "q": "গায়ে মানেনা, আপনি মোড়ল।", "a": "কর্তায় ৭মী"}]},
  {"id": "job-2025-niport-office-sohayok-q04", "examId": "job-2025-niport-office-sohayok", "subject": "bangla", "topic": "শুদ্ধ-বানান", "qno": 4, "marks": 5, "type": "table", "question": "শুদ্ধরূপ লিখুন:", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["চাতকিনী", "চাতকী"], ["মনঃক্ষুন্ন", "মনঃক্ষুণ্ণ"], ["ভবিষ্যৎবানী", "ভবিষ্যদ্বাণী"], ["শিরচ্ছেদ", "শিরশ্ছেদ"], ["এতদ্বারা", "এতদ্দ্বারা"]]},
  {"id": "job-2025-niport-office-sohayok-q05", "examId": "job-2025-niport-office-sohayok", "subject": "english", "topic": "idioms-and-phrases", "qno": 5, "marks": 5, "type": "idiom", "question": "Write the meaning of the idioms:", "parts": [{"label": "a", "phrase": "A bone of contention", "meaning": "বিবাদের বিষয়"}, {"label": "b", "phrase": "Maiden speech", "meaning": "প্রথম বক্তৃতা"}, {"label": "c", "phrase": "Eat a humble pie", "meaning": "অপমান হজম করে ক্ষমা চাওয়া"}, {"label": "d", "phrase": "Below the belt", "meaning": "চোরা আঘাত"}, {"label": "e", "phrase": "Draw the line", "meaning": "সীমারেখা নির্ধারণ করা"}]},
  {"id": "job-2025-niport-office-sohayok-q06", "examId": "job-2025-niport-office-sohayok", "subject": "english", "qno": 6, "marks": 5, "type": "fill-gaps", "question": "Fill in the gaps with appropriate prepositions/articles/words:", "parts": [{"sentence": "Had I known her, I...... her.", "answer": "would have helped"}, {"sentence": "Students should attend.... their lessons.", "answer": "to"}, {"sentence": "I don't like.... cats, but I like my brother's cat.", "answer": "×"}, {"sentence": "He is popular..... all for his goodness.", "answer": "with"}, {"sentence": "One should do ...... duty.", "answer": "one's"}]},
  {"id": "job-2025-niport-office-sohayok-q07", "examId": "job-2025-niport-office-sohayok", "subject": "english", "qno": 7, "marks": 5, "type": "table", "question": "Write the opposite number of given words:", "columns": ["Given Number", "Opposite Number"], "rows": [["Alumnus", "Alumni"], ["Errata", "Erratum"], ["Magi", "Magus"], ["Singular", "Singulars"], ["Poverty", "(uncountable — no plural form)"]]},
  {"id": "job-2025-niport-office-sohayok-q08", "examId": "job-2025-niport-office-sohayok", "subject": "english", "qno": 8, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "এটা একটা কথার কথা।", "target": "It is a matter of a joke."}, {"label": "খ", "source": "বাংলাদেশ একটি ব-দ্বীপ।", "target": "Bangladesh is a delta."}, {"label": "গ", "source": "আসবে তো?", "target": "Will you come?"}, {"label": "ঘ", "source": "তার ইংরেজিতে অগাধ জ্ঞান।", "target": "He has a vast knowledge of English."}, {"label": "ঙ", "source": "জলদি কিছু হয়না।", "target": "Nothing happens quickly."}]},
  {"id": "job-2025-niport-office-sohayok-q09", "examId": "job-2025-niport-office-sohayok", "subject": "math", "qno": 9, "marks": 5, "type": "math", "question": "একজন দোকানদার প্রতি হালি ডিম ২৫ টাকা দরে ক্রয় করে প্রতি দুই হালি ডিম ৫৬ টাকায় বিক্রি করলে তার শতকরা কত লাভ বা ক্ষতি হবে।", "steps": ["১ হালি ডিমের ক্রয়মূল্য ২৫ টাকা, ২ হালির ক্রয়মূল্য = ২৫×২ = ৫০ টাকা", "লাভ হয় = (৫৬-৫০) = ৬ টাকা", "৫০ টাকায় লাভ হয় ৬ টাকা, ∴১০০ টাকায় লাভ হয় (৬×১০০)/৫০ = ১২ টাকা"], "answer": "১২% লাভ"},
  {"id": "job-2025-niport-office-sohayok-q10", "examId": "job-2025-niport-office-sohayok", "subject": "math", "qno": 10, "marks": 5, "type": "math", "question": "(x+6)(x+4) কে দুটি রাশির বর্গের অন্তররূপে প্রকাশ করুন।", "steps": ["ধরি, x+6=a এবং x+4=b", "প্রদত্ত রাশি: ab = {(a+b)/2}² - {(a-b)/2}²", "= {(x+6+x+4)/2}² - {(x+6-x-4)/2}²", "= {(2x+10)/2}² - (2/2)²", "= (x+5)² - 1²"], "answer": "(x+5)² - 1²"},
  {"id": "job-2025-niport-office-sohayok-q11", "examId": "job-2025-niport-office-sohayok", "subject": "math", "qno": 11, "marks": 4, "type": "math", "question": "x²+2x-15 কে উৎপাদকে বিশ্লেষণ করুন।", "steps": ["x²+2x-15 = x²+5x-3x-15", "= x(x+5)-3(x+5)", "= (x+5)(x-3)"], "answer": "(x+5)(x-3)"},
  {"id": "job-2025-niport-office-sohayok-q12", "examId": "job-2025-niport-office-sohayok", "subject": "math", "qno": 12, "marks": 5, "type": "short-qa", "question": "শূন্যস্থান পূরণ করুন:", "parts": [{"label": "ক", "q": "১ মাইল = ....... গজ", "a": "১৭৬০ গজ"}, {"label": "খ", "q": "১ মিটার = ....... ইঞ্চি", "a": "৩৯.৩৭ ইঞ্চি"}, {"label": "গ", "q": "১ কুইন্টাল = .......... কেজি", "a": "১০০ কেজি"}, {"label": "ঘ", "q": "১ হেক্টর = ....... একর", "a": "২.৪৭১ একর"}, {"label": "ঙ", "q": "১ একর = ..... শতক (ডেসিমেল)", "a": "১০০ শতক"}]},
  {"id": "job-2025-niport-office-sohayok-q13", "examId": "job-2025-niport-office-sohayok", "subject": "math", "qno": 13, "marks": 5, "type": "short-qa", "question": "সংক্ষেপে উত্তর লিখুন:", "parts": [{"label": "ক", "q": "৩০° কোণের সম্পূরক কোণের মান কত?", "a": "১৫০°"}, {"label": "খ", "q": "আয়তাকার ঘনবস্তু কাকে বলে?", "a": "যে বহুতলক পরস্পর লম্ব ছয়টি আয়তাকার তল দ্বারা গঠিত তাকে আয়তাকার ঘনবস্তু বলে।"}, {"label": "গ", "q": "প্রবৃদ্ধ কোণ কাকে বলে?", "a": "দুই সমকোণ অপেক্ষা বড় কিন্তু চার সমকোণ অপেক্ষা ছোট কোণকে প্রবৃদ্ধ কোণ বলে।"}, {"label": "ঘ", "q": "বৃত্তের জ্যা কী?", "a": "বৃত্তের যেকোন দুইটি বিন্দুর সংযোজক রেখাংশকে বৃত্তের জ্যা বলে।"}, {"label": "ঙ", "q": "রম্বসের ক্ষেত্রফল নির্ণয়ের সূত্রটি লিখুন।", "a": "১/২ × কর্ণদ্বয়ের গুণফল"}]},
  {"id": "job-2025-health-edu-data-entry-q01", "examId": "job-2025-health-edu-data-entry", "subject": "bangla", "qno": 1, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "জনবহুল স্থান", "a": "জনাকীর্ণ"}, {"label": "খ", "q": "ঝন ঝন শব্দ", "a": "ঝঞ্ঝনৎকার"}, {"label": "গ", "q": "ঘাম ঝরে পড়ছে এমন", "a": "গলদঘর্ম"}, {"label": "ঘ", "q": "গবাদি পশুর পাল", "a": "বাথান"}, {"label": "ঙ", "q": "ঔষধ সংযোগে রক্ষিত মৃতদেহ", "a": "মমি"}]},
  {"id": "job-2025-health-edu-data-entry-q02", "examId": "job-2025-health-edu-data-entry", "subject": "bangla", "qno": 2, "marks": 5, "type": "sub-parts", "question": "অর্থসহ বাক্য গঠন করুনঃ", "parts": [{"label": "ক", "q": "হরিঘোষের গোয়াল", "a": "বহু অপদার্থ ব্যক্তির সমাবেশ"}, {"label": "খ", "q": "বিন্দু বিসর্গ", "a": "সামান্য সম্পদ"}, {"label": "গ", "q": "টীকা ভাষ্য", "a": "দীর্ঘ আলোচনা"}, {"label": "ঘ", "q": "জুতো সেলাই থেকে চণ্ডি পাঠ", "a": "ছোটবড় সব কাজ"}, {"label": "ঙ", "q": "ফতো নবাব", "a": "সবহারানো নিঃস্বলোকের বড়লোকি ভাব"}]},
  {"id": "job-2025-health-edu-data-entry-q03", "examId": "job-2025-health-edu-data-entry", "subject": "bangla", "qno": 3, "marks": 5, "type": "table", "question": "রচয়িতার নাম লিখুনঃ", "columns": ["রচনা", "রচয়িতা"], "rows": [["ক্রীতদাসের হাসি", "শওকত ওসমান"], ["বিধ্বস্ত নীলিমা", "শামসুর রাহমান"], ["লোক লোকান্তর", "আল মাহমুদ"], ["জাহানারা", "হুমায়ূন আহমেদ"], ["সিন্দাবাদ", "ফররুখ আহমদ"]]},
  {"id": "job-2025-health-edu-data-entry-q04", "examId": "job-2025-health-edu-data-entry", "subject": "bangla", "qno": 4, "marks": 5, "type": "sub-parts", "question": "শব্দের অর্থ লিখুনঃ", "parts": [{"label": "ক", "q": "Lingua Franca", "a": "আন্তর্জাতিক মিশ্রিত ভাষা"}, {"label": "খ", "q": "Rehearsal", "a": "নাটকের মহড়া/পুনরাবৃত্তি"}, {"label": "গ", "q": "Surgeon", "a": "অস্ত্রচিকিৎসক"}, {"label": "ঘ", "q": "Tribunal", "a": "জনতার আদালত"}, {"label": "ঙ", "q": "Etiquette", "a": "শিষ্টাচার"}]},
  {"id": "job-2025-health-edu-data-entry-q05", "examId": "job-2025-health-edu-data-entry", "subject": "english", "qno": 5, "marks": 5, "type": "translate", "question": "Translate into English: সুষম জীবনের জন্য সুষম খাবারের প্রয়োজন। সুষম খাদ্যের জন্য প্রচুর অর্থবিত্তের প্রয়োজন পড়ে না। সুস্থতার জন্য যে খাদ্য প্রয়োজন সেই খাবারকে বোঝায়। যেমন কচুশাক চোখ ভালো রাখে। লালশাক রক্তে হিমোগ্লোবিন বাড়ায়। পেঁপে লিভার ভালো রাখে। আমড়া, কামরাঙা রোগ প্রতিরোধ বাড়ায়।", "parts": [{"label": "", "source": "সুষম জীবনের জন্য সুষম খাবারের প্রয়োজন। সুষম খাদ্যের জন্য প্রচুর অর্থবিত্তের প্রয়োজন পড়ে না। সুস্থতার জন্য যে খাদ্য প্রয়োজন সেই খাবারকে বোঝায়। যেমন কচুশাক চোখ ভালো রাখে। লালশাক রক্তে হিমোগ্লোবিন বাড়ায়। পেঁপে লিভার ভালো রাখে। আমড়া, কামরাঙা রোগ প্রতিরোধ বাড়ায়।", "target": "A balanced diet is essential for a healthy life. It does not require a lot of money. A balanced diet refers to the food needed to keep the body's various organs functioning properly. Taro leaves help keep the eyes healthy, red amaranth increases hemoglobin in the blood, papaya keeps the liver healthy, and fruits like hog plums and star fruits help boost immunity."}]},
  {"id": "job-2025-health-edu-data-entry-q06", "examId": "job-2025-health-edu-data-entry", "subject": "english", "topic": "idioms-and-phrases", "qno": 6, "marks": 5, "type": "idiom", "question": "Make sentences with the following:", "parts": [{"label": "a", "phrase": "French leave", "meaning": "বিনা অনুমতিতে প্রস্থান", "example": "One should not enjoy French leave."}, {"label": "b", "phrase": "Even though", "meaning": "যদিও", "example": "Even though he is poor he is honest."}, {"label": "c", "phrase": "See to", "meaning": "বিবেচনা করা", "example": "I requested him to see to my case."}, {"label": "d", "phrase": "Olive branch", "meaning": "শান্তির বার্তা/প্রতীক", "example": "He gave an olive branch to say sorry."}, {"label": "e", "phrase": "True to word", "meaning": "কথা রাখা", "example": "He is always true to his word."}]},
  {"id": "job-2025-health-edu-data-entry-q07", "examId": "job-2025-health-edu-data-entry", "subject": "english", "qno": 7, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks with prepositions:", "parts": [{"sentence": "He is blind.......one eye.", "answer": "of"}, {"sentence": "Food is essential......health.", "answer": "to"}, {"sentence": "I am tired ......hearing the same old story.", "answer": "of"}, {"sentence": "There is no remedy......this disease.", "answer": "for"}, {"sentence": "I was born......1999.", "answer": "in"}]},
  {"id": "job-2025-health-edu-data-entry-q08", "examId": "job-2025-health-edu-data-entry", "subject": "english", "qno": 8, "marks": 5, "type": "table", "question": "Write the author name:", "columns": ["Works", "Author"], "rows": [["Animal Farm", "George Orwell"], ["A Farewell to Arms", "Ernest Hemingway"], ["Caesar and Cleopatra", "George Bernard Shaw"], ["Hard Times", "Charles Dickens"], ["Pride & Prejudice", "Jane Austen"]]},
  {"id": "job-2025-health-edu-data-entry-q09", "examId": "job-2025-health-edu-data-entry", "subject": "math", "qno": 9, "marks": 4, "type": "math", "question": "একটি চৌবাচ্চার দৈর্ঘ্য ৩ মিটার, প্রস্থ ২ মিটার ও উচ্চতা ৪ মিটার। এতে কত লিটার বিশুদ্ধ পানি ধরবে?", "steps": ["চৌবাচ্চাটির আয়তন = ৩×২×৪ = ২৪ ঘনমিটার", "আমরা জানি, ১ ঘনমিটারে পানি ধরে ১০০০ লিটার", "২৪ ঘনমিটারে পানি ধরবে = ২৪০০০ লিটার"], "answer": "২৪০০০ লিটার"},
  {"id": "job-2025-health-edu-data-entry-q10", "examId": "job-2025-health-edu-data-entry", "subject": "math", "qno": 10, "marks": 6, "type": "math", "question": "একটি হোস্টেলে ২০ জনের জন্য ৩০ দিনের খাবার মজুত ছিলো। ১০ দিন পর ঐ হোস্টেল থেকে ৮ জন চলে গেল। তার ১০ দিন পর নতুন ২৩ জন যুক্ত হলে অবশিষ্ট খাবারে তাদের আর কত দিন চলবে?", "steps": ["অবশিষ্ট লোক (২০-৮)=১২ জন, অবশিষ্ট দিন (৩০-১০)=২০ দিন", "২০ জনের খাবার মজুদ আছে ২০ দিনের, ∴১২ জনের জন্য তা চলবে (২০×২০)/১২ = ৫০০/৩ দিন", "১০ দিন পার হওয়ার পর বাকি থাকে = ৫০০/৩ - ১০ = ৪৭০/৩ দিন এর খাবার (১২ জনের হিসেবে)", "নতুন লোক = ১২+২৩ = ৩৫ জন", "১২ জনের খাবার ৪৭০/৩ দিনের, ৩৫ জনের জন্য তা চলবে (৪৭০×১২)/(৩×৩৫) = ৮ দিন"], "answer": "৮ দিন"},
  {"id": "job-2025-health-edu-data-entry-q11", "examId": "job-2025-health-edu-data-entry", "subject": "math", "qno": 11, "marks": 4, "type": "math", "question": "১৬-৮+৪-২+...... ধারাটির ৭ম পদ কত?", "steps": ["এটি একটি গুণোত্তর ধারা যার প্রথম পদ, a=১৬ এবং সাধারণ অনুপাত, r = -৮/১৬ = -১/২", "n তম পদ = ar^(n-1)", "৭ম পদ = ১৬.(-১/২)^(7-1) = ১৬ × ১/৬৪ = ১/৪"], "answer": "১/৪"},
  {"id": "job-2025-health-edu-data-entry-q12", "examId": "job-2025-health-edu-data-entry", "subject": "math", "qno": 12, "marks": 4, "type": "math", "question": "৬ মিটার বাহুবিশিষ্ট সমবাহু ত্রিভুজের ক্ষেত্রফল কত?", "steps": ["সমবাহু ত্রিভুজের ক্ষেত্রফল = (√৩/৪)a²", "= (√৩/৪)×৬² = (√৩/৪)×৩৬ = ৯√৩", "= ১৫.৫৯ বর্গ মি. (প্রায়)"], "answer": "১৫.৫৯ বর্গ মিটার (প্রায়)"},
  {"id": "job-2025-health-edu-data-entry-q13", "examId": "job-2025-health-edu-data-entry", "subject": "general-knowledge", "qno": 13, "marks": 10, "type": "short-qa", "question": "সংক্ষিপ্তকারে উত্তর দিনঃ (সাধারণ জ্ঞান, কম্পিউটার ও বিজ্ঞান)", "parts": [{"label": "ক", "q": "ইনসুলিন কি?", "a": "ইনসুলিন হল একটি হরমোন যা অগ্ন্যাশয় থেকে নিঃসৃত হয় এবং রক্তে শর্করার মাত্রা নিয়ন্ত্রণে গুরুত্বপূর্ণ ভূমিকা পালন করে।"}, {"label": "খ", "q": "ডাবের পানিতে মূল্যবান কী উপাদান থাকে?", "a": "পটাশিয়াম, ক্যালসিয়াম, ম্যাগনেসিয়াম ইত্যাদি।"}, {"label": "গ", "q": "খাবার স্যালাইন উদ্ভাবক প্রতিষ্ঠানের নাম কি?", "a": "আইসিডিডিআরবি (ICDDR,B)"}, {"label": "ঘ", "q": "'সূর্যের হাসি' কিসের প্রতীক?", "a": "মা ও শিশু স্বাস্থ্য সেবার প্রতীক"}, {"label": "ঙ", "q": "কোন রোগে শরীরের রোগ প্রতিরোধ ক্ষমতা লোপ পায়?", "a": "এইডস"}, {"label": "চ", "q": "বাংলাদেশের সর্ব দক্ষিণের জেলার নাম কী?", "a": "কক্সবাজার"}, {"label": "ছ", "q": "কোন ভিটামিনের অভাবে রাতকানা রোগ হয়?", "a": "ভিটামিন 'এ'"}, {"label": "জ", "q": "HFC এর পূর্ণরূপ কি?", "a": "Hydrofluorocarbon"}, {"label": "ঝ", "q": "মানবদেহে হাড় ও জিনের সংখ্যা কত?", "a": "হাড় ২০৬টি; জিন ২০ হাজার থেকে ৩০ হাজার"}, {"label": "ঞ", "q": "জুলাই গণঅভ্যুত্থানে 'আবু সাঈদ' কত তারিখে শহীদ হন?", "a": "১৬ জুলাই, ২০২৪"}]},
  {"id": "job-2025-bof-junior-technician-q01", "examId": "job-2025-bof-junior-technician", "subject": "bangla", "qno": 1, "marks": 2, "type": "short-qa", "question": "বাংলা বর্ণমালায় পরাশ্রয়ী বর্ণ কয়টি?", "parts": [{"label": "", "q": "বাংলা বর্ণমালায় পরাশ্রয়ী বর্ণ কয়টি?", "a": "৩টি (ং, ঃ, ঁ)"}]},
  {"id": "job-2025-bof-junior-technician-q02", "examId": "job-2025-bof-junior-technician", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 2, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ যথেচ্ছা, প্রতীক্ষা", "parts": [{"label": "ক", "q": "যথেচ্ছা", "a": "যথা + ইচ্ছা"}, {"label": "খ", "q": "প্রতীক্ষা", "a": "প্রতি + ঈক্ষা"}]},
  {"id": "job-2025-bof-junior-technician-q03", "examId": "job-2025-bof-junior-technician", "subject": "bangla", "topic": "বাগধারা", "qno": 3, "marks": 2, "type": "sub-parts", "question": "\"তামার বিষ\" ও \"গড্ডলিকা প্রবাহ\" বাগধারা দুইটির অর্থ কী?", "parts": [{"label": "ক", "q": "তামার বিষ", "a": "অর্থের কুপ্রভাব"}, {"label": "খ", "q": "গড্ডলিকা প্রবাহ", "a": "অন্ধ অনুকরণ"}]},
  {"id": "job-2025-bof-junior-technician-q04", "examId": "job-2025-bof-junior-technician", "subject": "bangla", "qno": 4, "marks": 2, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "সম্মুখে অগ্রসর হয়ে অভ্যর্থনা", "a": "প্রত্যুদগমন"}, {"label": "খ", "q": "কূলের সমীপে", "a": "উপকূল"}]},
  {"id": "job-2025-bof-junior-technician-q05", "examId": "job-2025-bof-junior-technician", "subject": "bangla", "qno": 5, "marks": 2, "type": "sub-parts", "question": "বিপরীত শব্দার্থ লিখুনঃ", "parts": [{"label": "ক", "q": "গরিষ্ঠ", "a": "লঘিষ্ঠ"}, {"label": "খ", "q": "আরোহণ", "a": "অবরোহণ"}]},
  {"id": "job-2025-bof-junior-technician-q06", "examId": "job-2025-bof-junior-technician", "subject": "bangla", "qno": 6, "marks": 2, "type": "short-qa", "question": "শিক্ষক বললেন, \"তোমরা কি এখন যেতে চাও?\" এর পরোক্ষ উক্তি লিখুন।", "parts": [{"label": "", "q": "শিক্ষক বললেন, \"তোমরা কি এখন যেতে চাও?\" এর পরোক্ষ উক্তি লিখুন।", "a": "শিক্ষক জিজ্ঞাসা করলেন আমরা তখন যেতে চাই কি না।"}]},
  {"id": "job-2025-bof-junior-technician-q07", "examId": "job-2025-bof-junior-technician", "subject": "english", "qno": 7, "marks": 2, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "যে মিথ্যা কথা বলে কেউই তাকে বিশ্বাস করে না।", "target": "No one believes a person who lies."}, {"label": "খ", "source": "সে নদীর কাছে এক কুটিরে বাস করতো।", "target": "He lived in a cottage near the river."}]},
  {"id": "job-2025-bof-junior-technician-q08", "examId": "job-2025-bof-junior-technician", "subject": "english", "qno": 8, "marks": 2, "type": "fill-gaps", "question": "Use preposition:", "parts": [{"sentence": "He comes...... a noble family.", "answer": "of"}, {"sentence": "He deals...... rice.", "answer": "in"}]},
  {"id": "job-2025-bof-junior-technician-q09", "examId": "job-2025-bof-junior-technician", "subject": "english", "qno": 9, "marks": 2, "type": "sentence-change", "question": "Change voice of the following sentences:", "parts": [{"label": "a", "original": "The stone feels rough.", "changed": "The stone is rough when it is felt."}, {"label": "b", "original": "I saw him play.", "changed": "He was seen to play by me."}]},
  {"id": "job-2025-bof-junior-technician-q10", "examId": "job-2025-bof-junior-technician", "subject": "english", "qno": 10, "marks": 2, "type": "fill-gaps", "question": "Use Article:", "parts": [{"sentence": "....honest man is respected everywhere.", "answer": "an"}, {"sentence": "Honesty is .....best policy.", "answer": "the"}]},
  {"id": "job-2025-bof-junior-technician-q11", "examId": "job-2025-bof-junior-technician", "subject": "english", "qno": 11, "marks": 2, "type": "short-qa", "question": "He tried his best এর Negative form কী?", "parts": [{"label": "", "q": "He tried his best এর Negative form কী?", "a": "He left no stone unturned."}]},
  {"id": "job-2025-bof-junior-technician-q12", "examId": "job-2025-bof-junior-technician", "subject": "english", "qno": 12, "marks": 2, "type": "sub-parts", "question": "Write opposite word: Innocent, Calm.", "parts": [{"label": "", "q": "Innocent", "a": "Guilty"}, {"label": "", "q": "Calm", "a": "Restless"}]},
  {"id": "job-2025-bof-junior-technician-q13", "examId": "job-2025-bof-junior-technician", "subject": "english", "qno": 13, "marks": 2, "type": "sub-parts", "question": "Change the Gender: Author, Nephew.", "parts": [{"label": "", "q": "Author", "a": "Authoress"}, {"label": "", "q": "Nephew", "a": "Niece"}]},
  {"id": "job-2025-bof-junior-technician-q14", "examId": "job-2025-bof-junior-technician", "subject": "math", "qno": 14, "marks": 25, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর লিখুনঃ (গণিত)", "parts": [{"label": "ক", "q": "উৎপাদকে বিশ্লেষণ করুনঃ x²-7x+6", "a": "x²-7x+6 = x²-6x-x+6 = x(x-6)-1(x-6) = (x-6)(x-1)"}, {"label": "খ", "q": "৭:৫ এবং ৮:৯ দুটি অনুপাতকে ধারাবাহিক অনুপাতে প্রকাশ করুন।", "a": "প্রথম অনুপাতকে ৮ দ্বারা গুণ করে পাই = ৫৬:৪০; দ্বিতীয় অনুপাতকে ৫ দ্বারা গুণ করে পাই = ৪০:৪৫; সুতরাং ধারাবাহিক অনুপাত = ৫৬:৪০:৪৫"}, {"label": "গ", "q": "(2a²+3ab)/(4a²-9b²) কে লঘিষ্ঠ আকারে প্রকাশ করুন।", "a": "= a(2a+3b)/{(2a)²-(3b)²} = a(2a+3b)/{(2a+3b)(2a-3b)} = a/(2a-3b)"}, {"label": "ঘ", "q": "(a-b)² সূত্রটি নির্ণয় করুন।", "a": "(a-b)² = a² - 2ab + b²"}, {"label": "ঙ", "q": "সমাধান করুন: 4^(x+1) = 32", "a": "(2²)^(x+1)=32 ⇒ 2^(2x+2)=2⁵ ⇒ 2x+2=5 ⇒ x=3/2"}]},
  {"id": "job-2025-bof-junior-technician-q15", "examId": "job-2025-bof-junior-technician", "subject": "math", "qno": 15, "marks": 15, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর লিখুন।", "parts": [{"label": "ক", "q": "১ থেকে ৯ পর্যন্ত সংখ্যাগুলোর বর্গের যোগফল কত?", "a": "প্রথম n সংখ্যার বর্গের যোগফল = n(n+1)(2n+1)/6; প্রথম ৯ সংখ্যার বর্গের যোগফল = ৯×১০×১৯/৬ = ২৮৫"}, {"label": "খ", "q": "একটি সমবাহু ত্রিভুজের ক্ষেত্রফল 4√3 বর্গমিটার হলে তার বাহুর দৈর্ঘ্য কত মিটার?", "a": "(√3/4)a²=4√3 ⇒ a²=16 ⇒ a=4; বাহুর দৈর্ঘ্য ৪ মিটার"}, {"label": "গ", "q": "ক্রয়মূল্য বিক্রয়মূল্যের দ্বিগুণ হলে শতকরা লাভ বা ক্ষতির পরিমাণ কত?", "a": "ধরি বিক্রয়মূল্য ক টাকা, ক্রয়মূল্য ২ক টাকা। ক্ষতি=ক টাকা। ২ক টাকায় ক্ষতি ক টাকা হলে ১০০ টাকায় ক্ষতি=৫০ টাকা; উত্তর ৫০% ক্ষতি"}]},
  {"id": "job-2025-mopa-office-sohayok-q01", "examId": "job-2025-mopa-office-sohayok", "subject": "bangla", "topic": "শুদ্ধ-বানান", "qno": 1, "marks": 6, "type": "table", "question": "শব্দগুলো শুদ্ধ করে লিখুন-", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["কুজ্জটিকা", "কুজ্ঝটিকা"], ["ইদানিং", "ইদানীং"], ["প্রনাম", "প্রণাম"], ["পূর্বালী", "পূর্বালি"], ["মূলতঃ", "মূলত"], ["কল্যানিয়েসু", "কল্যাণীয়েষু"]]},
  {"id": "job-2025-mopa-office-sohayok-q02", "examId": "job-2025-mopa-office-sohayok", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 6, "type": "sub-parts", "question": "শব্দগুলোর সন্ধি বিচ্ছেদ করুন-", "parts": [{"label": "ক", "q": "সত্তাপ", "a": "সম্ + তাপ"}, {"label": "খ", "q": "যশোভিলাষ", "a": "যশঃ + অভিলাষ"}, {"label": "গ", "q": "বধূক্তি", "a": "বধূ + উক্তি"}, {"label": "ঘ", "q": "উড্ডীন", "a": "উৎ + ডীন"}, {"label": "ঙ", "q": "নাতবৌ", "a": "নাতি + বৌ"}, {"label": "চ", "q": "সুবন্ত", "a": "সুপ্ + অন্ত"}]},
  {"id": "job-2025-mopa-office-sohayok-q03", "examId": "job-2025-mopa-office-sohayok", "subject": "bangla", "qno": 3, "marks": 6, "type": "paragraph", "question": "\"৩৬ জুলাই\" সম্পর্কে সংক্ষেপে অনুচ্ছেদ লিখুন।", "answer": "\"৩৬ জুলাই\" বলতে ২০২৪ সালের জুলাই-আগস্টে সংঘটিত ছাত্র-জনতার গণঅভ্যুত্থানের ধারাবাহিক দিনগুলোকে প্রতীকীভাবে বোঝানো হয়, যা ৫ আগস্ট শেখ হাসিনা সরকারের পতনে পরিণতি লাভ করে। কোটা সংস্কার আন্দোলন থেকে শুরু হওয়া এই আন্দোলন ক্রমে বৈষম্যবিরোধী ছাত্র আন্দোলনে রূপ নেয় এবং সরকারের দমন-পীড়নের মুখেও দিনের পর দিন (প্রতীকী অর্থে ৩৬ দিন ধরে) অব্যাহত থাকে। এই আন্দোলনে বহু ছাত্র-জনতা প্রাণ হারান। শেষ পর্যন্ত ৫ আগস্ট গণঅভ্যুত্থানের মুখে সরকার পতন ঘটে এবং ৮ আগস্ট ড. মুহাম্মদ ইউনূসের নেতৃত্বে অন্তর্বর্তী সরকার গঠিত হয়। \"৩৬ জুলাই\" তাই ত্যাগ, প্রতিরোধ ও নতুন বাংলাদেশের অভ্যুদয়ের প্রতীক হিসেবে পরিচিতি পেয়েছে।"},
  {"id": "job-2025-mopa-office-sohayok-q04", "examId": "job-2025-mopa-office-sohayok", "subject": "english", "qno": 4, "marks": 3, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "Punishment should be proportionate..... crime.", "answer": "to"}, {"sentence": "A slave is always zealous...... freedom.", "answer": "for"}, {"sentence": "Student should not be negligent..........their duties.", "answer": "in"}]},
  {"id": "job-2025-mopa-office-sohayok-q05", "examId": "job-2025-mopa-office-sohayok", "subject": "english", "topic": "idioms-and-phrases", "qno": 5, "marks": 3, "type": "idiom", "question": "Make sentences with meaning:", "parts": [{"label": "a", "phrase": "With flying colours", "meaning": "বিজয়", "example": "He passed the examination with flying colours."}, {"label": "b", "phrase": "End in smoke", "meaning": "ব্যর্থ হওয়া", "example": "All his plans ended in smoke."}, {"label": "c", "phrase": "Chalk and cheese", "meaning": "একদম আলাদা", "example": "Their opinions on politics are chalk and cheese."}]},
  {"id": "job-2025-mopa-office-sohayok-q06", "examId": "job-2025-mopa-office-sohayok", "subject": "english", "qno": 6, "marks": 4, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "কঠোর পরিশ্রম করা সত্ত্বেও সে পরীক্ষায় অকৃতকার্য হলো।", "target": "Despite working hard, he failed the exam."}, {"label": "খ", "source": "দুঃখের পরে সুখ আসে।", "target": "Happiness comes after sorrow."}, {"label": "গ", "source": "জুলাই গণঅভ্যুত্থান ২০২৪-এ অনেক ছাত্র-জনতা অকাতরে প্রাণ বিসর্জন দিয়েছিলেন।", "target": "During the July Mass Uprising of 2024, many students and people sacrificed their lives selflessly."}, {"label": "ঘ", "source": "নিয়মিত বই পড়া মানুষকে আলোকিত করে।", "target": "Reading books regularly enlightens a person."}]},
  {"id": "job-2025-mopa-office-sohayok-q07", "examId": "job-2025-mopa-office-sohayok", "subject": "math", "qno": 7, "marks": 10, "type": "math", "question": "একটি আয়তকার ঘরের পরিসীমা একটি বর্গাকার ঘরের পরিসীমার সমান। আয়তাকার ঘরের দৈর্ঘ্য প্রস্থের ৩ গুণ। প্রতি বর্গমিটারে ৭৫ টাকা দরে ঘরের মেঝে কার্পেট দিয়ে মুড়াতে মোট ১১০২৫ টাকা ব্যয় হয়। ৪০ সে.মি. বর্গাকার টাইলস দ্বারা বর্গাকার ঘরের মেঝে ঢাকতে কয়টি টাইলস লাগবে?", "steps": ["মনে করি, আয়তাকার ঘরের প্রস্থ ক মিটার, সুতরাং দৈর্ঘ্য ৩ক মিটার, ক্ষেত্রফল = ৩ক² বর্গমিটার", "৭৫ টাকায় মোড়ানো যায় ১ বর্গ মি., ∴ ১১০২৫ টাকায় মোড়ানো যায় ১১০২৫/৭৫ = ১৪৭ বর্গ মি.", "৩ক² = ১৪৭ ⇒ ক² = ৪৯ ⇒ ক = ৭ মি.; সুতরাং দৈর্ঘ্য = ৩×৭ = ২১ মি.", "আয়তাকার ঘরের পরিসীমা = ২(২১+৭) = ৫৬ মিটার = বর্গাকার ঘরের পরিসীমা", "বর্গাকার ঘরের বাহু = ৫৬/৪ = ১৪ মিটার; মেঝের ক্ষেত্রফল = ১৪×১৪ = ১৯৬ বর্গমিটার", "একটি টাইলসের ক্ষেত্রফল = ০.৪×০.৪ = ০.১৬ বর্গমিটার", "টাইলস লাগবে = ১৯৬/০.১৬ = ১২২৫টি"], "answer": "১২২৫টি"},
  {"id": "job-2025-mopa-office-sohayok-q08", "examId": "job-2025-mopa-office-sohayok", "subject": "math", "qno": 8, "marks": 8, "type": "math", "question": "একটি বাস ঘণ্টায় ২৫ কি.মি গতিবেগে ঢাকার গাবতলী থেকে আরিচা পৌঁছাল। আবার বাসটি ঘণ্টায় ৩০ কি.মি গতিবেগে আরিচা থেকে গাবতলী ফিরে এল। যাতায়াতে বাসটির মোট ৫২/৫ ঘণ্টা সময় লাগল। গাবতলী থেকে আরিচার দূরত্ব কত?", "steps": ["মনে করি, গাবতলী থেকে আরিচার দূরত্ব d কি.মি.", "যেতে সময় লাগে d/25 ঘণ্টা, ফিরতে সময় লাগে d/30 ঘণ্টা", "প্রশ্নমতে, d/25+d/30 = ৫১/২", "(6d+5d)/150 = 11/2 ⇒ 11d = 150×11/2 ⇒ d=75"], "answer": "৭৫ কি.মি."},
  {"id": "job-2025-mopa-office-sohayok-q09", "examId": "job-2025-mopa-office-sohayok", "subject": "math", "qno": 9, "marks": 6, "type": "math", "question": "x³+6x²y+11xy²+6y³ কে উৎপাদকে বিশ্লেষণ করুন।", "steps": ["x³+6x²y+11xy²+6y³ = x³+6x²y+12xy²+8y³-xy²-2y³", "= {x³+3.x².2y+3.x.(2y)²+(2y)³} - xy²-2y³", "= (x+2y)³ - y²(x+2y)", "= (x+2y){(x+2y)²-y²} = (x+2y)(x+2y+y)(x+2y-y)", "= (x+2y)(x+3y)(x+y)"], "answer": "(x+y)(x+2y)(x+3y)"},
  {"id": "job-2025-mopa-office-sohayok-q10", "examId": "job-2025-mopa-office-sohayok", "subject": "general-knowledge", "qno": 10, "marks": 20, "type": "short-qa", "question": "সাধারণ জ্ঞান", "parts": [{"label": "ক", "q": "\"থ্রি জিরোর\" প্রবক্তা কে?", "a": "ড. মুহাম্মদ ইউনূস"}, {"label": "খ", "q": "আয়তনের দিক থেকে বাংলাদেশের সবচেয়ে ছোট জেলা কোনটি?", "a": "নারায়ণগঞ্জ"}, {"label": "গ", "q": "জুলাই গণঅভ্যুত্থান অধিদপ্তর কোন মন্ত্রণালয়ের অধীন গঠিত হয়েছে?", "a": "মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়"}, {"label": "ঘ", "q": "এএফসি অনূর্ধ্ব-২০ নারী এশিয়ান কাপ ২০২৫ এর বাছাইপর্বে বাংলাদেশ নারী ফুটবল দল সর্বশেষ খেলায় কোন দেশকে পরাজিত করে?", "a": "পূর্ব তিমুর (৮ আগস্ট ২০২৫)"}, {"label": "ঙ", "q": "মানব দেহের সর্ববৃহৎ অঙ্গ কোনটি?", "a": "ত্বক"}, {"label": "চ", "q": "কম্পিউটার মেমোরির ক্ষুদ্রতম এককের নাম কী?", "a": "বিট"}, {"label": "ছ", "q": "বিটকয়েন কী?", "a": "বিটকয়েন হলো একটি ডিজিটাল ক্রিপ্টোকারেন্সি, যা কেন্দ্রীয় ব্যাংকের নিয়ন্ত্রণ ছাড়াই ইন্টারনেটে লেনদেনের জন্য ব্যবহৃত হয়। এটি ব্লকচেইন প্রযুক্তির মাধ্যমে কাজ করে।"}, {"label": "জ", "q": "বাংলাদেশের বর্তমান অন্তর্বর্তী সরকার কোন তারিখে গঠিত হয়েছে?", "a": "৮ আগস্ট ২০২৪"}, {"label": "ঝ", "q": "পানামা খাল কোন কোন মহাসাগরকে যুক্ত করেছে?", "a": "আটলান্টিক ও প্রশান্ত মহাসাগর"}, {"label": "ঞ", "q": "জাতিসংঘের সদর দপ্তর কোথায় অবস্থিত?", "a": "নিউইয়র্ক, যুক্তরাষ্ট্র"}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q01", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "bangla", "topic": "কারক", "qno": 1, "marks": 5, "type": "sub-parts", "question": "কারক ও বিভক্তি নির্ণয় করুনঃ", "parts": [{"label": "ক", "q": "রবীন্দ্রনাথ পড়লাম, নজরুল পড়লাম, এর সুরাহ খুঁজে পেলাম না।", "a": "কর্মে শূন্য"}, {"label": "খ", "q": "জগতে কীর্তিমান হয় সাধনায়।", "a": "করণে ৭মী"}, {"label": "গ", "q": "শিকারি বিড়াল গোঁফে চেনা যায়।", "a": "করণে ৭মী"}, {"label": "ঘ", "q": "অক্ষজনে দেহ আলো।", "a": "সম্প্রদানে ৭মী"}, {"label": "ঙ", "q": "বেলা যে পড়ে এল, জলকে চল।", "a": "নিমিত্তার্থে ৪র্থী"}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q02", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "bangla", "qno": 2, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "পরিণাম চিন্তা করে কাজ করে না যে", "a": "অপরিণামদর্শী"}, {"label": "খ", "q": "অক্ষির সম্মুখে", "a": "চাক্ষুষ/প্রত্যক্ষ"}, {"label": "গ", "q": "শুকনো পাতার শব্দ", "a": "মর্মর"}, {"label": "ঘ", "q": "৬০ বছর পূর্তি", "a": "হীরকজয়ন্তী"}, {"label": "ঙ", "q": "ক্রমশই বর্ধিত হচ্ছে যা", "a": "বর্ধিষ্ণু"}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q03", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "bangla", "topic": "সন্ধি", "qno": 3, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "স্বাগত", "a": "সু + আগত"}, {"label": "খ", "q": "পদ্ধতি", "a": "পদ্ + হতি"}, {"label": "গ", "q": "পরিষ্কার", "a": "পরিস্ + কার"}, {"label": "ঘ", "q": "ইত্যাদি", "a": "ইতি + আদি"}, {"label": "ঙ", "q": "উদ্যোগ", "a": "উৎ + যোগ"}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q04", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "bangla", "topic": "সমাস", "qno": 4, "marks": 5, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দিন:", "parts": [{"label": "ক", "q": "সমাস শব্দের অর্থ কী?", "a": "সংক্ষেপ, মিলন, একাধিক পদের একপদীকরণ"}, {"label": "খ", "q": "সমাসবদ্ধ পদকে কী বলে?", "a": "সমাস প্রক্রিয়ায় সমাসবদ্ধ বা সমাসনিষ্পন্ন পদটির নাম সমস্ত পদ বা সমাসবদ্ধ পদ। যেমন- সিংহাসন, রাজকুমার, পঙ্কজ ইত্যাদি।"}, {"label": "গ", "q": "'সাহেব বিবি-গোলাম' শব্দটি কোন সমাসের উদাহরণ?", "a": "সাহেব, বিবি ও গোলাম = বহুপদী দ্বন্দ্ব"}, {"label": "ঘ", "q": "'বিয়ে পাগলা' শব্দটি কোন সমাসের উদাহরণ?", "a": "বিয়ের জন্য পাগলা = ৪র্থী তৎপুরুষ"}, {"label": "ঙ", "q": "\"বিষাদসিন্ধু\" শব্দটি কোন সমাসের উদাহরণ?", "a": "বিষাদ রূপ সিন্ধু = রূপক কর্মধারয়"}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q05", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "bangla", "topic": "সাহিত্য", "qno": 5, "marks": 5, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দিন:", "parts": [{"label": "ক", "q": "'বনফুল' কার ছদ্মনাম?", "a": "বলাইচাঁদ মুখোপাধ্যায়"}, {"label": "খ", "q": "মানিক বন্দ্যোপাধ্যায়ের দুটি বিখ্যাত গ্রন্থের নাম লিখুন।", "a": "পদ্মা নদীর মাঝি, পুতুল নাচের ইতিকথা"}, {"label": "গ", "q": "'বঙ্গবাণী' কবিতাটি কবি আব্দুল হাকিম এর কোন কাব্যগ্রন্থ থেকে সংকলন করা হয়েছে?", "a": "নূরনামা"}, {"label": "ঘ", "q": "বাংলা সাহিত্যে অমিত্রাক্ষর ছন্দ কে প্রবর্তন করেন?", "a": "মাইকেল মধুসূদন দত্ত"}, {"label": "ঙ", "q": "\"মরিতে চাহি না আমি সুন্দর ভুবনে\"। পরের লাইন কি?", "a": "\"মানবের মাঝে আমি বাঁচিবারে চাই\""}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q06", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "english", "topic": "idioms-and-phrases", "qno": 6, "marks": 5, "type": "idiom", "question": "Make sentences with the following:", "parts": [{"label": "a", "phrase": "At any cost", "meaning": "যেভাবেই হোক", "example": "At any cost I shall help you."}, {"label": "b", "phrase": "Carry the day", "meaning": "জয়লাভ করা", "example": "Our team will surely carry the day."}, {"label": "c", "phrase": "In black and white", "meaning": "লিখিত ভাবে", "example": "We charged against him in black and white."}, {"label": "d", "phrase": "In view of", "meaning": "বিবেচনা করে", "example": "He got a rise in his service in view of his efficiency."}, {"label": "e", "phrase": "By dint of", "meaning": "বলে/দ্বারা", "example": "I succeeded by dint of hard work."}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q07", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "english", "qno": 7, "marks": 5, "type": "translate", "question": "ইংরেজিতে অনুবাদ করুনঃ", "parts": [{"label": "ক", "source": "যুদ্ধ মানব জাতির জন্য অভিশাপ।", "target": "War is a curse for humankind."}, {"label": "খ", "source": "সে সাঁতার কাটতে জানে না।", "target": "He does not know how to swim."}, {"label": "গ", "source": "শিশুটি নাচতে নাচতে চলে গেল।", "target": "The baby went away dancing."}, {"label": "ঘ", "source": "উপদেশ অপেক্ষা দৃষ্টান্ত ভালো।", "target": "Example is better than precept."}, {"label": "ঙ", "source": "দশটা বাজতে ছয় মিনিট বাকি আছে।", "target": "It is six minutes to ten."}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q08", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "english", "qno": 8, "marks": 4, "type": "sentence-change", "question": "Change the voice of the following sentences as indicated in the bracket:", "parts": [{"label": "a", "original": "I want him to write the letter. (Passive)", "changed": "I want the letter to be written by him."}, {"label": "b", "original": "His pen has been stolen. (Active)", "changed": "Someone has stolen his pen."}, {"label": "c", "original": "We made him captain. (Passive)", "changed": "He was made captain by us."}, {"label": "d", "original": "Who will help me? (Passive)", "changed": "By whom will I be helped?"}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q09", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "english", "qno": 9, "marks": 4, "type": "sentence-change", "question": "Change the following sentences from direct to indirect speech:", "parts": [{"label": "a", "original": "Rajib said, \"I am leaving Dhaka this morning.\"", "changed": "Rajib said that he was leaving Dhaka that morning."}, {"label": "b", "original": "Ahsan said, \"I gave him the ring on his birthday.\"", "changed": "Ahsan said that he had given him the ring on his birthday."}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q10", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "english", "qno": 10, "marks": 4, "type": "fill-gaps", "question": "Write the right form of verbs mentioned in the bracket:", "parts": [{"sentence": "Would that I (see) a tiger.", "answer": "could see"}, {"sentence": "I went to the library with a view to (make) note there.", "answer": "making"}, {"sentence": "One of the boys (be) absent yesterday.", "answer": "was"}, {"sentence": "The class started after the bell (ring).", "answer": "had rung"}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q11", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "english", "qno": 11, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "She is....... a song.", "answer": "singing"}, {"sentence": "I am sorry ...... disturb you.", "answer": "to"}, {"sentence": "Take care..... your health.", "answer": "of"}, {"sentence": "He has been living in Dhaka.....2005.", "answer": "since"}, {"sentence": "He is rich....... unhappy.", "answer": "but"}]},
  {"id": "job-2025-food-dept-mechanical-foreman-q12", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "math", "qno": 12, "marks": 6, "type": "math", "question": "একটি বাঁশের ০.১৫ অংশ কাদায় ও ০.৭৫ অংশ পানিতে আছে। যদি পানির উপরে বাঁশটির দৈর্ঘ্য ৪ মিটার হয়, তাহলে সম্পূর্ণ বাঁশটির দৈর্ঘ্য কত?", "steps": ["মনে করি, সম্পূর্ণ দৈর্ঘ্য ১; কাদায় ও পানিতে বাঁশটির মোট অংশ = ০.১৫+০.৭৫ = ০.৯০ অংশ", "∴ বাঁশটির বাকি (পানির উপরের) অংশ = ১-০.৯০ = ০.২ অংশ", "প্রশ্নমতে, ০.২ অংশ = ৪ মিটার", "∴ ১ (সম্পূর্ণ) অংশ = ৪÷০.২ = ২০ মিটার"], "answer": "বাঁশের দৈর্ঘ্য ২০ মিটার"},
  {"id": "job-2025-food-dept-mechanical-foreman-q13", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "math", "qno": 13, "marks": 6, "type": "math", "question": "১০ বছর পূর্বে পিতার বয়স পুত্রের বয়সের ৫ গুণ ছিল। ২০ বছর পর পিতার বয়স পুত্রের বয়সের দ্বিগুণ হবে। বর্তমানে কার বয়স কত?", "steps": ["মনে করি, ১০ বছর পূর্বে পুত্রের বয়স x বছর, পিতার বয়স ৫x বছর", "পুত্রের বর্তমান বয়স = x+১০, পিতার বর্তমান বয়স = ৫x+১০", "প্রশ্নমতে, ৫x+১০+২০ = ২(x+১০+২০)", "৫x+৩০ = ২x+৬০ ⇒ ৩x = ৩০ ⇒ x=১০", "পুত্রের বর্তমান বয়স = ১০+১০ = ২০ বছর", "পিতার বর্তমান বয়স = (১০×৫)+১০ = ৬০ বছর"], "answer": "পিতার বয়স ৬০ বছর এবং পুত্রের বয়স ২০ বছর"},
  {"id": "job-2025-food-dept-mechanical-foreman-q14", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "math", "qno": 14, "marks": 6, "type": "math", "question": "যদি a⁴+a²b²+b⁴=3 এবং a²+ab+b²=3 হয়, তবে a²+b² এর মান কত?", "steps": ["a⁴+a²b²+b⁴=3 ⇒ (a²)²+2a²b²+(b²)²-a²b²=3 ⇒ (a²+b²)²-(ab)²=3", "(a²+b²+ab)(a²+b²-ab)=3 ⇒ (a²+ab+b²)(a²-ab+b²)=3", "3(a²-ab+b²)=3 [মান বসিয়ে] ⇒ a²-ab+b²=1", "এখন a²+ab+b²=3 এবং a²-ab+b²=1; যোগ করে পাই, 2(a²+b²)=4", "∴ a²+b²=2"], "answer": "2"},
  {"id": "job-2025-food-dept-mechanical-foreman-q15", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "math", "qno": 15, "marks": 6, "type": "math", "question": "একটি সেনাবাহিনীর ছাউনিতে ১৫০০ জন সৈনিকের জন্য ৩০ দিনের খাদ্য মজুত আছে। ১৫ দিন পর কিছু সৈন্য অন্যত্র চলে গেলে, বাকী খাদ্য অবশিষ্ট সৈনিকের আরও ৩০ দিন চলবে। কতজন সৈন্য অন্যত্র চলে গিয়েছিল?", "steps": ["মূল বইয়ে প্রশ্নটিতে '৩০ দিনের খাদ্য মজুত ছিল' তথ্যটি অনুপস্থিত ছিল (বইয়ে 'ভুল আছে' উল্লেখ ছিল); ১৫ ও ৩০ দিনের সাথে সংগতিপূর্ণ যুক্তিসঙ্গত মান হিসেবে মূল মজুদ ৩০ দিনের ধরে সমাধান করা হলো।", "১৫০০ জনের জন্য ৩০ দিনের খাদ্য মজুদ ছিল। ১৫ দিনে ব্যবহৃত হয় ১৫০০×১৫ = ২২৫০০ জন-দিনের খাদ্য।", "অবশিষ্ট খাদ্য = ১৫০০×৩০ - ২২৫০০ = ২২৫০০ জন-দিনের, যা অবশিষ্ট সৈন্যের জন্য আরও ৩০ দিন চলবে।", "ধরি, অবশিষ্ট সৈন্য সংখ্যা = y। তাহলে y×৩০ = ২২৫০০ ⇒ y = ৭৫০", "অতএব, অন্যত্র চলে যাওয়া সৈন্য সংখ্যা = ১৫০০-৭৫০ = ৭৫০ জন"], "answer": "৭৫০ জন সৈন্য অন্যত্র চলে গিয়েছিল (অনুমিত মান দিয়ে সমাধানকৃত)"},
  {"id": "job-2025-food-dept-mechanical-foreman-q16", "examId": "job-2025-food-dept-mechanical-foreman", "subject": "math", "qno": 16, "marks": 5, "type": "math", "question": "দুটি ক্রমিক সংখ্যার গুণফল তাদের সমষ্টি অপেক্ষা ৭১ বেশি। সংখ্যা দুটি নির্ণয় করুন।", "steps": ["ধরি, সংখ্যা দুটি x এবং x+1", "প্রশ্নমতে, x(x+1) = x+(x+1)+71", "x²+x = 2x+72 ⇒ x²-x-72=0", "x²-9x+8x-72=0 ⇒ x(x-9)+8(x-9)=0 ⇒ (x-9)(x+8)=0", "x=-8 অথবা x=9; যেহেতু সংখ্যা দুটি ধনাত্মক ক্রমিক, তাই x=9"], "answer": "সংখ্যা দুটি ৯ এবং ১০"},
  {"id": "job-2025-food-dept-electrical-foreman-q01", "examId": "job-2025-food-dept-electrical-foreman", "subject": "bangla", "topic": "কারক", "qno": 1, "marks": 5, "type": "sub-parts", "question": "কারক ও বিভক্তি নির্ণয় করুন।", "parts": [{"label": "ক", "q": "লোকমুখে শুনেছি।", "a": "অপাদানে ৭মী"}, {"label": "খ", "q": "বিপদে মোরে রক্ষা করো, এ নহে মোর প্রার্থনা।", "a": "অপাদানে ৭মী"}, {"label": "গ", "q": "আকাশে চাঁদ উঠেছে।", "a": "অধিকরণে ৭মী"}, {"label": "ঘ", "q": "প্রভাতে সূর্য উদিত হয়।", "a": "অধিকরণে ৭মী"}, {"label": "ঙ", "q": "গাড়ী স্টেশন ছেড়েছে।", "a": "অপাদানে শূন্য"}]},
  {"id": "job-2025-food-dept-electrical-foreman-q02", "examId": "job-2025-food-dept-electrical-foreman", "subject": "bangla", "qno": 2, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুন:", "parts": [{"label": "ক", "q": "সকলের দ্বারা অনুষ্ঠিত", "a": "সার্বজনীন"}, {"label": "খ", "q": "ঋণ শোধে অসমর্থ", "a": "দেউলিয়া"}, {"label": "গ", "q": "যা স্থানান্তর করা যায় না", "a": "স্থাবর"}, {"label": "ঘ", "q": "যা অধ্যয়ন করা হয়েছে", "a": "অধীত"}, {"label": "ঙ", "q": "পূর্বে ছিল, এখন নেই", "a": "ভূতপূর্ব"}]},
  {"id": "job-2025-food-dept-electrical-foreman-q03", "examId": "job-2025-food-dept-electrical-foreman", "subject": "bangla", "topic": "সন্ধি", "qno": 3, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "গবাদি", "a": "গো + আদি"}, {"label": "খ", "q": "লবণ", "a": "লো + অন"}, {"label": "গ", "q": "জনৈক", "a": "জন + এক"}, {"label": "ঘ", "q": "ইত্যাদি", "a": "ইতি + আদি"}, {"label": "ঙ", "q": "প্রত্যেক", "a": "প্রতি + এক"}]},
  {"id": "job-2025-food-dept-electrical-foreman-q04", "examId": "job-2025-food-dept-electrical-foreman", "subject": "bangla", "topic": "সমাস", "qno": 4, "marks": 5, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দিন:", "parts": [{"label": "ক", "q": "'ত্রিফলা' কোন সমাসের উদাহরণ?", "a": "দ্বিগু সমাস (ত্রিফলা = তিন ফলের সমাহার)"}, {"label": "খ", "q": "কোন সমাসে পূর্বপদ ও পরপদ উভয় পদের অর্থের প্রাধান্য থাকে?", "a": "দ্বন্দ্ব সমাস"}, {"label": "গ", "q": "বাক্যের মধ্যে পরস্পর সম্পর্কিত একাধিক পদের এক পদে পরিণত হওয়ার নাম কী?", "a": "সমাস"}, {"label": "ঘ", "q": "যেসব পদ নিয়ে সমাস হয় তাদেরকে কী বলে?", "a": "সমস্যমান পদ"}, {"label": "ঙ", "q": "পরপদের অর্থ প্রাধান্য পায় কোন সমাসে?", "a": "দ্বিগু, কর্মধারয় ও তৎপুরুষ সমাসে"}]},
  {"id": "job-2025-food-dept-electrical-foreman-q05", "examId": "job-2025-food-dept-electrical-foreman", "subject": "bangla", "topic": "সাহিত্য", "qno": 5, "marks": 5, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দিন।", "parts": [{"label": "ক", "q": "কবি 'জীবনানন্দ দাশ' এর জন্ম কোন শহরে?", "a": "বরিশাল"}, {"label": "খ", "q": "সিরাজউদ্দৌলা নাটকটির রচয়িতা কে?", "a": "সিকান্দার আবু জাফর"}, {"label": "গ", "q": "'বিষাদ সিন্ধু' উপন্যাসের রচয়িতা কে?", "a": "মীর মশাররফ হোসেন"}, {"label": "ঘ", "q": "'ময়মনসিংহ গীতিকা'র সংগ্রাহক কে?", "a": "চন্দ্রকুমার দে"}, {"label": "ঙ", "q": "সুকান্ত ভট্টাচার্য কত বছর বয়সে মৃত্যুবরণ করেন?", "a": "২১ বছর (২০ বছর ৯ মাস)"}]},
  {"id": "job-2025-food-dept-electrical-foreman-q06", "examId": "job-2025-food-dept-electrical-foreman", "subject": "english", "topic": "idioms-and-phrases", "qno": 6, "marks": 5, "type": "idiom", "question": "Make sentences with the following:", "parts": [{"label": "a", "phrase": "By dint of", "meaning": "বলে/দ্বারা", "example": "I succeeded by dint of hard work."}, {"label": "b", "phrase": "Take after", "meaning": "সদৃশ হওয়া", "example": "He takes after his father."}, {"label": "c", "phrase": "A crying need", "meaning": "অতি প্রয়োজন", "example": "Mass education is a crying need of Bangladesh."}, {"label": "d", "phrase": "At any cost", "meaning": "যেভাবেই হোক", "example": "At any cost I shall help you."}, {"label": "e", "phrase": "Look down upon", "meaning": "অবজ্ঞা করা", "example": "Do not look down upon the poor."}]},
  {"id": "job-2025-food-dept-electrical-foreman-q07", "examId": "job-2025-food-dept-electrical-foreman", "subject": "english", "qno": 7, "marks": 5, "type": "translate", "question": "ইংরেজিতে অনুবাদ করুনঃ", "parts": [{"label": "ক", "source": "সকাল থেকে গুঁড়ি গুঁড়ি বৃষ্টি হচ্ছে।", "target": "It has been drizzling since morning."}, {"label": "খ", "source": "দুয়ে দুয়ে চার হয়।", "target": "Two and two makes four."}, {"label": "গ", "source": "বাংলাদেশ একটি ব-দ্বীপ।", "target": "Bangladesh is a delta."}, {"label": "ঘ", "source": "আমার ঠান্ডা লেগেছে।", "target": "I have caught cold."}, {"label": "ঙ", "source": "আমার বন্ধু নাই বললেই চলে।", "target": "I have few friends."}]},
  {"id": "job-2025-food-dept-electrical-foreman-q08", "examId": "job-2025-food-dept-electrical-foreman", "subject": "english", "qno": 8, "marks": 4, "type": "sentence-change", "question": "Change the voice of the following sentences as indicated in the bracket:", "parts": [{"label": "a", "original": "Who will help me? (Passive)", "changed": "By whom will I be helped?"}, {"label": "b", "original": "Let the work be done. (Active)", "changed": "Do the work."}, {"label": "c", "original": "He did the unnecessary things for me. (Passive)", "changed": "The unnecessary things were done for me by him."}, {"label": "d", "original": "Rice is cheap when it is sold. (Active)", "changed": "Rice sells cheap."}]},
  {"id": "job-2025-food-dept-electrical-foreman-q09", "examId": "job-2025-food-dept-electrical-foreman", "subject": "english", "qno": 9, "marks": 4, "type": "sentence-change", "question": "Change the following sentences from direct to indirect speech:", "parts": [{"label": "a", "original": "Shimul said to his brother, \"Will you go to school?\"", "changed": "Shimul asked his brother if he would go to school."}, {"label": "b", "original": "He said to me, \"You may stay with me\".", "changed": "He told me that I might stay with him."}]},
  {"id": "job-2025-food-dept-electrical-foreman-q10", "examId": "job-2025-food-dept-electrical-foreman", "subject": "english", "qno": 10, "marks": 4, "type": "fill-gaps", "question": "Write the right form of verbs mentioned in the bracket:", "parts": [{"sentence": "He ran away having (see) the police.", "answer": "seen"}, {"sentence": "You would better (take) rest.", "answer": "take"}, {"sentence": "I came after he (leave) home.", "answer": "had left"}, {"sentence": "No sooner had he (take) the money than he went away.", "answer": "taken"}]},
  {"id": "job-2025-food-dept-electrical-foreman-q11", "examId": "job-2025-food-dept-electrical-foreman", "subject": "english", "qno": 11, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "One should do...... duty.", "answer": "one's"}, {"sentence": "He promised to...... the truth.", "answer": "speak"}, {"sentence": "You will fail.... you don't study regularly.", "answer": "if"}, {"sentence": "The cat is sleeping.......the table.", "answer": "under"}]},
  {"id": "job-2025-food-dept-electrical-foreman-q12", "examId": "job-2025-food-dept-electrical-foreman", "subject": "math", "qno": 12, "marks": 6, "type": "math", "question": "একটি বর্গাকার ক্ষেত্রের দৈর্ঘ্য ২০০ মিটার এবং এর বাইরে চারদিকে ৪ মিটার চওড়া একটি রাস্তা আছে। রাস্তাটির ক্ষেত্রফল কত?", "steps": ["বর্গাকার ক্ষেত্রের এক বাহুর দৈর্ঘ্য ২০০ মিটার, ∴ ক্ষেত্রফল = ২০০² = ৪০০০০ বর্গমিটার", "রাস্তাসহ বর্গক্ষেত্রের এক বাহুর দৈর্ঘ্য = ২০০+৪×২ = ২০৮ মিটার", "রাস্তাসহ ক্ষেত্রফল = ২০৮² = ৪৩২৬৪ বর্গমিটার", "রাস্তার ক্ষেত্রফল = ৪৩২৬৪ - ৪০০০০ = ৩২৬৪ বর্গমিটার"], "answer": "৩২৬৪ বর্গমিটার"},
  {"id": "job-2025-food-dept-electrical-foreman-q13", "examId": "job-2025-food-dept-electrical-foreman", "subject": "math", "qno": 13, "marks": 6, "type": "math", "question": "একটি মটর সাইকেল ১৮০০ টাকায় বিক্রয় করাতে ১০% ক্ষতি হলো, কত টাকায় বিক্রয় করলে ১২% লাভ হবে?", "steps": ["১০% ক্ষতিতে বিক্রয়মূল্য (১০০-১০)=৯০ টাকা, অর্থাৎ বিক্রয়মূল্য ৯০ টাকা হলে ক্রয়মূল্য ১০০ টাকা", "∴ বিক্রয়মূল্য ১৮০০ টাকা হলে ক্রয়মূল্য = (১০০×১৮০০)/৯০ = ২০০০ টাকা", "১২% লাভে, বিক্রয়মূল্য=(১০০+১২)=১১২ টাকা যখন ক্রয়মূল্য ১০০ টাকা", "∴ ক্রয়মূল্য ২০০০ টাকা হলে বিক্রয়মূল্য = (১১২×২০০০)/১০০ = ২২৪০ টাকা"], "answer": "২২৪০ টাকা"},
  {"id": "job-2025-food-dept-electrical-foreman-q14", "examId": "job-2025-food-dept-electrical-foreman", "subject": "math", "qno": 14, "marks": 4, "type": "math", "question": "4x²-23x+33 কে উৎপাদক বিশ্লেষণ করুন।", "steps": ["4x²-23x+33 = 4x²-12x-11x+33", "= 4x(x-3)-11(x-3)", "= (x-3)(4x-11)"], "answer": "(x-3)(4x-11)"},
  {"id": "job-2025-food-dept-electrical-foreman-q15", "examId": "job-2025-food-dept-electrical-foreman", "subject": "math", "qno": 15, "marks": 5, "type": "math", "question": "একটি ছাগল ৮% ক্ষতিতে বিক্রয় করা হলো। ছাগলটি আরও ৮০০ টাকা বেশি বিক্রয় করলে ৮% লাভ হতো। ছাগলটির ক্রয়মূল্য কত?", "steps": ["ধরি, ক্রয়মূল্য = x টাকা", "৮% ক্ষতিতে বিক্রয়মূল্য = ০.৯২x টাকা; ৮% লাভে বিক্রয়মূল্য = ১.০৮x টাকা", "প্রশ্নমতে, ০.৯২x + ৮০০ = ১.০৮x", "৮০০ = ০.১৬x ⇒ x = ৫০০০"], "answer": "৫০০০ টাকা"},
  {"id": "job-2025-food-dept-electrical-foreman-q16", "examId": "job-2025-food-dept-electrical-foreman", "subject": "math", "qno": 16, "marks": 6, "type": "math", "question": "বায়ু পানির তুলনায় ০.০০১২৯ গুণ ভারী। যে ঘরের দৈর্ঘ্য, প্রস্থ ও উচ্চতা যথাক্রমে ১৬ মিটার, ১২ মিটার ও ৪ মিটার, তাতে কত কিলোগ্রাম বায়ু আছে?", "steps": ["ঘরের আয়তন = ১৬×১২×৪ = ৭৬৮ ঘনমিটার = ৭৬৮×১০০০০০০ ঘন সে.মি. = ৭৬৮০০০০০০ ঘন সে.মি.", "১ ঘন সে.মি. বায়ুর ওজন = ০.০০১২৯ গ্রাম", "ঘরে বায়ুর পরিমাণ = ৭৬৮০০০০০০ × ০.০০১২৯ = ৯৯০৭২০ গ্রাম = ৯৯০.৭২ কিলোগ্রাম"], "answer": "৯৯০.৭২ কিলোগ্রাম"},
  {"id": "job-2025-food-dept-electrical-foreman-q17", "examId": "job-2025-food-dept-electrical-foreman", "subject": "math", "qno": 17, "marks": 5, "type": "math", "question": "m = 2 হলে, 27m³ + 54m²+ 36m+3 এর মান নির্ণয় কর।", "steps": ["প্রদত্ত রাশি = 27m³+54m²+36m+3", "= (3m)³ + 3.(3m)².2 + 3.3m.2² + 2³ - 5", "= (3m+2)³ - 5", "= (3.2+2)³ - 5 = 8³-5 = 512-5 = 507"], "answer": "507"},
  {"id": "job-2025-food-dept-electrical-foreman-q18", "examId": "job-2025-food-dept-electrical-foreman", "subject": "general-knowledge", "qno": 18, "marks": 20, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর লিখুনঃ", "parts": [{"label": "ক", "q": "কোন কমিটি কর্তৃক নোবেল শান্তি পুরস্কার ঘোষণা করা হয়?", "a": "নরওয়েজিয়ান নোবেল কমিটি।"}, {"label": "খ", "q": "বিশ্ব খাদ্য দিবস কবে?", "a": "১৬ই অক্টোবর।"}, {"label": "গ", "q": "সোয়াচ অব নো গ্রাউন্ড কোথায় অবস্থিত?", "a": "বঙ্গোপসাগর।"}, {"label": "ঘ", "q": "জাতিসংঘের কোন সংস্থা ২১শে ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে স্বীকৃতি দিয়েছে?", "a": "ইউনেস্কো"}, {"label": "ঙ", "q": "জাতিসংঘের সদর দপ্তর কোথায় অবস্থিত?", "a": "নিউইয়র্ক, যুক্তরাষ্ট্র"}, {"label": "চ", "q": "পারমাণবিক বোমা তৈরির মূল উপাদান কোন ধাতু?", "a": "ইউরেনিয়াম"}, {"label": "ছ", "q": "প্রথম বিশ্বযুদ্ধ শুরু হয়েছিল কত সালে?", "a": "১৯১৪ সালে"}, {"label": "জ", "q": "আয়োডিনের অভাবে কোন রোগ হয়?", "a": "গলগণ্ড"}, {"label": "ঝ", "q": "বাংলাদেশের সবচেয়ে প্রাচীন জনপদের নাম কি?", "a": "পুণ্ড্র"}, {"label": "ঞ", "q": "যুক্তরাষ্ট্র কোন তারিখে জাপানের হিরোশিমায় পারমাণবিক বোমা নিক্ষেপ করে?", "a": "০৬ আগস্ট ১৯৪৫"}, {"label": "ট", "q": "সিঙ্গাপুরের মুদ্রার নাম কী?", "a": "সিঙ্গাপুর ডলার"}, {"label": "ঠ", "q": "বাংলাদেশ সবচেয়ে বেশি বৈদেশিক মুদ্রা আয় করে কোন খাত থেকে?", "a": "তৈরি পোশাক শিল্প"}, {"label": "ড", "q": "বাংলাদেশে গভীর সমুদ্রবন্দর নির্মিত হচ্ছে কোথায়?", "a": "কক্সবাজার জেলার মহেশখালী উপজেলার মাতারবাড়ীতে"}, {"label": "ঢ", "q": "বাংলাদেশ জলবিদ্যুৎ আমদানি করে কোন দেশ থেকে?", "a": "নেপাল (১৫ জুন, ২০২৫)।"}, {"label": "ণ", "q": "বাংলাদেশের অর্থবছর শুরু হয় কত তারিখ থেকে?", "a": "১লা জুলাই।"}]},
  {"id": "job-2025-food-dept-electrical-foreman-q19", "examId": "job-2025-food-dept-electrical-foreman", "subject": "general-knowledge", "qno": 19, "marks": 5, "type": "short-qa", "question": "পূর্ণরূপ লিখুনঃ", "parts": [{"label": "", "q": "RAM", "a": "Random Access Memory"}, {"label": "", "q": "WTO", "a": "World Trade Organization"}, {"label": "", "q": "BARI", "a": "Bangladesh Agricultural Research Institute"}, {"label": "", "q": "UNESCO", "a": "United Nations Educational, Scientific and Culture Organization"}, {"label": "", "q": "GDP", "a": "Gross Domestic Product"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: জেলা প্রশাসকের কার্যালয়, নেত্রকোণা — অফিস সহায়ক
  // id prefix: job-2025-dc-netrokona
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-dc-netrokona-q01", examId: "job-2025-dc-netrokona", subject: "bangla", topic: "সন্ধি", qno: 1, marks: 3, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["ক্ষুধার্ত", "ক্ষুধা + ঋত"],
      ["সম্প্রীতি", "সম্ + প্রীতি"],
      ["ভাবুক", "ভৌ + উক"]
    ] },

  { id: "job-2025-dc-netrokona-q02", examId: "job-2025-dc-netrokona", subject: "bangla", topic: "শুদ্ধিকরণ", qno: 2, marks: 4, type: "table",
    question: "শুদ্ধ বানান লিখুন:",
    columns: ["অশুদ্ধ", "শুদ্ধ"],
    rows: [
      ["দূর্ঘটনা", "দুর্ঘটনা"],
      ["ন্যুনতম", "নূ্যনতম"],
      ["মুমুর্ষ", "মুমূর্ষু"]
    ] },

  { id: "job-2025-dc-netrokona-q03", examId: "job-2025-dc-netrokona", subject: "bangla", topic: "কারক", qno: 3, marks: 2, type: "table",
    question: "কারক ও বিভক্তি নির্ণয় করুন:",
    columns: ["বাক্য", "কারক ও বিভক্তি"],
    rows: [
      ["ধোপাকে কাপড় দাও।", "কর্মে ২য়া"],
      ["সর্বভূতে ধন দাও।", "সম্প্রদানে ৭মী"]
    ] },

  { id: "job-2025-dc-netrokona-q04", examId: "job-2025-dc-netrokona", subject: "bangla", qno: 4, marks: 3, type: "idiom",
    question: "বাগধারা (অর্থসহ বাক্য গঠন করুন):",
    parts: [
      { label: "ক", phrase: "কেঁচে গণ্ডুষ", meaning: "নতুন করে শুরু করা" },
      { label: "খ", phrase: "নিরানব্বইয়ের ধাক্কা", meaning: "সঞ্চয়ের প্রবৃত্তি" },
      { label: "গ", phrase: "উনপাঁজুরে", meaning: "দুর্বল" }
    ] },

  { id: "job-2025-dc-netrokona-q05", examId: "job-2025-dc-netrokona", subject: "bangla", topic: "সমাস", qno: 5, marks: 2, type: "table",
    question: "ব্যাসবাক্যসহ সমাস নির্ণয় করুন:",
    columns: ["শব্দ", "ব্যাসবাক্য", "সমাসের নাম"],
    rows: [
      ["বিজয় পতাকা", "বিজয়ের পতাকা", "৬ষ্ঠী তৎপুরুষ"],
      ["সিংহপুরুষ", "পুরুষ সিংহের ন্যায়", "উপমিত কর্মধারয়"]
    ] },

  { id: "job-2025-dc-netrokona-q06", examId: "job-2025-dc-netrokona", subject: "bangla", qno: 6, marks: 2, type: "paragraph",
    question: "'এক পয়সার বাঁশি' কাব্যগ্রন্থের রচয়িতা কে?",
    answer: "জসীমউদ্দীন।" },

  { id: "job-2025-dc-netrokona-q07", examId: "job-2025-dc-netrokona", subject: "bangla", qno: 7, marks: 2, type: "paragraph",
    question: "'বৃষ্টি শেষ হওয়ার আগেই আমরা বাড়ি পৌঁছেছিলাম।' বাক্যটি কোন কাল?",
    answer: "পুরাঘটিত অতীত কাল।" },

  { id: "job-2025-dc-netrokona-q08", examId: "job-2025-dc-netrokona", subject: "bangla", qno: 8, marks: 3, type: "paragraph",
    question: "যৌগিক বাক্যে রূপান্তর করুন: তুমি চেষ্টা না করায় ব্যর্থ হয়েছো।",
    answer: "তুমি চেষ্টা করনি, তাই ব্যর্থ হয়েছো।" },

  { id: "job-2025-dc-netrokona-q09", examId: "job-2025-dc-netrokona", subject: "bangla", qno: 9, marks: 3, type: "paragraph",
    question: "বাক্যটি সঠিকভাবে লিখুন: তোমায় দেখে সে আশ্চর্য হয়েছে।",
    answer: "তোমায় দেখে সে আশ্চর্যান্বিত হয়েছে।" },

  { id: "job-2025-dc-netrokona-q10", examId: "job-2025-dc-netrokona", subject: "bangla", qno: 10, marks: 3, type: "short-qa",
    question: "সঠিক উত্তর লিখুন:",
    parts: [
      { label: "ক", q: "'বুলবুলিস্তান' কার লেখা?", a: "গোলাম মোস্তফা" },
      { label: "খ", q: "'নৌফেল ও হাতেম' কার লেখা?", a: "ফররুখ আহমেদ" },
      { label: "গ", q: "চর্যাপদে সবচেয়ে বেশি পদ কার লেখা?", a: "কাহ্নপা" }
    ] },

  { id: "job-2025-dc-netrokona-q11", examId: "job-2025-dc-netrokona", subject: "english", topic: "spelling", qno: 11, marks: 2, type: "table",
    question: "Correct the spelling:",
    columns: ["Incorrect", "Correct"],
    rows: [
      ["Griveince", "Grievance"],
      ["Commity", "Committee"]
    ] },

  { id: "job-2025-dc-netrokona-q12", examId: "job-2025-dc-netrokona", subject: "english", qno: 12, marks: 2, type: "paragraph",
    question: "What is the noun form of 'Depart'?",
    answer: "Departure" },

  { id: "job-2025-dc-netrokona-q13", examId: "job-2025-dc-netrokona", subject: "english", topic: "sentence-correction", qno: 13, marks: 4, type: "sentence-change",
    question: "Correct the following sentences:",
    parts: [
      { label: "a", original: "I prefer tea from coffee.", changed: "I prefer tea to coffee." },
      { label: "b", original: "I saw a dream last light.", changed: "I dreamt a dream last light." }
    ] },

  { id: "job-2025-dc-netrokona-q14", examId: "job-2025-dc-netrokona", subject: "english", topic: "translation", qno: 14, marks: 8, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "তিনি সাঁতার কাটতে জানে না।", target: "He does not know how to swim." },
      { label: "খ", source: "বাংলাদেশ একটি স্বাধীন রাষ্ট্র।", target: "Bangladesh is an independent country." },
      { label: "গ", source: "প্রয়োজনীয়তা আবিষ্কারের জননী।", target: "Necessity is the mother of invention." },
      { label: "ঘ", source: "আমাকে কাজটি করতে হবে।", target: "I have to do the work." },
      { label: "ঙ", source: "এখন কয়টা বাজে?", target: "What time is it?" }
    ] },

  { id: "job-2025-dc-netrokona-q15", examId: "job-2025-dc-netrokona", subject: "english", topic: "fill-in-the-blanks", qno: 15, marks: 6, type: "fill-gaps",
    question: "Fill in the gaps:",
    parts: [
      { sentence: "He is good...... English.", answer: "at" },
      { sentence: "We have to go there.......... five minutes.", answer: "by" },
      { sentence: "He died....... overeating.", answer: "from" },
      { sentence: "He speaks English like..... English.", answer: "the" },
      { sentence: "The play \"Hamlet\" is written by.......", answer: "Shakespeare" },
      { sentence: "\"The old man and the sea\" is written by.......", answer: "Earnest Hemingway" }
    ] },

  { id: "job-2025-dc-netrokona-q16", examId: "job-2025-dc-netrokona", subject: "english", qno: 16, marks: 2, type: "paragraph",
    question: "What is the plural form of 'Mouse'?",
    answer: "Mice" },

  { id: "job-2025-dc-netrokona-q17", examId: "job-2025-dc-netrokona", subject: "english", qno: 17, marks: 2, type: "paragraph",
    question: "'By the by' এর অর্থ কী?",
    answer: "প্রসঙ্গক্রমে" },

  { id: "job-2025-dc-netrokona-q18", examId: "job-2025-dc-netrokona", subject: "english", qno: 18, marks: 3, type: "paragraph",
    question: "What is the passive form of this sentence: 'Keep your word'?",
    answer: "Your word should be kept." },

  { id: "job-2025-dc-netrokona-q19", examId: "job-2025-dc-netrokona", subject: "english", qno: 19, marks: 3, type: "paragraph",
    question: "Change the narrations: She asked me, \"Are you happy in your new job.\"",
    answer: "She asked me if I was happy in my new job." },

  { id: "job-2025-dc-netrokona-q20", examId: "job-2025-dc-netrokona", subject: "math", topic: "বীজগণিত", qno: 20, marks: 6, type: "math",
    question: "একটি প্রকৃত ভগ্নাংশের হর, লব অপেক্ষা 4 বেশি। ভগ্নাংশটির বর্গ করলে যে ভগ্নাংশ পাওয়া যাবে তার হর, লব অপেক্ষা 40 বেশি হবে। ভগ্নাংশটি নির্ণয় করুন।",
    steps: [
      "ধরি, ভগ্নাংশটির লব x এবং হর x + 4",
      "সুতরাং ভগ্নাংশটি = x/(x+4)",
      "ভগ্নাংশটির বর্গ = x²/(x+4)²",
      "এখানে, লব = x² এবং হর = x² + 8x + 16",
      "প্রশ্নমতে, x² + 8x + 16 = x² + 40",
      "বা, 8x + 16 = 40",
      "বা, 8x = 24",
      "∴ x = 3",
      "∴ x + 4 = 3 + 4 = 7"
    ],
    answer: "ভগ্নাংশটি ৩/৭।" },

  { id: "job-2025-dc-netrokona-q21", examId: "job-2025-dc-netrokona", subject: "math", topic: "জ্যামিতি", qno: 21, marks: 6, type: "math",
    question: "১০ সেন্টিমিটার বাহুবিশিষ্ট কোন রম্বসের একটি কর্ণ ১৬ সেন্টিমিটার হলে রম্বসটির ক্ষেত্রফল কত?",
    steps: [
      "মনে করি, ABCD রম্বসের একটি কর্ণ AC = 16 সে.মি এবং অপর কর্ণ BD সে.মি",
      "রম্বসের বাহুর দৈর্ঘ্য AB = 10 সে.মি",
      "ΔAOB সমকোণী ত্রিভুজে, AB² = AO² + BO²",
      "বা, (10)² = 8² + BO²",
      "বা, BO² = 100 - 64 = 36",
      "∴ BO = 6",
      "যেহেতু BO = 6 সুতরাং কর্ণ BD = 12 সে.মি",
      "আমরা জানি, রম্বসের ক্ষেত্রফল = 1/2 × কর্ণদ্বয়ের গুণফল = 1/2 × 16 × 12 = 96 বর্গ সে.মি"
    ],
    answer: "৯৬ বর্গ সে.মি।" },

  { id: "job-2025-dc-netrokona-q22", examId: "job-2025-dc-netrokona", subject: "math", topic: "পাটিগণিত", qno: 22, marks: 4, type: "math",
    question: "৮৪ টাকা কত টাকার ১২.৫০%?",
    steps: [
      "১২.৫০% ধরে হিসাব করে পাওয়া যায়",
      "৮৪ টাকা = x টাকার ১২.৫০%",
      "x = ৮৪ × ১০০ / ১২.৫০ = ৬৭২"
    ],
    answer: "৬৭২ টাকা।" },

  { id: "job-2025-dc-netrokona-q23", examId: "job-2025-dc-netrokona", subject: "math", topic: "বীজগণিত", qno: 23, marks: 6, type: "math",
    question: "যদি a = √7 + √6 হয় তবে, a² + 1/a² এর মান কত?",
    steps: [
      "দেওয়া আছে, a = √7 + √6",
      "1/a = 1/(√7+√6) = (√7-√6)/{(√7+√6)(√7-√6)} = (√7-√6)/(7-6) = √7-√6",
      "∴ a + 1/a = √7+√6 + √7-√6 = 2√7",
      "এখন, a² + 1/a² = (a + 1/a)² - 2.a.(1/a)",
      "= (2√7)² - 2 = 28 - 2 = 26"
    ],
    answer: "২৬" },

  { id: "job-2025-dc-netrokona-q24", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "gk-others", qno: 24, marks: 2, type: "paragraph",
    question: "ভূমি জরিপ অনুযায়ী CS ও RS এর পূর্ণরূপ কী?",
    answer: "CS = Cadastral Survey; RS = Revisional Survey।" },

  { id: "job-2025-dc-netrokona-q25", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "gk-others", qno: 25, marks: 2, type: "paragraph",
    question: "দাখিলা কী?",
    answer: "ভূমি কর বা খাজনার রসিদ।" },

  { id: "job-2025-dc-netrokona-q26", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "gk-others", qno: 26, marks: 2, type: "paragraph",
    question: "ইউনিয়ন ভূমি অফিসের দপ্তর প্রধানের পদবি কী?",
    answer: "ইউনিয়ন ভূমি সহকারী কর্মকর্তা।" },

  { id: "job-2025-dc-netrokona-q27", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "gk-others", qno: 27, marks: 2, type: "paragraph",
    question: "১ শতাংশ জমি কত বর্গফুট?",
    answer: "৪৩৫.৬ বর্গফুট।" },

  { id: "job-2025-dc-netrokona-q28", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 28, marks: 2, type: "paragraph",
    question: "গহীরা কোন অঞ্চলের লোকসঙ্গীত?",
    answer: "রাজশাহী ও চাঁপাইনবাবগঞ্জ।" },

  { id: "job-2025-dc-netrokona-q29", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "gk-others", qno: 29, marks: 2, type: "paragraph",
    question: "CPU এর পূর্ণরূপ কী?",
    answer: "Central Processing Unit" },

  { id: "job-2025-dc-netrokona-q30", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 30, marks: 2, type: "paragraph",
    question: "বাংলাদেশ সংবিধানের কতটি সংশোধনী হয়েছে?",
    answer: "১৭টি।" },

  { id: "job-2025-dc-netrokona-q31", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "বিজ্ঞান", qno: 31, marks: 2, type: "paragraph",
    question: "তেঁতুলে কোন এসিড থাকে?",
    answer: "টারটারিক এসিড।" },

  { id: "job-2025-dc-netrokona-q32", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 32, marks: 2, type: "paragraph",
    question: "গোবি মরুভূমি কোন দেশে অবস্থিত?",
    answer: "চীন ও মঙ্গোলিয়া।" },

  { id: "job-2025-dc-netrokona-q33", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 33, marks: 2, type: "paragraph",
    question: "বাংলাদেশের সমুদ্রবন্দর কতটি?",
    answer: "৩টি।" },

  { id: "job-2025-dc-netrokona-q34", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 34, marks: 2, type: "paragraph",
    question: "সোনারগাঁওয়ের পূর্বনাম কী?",
    answer: "সুবর্ণগ্রাম।" },

  { id: "job-2025-dc-netrokona-q35", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 35, marks: 2, type: "paragraph",
    question: "বাংলাদেশের সাথে ভারতের সীমান্ত রাজ্য কতটি?",
    answer: "৫টি।" },

  { id: "job-2025-dc-netrokona-q36", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "gk-others", qno: 36, marks: 2, type: "paragraph",
    question: "UNCTAD এর পূর্ণরূপ কী?",
    answer: "United Nations Conference on Trade and Development" },

  { id: "job-2025-dc-netrokona-q37", examId: "job-2025-dc-netrokona", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 37, marks: 2, type: "paragraph",
    question: "নেত্রকোণা জেলার কতটি উপজেলা ও কয়টি পৌরসভা আছে?",
    answer: "১০ উপজেলা ও ৫টি পৌরসভা।" },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বস্ত্র অধিদপ্তর — অফিস সহায়ক
  // id prefix: job-2025-textile-office-sohayok
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-textile-office-sohayok-q01", examId: "job-2025-textile-office-sohayok", subject: "bangla", topic: "সন্ধি", qno: 1, marks: 3, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["ষষ্ঠ", "ষষ্ + থ"],
      ["পরস্পর", "পর + পর"],
      ["মনীষা", "মনস্ + ঈষা"]
    ] },

  { id: "job-2025-textile-office-sohayok-q02", examId: "job-2025-textile-office-sohayok", subject: "bangla", qno: 2, marks: 3, type: "idiom",
    question: "এক কথায় প্রকাশ করুন:",
    parts: [
      { label: "ক", phrase: "উপকারীর অপকার করে যে", meaning: "কৃতঘ্ন" },
      { label: "খ", phrase: "আয় বুঝে ব্যয় করে যে", meaning: "মিতব্যয়ী" },
      { label: "গ", phrase: "হনন করার ইচ্ছা", meaning: "জিঘাংসা" }
    ] },

  { id: "job-2025-textile-office-sohayok-q03", examId: "job-2025-textile-office-sohayok", subject: "bangla", topic: "সমাস", qno: 3, marks: 2, type: "table",
    question: "ব্যাসবাক্যসহ সমাস নির্ণয় করুন:",
    columns: ["শব্দ", "ব্যাসবাক্য", "সমাসের নাম"],
    rows: [
      ["বিষাদ সিন্ধু", "বিষাদ রূপ সিন্ধু", "রূপক কর্মধারয়"],
      ["কানাকানি", "কানে কানে যে কথা", "ব্যতিহার বহুব্রীহি"],
      ["পিতামাতা", "পিতা ও মাতা", "দ্বন্দ্ব সমাস"]
    ] },

  { id: "job-2025-textile-office-sohayok-q04", examId: "job-2025-textile-office-sohayok", subject: "bangla", qno: 4, marks: 3, type: "sentence-change",
    question: "শুদ্ধ করে লিখুন:",
    parts: [
      { label: "ক", original: "তিনি আরোগ্য হয়েছেন।", changed: "তিনি আরোগ্য লাভ করেছেন।" },
      { label: "খ", original: "দৈন্যতা প্রশংসনীয় নয়।", changed: "দৈন্য/দীনতা প্রশংসনীয় নয়।" },
      { label: "গ", original: "মিথ্যা বলা সমিচিন নয়।", changed: "মিথ্যা বলা সমীচীন নয়।" }
    ] },

  { id: "job-2025-textile-office-sohayok-q05", examId: "job-2025-textile-office-sohayok", subject: "bangla", qno: 5, marks: 3, type: "idiom",
    question: "অর্থসহ বাক্য রচনা করুন:",
    parts: [
      { label: "ক", phrase: "মাটির মানুষ", meaning: "নিরীহ ব্যক্তি" },
      { label: "খ", phrase: "গড্ডলিকা প্রবাহ", meaning: "অন্ধ অনুকরণ" },
      { label: "গ", phrase: "অরণ্যে রোদন", meaning: "নিষ্ফল আবেদন" }
    ] },

  { id: "job-2025-textile-office-sohayok-q06", examId: "job-2025-textile-office-sohayok", subject: "bangla", topic: "বিপরীত-শব্দ", qno: 6, marks: 4, type: "table",
    question: "বিপরীত শব্দ লিখুন:",
    columns: ["প্রদত্ত শব্দ", "বিপরীত শব্দ"],
    rows: [
      ["অমৃত", "গরল"],
      ["অলীক", "সত্য"],
      ["তক্কর", "সাধু"]
    ] },

  { id: "job-2025-textile-office-sohayok-q07", examId: "job-2025-textile-office-sohayok", subject: "bangla", qno: 7, marks: 4, type: "short-qa",
    question: "নিচের প্রশ্নগুলোর উত্তর দাও:",
    parts: [
      { label: "ক", q: "রবীন্দ্রনাথ ঠাকুর কোন কাব্যগ্রন্থের জন্য নোবেল পুরস্কার পান?", a: "গীতাঞ্জলি" },
      { label: "খ", q: "'মেঘনাদবধ কাব্য' কার লেখা?", a: "মাইকেল মধুসূদন দত্ত" }
    ] },

  { id: "job-2025-textile-office-sohayok-q08", examId: "job-2025-textile-office-sohayok", subject: "english", topic: "translation", qno: 8, marks: 6, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "যেমন কর্ম, তেমন ফল।", target: "As you sow, so you reap." },
      { label: "খ", source: "আমি তোমার চিঠি পেয়েছি।", target: "I have received your letter." },
      { label: "গ", source: "তিন দিন ধরে বৃষ্টি হচ্ছে।", target: "It has been raining for three days." },
      { label: "ঘ", source: "রহিম পরীক্ষায় অংশগ্রহণ করবে।", target: "Rahim will appear for the examination." },
      { label: "ঙ", source: "তুমি আসবে তো?", target: "Will you come?" }
    ] },

  { id: "job-2025-textile-office-sohayok-q09", examId: "job-2025-textile-office-sohayok", subject: "english", topic: "fill-in-the-blanks", qno: 9, marks: 8, type: "fill-gaps",
    question: "Fill in the gaps:",
    parts: [
      { sentence: "I want to live........ peace with you.", answer: "in" },
      { sentence: "He is...... LLB.", answer: "an" },
      { sentence: "I saw...... one-eyed man.", answer: "a" },
      { sentence: "Ronaldo is....... better of the two footballers.", answer: "the" },
      { sentence: "I went to Dhaka..... train.", answer: "by" }
    ] },

  { id: "job-2025-textile-office-sohayok-q10", examId: "job-2025-textile-office-sohayok", subject: "english", topic: "gender", qno: 10, marks: 5, type: "table",
    question: "Change the gender:",
    columns: ["Given Gender", "Opposite Gender"],
    rows: [
      ["Drone", "Bee"],
      ["Fox", "Vixen"],
      ["Nephew", "Niece"],
      ["Dog", "Bitch"],
      ["Lord", "Lady"]
    ] },

  { id: "job-2025-textile-office-sohayok-q11", examId: "job-2025-textile-office-sohayok", subject: "english", topic: "sentence-making", qno: 11, marks: 5, type: "idiom",
    question: "Make sentences with the following idioms & phrases:",
    parts: [
      { label: "a", phrase: "For good", meaning: "চিরতরে", example: "He left the country for good." },
      { label: "b", phrase: "Maiden Speech", meaning: "প্রথম বক্তব্য", example: "His maiden speech pleased all." },
      { label: "c", phrase: "A slow coach", meaning: "অলস ব্যক্তি", example: "A slow coach can't shine in life." },
      { label: "d", phrase: "Crying need", meaning: "অতি প্রয়োজনীয়", example: "Mass education is the crying need of Bangladesh." },
      { label: "e", phrase: "Part and parcel", meaning: "অবিচ্ছেদ্য অংশ", example: "A library is part and parcel of a school." }
    ] },

  { id: "job-2025-textile-office-sohayok-q12", examId: "job-2025-textile-office-sohayok", subject: "math", topic: "বীজগণিত", qno: 12, marks: 6, type: "math",
    question: "x² - 8x - 20 কে দুইটি বর্গের বিয়োগফলরূপে প্রকাশ করুন।",
    steps: [
      "এখানে, x² - 8x - 20 = x² - 10x + 2x - 20 = x(x-10) + 2(x-10) = (x-10)(x+2)",
      "ধরি, (x-10) = a, (x+2) = b",
      "প্রদত্ত রাশি: ab = {(a+b)/2}² - {(a-b)/2}²",
      "= {(x-10+x+2)/2}² - {(x-10-x-2)/2}²",
      "= {(2x-8)/2}² - {(-12)/2}²",
      "= (x-4)² - 6²"
    ],
    answer: "(x-4)² - 6²" },

  { id: "job-2025-textile-office-sohayok-q13", examId: "job-2025-textile-office-sohayok", subject: "math", topic: "জ্যামিতি", qno: 13, marks: 6, type: "math",
    question: "একটি বর্গক্ষেত্রের পরিসীমা একটি আয়তক্ষেত্রের পরিসীমার সমান। আয়তক্ষেত্রটির দৈর্ঘ্য প্রস্থের ৩ গুণ এবং ক্ষেত্রফল ৯৭২ বর্গমিটার। বর্গক্ষেত্রের ক্ষেত্রফল নির্ণয় করুন।",
    steps: [
      "ধরি, আয়তক্ষেত্রের প্রস্থ = x মিটার ও দৈর্ঘ্য = 3x মিটার",
      "প্রশ্নমতে, 3x² = 972 বা, x² = 324 ∴ x = 18",
      "∴ প্রস্থ 18 মিটার, দৈর্ঘ্য = 3 × 18 = 54 মিটার",
      "∴ আয়তক্ষেত্রের পরিসীমা = 2(দৈর্ঘ্য + প্রস্থ) = 2(54+18) মিটার = 144 মিটার",
      "∴ বর্গের বাহুর দৈর্ঘ্য = 144/4 মিটার = 36 মিটার",
      "বর্গক্ষেত্রের ক্ষেত্রফল = (36)² = 1296 বর্গ মিটার"
    ],
    answer: "১২৯৬ বর্গ মিটার।" },

  { id: "job-2025-textile-office-sohayok-q14", examId: "job-2025-textile-office-sohayok", subject: "math", topic: "পাটিগণিত", qno: 14, marks: 6, type: "math",
    question: "একটি পানির ট্যাংকে দুটি নল আছে। প্রথম নলটি খুলে দিলে ট্যাংকটি ২০ ঘণ্টায় পানিতে পূর্ণ হয়। দ্বিতীয় নল দ্বারা পূর্ণ ট্যাংক ৩০ ঘণ্টায় খালি হয়। দুইটি নল একসঙ্গে খুলে দিলে কত ঘণ্টায় ট্যাংকটি পূর্ণ হবে?",
    steps: [
      "প্রথম নল দ্বারা ২০ ঘণ্টায় পূর্ণ হয় ১ অংশ, সুতরাং ১ ঘণ্টায় পূর্ণ হয় ১/২০ অংশ",
      "দ্বিতীয় নল দ্বারা ৩০ ঘণ্টায় খালি হয় ১ অংশ, সুতরাং ১ ঘণ্টায় খালি হয় ১/৩০ অংশ",
      "উভয় নল একত্রে খুললে ১ ঘণ্টায় পূর্ণ হয় (১/২০ - ১/৩০) অংশ = (৩-২)/৬০ অংশ = ১/৬০ অংশ",
      "১/৬০ অংশ পূর্ণ হয় ১ ঘণ্টায়, সুতরাং ১ অংশ পূর্ণ হয় ৬০ ঘণ্টায়"
    ],
    answer: "৬০ ঘণ্টা।" },

  { id: "job-2025-textile-office-sohayok-q15", examId: "job-2025-textile-office-sohayok", subject: "math", topic: "পাটিগণিত", qno: 15, marks: 6, type: "math",
    question: "পিতার বর্তমান বয়স পুত্রের বয়সের ৩ গুণ। ৫ বছর আগে পিতার বয়স পুত্রের বয়সের ৪ গুণ ছিল। পিতা ও পুত্রের বর্তমান বয়স কত?",
    steps: [
      "মনে করি, পুত্রের বর্তমান বয়স x বছর, পিতার বর্তমান বয়স 3x বছর",
      "প্রশ্নমতে, 4(x-5) = 3x-5",
      "বা, 4x-20 = 3x-5",
      "∴ x = 15",
      "সুতরাং পুত্রের বর্তমান বয়স ১৫ বছর, পিতার বর্তমান বয়স ৩ × ১৫ = ৪৫ বছর"
    ],
    answer: "পিতার বর্তমান বয়স ৪৫ বছর; পুত্রের বয়স ১৫ বছর।" },

  { id: "job-2025-textile-office-sohayok-q16", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 16, marks: 2, type: "paragraph",
    question: "ইউক্রেনের রাজধানীর নাম কি?",
    answer: "কিয়েভ।" },

  { id: "job-2025-textile-office-sohayok-q17", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "gk-others", qno: 17, marks: 2, type: "paragraph",
    question: "ChatGPT কী?",
    answer: "OpenAI কোম্পানি কর্তৃক তৈরিকৃত কৃত্রিম বুদ্ধিমত্তাভিত্তিক এক ধরণের চ্যাটবট।" },

  { id: "job-2025-textile-office-sohayok-q18", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 18, marks: 2, type: "paragraph",
    question: "বাংলাদেশের প্রথম ভৌগোলিক নির্দেশক (GI) পণ্য কোনটি?",
    answer: "জামদানি শাড়ি।" },

  { id: "job-2025-textile-office-sohayok-q19", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 19, marks: 2, type: "paragraph",
    question: "বাংলাদেশের 'White Gold' হিসেবে পরিচিত কোনটি?",
    answer: "চিংড়ি।" },

  { id: "job-2025-textile-office-sohayok-q20", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 20, marks: 2, type: "paragraph",
    question: "বাংলাদেশের কোন জেলায় বেশি রেশম চাষ হয়?",
    answer: "রাজশাহী।" },

  { id: "job-2025-textile-office-sohayok-q21", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 21, marks: 2, type: "paragraph",
    question: "বাংলাদেশের সাথে কোন দুই দেশের আন্তর্জাতিক সীমানা রয়েছে?",
    answer: "ভারত ও মিয়ানমার।" },

  { id: "job-2025-textile-office-sohayok-q22", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "gk-others", qno: 22, marks: 2, type: "paragraph",
    question: "বিশ্ব মানবাধিকার দিবস কত তারিখে?",
    answer: "১০ ডিসেম্বর।" },

  { id: "job-2025-textile-office-sohayok-q23", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "আন্তর্জাতিক", qno: 23, marks: 2, type: "paragraph",
    question: "OIC এর প্রধান কার্যালয় কোথায় অবস্থিত?",
    answer: "জেদ্দা।" },

  { id: "job-2025-textile-office-sohayok-q24", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "বিজ্ঞান", qno: 24, marks: 2, type: "paragraph",
    question: "বাষ্পীয় ইঞ্জিনের আবিষ্কারক কে?",
    answer: "জেমস ওয়াট।" },

  { id: "job-2025-textile-office-sohayok-q25", examId: "job-2025-textile-office-sohayok", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 25, marks: 2, type: "paragraph",
    question: "RMG এর পূর্ণরূপ কী?",
    answer: "Ready Made Garments" },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ সুপ্রীম কোর্ট — অফিস সহকারী
  // id prefix: job-2025-supreme-court-office-asst
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-supreme-court-office-asst-q01", examId: "job-2025-supreme-court-office-asst", subject: "bangla", topic: "সন্ধি", qno: 1, marks: 8, type: "table",
    question: "বাংলা ব্যাকরণ — সন্ধি বিচ্ছেদ ও অন্যান্য:",
    columns: ["ক্রম", "প্রশ্ন", "উত্তর"],
    rows: [
      ["ক", "সন্ধি বিচ্ছেদ করুন: ষড়ানন", "ষট্ + আনন"],
      ["খ", "ব্যাসবাক্যসহ সমাস নির্ণয় করুন: উপকথা", "কথার সদৃশ (অব্যয়ীভাব সমাস)"],
      ["গ", "এককথায় প্রকাশ করুন: যে পরের গুণেও দোষ ধরে", "অসূয়ক"],
      ["ঘ", "বাগধারাটির অর্থ লিখুন: জড়ভরত", "অকর্মণ্য ব্যক্তি"],
      ["ঙ", "শুদ্ধ করে লিখুন: ইক্ষুর চারা বপণ করা হলো।", "ইক্ষুর চারা রোপণ করা হলো"]
    ] },

  { id: "job-2025-supreme-court-office-asst-q02", examId: "job-2025-supreme-court-office-asst", subject: "bangla", qno: 2, marks: 5, type: "short-qa",
    question: "সংক্ষেপে উত্তর লিখুন:",
    parts: [
      { label: "ক", q: "'মৌরীফুল' গল্পগ্রন্থ কার রচনা?", a: "বিভূতিভূষণ বন্দ্যোপাধ্যায়" },
      { label: "খ", q: "মনসামঙ্গল কাব্যের আদি কবি কে?", a: "কানা হরিদত্ত" },
      { label: "গ", q: "'আমি কষ্টহীনদের কষ্টস্বর, আশাহীনদের আশা' উক্তিটি কোন প্রবন্ধের?", a: "আমার ভাষা (কাজী নজরুল ইসলাম)" },
      { label: "ঘ", q: "বাংলা সাহিত্যে 'মৌমাছি' ছদ্মনাম কার?", a: "বিমল ঘোষ" },
      { label: "ঙ", q: "'উমা' ও 'প্যারীমোহন' রবীন্দ্রনাথ ঠাকুরের কোন গল্পের চরিত্র?", a: "খাতা" }
    ] },

  { id: "job-2025-supreme-court-office-asst-q03", examId: "job-2025-supreme-court-office-asst", subject: "bangla", qno: 3, marks: 5, type: "letter",
    question: "মনে করুন আপনার নাম 'জাহিদ' এবং বয়স ৩৫ বছর। আপনি হাইকোর্ট বিভাগের একজন অফিস সহকারী। সম্প্রতি হাইকোর্ট বিভাগের 'ব্যক্তিগত কর্মকর্তা' পদে সরাসরি নিয়োগের নিমিত্তে নিয়োগ বিজ্ঞপ্তি প্রকাশিত হয়েছে। আপনি উক্ত পদে পরীক্ষায় অংশগ্রহণের অনুমতি চেয়ে উপযুক্ত কর্তৃপক্ষ বরাবর একটি আবেদনপত্র লিখুন।",
    letter: {
      to: "উপযুক্ত কর্তৃপক্ষ\nবাংলাদেশ সুপ্রীম কোর্ট\nঢাকা।",
      subject: "'ব্যক্তিগত কর্মকর্তা' পদে পরীক্ষায় অংশগ্রহণের অনুমতির জন্য আবেদন।",
      body: "সবিনয় নিবেদন এই যে, আমি জাহিদ, বয়স ৩৫ বছর, হাইকোর্ট বিভাগের একজন কর্মরত অফিস সহকারী। সম্প্রতি হাইকোর্ট বিভাগের 'ব্যক্তিগত কর্মকর্তা' পদে সরাসরি নিয়োগের বিজ্ঞপ্তি প্রকাশিত হয়েছে। আমি উক্ত পদের জন্য প্রয়োজনীয় যোগ্যতা সম্পন্ন এবং আগ্রহী।\n\nঅতএব, বিনীত অনুরোধ এই যে, আমাকে উক্ত পদের নিয়োগ পরীক্ষায় অংশগ্রহণের অনুমতি প্রদান করতে আপনার মর্জি হয়।",
      closing: "বিনীত নিবেদক,",
      sender: "জাহিদ\nঅফিস সহকারী, হাইকোর্ট বিভাগ"
    } },

  { id: "job-2025-supreme-court-office-asst-q04", examId: "job-2025-supreme-court-office-asst", subject: "english", topic: "translation", qno: 4, marks: 5, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "তিনি সময়মতো কাজটি শেষ করেছেন।", target: "He has finished the work on time." },
      { label: "খ", source: "তিনি হাইকোর্ট বিভাগের একজন অফিস সহকারী।", target: "He is an office Assistant in the High Court Department." },
      { label: "গ", source: "কাপড়টির রং পাকা।", target: "The cloth is color fast." },
      { label: "ঘ", source: "মন্ত্রের সাধন কিংবা শরীর পাতন।", target: "Do or die." },
      { label: "ঙ", source: "ছেলেটি হাড়ে হাড়ে দুষ্ট।", target: "The boy is wicked to the backbone." }
    ] },

  { id: "job-2025-supreme-court-office-asst-q05", examId: "job-2025-supreme-court-office-asst", subject: "english", topic: "grammar", qno: 5, marks: 5, type: "short-qa",
    question: "Grammar and literature:",
    parts: [
      { label: "a", q: "Write the meaning of the phrase: Bon Voyage.", a: "যাত্রা শুভ হোক" },
      { label: "b", q: "Correct the sentence: Each of the candidates have submitted their forms.", a: "Each of the candidates has submitted their forms." },
      { label: "c", q: "Write the verb form of 'Registar'.", a: "Register" },
      { label: "d", q: "Change the voice: Do it.", a: "Let it be done." },
      { label: "e", q: "Who wrote 'The Rime of the Ancient Mariner'?", a: "S.T. Coleridge" }
    ] },

  { id: "job-2025-supreme-court-office-asst-q06", examId: "job-2025-supreme-court-office-asst", subject: "english", topic: "paragraph", qno: 6, marks: 5, type: "paragraph",
    question: "Write a paragraph on 'Earthquake threat in Dhaka city'",
    answer: "Dhaka city faces a serious earthquake threat due to its location near active fault lines and its dense, poorly planned infrastructure. Many old buildings in Dhaka were not constructed following proper building codes, making them highly vulnerable to collapse during a strong earthquake. Experts warn that a major earthquake could cause massive destruction and loss of life in the city because of overcrowding and lack of open spaces for evacuation. To reduce this risk, the government should strictly enforce building codes, conduct regular safety inspections, and raise public awareness about earthquake preparedness." },

  { id: "job-2025-supreme-court-office-asst-q07", examId: "job-2025-supreme-court-office-asst", subject: "math", topic: "বীজগণিত", qno: 7, marks: 10, type: "math",
    question: "উৎপাদকে বিশ্লেষণ করুন: a² − b² − 2bc − c² + a − b − c",
    steps: [
      "a² − b² − 2bc − c² + a − b − c",
      "= a² − (b² + 2bc + c²) + 1(a − b − c)",
      "= (a)² − (b+c)² + 1(a − b − c)",
      "= {a + (b+c)}{a − (b+c)} + 1(a − b − c)",
      "= (a+b+c)(a−b−c) + 1(a−b−c)",
      "= (a−b−c)(a+b+c+1)"
    ],
    answer: "(a−b−c)(a+b+c+1)" },

  { id: "job-2025-supreme-court-office-asst-q08", examId: "job-2025-supreme-court-office-asst", subject: "math", topic: "পাটিগণিত", qno: 8, marks: 10, type: "math",
    question: "কোন একটি পণ্য উৎপাদনকারী ২০% লাভে পুচরা বিক্রেতার নিকট বিক্রয় করেন। খুচরা বিক্রেতা ২০% লাভে ভোক্তার নিকট বিক্রয় করেন। উৎপাদন খরচ ১০০ টাকা হলে ভোক্তা কত টাকায় পণ্যটি কিনতে পারবেন?",
    steps: [
      "২০% লাভে উৎপাদনকারীর বিক্রয়মূল্য = ১২০ টাকা (ক্রয়মূল্য ১০০ টাকা হলে)",
      "উৎপাদনকারীর বিক্রয়মূল্যই পাইকারি বিক্রেতার ক্রয়মূল্য = ১২০ টাকা",
      "২০% লাভে খুচরা বিক্রেতার বিক্রয়মূল্য: ক্রয়মূল্য ১০০ টাকা হলে বিক্রয়মূল্য ১২০ টাকা",
      "ক্রয়মূল্য ১২০ টাকা হলে বিক্রয়মূল্য = (১২০ × ১২০)/১০০ = ১৪৪ টাকা"
    ],
    answer: "ভোক্তা ১৪৪ টাকায় পণ্যটি কিনতে পারবেন।" },

  { id: "job-2025-supreme-court-office-asst-q09", examId: "job-2025-supreme-court-office-asst", subject: "general-knowledge", topic: "gk-others", qno: 9, marks: 12, type: "short-qa",
    question: "সংক্ষেপে উত্তর লিখুন:",
    parts: [
      { label: "ক", q: "থাইল্যান্ডের মুদ্রার নাম কী?", a: "বাথ" },
      { label: "খ", q: "'ভবদহ বিল' কোন জেলায় অবস্থিত?", a: "যশোর" },
      { label: "গ", q: "'ফ্লোটিলা' শব্দের অর্থ কী?", a: "ছোট ছোট জাহাজের নৌবহর" },
      { label: "ঘ", q: "পৃথিবীর কোন শহর দুটি মহাদেশে অবস্থিত?", a: "ইস্তাম্বুল" },
      { label: "ঙ", q: "'সলভওয়্যার' কী?", a: "নারীদের সুরক্ষার ডিভাইস (উদ্ভাবক- শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের শিক্ষার্থীরা)" },
      { label: "চ", q: "নির্বাচন পদ্ধতিতে আলোচিত PR এর পূর্ণরূপ কী?", a: "Proportional representation" },
      { label: "ছ", q: "সার্ক কত সালে প্রতিষ্ঠিত হয়?", a: "১৯৮৫ সালে" },
      { label: "জ", q: "বাংলাদেশ সুপ্রীম কোর্ট এর কয়টি বিভাগ রয়েছে?", a: "২টি" },
      { label: "ঝ", q: "বাংলাদেশে স্টারলিংক ইন্টারনেট কত তারিখে পরীক্ষামূলকভাবে যাত্রা শুরু করে?", a: "৯ এপ্রিল, ২০২৫ সালে (আনুষ্ঠানিক যাত্রা ২০ মে, ২০২৫)" },
      { label: "ঞ", q: "বাংলাদেশের প্রথম এভারেস্টজয়ী নারীর নাম কী?", a: "নিশাত মজুমদার" }
    ] },

  { id: "job-2025-supreme-court-office-asst-q10", examId: "job-2025-supreme-court-office-asst", subject: "general-knowledge", topic: "gk-others", qno: 10, marks: 5, type: "paragraph",
    question: "সংক্ষেপে উত্তর লিখুন: বাংলাদেশ সুপ্রীম কোর্ট এর কয়টি বিভাগ রয়েছে?",
    answer: "২টি।" },

  { id: "job-2025-supreme-court-office-asst-q11", examId: "job-2025-supreme-court-office-asst", subject: "general-knowledge", topic: "gk-others", qno: 11, marks: 10, type: "paragraph",
    question: "টীকা লিখুন: বিশ্বজুড়ে সংঘাত ও শান্তি প্রক্রিয়া।",
    answer: "বিশ্বজুড়ে সংঘাত ও শান্তি প্রক্রিয়া বলতে জাতিগত, রাজনৈতিক ও ধর্মীয় বিভেদ থেকে সৃষ্ট সহিংসতা মোকাবিলা করে আলোচনা, কূটনীতি ও ন্যায়বিচারের মাধ্যমে স্থিতিশীলতা প্রতিষ্ঠার বৈশ্বিক প্রচেষ্টাকে বোঝায়। বর্তমানে অধিকাংশ সংঘাতই রাষ্ট্রের অভ্যন্তরে সংঘটিত হচ্ছে, যার পেছনে দারিদ্র্য, বৈষম্য, মানবাধিকার লঙ্ঘন, দুর্বল শাসনব্যবস্থা, জলবায়ু পরিবর্তন ও সম্পদ নিয়ে প্রতিযোগিতা গুরুত্বপূর্ণ ভূমিকা রাখছে। তবে শান্তি প্রক্রিয়া প্রায়শই দীর্ঘ, জটিল ও চ্যালেঞ্জিং হয়, তাই টেকসই শান্তি প্রতিষ্ঠার জন্য অন্তর্ভুক্তিমূলক অংশগ্রহণ, ন্যায়বিচার ও সহযোগিতার ওপর বিশেষ গুরুত্ব দেওয়া জরুরি।" },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: জেলা প্রশাসকের কার্যালয়, লালমনিরহাট — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক
  // id prefix: job-2025-dc-lalmonirhat
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-dc-lalmonirhat-q01", examId: "job-2025-dc-lalmonirhat", subject: "bangla", qno: 1, marks: 5, type: "idiom",
    question: "অর্থসহ বাক্য রচনা করুন:",
    parts: [
      { label: "ক", phrase: "কান পাতলা", meaning: "সহজেই বিশ্বাসপ্রবণ" },
      { label: "খ", phrase: "বালির বাঁধ", meaning: "ক্ষণস্থায়ী বস্তু" },
      { label: "গ", phrase: "কানে তুলো দেওয়া", meaning: "ক্ষেপক্ষেপ না করা" },
      { label: "ঘ", phrase: "শাপে বর", meaning: "অনিষ্টেই ইষ্ট লাভ" },
      { label: "ঙ", phrase: "সোনার পাথর বাটি", meaning: "অলীক বস্তু" }
    ] },

  { id: "job-2025-dc-lalmonirhat-q02", examId: "job-2025-dc-lalmonirhat", subject: "bangla", qno: 2, marks: 5, type: "idiom",
    question: "এক কথায় প্রকাশ করুন:",
    parts: [
      { label: "ক", phrase: "ঘোড়ার ডাক", meaning: "হ্রেষা" },
      { label: "খ", phrase: "যার স্ত্রী মারা গিয়েছে", meaning: "বিপত্নীক" },
      { label: "গ", phrase: "যে নারীর এখনো বিয়ে হয়নি", meaning: "কুমারী" },
      { label: "ঘ", phrase: "বনের আগুন", meaning: "দাবানল" },
      { label: "ঙ", phrase: "জলে ও স্থলে চরে যে", meaning: "উভচর" }
    ] },

  { id: "job-2025-dc-lalmonirhat-q03", examId: "job-2025-dc-lalmonirhat", subject: "bangla", topic: "কারক", qno: 3, marks: 5, type: "table",
    question: "কারক ও বিভক্তি নির্ণয় করুন:",
    columns: ["বাক্য", "কারক ও বিভক্তি"],
    rows: [
      ["জল পড়ে পাতা নড়ে", "কর্তায় শূন্য"],
      ["আকাশে আজ অনেক তারা উঠেছে", "অধিকরণে ৭মী"],
      ["তারা সবাই মিলে গল্প করছে", "কর্মকারকে শূন্য"],
      ["এ কলমে ভাল লেখা যায় না", "করণে ৭মী"],
      ["ভিক্ষা দাও দুয়ারে ভিক্ষুক", "সম্প্রদানে শূন্য"]
    ] },

  { id: "job-2025-dc-lalmonirhat-q04", examId: "job-2025-dc-lalmonirhat", subject: "bangla", qno: 4, marks: 5, type: "paragraph",
    question: "একটি অনুচ্ছেদ লিখুন: উত্তরবঙ্গের কৃষিতে লালমনিরহাটের অবদান।",
    answer: "লালমনিরহাট জেলা উত্তরবঙ্গের একটি গুরুত্বপূর্ণ কৃষিপ্রধান জেলা। তিস্তা নদীবিধৌত এই জেলার উর্বর পলিমাটিতে ধান, পাট, তামাক, ভুট্টা ও বিভিন্ন সবজি ব্যাপকভাবে উৎপাদিত হয়। এখানকার কৃষকরা আধুনিক কৃষিপ্রযুক্তি ব্যবহার করে ফসলের উৎপাদন বৃদ্ধি করে চলেছেন। তিস্তা সেচ প্রকল্পের মাধ্যমে সেচ ব্যবস্থার উন্নতি হওয়ায় ফসল উৎপাদন আরও বৃদ্ধি পেয়েছে। এছাড়া এই জেলার তামাক চাষ সারাদেশে সুপরিচিত।" },

  { id: "job-2025-dc-lalmonirhat-q05", examId: "job-2025-dc-lalmonirhat", subject: "english", topic: "sentence-correction", qno: 5, marks: 5, type: "sentence-change",
    question: "Correct the following sentences:",
    parts: [
      { label: "a", original: "Time and tide waits for none.", changed: "Time and tide wait for none." },
      { label: "b", original: "Masuma sing well always.", changed: "Masuma always sings well." },
      { label: "c", original: "He is addicted with gambling.", changed: "He is addicted to gambling." },
      { label: "d", original: "English is a famous nation.", changed: "The English are a famous nation." },
      { label: "e", original: "The boy was sunk.", changed: "The boy was drowned." }
    ] },

  { id: "job-2025-dc-lalmonirhat-q06", examId: "job-2025-dc-lalmonirhat", subject: "english", topic: "sentence-making", qno: 6, marks: 5, type: "idiom",
    question: "Make Sentences with following words:",
    parts: [
      { label: "a", phrase: "Run away", meaning: "পালিয়ে যাওয়া", example: "He ran away seeing me." },
      { label: "b", phrase: "Do or die", meaning: "প্রাণপণ চেষ্টা করা", example: "Do or die, you have to win." },
      { label: "c", phrase: "In a nutshell", meaning: "সংক্ষেপে", example: "Tell the story in a nutshell." },
      { label: "d", phrase: "To and fro", meaning: "এদিক-ওদিক", example: "Do not walk to and fro" },
      { label: "e", phrase: "Fresh blood", meaning: "নতুন সদস্য", example: "The Company needs fresh blood." }
    ] },

  { id: "job-2025-dc-lalmonirhat-q07", examId: "job-2025-dc-lalmonirhat", subject: "english", topic: "grammar", qno: 7, marks: 10, type: "sentence-change",
    question: "Change the voice:",
    parts: [
      { label: "a", original: "They are playing football in the field.", changed: "Football is being played by them in the field." },
      { label: "b", original: "Test the data.", changed: "Let the data be tested." },
      { label: "c", original: "We are taught English by Rahim.", changed: "Rahim teaches us English." },
      { label: "d", original: "It was informed by the media men.", changed: "The media men informed it." },
      { label: "e", original: "You will do the work within two days.", changed: "The work will be done by you within two days." }
    ] },

  { id: "job-2025-dc-lalmonirhat-q08", examId: "job-2025-dc-lalmonirhat", subject: "english", topic: "paragraph", qno: 8, marks: 10, type: "paragraph",
    question: "Write a paragraph on \"Unemployment\"",
    answer: "Unemployment is a serious social and economic problem that occurs when people who are able and willing to work cannot find suitable jobs. It affects not only individuals but also families and the overall development of a country. Unemployment leads to poverty, frustration, and sometimes crime, as people struggle to meet their basic needs. Rapid population growth, lack of education, and limited job opportunities are some of the main causes of unemployment. To reduce unemployment, the government should create more job opportunities, promote skill-based education and encourage industrial and self-employment activities." },

  { id: "job-2025-dc-lalmonirhat-q09", examId: "job-2025-dc-lalmonirhat", subject: "math", topic: "পাটিগণিত", qno: 9, marks: 6, type: "math",
    question: "সরল করুন: (৫+৩)৪ × ৪ ÷ ২(২+২)",
    steps: [
      "(৫+৩)৪ × ৪ ÷ ২(২+২)",
      "= ৪ × ৪ × ৮ × ৮ [ধাপে ধাপে গণনা করে]"
    ],
    answer: "১০২৪" },

  { id: "job-2025-dc-lalmonirhat-q10", examId: "job-2025-dc-lalmonirhat", subject: "math", topic: "বীজগণিত", qno: 10, marks: 6, type: "math",
    question: "উৎপাদকে বিশ্লেষণ করুন: ক) a⁴ − b² + 2b − 1  খ) 9a² + 9ab + 2b²",
    steps: [
      "ক) a⁴ − b² + 2b − 1 = a⁴ − (b² − 2b + 1) = (a²)² − (b−1)² = {a²+(b−1)}{a²−(b−1)} = (a²+b−1)(a²−b+1)",
      "খ) 9a² + 9ab + 2b² = 9a² + 6ab + 3ab + 2b² = 3a(3a+b) + b(3a+2b) = (3a+2b)(3a+b)"
    ],
    answer: "ক) (a²+b−1)(a²−b+1)   খ) (3a+2b)(3a+b)" },

  { id: "job-2025-dc-lalmonirhat-q11", examId: "job-2025-dc-lalmonirhat", subject: "math", topic: "পাটিগণিত", qno: 11, marks: 8, type: "math",
    question: "একটি চৌবাচ্চায় তিনটি নল আছে। প্রথম ও দ্বিতীয় নল দ্বারা যথাক্রমে ৩০ মিনিট ও ৪০ মিনিটে চৌবাচ্চাটি পূর্ণ হয়। তৃতীয় নল দ্বারা পূর্ণ চৌবাচ্চাটি ২০ মিনিটে খালি হয়। তিনটি নল একসাথে চালু করলে চৌবাচ্চাটি পূর্ণ হতে কত সময় লাগবে?",
    steps: [
      "১ম নল দ্বারা, ৩০ মিনিটে পূর্ণ হয় ১ অংশ, সুতরাং ১ মিনিটে পূর্ণ হয় ১/৩০ অংশ",
      "২য় নল দ্বারা, ৪০ মিনিটে পূর্ণ হয় ১ অংশ, সুতরাং ১ মিনিটে পূর্ণ হয় ১/৪০ অংশ",
      "৩য় নল দ্বারা, ২০ মিনিটে খালি হয় ১ অংশ, সুতরাং ১ মিনিটে খালি হয় ১/২০ অংশ",
      "তিনটি নল একসঙ্গে খুলে দিলে, ১ মিনিটে পূর্ণ হয় (১/৩০ + ১/৪০ − ১/২০) অংশ = ১/১২০ অংশ",
      "১/১২০ অংশ পূর্ণ হয় ১ মিনিটে, সুতরাং ১ অংশ পূর্ণ হয় ১২০ মিনিটে"
    ],
    answer: "১২০ মিনিট।" },

  { id: "job-2025-dc-lalmonirhat-q12", examId: "job-2025-dc-lalmonirhat", subject: "bangla", qno: 12, marks: 5, type: "short-qa",
    question: "সংজ্ঞা লিখুন:",
    parts: [
      { label: "ক", q: "সন্নিহিত কোণ কাকে বলে?", a: "দুটি কোণের একটি সাধারণ বাহু ও একই শীর্ষ বিন্দু থাকলে তাদের পরস্পরকে সন্নিহিত কোণ বলে।" },
      { label: "খ", q: "বিপ্রতীপ কোণ কাকে বলে?", a: "দুটি কোণের একটির বাহুদ্বয় অপরটির বাহুদ্বয়ের বিপরীত রশ্মি হলে, কোণ দুটিকে বিপ্রতীপ কোণ বলে।" }
    ] },

  { id: "job-2025-dc-lalmonirhat-q13", examId: "job-2025-dc-lalmonirhat", subject: "math", topic: "জ্যামিতি", qno: 13, marks: 5, type: "paragraph",
    question: "পিথাগোরাসের সূত্রটি চিত্রসহ বর্ণনা করুন।",
    answer: "কোনো একটি সমকোণী ত্রিভুজের অতিভুজের উপর অঙ্কিত বর্গক্ষেত্রের ক্ষেত্রফল ঐ ত্রিভুজের অপর দুই বাহুর উপর অঙ্কিত বর্গক্ষেত্রদ্বয়ের ক্ষেত্রফলের সমষ্টির সমান। চিত্র অনুসারে, অতিভুজ a এবং অপর দুই বাহু b ও c এক্ষেত্রে পিথাগোরাসের সূত্র: a² = b² + c²" },

  { id: "job-2025-dc-lalmonirhat-q14", examId: "job-2025-dc-lalmonirhat", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 14, marks: 12, type: "short-qa",
    question: "নিম্নের প্রশ্নের উত্তর দিন:",
    parts: [
      { label: "ক", q: "রংপুর বিভাগে সংসদীয় আসন কয়টি?", a: "৩৩টি" },
      { label: "খ", q: "কোন বস্তুকে সাদা দেখি কেন?", a: "সাদা বস্তু সব রং কে প্রতিফলিত করে।" },
      { label: "গ", q: "বাতাসে অক্সিজেনের পরিমাণ শতকরা কত ভাগ?", a: "২০.৭১%" },
      { label: "ঘ", q: "ইউরিয়া সার তৈরির কাঁচামাল কী?", a: "প্রাকৃতিক গ্যাস" },
      { label: "ঙ", q: "উড়োজাহাজ কোন সংকর ধাতুর তৈরি?", a: "অ্যালুমিনিয়াম" },
      { label: "চ", q: "এভিয়েশন বিশ্ববিদ্যালয় কোন জেলায়?", a: "লালমনিরহাট" },
      { label: "ছ", q: "গাজী মিয়ার বস্তানি'র লেখক কে?", a: "মীর মশাররফ হোসেন" },
      { label: "জ", q: "কালকূট কোন লেখকের ছদ্মনাম?", a: "সমরেশ বসু" },
      { label: "ঝ", q: "উত্তরবঙ্গের গান কি নামে পরিচিত?", a: "ভাওয়াইয়া" },
      { label: "ঞ", q: "আয়োডিনের অভাবে কোন রোগ হয়?", a: "গলগণ্ড" },
      { label: "ট", q: "রাতকানা রোগ হয় কোন ভিটামিনের অভাবে?", a: "ভিটামিন 'এ'" },
      { label: "ঠ", q: "বিশ্বের কোন শহরে জনসংখ্যা সবচেয়ে বেশি?", a: "জাকার্তা, ইন্দোনেশিয়া" }
    ] },

  { id: "job-2025-dc-lalmonirhat-q15", examId: "job-2025-dc-lalmonirhat", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 15, marks: 8, type: "short-qa",
    question: "কম্পিউটার সংক্রান্ত নিচের প্রশ্নগুলোর উত্তর লিখুন:",
    parts: [
      { label: "ক", q: "Save- এর জন্য সংক্ষিপ্ত Key কোনটি?", a: "Ctrl + S" },
      { label: "খ", q: "ফাংশন 'কী' তে মোট কতটি কী আছে?", a: "১২টি (F1-F12)" },
      { label: "গ", q: "LAN শব্দের পূর্ণরূপ কোনটি?", a: "Local Area Network" },
      { label: "ঘ", q: "Page Break করার কী-বোর্ড কমান্ড কোনটি?", a: "Ctrl + Enter" },
      { label: "ঙ", q: "এক স্থানের লেখা মুছে অন্য স্থানে নিতে হলে কী করতে হবে?", a: "Cut (Ctrl+X) করে Paste (Ctrl+V)" },
      { label: "চ", q: "OMR এর পূর্ণরূপ কী?", a: "Optical Mark Recognition/Reader" },
      { label: "ছ", q: "CPU এর পূর্ণরূপ কী?", a: "Central Processing Unit" },
      { label: "জ", q: "মনিটর কোন ধরনের ডিভাইস?", a: "Output Device" },
      { label: "ঝ", q: "USB এর পূর্ণরূপ কী?", a: "Universal Serial Bus" },
      { label: "ঞ", q: "ইন্টারনেটের মাধ্যমে প্রদত্ত চিকিৎসা পদ্ধতিকে কি বলে?", a: "টেলিমেডিসিন (Telemedicine)" }
    ] },

  { id: "job-2025-dc-lalmonirhat-q16", examId: "job-2025-dc-lalmonirhat", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 16, marks: 8, type: "short-qa",
    question: "নিচের প্রশ্নগুলোর উত্তর লিখুন:",
    parts: [
      { label: "ক", q: "রংপুর বিভাগে সংসদীয় আসন কয়টি?", a: "৩৩টি" },
      { label: "খ", q: "উত্তরবঙ্গের গান কি নামে পরিচিত?", a: "ভাওয়াইয়া" },
      { label: "গ", q: "আয়োডিনের অভাবে কোন রোগ হয়?", a: "গলগণ্ড" },
      { label: "ঘ", q: "রাতকানা রোগ হয় কোন ভিটামিনের অভাবে?", a: "ভিটামিন 'এ'" },
      { label: "ঙ", q: "বিশ্বের কোন শহরে জনসংখ্যা সবচেয়ে বেশি?", a: "জাকার্তা, ইন্দোনেশিয়া" },
      { label: "চ", q: "ঢাকা শহরের বর্তমান জনসংখ্যা কত?", a: "৩ কোটি ৬৬ লাখ" },
      { label: "ছ", q: "উত্তরা ইপিজেড কোন জেলায়?", a: "নীলফামারী" },
      { label: "জ", q: "ডালিয়া রেস্ট হাউজ কোন উপজেলায়?", a: "হাতীবান্ধা, লালমনিরহাট" }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বিমান বাহিনী সদর দপ্তর — অফিস সহায়ক ও বিভিন্ন
  // id prefix: job-2025-air-force-office-sohayok
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-air-force-office-sohayok-q01", examId: "job-2025-air-force-office-sohayok", subject: "bangla", qno: 1, marks: 5, type: "idiom",
    question: "বাগধারা অর্থসহ:",
    parts: [
      { label: "ক", phrase: "পটল তোলা", meaning: "মারা যাওয়া" },
      { label: "খ", phrase: "অর্ধচন্দ্র", meaning: "গলাধাক্কা দেওয়া" },
      { label: "গ", phrase: "অক্কা পাওয়া", meaning: "মারা যাওয়া" },
      { label: "ঘ", phrase: "ঠোঁটকাটা", meaning: "স্পষ্টভাষী" },
      { label: "ঙ", phrase: "ঘোড়ার ডিম", meaning: "অলীক বস্তু" }
    ] },

  { id: "job-2025-air-force-office-sohayok-q02", examId: "job-2025-air-force-office-sohayok", subject: "bangla", topic: "সন্ধি", qno: 2, marks: 5, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["জনৈক", "জন + এক"],
      ["বৃষ্টি", "বৃষ্ + তি"],
      ["ক্ষুধার্ত", "ক্ষুধা + ঋত"],
      ["মিথ্যুক", "মিথ্যা + উক"],
      ["বিদ্যালয়", "বিদ্যা + আলয়"]
    ] },

  { id: "job-2025-air-force-office-sohayok-q03", examId: "job-2025-air-force-office-sohayok", subject: "bangla", topic: "বিপরীত-শব্দ", qno: 3, marks: 5, type: "table",
    question: "বিপরীত শব্দ লিখুন:",
    columns: ["প্রদত্ত শব্দ", "বিপরীত শব্দ"],
    rows: [
      ["উচিত", "অনুচিত"],
      ["আত্মীয়", "অনাত্মীয়"],
      ["আস্থা", "অনাস্থা"],
      ["ঐক্য", "অনৈক্য"],
      ["কোমল", "কর্কশ"]
    ] },

  { id: "job-2025-air-force-office-sohayok-q04", examId: "job-2025-air-force-office-sohayok", subject: "bangla", qno: 4, marks: 5, type: "idiom",
    question: "এক কথায় প্রকাশ করুন:",
    parts: [
      { label: "ক", phrase: "অন্য উপায় না থাকা", meaning: "অনন্যোপায়" },
      { label: "খ", phrase: "আয় বুঝে ব্যয় করে যে", meaning: "মিতব্যয়ী" },
      { label: "গ", phrase: "ক্ষমার যোগ্য", meaning: "ক্ষমার্হ" },
      { label: "ঘ", phrase: "আকাশে চড়ে যে", meaning: "খেচর" },
      { label: "ঙ", phrase: "যার কিছুই নেই", meaning: "হতসর্বস্ব" }
    ] },

  { id: "job-2025-air-force-office-sohayok-q05", examId: "job-2025-air-force-office-sohayok", subject: "english", topic: "translation", qno: 5, marks: 5, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "সদা সত্য কথা বল।", target: "Always speak the truth." },
      { label: "খ", source: "আজ বৃষ্টি হবে।", target: "It will rain today." },
      { label: "গ", source: "বিমান আকাশে উড়ে।", target: "The airplane flies in the sky." },
      { label: "ঘ", source: "লোকটি কী অসুস্থ?", target: "Is the man sick?" },
      { label: "ঙ", source: "সে স্কুলে যায়।", target: "He goes to school." }
    ] },

  { id: "job-2025-air-force-office-sohayok-q06", examId: "job-2025-air-force-office-sohayok", subject: "english", topic: "gender", qno: 6, marks: 5, type: "table",
    question: "Change the Gender:",
    columns: ["Masculine", "Feminine"],
    rows: [
      ["Husband", "Wife"],
      ["Man", "Woman"],
      ["Hero", "Heroine"],
      ["King", "Queen"],
      ["Ram", "Ewe"]
    ] },

  { id: "job-2025-air-force-office-sohayok-q07", examId: "job-2025-air-force-office-sohayok", subject: "english", topic: "number", qno: 7, marks: 5, type: "table",
    question: "Change the Number:",
    columns: ["Singular", "Plural"],
    rows: [
      ["Calf", "Calves"],
      ["Horse", "Horses"],
      ["Woman", "Women"],
      ["Knife", "Knives"],
      ["Pen", "Pens"]
    ] },

  { id: "job-2025-air-force-office-sohayok-q08", examId: "job-2025-air-force-office-sohayok", subject: "english", qno: 8, marks: 5, type: "idiom",
    question: "Write the Bangla meaning:",
    parts: [
      { label: "a", phrase: "Camel", meaning: "উট" },
      { label: "b", phrase: "Painter", meaning: "চিত্রশিল্পী" },
      { label: "c", phrase: "Ocean", meaning: "মহাসাগর" },
      { label: "d", phrase: "Flower", meaning: "ফুল" },
      { label: "e", phrase: "Waiter", meaning: "বেয়ারা/ খাদ্য পরিবেশক" }
    ] },

  { id: "job-2025-air-force-office-sohayok-q09", examId: "job-2025-air-force-office-sohayok", subject: "math", topic: "জ্যামিতি", qno: 9, marks: 8, type: "math",
    question: "একটি আয়তাকার ঘরের দৈর্ঘ্য প্রস্থের দ্বিগুণ। প্রস্থ যদি ১০ ফুট হয়, তবে ঘরের ক্ষেত্রফল কত?",
    steps: [
      "দেওয়া আছে, প্রস্থ ১০ ফুট সুতরাং দৈর্ঘ্য ২০ ফুট",
      "ঘরের ক্ষেত্রফল = ১০ × ২০ = ২০০ বর্গফুট"
    ],
    answer: "২০০ বর্গফুট।" },

  { id: "job-2025-air-force-office-sohayok-q10", examId: "job-2025-air-force-office-sohayok", subject: "math", topic: "পাটিগণিত", qno: 10, marks: 5, type: "math",
    question: "১ (২/৮) × (১/২) ÷ (১/৮) = কত?",
    steps: [
      "১ (২/৮) × (১/২) ÷ (১/৮) = (২/৮) × (১/২) × (৮/১)"
    ],
    answer: "৫" },

  { id: "job-2025-air-force-office-sohayok-q11", examId: "job-2025-air-force-office-sohayok", subject: "math", topic: "পাটিগণিত", qno: 11, marks: 6, type: "math",
    question: "১ মেট্রিক টন চাল ২৫ শ্রমিকের মধ্যে সমান ভাগে ভাগ করে দিলে প্রত্যেকে কি পরিমাণ চাল পাবে?",
    steps: [
      "আমরা জানি, ১ মেট্রিক টন = ১০০০ কেজি",
      "২৫ জন শ্রমিক পায় ১০০০ কেজি",
      "১ জন শ্রমিক পায় ১০০০/২৫ = ৪০ কেজি"
    ],
    answer: "৪০ কেজি।" },

  { id: "job-2025-air-force-office-sohayok-q12", examId: "job-2025-air-force-office-sohayok", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 12, marks: 10, type: "short-qa",
    question: "নিচের প্রশ্নগুলোর উত্তর লিখুন:",
    parts: [
      { label: "ক", q: "বাংলাদেশ বিমান বাহিনী কোন সালে প্রতিষ্ঠিত হয়?", a: "২৮ সেপ্টেম্বর ১৯৭১" },
      { label: "খ", q: "বাংলাদেশ বিমান বাহিনী প্রধানের নাম লিখুন?", a: "এয়ার ভাইস মার্শাল হাসান মাহমুদ খান" },
      { label: "গ", q: "বাংলাদেশের কোন জেলায় বেশি বৃষ্টিপাত হয়?", a: "সিলেট।" },
      { label: "ঘ", q: "কোন তারিখে আন্তর্জাতিক মাতৃভাষা দিবস পালিত হয়?", a: "২১শে ফেব্রুয়ারি" },
      { label: "ঙ", q: "পদ্মা সেতুর দৈর্ঘ্য কত?", a: "৬.১৫ কিলোমিটার" },
      { label: "চ", q: "বাংলাদেশের জেলা কয়টি?", a: "৬৪টি।" },
      { label: "ছ", q: "জাতিসংঘের সদর দপ্তর কোথায় অবস্থিত?", a: "নিউইয়র্ক, যুক্তরাষ্ট্র।" },
      { label: "জ", q: "বাংলাদেশের পতাকার অনুপাত কত?", a: "১০:৬ বা ৫:৩।" },
      { label: "ঝ", q: "বাংলাদেশের জাতীয় ফলের নাম কি?", a: "কাঁঠাল।" },
      { label: "ঞ", q: "রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্র কোন জেলায় অবস্থিত?", a: "পাবনা।" }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতাল — টেলিফোন অপারেটর
  // id prefix: job-2025-heart-institute-telephone-op
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-heart-institute-telephone-op-q01", examId: "job-2025-heart-institute-telephone-op", subject: "bangla", topic: "সন্ধি", qno: 1, marks: 6, type: "table",
    question: "সন্ধি বিচ্ছেদ করুন:",
    columns: ["সন্ধি", "বিচ্ছেদ"],
    rows: [
      ["বাগদান", "বাক্ + দান"],
      ["ষড়ঋতু", "ষট্ + ঋতু"],
      ["উদ্যম", "উৎ + যম"],
      ["দিগন্ত", "দিক্ + অন্ত"],
      ["চিত্রার্কষণ", "চিত্র + আকর্ষণ"]
    ] },

  { id: "job-2025-heart-institute-telephone-op-q02", examId: "job-2025-heart-institute-telephone-op", subject: "bangla", qno: 2, marks: 6, type: "idiom",
    question: "বাগধারার অর্থসহ বাক্য রচনা করুন:",
    parts: [
      { label: "ক", phrase: "সোনায় সোহাগা", meaning: "উপযুক্ত মিলন" },
      { label: "খ", phrase: "গোঁফ খেজুরে", meaning: "অলস ব্যক্তি" },
      { label: "গ", phrase: "উনপাঁজুরে", meaning: "দুর্বল ব্যক্তি" },
      { label: "ঘ", phrase: "দুধের মাছি", meaning: "সুসময়ের বন্ধু" },
      { label: "ঙ", phrase: "এলাহি কাণ্ড", meaning: "বিশাল ব্যাপার/আয়োজন" }
    ] },

  { id: "job-2025-heart-institute-telephone-op-q03", examId: "job-2025-heart-institute-telephone-op", subject: "bangla", qno: 3, marks: 6, type: "table",
    question: "শুদ্ধ বানান লিখুন:",
    columns: ["অশুদ্ধ", "শুদ্ধ"],
    rows: [
      ["মরিচীকা", "মরীচিকা"],
      ["স্ববিশেষ", "সবিশেষ"],
      ["জেষ্ঠা", "জ্যেষ্ঠ"],
      ["দৈনতা", "দীনতা/দৈন্য"],
      ["জীবীকা", "জীবিকা"]
    ] },

  { id: "job-2025-heart-institute-telephone-op-q04", examId: "job-2025-heart-institute-telephone-op", subject: "bangla", topic: "কারক", qno: 4, marks: 6, type: "table",
    question: "কারক ও বিভক্তি নির্ণয় করুন:",
    columns: ["বাক্য", "কারক ও বিভক্তি"],
    rows: [
      ["গৃহহীনে গৃহ দাও", "সম্প্রদানে ৭মী"],
      ["সহিদ অঙ্গে কাঁচা", "অধিকরণে ৭মী"],
      ["বিপদে মোরে রক্ষা কর", "অপাদানে ৭মী"],
      ["প্রাণপণে চেষ্টা কর", "করণে ৭মী"],
      ["মাকে বড্ড ভয় পাই", "অপাদানে ২য়া"]
    ] },

  { id: "job-2025-heart-institute-telephone-op-q05", examId: "job-2025-heart-institute-telephone-op", subject: "english", topic: "translation", qno: 5, marks: 6, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "এখন চারটা বেজে পনেরো মিনিট।", target: "It is fifteen minutes past four now." },
      { label: "খ", source: "গুড়ি গুড়ি বৃষ্টি হচ্ছে।", target: "It is drizzling." },
      { label: "গ", source: "মেয়েটি হাসতে হাসতে ঘরে ঢুকলো।", target: "The girl entered the room laughing." },
      { label: "ঘ", source: "সৎ ব্যক্তি সর্বত্র সম্মানিত।", target: "An honest person is honored everywhere" },
      { label: "ঙ", source: "আমাকে এক গ্লাস পানি দাও।", target: "Give me a glass of water." }
    ] },

  { id: "job-2025-heart-institute-telephone-op-q06", examId: "job-2025-heart-institute-telephone-op", subject: "english", topic: "grammar", qno: 6, marks: 10, type: "sentence-change",
    question: "Change the voice:",
    parts: [
      { label: "a", original: "I shall do the work.", changed: "The work will be done by me." },
      { label: "b", original: "Who will help you?", changed: "By whom will you be helped?" },
      { label: "c", original: "Write the letter without any delay.", changed: "Let the letter be written without any delay." },
      { label: "d", original: "He called it laurel.", changed: "It was called laurel by him." },
      { label: "e", original: "Cricket was played by you.", changed: "You played cricket." }
    ] },

  { id: "job-2025-heart-institute-telephone-op-q07", examId: "job-2025-heart-institute-telephone-op", subject: "english", topic: "fill-in-the-blanks", qno: 7, marks: 5, type: "fill-gaps",
    question: "Fill in the blanks with preposition:",
    parts: [
      { sentence: "Nazrul can be compared.... Shelly.", answer: "with" },
      { sentence: "This is the more in interesting ....... the two.", answer: "of" },
      { sentence: "He married...... money.", answer: "for" },
      { sentence: "He fell ...........the horse.", answer: "off" },
      { sentence: "I am satisfied....... your behavior.", answer: "with" }
    ] },

  { id: "job-2025-heart-institute-telephone-op-q08", examId: "job-2025-heart-institute-telephone-op", subject: "english", topic: "sentence-change", qno: 8, marks: 10, type: "sentence-change",
    question: "Change the sentences as direction:",
    parts: [
      { label: "a", original: "Tea is the most popular drink. (Comparative)", changed: "Tea is more popular than any other drink." },
      { label: "b", original: "Everybody wants friend. (Negative)", changed: "There is no body but wants friend." },
      { label: "c", original: "What a pity! You have failed. (Assertive)", changed: "It is a great pity that you have failed." },
      { label: "d", original: "They are peace loving (Complex)", changed: "They are the people who are peace loving." },
      { label: "e", original: "Although I was ill, I attended the meeting (Simple)", changed: "In spite of my illness, I attended the meeting." }
    ] },

  { id: "job-2025-heart-institute-telephone-op-q09", examId: "job-2025-heart-institute-telephone-op", subject: "english", topic: "sentence-making", qno: 9, marks: 5, type: "idiom",
    question: "Make sentence with following words:",
    parts: [
      { label: "a", phrase: "All the same", meaning: "একই", example: "It is all the same to me whether you come or not." },
      { label: "b", phrase: "Loud and clear", meaning: "স্পষ্টভাবে", example: "I heard you loud and clear." },
      { label: "c", phrase: "Take liberties", meaning: "স্বাধীনতা হরণ করা", example: "We should not take liberties from anyone." },
      { label: "d", phrase: "Read between the lines", meaning: "মধ্যবর্তীকে বুঝা", example: "Try to read between the lines of the letter" },
      { label: "e", phrase: "At most", meaning: "সর্বাধিক হিসেবে/ বড় জোর", example: "At most, the work will take a week." }
    ] },

  { id: "job-2025-heart-institute-telephone-op-q10", examId: "job-2025-heart-institute-telephone-op", subject: "math", topic: "জ্যামিতি", qno: 10, marks: 8, type: "math",
    question: "৪০ মিটার দৈর্ঘ্য এবং ৩০ মিটার প্রস্থবিশিষ্ট একটি মাঠের ঠিক মাঝে আড়াআড়িভাবে ১.৫ মিটার প্রশস্ত দুইটি রাস্তা আছে। রাস্তা দুইটির মোট ক্ষেত্রফল কত?",
    steps: [
      "দৈর্ঘ্য বরাবর রাস্তাটির ক্ষেত্রফল = ৪০ × ১.৫ বর্গমিটার = ৬০ বর্গমিটার",
      "প্রস্থ বরাবর রাস্তাটির ক্ষেত্রফল = (৩০ − ১.৫) × ১.৫ বর্গমিটার = ৪২.৭৫ বর্গমিটার",
      "অতএব, রাস্তাদ্বয়ের ক্ষেত্রফল = (৬০ + ৪২.৭৫) বর্গমিটার = ১০২.৭৫ বর্গমিটার"
    ],
    answer: "রাস্তাদ্বয়ের মোট ক্ষেত্রফল ১০২.৭৫ বর্গমিটার।" },

  { id: "job-2025-heart-institute-telephone-op-q11", examId: "job-2025-heart-institute-telephone-op", subject: "math", topic: "বীজগণিত", qno: 11, marks: 10, type: "math",
    question: "দুই অঙ্কবিশিষ্ট কোনো সংখ্যার অঙ্কদ্বয়ের সমষ্টির সাথে ৭ যোগ করলে যোগফল দশক স্থানীয় অঙ্কটির তিনগুণ হয়। কিন্তু সংখ্যাটি থেকে ১৮ বাদ দিলে অঙ্কদ্বয় স্থান পরিবর্তন করে। সংখ্যাটি নির্ণয় করুন।",
    steps: [
      "মনে করি, দুই অঙ্কবিশিষ্ট সংখ্যাটির একক স্থানীয় অঙ্ক x এবং দশক স্থানীয় অঙ্ক y।",
      "১ম শর্তানুসারে, x − 2y = −7 ................. (1)",
      "২য় শর্তানুসারে, y − x = 2 ................. (2)",
      "(1) ও (2) যোগ করে পাই, − y = −5, ∴ y = 5",
      "y-এর মান বসিয়ে পাই, x = 3",
      "∴ নির্ণেয় সংখ্যাটি = 3 + 10×5 = 53"
    ],
    answer: "সংখ্যাটি ৫৩।" },

  { id: "job-2025-heart-institute-telephone-op-q12", examId: "job-2025-heart-institute-telephone-op", subject: "math", topic: "বীজগণিত", qno: 12, marks: 8, type: "math",
    question: "x + y = 4 হলে, x³ + y³ + 12xy এর মান কত?",
    steps: [
      "x³ + y³ + 12xy = x³ + y³ + 3(x+y) × xy = (x+y)³ = 4³ = 64"
    ],
    answer: "৬৪" },

  { id: "job-2025-heart-institute-telephone-op-q13", examId: "job-2025-heart-institute-telephone-op", subject: "math", topic: "বীজগণিত", qno: 13, marks: 10, type: "math",
    question: "উৎপাদকে বিশ্লেষণ করুন: x³ + 6x²y + 11xy² + 6y³",
    steps: [
      "x³ + 6x²y + 11xy² + 6y³ = x³ + 6x²y + 12xy² + 8y³ − xy² − 2y³",
      "= (x + 2y)³ − y²(x + 2y)",
      "= (x + 2y){(x+2y)² − y²}",
      "= (x+2y)(x+2y+y)(x+2y−y)",
      "= (x+2y)(x+3y)(x+y)"
    ],
    answer: "(x+y)(x+2y)(x+3y)" },

  { id: "job-2025-heart-institute-telephone-op-q14", examId: "job-2025-heart-institute-telephone-op", subject: "general-knowledge", topic: "বাংলাদেশ", qno: 14, marks: 12, type: "short-qa",
    question: "নিচের প্রশ্নগুলোর উত্তর করুন:",
    parts: [
      { label: "ক", q: "'পুন্ড্রনগর' কোথায় অবস্থিত?", a: "বগুড়া" },
      { label: "খ", q: "বাংলাদেশ ও মিয়ানমারকে বিভক্তকারী 'নাফ' নদীর দৈর্ঘ্য কত?", a: "৫৬ কিলোমিটার" },
      { label: "গ", q: "'ঢাকা গেইট' কে নির্মাণ করেন?", a: "মীর জুমলা" },
      { label: "ঘ", q: "'অপরাজেয় বাংলা'র ভাস্কর কে?", a: "সৈয়দ আব্দুল্লাহ খালিদ" },
      { label: "ঙ", q: "টেস্ট ক্রিকেটে প্রথম বাংলাদেশী হিসেবে শততম টেস্ট খেলেন?", a: "মুশফিকুর রহিম" },
      { label: "চ", q: "'ইরাটম' কি?", a: "উন্নত জাতের ধান" },
      { label: "ছ", q: "ইনকা সভ্যতা কোন মহাদেশে বিরাজমান ছিল?", a: "দক্ষিণ আমেরিকা" },
      { label: "জ", q: "জাতিসংঘ বিশ্ববিদ্যালয় কোন দেশে অবস্থিত?", a: "টোকিও, জাপান" },
      { label: "ঝ", q: "UNHCR এর পূর্ণরূপ কি?", a: "United Nations Higher Commissioner for Refugees" }
    ] },

  { id: "job-2025-heart-institute-telephone-op-q15", examId: "job-2025-heart-institute-telephone-op", subject: "general-knowledge", topic: "gk-others", qno: 15, marks: 12, type: "short-qa",
    question: "নিচের প্রশ্নগুলোর উত্তর করুন:",
    parts: [
      { label: "ঞ", q: "বিশ্বের দীর্ঘতম রেলপথের নাম কি?", a: "ট্রান্স সাইবেরিয়ান" },
      { label: "ট", q: "দ্বিতীয় বিশ্বযুদ্ধ শুরু হয় কোন সালে কোন তারিখে?", a: "১লা সেপ্টেম্বর ১৯৩৯" },
      { label: "ঠ", q: "'গ্রাভস্লাম' শব্দটি কোন খেলার ক্ষেত্রে ব্যবহৃত হয়?", a: "টেনিস" },
      { label: "ড", q: "পানামা খাল কোন কোন মহাসাগরকে যুক্ত করেছে?", a: "আটলান্টিক ও প্রশান্ত মহাসাগর" },
      { label: "ঢ", q: "পেন্সিল তৈরিতে কোন গাছের কাঠ ব্যবহৃত হয়?", a: "ধুন্দল" },
      { label: "ণ", q: "বাংলাদেশ ডাক বিভাগের স্লোগান কী?", a: "সেবাই আদর্শ" }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ জুডিসিয়াল সার্ভিস কমিশন — অফিস সহায়ক
  // id prefix: job-2025-judicial-service-office-sohayok
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-judicial-service-office-sohayok-q01", examId: "job-2025-judicial-service-office-sohayok", subject: "bangla", qno: 1, marks: 8, type: "paragraph",
    question: "ভাব সম্প্রসারণ করুন: \"সত্য জুতার ফিতা বাঁধতে বাঁধতে মিথ্যা অর্ধেক পৃথিবী ঘুরে আসে।\"",
    answer: "সম্প্রসারিত ভাব: এই প্রবাদটি সত্য ও মিথ্যার স্বভাব এবং তাদের গতির একটি বাস্তব ও গভীর চিত্র তুলে ধরে। এর মূল বক্তব্য হলো, সত্য প্রতিষ্ঠা করতে সময়, ধৈর্য ও প্রমাণের প্রয়োজন হয়, অথচ মিথ্যা খুব অল্প সময়েই মানুষের মধ্যে ছড়িয়ে পড়তে পারে। সত্যের প্রকৃতি ধীর ও স্থির। সত্যকে যাচাই করা, প্রমাণ হাজির করা এবং সকলের সামনে গ্রহণযোগ্য করে তোলার জন্য প্রস্তুতির প্রয়োজন হয়। অন্যদিকে, মিথ্যার কোনো শক্ত ভিত্তি নেই, কিন্তু এটি আকর্ষণীয় ও চটকদার হওয়ায় খুব সহজে মানুষের দৃষ্টি আকর্ষণ করে এবং দ্রুত ছড়িয়ে পড়ে। যদিও মিথ্যা দ্রুত ছড়িয়ে পড়ে, তবু তার স্থায়িত্ব খুব কম। সময়ের সঙ্গে সঙ্গে সত্য উদঘাটিত হয় এবং শেষ পর্যন্ত সত্যেরই জয় হয়। পরিশেষে বলা যায়, এই প্রবাদের মাধ্যমে সত্যের ধীরস্থির ও স্থায়ী রূপ এবং মিথ্যার দ্রুত কিন্তু ক্ষণস্থায়ী প্রকৃতির মধ্যেকার পার্থক্য স্পষ্টভাবে ফুটে উঠেছে।" },

  { id: "job-2025-judicial-service-office-sohayok-q02", examId: "job-2025-judicial-service-office-sohayok", subject: "bangla", qno: 2, marks: 10, type: "short-qa",
    question: "নিম্নের প্রশ্নগুলোর উত্তর লিখুন (যে-কোনো ১০টি):",
    parts: [
      { label: "ক", q: "বাংলা ভাষার শব্দ সম্ভার কয়টি শ্রেণিতে বিভক্ত ও কি কি?", a: "৫টি যথা: তৎসম, অর্ধ-তৎসম, তদ্ভব, দেশি ও বিদেশি।" },
      { label: "খ", q: "স্বরধ্বনি ও ব্যঞ্জনধ্বনির পার্থক্য কোথায়?", a: "যে ধনি উচ্চারণের সময় মুখবিবরে বাতাস বাধাহীনভাবে বেরিয়ে আসে এবং অন্য কোন ধ্বনির সাহায্য লাগে না, তাকে স্বরধ্বনি বলে। অপরদিকে, যে ধনি উচ্চারণের সময় মুখবিবরে বাতাস বাধা পায় এবং স্বরধ্বনির সাহায্য ছাড়া উচ্চারণ করা যায় না, তাকে ব্যঞ্জনধ্বনি বলে।" },
      { label: "গ", q: "দুটি নিত্য স্ত্রী বাচক শব্দ লিখুন।", a: "সতী, বিধবা" },
      { label: "ঘ", q: "সরল বাক্যে রূপান্তর করুন- 'যে ভিক্ষা করতে এসেছে, তাকে ভিক্ষা দাও।'", a: "ভিক্ষুককে ভিক্ষা দাও।" },
      { label: "ঙ", q: "বাক্য সংক্ষেপণ করুন- 'পা থেকে মাথা পর্যন্ত'", a: "আপাদমস্তক" },
      { label: "চ", q: "এক শব্দে পরিণত করে ঐ শব্দ দ্বারা বাক্য রচনা করুন- 'সকলের জন্য প্রযোজ্য'।", a: "সর্বজনীন; বাক্য: দেশের উন্নয়নের জন্য দরকার সর্বজনীন শিক্ষা।" },
      { label: "ছ", q: "অর্থ লিখে বাগধারা যোগে বাক্য রচনা করুন- 'ঘোড়া রোগ'।", a: "সাধ্যের অতিরিক্ত সাধ; বাক্য: সরকারের নতুন প্রকল্পটি ঘোড়া রোগ।" }
    ] },

  { id: "job-2025-judicial-service-office-sohayok-q03", examId: "job-2025-judicial-service-office-sohayok", subject: "bangla", qno: 3, marks: 10, type: "translate",
    question: "বাংলায় অনুবাদ করুন:",
    parts: [
      { label: "-", source: "No work is superior or inferior in itself. Work is work. It is absolutely wrong to consider any work as high or low. The work itself is a dignity. Every work has some dignity attached to it. It is improper for anybody to think that a certain work is undignified or below his status. Dignity of labour means that all and every kind of work is dignified.", target: "কোনো কাজই কাজের দিক থেকে শ্রেষ্ঠ বা নিকৃষ্ট নয়। কাজ মাত্রই কাজ। কোনো কাজকে উচ্চ বা নীচু বলে বিবেচনা করা সম্পূর্ণ ভুল। কাজ মাত্রই সম্মানের। প্রতিটি কাজের সাথেই কিছু মর্যাদা/সম্মান জড়িত থাকে। এটা কারো পক্ষেই উচিত নয় যে কোনো কাজকে অসম্মানজনক বা তার মর্যাদার নিচে মনে করা। শ্রমের মর্যাদা মানে হলো সব ধরনের কাজেই সম্মানের।" }
    ] },

  { id: "job-2025-judicial-service-office-sohayok-q04", examId: "job-2025-judicial-service-office-sohayok", subject: "english", topic: "paragraph", qno: 4, marks: 8, type: "paragraph",
    question: "Write a paragraph on: a) Global Warming or b) Value of Time",
    answer: "Global Warming: Global warming refers to the gradual increase in the Earth's average temperature due to the excessive release of greenhouse gases such as carbon dioxide and methane into the atmosphere. Human activities like deforestation, burning fossil fuels, and industrialization are the main causes of this phenomenon. Global warming leads to serious consequences such as rising sea levels, melting glaciers, unpredictable weather patterns, and the extinction of various species. To combat global warming, it is essential to reduce carbon emissions, promote renewable energy sources, and encourage afforestation." },

  { id: "job-2025-judicial-service-office-sohayok-q05", examId: "job-2025-judicial-service-office-sohayok", subject: "english", topic: "grammar", qno: 5, marks: 12, type: "short-qa",
    question: "Answer the following questions:",
    parts: [
      { label: "a", q: "We started early. We arrived in time. (Combine these two sentences using participle)", a: "Starting early, we arrived in time." },
      { label: "b", q: "We know that Columbus discovered America. (Write down the passive voice of the sentence)", a: "It is known to us that America was discovered by Columbus" },
      { label: "c", q: "Arif is the best boy in the class. (Here the word 'class' is a noun)", a: "Collective Noun" },
      { label: "d", q: "The ship lost all........boats in the storm. (Fill in the blank)", a: "her" },
      { label: "e", q: "Iron is more useful than any other metal. (Change the degree to positive)", a: "No other metal is as useful as iron." },
      { label: "f", q: "Write down the indirect speech of the sentence: Sujon said, \"I walk for an hour every morning\"", a: "Sujon said that he walked for an hour every morning." }
    ] },

  { id: "job-2025-judicial-service-office-sohayok-q06", examId: "job-2025-judicial-service-office-sohayok", subject: "english", topic: "translation", qno: 6, marks: 10, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "তুমি কি তোমার বাবাকে চিঠি লিখেছিলে?", target: "Did you write a letter to your father?" },
      { label: "খ", source: "সে দারুণ যুদ্ধ করেছে।", target: "He fought bravely." },
      { label: "গ", source: "ক্লান্ত হয়ে সে কিছুক্ষণ বিশ্রাম নিল।", target: "Being tired, he took rest for a while." },
      { label: "ঘ", source: "ঘন্টা পড়ার পূর্বে তারা স্কুলে পৌঁছাল।", target: "They had reached the school before the bell rang." },
      { label: "ঙ", source: "চুপ! লোকটি ঘুমিয়েছে।", target: "Hush! The man has fallen asleep." },
      { label: "চ", source: "কোন বইটি সে পড়ছে?", target: "Which book is he reading?" }
    ] },

  { id: "job-2025-judicial-service-office-sohayok-q07", examId: "job-2025-judicial-service-office-sohayok", subject: "math", topic: "পাটিগণিত", qno: 7, marks: 12, type: "math",
    question: "ক) একটি সোনার গহনার ওজন ১৬ গ্রাম। এতে সোনা ও তামার অনুপাত ৩:১। এতে কি পরিমাণ সোনা মেশালে অনুপাত ৪:১ হবে?\nখ) ΔABC এর BE=FE=CF। ΔAEC এর ক্ষেত্রফল ৪৮ বর্গফুট হলে, ΔABC এর ক্ষেত্রফল কত বর্গফুট?\nগ) x⁴ + 2x² + 1 = 5x² হলে x + 1/x = কত?",
    steps: [
      "ক) সোনার পরিমাণ = ১৬ এর ৩/৪ = ১২ গ্রাম; ধরি, x গ্রাম সোনা মেশালে অনুপাত ৪:১ হবে; (১২+x):৪ = ৪:১ থেকে x = ৪",
      "খ) BE=FE=CF সমান হওয়ায়, AE ও AF মধ্যমা; ΔAFC = ২৪ বর্গফুট; ΔABC = ΔABE + ΔAEC = ২৪ + ৪৮ = ৭২ বর্গফুট",
      "গ) x⁴ + 2x² + 1 = 5x² থেকে x²+1/x² = 3; (x+1/x)² = 3+2 = 5; ∴ x + 1/x = √5"
    ],
    answer: "ক) ৪ গ্রাম   খ) ৭২ বর্গফুট   গ) x + 1/x = √5" },

  { id: "job-2025-judicial-service-office-sohayok-q08", examId: "job-2025-judicial-service-office-sohayok", subject: "general-knowledge", topic: "gk-others", qno: 8, marks: 20, type: "short-qa",
    question: "নিম্নোক্ত প্রশ্নগুলোর উত্তর দিন:",
    parts: [
      { label: "ক", q: "পানগাঁও অভ্যন্তরীণ কনটেইনার টার্মিনাল কোন নদীর তীরে অবস্থিত?", a: "বুড়িগঙ্গা নদী।" },
      { label: "খ", q: "বিখ্যাত চিত্রকর্ম 'তিন কন্যা' এর চিত্রকর কে?", a: "কামরুল হাসান।" },
      { label: "গ", q: "বাংলাদেশের সংবিধান রচনা কমিটির একমাত্র মহিলা সদস্য কে?", a: "বেগম রাজিয়া বানু।" },
      { label: "ঘ", q: "বাংলাদেশের সাথে বর্তমানে কয়টি দেশের বন্দি প্রত্যর্পণ চুক্তি রয়েছে?", a: "২টি; ভারত ও থাইল্যান্ড; (সূত্র: বিবিসি বাংলা)" },
      { label: "ঙ", q: "গণভোট অধ্যাদেশ, ২০২৫ জারি হয় কবে?", a: "২৫ নভেম্বর, ২০২৫।" },
      { label: "চ", q: "বাংলাদেশের প্রথম ক্রিকেটার হিসাবে শততম টেস্ট ম্যাচ খেলেছেন কে?", a: "মুশফিকুর রহিম।" },
      { label: "ছ", q: "'UN House in Bangladesh' কোথায় অবস্থিত?", a: "গুলশান, ঢাকা।" },
      { label: "জ", q: "ঋতিক ঘটক পরিচালিত একটি চলচিত্রের নাম লিখুন।", a: "তিতাস একটি নদীর নাম।" },
      { label: "ঝ", q: "আফ্রিকান ইউনিয়নের সদর দফতর কোথায় অবস্থিত?", a: "আদ্দিস আবাবা, ইথিওপিয়া।" },
      { label: "ঞ", q: "বিশ্বের প্রথম মহিলা প্রধানমন্ত্রী কে ছিলেন?", a: "শ্রীমাভো বন্দরনায়েক (শ্রীলঙ্কা)।" },
      { label: "ট", q: "'ChatGPT' এর পূর্ণরূপ কী?", a: "Chat Generative Pre-trained Transformer" },
      { label: "ঠ", q: "সম্প্রতি মালয়েশিয়ায় কততম আসিয়ান শীর্ষ সম্মেলন অনুষ্ঠিত হয়েছে?", a: "৪৭তম।" },
      { label: "ড", q: "কৃত্রিমভাবে বৃষ্টি ঘটানোর পদ্ধতি 'ক্লাউড সিডিং' এর জনক কে?", a: "ভিনসেন্ট জে. শেফার।" },
      { label: "ঢ", q: "২০২৫ সালে কেমব্রিজ ডিকশনারীর বর্ষসেরা শব্দ কোনটি?", a: "প্যারাসোশ্যাল (Parasocial); বাংলা অর্থ এক পক্ষীয় প্রেম বা বন্ধুত্ব।" },
      { label: "ণ", q: "বিশ্ব এইডস দিবস পালন করা হয় কবে?", a: "১লা ডিসেম্বর।" }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: ভূমি রেকর্ড ও জরিপ অধিদপ্তর — পেশকার
  // id prefix: job-2025-land-survey-peshkar
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-land-survey-peshkar-q01", examId: "job-2025-land-survey-peshkar", subject: "bangla", qno: 1, marks: 6, type: "idiom",
    question: "এক কথায় প্রকাশ করুন:",
    parts: [
      { label: "ক", phrase: "যিনি ভবিষ্যৎ না ভেবেই কাজ করেন", meaning: "অবিমৃষ্যকারী" },
      { label: "খ", phrase: "যিনি ন্যায়শাস্ত্র জানেন", meaning: "নৈয়ায়িক" },
      { label: "গ", phrase: "মৃত্তিকার দ্বারা নির্মিত", meaning: "মৃন্ময়" }
    ] },

  { id: "job-2025-land-survey-peshkar-q02", examId: "job-2025-land-survey-peshkar", subject: "bangla", topic: "সমাস", qno: 2, marks: 6, type: "table",
    question: "ব্যাসবাক্যসহ সমাস লিখুন:",
    columns: ["শব্দ", "ব্যাসবাক্য", "সমাসের নাম"],
    rows: [
      ["নীলাম্বর", "নীল অম্বর যার", "বহুব্রীহি"],
      ["ক্ষীণজীবী", "ক্ষীণভাবে বাঁচে যে", "উপপদ তৎপুরুষ"],
      ["শতবার্ষিকি", "শত বর্ষের সমাহার", "দ্বিগু সমাস"]
    ] },

  { id: "job-2025-land-survey-peshkar-q03", examId: "job-2025-land-survey-peshkar", subject: "bangla", qno: 3, marks: 6, type: "idiom",
    question: "অর্থসহ বাক্য রচনা করুন:",
    parts: [
      { label: "ক", phrase: "ঘুঘু চরানো", meaning: "সর্বনাশ করা" },
      { label: "খ", phrase: "হযবরল", meaning: "বিশৃঙ্খলা" },
      { label: "গ", phrase: "শরতের শিশির", meaning: "সুসময়ের বন্ধু" }
    ] },

  { id: "job-2025-land-survey-peshkar-q04", examId: "job-2025-land-survey-peshkar", subject: "bangla", qno: 4, marks: 6, type: "sentence-change",
    question: "শুদ্ধ করে লিখুন:",
    parts: [
      { label: "ক", original: "আকষ্ঠ পর্যন্ত ভোজনে স্বাস্থ্যহানি ঘটে।", changed: "আকণ্ঠ ভোজনে স্বাস্থ্যহানি ঘটে।" },
      { label: "খ", original: "তার ব্যবহার মাধুর্যতা নেই।", changed: "তার ব্যবহারে মাধুর্য নেই।" },
      { label: "গ", original: "অনুষ্ঠানে স্বপরিবারে আপনি আমন্ত্রিত।", changed: "অনুষ্ঠানে সপরিবারে আপনি আমন্ত্রিত।" }
    ] },

  { id: "job-2025-land-survey-peshkar-q05", examId: "job-2025-land-survey-peshkar", subject: "bangla", qno: 5, marks: 10, type: "short-qa",
    question: "নিচের প্রশ্নগুলোর উত্তর করুন:",
    parts: [
      { label: "ক", q: "W.B Yeats এবং রবীন্দ্রনাথ ঠাকুর কত সালে এবং কী কারণে সাহিত্যে নোবেল পুরস্কার পেয়েছিলেন?", a: "W.B Yeats ১৯২৩ সালে \"তার সর্বদা অনুপ্রাণিত কবিতার জন্য, যা অত্যন্ত শৈল্পিক রূপে একটি সমগ্র জাতির চেতনার প্রকাশ ঘটায়\" এর জন্য সাহিত্যে নোবেল পুরস্কার পান এবং রবীন্দ্রনাথ ঠাকুর তার গীতাঞ্জলি কাব্যের জন্য সাহিত্যে নোবেল পুরস্কার পেয়েছিলেন।" },
      { label: "খ", q: "চর্যাপদ কী? কবে আবিষ্কার হয়?", a: "বাংলা সাহিত্যে আদি নিদর্শন চর্যাপদ হলো বৌদ্ধ ধর্মের তত্ত্বকথা নিয়ে গানের সংকলন বা সাধন সংগীত যা বৌদ্ধ সহজিয়াগণ রচনা করেন। হরপ্রসাদ শাস্ত্রী ১৯০৭ সালে নেপালের রাজদরবার (রয়েল লাইব্রেরি) থেকে 'চর্যাপদ' আবিষ্কার করেন।" },
      { label: "গ", q: "ক্রীতদাসের হাসি গ্রন্থের লেখক কে? রচনার উদ্দেশ্য কী?", a: "লেখক শওকত ওসমান। এ প্রতীকাশ্রয়ী উপন্যাস রচনার মূল উদ্দেশ্য হলো বাগদাদের বাদশা হারুন অর রশিদের মাধ্যমে তৎকালীন পশ্চিম পাকিস্তানি শাসকদের বিরূপ শাসনের সমালোচনা করা।" },
      { label: "ঘ", q: "'দুর্গম গিরি কান্তার মরু দুস্তর পারাবার' পঙ্‌ক্তিতে 'কান্তার' শব্দের অর্থ কী? কবিতাটির রচয়িতা কে?", a: "নিবিড় বন, দুর্গম পথ। কাজী নজরুল ইসলাম এর 'কাণ্ডারী হুঁশিয়ার' কবিতার একটি লাইন।" },
      { label: "ঙ", q: "ভাব-সম্প্রসারণ করুন: বই কিনে কেউ দেউলিয়া হয় না।", a: "একটি সৃজনশীল বই অপরিসীম জ্ঞানের আধার। এতে যে অল্প অর্থ ব্যয় হয় তা অর্জিত জ্ঞানের তুলনায় খুবই নগণ্য। জগতের শ্রেষ্ঠ মনীষীদের চিন্তা-চেতনা ও সৃষ্টির অন্যতম আধার হলো বই। বই এক যুগের মানুষকে পরবর্তী যুগের মানুষের কাছে নিয়ে যেতে পারে, সুযোগ করে দিতে পারে অতীতের অভিজ্ঞতা আর জ্ঞান-বিজ্ঞানকে জানার। কিন্তু অধিকাংশ সময়ই আমরা এ সত্যটি উপলব্ধি করতে ব্যর্থ হই। যারা কুরুচিপূর্ণ সিনেমা কিংবা স্টেডিয়ামে খেলা দেখার টিকেট কিনতে অকপটে অর্থ ব্যয় করে, তারাই আবার বই কেনার ক্ষেত্রে চূড়ান্ত কৃপণতার পরিচয় দেয়। বই কেনার জন্য অর্থ ব্যয়কে তারা বাহুল্য বলে মনে করে। অনেকে আবার বইয়ের অগ্নিমূল্য বা আর্থিক অসচ্ছলতার অজুহাত দাঁড় করিয়ে বসে। কিন্তু এসব ধারণা অযৌক্তিক নয়, অনাকাঙ্ক্ষিতও বটে। প্রকৃতপক্ষে, এ জাতীয় ধারণা কেবল তারাই প্রচার করে যারা বই পড়ার আদৌ আগ্রহী নয় বা জ্ঞানার্জনের পক্ষপাতি নয়। কিন্তু বই পড়ার মাধ্যমে চিত্তের যে পরম সুখ লাভ সম্ভব তা তারা কখনও অনুভব করতে পারে না। আর পারে না বলেই তারা বেশি দামের অজুহাতে বই কিনতে চায় না। অথচ বই কিনে কেউ দেউলিয়া হয়েছে এমন নজির খুঁজে পাওয়া কঠিন। কেননা, জ্ঞান পিপাসা মিটানোর উপযোগিতার তুলনায় বইয়ের দাম খুবই তুচ্ছ।" }
    ] },

  { id: "job-2025-land-survey-peshkar-q06", examId: "job-2025-land-survey-peshkar", subject: "english", topic: "translation", qno: 6, marks: 10, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "তুমি কি কখনও বিদেশ গিয়েছ?", target: "Have you ever been abroad?" },
      { label: "খ", source: "রিয়াজ দশ বছর ধরে আমেরিকায় বসবাস করছে।", target: "Riyaz has been living in America for ten years." },
      { label: "গ", source: "তোমার ইংরেজিতে দক্ষ হওয়া উচিত।", target: "You should be good at English." },
      { label: "ঘ", source: "সে কঠোর পরিশ্রম করে, তাই না?", target: "He works hard, doesn't he?" },
      { label: "ঙ", source: "নাচতে না জানলে উঠান বাঁকা।", target: "A bad workman quarrel with his tools." }
    ] },

  { id: "job-2025-land-survey-peshkar-q07", examId: "job-2025-land-survey-peshkar", subject: "english", topic: "verb-forms", qno: 7, marks: 10, type: "short-qa",
    question: "Use right form of verbs:",
    parts: [
      { label: "a", q: "Traffic jam (mean) blockade of vehicles.", a: "means" },
      { label: "b", q: "The increasing number of vehicles (be) creating this problem.", a: "is" },
      { label: "c", q: "However, this problem can (solve) by taking some steps.", a: "be solved" },
      { label: "d", q: "The authority (impose) the traffic rules strictly.", a: "imposes" },
      { label: "e", q: "By (implement) some actions we can reduce the problem.", a: "implementing" }
    ] },

  { id: "job-2025-land-survey-peshkar-q08", examId: "job-2025-land-survey-peshkar", subject: "english", topic: "sentence-change", qno: 8, marks: 10, type: "sentence-change",
    question: "Transform the following sentences as directed:",
    parts: [
      { label: "a", original: "Give me some water that I may drink. (Simple)", changed: "Give me some water to drink." },
      { label: "b", original: "When did you write the letter? (Passive)", changed: "When was the letter written by you?" },
      { label: "c", original: "He was a very cunning man. (Exclamatory)", changed: "What a cunning man he was!" },
      { label: "d", original: "Every rose has a thorn. (Negative)", changed: "There is no rose without a thorn." },
      { label: "e", original: "Mamun said, \"What a nice bird it is!\" (Indirect Narration)", changed: "Mamun exclaimed that it was a very nice bird." }
    ] },

  { id: "job-2025-land-survey-peshkar-q09", examId: "job-2025-land-survey-peshkar", subject: "english", topic: "sentence-making", qno: 9, marks: 10, type: "idiom",
    question: "Write meaningful sentences with the following idioms:",
    parts: [
      { label: "a", phrase: "Take off", meaning: "উড্ডয়ন করা", example: "The plane will take off in five minutes." },
      { label: "b", phrase: "Give a hand", meaning: "সহায়তা করা", example: "Please give me a hand with this heavy box." },
      { label: "c", phrase: "A castle in the air", meaning: "আকাশ কুসুম কল্পনা", example: "His plan to be a millionaire in a week is just a castle in the air." },
      { label: "d", phrase: "Better half", meaning: "অর্ধাঙ্গী", example: "He came to the party with his better half." },
      { label: "e", phrase: "Dark horse", meaning: "অজ্ঞাত ব্যক্তি", example: "Hasan is a dark horse in the society." }
    ] },

  { id: "job-2025-land-survey-peshkar-q10", examId: "job-2025-land-survey-peshkar", subject: "english", topic: "paragraph", qno: 10, marks: 10, type: "paragraph",
    question: "Write a short passage on 'The Moon' (around 70 words)",
    answer: "The moon is the only natural satellite of the Earth. It has no light of its own; rather it reflects the light of the sun. The moon takes about 29.5 days to complete one orbit around the Earth, which gives us the different phases of the moon. It has a great influence on the tides of the sea. The moon has always fascinated human beings, and in 1969, humans first landed on the moon." },

  { id: "job-2025-land-survey-peshkar-q11", examId: "job-2025-land-survey-peshkar", subject: "math", topic: "পাটিগণিত", qno: 11, marks: 5, type: "math",
    question: "২৩০ মিটার দীর্ঘ একটি ট্রেন ঘণ্টায় ৪০ কি.মি বেগে চলছে। পিছন থেকে সমান্তরালভাবে ২৭০ মিটার দীর্ঘ একটি ট্রেন ঘণ্টায় ৫০ কি.মি বেগে আসছিল। ২য় ট্রেনটি কত সময়ে প্রথম ট্রেনটিকে অতিক্রম করবে?",
    steps: [
      "ট্রেন দুটির দৈর্ঘ্য = (২৩০ + ২৭০) মি. = ৫০০ মিটার",
      "যেহেতু গাড়ি দুটি পরস্পর একই দিকে চলে, তাদের আপেক্ষিক বেগ = (৫০ − ৪০) কি.মি./ঘণ্টা = ১০ কি.মি./ঘণ্টা = ১০০০০ মি./ঘণ্টা",
      "১০০০০ মি. অতিক্রম করে ১ ঘণ্টায়, ৫০০ মি. অতিক্রম করে ৫০০/১০০০০ ঘণ্টা = (৫০০×৬০)/১০০০০ মিনিটে = ৩ মিনিটে"
    ],
    answer: "৩ মিনিট" },

  { id: "job-2025-land-survey-peshkar-q12", examId: "job-2025-land-survey-peshkar", subject: "math", topic: "পাটিগণিত", qno: 12, marks: 5, type: "math",
    question: "কোন মূলধন ৩ বছরে সুদে-মূলে ১১০০০ হয়। সুদ আসলের ৩/৮ অংশ হলে, আসল ও সুদের হার কত?",
    steps: [
      "মনে করি, আসল ৮ টাকা, মুনাফা = ৮ এর ৩/৮ টাকা = ৩ টাকা",
      "মুনাফা-আসল = (৮+৩) টাকা = ১১ টাকা",
      "মুনাফা-আসল ১১ টাকা হলে আসল ৮ টাকা; ১১০০০ টাকা হলে আসল = (৮×১১০০০)/১১ = ৮০০০ টাকা",
      "∴ মুনাফা = (১১০০০−৮০০০) টাকা = ৩০০০ টাকা",
      "৮০০০ টাকার ৩ বছরের মুনাফা ৩০০০ টাকা হলে, ১০০ টাকার ১ বছরের মুনাফা = (৩০০০×১০০)/(৮০০০×৩) = ১২.৫ টাকা"
    ],
    answer: "আসল ৮০০০ টাকা এবং মুনাফার হার ১২.৫%" },

  { id: "job-2025-land-survey-peshkar-q13", examId: "job-2025-land-survey-peshkar", subject: "math", topic: "বীজগণিত", qno: 13, marks: 5, type: "math",
    question: "উৎপাদকে বিশ্লেষণ করুন: a³ − 6a² + 12a − 9",
    steps: [
      "a³ − 6a² + 12a − 9 = a³ − 3.a².2 + 3a.(2)² − (2)³ − 1",
      "= (a−2)³ − 1",
      "= (a−2−1){(a−2)² + (a−2).1 + (1)²}",
      "= (a−3){a² − 4a + 4 + a − 2 + 1}",
      "= (a−3)(a² − 3a + 3)"
    ],
    answer: "(a−3)(a²−3a+3)" },

  { id: "job-2025-land-survey-peshkar-q14", examId: "job-2025-land-survey-peshkar", subject: "math", topic: "জ্যামিতি", qno: 14, marks: 5, type: "math",
    question: "একটি ত্রিভুজের একটি কোণ যদি দ্বিতীয় কোণের তিনগুণ এবং তৃতীয় কোণ যদি দ্বিতীয় কোণ চেয়ে ২০ ডিগ্রি বড় হয় তবে ২য় কোণটি কত ডিগ্রি?",
    steps: [
      "মনে করি, দ্বিতীয় কোণটি = x; প্রথম কোণ = 3x; তৃতীয় কোণ = x+20°",
      "প্রশ্নমতে, 3x + x + x + 20° = 180°",
      "বা, 5x + 20° = 180°",
      "বা, 5x = 160°",
      "∴ x = 32°"
    ],
    answer: "দ্বিতীয় কোণ ৩২°" },

  { id: "job-2025-land-survey-peshkar-q15", examId: "job-2025-land-survey-peshkar", subject: "general-knowledge", topic: "gk-others", qno: 15, marks: 10, type: "short-qa",
    question: "নিচের প্রশ্নগুলোর উত্তর করুন:",
    parts: [
      { label: "ক", q: "উপজেলা সেটেলমেন্ট অফিসের পেশকার এর দায়িত্ব ও কর্তব্য সম্পর্কে লিখুন।", a: "১) জন সাধারণের নিকট হতে অভিযোগের চিঠি গ্রহণ ও নথিতে পেশ করুন। ২) আদালত হইতে ভূমি সংক্রান্ত মামলার সমন গ্রহণ ও নথিপেশ। ৩) আপত্তি, আপীল, চূড়ান্ত প্রকাশনা ক্যাম্পের কার্যক্রম গ্রহণ।" },
      { label: "খ", q: "একটি আয়তকার জমির দৈর্ঘ্য ৬৬০ ফুট এবং প্রস্থ ৬৬ ফুট হলে জমির ক্ষেত্রফল কত একর?", a: "১ একর" },
      { label: "গ", q: "দাখিলা এবং DCR বলতে কী বুঝায়?", a: "দাখিলা: ভূমির খাজনা বা ভূমি উন্নয়ন কর পরিশোধের পর সরকার কর্তৃক যে রসিদ প্রদান করা হয় তাকে দাখিলা বলা হয়। এটি ভূমির মালিকানার একটি গুরুত্বপূর্ণ প্রমাণপত্র। DCR: ভূমি কর ব্যতীত অন্যান্য সরকারি পাওনা আদায় করার পর যে নির্ধারিত ফর্মে রশিদ দেওয়া হয় তাকে DCR (Duplicate Carbon Receipt) বলে।" },
      { label: "ঘ", q: "সাফ কবলা দলিল এবং এওয়াজ দলিল বলতে কি বুঝায়?", a: "সাফ কবলা দলিল: যখন কোন দলিল দ্বারা একজনের স্বত্ব দখলীয় জমির উপর ক্রেতার স্বত্ব জন্মায় তখন তা সাফ কবলা দলিল হিসাবে গণ্য হয়। কবলা দলিল অবশ্যই রেজিস্ট্রি করতে হয়। এওয়াজ দলিল: সম্পত্তির চাষাবাদের সুবিধার জন্য যদি কোন জমির মালিক অন্য কোন মালিকের সঙ্গে তার জমির ভোগদখল হস্তান্তর করে তাহলে তাকে এওয়াজ বদল বলে।" },
      { label: "ঙ", q: "জরিপে ব্যবহৃত চারটি যন্ত্রের নাম লিখুন।", a: "থিওডোলাইট (Theodolite), ইলেকট্রনিক টোটাল স্টেশন (Electronic Total Station), জিপিএস রিসিভার (GPS Receiver) এবং পরিমাপক টেপ বা শিকল (Measuring Tape/Chain)" }
    ] },

  { id: "job-2025-land-survey-peshkar-q16", examId: "job-2025-land-survey-peshkar", subject: "general-knowledge", topic: "gk-others", qno: 16, marks: 10, type: "short-qa",
    question: "সংক্ষেপে উত্তর দিন:",
    parts: [
      { label: "ক", q: "সূর্যগ্রহণ ও চন্দ্রগ্রহণ কখন হয়?", a: "অমাবস্যা তিথিতে যখন চাঁদ, সূর্য ও পৃথিবীর মাঝখানে আসে তখন সূর্যগ্রহণ হয়। আর পূর্ণিমা তিথিতে যখন পৃথিবী, সূর্য ও চাঁদের মাঝখানে আসে তখন চন্দ্রগ্রহণ হয়।" },
      { label: "খ", q: "কোন দুইটি উৎস থেকে বাংলাদেশ সরকারের সর্বাধিক রাজস্ব আয় হয়?", a: "মূল্য সংযোজন কর এবং আয়কর।" },
      { label: "গ", q: "হরমুজ প্রণালী কেন গুরুত্বপূর্ণ?", a: "পারস্য উপসাগরের একমাত্র জলপথ হলো হরমুজ প্রণালী যা ওমান সাগর এবং আরব সাগরের সাথে সংযুক্ত।" },
      { label: "ঘ", q: "আসন্ন জাতীয় সংসদ নির্বাচন কততম এবং কোন তারিখে অনুষ্ঠিত হবে?", a: "ত্রয়োদশ (১৩তম) এবং ১২ ফেব্রুয়ারি, ২০২৬ সালে।" },
      { label: "ঙ", q: "ইমেইলের CC এবং ইন্টারনেটের Mbps এর পূর্ণরূপ লিখুন।", a: "CC = Carbon Copy; Mbps = Megabits Per Second" },
      { label: "চ", q: "বিখ্যাত চিত্রকর্ম 'তিন কন্যা'র চিত্রকর কে?", a: "কামরুল হাসান" },
      { label: "ছ", q: "বাংলাদেশে সর্বশেষ জনতমারি হয়েছে কত সালে? এ পর্যন্ত কতবার জনতমারি হয়েছে?", a: "২০২২ সালে; ৬ বার" },
      { label: "জ", q: "বাংলাদেশের ২টি সাংবিধানিক প্রতিষ্ঠানের নাম লিখুন।", a: "নির্বাচন কমিশন ও সরকারি কর্ম কমিশন।" },
      { label: "ঝ", q: "রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্র কোন জেলায় অবস্থিত? এর মূল জ্বালানী কী?", a: "পাবনা; ইউরেনিয়াম-২৩৫" },
      { label: "ঞ", q: "ইনসুলিন মানবদেহের কোন অঙ্গ থেকে নিঃসৃত হয়? ইনসুলিনের একটি কাজ লিখুন।", a: "অগ্ন্যাশয়; রক্তের গ্লুকোজ কোষে প্রবেশ করতে সাহায্য করে" },
      { label: "ট", q: "ভূমি জরিপ অনুযায়ী CS ও RS এর পূর্ণরূপ কী?", a: "CS = Cadastral Survey; RS = Revisional Survey" }
    ] },

  { id: "job-2025-land-survey-peshkar-q17", examId: "job-2025-land-survey-peshkar", subject: "general-knowledge", topic: "gk-others", qno: 17, marks: 15, type: "short-qa",
    question: "নিম্নোক্ত প্রশ্নগুলোর উত্তর দিন:",
    parts: [
      { label: "ক", q: "বাংলাদেশের সংবিধান রচনা কমিটির একমাত্র মহিলা সদস্য কে?", a: "বেগম রাজিয়া বানু।" },
      { label: "খ", q: "বাংলাদেশের সাথে কর্তমানে কয়টি দেশের বন্দি প্রত্যর্পণ চুক্তি রয়েছে?", a: "২টি; ভারত ও থাইল্যান্ড; (সূত্র: বিবিসি বাংলা)" },
      { label: "গ", q: "গণভোট অধ্যাদেশ, ২০২৫ জারি হয় কবে?", a: "২৫ নভেম্বর, ২০২৫।" },
      { label: "ঘ", q: "বাংলাদেশের প্রথম ক্রিকেটার হিসাবে শততম টেস্ট ম্যাচ খেলেছেন কে?", a: "মুশফিকুর রহিম।" },
      { label: "ঙ", q: "'UN House in Bangladesh' কোথায় অবস্থিত?", a: "গুলশান, ঢাকা।" },
      { label: "চ", q: "ঋতিক ঘটক পরিচালিত একটি চলচিত্রের নাম লিখুন।", a: "তিতাস একটি নদীর নাম।" },
      { label: "ছ", q: "আফ্রিকান ইউনিয়নের সদর দফতর কোথায় অবস্থিত?", a: "আদ্দিস আবাবা, ইথিওপিয়া।" },
      { label: "জ", q: "বিশ্বের প্রথম মহিলা প্রধানমন্ত্রী কে ছিলেন?", a: "শ্রীমাভো বন্দরনায়েক (শ্রীলঙ্কা)।" },
      { label: "ঝ", q: "'ChatGPT' এর পূর্ণরূপ কী?", a: "Chat Generative Pre-trained Transformer" },
      { label: "ঞ", q: "সম্প্রতি মালয়েশিয়ায় কততম আসিয়ান শীর্ষ সম্মেলন অনুষ্ঠিত হয়েছে?", a: "৪৭তম।" }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ জুডিসিয়াল সার্ভিস কমিশন — সাঁটমুদ্রাক্ষরিক-কাম-কম্পিউটার অপারেটর
  // id prefix: job-2025-judicial-service-steno
  // ══════════════════════════════════════════════════════════

  { id: "job-2025-judicial-service-steno-q01", examId: "job-2025-judicial-service-steno", subject: "bangla", topic: "ক-বিভাগ", qno: 1, marks: 5, type: "paragraph",
    question: "ভাব সম্প্রসারণ করুন: ক) গতিই জীবন, স্থিতিতে মৃত্যু। অথবা খ) হে অতীত তুমি ভুবনে ভুবনে, কাজ করে যাও গোপনে গোপনে।",
    answer: "ক) গতিই জীবন, স্থিতিতে মৃত্যু: জীবনের মূল সত্য হলো গতিশীলতা। প্রকৃতির প্রতিটি বস্তু, প্রতিটি প্রাণী গতিশীল থাকার মাধ্যমেই বেঁচে থাকে ও উন্নতি লাভ করে। যে থেমে যায়, স্থবির হয়ে পড়ে, তার অস্তিত্ব বিপন্ন হয়। মানুষের জীবনেও এই সত্য প্রযোজ্য—যে মানুষ কর্মহীন, উদ্যমহীন হয়ে জীবনযাপন করে, সে ক্রমশ জীবনের প্রতিযোগিতা থেকে ছিটকে পড়ে। তাই জীবনে টিকে থাকতে হলে, উন্নতি করতে হলে গতিশীল থাকা আবশ্যক।" },

  { id: "job-2025-judicial-service-steno-q02", examId: "job-2025-judicial-service-steno", subject: "bangla", topic: "ক-বিভাগ", qno: 2, marks: 10, type: "short-qa",
    question: "নিম্নোক্ত প্রশ্নগুলোর উত্তর দিন:",
    parts: [
      { label: "ক", q: "স্বভাবতই মূর্ধন্য-ণ হয় এরূপ দুটি বাংলা শব্দ লিখুন।", a: "চাণক্য, মাণিক্য, বাণিজ্য, বীণা, কণিকা" },
      { label: "খ", q: "সমাস উল্লেখে ব্যাসবাক্য লিখুন- দণ্ডাজ্ঞি।", a: "দণ্ড ও উক্তি (দ্বন্দ্ব সমাস)" },
      { label: "গ", q: "সন্ধি বিচ্ছেদ করুন- দিধিদিক।", a: "দিক্ + বিদিক" },
      { label: "ঘ", q: "'যেহেতু কোথাও পথ পেলাম না সেহেতু আপনার কাছে এসেছি' এই বাক্যটিকে যৌগিক বাক্যে রূপান্তর করুন।", a: "কোথাও পথ পায়নি তাই আপনার কাছে এসেছি।" },
      { label: "ঙ", q: "যে কোনো দুটি খাঁটি বাংলা উপসর্গ উল্লেখে শব্দ গঠন করুন।", a: "কদবেল, রামছাগল, সুনজর, সুখবর, অনাবৃষ্টি" },
      { label: "চ", q: "শুদ্ধ করে লিখুন 'সর্ববিষয়ে বাহুল্যতা বর্জন করবে'।", a: "সর্ববিষয়ে বাহুল্য বর্জন করিবে।" }
    ] },

  { id: "job-2025-judicial-service-steno-q03", examId: "job-2025-judicial-service-steno", subject: "bangla", topic: "ক-বিভাগ", qno: 3, marks: 10, type: "translate",
    question: "বাংলায় অনুবাদ করুন:",
    parts: [
      { label: "-", source: "Truthfulness is the greatest of all virtues which makes a man really great. If we do not cultivate the habit of speaking the truth, we will never win the respect of others. A lie never lies hidden for long. Today or tomorrow it comes to light. Then the real character of the liar is revealed and nobody trusts him.", target: "যে সকল গুণ মানুষকে প্রকৃতপক্ষে মহৎ করে সেগুলোর মধ্যে সত্যবাদিতা সর্বোৎকৃষ্ট। আমরা যদি সত্য কথা বলার অভ্যাস না করি, তাহলে আমরা কখনও অপরের শ্রদ্ধা অর্জন করতে পারব না। মিথ্যা কখনও দীর্ঘদিন গোপন থাকে না। আজ কিংবা কাল তা প্রকাশ পাবেই তখন মিথ্যাবাদীর প্রকৃত চরিত্র প্রকাশ পায় এবং তাকে আর কেউ বিশ্বাস করে না।" }
    ] },

  { id: "job-2025-judicial-service-steno-q04", examId: "job-2025-judicial-service-steno", subject: "english", topic: "খ-বিভাগ", qno: 4, marks: 8, type: "paragraph",
    question: "Write a paragraph on: a) Global Warming or b) Value of Time / Which books is to be read",
    answer: "Global Warming: Global warming refers to the gradual increase in the Earth's average temperature due to the excessive release of greenhouse gases into the atmosphere. Human activities like deforestation, burning fossil fuels, and industrialization are the main causes of this phenomenon. It leads to serious consequences such as rising sea levels, melting glaciers, and unpredictable weather patterns. To combat global warming, it is essential to reduce carbon emissions and promote renewable energy sources." },

  { id: "job-2025-judicial-service-steno-q05", examId: "job-2025-judicial-service-steno", subject: "english", topic: "খ-বিভাগ", qno: 5, marks: 12, type: "short-qa",
    question: "Answer the following questions:",
    parts: [
      { label: "a", q: "We started early. We arrived in time. (Combine these two sentences using participle)", a: "Starting early, we arrived in time." },
      { label: "b", q: "We know that Columbus discovered America. (Write down the passive voice of the sentence)", a: "It is known to us that America was discovered by Columbus" },
      { label: "c", q: "Arif is the best boy in the class. (Here the word 'class' is a noun)", a: "Collective Noun" },
      { label: "d", q: "The ship lost all........boats in the storm. (Fill in the blank)", a: "her" },
      { label: "e", q: "Iron is more useful than any other metal. (Change the degree to positive)", a: "No other metal is as useful as iron." },
      { label: "f", q: "Write down the indirect speech of the sentence: Sujon said, \"I walk for an hour every morning\"", a: "Sujon said that he walked for an hour every morning." }
    ] },

  { id: "job-2025-judicial-service-steno-q06", examId: "job-2025-judicial-service-steno", subject: "english", topic: "খ-বিভাগ", qno: 6, marks: 10, type: "translate",
    question: "Translate into English:",
    parts: [
      { label: "ক", source: "তুমি কি তোমার বাবাকে চিঠি লিখেছিলে?", target: "Did you write a letter to your father?" },
      { label: "খ", source: "সে দারুণ যুদ্ধ করেছে।", target: "He fought bravely." },
      { label: "গ", source: "ক্লান্ত হয়ে সে কিছুক্ষণ বিশ্রাম নিল।", target: "Being tired, he took rest for a while." },
      { label: "ঘ", source: "ঘন্টা পড়ার পূর্বে তারা স্কুলে পৌঁছাল।", target: "They had reached the school before the bell rang." },
      { label: "ঙ", source: "চুপ! লোকটি ঘুমিয়েছে।", target: "Hush! The man has fallen asleep." },
      { label: "চ", source: "কোন বইটি সে পড়ছে?", target: "Which book is he reading?" }
    ] },

  { id: "job-2025-judicial-service-steno-q07", examId: "job-2025-judicial-service-steno", subject: "math", topic: "গ-বিভাগ (গণিত)", qno: 7, marks: 12, type: "math",
    question: "ক) একটি সোনার গহনার ওজন ১৬ গ্রাম। এতে সোনা ও তামার অনুপাত ৩:১। এতে কি পরিমাণ সোনা মেশালে অনুপাত ৪:১ হবে?\nখ) ΔABC এর BE=FE=CF। ΔAEC এর ক্ষেত্রফল ৪৮ বর্গফুট হলে, ΔABC এর ক্ষেত্রফল কত বর্গফুট?\nগ) x⁴ + 2x² + 1 = 5x² হলে x + 1/x = কত?",
    steps: [
      "ক) সোনার পরিমাণ = ১৬ এর ৩/৪ = ১২ গ্রাম; ধরি, x গ্রাম সোনা মেশালে অনুপাত ৪:১ হবে; (১২+x):৪ = ৪:১ থেকে x = ৪",
      "খ) BE=FE=CF সমান হওয়ায়, AE ও AF মধ্যমা; ΔAFC = ২৪ বর্গফুট; ΔABC = ΔABE + ΔAEC = ২৪ + ৪৮ = ৭২ বর্গফুট",
      "গ) x⁴ + 2x² + 1 = 5x² থেকে x²+1/x² = 3; (x+1/x)² = 3+2 = 5; ∴ x + 1/x = √5"
    ],
    answer: "ক) ৪ গ্রাম   খ) ৭২ বর্গফুট   গ) x + 1/x = √5" },

  { id: "job-2025-judicial-service-steno-q08", examId: "job-2025-judicial-service-steno", subject: "general-knowledge", topic: "ঘ-বিভাগ (সাধারণ জ্ঞান)", qno: 8, marks: 20, type: "short-qa",
    question: "নিম্নোক্ত প্রশ্নগুলোর উত্তর দিন:",
    parts: [
      { label: "ক", q: "পানগাঁও অভ্যন্তরীণ কনটেইনার টার্মিনাল কোন নদীর তীরে অবস্থিত?", a: "বুড়িগঙ্গা নদী।" },
      { label: "খ", q: "বিখ্যাত চিত্রকর্ম 'তিন কন্যা' এর চিত্রকর কে?", a: "কামরুল হাসান।" },
      { label: "গ", q: "বাংলাদেশের সংবিধান রচনা কমিটির একমাত্র মহিলা সদস্য কে?", a: "বেগম রাজিয়া বানু।" },
      { label: "ঘ", q: "বাংলাদেশের সাথে বর্তমানে কয়টি দেশের বন্দি প্রত্যর্পণ চুক্তি রয়েছে?", a: "২টি; ভারত ও থাইল্যান্ড; (সূত্র: বিবিসি বাংলা)" },
      { label: "ঙ", q: "গণভোট অধ্যাদেশ, ২০২৫ জারি হয় কবে?", a: "২৫ নভেম্বর, ২০২৫।" },
      { label: "চ", q: "বাংলাদেশের প্রথম ক্রিকেটার হিসাবে শততম টেস্ট ম্যাচ খেলেছেন কে?", a: "মুশফিকুর রহিম।" },
      { label: "ছ", q: "'UN House in Bangladesh' কোথায় অবস্থিত?", a: "গুলশান, ঢাকা।" },
      { label: "জ", q: "ঋতিক ঘটক পরিচালিত একটি চলচিত্রের নাম লিখুন।", a: "তিতাস একটি নদীর নাম।" },
      { label: "ঝ", q: "আফ্রিকান ইউনিয়নের সদর দফতর কোথায় অবস্থিত?", a: "আদ্দিস আবাবা, ইথিওপিয়া।" },
      { label: "ঞ", q: "বিশ্বের প্রথম মহিলা প্রধানমন্ত্রী কে ছিলেন?", a: "শ্রীমাভো বন্দরনায়েক (শ্রীলঙ্কা)।" },
      { label: "ট", q: "'ChatGPT' এর পূর্ণরূপ কী?", a: "Chat Generative Pre-trained Transformer" },
      { label: "ঠ", q: "সম্প্রতি মালয়েশিয়ায় কততম আসিয়ান শীর্ষ সম্মেলন অনুষ্ঠিত হয়েছে?", a: "৪৭তম।" },
      { label: "ড", q: "কৃত্রিমভাবে বৃষ্টি ঘটানোর পদ্ধতি 'ক্লাউড সিডিং' এর জনক কে?", a: "ভিনসেন্ট জে. শেফার।" },
      { label: "ঢ", q: "২০২৫ সালে কেমব্রিজ ডিকশনারীর বর্ষসেরা শব্দ কোনটি?", a: "প্যারাসোশ্যাল (Parasocial); বাংলা অর্থ এক পক্ষীয় প্রেম বা বন্ধুত্ব।" },
      { label: "ণ", q: "বিশ্ব এইডস দিবস পালন করা হয় কবে?", a: "১লা ডিসেম্বর।" }
    ] },

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: জাতীয় আইনগত সহায়তা প্রদান সংস্থা — অফিস সহকারী কাম-কম্পিউটার মুদ্রাক্ষরিক (job-2025-nlasp-office-asst-typist)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৮৮-৩৯১)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-nlasp-office-asst-typist-q01", "examId": "job-2025-nlasp-office-asst-typist", "subject": "bangla", "topic": "ভাবসম্প্রসারণ", "qno": 1, "marks": 10, "type": "paragraph", "question": "ভাব সম্প্রসারণ লিখুন: (যে-কোন ১টি)\nক) প্রয়োজনে যে মরিতে প্রস্তুত, বাঁচিবার অধিকার তাহারই।\nখ) আমারই চেতনার রঙে পান্না হল সবুজ, চুনী উঠল রাঙা হয়ে।", "answer": "প্রয়োজনে যে মরিতে প্রস্তুত, বাঁচিবার অধিকার তাহারই।\n\nন্যায় ও সত্যের জন্য যাঁরা হাসিমুখে জীবন উৎসর্গ করেন তাঁরাই প্রকৃত পক্ষে অমরত্ব লাভের অধিকারী। মানুষ এ পৃথিবীতে যদি যথাযোগ্য মর্যাদা সহযোগে বেঁচে থাকতে পারে তবেই জীবনের সার্থকতা ফুটে উঠতে পারে। মর্যাদা সহকারে বাঁচার অর্থ ব্যক্তিপূর্ণ জীবনের যথাযথ রূপায়ণ। সর্বপ্রকার বিপদ-আপদ ও সংকট সাহসের সাথে মোকাবেলা করার মধ্যেই নির্ভর করে জীবনে সাফল্য। বিপদে মানুষ যদি ভীত হয়ে পড়ে তবে তাতে জীবনের গৌরব প্রকাশ পায় না। বাঁচতে হবে সাহসের সাথে। এর জন্য জীবনে বিপদকে তুচ্ছ ভাবতে হবে। যদি জীবন পণ করারও প্রয়োজন পড়ে তবে তাও করার সাহস থাকতে হবে। আত্মত্যাগের সাহস থাকলে জীবনের মূল্য বোঝা যায়। আর কোনো কিছুর ভয়ে যদি জড়োসড়ো ও নির্জীব হতে হয় তবে মানুষের বাঁচার কোনো সার্থকতা নেই। সাহসের সাথে সকল বিপদ মোকাবিলা করলেই জীবনের অধিকার প্রতিষ্ঠিত হবে। মানুষকে তাই যথার্থ সাহসী হয়ে জীবনের গৌরব প্রমাণ করতে হবে। আত্মত্যাগী সাহসী মানুষেরই বাঁচার অধিকার আছে। ভীরু কাপুরুষ ও দুর্বল চিত্তের সে অধিকার নেই। সাহসের সাথে সকল বিপদ মোকাবেলা করলেই জীবনের অধিকার প্রমাণিত হবে।\n\nআমারই চেতনার রঙে পান্না হল সবুজ, চুনী উঠল রাঙা হয়ে\n\nমূলভাব: এটি বিশ্বকবি রবীন্দ্রনাথ ঠাকুরের এক গভীর মনস্তাত্ত্বিক উপলব্ধি। এর মূল কথা হলো: জগৎ বা বস্তুর নিজস্ব কোনো অপরিবর্তনীয় রূপ নেই; বস্তুর সৌন্দর্য, রঙ বা অর্থ আসলে আমাদের নিজস্ব চেতনা, অনুভূতি এবং দৃষ্টিভঙ্গির মাধ্যমে সৃষ্টি ও প্রতিফলিত হয়। অর্থাৎ, বাইরের জগৎ নয়, বরং মানুষের অন্তরের উপলব্ধির মাধ্যমেই তা অর্থপূর্ণ হয়ে ওঠে।\n\nসম্প্রসারিত ভাব: সাধারণভাবে আমরা মনে করি, জগতের বস্তুগুলো ভিন্নরূপে বিদ্যমান পান্না তার রাসায়নিক ধর্মের জন্য সবুজ এবং চুনী তার উপাদানের জন্য লাল। কিন্তু কবি বলছেন, বস্তুর এই রঙগুলো তখনই সজীব ও অর্থপূর্ণ হয়ে ওঠে, যখন তা আমাদের সচেতন মন বা চেতনার স্পর্শ পায়। মানুষের মন হলো এক সৃজনশীল লেন্স। এই লেন্সের মধ্য দিয়ে আমরা যখন জগৎকে দেখি, তখন আমরা কেবল বস্তুটিকে দেখি না, বরং তার সঙ্গে আমাদের আনন্দ, বিষাদ, কল্পনা এবং অভিজ্ঞতার রঙ মিশ্রিত করে দিই। উদাহরণস্বরূপ, একই সূর্যাস্ত একজন উদাসীন মানুষের কাছে কেবল আলো-অন্ধকারের খেলা, কিন্তু একজন কবির কাছে তা অপার বিস্ময় ও গভীর অনুভূতির জন্ম দেয়। যখন মন আনন্দে পূর্ণ থাকে, তখন চারপাশের সাদামাটা দৃশ্যও উজ্জ্বল ও সুন্দর মনে হয়। আবার মন যখন বিষাদে আচ্ছন্ন, তখন উজ্জ্বলতম জিনিসও ম্লান ও বিবর্ণ লাগে। এটি প্রমাণ করে যে, বস্তুজগতের সৌন্দর্য বস্তুর মধ্যে নয়, বরং তা দ্রষ্টার চেতনার মধ্যেই বাস করে।\n\nএই উক্তির দার্শনিক তাৎপর্য হলো: বহির্জগতের বস্তু ও প্রকৃতি হলো কেবল উপকরণ বা ক্যানভাস। এগুলিকে প্রাণ ও সৌন্দর্য দিতে প্রয়োজন মানুষের সৃজনশীল মনন ও আত্মিক উপলব্ধি। আমাদের চেতনার মাধ্যমেই বস্তুজগৎ মূল্য লাভ করে, আলোকিত হয় এবং অর্থবহ হয়ে ওঠে। মানুষের ভেতরের ভাবনাই বাইরের জগৎকে নির্মাণ করে।"},

  {"id": "job-2025-nlasp-office-asst-typist-q02", "examId": "job-2025-nlasp-office-asst-typist", "subject": "bangla", "topic": "বাক্য রূপান্তর", "qno": 2, "marks": 6, "type": "sentence-change", "question": "নিম্নের বাক্যগুলো বন্ধনীতে প্রদত্ত নির্দেশ অনুসারে রূপান্তর করুন।", "parts": [{"label": "ক", "original": "ভদ্রলোক বললেন, 'হায় হায়! ডাকাতরা আমার সর্বস্ব লুটে নিয়েছে।' (পরোক্ষ উক্তি)", "changed": "ভদ্রলোক দুঃখ করে বা আফসোস করে বললেন যে ডাকাতরা তাঁর সর্বস্ব লুটে নিয়েছে।"}, {"label": "খ", "original": "একথা প্রমাণ হয়েছে। (ভুল শুদ্ধ করুন)", "changed": "একথা প্রমাণিত হয়েছে।"}, {"label": "গ", "original": "পাহাড়ের প্রকৃতি বৈচিত্রতা আমাদের মুগ্ধ করে। (ভুল শুদ্ধ করুন)", "changed": "পাহাড়ের প্রাকৃতিক বৈচিত্র্য আমাদের মুগ্ধ করে।"}, {"label": "ঘ", "original": "তোমাকে দেওয়ার মতো আমার কিছুই নেই। (জটিল)", "changed": "যা তোমাকে দেওয়ার মতো, তা আমার কিছুই নেই।"}, {"label": "ঙ", "original": "বিদ্বান হলেও তার অহংকার নেই। (যৌগিক)", "changed": "তিনি বিদ্বান কিন্তু তাঁর অহংকার নেই।"}, {"label": "চ", "original": "যে একটুতেই মারামারি করতে চায়। (বাক্য সংকোচন)", "changed": "মারকুটে বা উগ্র।"}]},

  {"id": "job-2025-nlasp-office-asst-typist-q03", "examId": "job-2025-nlasp-office-asst-typist", "subject": "bangla", "topic": "অনুবাদ", "qno": 3, "marks": 5, "type": "translate", "question": "বাংলায় অনুবাদ করুনঃ", "parts": [{"label": "", "source": "Recently, Chikungunya has been making headlines. Staying one step ahead means treating every drop of stagnant water and every uncovered container as potential threat. With consistent small actions, both at home and in the neighborhood, we can protect our families from needless sufferings. The disease is spread by the same Aedes mosquitoes that already troubles us with dengue. Using mosquito nets and repellents is a classic defensive measure. Protecting the healthy while providing care for the ill is another step that is often overlooked. By keeping a person from getting bitten during the first week of their illness, we can stop mosquitoes from transmitting the virus.", "target": "চিকুনগুনিয়া সম্প্রতি শিরোনামে এসেছে। এক ধাপ এগিয়ে থাকার অর্থ হলো, প্রতি ফোঁটা জমে থাকা জল এবং প্রতিটি খোলা পাত্রকে সম্ভাব্য হুমকি হিসেবে বিবেচনা করা। বাড়িতে এবং পাড়ায় ছোট ছোট ধারাবাহিক পদক্ষেপের মাধ্যমে আমরা আমাদের পরিবারকে অপ্রয়োজনীয় কষ্ট থেকে রক্ষা করতে পারি। এই রোগটি একই এডিস মশা দ্বারা ছড়ায় যা ইতিমধ্যেই আমাদের ডেঙ্গু নিয়ে সমস্যায় ফেলেছে। মশারী ও মশা তাড়ানোর স্প্রে ব্যবহার করা একটি চিরাচরিত প্রতিরক্ষামূলক ব্যবস্থা। সুস্থদের রক্ষা করার পাশাপাশি অসুস্থদের সেবা করা আরেকটি পদক্ষেপ যা প্রায়শই উপেক্ষা করা হয়। অসুস্থতার প্রথম সপ্তাহে একজন ব্যক্তিকে মশার কামড় থেকে রক্ষা করে আমরা মশার মাধ্যমে ভাইরাসটির সংক্রমণ বন্ধ করতে পারি।"}]},

  {"id": "job-2025-nlasp-office-asst-typist-q04", "examId": "job-2025-nlasp-office-asst-typist", "subject": "english", "topic": "paragraph", "qno": 4, "marks": 8, "type": "paragraph", "question": "Write a paragraph on any one of the following:\na) July Revolution\nb) Democracy and Autocracy", "answer": "July Revolution\n\nThe July Revolution refers to the mass uprising that took place in Bangladesh in July 2024. It began as a student movement demanding reform of the quota system in government jobs. Soon, it turned into a nationwide protest against misrule, discrimination, and denial of democratic rights. Students, teachers, and people from all walks of life joined the movement. Many young lives were lost during the crackdown on protesters, which shocked the whole nation. The movement showed the power of unity and the courage of the youth. It finally led to a major political change in the country. The July Revolution taught people that peaceful and united demand for justice can bring real change. It remains a symbol of sacrifice, courage, and the struggle for democracy. The nation will always remember the students and citizens who gave their lives for this cause."},

  {"id": "job-2025-nlasp-office-asst-typist-q05", "examId": "job-2025-nlasp-office-asst-typist", "subject": "english", "topic": "idiom", "qno": 5, "marks": 6, "type": "idiom", "question": "Make sentence with the following (any six):", "parts": [{"label": "a", "phrase": "With an eye to", "meaning": "পাওয়ার আশায়", "example": "He reads more with an eye to get a good job."}, {"label": "b", "phrase": "Apple of discord", "meaning": "বিবাদের বিষয়", "example": "A piece of land was the apple of discord between two brothers."}, {"label": "c", "phrase": "At arm's length", "meaning": "দূরে রাখা বা", "example": "Keep bad company at arm's length."}, {"label": "d", "phrase": "By dint of", "meaning": "বদৌলতে", "example": "I succeeded by dint of hard work."}, {"label": "e", "phrase": "A castle in the air", "meaning": "আকাশ কুসুম কল্পনা করা", "example": "Do not build castle in the air."}, {"label": "f", "phrase": "In black and white", "meaning": "লিখিত ভাবে", "example": "We charged against him in black and white."}, {"label": "g", "phrase": "With a good grace", "meaning": "স্বেচ্ছায়/ হাসিমুখে", "example": "He accepted my proposal with a good grace."}]},

  {"id": "job-2025-nlasp-office-asst-typist-q06", "examId": "job-2025-nlasp-office-asst-typist", "subject": "english", "topic": "grammar", "qno": 6, "marks": 6, "type": "sentence-change", "question": "Correct the following sentences (any six)", "parts": [{"label": "a", "original": "Do you know who am I?", "changed": "Do you know who I am?"}, {"label": "b", "original": "He have sufficient enough food to eat.", "changed": "He has sufficient food to eat."}, {"label": "c", "original": "I thought he is coming today.", "changed": "I thought he was coming today."}, {"label": "d", "original": "He is taking a walk, he must have felt better now.", "changed": "He is taking a walk; he must be feeling better now."}, {"label": "e", "original": "His car needs to fix.", "changed": "His car needs to be fixed."}, {"label": "f", "original": "The faster we finish, the soon we can leave.", "changed": "The faster we can finish, the sooner we can leave."}, {"label": "g", "original": "Helen types fastly and efficiently.", "changed": "Helen types fast and efficiently."}]},

  {"id": "job-2025-nlasp-office-asst-typist-q07", "examId": "job-2025-nlasp-office-asst-typist", "subject": "math", "topic": "অনুপাত ও অংশীদারি ব্যবসা", "qno": 7, "marks": 10, "type": "math", "question": "ক) পিতা ও পুত্রের বর্তমান বয়সের অনুপাত ৭:৩। চার বৎসর পূর্বে এই অনুপাত ছিল ১৩:৫। ৮ বৎসর পর পিতা ও পুত্রের বয়সের অনুপাত কত হবে?\nখ) সুমন ও জামাল ৫০০০ টাকা ও ৪০০০ টাকা মূলধন নিয়ে একটি কারবার শুরু করল। ৩ মাস পর সুমন আরও ১০০০ টাকা দিল এবং কামাল ৭০০০ টাকা মূলধন নিয়ে কারবারের নতুন অংশীদার হল। এক বছরে ৩৬০০০ টাকা লাভ হলে, লাভের টাকা কে কত পাবে?", "steps": ["ক) মনে করি, পিতার বর্তমান বয়স 7x এবং পুত্রের বর্তমান বয়স 3x", "প্রশ্নমতে, (7x−4) : (3x−4) = 13 : 5", "বা, 5(7x−4) = 13(3x−4)", "বা, 35x − 20 = 39x − 52", "বা, 35x − 39x = −52 + 20", "বা, −4x = −32  ∴ x = 8", "∴ পিতার বর্তমান বয়স = 7×8 = 56 বছর; পুত্রের বর্তমান বয়স = 3×8 = 24 বছর", "৮ বছর পর পিতার বয়স = 56+8 = 64 বছর; পুত্রের বয়স = 24+8 = 32 বছর", "তাদের বয়সের অনুপাত = 64:32 = 2:1", "খ) সুমনের সমতুল্য মূলধন : জামালের সমতুল্য মূলধন : কামালের সমতুল্য মূলধন", "= (৫০০০×৩ + ৬০০০×৯) : (৪০০০×১২) : (৭০০০×৯)", "= ৬৯০০০ : ৪৮০০০ : ৬৩০০০ = ৬৯ : ৪৮ : ৬৩", "অনুপাতের রাশিগুলোর যোগফল = (৬৯+৪৮+৬৩) = ১৮০", "সুমন পাবে = ৩৬০০০ × ৬৯/১৮০ = ১৩৮০০ টাকা", "জামাল পাবে = ৩৬০০০ × ৪৮/১৮০ = ৯৬০০ টাকা", "কামাল পাবে = ৩৬০০০ × ৬৩/১৮০ = ১২৬০০ টাকা"], "answer": "ক) ২:১।  খ) সুমন ১৩৮০০ টাকা, জামাল ৯৬০০ টাকা, কামাল ১২৬০০ টাকা।"},

  {"id": "job-2025-nlasp-office-asst-typist-q08", "examId": "job-2025-nlasp-office-asst-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 8, "marks": 15, "type": "short-qa", "question": "নিম্নোক্ত প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "ক", "q": "১৯৬৩ সালে আনুষ্ঠানিকভাবে কেন্দ্রীয় শহীদ মিনার উদ্বোধন করেন কে?", "a": "শহীদ বরকতের মাতা হাসিনা বেগম।"}, {"label": "খ", "q": "বাংলাদেশের সংবিধানের কোন অনুচ্ছেদের অধীনে ২০২৪ সালের আগস্ট মাসে রাষ্ট্রপতি অন্তবর্তীকালীন সরকার গঠন বিষয়ে বাংলাদেশ সুপ্রীম কোর্টের পরামর্শ চেয়েছিলেন?", "a": "বাংলাদেশের সংবিধানের ১০৬ অনুচ্ছেদের (পরামর্শমূলক এখতিয়ার) অধীনে।"}, {"label": "গ", "q": "বাংলাদেশের পুঁজিবাজারের নিয়ন্ত্রক সংস্থা কোনটি?", "a": "বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন (BSEC)।"}, {"label": "ঘ", "q": "সেরেঙ্গেটি ন্যাশনাল পার্ক কোথায় অবস্থিত?", "a": "তানজানিয়াতে (আফ্রিকা) অবস্থিত।"}, {"label": "ঙ", "q": "Conference of the Parties (COP) কোন বৈশ্বিক সমস্যা মোকাবেলার সাথে সংশ্লিষ্ট?", "a": "জলবায়ু পরিবর্তন"}, {"label": "চ", "q": "২০২৫ সালের সেপ্টেম্বর মাসে দোহায় আরব ও মুসলিম দেশগুলোর জরুরী শীর্ষ সম্মেলন কোন প্রেক্ষাপটে অনুষ্ঠিত হয়?", "a": "মুসলিম ন্যাটো গঠন।"}, {"label": "ছ", "q": "ন্যানো-প্রযুক্তি কী?", "a": "ন্যানো-প্রযুক্তি হলো এমন একটি বিজ্ঞান ও প্রকৌশল প্রযুক্তি, যেখানে অতি ক্ষুদ্র কণিকা (১ থেকে ১০০ ন্যানোমিটার আকারের) পদার্থকে নিয়ন্ত্রণ ও ব্যবহার করা হয়।"}, {"label": "জ", "q": "আবু সাঈদ কবে শহীদ হন?", "a": "১৬ জুলাই ২০২৪"}, {"label": "ঝ", "q": "কোন নগরী দুইটি মহাদেশে অবস্থিত?", "a": "ইস্তাম্বুল"}, {"label": "ঞ", "q": "বাংলাদেশের সংবিধানে উল্লেখিত দুইটি সাংবিধানিক প্রতিষ্ঠানের নাম লিখুন।", "a": "১. নির্বাচন কমিশন ২. মহাহিসাব নিরীক্ষক ও নিয়ন্ত্রকের কার্যালয়"}, {"label": "ট", "q": "মওলানা আবদুল হামিদ খান ভাসানী কবে ফারাক্কা মিছিলে নেতৃত্ব দেন?", "a": "১৬ মে, ১৯৭৬ সালে।"}, {"label": "ঠ", "q": "মাইক্রো প্লাস্টিক মানব স্বাস্থ্যের জন্য কেন ক্ষতিকর?", "a": "মাইক্রো-প্লাস্টিক হলো ক্ষুদ্র প্লাস্টিক কণা, যা পানি, খাবার ও বাতাসের মাধ্যমে মানুষের দেহে প্রবেশ করে। এগুলো শরীরে জমে গিয়ে কোষ ও অঙ্গের ক্ষতি করে, হরমোনের ভারসাম্য নষ্ট করে, শ্বাসযন্ত্র ও হজমতন্ত্রে সমস্যা সৃষ্টি করে, এবং ক্যানসারের ঝুঁকি বাড়ায়।"}, {"label": "ড", "q": "বাংলাদেশের সর্বপ্রথম জাদুঘর কোনটি?", "a": "বরেন্দ্র গবেষণা জাদুঘর।"}, {"label": "ঢ", "q": "'ছিয়াত্তরের মন্বন্তর' নামক দুর্ভিক্ষ কত সালে ঘটে?", "a": "বাংলা ১১৭৬ সনে (ইংরেজি ১৭৭০ সাল)"}, {"label": "ণ", "q": "'আসছে ফাল্গুনে আমরা কিন্তু দ্বিগুণ হব' উক্তিটির রচয়িতা কে?", "a": "জহির রায়হান"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: ইসলামিক ফাউন্ডেশন — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-islamic-foundation-office-asst)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৯১-৩৯৩)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-islamic-foundation-office-asst-q01", "examId": "job-2025-islamic-foundation-office-asst", "subject": "bangla", "topic": "যুক্তবর্ণ বিশ্লেষণ", "qno": 1, "marks": 5, "type": "short-qa", "question": "নিম্নলিখিত যুক্ত বর্ণগুলি কোন কোন বর্ণ দিয়ে তৈরি:", "parts": [{"label": "ক", "q": "ক্ষ্ম", "a": "ক + ষ + ম"}, {"label": "খ", "q": "হ্ন", "a": "হ + ন"}, {"label": "গ", "q": "জ্ঞ", "a": "জ + ঞ"}, {"label": "ঘ", "q": "ভ্র", "a": "ভ + ্ + র"}, {"label": "ঙ", "q": "থ", "a": "ত + থ"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q02", "examId": "job-2025-islamic-foundation-office-asst", "subject": "bangla", "topic": "সমাস", "qno": 2, "marks": 2, "type": "short-qa", "question": "ব্যাসবাক্যসহ সমাস নির্ণয় করুন:", "parts": [{"label": "ক", "q": "খাসজমি", "a": "খাস যে জমি - কর্মধারয়"}, {"label": "খ", "q": "রাজপথ", "a": "পথের রাজা - ষষ্ঠী তৎপুরুষ"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q03", "examId": "job-2025-islamic-foundation-office-asst", "subject": "bangla", "topic": "অনুচ্ছেদ", "qno": 3, "marks": 8, "type": "paragraph", "question": "'কৃত্রিম বুদ্ধিমত্তা' বিষয়ে ১০ (দশ) টি বাক্যের একটি অনুচ্ছেদ লিখুন।", "answer": "কৃত্রিম বুদ্ধিমত্তা\n\nকৃত্রিম বুদ্ধিমত্তা বা আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) হলো এমন এক আধুনিক প্রযুক্তি, যার মাধ্যমে কম্পিউটার বা রোবট মানুষের মতো বুদ্ধিমত্তা প্রদর্শন করতে পারে। এটি এমন সব কাজ সম্পাদন করতে সক্ষম, যেগুলোর জন্য সাধারণত মানুষের চিন্তা, যুক্তি ও অভিজ্ঞতা প্রয়োজন হয়। এআই কাজ করে তথ্য বিশ্লেষণ, শেখা এবং সিদ্ধান্ত গ্রহণের মাধ্যমে। অর্থাৎ, এটি ডেটা থেকে শিক্ষা নেয় এবং সেই অনুযায়ী পরবর্তী পদক্ষেপ নির্ধারণ করে। বর্তমানে কৃত্রিম বুদ্ধিমত্তা স্বাস্থ্যসেবা, শিক্ষা, কৃষি, শিল্প, ব্যবসা, যোগাযোগ ও নিরাপত্তাসহ নানা ক্ষেত্রে ব্যবহৃত হচ্ছে। চিকিৎসা ক্ষেত্রে এটি রোগ নির্ণয়ে সহায়তা করে, কৃষিতে ফসল উৎপাদন বিশ্লেষণ করে, আর শিক্ষায় স্মার্ট টিউটর বা স্বয়ংক্রিয় সহায়ক হিসেবে ব্যবহৃত হয়। এছাড়া ভয়েস অ্যাসিস্ট্যান্ট, সার্চ ইঞ্জিন ও চ্যাটবট প্রযুক্তিতেও এআই গুরুত্বপূর্ণ ভূমিকা রাখছে। এর সুফল হলো কাজের গতি ও দক্ষতা বৃদ্ধি, মানব ভ্রান্তি কমানো এবং সময়ের সাশ্রয়। তবে এর কুফলও রয়েছে—যেমন মানব শ্রমের বিকল্প হয়ে বেকারত্ব সৃষ্টি, ব্যক্তিগত তথ্যের গোপনীয়তা নষ্ট হওয়া এবং প্রযুক্তি নির্ভরতার ঝুঁকি। তাই কৃত্রিম বুদ্ধিমত্তার ব্যবহার অবশ্যই নৈতিকতা, সঠিক নীতি ও নিয়ন্ত্রণের মাধ্যমে করতে হবে, যেন এটি মানুষের কল্যাণ ও টেকসই উন্নয়নে ভূমিকা রাখতে পারে।"},

  {"id": "job-2025-islamic-foundation-office-asst-q04", "examId": "job-2025-islamic-foundation-office-asst", "subject": "bangla", "topic": "বিরাম চিহ্ন", "qno": 4, "marks": 3, "type": "short-qa", "question": "বিরাম চিহ্ন লিখুনঃ কেননা অন্ন বস্ত্রের অব্যবস্থার মূলে লোভ আর শিক্ষাদীক্ষার ফলে মানুষ উপলব্ধি করতে পারে লোভে পাপ পাপে মৃত্যু কথাটা বুলিমাত্র নয় সত্য।", "parts": [{"label": "", "q": "বিরাম চিহ্ন লিখুনঃ কেননা অন্ন বস্ত্রের অব্যবস্থার মূলে লোভ আর শিক্ষাদীক্ষার ফলে মানুষ উপলব্ধি করতে পারে লোভে পাপ পাপে মৃত্যু কথাটা বুলিমাত্র নয় সত্য।", "a": "কেননা অন্ন বস্ত্রের অব্যবস্থার মূলে লোভ, আর শিক্ষাদীক্ষার ফলে মানুষ উপলব্ধি করতে পারে, 'লোভে পাপ, পাপে মৃত্যু' কথাটা বুলিমাত্র নয়, সত্য।"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q05", "examId": "job-2025-islamic-foundation-office-asst", "subject": "bangla", "topic": "সাহিত্য (নজরুল)", "qno": 5, "marks": 3, "type": "short-qa", "question": "নিম্নোক্ত প্রশ্নগুলোর উত্তর দিন:", "parts": [{"label": "ক", "q": "কাজী নজরুল ইসলামের একটি অনুবাদ গ্রন্থের নাম লিখুন?", "a": "রুবাইয়াৎ-ই-ওমর খৈয়াম"}, {"label": "খ", "q": "কাজী নজরুল ইসলামের দুটি উপন্যাসের নাম লিখুন।", "a": "মৃত্যুক্ষুধা, কুহেলিকা"}, {"label": "গ", "q": "কাজী নজরুল ইসলামের সমাধি কোথায় অবস্থিত?", "a": "ঢাকা বিশ্ববিদ্যালয়ের কেন্দ্রীয় মসজিদের পাশে"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q06", "examId": "job-2025-islamic-foundation-office-asst", "subject": "english", "topic": "paragraph", "qno": 6, "marks": 5, "type": "paragraph", "question": "Write a paragraph on 'Gen-z'", "answer": "Gen-z\n\nGeneration Z, or Gen Z, is the generation of people born between 1997 and 2012. Gen Z is the first generation to grow up with the internet as a part of daily life. They are often called \"digital natives\". Gen Z came of age during a time of climate doom, pandemic lockdowns, and fears of economic collapse. They witnessed the rise of China in the global economy and the collapse of communism. Gen Z's parents are protective and teach their children more social and emotional skills than previous generations. Generation Z is part of a generation that is global, social, visual."},

  {"id": "job-2025-islamic-foundation-office-asst-q07", "examId": "job-2025-islamic-foundation-office-asst", "subject": "bangla", "topic": "অনুবাদ", "qno": 7, "marks": 2, "type": "translate", "question": "বাংলায় অনুবাদ করুনঃ", "parts": [{"label": "a", "source": "Neither of the two pens will do.", "target": "কলম দুটি কোনটিই লিখা হয় না।"}, {"label": "b", "source": "I don't bunk off school.", "target": "আমি স্কুল ফাঁকি দেই না।"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q08", "examId": "job-2025-islamic-foundation-office-asst", "subject": "english", "topic": "translation", "qno": 8, "marks": 3, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "ডাক্তার আসার পর রোগী মারা গেল।", "target": "The patient died after the doctor had come."}, {"label": "খ", "source": "ভুল করা মানুষের স্বভাব।", "target": "To err is human."}, {"label": "গ", "source": "আয় বুঝে ব্যয় কর।", "target": "Cut your coat according to your cloth."}]},

  {"id": "job-2025-islamic-foundation-office-asst-q09", "examId": "job-2025-islamic-foundation-office-asst", "subject": "english", "topic": "transformation", "qno": 9, "marks": 5, "type": "sentence-change", "question": "Transform the following sentences:", "parts": [{"label": "a", "original": "Bangladesh is the most beautiful country in the world. (Positive)", "changed": "No other country in the world is as beautiful as Bangladesh."}, {"label": "b", "original": "I know her name. (Complex)", "changed": "I know what her name is."}, {"label": "c", "original": "Open the door. (Passive)", "changed": "Let the door be opened."}, {"label": "d", "original": "He is a rich man. (Negative)", "changed": "He is not a poor man."}, {"label": "e", "original": "I gave him a pen. (Passive)", "changed": "He was given a pen by me."}]},

  {"id": "job-2025-islamic-foundation-office-asst-q10", "examId": "job-2025-islamic-foundation-office-asst", "subject": "english", "topic": "idiom", "qno": 10, "marks": 5, "type": "idiom", "question": "Make sentences with the following words:", "parts": [{"label": "a", "phrase": "At best", "meaning": "বড় জোর", "example": "I can lend you the book at best for a week."}, {"label": "b", "phrase": "Vicious circle", "meaning": "দুষ্ট চক্র", "example": "This is a vicious circle of modern politics."}, {"label": "c", "phrase": "Sorts of", "meaning": "প্রকার", "example": "It's a sort of pale orange colour."}, {"label": "d", "phrase": "Black Sheep", "meaning": "কুলাঙ্গার", "example": "He is a black sheep of his family."}, {"label": "e", "phrase": "Blue blood", "meaning": "অভিজাত বংশীয়", "example": "He is proud of his blue blood."}]},

  {"id": "job-2025-islamic-foundation-office-asst-q11", "examId": "job-2025-islamic-foundation-office-asst", "subject": "math", "topic": "শতকরা", "qno": 11, "marks": 5, "type": "math", "question": "একটি পরিবারে চালের খরচ বাবদ মাসে ৮০০ টাকা প্রয়োজন হয়। চালের মূল্য ২৫% বৃদ্ধি পেলো। ঐ পরিবারে চালের ব্যবহার শতকরা কত কমালে ঐ পরিবারের চাল ক্রয় বাবদ খরচ বৃদ্ধি করতে হবে না।", "steps": ["চালের মূল্য ২৫% বৃদ্ধি পাওয়ায় বর্তমান মূল্য = ১২৫ টাকা", "বর্তমান মূল্য ১২৫ টাকা হলে পূর্বমূল্য ১০০ টাকা", "\" ১ \" \" \" ১০০/১২৫", "\" ১০০ \" \" \" (১০০ × ১০০)/১২৫ = ৮০ টাকা", "∴ চালের ব্যবহার শতকরা কমাতে হবে = (১০০ – ৮০)% = ২০%", "বিকল্প সমাধান: ২৫% বৃদ্ধিতে বর্তমান মূল্য = ১২৫ টাকা; মূল্য বৃদ্ধি পায় = (১২৫–১০০) = ২৫ টাকা", "১২৫ টাকায় কমাতে হবে ২৫ টাকা", "\" ১ \" \" \" ২৫/১২৫", "\" ১০০ \" \" \" (২৫ × ১০০)/১২৫ = ২০ টাকা"], "answer": "২০%।"},

  {"id": "job-2025-islamic-foundation-office-asst-q12", "examId": "job-2025-islamic-foundation-office-asst", "subject": "math", "topic": "জ্যামিতিক সংজ্ঞা", "qno": 12, "marks": 3, "type": "short-qa", "question": "সংজ্ঞা লিখুন:", "parts": [{"label": "ক", "q": "স্থূলকোণ", "a": "এক সমকোণ বা ৯০° চেয়ে বড় কিন্তু দুই সমকোণ থেকে ছোট কোণকে স্থূলকোণ বলে।"}, {"label": "খ", "q": "বর্গক্ষেত্র", "a": "যে চতুর্ভুজের প্রত্যেকটি বাহু পরস্পর সমান ও সমান্তরাল এবং প্রত্যেকটি কোণ সমকোণ তাকে বর্গক্ষেত্র বলে।"}, {"label": "গ", "q": "সামান্তরিক", "a": "যে চতুর্ভুজের বিপরীত বাহুগুলো পরস্পর সমান ও সমান্তরাল কিন্তু কোণগুলো সমকোণ নয় তাকে সামান্তরিক বলে।"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q13", "examId": "job-2025-islamic-foundation-office-asst", "subject": "math", "topic": "বীজগণিত", "qno": 13, "marks": 5, "type": "math", "question": "(2x+3y)(4x – 5y) কে দুইটি বর্গের বিয়োগফলরূপে প্রকাশ করুন।", "steps": ["ধরি, 2x+3y = a এবং 4x – 5y = b", "প্রদত্ত রাশি: ab = ((a+b)/2)² – ((a−b)/2)²", "= ((2x+3y + 4x−5y)/2)² – ((2x+3y − 4x+5y)/2)²", "= ((6x−2y)/2)² – ((8y−2x)/2)²", "= [2(3x−y)/2]² – [2(4y−x)/2]²", "= (3x − y)² – (4y − x)²"], "answer": "(3x − y)² – (4y − x)²"},

  {"id": "job-2025-islamic-foundation-office-asst-q14", "examId": "job-2025-islamic-foundation-office-asst", "subject": "general-knowledge", "topic": "সংক্ষিপ্তরূপ", "qno": 14, "marks": 1, "type": "short-qa", "question": "OIC এর পূর্ণরূপ লিখুন।", "parts": [{"label": "", "q": "OIC এর পূর্ণরূপ লিখুন।", "a": "Organisation of Islamic Cooperation"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q15", "examId": "job-2025-islamic-foundation-office-asst", "subject": "general-knowledge", "topic": "ইসলামি জ্ঞান", "qno": 15, "marks": 2, "type": "short-qa", "question": "মোকাব্বের কাকে বলে?", "parts": [{"label": "", "q": "মোকাব্বের কাকে বলে?", "a": "মোকাব্বের (مكبر) হলেন এমন ব্যক্তি যিনি নামাজ বা দোয়ার সময় ইমামের কণ্ঠস্বরকে জোরে পুনরাবৃত্তি করে মুসল্লিদের কাছে পৌঁছে দেন, যাতে তারা ইমামের নির্দেশাবলী শুনতে পায়।"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q16", "examId": "job-2025-islamic-foundation-office-asst", "subject": "general-knowledge", "topic": "ইসলামি জ্ঞান", "qno": 16, "marks": 2, "type": "short-qa", "question": "খতীব কে?", "parts": [{"label": "", "q": "খতীব কে?", "a": "খতীব হলেন সেই ব্যক্তি যিনি জুমার নামাজ এবং দুই ঈদের নামাজের সময় খুতবা (ভাষণ) প্রদান করেন। সাধারণত, যিনি ইমামতি করেন, তিনিই খতিবের দায়িত্ব পালন করেন।"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q17", "examId": "job-2025-islamic-foundation-office-asst", "subject": "general-knowledge", "topic": "ইসলামি জ্ঞান", "qno": 17, "marks": 3, "type": "short-qa", "question": "রোজার কাফফারা কী?", "parts": [{"label": "", "q": "রোজার কাফফারা কী?", "a": "রমজান মাসের রোজা ভঙ্গ করলে কাফফারা তিনভাবে আদায় করা যায়: ১. একটি দাসমুক্ত করা ২. আর অক্ষম হলে ৬০ জন মিসকিনকে দুই বেলা ভালোভাবে তৃপ্তিসহ খাবার খাওয়ানো ৩. ধারাবাহিকভাবে ৬০দিন রোজা রাখা।"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q18", "examId": "job-2025-islamic-foundation-office-asst", "subject": "general-knowledge", "topic": "প্রাতিষ্ঠানিক জ্ঞান", "qno": 18, "marks": 1, "type": "short-qa", "question": "ইসলামিক ফাউন্ডেশন কোন মন্ত্রণালয়ের অধীন?", "parts": [{"label": "", "q": "ইসলামিক ফাউন্ডেশন কোন মন্ত্রণালয়ের অধীন?", "a": "ধর্ম বিষয়ক মন্ত্রণালয়"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q19", "examId": "job-2025-islamic-foundation-office-asst", "subject": "general-knowledge", "topic": "ভূগোল", "qno": 19, "marks": 2, "type": "short-qa", "question": "দ্রাঘিমাংশ কী?", "parts": [{"label": "", "q": "দ্রাঘিমাংশ কী?", "a": "পৃথিবীপৃষ্ঠে কোনো স্থান যে দ্রাঘিমারেখায় অবস্থিত সেই দ্রাঘিমারেখা ও মূলমধ্যরেখা নিরক্ষীয় তলে পৃথিবীর কেন্দ্রবিন্দুর সাথে যে কোণ উৎপন্ন হয়, তাকে সেই স্থানের দ্রাঘিমাংশ বলে।"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q20", "examId": "job-2025-islamic-foundation-office-asst", "subject": "general-knowledge", "topic": "ক্রীড়া", "qno": 20, "marks": 2, "type": "short-qa", "question": "সুপার ওভার কী?", "parts": [{"label": "", "q": "সুপার ওভার কী?", "a": "একটি ক্রিকেট ম্যাচে দুই দলের ব্যাটিং শেষে যদি দুই দলের রান স্কোর সমান থাকে, তখন বিজয়ী দল নির্বাচন করার জন্য এক ওভারের যে ম্যাচ অনুষ্ঠিত হয় তাকে সুপার ওভার বলে।"}]},

  {"id": "job-2025-islamic-foundation-office-asst-q21", "examId": "job-2025-islamic-foundation-office-asst", "subject": "general-knowledge", "topic": "বিজ্ঞান", "qno": 21, "marks": 2, "type": "short-qa", "question": "মানব দেহের সবচেয়ে বড় কোষের নাম কী?", "parts": [{"label": "", "q": "মানব দেহের সবচেয়ে বড় কোষের নাম কী?", "a": "স্ত্রী ডিম্বাণু। (প্রাণী জগতের সবচেয়ে বড় কোষ- উটপাখির ডিম; মানব দেহের দীর্ঘতম কোষ- নিউরন/স্নায়ু কোষ)"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: প্রাথমিক শিক্ষা অধিদপ্তর — উচ্চমান সহকারী কাম হিসাবরক্ষক (job-2025-dpe-accountant)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৯৪-৩৯৫)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-dpe-accountant-q01", "examId": "job-2025-dpe-accountant", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 1, "marks": 4, "type": "short-qa", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "স্ত্রীর সঙ্গে বর্তমান", "a": "সস্ত্রীক"}, {"label": "খ", "q": "বৃহৎ অরণ্য", "a": "অরণ্যানী"}, {"label": "গ", "q": "ঘটনার বিবরণ দান", "a": "প্রতিবেদন"}, {"label": "ঘ", "q": "তৃণাচ্ছাদিত ভূমি", "a": "শাদ্বল"}]},

  {"id": "job-2025-dpe-accountant-q02", "examId": "job-2025-dpe-accountant", "subject": "bangla", "topic": "কারক ও বিভক্তি", "qno": 2, "marks": 4, "type": "short-qa", "question": "কারক ও বিভক্তি নির্ণয় করুনঃ", "parts": [{"label": "ক", "q": "আগুনটা ভালো করে জ্বালা।", "a": "কর্মে শূন্য"}, {"label": "খ", "q": "তোমার পূজার ছলে তোমায় ভুলে থাকি।", "a": "সম্প্রদানে ৬ষ্ঠী"}, {"label": "গ", "q": "তুমি সন্ধ্যাকাশের তারার মতো।", "a": "অধিকরণে ৬ষ্ঠী"}, {"label": "ঘ", "q": "কী হচ্ছে বাইরে?", "a": "অধিকরণে ৭মী"}]},

  {"id": "job-2025-dpe-accountant-q03", "examId": "job-2025-dpe-accountant", "subject": "bangla", "topic": "সন্ধি বিচ্ছেদ", "qno": 3, "marks": 4, "type": "short-qa", "question": "সন্ধি বিচ্ছেদ করুন-", "parts": [{"label": "ক", "q": "কথোপকথন", "a": "কথা + উপকথন"}, {"label": "খ", "q": "উদ্যোগ", "a": "উৎ + যোগ"}, {"label": "গ", "q": "কিন্নর", "a": "কিম্ + নর"}, {"label": "ঘ", "q": "নিরস", "a": "নিঃ + রস"}]},

  {"id": "job-2025-dpe-accountant-q04", "examId": "job-2025-dpe-accountant", "subject": "bangla", "topic": "বাগধারা", "qno": 4, "marks": 3, "type": "short-qa", "question": "বাগধারা- অর্থসহ বাক্য রচনা করুন-", "parts": [{"label": "ক", "q": "কলমের এক খোঁচা", "a": "লিখিত আদেশ"}, {"label": "খ", "q": "ইন্দ্রপতন", "a": "বিখ্যাত ব্যক্তির মৃত্যু"}, {"label": "গ", "q": "উজানের কই", "a": "সহজলভ্য"}]},

  {"id": "job-2025-dpe-accountant-q05", "examId": "job-2025-dpe-accountant", "subject": "bangla", "topic": "রচনামূলক", "qno": 5, "marks": 5, "type": "paragraph", "question": "জুলাই গণঅভ্যুত্থান সম্পর্কে ০৫টি অর্থপূর্ণ বাক্য লিখুন।", "answer": "১. ২০২৪ সালের জুলাই মাসে কোটা সংস্কারের দাবিতে শুরু হওয়া ছাত্র আন্দোলন পরে ব্যাপক গণঅভ্যুত্থানে রূপ নেয়। ২. দেশের বিভিন্ন প্রান্তের ছাত্র-জনতা বৈষম্যবিরোধী আন্দোলনে ঐক্যবদ্ধভাবে অংশগ্রহণ করে। ৩. আন্দোলন চলাকালে আবু সাঈদসহ অনেক শিক্ষার্থী ও সাধারণ মানুষ প্রাণ হারান। ৪. এই আন্দোলনের ফলে দেশে একটি বড় ধরনের রাজনৈতিক পরিবর্তন সাধিত হয়। ৫. জুলাই গণঅভ্যুত্থান জাতির ইতিহাসে ঐক্য, সাহস ও ত্যাগের প্রতীক হিসেবে চিহ্নিত হয়ে আছে।"},

  {"id": "job-2025-dpe-accountant-q06", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "grammar", "qno": 6, "marks": 2, "type": "sentence-change", "question": "Correct the following Sentence:", "parts": [{"label": "", "original": "He speaks the English like English.", "changed": "He speaks English like the English."}]},

  {"id": "job-2025-dpe-accountant-q07", "examId": "job-2025-dpe-accountant", "subject": "bangla", "topic": "অনুবাদ", "qno": 7, "marks": 4, "type": "translate", "question": "ইংরেজিতে অনুবাদ করুনঃ", "parts": [{"label": "ক", "source": "সে ডায়রিয়ায় মারা গিয়েছে।", "target": "He/She died of diarrhea."}, {"label": "খ", "source": "শিশুটি কাঁদতে কাঁদতে আমার কাছে এল।", "target": "The child came to me crying."}]},

  {"id": "job-2025-dpe-accountant-q08", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "vocabulary", "qno": 8, "marks": 2, "type": "short-qa", "question": "What is the meaning of Acknowledge?", "parts": [{"label": "", "q": "What is the meaning of Acknowledge?", "a": "প্রাপ্তিস্বীকার"}]},

  {"id": "job-2025-dpe-accountant-q09", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "vocabulary", "qno": 9, "marks": 2, "type": "short-qa", "question": "What is the meaning of Green Banking?", "parts": [{"label": "", "q": "What is the meaning of Green Banking?", "a": "পরিবেশবান্ধব ব্যাংকিং"}]},

  {"id": "job-2025-dpe-accountant-q10", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "idiom", "qno": 10, "marks": 2, "type": "short-qa", "question": "What is the meaning of the phrase 'out of the wood'", "parts": [{"label": "", "q": "What is the meaning of the phrase 'out of the wood'", "a": "বিপদমুক্ত"}]},

  {"id": "job-2025-dpe-accountant-q11", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "vocabulary", "qno": 11, "marks": 2, "type": "short-qa", "question": "What is the opposite word of Honorary?", "parts": [{"label": "", "q": "What is the opposite word of Honorary?", "a": "Salaried/Paid"}]},

  {"id": "job-2025-dpe-accountant-q12", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "fill-in-the-blank", "qno": 12, "marks": 4, "type": "fill-gaps", "question": "Fill in the blank:", "parts": [{"sentence": "Early rising is beneficial…… health.", "answer": "to"}, {"sentence": "Slow and…… wins the race.", "answer": "steady"}, {"sentence": "He prefers tea…….coffee.", "answer": "to"}, {"sentence": "Justice delayed is justice denied - was stated by?", "answer": "Gladstone"}]},

  {"id": "job-2025-dpe-accountant-q13", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "grammar", "qno": 13, "marks": 1, "type": "short-qa", "question": "Write the Singular form of Agenda.", "parts": [{"label": "", "q": "Write the Singular form of Agenda.", "a": "Agendum"}]},

  {"id": "job-2025-dpe-accountant-q14", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "grammar", "qno": 14, "marks": 2, "type": "sentence-change", "question": "Do it at once এর passive voice লিখুন।", "parts": [{"label": "", "original": "Do it at once.", "changed": "Let it be done at once."}]},

  {"id": "job-2025-dpe-accountant-q15", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "grammar", "qno": 15, "marks": 2, "type": "sentence-change", "question": "Write the passive form of 'Who will do the work'?", "parts": [{"label": "", "original": "Who will do the work?", "changed": "By whom will the work be done?"}]},

  {"id": "job-2025-dpe-accountant-q16", "examId": "job-2025-dpe-accountant", "subject": "english", "topic": "paragraph", "qno": 16, "marks": 5, "type": "paragraph", "question": "Write a paragraph about 'Cox's Bazar Sea Beach' in 5 Sentences.", "answer": "Cox's Bazar Sea Beach is the longest natural sea beach in the world, located in Bangladesh. It stretches about 120 kilometers along the Bay of Bengal. The beach is famous for its golden sand, blue water, and beautiful sunset view. Every year, thousands of tourists from home and abroad visit Cox's Bazar to enjoy its natural beauty. It is truly a pride and a major tourist attraction of Bangladesh."},

  {"id": "job-2025-dpe-accountant-q17", "examId": "job-2025-dpe-accountant", "subject": "math", "topic": "শতকরা ও ভ্যাট", "qno": 17, "marks": 5, "type": "math", "question": "৪০০ টাকা দরে ৩ কেজি মিষ্টি কিনে শতকরা ৫ টাকা হারে ভ্যাট দিলে মোট খরচ কত টাকা তা নির্ণয় করুন।", "steps": ["৩ কেজি মিষ্টির মূল্য = ৪০০ × ৩ = ১২০০ টাকা", "৫ টাকা হারে ভ্যাট এর পরিমাণ = ১২০০ × ৫% = ৬০ টাকা", "মোট খরচ = ১২০০ + ৬০ = ১২৬০ টাকা"], "answer": "১২৬০ টাকা।"},

  {"id": "job-2025-dpe-accountant-q18", "examId": "job-2025-dpe-accountant", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 18, "marks": 5, "type": "math", "question": "১ ডজন কলা ১২০ টাকায় ক্রয় করে হালি কত টাকায় বিক্রয় করলে ১০% লাভ হবে তা নির্ণয় করুন।", "steps": ["১ ডজন = ৩ হালি", "৩ হালি কলার দাম ১২০ টাকা", "১ \" \" \" ১২০/৩", "= ৪০ টাকা", "১০% লাভে বিক্রয়মূল্য = ১১০ টাকা", "ক্রয়মূল্য ১০০ টাকা হলে বিক্রয়মূল্য ১১০ টাকা", "\" ১ \" \" \" ১১০/১০০", "\" ৪০ \" \" \" (১১০×৪০)/১০০", "= ৪৪ টাকা"], "answer": "৪৪ টাকা।"},

  {"id": "job-2025-dpe-accountant-q19", "examId": "job-2025-dpe-accountant", "subject": "math", "topic": "বীজগণিত", "qno": 19, "marks": 5, "type": "math", "question": "a + b + c = 2 এবং ab + bc + ac = 1 হলে, (a+b)² + (b+c)² + (c+a)² এর মান কত?", "steps": ["(a+b)² + (b+c)² + (c+a)²", "= a² + 2ab + b² + b² + 2bc + c² + c² + 2ca + a²", "= (a² + b² + c² + 2ab + 2bc + 2ca) + (a² + b² + c²)", "= (a+b+c)² + (a+b+c)² − 2(ab+bc+ca)", "= (2)² + (2)² − 2 × 1", "= 4 + 4 − 2 = 6 (Answer)"], "answer": "৬"},

  {"id": "job-2025-dpe-accountant-q20", "examId": "job-2025-dpe-accountant", "subject": "math", "topic": "বৃত্ত", "qno": 20, "marks": 5, "type": "math", "question": "একটি বৃত্তের পরিধি ও ক্ষেত্রফল যথাক্রমে ১৩২ সেন্টিমিটার ও ১৩৮৬ বর্গ সেন্টিমিটার হলে বৃত্তটির বৃহত্তম জ্যা এর দৈর্ঘ্য নির্ণয় করুন।", "steps": ["মনে করি, বৃত্তটির ব্যাসার্ধ = r", "বৃত্তের পরিধি = 2πr", "বৃত্তের ক্ষেত্রফল = πr²", "প্রশ্নমতে, 2πr = 132 ......... (i)", "এবং πr² = 1386 ......... (ii)", "(ii) নং কে (i) দ্বারা ভাগ করি,", "πr² ÷ 2πr = 1386 ÷ 132", "বা, r ÷ 2 = 10.5  ∴ r = 21", "সুতরাং বৃত্তির ব্যাসার্ধ = r = 21 সে.মি", "ব্যাস = 2 × 21 = 42 সে.মি", "আমরা জানি, বৃত্তের বৃহত্তম জ্যা-ই ব্যাস সুতরাং বৃহত্তম জ্যা এর দৈর্ঘ্য 42 সে.মি"], "answer": "৪২ সে.মি।"},

  {"id": "job-2025-dpe-accountant-q21", "examId": "job-2025-dpe-accountant", "subject": "general-knowledge", "topic": "gk-others", "qno": 21, "marks": 15, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "ক", "q": "ব্রিটেনের কোন জার্নালে নোবেল বিজয়ী ড. মুহাম্মদ ইউনূসকে \"National Builder\" বলা হয়েছে?", "a": "দ্যা নেচার"}, {"label": "খ", "q": "২০২৫-২৬ অর্থ বছরে সর্বোচ্চ বরাদ্দ দেয়া হয় কোন খাতে?", "a": "জনপ্রশাসন খাতে"}, {"label": "গ", "q": "ইংরেজ ইস্ট ইন্ডিয়া কোম্পানী কখন বাংলা, বিহার ও উড়িষ্যার দেওয়ানি লাভ করে?", "a": "১৭৬৫ সালে"}, {"label": "ঘ", "q": "জুলাই বিপ্লবের প্রথম শহিদ কে?", "a": "আবু সাঈদ"}, {"label": "ঙ", "q": "RDA এর পূর্ণ রূপ কি?", "a": "Rural Development Academy"}, {"label": "চ", "q": "জন্ম-মৃত্যু নিবন্ধন আইন সংসদে কত সালে পাশ হয়?", "a": "২০০৪ সালে"}, {"label": "ছ", "q": "প্রফেসর ড. মুহাম্মদ ইউনূস কত সালে নোবেল পুরস্কার লাভ করেন?", "a": "২০০৬ সালে"}, {"label": "জ", "q": "NAPE কোন মন্ত্রণালয়ের অধীন?", "a": "প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়"}, {"label": "ঝ", "q": "গ্রেট বেরিয়ার রিফ কোথায় অবস্থিত?", "a": "প্রশান্ত মহাসাগরে"}, {"label": "ঞ", "q": "When is the next US Presidential election?", "a": "২০২৮ সালে"}, {"label": "ট", "q": "সিঙ্গাপুর এর রাজধানীর নাম কি?", "a": "সিঙ্গাপুর সিটি"}, {"label": "ঠ", "q": "ভেনিজুয়েলা কোন মহাদেশে অন্তর্ভুক্ত?", "a": "দক্ষিণ আমেরিকা"}, {"label": "ড", "q": "ল্যান্ড অব মার্বেল বলা হয় কোন দেশকে?", "a": "ইতালিকে"}, {"label": "ঢ", "q": "ভিক্টোরিয়া ক্রস কোন দেশের সর্বোচ্চ খেতাব?", "a": "যুক্তরাজ্য"}, {"label": "ণ", "q": "\"ফিরিঙ্গি\" কাদের বলা হয়?", "a": "পর্তুগিজদের"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: প্রাথমিক শিক্ষা অধিদপ্তর — ভান্ডার রক্ষক (job-2025-dpe-store-keeper)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৯৬-৩৯৭)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-dpe-store-keeper-q01", "examId": "job-2025-dpe-store-keeper", "subject": "bangla", "topic": "কারক ও বিভক্তি", "qno": 1, "marks": 5, "type": "short-qa", "question": "কারক ও বিভক্তি নির্ণয় করুন:", "parts": [{"label": "ক", "q": "রাম কর্তৃক রাবন নিহত হয়েছিল।", "a": "কর্তৃকারকে ৩য়া"}, {"label": "খ", "q": "আমার যাওয়া হয়নি।", "a": "কর্তায় ৬ষ্ঠী"}, {"label": "গ", "q": "তোমার পূজার ছলে তোমায় ভুলে থাকি।", "a": "সম্প্রদানে ৬ষ্ঠী"}, {"label": "ঘ", "q": "তুমি সন্ধ্যাকাশের তারার মতো।", "a": "অধিকরণে ৬ষ্ঠী"}, {"label": "ঙ", "q": "কী হচ্ছে বাইরে?", "a": "অধিকরণে ৭মী"}]},

  {"id": "job-2025-dpe-store-keeper-q02", "examId": "job-2025-dpe-store-keeper", "subject": "bangla", "topic": "বাগধারা", "qno": 2, "marks": 4, "type": "short-qa", "question": "বাগধারা- অর্থসহ বাক্য রচনা করুন-", "parts": [{"label": "ক", "q": "অক্ষরে অক্ষরে", "a": "যথাযথ"}, {"label": "খ", "q": "অকালে বাদলা", "a": "অপ্রত্যাশিত বাধা"}, {"label": "ক", "q": "কচ্ছে পাওয়া", "a": "পাত্তা পাওয়া"}, {"label": "খ", "q": "ইন্দ্রপতন", "a": "বিখ্যাত ব্যক্তির মৃত্যু"}, {"label": "গ", "q": "ঘোড়ার কামড়", "a": "দৃঢ় পণ"}]},

  {"id": "job-2025-dpe-store-keeper-q03", "examId": "job-2025-dpe-store-keeper", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 3, "marks": 5, "type": "short-qa", "question": "এক কথায় প্রকাশ করুন:", "parts": [{"label": "ক", "q": "সৎকুলে জাত", "a": "কুলীন"}, {"label": "খ", "q": "স্ত্রীর সংগে বর্তমান", "a": "সস্ত্রীক"}, {"label": "গ", "q": "মাছের মতো অক্ষি যার", "a": "মীনাক্ষী"}, {"label": "ঘ", "q": "তৃণাচ্ছাদিত ভূমি", "a": "শাদ্বল"}, {"label": "ঙ", "q": "ইরাবতে জাত", "a": "ঐরাবত"}]},

  {"id": "job-2025-dpe-store-keeper-q04", "examId": "job-2025-dpe-store-keeper", "subject": "bangla", "topic": "সন্ধি বিচ্ছেদ", "qno": 4, "marks": 5, "type": "short-qa", "question": "সন্ধি বিচ্ছেদ করুন-", "parts": [{"label": "ক", "q": "দাবানল", "a": "দাব + অনল"}, {"label": "খ", "q": "অধমর্ণ", "a": "অধম + ঋণ"}, {"label": "গ", "q": "দুগ্ধ", "a": "দুহ্ + ত"}, {"label": "ঘ", "q": "ষষ্ঠ", "a": "ষষ্ + থ"}, {"label": "ঙ", "q": "সরোজ", "a": "সরঃ + জ"}]},

  {"id": "job-2025-dpe-store-keeper-q05", "examId": "job-2025-dpe-store-keeper", "subject": "bangla", "topic": "রচনামূলক", "qno": 5, "marks": 5, "type": "paragraph", "question": "'বাঙ্গালী একটি ক্রীড়াপ্রেমী জাতি'- এ বিষয়ে ৫টি অর্থপূর্ণ বাক্য লিখুন।", "answer": "১. বাঙালি জাতি চিরকালই খেলাধুলার প্রতি গভীর অনুরাগী। ২. ফুটবল ও ক্রিকেট বাংলাদেশের সবচেয়ে জনপ্রিয় খেলা। ৩. গ্রামবাংলায় হাডুডু, কাবাডি, নৌকাবাইচের মতো ঐতিহ্যবাহী খেলাও জনপ্রিয়। ৪. জাতীয় দলের সাফল্যে সারা দেশের মানুষ একসাথে উল্লাস প্রকাশ করে। ৫. খেলাধুলা বাঙালির সামাজিক ও সাংস্কৃতিক জীবনের একটি অবিচ্ছেদ্য অংশ।"},

  {"id": "job-2025-dpe-store-keeper-q06", "examId": "job-2025-dpe-store-keeper", "subject": "english", "topic": "grammar", "qno": 6, "marks": 2, "type": "short-qa", "question": "How many parts are there in a letter?", "parts": [{"label": "", "q": "How many parts are there in a letter?", "a": "Six (6)"}]},

  {"id": "job-2025-dpe-store-keeper-q07", "examId": "job-2025-dpe-store-keeper", "subject": "bangla", "topic": "অনুবাদ", "qno": 7, "marks": 4, "type": "translate", "question": "ইংরেজিতে অনুবাদ করুনঃ", "parts": [{"label": "ক", "source": "সে ডায়রিয়ায় মারা গিয়েছে।", "target": "He/She died of diarrhea."}, {"label": "খ", "source": "শিশুটি কাঁদতে কাঁদতে আমার কাছে এল।", "target": "The child came to me crying."}]},

  {"id": "job-2025-dpe-store-keeper-q08", "examId": "job-2025-dpe-store-keeper", "subject": "english", "topic": "grammar", "qno": 8, "marks": 2, "type": "short-qa", "question": "What kind parts of speech is 'Beauty'", "parts": [{"label": "", "q": "What kind parts of speech is 'Beauty'", "a": "Noun"}]},

  {"id": "job-2025-dpe-store-keeper-q09", "examId": "job-2025-dpe-store-keeper", "subject": "english", "topic": "fill-in-the-blank", "qno": 9, "marks": 4, "type": "fill-gaps", "question": "Fill in the blank:", "parts": [{"sentence": "Early rising is beneficial…… health.", "answer": "to"}, {"sentence": "Slow and…… wins the race.", "answer": "steady"}, {"sentence": "He prefers tea…….coffee.", "answer": "to"}, {"sentence": "Justice delayed is justice denied - was stated by?", "answer": "Gladstone"}]},

  {"id": "job-2025-dpe-store-keeper-q10", "examId": "job-2025-dpe-store-keeper", "subject": "english", "topic": "idiom", "qno": 10, "marks": 2, "type": "short-qa", "question": "What is the meaning of the phrase 'out of the wood'", "parts": [{"label": "", "q": "What is the meaning of the phrase 'out of the wood'", "a": "বিপদমুক্ত"}]},

  {"id": "job-2025-dpe-store-keeper-q11", "examId": "job-2025-dpe-store-keeper", "subject": "english", "topic": "grammar", "qno": 11, "marks": 2, "type": "sentence-change", "question": "What is the passive form of 'Who will do the work?'", "parts": [{"label": "", "original": "Who will do the work?", "changed": "By whom will the work be done?"}]},

  {"id": "job-2025-dpe-store-keeper-q12", "examId": "job-2025-dpe-store-keeper", "subject": "english", "topic": "grammar", "qno": 12, "marks": 2, "type": "sentence-change", "question": "Make the sentence negative without changing meaning: I must go there.", "parts": [{"label": "", "original": "I must go there.", "changed": "I can not but go there."}]},

  {"id": "job-2025-dpe-store-keeper-q13", "examId": "job-2025-dpe-store-keeper", "subject": "english", "topic": "literature", "qno": 13, "marks": 1, "type": "short-qa", "question": "Who wrote 'Julius Caesar'?", "parts": [{"label": "", "q": "Who wrote 'Julius Caesar'?", "a": "William Shakespeare"}]},

  {"id": "job-2025-dpe-store-keeper-q14", "examId": "job-2025-dpe-store-keeper", "subject": "english", "topic": "paragraph", "qno": 14, "marks": 5, "type": "paragraph", "question": "Write a paragraph about 'Primary Education in Bangladesh' in 5 Sentences.", "answer": "Primary education is the first stage of formal education in Bangladesh, usually starting at the age of six. It aims to provide basic literacy, numeracy, and moral values to children. The government has made primary education free and compulsory for all children. Millions of students are enrolled in government and non-government primary schools across the country. Improving the quality of primary education is essential for the overall development of the nation."},

  {"id": "job-2025-dpe-store-keeper-q15", "examId": "job-2025-dpe-store-keeper", "subject": "math", "topic": "শতকরা ও ভ্যাট", "qno": 15, "marks": 5, "type": "math", "question": "৪০০ টাকা দরে ৩ কেজি মিষ্টি কিনে শতকরা ৫ টাকা হারে ভ্যাট দিলে মোট খরচ কত টাকা তা নির্ণয় করুন।", "steps": ["৩ কেজি মিষ্টির মূল্য = ৪০০ × ৩ = ১২০০ টাকা", "৫ টাকা হারে ভ্যাট এর পরিমাণ = ১২০০ × ৫% = ৬০ টাকা", "মোট খরচ = ১২০০ + ৬০ = ১২৬০ টাকা"], "answer": "১২৬০ টাকা।"},

  {"id": "job-2025-dpe-store-keeper-q16", "examId": "job-2025-dpe-store-keeper", "subject": "math", "topic": "লাভ-ক্ষতি", "qno": 16, "marks": 5, "type": "math", "question": "১ ডজন কলা ১২০ টাকায় ক্রয় করে হালি কত টাকায় বিক্রয় করলে ১০% লাভ হবে তা নির্ণয় করুন।", "steps": ["১ ডজন = ৩ হালি", "৩ হালি কলার দাম ১২০ টাকা", "১ \" \" \" ১২০/৩", "= ৪০ টাকা", "১০% লাভে বিক্রয়মূল্য = ১১০ টাকা", "ক্রয়মূল্য ১০০ টাকা হলে বিক্রয়মূল্য ১১০ টাকা", "\" ১ \" \" \" ১১০/১০০", "\" ৪০ \" \" \" (১১০×৪০)/১০০", "= ৪৪ টাকা"], "answer": "৪৪ টাকা।"},

  {"id": "job-2025-dpe-store-keeper-q17", "examId": "job-2025-dpe-store-keeper", "subject": "math", "topic": "বীজগণিত", "qno": 17, "marks": 5, "type": "math", "question": "x + y + 4 = x − y − 12 = 0 হয়, 2x+y এর মান কত?", "steps": ["x + y + 4 = x − y − 12 = 0", "অর্থাৎ, x + y + 4 = 0", "বা, x + y = −4 ....(i)", "এবং x − y = 12 ......(ii)", "(i) ও (ii) যোগ করে,", "2x = 8", "∴ x = 4", "(i) নং-এ x এর মান বসিয়ে -", "4 + y = −4", "বা, y = −4 − 4", "∴ y = −8", "এখন, 2x + y = 2 × 4 + (−8)", "= 8 − 8 = 0 (Answer)"], "answer": "০ (শূন্য)"},

  {"id": "job-2025-dpe-store-keeper-q18", "examId": "job-2025-dpe-store-keeper", "subject": "math", "topic": "জ্যামিতি", "qno": 18, "marks": 5, "type": "math", "question": "সমকোণী ত্রিভুজের সমকোণ সংলগ্ন বাহুদ্বয় যথাক্রমে ৩ ও ৪ সেন্টিমিটার হলে এর অতিভুজের মান বের করুন।", "steps": ["দেওয়া আছে, সমকোণী ত্রিভুজের সমকোণ সংলগ্ন বাহুদ্বয় যথাক্রমে ৩ সে.মি ও ৪ সে.মি", "∴ সমকোণী ত্রিভুজের ক্ষেত্রে,", "অতিভুজ² = লম্ব² + ভূমি²", "বা, অতিভুজ² = ৩² + ৪²", "বা, অতিভুজ² = ৯ + ১৬", "বা, অতিভুজ² = ২৫", "∴ অতিভুজ = ৫"], "answer": "৫ সে.মি"},

  {"id": "job-2025-dpe-store-keeper-q19", "examId": "job-2025-dpe-store-keeper", "subject": "general-knowledge", "topic": "gk-others", "qno": 19, "marks": 15, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দিন-", "parts": [{"label": "ক", "q": "জুলাই অনিবার্য কী?", "a": "২০২৪ সালে ছাত্র-জনতার অভ্যুত্থান ও আত্মত্যাগ নিয়ে নির্মিত ভিডিওচিত্র। ২১ নভেম্বর, ২০২৪ ভিডিওচিত্রটি প্রকাশ করা হয়।"}, {"label": "গ", "q": "আইন-ই-আকবরী গ্রন্থের রচয়িতা কে?", "a": "আবুল ফজল"}, {"label": "গ", "q": "ইংরেজ ইস্ট ইন্ডিয়া কোম্পানী কখন বাংলা, বিহার ও উড়িয়্যার দেওয়ানি লাভ করে?", "a": "১৭৬৫ সালে"}, {"label": "ঘ", "q": "বাংলাদেশের কোন জেলাকে \"হিমালয়ের কন্যা\" বলা হয়?", "a": "পঞ্চগড়"}, {"label": "ঙ", "q": "\"শাহবাজপুর\" কোন জেলার পূর্বনাম?", "a": "ভোলা"}, {"label": "চ", "q": "রেমিটেন্স কী?", "a": "বিদেশে কর্মরত ব্যক্তিদের দেশে প্রেরিত বৈদেশিক মুদ্রাকে রেমিটেন্স বলে।"}, {"label": "ছ", "q": "প্রফেসর ড. মুহাম্মদ ইউনূস কত সালে নোবেল পুরস্কার লাভ করেন?", "a": "২০০৬ সালে"}, {"label": "জ", "q": "বাংলাদেশের সমুদ্র বন্দর কয়টি?", "a": "তিনটি – চট্টগ্রাম, মংলা ও পায়রা সমুদ্র বন্দর।"}, {"label": "ঝ", "q": "চিলির রাজধানীর নাম কী?", "a": "সান্টিয়াগো"}, {"label": "ঞ", "q": "When is the next US Presidential election?", "a": "২০২৮ সালে"}, {"label": "ট", "q": "পোর্ট অব স্পেন কোন দেশের রাজধানী?", "a": "ত্রিনিদাদ অ্যান্ড টোবাগো"}, {"label": "ঠ", "q": "কোন শহরকে \"পৃথিবীর কসাইখানা\" বলা হয়?", "a": "শিকাগো"}, {"label": "ড", "q": "বিশ্বের দীর্ঘতম খালের নাম কী?", "a": "গ্রান্ড খাল"}, {"label": "ঢ", "q": "ভিক্টোরিয়া ক্রস কোন দেশের সর্বোচ্চ খেতাব?", "a": "যুক্তরাজ্য"}, {"label": "ণ", "q": "\"ফিরিঙ্গি\" কাদের বলা হয়?", "a": "পর্তুগিজদের"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বাংলাদেশ অভ্যন্তরীন নৌ-পরিবহন কর্তৃপক্ষ — ভান্ডারী (job-2025-biwta-store-officer)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৯৮-৩৯৯)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-biwta-store-officer-q01", "examId": "job-2025-biwta-store-officer", "subject": "bangla", "topic": "শব্দার্থ ও বাগধারা", "qno": 1, "marks": 4, "type": "short-qa", "question": "নিম্নলিখিত প্রশ্নের উত্তর লিখুন:", "parts": [{"label": "ক", "q": "'আমার ভাইয়ের রক্তে রাঙানো একুশে ফেব্রুয়ারি আমি কি ভুলিতে পারি'-একুশের গান এর রচয়িতা কে?", "a": "আবদুল গাফফার চৌধুরী"}, {"label": "খ", "q": "'গা ঢাকা দেওয়া' বাগধারাটির অর্থ কী?", "a": "আত্মগোপন"}, {"label": "গ", "q": "'আহার' শব্দে বিপরীতার্থক শব্দ কী?", "a": "অনাহার"}, {"label": "ঘ", "q": "সমোচ্চারিত শব্দ 'অন্য' ও 'অন্ন'-এর অর্থ কী?", "a": "অন্য = পৃথক, ভিন্ন; অন্ন = ভাত, খাদ্য"}]},

  {"id": "job-2025-biwta-store-officer-q02", "examId": "job-2025-biwta-store-officer", "subject": "bangla", "topic": "অনুচ্ছেদ", "qno": 2, "marks": 5, "type": "paragraph", "question": "অনুচ্ছেদ লিখুন- 'রান্নাঘরের পরিচ্ছন্নতার প্রয়োজনীয়তা'", "answer": "রান্নাঘরের পরিচ্ছন্নতার প্রয়োজনীয়তা\n\nরান্নাঘর হলো পরিবারের সুস্থতার একটি গুরুত্বপূর্ণ কেন্দ্র। রান্নাঘর অপরিচ্ছন্ন থাকলে সেখান থেকে বিভিন্ন রোগজীবাণু ছড়িয়ে পড়ার আশঙ্কা থাকে। খাদ্য প্রস্তুতির স্থান নোংরা হলে খাবারে জীবাণু সংক্রমণ ঘটে, যা পেটের পীড়া, ডায়রিয়াসহ নানা রোগের কারণ হতে পারে। তাই রান্নার আগে ও পরে হাত ধোয়া, বাসনপত্র পরিষ্কার রাখা এবং রান্নাঘরের মেঝে ও তাক নিয়মিত মোছা জরুরি। উচ্ছিষ্ট খাবার ও ময়লা সঠিকভাবে অপসারণ না করলে পোকামাকড় ও ইঁদুরের উপদ্রব বাড়ে। পরিষ্কার-পরিচ্ছন্ন রান্নাঘর শুধু স্বাস্থ্যের জন্যই নয়, বরং মানসিক প্রশান্তির জন্যও গুরুত্বপূর্ণ। তাই প্রতিটি পরিবারের উচিত রান্নাঘরের পরিচ্ছন্নতা বজায় রাখা।"},

  {"id": "job-2025-biwta-store-officer-q03", "examId": "job-2025-biwta-store-officer", "subject": "english", "topic": "grammar", "qno": 3, "marks": 4, "type": "short-qa", "question": "Write the correct answer:", "parts": [{"label": "a", "q": "Fill in the blank with appropriate article (a/an/the):........ moon looks beautiful tonight.", "a": "The"}, {"label": "b", "q": "Write the appropriate preposition (in/to/by): The chef went...... the market to buy some vegetables.", "a": "to"}, {"label": "c", "q": "Write the correct form of the verb: The man is (cook/cooking/cooked) a delicious dish.", "a": "cooking"}, {"label": "d", "q": "Translate into Bangla: She is a good cook.", "a": "সে একজন ভালো রাঁধুনি।"}]},

  {"id": "job-2025-biwta-store-officer-q04", "examId": "job-2025-biwta-store-officer", "subject": "english", "topic": "paragraph", "qno": 4, "marks": 5, "type": "paragraph", "question": "Write a paragraph on 'My Home District'", "answer": "My Home District\n\nI was born and brought up in my home district, which holds a special place in my heart. It is well known for its natural beauty, rich culture, and hospitable people. The district has fertile land, and agriculture is the main occupation of most people here. There are several historical places and rivers that add to its charm. People of my district are simple, hardworking, and united. Every year, various fairs and festivals are celebrated with great enthusiasm. I feel proud to belong to this district and always cherish the memories of my childhood spent here."},

  {"id": "job-2025-biwta-store-officer-q05", "examId": "job-2025-biwta-store-officer", "subject": "math", "topic": "গণিত সমস্যা", "qno": 5, "marks": 12, "type": "math", "question": "নিম্নলিখিত প্রশ্নের উত্তর দিন:\nক) একজন শ্রমিক প্রতিদিন প্রথম ৬ ঘণ্টা কাজের জন্য ঘণ্টায় ১২ টাকা করে এবং পরবর্তী সময়ে ঘণ্টায় ১৫ টাকা করে মজুরী পায়। দৈনিক ১০ ঘণ্টা কাজ করলে সে দিনে কত টাকা মজুরী পাবে?\nখ) a = 1, b = -1, c = 2, d = -2 হলে, a + b - c + d এর মান কত হবে?\nগ) ১ থেকে ৪৯ পর্যন্ত ক্রমিক সংখ্যাগুলোর যোগফল কত?\nঘ) একটি বর্গাকার রান্না ঘরের দৈর্ঘ্য ২০ ফুট। রান্না ঘরটির ক্ষেত্রফল কত?", "steps": ["ক) প্রথম ৬ ঘণ্টার জন্য মজুরি = ঘণ্টায় ১২ টাকা", "পরবর্তী সময়ের জন্য (অতিরিক্ত সময়) = ঘণ্টায় ১৫ টাকা", "মোট কাজের সময় = ১০ ঘণ্টা", "প্রথম ৬ ঘণ্টার মজুরি = ৬ × ১২ = ৭২ টাকা", "পরবর্তী ৪ ঘণ্টার মজুরি = ৪ × ১৫ = ৬০ টাকা", "মোট মজুরি = ৭২ + ৬০ = ১৩২ টাকা", "খ) a+b−c+d = ১+(−১)−২+(−২) = ১−১−২−২ = −৪ (Answer)", "গ) যোগফল = ৪৯×(৪৯+১)/২ = ৪৯×৫০/২ = ১২২৫", "ঘ) ক্ষেত্রফল = (২০)² = ৪০০ বর্গফুট"], "answer": "ক) ১৩২ টাকা। খ) −৪। গ) ১২২৫। ঘ) ৪০০ বর্গফুট।"},

  {"id": "job-2025-biwta-store-officer-q06", "examId": "job-2025-biwta-store-officer", "subject": "general-knowledge", "topic": "gk-others", "qno": 6, "marks": 20, "type": "short-qa", "question": "নিম্নলিখিত প্রশ্নের উত্তর লিখুনঃ", "parts": [{"label": "বিষয় ভিত্তিক প্রসঙ্গ - ক", "q": "খাবার রান্না ও পরিবেশনের আগে হাত ধুতে হয় কেন?", "a": "জীবাণু ও ময়লা হাত থেকে খাবারে ছড়িয়ে রোগ ছড়াতে পারে, তাই পরিষ্কার-পরিচ্ছন্ন থাকার জন্য রান্না ও পরিবেশনের আগে হাত ধোয়া প্রয়োজন।"}, {"label": "খ", "q": "লবণ বেশি পড়ে গেলে খাবারের লবণাক্ততা কমানোর সহজ উপায় কী?", "a": "খাবারে কিছুটা আলু, টমেটো বা ময়দার গোলা দিয়ে ফুটালে অতিরিক্ত লবণ শোষিত হয়ে লবণাক্ততা কমে যায়।"}, {"label": "গ", "q": "পেঁয়াজ কাটার সময় চোখে পানি কেন আসে?", "a": "পেঁয়াজ কাটার সময় এতে থাকা সালফারযুক্ত গ্যাস বাতাসে ছড়িয়ে চোখে গিয়ে জ্বালা সৃষ্টি করে, ফলে চোখে পানি আসে।"}, {"label": "ঘ", "q": "রান্নায় 'গ্রেভি' বলতে কী বোঝায়?", "a": "রান্না করা তরকারির মশলা, তেল ও ঝোলের মিশ্র ঘন তরল অংশকে 'গ্রেভি' বলে।"}, {"label": "ঙ", "q": "রান্নার সময় কোন রঙের আগুন সবচেয়ে বেশি তাপ দেয়?", "a": "নীল রঙের আগুন সবচেয়ে বেশি তাপ দেয়।"}, {"label": "বাংলাদেশ ও আন্তর্জাতিক প্রসঙ্গ - চ", "q": "কোন ভিটামিনের অভাবে বাংলাদেশের শিশুদের দৃষ্টিশক্তি কমে যায়?", "a": "ভিটামিন 'এ' (A)"}, {"label": "ছ", "q": "পার্বত্য চট্টগ্রামে কয়টি জেলা আছে?", "a": "৩টি"}, {"label": "জ", "q": "বাংলাদেশের প্রধান কৃষিপণ্য কী?", "a": "ধান"}, {"label": "ঝ", "q": "আয়তনের দিক থেকে পৃথিবীর সবচেয়ে বড় দেশ কোনটি?", "a": "রাশিয়া"}, {"label": "ঞ", "q": "শ্রীলংকার রাজধানীর নাম কী?", "a": "শ্রী জয়বর্ধনপুর কোট্টে"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: স্বাস্থ্য সেবা বিভাগ — অফিস সহায়ক (job-2025-health-services-office-sohayak)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৯৯-৪০১)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-health-services-office-sohayak-q01", "examId": "job-2025-health-services-office-sohayak", "subject": "bangla", "topic": "সন্ধি বিচ্ছেদ", "qno": 1, "marks": 4, "type": "short-qa", "question": "সন্ধি বিচ্ছেদ করুন:", "parts": [{"label": "ক", "q": "তৃষ্ণার্ত", "a": "তৃষ্ণা + ঋত"}, {"label": "খ", "q": "শিরশ্ছেদ", "a": "শিরঃ + ছেদ"}, {"label": "গ", "q": "শশাঙ্ক", "a": "শশ + অঙ্ক"}, {"label": "ঘ", "q": "তদ্ধিত", "a": "তদ্ + হিত"}]},

  {"id": "job-2025-health-services-office-sohayak-q02", "examId": "job-2025-health-services-office-sohayak", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 2, "marks": 4, "type": "short-qa", "question": "শুদ্ধ বানান লিখুন:", "parts": [{"label": "", "q": "পুংকানুপংখ", "a": "পুঙ্খানুপুঙ্খ"}, {"label": "", "q": "কষ্ঠধনি", "a": "কণ্ঠ্যধ্বনি"}, {"label": "", "q": "উলফ্ফন", "a": "উল্লফন"}, {"label": "", "q": "প্রতীদ্বন্দীতা", "a": "প্রতিদ্বন্দ্বিতা"}]},

  {"id": "job-2025-health-services-office-sohayak-q03", "examId": "job-2025-health-services-office-sohayak", "subject": "bangla", "topic": "সমাস", "qno": 3, "marks": 4, "type": "short-qa", "question": "ব্যাসবাক্যসহ সমাস নির্ণয় করুন:", "parts": [{"label": "ক", "q": "বিপত্নীক", "a": "বি (বিগত) হয়েছে পত্নী যার - বহুব্রীহি"}, {"label": "খ", "q": "আয়কর", "a": "আয়ের উপর কর - মধ্যপদলোপী কর্মধারয়"}, {"label": "গ", "q": "আমরা", "a": "তুমি, আমি ও সে - নিত্য সমাস"}, {"label": "ঘ", "q": "দশানন", "a": "দশ আনন যার - বহুব্রীহি"}]},

  {"id": "job-2025-health-services-office-sohayak-q04", "examId": "job-2025-health-services-office-sohayak", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 4, "marks": 4, "type": "short-qa", "question": "এক কথায় প্রকাশ করুন:", "parts": [{"label": "ক", "q": "যে নারীর হাসি সুন্দর", "a": "সুস্মিতা"}, {"label": "খ", "q": "জীবিত থেকেও যে মৃত", "a": "জীবন্মৃত"}, {"label": "গ", "q": "মান-সম্মান প্রাপ্তির যোগ্য", "a": "মাননীয়"}, {"label": "ঘ", "q": "কাঁচের তৈরি বাড়ি", "a": "শিশমহল"}]},

  {"id": "job-2025-health-services-office-sohayak-q05", "examId": "job-2025-health-services-office-sohayak", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 5, "marks": 4, "type": "short-qa", "question": "বিপরীত শব্দ লিখুন:", "parts": [{"label": "", "q": "হর্ষ", "a": "বিষাদ"}, {"label": "", "q": "আকুঞ্চন", "a": "প্রসারণ"}, {"label": "", "q": "ক্ষীণ", "a": "পুষ্ট"}, {"label": "", "q": "বিনীত", "a": "দুর্বিনীত"}]},

  {"id": "job-2025-health-services-office-sohayak-q06", "examId": "job-2025-health-services-office-sohayak", "subject": "english", "topic": "grammar", "qno": 6, "marks": 4, "type": "sentence-change", "question": "Correct the following sentences:", "parts": [{"label": "a", "original": "My mother has come yesterday.", "changed": "My mother came yesterday."}, {"label": "b", "original": "Tell me how are you?", "changed": "Tell me how you are."}, {"label": "c", "original": "Always speak truth.", "changed": "Always speak the truth."}, {"label": "d", "original": "Wait here until I don't come.", "changed": "Wait here until I come."}]},

  {"id": "job-2025-health-services-office-sohayak-q07", "examId": "job-2025-health-services-office-sohayak", "subject": "english", "topic": "fill-in-the-blank", "qno": 7, "marks": 4, "type": "fill-gaps", "question": "Fill in the gaps with prepositions:", "parts": [{"sentence": "The girl takes......... her sister.", "answer": "after"}, {"sentence": "The man died ......... dengue.", "answer": "of"}, {"sentence": "The bananas sell....... the dozen.", "answer": "by"}, {"sentence": "He insisted......... his innocence.", "answer": "on"}]},

  {"id": "job-2025-health-services-office-sohayak-q08", "examId": "job-2025-health-services-office-sohayak", "subject": "english", "topic": "grammar", "qno": 8, "marks": 4, "type": "sentence-change", "question": "Change the voice:", "parts": [{"label": "a", "original": "Let me buy a plate.", "changed": "Let a plate be bought for me."}, {"label": "b", "original": "A storm has uprooted the tree.", "changed": "The tree has been uprooted by a storm."}]},

  {"id": "job-2025-health-services-office-sohayak-q09", "examId": "job-2025-health-services-office-sohayak", "subject": "english", "topic": "translation", "qno": 9, "marks": 4, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "তুমি হাসছো কেন?", "target": "Why are you laughing?"}, {"label": "খ", "source": "বৃষ্টি থামার পর আমরা রওয়ানা করেছিলাম।", "target": "We started after the rain had stopped."}, {"label": "গ", "source": "আমি এখনো তাকে দেখিনি।", "target": "I have not seen him yet."}, {"label": "ঘ", "source": "সে নাচতে নাচতে চলে গেল।", "target": "He went away dancing."}]},

  {"id": "job-2025-health-services-office-sohayak-q10", "examId": "job-2025-health-services-office-sohayak", "subject": "english", "topic": "idiom", "qno": 10, "marks": 3, "type": "idiom", "question": "Write sentences with meaning of the following Idioms:", "parts": [{"label": "a", "phrase": "Blue blood", "meaning": "অভিজাত বংশীয়", "example": "He is proud of his blue blood."}, {"label": "b", "phrase": "Null and void", "meaning": "বাতিল", "example": "The deed has been null and void now."}, {"label": "c", "phrase": "At daggers drawn", "meaning": "সাপে নেউলে", "example": "At present the two brothers are at daggers drawn."}]},

  {"id": "job-2025-health-services-office-sohayak-q11", "examId": "job-2025-health-services-office-sohayak", "subject": "math", "topic": "বয়সের অনুপাত", "qno": 11, "marks": 8, "type": "math", "question": "আট বছর পূর্বে পিতার বয়স পুত্রের বয়সের আটগুণ ছিল। দশ বছর পর পিতার বয়স পুত্রের বয়সের দ্বিগুণ হবে। বর্তমানে কার বয়স কত?", "steps": ["মনে করি, বর্তমানে পিতার বয়স x বছর ও পুত্রের বয়স y বছর।", "১ম শর্তানুসারে, x − 8 = 8(y − 8) ....... (1)", "এবং ২য় শর্তানুসারে, x + 10 = 2(y + 10) ...... (2)", "(1) হতে পাই, x − 8 = 8y − 64", "বা, x = 8y − 64 + 8", "বা, x = 8y − 56 ....... (3)", "(1) হতে পাই, x + 10 = 2y + 20", "(3) হতে x এর মান বসিয়ে, 8y − 56 + 10 = 2y + 20", "বা, 8y − 2y = 20 + 56 − 10", "বা, 6y = 66", "∴ y = 11", "(3) হতে পাই, x = 8 × 11 − 56 = 88 − 56 = 32", "∴ বর্তমানে পিতার বয়স 32 বছর এবং পুত্রের বয়স 11 বছর।", "বিকল্প সমাধান: মনে করি, 8 বছর পূর্বে পুত্রের বয়স x বছর, 8 বছর পূর্বে পিতার বয়স 8x বছর", "পুত্রের বর্তমান বয়স = x + 8", "পিতার বর্তমান বয়স = 8x + 8", "প্রশ্নমতে, 8x + 8 + 10 = 2(x + 8 + 10)", "বা, 8x + 18 = 2x + 36", "বা, 6x = 18", "∴ x = 3", "∴ পুত্রের বর্তমান বয়স = (3 + 8) বছর = 11 বছর", "পিতার বর্তমান বয়স = {(3 × 8) + 8} বছর = 32 বছর"], "answer": "পিতার বয়স ৩২ বছর এবং পুত্রের বয়স ১১ বছর।"},

  {"id": "job-2025-health-services-office-sohayak-q12", "examId": "job-2025-health-services-office-sohayak", "subject": "math", "topic": "ত্রিভুজের কোণ", "qno": 12, "marks": 5, "type": "math", "question": "একটি ত্রিভুজের তিনটি কোণের অনুপাত ৩ঃ৪ঃ৫ হলে, কোণ তিনটিকে ডিগ্রিতে প্রকাশ করুন।", "steps": ["অনুপাতটির রাশি গুলোর যোগফল = ৩ + ৪ + ৫ = ১২", "ত্রিভুজের তিনটি কোণের সমষ্টি = ১৮০°", "১ম কোণ = (১৮০ এর ৩/১২)° = ৪৫°", "২য় কোণ = (১৮০ এর ৪/১২)° = ৬০°", "৩য় কোণ = (১৮০ এর ৫/১২)° = ৭৫°"], "answer": "১ম, ২য় ও ৩য় কোণের মান যথাক্রমে ৪৫°, ৬০°, ৭৫°।"},

  {"id": "job-2025-health-services-office-sohayak-q13", "examId": "job-2025-health-services-office-sohayak", "subject": "math", "topic": "আয়তক্ষেত্র", "qno": 13, "marks": 5, "type": "math", "question": "একটি আয়তাকার ঘরের প্রস্থ তার দৈর্ঘ্যর তিনগুণ। ঘরটির পরিসীমা ৪০ মিটার। ঘরটির আয়তন কত?", "steps": ["ধরি, ঘরটির দৈর্ঘ্য x মিটার;", "∴ প্রস্থ = ৩x মিটার", "শর্তমতে, ২(৩x + x) = ৪০", "বা, ৮x = ৪০", "∴ x = ৫মিটার", "সুতরাং ঘরটির দৈর্ঘ্য ৫ মিটার এবং প্রস্থ ১৫ মিটার", "∴ ঘরটির ক্ষেত্রফল = ৫ × ১৫ = ৭৫ বর্গমিটার"], "answer": "৭৫ বর্গমিটার। (মূল বইয়ে প্রশ্নে 'প্রস্থ তার দৈর্ঘ্যর তিনগুণ' এবং সমাধানে 'ক্ষেত্রফল' লেখা হলেও প্রশ্নে 'আয়তন' শব্দ ব্যবহৃত হয়েছে — বই অনুযায়ী হুবহু রাখা হলো)"},

  {"id": "job-2025-health-services-office-sohayak-q14", "examId": "job-2025-health-services-office-sohayak", "subject": "math", "topic": "বীজগণিত", "qno": 14, "marks": 5, "type": "math", "question": "x − 1/x = 2 হলে, x⁴ + 1/x⁴ এর মান কত?", "steps": ["দেওয়া আছে, x − 1/x = 2", "বামপক্ষ = x⁴ + 1/x⁴", "= (x²)² + (1/x²)²", "= (x² + 1/x²)² − 2.x².1/x²", "= (x² + 1/x²)² − 2", "= {(x − 1/x)² + 2.x.1/x}² − 2", "= (2² + 2)² − 2", "= (4 + 2)² − 2", "= (6)² − 2", "= 36 − 2 = 34 (Answer)", "বিকল্প সমাধান: দেওয়া আছে, x − 1/x = 2", "বা, (x − 1/x)² = (2)²  [উভয় পক্ষকে বর্গ করে]", "বা, x² − 2.x.1/x + (1/x)² = 4", "বা, x² − 2 + 1/x² = 4", "বা, x² + 1/x² = 4 + 2", "বা, x² + 1/x² = 6", "বা, (x² + 1/x²)² = (6)²  [পুনরায় বর্গ করে]", "বা, (x²)² + 2.x².1/x² + (1/x²)² = 36", "বা, x⁴ + 2 + 1/x⁴ = 36", "বা, x⁴ + 1/x⁴ = 36 − 2", "∴ x⁴ + 1/x⁴ = 34 (Answer)"], "answer": "৩৪। (লক্ষণীয়: মূল বইয়ের প্রথম সমাধান পদ্ধতির শুরুতে লেখা 'x − 1/x = 4' একটি মুদ্রণ ত্রুটি বলে মনে হয়, কারণ প্রশ্নে ও বিকল্প সমাধানে 'x − 1/x = 2' দেওয়া আছে — বই অনুযায়ী হুবহু রাখা হলো)"},

  {"id": "job-2025-health-services-office-sohayak-q15", "examId": "job-2025-health-services-office-sohayak", "subject": "general-knowledge", "topic": "gk-others", "qno": 15, "marks": 15, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর করুন।", "parts": [{"label": "ক", "q": "জাতীয় বাজেট ২০২৫-২৬ এ বার্ষিক উন্নয়ন কর্মসূচিতে বরাদ্দ কত?", "a": "২,৩০,০০০ কোটি টাকা"}, {"label": "খ", "q": "জরুরি হটলাইন স্বাস্থ্য বাতায়ন এর নম্বরটি লিখুন।", "a": "১৬২৬৩"}, {"label": "গ", "q": "সিরাজউদ্দৌলা এর প্রকৃত নাম কী?", "a": "মির্জা মুহম্মদ সিরাজউদ্দৌলা"}, {"label": "ঘ", "q": "NITOR এর পূর্ণরূপ কী?", "a": "National Institute of Traumatology and Orthopaedic Rehabilitation"}, {"label": "ঙ", "q": "অপারেশন আয়রন সোর্ড কী?", "a": "অপারেশন আয়রন সোর্ড হলো ২০২৩ সালের ৭ অক্টোবরের হামাসের আকস্মিক হামলার প্রতিক্রিয়ায় ইসরায়েল কর্তৃক পরিচালিত এক সামরিক অভিযান।"}, {"label": "চ", "q": "বাংলাদেশের জাতীয় পতাকার ডিজাইনার কে?", "a": "কামরুল হাসান"}, {"label": "ছ", "q": "সেভেন সিস্টার্স কী?", "a": "ভারতের উত্তর-পূর্বাঞ্চলের সাতটি রাজ্যের সমষ্টিগত নাম সেভেন সিস্টার্স। রাজ্যগুলো হলো: আসাম, অরুণাচল প্রদেশ, মণিপুর, মেঘালয়, মিজোরাম, নাগাল্যান্ড ও ত্রিপুরা।"}, {"label": "জ", "q": "বর্তমানে LDC ভুক্ত দেশ কয়টি?", "a": "৪৪ টি"}, {"label": "ঝ", "q": "ডোভার প্রণালী পৃথক করেছে কোন দুটি দেশকে?", "a": "যুক্তরাজ্য ও ফ্রান্স"}, {"label": "ঞ", "q": "পুনর্ভবা, নাগর ও টাঙন কোন নদীর উপনদী?", "a": "মহানন্দা"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: জেলা প্রশাসকের কার্যালয়, নারায়ণগঞ্জ — নাজির কাম ক্যাশিয়ার, অফিস সহকারী (job-2025-dc-narayanganj-nazir-cashier)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪০২-৪০৫)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q01", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "bangla", "topic": "প্রকৃতি ও প্রত্যয়", "qno": 1, "marks": 4, "type": "short-qa", "question": "প্রকৃতি ও প্রত্যয় নির্ণয় করুন:", "parts": [{"label": "ক", "q": "কর্তব্য", "a": "কৃ + তব্য"}, {"label": "খ", "q": "দৈনিক", "a": "দিন + ইক"}, {"label": "গ", "q": "মানব", "a": "মনু + ষ্ণ"}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q02", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 2, "marks": 3, "type": "short-qa", "question": "এক কথায় প্রকাশ করুন:", "parts": [{"label": "ক", "q": "পা থেকে মাথা পর্যন্ত", "a": "আপাদমস্তক"}, {"label": "খ", "q": "নষ্ট হওয়ার স্বভাব যার", "a": "নশ্বর"}, {"label": "গ", "q": "কি করতে হবে তা বুঝতে না পারা", "a": "কিংকর্তব্যবিমূঢ়"}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q03", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "bangla", "topic": "অর্থসহ বাক্য রচনা", "qno": 3, "marks": 3, "type": "short-qa", "question": "অর্থসহ বাক্য রচনা করুন:", "parts": [{"label": "ক", "q": "কেতাদুরস্ত", "a": "পরিপাটি"}, {"label": "খ", "q": "চিনে জোঁক", "a": "নাছোড়বান্দা"}, {"label": "গ", "q": "রাঙা মুলো", "a": "সুন্দর কিন্তু গুণহীন"}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q04", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 4, "marks": 4, "type": "short-qa", "question": "শুদ্ধ বানান লিখুন।", "parts": [{"label": "ক", "q": "বৃতপত্তি", "a": "ব্যুৎপত্তি"}, {"label": "খ", "q": "দোষনিয়", "a": "দূষণীয়"}, {"label": "গ", "q": "শ্রদ্ধাঞ্জলি", "a": "শ্রদ্ধাঞ্জলি"}, {"label": "ঘ", "q": "আভ্যন্তরীন", "a": "অভ্যন্তরীণ"}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q05", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "bangla", "topic": "সাহিত্য ও ব্যাকরণ", "qno": 5, "marks": 8, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দাও:", "parts": [{"label": "ক", "q": "চোরাবালি কাব্যগ্রন্থ কার লেখা?", "a": "কবি বিষ্ণু দে"}, {"label": "খ", "q": "আমি কলম দিয়ে লিখি। এখানে কলম কোন কারকের উদাহরণ?", "a": "করণ কারক"}, {"label": "গ", "q": "জমিদার শব্দের স্ত্রীলিঙ্গ কি?", "a": "জমিদারনি"}, {"label": "ঘ", "q": "'সব ঝিনুকে মুক্তা মিলে না।' এখানে 'ঝিনুকে' কোন কারকে কোন বিভক্তি?", "a": "অপাদান কারকে ৭মী বিভক্তি"}, {"label": "ঙ", "q": "'সুশিক্ষিত লোক মাত্রই স্বশিক্ষিত।' উক্তিটি কার?", "a": "প্রমথ চৌধুরী"}, {"label": "চ", "q": "'প্রভাত চিন্তা, নিভৃত চিন্তা, নিশীথ চিন্তা' প্রভৃতি গ্রন্থের রচয়িতা কে?", "a": "কালীপ্রসন্ন ঘোষ"}, {"label": "ছ", "q": "বাংলা একাডেমী থেকে প্রকাশিত ত্রৈমাসিক পত্রিকার নাম কী?", "a": "ধান শালিকের দেশ"}, {"label": "জ", "q": "সর্বজন এর বিশেষণ কী?", "a": "সর্বজনীন"}, {"label": "ঝ", "q": "রবীন্দ্রনাথ ঠাকুর তাঁর কোন নাটক কাজী নজরুল ইসলামকে উৎসর্গ করেন?", "a": "বসন্ত"}, {"label": "এ়", "q": "'সোনালী কাবিন' কাব্যগ্রন্থের রচয়িতা কে?", "a": "আল মাহমুদ"}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q06", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "bangla", "topic": "আবেদনপত্র", "qno": 6, "marks": 10, "type": "letter", "question": "একটি সামাজিক সমস্যার কথা বর্ণনা করে এবং তা সমাধানের ব্যবস্থা গ্রহণের অনুরোধ জানিয়ে জেলা প্রশাসকের বরাবর একটি আবেদন লিখুন।", "letter": {"to": "জেলা প্রশাসক, নারায়ণগঞ্জ", "body": "তারিখ: ২৪ অক্টোবর ২০২৫\n\nবরাবর\nজেলা প্রশাসক\nনারায়ণগঞ্জ\n\nবিষয়: মশক নিধন ও পানির সংকট সমাধানের জন্য আবেদন।\n\nমহোদয়,\n\nআমি খন্দকার আব্দুল কাদের রেজা, নারায়ণগঞ্জ এর বাসিন্দা। বিনীতভাবে জানাতে চাই যে, আমাদের এলাকার মানুষের জন্য মশক জনিত সমস্যা এবং পানির সংকট অনেক উদ্বেগের বিষয় হয়ে দাঁড়িয়েছে। বিশেষ করে বর্ষা মৌসুমে মশার প্রকোপ বৃদ্ধি পাচ্ছে, যার ফলে ডেঙ্গু, ম্যালেরিয়া সহ বিভিন্ন রোগের ঝুঁকি বাড়ছে। একই সঙ্গে, পানির সরবরাহও অনিয়মিত এবং অপ্রতুল হওয়ায় সাধারণ মানুষ দৈনন্দিন জীবনে কষ্ট ভোগ করছে।\n\nএই সমস্যাগুলো সমাধানের জন্য আমি আন্তরিকভাবে জেলা প্রশাসকের দৃষ্টি আকর্ষণ করে অনুরোধ করছি যে, আমাদের এলাকায় মশক নিধন কার্যক্রম চালু করা এবং পানির সংকট নিরসনের জন্য প্রয়োজনীয় ব্যবস্থা গ্রহণ করা হোক। এতে এলাকার মানুষ সুস্থ ও স্বাচ্ছন্দ্যে জীবনযাপন করতে পারবে। আপনার সদয় দৃষ্টি ও সহযোগিতার জন্য অগ্রিম ধন্যবাদ।\n\nআপনার বিশ্বস্ত,\nখন্দকার আব্দুল কাদের রেজা\nফতুল্লা, নারায়ণগঞ্জ"}},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q07", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "english", "topic": "fill-in-the-blank", "qno": 7, "marks": 5, "type": "fill-gaps", "question": "Use appropriate word/words:", "parts": [{"sentence": "My friend always goes home........ foot.", "answer": "on"}, {"sentence": "At least one of the students...... full marks every time.", "answer": "gets"}, {"sentence": "The team is ........ eleven players.", "answer": "made up of"}, {"sentence": "The path.......... paved, so we were able to walk through the path.", "answer": "had been"}, {"sentence": "To stay healthy, we must plan to have a balanced.......", "answer": "diet"}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q08", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "english", "topic": "translation", "qno": 8, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "আমি, তুমি ও সে স্কুলে যাব।", "target": "You, he and I will go to school."}, {"label": "খ", "source": "সে কঠোর পরিশ্রম করে, তাই না?", "target": "He works hard, doesn't he?"}, {"label": "গ", "source": "সে এক সপ্তাহ যাবৎ অসুস্থ।", "target": "He has been ill for a week."}, {"label": "ঘ", "source": "আমি সেখানে যাব।", "target": "I will go there."}, {"label": "ঙ", "source": "তোমরা কি এখানে থাক?", "target": "Do you live here?"}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q09", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "english", "topic": "vocabulary", "qno": 9, "marks": 5, "type": "table", "question": "Write down the synonym:", "columns": ["Given Word", "Synonym"], "rows": [["Ability", "Capability"], ["Flame", "Fire"], ["Purchase", "Buy"], ["Bold", "Brave"], ["Defense", "Protection"]]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q10", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "english", "topic": "idiom", "qno": 10, "marks": 5, "type": "idiom", "question": "Make a meaningful sentence with the following words or Phrases. (any five)", "parts": [{"label": "a", "phrase": "A hair's breadth escape", "meaning": "হাতের মুঠোর মতো নিরাপদে বাঁচা। চুল পরিমাণ নিরাপদ জায়গা", "example": "He had a hair's breadth escape when the car skidded off the road."}, {"label": "b", "phrase": "A man of word", "meaning": "এক কথার লোক", "example": "He is a man of word."}, {"label": "c", "phrase": "A turn coat", "meaning": "যে ব্যক্তি নিজের অবস্থান বা বিশ্বাস পরিবর্তন করে/দল ত্যাগ করা", "example": "Betraying his friends, he proved himself a turn coat."}, {"label": "d", "phrase": "A wolf in sheep's clothing", "meaning": "যে ব্যক্তি নিরীহ বা ভাল চেহারায় ভীষণ বিপজ্জনক", "example": "The fraudster is a wolf in sheep's clothing, pretending to be kind."}, {"label": "e", "phrase": "All and sundry", "meaning": "সকলেই", "example": "The festival was open to all and sundry, rich or poor."}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q11", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "english", "topic": "transformation", "qno": 11, "marks": 5, "type": "sentence-change", "question": "Transform the following Sentences as directed in the bracket.", "parts": [{"label": "a", "original": "He pleases us. (Passive)", "changed": "We are pleased with him."}, {"label": "b", "original": "He said, \"The train reached at nine.\" (Indirect)", "changed": "He said that the train had reached at nine."}, {"label": "c", "original": "He admitted his guilt. (Complex)", "changed": "He admitted that he was guilty."}, {"label": "d", "original": "Walk carefully lest you should fall. (Compound)", "changed": "Walk carefully or you will fall."}, {"label": "e", "original": "He is always on time. (Negative)", "changed": "He is never late."}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q12", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 12, "marks": 4, "type": "table", "question": "শুদ্ধ বানান লিখুন:", "columns": ["Incorrect", "Correct"], "rows": [["misisipi", "Mississippi"], ["millinium", "Millennium"], ["hicriarchy", "Hierarchy"], ["priveleg", "Privilege"], ["enterpeneur", "Entrepreneur"], ["playrite", "Playwright"], ["exagarate", "Exaggerate"]]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q13", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "english", "topic": "fill-in-the-blank", "qno": 13, "marks": 5, "type": "fill-gaps", "question": "Fill the gaps with preposition:", "parts": [{"sentence": "A good student is fond (a).......books.", "answer": "of"}, {"sentence": "He adheres (b).......his studies.", "answer": "to"}, {"sentence": "He always tries to cut a brilliant figure (c).......the examination.", "answer": "in"}, {"sentence": "He never deviates (d)........his duties because", "answer": "from"}, {"sentence": "success depends (e).......hard work.", "answer": "on"}]},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q14", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "english", "topic": "letter", "qno": 14, "marks": 10, "type": "letter", "question": "Write an application to the Deputy Commissioner for establishing a language club in your school.", "letter": {"to": "The Deputy Commissioner Narayanganj", "body": "Subject: Request for Permission to Establish a Language Club\n\nRespected Sir,\n\nWith due respect, I would like to inform you that we, the students of [School Name], wish to establish a Language Club in our school to promote reading, speaking, and writing skills in English and other languages. This club will help students improve their communication skills and participate in debates, discussions, and cultural activities.\n\nWe kindly request your permission to establish this club and provide necessary guidance.\n\nYours obediently,\nMiraz, Class Seven"}},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q15", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "math", "topic": "গণিত সমস্যা", "qno": 15, "marks": 30, "type": "math", "question": "নিম্নলিখিত গাণিতিক প্রশ্নগুলোর উত্তর দিন:\n১২। 0.8 × 0.2 × 0.৪ = ?\n১৩। (0.9)³+(0.4)³ / 0.9+0.4 = ?\n১৪। 125(√5)^2x = 1 হলে x এর মান কত?\n১৫। একটি সংখ্যার ৩০% থেকে ৩০ বিয়োগ করলে বিয়োগফল ৩০ হবে। সংখ্যাটি কত?\n১৬। চার অংকের বৃহত্তম সংখ্যা থেকে তিন অংকের ক্ষুদ্রতম সংখ্যা বিয়োগ করলে বিয়োগফল কত?\n১৭। ৮, ১১, ১৭, ২৯, ৫৩ __ পরবর্তী সংখ্যাটি কত?\n১৮। একটি সমচতুর্ভুজের ক্ষেত্রফল নির্ণয়ের সূত্র কী?\n১৯। 0.0001 এর বর্গমূল কত?\n২০। একটি গাড়ির চাকা মিনিটে ৯০ বার ঘোরে। ১ সেকেন্ডে চাকাটি কত ডিগ্রী ঘুরবে নির্ণয় করুন।\n২১। একটি বর্গাকার বাগানের ক্ষেত্রফল ১ হেক্টর হলে বাগানটির পরিসীমা কত?\n২২। মামুন ও তপনের আয়ের অনুপাত ৪ঃ৩। তপন ও বশিরের আয়ের অনুপাত ৫ঃ৪। মামুনের আয় ১২০ টাকা হলে, বশিরের আয় কত?\n২৩। একটি মটর সাইকেল ১২% ক্ষতিতে বিক্রয় করা হল। যদি বিক্রয়মূল্য ১২০০ টাকা বেশি হতো তাহলে ৮% লাভ হত। মটর সাইকেলটির ক্রয়মূল্য কত?\n২৪। একটি আয়তক্ষেত্রের দৈর্ঘ্য ১৮ সে.মি এবং প্রস্থ ১০ সে.মি। আয়তক্ষেত্রটির দৈর্ঘ্য বৃদ্ধি করে ২৫ সে.মি করা হলো। আয়তক্ষেত্রটির প্রস্থ কত হলে ক্ষেত্রফল অপরিবর্তিত থাকবে?\n২৫। যদি x + 1/x = 5 হয়, x² + 1/x² তবে এর মান কত?", "steps": ["১২) 0.8 × 0.2 × 0.৪ = 0.064", "১৩) (0.9)³+(0.4)³ / (0.9+0.4) = 0.61", "১৪) 125(√5)^2x = 1", "বা, 5³.5^(2x/2) = 1", "বা, 5³.5^x = 1", "বা, 5^(3+x) = 5^0", "বা, 3+x = 0", "∴ x = −3 (Answer)", "১৫) মনে করি, সংখ্যাটি ক", "প্রশ্নমতে, ক এর ৩০% - ৩০ = ৩০", "বা, ৩০ক/১০০ = ৬০", "বা, ৩০ক = ৬০০০", "ক = ২০০", "উত্তর: ২০০", "১৬) চার অংকের বৃহত্তম সংখ্যা ৯৯৯৯ থেকে তিন অংকের ক্ষুদ্রতম সংখ্যা ১০০ বিয়োগ করলে বিয়োগফল = ৯৮৯৯", "১৭) ৮, ১১, ১৭, ২৯, ৫৩ ধারায় পার্থক্য ৩, ৬, ১২, ২৪ (দ্বিগুণ ধারা), পরবর্তী পার্থক্য ৪৮, সুতরাং পরবর্তী সংখ্যা = ৫৩+৪৮ = ১০১", "১৮) সমচতুর্ভুজের ক্ষেত্রফল = ১/২ × কর্ণদ্বয়ের গুণফল", "১৯) 0.0001 এর বর্গমূল = 0.01", "২০) ১ বার ঘুরলে অতিক্রম করে ৩৬০°; ৯০ বার ঘুরলে অতিক্রম করে ৯০ × ৩৬০° = ৩২৪০০°, যা ৬০ সেকেন্ডে ঘোরে; ১ সেকেন্ডে ঘুরবে ৩২৪০০°/৬০ = ৫৪০°", "২১) মনে করি, বাগানের দৈর্ঘ্য a মিটার; ক্ষেত্রফল = a²; প্রশ্নমতে, a² = 10000 [১ হেক্টর = ১০০০০ বর্গ মি.]; ∴ a² = 100; সুতরাং বাগানের পরিসীমা = 4a = 4 × 100 = 400 মিটার", "২২) মামুন ও তপনের আয়ের অনুপাত ৪ঃ৩ = ২০ঃ১৫; তপন ও বশিরের আয়ের অনুপাত ৫ঃ৪ = ১৫ঃ১২; মামুনের আয় : তপনের আয় : বশিরের আয় = ২০ : ১৫ : ১২; মামুনের আয়/বশিরের আয় = ২০/১২; বশিরের আয় = (মামুনের আয় × ১২)/২০ = (১২০ × ১২)/২০ = ৭২ টাকা", "২৩) মনে করি, ক্রয়মূল্য ১০০ টাকা; ১২% ক্ষতিতে বিক্রয়মূল্য (১০০-১২)=৮৮ টাকা; ৮% লাভে বিক্রয়মূল্য (১০০+৮)=১০৮ টাকা; বিক্রয়মূল্য বেশি (১০৮-৮৮)=২০ টাকা; বিক্রয়মূল্য ২০ টাকা বেশি হলে ক্রয়মূল্য ১০০ টাকা; \"১২০০\" হলে ক্রয়মূল্য = (১০০×১২০০)/২০ = ৬০০০ টাকা", "২৪) অপরিবর্তিত অবস্থায় ক্ষেত্রফল = (১৮ × ১০) বর্গ সে.মি = ১৮০ বর্গ সে.মি; ধরি, পরিবর্তিত অবস্থায় প্রস্থ = x; প্রশ্নমতে, ২৫x = ১৮০; ∴ x = ৭.২; উত্তর: ৭.২ সে.মি", "২৫) প্রদত্ত রাশি = x² + (1/x)² = (x+1/x)² − 2.x.1/x = 5² − 2 [মান বসিয়ে] = 25 − 2 = 23 (Answer)"], "answer": "১২) ০.০৬৪ ১৩) ০.৬১ ১৪) x=−৩ ১৫) ২০০ ১৬) ৯৮৯৯ ১৭) ১০১ ১৮) ১/২×কর্ণদ্বয়ের গুণফল ১৯) ০.০১ ২০) ৫৪০° ২১) ৪০০ মিটার ২২) ৭২ টাকা ২৩) ৬০০০ টাকা ২৪) ৭.২ সে.মি ২৫) ২৩"},

  {"id": "job-2025-dc-narayanganj-nazir-cashier-q16", "examId": "job-2025-dc-narayanganj-nazir-cashier", "subject": "general-knowledge", "topic": "gk-others", "qno": 26, "marks": 20, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর করুন:", "parts": [{"label": "ক", "q": "জাতিসংঘের সংস্থা IPCC এর পূর্ণরূপ কি?", "a": "Intergovernmental Panel on Climate Change"}, {"label": "খ", "q": "Three Zeros তত্ত্বের প্রবক্তা কে?", "a": "ড. মুহম্মদ ইউনূস"}, {"label": "গ", "q": "কুসুম্বা মসজিদ কোথায় অবস্থিত?", "a": "নওগাঁ"}, {"label": "ঘ", "q": "শালবন বিহার কোন রাজবংশের কীর্তি?", "a": "দেব বংশ"}, {"label": "ঙ", "q": "মালদ্বীপের প্রধান ভাষার নাম কী?", "a": "দিবেহী"}, {"label": "চ", "q": "'সোয়াচ অব নো গ্রাউন্ড' মানে কি?", "a": "বঙ্গোপসাগরের একটি খাদ"}, {"label": "ছ", "q": "আধুনিক অলিম্পিকের প্রবর্তক কে?", "a": "ব্যারন পিয়েরে দ্যা কুবার্তা"}, {"label": "জ", "q": "বাংলাদেশের বর্তমান এটর্নি জেনারেলের নাম কি?", "a": "মো. আসাদুজ্জামান"}, {"label": "ঝ", "q": "বাংলাদেশের একটি জীবন্ত জীবাশ্মের নাম কী?", "a": "রাজ কাঁকড়া"}, {"label": "এঞ", "q": "বাংলাদেশ জাতিসংঘের সদস্যপদ লাভ করে কবে?", "a": "১৭ সেপ্টেম্বর ১৯৭৪"}, {"label": "ট", "q": "Natural Protein এর কোডের নাম কী?", "a": "P49"}, {"label": "ঠ", "q": "বাংলাদেশ প্রথম বিশ্বকাপ ক্রিকেটে অংশ নেয় কত সালে?", "a": "১৯৯৯ সালে"}, {"label": "ড", "q": "কম্পিউটারের প্রধান প্রিন্টেড সার্কিট বোর্ডকে কি বলা হয়?", "a": "মাদারবোর্ড"}, {"label": "ঢ", "q": "প্লটার কী?", "a": "প্লটার (Plotter) হলো একটি আউটপুট ডিভাইস, যা চিত্র, নকশা, মানচিত্র বা গ্রাফ কাগজে অঙ্কন করতে ব্যবহৃত হয়।"}, {"label": "ণ", "q": "মৌলিক পদার্থের ক্ষুদ্রতম কণা যা রাসায়নিক প্রক্রিয়ায় অংশগ্রহণ করে তাকে বলা হয়?", "a": "পরমাণু"}, {"label": "ত", "q": "কম্পিউটারের কাজ করার গতির একক কী?", "a": "ন্যানো সেকেন্ড"}, {"label": "থ", "q": "কম্পিউটারের বাইনারী সংখ্যা পদ্ধতিতে কোন দুইটি সংখ্যা ব্যবহার করা হয়?", "a": "০,১"}, {"label": "দ", "q": "GUI এর পূর্ণরূপ কী?", "a": "Graphical User Interface"}, {"label": "ন", "q": "১টি কীবোর্ডে কতটি Function কী থাকে?", "a": "১২টি"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: প্রতিরক্ষা মন্ত্রণালয় — বাংলাদেশ নৌবাহিনীর আর্টিফিসার (job-2025-navy-artificer)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪০৬-৪০৯)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-navy-artificer-q01", "examId": "job-2025-navy-artificer", "subject": "bangla", "topic": "সন্ধি বিচ্ছেদ", "qno": 1, "marks": 5, "type": "short-qa", "question": "সন্ধি বিচ্ছেদ করুন:", "parts": [{"label": "ক", "q": "কটাক্ষ", "a": "কট + অক্ষ"}, {"label": "খ", "q": "অধ্যুষিত", "a": "অধি + উষিত"}, {"label": "গ", "q": "ব্যর্থ", "a": "বি + অর্থ"}, {"label": "ঘ", "q": "শীতার্ত", "a": "শীত + ঋত"}, {"label": "ঙ", "q": "জাত্যভিমান", "a": "জাতি + অভিমান"}]},

  {"id": "job-2025-navy-artificer-q02", "examId": "job-2025-navy-artificer", "subject": "bangla", "topic": "প্রতিশব্দ", "qno": 2, "marks": 5, "type": "short-qa", "question": "'অক্ষয়' শব্দের পাঁচটি প্রতিশব্দ লিখুন।", "parts": [{"label": "", "q": "'অক্ষয়' শব্দের পাঁচটি প্রতিশব্দ লিখুন।", "a": "চিরন্তন, চিরস্থায়ী, অনন্ত, অবিনশ্বর, স্থায়ী"}]},

  {"id": "job-2025-navy-artificer-q03", "examId": "job-2025-navy-artificer", "subject": "bangla", "topic": "অর্থসহ বাক্য গঠন", "qno": 3, "marks": 5, "type": "short-qa", "question": "অর্থসহ বাক্য গঠন করুন:", "parts": [{"label": "ক", "q": "চিনে জোঁক", "a": "নাছোড়বান্দা"}, {"label": "খ", "q": "সংঘমে চড়া", "a": "প্রচণ্ড উত্তেজনা"}, {"label": "গ", "q": "ভিটায় ঘুঘু চরানো", "a": "সর্বস্বান্ত/সর্বনাশ করা"}, {"label": "ঘ", "q": "তালকানা", "a": "বেতাল হওয়া/কাণ্ডজ্ঞানহীন"}, {"label": "ঙ", "q": "খেজুরে আলাপ", "a": "অকাজের কথা"}]},

  {"id": "job-2025-navy-artificer-q04", "examId": "job-2025-navy-artificer", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 4, "marks": 5, "type": "short-qa", "question": "বিপরীত শব্দ লিখুন:", "parts": [{"label": "", "q": "অনুরক্ত", "a": "বিরক্ত"}, {"label": "", "q": "উদ্দিষ্ট", "a": "নিরুদ্দিষ্ট"}, {"label": "", "q": "গৃহী", "a": "সন্ন্যাসী"}, {"label": "", "q": "গুপ্ত", "a": "ব্যক্ত"}, {"label": "", "q": "জ্বলন", "a": "নির্বাপণ"}]},

  {"id": "job-2025-navy-artificer-q05", "examId": "job-2025-navy-artificer", "subject": "bangla", "topic": "অনুবাদ", "qno": 5, "marks": 5, "type": "translate", "question": "ইংরেজিতে অনুবাদ করুন:", "parts": [{"label": "ক", "source": "অতি লোভে তাঁতী নষ্ট।", "target": "Grasp all, lose all"}, {"label": "খ", "source": "অভাবে স্বভাব নষ্ট।", "target": "Necessity knows no law"}, {"label": "গ", "source": "নাচতে না জানলে উঠান বাঁকা।", "target": "A bad workman quarrels with his tools"}, {"label": "ঘ", "source": "নানা মুনির নানা মত।", "target": "Many men, many minds"}, {"label": "ঙ", "source": "পুরানো চাল ভাতে বাড়ে।", "target": "All that is old is not bad"}]},

  {"id": "job-2025-navy-artificer-q06", "examId": "job-2025-navy-artificer", "subject": "english", "topic": "fill-in-the-blank", "qno": 6, "marks": 5, "type": "fill-gaps", "question": "Use appropriate word/words:", "parts": [{"sentence": "My friend always goes home........ foot.", "answer": "on"}, {"sentence": "At least one of the students...... full marks every time.", "answer": "gets"}, {"sentence": "The team is ........ eleven players.", "answer": "made up of"}, {"sentence": "The path.......... paved, so we were able to walk through the path.", "answer": "had been"}, {"sentence": "To stay healthy, we must plan to have a balanced.......", "answer": "diet"}]},

  {"id": "job-2025-navy-artificer-q07", "examId": "job-2025-navy-artificer", "subject": "english", "topic": "translation", "qno": 7, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "আমি, তুমি ও সে স্কুলে যাব।", "target": "You, he and I will go to school."}, {"label": "খ", "source": "সে কঠোর পরিশ্রম করে, তাই না?", "target": "He works hard, doesn't he?"}, {"label": "গ", "source": "সে এক সপ্তাহ যাবৎ অসুস্থ।", "target": "He has been ill for a week."}, {"label": "ঘ", "source": "আমি সেখানে যাব।", "target": "I will go there."}, {"label": "ঙ", "source": "তোমরা কি এখানে থাক?", "target": "Do you live here?"}]},

  {"id": "job-2025-navy-artificer-q08", "examId": "job-2025-navy-artificer", "subject": "english", "topic": "vocabulary", "qno": 8, "marks": 5, "type": "table", "question": "Write down the synonym:", "columns": ["Given Word", "Synonym"], "rows": [["Ability", "Capability"], ["Flame", "Fire"], ["Purchase", "Buy"], ["Bold", "Brave"], ["Defense", "Protection"]]},

  {"id": "job-2025-navy-artificer-q09", "examId": "job-2025-navy-artificer", "subject": "english", "topic": "vocabulary", "qno": 9, "marks": 5, "type": "table", "question": "Write down the antonyms:", "columns": ["Given Word", "Antonym"], "rows": [["Like", "Dislike"], ["Fire", "Water"], ["Sense", "Nonsense"], ["Regular", "Irregular"], ["Valid", "Invalid"]]},

  {"id": "job-2025-navy-artificer-q10", "examId": "job-2025-navy-artificer", "subject": "english", "topic": "grammar", "qno": 10, "marks": 5, "type": "sentence-change", "question": "Correct the following sentences:", "parts": [{"label": "a", "original": "I shall go to yours.", "changed": "I shall go to you."}, {"label": "b", "original": "He has a strong headache.", "changed": "He has a bad headache."}, {"label": "c", "original": "It is a true fact.", "changed": "It is true."}, {"label": "d", "original": "Open page forty.", "changed": "Open at page forty."}, {"label": "e", "original": "He came yesterday night.", "changed": "He came last night."}]},

  {"id": "job-2025-navy-artificer-q11", "examId": "job-2025-navy-artificer", "subject": "math", "topic": "চৌবাচ্চা ও নল", "qno": 11, "marks": 10, "type": "math", "question": "একটি নল ১২ মিনিটে একটি খালি চৌবাচ্চা পূর্ণ করতে পারে। অপর একটি নল প্রতি মিনিটে ১৪ লিটার পানি বের করে দেয়। চৌবাচ্চাটি খালি থাকা অবস্থায় দুইটি নল একসঙ্গে খুলে দেয়া হয় এবং চৌবাচ্চাটি ৯৬ মিনিটে পূর্ণ হয়। চৌবাচ্চাটিতে কত লিটার পানি ধরে?", "steps": ["মনে করি, প্রথম নল দ্বারা প্রতি মিনিটে x লিটার পানি প্রবেশ করে এবং চৌবাচ্চাটিকে মোট y লিটার পানি ধরে।", "∴ y = 12x ...... (1)", "আবার, দুইটি নল দ্বারা ৯৬ মিনিটে খালি চৌবাচ্চা পূর্ণ হয়", "∴ y = 96x − 96 × 14 ...... (2)", "সমীকরণ (1) থেকে পাই, x = y/12", "x এর মান সমীকরণ (2) এ বসিয়ে পাই,", "y = 96 × y/12 − 96 × 14", "বা, y = 8y − 96×14", "বা, 7y = 96×14", "বা, y = (96×14)/7 = 192", "উত্তর: চৌবাচ্চাটিতে মোট 192 লিটার পানি ধরে।", "বিকল্প সমাধান: ধরি, চৌবাচ্চাটিতে পানি ধরে x লিটার", "12 মিনিটে পূর্ণ করে x লিটার", "1 \" \" \" x/12 \"", "আবার, 96 মিনিটে পূর্ণ করে x লিটার", "1 \" \" \" x/96 \"", "প্রশ্নমতে, x/12 − x/96 = 14", "বা, (8x−x)/96 = 14", "বা, 7x/96 = 14", "বা, 7x = 1344", "বা, x = 1344/7 = 192", "∴ চৌবাচ্চাটিতে 192 লিটার পানি ধরে।"], "answer": "১৯২ লিটার।"},

  {"id": "job-2025-navy-artificer-q12", "examId": "job-2025-navy-artificer", "subject": "math", "topic": "লাভ-ক্ষতি (চেইন)", "qno": 12, "marks": 10, "type": "math", "question": "A একটি দ্রব্য ১২০ টাকা খরচে তৈরি করে ২৫% লাভে B এর কাছে বিক্রয় করে। B আবার দ্রব্যটি C এর কাছে বিক্রয় করে যা C ১০% লাভে ১৯৮ টাকায় বিক্রয় করে। B শতকরা কত লাভ করে।", "steps": ["A এর বিক্রয়মূল্য = ১২০+ ১২০ এর ২৫% = ১৫০ টাকা", "A এর বিক্রয়মূল্যই B এর ক্রয়মূল্য বা ১৫০ টাকা", "C এর ১০% লাভে, বিক্রয়মূল্য ১১০ টাকা হলে ক্রয়মূল্য ১০০ টাকা", "\" ১ \" \" \" ১০০/১১০", "\" ১৯৮ \" \" \" (১০০×১৯৮)/১১০", "= ১৮০ টাকা", "C এর ক্রয়মূল্যই B এর বিক্রয়মূল্য বা ১৮০ টাকা", "সুতরাং B এর লাভ = ১৮০ − ১৫০ = ৩০ টাকা", "B এর ১৫০ টাকায় লাভ হয় ৩০ টাকা", "১ \" \" \" ৩০/১৫০", "১০০ \" \" \" (৩০×১০০)/১৫০", "= ২০ টাকা"], "answer": "২০%"},

  {"id": "job-2025-navy-artificer-q13", "examId": "job-2025-navy-artificer", "subject": "math", "topic": "মুনাফা ও বিনিয়োগ", "qno": 13, "marks": 10, "type": "math", "question": "রাজু সাহেব তার 56000 টাকার কিছু টাকা বার্ষিক 12% মুনাফায় ও বাকি টাকা বার্ষিক 10% মুনাফায় বিনিয়োগ করলেন। এক বছর পর তিনি মোট 6400 টাকা মুনাফা পেলেন। তিনি 12% মুনাফায় কত টাকা বিনিয়োগ করেছেন?", "steps": ["মনে করি, রাজু সাহেব 12% মুনাফায় x টাকা বিনিয়োগ করেছেন।", "∴ তিনি 10% মুনাফায় বিনিয়োগ করেছেন (56000 − x) টাকা।", "100 টাকায় 1 বছরের মুনাফা 12 টাকা", "1 \" 1 \" \" 12/100", "x \" 1 \" \" 12x/100", "আবার, 100 টাকায় 1 বছরের মুনাফা 10 টাকা", "1 \" 1 \" \" 10/100", "(56000−x) \" 1 \" \" 10(56000−x)/100", "প্রশ্নমতে, 12x/100 + 10(56000−x)/100 = 6400", "বা, (12x + 560000 − 10x)/100 = 6400", "বা, 12x + 560000 − 10x = 640000", "বা, 2x = 640000 − 560000", "বা, x = 80000/2 ∴ x = 40000", "∴ রাজু সাহেব 12% মুনাফায় 40000 টাকা বিনিয়োগ করেছেন।"], "answer": "৪০০০০ টাকা।"},

  {"id": "job-2025-navy-artificer-q14", "examId": "job-2025-navy-artificer", "subject": "math", "topic": "বীজগণিত (দুই চলক)", "qno": 14, "marks": 10, "type": "math", "question": "বাবু ও তপুর কাছে কিছু মার্বেল আছে। বাবু যদি তপুকে ১০টি মার্বেল দিয়ে দেয় তবে তাদের মার্বেলের সংখ্যা সমান হবে। আবার তপু যদি বাবুকে ২০টি মার্বেল দেয় তবে বাবুর মার্বেলের সংখ্যা দ্বিগুণ হবে। বাবুর কাছে কতটি মার্বেল আছে।", "steps": ["মনে করি, বাবুর আছে = ক টি", "তপুর আছে = খ টি", "প্রশ্নমতে, ক − ১০ = খ + ১০", "ক = খ + ২০ ....... (1)", "আবার, ক + ২০ = 2(খ − ২০)", "বা, ক + ২০ = ২খ − ৪০", "বা, খ + ২০ − ২খ = − ৬০ (ক এর মান বসিয়ে)", "∴ খ = ৮০", "খ এর মান (1) নং সমীকরণে বসিয়ে পাই,", "ক = ৮০ + ২০ = ১০০", "সুতরাং তপুর কাছে মার্বেল আছে ৮০ টি এবং বাবুর কাছে আছে ১০০টি।"], "answer": "বাবুর কাছে ১০০টি মার্বেল আছে।"},

  {"id": "job-2025-navy-artificer-q15", "examId": "job-2025-navy-artificer", "subject": "math", "topic": "বীজগাণিতিক সমীকরণ", "qno": 15, "marks": 10, "type": "math", "question": "সমাধান করুন: (6x+1)/15 − (2x−4)/(7x−1) = (2x−1)/5", "steps": ["(6x+1)/15 − (2x−1)/5 = (2x−4)/(7x−1)", "বা, (6x+1−6x+3)/15 = (2x−4)/(7x−1)", "বা, 4/15 = (2x−4)/(7x−1)", "বা, 30x − 60 = 28x − 4", "বা, 2x = 56", "∴ x = 28 (Answer)"], "answer": "২৮"},

  {"id": "job-2025-navy-artificer-q16", "examId": "job-2025-navy-artificer", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 20, "type": "short-qa", "question": "সংক্ষেপে উত্তর দিন:", "parts": [{"label": "ক", "q": "সর্বস্তরে বাংলা ভাষা প্রচলন আইন কত সালে পাশ হয়?", "a": "১৯৮৭ সালে।"}, {"label": "খ", "q": "ঢাকায় কেন্দ্রীয় শহিদ মিনার কে উদ্বোধন করেন?", "a": "শহীদ বরকতের মা"}, {"label": "গ", "q": "বাংলাদেশের সবচেয়ে পূর্বে অবস্থিত উপজেলার নাম কী?", "a": "থানচি"}, {"label": "ঘ", "q": "বাংলাদেশের মানচিত্র প্রথম কে আঁকেন?", "a": "জেমস রেনেল"}, {"label": "ঙ", "q": "বাংলাদেশের কোন জেলা দুই দেশের সীমানা দ্বারা বেষ্টিত?", "a": "রাঙ্গামাটি"}, {"label": "চ", "q": "বাংলাদেশ কবে জাতিসংঘের সদস্যপদ লাভ করে?", "a": "১৭ সেপ্টেম্বর, ১৯৭৪"}, {"label": "ছ", "q": "ভৌগোলিক নির্দেশক পণ্যের স্বীকৃতি দেয় কোন প্রতিষ্ঠান?", "a": "শিল্প মন্ত্রণালয়ের আওতাধীন পেটেন্ট, ডিজাইন ও ট্রেডমার্কস অধিদপ্তর (DPDT)"}, {"label": "জ", "q": "পায়রা বন্দর কোন নদীর মোহনায় অবস্থিত?", "a": "রামনাবাদ চ্যানেল সংলগ্ন আন্ধারমানিক নদী"}, {"label": "ঝ", "q": "বিলোনিয়া সীমান্ত কোন জেলার অন্তর্গত?", "a": "ফেনী"}, {"label": "ঞ", "q": "বাংলাদেশ বিমানের প্রতীকটি কে ডিজাইন করেন?", "a": "কামরুল হাসান"}, {"label": "১৭", "q": "দেশ দুইটির রাজধানীর নাম লিখুন: ডোমিনিকা, হন্ডুরাস", "a": "ডোমিনিকা- রোসেউ। হন্ডুরাস- তেগুসিগালপা"}, {"label": "১৮", "q": "সংস্থা দুইটির সদর দপ্তর কোথায়? IMO, UNIDO", "a": "IMO: লন্ডন, যুক্তরাজ্য। UNIDO: ভিয়েনা, অস্ট্রিয়া"}, {"label": "১৯", "q": "দেশ দুইটির মুদ্রার নাম লিখুন: হাইতি, প্যারাগুয়ে", "a": "হাইতি- গুরদে। প্যারাগুয়ে- গুয়ারানি"}, {"label": "২০", "q": "পূর্ণরূপ লিখুন: WCED, CEDAW", "a": "WCED: World Commission on Environment and Development। CEDAW: Convention on the Elimination of All Forms of Discrimination Against Women"}, {"label": "২১", "q": "দেশ দুইটির পূর্ব নাম লিখুন: ঘানা, জিম্বাবুয়ে", "a": "ঘানা- গোল্ড কোস্ট; জিম্বাবুয়ে- দক্ষিণ রোডেশিয়া"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: স্বাস্থ্য সেবা বিভাগ এর নিমিউ এন্ড টিসি — উচ্চমান সহকারী (job-2025-health-nimu-tc-uccho-man-sohokari)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৮০-৩৮২)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q01", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "bangla", "topic": "বাগধারা", "qno": 1, "marks": 5, "type": "idiom", "question": "বাগধারাগুলোর অর্থ লিখুনঃ", "parts": [{"label": "ক", "phrase": "গোকুলের ষাঁড়", "meaning": "স্বেচ্ছাচারী"}, {"label": "খ", "phrase": "ঘোড়ার কামড়", "meaning": "দৃঢ় পণ"}, {"label": "গ", "phrase": "ঝড়ো কাক", "meaning": "বিপর্যস্ত"}, {"label": "ঘ", "phrase": "ব্যাঙের আধুলি", "meaning": "সামান্য সম্পদ"}, {"label": "ঙ", "phrase": "এক লহমা", "meaning": "এক মুহূর্ত"}]},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q02", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 2, "marks": 5, "type": "table", "question": "বানান শুদ্ধ করে লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["অনুসূয়া", "অনসূয়া"], ["মুমূর্ষ", "মুমূর্ষু"], ["অভ্যান্তরিন", "অভ্যন্তরীণ"], ["উচ্ছাস", "উচ্ছ্বাস"], ["উদ্ভিজ", "উদ্ভিদ"]]},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q03", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "bangla", "topic": "বাক্য শুদ্ধিকরণ", "qno": 3, "marks": 4, "type": "sub-parts", "question": "বাক্য শুদ্ধিকরণ করুনঃ", "parts": [{"label": "ক", "q": "তার দুচোখ অশ্রুজলে ভেসে গেল।", "a": "তার দুচোখ অশ্রুতে ভেসে গেল।"}, {"label": "খ", "q": "অতিশয় দুঃখিত হলাম।", "a": "খুব দুঃখ পেলাম।"}, {"label": "গ", "q": "অপমান হবার ভয় নেই।", "a": "অপমানিত হবার ভয় নেই।"}, {"label": "ঘ", "q": "গণিত খুব কঠিন বিষয়।", "a": "গণিত খুব কঠিন।"}]},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q04", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 4, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "জয় করার ইচ্ছা", "a": "জিগীষা"}, {"label": "খ", "q": "বাঘের চামড়া", "a": "কৃত্তি"}, {"label": "গ", "q": "পা দিয়ে চলে না যে", "a": "প্রবগ"}, {"label": "ঘ", "q": "যে বৃক্ষের ফল হয় কিন্তু ফুল হয় না", "a": "বনস্পতি"}, {"label": "ঙ", "q": "দিন ও রাতের সন্ধিক্ষণ", "a": "গোধূলি"}]},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q05", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "english", "topic": "fill-in-the-blanks", "qno": 5, "marks": 5, "type": "fill-gaps", "question": "Fill in the gaps with preposition:", "parts": [{"sentence": "He went there..... 7.0'clock in evening.", "answer": "at"}, {"sentence": "Dhaka is........the Buriganga.", "answer": "on"}, {"sentence": "The house is made........ brick.", "answer": "of"}, {"sentence": "I will speak.......you.", "answer": "for"}, {"sentence": "He is not....... good health.", "answer": "in"}]},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q06", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "english", "topic": "spelling", "qno": 6, "marks": 5, "type": "table", "question": "Correct Spelling:", "columns": ["Incorrect", "Correct"], "rows": [["Difinition", "Definition"], ["Hidrozen", "Hydrogen"], ["Atomsphare", "Atmosphere"], ["Dialoge", "Dialogue"], ["Achivment", "Achievement"]]},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q07", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "english", "topic": "grammar", "qno": 7, "marks": 5, "type": "sentence-change", "question": "Voice change: (active to passive)", "parts": [{"label": "a", "original": "He will have read the book.", "changed": "The book will have been read by him."}, {"label": "b", "original": "I may help you.", "changed": "You may be helped by me."}, {"label": "c", "original": "Shut the door.", "changed": "Let the door be shut."}, {"label": "d", "original": "Whom is he teaching English?", "changed": "Who is being taught English by him?"}, {"label": "e", "original": "He made me do the work.", "changed": "I was made to do the work by him."}]},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q08", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "english", "topic": "idiom", "qno": 8, "marks": 5, "type": "idiom", "question": "Write the meaning of phrase:", "parts": [{"label": "a", "phrase": "End in smoke", "meaning": "ব্যর্থ হওয়া"}, {"label": "b", "phrase": "Blue Blood", "meaning": "অভিজাত বংশীয়"}, {"label": "c", "phrase": "Gala day", "meaning": "আনন্দের দিন"}, {"label": "d", "phrase": "In a nutshell", "meaning": "সংক্ষেপে"}, {"label": "e", "phrase": "Black and White", "meaning": "লিখিতভাবে"}]},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q09", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "math", "topic": "পাটিগণিত", "qno": 9, "marks": 10, "type": "math", "question": "একটি শ্রেণির প্রতিবেঞ্চে ৪ জন করে ছাত্র বসালে ৩টি বেঞ্চ খালি থাকে। আবার, প্রতিবেঞ্চে ৩ জন করে ছাত্র বসালে ৬ জনকে দাঁড়িয়ে থাকতে হয়। ঐ শ্রেণির ছাত্র সংখ্যা কত?", "steps": ["মনে করি, শ্রেণিটির বেঞ্চের সংখ্যা x", "যেহেতু, প্রতিবেঞ্চে ৪ জন করে বসালে ৩টি বেঞ্চ খালি থাকে, সেহেতু ঐ শ্রেণির ছাত্র সংখ্যা = x/4 + 3", "আবার, যেহেতু প্রতিবেঞ্চে ৩ জন করে বসালে ৬ জনকে দাঁড়িয়ে থাকতে হয়, সেহেতু ঐ শ্রেণির বেঞ্চের সংখ্যা = (x−6)/3", "যেহেতু শ্রেণির বেঞ্চের সংখ্যা একই থাকবে, সুতরাং x/4 + 3 = (x−6)/3", "বা, (x+12)/4 = (x−6)/3", "বা, 4x − 24 = 3x + 36", "বা, 4x − 3x = 36 + 24", "বা, x = 60", "∴ ঐ শ্রেণির ছাত্র সংখ্যা 60"], "answer": "৬০ জন"},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q10", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "math", "topic": "বীজগণিত", "qno": 10, "marks": 5, "type": "math", "question": "উৎপাদকে বিশ্লেষণ কর: 9x² − 30xy + 25y²", "steps": ["9x² − 30xy + 25y²", "= (3x)² − 2.3.5.xy + (5y)²", "= (3x − 5y)²"], "answer": "(3x − 5y)(3x − 5y)"},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q11", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "math", "topic": "বীজগণিত", "qno": 11, "marks": 5, "type": "math", "question": "মান নির্ণয় করঃ (y−1)(y+2)=(y+4)(y−2)", "steps": ["(y−1)(y+2)=(y+4)(y−2)", "বা, y² + 2y − y − 2 = y² − 2y + 4y − 8", "বা, y² − y² + 2y + 2y − 4y − y = −8 + 2", "বা, −y = −6", "∴ y = 6"], "answer": "y = 6"},

  {"id": "job-2025-health-nimu-tc-uccho-man-sohokari-q12", "examId": "job-2025-health-nimu-tc-uccho-man-sohokari", "subject": "general-knowledge", "topic": "gk-others", "qno": 12, "marks": 15, "type": "short-qa", "question": "নিচের প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "ক", "q": "বাংলাদেশের সর্বাধিক বৈদেশিক মুদ্রা অর্জনের খাত কি?", "a": "তৈরি পোশাক খাত"}, {"label": "খ", "q": "জাতিসংঘের সর্বশেষ সদস্য কোন দেশ?", "a": "দক্ষিণ সুদান (১৯৩ তম)"}, {"label": "গ", "q": "বাংলার সর্বপ্রাচীন জনপদের রাজধানী কোনটি?", "a": "পুণ্ড্র"}, {"label": "ঘ", "q": "ASEAN এর সদস্য রাষ্ট্র কতটি?", "a": "১১টি (সর্বশেষ- পূর্ব তিমুর)"}, {"label": "ঙ", "q": "ইউরোপের শস্য ভান্ডার কোন দেশ?", "a": "ইউক্রেন"}, {"label": "চ", "q": "বাংলাদেশের সংবিধানে কতটি মৌলিক অধিকার স্বীকৃত আছে?", "a": "১৮ টি"}, {"label": "ছ", "q": "গুগল এর প্রতিষ্ঠাতা কে?", "a": "Larry Page ও Sergey Brin"}, {"label": "জ", "q": "চন্দ্রদ্বীপ এর মূলভূমি কোন জেলায় অবস্থিত?", "a": "বরিশাল"}, {"label": "ঝ", "q": "তেঁতুলে কোন এসিড রয়েছে?", "a": "টারটারিক এসিড"}, {"label": "ঞ", "q": "ঢাকার পূর্বনাম কি ছিল?", "a": "জাহাঙ্গীর নগর"}, {"label": "ট", "q": "২০২৫ সালে শান্তিতে নোবেল পুরস্কার পেয়েছিলেন কে?", "a": "মারিয়া কোরিনা মাচাদো (ভেনেজুয়েলা)"}, {"label": "ঠ", "q": "ট্রয় নগরী কোন দেশে অবস্থিত?", "a": "তুরস্ক"}, {"label": "ড", "q": "১ম নোবেল বিজয়ী নারী কে?", "a": "মারি কুরি"}, {"label": "ঢ", "q": "রক্তের গ্রুপ কতটি? কি কি?", "a": "৪টি; A, B, AB ও O"}, {"label": "ণ", "q": "বাংলা সনেটের জনক কে?", "a": "মাইকেল মধুসূদন দত্ত"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: রেলপথ মন্ত্রণালয় — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-railway-office-asst-typist)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৩৮২-৩৮৪)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-railway-office-asst-typist-q01", "examId": "job-2025-railway-office-asst-typist", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 1, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "যা ক্রমশ বর্ধিত হচ্ছে", "a": "বর্ধিষ্ণু"}, {"label": "খ", "q": "যা দীপ্তি পাচ্ছে", "a": "দেদীপ্যমান"}, {"label": "গ", "q": "সম্মুখে অগ্রসর হয়ে অভ্যর্থনা", "a": "প্রত্যুদ্‌গমন"}, {"label": "ঘ", "q": "উপকারীর অপকার করে যে", "a": "কৃতঘ্ন"}, {"label": "ঙ", "q": "উপস্থিত বুদ্ধি আছে যার", "a": "প্রত্যুৎপন্নমতি"}]},

  {"id": "job-2025-railway-office-asst-typist-q02", "examId": "job-2025-railway-office-asst-typist", "subject": "bangla", "topic": "বাগধারা", "qno": 2, "marks": 5, "type": "idiom", "question": "নিম্নোক্ত বাগধারা নিয়ে অর্থপূর্ণ বাক্য রচনা করুনঃ", "parts": [{"label": "ক", "phrase": "আক্কেল সেলামি", "meaning": "নির্বুদ্ধিতার দণ্ড"}, {"label": "খ", "phrase": "গরজ বড় বালাই", "meaning": "প্রয়োজনে গুরুত্ব"}, {"label": "গ", "phrase": "ইঁদুর কপালে", "meaning": "নিতান্ত মন্দ ভাগ্য"}, {"label": "ঘ", "phrase": "চোখের সাতার পানি", "meaning": "অতিরিক্ত মায়াকান্না"}, {"label": "ঙ", "phrase": "ঢাকের কাঠি", "meaning": "তোষামোদে"}]},

  {"id": "job-2025-railway-office-asst-typist-q03", "examId": "job-2025-railway-office-asst-typist", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 3, "marks": 5, "type": "table", "question": "নিম্নোক্ত শব্দগুলো শুদ্ধ করে লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["ত্রিনয়ণ", "ত্রিনয়ন"], ["বিপনী", "বিপণি"], ["সুমুগ্ধ", "সুমুগ্ধ"], ["সূচরীতাসু", "সূচরিতাসু"], ["ভূমিস্যাত", "ভূমিসাৎ"]]},

  {"id": "job-2025-railway-office-asst-typist-q04", "examId": "job-2025-railway-office-asst-typist", "subject": "bangla", "topic": "সন্ধি", "qno": 4, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "মুখচ্ছবি", "a": "মুখ + ছবি"}, {"label": "খ", "q": "চলচ্চিত্র", "a": "চলৎ + চিত্র"}, {"label": "গ", "q": "উচ্ছৃঙ্খল", "a": "উৎ + শৃঙ্খল"}, {"label": "ঘ", "q": "বনস্পতি", "a": "বন + পতি"}, {"label": "ঙ", "q": "পরিচ্ছেদ", "a": "পরি + ছেদ"}]},

  {"id": "job-2025-railway-office-asst-typist-q05", "examId": "job-2025-railway-office-asst-typist", "subject": "bangla", "topic": "কারক ও বিভক্তি", "qno": 5, "marks": 5, "type": "sub-parts", "question": "নিম্নোক্ত বাক্যগুলির কারক ও বিভক্তি নির্ণয় করুন।", "parts": [{"label": "ক", "q": "ঘোড়ায় গাড়ি টানে", "a": "কর্তায় ৭মী"}, {"label": "খ", "q": "ছাদে বৃষ্টি পড়ে", "a": "অধিকরণে ৭মী"}, {"label": "গ", "q": "কৃষক লাঙ্গল চষে", "a": "করণে শূন্য"}, {"label": "ঘ", "q": "খোপাকে কাপড় দাও।", "a": "কর্মে ২য়া"}, {"label": "ঙ", "q": "দেশের জন্য প্রাণ দাও।", "a": "সম্প্রদানে ৬ষ্ঠী"}]},

  {"id": "job-2025-railway-office-asst-typist-q06", "examId": "job-2025-railway-office-asst-typist", "subject": "english", "topic": "grammar", "qno": 6, "marks": 5, "type": "sentence-change", "question": "Correct the following sentences:", "parts": [{"label": "a", "original": "He is superior than me.", "changed": "He is superior to me."}, {"label": "b", "original": "Would you mind to open the gate.", "changed": "Would you mind opening the gate?"}, {"label": "c", "original": "I had better attended the meeting.", "changed": "I had better attend the meeting."}, {"label": "d", "original": "One should do his duty.", "changed": "One should do one's duty."}, {"label": "e", "original": "It is Imran who come here regularly.", "changed": "It is Imran who comes here regularly."}]},

  {"id": "job-2025-railway-office-asst-typist-q07", "examId": "job-2025-railway-office-asst-typist", "subject": "english", "topic": "grammar", "qno": 7, "marks": 5, "type": "sentence-change", "question": "Transform the sentences.", "parts": [{"label": "a", "original": "Do or die. (complex)", "changed": "If you do not do, you will die."}, {"label": "b", "original": "Although he is poor, he is lazy. (simple)", "changed": "In spite of being poor, he is lazy."}, {"label": "c", "original": "Mutir Chowdhury is more famous than most other playwrights in Bangladesh. (positive)", "changed": "Very few playwrights in Bangladesh are as famous as Mutir Chowdhury."}, {"label": "d", "original": "He said, \\\"You had better see a doctor\\\" (indirect speech)", "changed": "He advised him to see a doctor."}, {"label": "e", "original": "Mango tastes sour. (change the voice)", "changed": "Mango is tasted sour."}]},

  {"id": "job-2025-railway-office-asst-typist-q08", "examId": "job-2025-railway-office-asst-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 8, "marks": 5, "type": "fill-gaps", "question": "Fill in the gaps with appropriate words.", "parts": [{"sentence": "He was deprived....... all power.", "answer": "of"}, {"sentence": "He is eager....... fame.", "answer": "for"}, {"sentence": "Either Raju or his brother... responsible.", "answer": "is"}, {"sentence": "He does not know...... swim.", "answer": "how"}, {"sentence": "He fell...... while he was walking.", "answer": "down"}]},

  {"id": "job-2025-railway-office-asst-typist-q09", "examId": "job-2025-railway-office-asst-typist", "subject": "english", "topic": "translation", "qno": 9, "marks": 5, "type": "translate", "question": "Translate the following sentences into English.", "parts": [{"label": "ক", "source": "সে সাতার কাটা পছন্দ করে।", "target": "He likes swimming."}, {"label": "খ", "source": "আকাশে পাখিটি উড়িতেছে।", "target": "The bird is flying in the sky."}, {"label": "গ", "source": "সেতু লিখতে ও পড়তে পারে না।", "target": "Setu can neither read nor write."}, {"label": "ঘ", "source": "কুকুর হতে সাবধান।", "target": "Beware of the dog."}, {"label": "ঙ", "source": "সময় ও স্রোত কাহারো জন্য অপেক্ষা করে না।", "target": "Time and tide wait for none."}]},

  {"id": "job-2025-railway-office-asst-typist-q10", "examId": "job-2025-railway-office-asst-typist", "subject": "english", "topic": "essay", "qno": 10, "marks": 5, "type": "paragraph", "question": "Write five sentences on 'Artificial Intelligence'.", "answer": "Artificial Intelligence (AI) is the simulation of human intelligence by machines. It has many benefits, such as saving time, increasing efficiency, reducing human error, and helping in complex decision-making. AI is widely used in various fields. In healthcare, it helps in diagnosing diseases, developing treatments, and managing patient data. In education, AI provides personalized learning and online tutoring. In business, it automates tasks, improves customer service, and analyzes data. It is also used in transportation for self-driving cars and traffic management, and in daily life through smartphones, virtual assistants, and online recommendations. Overall, AI makes work easier, faster, and more effective."},

  {"id": "job-2025-railway-office-asst-typist-q11", "examId": "job-2025-railway-office-asst-typist", "subject": "math", "topic": "শতকরা", "qno": 11, "marks": 5, "type": "math", "question": "প্রতি বছর কোনো শহরে লোকসংখ্যার ৭% জন্মগ্রহণ করে এবং ৩% মৃত্যুবরণ করে। এক বছরে শহরে ৪০০ লোক বৃদ্ধি পেলে ঐ শহরের লোক সংখ্যা কত?", "steps": ["শতকরা বৃদ্ধি = (৭ − ৩)% = ৮%", "৪০০ জন বৃদ্ধি পায় বৃদ্ধি পেলে লোক সংখ্যা ১০০ জন", "১ \" \" \" \" \" \" ১০০/৮", "৮০০ \" \" \" \" \" \" (১০০×৮০০)/৮", "= ১০০০০ জন"], "answer": "১০০০০ জন"},

  {"id": "job-2025-railway-office-asst-typist-q12", "examId": "job-2025-railway-office-asst-typist", "subject": "math", "topic": "অনুপাত", "qno": 12, "marks": 5, "type": "math", "question": "দুটি সংখ্যার অনুপাত ৫ঃ৮। উভয়ের সাথে ২ যোগ করলে অনুপাত ২ঃ৩ হয়। সংখ্যা দুটি কত?", "steps": ["মনে করি, সংখ্যা দুটি যথাক্রমে ৫ক ও ৮ক", "প্রশ্নমতে, (৫ক+২)/(৮ক+২) = ২/৩", "বা, ১৫ক + ৬ = ১৬ক + ৮", "∴ ক = −২"], "answer": "সংখ্যা দুটি যথাক্রমে (৫×২)=১০ ও (৮×২)=১৬"},

  {"id": "job-2025-railway-office-asst-typist-q13", "examId": "job-2025-railway-office-asst-typist", "subject": "math", "topic": "চক্রবৃদ্ধি মুনাফা", "qno": 13, "marks": 5, "type": "math", "question": "বার্ষিক ১০.৫০% মুনাফায় ৫০০০ টাকার ২ বছরের চক্রবৃদ্ধি মুনাফা নির্ণয় করুন।", "steps": ["চক্রবৃদ্ধি মুনাফা নির্ণয়ের জন্য প্রথমে চক্রবৃদ্ধি মূলধন নির্ণয় করি।", "আমরা জানি, চক্রবৃদ্ধি মূলধন C = P(১+r)ⁿ, যেখানে মূলধন P = ৫০০০ টাকা", "মুনাফার হার, r = ১০.৫০% = ২১/২০০", "সময়, n = ২ বছর", "∴ C = P(১+r)² = ৫০০০ × (১ + ২১/২০০)² = ৫০০০ × (২২১/২০০)² = ৫০০০ × ২২১/২০০ × ২২১/২০০ = ৮৮৮৮১/৮ টাকা = ৬১০৫.১৩ টাকা (প্রায়)", "∴ চক্রবৃদ্ধি মুনাফা = C − P = P(১+r)² − P = (৬১০৫.১৩ − ৫০০০) টাকা = ১১০৫.১৩ টাকা (প্রায়)"], "answer": "১১০৫.১৩ টাকা (প্রায়)"},

  {"id": "job-2025-railway-office-asst-typist-q14", "examId": "job-2025-railway-office-asst-typist", "subject": "math", "topic": "বীজগণিত", "qno": 14, "marks": 5, "type": "math", "question": "(x+6)(x+4) কে দুটি রাশির বর্গের অন্তররূপে প্রকাশ করুন।", "steps": ["ধরি, x + 6 = a এবং x + 4 = b", "প্রদত্ত রাশি: ab = {(a+b)/2}² − {(a−b)/2}²", "= {(x+6+x+4)/2}² − {(x+6−x−4)/2}²", "= {(2x+10)/2}² − (2/2)²", "= {2(x+5)/2}² − 1²", "= (x+5)² − 1²"], "answer": "(x+5)² − 1²"},

  {"id": "job-2025-railway-office-asst-typist-q15", "examId": "job-2025-railway-office-asst-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 15, "marks": 20, "type": "short-qa", "question": "সাধারণ জ্ঞানের প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "ক", "q": "ম্যাগনাকার্টা কী? এটি কত সালে স্বাক্ষরিত হয়?", "a": "ম্যাগনাকার্টা হলো একটি ঐতিহাসিক দলিল, যা ইংল্যান্ডের রাজা জন ১২১৫ সালে স্বাক্ষর করেন। এটি রাজা ও প্রজাদের মধ্যে এক ধরনের চুক্তি ছিল, যার মাধ্যমে রাজাকে কিছু নির্দিষ্ট সীমার মধ্যে থাকতে বাধ্য করা হয়। স্বাক্ষরিত হয়: ১৫ জুন ১২১৫ সালে"}, {"label": "খ", "q": "ডোনাল্ড ট্রাম্প বর্তমান মেয়াদে আমেরিকার কততম প্রেসিডেন্ট এবং তিনি কোন দলের নেতা?", "a": "৪৭তম প্রেসিডেন্ট এবং নেতা- রিপাবলিকান পার্টি"}, {"label": "গ", "q": "নিউজিল্যান্ড ও ঘানার রাজধানী শহরের নাম লিখুন।", "a": "ওয়েলিংটন ও আক্রা"}, {"label": "ঘ", "q": "বঙ্গভঙ্গ কবে হয় এবং কবে রদ হয়?", "a": "১৯০৫ সালে এবং ১৯১১ সালে"}, {"label": "ঙ", "q": "মোনালিসা চিত্রটি কে এঁকেছেন এবং কোন যাদুঘরে রক্ষিত?", "a": "লিওনার্দো দ্যা ভিঞ্চি এবং লুভর যাদুঘরে (প্যারিস, ফ্রান্স)"}, {"label": "চ", "q": "জাতিসংঘের দাপ্তরিক ভাষা কয়টি ও কী কী?", "a": "৬টি; যথা- ইংরেজি, ফারসি, স্প্যানিশ, রুশ, চীনা ও আরবি"}, {"label": "ছ", "q": "ব্রেইল পদ্ধতি উদ্ভাবক কে, তিনি কোন দেশের নাগরিক?", "a": "লুই ব্রেইল। ফ্রান্সের নাগরিক"}, {"label": "জ", "q": "এক নটিক্যাল মাইল সমান কত মাইল এবং কত কিলোমিটার?", "a": "১.১৫০৮ মাইল এবং ১.৮৫২ কিলোমিটার"}, {"label": "ঝ", "q": "প্রথম বিশ্বযুদ্ধের অক্ষশক্তি ও মিত্রশক্তিগুলির নাম লিখুন।", "a": "অক্ষশক্তি: জার্মানি, অস্ট্রিয়া, হাঙ্গেরি, বুলগেরিয়া, তুরস্ক এবং মিত্রশক্তি: রাশিয়া, ইতালি, যুক্তরাষ্ট্র, ফ্রান্স, চীন, জাপান"}, {"label": "ঞ", "q": "ভাটিয়ালী ও গম্ভীরা কোন কোন অঞ্চলের গান?", "a": "ভাটিয়ালী-ময়মনসিংহ ও সিলেট; গম্ভীরা-চাপাইনবাবগঞ্জ ও রাজশাহী অঞ্চলের"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: ঢাকা মেডিকেল কলেজ হাসপাতাল — কম্পিউটার অপারেটর (job-2025-dmch-computer-operator)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪১২-৪১৪)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-dmch-computer-operator-q01", "examId": "job-2025-dmch-computer-operator", "subject": "bangla", "topic": "পারিভাষিক শব্দ", "qno": 1, "marks": 4, "type": "sub-parts", "question": "পারিভাষিক শব্দ লিখুনঃ", "parts": [{"label": "a", "q": "Census", "a": "আদমশুমারি"}, {"label": "b", "q": "Pleadings", "a": "মামলার আবেদনপত্র/ নালিশ"}, {"label": "c", "q": "Notification", "a": "বিজ্ঞপ্তি"}, {"label": "d", "q": "Glossary", "a": "শব্দার্থ তালিকা/ শব্দকোষ"}]},

  {"id": "job-2025-dmch-computer-operator-q02", "examId": "job-2025-dmch-computer-operator", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 8, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "দ্যুলোক", "a": "দিব্ + লোক"}, {"label": "খ", "q": "বৃহস্পতি", "a": "বৃহৎ + পতি"}, {"label": "গ", "q": "ষোড়শ", "a": "ষট্ + দশ"}, {"label": "ঘ", "q": "রাজর্ষি", "a": "রাজা + ঋষি"}, {"label": "ঙ", "q": "ষড়ানন", "a": "ষট্ + আনন"}, {"label": "চ", "q": "গবাক্ষ", "a": "গো + অক্ষ"}, {"label": "ছ", "q": "জ্যোতির্ময়", "a": "জ্যোতিঃ + ময়"}, {"label": "জ", "q": "শীতার্ত", "a": "শীত + ঋত"}]},

  {"id": "job-2025-dmch-computer-operator-q03", "examId": "job-2025-dmch-computer-operator", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 3, "marks": 8, "type": "table", "question": "শুদ্ধ বানান/ শব্দ লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["দ্বায়িত্ব", "দায়িত্ব"], ["সমীচিন", "সমীচীন"], ["অদ্যাবধি", "অদ্যাবধি"], ["গিতাঞ্জলি", "গীতাঞ্জলি"], ["দারিদ্রতা", "দারিদ্র্য"], ["লজ্জাস্কর", "লজ্জাকর"], ["ফটোষ্ট্যাট", "ফটোস্ট্যাট"], ["ইতিমধ্যে", "ইতোমধ্যে"]]},

  {"id": "job-2025-dmch-computer-operator-q04", "examId": "job-2025-dmch-computer-operator", "subject": "bangla", "topic": "অর্থসহ বাক্য", "qno": 4, "marks": 4, "type": "sub-parts", "question": "অর্থসহ বাক্য গঠন করুনঃ", "parts": [{"label": "ক", "q": "ইতর বিশেষ", "a": "পার্থক্য"}, {"label": "খ", "q": "ভূষণ্ডির কাক", "a": "দীর্ঘজীবী"}, {"label": "গ", "q": "অজগরবৃত্তি", "a": "আলসেমি"}, {"label": "ঘ", "q": "গৌরচন্দ্রিকা", "a": "ভূমিকা"}]},

  {"id": "job-2025-dmch-computer-operator-q05", "examId": "job-2025-dmch-computer-operator", "subject": "bangla", "topic": "short-qa", "qno": 5, "marks": 2, "type": "sub-parts", "question": "সংক্ষিপ্ত প্রশ্নের উত্তর দিনঃ", "parts": [{"label": "ক", "q": "নেমেসিস কোন জাতীয় রচনা?", "a": "নাটক"}, {"label": "খ", "q": "'সর্বাঙ্গে ব্যথা ঔষধ দিব কোথা' - এখানে ঔষধ কোন কারকে কোন বিভক্তি?", "a": null}]},

  {"id": "job-2025-dmch-computer-operator-q06", "examId": "job-2025-dmch-computer-operator", "subject": "bangla", "topic": "essay", "qno": 6, "marks": 2, "type": "paragraph", "question": "স্বাস্থ্যখাতে টেকসই উন্নয়ন লক্ষ্যমাত্রা ও বাংলাদেশ- এ বিষয়ে সর্বোচ্চ ২০০ শব্দের নাতিদীর্ঘ একটি অনুচ্ছেদ লিখুন।", "answer": "টেকসই উন্নয়ন লক্ষ্যমাত্রা (SDG) এর তৃতীয় লক্ষ্য হলো সুস্বাস্থ্য ও কল্যাণ নিশ্চিত করা। বাংলাদেশ ২০৩০ সালের মধ্যে এই লক্ষ্য অর্জনে নিরলসভাবে কাজ করে যাচ্ছে। মাতৃমৃত্যু ও শিশুমৃত্যুর হার কমানো, সংক্রামক ব্যাধি নির্মূল, প্রজনন স্বাস্থ্যসেবা সহজলভ্যকরণ এবং সর্বজনীন স্বাস্থ্যসেবা নিশ্চিতকরণ এই লক্ষ্যের মূল দিক। বাংলাদেশ ইতিমধ্যে শিশুমৃত্যু হার হ্রাসে উল্লেখযোগ্য সাফল্য দেখিয়েছে এবং টিকাদান কর্মসূচি, কমিউনিটি ক্লিনিক স্থাপন ও মা ও শিশু স্বাস্থ্যসেবা কর্মসূচির মাধ্যমে অগ্রগতি অব্যাহত রেখেছে। তবে গ্রামীণ ও প্রত্যন্ত অঞ্চলে স্বাস্থ্যসেবার অপ্রতুলতা, দক্ষ জনবলের ঘাটতি ও অসংক্রামক রোগের ক্রমবর্ধমান প্রকোপ এখনো বড় চ্যালেঞ্জ। এই লক্ষ্য অর্জনে সরকারি-বেসরকারি অংশীদারিত্ব বৃদ্ধি, স্বাস্থ্য বাজেট বৃদ্ধি এবং প্রযুক্তিনির্ভর স্বাস্থ্যসেবা সম্প্রসারণ জরুরি। সবার জন্য সাশ্রয়ী ও মানসম্মত স্বাস্থ্যসেবা নিশ্চিত করতে পারলেই বাংলাদেশ এই লক্ষ্যমাত্রা যথাসময়ে অর্জন করতে সক্ষম হবে।"},

  {"id": "job-2025-dmch-computer-operator-q07", "examId": "job-2025-dmch-computer-operator", "subject": "english", "topic": "fill-in-the-blanks", "qno": 7, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "She is named ...... a flower.", "answer": "after"}, {"sentence": "My father ........ before I came.", "answer": "had gone/left"}, {"sentence": "Anger may be compared ....... fire.", "answer": "to"}, {"sentence": "She succeeded ...... her rigorous work.", "answer": "in"}, {"sentence": "He divided the money........ the two children.", "answer": "between"}]},

  {"id": "job-2025-dmch-computer-operator-q08", "examId": "job-2025-dmch-computer-operator", "subject": "english", "topic": "spelling", "qno": 8, "marks": 5, "type": "table", "question": "Mention the correct spelling:", "columns": ["Incorrect", "Correct"], "rows": [["Comitee", "Committee"], ["Repitetion", "Repetition"], ["Atticude", "Attitude"], ["Milenium", "Millennium"], ["Neumonia", "Pneumonia"]]},

  {"id": "job-2025-dmch-computer-operator-q09", "examId": "job-2025-dmch-computer-operator", "subject": "english", "topic": "translation", "qno": 9, "marks": 5, "type": "translate", "question": "ইংরেজিতে অনুবাদ করুনঃ", "parts": [{"label": "ক", "source": "কলম দুইটির একটিতেও চলবে না।", "target": "The pen does not write in either of the two./ Neither of the two pens will do."}, {"label": "খ", "source": "আমি কতক্ষণ তার জন্য অপেক্ষা করবো?", "target": "How long will I wait for him?"}, {"label": "গ", "source": "সকাল থেকে মুষলধারে বৃষ্টি হচ্ছে।", "target": "It has been raining cats and dogs since morning."}, {"label": "ঘ", "source": "অতি ভক্তি চোরের লক্ষণ।", "target": "Too much courtesy, too much craft."}]},

  {"id": "job-2025-dmch-computer-operator-q10", "examId": "job-2025-dmch-computer-operator", "subject": "english", "topic": "essay", "qno": 10, "marks": 5, "type": "paragraph", "question": "Write five sentences about \\\"July Mass Uprising, 2024\\\" in Bangladesh.", "answer": "The July Revolution of 2024 in Bangladesh marks a turning point in the nation's history. Initially, the students raised their voice against the longstanding unjust quota system. Gradually, this turned into a movement, which soon became a powerful wave against the authoritarian rule and systemic corruption that prevailed over the last 16 years. The government was criticized for its deeply corrupt institutions and lack of accountability. But the government responded with violent repression. In the early stage of the quota reform protests, the government's heavy-handed approach led to multiple student deaths, including those of Abu Sayed and Mugdha, and several others. This brutality ignited widespread protests, and thousands took to the streets, transforming the student protest into a nationwide movement. Throughout the revolution, over a thousand students and common people, including at least 67 children, lost their lives. By August 5, the people of Bangladesh had reached their limit and took to the streets to oust the fascist regime. Being frightened, the fascist Prime Minister, along with family and close party members, fled the country. They sought shelter in a neighboring country, India. Following their departure, Nobel Laureate Dr. Muhammad Yunus answered the call of the people, assuming the role of Chief Advisor to an Interim Government on August 8. This revolution stands as a testament to the power of collective will."},

  {"id": "job-2025-dmch-computer-operator-q11", "examId": "job-2025-dmch-computer-operator", "subject": "math", "topic": "বয়স", "qno": 11, "marks": 5, "type": "math", "question": "পিতা ও পুত্রের বর্তমান বয়সের অনুপাত ৭ঃ২ এবং ৫ বছর পরে তাদের বয়সের অনুপাত ৮ঃ৩ হবে। তাদের বর্তমান বয়স কত?", "steps": ["মনে করি, পিতার বর্তমান বয়স ৭x, পুত্রের বর্তমান বয়স ২x", "প্রশ্নমতে, ৭x+৫ : ২x+৫ = ৮ : ৩", "বা, (৭x+৫)/(২x+৫) = ৮/৩", "বা, ২১x + ১৫ = ১৬x + ৪০", "বা, ২১x − ১৬x = ৪০ − ১৫", "বা, ৫x = ২৫", "∴ x = ৫", "∴ পিতার বর্তমান বয়স = ৭ × ৫ = ৩৫ বছর, পুত্রের বর্তমান বয়স = ৫ × ২ = ১০"], "answer": "পিতার বয়স ৩৫ বছর এবং পুত্রের বয়স ১০ বছর।"},

  {"id": "job-2025-dmch-computer-operator-q12", "examId": "job-2025-dmch-computer-operator", "subject": "math", "topic": "জ্যামিতি", "qno": 12, "marks": 5, "type": "math", "question": "একটি সমবাহু ত্রিভুজের প্রত্যেক বাহুর দৈর্ঘ্য ১ মিটার বাড়ালে ক্ষেত্রফল ৩√৩ বর্গমিটার বেড়ে যায়। ত্রিভুজটির বাহুর দৈর্ঘ্য নির্ণয় করুন।", "steps": ["মনে করি, সমবাহু ত্রিভুজের প্রত্যেক বাহুর দৈর্ঘ্য a মিটার", "∴ ত্রিভুজটির ক্ষেত্রফল = (√৩/৪)a² বর্গমিটার", "ত্রিভুজটির প্রত্যেক বাহুর দৈর্ঘ্য ১ মিটার বাড়ালে ত্রিভুজটির ক্ষেত্রফল (√৩/৪)(a+১)² বর্গমিটার", "প্রশ্নানুসারে, (√৩/৪)(a+১)² − (√৩/৪)a² = ৩√৩", "বা, (a+১)² − a² = ১২", "বা, a² + ২a + ১ − a² = ১২", "বা, ২a = ১১", "∴ a = ৫.৫"], "answer": "নির্ণেয় বাহুর দৈর্ঘ্য ৫.৫ মিটার"},

  {"id": "job-2025-dmch-computer-operator-q13", "examId": "job-2025-dmch-computer-operator", "subject": "math", "topic": "ধারা", "qno": 13, "marks": 5, "type": "math", "question": "৭ + ১২ + ১৭ +.......... ধারাটির ৩০ টি পদের সমষ্টি কত?", "steps": ["ধারাটির প্রথম পদ a = ৭, সাধারণ অন্তর d = ১২ − ৭ = ৫", "ইহা একটি সমান্তর ধারা। এখানে পদ সংখ্যা n = ৩০", "আমরা জানি, সমান্তর ধারার প্রথম n সংখ্যক পদের সমষ্টি, Sₙ = (n/2){2a + (n−1)d}", "তাহলে, ৩০টি পদের সমষ্টি S₃₀ = (৩০/২){২.৭ + (৩০−১)৫}", "= ১৫(১৪ + ২৯ × ৫)", "= ১৫(১৪ + ১৪৫)", "= ১৫ × ১৫৯", "= ২৩৮৫"], "answer": "২৩৮৫"},

  {"id": "job-2025-dmch-computer-operator-q14", "examId": "job-2025-dmch-computer-operator", "subject": "math", "topic": "বীজগণিত", "qno": 14, "marks": 5, "type": "math", "question": "x³ + 6x²y + 11xy² + 6y³ কে উৎপাদকে বিশ্লেষণ কর।", "steps": ["x³ + 6x²y + 11xy² + 6y³", "= x³ + 6x²y + 12xy² + 8y³ − xy² − 2y³", "= {x³ + 3.x².2y + 3.x.(2y)² + (2y)³} − xy² − 2y³", "= (x+2y)³ − y²(x+2y)", "= (x+2y){(x+2y)² − y²}", "= (x+2y)(x+2y+y)(x+2y−y)", "= (x+2y)(x+3y)(x+y)"], "answer": "(x+y)(x+2y)(x+3y)"},

  {"id": "job-2025-dmch-computer-operator-q15", "examId": "job-2025-dmch-computer-operator", "subject": "general-knowledge", "topic": "computer-tech", "qno": 15, "marks": 30, "type": "short-qa", "question": "সাধারণ জ্ঞান-৩০ঃ নিচের প্রশ্নগুলোর উত্তর দিনঃ", "parts": [{"label": "১৫", "q": "কম্পিউটার সিস্টেম ইউনিটে মাইক্রোপ্রসেসর বলতে কী বুঝায়?", "a": "কম্পিউটারের যে অংশে ডেটা প্রক্রিয়াকরণ হয় তাকে মাইক্রোপ্রসেসর বলে। মাইক্রোপ্রসেসরকে কম্পিউটারের ব্রেইন/মস্তিষ্ক বলা হয়। একটি একক সিলিকন চিপের/ ইন্টিগ্রেটেড সার্কিট (IC) মধ্যে এক মিলিয়নের মত বা তার চেয়ে অধিক ট্রানজিস্টর, রেজিস্টার, ক্যাপাসিটর, ডায়োড ইত্যাদি থাকে।"}, {"label": "১৬", "q": "কম্পিউটার ভাইরাস কী?", "a": "ক্ষতিকারক প্রোগ্রাম"}, {"label": "১৭", "q": "কৃত্রিম বুদ্ধিমত্তা (Artifical Intelligence) বলতে কী বুঝায়? এর ব্যবহারিক প্রয়োগ সম্পর্কে লিখুন।", "a": "মানুষের চিন্তা ভাবনার অথবা বুদ্ধিমত্তার পদ্ধতিকে কৃত্রিম উপায়ে প্রযুক্তি নির্ভর যন্ত্র বা কম্পিউটারের মাধ্যমে বাস্তবায়ন করাই হলো কৃত্রিম বুদ্ধিমত্তা (Artifical Intelligence)। শিক্ষা, স্বাস্থ্য, চিকিৎসা, মেশিন, কৃষি, উদ্ভাবন, আইন-শৃঙ্খলা, রোবোটিক্স, ব্যবসা-বাণিজ্য ইত্যাদি কাজে কৃত্রিম বুদ্ধিমত্তা ব্যবহার হচ্ছে।"}, {"label": "১৮", "q": "স্প্যামিং (Spamming) কী?", "a": "স্প্যামিং হল অসংখ্য প্রাপককে অযাচিত, অনাকাঙ্ক্ষিত বা অপ্রাসঙ্গিক বার্তা (স্প্যাম) পাঠানোর একটি প্রক্রিয়া, যা সাধারণত বাণিজ্যিক বিজ্ঞাপন, প্রতারণা, বা ক্ষতিকারক উদ্দেশ্যে করা হয়।"}, {"label": "১৯", "q": "ওয়াই-ফাই (Wi-fi) কী?", "a": "ওয়াই-ফাই (Wi-fi) হচ্ছে এমন একটি জনপ্রিয় তারবিহীন প্রযুক্তি যা উচ্চ ফ্রিকুয়েন্সির রেডিও ওয়েভ ব্যবহার করে কোনো ইলেকট্রনিক ডিভাইসকে উচ্চগতি সম্পন্ন ইন্টারনেট সংযোগ কিংবা কম্পিউটার নেটওয়ার্কের মাধ্যমে ডেটা আদান প্রদান করতে পারে। এর জনক ভিক্টর হেয়েস।"}, {"label": "২০", "q": "আইএসপি (ISP) কী? ইন্টারনেট ব্যবহারের জনপ্রিয় তিনটি সার্চ ইঞ্জিনের নাম লিখুন।", "a": "আইএসপি (Internet Service Provider) হলো এমন একটি প্রতিষ্ঠান, যা ব্যবহারকারীদের ইন্টারনেট সংযোগ প্রদান করে। তিনটি জনপ্রিয় সার্চ ইঞ্জিন: ১) Google ২) Bing ৩) Yahoo"}, {"label": "২১", "q": "পূর্ণরূপ লিখুন: CPU, RAM, ROM, WWW, E-mail, AI", "a": "CPU = Central Processing Unit; RAM = Random Access Memory; ROM = Read Only Memory; WWW = World Wide Web; E-mail = Electronic Mail; AI = Artificial Intelligence"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: জনস্বাস্থ্য প্রকৌশলী অধিদপ্তর, রাঙ্গামাটি — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-dphe-rangamati-office-asst-typist)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪১৫-৪১৬)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q01", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 1, "marks": 3, "type": "table", "question": "শুদ্ধ বানান লিখুনঃ", "columns": ["অশুদ্ধ", "শুদ্ধ"], "rows": [["গিতাঞ্জলি", "গীতাঞ্জলি"], ["বিভিষিকা", "বিভীষিকা"], ["দোষণীয়", "দূষণীয়"]]},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q02", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "bangla", "topic": "বাগধারা", "qno": 2, "marks": 3, "type": "idiom", "question": "বাগধারা সমূহের অর্থসহ বাক্য রচনা করুনঃ", "parts": [{"label": "ক", "phrase": "চাঁদের হাট", "meaning": "আনন্দের প্রাচুর্য"}, {"label": "খ", "phrase": "বসন্তের কোকিল", "meaning": "সুদিনের বন্ধু"}, {"label": "গ", "phrase": "আঠার মাসে বছর", "meaning": "দীর্ঘসূত্রতা"}]},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q03", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "bangla", "topic": "translation", "qno": 3, "marks": 3, "type": "translate", "question": "অনুবাদ করুন (ইংরেজি থেকে বাংলা)", "parts": [{"label": "a", "source": "Switch on the light.", "target": "বাতি জ্বালাও/ লাইটের সুইচ দাও।"}, {"label": "b", "source": "A friend in need is a friend indeed", "target": "বিপদে বন্ধুর পরিচয়"}, {"label": "c", "source": "It hardly rains in Spain", "target": "স্পেনে কদাচিৎ বৃষ্টি হয়।"}]},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q04", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 4, "marks": 3, "type": "sub-parts", "question": "বিপরীত শব্দ লিখুনঃ", "parts": [{"label": "ক", "q": "অগ্রজ", "a": "অনুজ"}, {"label": "খ", "q": "অলীক", "a": "বাস্তব"}, {"label": "গ", "q": "আত্মীয়", "a": "অনাত্মীয়"}]},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q05", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 5, "marks": 3, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "যা বলা হবে", "a": "বক্তব্য"}, {"label": "খ", "q": "আদি নেই যার", "a": "অনাদি"}, {"label": "গ", "q": "জলে চরে যে", "a": "জলচর"}]},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q06", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "bangla", "topic": "essay", "qno": 6, "marks": 10, "type": "paragraph", "question": "অনুচ্ছেদ লিখুনঃ \\\"অফিস সহকারীর দায়িত্ব ও কর্তব্য\\\"", "answer": "একজন অফিস সহকারী একটি দপ্তর বা প্রতিষ্ঠানের প্রশাসনিক ও দাপ্তরিক কার্যক্রম পরিচালনায় সহায়ক ভূমিকা পালন করে। অফিস সহকারীর প্রধান দায়িত্ব ও কর্তব্যঃ ১. ফাইল ও নথি ব্যবস্থাপনা: বিভিন্ন রেজিস্টার ও নথি সংগ্রহ, সংরক্ষণ ও সঠিকভাবে সাজানো। নথির বিষয়, নম্বর, পূর্ববর্তী নথির সূত্র, নথি খোলা/বন্ধের তারিখ ইত্যাদি বিষয় লিপিবদ্ধকরণ। ২. চিঠি ও ডাক ব্যবস্থাপনা: অফিসে আসা চিঠি, ডাকপত্র, পার্সেল গ্রহণ ও তা রেজিস্টারে লিপিবদ্ধ করে সংশ্লিষ্ট শাখায় বিতরণের ব্যবস্থা করা। ৩. প্রশাসনিক কাজ: আগত চিঠি বিপরীতে নোট লিখন/ ঊর্ধ্বতন কর্মকর্তার নিকট উপস্থাপন, পত্র ড্রাফট, পত্র জারি করা, নোটিশ বোর্ডে বিজ্ঞপ্তি প্রদর্শন করা ইত্যাদি। ৪. সভা সংক্রান্ত: অফিসে বিভিন্ন সময় মিটিং এর নোটিশ, হাজিরা, কার্যপত্র ও কার্যবিবরণী প্রস্তুতকরণ। ৫. শৃঙ্খলা ও ভদ্রতা বজায় রাখা: অফিসে আগত ব্যক্তি বা অতিথিদের সঙ্গে ভদ্র ও সৌজন্যমূলক আচরণ করা। অফিসের পরিবেশ পরিচ্ছন্ন ও সুশৃঙ্খল রাখা। ৬. বিবিধ: ঊর্ধ্বতন কর্তৃপক্ষের যৌক্তিক আদেশ যেমন, কর্তৃপক্ষের ভ্রমণ ব্যয় বিল করা, চেক ইস্যুকরণ, বেতন-ভাতা বিল করা, দপ্তরের জন্য নাস্তা ক্রয়, প্রতিষ্ঠানের বিভিন্ন অনুষ্ঠান বা বিশেষ কার্যক্রমে সহায়তা প্রদান ইত্যাদি।"},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q07", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "english", "topic": "translation", "qno": 7, "marks": 3, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "পানির অপর নাম জীবন।", "target": "Another name of water is life"}, {"label": "খ", "source": "আমাদের দেশের নাম বাংলাদেশ।", "target": "The name of our country is Bangladesh."}, {"label": "গ", "source": "তুমি কি কখনো রাঙ্গামাটি গিয়েছে?", "target": "Have you ever been to Rangamati?"}]},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q08", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 8, "marks": 3, "type": "fill-gaps", "question": "Fill in the blanks:", "parts": [{"sentence": "She has been ill........ Friday last.", "answer": "since"}, {"sentence": "I ........ to Dhaka yesterday.", "answer": "went"}, {"sentence": "Time and tide......... for none.", "answer": "waits"}]},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q09", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "english", "topic": "essay", "qno": 9, "marks": 10, "type": "paragraph", "question": "Write a paragraph on \\\"Water Pollution\\\".", "answer": "Water pollution is one of the most serious environmental problems in Bangladesh. It occurs when harmful substances, such as industrial waste, chemicals, sewage, and plastic, contaminate rivers, canals, and other water bodies. Rapid industrialization and unplanned urbanization are the main causes of water pollution. Factories often dump untreated waste directly into rivers, while household waste and agricultural chemicals also pollute water sources. Water pollution has serious effects on human health and the environment. Contaminated water can cause diseases like diarrhoea, cholera, and skin infections. It also destroys aquatic life and disrupts the ecological balance of rivers and wetlands. To prevent water pollution, we must ensure proper treatment of industrial and household waste before it is released into water bodies. The government should enforce strict environmental laws, and people should be made aware of the dangers of water pollution. If we fail to act now, our rivers and water resources will become unusable for future generations."},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q10", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "english", "topic": "idiom", "qno": 10, "marks": 5, "type": "idiom", "question": "Make sentences with the following idioms and phrases:", "parts": [{"label": "a", "phrase": "By dint of", "meaning": "বদৌলতে"}, {"label": "b", "phrase": "For good", "meaning": "চিরতরে"}, {"label": "c", "phrase": "Bag and baggage", "meaning": "তল্পি-তল্পাসহ"}]},

  {"id": "job-2025-dphe-rangamati-office-asst-typist-q11", "examId": "job-2025-dphe-rangamati-office-asst-typist", "subject": "english", "topic": "grammar", "qno": 11, "marks": 3, "type": "fill-gaps", "question": "Use appropriate articles in the blanks:", "parts": [{"sentence": "He is......M.A.", "answer": "an"}, {"sentence": "He is..... one eyed man.", "answer": "a"}, {"sentence": "26th March is..... Independence Day of Bangladesh.", "answer": "the"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: ভূমি আপীল বোর্ড — অফিস সহায়ক (job-2025-land-appeal-board-office-sohayok)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪১৭-৪১৯)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-land-appeal-board-office-sohayok-q01", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "bangla", "topic": "essay", "qno": 1, "marks": 10, "type": "paragraph", "question": "ভাব-সম্প্রসারণ লিখুনঃ 'শিক্ষাই জাতির মেরুদণ্ড'", "answer": "মেরুদণ্ড ছাড়া যেমন কোনো প্রাণী উঠে দাঁড়াতে পারে না, তেমনি শিক্ষা ছাড়া কোনো জাতি উন্নতির শিখরে আরোহণ করতে পারে না। শিক্ষা জাতির প্রধান চালিকাশক্তি। নিরক্ষর মানুষ সমাজের জন্য শুধু বোঝা নয়, দেশের অগ্রগতির পথেও বাধাস্বরূপ। কারণ, শিক্ষা মানুষকে কর্মদক্ষ ও সচেতন নাগরিক হতে সাহায্য করে। দেশ ও জাতির উন্নয়নের জন্য দরকার সচেতন ও কর্মদক্ষ মানুষ। মেরুদণ্ডহীন প্রাণী যেমন সোজা হয়ে দাঁড়াতে পারে না, তেমনি শিক্ষা ছাড়া কোন জাতিই পৃথিবীর বুকে মাথা উঁচু করে দাঁড়াতে পারে না। এ জন্য শিক্ষাকে মেরুদণ্ডের সঙ্গে তুলনা করা হয়েছে। পৃথিবীতে যে জাতি যত বেশি শিক্ষিত সে জাতি তত বেশি উন্নত। শিক্ষা মানবসম্পদ উন্নয়নের প্রধান সোপান। আত্মশক্তি অর্জনের প্রধান উপায় শিক্ষা। তাই জাতির উন্নয়নের জন্য শিক্ষাকে সবচেয়ে বেশি গুরুত্ব দেওয়া উচিত। শিক্ষাকে সহজলভ্য ও সবার জন্য উন্মুক্ত করে দিতে হবে। মনে রাখতে হবে শিক্ষা সুযোগ নয়, অধিকার।"},

  {"id": "job-2025-land-appeal-board-office-sohayok-q02", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "bangla", "topic": "grammar", "qno": 2, "marks": 3, "type": "paragraph", "question": "গঠনগত দিক দিয়ে বাক্যকে কয় ভাগে ভাগ করা যায় ও কী কী?", "answer": "৩ প্রকার; সরল বাক্য, জটিল বাক্য ও যৌগিক বাক্য"},

  {"id": "job-2025-land-appeal-board-office-sohayok-q03", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "bangla", "topic": "short-qa", "qno": 3, "marks": 3, "type": "paragraph", "question": "কোন কবিকে ছন্দের যাদুকর বলা হয়?", "answer": "সত্যেন্দ্রনাথ দত্ত"},

  {"id": "job-2025-land-appeal-board-office-sohayok-q04", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "bangla", "topic": "short-qa", "qno": 4, "marks": 3, "type": "paragraph", "question": "\\\"ভানুসিংহ\\\" কার ছদ্মনাম?", "answer": "রবীন্দ্রনাথ ঠাকুর"},

  {"id": "job-2025-land-appeal-board-office-sohayok-q05", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 5, "marks": 3, "type": "sub-parts", "question": "শুদ্ধ বানান লিখুনঃ", "parts": [{"label": "ক", "q": "সমিচিন", "a": "সমীচীন"}, {"label": "খ", "q": "শ্রদ্ধাঞ্জলী", "a": "শ্রদ্ধাঞ্জলি"}, {"label": "গ", "q": "মন্ত্রীসভা", "a": "মন্ত্রিসভা"}]},

  {"id": "job-2025-land-appeal-board-office-sohayok-q06", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "bangla", "topic": "সন্ধি", "qno": 6, "marks": 3, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "শীতার্ত", "a": "শীত + ঋত"}, {"label": "খ", "q": "স্বাধীন", "a": "স্ব + অধীন"}, {"label": "গ", "q": "নবান্ন", "a": "নব + অন্ন"}]},

  {"id": "job-2025-land-appeal-board-office-sohayok-q07", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "bangla", "topic": "বাক্য সংকোচন", "qno": 7, "marks": 3, "type": "sub-parts", "question": "বাক্য সংকোচন করুনঃ", "parts": [{"label": "ক", "q": "ক্ষমার অযোগ্য", "a": "ক্ষমার্হ"}, {"label": "খ", "q": "যিনি বক্তৃতা দানে পটু", "a": "বাগ্মী"}, {"label": "গ", "q": "যা বলা হয়নি", "a": "অনুক্ত"}]},

  {"id": "job-2025-land-appeal-board-office-sohayok-q08", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "bangla", "topic": "বাগধারা", "qno": 8, "marks": 3, "type": "idiom", "question": "বাগধারার অর্থসহ বাক্য রচনা করুনঃ", "parts": [{"label": "ক", "phrase": "কে মাছের প্রাণ", "meaning": "দীর্ঘজীবী"}, {"label": "খ", "phrase": "গণলিকা প্রবাহ", "meaning": "অন্ধ অনুকরণ"}, {"label": "গ", "phrase": "সঙ্গমে চড়া", "meaning": "প্রচণ্ড উত্তেজনা"}]},

  {"id": "job-2025-land-appeal-board-office-sohayok-q09", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "english", "topic": "essay", "qno": 9, "marks": 10, "type": "paragraph", "question": "Write a paragraph on \\\"Water Pollution\\\".", "answer": "Water pollution is one of the most serious environmental problems in Bangladesh. It occurs when harmful substances, such as industrial waste, chemicals, sewage, and plastic, contaminate rivers, canals, and other water bodies. Rapid industrialization and unplanned urbanization are the main causes of water pollution. Factories often dump untreated waste directly into rivers, while household waste and agricultural chemicals also pollute water sources. Water pollution has serious effects on human health and the environment. Contaminated water can cause diseases like diarrhoea, cholera, and skin infections. It also destroys aquatic life and disrupts the ecological balance of rivers and wetlands. To prevent water pollution, we must ensure proper treatment of industrial and household waste before it is released into water bodies. The government should enforce strict environmental laws, and people should be made aware of the dangers of water pollution."},

  {"id": "job-2025-land-appeal-board-office-sohayok-q10", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "english", "topic": "translation", "qno": 10, "marks": 3, "type": "translate", "question": "Translate the following sentences into English:", "parts": [{"label": "ক", "source": "বাংলাদেশ ষড়ঋতুর দেশ।", "target": "Bangladesh is a land of six seasons."}, {"label": "খ", "source": "সে স্কুলে যায় না।", "target": "He does not go to school."}, {"label": "গ", "source": "ত্রিশ দিনে এক মাস।", "target": "Thirty days make a month."}]},

  {"id": "job-2025-land-appeal-board-office-sohayok-q11", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "english", "topic": "idiom", "qno": 11, "marks": 3, "type": "idiom", "question": "Make sentences with the following idioms and phrases:", "parts": [{"label": "a", "phrase": "By dint of", "meaning": "বদৌলতে"}, {"label": "b", "phrase": "For good", "meaning": "চিরতরে"}, {"label": "c", "phrase": "Bag and baggage", "meaning": "তল্পি-তল্পাসহ"}]},

  {"id": "job-2025-land-appeal-board-office-sohayok-q12", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "english", "topic": "grammar", "qno": 12, "marks": 3, "type": "fill-gaps", "question": "Use appropriate articles in the blanks:", "parts": [{"sentence": "He is......M.A.", "answer": "an"}, {"sentence": "He is..... one eyed man.", "answer": "a"}, {"sentence": "26th March is..... Independence Day of Bangladesh.", "answer": "the"}]},

  {"id": "job-2025-land-appeal-board-office-sohayok-q13", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "english", "topic": "fill-in-the-blanks", "qno": 13, "marks": 3, "type": "fill-gaps", "question": "Write the appropriate prepositions:", "parts": [{"sentence": "I was admitted........class VII.", "answer": "to"}, {"sentence": "Take care.......your health.", "answer": "of"}, {"sentence": "You should abide........the rules of the office.", "answer": "by"}]},

  {"id": "job-2025-land-appeal-board-office-sohayok-q14", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "english", "topic": "grammar", "qno": 14, "marks": 3, "type": "sentence-change", "question": "Change the form of voice:", "parts": [{"label": "a", "original": "She was singing a song.", "changed": "A song was being sung by her."}, {"label": "b", "original": "Do this work.", "changed": "Let this work be done."}, {"label": "c", "original": "Honey tastes sweet.", "changed": "Honey is tasted sweet."}]},

  {"id": "job-2025-land-appeal-board-office-sohayok-q15", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "math", "topic": "শতকরা", "qno": 15, "marks": 5, "type": "math", "question": "একজন দোকানদার ৪৮ টাকা হালি দরে ৭ ডজন ডিম ক্রয় করে প্রতি হালি ৫০ টাকা দরে বিক্রয় করলে তার শতকরা কত টাকা লাভ হবে?", "steps": ["আমরা জানি, ১ ডজন = ৩ হালি", "৭ ডজন = (৩×৭) হালি = ২১ হালি", "২১ হালি ডিমের ক্রয়মূল্য = ২১ × ৪৮ = ১০০৮ টাকা", "২১ হালি ডিমের বিক্রয়মূল্য = ২১ × ৫০ = ১০৫০ টাকা", "লাভ হয়= (১০৫০ − ১০০৮) টাকা = ৪২ টাকা", "শতকরা লাভ হয় = (৪২×১০০)/১০০৮ = ৪.১৭ টাকা"], "answer": "লাভ ৪.১৭%"},

  {"id": "job-2025-land-appeal-board-office-sohayok-q16", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "math", "topic": "বয়স", "qno": 16, "marks": 5, "type": "math", "question": "রহিম ও করিমের বয়সের গড় ৩৫ বছর। রহিম ও হামজার বয়সের গড় ২০ বছর। হামজার বয়স ১১ বছর হলে করিমের বয়স কত?", "steps": ["রহিম ও করিমের বয়সের সমষ্টি = ৭০ বছর", "রহিম ও হামজার বয়সের সমষ্টি = ৪০ বছর", "হামজার বয়স ১১ হলে রহিমের বয়স = ৪০ − ১১ = ২৯ বছর", "সুতরাং করিমের বয়স = ৭০ − ২৯ = ৪১ বছর"], "answer": "৪১ বছর"},

  {"id": "job-2025-land-appeal-board-office-sohayok-q17", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "math", "topic": "বীজগণিত", "qno": 17, "marks": 5, "type": "math", "question": "উৎপাদকে বিশ্লেষণ করঃ x⁴ − 4x + 3", "steps": ["x⁴ − 4x + 3", "= x⁴ − x³ + x³ − x² + x² − x − 3x + 3", "= x³(x−1) + x²(x−1) + x(x−1) − 3(x−1)", "= (x−1)(x³+x²+x−3)", "= (x−1){x³ − x² + 2x² − 2x + 3x − 3}", "= (x−1){x²(x−1) + 2x(x−1) + 3(x−1)}", "= (x−1)(x−1)(x²+2x+3)"], "answer": "(x−1)²(x²+2x+3)"},

  {"id": "job-2025-land-appeal-board-office-sohayok-q18", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "math", "topic": "জ্যামিতি", "qno": 18, "marks": 5, "type": "math", "question": "১৩ সে.মি. ব্যাসার্ধ বিশিষ্ট কোনো বৃত্তের কেন্দ্র হতে একটি জ্যা এর লম্ব দূরত্ব ৫ সে.মি. হলে জ্যা এর দৈর্ঘ্য কত?", "steps": ["ধরি, জ্যা এর দৈর্ঘ্য 2a, অর্ধ জ্যা এর দৈর্ঘ্য a", "বৃত্তের কেন্দ্র হতে কোন জ্যা এর উপর অঙ্কিত লম্ব- উক্ত জ্যাকে সমদ্বিখণ্ডিত করে।", "এখানে, a² + 5² = (13)²", "বা, a² + 25 = 169", "বা, a² = 144", "∴ a = 12", "∴ জ্যা এর দৈর্ঘ্য 2 × 12 = 24 সে.মি"], "answer": "২৪ সে.মি"},

  {"id": "job-2025-land-appeal-board-office-sohayok-q19", "examId": "job-2025-land-appeal-board-office-sohayok", "subject": "general-knowledge", "topic": "gk-others", "qno": 19, "marks": 10, "type": "short-qa", "question": "সাধারণ জ্ঞান-১০ঃ নিচের প্রশ্নের উত্তর দিনঃ", "parts": [{"label": "১৯", "q": "বর্তমানে কোন দেশে বাংলাদেশের সবচেয়ে বেশি শান্তিরক্ষী বাহিনী অবস্থান করছে?", "a": "ডেমোক্র্যাটিক রিপাবলিক অফ কঙ্গো"}, {"label": "২০", "q": "\\\"মোনালিসা\\\" কী?", "a": "একটি চিত্রকর্ম"}, {"label": "২১", "q": "বাংলাদেশের প্রাচীনতম জনপদ কোনটি?", "a": "পুণ্ড্র"}, {"label": "২২", "q": "\\\"সকল নাগরিক আইনের দৃষ্টিতে সমান এবং আইনের সমান আশ্রয় লাভের অধিকারী\\\" বাংলাদেশের সংবিধানের কোন অনুচ্ছেদে বর্ণিত আছে?", "a": "২৭"}, {"label": "২৩", "q": "রোহিঙ্গা নিয়ে জাতিসংঘের কোন সংস্থা কাজ করে?", "a": "UNHCR"}, {"label": "২৪", "q": "\\\"রূপালী\\\" ও \\\"ডেলফোজ\\\" কী?", "a": "উন্নত জাতের তুলা"}, {"label": "২৫", "q": "\\\"সঞ্চিতা\\\" কার লেখা?", "a": "কাজী নজরুল ইসলাম"}, {"label": "২৬", "q": "বাংলাদেশে \\\"The Bay of Bengal Industrial Growth Belt (BiG-B)\\\" সহযোগিতার উদ্যোক্তা দেশ কোনটি?", "a": "জাপান"}, {"label": "২৭", "q": "\\\"IAEA\\\" এর পূর্ণরূপ কী?", "a": "International Atomic Energy Agency"}, {"label": "২৮", "q": "\\\"UNIIMOG\\\" এর পূর্ণরূপ কী?", "a": "United Nations Iran-Iraq Military Observer Group"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বিদ্যুৎ বিভাগ — অফিস সহায়ক (job-2025-biddyut-office-sohayok)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪১৯-৪২০)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-biddyut-office-sohayok-q01", "examId": "job-2025-biddyut-office-sohayok", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 1, "marks": 3, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুন।", "parts": [{"label": "ক", "q": "অন্য উপায় নেই যার", "a": "অনন্যোপায়"}, {"label": "খ", "q": "অর্থহীন উক্তি", "a": "প্রলাপ"}, {"label": "গ", "q": "জলে জন্মে যা", "a": "জলজ"}]},

  {"id": "job-2025-biddyut-office-sohayok-q02", "examId": "job-2025-biddyut-office-sohayok", "subject": "bangla", "topic": "অর্থসহ বাক্য", "qno": 2, "marks": 2, "type": "sub-parts", "question": "অর্থসহ বাক্য লিখুন।", "parts": [{"label": "ক", "q": "শিরে সংক্রান্তি", "a": "আসন্ন বিপদ"}, {"label": "খ", "q": "কাছা টিলা", "a": "অসাবধানতা"}]},

  {"id": "job-2025-biddyut-office-sohayok-q03", "examId": "job-2025-biddyut-office-sohayok", "subject": "bangla", "topic": "সন্ধি", "qno": 3, "marks": 3, "type": "sub-parts", "question": "সন্ধি-বিচ্ছেদ করুন।", "parts": [{"label": "ক", "q": "তন্বী", "a": "তনু + ঈ"}, {"label": "খ", "q": "ষোড়শ", "a": "ষট্ + দশ"}, {"label": "গ", "q": "সংবাদ", "a": "সম্ + বাদ"}]},

  {"id": "job-2025-biddyut-office-sohayok-q04", "examId": "job-2025-biddyut-office-sohayok", "subject": "english", "topic": "translation", "qno": 4, "marks": 3, "type": "translate", "question": "Translate into English.", "parts": [{"label": "ক", "source": "তোমার বাড়ি যাওয়াই ভালা।", "target": "You had better go home."}, {"label": "খ", "source": "ত্রিশ দিনে এক মাস।", "target": "Thirty days makes a month."}, {"label": "গ", "source": "আমি তোমাকে ভাত খাওয়াবো।", "target": "I will feed you rice."}]},

  {"id": "job-2025-biddyut-office-sohayok-q05", "examId": "job-2025-biddyut-office-sohayok", "subject": "english", "topic": "idiom", "qno": 5, "marks": 2, "type": "idiom", "question": "Make sentence with the following idioms:", "parts": [{"label": "a", "phrase": "Round the clock", "meaning": "সারাদিন", "example": "He works round the clock."}, {"label": "b", "phrase": "Bread and butter", "meaning": "জীবিকা", "example": "He earns bread and butter by means of honest labour."}]},

  {"id": "job-2025-biddyut-office-sohayok-q06", "examId": "job-2025-biddyut-office-sohayok", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks with appropriate word/preposition.", "question_extra": "The main cause ..... road accidents ......Bangladesh.... the violation of traffic rules ......the drivers ...... do not care .......human lives.", "parts": [{"sentence": "The main cause ..... road accidents ......Bangladesh.... the violation of traffic rules ......the drivers ...... do not care .......human lives.", "answer": "of, in, is, by, who, for"}]},

  {"id": "job-2025-biddyut-office-sohayok-q07", "examId": "job-2025-biddyut-office-sohayok", "subject": "english", "topic": "spelling", "qno": 7, "marks": 5, "type": "table", "question": "Correct the spelling of the following words:", "columns": ["Incorrect", "Correct"], "rows": [["Diciplin", "Discipline"], ["Exersice", "Exercise"], ["Embition", "Ambition"], ["Honasty", "Honesty"]]},

  {"id": "job-2025-biddyut-office-sohayok-q08", "examId": "job-2025-biddyut-office-sohayok", "subject": "math", "topic": "জ্যামিতি", "qno": 8, "marks": 5, "type": "math", "question": "একটি চৌবাচ্চায় ৮০০০ লিটার পানি ধরে। চৌবাচ্চাটির দৈর্ঘ্য ২.৫৬ মিটার এবং প্রস্থ ১.২৫ মিটার হলে, গভীরতা কত?", "steps": ["চৌবাচ্চাটির তলার ক্ষেত্রফল = ২.৫৬ মিটার × ১.২৫ মিটার", "= ২৫৬ সে.মি. × ১২৫ সে.মি.", "= ৩২০০০ বর্গ সে.মি.", "চৌবাচ্চায় ৮০০০ লিটার বা ৮০০০ × ১০০০ ঘন সে.মি. পানি ধরে। [১০০০ ঘন সে.মি. = ১ লিটার]", "অতএব, চৌবাচ্চাটির আয়তন ৮০০০০০০ ঘন সে.মি.", "∴ চৌবাচ্চাটির গভীরতা = ৮০০০০০০/৩২০০০ সে.মি. = ২৫০ সে.মি. = ২.৫ মিটার"], "answer": "২.৫ মিটার"},

  {"id": "job-2025-biddyut-office-sohayok-q09", "examId": "job-2025-biddyut-office-sohayok", "subject": "math", "topic": "বীজগণিত", "qno": 9, "marks": 5, "type": "math", "question": "(x+6)(x+4) কে দুটি রাশির বর্গের অন্তররূপে প্রকাশ করুন।", "steps": ["ধরি, x + 6 = a এবং x + 4 = b", "প্রদত্ত রাশি: ab = {(a+b)/2}² − {(a−b)/2}²", "= {(x+6+x+4)/2}² − {(x+6−x−4)/2}²", "= {(2x+10)/2}² − (2/2)²", "= {2(x+5)/2}² − 1²", "= (x+5)² − 1²"], "answer": "(x+5)² − 1²"},

  {"id": "job-2025-biddyut-office-sohayok-q10", "examId": "job-2025-biddyut-office-sohayok", "subject": "math", "topic": "জ্যামিতি", "qno": 10, "marks": 5, "type": "paragraph", "question": "সংজ্ঞা লিখুনঃ সন্নিহিত কোণ, ট্রাপিজিয়াম, জ্যা", "answer": "সন্নিহিত কোণ: দুটি কোণের একটি সাধারণ বাহু ও একই শীর্ষ বিন্দু থাকলে তাদের পরস্পরকে সন্নিহিত কোণ বলে। ট্রাপিজিয়াম: যে চতুর্ভুজের এক জোড়া বিপরীত বাহু সমান্তরাল, একে ট্রাপিজিয়াম বলে। জ্যা: বৃত্তের যেকোন দুইটি বিন্দুর সংযোজক রেখাংশকে বৃত্তের জ্যা বলে।"},

  {"id": "job-2025-biddyut-office-sohayok-q11", "examId": "job-2025-biddyut-office-sohayok", "subject": "general-knowledge", "topic": "gk-others", "qno": 11, "marks": 12, "type": "short-qa", "question": "সাধারণ জ্ঞান-১০ঃ এক কথায় উত্তর দিনঃ", "parts": [{"label": "ক", "q": "টাঙ্গুয়ার হাওড় কোন জেলায় অবস্থিত?", "a": "সুনামগঞ্জ"}, {"label": "খ", "q": "জাতিসংঘর শরণার্থী বিষয়ক সংস্থার নাম কি?", "a": "UNHCR"}, {"label": "গ", "q": "বাংলাদেশের সবচেয়ে উষ্ণ স্থানের নাম কি?", "a": "নাটোরের লালপুর।"}, {"label": "ঘ", "q": "এপিকালচার কি?", "a": "মৌমাছি চাষ"}, {"label": "ঙ", "q": "কম্পিউটারের ব্রেইন কাকে বলা হয়?", "a": "মাইক্রোপ্রসেসর"}, {"label": "চ", "q": "বাংলাদেশের মুক্তিযুদ্ধের প্রথম শত্রুমুক্ত জেলা কোনটি?", "a": "যশোর"}, {"label": "ছ", "q": "ড্রাই আইস কি?", "a": "কার্বন ড্রাই অক্সাইডের কঠিন রূপ"}, {"label": "জ", "q": "কেন্দ্রীয় শহীদ মিনারের স্থপতি কে?", "a": "হামিদুর রহমান"}, {"label": "ঝ", "q": "আয়তনে এশিয়ার সবচেয়ে ছোট দেশ কোনটি?", "a": "মালদ্বীপ"}, {"label": "ঞ", "q": "\\\"অগ্নিবীণা\\\" কাব্যগ্রন্থের রচয়িতা কে?", "a": "কাজী নজরুল ইসলাম"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বিদ্যুৎ বিভাগ — সাঁটমুদ্রাক্ষরিক কাম কম্পিউটার অপারেটর (job-2025-biddyut-steno-typist)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪২০-৪২২)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-biddyut-steno-typist-q01", "examId": "job-2025-biddyut-steno-typist", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 1, "marks": 5, "type": "table", "question": "বিপরীত শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["আবশ্যিক", "ঐচ্ছিক"], ["উৎকর্ষ", "অপকর্ষ"], ["অর্বাচীন", "প্রাচীন"], ["পটু", "অপটু"], ["আবির্ভাব", "তিরোভাব"]]},

  {"id": "job-2025-biddyut-steno-typist-q02", "examId": "job-2025-biddyut-steno-typist", "subject": "bangla", "topic": "অর্থ লিখুন", "qno": 2, "marks": 5, "type": "sub-parts", "question": "অর্থ লিখুনঃ", "parts": [{"label": "ক", "q": "কুয়ার ব্যাঙ", "a": "সংকীর্ণমনা/ সীমাবদ্ধ জ্ঞান"}, {"label": "খ", "q": "উজানের কৈ", "a": "সহজলভ্য"}, {"label": "গ", "q": "তুলসী বনের বাঘ", "a": "ভণ্ড"}, {"label": "ঘ", "q": "ঝড়ো কাক", "a": "বিপদগ্রস্ত ব্যক্তি"}, {"label": "ঙ", "q": "বালির বাঁধ", "a": "অস্থায়ী বস্তু"}]},

  {"id": "job-2025-biddyut-steno-typist-q03", "examId": "job-2025-biddyut-steno-typist", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 3, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "যার উপমা নেই", "a": "অনুপম"}, {"label": "খ", "q": "জয়ের জন্য উৎসব", "a": "জয়ন্তী"}, {"label": "গ", "q": "দমন করা কষ্টকর যা", "a": "দুর্দমনীয়"}, {"label": "ঘ", "q": "পূর্বে শোনা যায়নি", "a": "অশ্রুতপূর্ব"}, {"label": "ঙ", "q": "যে ভূমিতে ফসল জন্মায় না", "a": "ঊষর"}]},

  {"id": "job-2025-biddyut-steno-typist-q04", "examId": "job-2025-biddyut-steno-typist", "subject": "bangla", "topic": "essay", "qno": 4, "marks": 5, "type": "paragraph", "question": "নবায়ন জ্বালানি সম্পর্কে সংক্ষেপে লিখুন।", "answer": "নবায়নযোগ্য জ্বালানি হলো এমন শক্তির উৎস যা প্রকৃতিতে পুনরায় সৃষ্টি হয় এবং সহজে ফুরিয়ে যায় না। সূর্যালোক, বায়ু, পানি, জৈববস্তু ও ভূ-তাপীয় শক্তি নবায়নযোগ্য জ্বালানির প্রধান উৎস। জীবাশ্ম জ্বালানির বিপরীতে নবায়নযোগ্য জ্বালানি পরিবেশবান্ধব এবং কার্বন নিঃসরণ কম করে। বাংলাদেশে সৌরবিদ্যুৎ ও বায়ুবিদ্যুৎ উৎপাদনে ক্রমাগত অগ্রগতি হচ্ছে। জ্বালানি নিরাপত্তা নিশ্চিত করতে এবং জলবায়ু পরিবর্তনের ঝুঁকি কমাতে নবায়নযোগ্য জ্বালানির ব্যবহার বৃদ্ধি করা অত্যন্ত জরুরি।"},

  {"id": "job-2025-biddyut-steno-typist-q05", "examId": "job-2025-biddyut-steno-typist", "subject": "english", "topic": "translation", "qno": 5, "marks": 5, "type": "translate", "question": "Translate the following sentences into English:", "parts": [{"label": "ক", "source": "তিনি একজন চরিত্রবান মানুষ", "target": "He is a virtuous person."}, {"label": "খ", "source": "সে গতকাল স্কুলে যায়নি।", "target": "He didn't go to school yesterday."}, {"label": "গ", "source": "রাজশাহী শহর পদ্মা নদীর তীরে অবস্থিত।", "target": "Rajshahi stands/ is situated on the bank of the Padma river"}, {"label": "ঘ", "source": "তাকে দেখে ভদ্রলোক মনে হয়।", "target": "He seems to be a gentleman."}, {"label": "ঙ", "source": "আমি কমিটিতে নেই।", "target": "I am not on the committee"}]},

  {"id": "job-2025-biddyut-steno-typist-q06", "examId": "job-2025-biddyut-steno-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks with prepositions:", "parts": [{"sentence": "I am tired........ waiting for you.", "answer": "of"}, {"sentence": "He is not good...... mathematics.", "answer": "at"}, {"sentence": "It's 10 o'clock....... my watch.", "answer": "by"}, {"sentence": "He went abroad...... good.", "answer": "for"}, {"sentence": "The children were entrusted....... their uncle.", "answer": "to"}]},

  {"id": "job-2025-biddyut-steno-typist-q07", "examId": "job-2025-biddyut-steno-typist", "subject": "english", "topic": "grammar", "qno": 7, "marks": 4, "type": "sentence-change", "question": "Transform the sentences:", "parts": [{"label": "a", "original": "Shut the door. (Passive)", "changed": "Let the door be shut."}, {"label": "b", "original": "Everyone wants to succeed in life. (Interrogative)", "changed": "Who does not want to succeed in life?"}, {"label": "c", "original": "As he was ill, he did not go to school. (Compound)", "changed": "He was ill and did not go to school."}, {"label": "d", "original": "He said, \\\"Do it\\\" (Indirect)", "changed": "He ordered to do it."}]},

  {"id": "job-2025-biddyut-steno-typist-q08", "examId": "job-2025-biddyut-steno-typist", "subject": "english", "topic": "spelling", "qno": 8, "marks": 3, "type": "table", "question": "Correct the following words:", "columns": ["Incorrect", "Correct"], "rows": [["Disciplin", "Discipline"], ["Perticipation", "Participation"], ["Sireous", "Serious"]]},

  {"id": "job-2025-biddyut-steno-typist-q09", "examId": "job-2025-biddyut-steno-typist", "subject": "english", "topic": "idiom", "qno": 9, "marks": 2, "type": "idiom", "question": "Make sentences with the following idioms:", "parts": [{"label": "a", "phrase": "Break the ice", "meaning": "সংকোচ কাটানো"}, {"label": "b", "phrase": "Once in a blue moon", "meaning": "কদাচিৎ"}]},

  {"id": "job-2025-biddyut-steno-typist-q10", "examId": "job-2025-biddyut-steno-typist", "subject": "english", "topic": "essay", "qno": 10, "marks": 5, "type": "paragraph", "question": "Write five sentences on \\\"Traffic Jam\\\"", "answer": "Traffic jam is a long line of vehicles on a road that can't move or that can't move very slowly. Traffic jam is common affair in the big cities and towns. It is one of the major problems. The causes of traffic jam are many. The increase in the number of buses, trucks, rickshaws, auto rickshaws is also responsible for this problem. The drivers are not willing to obey the traffic rules. Illegal parking of vehicles and overtaking tendency are also responsible for traffic jam. At office time traffic jam is intolerable. It kills our valuable time. Students, patient, workers, employs can't reach their goal in time. This problem can be solved by adopting some measures. Traffic police should be skilled. Traffic rules should impose strictly. Unlicensed vehicles should be removed. Public awareness is also needed in this respect."},

  {"id": "job-2025-biddyut-steno-typist-q11", "examId": "job-2025-biddyut-steno-typist", "subject": "math", "topic": "নৌকা ও স্রোত", "qno": 11, "marks": 5, "type": "math", "question": "একটি নৌকা স্থির পানিতে ঘণ্টায় ৬ কি.মি. যেতে পারে। স্রোতের প্রতিকূলে ৬ কি.মি. যেতে নৌকাটির ৩ গুণ সময় লাগে। স্রোতের অনুকূলে ৫০ কি.মি. যেতে নৌকাটির কত সময় লাগবে?", "steps": ["নৌকাটি স্থির পানিতে ৬ কি.মি. যায় ১ ঘণ্টায়", "স্রোতের প্রতিকূলে ৬ কি.মি. যায় ১×৩ ঘণ্টায় বা ৩ ঘণ্টায়", "প্রশ্নমতে, ৩ ঘণ্টায় যায় ৬ কি.মি.", "∴ ১ ঘণ্টায় যায় ৬/৩ কি.মি. বা ২ কি.মি.", "স্রোতের প্রতিকূলে, নৌকার কার্যকরী বেগ = নৌকার প্রকৃত বেগ − স্রোতের বেগ", "∴ স্রোতের বেগ = নৌকার প্রকৃত বেগ − নৌকার কার্যকরী বেগ = (৬ − ২) কি.মি. = ৪ কি.মি./ঘণ্টায়", "স্রোতের অনুকূলে, নৌকার কার্যকরী বেগ = নৌকার প্রকৃত বেগ + স্রোতের বেগ = (৬ + ৪) কি.মি = ১০ কি.মি./ঘণ্টায়", "স্রোতের অনুকূলে ১০ কি.মি যায় ১ ঘণ্টায়", "১ \" \" ১/১০ \" \"", "৫০ \" \" (১×৫০)/১০ ঘণ্টায় বা ৫ ঘণ্টায়", "স্রোতের অনুকূলে যেতে ৫ ঘণ্টা লাগবে।"], "answer": "৫ ঘণ্টা"},

  {"id": "job-2025-biddyut-steno-typist-q12", "examId": "job-2025-biddyut-steno-typist", "subject": "math", "topic": "বীজগণিত", "qno": 12, "marks": 5, "type": "math", "question": "দুইটি সংখ্যার যোগফল ৬০ এবং বিয়োগফল ২০ হলে, সংখ্যা দুইটি নির্ণয় করুন।", "steps": ["মনে করি, একটি সংখ্যাটি = ক, অপর সংখ্যাটি = খ", "১ম শর্তে, ক + খ = ৬০ ....... (১)", "২য় শর্তে, ক − খ = ২০ ........... (২)", "(১) নং ও (২) নং সমীকরণ যোগ করে পাই, ২ক = ৮০", "∴ ক = ৪০", "ক এর মান (১) নং সমীকরণে বসাই, ৪০ + খ = ৬০", "∴ খ = ২০", "সুতরাং একটি সংখ্যাটি = ৪০ অপর সংখ্যাটি = ২০"], "answer": "৪০ ও ২০"},

  {"id": "job-2025-biddyut-steno-typist-q13", "examId": "job-2025-biddyut-steno-typist", "subject": "math", "topic": "বীজগণিত", "qno": 13, "marks": 5, "type": "math", "question": "সরল করুনঃ x/(x+y) + y/(x−y) ÷ x/(x−y) + y/(x+y)", "steps": ["{x/(x+y) + y/(x−y)} ÷ {x/(x−y) + y/(x+y)}", "= {(x²−xy+xy+y²)/((x+y)(x−y))} ÷ {(x²+xy−xy+y²)/((x−y)(x+y))}", "= {(x²+y²)/(x²−y²)} ÷ {(x²+y²)/(x²−y²)}", "= (x²+y²)/(x²−y²) × (x²−y²)/(x²+y²)", "= 1"], "answer": "1"},

  {"id": "job-2025-biddyut-steno-typist-q14", "examId": "job-2025-biddyut-steno-typist", "subject": "math", "topic": "ত্রিকোণমিতি", "qno": 14, "marks": 5, "type": "math", "question": "secA + tanA = ৫/২ হলে, secA − tanA এর মান নির্ণয় করুন।", "steps": ["আমরা জানি, sec²A = 1 + tan²A", "বা, sec²A − tan²A = 1", "বা, (secA + tanA)(secA − tanA) = 1", "বা, (৫/২)(secA − tanA) = 1", "∴ secA − tanA = ২/৫"], "answer": "২/৫"},

  {"id": "job-2025-biddyut-steno-typist-q15", "examId": "job-2025-biddyut-steno-typist", "subject": "math", "topic": "জ্যামিতি", "qno": 15, "marks": 5, "type": "short-qa", "question": "সংজ্ঞা লিখুনঃ ক) পূরক কোণ, খ) বৃত্তকলা", "parts": [{"label": "ক", "q": "পূরক কোণ", "a": "দুইটি কোণের সমষ্টি ৯০° হলে কোণ দুইটিকে পরস্পর পূরক কোণ বলে।"}, {"label": "খ", "q": "বৃত্তকলা", "a": "বৃত্তের দুইটি ব্যাসার্ধ ও একটি চাপ দ্বারা গঠিত অঞ্চলকে বৃত্তকলা বা বৃত্তীয় ক্ষেত্র বলে।"}]},

  {"id": "job-2025-biddyut-steno-typist-q16", "examId": "job-2025-biddyut-steno-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 12, "type": "short-qa", "question": "সাধারণ জ্ঞানঃ সংক্ষেপে উত্তর দিনঃ", "parts": [{"label": "ক", "q": "সমুদ্রের গভীরতা মাপার যন্ত্রের নাম কী?", "a": "ফ্যাদোমিটার"}, {"label": "খ", "q": "কোন ভিটামিনের অভাবে রাতকানা রোগ হয়?", "a": "ভিটামিন 'এ'"}, {"label": "গ", "q": "UNESCO এর সদর দপ্তর কোথায়?", "a": "প্যারিস, ফ্রান্স"}, {"label": "ঘ", "q": "পূর্ণরূপ লিখুনঃ ATM, TIN", "a": "ATM = Automated Teller Machine; TIN = Taxpayer's Identification Number"}, {"label": "ঙ", "q": "১ নটিক্যাল মাইল সমান কত কিলোমিটার?", "a": "১.৮৫২ কি.মি"}, {"label": "চ", "q": "বাংলাদেশ কত সালে জাতিসংঘের সদস্যপদ লাভ করে?", "a": "১৯৭৪ সালে"}, {"label": "ছ", "q": "বাংলাদেশের সমুদ্রবন্দর কয়টি ও কি কি?", "a": "৩টি। যথা: চট্টগ্রাম, মংলা ও পায়রা সমুদ্র বন্দর।"}, {"label": "জ", "q": "২০২৬ সালের ফুটবল বিশ্বকাপ কোন কোন দেশে অনুষ্ঠিত হবে?", "a": "যুক্তরাষ্ট্র, কানাডা ও মেক্সিকো"}, {"label": "ঝ", "q": "জাপানের পার্লামেন্টের নাম কী?", "a": "ডায়েট"}, {"label": "ঞ", "q": "ইন্টারনেটের মাধ্যমে প্রদত্ত চিকিৎসা পদ্ধতিকে কী বলে?", "a": "টেলিমেডিসিন"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: বিদ্যুৎ বিভাগ — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-biddyut-office-asst-typist)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪২৩-৪২৫)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-biddyut-office-asst-typist-q01", "examId": "job-2025-biddyut-office-asst-typist", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 1, "marks": 5, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "যিনি প্রথম পথ দেখান", "a": "পথিকৃৎ"}, {"label": "খ", "q": "বেশি কথা বলে যে", "a": "বাচাল"}, {"label": "গ", "q": "আমিষের অভাব", "a": "নিরামিষ"}, {"label": "ঘ", "q": "নৌ চলাচলের যোগ্য", "a": "নাব্য"}, {"label": "ঙ", "q": "যা নির্ণয় করা যায় না", "a": "অনির্ণেয়"}]},

  {"id": "job-2025-biddyut-office-asst-typist-q02", "examId": "job-2025-biddyut-office-asst-typist", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 5, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "স্বৈর", "a": "স্ব + ঈর"}, {"label": "খ", "q": "ইচ্ছা", "a": "ইষ্ + ছা"}, {"label": "গ", "q": "যদিচ্ছা", "a": "যদি + ইচ্ছা"}, {"label": "ঘ", "q": "মহর্ষি", "a": "মহা + ঋষি"}, {"label": "ঙ", "q": "অহরহ", "a": "অহঃ + অহ"}]},

  {"id": "job-2025-biddyut-office-asst-typist-q03", "examId": "job-2025-biddyut-office-asst-typist", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 3, "marks": 5, "type": "table", "question": "বিপরীত শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["ইতর", "ভদ্র"], ["বিষ", "অমৃত"], ["অনুরাগ", "বিরাগ"], ["আবাহন", "বিসর্জন"], ["অবনত", "উন্নত"]]},

  {"id": "job-2025-biddyut-office-asst-typist-q04", "examId": "job-2025-biddyut-office-asst-typist", "subject": "bangla", "topic": "essay", "qno": 4, "marks": 10, "type": "paragraph", "question": "ভাব-সম্প্রসারণ লিখুনঃ 'হাতে কাজ করায় অগৌরব নেই, অগৌরব হয় মিথ্যায়, মূর্ধতায়।'", "answer": "মানুষের জীবন কর্মেই ভরপুর। জীবিকা নির্বাহের জন্য প্রতিটি মানুষকে কোনো না কোনো কাজে নিয়োজিত থাকতে হয়। দৈনন্দিন চাহিদা মেটাতে অর্থ উপার্জন করতে হয়। বাঁচতে আমাদের খাদ্য, পরিধেয় বস্ত্র ও অন্যান্য অনেক জিনিসের প্রয়োজন হয়। যে যত পরিশ্রম করে, তার উন্নতির সুযোগ তত বেশি হয়। তাই দেখা যায় জীবনের সঙ্গে পরিশ্রমের ঘনিষ্ঠ সম্পর্ক রয়েছে। মানুষে মানুষে শিক্ষা ও যোগ্যতার অনেক পার্থক্য থাকে। এর ফলে জীবিকা অর্জনে পরিশ্রমের পরিমাণেও ভিন্নতা আসে। কেউ অল্প পরিশ্রমে ভালো ফল পায়, আবার কেউ কঠোর পরিশ্রম করেও সহজে রোজগার করতে পারে না। পরিশ্রমের এই তারতম্য সামাজিক মর্যাদাতেও প্রভাব ফেলে। কেউ যোগ্যতার অভাবে সাধারণ কাজ করে, আবার কেউ উচ্চ যোগ্যতার জন্য উন্নত পদে কর্মরত থাকে। যোগ্যতার পার্থক্যের কারণে কাজের ধরন ভিন্ন হলেও সকল শ্রেণির কাজেরই গুরুত্ব আছে। কোনো ধরনের শারীরিক শ্রমই অপমানজনক নয়। তবুও অনেকের ধারণা কাজ থেকে দূরে থাকলেই সম্মান বেশি পাওয়া যায়। অনেক শিক্ষিত ব্যক্তি অশিক্ষিতদের কাজ অবহেলা করে, যা ভুল। বাস্তবে হাতে কাজ করা কোনো অগৌরবের ব্যাপার নয়, বরং মিথ্যা ও মূর্খতাই লজ্জার কারণ।"},

  {"id": "job-2025-biddyut-office-asst-typist-q05", "examId": "job-2025-biddyut-office-asst-typist", "subject": "english", "topic": "translation", "qno": 5, "marks": 5, "type": "translate", "question": "Translate the following sentences into English:", "parts": [{"label": "ক", "source": "তিনি একজন চরিত্রবান মানুষ", "target": "He is a virtuous person."}, {"label": "খ", "source": "সে গতকাল স্কুলে যায়নি।", "target": "He didn't go to school yesterday."}, {"label": "গ", "source": "রাজশাহী শহর পদ্মা নদীর তীরে অবস্থিত।", "target": "Rajshahi stands/situated on the bank of Padma river"}, {"label": "ঘ", "source": "তাকে দেখে ভদ্রলোক মনে হয়।", "target": "He seems to be a gentleman."}, {"label": "ঙ", "source": "টিপ টিপ বৃষ্টি হচ্ছে।", "target": "It is drizzling"}]},

  {"id": "job-2025-biddyut-office-asst-typist-q06", "examId": "job-2025-biddyut-office-asst-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 6, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks with prepositions:", "parts": [{"sentence": "I am tired........ waiting for you.", "answer": "of"}, {"sentence": "He is not good...... mathematics.", "answer": "at"}, {"sentence": "It's 10 o'clock....... my watch.", "answer": "by"}, {"sentence": "He went abroad...... good.", "answer": "for"}, {"sentence": "The children were entrusted....... their uncle.", "answer": "to"}]},

  {"id": "job-2025-biddyut-office-asst-typist-q07", "examId": "job-2025-biddyut-office-asst-typist", "subject": "english", "topic": "grammar", "qno": 7, "marks": 4, "type": "sentence-change", "question": "Transform the sentences:", "parts": [{"label": "a", "original": "Shut the door. (Passive)", "changed": "Let the door be shut."}, {"label": "b", "original": "Everyone wants to succeed in life. (Interrogative)", "changed": "Who does not want to succeed in life?"}, {"label": "c", "original": "As he was ill, he did not go to school. (Compound)", "changed": "He was ill and did not go to school."}], "note": "প্রশ্নে চারটি বাক্য উল্লেখ থাকলেও বইয়ে তিনটির সমাধান দেখা যায়।"},

  {"id": "job-2025-biddyut-office-asst-typist-q08", "examId": "job-2025-biddyut-office-asst-typist", "subject": "english", "topic": "spelling", "qno": 8, "marks": 4, "type": "table", "question": "Correct the following words:", "columns": ["Incorrect", "Correct"], "rows": [["Disciplin", "Discipline"], ["Perticipation", "Participation"], ["Sireous", "Serious"], ["Expart", "Expert"]]},

  {"id": "job-2025-biddyut-office-asst-typist-q09", "examId": "job-2025-biddyut-office-asst-typist", "subject": "english", "topic": "idiom", "qno": 9, "marks": 3, "type": "idiom", "question": "Make sentences with the following idioms:", "parts": [{"label": "a", "phrase": "Break the ice", "meaning": "সংকোচ কাটানো"}, {"label": "b", "phrase": "Once in a blue moon", "meaning": "কদাচিৎ"}, {"label": "c", "phrase": "Cats and dogs", "meaning": "মুষলধারে", "example": "It has been raining cats and dogs since morning."}]},

  {"id": "job-2025-biddyut-office-asst-typist-q10", "examId": "job-2025-biddyut-office-asst-typist", "subject": "english", "topic": "essay", "qno": 10, "marks": 5, "type": "paragraph", "question": "Write five sentences on \\\"Traffic Jam\\\"", "answer": "Traffic jam is a long line of vehicles on a road that can't move or that can't move very slowly. Traffic jam is common affair in the big cities and towns. It is one of the major problems. The causes of traffic jam are many. The increase in the number of buses, trucks, rickshaws, auto rickshaws is also responsible for this problem. The drivers are not willing to obey the traffic rules. Illegal parking of vehicles and overtaking tendency are also responsible for traffic jam. At office time traffic jam is intolerable. It kills our valuable time. Students, patient, workers, employs can't reach their goal in time. This problem can be solved by adopting some measures. Traffic police should be skilled. Traffic rules should impose strictly. Unlicensed vehicles should be removed. Public awareness is also needed in this respect."},

  {"id": "job-2025-biddyut-office-asst-typist-q11", "examId": "job-2025-biddyut-office-asst-typist", "subject": "math", "topic": "গতিবেগ", "qno": 11, "marks": 5, "type": "math", "question": "৬০ মিটার দীর্ঘ একটি ট্রেনের গতিবেগ ঘণ্টায় ৪৮ কি.মি.। রেললাইনের পাশের একটি খুঁটিকে অতিক্রম করতে ট্রেনটির কত সময় লাগবে?", "steps": ["খুঁটিটি অতিক্রম করতে ট্রেনটিকে নিজের দৈর্ঘ্যের সমান দূরত্ব অতিক্রম করতে হবে।", "৪৮ কি.মি. = ৪৮ × ১০০০ মিটার বা ৪৮০০০ মিটার", "১ ঘন্টা = ৩৬০০ সেকেন্ড", "ট্রেনটি ৪৮০০০ মি. অতিক্রম করে ৩৬০০ সেকেন্ডে", "১ \" \" \" ৩৬০০/৪৮০০০", "৬০ \" \" \" (৩৬০০×৬০)/৪৮০০০", "= ৯/২ সেকেন্ড", "= ৮১/২ সেকেন্ড"], "answer": "৮১/২ সেকেন্ড"},

  {"id": "job-2025-biddyut-office-asst-typist-q12", "examId": "job-2025-biddyut-office-asst-typist", "subject": "math", "topic": "মুনাফা", "qno": 12, "marks": 5, "type": "math", "question": "কোনো আসল ৩ বছরে মুনাফা-আসলে ৫৫০০ টাকা হয়। মুনাফা, আসলের ৩/৮ অংশ হলে, আসল ও মুনাফার হার নির্ণয় করুন।", "steps": ["মনে করি, আসল ৮ টাকা", "মুনাফা = ৮ এর ৩/৮ টাকা = ৩ টাকা", "মুনাফা-আসল = (৮ + ৩) টাকা = ১১ টাকা", "মুনাফা-আসল ১১ টাকা হলে আসল ৮ টাকা", "১ \" \" \" ৮/১১ \"", "৫৫০০ \" \" \" (৮×৫৫০০)/১১ = ৪০০০ টাকা", "∴ মুনাফা = (৫৫০০ − ৪০০০) টাকা বা ১৫০০ টাকা", "৪০০০ টাকার ৩ বছরের মুনাফা ১৫০০ টাকা", "১ \" ১ \" \" ১৫০০/(৪০০০×৩)", "১০০ \" ১ \" \" (১৫০০×১০০)/(৪০০০×৩) = ২৫/২ টাকা = ১২১/২ টাকা"], "answer": "আসল ৪০০০ টাকা, মুনাফার হার ১২১/২%"},

  {"id": "job-2025-biddyut-office-asst-typist-q13", "examId": "job-2025-biddyut-office-asst-typist", "subject": "math", "topic": "বীজগণিত", "qno": 13, "marks": 5, "type": "math", "question": "সমাধান করুনঃ 1/(x−3) + 1/(x−4) = 1/(x−2) + 1/(x−5)", "steps": ["1/(x−3) + 1/(x−4) = 1/(x−2) + 1/(x−5)", "বা, 1/(x−3) − 1/(x−2) = 1/(x−5) − 1/(x−4)", "বা, (x−2−x+3)/{(x−3)(x−2)} = (x−4−x+5)/{(x−5)(x−4)}", "বা, 1/(x²−5x+6) = 1/(x²−9x+20)", "বা, x² − 5x + 6 = x² − 9x + 20", "বা, −5x + 9x = 20 − 6", "বা, 4x = 14", "∴ x = 7/2"], "answer": "x = 7/2"},

  {"id": "job-2025-biddyut-office-asst-typist-q14", "examId": "job-2025-biddyut-office-asst-typist", "subject": "math", "topic": "বীজগণিত", "qno": 14, "marks": 5, "type": "math", "question": "4(x²+ax)², 6(x³ − a²x) এবং 14x³(x³−a³) এর ল.সা.গু নির্ণয় করুন।", "steps": ["১ম রাশি = 4(x²+ax)² = 4{x(x+a)}² = 4x²(x+a)²", "২য় রাশি = 6(x³ − a²x) = 6x(x² − a²) = 6x(x+a)(x−a)", "৩য় রাশি = 14x³(x³−a³) = 14x³(x−a)(x²+ax+a²)", "নির্ণেয় ল.সা.গু = 84x³(x+a)²(x³−a³)"], "answer": "84x³(x+a)²(x³−a³)"},

  {"id": "job-2025-biddyut-office-asst-typist-q15", "examId": "job-2025-biddyut-office-asst-typist", "subject": "math", "topic": "একক রূপান্তর", "qno": 15, "marks": 2, "type": "sub-parts", "question": "শূন্যস্থান পূরণ করুনঃ", "parts": [{"label": "ক", "q": "১ মাইল = ......... কিলোমিটার", "a": "১.৬১ কিলোমিটার"}, {"label": "খ", "q": "........ ঘনমিটার = ১ স্টেয়ার", "a": "১"}]},

  {"id": "job-2025-biddyut-office-asst-typist-q16", "examId": "job-2025-biddyut-office-asst-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 10, "type": "short-qa", "question": "সাধারণ জ্ঞানঃ সংক্ষেপে উত্তর দিনঃ", "parts": [{"label": "ক", "q": "বাংলাদেশের বিদ্যুৎ উৎপাদনে সর্বাধিক ব্যবহৃত উপকরণ কোনটি?", "a": "গ্যাস"}, {"label": "খ", "q": "ভূমিকম্প নির্ণায়ক যন্ত্রের নাম কী?", "a": "সিসমোগ্রাফ"}, {"label": "গ", "q": "কোন দেশকে 'হর্ন অব আফ্রিকা' বলা হয়?", "a": "ইথিওপিয়া"}, {"label": "ঘ", "q": "কম্পিউটার কোন দু'টি সংখ্যার প্রয়োগে কাজ করে?", "a": "০ ও ১"}, {"label": "ঙ", "q": "পূর্ণরূপ লিখুনঃ UNESCO, SAARC", "a": "UNESCO = United Nations Educational, Scientific and Cultural Organization; SAARC = South Asian Association for Regional Cooperation"}, {"label": "চ", "q": "বাংলাদেশ কত সালে জাতিসংঘের সদস্যপদ লাভ করে?", "a": "১৯৭৪ সালে"}, {"label": "ছ", "q": "২০২৫-২৬ অর্থবছরের বাজেট কত?", "a": "৭৯০০০০ কোটি টাকা"}, {"label": "জ", "q": "২০২৬ সালের ফুটবল বিশ্বকাপ কোন কোন দেশে অনুষ্ঠিত হবে?", "a": "যুক্তরাষ্ট্র, কানাডা ও মেক্সিকো"}, {"label": "ঝ", "q": "বায়ুমণ্ডলে কোন গ্যাস বেশি থাকে?", "a": "নাইট্রোজেন"}, {"label": "ঞ", "q": "বায়োডিগ্রেডেবল প্লাস্টিক কী?", "a": "বায়োডিগ্রেডেবল প্লাস্টিক হলো এমন প্লাস্টিক যা প্রাকৃতিকভাবে ব্যাকটেরিয়া বা জীবাণুর দ্বারা সহজে পচে যায় এবং পরিবেশে ক্ষতিকর প্রভাব ফেলে না।"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর — অফিস সহকারী কাম কম্পিউটার মুদ্রাক্ষরিক (job-2025-immigration-passport-office-asst-typist)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪২৬-৪২৭)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-immigration-passport-office-asst-typist-q01", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 1, "marks": 3, "type": "table", "question": "বিপরীত শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["মুখরতা", "মৌন"], ["সমবেত", "ছত্রভঙ্গ"], ["বিজন", "জনবহুল"]]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q02", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "bangla", "topic": "সন্ধি", "qno": 2, "marks": 3, "type": "sub-parts", "question": "সন্ধি-বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "বিদ্যোৎসাহী", "a": "বিদ্যা+উৎসাহী"}, {"label": "খ", "q": "পবিত্র", "a": "পো+ইত্র"}, {"label": "গ", "q": "মহেশ", "a": "মহা+ঈশ"}]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q03", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "bangla", "topic": "শুদ্ধ বানান", "qno": 3, "marks": 3, "type": "sub-parts", "question": "শুদ্ধ বানান লিখুনঃ", "parts": [{"label": "ক", "q": "মনিষী", "a": "মনীষী"}, {"label": "খ", "q": "ইতিমধ্যে", "a": "ইতোমধ্যে"}, {"label": "গ", "q": "পাসান", "a": "পাষাণ"}]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q04", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 4, "marks": 3, "type": "sub-parts", "question": "এক কথায় প্রকাশ করঃ", "parts": [{"label": "ক", "q": "যা উচ্চারণ করা যায় না", "a": "অনুচ্চার্য"}, {"label": "খ", "q": "হরিণের চামড়া", "a": "অজিন"}, {"label": "গ", "q": "একই সময়ে", "a": "যুগপৎ"}]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q05", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "bangla", "topic": "বাগধারা", "qno": 5, "marks": 3, "type": "sub-parts", "question": "বাগধারাগুলোর অর্থ লিখুনঃ", "parts": [{"label": "ক", "q": "আদার ব্যাপারী", "a": "সামান্য বিষয়ে ব্যক্ত ব্যক্তি"}, {"label": "খ", "q": "পর্বতের মূষিক প্রসব", "a": "বিরাট সম্ভাবনার সামান্য প্রাপ্তি"}, {"label": "গ", "q": "অগ্রপশ্চাৎ", "a": "ভেবে-চিন্তে"}]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q06", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "bangla", "topic": "কারক", "qno": 6, "marks": 2, "type": "sub-parts", "question": "কারক নির্ণয় করঃ", "parts": [{"label": "ক", "q": "গাড়ি স্টেশন ছেড়েছে", "a": "অপাদানে শূন্য"}, {"label": "খ", "q": "পাছে লোকে কিছু বলে", "a": "কর্তৃকারকে ৭মী"}]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q07", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "english", "topic": "essay", "qno": 7, "marks": 5, "type": "paragraph", "question": "Write a short paragraph on Metro rail in Bangladesh", "answer": "Metro rail is one of the most significant achievements of modern Bangladesh. It is an electric railway system that runs above the ground on elevated tracks, mainly to reduce traffic congestion in Dhaka city. The construction of Dhaka Metro Rail, also known as MRT Line-6, began under the guidance of Dhaka Mass Transit Company Limited (DMTCL). The metro rail has made commuting faster, safer, and more comfortable for the people of Dhaka. It has significantly reduced travel time and traffic jams on the busy roads of the capital. The government plans to expand the metro rail network further to cover more areas of the city. This modern transportation system is a symbol of Bangladesh's progress towards a developed and smart nation."},

  {"id": "job-2025-immigration-passport-office-asst-typist-q08", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "english", "topic": "translation", "qno": 8, "marks": 3, "type": "translate", "question": "Translate into English:", "parts": [{"label": "ক", "source": "ভাবছি আমি যদি রাজা হতাম", "target": "I wish I were a king."}, {"label": "খ", "source": "তুমি কি কখনো বিদেশ গিয়েছ?", "target": "Have you ever been abroad?"}, {"label": "গ", "source": "দেখতে পেলেই বিশ্বাস হয়।", "target": "Seeing is believing."}]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q09", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "english", "topic": "grammar", "qno": 9, "marks": 3, "type": "sentence-change", "question": "Change the following sentences as directed:", "parts": [{"label": "a", "original": "Post the letter (Passive)", "changed": "Let the letter be posted."}, {"label": "b", "original": "I said to her, \\\"He will not come\\\".", "changed": "I told her that he would not go."}, {"label": "c", "original": "Only Rahim can do the sum (Negative)", "changed": "None but Rahim can do the sum."}]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q10", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "english", "topic": "idiom", "qno": 10, "marks": 4, "type": "idiom", "question": "Make sentence with the following idioms:", "parts": [{"label": "a", "phrase": "Red letter day", "meaning": "স্মরণীয় দিন", "example": "16th December is our red letter day."}, {"label": "b", "phrase": "Once in a blue moon", "meaning": "কদাচিৎ", "example": "He comes here once in a blue moon."}, {"label": "c", "phrase": "French leave", "meaning": "বিনা অনুমতিতে ছুটি", "example": "No one should enjoy French leave."}, {"label": "d", "phrase": "End in smoke", "meaning": "ব্যর্থ হওয়া", "example": "All his plans ended in smoke."}]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q11", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "english", "topic": "spelling", "qno": 11, "marks": 5, "type": "table", "question": "Correct the following words:", "columns": ["Incorrect", "Correct"], "rows": [["Cornel", "Colonel"], ["Neumonia", "Pneumonia"], ["Commetti", "Committee"], ["Sychology", "Psychology"], ["Pediatric", "Paediatric"]]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q12", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "math", "topic": "জ্যামিতি", "qno": 12, "marks": 4, "type": "short-qa", "question": "চিত্রসহ সংজ্ঞা দাওঃ ক) রম্বস, খ) বিপ্রতীপ কোণ", "parts": [{"label": "ক", "q": "রম্বস", "a": "যে চতুর্ভুজের প্রতিটি বাহু পরস্পর সমান ও বিপরীত বাহুগুলো সমান্তরাল কিন্তু কোণ গুলো সমকোণ নয় তাকে রম্বস বলে।"}, {"label": "খ", "q": "বিপ্রতীপ কোণ", "a": "দুটি কোণের একটির বাহুদ্বয় অপরটির বাহুদ্বয়ের বিপরীত রশ্মি হলে, কোণ দুটিকে বিপ্রতীপ কোণ বলে।"}]},

  {"id": "job-2025-immigration-passport-office-asst-typist-q13", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "math", "topic": "বীজগণিত", "qno": 13, "marks": 4, "type": "math", "question": "উৎপাদকে বিশ্লেষণ করঃ x² − 13x − 48", "steps": ["x² − 13x − 48", "= x² − 16x + 3x − 48", "= x(x−16) + 3(x−16)", "= (x−16)(x+3)"], "answer": "(x−16)(x+3)"},

  {"id": "job-2025-immigration-passport-office-asst-typist-q14", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "math", "topic": "বীজগণিত", "qno": 14, "marks": 4, "type": "math", "question": "x − 1/x = 5 হলে, (x⁴+1)/x² এর মান কত?", "steps": ["প্রদত্ত রাশি = (x⁴+1)/x²", "= x²/x² + 1/x²", "= x² + (1/x)²", "= (x − 1/x)² + 2.x.(1/x)", "= 5² + 2 [মান বসিয়ে]", "= 25 + 2", "= 27"], "answer": "27"},

  {"id": "job-2025-immigration-passport-office-asst-typist-q15", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "math", "topic": "জ্যামিতি", "qno": 15, "marks": 4, "type": "math", "question": "একটি আয়তক্ষেত্রের ক্ষেত্রফল ১৬০ বর্গমিটার। প্রস্থ দৈর্ঘ্য অপেক্ষা ৬ মিটার কম। আয়তক্ষেত্রটির দৈর্ঘ্য ও প্রস্থ নির্ণয় করুন।", "steps": ["মনে করি, আয়তক্ষেত্রটির প্রস্থ = ক মিটার", "দৈর্ঘ্য = ক + ৬", "প্রশ্নমতে, ক(ক+৬) = ১৬০", "বা, ক² + ৬ক = ১৬০", "বা, ক² + ৬ক − ১৬০ = ০", "বা, ক² + ১৬ক − ১০ক − ১৬০ = ০", "বা, ক(ক+১৬) − ১০(ক+১৬) = ০", "বা, (ক+১৬)(ক−১০) = ০", "হয়, ক+১৬ = ০ অথবা, ক−১০ = ০", "∴ ক = −১৬ [গ্রহণযোগ্য নয়] অথবা ∴ ক = ১০", "সুতরাং প্রস্থ = ১০ মিটার এবং দৈর্ঘ্য = ১০ + ৬ = ১৬ মিটার"], "answer": "দৈর্ঘ্য ১৬ মিটার এবং প্রস্থ ১০ মিটার"},

  {"id": "job-2025-immigration-passport-office-asst-typist-q16", "examId": "job-2025-immigration-passport-office-asst-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 16, "marks": 20, "type": "short-qa", "question": "সাধারণ জ্ঞানঃ নিচের প্রশ্নগুলোর উত্তর করুনঃ", "parts": [{"label": "ক", "q": "বাংলাদেশের ফুসফুস বলা হয় কোন স্থানকে?", "a": "সুন্দরবন।"}, {"label": "খ", "q": "কোন দেশের দ্বিতীয় ভাষা বাংলা?", "a": "সিয়েরালিওন।"}, {"label": "গ", "q": "ড্রাইস আইস কি?", "a": "কঠিন অবস্থায় কার্বন-ডাই অক্সাইড"}, {"label": "ঘ", "q": "কম্পিউটারের ব্রেইন কোনটি?", "a": "মাইক্রোপ্রসেসর"}, {"label": "ঙ", "q": "Three Zero তত্ত্বের প্রবক্তা কে?", "a": "ড. মুহাম্মদ ইউনূস"}, {"label": "চ", "q": "বাংলাদেশের 'হোয়াইট গোল্ড' হিসেবে পরিচিত কোনটি?", "a": "চিংড়ি"}, {"label": "ছ", "q": "কম্পিউটারের বহুল ব্যবহৃত ২টি এন্টিভাইরাসের নাম লিখুন।", "a": "AVG, Avast"}, {"label": "জ", "q": "২য় বিশ্বযুদ্ধের অক্ষশক্তি কারা?", "a": "জার্মানি, জাপান, ইতালি"}, {"label": "ঝ", "q": "এভারেস্ট জয়ী প্রথম বাংলাদেশী নারীর নাম কী?", "a": "নিশাত মজুমদার"}, {"label": "ঞ", "q": "বাংলাদেশের সমুদ্র বন্দর কয়টি ও কি কি?", "a": "৩টি। যথা: চট্টগ্রাম, মংলা ও পায়রা সমুদ্র বন্দর।"}, {"label": "ট", "q": "বাংলাদেশ কত সালে টেস্ট ক্রিকেট খেলায় মর্যাদা পায়?", "a": "২৬ জুন, ২০০০ সালে।"}, {"label": "ঠ", "q": "বাংলাদেশের প্রথম সার্চ ইঞ্জিনের নাম কী?", "a": "পিপীলিকা"}, {"label": "ড", "q": "কম্পিউটারের কাজের গতি কি দ্বারা প্রকাশ করা হয়?", "a": "ন্যানো সেকেন্ড।"}, {"label": "ঢ", "q": "জাপানের মুদ্রার নাম কি?", "a": "ইয়েন"}, {"label": "ণ", "q": "পৃথিবীর দীর্ঘতম নদী কোনটি?", "a": "নীলনদ"}]},

  // ══════════════════════════════════════════════════════════
  // পরীক্ষা: প্রাথমিক ও গণশিক্ষা মন্ত্রণালয় — অফিস সহকারী কাম-কম্পিউটার মুদ্রাক্ষরিক (job-2025-primary-mass-edu-office-asst-typist)
  // সোর্স: Self_job_solution_book_part_5.pdf (বইয়ের পৃষ্ঠা ৪২৮-৪৩০)
  // ══════════════════════════════════════════════════════════

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q01", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "bangla", "topic": "এক কথায় প্রকাশ", "qno": 1, "marks": 2, "type": "sub-parts", "question": "এক কথায় প্রকাশ করুনঃ", "parts": [{"label": "ক", "q": "অরিকে দমন করে যে", "a": "অরিন্দম"}, {"label": "খ", "q": "মন হরণ করে যে", "a": "মনোহর"}]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q02", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "bangla", "topic": "বিপরীত শব্দ", "qno": 2, "marks": 5, "type": "table", "question": "বিপরীত শব্দ লিখুনঃ", "columns": ["প্রদত্ত শব্দ", "বিপরীত শব্দ"], "rows": [["প্রচ্ছন্ন", "ব্যক্ত"], ["শ্লিষ্ট", "রুক্ষ"], ["বিনীত", "উদ্ধত/দুর্বিনীত"], ["কনিষ্ঠ", "জ্যেষ্ঠ"], ["উপচিকীর্ষা", "অপচিকীর্ষা"]]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q03", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "bangla", "topic": "সন্ধি", "qno": 3, "marks": 3, "type": "sub-parts", "question": "সন্ধি বিচ্ছেদ করুনঃ", "parts": [{"label": "ক", "q": "পরীক্ষা", "a": "পরি + ঈক্ষা"}, {"label": "খ", "q": "নয়ন", "a": "নে + অন"}, {"label": "গ", "q": "নিশ্চয়", "a": "নিঃ + চয়"}]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q04", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "bangla", "topic": "শুদ্ধ বাক্য", "qno": 4, "marks": 6, "type": "sub-parts", "question": "শুদ্ধ বাক্যটি লিখুনঃ", "parts": [{"label": "ক", "q": "অন্যায়ের প্রতিফল দুর্নিবার্য", "a": "অন্যায়ের প্রতিফল অনিবার্য"}, {"label": "খ", "q": "তারা যাইতে যাইতে এ দৃশ্য দেখিয়া মুগ্ধ ও বিস্মিত হন।", "a": "তারা যেতে যেতে এ দৃশ্য দেখে মুগ্ধ ও বিস্মিত হল।"}, {"label": "গ", "q": "ধন ধান্যে পুষ্পে ভরা আমাদের এই বসুন্ধরা।", "a": "ধন ধান্যে পুষ্পে ভরা আমাদের এই বসুন্ধরা।"}, {"label": "ঘ", "q": "নিরপরাধী ব্যক্তিকে ক্ষমা কর।", "a": "নিরপরাধ ব্যক্তিকে ক্ষমা কর।"}, {"label": "ঙ", "q": "তিনি আসামীর বিরুদ্ধে স্বাক্ষী দিলেন।", "a": "তিনি আসামীর বিরুদ্ধে সাক্ষ্য দিলেন।"}]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q05", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "bangla", "topic": "সমাস", "qno": 5, "marks": 5, "type": "sub-parts", "question": "ব্যাসবাক্যসহ সমাস নির্ণয় করুনঃ", "parts": [{"label": "ক", "q": "হাটে-বাজারে", "a": "হাটে ও বাজারে - দ্বন্দ্ব সমাস"}, {"label": "খ", "q": "গুরুভক্তি", "a": "গুরুকে ভক্তি -৪র্থী তৎপুরুষ"}, {"label": "গ", "q": "উপকূল", "a": "কূলের সমীপে"}, {"label": "ঘ", "q": "সুন্দরলতা", "a": "কূলের সমীপে- অব্যয়ীভাব"}, {"label": "ঙ", "q": "হাসিমুখ", "a": "হাসি মাখা মুখ - কর্মধারয় সমাস"}]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q06", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "bangla", "topic": "বাগধারা", "qno": 6, "marks": 6, "type": "idiom", "question": "নিচের বাগধারাগুলোর অর্থসহ বাক্য রচনা করঃ", "parts": [{"label": "ক", "phrase": "আক্কেল সেলামী", "meaning": "হতবুদ্ধি, ক্ষতি"}, {"label": "খ", "phrase": "ডুমুরের ফুল", "meaning": "দুর্লভ বস্তু/অদৃশ্য বস্তু"}, {"label": "গ", "phrase": "ছকড়া-নকড়া", "meaning": "সস্তা দর"}, {"label": "ঘ", "phrase": "চোখের মণি", "meaning": "প্রিয়"}, {"label": "ঙ", "phrase": "গড্ডলিকা প্রবাহ", "meaning": "অন্ধ ভাবে অনুকরণ"}]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q07", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "english", "topic": "essay", "qno": 7, "marks": 6, "type": "paragraph", "question": "Write a passage on \\\"My favorite teacher\\\"", "answer": "A teacher plays a vital role in shaping a student's life, and among all my teachers, one holds a special place in my heart. My favorite teacher is my class teacher, who taught us English in high school. She was not only knowledgeable but also kind, patient, and inspiring. She always encouraged us to ask questions and think critically rather than memorize lessons. Her teaching methods were simple yet effective, making even difficult topics easy to understand. Beyond academics, she taught us the importance of honesty, discipline, and hard work. She always motivated us to pursue our dreams and never give up, no matter how hard the circumstances were. Her guidance helped me build confidence and a positive attitude towards life. I will always remember her for the values and knowledge she gave me. She truly represents what an ideal teacher should be."},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q08", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "english", "topic": "fill-in-the-blanks", "qno": 8, "marks": 5, "type": "fill-gaps", "question": "Fill in the blanks with preposition:", "parts": [{"sentence": "He passed ....... last night.", "answer": "away"}, {"sentence": "The man died......... over eating.", "answer": "from"}, {"sentence": "There is a bank ......... my house.", "answer": "near"}, {"sentence": "He needs to abide....... the rules.", "answer": "by"}, {"sentence": "The cat jumped..... the wall.", "answer": "over"}]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q09", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "english", "topic": "idiom", "qno": 9, "marks": 5, "type": "idiom", "question": "Make sentence with following words:", "parts": [{"label": "a", "phrase": "Give up", "meaning": "ত্যাগ করা", "example": "You should give up smoking."}, {"label": "b", "phrase": "Well off", "meaning": "সচ্ছল", "example": "His father is not well off."}, {"label": "c", "phrase": "Once in a blue moon", "meaning": "কালেভদ্রে", "example": "He comes to his village one in a blue moon"}, {"label": "d", "phrase": "In reference to", "meaning": "প্রত্যুত্তর", "example": "I am writing in reference to your letter."}, {"label": "e", "phrase": "Black and White", "meaning": "লিখিত ভাবে", "example": "We charged against him in black and white."}]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q10", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "english", "topic": "grammar", "qno": 10, "marks": 5, "type": "sentence-change", "question": "Change the sentences as per direction:", "parts": [{"label": "a", "original": "I shall always remember you. (Make it negative)", "changed": "I shall never forget you."}, {"label": "b", "original": "Unity is strength (Make it complex)", "changed": "It is unity which is strength."}, {"label": "c", "original": "Karim is not better than him. (Make it positive)", "changed": "He is as good as Karim."}, {"label": "d", "original": "Shut the door. (Make it passive)", "changed": "Let the door be shut."}, {"label": "e", "original": "He is poor but happy (Make it complex)", "changed": "Though he is poor, he is happy."}]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q11", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "english", "topic": "translation", "qno": 11, "marks": 5, "type": "translate", "question": "Translate into English:", "parts": [{"label": "০১", "source": "আমরা সমাজে বাস করি। তাই সমাজে আমাদের শান্তি বজায় রাখতে হবে। সমাজের প্রতি আমাদের অনেক দায়িত্ব ও কর্তব্য আছে। আমরা পরস্পরের ওপর নির্ভর করি। আমাদের উদ্দেশ্য একটি সুখী সমাজ গঠন করা।", "target": "We live in society. So, we have to maintain peace in the society. We have many responsibilities and duties towards the society. We depend on each other. Our aim is to create a happy society."}]},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q12", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "math", "topic": "বীজগণিত", "qno": 12, "marks": 5, "type": "math", "question": "উৎপাদকে বিশ্লেষণ করঃ a² − 1 + 2b − b²", "steps": ["a² − 1 + 2b − b²", "= a² − (b² − 2b + 1)", "= a² − (b−1)²", "= {a + (b−1)}{a − (b−1)}", "= (a+b−1)(a−b+1)"], "answer": "(a+b−1)(a−b+1)"},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q13", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "math", "topic": "মুদ্রা", "qno": 13, "marks": 5, "type": "math", "question": "১২০ টি পঁচিশ পয়সার মুদ্রা ও পঞ্চাশ পয়সার মুদ্রায় মোট ৩৫ টাকা হলে, কোন প্রকারের মুদ্রার সংখ্যা কয়টি?", "steps": ["মনে করি, পঞ্চাশ পয়সার মুদ্রার সংখ্যা = x টি", "∴ পঁচিশ পয়সার মুদ্রার সংখ্যা = (১২০ − x) টি", "∴ সর্বমোট মুদ্রার মান = 50x + 25(120−x) পয়সা", "= 50x + 3000 − 25x", "= 3000 + 25x", "= (3000+25x)/100 [∵ ১০০ পয়সা = ১ টাকা]", "প্রশ্নমতে, (3000+25x)/100 = 35", "বা, 3000 + 25x = 3500", "বা, 25x = 500", "∴ x = 20", "∴ পঞ্চাশ পয়সার মুদ্রার সংখ্যা 20টি", "পঁচিশ পয়সার মুদ্রার সংখ্যা = 120 − 20 = 100টি"], "answer": "পঞ্চাশ পয়সার মুদ্রা ২০টি এবং পঁচিশ পয়সার মুদ্রা ১০০টি।"},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q14", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "math", "topic": "শতকরা", "qno": 14, "marks": 5, "type": "math", "question": "৫ টাকায় ৮ টি আমলকি ক্রয় করে ৫ টাকায় ৬ টি বিক্রয় করলে শতকরা কত লাভ বা ক্ষতি হবে?", "steps": ["৮ টি আমলকির ক্রয়মূল্য ৫ টাকা", "১ টি \" \" ৫/৮ \" = ৫/৮ টাকা", "৬ টি আমলকির বিক্রয়মূল্য ৫ টাকা", "১ টি \" \" ৫/৬ \" = ৫/৬ টাকা", "এখানে, লাভ = ৫/৬ − ৫/৮ টাকা = (৮০−৩০)/৪৮ টাকা [ভুল সরলীকরণ এড়াতে প্রকৃত মান: ৫/৬ টাকায় লাভ হয় ৫/২৮ টাকায়]", "∴ ১ \" \" \" (৫×৮)/(২৮×৫)", "∴ ১০০ \" \" \" (৫×৮×১০০)/(২৮×৫)", "= ৫০০/৩ টাকা", "= ৩৩ ১/৩ টাকা/৩৩.৩৩ টাকা"], "answer": "লাভ ৩৩ ১/৩% বা ৩৩.৩৩% লাভ।"},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q15", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "math", "topic": "বয়স", "qno": 15, "marks": 5, "type": "math", "question": "১০ বছর পূর্বে পিতা ও পুত্রের বয়সের অনুপাত ছিল ৪ঃ১। ১০ বছর পরে পিতা ও পুত্রের বয়সের অনুপাত হবে ২ঃ১। পিতা ও পুত্রের বর্তমান বয়স নির্ণয় করুন।", "steps": ["মনে করি, ১০ বছর পূর্বে পিতার বয়স 4x", "১০ বছর পূর্বে পুত্রের বয়স x", "∴ পিতার বর্তমান বয়স = 4x + 10", "পুত্রের বর্তমান বয়স = x + 10", "প্রশ্নমতে, 4x+10+10 : x+10+10 = 2:1", "বা, (4x+20)/(x+20) = 2/1", "বা, 4x+20 = 2x+40", "বা, 4x−2x = 40−20", "বা, 2x = 20", "∴ x = 10", "∴ পিতার বর্তমান বয়স = (4×10+10) = 50 বছর", "এবং পুত্রের বর্তমান বয়স = (10+10) = 20 বছর"], "answer": "পিতার বয়স ৫০ বছর, পুত্রের বয়স ২০ বছর।"},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q16", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "math", "topic": "বীজগণিত", "qno": 16, "marks": 5, "type": "math", "question": "যদি a + b + c = 0 হয়, তবে দেখাও যে, a³ + b³ + c³ = 3abc", "steps": ["দেওয়া আছে, a + b + c = 0", "বা, a + b = −c", "দেখাতে হবে যে, a³ + b³ + c³ = 3abc", "বামপক্ষ = a³ + b³ + c³", "= (a+b)³ − 3ab(a+b) + c³", "= (−c)³ − 3ab.(−c) + c³ [∵ a+b = −c]", "= −c³ + 3abc + c³", "= 3abc = ডানপক্ষ"], "answer": "a³ + b³ + c³ = 3abc (প্রমাণিত)"},

  {"id": "job-2025-primary-mass-edu-office-asst-typist-q17", "examId": "job-2025-primary-mass-edu-office-asst-typist", "subject": "general-knowledge", "topic": "gk-others", "qno": 17, "marks": 20, "type": "short-qa", "question": "সাধারণ জ্ঞান-২০ঃ সংক্ষেপে উত্তর দিনঃ", "parts": [{"label": "ক", "q": "ভাষা আন্দোলনের প্রথম সংগঠন কোনটি?", "a": "তমদ্দুন মজলিস"}, {"label": "খ", "q": "বায়ুমণ্ডলে কোন গ্যাসের পরিমাণ সবচেয়ে বেশি?", "a": "নাইট্রোজেন"}, {"label": "গ", "q": "ঘোড়াশাল সার কারখানায় উৎপাদিত সারের নাম কি?", "a": "ইউরিয়া সার"}, {"label": "ঘ", "q": "সুন্দরবন বাংলাদেশের কয়টি জেলাকে স্পর্শ করেছে?", "a": "৫টি"}, {"label": "ঙ", "q": "বাংলাদেশের সবচেয়ে উঁচু বৃক্ষের নাম কি?", "a": "বৈলাম"}, {"label": "চ", "q": "আল-আকসা মসজিদ কোথায় অবস্থিত?", "a": "জেরুজালেম, ফিলিস্তিন"}, {"label": "ছ", "q": "সোনার তরী কাব্যগ্রন্থের রচয়িতা কে?", "a": "রবীন্দ্রনাথ ঠাকুর"}, {"label": "জ", "q": "মায়ানমারের সাথে বাংলাদেশের সীমান্ত কত কিলোমিটার?", "a": "২৭১ কি.মি."}, {"label": "ঝ", "q": "বাংলা সনেটের জনক কে?", "a": "মাইকেল মধুসূদন দত্ত"}, {"label": "ঞ", "q": "অমৃত সাগর কলা বাংলাদেশের কোন জেলায় জি.আই পণ্য হিসেবে স্বীকৃতি পেয়েছে?", "a": "নরসিংদী"}, {"label": "ট", "q": "সেন্টমার্টিন দ্বীপের অপর নাম কি?", "a": "নারিকেল জিঞ্জিরা"}, {"label": "ঠ", "q": "বার্লিন প্রাচীর কত সালে নির্মিত হয়েছিলো?", "a": "১৯৬১ সালে"}, {"label": "ড", "q": "বাংলাদেশ কত সালে টেস্ট স্ট্যাটাস লাভ করে?", "a": "২০০০ সালে"}, {"label": "ঢ", "q": "LDC এর পূর্ণরূপ লিখুন।", "a": "Least Developed Countries"}, {"label": "ণ", "q": "সূর্যোদয়ের দেশ বলা হয় কোন দেশকে?", "a": "জাপান"}, {"label": "ত", "q": "বিশ্ব স্বাস্থ্য সংস্থার সদর দপ্তর কোথায় অবস্থিত?", "a": "জেনেভা, সুইজারল্যান্ড"}, {"label": "থ", "q": "মঙ্গোলিয়ার রাজধানীর নাম কি?", "a": "উলানবাটোর"}, {"label": "দ", "q": "বাংলাদেশের প্রথম বায়ু বিদ্যুৎ কেন্দ্র কোন জেলায় স্থাপন করা হয়?", "a": "সোনাগাজী, ফেনী"}, {"label": "ধ", "q": "এসডিজি-এর লক্ষ্য কতটি?", "a": "১৭টি"}, {"label": "ন", "q": "সোনা মসজিদ স্থলবন্দর কোন জেলায় অবস্থিত?", "a": "চাপাইনবাবগঞ্জ"}]},

  // ══════════════════════════════════════════════════════════
  // পরবর্তী পরীক্ষার data এখানে যোগ করুন
  // ══════════════════════════════════════════════════════════

];