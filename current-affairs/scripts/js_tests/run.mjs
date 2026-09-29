#!/usr/bin/env node
// scripts/js_tests/run.mjs
//
// docs/index.html-এর app-shell JS-এ যেসব bug আগে ধরা পড়েছিল ও ঠিক করা
// হয়েছিল (দেখুন BUGFIX.md), সেগুলো যেন কখনো আবার চুপচাপ ফিরে না আসে —
// প্রতিটার জন্য একটা স্থায়ী automated regression test।
//
// নিয়ম (AGENTS.md-এও লেখা আছে): ভবিষ্যতে নতুন কোনো JS bug পাওয়া/ঠিক করা
// হলে, BUGFIX.md-এ এন্ট্রি লেখার পাশাপাশি এখানে একটা matching test() যোগ
// করতে হবে — নইলে এই সুরক্ষা-ব্যবস্থা সময়ের সাথে দুর্বল হতে থাকবে।
//
// চালানোর নিয়ম: node scripts/js_tests/run.mjs
// (scripts/preflight.sh কোড-ফাইল বদলালে এটা স্বয়ংক্রিয়ভাবে চালায়)
import {
  createTestWindow,
  mockFetchByUrl,
  jsonResponse,
  textResponse,
  delayedResponse,
  setGlobal,
  getGlobal,
  makeTopic,
} from "./dom_harness.mjs";

const tests = [];
function test(name, fn) {
  tests.push({ name, fn });
}
function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

// ── BUG-03 ক্লাস: renderTopicContent race condition ────────────────────────
test("renderTopicContent — দ্রুত পরপর দুই কলে শেষ কলেরই কনটেন্ট দেখানো উচিত", async () => {
  const fetchImpl = mockFetchByUrl({
    "topics/a.md": delayedResponse(textResponse("---\ntitle: A\n---\nContent-A-Marker"), 40),
    "topics/b.md": delayedResponse(textResponse("---\ntitle: B\n---\nContent-B-Marker"), 5),
  });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;
  // আসল `#card` এলিমেন্ট ব্যবহার করা হচ্ছে (ছেঁড়া/detached div নয়) — কারণ
  // renderTopicContent ভেতরে document.getElementById দিয়ে বাটন খুঁজে বাইন্ড করে,
  // যা document-এ সংযুক্ত না থাকা এলিমেন্টে কাজ করবে না (production-এও #card সবসময় সংযুক্ত)।
  const container = window.document.getElementById("card");

  const p1 = window.renderTopicContent(makeTopic({ slug: "a", file: "topics/a.md" }), container, {});
  const p2 = window.renderTopicContent(makeTopic({ slug: "b", file: "topics/b.md" }), container, {});
  await Promise.all([p1, p2]);

  assert(container.innerHTML.includes("Content-B-Marker"), "container-এ শেষ কল (B)-এর কনটেন্ট নেই।");
  assert(
    !container.innerHTML.includes("Content-A-Marker"),
    "container-এ আগের কল (A, দেরিতে resolve হওয়া ধীরগতির fetch) এর কনটেন্ট রয়ে গেছে — " +
      "ধীর fetch পরে শেষ হয়ে সঠিক (দ্রুত, পরের) ফলাফল ওভাররাইট করছে। RENDER_TOPIC_SEQ guard কাজ করছে না। (BUGFIX.md BUG-03)"
  );
});

