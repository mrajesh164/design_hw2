import Image from "next/image";
import Link from "next/link";
import { PHOTOS, PHOTO_ORDER } from "./photos";

export const metadata = {
  title: "Mood board A · Café Terrace",
  description:
    "A warm editorial direction: parchment, ink, menu typography and tomato red.",
};

/* ---------- sections ----------
   Each section gets its own layout: a collage, a color strip, a scrapbook
   column flow, wide material bands. Same board, different pacing.        */

const SECTIONS = [
  { num: "I", id: "atmosphere", name: "Atmosphere", blurb: "The table, the street, the hour.", count: 8 },
  { num: "II", id: "palette", name: "Palette", blurb: "Every color sampled from a photograph.", count: 6 },
  { num: "III", id: "type", name: "Type", blurb: "Printed, hand-lettered, painted on glass.", count: 7 },
  { num: "IV", id: "surface", name: "Surface", blurb: "Paper, marble, iron — and the marks they make.", count: 6 },
  { num: "V", id: "interface", name: "Interface", blurb: "What the system does with all of it.", count: 3 },
];

function SectionHead({ num, id, name, blurb, count }) {
  return (
    <header className="mb-5 border-b-2 border-cafe-ink/80 pb-2">
      <div className="flex items-baseline gap-3">
        <span className="font-cafe-display text-2xl leading-none text-cafe-tomato">
          {num}
        </span>
        <h2 id={id} className="font-cafe-display text-3xl leading-none tracking-tight">
          {name}
        </h2>
        <span className="ml-auto font-cafe-body text-[11px] uppercase tracking-[0.18em] text-cafe-ink/70">
          {count} artifacts
        </span>
      </div>
      <p className="mt-1.5 font-cafe-body text-xs italic text-cafe-ink/70">{blurb}</p>
    </header>
  );
}

/* ---------- tiles ---------- */

function Caption({ index, text }) {
  return (
    <figcaption className="mt-2 flex gap-2 font-cafe-body text-[11px] leading-snug text-cafe-ink/70">
      <span className="shrink-0 tabular-nums text-cafe-ink/70">
        {String(index).padStart(2, "0")}
      </span>
      <span>{text}</span>
    </figcaption>
  );
}

const PAPER =
  "border border-cafe-ink/15 bg-cafe-cream p-2.5 shadow-[2px_3px_0_rgba(43,29,22,0.08)]";

/* grid photo: cropped to a set height so sections can be composed */
function Box({ id, index, span = "", h = "h-44", tilt = "" }) {
  const p = PHOTOS[id];
  return (
    <figure className={`${span} ${tilt} flex flex-col ${PAPER}`}>
      <Image
        src={`/moodboards/cafe/${id}.jpg`}
        alt={p.alt}
        width={p.w}
        height={p.h}
        sizes="(max-width: 640px) 100vw, 50vw"
        className={`w-full object-cover ${h}`}
      />
      <Caption index={index} text={p.note} />
    </figure>
  );
}

/* masonry photo: natural height, flows down a column */
function Photo({ id, index, tilt = "" }) {
  const p = PHOTOS[id];
  return (
    <figure className={`mb-4 break-inside-avoid ${PAPER} ${tilt}`}>
      <Image
        src={`/moodboards/cafe/${id}.jpg`}
        alt={p.alt}
        width={p.w}
        height={p.h}
        sizes="(max-width: 640px) 50vw, 33vw"
        className="block h-auto w-full"
      />
      <Caption index={index} text={p.note} />
    </figure>
  );
}

function Spec({ children, caption, index, span = "", masonry = false, tilt = "" }) {
  return (
    <figure
      className={`${masonry ? "mb-4 break-inside-avoid" : span} ${PAPER} ${tilt}`}
    >
      <div className="h-full bg-cafe-paper/40 p-3">{children}</div>
      <Caption index={index} text={caption} />
    </figure>
  );
}

