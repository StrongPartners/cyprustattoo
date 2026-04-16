# Cyprus Tattoo — Design Guide & Roadmap

> Editorial, dark, gold-accented portfolio brand for a tattoo studio in Girne, North Cyprus. This document is the single source of truth for visual and interaction decisions. Any AI agent or human contributor should read this before touching `src/app` or `src/components`.

---

## 1. Design Philosophy

**Positioning:** Premium, artistic, confident. Not trendy, not playful, not corporate.
**Reference tone:** Fashion editorial (Vogue / AnOther Mag) × tattoo-culture documentary (Inked Magazine) × Bauhaus typographic discipline.

**Do:**
- Let photography and video carry the emotion — UI serves the art, not the other way around.
- Respect negative space. Sections breathe at `py-24` minimum on desktop.
- Use uppercase, tight tracking for identity; italic for voice; body copy in calm, readable weight.
- Lead with content, reveal chrome on scroll.

**Don't:**
- No neumorphism, glassmorphism for its own sake, or heavy drop-shadows.
- No emoji in UI copy, no meme-tier micro-copy, no bright primary palettes.
- No "SaaS pricing card" aesthetic. No feature grids with tick icons.
- No motion for motion's sake — every animation must communicate state or narrative.

---

## 2. Visual Language (current state)

### Color tokens (`globals.css`)

| Token                     | Value                    | Use                                  |
| ------------------------- | ------------------------ | ------------------------------------ |
| `--color-primary`         | `#c9a96e`                | Gold accent, CTAs, highlights        |
| `--color-primary-soft`    | `#e2c88a`                | Hover state, soft emphasis           |
| `--color-accent`          | `#8b6b3d`                | Deep gold, rarely used               |
| `--color-background`      | `#0a0a0a`                | Page background                      |
| `--color-surface`         | `#111`                   | Card / elevated base                 |
| `--color-surface-light`   | `#1a1a1a`                | Nested surface                       |
| `--color-surface-raised`  | `#1f1f1f`                | Modal, popover                       |
| `--color-border`          | `rgba(255,255,255,0.06)` | Default border                       |
| `--color-border-strong`   | `rgba(255,255,255,0.12)` | Focused / hovered border             |
| `--color-whatsapp`        | `#25d366`                | WhatsApp-specific CTA only           |

### Typography

- **Display:** `font-black` + `tracking-tighter` + `uppercase`, size via `clamp()` tokens `--text-display-sm` → `--text-display-xl`.
- **Eyebrow:** `text-[10px] font-bold uppercase tracking-[0.3em]` in `text-primary` — signals section identity.
- **Body:** `text-lg` / `text-xl`, `font-light`, `leading-relaxed`, often `italic` for editorial voice.
- **Labels/meta:** `text-[10px]` uppercase, `tracking-widest`, `text-white/20` to `text-white/40`.

### Spacing & radius

- Card / section container radius: **`rounded-[2.5rem]` or `rounded-[3rem]`** — the signature soft-square look.
- Buttons / chips: `rounded-xl` / `rounded-full`.
- Section vertical rhythm: `py-24` mobile → `py-32` desktop. Header offset: `pt-32`.

### Elevation

Prefer tonal surfaces + subtle gold glow over shadows:
- Static card: `border border-white/5 bg-surface`
- Hover: add `shadow-2xl shadow-primary/10`
- Primary CTA: `shadow-2xl shadow-primary/20` / `--shadow-gold`

### Motion rules

- Transition default: `transition-all duration-300`.
- Page-level reveals: `duration-700` ease-out on scroll.
- Hover lift: `hover:-translate-y-1` or `hover:scale-105`. Never more than 5–8% scale.
- Respect `prefers-reduced-motion` — already globally disabled in `globals.css`.
- Video/autoplay must be deferred until the element is in viewport.

---

## 3. Component patterns

Use these before inventing new ones.

### Button

- `.btn-gold` — primary affirmative (WhatsApp, booking, submit)
- `.btn-outline` — secondary (view gallery, learn more)
- Inline links: gold underline, `border-b border-primary`, hover switches to white

### Card

- **Portfolio / gallery tile:** `break-inside-avoid rounded-2xl border border-white/5`, hover `scale-105 border-primary/20`, lightbox on click.
- **Content card (blog, related):** `rounded-3xl` + category chip top-left + meta row + 2-line clamp title.
- **Feature card (services, values):** icon or emoji top, `rounded-[2.5rem]`, `p-10`, border turns gold on hover.

### Chip / filter

- `.chip` resting: gold text on white/5 background, dark border.
- `.chip-active`: gold fill, black text.

### Section shell

- Container: `max-w-6xl mx-auto` (or `max-w-7xl` for gallery).
- Eyebrow → `h1`/`h2` (display) → gold 16-pixel underline (`w-16 h-1 bg-primary`) → lede paragraph.

### Modal / lightbox

- `fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg`.
- Circular controls `w-12 h-12 rounded-full bg-white/5 border border-white/10`, hover turns gold.
- Keyboard: Esc closes, ←/→ navigate. Body scroll lock while open.

---

## 4. Roadmap (phased execution)

Each phase is a self-contained PR. Do not combine across phases — keeps review tractable and visual regression surface small.

### ✅ Phase 1 — SEO foundation _(shipped)_
Real `/en` routing, BlogPosting/FAQPage/LocalBusiness schema, `robots.ts` AI allow list, `llms.txt`, bilingual sitemap, `next.config.ts` image/security headers. See commit `931252b`.

### ✅ Phase 2 — UX polish _(shipped)_
Design-token pass, Hero LCP fix (deferred video mount), `ImageLightbox`, `ReadingProgress`, `RelatedPosts`, focus-visible rings. See commit `ef29d32`.

