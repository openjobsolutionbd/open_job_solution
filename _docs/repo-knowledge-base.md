# Repo Knowledge Base — openjobsolutionbd

এই ফাইলটা org-এর ৫টা ট্র্যাক-করা রিপোর মধ্যে ফিচার/প্যাটার্ন/সম্পর্ক ট্র্যাক করার জন্য। কোনো রিপোতে কাজ করার সময় Claude নিজে থেকেই এই ফাইলের সাথে মিলিয়ে দেখবে অন্য রিপোর জন্য প্রাসঙ্গিক কিনা, আর কাজ শেষে এখানে ✅ স্ট্যাটাস/নতুন প্যাটার্ন যোগ করবে।

ট্র্যাক করা রিপো: `open_current_affairs`, `high_school_study`, `mydian`, `open_job_solution`, `open_job_circular_app`
(`bd-news-monitor` ইচ্ছাকৃতভাবে বাদ)

## রিপোগুলোর সংক্ষিপ্ত পরিচিতি

- **open_current_affairs (oca)** — টপিক-ভিত্তিক কারেন্ট অ্যাফেয়ার্স static সাইট। Cloudflare Pages। branch+PR ওয়ার্কফ্লো (main protected)। `scripts/build_index.py` দিয়ে search index/sitemap/robots.txt/SEO পেজ auto-generate হয়। automated JS regression test suite আছে (`scripts/js_tests/`)।
- **open_job_solution (ojs)** — মূল "ফ্ল্যাগশিপ" সাইট। চারটা সেকশন: `bcs-mcq/`, `primary-mcq/`, `written-exam/`, `current-affairs/docs/` (root-relative আসল সাবপাথ, hash-routing না)। `books/` সেকশন আছে কিন্তু এখনো placeholder — হোমপেজ থেকে লিংক করা হয়নি। main branch protected, required check `validate` (validate-data.yml)। স্বতন্ত্র dev-tooling আছে: `check-spelling.js`, `check_docs_consistency.js` (oca-তে এগুলোর সমতুল্য নেই)।
- **high_school_study, mydian, open_job_circular_app** — এখনো বিস্তারিত অডিট করা হয়নি।

## গুরুত্বপূর্ণ প্যাটার্ন

- **স্বয়ংক্রিয় one-way sync (oca → ojs):** `oca/.github/workflows/sync-to-job-solution.yml` প্রতি ৩ দিনে oca-এর পুরো `docs/` ফোল্ডার (কোড+কনটেন্ট, mcq/proshnottor সহ) branch+PR দিয়ে ojs-এর `current-affairs/` সেকশনে বসিয়ে দেয়, পুরনো ঠিকানা/watermark/manifest-লিংক নিজে থেকেই ঠিক করে। **তাই oca ও ojs-এর current-affairs অংশের মধ্যে ম্যানুয়াল "ফিচার এক্সচেঞ্জ" লাগে না — এটা এমনিতেই সিঙ্ক থাকে।**
- oca-এর নিজস্ব `scripts/build_index.py`-এ `SITE_BASE_URL = "/current-affairs/docs"` (root-relative, standalone ডোমেইন-URL না) — অর্থাৎ oca এখন মূলত ojs-এর ভেতরে embed হওয়ার জন্যই বানানো, sitemap/canonical লিংক সব সেই ধরে জেনারেট হয়।
- robots.txt শুধু domain-root-এ (`/robots.txt`) কাজ করে — নেস্টেড `/current-affairs/docs/robots.txt` (sync-করা) সার্চ ইঞ্জিন আসলে পড়ে না। SEO নিয়ন্ত্রণ root robots.txt দিয়েই হতে হবে।

## চলমান কাজ (২০২৬-০৮-২৫ থেকে শুরু)

ব্যবহারকারী oca ও ojs-এর মধ্যে "ফিচার এক্সচেঞ্জ" চেয়েছিলেন; অডিটে দেখা গেল current-affairs অংশ এমনিতেই সিঙ্ক, তাই বাস্তব exchange-যোগ্য ৩টা আইটেম বেছে "ধাপে ধাপে" করার সিদ্ধান্ত হয়েছে:

