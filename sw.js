"use strict";
const version = "v2::";
const offlineFundamentals = [
  "/",
  "/index.html",
  "/script.js",
  "/sw.js",
  "/assets/bootstrap/css/bootstrap.min.css",
  "/assets/bootstrap/js/bootstrap.min.js",
  "/assets/js/bs-init.js",
  "/assets/js/lottie-player.min.js",
  "/assets/js/new-hero.json",
  "/assets/img/apple-touch-icon.png",
  "/assets/img/background-black-white.webp",
  "/assets/img/icon_192.png",
  "/assets/img/icon_512.png",
  "/assets/img/logo.webp",
  "/assets/css/styles.css",
  "/assets/img/favicon.png",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(version + "fundamentals")
      .then((cache) => cache.addAll(offlineFundamentals))
      .then(() => console.log("WORKER: install completed"))
  );
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networked = fetch(event.request)
        .then(fetchedFromNetwork, unableToResolve)
        .catch(unableToResolve);
      return cached || networked;
      function fetchedFromNetwork(response) {
        const cacheCopy = response.clone();
        caches.open(version + "pages").then(function add(cache) {
          cache.put(event.request, cacheCopy);
        });
        return response;
      }
      function unableToResolve() {
        console.log("WORKER: fetch request failed in both cache and network.");
        return new Response("<h1>Service Unavailable</h1>", {
          status: 503,
          statusText: "Service Unavailable",
          headers: new Headers({ "Content-Type": "text/html" }),
        });
      }
    })
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => {
              return !key.startsWith(version);
            })
            .map((key) => {
              return caches.delete(key);
            })
        );
      })
      .then(() => console.log("WORKER: activate completed."))
  );
});
