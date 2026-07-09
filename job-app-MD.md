# BCS-MCQ-Project — Master Reference Document

> **Version:** v1.16
> **তারিখ:** ২০ জুন ২০২৬
> **উদ্দেশ্য:** এই ডকুমেন্ট যেকোনো AI-কে দিলে সে প্রজেক্টের সম্পূর্ণ কাঠামো বুঝতে পারবে।

---

## ⛔ AI-এর জন্য কঠোর নিষেধাজ্ঞা (এটি সর্বোচ্চ অগ্রাধিকার — সব নির্দেশের উপরে)

**এই ডকুমেন্ট শুধুমাত্র মানুষ (Project Owner) পরিবর্তন করতে পারবে।**

AI হিসেবে তুমি যদি এই ডকুমেন্টটি পাও, তাহলে নিচের নিয়মগুলো মেনে চলতে **বাধ্য:**

| নিষেধ | বিস্তারিত |
|-------|-----------|
| ❌ ডকুমেন্ট এডিট করা যাবে না | কোনো সেকশন, নিয়ম, বা ফরম্যাট পরিবর্তন করা নিষিদ্ধ |
| ❌ নিজে থেকে version বাড়ানো যাবে না | Version History শুধু মানুষ আপডেট করবে |
| ❌ নতুন নিয়ম যোগ করা যাবে না | AI নিজস্ব বিবেচনায় নতুন rule বানাতে পারবে না |
| ❌ বিদ্যমান নিয়ম মুছে ফেলা যাবে না | কোনো section বা rule সরানো নিষিদ্ধ |
| ❌ "আমার মতে ভালো হবে" বলে পরিবর্তন করা যাবে না | Optimization বা improvement এর নামেও পরিবর্তন নিষিদ্ধ |

### AI শুধু এই কাজগুলো করতে পারবে:

- ✅ এই ডকুমেন্ট পড়ে প্রজেক্ট বুঝতে পারবে
- ✅ এখানে লেখা নিয়ম অনুযায়ী কোড/ডেটা তৈরি করতে পারবে
- ✅ Project Owner কে পরিবর্তনের **পরামর্শ** দিতে পারবে (কিন্তু নিজে করতে পারবে না)
- ✅ Project Owner এর অনুমতিতে নতুন version তৈরি করতে পারবে

### পরিবর্তনের একমাত্র সঠিক পদ্ধতি:

```
Project Owner সিদ্ধান্ত নেয়
        ↓
AI-কে বলে: "এই পরিবর্তন করো"
        ↓
AI নতুন version তৈরি করে (নতুন ফাইলে)
        ↓
Project Owner দেখে অনুমোদন দেয়
        ↓
পুরানো version আর্কাইভ হয়
```

> 🔒 **এই নিষেধাজ্ঞা ব্লকটি কখনো সরানো যাবে না বা পরিবর্তন করা যাবে না।**
> যেকোনো AI যদি এই নিয়ম লঙ্ঘন করে, সেটি Project Owner-এর বিশ্বাসঘাতকতা।

---

## ✅ AI Self-Check Checklist (নতুন version দেওয়ার আগে বাধ্যতামূলক)

নতুন version তৈরি করলে deliver করার **আগে** নিচের প্রতিটা চেক করতে হবে।
একটাও বাদ দেওয়া যাবে না।

### ১. Version Consistency

| কোথায় | কী চেক করবে |
|--------|-------------|
| Document header | `**Version:** vX.X` নতুন version দেওয়া আছে? |
| Version History table | নতুন row যোগ হয়েছে? |
| metadata.js code block | `version: "X.X"` নতুন version দেওয়া আছে? |
| ফাইলের নাম | `job-app-vX.X.md` নতুন version আছে? |

### ২. Section Reference

| চেক | নিয়ম |
|-----|-------|
| "সেকশন X" উল্লেখ আছে কোথাও? | সেই section নম্বর সত্যিই সেই content ধারণ করে কিনা যাচাই করো |
| নতুন section যোগ হলে | পুরনো সব reference নম্বর ঠিক আছে কিনা দেখো |

### ৩. Formatting

| চেক | নিয়ম |
|-----|-------|
| Double `---` separator | দুটো পরপর `---` নেই তো? |
| Section numbering | ১, ২, ৩... ক্রমানুসারে আছে? কোনো নম্বর বাদ পড়েনি? |

### ৪. নিষিদ্ধ কাজ (এই session-এ যা ভুল হয়েছিল)

| ভুল | সঠিক কাজ |
|-----|----------|
| User "ডকুমেন্টে রাখো" বললে Memory-তে save করা | সরাসরি ডকুমেন্টে যোগ করো |
| User document upload না করলে নিজে থেকে edit করা | আগে document চাও, তারপর কাজ করো |
| Version বাড়িয়ে content ঠিক না করা | Version বাড়ালে সব consistency চেক করো |

> ⚠️ এই checklist-এর সব ঘর ✅ না হলে deliver করা যাবে না।

---

## Version History

