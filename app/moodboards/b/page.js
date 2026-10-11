import Link from "next/link";

export const metadata = {
  title: "Mood board B · Métro Ligne",
  description:
    "A transit-signage direction: roundels, route lines, tabular times and one signal blue.",
};

/* ---------- primitives ---------- */

function Cell({ children, label, index, span = "" }) {
  return (
    <figure
      className={`flex flex-col border border-metro-line bg-metro-white ${span}`}
    >
      <div className="flex items-center gap-2 border-b border-metro-line px-3 py-1.5">
        <span className="font-metro-mono text-[10px] tabular-nums text-metro-navy/45">
          {String(index).padStart(2, "0")}
        </span>
        <figcaption className="font-metro-sans text-[10px] font-medium uppercase tracking-[0.1em] text-metro-navy/60">
          {label}
        </figcaption>
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        {children}
      </div>
    </figure>
  );
}

function Roundel({ n, color }) {
  return (
    <span
      className="flex h-11 w-11 items-center justify-center rounded-full font-metro-sans text-lg font-bold text-white"
      style={{ background: color }}
    >
      {n}
    </span>
  );
}

const LINES = [
  { n: 1, color: "#FFCE00", ink: "#0B1B3A" },
  { n: 4, color: "#8E3A8C", ink: "#fff" },
  { n: 6, color: "#007A4D", ink: "#fff" },
  { n: 9, color: "#C25A00", ink: "#fff" },
  { n: 12, color: "#007A4D", ink: "#fff" },
  { n: 14, color: "#8E3A8C", ink: "#fff" },
];

