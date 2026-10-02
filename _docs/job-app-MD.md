# BCS-MCQ-Project — Master Reference Document

> **Architecture/content version:** v1.22 (last meaningful change — Current Affairs section added)
> **Last verified/edited:** 2026-10-01
> **Purpose:** give this document to any AI and it can understand the project's complete structure.
> **Note:** this document is split into 7 files — this main file holds the always-read parts (prohibitions, checklist, overview, folder structure, general rules); the rest lives in `_docs/job-app/`. **The index below says which file to read for which task.** Version History is in its own file (`job-app/version-history.md`); routine cache/version bumps are not recorded there (they are in `git log` and `_docs/version.txt`). For the git/push/merge workflow rules see `_docs/AGENTS.md` — the two documents complement each other. **Language:** this main file is in English to save tokens; the prohibition block, the checklist and the `_docs/job-app/` parts stay in Bengali. Literal Bengali data values/UI strings (subject names, `⬅️ হোমে ফিরুন`, etc.) must stay Bengali.

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

> ✏️ **মালিক-অনুমোদিত সম্পাদনা (১ অক্টোবর ২০২৬ যোগ করা):** Project Owner যদি চ্যাটে স্পষ্টভাবে নির্দেশ দেন (যেমন "এই ডকুমেন্ট সম্পাদনা/অনুবাদ করো"), তাহলে AI সরাসরি এই ফাইলেই সেই নির্দিষ্ট পরিবর্তন করতে পারবে এবং `job-app/version-history.md`-এ সারি যোগ করতে পারবে। **এই repo-তে `job-app-MD*.md` নামে একটাই ফাইল থাকে** (একাধিক হলে CI আটকায়; ইতিহাস git-এ), তাই উপরের "নতুন ফাইলে/পুরানো version আর্কাইভ" ধাপ এবং নিচের চেকলিস্টের `job-app-vX.X.md` নাম-নিয়ম এখন প্রযোজ্য নয় — সেটা সরাসরি এই ফাইলে সম্পাদনা দিয়ে হয়। তবে নিজের উদ্যোগে, "উন্নতির নামে" বা মালিকের নির্দেশের বাইরে কোনো নিয়ম যোগ/বদল/মোছা তখনও নিষিদ্ধ।

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

## 📑 Document index — which file to read for which task (mandatory)

Read every part of this main file (prohibitions, checklist, §১, §২, §১০–§১৪) for **every task**. Read the files below **by task** — one file per section folder, named after it; do not start that kind of task without reading the matching file. **A task that touches two sections (e.g. moving questions between them, or comparing formats) needs both files.** Section numbers are identical across all files, so when you see "see Section ৬", find its file in the table below.

| File | Sections | Read when |
|------|----------|-----------|
| `_docs/job-app-MD.md` (this file) | prohibitions, checklist, §১, §২, §১০, §১১, §১২, §১৩, §১৪ | **always** |
| [`job-app/written-exam.md`](./job-app/written-exam.md) | §৩, §৪, §৫, §৬, §৭ | adding or fixing exams/questions in `written-exam/`; any work involving ids or `examId` |
| [`job-app/bcs-mcq.md`](./job-app/bcs-mcq.md) | §৫-ক, §৮ | adding or fixing questions in `bcs-mcq/` |
| [`job-app/primary-mcq.md`](./job-app/primary-mcq.md) | §৫-খ, §৯ | adding or fixing questions in `mcq-job-solution/primary-mcq/` |
| [`job-app/ministry-mcq.md`](./job-app/ministry-mcq.md) | §৯-ক | adding or fixing questions in `mcq-job-solution/ministry-mcq/` |
| [`job-app/topics-and-roadmap.md`](./job-app/topics-and-roadmap.md) | §১৫, §১৬, §১৭ | giving a question a `topic`; working on `validateQuestion()` or the Automation App |
| [`job-app/version-history.md`](./job-app/version-history.md) | Version History | only when adding a row for a meaningful change |

