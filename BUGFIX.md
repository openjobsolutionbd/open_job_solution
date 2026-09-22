# BUGFIX.md — বাগ-ট্র্যাকিং খাতা

এই ফাইলে **JavaScript ও Python কোডে পাওয়া বাগ** এবং সেগুলোর সংশোধনের বিবরণ রাখা হয়। প্রতিটা এন্ট্রিতে আছে: বাগটা কী ছিল, কোথায় ছিল, কেন সমস্যা তৈরি করত এবং কীভাবে ঠিক করা হয়েছে।

---

## ব্যাচ ১ — ২০২৬-০৮ (Claude Sonnet 4.6)

### BUG-01 🔴 — মোবাইলে প্রিন্ট/PDF ফাঁকা আসত

**ফাইল:** `docs/index.html` — `@media print` CSS + `printMonthlySummary()`

**সমস্যা:**
`printMonthlySummary()` ফাংশন প্রিন্টের আগে `#card`-এ মাসের সারাংশ বসায়, তারপর `window.print()` ডাকে। `@media print` এ `#browse-layout { display: block !important }` থাকায় desktop-এ ঠিকঠাক দেখাত। কিন্তু মোবাইল CSS-এ একটা নিয়ম আছে:

```css
#browse-layout:not(.showing-article) .card { display: none; }
```

প্রিন্টের সময় যদি কোনো টপিক খোলা না থাকে (অর্থাৎ `browse-layout`-এ `.showing-article` class না থাকে), তাহলে `.card` `display: none` থেকে যেত — কারণ `@media print`-এ `.card`-কে আলাদাভাবে `display: block` করা হয়নি। ফলে মোবাইলে প্রিন্ট চাপলে সম্পূর্ণ ফাঁকা পেজ আসত।

**সমাধান:**
```css
@media print {
  .card {
    display: block !important; /* যোগ করা হয়েছে */
    box-shadow: none;
    ...
  }
}
```

**⚠️ ২০২৬-০৮-১০ আপডেট:** এই এন্ট্রি "ফিক্সড" লেখা থাকলেও, `docs/index.html`-এর লাইভ (committed) কোডে `display:block !important` আসলে **ছিল না** — শুধু `.card` rule-এর বাকি প্রপার্টিগুলো (box-shadow, padding ইত্যাদি) ছিল। অর্থাৎ মোবাইলে article না খুলে প্রিন্ট করলে bug-টা এখনো লাইভ ছিল, ডকুমেন্টেশন সত্ত্বেও। কীভাবে/কবে এটা হারিয়ে গিয়েছিল তা নিশ্চিতভাবে জানা নেই (সম্ভবত কোনো আগের রিফ্যাক্টর/মার্জে)। এই সেশনে সোর্স সরাসরি পড়ে ধরা পড়ে, ফিক্স পুনরায় বসানো হয়েছে, এবং `scripts/verify_site.py`-তে একটা static check যোগ করা হয়েছে যা এই নির্দিষ্ট রিগ্রেশন ভবিষ্যতে চুপচাপ ফিরে এলে build-fail করবে। **শিক্ষা: এই ফাইলে "সমাধান" কোড-স্নিপেট থাকা মানেই তা লাইভ কোডে আছে তার প্রমাণ নয় — সন্দেহ হলে সবসময় সরাসরি সোর্স পড়ে/টেস্ট চালিয়ে যাচাই করুন, শুধু এই ডকুমেন্টকে বিশ্বাস করবেন না।**

---

### BUG-02 🔴 — `Kalpurush.ttf` Service Worker-এ ছিল না

**ফাইল:** `scripts/sw_template.js` → `docs/sw.js`

**সমস্যা:**
`docs/index.html`-এ বাংলা ফন্ট দুই ফরম্যাটে ডিক্লেয়ার করা আছে:

```css
@font-face {
  src: url('./fonts/Kalpurush.woff2') format('woff2'),
       url('./fonts/Kalpurush.ttf') format('truetype'); /* fallback */
}
```

Service Worker-এর `APP_SHELL` তালিকায় `Kalpurush.woff2` ছিল, কিন্তু `Kalpurush.ttf` ছিল না। woff2 সাপোর্ট না থাকলে (পুরনো browser) `.ttf` দরকার পড়ে — কিন্তু সেটা pre-cache না থাকায় অফলাইনে সিস্টেম ফন্টে ফলব্যাক হয়ে যেত, বাংলা রেন্ডারিং ভেঙে যেত।

**সমাধান:**
```js
const APP_SHELL = [
  ...
  "./fonts/Kalpurush.woff2",
  "./fonts/Kalpurush.ttf", // যোগ করা হয়েছে
  ...
];
```

---

### BUG-03 🔴 — `renderTopicContent`-এ race condition

**ফাইল:** `docs/index.html` — `async function renderTopicContent()`

**সমস্যা:**
দুটো টপিকে দ্রুত পরপর ক্লিক করলে দুটো `fetch()` একসাথে চলত। যেটার `fetch` পরে শেষ হত, সেটা `container.innerHTML` ওভাররাইট করত — ফলে ক্লিক করা টপিক না দেখিয়ে আগের টপিকের content দেখাত। কোনো cancellation বা guard ছিল না।

**সমাধান:**
একটা global counter `RENDER_TOPIC_SEQ` যোগ করা হয়েছে। প্রতিটা কল শুরুতে counter বাড়ায় এবং নিজের seq নম্বর মনে রাখে। `fetch` শেষে মিলিয়ে দেখে — এর মধ্যে নতুন কল এসে গেলে পুরনোটা চুপচাপ বাতিল হয়:

```js
let RENDER_TOPIC_SEQ = 0; // global

async function renderTopicContent(topic, container, ...){
  const mySeq = ++RENDER_TOPIC_SEQ;
  container.innerHTML = '<div class="card-placeholder">লোড হচ্ছে…</div>';
  const res = await fetch('./' + topic.file);
  if(mySeq !== RENDER_TOPIC_SEQ) return; // নতুন কল এসে গেছে, এটা বাতিল
  ...
}
```

---

### BUG-04 🟡 — `afterprint` না আসলে `#card` চিরতরে ভেঙে যেত

**ফাইল:** `docs/index.html` — `printMonthlySummary()`

**সমস্যা:**
প্রিন্টের পর `#card` পুনরুদ্ধার করতে `afterprint` event শোনা হত:

```js
const restoreCard = () => {
  card.innerHTML = previousCardHtml;
  window.removeEventListener('afterprint', restoreCard);
};
window.addEventListener('afterprint', restoreCard);
window.print();
```

কিন্তু কিছু browser (বিশেষত mobile Chrome) print dialog cancel করলে `afterprint` fire করে না। ফলে `#card` চিরতরে মাসিক সারাংশ দেখাতে থাকত, আসল টপিক কনটেন্ট আর কখনো ফিরত না — পেজ reload না করলে।

এছাড়া `restoreCard` বারবার call হলে (কিছু browser দুইবার fire করে) `previousCardHtml` দিয়ে আবার overwrite হত।

**সমাধান:**
`restored` flag যোগ করে double-fire ঠেকানো হয়েছে। `setTimeout` fallback যোগ করা হয়েছে:

```js
let restored = false;
const restoreCard = () => {
  if(restored) return;
  restored = true;
  card.innerHTML = previousCardHtml;
  window.removeEventListener('afterprint', restoreCard);
};
window.addEventListener('afterprint', restoreCard);
setTimeout(restoreCard, 60_000); // fallback: ৬০ সেকেন্ড পর যদি afterprint না আসে
window.print();
```

---

### BUG-05 🟡 — Modal খুললে আগের topic-এর content flash করত

**ফাইল:** `docs/index.html` — `async function openTopicInModal()`

**সমস্যা:**
```js
overlay.classList.add('visible'); // আগে দেখায়
await renderTopicContent(topic, body, ...); // পরে load হয়
```

Modal দেখানোর পরে `renderTopicContent` async-ভাবে নতুন content আনে। এর মধ্যে `body`-তে আগের topic-এর পুরনো content থাকত — ফলে modal খোলামাত্র পুরনো content একটা মুহূর্তের জন্য দেখা যেত, তারপর নতুন content আসত।

**সমাধান:**
`overlay.classList.add('visible')` এর আগেই `body.innerHTML` পরিষ্কার করা হয়:

```js
body.innerHTML = '<div class="card-placeholder">লোড হচ্ছে…</div>'; // আগে clear
overlay.classList.add('visible'); // তারপর দেখাও
await renderTopicContent(topic, body, ...);
```

---

### BUG-06 🟡 — Modal বন্ধে topic-preview-overlay আটকে যেত

**ফাইল:** `docs/index.html` — `function closeTopicModal()`

**সমস্যা:**
Modal-এর ভেতর থেকে কোনো `[[term]]` লিংকে ক্লিক করে topic-preview খোলা যায়। এরপর modal বন্ধ করলে `topic-preview-overlay` DOM-এ আটকে থাকত — কারণ `closeTopicModal()` শুধু modal overlay সরাত, preview সরাত না। ফলে স্ক্রিনে একটা অদৃশ্য overlay থাকত যা keyboard trap তৈরি করত এবং ক্লিক ব্লক করত।

**সমাধান:**
```js
function closeTopicModal(){
  closeTopicPreview(); // যোগ করা হয়েছে — আগে preview বন্ধ করো
  document.getElementById('topic-modal-overlay').classList.remove('visible');
  document.getElementById('topic-modal-body').innerHTML = '';
}
```

---

### BUG-07 🟡 — `filterByTag` mode tab আপডেট করত না

**ফাইল:** `docs/index.html` — `function filterByTag()`

**সমস্যা:**
কোনো টপিকের tag চিপে ক্লিক করলে `filterByTag()` search input-এ tag বসিয়ে `input` event dispatch করত। এতে `renderList()` চলত এবং browse list filter হত — কিন্তু `CURRENT_MODE` এবং mode tab-এর active class আপডেট হত না।

ফলে "দৈনিক ঘটনাপ্রবাহ" বা "টপ নিউজ" mode-এ থাকা অবস্থায় tag চাপলে উপরে mode tab-এ ঘটনাপ্রবাহ/টপনিউজ active দেখাত, কিন্তু নিচে browse list দেখাত — UI ও internal state-এ mismatch।

