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
