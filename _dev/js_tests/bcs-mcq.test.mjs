// _dev/js_tests/bcs-mcq.test.mjs
//
// bcs-mcq/app.js-এর জন্য regression test — production কোডই সরাসরি টেস্ট হয়
// (dom_harness.mjs দেখুন)। নতুন কোনো bug ধরা পড়লে/ঠিক হলে এখানে একটা
// matching test() যোগ করা উচিত, যাতে ভবিষ্যতে রিফ্যাক্টরে চুপচাপ আবার
// ফিরে না আসে (open_current_affairs-এর BUGFIX.md-ভিত্তিক প্যাটার্ন অনুসরণ)।
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createTestWindow, setGlobal, getGlobal, callFn } from "./dom_harness.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const INDEX = path.join(ROOT, "bcs-mcq", "index.html");
const APPJS = path.join(ROOT, "bcs-mcq", "app.js");

export const tests = [];
function test(name, fn) {
  tests.push({ name: `[bcs-mcq] ${name}`, fn });
}
function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function sampleQuestion(overrides = {}) {
  return {
    id: "science-1",
    question: "টেস্ট প্রশ্ন?",
    topic: "টেস্ট টপিক",
    options: ["ক", "খ", "গ", "ঘ"],
    answer: 1,
    explanation: "ব্যাখ্যা",
    ...overrides,
  };
}

test("toBn — ইংরেজি সংখ্যাকে বাংলা অঙ্কে বদলানো উচিত", async () => {
  const dom = await createTestWindow(INDEX, APPJS);
  assert(callFn(dom, "toBn", 2026) === "২০২৬", "toBn(2026) ভুল ফলাফল দিয়েছে।");
  assert(callFn(dom, "toBn", 0) === "০", "toBn(0) ভুল ফলাফল দিয়েছে।");
});

test("escapeHtml — বিশেষ ক্যারেক্টার escape করা উচিত, খালি/undefined-এ ভাঙা উচিত না", async () => {
  const dom = await createTestWindow(INDEX, APPJS);
  assert(
    callFn(dom, "escapeHtml", `<script>alert('x')</script>`) ===
      "&lt;script&gt;alert(&#039;x&#039;)&lt;/script&gt;",
    "escapeHtml() সঠিকভাবে escape করছে না — XSS-এর ঝুঁকি।"
  );
  assert(callFn(dom, "escapeHtml", "") === "", "escapeHtml('') খালি স্ট্রিং ফেরত দেয়নি।");
});

test("normalizeText — trim/lowercase/NFC normalize করা উচিত", async () => {
  const dom = await createTestWindow(INDEX, APPJS);
  assert(callFn(dom, "normalizeText", "  Hello  ") === "hello", "normalizeText() trim/lowercase ঠিকমতো করছে না।");
  assert(callFn(dom, "normalizeText", null) === "", "normalizeText(null) খালি স্ট্রিং ফেরত দেয়নি।");
});

test("getFiltered — সার্চ কোয়েরি প্রশ্ন/টপিক/অপশনে ম্যাচ করা উচিত", async () => {
  const dom = await createTestWindow(INDEX, APPJS, {
    data_science: [
      sampleQuestion({ id: "s1", question: "পানির স্ফুটনাঙ্ক কত?", topic: "পদার্থবিজ্ঞান" }),
      sampleQuestion({ id: "s2", question: "আলাদা প্রশ্ন", topic: "রসায়ন" }),
    ],
  });
  setGlobal(dom, "currentSubject", "science");
  setGlobal(dom, "searchQuery", "স্ফুটনাঙ্ক");

  const result = callFn(dom, "getFiltered");
  assert(result.length === 1 && result[0].id === "s1", "getFiltered() সার্চ কোয়েরি অনুযায়ী ঠিকভাবে ফিল্টার করেনি।");
});

test("getFiltered — bookmark মোডে শুধু বুকমার্ক করা প্রশ্ন দেখানো উচিত", async () => {
  const dom = await createTestWindow(INDEX, APPJS, {
    data_science: [sampleQuestion({ id: "s1" }), sampleQuestion({ id: "s2" })],
  });
  setGlobal(dom, "currentSubject", "science");
  setGlobal(dom, "currentMode", "bookmark");
  setGlobal(dom, "bookmarks", { s2: true });

  const result = callFn(dom, "getFiltered");
  assert(
    result.length === 1 && result[0].id === "s2",
    "getFiltered() bookmark মোডে বুকমার্ক-না-করা প্রশ্নও দেখাচ্ছে।"
  );
});

