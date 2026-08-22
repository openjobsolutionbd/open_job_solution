// Open Current Affairs service worker — অফলাইনেও আগে দেখা টপিক পড়া যাবে।
// CACHE_NAME নিচে বিল্ড-স্ক্রিপ্ট স্বয়ংক্রিয়ভাবে VERSION ফাইল থেকে বসিয়ে দেয়।
// তাই VERSION বাড়লেই পুরনো ক্যাশ বাতিল হয়ে সবার জন্য নতুন ভার্সন লোড হয় —
// এই ফাইলে হাতে কিছু বদলানোর দরকার নেই।
const CACHE_NAME = "oca-cache-1.7.1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./vendor/marked.min.js",
  "./vendor/purify.min.js",
  // TASK 4: ইনডেক্স ফাইলগুলোও ইনস্টল-টাইমে ক্যাশ করা হয়, যাতে প্রথমবার
  // অফলাইনে গেলেও (একবারও এই নির্দিষ্ট ফাইল না খুলে থাকলেও) তালিকা ও
  // দৈনিক ঘটনাপ্রবাহ মোড — দুইটাই কাজ করে।
  "./topics-index.json",
  "./ghotonaprobaho-index.json",
  "./top-news-index.json",
  "./mcq-index.json",
  "./version.json",
  // ফন্ট ফাইলগুলোও আগে থেকে ক্যাশ করা হয়, যাতে প্রথম অফলাইন ভিজিটেও
  // সঠিক বাংলা ফন্টে (সিস্টেম ফন্টে ফলব্যাক না করে) পেজ দেখা যায়।
  "./fonts/Kalpurush.woff2",
  "./fonts/Kalpurush.ttf", // woff2 সাপোর্ট না থাকলে (পুরনো browser) এটাই ব্যবহৃত হয়
  "./fonts/HindSiliguri-Medium.woff2",
  "./fonts/HindSiliguri-SemiBold.woff2",
  "./fonts/NotoSerifBengali-Regular.woff2",
  "./fonts/NotoSerifBengali-Bold.woff2",
];

// ইনস্টলের সময় মূল অ্যাপ-শেল ক্যাশ করে রাখা
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// পুরনো ক্যাশ পরিষ্কার করা
// বাগ-ফিক্স: caches.keys() পুরো origin-এর সব cache-এর নাম দেখায়, শুধু এই
// service worker-এরটা না। standalone সাইটে সমস্যা ছিল না, কিন্তু
// open_job_solution-এর ভেতরে এই SW প্রতিবার activate হওয়ার সময় (মানে
// প্রতিবার VERSION বাড়লে) হোমপেজ + অন্য তিন সেকশনের cache-ও মুছে ফেলত।
// অন্য তিনটা সেকশনের sw.js যেভাবে নিজের প্রিফিক্স দিয়ে ফিল্টার করে, এখানেও
// একই নিয়মে শুধু "oca-cache-" প্রিফিক্সের পুরনো cache মোছা হচ্ছে।
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name.startsWith("oca-cache-") && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// ফেচ-স্ট্র্যাটেজি:
// - topics-index.json, version.json ও topics/*.md (কনটেন্ট):
//   আগে নেটওয়ার্ক থেকে চেষ্টা, অফলাইন হলে ক্যাশ থেকে দেখানো — যাতে নতুন তথ্য
//   (ভার্সন নম্বর সহ) থাকলে সেটাই আগে দেখা যায়, পুরনো ক্যাশড ভার্সন আটকে না থাকে।
// - বাকি সব (অ্যাপ-শেল): আগে ক্যাশ থেকে দেখানো, দ্রুত লোডের জন্য।
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isContent =
    url.pathname.endsWith("topics-index.json") ||
    url.pathname.endsWith("ghotonaprobaho-index.json") ||
    url.pathname.endsWith("top-news-index.json") ||
    url.pathname.endsWith("mcq-index.json") ||
    url.pathname.endsWith("version.json") ||
    url.pathname.includes("/topics/") ||
    // SEO রিডাইরেক্ট পাতাগুলো (docs/topic/<slug>/index.html) — শেয়ার করা লিংক
    // অফলাইনেও যেন কাজ করে, তাই এগুলোও নেটওয়ার্ক-ফার্স্ট কনটেন্ট হিসেবে গণ্য হবে
    url.pathname.includes("/topic/");

  if (isContent) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // TASK 3: শুধু সফল (2xx) রেসপন্সই ক্যাশ হয় — 404/500 কখনো ক্যাশ হয় না,
          // আর কখনোই একটা ভালো/আগের ক্যাশড ফাইলকে ব্যর্থ রেসপন্স দিয়ে ওভাররাইট করা হয় না।
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request)
          .then((response) => {
            // এখানেও একই নিয়ম: শুধু সফল রেসপন্সই ক্যাশে যোগ হয়।
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
          })
          .catch(() => {
            // BUG FIX: নেটওয়ার্ক ব্যর্থ হলে (সাময়িক সংযোগ বিচ্ছিন্নতা ইত্যাদি)
            // নেভিগেশন রিকোয়েস্টের (পেজ ওপেন করা/হোম স্ক্রিন থেকে অ্যাপ চালু করা)
            // জন্য ব্রাউজারের কাঁচা "সাইট খোলা যাচ্ছে না" এরর দেখানোর বদলে
            // ক্যাশ করা index.html (অ্যাপ-শেল) ফিরিয়ে দেওয়া হয়, যাতে PWA
            // অফলাইনেও/সাময়িক নেটওয়ার্ক সমস্যায়ও খুলতে পারে।
            if (event.request.mode === "navigate") {
              return caches.match("./index.html");
            }
            return undefined;
          });
      })
    );
  }
});