**সমাধান:**
```js
function filterByTag(tag){
  setMode('browse'); // যোগ করা হয়েছে — mode tab ও state আগে ঠিক করো
  const input = document.getElementById('search');
  input.value = tag;
  input.dispatchEvent(new Event('input'));
  input.scrollIntoView({ behavior:'smooth', block:'start' });
}
```

---

### BUG-08 🟡 — `backToList` চাপলে sidebar-এ আগের topic highlighted থাকত

**ফাইল:** `docs/index.html` — `function backToList()`

**সমস্যা:**
মোবাইলে "তালিকায় ফিরুন" চাপলে article সরে যেত, কিন্তু `ACTIVE_SLUG` clear হত না। `renderList()` ও call হত না। ফলে sidebar-এ আগের topic-টা highlighted (active) দেখাত — অথচ কোনো article খোলা নেই। এটা বিভ্রান্তিকর ছিল, বিশেষত ব্যবহারকারী ভাবতে পারত সেই topic-টা এখনো open আছে।

**সমাধান:**
```js
function backToList(){
  ACTIVE_SLUG = null; // যোগ করা হয়েছে
  document.getElementById('browse-layout').classList.remove('showing-article');
  const q = document.getElementById('search').value.trim().toLowerCase();
  renderList(visibleTopics(q), q); // যোগ করা হয়েছে — list re-render করে highlight সরাও
  window.scrollTo({top:0, behavior:'smooth'});
}
```

---

### BUG-09 🟢 — `ensure*Loaded` ফাংশনে concurrent fetch race

**ফাইল:** `docs/index.html` — `ensureGhotonaprobahoLoaded()` ও `ensureTopNewsLoaded()`

**সমস্যা:**
```js
async function ensureGhotonaprobahoLoaded(){
  if(GHOTONAPROBAHO_MONTHS !== null) return; // null check
  const res = await fetch(...); // ← এখানে await-এর ফাঁকে
  ...                            //   দ্বিতীয় কল এসে same null দেখে এগিয়ে যায়
}
```

দুটো জায়গা থেকে একই সময়ে এই ফাংশন call হলে (যেমন `setMode('ghotonaprobaho')` দ্রুত দুইবার), দুটো কলই `null` check পাস করত এবং দুটো আলাদা `fetch()` পাঠাত। এতে data corrupt না হলেও একটা অপ্রয়োজনীয় network request হত এবং দুটো response race করত।

**সমাধান:**
In-flight Promise ক্যাশ করা হয় — দ্বিতীয় কল একই Promise-এ `await` করে:

```js
let GHOTONAPROBAHO_MONTHS_PROMISE = null; // global

async function ensureGhotonaprobahoLoaded(){
  if(GHOTONAPROBAHO_MONTHS !== null) return;
  if(!GHOTONAPROBAHO_MONTHS_PROMISE){
    GHOTONAPROBAHO_MONTHS_PROMISE = fetch('./ghotonaprobaho-index.json')
      .then(r => r.json())
      .then(data => { GHOTONAPROBAHO_MONTHS = data.months || []; })
      .catch(() => { GHOTONAPROBAHO_MONTHS = []; });
  }
  await GHOTONAPROBAHO_MONTHS_PROMISE; // দুটো কলই এখানে wait করে
}
```

একইভাবে `ensureTopNewsLoaded()`-এও `TOP_NEWS_ITEMS_PROMISE` guard যোগ করা হয়েছে।

---

### BUG-10 🟢 — `strip_markdown`-এ table separator row-এ stray space

**ফাইল:** `scripts/build_index.py` — `strip_markdown()`

**সমস্যা:**
Markdown table separator (`|---|---|---|`) সরাতে regex ব্যবহার হয়, কিন্তু replacement ছিল একটা space `" "` — empty string নয়:

```python
text = re.sub(r"^\s*\|?(?:\s*:?-{3,}:?\s*\|)+...$", " ", text, flags=re.MULTILINE)
```

এতে separator row-এর জায়গায় একটা blank space থেকে যেত, যা পরে `re.sub(r"\s+", " ", text)` এর মাধ্যমে search index-এ extra whitespace হিসেবে জমা পড়ত।

**সমাধান:**
```python
text = re.sub(r"^\s*\|?(?:\s*:?-{3,}:?\s*\|)+...$", "", text, ...) # space → empty
```

---

## সংক্ষেপ

| বাগ | মাত্রা | ফাইল | প্রভাব |
|-----|--------|------|--------|
| BUG-01 | 🔴 | `index.html` CSS | মোবাইলে প্রিন্ট সম্পূর্ণ ফাঁকা আসত |
| BUG-02 | 🔴 | `sw_template.js` | পুরনো browser-এ অফলাইনে বাংলা ফন্ট ভাঙত |
| BUG-03 | 🔴 | `index.html` JS | দ্রুত ক্লিকে ভুল topic দেখাত |
| BUG-04 | 🟡 | `index.html` JS | print cancel করলে `#card` চিরতরে ভাঙত |
| BUG-05 | 🟡 | `index.html` JS | modal খুলতে পুরনো content flash করত |
| BUG-06 | 🟡 | `index.html` JS | modal বন্ধে preview overlay আটকে থাকত |
| BUG-07 | 🟡 | `index.html` JS | tag চাপলে mode tab ভুল দেখাত |
| BUG-08 | 🟡 | `index.html` JS | "ফিরুন" চাপলে sidebar highlight সরত না |
| BUG-09 | 🟢 | `index.html` JS | concurrent fetch-এ অপ্রয়োজনীয় double request |
| BUG-10 | 🟢 | `build_index.py` | search index-এ stray whitespace |

---

## ব্যাচ ২ — ২০২৬-০৮-১০ (automated regression suite)

উপরের প্রতিটা bug আগে শুধু ম্যানুয়ালি ঠিক করে ডকুমেন্ট করা হয়েছিল — কোনো automated test ছিল না যা নিশ্চিত করত ফিক্সটা লাইভ কোডে সত্যিই আছে, বা ভবিষ্যতে কোনো পরিবর্তনে সেটা আবার ভেঙে যায়নি। এই সেশনে সেই গ্যাপ বন্ধ করতে যোগ করা হলো:

- `scripts/js_tests/` — jsdom-ভিত্তিক suite, BUG-03/04/05/06/07/08/09-এর প্রতিটার জন্য একটা করে আসল প্রোডাকশন-কোড-চালিত regression test
- `scripts/test_build_index.py` — BUG-10-এর জন্য pure-Python regression test
- `scripts/verify_site.py`-তে দুটো নতুন static check — BUG-01 (print CSS) ও BUG-02 (font-face ↔ APP_SHELL) ক্লাস
- `scripts/preflight.sh` এখন push-এর আগে এগুলো স্বয়ংক্রিয়ভাবে চালায় (JS suite শুধু code ফাইল বদলালে, বাকিগুলো সবসময়)

এই যাচাইয়ের সময়েই ধরা পড়ে যে **BUG-01-এর ডকুমেন্টেড ফিক্স আসলে লাইভ কোডে ছিল না** (দেখুন BUG-01 এন্ট্রির ২০২৬-০৮-১০ আপডেট নোট) — পুনরায় বসানো হয়েছে। বাকি ৯টা bug-এর ফিক্স সরাসরি টেস্ট/সোর্স-যাচাইয়ে নিশ্চিত হয়েছে লাইভ কোডে সঠিকভাবে আছে।

---

## ব্যাচ ৩ — ২০২৬-০৮-১৪

### BUG-11 🟢 — `data-slug` attribute-এ `escapeHtml()` না থাকার অসংগতি

**ফাইল:** `docs/index.html` — `renderList()` (টপিক-তালিকার ট্যাব বাটন) ও `renderTopicContent()`-এর related-topics chip

**সমস্যা:**
কোডের ৪টা জায়গায় `data-slug="${...}"` অ্যাট্রিবিউট বসানো হয়, কিন্তু মাত্র ২টায় (ঘটনাপ্রবাহ টার্ম, ভাসমান সার্চ ফলাফল) `escapeHtml()` ব্যবহার হতো — টপিক-তালিকার ট্যাব বাটন ও "এটাও দেখো" চিপে হতো না। slug `build_index.py`-তে `SLUG_RE = ^[a-z0-9]+(-[a-z0-9]+)*$` দিয়ে কড়াকড়িভাবে যাচাই হয় বলে বর্তমানে এটা কাজে লাগানো যায় না, কিন্তু ভবিষ্যতে সেই যাচাই-নিয়ম দুর্বল/বদলালে এই দুই জায়গা দিয়ে attribute-breakout (XSS-জাতীয়) সম্ভব হতো।

**সমাধান:**
বাকি দুই জায়গার মতোই এই দুই জায়গাতেও `escapeHtml(t.slug)` / `escapeHtml(r.slug)` ব্যবহার করা হলো — কোডের সব ৪টা জায়গায় এখন একই নিয়ম। বর্তমান আচরণে কোনো দৃশ্যমান পরিবর্তন নেই (slug ইতিমধ্যেই নিরাপদ ক্যারেক্টারে সীমাবদ্ধ), শুধু ভবিষ্যতের জন্য প্রতিরোধমূলক।

**টেস্ট:** `scripts/js_tests/run.mjs` — "renderList ও related-topics chip — slug-এ থাকা বিশেষ ক্যারেক্টার attribute থেকে বের হয়ে নতুন attribute বানাতে পারা উচিত না" (একটা ইচ্ছাকৃতভাবে `"` যুক্ত slug দিয়ে সরাসরি রেন্ডার করে attribute-breakout না হওয়া নিশ্চিত করে — real slug validation বাইপাস করে ফাংশনের নিজস্ব escaping-ই যাচাই করা হয়)।

---

### BUG-12 🟡 — MCQ ট্যাব খোলা অবস্থায় প্রিন্ট করলে পুরনো টপিক + পুরো কুইজ একসাথে প্রিন্ট হতো

**ফাইল:** `docs/index.html` — `@media print` CSS