test("getFiltered — weak মোডে বেশি ভুল হওয়া প্রশ্ন আগে আসা উচিত", async () => {
  const dom = await createTestWindow(INDEX, APPJS, {
    data_science: [sampleQuestion({ id: "s1" }), sampleQuestion({ id: "s2" }), sampleQuestion({ id: "s3" })],
  });
  setGlobal(dom, "currentSubject", "science");
  setGlobal(dom, "currentMode", "weak");
  setGlobal(dom, "errorCounts", { s1: 1, s2: 5, s3: 0 });

  const result = callFn(dom, "getFiltered");
  assert(
    result.map((q) => q.id).join(",") === "s2,s1,s3",
    `getFiltered() weak মোডে ভুল-সংখ্যা অনুযায়ী sort করেনি (পেলাম: ${result.map((q) => q.id).join(",")})।`
  );
});

test("handleAnswer — সঠিক উত্তরে errorCounts না বাড়া উচিত, ভুল উত্তরে বাড়া উচিত", async () => {
  const dom = await createTestWindow(INDEX, APPJS);
  const { document } = dom.window;
  setGlobal(dom, "answeredState", {});
  setGlobal(dom, "errorCounts", {});
  const card = document.createElement("div");
  const optBtns = [0, 1].map(() => {
    const b = document.createElement("button");
    b.innerHTML = '<span class="opt-icon"></span>';
    return b;
  });
  const explainWrap = document.createElement("div");

  callFn(dom, "handleAnswer", "q1", 1, 1, optBtns, explainWrap, card); // সঠিক (selected===correct)

  const answeredState = getGlobal(dom, "answeredState");
  const errorCounts = getGlobal(dom, "errorCounts");
  assert(answeredState.q1.correct === true, "সঠিক উত্তরে answeredState.correct true হয়নি।");
  assert(!errorCounts.q1, "সঠিক উত্তরেও errorCounts বেড়ে গেছে।");

  const card2 = document.createElement("div");
  const optBtns2 = [0, 1].map(() => {
    const b = document.createElement("button");
    b.innerHTML = '<span class="opt-icon"></span>';
    return b;
  });
  callFn(dom, "handleAnswer", "q2", 0, 1, optBtns2, document.createElement("div"), card2); // ভুল

  const errorCounts2 = getGlobal(dom, "errorCounts");
  assert(errorCounts2.q2 === 1, "ভুল উত্তরে errorCounts ১ হয়নি।");
});

test("handleAnswer — একই প্রশ্নে দ্বিতীয়বার কল করলে কিছু বদলানো উচিত না (ডাবল-কাউন্ট গার্ড)", async () => {
  const dom = await createTestWindow(INDEX, APPJS);
  const { document } = dom.window;
  setGlobal(dom, "answeredState", {});
  setGlobal(dom, "errorCounts", {});
  const makeBtns = () =>
    [0, 1].map(() => {
      const b = document.createElement("button");
      b.innerHTML = '<span class="opt-icon"></span>';
      return b;
    });

  callFn(dom, "handleAnswer", "q1", 0, 1, makeBtns(), document.createElement("div"), document.createElement("div")); // প্রথমবার ভুল
  callFn(dom, "handleAnswer", "q1", 1, 1, makeBtns(), document.createElement("div"), document.createElement("div")); // একই qId, ভিন্ন selectedIdx (re-render/re-click সিমুলেট)

  const errorCounts = getGlobal(dom, "errorCounts");
  const answeredState = getGlobal(dom, "answeredState");
  assert(
    errorCounts.q1 === 1,
    `একই প্রশ্নে দ্বিতীয় কলের পরও errorCounts.q1 আবার বেড়ে গেছে (পেলাম ${errorCounts.q1}, প্রত্যাশিত ১) — ডাবল-কাউন্ট গার্ড ভেঙেছে।`
  );
  assert(
    answeredState.q1.selected === 0,
    "answeredState.q1.selected দ্বিতীয় কলে বদলে গেছে — প্রথম উত্তরই চূড়ান্ত থাকা উচিত ছিল।"
  );
});
