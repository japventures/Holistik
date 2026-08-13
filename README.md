# HOLISTIK

Public website and strategic Brand & Innovation Book for HOLISTIK.

## Routes

- `/` — public brand website
- `/deck` — strategic brand, opportunity, innovation and growth presentation

## Editing the site

Most copy, categories, principles and pipeline items live in `app/content.ts`.
Update that file in GitHub to change the site without restructuring the pages.

Page composition lives in:

- `app/page.tsx`
- `app/deck/page.tsx`
- `app/globals.css`

Brand and legacy product imagery lives in `public/images/`. The social sharing
card is `public/og.jpg`.

## Local development

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Before publishing:

```bash
pnpm build
pnpm test
```

## Content notes

The `/deck` industry prioritization is intentionally directional. Quantitative
market values should be source-validated by region before external investor use.