1. ✅ **SEO (oca → ojs-এর মূল কনটেন্ট)** — ojs root-এ আগে কোনো `robots.txt`/`sitemap.xml` ছিল না (মানে AI-বট ব্লকিং কখনো কার্যকরই হয়নি)। এখন যোগ করা হলো: `/robots.txt` (oca-এর AI-training-bot-block প্যাটার্ন, দুটো Sitemap: লাইন দিয়ে দুই sitemap-ই রেফার করে) এবং `/sitemap.xml` (`/`, `/bcs-mcq/`, `/primary-mcq/`, `/written-exam/`, `/current-affairs/docs/` — `books/` বাদ, এখনো unlinked/placeholder)। **এখনো বাকি:** oca-এর মতো auto-regenerating build script নেই — এটা এখন একটা static one-time ফাইল; `books/` লাইভ হলে sitemap-এ যোগ করতে হবে।
2. ✅ **Automated regression test suite (ojs-এ)** — oca-এর `scripts/js_tests/` প্যাটার্নে `_dev/js_tests/` বানানো হয়েছে (`dom_harness.mjs` + রানার + `bcs-mcq.test.mjs`, ৮টা টেস্ট)। `_dev/package.json`-এ `test:js` script, `.github/workflows/validate-data.yml`-এর বিদ্যমান `validate` জবেই নতুন step হিসেবে যোগ করা হয়েছে (নতুন required check বানাতে হয়নি, branch-protection সেটিং বদলানো লাগবে না)। **গুরুত্বপূর্ণ shortcut যা ধরা পড়েছিল ও ঠিক করা হয়েছে:** jsdom-এ `window.eval()` দিয়ে top-level `let`/`const` ডিক্লেয়ার করলে সেটা real global lexical environment-এ persist করে না — SUT-কে তাই আসল `<script>` ট্যাগ হিসেবে HTML-এ ইনলাইন বসিয়ে parse-time-এ চালাতে হয় (harness-এর কমেন্টে বিস্তারিত)। **এখনো বাকি:** শুধু bcs-mcq কভার করা হয়েছে — primary-mcq ও written-exam-এর জন্য একই harness পুনর্ব্যবহার করে টেস্ট যোগ করা বাকি (`_dev/js_tests/run.mjs`-এ import যোগ করলেই হবে)।
3. ✅ **Spellcheck script (oca-তে)** — `scripts/check_spelling.js` লাগেনি, সরাসরি cspell CLI যথেষ্ট (oca-এর কনটেন্ট আগে থেকেই plain markdown, ojs-এর মতো JS-array extraction দরকার নেই)। `scripts/cspell.json` + `scripts/known-words.txt` (নতুন, খালি, ধীরে ধীরে বাড়বে) + `scripts/prothomalo-words.txt` (ojs-এর `_dev/prothomalo-words.txt` থেকে হুবহু কপি — ৯১,৭৮০ শব্দের কিউরেটেড বাংলা সংবাদ-ডিকশনারি, এই news-সাইটের জন্য বরং আরও বেশি প্রাসঙ্গিক)। `npm run spellcheck` — advisory, `pr-check.yml`-এর চূড়ান্ত pass/fail গেটে যোগ করা হয়নি ইচ্ছাকৃতভাবেই। রিয়েল কনটেন্টে চালিয়ে যাচাই করা হয়েছে (৬৯৫টা ফ্ল্যাগ, প্রত্যাশিত মাত্রার noise — নাম/প্রতিবর্ণীকরণ/রূপভেদ)।

**তিনটাই কোড-লেভেলে সম্পূর্ণ, দুই রিপোতে আলাদা ব্র্যাঞ্চে commit করা আছে (`ojs`: `seo-root-robots-sitemap`, `oca`: `spellcheck-bangla-content`) — এখনো push হয়নি।**