| Version | তারিখ | পরিবর্তন |
|---------|-------|----------|
| v1.16 | ২০ জুন ২০২৬ | **Lazy Loading পরিকল্পনা যোগ (Section ১৫):** ডেটা বড় হলে speed সমস্যা এড়াতে একটা নতুন Pending Task যোগ করা হয়েছে। নিয়ম: `job-solution.js`-এ মোট প্রশ্ন সংখ্যা ৫০০ ছাড়ালে, এক ফাইলের বদলে প্রতিটা পরীক্ষার জন্য আলাদা ফাইল (`written-exam/data/exams/{examId}.js`) বানিয়ে শুধু প্রয়োজনীয় পরীক্ষার ডেটা লোড করতে হবে। AI-কে নির্দেশ দেওয়া হয়েছে যেন প্রশ্ন সংখ্যা ৫০০ এর কাছাকাছি পৌঁছালে প্রজেক্ট মালিককে সতর্ক করে। |
| v1.15 | ২০ জুন ২০২৬ | **পুরো প্রজেক্ট লাইন-বাই-লাইন গভীর স্ক্যান — ৩টা বাগ পাওয়া ও ঠিক করা হয়েছে:** (১) `primary-mcq/index.html`-এ `<script src="data.js">` ভুল path ছিল — আসল ফাইল `data/data.js`-এ, ফলে পুরো Primary MCQ সেকশন ডেটা লোড না হয়ে ভেঙে ছিল; path ঠিক করা হয়েছে। (২) `bcs-mcq/style.css`-এ `.tab-icon` ক্লাসের কোনো CSS রুল ছিল না এবং SVG আইকনে width/height সেট ছিল না — ফলে বিষয়ের ট্যাবের আইকন ব্রাউজারের ডিফল্ট সাইজে (৩০০×১৫০px) বিশাল হয়ে দেখাতো; `.tab-icon` ও `.tab-icon svg` রুল যোগ করা হয়েছে। (৩) `bcs-mcq/app.js`-এ ভুল উত্তরের সংখ্যা দেখানোর badge-এ `class="tag error"` (একবচন) লেখা ছিল কিন্তু CSS-এ `.tags`/`.tags.error` (বহুবচন) সংজ্ঞায়িত — ক্লাস নাম না মেলায় badge স্টাইল পেত না; `tag` কে `tags` করে ঠিক করা হয়েছে। এছাড়া ডেটা ইন্টিগ্রিটি সম্পূর্ণভাবে যাচাই করা হয়েছে: ১৩১৭টা BCS প্রশ্নে id/options/correctIndex, ৩০টা Primary প্রশ্নে id prefix, এবং ১৫টা Written Exam প্রশ্নে examId/type — সব সঠিক পাওয়া গেছে, কোনো নতুন সমস্যা নেই। |
| v1.14 | ২০ জুন ২০২৬ | **MathJax যোগ ও গণিত নোটেশন ঠিক করা:** `written-exam/index.html`-এ MathJax (CDN) যোগ করা হয়েছে যাতে `$...$` এর ভেতরের LaTeX সমীকরণ সুন্দর গাণিতিক আকারে দেখায়। `job-solution.js`-এর সব গণিত প্রশ্নে en-dash (`–`) বাদ দিয়ে সাধারণ হাইফেন (`-`) এ পরিবর্তন করা হয়েছে, কারণ MathJax en-dash কে বিয়োগ চিহ্ন হিসেবে চেনে না। Section ১৪-এ নতুন নিয়ম যোগ — ভবিষ্যতে গণিত প্রশ্ন লেখার সময় সবসময় সাধারণ হাইফেন ব্যবহার করতে হবে। |
| v1.13 | ২০ জুন ২০২৬ | **গুরুত্বপূর্ণ বাগ ফিক্স — examId লিংক:** আবিষ্কার হয়েছিল যে `job-solution.js`-এ প্রশ্ন ও `exam-archive.js`-এ পরীক্ষার মধ্যে কোনো নিশ্চিত সংযোগ ছিল না (ডকুমেন্টে লেখা `ministry`/`date` ফিল্ড বাস্তবে প্রতিটা প্রশ্নে ছিল না) — ফলে কোনো পরীক্ষায় ক্লিক করলে প্রশ্ন দেখাতো না। সমাধান: প্রতিটা প্রশ্নে বাধ্যতামূলক `examId` ফিল্ড যোগ। Section ৫, ৬, ৭ আপডেট করে বাস্তব ডেটা স্ট্রাকচারের সাথে মিলানো হয়েছে। `qno` ফিল্ড Bengali-digit string থেকে সংখ্যায় (number) ফিরিয়ে আনা হয়েছে — UI নিজে থেকে বাংলা সংখ্যায় দেখায়। `written-exam/index.html`-এ filter + search সিস্টেম যোগ করা হয়েছে (মন্ত্রণালয়, বছর, সার্চ, বিষয় ট্যাব)। |
| v1.12 | ১৯ জুন ২০২৬ | **Topic System যোগ করা হয়েছে:** প্রতিটা প্রশ্নে ঐচ্ছিক `topic` ফিল্ড যোগ করা হয়েছে যা বিষয়ের ভেতরে আরো সূক্ষ্ম ফিল্টার করার সুবিধা দেবে (যেমন বাংলার মধ্যে শুধু সমাস বা সন্ধি দেখা)। প্রতিটা বিষয়ের অনুমোদিত topic তালিকা Section ১২ ও Section ১৭-এ যোগ করা হয়েছে। পুরানো ডেটায় topic না থাকলে সমস্যা হবে না — ফিল্টার স্বয়ংক্রিয়ভাবে স্কিপ করবে। |
| v1.11 | ১৮ জুন ২০২৬ | **ফন্ট self-host করা হয়েছে (H-02 ফিক্স):** আগে বাংলা লেখার ফন্ট (Noto Serif Bengali) প্রতিবার Google-এর সার্ভার থেকে আনতে হতো, যার ফলে নেট স্লো থাকলে অ্যাপ ইনস্টল আটকে যেত এবং সম্পূর্ণ অফলাইনে ফন্ট ঠিকভাবে লোড হতো না। এখন ৪টা ফন্ট ফাইল (Regular, Medium, SemiBold, Bold — মোট ৪টা ওজন) সরাসরি অ্যাপের ভেতরে (`/fonts/` ফোল্ডারে) রাখা হয়েছে এবং Service Worker-এ pre-cache করা হয়েছে, ফলে একবার অ্যাপ ইনস্টল হয়ে গেলে নেট না থাকলেও বাংলা লেখা সঠিক ফন্টে দেখাবে। সব ৪টা সেকশনের (হোম, BCS, Primary, Written Exam) HTML থেকে Google Fonts-এর লিংক সরিয়ে স্থানীয় ফন্ট ফাইলের লিংকে পরিবর্তন করা হয়েছে।
| v1.10 | ১৮ জুন ২০২৬ | **লাইন-বাই-লাইন কোড রিভিউ থেকে বাগফিক্স:** (১) বাংলা বিষয়ের ডেটায় ৫১টি সম্পূর্ণ ডুপ্লিকেট প্রশ্ন (একই প্রশ্ন+অপশন+উত্তর একাধিকবার) চিহ্নিত করে অপসারণ করা হয়েছে — ৯২৪ থেকে ৮৭৩টি ইউনিক প্রশ্নে নামানো হয়েছে। (২) Dark mode থিম বাটনের আইকন ঠিক করা হয়েছে — bcs-mcq ও primary-mcq সেকশনে আগে dark mode-এ ভুলভাবে 🌙 দেখাত (root ও written-exam-এর সাথে অসামঞ্জস্যপূর্ণ ছিল), এখন সব সেকশনে dark mode-এ ☀️ দেখায়। (৩) written-exam সেকশনে প্রশ্নের টেক্সট ও পরীক্ষার নাম (ministry/post) HTML escape ছাড়া সরাসরি বসানো হতো — এখন `escHtml()` দিয়ে সুরক্ষিত করা হয়েছে। (৪) written-exam-এর paragraph ও letter টাইপ উত্তরে multi-paragraph টেক্সট রেন্ডার করার সময় malformed `<p>` ট্যাগ (opening/closing ছাড়া) তৈরি হতো — এখন প্রতিটা প্যারাগ্রাফ সঠিকভাবে matched `<p>...</p>` দিয়ে wrap হয়। (৫) ব্যবহৃত-হয়নি এমন `general-knowledge.js`-এ ভুল subject filter (`"general-knowledge"` এর বদলে সঠিক `"gk"`) ঠিক করা হয়েছে। (৬) root-এর `update_version.py` script-এর regex pattern v1.8-এর cache-prefix পরিবর্তনের পর অকেজো হয়ে গিয়েছিল — নতুন pattern-এ ঠিক করা হয়েছে এবং root index.html-এর footer version প্যাচ করার entry যুক্ত করা হয়েছে। (৭) root `index.html`-এর footer-এ হার্ডকোডেড পুরনো "v1.5" ছিল — এখন সঠিক ভার্সন দেখায়। (৮) bcs-mcq ফোল্ডারের ভেতরের অকেজো ডুপ্লিকেট `update_version.py` (যা ভুল ফোল্ডারে version.txt খুঁজত) মুছে ফেলা হয়েছে।
| v1.9 | ১৭ জুন ২০২৬ | **বাগফিক্স:** (১) Written Exam সেকশনে `job-solution.js`-এর script path ভুল ছিল (`data/` ফোল্ডার বাদ পড়েছিল), ফলে `JOB_SOLUTIONS` কখনো লোড হতো না এবং কোনো exam খোলা যেত না — path ঠিক করা হয়েছে। (২) BCS MCQ-এর ৯টা সাবজেক্ট ফাইলে (science, computer, geography, english, bangladesh, international, math, mental, ethics) প্রশ্নের id ১ থেকে শুরু হতো প্রতিটায় আলাদাভাবে, ফলে "সব কুইজ" মোডে ভিন্ন বিষয়ের একই id-র প্রশ্নগুলোর answered/bookmark/error state একসাথে মিশে যেত — প্রতিটা id-তে subject prefix যুক্ত করা হয়েছে (যেমন `science-1`, `math-1`), এবং পুরনো corrupted সংখ্যা-id ভিত্তিক localStorage ডেটা একবারের জন্য স্বয়ংক্রিয়ভাবে clear করার migration যুক্ত করা হয়েছে।
| v1.8 | ১৭ জুন ২০২৬ | **বাগফিক্স:** (১) Service Worker cache collision ঠিক করা হয়েছে — root, bcs-mcq, primary-mcq, written-exam প্রতিটার `sw.js`-এ এখন আলাদা cache prefix (`home-`, `bcs-`, `primary-`, `written-`) ব্যবহার করা হয়, ফলে একটা সেকশনের activate-এ অন্য সেকশনের cache মুছে যাওয়ার ঝুঁকি দূর হয়েছে। (২) বাংলা বিষয়ের ডেটা লোড না হওয়ার বাগ ঠিক করা হয়েছে — `bcs-mcq/data/bangla.js`-এ `window.DATA_SETS.bangla` প্যাটার্নের পরিবর্তে বাকি ৯টা সাবজেক্ট ফাইলের মতো `var data_bangla` প্যাটার্নে আনা হয়েছে, ফলে ৯২৪টা বাংলা প্রশ্ন এখন সঠিকভাবে চিনতে পারছে অ্যাপ এবং "সব কুইজ"-এও যুক্ত হচ্ছে।
| v1.7.2 | ১৭ জুন ২০২৬ | Cache সব module-এ v1.7.2-এ আপডেট. |
| v1.0 | ১৪ জুন ২০২৬ | প্রথম চূড়ান্ত স্ট্রাকচার তৈরি |
| v1.1 | ১৪ জুন ২০২৬ | নতুন আর্কিটেকচার: `job-solution.js` মূল ডেটার উৎস। AI নিষেধাজ্ঞা ব্লক যোগ। |
| v1.2 | ১৫ জুন ২০২৬ | `id` নামকরণ নিয়ম যোগ। `date` ISO format। `examYear` বাদ। Script loading order যোগ। `admin/` সুরক্ষা পদ্ধতি যোগ। BCS MCQ ও Primary MCQ ডেটা ফরম্যাট যোগ। |
| v1.3 | ১৫ জুন ২০২৬ | Pending Implementation Tasks সেকশন যোগ। |
| v1.7 | ১৬ জুন ২০২৬ | **PWA নিয়ম স্পষ্ট করা:** অ্যাপের নাম "Open Job Solution"। পুরো অ্যাপ একটাই PWA — `manifest.json` শুধু root-এ থাকবে, কোনো সেকশনে নয়। `bcs-mcq/manifest.json` মুছে ফেলা হয়েছে। root-এ নতুন `sw.js` যোগ হয়েছে (শুধু হোম পেজ cache করে)। |
| v1.6 | ১৬ জুন ২০২৬ | **আর্কিটেকচার পরিবর্তন:** BCS MCQ root থেকে `/bcs-mcq/`-এ সরানো হয়েছে, root এখন হোম পেজ (৩টা সেকশন কার্ড)। Section ১ ও ২ সম্পূর্ণ পুনর্লিখন। নতুন নিয়ম — **সেকশন স্বাধীনতা**: প্রতিটা সেকশনের নিজস্ব `style.css`/`sw.js`, কোনো শেয়ার্ড ফাইল নেই। প্রতি সেকশনে `⬅️ হোমে ফিরুন` link বাধ্যতামূলক করা হয়েছে। |
| v1.5 | ১৫ জুন ২০২৬ | Primary MCQ ডেটা ফরম্যাট সংশোধন (Section ৫ ও ৯)। app.js duplicate icon bug fix। Section ১৬ — Automation App পরিকল্পনা যোগ। app.js ও sw.js version v1.5-এ আপডেট। ZIP folder name ঠিক করা। Sort mutation fix — `[...result].sort()`। Offline fallback routing fix — primary-mcq ও written-exam আলাদা route। |
| v1.4 | ১৫ জুন ২০২৬ | AI Self-Check Checklist যোগ। Section reference ও metadata version ঠিক করা। |

