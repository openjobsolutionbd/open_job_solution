const CACHE_PREFIX = 'primary-';
const CACHE_VERSION = CACHE_PREFIX + 'v1.21';

const ASSETS = [
  '/primary-mcq/',
  '/primary-mcq/style.css',
  '/primary-mcq/index.html',
  '/fonts/noto-bengali.css',
  '/fonts/noto-serif-bengali-400.woff2',
  '/fonts/noto-serif-bengali-500.woff2',
  '/fonts/noto-serif-bengali-600.woff2',
  '/fonts/noto-serif-bengali-700.woff2'
];

const OPTIONAL_ASSETS = [
  '/primary-mcq/data/data.js'
];

function isAppFile(url) {
  return (
    url.pathname === '/primary-mcq/' ||
    url.pathname.startsWith('/primary-mcq/') && (
      url.pathname.endsWith('.html') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.js')
    )
  );
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then(c => c.addAll(ASSETS))
      .then(() => caches.open(CACHE_VERSION).then(cache =>
        Promise.all(OPTIONAL_ASSETS.map(url =>
          fetch(url)
            .then(res => { if (res.ok) cache.put(url, res); })
            .catch(() => {})
        ))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  // শুধু নিজের prefix ('primary-') দিয়ে শুরু হওয়া পুরনো cache মুছবে।
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
            return caches.match('/primary-mcq/index.html');
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
      }).catch(() => caches.match('/primary-mcq/index.html'));
    })
  );
});
