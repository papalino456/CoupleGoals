# CoupleGoals Landing Page Design Specification

**Date:** 2026-07-11

**Status:** Approved concept, ready for implementation planning

**Scope:** A standalone, static landing page for the CoupleGoals repository, deployable to GitHub Pages without changing the Expo application or Convex backend.

## 1. Purpose and truth boundary

The landing page should turn the approved kinetic sports-editorial concept into a polished portfolio piece while accurately representing the repository. CoupleGoals is a React Native/Expo prototype for shared goals and daily check-ins between two partners. The repository currently contains:

- Google OAuth sign-in through Clerk;
- a partner-connection mutation;
- shared goals with a title, optional description, category, optional target date, completion state, and shared flag;
- daily check-ins with an optional 1–10 mood value and optional note;
- Convex-backed queries and mutations for real-time application data;
- an Expo application shell with sign-in and home screens.

The landing page must call the project a **prototype** and link to the source repository rather than imply that a public consumer app is available. The scorecard, bracket, arena, and team-sport motifs are visual metaphors for mutual accountability. They are not product features.

Do not claim or depict leaderboards, head-to-head competition, scores between partners, streaks, achievements, challenges, push notifications, invite-link pairing, milestones, numeric goal progress, or shipped app-store availability. Milestones and push notifications appear as unfinished work in the repository and must not be presented as current capabilities. Generated interface imagery must be labeled as illustrative rather than passed off as screenshots of a finished app.

## 2. Recommended implementation architecture

Build the page as a fully isolated Vite static site under `landing/`. Do not repurpose the Expo web target, change the root `package.json`, or import application runtime code.

Proposed structure:

```text
landing/
  index.html
  package.json
  package-lock.json
  tsconfig.json
  vite.config.ts
  public/
    favicon.svg
  src/
    main.ts
    styles.css
    assets/
      brand/
        logo.svg
        icon.svg
      imagery/
        hero-devices.webp
        goal-card.webp
        check-in-card.webp
.github/
  workflows/
    deploy-landing.yml
```

Use semantic HTML, modern CSS, and only the small amount of TypeScript required for progressive enhancement. A component framework is unnecessary for this single page. The content and primary navigation must remain usable if JavaScript fails.

Copy the approved logo and icon SVGs from `assets/brand/` into the isolated landing asset tree during implementation. Do not make the landing build depend on files outside `landing/`. Configure Vite with a `/CoupleGoals/` base path so all generated asset URLs work at `https://papalino456.github.io/CoupleGoals/`.

The deployment workflow should:

1. run on pushes to the repository's default branch and allow manual dispatch;
2. install dependencies only in `landing/` using `npm ci`;
3. run the landing build from `landing/`;
4. upload only `landing/dist` as the Pages artifact;
5. deploy through the official GitHub Pages actions with the required Pages and OIDC permissions.

This boundary keeps the mobile application, backend, environment variables, and EAS workflow untouched. The landing page must not require Clerk or Convex credentials.

## 3. Page narrative and sections

### 3.1 Header

Use a slim white header with the official magenta wordmark on the left, three anchor links in the center/right, and a bordered repository CTA.

- Navigation: `How it works`, `Shared goals`, `Check-ins`
- CTA: `View source` with a small lightning icon
- CTA target: `https://github.com/papalino456/CoupleGoals`

The header may be sticky on desktop, but it should remain visually quiet and must not consume more than about 72 px of vertical space. On mobile, retain the logo and CTA; collapse the anchor links into a small accessible menu only if they do not fit.

### 3.2 Hero

The hero should feel like the opening spread of a contemporary sports magazine: decisive typography on the left and a composed pair of mobile-device visualizations on the right.

Approved copy:

- Eyebrow: `SHARED GOALS + DAILY CHECK-INS`
- Headline: `SET GOALS. WIN TOGETHER.`
- Supporting line: `A React Native prototype for couples to connect, create shared goals, and record daily mood check-ins—together.`
- Primary CTA: `View source`
- Secondary CTA: `See how it works`
- Capability row: `Shared goals` · `Daily check-ins` · `Real-time data`
- Small status label: `OPEN-SOURCE PROTOTYPE`