---

## ১. প্রজেক্ট পরিচিতি

**অ্যাপের নাম: Open Job Solution**

এটি বাংলাদেশের চাকরি পরীক্ষার প্রস্তুতির একটি ওয়েব অ্যাপ।
Cloudflare Pages-এ হোস্ট করা। কোনো GitHub dependency নেই।

রুটে (`/`) একটা হোম পেজ থাকে — সেখান থেকে তিনটা সেকশনে যাওয়া যায়:

| অ্যাপ | ফোল্ডার | কাজ |
|-------|---------|-----|
| BCS MCQ | `/bcs-mcq/` | MCQ প্র্যাকটিস |
| Primary MCQ | `/primary-mcq/` | প্রাথমিক পরীক্ষার MCQ |
| Written Exam | `/written-exam/` | লিখিত পরীক্ষার প্রশ্নব্যাংক |

### 🔒 মূল নিয়ম — সেকশন স্বাধীনতা (Section Independence)

তিনটা সেকশন **সম্পূর্ণ স্বাধীন**। একটা সেকশন আরেকটার উপর নির্ভর করবে না।

- প্রতিটা সেকশনের **নিজস্ব** `style.css`, `sw.js` থাকবে — কোনো ফাইল শেয়ার হবে না
- প্রতিটা সেকশন নিজের ডিজাইন, রং, layout, ও নিয়মে চলবে — অন্য সেকশনের সাথে মেলাতে হবে না
- প্রতিটা সেকশনের ডেটা ফরম্যাট আলাদা হতে পারে (সেকশন ৮ ও ৯ দেখুন) — এটা bug নয়, ইচ্ছাকৃত সিদ্ধান্ত
- একটা সেকশন এডিট করার সময় AI অন্য সেকশনের ফাইল ছোঁবে না, এবং অন্য সেকশনের convention অনুমান করে বসাবে না
- শুধু **হোম পেজে ফেরার link** (`⬅️ হোমে ফিরুন` প্যাটার্ন) প্রতিটা সেকশনে বাধ্যতামূলক — এটাই একমাত্র common জিনিস

### 📲 PWA নিয়ম — একটাই PWA

সেকশন স্বাধীন হলেও, **পুরো অ্যাপ মিলে একটাই PWA** — নাম "Open Job Solution"। তিনটা আলাদা PWA না।

| ফাইল | কোথায় | কাজ |
|------|--------|-----|
| `manifest.json` | **শুধু root-এ** (`/manifest.json`) | App name, icon, install prompt — একমাত্র উৎস |
| `sw.js` (root) | `/sw.js` | শুধু হোম পেজ cache করে, scope `/` |
| `sw.js` (প্রতি সেকশনে) | `/bcs-mcq/sw.js` ইত্যাদি | নিজের ফোল্ডারের জন্য আলাদা scope — অফলাইন কাজ চালায়, কিন্তু কোনো manifest.json নেই, তাই আলাদা install prompt আসবে না |

কোনো সেকশনের `index.html`-এ `<link rel="manifest">` থাকবে না — শুধু root `index.html`-এ থাকবে।

---

## ২. সম্পূর্ণ ফোল্ডার স্ট্রাকচার

```
📂 BCS-MCQ-Project              ← শুধু এই ফোল্ডার Cloudflare-এ আপলোড হয়
│
├── 📄 index.html               ← হোম পেজ (৩টা কার্ড — সেকশন বাছাই)
├── 📄 manifest.json            ← ★ একমাত্র manifest — "Open Job Solution" PWA
├── 📄 sw.js                    ← root SW, শুধু হোম পেজ cache করে (scope: /)
├── 📄 _headers
├── 📄 _redirects
│
├── 📁 bcs-mcq/                  ← স্বাধীন সেকশন ১
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   ├── sw.js                    ← নিজস্ব scope (/bcs-mcq/), কিন্তু manifest.json নেই
│   ├── version.txt
│   └── 📁 data/
│       ├── science.js
│       ├── computer.js
│       ├── geography.js
│       ├── bangla.js
│       ├── english.js
│       ├── bangladesh.js
│       ├── international.js
│       ├── math.js
│       ├── mental.js
│       └── ethics.js
│
├── 📁 primary-mcq/              ← স্বাধীন সেকশন ২
│   ├── index.html
│   ├── style.css
│   ├── sw.js
│   └── data.js
│
└── 📁 written-exam/             ← স্বাধীন সেকশন ৩
    ├── index.html
    ├── style.css
    ├── sw.js
    ├── job-solution.js          ← ★ মূল ডেটার উৎস (সব প্রশ্ন এখানে)
    ├── bangla.js                ← job-solution.js থেকে ফিল্টার
    ├── english.js               ← job-solution.js থেকে ফিল্টার
    ├── general-knowledge.js     ← job-solution.js থেকে ফিল্টার
    ├── math.js                  ← job-solution.js থেকে ফিল্টার
    └── exam-archive.js

📁 admin/                       ← ⚠️ BCS-MCQ-Project ফোল্ডারের বাইরে রাখতে হবে
    └── metadata.js           ← কখনো Cloudflare-এ যাবে না
```

