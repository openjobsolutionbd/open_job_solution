const CACHE_PREFIX = 'home-';
const CACHE_VERSION = CACHE_PREFIX + 'v1.170';

// এই sw.js শুধু হোম পেজ (root) cache করে — bcs-mcq/primary-mcq/written-exam/
// current-affairs প্রতিটার নিজস্ব sw.js আলাদাভাবে নিজেদের ফাইল cache করে।
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/_assets/icons/icon-192.png',
  '/_assets/icons/icon-512.png',
  '/_assets/fonts/noto-bengali.css',
  '/_assets/fonts/noto-serif-bengali-400.woff2',
  '/_assets/fonts/noto-serif-bengali-500.woff2',
  '/_assets/fonts/noto-serif-bengali-600.woff2',
  '/_assets/fonts/noto-serif-bengali-700.woff2'
];

// বাগ-ফিক্স: এই চারটা সেকশনের প্রতিটার নিজস্ব sw.js আছে, নিজের এলাকার
// জন্য। কেউ প্রথমবার ওই সেকশনে ঢোকার সময়, নিজস্ব sw.js activate হওয়ার
// আগ পর্যন্ত এই রুট sw.js-ই ওই পেজ নিয়ন্ত্রণ করত (কারণ scope অনুযায়ী
// রুট sw সবচেয়ে আগে সক্রিয় থাকে) — ফলে বিরল ক্ষেত্রে (ওই মুহূর্তে নেট
// সমস্যা হলে) ভুল/ভাঙা কনটেন্ট দেখানোর ঝুঁকি ছিল। তাই এই পাথগুলো রুট
// sw.js এখন সম্পূর্ণ ছেড়ে দেয় — নিজস্ব sw.js (বা ব্রাউজার সরাসরি) সামলাবে।
const SECTION_PREFIXES = [
  '/bcs-mcq/',
  '/primary-mcq/',
  '/written-exam/',
  '/current-affairs/'
];

function isAppFile(url) {
  return url.pathname === '/' || url.pathname === '/index.html';
}

function isSectionOwned(url) {
  return SECTION_PREFIXES.some(p => url.pathname.startsWith(p));
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  // শুধু নিজের prefix ('home-') দিয়ে শুরু হওয়া পুরনো cache মুছবে।
  // অন্য সেকশনের cache স্পর্শ করবে না।
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(
      keys
        .filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE_VERSION)
        .map(k => caches.delete(k))
    )
  ).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // বাগ-ফিক্স: সেকশন-নিজস্ব এলাকায় হাত না দেওয়া (উপরের নোট দেখুন)
  if (isSectionOwned(url) && url.origin === self.location.origin) return;

  if (isAppFile(url) && url.origin === self.location.origin) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.status === 200) {
            const resClone = res.clone();
            caches.open(CACHE_VERSION).then(c => c.put(e.request, resClone));
          }
          return res;
        })
        .catch(() => {
          return caches.match(e.request).then(cached => {
            if (cached) return cached;
            // বাগ-ফিক্স: শুধু navigation (পেজ-লোড) রিকোয়েস্টের জন্যই app-shell
            // ফলব্যাক দেওয়া হচ্ছে — open_current_affairs-এর প্যাটার্ন অনুসরণে।
            if (e.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return undefined;
          });
        })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type !== 'opaque') {
          caches.open(CACHE_VERSION).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => {
        // বাগ-ফিক্স: manifest/আইকন/ফন্ট অফলাইনে cache-এ না থাকলে HTML
        // app-shell ফেরত না দিয়ে স্বাভাবিক network error propagate হচ্ছে।
        if (e.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        return undefined;
      });
    })
  );
});
