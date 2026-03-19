# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gatsby 5 static site that hosts the privacy policy for the **Tile Dash** mobile game. The site is a single-page app with inline React styles — no CSS framework or external stylesheets.

## Commands

- **Dev server:** `npm run develop` (serves at http://localhost:8000)
- **Production build:** `npm run build` (outputs to `public/`)
- **Serve build locally:** `npm run serve`
- **Clear cache:** `npm run clean`

## Architecture

- `src/pages/index.js` — The entire site: a single React component with inline styles rendering the privacy policy. Uses Gatsby's Head API for the page title.
- `src/privacy_policy.html` — Original HTML reference file (not used by Gatsby).
- `static/app-ads.txt` — AdMob ad monetization file, served as-is at the site root.
- `gatsby-config.js` — Minimal config with site metadata only (no plugins).

## Key Details

- The app uses **Google AdMob** for ads in the mobile game; the privacy policy and `app-ads.txt` reflect this.
- No test suite, linter, or formatter is configured.
- `siteUrl` in `gatsby-config.js` is a placeholder (`https://yourdomain.com`) that needs updating for production.
