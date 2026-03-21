# Justin Kirkey Portfolio — Claude Code Project Context

> Read this file at the start of every session. It is the single source of truth
> for this project's design decisions, conventions, stack, and current state.

---

## What this project is

A full rebuild of justinkirkey.com — a personal design portfolio for Justin Kirkey,
Product Design Lead at Future Fertility. Migrating from Framer to a custom Next.js
codebase for full AI-powered control and to demonstrate AI fluency as a portfolio
signal in itself.

The live Framer site at justinkirkey.com is the design reference. Match it closely
but improve thoughtfully where there are clear wins (performance, mobile, copy clarity).

---

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Hosting:** Vercel (hobby tier)
- **Domain:** justinkirkey.com (currently on Framer — DNS cutover happens at Phase 5)
- **Version control:** GitHub (jjrkk/jk-portfolio)
- **Task tracking:** Linear

---

## Design tokens

### Colours

| Name | Hex | Usage |
|---|---|---|
| `navy` | `#0D1B3E` | Primary background |
| `accent-red` | `#E5415A` | Slash accent, CTA buttons, highlights |
| `white` | `#FFFFFF` | Primary text on dark bg |
| `muted` | `#8892A4` | Secondary text, metadata |
| `nav-pill` | `rgba(255,255,255,0.08)` | Nav pill container background |
| `card-bg` | `rgba(255,255,255,0.04)` | Case study card background |

### Typography

| Role | Font | Weight |
|---|---|---|
| Primary / UI | Inter | 400, 500, 600, 700 |

Load via `next/font/google`. Inter only — no secondary fonts.

### Spacing and layout

- Max content width: 1200px, centered
- Section padding: `py-24` on desktop, `py-16` on mobile
- Container padding: `px-6` mobile, `px-8` tablet, `px-12` desktop

---

## Site structure

### Single-page homepage (app/page.tsx) with anchor sections:

| Section | Anchor ID | Notes |
|---|---|---|
| Hero | `#hero` | Text cycling animation, hexagon photo |
| Logo marquee | — | Infinite scroll strip of client logos |
| Case studies | `#project-highlights` | Card grid, 12 projects |
| Process — Strategy | `#product-development` | Carousel |
| Process — Design | — | Carousel |
| Process — Build | — | Carousel |
| About | `#about` | Bio, career timeline, philosophy, skills |
| Contact | — | LinkedIn, ADPList, Email |

### Sub-pages (app/[slug]/page.tsx):

5 live case studies:
- `/future-fertility/image-capture-app-ui-redesign`
- `/future-fertility/egg-quality-assessment-redesign`
- `/accenture-metrolinx/presto-service-design-project`
- `/synaptive/surgical-microscope-ux-ui-design`
- `/experiencepoint/virtual-design-sprint`

7 "coming soon" studies — render a placeholder state, don't 404.

---

## Component inventory

### Layout components
- `Nav.tsx` — jk/ logo, pill nav (Work/Process/About), Reach out + Résumé buttons
- `Footer.tsx` — copyright, logo, links

### Homepage components
- `HeroSection.tsx` — text cycling with Framer Motion AnimatePresence
- `HexPhoto.tsx` — photo with CSS clip-path hexagon
- `TagPills.tsx` — UX/UI, Product, 0→1, AI, Healthtech pills
- `LogoMarquee.tsx` — infinite scroll client logo strip
- `CaseStudyGrid.tsx` — data-driven card grid
- `CaseStudyCard.tsx` — image, year, title, tags, hover state
- `ProcessCarousel.tsx` — reusable carousel (used 3 times: Strategy/Design/Build)
- `CareerTimeline.tsx` — role, company, year, promoted badge, case study link
- `DesignPhilosophy.tsx` — 5 principles grid
- `SkillsTags.tsx` — skill tag cloud
- `PersonalSection.tsx` — brownie/greenie items

### Case study components
- `CaseStudyLayout.tsx` — shared template for all case study pages
- `CaseStudyHero.tsx` — title, metadata table, hero image
- `CaseStudySection.tsx` — reusable image + text section block

### UI primitives
- `Button.tsx` — primary (red), secondary (ghost)
- `Badge.tsx` — tag/category pill