প্রতিটা সেকশনের `sw.js` নিজের ফোল্ডারে নিজের scope নিয়ে কাজ করে (`/bcs-mcq/`, `/primary-mcq/`, `/written-exam/`) — অফলাইন cache-এর জন্য। root `sw.js`-এর scope `/` হলেও এটা শুধু হোম পেজ handle করে; সেকশনগুলোর বেশি specific scope থাকায় browser সেগুলোকেই priority দেয়। `_headers` ফাইলে প্রতিটা scope-এর জন্য `Service-Worker-Allowed` আলাদাভাবে declare করতে হবে।

---

## ৩. Written Exam ফাইলের দায়িত্ব

| ফাইল | কাজ |
|------|-----|
| `job-solution.js` | **★ মূল ডেটার উৎস।** সব বিষয়ের সব প্রশ্ন এখানে থাকে। |
| `bangla.js` | `job-solution.js` থেকে `subject: "bangla"` ফিল্টার করা ভিউ |
| `english.js` | `job-solution.js` থেকে `subject: "english"` ফিল্টার করা ভিউ |
| `general-knowledge.js` | `job-solution.js` থেকে `subject: "general-knowledge"` ফিল্টার করা ভিউ |
| `math.js` | `job-solution.js` থেকে `subject: "math"` ফিল্টার করা ভিউ |
| `exam-archive.js` | সব পরীক্ষার হেডিং তথ্যের মাস্টার লিস্ট |
| `metadata.js` | AI Classification Rules — পাবলিক নয়, `admin/` ফোল্ডারে |

---

## ৪. ডেটা আর্কিটেকচার

### job-solution.js হলো একমাত্র সত্য (Single Source of Truth)

```
job-solution.js (সব প্রশ্ন একসাথে)
        │
        ├──→ bangla.js            (subject: "bangla")
        ├──→ english.js           (subject: "english")
        ├──→ general-knowledge.js (subject: "general-knowledge")
        ├──→ math.js              (subject: "math")
        └──→ (ভবিষ্যতে নতুন বিষয় যোগ হলে নতুন ফাইল)
```

### এই সিদ্ধান্তের কারণ

- নতুন প্রশ্ন শুধু `job-solution.js`-এ যোগ করলেই হবে
- বিষয়ভিত্তিক ফাইলগুলো অটো আপডেট হবে
- ডেটা duplicate হওয়ার ঝুঁকি নেই

### বিষয়ভিত্তিক ফাইলের ফরম্যাট

`bangla.js` (উদাহরণ) — শুধু ফিল্টার করে রি-এক্সপোর্ট করে:

```javascript
// bangla.js
// ⚠️ এই ফাইল সরাসরি এডিট করবেন না।
// সব প্রশ্ন job-solution.js-এ যোগ করুন।

const BANGLA_QUESTIONS = JOB_SOLUTIONS.filter(q => q.subject === "bangla");
```

### HTML Script Loading Order (বাধ্যতামূলক)

`written-exam/index.html`-এ script-গুলো অবশ্যই এই ক্রমে লোড করতে হবে।
`job-solution.js` সবার আগে না থাকলে ফিল্টার ফাইলগুলো কাজ করবে না।

```html
<!-- written-exam/index.html -->

<!-- ১. আগে মূল ডেটা -->
<script src="job-solution.js"></script>
<script src="exam-archive.js"></script>

<!-- ২. তারপর ফিল্টার ভিউ -->
<script src="bangla.js"></script>
<script src="english.js"></script>
<script src="general-knowledge.js"></script>
<script src="math.js"></script>
```

---

## ৫. id নামকরণ নিয়ম

### Written Exam — id ফরম্যাট

```
job-{YYYY}-{exam-slug}-q{NN}
```

| অংশ | নিয়ম | উদাহরণ |
|-----|-------|---------|
| `job` | সবসময় `job` | `job` |
| `{YYYY}` | ৪ সংখ্যার বছর | `2025` |
| `{exam-slug}` | মন্ত্রণালয়/প্রতিষ্ঠান বোঝানো ছোট নাম — নিচে দেখুন | `dc-joypurhat` |
| `q{NN}` | প্রশ্ন নম্বর, সবসময় ২ সংখ্যায় | `q01`, `q12` |

### exam-slug কীভাবে ঠিক করবেন

আগে শুধু Ministry Code টেবিল থেকে কোড নেওয়ার নিয়ম ছিল। কিন্তু বাস্তবে একই মন্ত্রণালয়ে একই বছরে একাধিক পদের পরীক্ষা হতে পারে (যেমন "কারিগরি শিক্ষা অধিদপ্তর"-এর "সহকারী কাম কিপার" আর "ড্রাইভার কাম মেকানিক" — দুটো আলাদা পরীক্ষা, একই বছরে)। তাই slug এ প্রয়োজনে পদ বা জেলার নামও যোগ করতে হবে যাতে প্রতিটা পরীক্ষা আলাদাভাবে চেনা যায়।

```
✅ ভালো slug:        dc-joypurhat, dc-bhola, tech-edu, tech-edu-driver, coast-guard, navy
❌ একই slug দুইবার:   একই বছরে দুটো ভিন্ন পরীক্ষায় একই slug ব্যবহার করা যাবে না
```

> **নিয়ম:** একই পরীক্ষার মধ্যে `q01` থেকে শুরু করতে হবে। `id` একবার তৈরি হলে আর পরিবর্তন করা যাবে না।

### Ministry Code টেবিল (slug এর প্রথম অংশ হিসেবে ব্যবহার করুন)

| মন্ত্রণালয় / প্রতিষ্ঠান | code |
|--------------------------|------|
| অর্থ মন্ত্রণালয় | `finance` |
| শিক্ষা মন্ত্রণালয় | `edu` |
| স্বাস্থ্য মন্ত্রণালয় | `health` |
| আইন মন্ত্রণালয় | `law` |
| কৃষি মন্ত্রণালয় | `agri` |
| তথ্য ও যোগাযোগ প্রযুক্তি মন্ত্রণালয় | `ict` |
| পরিবহন মন্ত্রণালয় | `transport` |
| স্থানীয় সরকার মন্ত্রণালয় | `lgrd` |
| পানি সম্পদ মন্ত্রণালয় | `water` |
| জেলা প্রশাসকের কার্যালয় | `dc` |
| বাংলাদেশ ব্যাংক | `bb` |
| সোনালী ব্যাংক | `sonali` |
| নতুন কোনো প্রতিষ্ঠান | Project Owner নতুন code ঠিক করবেন এবং এই টেবিলে যোগ করবেন |

### exam-archive.js — id ফরম্যাট

```
job-{YYYY}-{exam-slug}
```

উদাহরণ: `job-2025-dc-joypurhat`

> **বর্তমান ডেটায় নোট:** এখন পর্যন্ত শুধু একটা DC পরীক্ষা আছে বলে তার id সংক্ষেপে `job-2025-dc` রাখা হয়েছে — এটা ঠিক আছে। কিন্তু যখন আরেকটা DC পরীক্ষা (অন্য জেলার) যোগ হবে, তখন থেকে নতুন সব exam-এর slug-এ জেলা/পদের নামও যোগ করতে হবে (যেমন `dc-bhola`) যাতে দুটো আলাদা থাকে।

### ⚠️ সবচেয়ে গুরুত্বপূর্ণ নিয়ম — examId লিংক

প্রশ্ন আর পরীক্ষা একসাথে যুক্ত হয় `id` এর শুরুর অংশ মিলিয়ে **নয়** — কারণ এতে ভুল মিল হওয়ার ঝুঁকি থাকে (যেমন `tech-edu` আর `tech-edu-driver` কাছাকাছি slug হলে ভুল মিলে যেতে পারে)।

তার বদলে, `job-solution.js`-এর প্রতিটা প্রশ্নে একটা `examId` ফিল্ড **বাধ্যতামূলক** — যার মান হুবহু সেই পরীক্ষার `exam-archive.js`-এর `id` এর সমান হতে হবে।

```javascript
// exam-archive.js
{ id: "job-2025-dc", ... }

// job-solution.js — প্রতিটা প্রশ্নে
{ id: "job-2025-dc-q01", examId: "job-2025-dc", ... }
{ id: "job-2025-dc-q02", examId: "job-2025-dc", ... }
```

