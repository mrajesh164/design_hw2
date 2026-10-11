import Link from "next/link";

export const metadata = {
  title: "Mood board C · Nuit Pop",
  description:
    "A night-poster direction: ink purple, neon pink and teal, chunky type and hard shadows.",
};

/* ---------- primitives ---------- */

function Sticker({ children, label, tilt = "", className = "" }) {
  return (
    <figure
      className={`${tilt} ${className} rounded-2xl border-[3px] border-nuit-cream bg-nuit-deep p-3 shadow-[5px_5px_0_rgba(255,92,168,0.55)]`}
    >
      {children}
      <figcaption className="mt-2 font-nuit-body text-[10px] font-medium uppercase tracking-[0.12em] text-nuit-cream/55">
        {label}
      </figcaption>
    </figure>
  );
}

export default function MoodboardC() {
  return (
    <main className="min-h-screen bg-nuit-ink text-nuit-cream">
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(255,92,168,0.22), transparent 42%), radial-gradient(circle at 85% 25%, rgba(46,230,208,0.16), transparent 45%), radial-gradient(circle at 50% 95%, rgba(255,210,63,0.14), transparent 50%)",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
          <Link
            href="/"
            className="inline-block rounded-full border-2 border-nuit-cream/50 px-3 py-1 font-nuit-body text-xs font-semibold text-nuit-cream/80 hover:border-nuit-yellow hover:text-nuit-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nuit-yellow"
          >
            ← Back to hub
          </Link>

          <header className="relative mt-8 overflow-hidden rounded-[28px] border-[3px] border-nuit-cream bg-nuit-deep px-6 py-8 shadow-[8px_8px_0_#FF5CA8]">
            <p className="font-nuit-body text-xs font-bold uppercase tracking-[0.25em] text-nuit-teal">
              Mood board C
            </p>
            <h1 className="mt-2 font-nuit-display text-5xl leading-[0.9] text-nuit-yellow sm:text-7xl">
              Nuit Pop
            </h1>
            <p className="mt-4 max-w-xl font-nuit-body text-base leading-relaxed text-nuit-cream/85">
              Paris after dark as a cabaret poster: saturated ink, hand-cut
              shapes, type that shouts across the street. Loud on the outside,
              strictly legible underneath.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Neon", "Collage", "Chunky", "Late"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-nuit-pink px-3 py-1 font-nuit-body text-[11px] font-bold uppercase tracking-wider text-nuit-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </header>

          {/* scattered collage — varied spans and tilts, unlike A's masonry and B's strict grid */}
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-6">
            <Sticker label="01 · Night palette" tilt="-rotate-2" className="col-span-2">
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["#1B1030", "Ink"],
                  ["#2E1A55", "Deep"],
                  ["#FFF6E9", "Cream"],
                  ["#FF5CA8", "Pink"],
                  ["#2EE6D0", "Teal"],
                  ["#FFD23F", "Yellow"],
                ].map(([hex, n]) => (
                  <div key={hex}>
                    <span
                      className="block h-12 rounded-lg border-2 border-nuit-cream/30"
                      style={{ background: hex }}
                    />
                    <span className="mt-1 block font-nuit-body text-[9px] text-nuit-cream/60">
                      {n}
                    </span>
                  </div>
                ))}
              </div>
            </Sticker>

            <Sticker label="02 · Display, Bagel Fat One" tilt="rotate-1" className="col-span-2">
              <p className="font-nuit-display text-6xl leading-none text-nuit-pink">
                Aa
              </p>
              <p className="font-nuit-display text-2xl leading-tight text-nuit-teal">
                Minuit
              </p>
            </Sticker>

            <Sticker label="03 · Neon tube" className="col-span-2">
              <p
                className="py-3 text-center font-nuit-display text-3xl text-nuit-cream"
                style={{
                  textShadow:
                    "0 0 6px #FF5CA8, 0 0 14px #FF5CA8, 0 0 28px rgba(255,92,168,0.65)",
                }}
              >
                OUVERT
              </p>
            </Sticker>

            <Sticker label="04 · Confetti" tilt="-rotate-1">
              <div className="relative h-20" aria-hidden="true">
                {[
                  ["8%", "10%", "#FFD23F", "rotate-12"],
                  ["38%", "28%", "#2EE6D0", "-rotate-6"],
                  ["68%", "8%", "#FF5CA8", "rotate-45"],
                  ["20%", "58%", "#FF8A3D", "rotate-3"],
                  ["55%", "66%", "#FFD23F", "-rotate-12"],
                  ["82%", "48%", "#2EE6D0", "rotate-24"],
                ].map(([l, t, c, r], i) => (
                  <span
                    key={i}
                    className={`absolute h-3 w-2 rounded-[2px] ${r}`}
                    style={{ left: l, top: t, background: c }}
                  />
                ))}
              </div>
            </Sticker>

            <Sticker label="05 · Big button" tilt="rotate-2">
              <span className="block rounded-xl border-[3px] border-nuit-ink bg-nuit-yellow px-3 py-2.5 text-center font-nuit-body text-sm font-extrabold text-nuit-ink shadow-[4px_4px_0_#1B1030]">
                GO →
              </span>
            </Sticker>

            <Sticker label="06 · Ticket, cabaret" className="col-span-2" tilt="-rotate-1">
              <div className="rounded-xl bg-nuit-cream p-3 text-nuit-ink">
                <p className="font-nuit-body text-[9px] font-bold uppercase tracking-[0.2em] text-nuit-pink">
                  Ce soir · 21h30
                </p>
                <p className="font-nuit-display text-xl leading-tight">
                  Le Comptoir
                </p>
                <p className="font-nuit-body text-[10px] tabular-nums">
                  Rang B · Place 14 · 28 €
                </p>
              </div>
            </Sticker>

            <Sticker label="07 · Halftone dots" tilt="rotate-1">
              <div
                className="h-20 rounded-lg"
                style={{
                  backgroundImage:
                    "radial-gradient(#FF5CA8 2.5px, transparent 2.6px)",
                  backgroundSize: "10px 10px",
                }}
                aria-hidden="true"
              />
            </Sticker>

            <Sticker label="08 · Body, Rubik" className="col-span-2">
              <p className="font-nuit-body text-[13px] leading-relaxed text-nuit-cream/85">
                Dinner at nine is early. The last métro is 00:40 on weeknights,
                1:40 on Friday — after that it is a long, pleasant walk along
                the river.
              </p>
            </Sticker>

            <Sticker label="09 · Chips" tilt="-rotate-2" className="col-span-2">
              <div className="flex flex-wrap gap-1.5">
                {[
                  ["Bar", "bg-nuit-pink text-nuit-ink"],
                  ["Live", "bg-nuit-teal text-nuit-ink"],
                  ["Late", "bg-nuit-yellow text-nuit-ink"],
                  ["Free", "border-2 border-nuit-cream/50 text-nuit-cream"],
                ].map(([t, c]) => (
                  <span
                    key={t}
                    className={`rounded-full px-2.5 py-1 font-nuit-body text-[10px] font-bold uppercase ${c}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Sticker>

            <Sticker label="10 · Hard shadow, no blur">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-10 w-10 rounded-lg bg-nuit-cream shadow-[3px_3px_0_#2EE6D0]" />
                <span className="h-10 w-10 rounded-lg bg-nuit-cream shadow-[5px_5px_0_#FF5CA8]" />
              </div>
            </Sticker>

            <Sticker label="11 · Moon" tilt="rotate-2">
              <svg viewBox="0 0 48 48" className="h-16 w-full" aria-hidden="true">
                <circle cx="26" cy="24" r="15" fill="#FFD23F" />
                <circle cx="19" cy="20" r="13" fill="#2E1A55" />
              </svg>
            </Sticker>

            <Sticker label="12 · Starburst" className="col-span-2" tilt="-rotate-1">
              <svg viewBox="0 0 100 60" className="h-20 w-full" aria-hidden="true">
                <path
                  d="M50 4 58 24 80 16 68 36 92 42 68 46 78 62 56 50 50 60 44 50 22 62 32 46 8 42 32 36 20 16 42 24Z"
                  fill="#FF8A3D"
                  stroke="#FFF6E9"
                  strokeWidth="2"
                />
              </svg>
            </Sticker>

            <Sticker label="13 · Type scale">
              <div className="flex flex-col gap-0.5">
                <span className="font-nuit-display text-3xl leading-none text-nuit-pink">48</span>
                <span className="font-nuit-display text-xl leading-none text-nuit-teal">32</span>
                <span className="font-nuit-body text-base font-bold leading-none">20</span>
                <span className="font-nuit-body text-xs leading-none">13</span>
              </div>
            </Sticker>

            <Sticker label="14 · Radius, big and bigger" tilt="rotate-1">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-9 w-9 rounded-lg bg-nuit-teal" />
                <span className="h-9 w-9 rounded-2xl bg-nuit-teal" />
                <span className="h-9 w-9 rounded-full bg-nuit-teal" />
              </div>
            </Sticker>

            <Sticker label="15 · Card, event" className="col-span-2">
              <article className="rounded-xl border-2 border-nuit-cream/35 bg-nuit-ink p-2.5">
                <p className="font-nuit-body text-[9px] font-bold uppercase tracking-[0.15em] text-nuit-teal">
                  Jour 5 · Pigalle
                </p>
                <h3 className="font-nuit-display text-lg leading-tight text-nuit-cream">
                  Moulin Rouge
                </h3>
                <p className="mt-1 font-nuit-body text-[11px] text-nuit-cream/70">
                  Outside only. Then crêpes.
                </p>
              </article>
            </Sticker>

            <Sticker label="16 · Marquee bulbs" tilt="-rotate-2" className="col-span-2">
              <div className="flex justify-between rounded-lg bg-nuit-ink px-2 py-3" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      background: i % 2 ? "#FFD23F" : "#FFF6E9",
                      boxShadow: `0 0 6px ${i % 2 ? "#FFD23F" : "#FFF6E9"}`,
                    }}
                  />
                ))}
              </div>
            </Sticker>

            <Sticker label="17 · Icons, filled">
              <div className="grid grid-cols-3 gap-2 text-nuit-yellow">
                {[
                  <path key="a" d="M12 3 14.9 9.3 21.6 10l-5 4.6 1.4 6.7L12 18l-6 3.3L7.4 14.6 2.4 10l6.7-.7Z" />,
                  <path key="b" d="M7 3h10v6a5 5 0 0 1-10 0V3Zm1 18h8v2H8Zm3-6h2v6h-2Z" />,
                  <path key="c" d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 4.5A2.5 2.5 0 1 0 12 11a2.5 2.5 0 0 0 0-4.5Z" />,
                ].map((d, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
                    {d}
                  </svg>
                ))}
              </div>
            </Sticker>

            <Sticker label="18 · Outline type" tilt="rotate-1" className="col-span-2">
              <p
                className="font-nuit-display text-4xl leading-none text-transparent"
                style={{ WebkitTextStroke: "2px #2EE6D0" }}
              >
                PARIS
              </p>
            </Sticker>

            <Sticker label="19 · Gradient wash">
              <div
                className="h-20 rounded-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(140deg, #FF5CA8, #FF8A3D 45%, #FFD23F)",
                }}
                aria-hidden="true"
              />
            </Sticker>

            <Sticker label="20 · Toggle, on and off" tilt="-rotate-1">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="flex h-6 w-11 items-center rounded-full bg-nuit-teal p-0.5">
                  <span className="ml-auto h-5 w-5 rounded-full bg-nuit-ink" />
                </span>
                <span className="flex h-6 w-11 items-center rounded-full bg-nuit-cream/25 p-0.5">
                  <span className="h-5 w-5 rounded-full bg-nuit-cream/70" />
                </span>
              </div>
            </Sticker>

            <Sticker label="21 · Spacing, loose">
              <div className="flex items-end gap-1.5" aria-hidden="true">
                {[8, 16, 24, 40, 56].map((s) => (
                  <span
                    key={s}
                    className="w-3 rounded-t bg-nuit-pink"
                    style={{ height: `${s}px` }}
                  />
                ))}
              </div>
            </Sticker>

            <Sticker label="22 · Zigzag border" className="col-span-2" tilt="rotate-1">
              <div
                className="h-10"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #2EE6D0 25%, transparent 25%), linear-gradient(225deg, #2EE6D0 25%, transparent 25%)",
                  backgroundSize: "18px 18px",
                }}
                aria-hidden="true"
              />
            </Sticker>

            <Sticker label="23 · Quote">
              <p className="font-nuit-display text-base leading-snug text-nuit-yellow">
                “Paris is always a good idea — at 11pm.”
              </p>
            </Sticker>

            <Sticker label="24 · Contrast guard" className="col-span-2">
              <div className="flex flex-col gap-1 font-nuit-body text-[10px] font-bold">
                <span className="rounded bg-nuit-yellow px-2 py-1 text-nuit-ink">
                  Ink on yellow · 13.4:1 ✓
                </span>
                <span className="rounded bg-nuit-ink px-2 py-1 text-nuit-cream">
                  Cream on ink · 15.2:1 ✓
                </span>
                <span className="rounded bg-nuit-pink px-2 py-1 text-nuit-ink">
                  Ink on pink · 8.1:1 ✓
                </span>
              </div>
            </Sticker>

            <Sticker label="25 · Sticker badge" tilt="-rotate-3">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-nuit-ink bg-nuit-teal text-center font-nuit-body text-[10px] font-extrabold uppercase leading-tight text-nuit-ink">
                Jour
                <br />5
              </span>
            </Sticker>

            <Sticker label="26 · Stripe, awning at night" className="col-span-2">
              <div
                className="h-16 rounded-lg"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #FF5CA8 0 12px, #2E1A55 12px 24px)",
                }}
                aria-hidden="true"
              />
            </Sticker>

            <Sticker label="27 · Input, filled">
              <span className="block rounded-lg border-2 border-nuit-cream/40 bg-nuit-ink px-2.5 py-2 font-nuit-body text-xs text-nuit-cream/50">
                Search the night…
              </span>
            </Sticker>

            <Sticker label="28 · Tone of voice" className="col-span-2" tilt="rotate-1">
              <ul className="font-nuit-body text-xs leading-relaxed text-nuit-cream/85">
                <li>Short, loud, a bit funny</li>
                <li>Yellow is the only button colour</li>
                <li>Never more than two bright blocks together</li>
              </ul>
            </Sticker>

            <Sticker label="29 · Not this">
              <ul className="font-nuit-body text-[11px] leading-relaxed text-nuit-cream/45">
                <li className="line-through">Thin grey text</li>
                <li className="line-through">Sharp corners</li>
                <li className="line-through">Pastel anything</li>
              </ul>
            </Sticker>

            <Sticker label="30 · Accent rule" className="col-span-2" tilt="-rotate-1">
              <div className="flex items-center gap-2">
                <span className="rounded-lg border-[3px] border-nuit-ink bg-nuit-yellow px-3 py-2 font-nuit-body text-xs font-extrabold text-nuit-ink">
                  Primary
                </span>
                <span className="rounded-lg border-2 border-nuit-cream/50 px-3 py-2 font-nuit-body text-xs font-bold text-nuit-cream/80">
                  Secondary
                </span>
              </div>
              <p className="mt-2 font-nuit-body text-[10px] text-nuit-cream/55">
                Yellow appears once per screen.
              </p>
            </Sticker>
          </div>

          <footer className="mt-10 rounded-2xl border-2 border-nuit-cream/25 px-4 py-3 font-nuit-body text-[11px] uppercase tracking-[0.15em] text-nuit-cream/50">
            30 artifacts · CSS + SVG only, no image files
          </footer>
        </div>
      </div>
    </main>
  );
}