// ── BUG-05 ক্লাস: modal খুললে আগের content flash ────────────────────────────
test("openTopicInModal — overlay visible হওয়ার আগেই body clear হওয়া উচিত (flash নয়)", async () => {
  const fetchImpl = mockFetchByUrl({ "topics/b.md": textResponse("---\ntitle: B\n---\nContent-B") });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;
  setGlobal(dom, "ALL_TOPICS", [makeTopic({ slug: "b", file: "topics/b.md" })]);

  const body = window.document.getElementById("topic-modal-body");
  const overlay = window.document.getElementById("topic-modal-overlay");
  body.innerHTML = '<div class="card-body">OLD-TOPIC-A-CONTENT</div>'; // আগের অবস্থা সিমুলেট

  let bodyHtmlWhenShown = null;
  const realAdd = overlay.classList.add.bind(overlay.classList);
  overlay.classList.add = (...args) => {
    if (args.includes("visible") && bodyHtmlWhenShown === null) bodyHtmlWhenShown = body.innerHTML;
    return realAdd(...args);
  };

  await window.openTopicInModal("b");

  assert(bodyHtmlWhenShown !== null, "overlay কখনো 'visible' ক্লাস পায়নি — টেস্ট নিজেই ভুল সেটআপ হতে পারে।");
  assert(
    !bodyHtmlWhenShown.includes("OLD-TOPIC-A-CONTENT"),
    "overlay দৃশ্যমান হওয়ার মুহূর্তে body-তে এখনো আগের topic-এর content ছিল (flash)। (BUGFIX.md BUG-05)"
  );
});

// ── BUG-06 ক্লাস: modal বন্ধে topic-preview আটকে থাকা ───────────────────────
test("closeTopicModal — খোলা থাকলে topic-preview-overlay-ও বন্ধ করা উচিত", async () => {
  const dom = await createTestWindow();
  const { window } = dom;
  const preview = window.document.createElement("div");
  preview.id = "topic-preview-overlay";
  window.document.body.appendChild(preview);

  window.closeTopicModal();

  assert(
    window.document.getElementById("topic-preview-overlay") === null,
    "closeTopicModal()-এর পরেও topic-preview-overlay DOM-এ রয়ে গেছে — বন্ধ করেনি। (BUGFIX.md BUG-06)"
  );
});

// ── BUG-07 ক্লাস: filterByTag mode-tab সিঙ্ক করে না ─────────────────────────
test("filterByTag — browse mode-এ সুইচ করা উচিত (mode-tab ও layout দুটোই)", async () => {
  const fetchImpl = mockFetchByUrl({ "ghotonaprobaho-index.json": jsonResponse({ months: [] }) });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;
  const { document } = window;

  await window.setMode("ghotonaprobaho"); // ইচ্ছাকৃতভাবে "ভুল" মোডে শুরু
  window.filterByTag("অর্থনীতি");

  assert(
    document.getElementById("browse-toggle-btn").classList.contains("active"),
    "filterByTag()-এর পরও browse-toggle-btn active হয়নি।"
  );
  assert(
    !document.getElementById("ghotonaprobaho-toggle-btn").classList.contains("active"),
    "filterByTag()-এর পরও ghotonaprobaho-toggle-btn active রয়ে গেছে — mode-tab state ও layout mismatch। (BUGFIX.md BUG-07)"
  );
  assert(
    document.getElementById("browse-layout").style.display !== "none",
    "filterByTag()-এর পরও browse-layout লুকানো আছে।"
  );
  assert(document.getElementById("search").value === "অর্থনীতি", "search input-এ ট্যাগ বসেনি।");
});

// ── BUG-08 ক্লাস: backToList sidebar highlight পরিষ্কার করে না ──────────────
test("backToList — ACTIVE_SLUG ও sidebar-এর active highlight পরিষ্কার করা উচিত", async () => {
  const fetchImpl = mockFetchByUrl({ "topics/x.md": textResponse("---\ntitle: X\n---\nবডি") });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;
  const { document } = window;
  setGlobal(dom, "ALL_TOPICS", [makeTopic({ slug: "x", file: "topics/x.md", title: "X" })]);

  await window.openTopic("x", false);
  assert(
    document.querySelectorAll("#tab-list .tab.active").length === 1,
    "openTopic()-এর পরে sidebar-এ active টপিক দেখা যাচ্ছে না — টেস্ট সেটআপ যাচাই।"
  );

  window.backToList();

  assert(
    document.querySelectorAll("#tab-list .tab.active").length === 0,
    "backToList()-এর পরেও sidebar-এ একটা টপিক 'active' হিসেবে highlighted রয়ে গেছে, " +
      "অথচ কোনো article খোলা নেই। (BUGFIX.md BUG-08)"
  );
  assert(
    !document.getElementById("browse-layout").classList.contains("showing-article"),
    "backToList()-এর পরেও browse-layout-এ showing-article ক্লাস রয়ে গেছে।"
  );
});

