const STATIC_CACHE = "lexora-static-v11";
const AUDIO_CACHE = "lexora-audio-forever-v3";

const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./words_data.js?v=11",
  "./lexora_extra_data.js?v=11",
  "./assets/index-BjtQRK6-.js?v=11",
  "./assets/index-W3zsysSI.css?v=11",
  "./manifest.webmanifest"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS).catch(() => {}))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== STATIC_CACHE && k !== AUDIO_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = req.url || "";

  // CRITICAL: Do NOT intercept external cross-origin audio streams (ssl.gstatic.com, dict.youdao.com, translate.googleapis.com)
  // so the browser's native <audio> element streams them directly with <meta name="referrer" content="no-referrer">!
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.origin !== self.location.origin) {
      return;
    }
  } catch (e) {
    return;
  }

  if (url.includes("/__audio_cache__") || url.includes("/api/audio")) {
    return;
  }

  // Network-first with offline cache fallback for local app shell files
  event.respondWith(
    fetch(req)
      .then(netResp => {
        if (netResp && netResp.status === 200) {
          caches.open(STATIC_CACHE).then(c => c.put(req, netResp.clone())).catch(() => {});
        }
        return netResp;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