> **When you change the split files:** `_dev/check_docs_consistency.js` (a required CI check) verifies that `_docs/job-app/` contains exactly the files listed above, that every section heading appears exactly once overall (nothing lost, nothing duplicated), and that every file is mentioned in this index. To add a new part file, update the script's `PARTS` list and this index together.

---

## ১. Project overview

**App name: Open Job Solution**

A web app for preparing for Bangladesh job exams.
Hosted on Cloudflare Pages. No GitHub dependency.

The root (`/`) has a home page — from it you can reach these sections:

| App | Folder | Purpose |
|-----|--------|---------|
| BCS MCQ | `/bcs-mcq/` | MCQ practice |
| MCQ Job Solution (hub) | `/mcq-job-solution/` | Entry point to three sub-sections (the next three rows) |
| ↳ Primary MCQ | `/mcq-job-solution/primary-mcq/` | Primary-exam MCQs |
| ↳ NCTB MCQ | `/mcq-job-solution/nctb-mcq/` | MCQs based on NCTB textbooks (for now just a "শীঘ্রই আসছে" / coming-soon page) |
| ↳ বিভিন্ন মন্ত্রণালয়ের MCQ (MCQs of various ministries) | `/mcq-job-solution/ministry-mcq/` | Recruitment-exam MCQ solutions with ministry/year filters |
| Written Exam | `/written-exam/` | Written-exam question bank |

### 🔒 Core rule — Section Independence

The three sections are **completely independent**. One section must not depend on another.

- Each section has **its own** `style.css` and `sw.js` — no file is shared
- Each section follows its own design, colors, layout and rules — they need not match other sections
- Each section's data format may differ (see sections ৮ and ৯) — this is not a bug, it is a deliberate decision
- When editing one section, the AI must not touch another section's files, and must not guess another section's conventions
- Only the **link back to the home page** (the `⬅️ হোমে ফিরুন` pattern) is mandatory in every section — it is the one common thing

### 📲 PWA rule — a single PWA

Although the sections are independent, **the whole app is one single PWA** — named "Open Job Solution". Not three separate PWAs.

| File | Where | Purpose |
|------|-------|---------|
| `manifest.json` | **root only** (`/manifest.json`) | App name, icon, install prompt — the only source |
| `sw.js` (root) | `/sw.js` | Caches only the home page, scope `/` |
| `sw.js` (in each section) | `/bcs-mcq/sw.js` etc. | A separate scope for its own folder — runs offline, but there is no manifest.json there, so no separate install prompt appears |

No section's `index.html` may contain `<link rel="manifest">` — only the root `index.html` has it.

---

## ২. Complete folder structure