// ── BUG-09 ক্লাস: concurrent fetch dedup (ঘটনাপ্রবাহ + টপ নিউজ) ────────────
test("ensureGhotonaprobahoLoaded — একসাথে দুই কলে মাত্র একটাই fetch হওয়া উচিত", async () => {
  let fetchCount = 0;
  const fetchImpl = mockFetchByUrl({
    "ghotonaprobaho-index.json": () => {
      fetchCount++;
      return delayedResponse(jsonResponse({ months: [] }), 5)();
    },
  });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;

  await Promise.all([window.ensureGhotonaprobahoLoaded(), window.ensureGhotonaprobahoLoaded()]);

  assert(
    fetchCount === 1,
    `একসাথে দুইটা ensureGhotonaprobahoLoaded() কলে ${fetchCount}টা fetch হয়েছে (প্রত্যাশিত ১টা) — ` +
      "in-flight promise cache/guard কাজ করছে না। (BUGFIX.md BUG-09)"
  );
});

test("ensureTopNewsLoaded — একসাথে দুই কলে মাত্র একটাই fetch হওয়া উচিত", async () => {
  let fetchCount = 0;
  const fetchImpl = mockFetchByUrl({
    "top-news-index.json": () => {
      fetchCount++;
      return delayedResponse(jsonResponse({ items: [] }), 5)();
    },
  });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;

  await Promise.all([window.ensureTopNewsLoaded(), window.ensureTopNewsLoaded()]);

  assert(
    fetchCount === 1,
    `একসাথে দুইটা ensureTopNewsLoaded() কলে ${fetchCount}টা fetch হয়েছে (প্রত্যাশিত ১টা)। (BUGFIX.md BUG-09)`
  );
});

// ── BUG-04 ক্লাস: printMonthlySummary — afterprint double-fire + fallback ──
test("printMonthlySummary — afterprint দুইবার fire করলেও card একবারই restore হওয়া উচিত, ও ৬০সে ফলব্যাক থাকা উচিত", async () => {
  const fetchImpl = mockFetchByUrl({ "top-news-index.json": jsonResponse({ items: [] }) });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;
  const { document } = window;
  setGlobal(dom, "GHOTONAPROBAHO_MONTHS", [
    { month_key: "2026-01", days: [{ date: "১ জানুয়ারি", categories: [] }] },
  ]);

  const card = document.getElementById("card");
  card.innerHTML = '<div id="original-marker">ORIGINAL-CARD-CONTENT</div>';

  const capturedTimeouts = [];
  const realSetTimeout = window.setTimeout.bind(window);
  window.setTimeout = (fn, delay, ...rest) => {
    capturedTimeouts.push({ fn, delay });
    return realSetTimeout(fn, delay, ...rest);
  };

  await window.printMonthlySummary("2026-01", "জানুয়ারি ২০২৬");

  assert(
    !card.innerHTML.includes("ORIGINAL-CARD-CONTENT"),
    "printMonthlySummary()-এর পরেও card-এ পুরনো কনটেন্ট — সারাংশ বসেনি।"
  );

  const fallback = capturedTimeouts.find((t) => t.delay === 60_000);
  assert(
    fallback !== undefined,
    "afterprint fire না হলে card পুনরুদ্ধারের জন্য কোনো ৬০-সেকেন্ড fallback টাইমার সেট হয়নি। (BUGFIX.md BUG-04)"
  );

  window.dispatchEvent(new window.Event("afterprint"));
  assert(
    card.innerHTML.includes("ORIGINAL-CARD-CONTENT"),
    "afterprint fire হওয়ার পরেও card-এর আগের কনটেন্ট পুনরুদ্ধার হয়নি।"
  );

  window.dispatchEvent(new window.Event("afterprint")); // দ্বিতীয়বার fire (কিছু browser করে)
  assert(
    card.innerHTML.includes("ORIGINAL-CARD-CONTENT"),
    "afterprint দ্বিতীয়বার fire হওয়ার পরে card-এর কনটেন্ট বদলে/ভেঙে গেছে — double-fire guard কাজ করছে না। (BUGFIX.md BUG-04)"
  );

  // fallback timer নিজে থেকেও নিরাপদভাবে কাজ করা উচিত (double-restore না ঘটিয়ে)
  card.innerHTML = "<div>KISHU-ABAR-BODLE-GECHE</div>";
  fallback.fn();
  assert(
    card.innerHTML.includes("KISHU-ABAR-BODLE-GECHE"),
    "afterprint ইতিমধ্যে fire হয়ে যাওয়ার পরেও fallback timer card আবার ওভাররাইট করছে (restored flag কাজ করছে না)।"
  );
});