`examId` ছাড়া প্রশ্ন কোনো পরীক্ষার সাথে UI তে যুক্ত হবে না — প্রশ্ন তালিকায় দেখাবে না।

### BCS MCQ — id ফরম্যাট

```
bcs-{NN}-{subject-code}-q{NNN}
```

| অংশ | নিয়ম | উদাহরণ |
|-----|-------|---------|
| `bcs` | সবসময় `bcs` | `bcs` |
| `{NN}` | BCS পরীক্ষার নম্বর | `44`, `45` |
| `{subject-code}` | নিচের BCS Subject Code টেবিল থেকে | `sci` |
| `q{NNN}` | প্রশ্ন নম্বর, ৩ সংখ্যায় | `q001`, `q025` |

### BCS Subject Code টেবিল

| subject | code |
|---------|------|
| `science.js` | `sci` |
| `computer.js` | `comp` |
| `geography.js` | `geo` |
| `bangla.js` | `ban` |
| `english.js` | `eng` |
| `bangladesh.js` | `bd` |
| `international.js` | `intl` |
| `math.js` | `math` |
| `mental.js` | `mental` |
| `ethics.js` | `ethics` |

### Primary MCQ — id ফরম্যাট

```
{subject-prefix}{NNN}
```

| subject | prefix | উদাহরণ |
|---------|--------|---------|
| bangla | `pb` | `pb001` |
| math | `pm` | `pm001` |
| english | `pe` | `pe001` |
| gk | `pg` | `pg001` |
| child | `pc` | `pc001` |

উদাহরণ: `pb001`, `pm012`, `pc003`

---

## ৬. job-solution.js ডেটা ফরম্যাট

### নকশার মূলনীতি

`ministry`, `post`, `date`, `duration`, `totalMarks` — এই তথ্যগুলো **শুধু `exam-archive.js`-এ একবার** থাকে। প্রতিটা প্রশ্নে এগুলো আবার লেখা হয় না — কারণ একটা পরীক্ষায় ১৫-৪০টা প্রশ্ন থাকতে পারে, প্রতিটায় একই তথ্য বারবার লেখা হলে ভুল হওয়ার ঝুঁকি বাড়ে এবং ডেটা অপ্রয়োজনীয়ভাবে বড় হয়।

প্রশ্ন আর পরীক্ষার সংযোগ হয় শুধু `examId` ফিল্ড দিয়ে (Section ৫ দেখুন)।

```javascript
const JOB_SOLUTIONS = [

  {
    id: "job-2025-dc-q01",
    examId: "job-2025-dc",  // exam-archive.js এর id এর সাথে হুবহু মিলতে হবে
    subject: "bangla",
    topic: "পত্রলিখন",                 // ঐচ্ছিক — Section ১৭-এর তালিকা থেকে নিতে হবে
    qno: 1,                            // সবসময় সংখ্যা (number), string নয়
    marks: 5,
    type: "letter",                    // প্রশ্নের ধরন — উপরে "Question Types" তালিকা দেখুন
    question: "প্রশ্নের টেক্সট...",
    letter: { /* type অনুযায়ী আলাদা গঠন */ }
  },

  {
    id: "job-2025-dc-q11",
    examId: "job-2025-dc",
    subject: "math",
    topic: "বীজগণিত",
    qno: 11,
    marks: 5,
    type: "math",
    question: "$(4x – 5y)$ এর ঘন নির্ণয় করুন।",
    steps: ["...ধাপ..."],
    answer: "$64x^3 – 240x^2y + 300xy^2 – 125y^3$"
  }

];
```

### প্রতিটা ফিল্ডের মানে

| ফিল্ড | মানে | নোট |
|-------|------|-----|
| `id` | প্রতিটা প্রশ্নের আলাদা পরিচয় | সেকশন ৫-এর নিয়ম মেনে |
| `examId` | কোন পরীক্ষার প্রশ্ন | **বাধ্যতামূলক** — exam-archive.js এর id এর সাথে হুবহু মিলতে হবে |
| `subject` | বিষয় | শুধু ৪টি মান — Section ১২ দেখুন |
| `topic` | বিষয়ের ভেতরে নির্দিষ্ট টপিক | **ঐচ্ছিক** — Section ১৭-এর তালিকা থেকে নিতে হবে; না থাকলে সমস্যা নেই |
| `qno` | প্রশ্ন নম্বর | **সবসময় সংখ্যা (number)** — `1`, `11` ইত্যাদি; কখনো `"০১"` এর মতো string/বাংলা সংখ্যা নয়। UI নিজেই বাংলা সংখ্যায় দেখায়। |
| `marks` | এই প্রশ্নের নম্বর | |
| `type` | প্রশ্নের ধরন | এই ফাইলের শুরুতে "Question Types" তালিকা দেখুন (letter/math/table/idiom ইত্যাদি) |
| `question` | প্রশ্নের টেক্সট | |
| *(type-specific)* | `answer` / `parts` / `steps` / `letter` / `columns`+`rows` ইত্যাদি | `type` অনুযায়ী পরিবর্তিত হয় — renderer.js দেখুন |

> **মন্ত্রণালয়, পদ, তারিখ, সময়, পূর্ণমান এই ফাইলে লেখা হয় না — শুধু Section ৭-এর `exam-archive.js`-এ থাকে।**

---

## ৭. exam-archive.js ডেটা ফরম্যাট

```javascript
const EXAM_ARCHIVE = [

  {
    id: "job-2025-dc",
    ministry: "জেলা প্রশাসকের কার্যালয়, জয়পুরহাট",
    post: "নাজির কাম ক্যাশিয়ার/সার্টিফিকেট পেশকার",
    date: "2025-06-27",        // সবসময় YYYY-MM-DD ফরম্যাট
    duration: "৯০ মিনিট",
    totalMarks: 100,
    totalQuestions: 15
  }

];
```

### exam-archive.js এবং job-solution.js এর সংযোগ

```
exam-archive.js  →  id: "job-2025-dc"
job-solution.js  →  examId: "job-2025-dc"  (প্রতিটা প্রশ্নে — id নয়, examId দিয়ে মিল)
```

---

## ৮. BCS MCQ ডেটা ফরম্যাট

প্রতিটি subject ফাইলে (`science.js`, `bangla.js` ইত্যাদি) এই ফরম্যাট:

```javascript
const SCIENCE_QUESTIONS = [

  {
    id: "bcs-44-sci-q001",
    bcs: 44,
    question: "কোন মৌলিক অধাতু সাধারণ তাপমাত্রায় তরল?",
    options: {
      a: "আয়োডিন",
      b: "ব্রোমিন",
      c: "পারদ",
      d: "সালফার"
    },
    answer: "b"
  },

  {
    id: "bcs-44-sci-q002",
    bcs: 44,
    question: "সমুদ্রের গভীরতা মাপার যন্ত্রের নাম কি?",
    options: {
      a: "ব্যারোমিটার",
      b: "থার্মোমিটার",
      c: "ফ্যাদোমিটার",
      d: "অ্যানিমোমিটার"
    },
    answer: "c"
  }

];
```

### BCS MCQ ফিল্ডের মানে

| ফিল্ড | মানে | নোট |
|-------|------|-----|
| `id` | প্রশ্নের আলাদা পরিচয় | সেকশন ৫-এর BCS নিয়ম মেনে |
| `bcs` | কততম BCS পরীক্ষা | সংখ্যা |
| `question` | প্রশ্নের টেক্সট | |
| `options` | ৪টি বিকল্প | সবসময় `a`, `b`, `c`, `d` |
| `answer` | সঠিক উত্তরের key | `"a"` / `"b"` / `"c"` / `"d"` |

---

## ৯. Primary MCQ ডেটা ফরম্যাট

`primary-mcq/data.js` ফাইলে বিষয় অনুযায়ী আলাদা array-তে প্রশ্ন থাকে:

