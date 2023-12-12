let CACHE_NAME = "codePwa";

let urlCache = [
  "/static/js/bundle.js",
  "/manifest.json",
  "/fevicon.ico",
  "/maskable_icon_x192.png",
  "/posts",
  "/static/js/main.31fd760e.js",
  "/static/css/main.b1d7ec7b.css",
  "/static/js/787.65c26076.chunk.js",
  "/static/asset-manifest.json",
  "/static/index.html",
  "/static/manifest.json",
  "/",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }

        let fUrl = event.request.clone();
        return fetch(fUrl);
      })
    );
  }
});