// ── BUG-11 ক্লাস: data-slug attribute-এ escapeHtml() না থাকা ────────────────
// ── BUG-16 ক্লাস: বুকমার্ক ফিল্টার + সার্চ কম্বিনেশনে বিভ্রান্তিকর "পাওয়া যায়নি" বার্তা ──
test("renderList — বুকমার্ক ফিল্টার চালু অবস্থায় সার্চ করলে, সাইটে-থাকা-কিন্তু-বুকমার্ক-না-করা টপিকের জন্য 'পাওয়া যায়নি'/উইকিপিডিয়া fallback দেখানো উচিত না", async () => {
  const fetchImpl = mockFetchByUrl({});
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;

  // football-topic বুকমার্ক করা, cricket-topic করা নেই — কিন্তু দুটোই
  // সাইটে বিদ্যমান।
  setGlobal(dom, "ALL_TOPICS", [
    makeTopic({ slug: "football-topic", title: "ফুটবল টপিক", tags: ["football"] }),
    makeTopic({ slug: "cricket-topic", title: "ক্রিকেট টপিক", tags: ["cricket"] }),
  ]);
  window.localStorage.setItem("oca_bookmarks", JSON.stringify({ "football-topic": true }));
  setGlobal(dom, "BOOKMARK_FILTER_ACTIVE", true);

  // "cricket" সার্চ করা হলো — সাইটে cricket-topic আছে, কিন্তু সেটা
  // বুকমার্ক করা না থাকায় বুকমার্ক-ফিল্টার করা তালিকা খালি আসবে।
  window.renderList(window.visibleTopics("cricket"), "cricket");
  await new Promise((resolve) => window.setTimeout(resolve, 30));

  const html = window.document.getElementById("tab-list").innerHTML;
  assert(
    !html.includes("কোনো টপিক পাওয়া যায়নি") && !html.includes("উইকিপিডিয়া"),
    "বুকমার্ক ফিল্টার চালু অবস্থায় সার্চ করলে, cricket-topic আসলে সাইটে থাকা সত্ত্বেও " +
      "'কোনো টপিক পাওয়া যায়নি' বা উইকিপিডিয়া fallback দেখানো হচ্ছে — এটা বিভ্রান্তিকর, কারণ " +
      "টপিকটা শুধু বুকমার্ক করা নেই বলে ফিল্টার হয়ে গেছে, সাইটে অনুপস্থিত না। (BUGFIX.md BUG-16)"
  );
});

