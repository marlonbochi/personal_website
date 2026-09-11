# Marlon Bueno Bochi — Personal Website

Personal portfolio site, based on the [DevPortfolio](https://github.com/RyanFitzgerald/devportfolio) template (Astro + Tailwind CSS v4), with English/Portuguese support.

## How it works

- `/en/` and `/pt/` are static, fully-translated pages.
- `/` auto-detects the visitor's browser language (`navigator.language`) and redirects to `/en/` or `/pt/`. Once a visitor picks a language via the switcher, that choice is remembered (`localStorage`) for future visits.
- The language switcher (top-right corner) shows the flag of the language you'll switch **to**: 🇧🇷 while browsing in English, 🇺🇸 while browsing in Portuguese.

## Content

All personal content (bio, experience, education) lives in:

- [`src/data/site.ts`](src/data/site.ts) — shared data that doesn't change by language (name, accent color, social links, skills).
- [`src/i18n/en.ts`](src/i18n/en.ts) / [`src/i18n/pt.ts`](src/i18n/pt.ts) — translated copy per language.

Edit those files to update the site — no need to touch the components.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Zero-config on [Vercel](https://vercel.com) — it auto-detects the Astro static build. Just import the GitHub repo into a new Vercel project.