```javascript
const PRIMARY_DATA = {

  bangla: [
    {
      id: "pb001",
      year: "২০২৩",             // বাংলা সংখ্যায়
      q: "বাংলা ভাষার উদ্ভব হয়েছে কোন ভাষা থেকে?",
      options: ["সংস্কৃত", "প্রাকৃত", "পালি", "অপভ্রংশ"],
      answer: 1,                // 0=প্রথম, 1=দ্বিতীয়, 2=তৃতীয়, 3=চতুর্থ
      explanation: "ব্যাখ্যা এখানে"
    }
  ],

  math:    [ /* একই ফরম্যাট */ ],
  english: [ /* একই ফরম্যাট */ ],
  gk:      [ /* একই ফরম্যাট */ ],
  child:   [ /* শিশু বিকাশ — একই ফরম্যাট */ ]

};
```

### Primary MCQ ফিল্ডের মানে

| ফিল্ড | মানে | নোট |
|-------|------|-----|
| `id` | প্রশ্নের আলাদা পরিচয় | subject prefix + সিরিয়াল নম্বর — যেমন `pb001` (bangla), `pm001` (math), `pe001` (english), `pg001` (gk), `pc001` (child) |
| `year` | পরীক্ষার বছর | বাংলা সংখ্যায় string — যেমন `"২০২৩"` |
| `q` | প্রশ্নের টেক্সট | |
| `options` | ৪টি বিকল্প | Array — `["ক", "খ", "গ", "ঘ"]` ক্রমে |
| `answer` | সঠিক উত্তরের index | `0` / `1` / `2` / `3` (options array-এর position) |
| `explanation` | উত্তরের ব্যাখ্যা | |

### Primary MCQ বিষয় তালিকা

| key | বিষয় |
|-----|-------|
| `bangla` | বাংলা |
| `math` | গণিত |
| `english` | English |
| `gk` | সাধারণ জ্ঞান |
| `child` | শিশু বিকাশ |

---

## ১০. admin/ ফোল্ডার সুরক্ষা

`admin/` ফোল্ডার **কখনো** Cloudflare Pages-এ যাবে না।

### সঠিক ফোল্ডার কাঠামো

```
📂 আমার-কম্পিউটার/
│
├── 📁 BCS-MCQ-Project/    ← এটাই Cloudflare-এ আপলোড হয়
│   ├── index.html
│   ├── written-exam/
│   └── ...
│
└── 📁 admin/              ← BCS-MCQ-Project-এর বাইরে, কখনো আপলোড হয় না
    └── metadata.js
```

> **নিয়ম:** `admin/` ফোল্ডারটি সবসময় `BCS-MCQ-Project` ফোল্ডারের **বাইরে** রাখতে হবে। ভেতরে রাখলে ভুলে আপলোড হয়ে যাওয়ার ঝুঁকি আছে।

---

## ১১. AI Processing Workflow

```
Exam Image / PDF
      ↓
OCR (ছবি থেকে লেখা বের করা)
      ↓
Metadata Extract (মন্ত্রণালয়, পদ, তারিখ, সময়, পূর্ণমান)
      ↓
exam-archive.js এ নতুন entry তৈরি (id ঠিক করা — Section ৫)
      ↓
Question Split (প্রশ্নগুলো আলাদা করা)
      ↓
Subject Classification (বিষয় নির্ধারণ)
      ↓
job-solution.js আপডেট — প্রতিটা প্রশ্নে examId যোগ করতে হবে
                         (exam-archive.js এ তৈরি করা id এর সাথে হুবহু মিলিয়ে)
      ↓
Cloudflare Pages Upload
```

> **⚠️ ভুল এড়াতে:** exam-archive.js এর `id` আগে ঠিক করে নিতে হবে, তারপর job-solution.js এর প্রতিটা প্রশ্নে সেই `id`-টাই `examId` হিসেবে বসাতে হবে। দুটো জায়গায় বানান বা অক্ষর এক বিন্দু আলাদা হলে প্রশ্ন পরীক্ষায় দেখাবে না।

---

## ১২. Subject Classification নিয়ম

AI শুধু এই ৪টি subject ব্যবহার করবে — নতুন কোনো subject বানাবে না:

| subject value | কোন ধরনের প্রশ্ন |
|---------------|-----------------|
| `bangla` | বাংলা ব্যাকরণ, সাহিত্য, ভাষা |
| `english` | English grammar, literature, vocabulary |
| `general-knowledge` | সাধারণ জ্ঞান, বাংলাদেশ, আন্তর্জাতিক, বিজ্ঞান |
| `math` | গণিত, সমীকরণ, পরিসংখ্যান |

subject নির্ধারণের পর, সম্ভব হলে Section ১৭-এর তালিকা থেকে সঠিক `topic` যোগ করতে হবে।
topic নিশ্চিত না হলে বাদ দেওয়া যাবে — ভুল topic দেওয়া যাবে না।

---

## ১৩. metadata.js — শুধু লোকাল

এই ফাইল `admin/` ফোল্ডারে থাকবে — Cloudflare-এ আপলোড হবে না।

```javascript
const APP_METADATA = {
  version: "1.7",
  subjects: [
    { id: "bangla",            name: "বাংলা" },
    { id: "english",           name: "English" },
    { id: "general-knowledge", name: "সাধারণ জ্ঞান" },
    { id: "math",              name: "গণিত" }
  ],
  examTypes: [
    "BCS", "NTRCA", "Primary", "Bank", "BPSC", "Other"
  ]
};
```

---

## ১৪. AI-এর জন্য গুরুত্বপূর্ণ নিয়ম

- **`job-solution.js` একমাত্র ডেটা সোর্স** — বিষয়ভিত্তিক ফাইলে সরাসরি প্রশ্ন যোগ করা যাবে না
- `id` সবসময় unique — সেকশন ৫-এর নিয়ম মেনে বানাতে হবে, কখনো duplicate করা যাবে না
- প্রতিটা প্রশ্নে `examId` **বাধ্যতামূলক** — সংশ্লিষ্ট `exam-archive.js` entry-র `id` এর সাথে হুবহু মিলতে হবে (Section ৫ দেখুন); না মিললে প্রশ্ন UI তে দেখাবে না
- `qno` সবসময় সংখ্যা (number) — `"০১"` এর মতো string বা বাংলা সংখ্যা লেখা যাবে না; UI নিজেই বাংলা সংখ্যায় রূপান্তর করে দেখায়
- `exam-archive.js`-এ `date` সবসময় `YYYY-MM-DD` ফরম্যাটে লিখতে হবে
- `subject` ফিল্ডে শুধু: `bangla` / `english` / `general-knowledge` / `math`
- **গণিতের সমীকরণ `$...$` এর ভেতরে MathJax (LaTeX) সিনট্যাক্স দিয়ে লিখতে হবে** — যেমন `$64x^3 - 240x^2y$`। বিয়োগ চিহ্নের জন্য সবসময় সাধারণ হাইফেন (`-`) ব্যবহার করতে হবে, কখনো en-dash (`–`) বা em-dash (`—`) ব্যবহার করা যাবে না — কারণ MathJax এই চিহ্নগুলোকে বিয়োগ চিহ্ন হিসেবে চেনে না
- `ministry`, `post`, `date`, `duration`, `totalMarks` — এগুলো শুধু `exam-archive.js`-এ থাকবে, `job-solution.js`-এর প্রশ্নে পুনরাবৃত্তি করা যাবে না
- `written-exam/index.html`-এ `job-solution.js` সবার আগে লোড করতে হবে
- `admin/` ফোল্ডার সবসময় `BCS-MCQ-Project`-এর বাইরে রাখতে হবে
- কোনো প্রকাশক বা বইয়ের নাম রাখা যাবে না
- নতুন subject category বানানো যাবে না
- `topic` ফিল্ড **ঐচ্ছিক** — নিশ্চিত না হলে বাদ দেওয়া যাবে, কিন্তু ভুল topic দেওয়া যাবে না
- `topic` এর মান শুধু Section ১৭-এর অনুমোদিত তালিকা থেকে নিতে হবে — নিজে থেকে নতুন topic বানানো যাবে না
- **সেকশন স্বাধীনতা ভাঙা যাবে না** — `bcs-mcq/`, `primary-mcq/`, `written-exam/` একে অন্যের `style.css`, `sw.js`, বা ডেটা ফরম্যাট ব্যবহার করবে না (সেকশন ১ দেখুন)
- **`manifest.json` শুধু root-এ থাকবে** — কোনো সেকশনের `index.html`-এ `<link rel="manifest">` যোগ করা যাবে না (অ্যাপ একটাই PWA — "Open Job Solution")
- প্রতিটা সেকশনের নিজস্ব `index.html`-এ `⬅️ হোমে ফিরুন` link থাকা বাধ্যতামূলক
- **`<script src="...">` এর path আর আসল ফাইলের লোকেশন হুবহু মিলতে হবে** — কোনো ফাইল `data/` সাবফোল্ডারে থাকলে `src="data/filename.js"` লিখতে হবে, শুধু `src="filename.js"` লিখলে ব্রাউজার ভুল জায়গায় খুঁজবে এবং পুরো সেকশন ভেঙে যাবে (v1.15-এ এই কারণে Primary MCQ ভাঙা ছিল)
- **HTML-এর `class="..."` আর CSS-এর সিলেক্টর নাম অক্ষরে-অক্ষরে এক হতে হবে** — একবচন/বহুবচন (`tag` বনাম `tags`) ভুল হলে স্টাইল প্রয়োগ হবে না, কোনো error ছাড়াই চুপচাপ ভেঙে থাকবে (v1.15-এ এই কারণে error badge স্টাইলহীন ছিল)
- **কোনো SVG ইনলাইন বসালে হয় SVG-তে `width`/`height` দিতে হবে, নয়তো তাকে ধরে রাখা wrapper-এ CSS দিয়ে সাইজ বেঁধে দিতে হবে** — নাহলে ব্রাউজার ডিফল্ট ৩০০×১৫০px সাইজ নেয় (v1.15-এ এই কারণে ট্যাব আইকন বিশাল দেখাত)
- নতুন কোনো `index.html`/`app.js`/`style.css` জমা দেওয়ার আগে নিচের ক্রস-চেক করতে হবে: (১) যত `<script src>` আছে সব আসল ফাইলের সাথে মেলে কিনা, (২) JS-এ ব্যবহৃত প্রতিটা `class="..."` নাম CSS ফাইলে হুবহু সংজ্ঞায়িত আছে কিনা