The right-hand device composition should show one illustrative shared-goals view and one illustrative daily-check-in view. It must not show numeric completion percentages, streak counters, competitive scores, or screens that are not backed by the repository. A small nearby caption must read `Illustrative interface concept`.

### 3.3 Scorecard ribbon

Follow the hero with a narrow, high-energy ribbon inspired by a broadcast score bug. Its purpose is to introduce project concepts, not to compare partners or calculate results.

Suggested entries:

- `TRAVEL / ACTIVE`
- `FITNESS / ACTIVE`
- `FINANCE / COMPLETE`
- `LEARNING / ACTIVE`

These labels demonstrate repository-backed goal categories and the binary active/completed state. Use icons and alternating magenta/cyan rules, but no points, percentages, rankings, or versus language. Include the line `Shared progress. Not a competition.` at the far end or immediately below the ribbon.

### 3.4 How it works

Present a four-step horizontal sequence on desktop and stacked sequence on mobile. Bracket lines, lane markers, and numbered tabs supply the sporting language.

1. **Connect**

   `Pair two accounts so goals and check-ins can belong to the same partnership.`
2. **Create a shared goal**

   `Add a title, category, optional description, and optional target date.`
3. **Check in**

   `Record a 1–10 mood and add a short note when there is more to say.`
4. **Complete together**

   `Either partner can mark a shared goal complete.`

Each step may include a small interface crop or line illustration, but the text is the authority. Do not depict invite links; the current repository's partner connection accepts an identifier entered by the user.

### 3.5 Product capabilities

Use four compact cards or a two-by-two editorial grid:

- **Shared goals** — `Keep categorized goals connected to both partners.`
- **Mood + notes** — `Pair a simple 1–10 mood with an optional written check-in.`
- **Partner connection** — `Link two user records into one partnership.`
- **Real-time foundation** — `Convex queries and mutations keep application data reactive.`

Avoid generic marketing superlatives. Technical accuracy should carry the section.

### 3.6 Built-with strip

Display the implementation stack as a restrained sponsor-style strip:

- `React Native + Expo` — `Cross-platform application shell`
- `Clerk` — `Google OAuth sign-in`
- `Convex` — `Reactive data and backend functions`

Use text or simple official-style wordmarks only when licensing permits. Do not imply endorsement by the vendors.

### 3.7 Closing banner and footer

End with a large diagonal banner that echoes the hero without repeating the full device artwork.

- Headline: `SET GOALS. WIN TOGETHER.`
- Supporting line: `Explore the prototype, architecture, and source.`
- CTA: `View source`

The footer should include the CoupleGoals logo, `Open-source prototype`, a repository link, and `MIT License`. Do not add app-store badges, a pricing link, account creation, a newsletter form, testimonials, social proof, or fabricated statistics.

## 4. Visual system

### 4.1 Direction

Use the approved concept's kinetic sports-editorial energy, grounded in the supplied brand identity. The page should resemble a well-art-directed match-day program translated into a digital product story: crisp white field, electric magenta and cyan accents, angular crops, thin technical lines, oversized condensed type, and disciplined information density.

Scorecard and tournament-bracket forms are decorative structures. They must never imply that partners compete against one another. The brand's heart-and-bolt mark should communicate energy and partnership rather than gamified ranking.

### 4.2 Color tokens

```css
--color-magenta: #ff006e;
--color-magenta-dark: #c90058;
--color-cyan: #00f5ff;
--color-cyan-dark: #007f88;
--color-paper: #fafafa;
--color-white: #ffffff;
--color-cool-gray: #e0e0e0;
--color-ink: #151522;
--color-muted: #5f6170;
--color-rule: #c8cad1;
```

