// scripts/js_tests/dom_harness.mjs
//
// docs/index.html-এর মূল অ্যাপ-স্ক্রিপ্ট থেকে ফাংশন/টপ-লেভেল-স্টেট অংশটুকু বের
// করে একটা fresh jsdom window-এ চালায় — যাতে renderTopicContent,
// closeTopicModal, filterByTag ইত্যাদি REAL production কোডই টেস্ট হয়, কোনো
// copy-paste/পুনর্লিখিত সংস্করণ নয়। কোড বদলালে (রিফ্যাক্টর হলেও) টেস্ট
// স্বয়ংক্রিয়ভাবে নতুন কোডই টেস্ট করে।
//
// bootstrap chain ("loadIndex().then(...)" থেকে ফাইলের শেষ পর্যন্ত — service
// worker রেজিস্ট্রেশন, cache-refresh বাটন ইত্যাদি) ইচ্ছাকৃতভাবে বাদ দেওয়া হয়,
// কারণ সেটা পেজ-লোডেই একটা uncontrolled fetch চেইন শুরু করে দেয় যা প্রতিটা
// টেস্টে আলাদাভাবে সামলাতে হতো। ফাংশন ডেফিনিশন ও টপ-লেভেল স্টেট ভ্যারিয়েবল —
// দুটোই এই truncation-এর আগে থাকে, তাই অক্ষত থাকে।
import { JSDOM } from "jsdom";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const INDEX_HTML_PATH = path.join(ROOT, "docs", "index.html");

// এই মার্কারের ঠিক আগ পর্যন্ত রাখা হয়। মার্কার না পেলে harness জোরে fail
// করে — নীরবে পুরনো/ভুল কোড টেস্ট করার চেয়ে স্পষ্ট এরর ভালো।
const BOOTSTRAP_MARKER = "loadIndex().then(";

let cachedFullHtml = null;
let cachedMainScriptText = null;
let cachedSutScript = null;

function findMainScriptMatch(html) {
  // ভেন্ডর স্ক্রিপ্ট (marked.min.js, purify.min.js) src= দিয়ে লোড হয় — বাদ।
  // মূল অ্যাপ-স্ক্রিপ্ট = src ছাড়া সবচেয়ে বড় inline <script> ব্লক।
  const blocks = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)];
  if (blocks.length === 0) {
    throw new Error("docs/index.html-এ src ছাড়া কোনো inline <script> ব্লক পাওয়া যায়নি — harness ভাঙা।");
  }
  return blocks.reduce((a, b) => (b[1].length > a[1].length ? b : a));
}

function load() {
  if (cachedSutScript) return;
  const html = readFileSync(INDEX_HTML_PATH, "utf-8");
  const mainMatch = findMainScriptMatch(html);
  const fullText = mainMatch[1];

  const cutIdx = fullText.indexOf(BOOTSTRAP_MARKER);
  if (cutIdx === -1) {
    throw new Error(
      `docs/index.html-এর মূল script-এ "${BOOTSTRAP_MARKER}" মার্কার পাওয়া যায়নি — ` +
        "সম্ভবত bootstrap কোড রিফ্যাক্টর হয়েছে। scripts/js_tests/dom_harness.mjs-এর " +
        "BOOTSTRAP_MARKER আপডেট করুন, নাহলে regression টেস্ট পুরনো/ভুল কোড টেস্ট করবে।"
    );
  }

  cachedFullHtml = html;
  cachedMainScriptText = mainMatch[1];
  cachedSutScript = fullText.slice(0, cutIdx);
}

/** JSON রেসপন্স মক — SUT কোড `.ok`/`.status`/`.json()` ব্যবহার করে। */
export function jsonResponse(data, { ok = true, status = 200 } = {}) {
  return { ok, status, json: async () => data, text: async () => JSON.stringify(data) };
}

/** টেক্সট রেসপন্স মক — টপিক .md ফাইল fetch করতে (`.text()` ব্যবহার হয়)। */
export function textResponse(text, { ok = true, status = 200 } = {}) {
  return { ok, status, json: async () => JSON.parse(text), text: async () => text };
}