**সমস্যা:**
সাইটে ৪টা "লেআউট" আছে (browse/ghotonaprobaho/top-news/mcq), যেকোনো একটা সময়ে একটাই দৃশ্যমান থাকে। `@media print` CSS-এ `#browse-layout`-কে জোর করে `display:block !important` করা হয় (টপিক প্রিন্টের জন্য), আর `#ghotonaprobaho-layout`/`#top-news-layout`-কে `display:none !important` দিয়ে লুকানো হয় — কিন্তু **`#mcq-layout` এই লুকানোর তালিকায় ছিল না**।

ফলে ব্যবহারকারী যদি "MCQ" ট্যাবে থেকে ব্রাউজারের প্রিন্ট (Ctrl+P) চালাতেন — যেটা প্রিন্ট-বাটন ছাড়াই যেকোনো সময় সম্ভব — তাহলে `#browse-layout` (কোনো টপিক আগে দেখা থাকলে তার পুরনো কনটেন্ট, নাহলে প্লেসহোল্ডার) জোর করে দেখা যেত, **আর তার সাথে পুরো MCQ কুইজও** — কারণ `#mcq-layout` কখনো লুকানো হতো না। প্রিন্ট/PDF আউটপুট এলোমেলো ও অপ্রত্যাশিত হতো।

**সমাধান:**
`#mcq-layout`-কে `#ghotonaprobaho-layout`/`#top-news-layout`-এর সাথেই একই `display:none !important` তালিকায় যোগ করা হলো।

**টেস্ট:** `scripts/verify_site.py`-তে নতুন চেক #১০ — `@media print` ব্লকে `#mcq-layout` উল্লেখ আছে কিনা স্ট্যাটিকভাবে যাচাই করে (BUG-01-এর মতোই প্যাটার্ন)। যাচাই করা হয়েছে: ফিক্স সাময়িকভাবে উল্টে দিলে `verify_site.py` সত্যিই ব্যর্থ হয়, ফিরিয়ে আনলে পাস করে।

---

### BUG-13 🟡 — MCQ মোড থেকে অন্য টপিকে গেলে স্ক্রিন "আটকে" থাকত

**ফাইল:** `docs/index.html` — `openTopic()`

**সমস্যা:**
`openTopic()`-এর শুরুতে একটা চেক আছে — কেউ যদি "ঘটনাপ্রবাহ" বা "টপ নিউজ" মোডে থাকা অবস্থায় কোনো টপিক খোলে (যেমন hashchange দিয়ে, ব্রাউজারের ব্যাক/ফরওয়ার্ড বাটনে), তাহলে আগে `browse` মোডে ফিরিয়ে আনা হয় — নাহলে টপিকের কনটেন্ট লোড হলেও ঘটনাপ্রবাহ/টপ-নিউজের লেআউট স্ক্রিনে দেখানো থেকে যেত।

কিন্তু এই চেকে **`mcq` মোড বাদ পড়ে গিয়েছিল**। ফলে: কেউ কোনো টপিক দেখে "MCQ" ট্যাবে গেলে, তারপর ব্রাউজারের ব্যাক বাটন চাপলে (বা হ্যাশ সরাসরি বদলালে) — URL/হ্যাশ তো নতুন টপিকে বদলে যেত, কিন্তু স্ক্রিনে MCQ কুইজই দেখানো থেকে যেত, নতুন টপিক আড়ালে (`display:none`) লোড হয়ে বসে থাকত। ব্যবহারকারীর কাছে মনে হতো পেজ "আটকে" গেছে।

**সমাধান:**
চেকটা এখন `CURRENT_MODE !== 'browse'` (মানে "browse ছাড়া অন্য যেকোনো মোড") — নির্দিষ্ট নাম ধরে ধরে তালিকা করার বদলে, যাতে ভবিষ্যতে নতুন কোনো মোড যোগ হলে এই একই ভুল আবার না হয়।

**টেস্ট:** `scripts/js_tests/run.mjs` — MCQ মোডে থাকা অবস্থায় `openTopic()` কল করে `browse-layout` দৃশ্যমান হয় ও `CURRENT_MODE` `'browse'`-এ ফেরে কিনা যাচাই করে। ফিক্স উল্টালে টেস্ট সত্যিই ব্যর্থ হয়, ফিরিয়ে আনলে পাস করে — নিশ্চিত করা হয়েছে।

---

### BUG-14 🟡 — MCQ ট্যাব ছেড়ে আবার ফিরলে উত্তর দেওয়া প্রশ্নের progress হারিয়ে যেত

**ফাইল:** `docs/index.html` — `renderMcqView()`, `handleMcqOptionClick()`

**সমস্যা:**
`setMode('mcq')` MCQ ট্যাবে ঢোকার প্রতিবারই `renderMcqView()` কল করে, যেটা `card.innerHTML = html` দিয়ে পুরো DOM নতুন করে বানায় (প্রতিটা প্রশ্নের `data-answered` ফ্রেশ `"0"`-এ রিসেট হয়ে)। কিন্তু ব্যবহারকারী কোন প্রশ্নে কোন অপশনে ক্লিক করেছিলেন তা কোথাও (variable/storage) মনে রাখা হতো না। ফলে: ব্যবহারকারী কয়েকটা প্রশ্নের উত্তর দেওয়ার পর অন্য কোনো ট্যাবে (যেমন "সকল টপিক") গিয়ে আবার "MCQ"-তে ফিরলেই — সব বাটন আবার enabled, সবুজ/লাল ফিডব্যাক উধাও, প্রশ্নগুলো আবার "উত্তর-না-দেওয়া" অবস্থায় দেখাত। দীর্ঘ কুইজে (৫০+ প্রশ্ন) এটা বিরক্তিকর — সামান্য ট্যাব-স্যুইচেই আগের অগ্রগতি পুরোপুরি মুছে যেত।

**সমাধান:**
একটা নতুন module-level state `MCQ_ANSWERED` (key: `` `${set.label}||${q.number}` ``, value: ক্লিক করা option-এর index) যোগ করা হলো। প্রতিটা প্রশ্নের DOM-এ এই key-টা `data-mcq-key` অ্যাট্রিবিউট হিসেবে বসানো হয়। `handleMcqOptionClick()` উত্তর দেওয়ার সময় `MCQ_ANSWERED`-এ লিখে রাখে; `renderMcqView()` প্রতিটা প্রশ্নের event-listener বসানোর ঠিক পরপরই `MCQ_ANSWERED`-এ সেই প্রশ্নের key খুঁজে দেখে — পাওয়া গেলে `handleMcqOptionClick()`-ই আবার কল করে (কোড পুনর্ব্যবহার করে) আগের সঠিক/ভুল অবস্থা তৎক্ষণাৎ ফিরিয়ে আনে।

**টেস্ট:** `scripts/js_tests/run.mjs` — একটা প্রশ্নে ক্লিক করে `renderMcqView()` আবার কল করে (ট্যাব-স্যুইচ সিমুলেট করতে) `data-answered`, বাটন `disabled`, ও সঠিক/ভুল CSS ক্লাস এখনো ঠিক আছে কিনা যাচাই করে। ফিক্স উল্টালে টেস্ট সত্যিই ব্যর্থ হয় (`data-answered` রিসেট হয়ে যায়), ফিরিয়ে আনলে পাস করে — নিশ্চিত করা হয়েছে।

---

### BUG-15 🟡 — একই টপিক মূল কার্ড ও মডালে একসাথে থাকলে মডালের অ্যাকশন-বাটন কাজ করত না

**ফাইল:** `docs/index.html` — `renderTopicContent()`

**সমস্যা:**
`renderTopicContent()` টপিকের "🖨️ প্রিন্ট", "🔗 লিংক কপি", "⬜ পড়া হয়েছে?", "☆ প্রিয়" — এই ৪টা বাটনে event listener বাঁধতে `document.getElementById(`mark-read-btn-${topic.slug}`)`-এর মতো id-ভিত্তিক লুকআপ ব্যবহার করত, `container`-স্কোপড কোনো lookup নয়। এই ফাংশনটাই দুই জায়গায় ব্যবহার হয় — মূল কার্ড (`#card`, `openTopic()`) এবং ভাসমান সার্চের মডাল (`#topic-modal-body`, `openTopicInModal()`)। কোনো টপিক মূল কার্ডে খোলা অবস্থায় (অন্য মোডে সুইচ করলেও `#card`-এর content DOM-এ থেকেই যায়, শুধু hidden হয়) ব্যবহারকারী ভাসমান সার্চ দিয়ে ঠিক সেই একই টপিকটাই মডালেও খুললে, `mark-read-btn-{slug}` (ও বাকি ৩টা) id-যুক্ত এলিমেন্ট DOM-এ দুইবার তৈরি হতো। `document.getElementById()` সবসময় ডকুমেন্টে **প্রথম** মিলে যাওয়া এলিমেন্টই ফেরত দেয় — যেহেতু HTML-এ `#card` সবসময় `#topic-modal-body`-এর আগে আসে, মডালের জন্য `renderTopicContent()` কল হলেও listener ভুল করে `#card`-এর (screen-এ hidden, background-এ থাকা) বাটনে গিয়ে বাঁধা পড়ত। ফলে ব্যবহারকারী মডালে যে বাটনটা আসলে দেখছেন ও ক্লিক করছেন, তাতে ক্লিক করলে কিছুই হতো না (পড়া/বুকমার্ক মার্ক হতো না, প্রিন্ট/কপি কাজ করত না) — কোনো error/কনসোল সতর্কতা ছাড়াই চুপচাপ ব্যর্থ হতো।

**সমাধান:**
৪টা `document.getElementById(...)` কল বদলে `container.querySelector('#...')` করা হলো, যাতে ঠিক সেই নির্দিষ্ট `renderTopicContent()`-কলের নিজস্ব `container`-এর ভেতরের এলিমেন্টটাই নিশ্চিতভাবে বাছাই হয় — DOM-এ অন্য কোথাও একই id থাকলেও প্রভাবিত হয় না।

