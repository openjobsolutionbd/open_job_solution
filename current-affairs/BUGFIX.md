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
