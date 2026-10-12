# Jatin Chaurasia — Portfolio

Personal product-engineering website for Jatin Chaurasia, Full-Stack Software
Engineer. Built with Next.js (App Router), TypeScript, Tailwind CSS, and
Framer Motion.

## 1. Project structure

```
jatin-portfolio/
├── app/
│   ├── layout.tsx               Root layout: fonts, metadata, theme, nav/footer
│   ├── page.tsx                 Homepage — assembles all home sections
│   ├── globals.css              Design tokens (CSS vars) + base styles
│   ├── sitemap.ts                /sitemap.xml
│   ├── robots.ts                 /robots.txt
│   ├── opengraph-image.tsx       Dynamic OG image (generated, no stock image)
│   ├── not-found.tsx             404 page
│   ├── work/[slug]/page.tsx      Dynamic project case study route
│   └── case-study/healthcare/    Dedicated healthcare engineering case study
├── components/
│   ├── layout/                  Navbar, Footer, SocialLinks
│   ├── home/                    Every homepage section (Hero, Skills, etc.)
│   ├── projects/                ProjectCard, CaseStudyLayout, ArchitectureDiagram
│   ├── ui/                      Button, Badge, Section, RevealOnScroll
│   ├── ai-assistant/            "Ask my portfolio" floating assistant
│   └── theme/                   Theme provider + toggle (light/dark)
├── lib/
│   ├── data/                    ALL editable content lives here (see §7 below)
│   ├── ai-knowledge.ts          Local knowledge base for "Ask my portfolio"
│   ├── hooks/                   useReducedMotion
│   └── utils.ts
├── public/                      favicon, resume.pdf (you add this), project images
├── .env.example                 Copy to .env.local and fill in your links
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 2. Install & run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## 3. Build

```bash
npm run build
npm run start   # serve the production build locally
```

## 4. Deploy to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build settings need to change.
4. Add the environment variables from `.env.example` in the Vercel project's
   **Settings → Environment Variables** (see §5).
5. Deploy. Every push to your main branch redeploys automatically.

## 5. Configuration

Copy `.env.example` to `.env.local` (for local dev) and/or set the same keys
in Vercel's environment variables for production:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for SEO, sitemap, OG tags |
| `NEXT_PUBLIC_GITHUB_URL` | Your GitHub profile URL. Leave blank to show a disabled placeholder button instead of a broken link |
| `NEXT_PUBLIC_LINKEDIN_URL` | Your LinkedIn profile URL. Same behavior as above |
| `NEXT_PUBLIC_RESUME_URL` | Defaults to `/resume.pdf` — just drop your PDF in `public/resume.pdf`. Point it at an external URL instead if you'd rather host it elsewhere |

**Resume PDF:** place your file at `public/resume.pdf`. The "View Resume" /
"Download Resume" buttons and the whole resume section are hidden
automatically until that file actually exists (`lib/resume.ts` checks for it
at build time), so the site never ships a link that 404s — the moment you
add the PDF and rebuild, the buttons reappear with no code changes needed.
If you set `NEXT_PUBLIC_RESUME_URL` to an external URL instead, it's always
shown (we can't verify a remote URL at build time).

**Per-project links (GitHub repo / live demo):** edit `links` on each project
object in `lib/data/projects.ts`. Leave a field out and its button is hidden
automatically — no broken or invented links are ever shown.

**Optional AI upgrade:** "Ask my portfolio" ships as a local, static
knowledge base (`lib/ai-knowledge.ts`) — no API key needed, nothing exposed
to the browser. If you want to wire it to a real LLM later, add a server
route (e.g. `app/api/ask/route.ts`) that keeps your API key server-side only,
and call it from `components/ai-assistant/AskPortfolio.tsx` instead of the
local `answerQuestion()` function. Never prefix an LLM API key with
`NEXT_PUBLIC_`.

## 6. Content editing guide

Everything editable lives in `lib/data/`, so you rarely need to touch a
component to update content:

- **Profile, contact, hero copy, positioning statements** → `lib/data/profile.ts`
- **Projects & case studies** (title, tech, problem/solution, architecture,
  features, links) → `lib/data/projects.ts`
- **Work experience timeline** → `lib/data/experience.ts`
- **Skills categories** → `lib/data/skills.ts`
- **Education, certifications, publications, AI workflow copy, engineering
  principles, the healthcare case study, homepage story strip** →
  `lib/data/misc.ts`
- **"Ask my portfolio" knowledge base** → `lib/ai-knowledge.ts`

Adding a new project is just adding a new object to the `projects` array in
`lib/data/projects.ts` — the `/work/[slug]` route and the homepage grid pick
it up automatically, no new files needed.

## 7. The 3D tilt effect

Project cards, the hero's tech stack visual, the homepage story strip, and
the principles cards use `components/ui/TiltCard.tsx` — a small
framer-motion wrapper that tilts a card in perspective toward the cursor and
lifts it slightly, with a soft light following the pointer. It's deliberately
restrained (small tilt angles, no gradients or glassmorphism) and falls back
to a flat, static card automatically when the visitor has
`prefers-reduced-motion` enabled. To add the effect to another element, wrap
it in `<TiltCard>...</TiltCard>` and optionally pass `maxTilt` (degrees).

## 8. Content honesty

This site deliberately avoids fabricated data: no invented client names,
revenue figures, user counts, testimonials, or GitHub stats. Where a metric
is documented (e.g. "800+ concurrent users", "70% improvement in solution
effectiveness", "30% revenue growth"), it's carried over from the source
material as-is. Everywhere else, copy uses qualitative, defensible language.
If you add real metrics later, put them directly in the relevant `lib/data/*`
file.