**টেস্ট:** `scripts/js_tests/run.mjs` — একই টপিক আগে `#card`-এ (`renderTopicContent()` সরাসরি) তারপর `openTopicInModal()` দিয়ে `#topic-modal-body`-তে রেন্ডার করে, মডালের নিজস্ব "পড়া হয়েছে" বাটনে ক্লিক করে `isRead()` `true` হয় কিনা যাচাই করে। ফিক্স উল্টে (`container.querySelector` কে আবার `document.getElementById` করে) দেখা গেছে টেস্ট সত্যিই ব্যর্থ হয় (মডালের বাটনে ক্লিকের কোনো প্রভাব পড়ে না), ফিক্স ফিরিয়ে আনলে পাস করে — নিশ্চিত করা হয়েছে।

---

### BUG-16 🟡 — বুকমার্ক ফিল্টার চালু অবস্থায় সার্চ করলে বিভ্রান্তিকর "পাওয়া যায়নি"/উইকিপিডিয়া fallback দেখাত

**ফাইল:** `docs/index.html` — `renderList()`

**সমস্যা:**
আগের একটা ফিক্সে (BUG-1x শ্রেণির) `renderList()`-এ যোগ করা হয়েছিল: বুকমার্ক ফিল্টার (⭐ শুধু প্রিয়) চালু অবস্থায় কোনো সার্চ-কোয়েরি ছাড়া তালিকা খালি হলে ("এখনো কোনো টপিক ⭐ প্রিয় হিসেবে যোগ করা হয়নি" বার্তা দেখানো), যাতে উইকিপিডিয়া fallback-এর ভুল বার্তা না দেখায়। কিন্তু এই ফিক্স শুধু **সার্চ-কোয়েরি খালি থাকার** ক্ষেত্রটাই সামলেছিল — বুকমার্ক ফিল্টার চালু রেখে যদি ব্যবহারকারী এমন কিছু সার্চ করেন যা সাইটে সত্যিই আছে কিন্তু বুকমার্ক করা নেই, তাহলে বুকমার্ক-ফিল্টার করা তালিকা খালি আসত, আর কোডটা `if(q)` শাখায় পড়ে গিয়ে হয় ভুল উইকিপিডিয়া আর্টিকেল দেখাত, অথবা "কোনো টপিক পাওয়া যায়নি" দেখাত — যেটা আসলে ভুল তথ্য, কারণ টপিকটা সাইটেই আছে, শুধু বুকমার্ক-ফিল্টারে বাদ পড়ে গেছে। ব্যবহারকারী বিভ্রান্ত হতে পারতেন — মনে করতে পারতেন সাইটে ওই বিষয়ে কিছু নেই, অথচ শুধু ⭐ ফিল্টার বন্ধ করলেই টপিকটা দেখা যেত।

**সমাধান:**
তালিকা খালি হলে, `BOOKMARK_FILTER_ACTIVE && currentFiltered(q).length > 0` (অর্থাৎ বুকমার্ক-ফিল্টার বাদ দিয়ে চেক করলে আসলে ম্যাচ আছে) — এই শর্তটা এখন সার্চ-কোয়েরি খালি থাকা/না-থাকা দুই ক্ষেত্রেই আলাদাভাবে চেক করা হয়, এবং তখন স্পষ্ট বার্তা দেখানো হয়: "প্রিয় তালিকায় এই সার্চের সাথে মেলে এমন কোনো টপিক নেই।" শুধু তখনই আসল উইকিপিডিয়া fallback দেখানো হয় যখন টপিকটা বুকমার্ক-ফিল্টার বাদ দিয়েও সাইটে কোথাও নেই।

**টেস্ট:** `scripts/js_tests/run.mjs` — দুটো টপিক (একটা বুকমার্ক করা, অন্যটা না) সেটআপ করে, বুকমার্ক ফিল্টার চালু করে বুকমার্ক-না-করা টপিকের সাথে মেলে এমন কিছু সার্চ করে যাচাই করে যে ফলাফলে "কোনো টপিক পাওয়া যায়নি"/"উইকিপিডিয়া" শব্দ না থাকে। ফিক্স উল্টালে টেস্ট সত্যিই ব্যর্থ হয় (ভুল বার্তা দেখা যায়), ফিরিয়ে আনলে পাস করে — নিশ্চিত করা হয়েছে।

---

### BUG-17 🟡 — MCQ পার্সারে সেকশন-জুড়ে শেয়ার্ড question_lookup, প্রশ্ন-নাম্বার ওভারল্যাপ করলে সাইলেন্ট ডেটা-লস ঝুঁকি

**ফাইল:** `scripts/build_index.py` — `parse_mcq_file()`

**সমস্যা:**
`parse_mcq_file()`-এ `question_lookup` একটা **একক dict** ছিল, পুরো MCQ ফাইল জুড়ে শেয়ার্ড (সব "## বিভাগ"-এর প্রশ্ন একই dict-এ, শুধু `q["number"]` দিয়ে key করা)। বাস্তব ফাইলে (`docs/mcq/2026-07.md`) প্রতিটা বিভাগের ঠিক পরপরই তার নিজের "**উত্তর:**" লাইন থাকে বলে সমস্যাটা এখনো প্রকাশ পায়নি (উত্তর-কী পরের বিভাগ শুরু হওয়ার আগেই মিলে যায়)। কিন্তু `MCQ_GUIDE.md`-এ স্পষ্ট নির্দেশ আছে মূল ম্যাগাজিনের গঠন "প্রায় হুবহু" সংরক্ষণ করতে — আর বাংলাদেশের ম্যাগাজিন/পত্রিকায় MCQ উত্তর-কী **ফাইলের শেষে একসাথে (consolidated)** দেওয়াও একটা প্রচলিত রীতি। এই রকম কোনো সংখ্যা ভবিষ্যতে যোগ হলে — যদি দুটো ভিন্ন বিভাগে প্রশ্ন-নাম্বার ওভারল্যাপ করে (যেমন দুটোই "১" থেকে শুরু, বাস্তবেও বেশ সাধারণ একটা exam-formatting রীতি) — তাহলে শেয়ার্ড dict-এ পরের বিভাগের প্রশ্ন আগেরটার entry নীরবে overwrite করে দিত। ফলাফল: আগের বিভাগের প্রশ্নে কখনো উত্তর-কী না মিলে (`answer_index` চিরকাল `None` থেকে যেত) গোটা বিভাগটাই বিল্ড আউটপুট থেকে **নীরবে হারিয়ে যেত** — কোনো error/warning ছাড়াই। এটা educational quiz app-এর জন্য বিশেষভাবে গুরুত্বপূর্ণ, কারণ silent হারিয়ে যাওয়া/ভুল উত্তর একজন প্রকৃত পরীক্ষার্থীকে ভুল তথ্য শেখাতে পারত।

**সমাধান:**
প্রতিটা প্রশ্ন-নাম্বারের জন্য এখন একটা FIFO queue (`pending_by_number`) রাখা হয় — একই নাম্বারের একাধিক প্রশ্ন থাকলে সবগুলোই। উত্তর-কী লাইনে কোনো নাম্বার মিললে সেটা সবচেয়ে **পুরনো (এখনো-অসমাধিত)** প্রশ্নটাতে বসে (`queue.pop(0)`), ফাইলে যে ক্রমে প্রশ্ন এসেছে সেই ক্রম মেনে। এতে বিভাগ-ভিত্তিক ইন্টারলিভড উত্তর-কী (বর্তমান কনভেনশন) এবং ফাইল-শেষে-consolidated উত্তর-কী (সম্ভাব্য ভবিষ্যৎ কনভেনশন) — দুটোতেই সঠিকভাবে কাজ করে।

**যাচাই:** বাস্তব ডেটায় (`docs/mcq/2026-07.md`) ফিক্সের আগে ও পরে `python3 scripts/build_index.py` চালিয়ে `docs/mcq-index.json`-এর SHA-256 hash হুবহু মিলিয়ে দেখা হয়েছে (`2e34b5d8...923328ef`) — অর্থাৎ বর্তমান কোনো ডেটায় এই ফিক্সের কোনো প্রভাব নেই, শুধু ভবিষ্যতের ঝুঁকি ঠেকাচ্ছে। `scripts/test_build_index.py` — একই নাম্বারিং-এ দুটো বিভাগ + ফাইলের শেষে দুটো consolidated উত্তর-কী ব্লক দিয়ে টেস্ট করে যাচাই করা হয়েছে যে দুটো বিভাগই টিকে থাকে ও সঠিক উত্তর পায়। ফিক্স উল্টালে টেস্ট সত্যিই ব্যর্থ হয় (প্রথম বিভাগ হারিয়ে যায়), ফিরিয়ে আনলে পাস করে — নিশ্চিত করা হয়েছে।

---

### BUG-18 🟡 — `session_status.sh` GitHub API rate-limit/এরর হলে cryptic Python exception দেখাত, প্রকৃত কারণ বোঝা যেত না

**ফাইল:** `scripts/session_status.sh` — branch/PR তালিকার ৪টা python ব্লক

**সমস্যা:**
`GH_TOKEN` env var সেট না থাকলে (বা মেয়াদোত্তীর্ণ/rate-limited) GitHub API একটা dict রেসপন্স দেয় (`{"message": "API rate limit exceeded..."}`), লিস্ট না। স্ক্রিপ্টের python কোড ধরেই নিত রেসপন্স সবসময় একটা list — dict পেলে `for b in data` dict-এর key (string)-এর উপর iterate করত, তারপর `b.get(...)` কল করলে `'str' object has no attribute 'get'` (বা অনুরূপ `TypeError`) — যেটা আসল কারণ (rate limit/auth সমস্যা) সম্পূর্ণ আড়াল করে ফেলত। এতে মনে হতো স্ক্রিপ্টে বাগ আছে, অথচ আসল সমস্যা ছিল token না থাকা। এছাড়া, `~/.bashrc`-এ `export GH_TOKEN=...` করে রাখলেও এই sandbox-এ **non-interactive shell প্রতিটা `bash_tool` কল আলাদা প্রসেস, `.bashrc` auto-source হয় না** — তাই "সেশন জুড়ে টোকেন ব্যবহার করুন" নির্দেশনা মানতে গেলে প্রতিটা কমান্ডেই টোকেন ইনলাইন দিতে হয়, নাহলে এই সমস্যাটা বারবার ঘটবে।