export default function MoodboardB() {
  return (
    <main className="min-h-screen bg-metro-gray text-metro-navy">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-metro-sans text-xs font-medium uppercase tracking-[0.12em] text-metro-navy/60 hover:text-metro-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-blue"
        >
          ← Back to hub
        </Link>

        <header className="mt-6 flex flex-col gap-5 border-l-[6px] border-metro-blue bg-metro-white p-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-metro-mono text-[11px] uppercase tracking-[0.2em] text-metro-blue">
              Mood board B
            </p>
            <h1 className="mt-1 font-metro-sans text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
              Métro Ligne
            </h1>
            <p className="mt-3 max-w-xl font-metro-sans text-base leading-relaxed text-metro-navy/75">
              The system under the city, brought up to the surface. Days are
              lines, activities are stops, and the interface does what signage
              does: tells you where you are and what comes next.
            </p>
          </div>
          <dl className="shrink-0 font-metro-mono text-[11px] uppercase tracking-[0.1em] text-metro-navy/55">
            <div className="flex gap-2">
              <dt>Grid</dt>
              <dd className="text-metro-navy">8px</dd>
            </div>
            <div className="flex gap-2">
              <dt>Accent</dt>
              <dd className="text-metro-blue">#0B5FFF</dd>
            </div>
            <div className="flex gap-2">
              <dt>Mode</dt>
              <dd className="text-metro-navy">Wayfinding</dd>
            </div>
          </dl>
        </header>

        {/* strict grid — every cell the same width, unlike board A's masonry */}
        <div className="mt-8 grid grid-cols-2 gap-px bg-metro-line sm:grid-cols-3 lg:grid-cols-4">
          <Cell index={1} label="Palette · neutrals">
            <div className="grid w-full grid-cols-4 gap-1">
              {[
                ["#FFFFFF", "White"],
                ["#EEF0F3", "Gray"],
                ["#C9CED6", "Line"],
                ["#0B1B3A", "Navy"],
              ].map(([hex, n]) => (
                <div key={hex} className="flex flex-col gap-1">
                  <span
                    className="block h-10 border border-metro-line"
                    style={{ background: hex }}
                  />
                  <span className="font-metro-mono text-[8px] text-metro-navy/55">
                    {n}
                  </span>
                </div>
              ))}
            </div>
          </Cell>

          <Cell index={2} label="Accent · one blue only">
            <div className="w-full">
              <span className="block h-16 w-full bg-metro-blue" />
              <p className="mt-2 font-metro-mono text-[10px] tabular-nums text-metro-navy/60">
                #0B5FFF · primary action
              </p>
            </div>
          </Cell>

          <Cell index={3} label="Line colours · category only">
            <div className="flex flex-wrap gap-1.5">
              {LINES.map((l) => (
                <Roundel key={l.n} n={l.n} color={l.color} />
              ))}
            </div>
          </Cell>

          <Cell index={4} label="Display · Inter Tight">
            <div className="w-full">
              <p className="font-metro-sans text-5xl font-bold leading-none tracking-tight">
                Aa
              </p>
              <p className="mt-1 font-metro-sans text-sm font-medium">
                Châtelet–Les Halles
              </p>
            </div>
          </Cell>

          <Cell index={5} label="Tabular figures · times">
            <p className="font-metro-mono text-2xl tabular-nums leading-tight">
              09:40
              <br />
              11:15
              <br />
              14:05
            </p>
          </Cell>

          <Cell index={6} label="Route line · stops">
            <svg viewBox="0 0 60 120" className="h-28" aria-hidden="true">
              <line
                x1="12"
                y1="10"
                x2="12"
                y2="110"
                stroke="#0B5FFF"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {[14, 45, 76, 106].map((y) => (
                <circle
                  key={y}
                  cx="12"
                  cy={y}
                  r="5.5"
                  fill="#fff"
                  stroke="#0B1B3A"
                  strokeWidth="2.5"
                />
              ))}
            </svg>
          </Cell>

          <Cell index={7} label="Interchange · transfer dot">
            <svg viewBox="0 0 80 60" className="h-20" aria-hidden="true">
              <line x1="10" y1="30" x2="70" y2="30" stroke="#FFCE00" strokeWidth="7" />
              <line x1="40" y1="5" x2="40" y2="55" stroke="#8E3A8C" strokeWidth="7" />
              <circle cx="40" cy="30" r="9" fill="#fff" stroke="#0B1B3A" strokeWidth="3" />
            </svg>
          </Cell>

          <Cell index={8} label="Station tile · bevelled white">
            <div
              className="h-20 w-full"
              style={{
                backgroundColor: "#fff",
                backgroundImage:
                  "linear-gradient(135deg, rgba(11,27,58,0.08) 0 2px, transparent 2px), linear-gradient(-45deg, rgba(11,27,58,0.05) 0 2px, transparent 2px)",
                backgroundSize: "26px 20px",
                boxShadow: "inset 0 0 0 1px #C9CED6",
              }}
              aria-hidden="true"
            />
          </Cell>

          <Cell index={9} label="Directional sign">
            <div className="w-full bg-metro-navy px-3 py-2">
              <p className="flex items-center justify-between font-metro-sans text-sm font-semibold text-white">
                Sortie <span aria-hidden="true">→</span>
              </p>
              <p className="mt-0.5 font-metro-sans text-[10px] uppercase tracking-[0.1em] text-white/65">
                Rue de Rivoli
              </p>
            </div>
          </Cell>

          <Cell index={10} label="Pill badge · duration">
            <div className="flex flex-wrap gap-1.5">
              {["25 min", "1 h 10", "Free", "€14"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-metro-line bg-metro-gray px-2.5 py-1 font-metro-mono text-[10px] tabular-nums"
                >
                  {t}
                </span>
              ))}
            </div>
          </Cell>

          <Cell index={11} label="Buttons · states">
            <div className="flex w-full flex-col gap-1.5">
              <span className="block bg-metro-blue px-3 py-2 text-center font-metro-sans text-xs font-semibold text-white">
                Open details
              </span>
              <span className="block border border-metro-navy px-3 py-2 text-center font-metro-sans text-xs font-semibold">
                Add to day
              </span>
              <span className="block border border-metro-line bg-metro-gray px-3 py-2 text-center font-metro-sans text-xs font-semibold text-metro-navy/35">
                Sold out
              </span>
            </div>
          </Cell>

          <Cell index={12} label="Focus ring · 2px offset">
            <span className="block bg-metro-blue px-3 py-2 font-metro-sans text-xs font-semibold text-white outline-2 outline-offset-2 outline-metro-navy">
              Focused
            </span>
          </Cell>

          <Cell index={13} label="Grid · 8px rhythm">
            <div
              className="h-20 w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(11,27,58,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,58,0.13) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
              aria-hidden="true"
            />
          </Cell>

          <Cell index={14} label="Map fragment">
            <svg viewBox="0 0 110 80" className="w-full" aria-hidden="true">
              <polyline points="5,70 30,70 50,50 95,50" fill="none" stroke="#FFCE00" strokeWidth="5" />
              <polyline points="15,10 15,45 40,70 100,70" fill="none" stroke="#007A4D" strokeWidth="5" />
              <polyline points="100,12 60,12 40,32 40,75" fill="none" stroke="#C8102E" strokeWidth="5" />
              {[[15,45],[40,70],[40,32],[50,50]].map(([x,y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#fff" stroke="#0B1B3A" strokeWidth="2" />
              ))}
            </svg>
          </Cell>

          <Cell index={15} label="Ticket · carnet">
            <div className="w-full border border-metro-navy/30 bg-[#F3EFE0] p-2">
              <p className="font-metro-mono text-[9px] uppercase tracking-[0.15em] text-metro-navy/60">
                RATP · t+
              </p>
              <span className="mt-1 block h-3 w-full bg-metro-navy/75" />
              <p className="mt-1 font-metro-mono text-[9px] tabular-nums text-metro-navy/60">
                0412 8831 02
              </p>
            </div>
          </Cell>

          <Cell index={16} label="Icons · 2px stroke, square cap">
            <div className="grid grid-cols-4 gap-2 text-metro-navy">
              {[
                <path key="a" d="M4 18V8l8-4 8 4v10M4 18h16M9 18v-5h6v5" />,
                <path key="b" d="M6 4h12v12a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V4Zm0 6h12M9 20l-2 2m8-2 2 2" />,
                <path key="c" d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
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
          </Cell>

          <Cell index={17} label="Stop card">
            <article className="w-full border-l-4 border-metro-yellow bg-metro-gray p-2.5">
              <p className="font-metro-mono text-[9px] uppercase tracking-[0.12em] text-metro-navy/55">
                Day 2 · Stop 3
              </p>
              <h3 className="mt-0.5 font-metro-sans text-sm font-semibold">
                Sainte-Chapelle
              </h3>
              <p className="mt-1 font-metro-mono text-[10px] tabular-nums text-metro-navy/60">
                14:30 → 15:30 · €11,50
              </p>
            </article>
          </Cell>

          <Cell index={18} label="Type scale">
            <div className="w-full font-metro-mono text-[10px] tabular-nums text-metro-navy/55">
              {[
                ["48", "font-metro-sans text-3xl font-bold"],
                ["32", "font-metro-sans text-2xl font-bold"],
                ["20", "font-metro-sans text-lg font-semibold"],
                ["16", "font-metro-sans text-base"],
                ["13", "font-metro-sans text-xs"],
              ].map(([n, cls]) => (
                <p key={n} className="flex items-baseline gap-2">
                  <span className="w-5">{n}</span>
                  <span className={`${cls} text-metro-navy`}>Métro</span>
                </p>
              ))}
            </div>
          </Cell>

          <Cell index={19} label="Service status · semantic">
            <div className="flex w-full flex-col gap-1 font-metro-sans text-[11px] font-medium">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-metro-green" />
                Normal service
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-metro-yellow" />
                Minor delays
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-metro-red" />
                Line closed
              </span>
            </div>
          </Cell>

          <Cell index={20} label="Shape · pill or square, nothing between">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-10 w-10 bg-metro-navy/80" />
              <span className="h-10 w-16 rounded-full bg-metro-navy/80" />
              <span className="h-10 w-10 rounded-full bg-metro-navy/80" />
            </div>
          </Cell>

          <Cell index={21} label="Spacing · 8 16 24 32 48">
            <div className="flex items-end gap-1" aria-hidden="true">
              {[8, 16, 24, 32, 48].map((s) => (
                <span
                  key={s}
                  className="w-4 bg-metro-blue"
                  style={{ height: `${s}px` }}
                />
              ))}
            </div>
          </Cell>

          <Cell index={22} label="Filter bar · selected state">
            <div className="flex w-full flex-wrap gap-1">
              {["All", "Museum", "Food", "Walk"].map((t, i) => (
                <span
                  key={t}
                  className={`rounded-full px-2.5 py-1 font-metro-sans text-[10px] font-semibold ${
                    i === 1
                      ? "bg-metro-navy text-white"
                      : "border border-metro-line bg-metro-white text-metro-navy/70"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </Cell>

          <Cell index={23} label="Platform edge">
            <div className="w-full" aria-hidden="true">
              <span className="block h-4 w-full bg-metro-yellow" />
              <span
                className="block h-8 w-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #0B1B3A 0 10px, #EEF0F3 10px 20px)",
                }}
              />
            </div>
          </Cell>

          <Cell index={24} label="Numerals · route numbers">
            <p className="font-metro-sans text-4xl font-bold tabular-nums tracking-tight">
              0123456789
            </p>
          </Cell>

          <Cell index={25} label="Hierarchy · one loud thing">
            <div className="w-full">
              <p className="font-metro-sans text-2xl font-bold leading-none">
                Day 4
              </p>
              <p className="mt-1 font-metro-sans text-xs text-metro-navy/60">
                Montmartre &amp; the north
              </p>
              <p className="mt-0.5 font-metro-mono text-[10px] text-metro-navy/45">
                6 stops · 4.2 km walking
              </p>
            </div>
          </Cell>

          <Cell index={26} label="Empty state">
            <div className="w-full border border-dashed border-metro-line py-4 text-center">
              <p className="font-metro-sans text-xs font-medium text-metro-navy/55">
                No stops match
              </p>
              <p className="mt-0.5 font-metro-mono text-[10px] text-metro-navy/40">
                Clear filters
              </p>
            </div>
          </Cell>

          <Cell index={27} label="Enamel plate · line terminus">
            <div className="w-full rounded-sm bg-metro-navy px-3 py-2 text-center">
              <p className="font-metro-sans text-[10px] uppercase tracking-[0.18em] text-white/60">
                Direction
              </p>
              <p className="font-metro-sans text-sm font-bold text-white">
                Porte de Clignancourt
              </p>
            </div>
          </Cell>

          <Cell index={28} label="Contrast check">
            <div className="w-full font-metro-sans text-[10px] font-semibold">
              <p className="bg-metro-blue px-2 py-1 text-white">
                White on blue · 5.9:1 ✓
              </p>
              <p className="mt-1 bg-metro-yellow px-2 py-1 text-metro-navy">
                Navy on yellow · 12.1:1 ✓
              </p>
              <p className="mt-1 bg-metro-white px-2 py-1 text-metro-navy/40">
                Disabled · not a state to read
              </p>
            </div>
          </Cell>

          <Cell index={29} label="Tone of voice">
            <ul className="w-full font-metro-sans text-xs leading-relaxed text-metro-navy/80">
              <li>Say the time, then the place</li>
              <li>Numbers over adjectives</li>
              <li>Never two accents on screen</li>
            </ul>
          </Cell>

          <Cell index={30} label="Not this">
            <ul className="w-full font-metro-sans text-xs leading-relaxed text-metro-navy/45">
              <li className="line-through">Soft blurred shadows</li>
              <li className="line-through">Serif body copy</li>
              <li className="line-through">Decorative gradients</li>
            </ul>
          </Cell>
        </div>

        <footer className="mt-8 flex items-center justify-between border-t border-metro-line pt-5 font-metro-mono text-[10px] uppercase tracking-[0.15em] text-metro-navy/50">
          <span>30 artifacts</span>
          <span>CSS + SVG only · no image files</span>
        </footer>
      </div>
    </main>
  );
}
