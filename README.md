# Podcast Summaries — GitHub + Netlify deployment

One static file (index.html). No build step. Update the file on GitHub
and Netlify redeploys automatically.

## One-time setup

1. GitHub: create a new repository (e.g. "Podcast-Summaries").
   On the quick-setup page click "uploading an existing file" and upload
   the CONTENTS of this zip (index.html, netlify.toml, README.md) to the
   repo root. Commit.

2. Netlify — pick ONE:

   A) KEEP your existing site URL (recommended — Google sign-in keeps
      working without changes):
      Netlify → your existing podcast site → Site configuration →
      Build & deploy → Continuous deployment → "Link repository" →
      GitHub → Podcast-Summaries. Build command: leave EMPTY.
      Publish directory: "." — then trigger a deploy.

   B) NEW site: Add new site → Import an existing project → GitHub →
      Podcast-Summaries → Deploy (no build command, publish ".").
      IMPORTANT: the site gets a NEW URL, so add it in Google Cloud
      Console → APIs & Services → Credentials → your OAuth Client ID →
      Authorized JavaScript origins (e.g. https://yoursite.netlify.app),
      or Google sign-in will fail with a redirect/origin error.

## Updating the app later

GitHub → open index.html → pencil icon (Edit) → paste the new version →
Commit. Or "Add file → Upload files" and replace it. Netlify deploys in
~30s. Works fine from a phone browser.
