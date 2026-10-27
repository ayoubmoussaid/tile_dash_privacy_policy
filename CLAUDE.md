# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gatsby 5 static site that hosts the privacy policies for RainmanDev's mobile games: **Tile Dash** at `/` and **Snapfall** at `/snapfall/`. Pages use inline React styles shared from `src/styles/policy.js` — no CSS framework or external stylesheets.

## Commands

- **Dev server:** `npm run develop` (serves at http://localhost:8000)
- **Production build:** `npm run build` (outputs to `public/`)
- **Serve build locally:** `npm run serve`
- **Clear cache:** `npm run clean`

## Architecture

- `src/pages/index.js` — Tile Dash privacy policy (site root; its URL is on the Tile Dash Play listing, so keep it at `/`).
- `src/pages/snapfall.js` — Snapfall privacy policy, served at `/snapfall/`. Snapfall uses on-device storage, Google AdMob (with UMP consent), Google Play Games Services leaderboards and Firebase Crashlytics; no analytics or other Firebase services.
- `src/styles/policy.js` — Shared inline styles. Each page uses Gatsby's Head API for its title.
- `src/privacy_policy.html` — Original HTML reference file (not used by Gatsby).
- `static/app-ads.txt` — AdMob ad monetization file, served as-is at the site root.
- `gatsby-config.js` — Minimal config with site metadata only (no plugins).

## Key Details

- Both games use **Google AdMob** under the same publisher account; one `app-ads.txt` line covers every app.
- No test suite, linter, or formatter is configured.
- `siteUrl` in `gatsby-config.js` is a placeholder (`https://yourdomain.com`) that needs updating for production.
