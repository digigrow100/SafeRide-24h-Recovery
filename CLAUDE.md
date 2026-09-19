# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Where content lives

| Content change              | File path                                 |
| ---------------------------- | ------------------------------------------ |
| Home page                   | `src/app/page.tsx` + `src/components/home/`     |
| About Us page                | `src/app/about/page.tsx` + `src/components/about/` |
| Services page                | `src/app/services/page.tsx` + `src/components/services/` |
| Contact Us page              | `src/app/contact/page.tsx` + `src/components/contact/` |
| Other new pages              | `src/app/[page]/page.tsx`                 |
| Header (global, all pages)   | `src/components/Header.tsx`               |
| Footer (global, all pages)   | `src/components/Footer.tsx`               |
| Mobile sticky call bar       | `src/components/MobileCallBar.tsx`        |
| Phone/email/nav constants    | `src/lib/site.ts`                         |
| Root layout / metadata / fonts | `src/app/layout.tsx`                    |
| Global CSS / design tokens   | `src/app/globals.css`, `tailwind.config.ts` |
| Site config                  | `next.config.mjs`                         |
| Optimized images             | `src/assets/images/`                      |
| Static/public files          | `public/`                                 |

Header and Footer are rendered once in `src/app/layout.tsx` and apply to every
page automatically — do not import or render them inside individual pages.

## Image rules

- ALL content images go in `src/assets/images/`, never `public/`, unless they are true static public assets (e.g. favicon, or files that must be available by direct URL).
- All content images must be imported and rendered using Next.js `<Image />` from `next/image` for automatic optimization.
- `.webp` is the preferred format for content images.
- Every image must always include:
  - `alt`
  - `width`
  - `height`
- **Current exception:** the Home/About/Services/Contact pages currently use temporary remote placeholder images from an AI design-mockup tool (`lh3.googleusercontent.com`, allow-listed in `next.config.mjs` under `images.remotePatterns`). These are stand-ins only — they should be replaced with real photography saved into `src/assets/images/` as `.webp` and imported locally as soon as real photos are available, then the remote pattern can be removed.

## Editing rules

- Only edit the specific file/component identified for a request.
- Never crawl, refactor, reorganize, or "clean up" unrelated files.
- Never add dependencies unless explicitly asked.
- If a request is ambiguous about which page or component it targets, ask before editing.

## Commands

```bash
npm install
npm run dev
npm run build
npm run start
```
