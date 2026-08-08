// Minimal service worker: satisfies install criteria, never caches —
// every load fetches the latest deploy, so updates are instant.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
