# Cyprus Tattoo — Claude Project Memory

Next.js 15 (App Router) + Tailwind v4 site for Cyprus Tattoo Ink, a professional tattoo studio in Girne (Kyrenia), North Cyprus. Bilingual (TR primary at `/`, EN at `/en/*`).

## Stack

- **Framework:** Next.js 15 App Router, React 19, TypeScript
- **Styling:** Tailwind v4 via `@theme` in `src/app/globals.css`
- **Fonts:** Inter (latin), Outfit (body via CSS var)
- **Images:** next/image with AVIF/WebP, responsive `deviceSizes`
- **Hosting:** Vercel (cron + edge); GitHub Actions for AI blog generation

## Architecture conventions

- **Routing:** Turkish is root (`/`, `/blog`, `/galeri`, `/hakkimizda`, `/iletisim`). English mirror at `/en/*`. Do **not** introduce `[locale]` segments — current pattern is stable and indexable.
- **i18n:** `src/components/LanguageContext.tsx` derives `language` from `usePathname()`. Use the `localePath()` helper from `useLanguage()` for every internal `<Link>` href — never hardcode `/blog`, `/galeri`, etc.
- **Client/server split:** Every route that reads `useLanguage()` has a `FooClient.tsx` (client) + `page.tsx` (server, exports `metadata`). Follow this pattern for new pages so each locale gets its own canonical + hreflang.
- **Schema:** Centralised in `src/lib/seo-schema.ts` (`buildBlogPostingJsonLd`, `buildFAQPageJsonLd`, `buildBreadcrumbJsonLd`). Add new types here.
- **Blog data:** `src/data/blog-posts.ts` — 100+ bilingual posts, auto-appended by `scripts/generate-blog.mjs` every 6 hours via GitHub Actions (uses `gemini-2.5-flash`).
- **Indexing:** `src/lib/master-indexer.ts` submits both locales to IndexNow + Google Indexing API. Update `STATIC_PATHS` when adding new routes.

## Design tokens (in `globals.css` `@theme`)

- **Primary:** `#c9a96e` (gold), soft `#e2c88a`, accent `#8b6b3d`
- **Background:** `#0a0a0a`, surface `#111`, surface-light `#1a1a1a`, surface-raised `#1f1f1f`
- **Borders:** `--color-border` (6% white), `--color-border-strong` (12%)
- **Radius:** `--radius-sm` → `--radius-4xl` (0.5 → 3rem)
- **Elevation:** `--shadow-soft`, `--shadow-gold`, `--shadow-gold-sm`
- **Display type:** `--text-display-sm` → `--text-display-xl` (fluid `clamp()`)
- **Aesthetic:** Dark editorial, uppercase headings, `tracking-tighter` for display / `tracking-widest` for eyebrows, `font-black` for emphasis

## Component utility classes

Already defined in `globals.css`:
- `.btn-gold` — primary action
- `.btn-outline` — secondary action
- `.chip` / `.chip-active` — filter pills
- `.nav-link` — underline-on-hover nav
- `.glass-card` — surface with backdrop-blur
- `.text-gradient` — gold→white clip text
- `.reading-progress` — fixed top-bar for long reads

## SEO posture

- Root layout carries `LocalBusiness + TattooParlor` union schema (with `areaServed`, `knowsLanguage`, `hasOfferCatalog`, 47+ reviews).
- Every blog post carries `BlogPosting` schema per locale.
- `public/llms.txt` is the AI-crawler entry point. Keep it in sync with any new top-level route.
- `robots.ts` explicitly allows 20 AI bots — don't collapse back to `user-agent: *`.
- `sitemap.ts` emits `xhtml:link hreflang` alternates for every URL.

## Design resources catalogue

Curated references for future redesign work (from the user's GitHub research, Apr 2026):

**Animated components (best fits for this site's artistic/editorial tone):**
- [Magic UI](https://github.com/magicuidesign/magicui) — 150+ Framer-Motion components, good for hero text effects
- [Aceternity UI](https://github.com/aceternity/ui) — landing-page "magic effects", fits the studio's visual pitch
- [Motion (Framer Motion)](https://github.com/motiondivision/motion) — base animation engine
- [tailwindcss-motion](https://github.com/romboHQ/tailwindcss-motion) — utility-first motion classes

**Primitives (if forms/modals expand):**
- [shadcn/ui](https://github.com/shadcn-ui/ui) — Radix + Tailwind, copy-paste ownership
- [birobirobiro/awesome-shadcn-ui](https://github.com/birobirobiro/awesome-shadcn-ui) — ecosystem index

**Awesome lists (spelunking):**
- [bradtraversy/design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers)
- [nicolesaidy/awesome-web-design](https://github.com/nicolesaidy/awesome-web-design)

**Design-system precedents to study (not copy — this is a creative portfolio, not a SaaS):**
- Adobe Spectrum — typographic rigour
- Shopify Polaris — visual language discipline

**Emerging pattern:**
- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — the DESIGN.md format we're using in this repo for AI-agent design consistency

## Current roadmap

See `DESIGN.md` for the phased design roadmap and `README.md` for repo basics.

## Branch discipline

- Main development branch for this stream: `claude/fix-seo-content-sharing-HN1CM`
- Never push to `main` directly. `main` is the production deploy target via Vercel.
- The AI Blogger pushes to `main` at 00:00 / 06:00 / 12:00 / 18:00 UTC — coordinate any refactors to `src/data/blog-posts.ts` around that cron.

## Commit style

Conventional commits with imperative subject (≤72 chars), human body explaining *why*. Every commit ends with the Claude Code session URL footer.

## What NOT to do

- Don't hardcode internal URLs — always use `localePath()`.
- Don't add English translations inline in components — the `translations.ts` file is the single source of truth for UI strings.
- Don't introduce new color hex values in components — use the `@theme` tokens.
- Don't add SaaS/dashboard-style UI patterns — this is a portfolio brand, not a product.
- Don't downgrade the `robots.ts` AI-crawler allow list; it's deliberate.