/** নির্দিষ্ট নির্দিষ্ট ডিলে-এর পর রেজলভ হওয়া রেসপন্স — race-condition টেস্টের জন্য। */
export function delayedResponse(response, delayMs) {
  return () => new Promise((resolve) => setTimeout(() => resolve(response), delayMs));
}

/**
 * URL-কীযুক্ত ম্যাপ থেকে একটা fetch মক বানায়। ম্যাপের ভ্যালু হতে পারে:
 * একটা response অবজেক্ট, অথবা একটা ফাংশন (url, options) => response/Promise।
 * ম্যাপে না-থাকা URL-এর জন্য খালি topics-index.json-স্টাইল ডিফল্ট রেসপন্স।
 */
export function mockFetchByUrl(handlers) {
  return async (url) => {
    const key = String(url).replace(/^\.\//, "");
    const entry = handlers[key];
    if (entry === undefined) {
      // অপ্রত্যাশিত/আন-হ্যান্ডলড URL — খালি কিন্তু বৈধ JSON, যাতে
      // পরীক্ষার আওতার বাইরের কোনো background fetch গোটা টেস্ট না ভাঙে।
      return jsonResponse({});
    }
    return typeof entry === "function" ? entry(url) : entry;
  };
}

/**
 * প্রোডাকশন docs/index.html-এর পুরো DOM গঠন (element id/class হুবহু আসল
 * ফাইলের মতো) নিয়ে একটা fresh window তৈরি করে, কিন্তু ভেতরের স্ক্রিপ্ট SUT
 * (definitions-only, bootstrap ছাড়া) দিয়ে বদলানো থাকে।
 */
export async function createTestWindow({ fetchImpl } = {}) {
  load();

  const testHtml = cachedFullHtml.replace(cachedMainScriptText, cachedSutScript);

  const dom = new JSDOM(testHtml, {
    url: "http://localhost/",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(window) {
      window.fetch = fetchImpl || (async () => jsonResponse({}));
      window.print = () => {};
      window.scrollTo = () => {};
      window.marked = { parse: (md) => md };
      window.DOMPurify = { sanitize: (html) => html };
      // jsdom লেআউট/স্ক্রলিং ইমপ্লিমেন্ট করে না — filterByTag/backToList এটা কল করে
      window.Element.prototype.scrollIntoView = () => {};
    },
  });

  // runScripts:"dangerously" দিয়ে string-document parse-এর সময় ইনলাইন
  // script সিঙ্ক্রোনাসভাবেই চলে; বাড়তি নিশ্চয়তার জন্য একটা tick অপেক্ষা।
  await new Promise((resolve) => dom.window.setTimeout(resolve, 0));

  return dom;
}

// SUT-এর টপ-লেভেল `let`/`const` ভ্যারিয়েবল (ALL_TOPICS, GHOTONAPROBAHO_MONTHS
// ইত্যাদি) — function declaration-এর মতো এগুলো window-এর প্রপার্টি হয় না
// (browser spec অনুযায়ী), তাই সরাসরি `window.ALL_TOPICS = ...` করলে তা SUT
// কোডের ভেতরের বাইন্ডিং স্পর্শই করে না। dom.window.eval() একই realm-এর
// global lexical scope শেয়ার করে বলেই আসল বাইন্ডিং বদলাতে পারে — জটিল ভ্যালু
// escape করার ঝামেলা এড়াতে আগে একটা সাধারণ window প্রপার্টিতে রেখে তারপর
// eval দিয়ে ভেতরের বাইন্ডিং-এ কপি করা হয়।
export function setGlobal(dom, name, value) {
  dom.window.__testInject = value;
  dom.window.eval(`${name} = window.__testInject;`);
  delete dom.window.__testInject;
}

export function getGlobal(dom, name) {
  return dom.window.eval(name);
}

export function makeTopic(overrides = {}) {
  return {
    slug: "test-topic",
    file: "topics/test-topic.md",
    title: "টেস্ট টপিক",
    tags: [],
    last_updated: "2026-01",
    ...overrides,
  };
}