---

## ১৫. Pending Implementation Tasks

### ⏳ validateQuestion() — বাস্তবায়ন বাকি

**অবস্থা:** পরিকল্পিত, এখনো তৈরি হয়নি

**কাজটা কী:**
`job-solution.js`-এ নতুন প্রশ্ন যোগ করার আগে যাচাই করবে — ডেটা সঠিক কিনা।

**যা যাচাই করবে:**

| চেক | নিয়ম |
|-----|-------|
| `id` format | `job-{YYYY}-{exam-slug}-q{NN}` মেনে চলছে কিনা |
| `examId` | খালি নয়, এবং `exam-archive.js`-এ এই `id` দিয়ে একটা entry সত্যিই আছে কিনা |
| `subject` value | শুধু `bangla` / `english` / `general-knowledge` / `math` — অন্য কিছু নয় |
| `topic` value | দেওয়া থাকলে Section ১৭-এর তালিকায় আছে কিনা |
| `qno` type | সংখ্যা (number), string বা বাংলা সংখ্যা নয় |
| `type` value | renderer.js-এ যে ধরনগুলো সাপোর্ট করে তার একটা কিনা |
| `id` uniqueness | একই `id` আগে আছে কিনা (Duplicate Guard) |

**Schema যা confirm হয়েছে (Section ৬ থেকে):**

```javascript
{
  id: "job-2025-dc-q01",            // বাধ্যতামূলক, unique
  examId: "job-2025-dc",  // বাধ্যতামূলক, exam-archive.js এর id এর সাথে মিলতে হবে
  subject: "bangla",                // বাধ্যতামূলক, ৪টির মধ্যে একটি
  topic: "পত্রলিখন",                 // ঐচ্ছিক
  qno: 1,                           // বাধ্যতামূলক, সংখ্যা
  marks: 5,                         // বাধ্যতামূলক
  type: "letter",                   // বাধ্যতামূলক — renderer.js এর type অনুযায়ী
  question: "প্রশ্নের টেক্সট",       // বাধ্যতামূলক
  // type অনুযায়ী আরো ফিল্ড: answer / parts / steps / letter / columns+rows ইত্যাদি
}
```

> মন্ত্রণালয়, পদ, তারিখ, সময়, পূর্ণমান এখানে থাকে না — সেগুলো `exam-archive.js`-এ আলাদা থাকে (Section ৭ দেখুন)।

**কখন বানাবে:** Written Exam কাজ শেষ হলে।

**AI-এর জন্য নির্দেশ:** এই সেকশন দেখলে সরাসরি `validateQuestion()` এবং `assertUniqueId()` function লিখতে পারবে — আর schema জিজ্ঞেস করতে হবে না।

---

### ⏳ Lazy Loading — ডেটা বড় হলে বাস্তবায়ন করতে হবে

**অবস্থা:** পরিকল্পিত, এখনো দরকার নেই (এখন প্রশ্ন সংখ্যা কম)

**সমস্যাটা কী:**
এখন `written-exam/data/job-solution.js`-এ সব পরীক্ষার সব প্রশ্ন **একটাই ফাইলে** থাকে। যেকোনো পরীক্ষা খুললে পুরো ফাইলটাই লোড হয়, সেই পরীক্ষার প্রশ্ন কম হলেও।

**কখন এই কাজ শুরু করতে হবে:**

```
JOB_SOLUTIONS এর মোট প্রশ্ন সংখ্যা ৫০০ ছাড়ালে
        ↓
job-solution.js ফাইলের সাইজ আনুমানিক ১-২MB ছাড়িয়ে যাবে
        ↓
তখনই Lazy Loading সিস্টেমে যেতে হবে
```

> **AI-এর জন্য নির্দেশ:** নতুন প্রশ্ন যোগ করার সময়, যদি দেখা যায় `job-solution.js`-এ মোট প্রশ্ন সংখ্যা ৫০০ এর কাছাকাছি বা তার বেশি হয়ে গেছে, তাহলে প্রজেক্ট মালিককে সতর্ক করতে হবে এবং Lazy Loading সিস্টেমে যাওয়ার প্রস্তাব দিতে হবে — চুপচাপ আরো প্রশ্ন যোগ করা চালিয়ে যাওয়া যাবে না।

**সমাধানের নকশা:**

```
এখন (এক ফাইল):
written-exam/data/job-solution.js   ← সব পরীক্ষার সব প্রশ্ন

তখন (পরীক্ষা-ভিত্তিক আলাদা ফাইল):
written-exam/data/exams/job-2025-dc.js
written-exam/data/exams/job-2025-tech-edu.js
written-exam/data/exams/job-2025-coast-guard.js
... (প্রতিটা exam-archive.js entry-র জন্য একটা ফাইল, ফাইলের নাম তার id)
```

**কীভাবে কাজ করবে:**

```
হোম পেজ খোলার সময়     → শুধু exam-archive.js লোড হবে (পরীক্ষার তালিকা, ছোট)
পরীক্ষায় ক্লিক করলে   → শুধু সেই একটা exam ফাইল (যেমন job-2025-dc.js) লোড হবে
                         (fetch() দিয়ে dynamic script load বা import)
```

**যা পরিবর্তন করতে হবে তখন:**

| ফাইল | পরিবর্তন |
|------|----------|
| `written-exam/index.html` | `openExam()` ফাংশনে `<script src="data/exams/{examId}.js">` dynamic load যোগ করতে হবে |
| `written-exam/sw.js` | OPTIONAL_ASSETS-এ সব exam ফাইল আলাদাভাবে cache করার নিয়ম |
| Automation App (Section ১৬) | প্রতিটা নতুন পরীক্ষার প্রশ্ন আলাদা ফাইলে বানাবে, একটা বড় ফাইলে নয় |
| `bangla.js`, `english.js`, `math.js`, `general-knowledge.js` | এই subject-filter ফাইলগুলোর নকশাও পুনর্বিবেচনা করতে হবে, কারণ এগুলো এখন `JOB_SOLUTIONS` (সব প্রশ্নের একটাই array) থেকে filter করে — সেই array আর একসাথে থাকবে না |