```
📂 BCS-MCQ-Project              ← only this folder is uploaded to Cloudflare
│
├── 📄 index.html               ← home page (section chooser)
├── 📄 manifest.json            ← ★ the only manifest — the "Open Job Solution" PWA
├── 📄 sw.js                    ← root SW, caches only the home page (scope: /)
├── 📄 _headers
├── 📄 _redirects
│
├── 📁 bcs-mcq/                  ← section 1
│   ├── index.html / app.js / style.css / sw.js / version.txt
│   └── 📁 data/                 (science.js, computer.js, geography.js, bangla.js,
│                                  english.js, bangladesh.js, international.js,
│                                  math.js, mental.js, ethics.js)
│
├── 📁 mcq-job-solution/         ← section 2 (hub — three sub-sections inside)
│   ├── index.html / sw.js       (hub page; sw.js caches the hub and the nctb-mcq/ page)
│   ├── 📁 primary-mcq/          ← used to be primary-mcq/ at the root; now fully moved in here
│   │   ├── index.html / style.css / sw.js
│   │   └── 📁 data/
│   │       └── data.js          ← ⚠️ not data.js directly at the root, but in the data/ subfolder
│   ├── 📁 nctb-mcq/             (for now just a "শীঘ্রই আসছে" / coming-soon index.html)
│   └── 📁 ministry-mcq/         ← "বিভিন্ন মন্ত্রণালয়ের MCQ" (a list + filters, like written-exam)
│       ├── index.html / style.css / sw.js / mcq-renderer.js
│       ├── exam-archive.js      ← exam list (ministry/post/date/totalQuestions)
│       └── 📁 data/exams/<examId>.json
│
├── 📁 written-exam/             ← section 3
│   ├── index.html / style.css / sw.js / renderer.js
│   ├── exam-archive.js
│   ├── PROGRESS.md              ← data-entry tracking; must be read before starting work
│   ├── load_exams.js            ← shared helper that loads+merges exams/*.json (for scripts)
│   ├── check_bugs.js            ← data bug checker (advisory, not required in CI)
│   ├── check-spelling.js        ← Bengali spellcheck (advisory, not required in CI)
│   ├── generate_index.js        ← regenerates EXAM_INDEX.md
│   └── 📁 data/                 ← ⚠️ not directly at the root, but in the data/ subfolder
│       └── 📁 exams/            ← ★ the only data source — each exam in its own .json file
│                                  (the browser fetch()es directly from here; there is no
│                                   combined "all questions" file — see Section ৪)
│
├── 📁 current-affairs/          ← section 4 (Bengali current affairs)
│   └── 📁 docs/                 ← ⚠️ generated/synced — do not edit directly
│       (subfolders mcq/, topics/, top-news/, ghotonaprobaho/, etc.)
│
├── 📁 books/                    ← section 5 (book reader)
│   ├── index.html / book.html / style.css / sw.js
│   └── 📁 data/
│       └── manifest.js
│
├── 📁 _assets/                  ← shared static (fonts, icons, floating-search.js)
│
├── 📁 _docs/                    ← governance/reference documents (this file, AGENTS.md, etc.) — not deployed
│   └── 📁 job-app/              ← the split-out parts of this file (one file per section: written-exam, bcs-mcq, primary-mcq, ministry-mcq; plus shared topics-and-roadmap and version-history)
├── 📁 _dev/                     ← scripts (validate_data.js, session_status.sh, update_version.py) — not deployed
└── 📁 _staging/                 ← temporary data-entry work (books-staging) — not deployed

📁 admin/                       ← ⚠️ must be kept OUTSIDE the BCS-MCQ-Project folder
    └── metadata.js           ← never goes to Cloudflare
```

> Rule: the git/push/merge workflow is in `_docs/AGENTS.md`; data-entry progress is in each section's own PROGRESS.md/STATUS.md (e.g. `written-exam/PROGRESS.md`) — they are not duplicated in this file, so always look at those files for the latest state.

Each section's `sw.js` works in its own folder with its own scope (`/bcs-mcq/`, `/mcq-job-solution/` (hub) and inside it `primary-mcq/`, `ministry-mcq/` each with its own sw.js, `/written-exam/`) — for offline caching. Although the root `sw.js` has scope `/`, it handles only the home page; since the sections have more specific scopes, the browser gives priority to those. The `_headers` file must declare `Service-Worker-Allowed` separately for each scope.

---

## ১০. Protecting the admin/ folder

The `admin/` folder must **never** go to Cloudflare Pages.

### Correct folder structure

```
📂 my-computer/
│
├── 📁 BCS-MCQ-Project/    ← this is what is uploaded to Cloudflare
│   ├── index.html
│   ├── written-exam/
│   └── ...
│
└── 📁 admin/              ← outside BCS-MCQ-Project, never uploaded
    └── metadata.js
```

> **Rule:** the `admin/` folder must always be kept **outside** the `BCS-MCQ-Project` folder. Inside it, there is a risk of it being uploaded by mistake.

---

## ১১. AI Processing Workflow

```
Exam Image / PDF
      ↓
OCR (extract text from the image)
      ↓
Metadata Extract (ministry, post, date, time, total marks)
      ↓
Create a new entry in exam-archive.js (decide the id — Section ৫)
      ↓
Question Split (separate the questions)
      ↓
Subject Classification (decide the subject)
      ↓
Create a new file data/exams/<examId>.json — add examId to every question
                         (matching exactly the id created in exam-archive.js,
                          and the file name must also match that id exactly)
      ↓
Cloudflare Pages Upload
```

> **⚠️ To avoid mistakes:** decide the `id` in exam-archive.js first, then put that same `id` as `examId` in every question of the `data/exams/<that-id>.json` file. If even one character differs between the two places (and the file name), the questions will not show up in the exam.

