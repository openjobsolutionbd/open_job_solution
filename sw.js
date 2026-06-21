// sw.js — Root Service Worker (Open Job Solution)
// এই SW শুধু হোম পেজ (/) handle করে।
// /bcs-mcq/, /primary-mcq/, /written-exam/ — এদের নিজস্ব sw.js আছে,
// আরো specific scope হওয়ায় browser সেগুলোকেই priority দেয়।
// এই ফাইল আছে শুধু একটাই কারণে: পুরো অ্যাপ "Open Job Solution" নামে
// এক PWA হিসেবে install-যোগ্য হয় (manifest.json + এই SW একসাথে দরকার)।

const CACHE_PREFIX = 'home-';
const CACHE_VERSION = CACHE_PREFIX + 'v1.16';

const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/fonts/noto-bengali.css',
  '/fonts/noto-serif-bengali-400.woff2',
  '/fonts/noto-serif-bengali-500.woff2',
  '/fonts/noto-serif-bengali-600.woff2',
  '/fonts/noto-serif-bengali-700.woff2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  // শুধু নিজের prefix ('home-') দিয়ে শুরু হওয়া পুরনো cache মুছবে।
  // অন্য সেকশনের (bcs-mcq, primary-mcq, written-exam) cache স্পর্শ করবে না।
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_VERSION)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // শুধু root-level navigation/asset request handle করবে।
  // /bcs-mcq/, /primary-mcq/, /written-exam/ এর নিজস্ব SW থাকায়
  // এখানে কিছু করার প্রয়োজন নেই — তারা নিজেই বেশি specific scope-এ intercept করবে।
  if (url.pathname.startsWith('/bcs-mcq/') ||
      url.pathname.startsWith('/primary-mcq/') ||
      url.pathname.startsWith('/written-exam/')) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_VERSION).then((c) => c.put(e.request, resClone));
        return res;
      })
      .catch(() => caches.match(e.request).then((cached) => cached || caches.match('/index.html')))
  );
});