**কখন বানাবে:** যখন মোট প্রশ্ন সংখ্যা ৫০০ ছাড়াবে, অথবা প্রজেক্ট মালিক স্পষ্টভাবে অনুরোধ করলে।

---

## ১৬. Automation App — পরিকল্পনা

### উদ্দেশ্য

প্রশ্নপত্রের ছবি দিলে AI নিজেই extract করে সঠিক ফরম্যাটে সাজিয়ে `.js` ফাইল তৈরি করে দেবে। Project Owner শুধু approve করবেন এবং Cloudflare-এ আপলোড করবেন।

### Workflow

```
Project Owner ছবি আপলোড করবেন
        ↓
AI বুঝবে — BCS MCQ / Primary MCQ / Written — কোন section
        ↓
প্রশ্ন, উত্তর, metadata extract করবে
        ↓
এই document-এর নিয়ম অনুযায়ী সঠিক ফরম্যাটে সাজাবে
        ↓
Project Owner preview দেখবেন, ভুল থাকলে ঠিক করবেন
        ↓
"Approve" করলে আপডেট করা .js ফাইল download হবে
        ↓
Project Owner Cloudflare Pages-এ আপলোড করবেন  ← একমাত্র manual কাজ
```

### তিনটা Section-এর জন্য আলাদা নিয়ম

| Section | AI কী করবে | Output ফাইল |
|---------|-----------|-------------|
| BCS MCQ | প্রশ্ন + ৪টা option + উত্তর extract, `bcs-NN-{subject}-q{NNN}` format | `data/{subject}.js` |
| Primary MCQ | বিষয় চিনবে, `pb/pm/pe/pg/pc` prefix দিয়ে id বানাবে | `primary-mcq/data.js` |
| Written Exam | মন্ত্রণালয়, পদ, তারিখ, প্রশ্ন extract করবে, `job-{YYYY}-{code}-q{NN}` format | `written-exam/job-solution.js` + `exam-archive.js` |

### AI-এর জন্য নির্দেশ

ছবি পেলে প্রথমে section চিনবে, তারপর সেই section-এর নিয়ম (Section ৫, ৬, ৭, ৮, বা ৯) অনুযায়ী ফরম্যাট করবে। id generate করার আগে বিদ্যমান ফাইলের সর্বশেষ id দেখে নেবে যাতে duplicate না হয়।

### অবস্থা

⏳ পরিকল্পিত — এখনো তৈরি হয়নি।

---

## ১৭. Topic System — বিষয়ের ভেতরে সূক্ষ্ম ফিল্টার

### উদ্দেশ্য

`subject` দিয়ে বড় ভাগ হয় (বাংলা/ইংরেজি/গণিত/সাধারণ জ্ঞান)।
`topic` দিয়ে সেই ভাগের ভেতরে আরো সূক্ষ্মভাবে খোঁজা যাবে।

উদাহরণ: "শুধু সমাস প্রশ্ন দেখতে চাই" → `subject: "bangla"` + `topic: "সমাস"`

### নিয়ম

- `topic` ফিল্ড সবসময় **ঐচ্ছিক**
- পুরানো ডেটায় `topic` না থাকলে কোনো সমস্যা নেই — ফিল্টার স্বয়ংক্রিয়ভাবে স্কিপ করবে
- নিচের অনুমোদিত তালিকার বাইরে কোনো topic ব্যবহার করা যাবে না
- নিশ্চিত না হলে topic বাদ দেওয়াই ভালো — ভুল topic দেওয়া যাবে না

### অনুমোদিত Topic তালিকা

#### বাংলা (`subject: "bangla"`)

| topic মান | কোন ধরনের প্রশ্ন |
|-----------|-----------------|
| `সমাস` | ব্যাসবাক্যসহ সমাস নির্ণয় |
| `সন্ধি` | সন্ধি বিচ্ছেদ ও নির্ণয় |
| `কারক` | কারক ও বিভক্তি নির্ণয় |
| `বাগধারা` | বাগধারার অর্থ ও বাক্য গঠন |
| `এক-কথায়-প্রকাশ` | এক কথায় প্রকাশ |
| `বিপরীত-শব্দ` | বিপরীত বা বিলোম শব্দ |
| `প্রতিশব্দ` | সমার্থক বা প্রতিশব্দ |
| `শুদ্ধিকরণ` | বানান বা বাক্য শুদ্ধিকরণ |
| `ভাবসম্প্রসারণ` | ভাবসম্প্রসারণ |
| `পত্রলিখন` | আবেদনপত্র, চিঠি, দরখাস্ত |
| `রচনা` | প্রবন্ধ বা রচনা |
| `অনুবাদ` | বাংলা থেকে ইংরেজি বা ইংরেজি থেকে বাংলা অনুবাদ |
| `ব্যাকরণ-অন্যান্য` | উপরের কোনো category-তে পড়ে না এমন বাংলা ব্যাকরণ |

#### ইংরেজি (`subject: "english"`)

| topic মান | কোন ধরনের প্রশ্ন |
|-----------|-----------------|
| `paragraph` | Paragraph writing |
| `letter` | Letter, application writing |
| `translation` | Translation (Bengali to English / English to Bengali) |
| `fill-in-the-blanks` | Fill in the blanks (preposition, article, tense) |
| `sentence-making` | Sentence making with idioms/phrases |
| `grammar` | Tense, voice, narration, transformation |
| `vocabulary` | Synonyms, antonyms, spelling |
| `english-others` | উপরের কোনো category-তে পড়ে না এমন ইংরেজি প্রশ্ন |

#### গণিত (`subject: "math"`)

| topic মান | কোন ধরনের প্রশ্ন |
|-----------|-----------------|
| `বীজগণিত` | সমীকরণ, উৎপাদক, সরলীকরণ |
| `পাটিগণিত` | শতকরা, লাভ-ক্ষতি, সুদ-আসল, অনুপাত |
| `জ্যামিতি` | ক্ষেত্রফল, পরিসীমা, কোণ |
| `সংখ্যাতত্ত্ব` | গসাগু, লসাগু, মৌলিক সংখ্যা |
| `পরিসংখ্যান` | গড়, মধ্যক, প্রচুরক |
| `math-others` | উপরের কোনো category-তে পড়ে না এমন গণিত প্রশ্ন |

#### সাধারণ জ্ঞান (`subject: "general-knowledge"`)

| topic মান | কোন ধরনের প্রশ্ন |
|-----------|-----------------|
| `বাংলাদেশ` | বাংলাদেশের ইতিহাস, ভূগোল, সরকার, অর্থনীতি |
| `আন্তর্জাতিক` | বিশ্বের দেশ, সংস্থা, চুক্তি, ঘটনা |
| `বিজ্ঞান` | সাধারণ বিজ্ঞান, প্রযুক্তি |
| `সাম্প্রতিক` | সাম্প্রতিক ঘটনা ও খবর |
| `gk-others` | উপরের কোনো category-তে পড়ে না এমন সাধারণ জ্ঞান |

### UI তে কীভাবে দেখাবে

```
বিষয় → বাংলা ▼
টপিক → সমাস ▼       ← বিষয় বাছাই করলে সেই বিষয়ের topic অটো আসবে
         সন্ধি
         কারক
         বাগধারা
         ...
```

বাংলা বাছাই করলে বাংলার topic, ইংরেজি বাছাই করলে ইংরেজির topic।

### validateQuestion() এ যোগ করার নিয়ম (Section ১৫ দেখুন)

`topic` ফিল্ড থাকলে যাচাই করতে হবে —
- সংশ্লিষ্ট `subject` এর অনুমোদিত তালিকায় আছে কিনা
- না থাকলে error দেবে

---

> **নোট:** এই ডকুমেন্ট BCS-MCQ-Project এর চূড়ান্ত রেফারেন্স।
> নতুন সিদ্ধান্ত হলে version বাড়িয়ে নতুন ফাইল তৈরি করুন।