Use brand magenta and neon cyan for large type, fills, icons, and decorative rules. For small text on white, use `--color-magenta-dark`, `--color-cyan-dark`, or ink so contrast remains accessible. Never set neon cyan body text directly on white.

### 4.3 Typography

- Display: a self-hosted, open-license condensed sans with a forceful athletic silhouette, such as Barlow Condensed ExtraBold/Black.
- Body and UI: a self-hosted, open-license sans such as Inter or system-ui.
- Headline treatment: uppercase, tight tracking, compact line-height, and restrained oblique/skew effects.
- Body copy: normal casing, generous line-height, and a maximum readable line length of roughly 65 characters.

Fonts must be bundled with the landing build rather than loaded from a third-party CDN. If font bundling is not desirable, use robust system fallbacks and preserve the hierarchy through weight, size, and spacing.

### 4.4 Layout and graphic grammar

- Maximum content width: approximately 1440 px.
- Desktop grid: 12 columns with broad hero asymmetry, roughly 5/7 or 6/6.
- Section spacing: 96–128 px desktop, 64–80 px tablet, 48–64 px mobile.
- Use angled tabs, clipped corners, lightning slashes, dotted halftone fields, stepped bracket lines, and thin circuit-like rules sparingly.
- Keep at least one calm white zone around every dense graphic cluster.
- Avoid rounded-card dashboards, glassmorphism, dark mode, gradients across whole sections, or decorative texture behind long-form text.

## 5. Device and product imagery strategy

The repository contains brand artwork but no finished product screenshots. The implementation may generate new interface illustrations grounded in the actual schema and functions. These are portfolio visualizations, not evidence of a shipped UI.

Required hero composition:

- two portrait mobile devices with clean white interfaces;
- one shared-goals screen using categories such as Travel, Fitness, Finance, and Learning;
- one check-in screen with a 1–10 mood selector and optional note field;
- magenta as the leading interface accent and cyan as a secondary accent;
- neutral fictional names and non-identifying avatar illustrations;
- transparent background so the devices can sit cleanly over the page layout;
- export at 2× display size in WebP, with PNG only if alpha rendering requires it.

The visualizations may include goal titles, category labels, active/completed status, an optional target date, and a completed check. They must exclude progress bars with invented percentages, streaks, badges, points, partner-vs-partner comparisons, notifications, or milestone UI.

Supporting crops should be derived from the same visual system rather than generated as unrelated scenes. Prefer two or three reusable transparent compositions over multiple full-bleed images. Optimize each asset and provide intrinsic width/height to prevent layout shift. Product-image alt text should describe what is shown and include the phrase `illustrative interface` where relevant.

## 6. Interaction and motion

Interactions should reinforce pace without turning the page into a game.

- Smooth-scroll anchor links with a non-animated fallback.
- Header CTA and primary buttons may use a 2–3 px directional nudge, color inversion, or lightning flash on hover/focus.
- The scorecard ribbon may reveal entries sequentially on first viewport entry; it must not auto-scroll indefinitely.
- The four process steps may use subtle line-drawing or bracket-extension motion.
- Device imagery may use a very small opposing parallax/tilt effect on pointer-capable devices only.
- Cards may lift by no more than 4 px and should keep shadows restrained.

All content must be immediately readable before motion runs. Respect `prefers-reduced-motion: reduce` by disabling smooth scroll, parallax, reveal translations, and decorative line animations. Do not use an autoplay carousel, cursor replacement, scroll hijacking, sound, or continuous particle effects.

## 7. Responsive behavior

### Desktop, 1200 px and wider

- Full navigation and two-column hero.
- Device pair overlaps the hero's right edge without covering copy.
- Scorecard ribbon spans the viewport within the content frame.
- Four process steps display in one row.

### Tablet, 768–1199 px

- Hero remains two-column where space allows, with smaller overlap and type scaling via `clamp()`.
- Scorecard entries wrap into two rows or become a controlled horizontal scroller.
- Process steps use a two-by-two grid.

### Mobile, below 768 px

