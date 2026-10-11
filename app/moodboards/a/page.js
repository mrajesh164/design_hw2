import Link from "next/link";

export const metadata = {
  title: "Mood board A · Café Terrace",
  description:
    "A warm editorial direction: parchment, ink, menu typography and tomato red.",
};

/* ---------- small artifact primitives ---------- */

function Tile({ children, label, span = "", tilt = "" }) {
  return (
    <figure
      className={`mb-4 break-inside-avoid border border-cafe-ink/15 bg-cafe-cream p-3 shadow-[2px_3px_0_rgba(43,29,22,0.08)] ${span} ${tilt}`}
    >
      {children}
      <figcaption className="mt-2 font-cafe-body text-[11px] uppercase tracking-[0.14em] text-cafe-ink/55">
        {label}
      </figcaption>
    </figure>
  );
}

function Swatch({ hex, name }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="h-9 w-9 shrink-0 border border-cafe-ink/20"
        style={{ background: hex }}
        aria-hidden="true"
      />
      <span className="font-cafe-body text-xs leading-tight text-cafe-ink">
        {name}
        <br />
        <span className="text-cafe-ink/50">{hex}</span>
      </span>
    </div>
  );
}

/* ---------- the board ---------- */

export default function MoodboardA() {
  return (
    <main className="min-h-screen bg-cafe-paper text-cafe-ink">
      {/* paper texture via layered gradients, no image files */}
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
            className="font-cafe-body text-xs uppercase tracking-[0.2em] text-cafe-ink/60 underline-offset-4 hover:text-cafe-tomato hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
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
              awning overhead. The itinerary reads like a prix-fixe menu —
              unhurried, printed, a little worn at the corners.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-cafe-body text-[11px] uppercase tracking-[0.18em] text-cafe-ink/60">
              <li>Parchment</li>
              <li>·</li>
              <li>Letterpress</li>
              <li>·</li>
              <li>High-contrast serif</li>
              <li>·</li>
              <li>Unhurried</li>
            </ul>
          </header>

          {/* masonry: artifacts fall into columns, uneven, scrapbook-like */}
          <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {/* 1 — palette */}
            <Tile label="01 · Palette, pulled from paper and awning">
              <div className="flex flex-col gap-2">
                <Swatch hex="#F6EFE3" name="Cream" />
                <Swatch hex="#E8DCC5" name="Paper" />
                <Swatch hex="#2B1D16" name="Espresso" />
                <Swatch hex="#C8412B" name="Tomato" />
                <Swatch hex="#6B6B3A" name="Olive" />
                <Swatch hex="#B9795A" name="Clay" />
              </div>
            </Tile>

            {/* 2 — display specimen */}
            <Tile label="02 · Display face, Fraunces">
              <p className="font-cafe-display text-6xl leading-none">Aa</p>
              <p className="mt-1 font-cafe-display text-xl italic">
                Déjeuner
              </p>
            </Tile>

            {/* 3 — awning */}
            <Tile label="03 · Awning stripe">
              <div
                className="h-24 w-full border border-cafe-ink/20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #C8412B 0 14px, #F6EFE3 14px 28px)",
                }}
                aria-hidden="true"
              />
            </Tile>

            {/* 4 — menu */}
            <Tile label="04 · Menu setting, leader dots" span="">
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
            </Tile>

            {/* 5 — ticket stub */}
            <Tile label="05 · Ticket stub, Musée" tilt="-rotate-1">
              <div className="flex border border-dashed border-cafe-ink/50 bg-cafe-cream">
                <div className="flex-1 p-2">
                  <p className="font-cafe-body text-[9px] uppercase tracking-[0.18em] text-cafe-ink/55">
                    Entrée · Plein tarif
                  </p>
                  <p className="font-cafe-display text-base leading-tight">
                    Musée d'Orsay
                  </p>
                  <p className="font-cafe-body text-[10px] tabular-nums text-cafe-ink/70">
                    14 MAI · 10:30
                  </p>
                </div>
                <div className="flex w-9 items-center justify-center border-l border-dashed border-cafe-ink/50 bg-cafe-tomato/10">
                  <span className="rotate-90 whitespace-nowrap font-cafe-body text-[9px] uppercase tracking-[0.2em] text-cafe-tomato">
                    No. 0412
                  </span>
                </div>
              </div>
            </Tile>

            {/* 6 — body copy */}
            <Tile label="06 · Body text, Source Sans at rest">
              <p className="font-cafe-body text-[13px] leading-[1.7] text-cafe-ink/85">
                The terrace fills by ten. Chairs face the street, never each
                other. Order at the bar if you are standing; at the table if you
                intend to stay, which you do.
              </p>
            </Tile>

            {/* 7 — rule set */}
            <Tile label="07 · Rules and dividers">
              <div className="flex flex-col gap-2 py-1">
                <span className="h-px bg-cafe-ink/80" />
                <span className="h-[2px] bg-cafe-ink/80" />
                <span className="h-px border-t border-dotted border-cafe-ink/70" />
                <span className="h-px border-t border-dashed border-cafe-ink/70" />
                <span className="h-[3px] bg-cafe-tomato" />
              </div>
            </Tile>

            {/* 8 — postage stamp */}
            <Tile label="08 · Postage, République" tilt="rotate-2">
              {/* perforated edge: cream dots tile the outer box, an inner panel covers the middle */}
              <div
                className="h-24 w-20 p-[5px]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #E8DCC5 2.6px, transparent 2.8px)",
                  backgroundSize: "10px 10px",
                  backgroundColor: "#F6EFE3",
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center bg-cafe-clay/25 text-center">
                  <span className="font-cafe-display text-[10px] uppercase tracking-widest">
                    République
                  </span>
                  <span className="my-1 block h-7 w-7 rounded-full border-2 border-cafe-ink/60" />
                  <span className="font-cafe-body text-[9px] tabular-nums">
                    1,29 €
                  </span>
                </div>
              </div>
            </Tile>

            {/* 9 — type scale */}
            <Tile label="09 · Type scale, 1.25 ratio">
              <div className="flex flex-col gap-1">
                <span className="font-cafe-display text-3xl leading-none">
                  39
                </span>
                <span className="font-cafe-display text-2xl leading-none">
                  31
                </span>
                <span className="font-cafe-display text-xl leading-none">
                  25
                </span>
                <span className="font-cafe-body text-base leading-none">20</span>
                <span className="font-cafe-body text-sm leading-none">16</span>
                <span className="font-cafe-body text-xs leading-none">13</span>
              </div>
            </Tile>

            {/* 10 — quote */}
            <Tile label="10 · Overheard">
              <p className="font-cafe-display text-lg italic leading-snug">
                “On ne va pas au café pour le café.”
              </p>
              <p className="mt-2 font-cafe-body text-[11px] text-cafe-ink/60">
                One does not go to the café for the coffee.
              </p>
            </Tile>

            {/* 11 — coffee rings */}
            <Tile label="11 · Coffee rings, wear">
              <div className="relative h-24" aria-hidden="true">
                <span className="absolute left-2 top-3 h-14 w-14 rounded-full border-[3px] border-cafe-clay/35" />
                <span className="absolute left-12 top-9 h-12 w-12 rounded-full border-[3px] border-cafe-clay/25" />
                <span className="absolute left-6 top-12 h-9 w-9 rounded-full border-2 border-cafe-olive/25" />
              </div>
            </Tile>

            {/* 12 — button study */}
            <Tile label="12 · Primary action, tomato only">
              <div className="flex flex-col gap-2">
                <span className="block bg-cafe-tomato px-3 py-2 text-center font-cafe-body text-xs font-semibold uppercase tracking-[0.14em] text-cafe-cream">
                  Réserver
                </span>
                <span className="block border border-cafe-ink/70 px-3 py-2 text-center font-cafe-body text-xs font-semibold uppercase tracking-[0.14em]">
                  Détails
                </span>
                <span className="block px-3 py-2 text-center font-cafe-body text-xs uppercase tracking-[0.14em] text-cafe-ink/35">
                  Complet
                </span>
              </div>
            </Tile>

            {/* 13 — marble café table */}
            <Tile label="13 · Marble tabletop">
              <div
                className="h-20 w-full rounded-full border border-cafe-ink/20"
                style={{
                  backgroundColor: "#EFE7DA",
                  backgroundImage:
                    "linear-gradient(115deg, rgba(43,29,22,0.11) 0 2px, transparent 2px 9px), linear-gradient(72deg, rgba(43,29,22,0.07) 0 1px, transparent 1px 14px), linear-gradient(28deg, rgba(107,107,58,0.1) 0 1px, transparent 1px 22px)",
                }}
                aria-hidden="true"
              />
            </Tile>

            {/* 14 — hours */}
            <Tile label="14 · Hours, tabular figures">
              <div className="font-cafe-body text-[11px] tabular-nums leading-relaxed">
                {[
                  ["Mar–Ven", "07:30 – 23:00"],
                  ["Samedi", "08:00 – 00:00"],
                  ["Dimanche", "08:00 – 16:00"],
                  ["Lundi", "Fermé"],
                ].map(([day, hrs]) => (
                  <p key={day} className="flex justify-between gap-3">
                    <span className="text-cafe-ink/60">{day}</span>
                    <span>{hrs}</span>
                  </p>
                ))}
              </div>
            </Tile>

            {/* 15 — wrought iron */}
            <Tile label="15 · Wrought-iron balcony">
              <div
                className="h-24 w-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(43,29,22,0.45) 0 1.5px, transparent 1.5px 13px), repeating-linear-gradient(-45deg, rgba(43,29,22,0.45) 0 1.5px, transparent 1.5px 13px)",
                }}
                aria-hidden="true"
              />
            </Tile>

            {/* 16 — drop cap */}
            <Tile label="16 · Drop cap, editorial open">
              <p className="font-cafe-body text-[12px] leading-[1.65] text-cafe-ink/85">
                <span className="float-left mr-2 mt-1 font-cafe-display text-5xl leading-[0.75] text-cafe-tomato">
                  P
                </span>
                aris in seven days is a question of restraint. Pick one
                neighbourhood a day and let the rest wait for the next trip.
              </p>
            </Tile>

            {/* 17 — café icons */}
            <Tile label="17 · Line icons, 1.5px stroke">
              <div className="grid grid-cols-4 gap-2 text-cafe-ink/80">
                {[
                  <path key="c" d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Zm11 1h2a2 2 0 0 1 0 4h-2M6 5v2M10 4v3M14 5v2" />,
                  <path key="f" d="M8 4v7m-3-7v5a3 3 0 0 0 6 0V4M8 11v9M16 4c-2 2-2 6 0 8v8" />,
                  <path key="b" d="M4 11h16M6 11V7a6 6 0 0 1 12 0v4M9 20h6M12 11v9" />,
                  <path key="t" d="M4 19h16M6 19V8h12v11M9 8V5h6v3M10 12h4" />,
                ].map((d, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="h-8 w-8"
                    aria-hidden="true"
                  >
                    {d}
                  </svg>
                ))}
              </div>
            </Tile>

            {/* 18 — card */}
            <Tile label="18 · Itinerary card, printed">
              <article className="border border-cafe-ink/25 bg-cafe-cream p-2">
                <p className="font-cafe-body text-[9px] uppercase tracking-[0.2em] text-cafe-olive">
                  Jour 3 · Marais
                </p>
                <h3 className="mt-1 font-cafe-display text-base leading-tight">
                  Place des Vosges
                </h3>
                <p className="mt-1 font-cafe-body text-[11px] leading-snug text-cafe-ink/70">
                  Arcades, then lunch on rue des Rosiers.
                </p>
                <p className="mt-2 font-cafe-body text-[10px] tabular-nums text-cafe-ink/55">
                  11:00 · 1h30 · Gratuit
                </p>
              </article>
            </Tile>

            {/* 19 — italic */}
            <Tile label="19 · Italic, for asides">
              <p className="font-cafe-display text-2xl italic leading-tight">
                flâner
              </p>
              <p className="mt-1 font-cafe-body text-[11px] text-cafe-ink/60">
                to wander with no destination
              </p>
            </Tile>

            {/* 20 — chips */}
            <Tile label="20 · Category chips">
              <div className="flex flex-wrap gap-1.5 font-cafe-body text-[10px] uppercase tracking-[0.12em]">
                {[
                  ["Musée", "border-cafe-ink/40"],
                  ["Repas", "border-cafe-clay"],
                  ["Marché", "border-cafe-olive"],
                  ["Parc", "border-cafe-olive"],
                  ["Soir", "border-cafe-ink/40"],
                ].map(([t, c]) => (
                  <span key={t} className={`border px-2 py-0.5 ${c}`}>
                    {t}
                  </span>
                ))}
              </div>
            </Tile>

            {/* 21 — checked paper */}
            <Tile label="21 · Nappe, bistro check">
              <div
                className="h-20 w-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(200,65,43,0.3) 0 8px, transparent 8px 16px), repeating-linear-gradient(90deg, rgba(200,65,43,0.3) 0 8px, transparent 8px 16px)",
                }}
                aria-hidden="true"
              />
            </Tile>

            {/* 22 — handwriting */}
            <Tile label="22 · Margin note">
              <p className="font-cafe-display text-sm italic leading-snug text-cafe-olive">
                closed Mondays — check before the metro ride
              </p>
              <span className="mt-2 block h-px w-2/3 bg-cafe-olive/40" />
            </Tile>

            {/* 23 — spacing */}
            <Tile label="23 · Spacing, 4px base">
              <div className="flex items-end gap-1" aria-hidden="true">
                {[4, 8, 12, 16, 24, 32, 48].map((s) => (
                  <span
                    key={s}
                    className="w-3 bg-cafe-ink/70"
                    style={{ height: `${s}px` }}
                  />
                ))}
              </div>
              <p className="mt-2 font-cafe-body text-[10px] tabular-nums text-cafe-ink/55">
                4 · 8 · 12 · 16 · 24 · 32 · 48
              </p>
            </Tile>

            {/* 24 — wine label */}
            <Tile label="24 · Carafe label" tilt="-rotate-2">
              <div className="border-2 border-cafe-ink/70 p-2 text-center">
                <p className="font-cafe-body text-[8px] uppercase tracking-[0.3em] text-cafe-ink/60">
                  Vin de table
                </p>
                <p className="my-1 font-cafe-display text-lg leading-none">
                  Pichet
                </p>
                <p className="font-cafe-body text-[9px] uppercase tracking-[0.2em]">
                  50 cl · rouge
                </p>
              </div>
            </Tile>

            {/* 25 — shadow */}
            <Tile label="25 · Shadow, printed offset">
              <div className="flex gap-2">
                <span className="h-12 w-12 border border-cafe-ink/25 bg-cafe-cream" />
                <span className="h-12 w-12 border border-cafe-ink/25 bg-cafe-cream shadow-[2px_2px_0_rgba(43,29,22,0.18)]" />
                <span className="h-12 w-12 border border-cafe-ink/25 bg-cafe-cream shadow-[4px_4px_0_rgba(43,29,22,0.25)]" />
              </div>
            </Tile>

            {/* 26 — corner */}
            <Tile label="26 · Corners stay sharp">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-12 w-12 border-2 border-cafe-ink/60" />
                <span className="h-12 w-12 rounded-[2px] border-2 border-cafe-ink/60" />
                <span className="h-12 w-12 rounded-[4px] border-2 border-cafe-ink/30" />
              </div>
              <p className="mt-2 font-cafe-body text-[10px] text-cafe-ink/55">
                0px, 2px. Nothing rounder.
              </p>
            </Tile>

            {/* 27 — métro sign, warm version */}
            <Tile label="27 · Street plaque">
              <div className="border-2 border-cafe-cream bg-cafe-olive p-2 text-center text-cafe-cream shadow-[inset_0_0_0_1px_rgba(246,239,227,0.5)]">
                <p className="font-cafe-body text-[8px] uppercase tracking-[0.2em] opacity-80">
                  4<sup>e</sup> arr<sup>t</sup>
                </p>
                <p className="font-cafe-display text-sm leading-tight">
                  Rue des Rosiers
                </p>
              </div>
            </Tile>

            {/* 28 — receipt */}
            <Tile label="28 · Addition, the bill">
              <div className="bg-cafe-cream p-2 font-cafe-body text-[10px] tabular-nums">
                {[
                  ["2 × café", "4,40"],
                  ["1 × tartine", "5,50"],
                  ["1 × jus", "4,00"],
                ].map(([a, b]) => (
                  <p key={a} className="flex justify-between">
                    <span className="text-cafe-ink/70">{a}</span>
                    <span>{b}</span>
                  </p>
                ))}
                <p className="mt-1 flex justify-between border-t border-cafe-ink/40 pt-1 font-semibold">
                  <span>Total</span>
                  <span className="text-cafe-tomato">13,90</span>
                </p>
              </div>
            </Tile>

            {/* 29 — tone words */}
            <Tile label="29 · Tone of voice">
              <ul className="font-cafe-display text-sm leading-relaxed">
                <li>Unhurried, not slow</li>
                <li>Specific, not clever</li>
                <li>Warm, not cute</li>
                <li className="text-cafe-ink/40 line-through">Exclamation marks</li>
              </ul>
            </Tile>

            {/* 30 — don't */}
            <Tile label="30 · What this is not">
              <div className="flex flex-col gap-1.5 font-cafe-body text-[11px]">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 bg-cafe-tomato" />
                  Accent on one action per view
                </span>
                <span className="flex items-center gap-2 text-cafe-ink/45">
                  <span className="h-3 w-3 border border-cafe-ink/30" />
                  No neon, no gradients
                </span>
                <span className="flex items-center gap-2 text-cafe-ink/45">
                  <span className="h-3 w-3 border border-cafe-ink/30" />
                  No drop shadows with blur
                </span>
              </div>
            </Tile>
          </div>

          <footer className="mt-10 border-t border-cafe-ink/30 pt-5 font-cafe-body text-[11px] uppercase tracking-[0.18em] text-cafe-ink/50">
            30 artifacts · all generated in CSS and SVG, no image files
          </footer>
        </div>
      </div>
    </main>
  );
}
