# Accredian Enterprise — Landing Page (Full Stack Developer Intern Assignment)

A redesigned, premium clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

This is not a pixel-for-pixel copy. Section order and content hierarchy follow the reference site; visual design, animation, component architecture, and a working lead-capture backend were rebuilt from scratch to a higher production bar.

---

## Live Demo

- **Live URL:** _add your Vercel deployment link here after `vercel --prod`_
- **Repository:** _add your GitHub repo link here_

---

## Tech Stack

| Concern            | Choice                                   |
|---------------------|-------------------------------------------|
| Framework            | Next.js 15 (App Router, Turbopack)        |
| Language             | TypeScript (strict mode, no `any`)        |
| Styling              | Tailwind CSS v4 (CSS-variable theme)      |
| Animation            | Framer Motion                              |
| Icons                | Lucide React (+ 5 hand-written social SVGs — see AI Usage) |
| Forms & Validation   | React Hook Form + Zod                     |
| HTTP Client          | Axios                                      |
| Backend              | Next.js Route Handlers (`app/api/leads`)  |
| Lint / Format        | ESLint + Prettier (`prettier-plugin-tailwindcss`) |

---

## Folder Structure

```
app/                      # App Router: layout, page, route handlers, SEO routes
  api/leads/route.ts       # Mock lead-capture backend (POST + GET)
  layout.tsx               # Root layout, metadata, Navbar/Footer shell
  page.tsx                 # Composes all page sections in order
  robots.ts / sitemap.ts   # SEO metadata routes
  globals.css              # Design tokens (colors, radii, keyframes) via @theme

components/
  ui/                      # Generic, reusable primitives (Button, Container,
                            # Badge, SectionHeading, FormInput, AccordionItem, …)
  layout/                  # Navbar, Footer, Logo, MobileMenu, DesktopNav

sections/                  # One folder per page section, composed in page.tsx
  Hero/  Stats/  Partners/  Edge/  Domain/  Cat/  Faq/
  Testimonials/  LeadForm/  Cta/

hooks/                     # useScrolled, useActiveSection, useCountUp
lib/                       # cn() utility, Axios client, Zod schemas
services/                  # leadService.ts — API call isolation layer
constants/                 # Static content/data per section (typed)
types/                     # Shared TypeScript interfaces
```

**Architecture principles applied:**
- Every section is self-contained (own folder, own data file in `constants/`).
- No file exceeds ~200 lines — large sections are split into sub-components.
- Presentational primitives (`components/ui`) never import section-specific data.
- Business logic (validation, API calls) lives in `lib/` and `services/`, never inline in components.

---

## Getting Started

### Prerequisites
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

### Install
```bash
npm install
```

### Develop
```bash
npm run dev
```
Visit `http://localhost:3000`.

### Lint & Format
```bash
npx eslint .
npx prettier --check .
```

### Type-check
```bash
npx tsc --noEmit
```

### Production build
```bash
npm run build
npm run start
```

---

## API — Lead Capture (Bonus Feature)

`POST /api/leads` accepts `{ name, email, company, phone, message }`, validates it server-side with the same Zod schema used on the client (`lib/validations/lead.ts`), and stores it in an in-memory array (stands in for a real DB/CRM in this assignment scope).

```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Jordan Rivera","email":"jordan@company.com","company":"Acme Corp","phone":"+919876543210","message":"Interested in a leadership program for 40 engineers."}'
# → { "success": true, "data": { "id": "..." } }

curl http://localhost:3000/api/leads
# → { "success": true, "data": { "count": 1 } }
```

Invalid payloads return `422` with the first validation message; malformed JSON returns `400`.

---

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables required.
4. Deploy — the `/api/leads` route runs as a serverless function automatically.

---

## Approach

