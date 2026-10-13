# Paris in a Week — HW2, Design Build Ship

Coursework: three visual styles explored, one chosen, and a small static trip
itinerary built in it. The homepage is the hub and links everything.

| Route | What it is |
|---|---|
| `/` | the hub |
| `/moodboards/{a,b,c}` | Café Terrace, Métro Ligne, Encre de Nuit |
| `/design-systems/{a,b,c}` | one UI library per board, every control in every state |
| `/trip-itinerary` | the site, built in Café Terrace (system A) |

## Hard constraints

No database, no accounts, no external APIs, no data storage. Every interaction
is faked in React state and forgotten on reload — that is the assignment, not
unfinished work, so do not add persistence.

Next.js with `output: "export"`; `npx next build` writes `out/`. Tailwind v4,
with the design tokens declared in `app/globals.css` rather than a config file.
Images live in `public/` and fonts come through `next/font`, so the pages make
no runtime network requests.

## Conventions

The site is in **English**, not French, though the subject is Paris. Spelling is
**American** — color, license, labeled, center, gray. Headings and stat labels
are capitalized, and so is the generic part of a street name: Rue Mouffetard,
Avenue de Wagram, 3rd Arrondissement.

Content and counts are **derived from the data** wherever possible instead of
written into the markup, so they cannot drift.

Photograph credits are a license condition rather than a courtesy: much of the
imagery is Creative Commons, some of it ShareAlike. Keep the credits list
accurate, and keep the notes that mark an image as a stand-in for a place
rather than the place itself.

## Design rules

The three style directions are deliberately different from each other; match
the one you are working in rather than averaging them.

- **The accent color belongs to the primary action.** One accented button per
  screen; selection and current-state use a neutral instead.
- **Contrast is measured, not judged by eye.** Body text clears 4.5:1 and
  control boundaries 3:1 against their own surface. Some tokens carry their
  measured ratio as a comment and were darkened to pass — re-measure after any
  color change rather than trusting the name.
- **A small type scale, used the same way everywhere.** One size for labels,
  one for body, a few for headings; nothing smaller than 11px.
- **Color carries one meaning at a time.** On the itinerary it encodes the
  three times of day. Categories are distinguished in words, because enough
  categorical hues could not be told apart safely on that surface.

## Verifying

The itinerary has to work at 390px and at 1440px. Check the built export rather
than the dev server, which adds overlays and warnings that are not real bugs:

```bash
npx next build && npx serve out -l 4173
```

Then drive it in a real browser and try every control, including by keyboard.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