---

## Data architecture

All content is data-driven. Build these files before building pages:

```
data/
├── caseStudies.ts      # All 12 case study metadata + content
├── careerHistory.ts    # Work experience entries
├── processSteps.ts     # Strategy / Design / Build carousel content
├── clientLogos.ts      # Logo marquee items
└── designPhilosophy.ts # 5 principles
```

Case study data shape:
```typescript
interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  year: string
  company: string
  tags: string[]
  coverImage: string
  isLive: boolean
  role: string
  methods: string[]
  sections: CaseStudySection[]
}
```

---

## Key animations (Framer Motion)

| Component | Animation |
|---|---|
| Hero text | Cycling through variants with AnimatePresence, slide-up enter/exit, 3s interval |
| Nav | Fade in on load |
| Case study cards | Staggered fade-up on scroll into view |
| Process carousel | Slide transition between items |
| Hexagon photo | Subtle float/pulse (optional) |

Use `useInView` from Framer Motion for scroll-triggered animations.
Never use CSS keyframes — all animation via Framer Motion.

---

## Image strategy

All images are stored locally in `/public/images/` — NOT on Framer CDN.
Always use Next.js `<Image>` component — never bare `<img>` tags.

Folder structure:
```
public/images/
├── hero/           # Hero photo
├── case-studies/   # Case study cover images and content images
│   ├── future-fertility/
│   ├── synaptive/
│   ├── accenture/
│   ├── experiencepoint/
│   └── coming-soon/
├── logos/          # Client logos for marquee
└── about/          # About section photo
```

---

## Hero text cycling content

The headline cycles through these states:
- "Product / design Leader & do-er"
- "AI-fluent Leader & do-er"
- "Full-stack Leader & do-er"
- "Healthtech Leader & do-er"

"I'm Justin," is static. Only the middle descriptor line cycles.
"Leader & do-er" is static below.

---

## Nav behaviour

- Logo: "jk/" — jk in white, slash in accent-red
- Nav pill container: rounded pill shape, rgba white bg
- Links: Work / Process / About — smooth scroll to anchors
- Right side: "Reach out" (ghost, links to LinkedIn) + "Résumé" (red CTA, links to Google Drive PDF)
- Sticky on scroll with subtle backdrop blur

---

## Case study card grid

12 cards total — 5 live, 7 coming soon.
Live cards: full image, year, title, tags, clickable to sub-page.
Coming soon cards: muted overlay, "Case Study Coming Soon!" label, not clickable.
Grid: 2 columns desktop, 1 column mobile.
Cards have subtle hover state — slight scale + shadow.

---

## Process carousels

Three identical carousel components, each with different content:
- **Strategy / discovery** — 7 slides
- **Design / prototype** — 6 slides
- **Build / launch** — 5 slides

Each slide: large background image, title, description.
Navigation: left/right arrows + dot indicators.
Use embla-carousel library.

---

## Conventions

- TypeScript throughout — no .js files
- Tailwind utility classes only
- All components are functional — no class components
- Framer Motion for all animations
- `<Image>` from next/image always
- async/await only — no .then() chains
- Error and loading states on all data-fetching components
- Mobile-first responsive design

---

## Build phases

| Phase | Status | Description |
|---|---|---|
| 0 | Done | Planning, stack decision, CLAUDE.md, repo setup |
| 1 | Active | Nav, design tokens, global shell, root layout |
| 2 | Backlog | Homepage hero + case study card grid |
| 3 | Backlog | Process carousels + about section |
| 4 | Backlog | Case study sub-pages (5 live + 7 placeholders) |
| 5 | Backlog | Polish, SEO, mobile pass, DNS cutover, cancel Framer |

---

## Important constraints

- DO NOT touch justinkirkey.com DNS until Phase 5 is explicitly started
- Keep Framer site live until DNS cutover is confirmed working
- The Framer site is the design reference — open it in a browser tab while building
- Framer does not export usable code — this is a full rebuild, not a migration

---

## Current session notes

_Update this section at the start of each session._

Phase 0 complete. Starting Phase 1: Nav, design tokens, global shell.