test("renderList ও related-topics chip — slug-এ থাকা বিশেষ ক্যারেক্টার attribute থেকে বের হয়ে নতুন attribute বানাতে পারা উচিত না", async () => {
  const evilSlug = 'evil" onmouseover="alert(1)';
  const fetchImpl = mockFetchByUrl({
    "topics/topic-a.md": textResponse("---\ntitle: A\n---\nবডি"),
  });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;
  const { document } = window;
  // slug ইচ্ছাকৃতভাবে build_index.py-এর SLUG_RE বাইপাস করে সেট করা হচ্ছে —
  // এই টেস্ট real slug validation না, renderList()/related-chip-এর নিজস্ব
  // escaping যাচাই করছে (defense-in-depth, BUGFIX.md BUG-11)।
  setGlobal(dom, "ALL_TOPICS", [
    makeTopic({ slug: "topic-a", file: "topics/topic-a.md", title: "A", tags: ["tag1"] }),
    makeTopic({ slug: evilSlug, file: "topics/evil.md", title: "Evil", tags: ["tag1"] }),
  ]);

  await window.openTopic("topic-a", false);

  const brokenInList = [...document.querySelectorAll("#tab-list [data-slug]")].some((el) =>
    el.hasAttribute("onmouseover")
  );
  assert(
    !brokenInList,
    "renderList()-এ slug escape না হওয়ায় attribute breakout হয়েছে — data-slug-এ escapeHtml() বাদ পড়েছে কিনা দেখুন। (BUGFIX.md BUG-11)"
  );

  const brokenInRelated = [...document.querySelectorAll(".related-chip")].some((el) =>
    el.hasAttribute("onmouseover")
  );
  assert(
    !brokenInRelated,
    "related-topics chip-এ slug escape না হওয়ায় attribute breakout হয়েছে। (BUGFIX.md BUG-11)"
  );

  const relatedChip = document.querySelector(".related-chip");
  assert(
    relatedChip && relatedChip.dataset.slug === evilSlug,
    "escape করার পরেও dataset.slug আসল মান ফেরত দিচ্ছে না — escaping ভুল জায়গায় হচ্ছে।"
  );
});

// ── BUG-13 ক্লাস: MCQ মোড থেকে openTopic() করলে mode-switch হতো না ─────────
test("openTopic — MCQ মোডে থাকা অবস্থায় hashchange-এ অন্য টপিক খুললে browse-layout দৃশ্যমান হওয়া উচিত", async () => {
  const fetchImpl = mockFetchByUrl({
    "topics/topic-a.md": textResponse("---\ntitle: A\n---\nবডি"),
  });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;
  const { document } = window;
  setGlobal(dom, "ALL_TOPICS", [
    makeTopic({ slug: "topic-a", file: "topics/topic-a.md", title: "A" }),
  ]);
  // MCQ মোডে থাকার ভান — setMode('mcq') পুরোপুরি চালানোর (ensureMcqLoaded
  // ইত্যাদি) দরকার নেই, শুধু সেই মোডের ফলাফল (CURRENT_MODE + লেআউট
  // visibility) সরাসরি বসিয়ে দিলেই openTopic()-এর mode-switch লজিক
  // পরীক্ষা করা যায়।
  setGlobal(dom, "CURRENT_MODE", "mcq");
  document.getElementById("browse-layout").style.display = "none";
  document.getElementById("mcq-layout").style.display = "";

  await window.openTopic("topic-a", false);

  assert(
    document.getElementById("browse-layout").style.display !== "none",
    "MCQ মোড থেকে openTopic() কল হলেও browse-layout display:none-ই থেকে যাচ্ছে — টপিক লোড হলেও স্ক্রিনে দেখা যাবে না। (BUGFIX.md BUG-13)"
  );
  assert(
    document.getElementById("mcq-layout").style.display === "none",
    "MCQ মোড থেকে অন্য টপিকে গেলেও mcq-layout এখনো দেখানো হচ্ছে। (BUGFIX.md BUG-13)"
  );
  assert(
    getGlobal(dom, "CURRENT_MODE") === "browse",
    "CURRENT_MODE এখনো 'mcq'-ই আছে, 'browse'-এ ফেরেনি।"
  );
});