---

## ১২. Subject Classification rules

The AI uses only these 4 subjects — it must not invent any new subject:

| subject value | Kind of question |
|---------------|------------------|
| `bangla` | Bengali grammar, literature, language |
| `english` | English grammar, literature, vocabulary |
| `general-knowledge` | General knowledge, Bangladesh, international, science |
| `math` | Mathematics, equations, statistics |

After deciding the subject, if possible add the right `topic` from the list in Section ১৭.
If you are not sure of the topic it may be omitted — a wrong topic must not be given.

---

## ১৩. metadata.js — local only

This file stays in the `admin/` folder — it is not uploaded to Cloudflare.

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

## ১৪. Important rules for the AI

- **`data/exams/<examId>.json` is the only data source** — each exam in its own file; all questions must not be gathered into one monolithic file
- The file name must match the `examId` exactly (the browser fetches by exactly this name)
- `id` is always unique — build it following the rules of Section ৫, and never duplicate it
- `examId` is **mandatory** in every question — it must match the `id` of the corresponding `exam-archive.js` entry exactly (see Section ৫); if it doesn't match, the question will not show in the UI
- `qno` is always a number — do not write a string like `"০১"` or Bengali digits; the UI converts to Bengali digits itself when displaying
- `date` in `exam-archive.js` must always be written in `YYYY-MM-DD` format
- the `subject` field takes only: `bangla` / `english` / `general-knowledge` / `math`
- **Math equations must be written inside `$...$` using MathJax (LaTeX) syntax** — e.g. `$64x^3 - 240x^2y$`. Always use the plain hyphen (`-`) for the minus sign, never an en-dash (`–`) or em-dash (`—`) — because MathJax does not recognize those characters as a minus sign
- `ministry`, `post`, `date`, `duration`, `totalMarks` — these live only in `exam-archive.js` and must not be repeated in the questions of `data/exams/*.json`
- `written-exam/index.html` loads `exam-archive.js` first; the question data (`data/exams/<examId>.json`) is fetched on demand when an exam is opened, not preloaded with a script tag
- the `admin/` folder must always be kept outside `BCS-MCQ-Project`
- no publisher or book name may be included
- no new subject category may be created
- the `topic` field is **optional** — if you are not sure it may be omitted, but a wrong topic must not be given
- a `topic` value must be taken only from the approved list in Section ১৭ — never invent a new topic yourself
- **Section independence must not be broken** — `bcs-mcq/`, `mcq-job-solution/primary-mcq/`, `mcq-job-solution/ministry-mcq/`, `written-exam/` must not use each other's `style.css`, `sw.js`, or data format (see Section ১)
- **`manifest.json` lives only at the root** — no section's `index.html` may add `<link rel="manifest">` (the app is a single PWA — "Open Job Solution")
- every section's own `index.html` must have the `⬅️ হোমে ফিরুন` link
- **The path in `<script src="...">` must match the real file location exactly** — if a file is in the `data/` subfolder you must write `src="data/filename.js"`; writing just `src="filename.js"` makes the browser look in the wrong place and the whole section breaks (Primary MCQ was broken for this reason in v1.15)
- **The `class="..."` names in HTML and the selector names in CSS must be identical character for character** — a singular/plural mistake (`tag` vs `tags`) means the style is not applied and it silently stays broken without any error (the error badge was unstyled for this reason in v1.15)
- **When inlining any SVG, either give the SVG `width`/`height`, or fix its size with CSS on the wrapper holding it** — otherwise the browser takes the default 300×150px size (the tab icon looked huge for this reason in v1.15)
- Before submitting any new `index.html`/`app.js`/`style.css`, do these cross-checks: (1) every `<script src>` matches an actual file, (2) every `class="..."` name used in JS is defined exactly in the CSS file

---

> **Note:** this document is the final reference for BCS-MCQ-Project.
> When a new decision is made, bump the version by editing this file in place (see the owner-approved-edit note in the prohibition block — do not create a second `job-app-MD*.md`; CI forbids it).
