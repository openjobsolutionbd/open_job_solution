// _dev/js_tests/dom_harness.mjs
//
// open_current_affairs-এর scripts/js_tests/dom_harness.mjs প্যাটার্ন অনুসরণ
// করে বানানো, কিন্তু এখানে app.js ফাইলগুলো index.html-এর ভেতরে inline না —
// আলাদা <script src="app.js"> ফাইল হিসেবে থাকে।
//
// গুরুত্বপূর্ণ: SUT script (app.js-এর definitions-only অংশ) HTML parse-এর
// সময় একটা real <script> ট্যাগ হিসেবেই বসানো হয় (createTestWindow-এ দেখুন),
// আলাদা dom.window.eval() কল দিয়ে না। jsdom-এ window.eval() দিয়ে top-level
// `let`/`const` ডিক্লেয়ার করলে সেটা real global lexical environment-এ
// persist করে না (পরের আলাদা eval() কল থেকে দেখা যায় না) — কিন্তু
// <script> ট্যাগ parse-time-এ চললে ঠিকভাবে persist করে (আসল ব্রাউজারের
// মতোই)। তাই SUT-কে HTML-এর ভেতরেই ইনলাইন বসানো হয়; setGlobal/getGlobal
// (existing বাইন্ডিং mutate/পড়া) এরপর window.eval() দিয়েই ঠিকমতো কাজ করে।
//
// প্রতিটা সেকশনের নিজস্ব app.js-এর শেষে
// `document.addEventListener('DOMContentLoaded', init)` আছে যেটা রিয়েল
// প্রশ্ন-ডেটা (data/*.js) আর নির্দিষ্ট DOM id আশা করে — টেস্টে সেটা
// এড়াতে সেই মার্কারের ঠিক আগ পর্যন্ত কোড রাখা হয় (definitions-only), যাতে
// প্রতিটা টেস্ট নিজের মতো সিন্থেটিক ডেটা দিয়ে init()/অন্য ফাংশন আলাদাভাবে
// কল করতে পারে।
import { JSDOM } from "jsdom";
import { readFileSync } from "node:fs";

const BOOTSTRAP_MARKER = "document.addEventListener('DOMContentLoaded'";
// প্রতিটা সেকশনের index.html-এ /_assets/shared/floating-search.js একটা
// পরের inline <script>-এ initFloatingSearch(...) সাথে সাথে (parse-time-এই)
// কল করে — টেস্টের সাথে সম্পর্কহীন এই ফিচারের জন্য আলাদা fetch/DOM সেটআপ
// এড়াতে একটা no-op স্টাব দেওয়া হয় (globals দিয়ে override করা যায়)।
const DEFAULT_GLOBALS = { initFloatingSearch: () => {} };

const cache = new Map();

function load(indexHtmlPath, appJsPath) {
  const key = `${indexHtmlPath}::${appJsPath}`;
  if (cache.has(key)) return cache.get(key);

  const html = readFileSync(indexHtmlPath, "utf-8");
  const fullScript = readFileSync(appJsPath, "utf-8");

  const cutIdx = fullScript.indexOf(BOOTSTRAP_MARKER);
  if (cutIdx === -1) {
    throw new Error(
      `${appJsPath}-এ "${BOOTSTRAP_MARKER}" মার্কার পাওয়া যায়নি — বুটস্ট্র্যাপ ` +
        "কোড রিফ্যাক্টর হয়েছে হয়তো। dom_harness.mjs-এর BOOTSTRAP_MARKER আপডেট করুন।"
    );
  }
  const sutScript = fullScript.slice(0, cutIdx);

  // app.js-এর <script src="..."> ট্যাগটা খুঁজে সেটার জায়গায় SUT বসানো হবে
  // (নাম থেকে বেসিক অংশ বের করে, path যেভাবেই লেখা থাক না কেন)।
  const appJsFileName = appJsPath.split("/").pop();
  const appScriptTagRe = new RegExp(`<script[^>]*\\ssrc="[^"]*${appJsFileName}"[^>]*></script>`);
  if (!appScriptTagRe.test(html)) {
    throw new Error(`${indexHtmlPath}-এ "${appJsFileName}"-এর script ট্যাগ খুঁজে পাওয়া যায়নি।`);
  }
  const htmlWithInlineSut = html.replace(appScriptTagRe, `<script>${sutScript}</script>`);
  // বাকি সব external script (data/*.js, floating-search.js ইত্যাদি) বাদ —
  // টেস্ট synthetic global দিয়ে প্রয়োজনীয় ডেটা সরবরাহ করে, ফাইল-সিস্টেম fetch দরকার নেই।
  const finalHtml = htmlWithInlineSut.replace(/<script[^>]*\ssrc="[^"]*"[^>]*><\/script>/g, "");

  const entry = { html: finalHtml };
  cache.set(key, entry);
  return entry;
}

/**
 * নির্দিষ্ট সেকশনের index.html-এর DOM structure নিয়ে একটা fresh jsdom window
 * বানায়, app.js-এর definitions-only (bootstrap ছাড়া) সংস্করণ inline <script>
 * হিসেবে parse-time-এ চালায় — প্রোডাকশন কোডই টেস্ট হয়, কোনো পুনর্লিখিত কপি না।
 *
 * @param {string} indexHtmlPath - পুরো path, যেমন bcs-mcq/index.html
 * @param {string} appJsPath - পুরো path, যেমন bcs-mcq/app.js
 * @param {object} [globals] - parse-এর আগে window-এ বসানো এক্সট্রা global (যেমন data_science)
 */
export async function createTestWindow(indexHtmlPath, appJsPath, globals = {}) {
  const { html } = load(indexHtmlPath, appJsPath);

  const dom = new JSDOM(html, {
    url: "http://localhost/",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(window) {
      window.confirm = () => true;
      window.scrollTo = () => {};
      window.print = () => {};
      window.Element.prototype.scrollIntoView = () => {};
      for (const [k, v] of Object.entries({ ...DEFAULT_GLOBALS, ...globals })) {
        window[k] = v;
      }
    },
  });

  await new Promise((resolve) => dom.window.setTimeout(resolve, 0));
  return dom;
}

export function setGlobal(dom, name, value) {
  dom.window.__testInject = value;
  dom.window.eval(`${name} = window.__testInject;`);
  delete dom.window.__testInject;
}

export function getGlobal(dom, name) {
  return dom.window.eval(name);
}

export function callFn(dom, name, ...args) {
  setGlobal(dom, "__testArgs", args);
  const result = dom.window.eval(`${name}(...window.__testArgs)`);
  delete dom.window.__testArgs;
  return result;
}