// ── BUG-14 ক্লাস: MCQ ট্যাব ছেড়ে ফিরে এলে উত্তর দেওয়া প্রশ্নের progress হারিয়ে যেত ──
// ── BUG-15 ক্লাস: একই টপিক card ও modal দুই জায়গায় থাকলে duplicate id ────────
test("renderTopicContent — মূল কার্ড ও মডালে একই টপিক থাকলে মডালের অ্যাকশন-বাটন কাজ করা উচিত", async () => {
  const fetchImpl = mockFetchByUrl({
    "topics/dup.md": textResponse("---\ntitle: Dup\n---\nContent"),
  });
  const dom = await createTestWindow({ fetchImpl });
  const { window } = dom;
  const topic = makeTopic({ slug: "dup", file: "topics/dup.md" });
  setGlobal(dom, "ALL_TOPICS", [topic]);

  const card = window.document.getElementById("card");
  const modalBody = window.document.getElementById("topic-modal-body");

  // আগে মূল কার্ডে টপিকটা খোলা আছে (ব্যাকগ্রাউন্ডে, অন্য মোডে সুইচ করার পরও
  // #card-এর content DOM-এ থেকে যায়) — তারপর ভাসমান সার্চ দিয়ে একই টপিক
  // মডালেও খোলা হলো।
  await window.renderTopicContent(topic, card, { backBtnId: "mobile-back-btn" });
  await window.openTopicInModal("dup");

  // মার্ক-রিড বাটন সরিয়ে ফেলা হয়েছে (fix-topic-buttons.patch) — এখন বুকমার্ক
  // বাটন দিয়ে একই duplicate-id নিরাপত্তা যাচাই করা হচ্ছে (BUG-15 এখনও প্রযোজ্য,
  // যেকোনো একশন-বাটনের জন্য)।
  const modalBtn = modalBody.querySelector("#bookmark-btn-dup");
  assert(modalBtn, "মডালে 'প্রিয়' (বুকমার্ক) বাটন খুঁজে পাওয়া যায়নি — টেস্ট সেটআপ ভুল হতে পারে।");
  modalBtn.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));

  assert(
    window.isBookmarked("dup") === true,
    "মূল কার্ড ও মডালে একই টপিক (duplicate id `bookmark-btn-dup`) থাকা অবস্থায় মডালের 'প্রিয়' " +
      "বাটনে ক্লিক করলে কিছু হচ্ছে না — document.getElementById() ডকুমেন্টে প্রথম মিলে যাওয়া " +
      "(card-এর) এলিমেন্টে listener বেঁধে দিচ্ছে, container-scoped querySelector ব্যবহার হচ্ছে না। (BUGFIX.md BUG-15)"
  );
});

test("renderMcqView — MCQ মোড থেকে বেরিয়ে আবার ঢুকলে আগে উত্তর দেওয়া প্রশ্নের অবস্থা থেকে যাওয়া উচিত", async () => {
  const dom = await createTestWindow({});
  const { window } = dom;
  const { document } = window;

  // MCQ_SETS সরাসরি বসিয়ে দেওয়া হচ্ছে — ensureMcqLoaded()-এর fetch-মক লাগবে না,
  // শুধু renderMcqView()-এর re-render আচরণটাই পরীক্ষার বিষয়।
  setGlobal(dom, "MCQ_SETS", [
    {
      label: "টেস্ট সেট",
      question_count: 1,
      sections: [
        {
          name: "টেস্ট সেকশন",
          questions: [
            { number: "১", text: "প্রশ্ন ১?", options: ["ক", "খ", "গ", "ঘ"], answer_index: 2 },
          ],
        },
      ],
    },
  ]);

  window.renderMcqView(); // প্রথমবার MCQ ট্যাবে ঢোকা
  const firstOptionBtn = document.querySelector(".mcq-question .mcq-option");
  firstOptionBtn.click(); // ব্যবহারকারী একটা অপশনে ক্লিক করে উত্তর দিলেন (ভুল অপশন, idx 0 ≠ answer_index 2)

  const answeredBefore = document.querySelector(".mcq-question").dataset.answered;
  assert(answeredBefore === "1", "ক্লিকের পরও data-answered '1' হয়নি — টেস্ট-সেটআপেই সমস্যা।");

  window.renderMcqView(); // ব্যবহারকারী অন্য ট্যাবে গিয়ে আবার MCQ-তে ফিরে এলেন (setMode('mcq') প্রতিবার এটাই কল করে)

  const questionElAfter = document.querySelector(".mcq-question");
  assert(
    questionElAfter.dataset.answered === "1",
    "MCQ ট্যাব ছেড়ে আবার ফিরলে data-answered রিসেট হয়ে '0' হয়ে যাচ্ছে — আগের উত্তরের প্রমাণ হারিয়ে গেছে। (BUGFIX.md BUG-14)"
  );
  const buttonsAfter = questionElAfter.querySelectorAll(".mcq-option");
  assert(
    Array.from(buttonsAfter).every((b) => b.disabled),
    "আগে উত্তর দেওয়া প্রশ্নের বাটনগুলো আবার enabled হয়ে গেছে — দ্বিতীয়বার উত্তর বদলানো যাচ্ছে। (BUGFIX.md BUG-14)"
  );
  assert(
    buttonsAfter[0].classList.contains("mcq-wrong") && buttonsAfter[2].classList.contains("mcq-correct"),
    "আগের সঠিক/ভুল ফিডব্যাক (রং) রি-রেন্ডারের পর দেখা যাচ্ছে না। (BUGFIX.md BUG-14)"
  );
});