**সমাধান:**
প্রতিটা python ব্লকে `json.load()`-এর পরপরই চেক যোগ করা হয়েছে — `isinstance(data, dict) and 'message' in data` হলে (অর্থাৎ API সফল list-এর বদলে error dict দিয়েছে) স্পষ্ট বাংলা বার্তা দেখানো হয় (`GitHub API এরর: <আসল বার্তা>`), rate-limit-জাতীয় এরর হলে অতিরিক্ত হিন্ট দেয় (টোকেন এই শেলে সেট নেই/মেয়াদোত্তীর্ণ, `.bashrc`-নির্ভরতার সীমাবদ্ধতা মনে করিয়ে দেয়), তারপর `SystemExit(0)` দিয়ে পরিষ্কারভাবে থামে (bash-এর বাকি অংশ চলতে থাকে)।

**যাচাই:** token ছাড়া (unauthenticated, rate-limited অবস্থা reproduce করে) ও token-সহ — দুই অবস্থাতেই চালিয়ে যাচাই করা হয়েছে: token ছাড়া স্পষ্ট বাংলা এরর-বার্তা দেখায় (আগে যেটা cryptic exception দেখাত), token-সহ স্বাভাবিক branch/PR তালিকা ঠিকভাবে দেখায়। কোনো automated regression test যোগ করা হয়নি — এই স্ক্রিপ্ট লাইভ GitHub API-এর উপর নির্ভরশীল, deterministic mock ছাড়া automated test তৈরি করা এই মুহূর্তে অপ্রয়োজনীয় জটিলতা যোগ করত; ভবিষ্যতে কেউ এই ৪টা ব্লক থেকে error-handling সরিয়ে ফেললে ম্যানুয়ালি token ছাড়া চালিয়ে পুনরায় যাচাই করা যাবে।

---

### BUG-19 🟡 — `preflight.sh`/`build_index.py` চালানোর পর `git add -A` করলে auto-generated ফাইল বারবার ভুলবশত স্টেজড হওয়ার ঝুঁকি

**সমস্যা:**
`preflight.sh` (বা সরাসরি `build_index.py`) চালালে `docs/topics-index.json`, `docs/sitemap.xml`, `docs/topic/*/index.html` ইত্যাদি auto-generated ফাইল working tree-তে পরিবর্তিত/নতুন হয়ে যায় (এটা প্রত্যাশিত — build script-এর স্বাভাবিক আউটপুট)। কিন্তু এরপর `git add -A` করলে এই ফাইলগুলো ভুলবশত স্টেজড হয়ে যায়, যা `pr_checks.py`-এর `GENERATED_PREFIXES` নীতি লঙ্ঘন করে (এই ফাইল কোনো session PR-এ থাকার কথা না)। একটা সেশনে বারবার (৫+ বার) হাতে `git reset`/`git checkout --`/`rm -rf` দিয়ে এগুলো বাদ দিতে হয়েছে — কোনোবার ভুলে commit হয়ে যায়নি, কিন্তু এটা একটা repetitive, মানুষের-মনোযোগ-নির্ভর ঝুঁকি ছিল যেটা ভবিষ্যতে যেকোনো সময় ভুলে commit হয়ে যেতে পারত।

**সমাধান:**
`scripts/safe_add.sh` — `git add -A`-এর বদলে ব্যবহারের জন্য নতুন script। `pr_checks.py`-এর `GENERATED_PREFIXES` তালিকা (import না করে, শুধু regex+`ast.literal_eval` দিয়ে টেক্সট থেকে parse করে — কারণ `pr_checks.py` import করলে module-level-এ `GITHUB_TOKEN` env var পড়ার চেষ্টা করে ক্র্যাশ করে) ব্যবহার করে স্টেজড ফাইল থেকে এই প্যাটার্নের সাথে মিলে যাওয়া সব বাদ দেয়: আগে থেকে ট্র্যাকড ফাইল হলে `git checkout --` দিয়ে HEAD-এর অবস্থায় ফেরায়, নতুন (untracked) ফাইল হলে ডিস্ক থেকে মুছে দেয়। একটামাত্র উৎস (`GENERATED_PREFIXES`) থেকে তালিকা নেওয়ায় দুই জায়গায় ড্রিফটের ঝুঁকি নেই। `PR_GUIDE.md`-এর ধাপ ১-এ `git add -A`-এর জায়গায় এই script ব্যবহারের নির্দেশনা দেওয়া হয়েছে।

**যাচাই:** কৃত্রিমভাবে `docs/sitemap.xml` পরিবর্তন করে, একটা fake `docs/topic/test-fake-slug/index.html` ও একটা আসল `docs/topics/test-real-file.md` তৈরি করে script চালানো হয়েছে — ফলাফল: `sitemap.xml` HEAD-এর অবস্থায় ফিরে গেছে, fake generated ফোল্ডার মুছে গেছে, কিন্তু আসল সোর্স ফাইল ঠিকই স্টেজড থেকেছে। কোনো automated regression test যোগ করা হয়নি (git working-tree state manipulation-নির্ভর, মূল build/content test-স্যুটের বাইরে) — future পরিবর্তনে হাতে একই টেস্ট-দৃশ্য পুনরায় চালিয়ে যাচাই করা যাবে।

---

### BUG-20 🟠 — `safe_add.sh`-এই (BUG-19-এর fix) rename-detection gap: generated ফাইল rename হলে পুরনো পাথ বাদ পড়ত না

**সমস্যা:**
BUG-19-এর ফিক্স মার্জ হওয়ার পরপরই নিজে থেকে আরও কঠিন দৃশ্য দিয়ে টেস্ট করার সময় ধরা পড়ে — `git diff --cached --name-only` কোনো rename-কে (git স্বয়ংক্রিয়ভাবে সাদৃশ্যপূর্ণ কনটেন্ট rename হিসেবে ধরে) শুধু **নতুন পাথ** হিসেবে দেখায়, পুরনো পাথ আলাদাভাবে দেখায় না (যদিও index-এ পুরনো পাথ deleted হিসেবে staged-ই থাকে)। ফলে generated ফোল্ডার rename/পুনর্বিন্যাস হলে (যেমন `docs/topic/<old-slug>/` থেকে `docs/topic/<new-slug>/`) নতুন পাথ ঠিকভাবে বাদ পড়ত, কিন্তু পুরনো পাথ script-এর exclusion-তালিকায় ধরা পড়ত না — `git status`-এ `D docs/topic/<old-slug>/index.html` staged অবস্থায় থেকে যেত, যা commit হয়ে গেলে generated ফাইল ভুলবশত delete-সহ commit হয়ে যেত (ঠিক যে সমস্যাটা BUG-19 সমাধান করার কথা ছিল)।

**সমাধান:**
`git diff --cached --name-only` কমান্ডে `--no-renames` ফ্ল্যাগ যোগ করা হলো — এতে git rename-detection সম্পূর্ণ বন্ধ থাকে, প্রতিটা rename সবসময় আলাদা delete+add লাইন হিসেবে দেখায়, দুটো পাথই independently প্রিফিক্স-ম্যাচ করে exclusion-তালিকায় ধরা পড়ে।

**যাচাই:** `docs/topic/abiskar-ac/` কপি করে `docs/topic/abiskar-ac-renamed/`-এ রেখে মূলটা মুছে rename simulate করা হয়েছে (git-ই স্বয়ংক্রিয়ভাবে এটাকে R100 rename ধরেছিল, নিশ্চিত করে)। ফিক্সের আগে: পুরনো পাথ `D` হিসেবে staged থেকে যেত। ফিক্সের পরে: দুটো পাথই (পুরনো ও নতুন) বাদ পড়ে, `git checkout -- docs/topic/abiskar-ac/index.html`-এর কনটেন্ট HEAD-এর সাথে বাইট-বাই-বাইট মিলিয়ে নিশ্চিত করা হয়েছে।

---

### BUG-21 🟠 — `safe_add.sh` ব্যর্থ হলে (parsing crash) `git add -A`-এর staged অবস্থা থেকেই যেত

**সমস্যা:**
BUG-20 ফিক্স করার পর নিজে থেকে "ব্যর্থতার দৃশ্যে কী হয়" পরীক্ষা করতে গিয়ে ধরা পড়ে — script-এ `git add -A` সবার আগে (কোনো শর্ত ছাড়াই) চলত, তারপর `GENERATED_PREFIXES` regex-parsing হতো। `scripts/pr_checks.py`-এ কখনো `GENERATED_PREFIXES` লিস্টের ফরম্যাট বদলে গেলে (যেমন ভ্যারিয়েবল-নাম বদল, বা multi-line বাদে অন্য স্টাইলে লেখা) regex ম্যাচ ব্যর্থ হয়ে python ক্র্যাশ করত। `set -e` script থামিয়ে দিত ঠিকই (নীরব থাকত না), কিন্তু ততক্ষণে `git add -A`-এ staged হয়ে যাওয়া সব ফাইল (generated ফাইল-সহ) staged অবস্থাতেই থেকে যেত — অর্থাৎ script ব্যর্থ হলেও ঠিক যে ঝুঁকি এড়াতে চেয়েছিল (generated ফাইল ভুলবশত commit), সেই ঝুঁকিপূর্ণ অবস্থাতেই ব্যবহারকারীকে রেখে যেত। কেউ error message না দেখে সরাসরি `git commit` চালালে generated ফাইল commit হয়ে যেতে পারত।

**সমাধান:**
`trap ... ERR` যোগ করা হলো, যা script-এর যেকোনো ধাপ ব্যর্থ হলে স্বয়ংক্রিয়ভাবে `git reset` চালিয়ে সব staged পরিবর্তন unstage করে দেয় ও স্পষ্ট বাংলা বার্তা দেখায় ("safe_add.sh ব্যর্থ হয়েছে — নিরাপত্তার জন্য সব স্টেজড পরিবর্তন unstage করা হলো")। সফলভাবে শেষ হলে trap নিষ্ক্রিয় করে দেওয়া হয়, যাতে স্বাভাবিক exit-এ ভুলভাবে ফায়ার না করে।