### 📍 Phase 3 — Motion & micro-interactions _(next)_

**Goal:** Elevate perceived craft without changing information architecture.

**Scope:**
- Install `motion` (ex-framer-motion) once — current project has no animation lib beyond Tailwind transitions.
- Replace `useEffect` scroll listeners on Hero video/stats with `motion`'s `useInView` for deterministic reveal timing.
- Add staggered fade-up to:
  - ServicesSection cards (cascade 40ms)
  - GalleryPreview masonry items (cascade 30ms)
  - Blog list grid
- Hero title split-letter entrance (one-shot, `ease-out`, 600ms). Reference: Magic UI `<AnimatedText>`.
- Marquee / ticker beneath Hero: "CUSTOM DESIGN · REALISM · FINE LINE · COVER-UP" — branded repetition. Reference: Aceternity `<InfiniteMovingCards>`.
- Parallax on About-page studio photo (`motion` `useScroll` + `useTransform`, subtle 20px delta only).

**Budget:** ≤ 25 KB gzipped motion lib. No animation on Core Web Vitals critical path — Hero first-paint stays untouched.

**Reference repos:** Magic UI, Aceternity UI, tailwindcss-motion.

### 📍 Phase 4 — Artist pages (content-gated)

**Blocked on user input.** Needs real artist names, bios, portfolios.

**Scope:**
- New route: `/sanatcilar` (TR) + `/en/artists` (both in current tree per i18n convention, or unified slug `/sanatcilar` for both — decide at implementation).
- List page: grid of artists with hero portrait, specialty chips (realism, fine-line, blackwork…), years of experience.
- Detail page: `/sanatcilar/[slug]` — full bio, portfolio gallery (reuses `ImageLightbox`), style specialties, Instagram CTA.
- Schema: `Person` + `ProfilePage` JSON-LD per artist. This is E-E-A-T gold — individual artist authority boosts AI search citations (per geo-seo-claude's citability thesis).
- Add artists to `src/lib/master-indexer.ts` `STATIC_PATHS`.
- Update `public/llms.txt` with artist index + specialties.

**Data model:**
```ts
interface Artist {
  slug: string;
  name: string;
  role: { tr: string; en: string };
  bio: { tr: string; en: string };  // 150-200 words each
  yearsExperience: number;
  specialties: Array<"realism"|"fineLine"|"blackwork"|"traditional"|"coverUp"|"customDesign"|"piercing">;
  portrait: string;
  portfolio: string[];  // 12-24 images
  instagram?: string;
  languages: Array<"tr"|"en">;
}
```

### 📍 Phase 5 — Pricing & services (content-gated)

**Blocked on user input.** Needs real price ranges.

**Scope:**
- New route: `/fiyatlar` + `/en/pricing`.
- One section per tattoo style (from `ServicesSection`'s 6 styles) with: size-based price range, session duration, example portfolio tiles, FAQ.
- Schema: `Service` + `Offer` + `PriceSpecification` per style. Google shows these in Local Pack when available.
- Cross-link from Contact FAQ: "How much does a tattoo cost?" → links to pricing page.
- Update homepage `hasOfferCatalog` schema in `layout.tsx` to reference new URLs.

### 📍 Phase 6 — Style guide pages (long-tail SEO)

One page per style (realism, fine-line, blackwork…) at `/stiller/[slug]` + `/en/styles/[slug]`. Each page is 1500+ words, answers "what is X tattoo", shows portfolio, artist recommendations, price anchor. Schema: `Article` + `CreativeWork`.

Long-tail intent: "fine line tattoo Kyrenia", "realism tattoo North Cyprus", etc.

### 📍 Phase 7 — Booking flow

**Blocked on user decision: lightweight form → WhatsApp, or real backend booking?**

Minimal version: a styled form that builds a WhatsApp deeplink. Fields: name, style, body placement, size, preferred dates, reference image uploads (Cloudinary widget). No backend, no auth. Opens pre-filled WhatsApp thread.

Schema: `ReservationPackage` if we go further.

---

## 5. Library decisions (when Phase 3 starts)

| Need                    | Pick                                                  | Why                                          |
| ----------------------- | ----------------------------------------------------- | -------------------------------------------- |
| Animation engine        | `motion` (ex-framer-motion)                           | De facto React standard, bundle-friendly     |
| Motion recipes          | Magic UI + Aceternity UI (copy-in, not installed)     | Aesthetic fit; we own the code               |
| Utility motion classes  | `romboHQ/tailwindcss-motion`                          | Tailwind-native, no JS for simple cases      |
| Primitives (if needed)  | shadcn/ui blocks, installed on demand                 | Radix accessibility without framework lock   |
| Lightbox                | In-house `ImageLightbox` (already done)               | 2 KB, zero deps, fits brand                  |
| Icons                   | Inline SVGs (already done)                            | No icon-library dependency                   |

**Rejected (unfit for this brand):**
- IBM Carbon, Ant Design, Atlassian — enterprise/SaaS tone, wrong audience.
- DaisyUI — opinionated looks that fight our custom tokens.
- SaaS / dashboard starters (Kiranism, taxonomy, etc.) — different product shape.

---

## 6. How to extend this doc

When you add a new:
- **Color, radius, or shadow** → update the table in §2 and `@theme` simultaneously.
- **Reusable component** → add to §3 with a snippet, export utility class from `globals.css` if it's used in 3+ places.
- **Phase** → append to §4 in order, keep the "blocked on…" markers honest.
- **Library** → append to §5 table; include rejected-alternatives reasoning.

Treat this file like a contract with future-you and future agents. If the code diverges from this doc, one of them is wrong — fix it in the same PR.