test("renderMcqView — একই সেটের দুই ভিন্ন সেকশনে একই প্রশ্ন-নম্বর (সেকশন-রিস্টার্ট) হলে state ওভারল্যাপ করা উচিত না", async () => {
  const dom = await createTestWindow({});
  const { window } = dom;
  const { document } = window;

  // দুটো সেকশনই একই সেটে, দুটোতেই প্রশ্ন-নম্বর "১" (ম্যাগাজিনের সেকশন-ভিত্তিক
  // নম্বরিং কনভেনশন সিমুলেট করা) — কিন্তু আলাদা প্রশ্ন, আলাদা সঠিক উত্তর।
  setGlobal(dom, "MCQ_SETS", [
    {
      label: "টেস্ট সেট",
      question_count: 2,
      sections: [
        { name: "সেকশন-এ", questions: [{ number: "১", text: "A-প্রশ্ন?", options: ["ক", "খ", "গ", "ঘ"], answer_index: 0 }] },
        { name: "সেকশন-বি", questions: [{ number: "১", text: "B-প্রশ্ন?", options: ["ক", "খ", "গ", "ঘ"], answer_index: 2 }] },
      ],
    },
  ]);

  window.renderMcqView();
  const questions = document.querySelectorAll(".mcq-question");
  assert(questions.length === 2, "দুটো প্রশ্ন রেন্ডার হওয়ার কথা ছিল — টেস্ট-সেটআপেই সমস্যা।");
  const [qA, qB] = questions;

  qA.querySelector(".mcq-option").click(); // সেকশন-এ-র প্রশ্ন ১-এ উত্তর দেওয়া হলো (idx 0, সঠিক)

  window.renderMcqView(); // MCQ ট্যাব ছেড়ে আবার ফেরা (আগের টেস্টের মতোই re-render ট্রিগার)
  const qBAfter = document.querySelectorAll(".mcq-question")[1];
  assert(
    qBAfter.dataset.answered === "0",
    "সেকশন-এ-র প্রশ্ন ১-এ উত্তর দেওয়ার পর সেকশন-বি-র (ভিন্ন) প্রশ্ন ১-ও না-ছুঁয়েই 'answered' দেখাচ্ছে — " +
      "mcqKey-তে সেকশনের নাম বাদ পড়ায় state ওভারল্যাপ করছে। (BUGFIX.md BUG-24)"
  );
  assert(
    Array.from(qBAfter.querySelectorAll(".mcq-option")).every((b) => !b.disabled),
    "সেকশন-বি-র প্রশ্ন ১-এর বাটন না-ছুঁয়েই disabled হয়ে গেছে। (BUGFIX.md BUG-24)"
  );
});

// ── BUG-22 ক্লাস: study timer — hidden/বন্ধ ট্যাবের সময় study-time হিসেবে গোনা ──
function setDocumentHidden(dom, hidden) {
  const doc = dom.window.document;
  Object.defineProperty(doc, "hidden", { value: hidden, configurable: true });
  Object.defineProperty(doc, "visibilityState", { value: hidden ? "hidden" : "visible", configurable: true });
  doc.dispatchEvent(new dom.window.Event("visibilitychange"));
}

