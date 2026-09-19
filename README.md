# SafeRide 24h Recovery

A Next.js (App Router + TypeScript + Tailwind CSS) website for SafeRide 24h
Recovery, a Bradford-based vehicle recovery and roadside assistance service.

## Folder Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/          # optimized content images
│   ├── components/
│   │   ├── Header.tsx       # global site header (nav, phone CTA)
│   │   ├── Footer.tsx       # global site footer
│   │   ├── MobileCallBar.tsx
│   │   ├── home/            # Home page sections
│   │   ├── about/           # About Us page sections
│   │   ├── services/        # Services page sections
│   │   └── contact/         # Contact Us page sections
│   ├── lib/
│   │   └── site.ts          # phone/email/nav constants
│   ├── app/
│   │   ├── layout.tsx       # root layout, fonts, metadata, Header/Footer
│   │   ├── page.tsx         # Home
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   └── globals.css
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── package.json
├── tsconfig.json
├── next-env.d.ts
├── .gitignore
├── README.md
└── CLAUDE.md
```

Header and Footer are rendered once, globally, in `src/app/layout.tsx` and
apply automatically to every page — pages only need to render their own
section components.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```
