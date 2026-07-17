# Ladies’ Space Landing Page

Premium editorial landing page for Ladies’ Space, a women-centred community organisation in The Gambia.

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Commands

```bash
npm run lint
npm run typecheck
npm run build
```

## Project Structure

- `app/page.tsx` composes the landing page sections.
- `app/layout.tsx` defines metadata, fonts and organisation structured data.
- `app/globals.css` contains global styles, brand tokens and reduced-motion defaults.
- `components/layout/` contains the announcement bar, sticky header, mobile menu and footer.
- `components/sections/` contains the landing page sections.
- `components/ui/` contains reusable buttons, labels and animation helpers.
- `lib/data.ts` centralises navigation, content, image references and placeholder story data.
- `lib/animations.ts` registers GSAP and ScrollTrigger on the client only.

## Replacing Imagery

The current section photography in `public/images/` is sourced from Unsplash and wired through `lib/data.ts`.

Replace those files or update the `images` and `ecosystemPillars` entries in `lib/data.ts` when final Ladies’ Space photography is available. Keep meaningful `alt` text for each image.

The hero background uses `public/IMG_9465.MOV` directly in `components/sections/Hero.tsx`. Replace that file or update the video `src` if the final campaign video changes.

Logo crops used by the header/footer live in `public/brand/generated/` and were created from the supplied `public/01. Logos ` folder. The source folder name includes a trailing space, so preserve the exact path if regenerating those crops.

Recommended final photography:

- Women connecting in warm community settings
- Workshops and learning moments
- Leadership conversations
- Collaboration and community impact
- Consented portraits for real community stories

Do not use invented testimonials, fake community members or unverified impact figures.

## Image Credits

The current non-brand section imagery is sourced from Unsplash and saved locally:

- `unsplash-community-gathering.jpg`
- `unsplash-community-hands.jpg`
- `unsplash-workshop.jpg`
- `unsplash-leadership-conversation.jpg`
- `unsplash-collaboration-table.jpg`
- `unsplash-learning-session.jpg`
- `unsplash-community-portrait.jpg`
- `unsplash-women-gathering.jpg`
- `unsplash-opportunity-leadership.jpg`

The source references are also listed in `imageCredits` inside `lib/data.ts`.

## Updating Text

Repeated content lives in `lib/data.ts`. Section-specific editorial copy lives in the matching component under `components/sections/`.

If the official `Brand Manual (1).md` is added later, use it as the source of truth and revise the copy, logo usage, image direction and colour values accordingly.

## GSAP Animations

Animations are kept inside client components and use `@gsap/react` with `useGSAP()`:

- `components/sections/Hero.tsx` handles the initial hero reveal.
- `components/ui/PageAnimations.tsx` adds the site-wide scroll progress line, section reveals, heading reveals, staggered rows and subtle media parallax.
- `components/sections/EcosystemPillars.tsx` updates the active pillar image while scrolling.
- `components/sections/Opportunities.tsx` staggers opportunity rows.
- `components/ui/ImageReveal.tsx` provides reusable image mask reveals.
- `components/ui/RevealText.tsx` provides restrained word reveal animation.

`lib/animations.ts` registers ScrollTrigger only in the browser. Components check `prefers-reduced-motion` before creating motion timelines.

## Adjusting or Disabling Motion

To reduce animation strength, adjust durations and distances in the component files listed above.

To disable custom GSAP motion globally, make `prefersReducedMotion()` in `lib/animations.ts` return `true`, or remove the animation calls from the client components. The content remains visible without animation.

## Placeholders Still Required

- Real Ladies’ Space community photography
- Verified community story and consented portrait
- Active opportunities from a CMS or content source
- Real partner information
- Newsletter platform integration
- Final privacy and terms URLs
