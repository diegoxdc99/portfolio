# Diego Meneses — Portfolio

Personal portfolio / resume site for Diego Alberto Meneses Tamayo, Senior Backend Engineer. Built with Next.js and deployed as a static-ish site — not a product, not a SaaS, just a dev's CV on the web.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion v12** — section/card animations
- **GSAP 3 + ScrollTrigger** — scroll-driven SVG animations
- **shadcn/ui** — base UI components
- **React Hook Form + Zod** — contact form validation
- **Space Grotesk** via `next/font/google`

## Structure

All personal content lives in one place: [`data/portfolio.ts`](./data/portfolio.ts). Everything is bilingual (EN/ES) via `BilingualText` fields and a `LanguageProvider` context.

```
app/            ← layout, page, globals.css
components/
  sections/     ← Hero, Experience, Skills, Contact
  shared/       ← Navbar, Footer
  ui/           ← shadcn (don't touch)
data/
  portfolio.ts  ← all content here
providers/      ← LanguageProvider (EN/ES toggle)
hooks/          ← useLanguage, useScrollSpy, useGsapContext
lib/
  gsap.ts       ← single GSAP registration point
```

## Local dev

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customizing content

Edit `data/portfolio.ts` — basics, experience, skills, social links. All strings use `{ en: string; es: string }` so both languages stay in sync.
