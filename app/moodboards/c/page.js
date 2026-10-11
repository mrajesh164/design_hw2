import Link from "next/link";

export const metadata = {
  title: "Mood board C · Encre de Nuit",
  description:
    "A night-ink direction: ink-navy ground, bone and brass, ember accent, printed with risograph grain and misregistration.",
};

/* Risograph paper grain, drawn with SVG turbulence and inlined as a data URI
   so the page still makes no external requests. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.42'/%3E%3C/svg%3E\")";

/* ---------- tiles ---------- */

/* Every tile sits on the night ground with a hard offset in a second ink —
   the misregistration you get when two passes don't line up. */
function Tile({ children, label, index, span = "col-span-6", ink = "ember" }) {
  const shadow =
    ink === "brass"
      ? "shadow-[4px_4px_0_var(--color-encre-brass)]"
      : "shadow-[4px_4px_0_var(--color-encre-ember)]";
  return (
    <figure
      className={`${span} ${shadow} flex flex-col border border-encre-bone/30 bg-encre-deep`}
    >
      <div className="flex items-baseline gap-2 border-b border-encre-bone/15 px-3 py-1.5">
        <span className="font-encre-mono text-[10px] tabular-nums text-encre-bone/35">
          {String(index).padStart(2, "0")}
        </span>
        <figcaption className="font-encre-mono text-[10px] uppercase tracking-[0.1em] text-encre-bone/55">
          {label}
        </figcaption>
      </div>
      <div className="flex flex-1 items-center p-4">{children}</div>
    </figure>
  );
}