**যাচাই:** দুটো দৃশ্যেই টেস্ট করা হয়েছে — (১) স্বাভাবিক সফল রান: trap ভুলবশত ফায়ার করেনি, শুধু আসল পরিবর্তন staged থেকেছে। (২) `pr_checks.py`-এর `GENERATED_PREFIXES` ভ্যারিয়েবল-নাম কৃত্রিমভাবে বদলে regex ব্যর্থ করে দেখা হয়েছে — ফিক্সের আগে: generated ফাইল staged-ই থেকে যেত। ফিক্সের পরে: script exit code 1 দিয়ে থামে, স্পষ্ট বার্তা দেয়, এবং `git status --porcelain` নিশ্চিত করে যে সবকিছু (generated ও আসল উভয় ফাইল) unstage হয়ে গেছে — নিরাপদ অবস্থায় ফিরে যায়।

---

### BUG-22 🟡 — স্টাডি টাইমার: ট্যাব hidden/বন্ধ থাকা সময়টুকুও "পড়ার সময়" হিসেবে যোগ হয়ে যেত

**ফাইল:** `docs/index.html` — `initStudyTimer()`-এর `currentElapsedMs()`/state-ম্যানেজমেন্ট

**সমস্যা:**
স্টাডি টাইমার চালু অবস্থায় `state = { elapsedMs, running: true, startedAt: <timestamp> }` সেভ থাকে, আর `currentElapsedMs()` সবসময় `elapsedMs + (Date.now() - startedAt)` হিসাব করত — `startedAt`-এর পর থেকে এখন পর্যন্ত পুরো wall-clock ব্যবধানটাই "পড়ার সময়" ধরে নিয়ে। কিন্তু টাইমার running রেখে ব্যবহারকারী ট্যাব সুইচ করলে, ব্রাউজার/ট্যাব বন্ধ করলে, বা ল্যাপটপ ঘুমিয়ে পড়লে — কোনো explicit "pause" ইভেন্ট আসত না। ফলে পরে ফিরে এসে দেখা যেত, ট্যাব বন্ধ/hidden থাকা পুরো সময়টাই (কয়েক মিনিট থেকে কয়েক দিনও হতে পারে) নিঃশব্দে "পড়ার সময়" হিসেবে যোগ হয়ে গেছে — যা এই ফিচারের মূল উদ্দেশ্যকেই (একজন শিক্ষার্থী সত্যিকার কতক্ষণ পড়েছে তা মাপা) ভুল তথ্য দিয়ে ব্যর্থ করে দেয়।

**সমাধান:**
`document`-এ একটা `visibilitychange` লিসেনার যোগ করা হলো: ট্যাব `hidden` হলে (এবং টাইমার running থাকলে) `elapsedMs` ফ্রিজ করে `startedAt = null` বসানো হয় (মূল toggle-বাটনের "pause" ক্লিকের মতোই একই state-invariant পুনর্ব্যবহার করে — নতুন কোনো state-field লাগেনি); আবার visible হলে `startedAt = Date.now()` বসিয়ে ফের গোনা শুরু হয়। `unload`/`beforeunload`-এর বদলে `visibilitychange` বেছে নেওয়া হয়েছে কারণ এটা ট্যাব বন্ধ হওয়ার আগেও নির্ভরযোগ্যভাবে fire করে (mobile/bfcache-এও, যেখানে unload প্রায়ই মিস হয়ে যায়)। পেজ লোডের সময় (যেখানে ট্যাব প্রথমেই visible থাকায় `visibilitychange` fire হয় না) আগের সেশনে hidden-এ ফ্রিজ হয়ে থাকা running টাইমারকে সরাসরি resume করার একটা init-time guard-ও যোগ করা হয়েছে, নাহলে UI "চলছে" দেখালেও সংখ্যাটা ইউজার টগল না করা পর্যন্ত স্থবির থেকে যেত।

**স্কোপ/সীমাবদ্ধতা:** এই ফিক্স আজ থেকে-সামনের (going-forward) আচরণ ঠিক করে। এই ফিক্স আসার *আগে* থেকে কোনো ব্যবহারকারীর ব্রাউজারে যদি ইতিমধ্যে `running:true` ও পুরনো real `startedAt`-সহ corrupted state সেভ হয়ে থাকে (অর্থাৎ ঠিক এই বাগেই আক্রান্ত অবস্থায় আটকে আছে), তাহলে পরের এক-বার লোডে সেই পুরনো ফাঁকটুকু এখনো একবার যোগ হয়ে যাবে — এরপর থেকে ঠিকভাবে কাজ করবে। ইচ্ছাকৃতভাবে migration/clamp-ভিত্তিক ফিক্স যোগ করা হয়নি, কারণ elapsed-এর ম্যাগনিচিউড দিয়ে "বৈধ দীর্ঘ visible সেশন" বনাম "hidden/বন্ধ ফাঁক" আলাদা করার কোনো নির্ভরযোগ্য উপায় নেই (একটানা ট্যাব খোলা রেখে সত্যিই কয়েক ঘণ্টা পড়াও সম্পূর্ণ বৈধ)।

**যাচাই:** `scripts/js_tests/run.mjs`-এ automated regression test যোগ করা হয়েছে — টাইমার চালু করে, `document.hidden`/`visibilityState` কৃত্রিমভাবে বদলে `visibilitychange` dispatch করে hidden সিমুলেট করা হয়, hidden অবস্থায় ৩০০ms বাস্তব সময় অপেক্ষা করে `elapsedMs` অপরিবর্তিত থাকা নিশ্চিত করা হয়, তারপর visible করে মাত্র ৩০ms পরে থামিয়ে দেখা হয় শুধু সেই ৩০ms-ই যোগ হয়েছে (hidden-এর ৩০০ms না)। ফিক্স সাময়িকভাবে উল্টিয়ে (visibilitychange ব্লক ও init guard সরিয়ে) নিশ্চিত করা হয়েছে যে টেস্টটা তখন প্রকৃতপক্ষেই fail করে ("startedAt null হয়নি" বার্তা দিয়ে), আর ফিরিয়ে আনলে ১৪/১৪ pass করে।

---

### BUG-23 🟢 — sitemap.xml-এ প্রতিটা টপিকের `lastmod` সবসময় "আজকের তারিখ" বসত, আসল কনটেন্ট বদল না দেখেই

**ফাইল:** `scripts/build_index.py` — `generate_sitemap_and_robots()`

**সমস্যা:**
প্রতিটা URL-এর `<lastmod>` ট্যাগে হার্ডকোড করা `datetime.date.today()` বসত — সেই নির্দিষ্ট টপিকের কনটেন্ট আসলে বদলেছে কিনা তা বিবেচনা না করেই। ফলে monthly কনটেন্ট আপডেটে মাত্র কয়েকটা টপিক বদলালেও, `preflight.sh`/`build_index.py` চলার সাথে সাথে সব ৮৯টা URL-এর lastmod "আজ" হয়ে যেত। এতে সার্চ ইঞ্জিনের কাছে lastmod সিগন্যালটা কার্যত অর্থহীন হয়ে যায় (কোন পাতা সত্যিই বদলেছে তা বোঝার কোনো উপায় থাকে না, ফলে crawl-priority ভুল হতে পারে বা সিগন্যালটাই ইগনোর হয়ে যেতে পারে)। সাইট ভাঙে না, কোনো ব্যবহারকারী সরাসরি দেখেন না — তাই severity কম (🟢), কিন্তু নিঃশব্দে ঘটতে থাকা একটা প্রকৃত ডেটা-নির্ভুলতার সমস্যা।

**সমাধান:**
এখন প্রতিটা টপিক-URL তার নিজের frontmatter-এর `last_updated` (যা `validate_topic()`-এ আগেই YYYY-MM/YYYY-MM-DD ফরম্যাটে বাধ্যতামূলকভাবে যাচাই করা হয়) ব্যবহার করে, `entries`-এ না পাওয়া গেলে fallback হিসেবে আজকের তারিখ। মাস-নির্ভুলতার (YYYY-MM) মানই সরাসরি রাখা হয়েছে, একটা কাল্পনিক দিন (যেমন `-01`) জুড়ে দেওয়া হয়নি — কারণ সেটা মিথ্যা নির্ভুলতা তৈরি করত (আমরা জানি না ঠিক কোন দিনে আপডেট হয়েছিল)। sitemap প্রোটোকল আংশিক তারিখ (YYYY-MM) বৈধ হিসেবে গ্রহণ করে। হোমপেজের (`/`) lastmod ইচ্ছাকৃতভাবে আজকের তারিখেই রাখা হয়েছে — এটা কোনো একক টপিকের প্রতিনিধি না, পুরো সাইট-শেলের, তাই কোনো একটা টপিকের `last_updated`-এর সাথে বাঁধার স্বাভাবিক ভিত্তি নেই।

**যাচাই:** `scripts/test_build_index.py`-এ regression test যোগ করা হয়েছে — `SITEMAP_OUTPUT`/`ROBOTS_OUTPUT` সাময়িকভাবে একটা temp path-এ monkey-patch করে (আসল `docs/sitemap.xml` স্পর্শ না করে) পুরনো `last_updated: 2020-01` সহ একটা fake entry দিয়ে `generate_sitemap_and_robots()` কল করা হয় ও নিশ্চিত করা হয় যে সেই টপিকের URL ব্লকে `2020-01` আছে, আজকের তারিখ নেই। ফিক্স সাময়িকভাবে উল্টিয়ে (lastmod-এ আবার হার্ডকোড `today` বসিয়ে) নিশ্চিত করা হয়েছে টেস্টটা তখন সত্যিই fail করে, ফিরিয়ে আনলে ৪/৪ pass করে। বাস্তব ডেটায় (`python3 scripts/build_index.py`) আগে-পরে চালিয়ে ম্যানুয়ালিও দেখা গেছে — নতুন যোগ হওয়া `tanchangya` টপিকের (last_updated: 2026-03) lastmod এখন সঠিকভাবে `2026-03` দেখাচ্ছে, আজকের তারিখ (2026-08-29) না।

---

