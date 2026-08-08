# Podcast Summaries

Static app + PWA. Deploys from GitHub via Cloudflare Workers (static assets).

Files:
- index.html            the whole app
- wrangler.toml         Cloudflare deploy config (already in your repo)
- manifest.webmanifest  PWA manifest (name, icons, standalone display)
- icon-192.png / icon-512.png
- sw.js                 minimal service worker (no caching — updates instant)

## Install on phone
- iPhone (Safari): open the site → Share → "Add to Home Screen".
- Android (Chrome): open the site → menu ⋮ → "Add to Home screen" / "Install app".
Opens full-screen with its own icon, like a native app.

## Updating
Replace index.html on GitHub → auto-deploys. The service worker never caches,
so the installed app always loads the newest version.