function Swatch({ hex, name, from }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="h-8 w-8 shrink-0 border border-cafe-ink/20"
        style={{ background: hex }}
        aria-hidden="true"
      />
      <span className="font-cafe-body text-[11px] leading-tight text-cafe-ink">
        {name}
        <br />
        <span className="tabular-nums text-cafe-ink/70">{hex}</span>
        <span className="text-cafe-ink/70"> · {from}</span>
      </span>
    </div>
  );
}

/* ---------- page ---------- */

export default function MoodboardA() {
  return (
    <main className="min-h-screen bg-cafe-paper text-cafe-ink">
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            "radial-gradient(rgba(43,29,22,0.045) 1px, transparent 1px), radial-gradient(rgba(43,29,22,0.03) 1px, transparent 1px)",
          backgroundSize: "18px 18px, 11px 11px",
          backgroundPosition: "0 0, 6px 9px",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
          <Link
            href="/"
            className="font-cafe-body text-xs uppercase tracking-[0.2em] text-cafe-ink/70 underline-offset-4 hover:text-cafe-tomato hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
          >
            ← Back to hub
          </Link>

          <header className="mt-6 border-y-2 border-cafe-ink/80 py-6">
            <p className="font-cafe-body text-[11px] uppercase tracking-[0.3em] text-cafe-tomato">
              Mood board A
            </p>
            <h1 className="mt-2 font-cafe-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              Café Terrace
            </h1>
            <p className="mt-4 max-w-xl font-cafe-body text-base leading-relaxed text-cafe-ink/80">
              A morning table on the sidewalk: warm paper, pressed ink, a red
              awning overhead. The itinerary should read like a prix-fixe
              menu — unhurried, printed, a little worn at the corners.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-cafe-body text-[11px] uppercase tracking-[0.18em] text-cafe-ink/70">
              <li>Parchment</li>
              <li>·</li>
              <li>Letterpress</li>
              <li>·</li>
              <li>High-contrast serif</li>
              <li>·</li>
              <li>Unhurried</li>
            </ul>
          </header>

          <nav aria-label="Sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-cafe-body text-[11px] uppercase tracking-[0.16em] text-cafe-ink/70 underline-offset-4 hover:text-cafe-tomato hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
              >
                {s.num}. {s.name}
              </a>
            ))}
          </nav>

          {/* I — Atmosphere: a hero collage, one big frame anchoring the rest */}
          <section aria-labelledby="atmosphere" className="mt-12">
            <SectionHead {...SECTIONS[0]} />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
              <Box id="c02" index={1} span="col-span-2 sm:col-span-4" h="h-64 sm:h-80" />
              <Box id="c01" index={2} span="col-span-2" h="h-64 sm:h-80" tilt="sm:rotate-1" />
              <Box id="s08" index={3} span="col-span-2" h="h-44" />
              <Box id="c06" index={4} span="col-span-2" h="h-44" />
              <Box id="c04" index={5} span="col-span-2" h="h-44" tilt="sm:-rotate-1" />
              <Box id="s01" index={6} span="col-span-2" h="h-52" />
              <Box id="c09" index={7} span="col-span-2" h="h-52" />
              <Box id="s09" index={8} span="col-span-2" h="h-52" />
            </div>
          </section>

          {/* II — Palette: swatches first, then the photographs they came from */}
          <section aria-labelledby="palette" className="mt-12">
            <SectionHead {...SECTIONS[1]} />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              <Spec
                index={9}
                caption="Sampled from the photographs, not invented"
                span="col-span-2 row-span-2"
              >
                <div className="flex flex-col gap-2">
                  <Swatch hex="#F6EFE3" name="Cream" from="marble" />
                  <Swatch hex="#E8DCC5" name="Paper" from="parchment" />
                  <Swatch hex="#2B1D16" name="Espresso" from="shopfront" />
                  <Swatch hex="#AE3220" name="Tomato" from="awning" />
                  <Swatch hex="#6B6B3A" name="Olive" from="book boxes" />
                  <Swatch hex="#B9795A" name="Clay" from="cobbles" />
                </div>
              </Spec>
              <Box id="c03" index={10} h="h-36" />
              <Box id="s05" index={11} h="h-36" />
              <Box id="c08" index={12} h="h-36" />
              <Box id="s06" index={13} h="h-36" />
              <Box id="c10" index={14} h="h-36" />
              <Box id="s07" index={15} h="h-36" />
            </div>
          </section>

          {/* III — Type: scrapbook column flow, uneven and tilted */}
          <section aria-labelledby="type" className="mt-12">
            <SectionHead {...SECTIONS[2]} count={6} />
            <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
              <Photo id="c05" index={16} tilt="-rotate-1" />
              <Spec index={17} caption="Display face, Fraunces" masonry>
                <p className="font-cafe-display text-6xl leading-none">Aa</p>
                <p className="mt-1 font-cafe-display text-xl italic">Déjeuner</p>
              </Spec>
              <Photo id="s10" index={18} />
              <Spec index={19} caption="Type scale, 1.25 ratio" masonry>
                <div className="flex flex-col gap-1">
                  <span className="font-cafe-display text-3xl leading-none">39</span>
                  <span className="font-cafe-display text-2xl leading-none">31</span>
                  <span className="font-cafe-display text-xl leading-none">25</span>
                  <span className="font-cafe-body text-base leading-none">20</span>
                  <span className="font-cafe-body text-sm leading-none">16</span>
                  <span className="font-cafe-body text-xs leading-none">13</span>
                </div>
              </Spec>
              <Photo id="s04" index={20} tilt="rotate-1" />
              <Spec index={21} caption="Menu setting, leader dots" masonry>
                <p className="border-b border-cafe-ink/30 pb-1 font-cafe-display text-sm uppercase tracking-[0.2em]">
                  Entrées
                </p>
                {[
                  ["Soupe à l'oignon", "9"],
                  ["Œuf mayonnaise", "7"],
                  ["Salade de chèvre", "11"],
                ].map(([dish, price]) => (
                  <p
                    key={dish}
                    className="mt-2 flex items-baseline gap-1 font-cafe-body text-xs"
                  >
                    <span>{dish}</span>
                    <span className="min-w-4 flex-1 translate-y-[-3px] border-b border-dotted border-cafe-ink/40" />
                    <span className="tabular-nums">{price}</span>
                  </p>
                ))}
              </Spec>
            </div>
          </section>

          {/* IV — Surface: wide material bands, specs tucked between */}
          <section aria-labelledby="surface" className="mt-12">
            <SectionHead {...SECTIONS[3]} />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
              <Box id="s03" index={22} span="col-span-2 sm:col-span-6" h="h-32" />
              <Spec index={23} caption="Rules and dividers, borrowed from the ironwork" span="col-span-2">
                <div className="flex flex-col gap-2 py-1">
                  <span className="h-px bg-cafe-ink/80" />
                  <span className="h-[2px] bg-cafe-ink/80" />
                  <span className="h-px border-t border-dotted border-cafe-ink/70" />
                  <span className="h-px border-t border-dashed border-cafe-ink/70" />
                  <span className="h-[3px] bg-cafe-tomato" />
                </div>
              </Spec>
              <Box id="c07" index={24} span="col-span-2" h="h-52" />
              <Box id="s02" index={25} span="col-span-2" h="h-52" />
              <Spec index={26} caption="Spacing, 4px base" span="col-span-2 sm:col-span-3">
                <div className="flex items-end gap-1" aria-hidden="true">
                  {[4, 8, 12, 16, 24, 32, 48].map((s) => (
                    <span key={s} className="w-3 bg-cafe-ink/70" style={{ height: `${s}px` }} />
                  ))}
                </div>
                <p className="mt-2 font-cafe-body text-[11px] tabular-nums text-cafe-ink/70">
                  4 · 8 · 12 · 16 · 24 · 32 · 48
                </p>
              </Spec>
              <Spec index={27} caption="Corners stay sharp: 0px, or 2px at most" span="col-span-2 sm:col-span-3">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-11 w-11 border-2 border-cafe-ink/60" />
                  <span className="h-11 w-11 rounded-[2px] border-2 border-cafe-ink/60" />
                  <span className="h-11 w-11 rounded-[6px] border-2 border-dashed border-cafe-ink/25" />
                </div>
              </Spec>
            </div>
          </section>

          {/* V — Interface: three across, like a printed card */}
          <section aria-labelledby="interface" className="mt-12">
            <SectionHead {...SECTIONS[4]} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Spec index={28} caption="Buttons: tomato is the primary action, and nothing else">
                <div className="flex flex-col gap-2">
                  <span className="block bg-cafe-tomato px-3 py-2 text-center font-cafe-body text-xs font-semibold uppercase tracking-[0.14em] text-cafe-cream">
                    Book this
                  </span>
                  <span className="block border border-cafe-ink/70 px-3 py-2 text-center font-cafe-body text-xs font-semibold uppercase tracking-[0.14em]">
                    Details
                  </span>
                  <span className="block px-3 py-2 text-center font-cafe-body text-xs uppercase tracking-[0.14em] text-cafe-ink/35">
                    Sold out
                  </span>
                </div>
              </Spec>
              <Spec index={29} caption="Category chips — English labels, chalkboard manner">
                <div className="flex flex-wrap gap-1.5 font-cafe-body text-[11px] uppercase tracking-[0.12em]">
                  {[
                    ["Museum", "border-cafe-ink/40"],
                    ["Food", "border-cafe-clay"],
                    ["Market", "border-cafe-olive"],
                    ["Park", "border-cafe-olive"],
                    ["Night", "border-cafe-ink/40"],
                  ].map(([t, c]) => (
                    <span key={t} className={`border px-2 py-0.5 ${c}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </Spec>
              <Spec index={30} caption="Tone of voice">
                <ul className="font-cafe-display text-sm leading-relaxed">
                  <li>Unhurried, not slow</li>
                  <li>Specific, not clever</li>
                  <li>Warm, not cute</li>
                  <li className="text-cafe-ink/70 line-through">Exclamation marks</li>
                </ul>
              </Spec>
            </div>
          </section>

          {/* credits */}
          <section aria-labelledby="credits" className="mt-14 border-t-2 border-cafe-ink/80 pt-6">
            <details className="group">
              <summary className="flex cursor-pointer list-none flex-wrap items-center gap-3 py-1 transition-colors marker:hidden hover:text-cafe-tomato focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="font-cafe-body text-sm leading-none text-cafe-ink/70 transition-transform group-open:rotate-90"
                >
                  ▶
                </span>
                <h2 id="credits" className="font-cafe-display text-xl tracking-tight">
                  Image Credits
                </h2>
                <span className="font-cafe-body text-[11px] uppercase tracking-[0.18em] text-cafe-ink/70">
                  {PHOTO_ORDER.length} photographs
                </span>
              </summary>
            <p className="mt-1 max-w-2xl font-cafe-body text-xs leading-relaxed text-cafe-ink/70">
              Twenty collected photographs, stored with the site so the page
              makes no external requests. Ten remaining artifacts are
              specimens drawn in CSS. Unsplash and Pexels images are free to
              use; the two Wikimedia Commons images are CC BY-SA 3.0 and
              require the credit below.
            </p>
            <ol className="mt-4 grid gap-x-8 gap-y-1 font-cafe-body text-[11px] leading-relaxed text-cafe-ink/70 sm:grid-cols-2">
              {PHOTO_ORDER.map((id) => {
                const p = PHOTOS[id];
                return (
                  <li key={id} className="flex gap-2">
                    <span className="shrink-0 tabular-nums text-cafe-ink/70">{id}</span>
                    <span>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-cafe-ink/30 underline-offset-2 hover:text-cafe-tomato hover:decoration-cafe-tomato focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
                      >
                        {p.by}
                      </a>
                      <span className="text-cafe-ink/70">
                        {" "}
                        · {p.src} · {p.lic}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
            </details>
          </section>

          <footer className="mt-8 border-t border-cafe-ink/30 pt-5 font-cafe-body text-[11px] uppercase tracking-[0.18em] text-cafe-ink/70">
            5 sections · 30 artifacts · 20 photographs, 10 CSS specimens
          </footer>
        </div>
      </div>
    </main>
  );
}