### BUG-24 🟢 — MCQ: একই সেটের দুই ভিন্ন সেকশনে একই প্রশ্ন-নম্বর হলে answered-state ওভারল্যাপ করত (latent, বর্তমান ডেটায় এখনো ট্রিগার হয়নি)

**ফাইল:** `docs/index.html` — `renderMcqView()`-এর `mcqKey` গণনা

**সমস্যা:**
BUG-14 ফিক্সের পর থেকে `MCQ_ANSWERED`-এ প্রতিটা প্রশ্নের উত্তর মনে রাখতে `mcqKey = \`${set.label}||${q.number}\`` ব্যবহার হতো — সেকশনের নাম বাদ দিয়ে। একটা MCQ সেটের ভেতর যদি দুটো ভিন্ন সেকশনে (যেমন "বাংলাদেশ" ও "আন্তর্জাতিক") প্রশ্ন-নম্বর রিস্টার্ট হয় (দুটোতেই "১", "২"...) — যা অনেক ম্যাগাজিন/কুইজ প্রকাশনায় প্রচলিত একটা নম্বরিং কনভেনশন, MCQ_GUIDE.md-ও ম্যাগাজিনের গঠন "প্রায় হুবহু" রাখতে বলে — তাহলে দুই ভিন্ন সেকশনের একই-নম্বর প্রশ্ন একই `mcqKey` পেয়ে যেত। এক সেকশনে উত্তর দিলে অন্য সেকশনের (সম্পূর্ণ ভিন্ন প্রশ্ন, ভিন্ন সঠিক-উত্তর) একই-নম্বর প্রশ্নটা পরের রি-রেন্ডারে না-ছুঁয়েই ভুল ইনডেক্স নিয়ে "উত্তর দেওয়া হয়ে গেছে" দেখাত, ইউজার সেটা আর ঠিকভাবে উত্তর দিতেই পারত না। **বর্তমানে প্রসেস করা দুটো MCQ সেটেই (2026-08, 2026-03) প্রশ্ন-নম্বর পুরো সেট জুড়ে ধারাবাহিক থাকায় এটা এখনো সাইটে বাস্তবে ঘটেনি** — কিন্তু কোনো ভবিষ্যৎ সংখ্যায় সেকশন-ভিত্তিক নম্বরিং এলে Python পার্সার সেই প্রশ্নগুলো সম্পূর্ণ সঠিকভাবেই পার্স করবে (কোনো এরর/সতর্কতা ছাড়াই), তাই বাগটা কোনো build-time সংকেত ছাড়াই সরাসরি লাইভ সাইটে গিয়ে ধরা পড়ত।

**সমাধান:**
`mcqKey`-তে `section.name`-ও যোগ করা হলো (`\`${set.label}||${section.name}||${q.number}\``) — `ensure_section()`-এর কারণে একটা সেটের ভেতর সেকশনের নাম এমনিতেই ইউনিক (একই নামের দুটো "## বিভাগ" থাকলে দ্বিতীয়টা প্রথমটাতেই মার্জ হয়ে যায়), তাই এই key এখন যেকোনো নম্বরিং-কনভেনশনেই নিশ্চিতভাবে ইউনিক।

**যাচাই:** `scripts/js_tests/run.mjs`-এ regression test যোগ করা হয়েছে — একই সেটে দুটো সেকশন, দুটোতেই প্রশ্ন-নম্বর "১" (ভিন্ন টেক্সট/সঠিক-উত্তর) সিমুলেট করে সেকশন-এ-র প্রশ্নে উত্তর দেওয়া হয়, রি-রেন্ডারের পর নিশ্চিত করা হয় সেকশন-বি-র প্রশ্ন এখনো `data-answered="0"` ও বাটন enabled-ই আছে (না-ছুঁয়ে "answered" দেখাচ্ছে না)। ফিক্স সাময়িকভাবে উল্টিয়ে নিশ্চিত করা হয়েছে টেস্টটা তখন সত্যিই fail করে ("state ওভারল্যাপ করছে" বার্তা দিয়ে), ফিরিয়ে আনলে ১৫/১৫ pass করে।

---

### BUG-25 🟢 — verify_site.py: docs/index.html অনুপস্থিত থাকলে স্পষ্ট এরর না দিয়ে UnboundLocalError-এ ক্র্যাশ করত

**ফাইল:** `scripts/verify_site.py` — `main()`-এর check ৯/১০ (print CSS যাচাই)

**সমস্যা:**
check ৯ (`if INDEX_HTML.exists(): ... print_block = extract_braced_block(...)`) শুধু `INDEX_HTML.exists()` সত্যি হলেই `print_block` ভ্যারিয়েবলটা সংজ্ঞায়িত করত — সেই `if`-ব্লকের বাইরে কোনো ডিফল্ট মান ছিল না। কিন্তু ঠিক পরের check ১০ (`if print_block is not None and "#mcq-layout" not in print_block:`) নিঃশর্তভাবে `print_block` রেফারেন্স করত। ফলে `docs/index.html` কোনো কারণে না থাকলে (partial checkout, ভুলবশত মুছে যাওয়া, ইত্যাদি) — যেটা check ৮ ইতিমধ্যে গ্রেসফুলভাবে "index.html পাওয়া যায়নি" এরর হিসেবে ধরার জন্য ডিজাইন করা — check ১০-এ পৌঁছেই স্ক্রিপ্টটা `UnboundLocalError` দিয়ে সরাসরি ক্র্যাশ করত, কোনো Bengali এরর মেসেজ না দিয়েই। এটা এই স্ক্রিপ্টের নিজের ডকস্ট্রিং-এ বর্ণিত মূল লক্ষ্যকেই ("কোনো সমস্যা পেলে... স্পষ্টভাবে কী ভুল আছে তা বাংলায় জানায়") ভেঙে দিত, ঠিক সেই দৃশ্যেই যেটা ধরার জন্য এই স্ক্রিপ্ট বানানো হয়েছে।

**সমাধান:**
check ৯-এর `if`-ব্লক শুরুর আগেই `print_block = None` দিয়ে ডিফল্ট মান বসানো হলো, যাতে `INDEX_HTML` না থাকলেও check ১০ নিরাপদে `print_block is not None` চেক করে চুপচাপ স্কিপ করে যায় (এবং check ৮ থেকে "index.html পাওয়া যায়নি" এররটাই দেখায়), ক্র্যাশ না করে।

**যাচাই:** `scripts/test_build_index.py`-এ regression test যোগ করা হয়েছে — `docs/index.html` সাময়িকভাবে সরিয়ে (rename করে) `verify_site.main()` কল করা হয়, নিশ্চিত করা হয় এটা `SystemExit(1)`-এ থামে (কোনো অপ্রত্যাশিত exception না) এবং stdout-এ স্পষ্ট "index.html ... পাওয়া যায়নি" বার্তা প্রিন্ট হয় — `finally`-তে ফাইল সবসময় ফিরিয়ে আনা হয় (টেস্ট fail করলেও)। ফিক্স সাময়িকভাবে উল্টিয়ে নিশ্চিত করা হয়েছে টেস্টটা তখন সত্যিই fail করে ("UnboundLocalError... ক্র্যাশ করছে" বার্তা দিয়ে), ফিরিয়ে আনলে ৫/৫ pass করে। ম্যানুয়ালিও (`docs/index.html` সরিয়ে সরাসরি `python3 scripts/verify_site.py` চালিয়ে) নিশ্চিত করা হয়েছে — আগে stderr-এ Python traceback আসত, এখন শুধু exit code ১ ও স্পষ্ট বাংলা বার্তা।

---

---

## ব্যাচ ৪ — ২০২৬-০৯-২০ (CI/ডিপ্লয় পাইপলাইন)

### BUG-26 🔴 — `update-wiki.yml`-এর `git push` কখনোই PAT দিয়ে হতো না; rebuild-PR-এর চেক আটকে যেত আর লাইভ সাইট সপ্তাহের পর সপ্তাহ stale থাকত

**ফাইল:** `.github/workflows/update-wiki.yml` (checkout + rebuild-push ধাপ)

