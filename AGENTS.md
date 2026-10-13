# Paris in a Week — HW2, Design Build Ship

A coursework site: three visual styles explored, one chosen, and a small static
trip itinerary built in it. The homepage is the hub and links everything.

| Route | What it is |
|---|---|
| `/` | the hub — links the three boards, the three systems, and the site |
| `/moodboards/{a,b,c}` | Café Terrace, Métro Ligne, Encre de Nuit · 30 artifacts each |
| `/design-systems/{a,b,c}` | one UI library per board · 6 sections, every control in every state |
| `/trip-itinerary` | the site, built in **Café Terrace** (system A) |

## Hard constraints

No database, no accounts, no external APIs, no data storage. Every interaction
is faked in React state and forgotten on reload — that is the assignment, not a
shortcut, so do not add persistence (`localStorage` included).

- `output: "export"` in `next.config.mjs`. `npx next build` writes `out/`.
- `images: { unoptimized: true }`; every image lives in `public/`.
- Fonts come from `next/font/google`, bundled at build time, so the page makes
  **zero** runtime network requests. Do not add a stylesheet link or a CDN.
- Tailwind v4. All design tokens are `@theme inline` in `app/globals.css`; there
  is no `tailwind.config`. Each route has its own `layout.js` that scopes that
  style's font variables.

## Conventions that are easy to break

**Spelling is American throughout.** color, license, labeled, center, gray,
meters, neighborhood, tricolor. This has been corrected several times; grep
before adding prose.

**The site is in English**, not French, even though the subject is Paris.

**Street-name generics are capitalized**, as English does it: Rue Mouffetard,
Rue de Belleville, Avenue de Wagram, Boulevard de Clichy. So is Arrondissement.

**Headings and stat labels are capitalized**: "Photograph Credits", "Price Per
Person", "Stay & Getting Around".

## Design system A, as the itinerary uses it

**The accent is reserved for the primary action.** `cafe-tomato` as a fill
appears on exactly one button per screen. Selected rows and the current day card
use `cafe-ink` over `cafe-tint`, matching the filter chip's declared selected
state. Focus rings are the one exception — they are tomato everywhere.

**One label size: 11px**, uppercase, semibold, tracked. All three systems declare
it. Nothing anywhere on the site is set below 11px.

**Contrast is computed, not eyeballed.** Body text ≥ 4.5:1, non-text and control
boundaries ≥ 3:1, disabled exempt. Several tokens carry their measured ratio in a
comment in `globals.css` and two were darkened to pass — do not "tidy" those
values. Re-measure after any color change.

**Color encodes the three time blocks and nothing else.** Seven categorical hues
could not be separated safely on the cream surface (closest pair ΔE 6.4 normal
vision, ΔE 0.3 deuteranopia), and four sit no further apart, because the surface
is what compresses them. The four categories are labeled in words. `BLOCKS`
colors are marks only — never text, never a background at full strength.

## Gotchas already paid for

- **`ITEMS` is sorted at its export** by `(day, start)`. Add stops anywhere in
  the array; do not add a local sort at a call site.
- **`money()` groups thousands by hand.** `toLocaleString` can disagree between
  the prerender and the browser and break hydration.
- **Prices are per person.** The flat is shared, the fares and entries are not,
  so the week total divides lodging by `TRIP.lodging.people`. Keep the labels
  saying so.
- **The mobile detail panel is a modal sheet** below `lg` and a non-modal side
  column at `lg`. As a sheet it is sized in **`dvh`** (not `vh`, which ignores a
  phone's URL bar), its action row is `sticky bottom-0` so the primary button
  needs no scrolling, and an effect marks everything behind it `inert`. The
  scrim carries `data-scrim` and is skipped by that walk, or tap-to-close dies.
- **Photo credits are a legal requirement, not a courtesy.** Roughly half the
  images are Creative Commons and several are ShareAlike. Names in `photos.js`
  were read off each file page — do not normalize them. Images that are a
  stand-in rather than the named place carry a `note` saying so; keep that
  honest.
- Counts on the hub and in prose are **computed from the data** where possible.
  The hub's photograph count was hardcoded and wrong by 44 for weeks.

## Verifying

`/trip-itinerary` must work at **390px** and **1440px**. Serve the real export
rather than the dev server, which adds overlays and warnings that are not bugs:

```bash
npx next build && npx serve out -l 4173
```

Then drive it with Playwright. Two things to re-check after any change to the
panel, because both have regressed before: the primary action is on screen
without scrolling at 390px, and Tab cannot reach anything behind the scrim.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