function Halftone({ className = "", color = "#D97642", size = 9, dot = 2.4 }) {
  return (
    <span
      className={className}
      style={{
        backgroundImage: `radial-gradient(${color} ${dot}px, transparent ${
          dot + 0.4
        }px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
      aria-hidden="true"
    />
  );
}

export default function MoodboardC() {
  return (
    <main className="min-h-screen bg-encre-ink text-encre-bone">
      {/* lamplight pools + grain, layered over the ink ground */}
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 12% 8%, rgba(232,176,75,0.13), transparent 45%), radial-gradient(ellipse at 88% 30%, rgba(217,118,66,0.10), transparent 42%)",
        }}
      >
        <div
          className="min-h-screen"
          style={{ backgroundImage: GRAIN, backgroundBlendMode: "overlay" }}
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
            <Link
              href="/"
              className="font-encre-mono text-xs uppercase tracking-[0.18em] text-encre-bone/55 underline-offset-4 hover:text-encre-ember hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-encre-ember"
            >
              ← Back to hub
            </Link>

            {/* masthead — display type misregistered in two inks */}
            <header className="mt-6 border-y-2 border-encre-bone/70 py-7">
              <p className="font-encre-mono text-[11px] uppercase tracking-[0.3em] text-encre-ember">
                Mood board C
              </p>
              <h1 className="relative mt-3 font-encre-display text-5xl uppercase leading-[0.88] tracking-tight sm:text-7xl">
                <span
                  aria-hidden="true"
                  className="absolute left-[3px] top-[3px] text-encre-brass/70"
                >
                  Encre de Nuit
                </span>
                <span className="relative">Encre de Nuit</span>
              </h1>
              <p className="mt-5 max-w-xl font-encre-body text-base leading-relaxed text-encre-bone/80">
                Night ink. The city printed in two passes on dark stock —
                lamplight amber over navy, ember where the inks overlap. Loud
                in texture, quiet in colour: two inks and nothing else.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-encre-mono text-[11px] uppercase tracking-[0.15em] text-encre-bone/50">
                <li>Two-ink</li>
                <li>·</li>
                <li>Overprint</li>
                <li>·</li>
                <li>Grain</li>
                <li>·</li>
                <li>Lamplight</li>
              </ul>
            </header>

            {/* zine grid — 12 columns, deliberately uneven spans */}
            <div className="mt-10 grid grid-cols-12 gap-4">
              <Tile index={1} label="The two inks + ground" span="col-span-12 sm:col-span-5">
                <div className="grid w-full grid-cols-2 gap-2">
                  {[
                    ["#0E1424", "Ink", "ground"],
                    ["#151D32", "Deep", "surface"],
                    ["#EDE6D8", "Bone", "text"],
                    ["#C9A227", "Brass", "second ink"],
                    ["#D97642", "Ember", "accent"],
                    ["#6B4A7A", "Plum", "overprint"],
                  ].map(([hex, name, role]) => (
                    <div key={hex} className="flex items-center gap-2">
                      <span
                        className="h-9 w-9 shrink-0 border border-encre-bone/25"
                        style={{ background: hex }}
                        aria-hidden="true"
                      />
                      <span className="font-encre-mono text-[9px] leading-tight">
                        {name}
                        <br />
                        <span className="text-encre-bone/40">{hex}</span>
                        <br />
                        <span className="text-encre-bone/40">{role}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </Tile>

              <Tile index={2} label="Overprint: where two passes cross" span="col-span-12 sm:col-span-4" ink="brass">
                <div className="relative h-24 w-full" aria-hidden="true">
                  <span className="absolute left-2 top-3 h-16 w-24 bg-encre-brass mix-blend-screen" />
                  <span className="absolute left-16 top-7 h-16 w-24 bg-encre-ember mix-blend-screen" />
                </div>
              </Tile>

              <Tile index={3} label="Display · Archivo Black" span="col-span-12 sm:col-span-3">
                <div>
                  <p className="font-encre-display text-5xl leading-none">Aa</p>
                  <p className="mt-1 font-encre-display text-sm uppercase tracking-tight text-encre-amber">
                    Minuit
                  </p>
                </div>
              </Tile>

              <Tile index={4} label="Halftone, ember at 50%" span="col-span-6 sm:col-span-3">
                <Halftone className="block h-24 w-full" />
              </Tile>

              <Tile index={5} label="Ink coverage ramp" span="col-span-6 sm:col-span-4" ink="brass">
                <div className="flex w-full items-end gap-1" aria-hidden="true">
                  {[1.2, 1.8, 2.4, 3, 3.6, 4.2].map((d, i) => (
                    <Halftone
                      key={i}
                      className="block h-16 flex-1"
                      dot={d}
                      size={9}
                      color="#C9A227"
                    />
                  ))}
                </div>
              </Tile>

              <Tile index={6} label="Registration marks" span="col-span-12 sm:col-span-5">
                <div className="flex w-full items-center justify-around" aria-hidden="true">
                  {["#D97642", "#C9A227", "#EDE6D8"].map((c) => (
                    <svg key={c} viewBox="0 0 40 40" className="h-14 w-14">
                      <circle cx="20" cy="20" r="11" fill="none" stroke={c} strokeWidth="1.5" />
                      <circle cx="20" cy="20" r="4" fill="none" stroke={c} strokeWidth="1.5" />
                      <path d="M20 0v14M20 26v14M0 20h14M26 20h14" stroke={c} strokeWidth="1.5" />
                    </svg>
                  ))}
                </div>
              </Tile>

              <Tile index={7} label="Misregistration, 3px off" span="col-span-12 sm:col-span-4">
                <p className="relative font-encre-display text-3xl uppercase leading-none">
                  <span aria-hidden="true" className="absolute left-[3px] top-[2px] text-encre-ember/80">
                    Jour 5
                  </span>
                  <span className="relative text-encre-bone">Jour 5</span>
                </p>
              </Tile>

              <Tile index={8} label="Body · IBM Plex Sans on dark" span="col-span-12 sm:col-span-5" ink="brass">
                <p className="font-encre-body text-[13px] leading-[1.75] text-encre-bone/85">
                  Body copy never goes below 400 weight on this ground. Light
                  weights shimmer and break up against the grain, so the
                  hierarchy is carried by size and ink, not by thinness.
                </p>
              </Tile>

              <Tile index={9} label="Data · Space Mono, tabular" span="col-span-6 sm:col-span-3">
                <p className="font-encre-mono text-xl tabular-nums leading-relaxed">
                  19:40
                  <br />
                  21:15
                  <br />
                  00:40
                </p>
              </Tile>

              <Tile index={10} label="Type scale" span="col-span-6 sm:col-span-4">
                <div className="w-full font-encre-mono text-[10px] tabular-nums text-encre-bone/40">
                  {[
                    ["56", "font-encre-display text-3xl uppercase"],
                    ["32", "font-encre-display text-xl uppercase"],
                    ["20", "font-encre-body text-base font-semibold"],
                    ["16", "font-encre-body text-sm"],
                    ["13", "font-encre-mono text-xs"],
                  ].map(([n, cls]) => (
                    <p key={n} className="flex items-baseline gap-2">
                      <span className="w-5">{n}</span>
                      <span className={`${cls} text-encre-bone`}>Nuit</span>
                    </p>
                  ))}
                </div>
              </Tile>

              <Tile index={11} label="Buttons · ember is the only accent" span="col-span-12 sm:col-span-5" ink="brass">
                <div className="flex w-full flex-wrap gap-2">
                  <span className="rounded-[4px] bg-encre-ember px-4 py-2 font-encre-body text-xs font-semibold text-encre-ink">
                    Open details
                  </span>
                  <span className="rounded-[4px] border border-encre-bone/60 px-4 py-2 font-encre-body text-xs font-semibold text-encre-bone">
                    Add to day
                  </span>
                  <span className="rounded-[4px] border border-encre-bone/15 px-4 py-2 font-encre-body text-xs font-semibold text-encre-bone/30">
                    Closed
                  </span>
                </div>
              </Tile>

              <Tile index={12} label="Lamplight · the only glow allowed" span="col-span-6 sm:col-span-3">
                <div
                  className="h-24 w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 35%, rgba(232,176,75,0.65), rgba(232,176,75,0.12) 45%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
              </Tile>

              <Tile index={13} label="Night skyline, flat ink" span="col-span-12 sm:col-span-4">
                <svg viewBox="0 0 200 70" className="w-full" aria-hidden="true">
                  <path
                    d="M0 70V52h14V40h10v12h12V30h16v22h10V44h14v8h12V22l10-14 10 14v30h12V40h14v12h12V46h14v6h12V36h14v34Z"
                    fill="#C9A227"
                    opacity="0.55"
                  />
                  <path
                    d="M0 70V58h22V48h14v10h18V42h14v16h16V34l8-10 8 10v24h16V50h16v8h16V44h16v26Z"
                    fill="#0E1424"
                    stroke="#EDE6D8"
                    strokeWidth="1"
                    opacity="0.9"
                  />
                </svg>
              </Tile>

              <Tile index={14} label="Stop card, after dark" span="col-span-12 sm:col-span-4">
                <article className="w-full border-l-2 border-encre-ember bg-encre-ink/60 p-3">
                  <p className="font-encre-mono text-[9px] uppercase tracking-[0.15em] text-encre-amber">
                    Jour 5 · 20:30
                  </p>
                  <h3 className="mt-1 font-encre-display text-base uppercase leading-tight">
                    Pont Alexandre III
                  </h3>
                  <p className="mt-1 font-encre-body text-[11px] leading-snug text-encre-bone/65">
                    Lamps come on at dusk. Walk it east to west.
                  </p>
                </article>
              </Tile>

              <Tile index={15} label="Chips · brass outline, never filled" span="col-span-12 sm:col-span-4" ink="brass">
                <div className="flex flex-wrap gap-1.5 font-encre-mono text-[10px] uppercase tracking-[0.1em]">
                  {["Dîner", "Bar", "Musée", "Marche", "Tard"].map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-[3px] px-2 py-1 ${
                        i === 0
                          ? "bg-encre-bone text-encre-ink"
                          : "border border-encre-brass/70 text-encre-bone/75"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Tile>

              <Tile index={16} label="Input, resting and filled" span="col-span-12 sm:col-span-4">
                <div className="flex w-full flex-col gap-2">
                  <span className="block rounded-[4px] border border-encre-bone/25 bg-encre-ink px-3 py-2 font-encre-body text-xs text-encre-bone/35">
                    Search the evening…
                  </span>
                  <span className="block rounded-[4px] border border-encre-ember bg-encre-ink px-3 py-2 font-encre-body text-xs text-encre-bone">
                    Pont Alexandre III
                  </span>
                </div>
              </Tile>

              <Tile index={17} label="Hairlines, brass" span="col-span-6 sm:col-span-3">
                <div className="flex w-full flex-col gap-2.5" aria-hidden="true">
                  <span className="h-px bg-encre-bone/60" />
                  <span className="h-px bg-encre-brass" />
                  <span className="h-px border-t border-dashed border-encre-bone/40" />
                  <span className="h-[2px] bg-encre-ember" />
                </div>
              </Tile>

              <Tile index={18} label="Radius: 4px, and that is all" span="col-span-6 sm:col-span-3" ink="brass">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-11 w-11 rounded-[4px] bg-encre-bone/80" />
                  <span className="h-11 w-11 rounded-[4px] border border-encre-brass" />
                  <span className="h-11 w-11 rounded-full border border-dashed border-encre-bone/20" />
                </div>
              </Tile>

              <Tile index={19} label="Spacing · 4 8 12 20 32" span="col-span-12 sm:col-span-3">
                <div className="flex items-end gap-1.5" aria-hidden="true">
                  {[4, 8, 12, 20, 32].map((s) => (
                    <span
                      key={s}
                      className="w-4 bg-encre-ember"
                      style={{ height: `${s * 1.6}px` }}
                    />
                  ))}
                </div>
              </Tile>

              <Tile index={20} label="Duotone recipe for photographs" span="col-span-12 sm:col-span-3">
                <div className="w-full">
                  <div
                    className="h-16 w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0E1424, #6B4A7A 45%, #D97642 75%, #E8B04B)",
                    }}
                    aria-hidden="true"
                  />
                  <p className="mt-2 font-encre-mono text-[9px] leading-tight text-encre-bone/50">
                    shadows → ink · mids → plum · highs → amber
                  </p>
                </div>
              </Tile>

              <Tile index={21} label="Icons, 2px stroke, square cap" span="col-span-12 sm:col-span-4" ink="brass">
                <div className="grid w-full grid-cols-4 gap-2 text-encre-amber">
                  {[
                    <path key="a" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />,
                    <path key="b" d="M7 3h10v5a5 5 0 0 1-10 0V3Zm1 18h8M12 13v8" />,
                    <path key="c" d="M4 20V9l8-6 8 6v11M4 20h16M9 20v-6h6v6" />,
                    <path key="d" d="M12 3v9l5 3M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />,
                  ].map((d, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
                      {d}
                    </svg>
                  ))}
                </div>
              </Tile>

              <Tile index={22} label="Toggle, on and off" span="col-span-6 sm:col-span-4">
                <div className="flex items-center gap-3" aria-hidden="true">
                  <span className="flex h-6 w-11 items-center rounded-full bg-encre-ember p-0.5">
                    <span className="ml-auto h-5 w-5 rounded-full bg-encre-ink" />
                  </span>
                  <span className="flex h-6 w-11 items-center rounded-full border border-encre-bone/30 p-0.5">
                    <span className="h-5 w-5 rounded-full bg-encre-bone/45" />
                  </span>
                </div>
              </Tile>

              <Tile index={23} label="Empty state" span="col-span-6 sm:col-span-4" ink="brass">
                <div className="w-full border border-dashed border-encre-bone/25 py-5 text-center">
                  <p className="font-encre-body text-xs font-medium text-encre-bone/55">
                    Nothing planned after 22:00
                  </p>
                  <p className="mt-1 font-encre-mono text-[10px] text-encre-bone/35">
                    Clear filters
                  </p>
                </div>
              </Tile>

              <Tile index={24} label="Contrast on the ink ground" span="col-span-12 sm:col-span-5">
                <div className="w-full font-encre-body text-[11px] font-semibold">
                  <p className="bg-encre-ink px-2 py-1 text-encre-bone">
                    Bone on ink · 14.8:1 ✓
                  </p>
                  <p className="mt-1 bg-encre-ember px-2 py-1 text-encre-ink">
                    Ink on ember · 7.9:1 ✓
                  </p>
                  <p className="mt-1 bg-encre-ink px-2 py-1 text-encre-amber">
                    Amber on ink · 9.4:1 ✓
                  </p>
                  <p className="mt-1 bg-encre-ink px-2 py-1 text-encre-bone/30">
                    Disabled · not meant to be read
                  </p>
                </div>
              </Tile>

              <Tile index={25} label="Column guide + crop marks" span="col-span-12 sm:col-span-4" ink="brass">
                <div className="relative w-full py-3" aria-hidden="true">
                  <div className="grid grid-cols-6 gap-1">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span key={i} className="h-16 bg-encre-brass/20" />
                    ))}
                  </div>
                  <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-encre-ember" />
                  <span className="absolute -right-1 -top-1 h-3 w-3 border-r border-t border-encre-ember" />
                  <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-encre-ember" />
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-encre-ember" />
                </div>
              </Tile>

              <Tile index={26} label="Paper grain, magnified" span="col-span-12 sm:col-span-3">
                <div
                  className="h-24 w-full bg-encre-bone/80"
                  style={{ backgroundImage: GRAIN, backgroundBlendMode: "multiply" }}
                  aria-hidden="true"
                />
              </Tile>

              <Tile index={27} label="Streetlamp" span="col-span-6 sm:col-span-3">
                <svg viewBox="0 0 60 90" className="h-24" aria-hidden="true">
                  <circle cx="30" cy="22" r="20" fill="#E8B04B" opacity="0.18" />
                  <path d="M30 34v52M18 86h24" stroke="#EDE6D8" strokeWidth="2.5" />
                  <path d="M20 26h20l-4-10H24Z" fill="#E8B04B" />
                </svg>
              </Tile>

              <Tile index={28} label="Tone of voice" span="col-span-6 sm:col-span-4" ink="brass">
                <ul className="font-encre-body text-xs leading-relaxed text-encre-bone/80">
                  <li>Time first, then place</li>
                  <li>Dry, never breathless</li>
                  <li>Ember appears once per screen</li>
                </ul>
              </Tile>

              <Tile index={29} label="Not this" span="col-span-12 sm:col-span-4">
                <ul className="font-encre-body text-xs leading-relaxed text-encre-bone/40">
                  <li className="line-through">Neon glow on text</li>
                  <li className="line-through">A third ink</li>
                  <li className="line-through">Blurred drop shadows</li>
                  <li className="line-through">Thin weights on dark</li>
                </ul>
              </Tile>

              <Tile index={30} label="Colour roles, fixed" span="col-span-12 sm:col-span-4">
                <dl className="w-full font-encre-mono text-[10px] leading-relaxed">
                  {[
                    ["ground", "ink"],
                    ["surface", "deep"],
                    ["text", "bone"],
                    ["secondary", "brass / amber"],
                    ["primary action", "ember"],
                    ["overprint only", "plum"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3 border-b border-encre-bone/10 py-0.5">
                      <dt className="text-encre-bone/45">{k}</dt>
                      <dd className="text-encre-bone">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Tile>
            </div>

            <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-encre-bone/25 pt-5 font-encre-mono text-[10px] uppercase tracking-[0.15em] text-encre-bone/45">
              <span>30 artifacts · CSS + SVG specimens</span>
              <span>Photographs to come</span>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