**সমস্যা:**
main-এ কনটেন্ট merge হলেও নতুন তথ্য লাইভ সাইটে (`open-current-affairs.pages.dev`) পৌঁছাচ্ছিল না। কারণ সাইট `docs/topics-index.json`, `sw.js`, `version.json`, `docs/topic/` ইত্যাদি generated ফাইল থেকে চলে, আর সেগুলো শুধু `update-wiki.yml` বানায়। branch protection-এর কারণে bot সরাসরি main-এ push করতে পারত না, তাই `auto/rebuild-output` branch-এ PR খুলত — যেটা কাউকে হাতে merge করতে হতো। সেই PR-এর `pr-check` প্রতিবার `action_required`-এ আটকে যেত, ফলে PR অমার্জিত পড়ে থাকত (PR #64: ৬ দিন, ১৫টা টপিক অদৃশ্য; PR #137: ২০২৬-০৮-৩০ থেকে ০৯-১৯, ~২০ দিন)।

আসল রুট-কজ শুরুতে ভুল ধরা হয়েছিল ("`BOT_PAT`-এর মান ভেঙে গেছে", তাই `WORKFLOW_PAT`-এ বদল — PR #151)। সেটা ঘটনার সাথে মেলে না: ২০২৬-০৮-১৪ থেকে ০৯-১৯-এর মধ্যে ৯টা auto PR-ই আপনার ইউজার-নামে *তৈরি* হয়েছে (মানে PAT ঠিকই কাজ করছিল), অথচ সেগুলোর ৬৭টা force-push-এর সবক'টাই হয়েছে `github-actions[bot]` নামে। কারণ: `actions/checkout` ডিফল্টে (`persist-credentials: true`) `GITHUB_TOKEN`-কে git-এর `http.extraheader`-এ বসিয়ে রাখে, আর সেই header push-URL-এ বসানো `x-access-token:<PAT>`-এর চেয়ে অগ্রাধিকার পায়। তাই PAT শুধু API-কলে (PR খোলা/খোঁজা) কাজ করত, `git push` চলত `GITHUB_TOKEN` দিয়ে — bot-নামের push থেকে হওয়া `pull_request` ইভেন্টের চেক approval-এর অপেক্ষায় (`action_required`) থাকত। secret-এর নাম বদলালে এটা ঠিক হয় না।

**সমাধান:**
PR-ধাপটাই বাদ। bot এখন build+verify-এর পর generated output সরাসরি `main`-এ commit+push করে (`GITHUB_TOKEN`, `permissions: contents: write`) — কোনো PR, approval বা মানুষের merge-ধাপ নেই; Cloudflare Pages সেই commit-ই deploy করে। push-এর আগে `origin/main` আবার fetch করে দেখা হয় — এই run চলার সময় main এগিয়ে গেলে (সমান্তরাল merge) push বাদ দেওয়া হয়, কারণ ওই নতুন commit-এর নিজস্ব run সব নতুন করে বানাবে; main না এগিয়েও push ব্যর্থ হলে (যেমন protection চালু) `::error::` দিয়ে স্পষ্টভাবে fail করে। commit message-এ skip-ci ট্যাগ দেওয়া নেই।
সীমাবদ্ধতা: এটা কাজ করে কেবল `main`-এ branch protection/ruleset না থাকলে (২০২৬-০৯-২০-এ GitHub API-তে কোনোটাই ছিল না)। পরে protection চালু করলে github-actions-কে bypass দিতে হবে।

**যাচাই:**
- workflow থেকে push-ধাপের স্ক্রিপ্ট হুবহু বের করে স্থানীয় bare-repo-তে চার পরিস্থিতিতে চালানো হয়েছে: (ক) স্বাভাবিক → push, exit 0; (খ) main আগেই এগিয়ে গেছে → push বাদ, নতুন commit অক্ষত, exit 0; (গ) protection-এর মতো প্রত্যাখ্যান, main এগোয়নি → স্পষ্ট `::error::`, exit 1; (ঘ) push-এর ঠিক মুহূর্তে main এগিয়ে গেছে → কিছু overwrite না করে exit 0।
- `scripts/verify_integration_bugs.py`-এ দুটো নতুন regression guard (৬, ৭) যোগ হয়েছে: push-URL-এ `x-access-token:` থাকলে checkout-এ YAML-কী হিসেবে `persist-credentials: false` বাধ্যতামূলক; আর কোডে (মন্তব্য বাদে) skip-ci ট্যাগ থাকা যাবে না। guard-এর প্রথম সংস্করণে একটা false-negative ধরা পড়েছিল (`::error::` বার্তার ভেতরের একই লেখাকে আসল সেটিং ধরে নিচ্ছিল) — negative test-এ ধরা পড়ে ঠিক করা হয়েছে (লাইনের শুরুতে YAML-কী হিসেবে match)। এখন: ঠিক workflow → পাস; PAT-URL আছে অথচ `persist-credentials: false` নেই → fail; দুটোই আছে → পাস; কোডে `[skip ci]` → fail।
- GitHub Actions runner-এ নতুন push-ধাপের আসল রান এই PR merge হওয়ার পর প্রথম চলবে (VERSION বাড়ানোয় merge-commit-এই `changed=true` হবে) — ফলাফল CHANGELOG-এর ১.৯.০ এন্ট্রির পরে যাচাই করা হবে।

### BUG-27 🟠 — একাধিক-সেশন ব্যবস্থায় ডুপ্লিকেট-বাদ দিতে গিয়ে টপিক-লিংক হারানো; টাইপো-তারিখ মিশে হেডিং গিলে ফেলা

**ফাইল:** `scripts/build_index.py` (`compile_ghotonaprobaho`, `compile_top_news`)

**সমস্যা:** দুই সেশন-ফাইলে একই বুলেটের একটাতে `[[লিংক]]` থাকলে ডুপ্লিকেট-বাদ যেটা আগে পড়া হয় সেটা রাখত — লিংক-বিহীনটা আগে পড়লে লিংক-ওয়ালাটাই বাদ পড়ে টপিক-লিংক নীরবে হারাত। আবার মাস-চেনা-যায়-না (টাইপো) হেডিং দুই ফাইলে ভিন্ন হলেও একই (বছর, ০, দিন) কী-তে জোড়া লেগে দ্বিতীয় হেডিং গিলে ফেলত। জোড়া-লাগা দিনে ফাইল-ক্রমে আন্তর্জাতিক আগে আসতে পারত।

**সমাধান:** বাদ-পড়া বুলেটের `terms` রাখা বুলেটে যোগ (`_merge_terms`, ওভারল্যাপ/অনুপস্থিত বাক্যাংশ বাদে); অচেনা-মাসের হেডিং শুধু হুবহু একই লেখা হলে জোড়া (`_merge_key`); জোড়া-লাগা দিনে বিভাগ-ক্রম বাংলাদেশ→আন্তর্জাতিক; প্রায়-ডুপ্লিকেট (≥৮৫%) সতর্কতা; MCQ-তে মূল মাসিক ফাইল আগে ও অঙ্ক-শুরু স্কোপে সতর্কতা।

**যাচাই:** `test_build_index.py`-তে ছয়টা আচরণ-টেস্ট — পুরনো কোডে ব্যর্থ, নতুনে পাস; বিদ্যমান ডেটায় তিনটা JSON আউটপুট হুবহু অপরিবর্তিত।

### BUG-28 🔴 — দুটো PR আলাদাভাবে পাস করে একসাথে merge হয়ে build ভাঙলে সাইট নীরবে stale থাকত

**ফাইল:** `.github/workflows/update-wiki.yml`, `scripts/premerge_check.sh`, `scripts/site_status.py`, `scripts/session_status.sh`

**সমস্যা:** PR-চেক শুধু PR খোলার সময়ের `main`-এর সাথে চলে। বাস্তবে প্রমাণিত: একটা PR টপিক সরাল (কেউ লিংক করে না বলে একা পাস), আরেকটা সেই টপিকের `[[লিংক]]` দিল (টপিক তখনো ছিল বলে একা পাস) — দুটো merge হলে build ব্যর্থ। তখন bot কিছু push করে না, সবার নতুন কনটেন্ট লাইভ হয় না, আর কোথাও কোনো সতর্কতা নেই — ঠিক ২০ দিনের আসল সমস্যার মতো নীরব-stale।

**সমাধান:** (১) `update-wiki` ব্যর্থ হলে `site-build-failed` লেবেলে GitHub Issue নিজে খোলে/হালনাগাদ হয় (লগের শেষ লাইনসহ), সফল run-এ নিজে বন্ধ হয়; (২) `session_status.sh` প্রতি সেশনের শুরুতে সর্বশেষ run-এর অবস্থা ও খোলা Issue দেখায় (`site_status.py`); (৩) merge-এর ঠিক আগে `premerge_check.sh` — অস্থায়ী worktree-তে branch + এই মুহূর্তের `main` মিলিয়ে build/verify/টেস্ট; (৪) `workflow_dispatch` + `simulate_failure` দিয়ে সাইট ছুঁয়ে না দেখে সতর্কতা-পথ পরীক্ষা; (৫) build-সতর্কতা Actions-সারাংশে ও PR-কমেন্টে (`pr_build_warnings.py`) ও `preflight.sh`-এ।

**যাচাই:** নকল `gh` দিয়ে ছয় পরিস্থিতিতে ধাপগুলোর shell (Issue তৈরি/কমেন্ট/বন্ধ/সারাংশ/ইচ্ছাকৃত-ব্যর্থতা); `premerge_check.sh` স্থানীয় bare-origin সিমুলেশনে নিরাপদ/সমন্বয়-ব্যর্থ/git-সংঘর্ষ তিন ক্ষেত্রে; `verify_integration_bugs.py`-এ guard ৯ (negative-test করা); আসল Actions-এ `simulate_failure` রান merge-এর পর (CHANGELOG ১.১২.০ দেখুন)।

### BUG-29 🟠 — "দখল-চেক" আসল তালা ছিল না; সংঘর্ষ-চেক আর নথির দাবি আলাদা হয়ে গিয়েছিল

**ফাইল:** `scripts/claim_check.sh`, `scripts/pr_checks.py`, `PR_GUIDE.md`, `scripts/preflight.sh`

**সমস্যা:** (ক) `claim_check.sh` শুধু-দেখা ছিল — দুই সেশন একসাথে শুরু করলে কেউ push না করা পর্যন্ত দখল অদৃশ্য, তাই দুজনেই "ফাঁকা" দেখত (TOCTOU); slug সাবস্ট্রিং মেলাত (`a` লিখলে সম্পর্কহীন PR মিথ্যা-দখল)। (খ) `PR_GUIDE.md` বলত `pr_checks.py` "একই ফাইলের সংঘর্ষ" ধরে, অথচ `archive/`, `CHANGELOG.md` ইত্যাদি তালিকার বাইরে ছিল। (গ) `PR_GUIDE.md` বলত সতর্কতা `preflight.sh`-এ দেখা যায়, কিন্তু সফল build-এর লগ সে দেখাত না। (ঘ) নতুন ফাইলের নাম-নিয়ম কেউ যাচাই করত না।

**সমাধান:** `--claim` = GitHub-এ `claim/<নাম>` ref তৈরি (একই নামে দুটো ref হয় না, তাই পারমাণবিক); `--release`; শব্দ-সীমা মেলানো; পুরনো (৩+ দিন) দখল চিহ্নিত। `pr_checks.py`: `archive/` যুক্ত, শেয়ার্ড নথির ওভারল্যাপ তথ্য-নোট, নতুন ফাইলের নাম যাচাই (রেঞ্জ-নাম/অঙ্ক-শুরু স্কোপ ব্যর্থ)। `preflight.sh` এখন সতর্কতা দেখায়। `PR_GUIDE.md` দাবিগুলো কোডের সাথে মিলিয়ে সংশোধিত।

**যাচাই:** আসল repo-তে দুই প্রসেসের একসাথে `--claim` — ঠিক একজন সফল ([0, 1]), অন্যজন ⛔; নিজের-দখল বাধা নয়; পুরনো-দখল চিহ্ন; `--release`; `test_pr_checks.py` (১১টা টেস্ট); guard ৮ (কমেন্ট-আউট করা `"archive/"`-ও ধরে — negative-test-এ প্রথম সংস্করণের ফাঁক ধরা পড়ে ঠিক করা)।