test("study timer — ট্যাব hidden থাকা সময়টুকু 'পড়ার সময়' হিসেবে গোনা উচিত না", async () => {
  const dom = await createTestWindow({});
  const { window } = dom;
  const { document } = window;

  const toggleBtn = document.getElementById("study-timer-toggle");
  assert(toggleBtn, "study-timer-toggle বাটন DOM-এ পাওয়া যায়নি — টেস্ট-সেটআপেই সমস্যা।");

  toggleBtn.click(); // টাইমার চালু
  let saved = JSON.parse(window.localStorage.getItem("oca_study_timer"));
  assert(saved && saved.running === true, "টাইমার চালু করার পরও localStorage-এ running:true সেভ হয়নি — টেস্ট-সেটআপেই সমস্যা।");

  // ট্যাব hidden হলো — এই মুহূর্তে elapsed ফ্রিজ হয়ে যাওয়া উচিত (startedAt=null)
  setDocumentHidden(dom, true);
  saved = JSON.parse(window.localStorage.getItem("oca_study_timer"));
  assert(
    saved.running === true && saved.startedAt === null,
    "ট্যাব hidden হওয়ার পরও startedAt null হয়নি (elapsed ফ্রিজ হয়নি)। (BUGFIX.md BUG-22)"
  );
  const frozenElapsed = saved.elapsedMs;

  // hidden অবস্থায় ৩০০ms অপেক্ষা — এই সময়টুকু গোনা উচিত না
  await new Promise((resolve) => window.setTimeout(resolve, 300));
  saved = JSON.parse(window.localStorage.getItem("oca_study_timer"));
  assert(
    saved.elapsedMs === frozenElapsed,
    "hidden অবস্থায় অপেক্ষার সময় elapsedMs বদলে গেছে — ফ্রিজ কাজ করছে না। (BUGFIX.md BUG-22)"
  );

  // আবার visible — এখান থেকেই ফের গোনা শুরু হওয়া উচিত
  setDocumentHidden(dom, false);
  saved = JSON.parse(window.localStorage.getItem("oca_study_timer"));
  assert(
    saved.running === true && typeof saved.startedAt === "number",
    "ট্যাব আবার visible হওয়ার পরও startedAt রিসেট হয়ে ফের গোনা শুরু হয়নি। (BUGFIX.md BUG-22)"
  );

  // visible অবস্থায় মাত্র ৩০ms পার হয়ে থামানো — আগের ৩০০ms hidden-সময়ের কোনো
  // অংশ যোগ হওয়া উচিত না, শুধু এই ৩০ms-ই।
  await new Promise((resolve) => window.setTimeout(resolve, 30));
  toggleBtn.click(); // থামানো
  saved = JSON.parse(window.localStorage.getItem("oca_study_timer"));
  const addedAfterResume = saved.elapsedMs - frozenElapsed;
  assert(
    addedAfterResume >= 0 && addedAfterResume < 200,
    `hidden-সময়ের (৩০০ms) একাংশও গণনায় যোগ হয়ে গেছে বলে মনে হচ্ছে — visible হওয়ার পর মাত্র ~৩০ms পার ` +
      `হয়েছিল, কিন্তু elapsedMs ${addedAfterResume}ms বেড়েছে। (BUGFIX.md BUG-22)`
  );
});

// ── রানার ─────────────────────────────────────────────────────────────────
async function main() {
  let passed = 0;
  const failed = [];
  for (const t of tests) {
    try {
      await t.fn();
      passed++;
    } catch (err) {
      failed.push({ name: t.name, error: err });
    }
  }
  if (failed.length === 0) {
    console.log(`✓ js regression tests পাস — ${passed}/${tests.length}টা।`);
    process.exit(0);
  } else {
    console.log(`✗ js regression tests ব্যর্থ — ${passed}/${tests.length} পাস, ${failed.length}টা ব্যর্থ:\n`);
    for (const f of failed) {
      console.log(`  ✗ ${f.name}`);
      console.log(`    ${f.error.message}\n`);
    }
    process.exit(1);
  }
}

main();