- Place headline and CTAs before the device composition.
- Headline must not overflow at 320 px viewport width.
- Show logo and source CTA in the header; place anchor navigation in an accessible disclosure if needed.
- Render scorecard entries as swipeable overflow with visible partial next item and no hidden required content.
- Stack the four process steps in order.
- Remove decorative elements that compete with copy, while retaining the magenta/cyan identity.
- Keep all buttons and controls at least 44 × 44 CSS px.

No horizontal page overflow is acceptable at any supported width.

## 8. Accessibility and content quality

- Use a single `h1`, logical heading order, landmark elements, and a skip-to-content link.
- Ensure text and essential iconography meet WCAG 2.2 AA contrast requirements.
- Provide visible keyboard focus with at least a 3 px high-contrast outline and offset.
- All interactive elements must work by keyboard and expose clear accessible names.
- Use native buttons and links rather than clickable generic containers.
- Decorative bolts, brackets, and circuit lines must be hidden from assistive technology.
- Supply concise alt text for meaningful imagery; use empty alt text for purely decorative compositions.
- Never encode active/completed state or category using color alone; pair color with text and/or an icon.
- Keep body text at 16 px or larger and avoid condensed display type for paragraphs.
- Generated copy and imagery must not contain personally identifying information.

## 9. GitHub Pages isolation and operational constraints

- The landing page must be static and must not access runtime secrets.
- Do not edit `App.tsx`, `src/`, `convex/`, `app.json`, `eas.json`, root dependencies, or root scripts to support the landing page.
- Keep all landing dependencies and lockfile under `landing/`.
- The only file outside `landing/` that implementation should add is the dedicated Pages workflow under `.github/workflows/`.
- The build must produce relative or correctly base-prefixed internal assets and anchor links for the `/CoupleGoals/` project path.
- External links should use HTTPS and open in a new tab only when accompanied by `rel="noopener noreferrer"`.
- The source CTA should remain useful even if GitHub Pages is viewed on a fork; the canonical repository URL is acceptable for this portfolio page.

## 10. Verification and acceptance criteria

Implementation is complete only when all of the following pass:

1. `npm ci --prefix landing`
2. `npm run build --prefix landing`
3. `npm run preview --prefix landing -- --host 127.0.0.1`
4. The production build loads correctly from the `/CoupleGoals/` base path with no missing images, fonts, scripts, or styles.
5. Header anchors and every `View source` CTA work.
6. The page has no console errors or unhandled promise rejections.
7. Keyboard-only navigation reaches all links in logical order, the mobile menu is operable, and focus is always visible.
8. Reduced-motion mode removes non-essential motion without hiding content.
9. Manual visual checks pass at 320, 375, 768, 1024, 1440, and 1920 px widths with no horizontal overflow.
10. The hero image is responsive, optimized, and does not cause cumulative layout shift.
11. Automated accessibility testing reports no serious or critical issues; any remaining warnings receive manual review.
12. A content audit confirms that the page says `prototype`, labels generated UI as illustrative, and contains none of the prohibited claims listed in Section 1.
13. The GitHub Actions workflow builds `landing/` and uploads only `landing/dist` to Pages.
14. A final repository diff confirms that application and backend files are unchanged.

## 11. Out of scope

- Implementing or redesigning the Expo application.
- Connecting the landing page to Clerk, Convex, or any live account data.
- Adding product features, demo accounts, forms, analytics, tracking, or cookies.
- Publishing to an app store.
- Inventing testimonials, usage metrics, customer logos, or product outcomes.
- Presenting scorecards, brackets, competition, or progress percentages as functioning features.

## 12. Design success criteria

The finished page should be immediately recognizable as CoupleGoals, noticeably distinct from the other portfolio landing pages, and energetic without becoming visually noisy. A visitor should understand within the first viewport that this is an open-source mobile prototype for shared goals and daily check-ins. The visual sports language should communicate momentum and teamwork, while every product statement remains traceable to the repository.
