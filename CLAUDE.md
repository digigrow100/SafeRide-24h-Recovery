# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Where content lives

| Content change            | File path                          |
| -------------------------- | ----------------------------------- |
| Home page                  | `src/app/page.tsx`                  |
| Other pages                 | `src/app/[page]/page.tsx`           |
| Header                     | `src/components/Header.tsx`         |
| Footer                     | `src/components/Footer.tsx`         |
| Root layout / metadata     | `src/app/layout.tsx`                |
| Global CSS                 | `src/app/globals.css`               |
| Site config                | `next.config.mjs`                   |
| Optimized images           | `src/assets/images/`                |
| Static/public files        | `public/`                           |

## Image rules

- ALL content images go in `src/assets/images/`, never `public/`, unless they are true static public assets (e.g. favicon, or files that must be available by direct URL).
- All content images must be imported and rendered using Next.js `<Image />` from `next/image` for automatic optimization.
- `.webp` is the preferred format for content images.
- Every image must always include:
  - `alt`
  - `width`
  - `height`

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