1. **Reconnaissance** — reviewed the assignment PDF and screenshots of every section of the reference site (the live site couldn't be fetched directly in this environment, so screenshots were used instead) to map out section order and content, without copying visual style.
2. **Architecture first** — scaffolded the folder structure, design tokens, and reusable primitives (`Button`, `Container`, `SectionHeading`, `Badge`) *before* writing any section, so every later section reused the same building blocks.
3. **Section by section** — built and verified (typecheck + lint + build) one section at a time: Navbar → Hero → Stats/Partners → Accredian Edge timeline → Domain Expertise/Course Segmentation/Skill Enhancement → CAT Framework/How We Deliver → FAQ/Testimonials → Lead Form/CTA/Footer.
4. **No stock photography** — image hosting domains weren't reachable from the build environment, and using placeholder/stock photos of "professionals" would have been a step down anyway. Instead, the Hero and Skill Enhancement sections use original abstract UI mockups (animated progress cards, floating stat chips) — a common, credible pattern for SaaS/enterprise marketing sites.
5. **Final pass** — accessibility contrast sweep, SEO metadata (Open Graph, robots, sitemap), Prettier formatting, and this README.

---

## AI Usage Explanation

This project was built with **Claude** (Anthropic) as a pair-programmer, working in explicit phases with review after each one. Concretely:

- **Where AI helped:**
  - Generating the initial project scaffold and folder architecture.
  - Drafting all component/section code (JSX structure, Tailwind classes, Framer Motion variants, Zod schemas, the Route Handler).
  - Running `tsc`, `eslint`, and `next build` after every phase to catch errors immediately rather than at the end.

- **What was caught and fixed during review (not just accepted blindly):**
  - A React Server Component was passing a Lucide icon **component reference** as a prop into a Client Component (`DomainCard`), which Next.js correctly rejected at build time (`Functions cannot be passed to Client Components`). Fixed by making the parent section a Client Component instead of stripping functionality.
  - `lucide-react`'s installed version had **removed all brand/logo icons** (Facebook, Twitter, Instagram, LinkedIn, YouTube no longer exist in the package). Instead of downgrading a dependency, five minimal inline SVG glyph components were hand-written for the footer's social row.
  - Google Fonts (`next/font/google`) couldn't be fetched in the sandboxed build environment, so the project was switched to a system-font stack — arguably a better production choice anyway (zero external font request, no FOUT/layout shift risk).
  - A first accessibility pass caught several muted-text color combinations (`text-foreground/55`) that fall below WCAG AA contrast for body copy; these were bumped to `/65` on all reading-critical copy.
  - The lead-capture API was manually exercised with `curl` (happy path, validation failure, count endpoint) rather than assumed to work from reading the code.

- **What was deliberately kept manual/decided by the engineer, not the AI:**
  - The decision to *not* copy the reference site's literal visual style (per the assignment's explicit instruction), and instead redesign spacing, color system, and iconography.
  - The decision to skip stock photography entirely in favor of original abstract UI illustrations.
  - Section-by-section, review-before-continue workflow, rather than a single one-shot generation.

---

## Future Improvements

Given more time, the next priorities would be:

- Wire the lead form to a real database/CRM (e.g. Postgres via Prisma, or a HubSpot/Salesforce webhook) instead of the current in-memory store.
- Add a proper OG image (`opengraph-image.tsx`) and custom favicon set instead of the default.
- Introduce `next/dynamic` code-splitting for below-the-fold sections (Testimonials, FAQ, Lead Form) to shave a little more off initial JS.
- Add automated tests: component tests (Vitest + Testing Library) for the accordion, form validation, and carousel; a Playwright smoke test for the full scroll/nav flow.
- Full WCAG AA contrast audit across every micro-label (timestamps, captions), not just primary body copy.
- Respect `prefers-reduced-motion` globally for the Framer Motion `animate`-based infinite loops (float, marquee currently do; the Hero's floating stat chips don't yet).
- Real CMS-driven content (e.g. Sanity or Contentful) for FAQ/testimonial/partner data instead of static TypeScript constants, so non-engineers could update copy.
