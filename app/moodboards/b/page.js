import Image from "next/image";
import Link from "next/link";
import { PHOTOS, PHOTO_ORDER } from "./photos";

export const metadata = {
  title: "Mood board B · Métro Ligne",
  description:
    "A transit-signage direction: enamel panels, roundels, route diagrams, tabular times and one signal blue.",
};

const SECTIONS = [
  { num: "01", id: "signage", name: "Signage", blurb: "The enamel system: disc, destination, arrow.", count: 7 },
  { num: "02", id: "network", name: "Network", blurb: "Days are lines. Activities are stops.", count: 5 },
  { num: "03", id: "color", name: "Color", blurb: "Line color labels. One blue acts.", count: 4 },
  { num: "04", id: "type", name: "Type", blurb: "Grotesque, tight, tabular where it counts.", count: 3 },
  { num: "05", id: "structure", name: "Structure", blurb: "Repetition, symmetry, the 8px grid.", count: 7 },
  { num: "06", id: "interface", name: "Interface", blurb: "Controls, states, and what not to do.", count: 4 },
];

function SectionHead({ num, id, name, blurb, count }) {
  return (
    <header className="mb-6 flex flex-wrap items-end gap-x-4 gap-y-1 border-b-2 border-metro-navy pb-2">
      <span className="font-metro-mono text-sm tabular-nums text-metro-blue">{num}</span>
      <h2 id={id} className="font-metro-sans text-3xl font-bold leading-none tracking-tight">
        {name}
      </h2>
      <p className="font-metro-sans text-xs text-metro-navy/70">{blurb}</p>
      <span className="ml-auto font-metro-mono text-[10px] uppercase tracking-[0.15em] text-metro-navy/70">
        {count} artifacts
      </span>
    </header>
  );
}

/* ---------- cells ----------
   Spec  — a captioned specimen on white
   Panel — a full-bleed recreation of real signage
   Photo — a navy duotone, used only where geometry beats drawing */

function Head({ index, label }) {
  return (
    <div className="flex items-center gap-2 border-b border-metro-line px-3 py-1.5">
      <span className="font-metro-mono text-[10px] tabular-nums text-metro-navy/70">
        {String(index).padStart(2, "0")}
      </span>
      <span className="font-metro-sans text-[10px] font-medium uppercase leading-tight tracking-[0.08em] text-metro-navy/70">
        {label}
      </span>
    </div>
  );
}

function Spec({ children, label, index, span = "" }) {
  return (
    <figure className={`flex flex-col border border-metro-line bg-metro-white ${span}`}>
      <Head index={index} label={label} />
      <figcaption className="sr-only">{label}</figcaption>
      <div className="flex flex-1 items-center justify-center p-4">{children}</div>
    </figure>
  );
}

function Panel({ children, label, index, span = "" }) {
  return (
    <figure className={`flex flex-col border border-metro-line bg-metro-white ${span}`}>
      <Head index={index} label={label} />
      <figcaption className="sr-only">{label}</figcaption>
      <div className="flex flex-1 items-center justify-center bg-metro-gray p-3">
        {children}
      </div>
    </figure>
  );
}

function Photo({ id, index, span = "", h = "h-44" }) {
  const p = PHOTOS[id];
  return (
    <figure className={`flex flex-col border border-metro-line bg-metro-white ${span}`}>
      <Head index={index} label={p.note} />
      <figcaption className="sr-only">{p.note}</figcaption>
      <div className="flex-1 bg-metro-navy">
        <Image
          src={`/moodboards/metro/${id}.jpg`}
          alt={p.alt}
          width={p.w}
          height={p.h}
          sizes="(max-width: 640px) 100vw, 50vw"
          className={`w-full object-cover mix-blend-luminosity contrast-110 ${h}`}
        />
      </div>
    </figure>
  );
}

/* ---------- signage primitives ---------- */

const LINES = { 1: "#FFCE00", 4: "#A0006E", 5: "#F28E42", 6: "#84C28E", 8: "#CEADD2", 9: "#D5C900", 11: "#8D5E2A", 14: "#62259D" };

function Disc({ n, size = "h-9 w-9 text-base" }) {
  const pale = ["1", "6", "8", "9"].includes(String(n));
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-metro-sans font-bold ${size}`}
      style={{ background: LINES[n], color: pale ? "#0B1B3A" : "#FFFFFF" }}
    >
      {n}
    </span>
  );
}

function Arrow({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

const TILE = {
  backgroundColor: "#FBFBFA",
  backgroundImage:
    "linear-gradient(135deg, rgba(11,27,58,0.10) 0 3px, transparent 3px), linear-gradient(-45deg, rgba(11,27,58,0.07) 0 3px, transparent 3px)",
  backgroundSize: "46px 30px",
  boxShadow: "inset 0 0 0 1px #DADEE4",
};

/* hairline grid: the gap-px trick gives true 1px rules between cells */
function Grid({ children, cols = "sm:grid-cols-2 lg:grid-cols-4" }) {
  return <div className={`grid grid-cols-2 gap-px bg-metro-line ${cols}`}>{children}</div>;
}

export default function MoodboardB() {
  return (
    <main className="min-h-screen bg-metro-gray text-metro-navy">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-metro-sans text-xs font-medium uppercase tracking-[0.12em] text-metro-navy/70 hover:text-metro-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-blue"
        >
          ← Back to hub
        </Link>

        <header className="mt-6 bg-metro-navy p-7 sm:p-10">
          <p className="font-metro-mono text-[11px] uppercase tracking-[0.3em] text-white/70">
            Mood board B
          </p>
          <h1 className="mt-3 font-metro-sans text-6xl font-bold leading-[0.88] tracking-tight text-white sm:text-8xl">
            Métro Ligne
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[1, 4, 6, 9, 11, 14].map((n) => (
              <Disc key={n} n={n} size="h-8 w-8 text-sm" />
            ))}
          </div>
          <p className="mt-6 max-w-xl font-metro-sans text-base leading-relaxed text-white/75">
            The system under the city, brought up to the surface. Days are
            lines, activities are stops, and the interface does what signage
            does: says where you are and what comes next — then stops talking.
          </p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-1 font-metro-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
            <div className="flex gap-2"><dt>Grid</dt><dd className="text-white">8px</dd></div>
            <div className="flex gap-2"><dt>Accent</dt><dd className="text-[#6FA4FF]">#0A52E0</dd></div>
            <div className="flex gap-2"><dt>Drawn</dt><dd className="text-white">20</dd></div>
            <div className="flex gap-2"><dt>Photographed</dt><dd className="text-white">10</dd></div>
          </dl>
        </header>

        <nav aria-label="Sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-metro-mono text-[11px] uppercase tracking-[0.12em] text-metro-navy/70 hover:text-metro-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-blue"
            >
              {s.num} {s.name}
            </a>
          ))}
        </nav>

        <p className="mt-6 max-w-2xl font-metro-sans text-sm leading-relaxed text-metro-navy/70">
          Most of this board is{" "}
          <strong className="font-semibold text-metro-navy">drawn, not photographed</strong>.
          The Métro's identity is a vector system — enamel, diagram, disc — so
          recreating it in SVG is closer to the source than any photograph.
          Photography appears only where real geometry does something a drawing
          cannot, and every photo is reduced to a navy duotone so the set reads
          as one system.
        </p>

        {/* 01 — SIGNAGE: the panel runs full width, like a real sign */}
        <section aria-labelledby="signage" className="mt-12">
          <SectionHead {...SECTIONS[0]} />
          <Grid>
            <Panel index={1} label="Direction panel, recreated" span="col-span-2 lg:col-span-4">
              <div className="w-full max-w-2xl bg-white shadow-sm">
                <div className="flex items-center gap-2.5 border-b border-metro-line px-3 py-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-metro-navy font-metro-sans text-sm font-bold">
                    M
                  </span>
                  <Disc n={11} size="h-7 w-7 text-sm" />
                  <span className="font-metro-sans text-sm font-semibold leading-tight">
                    Châtelet
                    <br />
                    <span className="font-normal">Rosny–Bois-Perrier</span>
                  </span>
                  <Arrow className="ml-auto h-6 w-6 text-metro-navy" />
                </div>
                <div className="flex items-center gap-2.5 bg-[#0B3A86] px-3 py-2.5 text-white">
                  <span className="font-metro-sans text-lg font-bold">Sortie</span>
                  <span className="font-metro-sans text-xs leading-tight opacity-90">
                    1 r. de la Roquette
                    <br />2 fbg Saint-Antoine
                  </span>
                  <Arrow className="ml-auto h-6 w-6" />
                </div>
              </div>
            </Panel>
            <Panel index={2} label="Nameplate on faïence" span="col-span-2">
              <div className="flex h-full w-full items-center justify-center py-5" style={TILE}>
                <span className="bg-[#1B3A6B] px-6 py-2.5 font-metro-sans text-2xl font-semibold tracking-tight text-white">
                  Bastille
                </span>
              </div>
            </Panel>
            <Photo id="b04" index={3} span="col-span-2" h="h-40" />
            <Spec index={4} label="Line discs · category, never emphasis">
              <div className="flex flex-wrap gap-1.5">
                {[1, 4, 5, 6, 8, 9].map((n) => (
                  <Disc key={n} n={n} />
                ))}
              </div>
            </Spec>
            <Photo id="x06" index={5} />
            <Photo id="b01" index={6} />
            <Spec index={7} label="Icons · 2px stroke, square cap">
              <div className="grid grid-cols-2 gap-2 text-metro-navy">
                {[
                  <path key="a" d="M4 18V8l8-4 8 4v10M4 18h16M9 18v-5h6v5" />,
                  <path key="b" d="M6 4h12v12a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V4Zm0 6h12M9 20l-2 2m8-2 2 2" />,
                  <path key="c" d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
                  <path key="d" d="M12 3v9l5 3M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />,
                ].map((d, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8" aria-hidden="true">
                    {d}
                  </svg>
                ))}
              </div>
            </Spec>
          </Grid>
        </section>

        {/* 02 — NETWORK: the diagram gets the width it needs */}
        <section aria-labelledby="network" className="mt-12">
          <SectionHead {...SECTIONS[1]} />
          <Grid>
            <Panel index={8} label="Network fragment" span="col-span-2">
              <svg viewBox="0 0 220 110" className="w-full" aria-hidden="true">
                <polyline points="10,92 60,92 90,62 210,62" fill="none" stroke="#FFCE00" strokeWidth="7" strokeLinejoin="round" />
                <polyline points="28,12 28,58 62,92 210,92" fill="none" stroke="#84C28E" strokeWidth="7" strokeLinejoin="round" />
                <polyline points="200,14 120,14 90,44 90,100" fill="none" stroke="#A0006E" strokeWidth="7" strokeLinejoin="round" />
                <polyline points="10,38 70,38 100,8 190,8" fill="none" stroke="#62259D" strokeWidth="7" strokeLinejoin="round" />
                {[[28, 58], [62, 92], [90, 62], [90, 44], [120, 14], [70, 38], [100, 8], [60, 92]].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill="#fff" stroke="#0B1B3A" strokeWidth="2.5" />
                ))}
              </svg>
            </Panel>
            <Photo id="b12" index={9} span="col-span-2" h="h-56" />
            <Spec index={10} label="Route line · stops and terminus">
              <svg viewBox="0 0 70 130" className="h-32" aria-hidden="true">
                <line x1="14" y1="12" x2="14" y2="118" stroke="#0A52E0" strokeWidth="7" strokeLinecap="round" />
                {[16, 44, 72, 100].map((y) => (
                  <circle key={y} cx="14" cy={y} r="5.5" fill="#fff" stroke="#0B1B3A" strokeWidth="2.5" />
                ))}
                <circle cx="14" cy="116" r="7.5" fill="#0B1B3A" />
              </svg>
            </Spec>
            <Spec index={11} label="Interchange · where two days cross">
              <svg viewBox="0 0 90 70" className="h-20" aria-hidden="true">
                <line x1="8" y1="35" x2="82" y2="35" stroke="#FFCE00" strokeWidth="7" />
                <line x1="45" y1="6" x2="45" y2="64" stroke="#62259D" strokeWidth="7" />
                <rect x="34" y="24" width="22" height="22" rx="11" fill="#fff" stroke="#0B1B3A" strokeWidth="3" />
              </svg>
            </Spec>
            <Photo id="x03" index={12} span="col-span-2" h="h-40" />
          </Grid>
        </section>

        {/* 03 — Color */}
        <section aria-labelledby="color" className="mt-12">
          <SectionHead {...SECTIONS[2]} />
          <Grid>
            <Spec index={13} label="Palette · neutrals do the work">
              <div className="grid w-full grid-cols-4 gap-1">
                {[["#FFFFFF", "White"], ["#EEF0F3", "Gray"], ["#C9CED6", "Line"], ["#0B1B3A", "Navy"]].map(([hex, n]) => (
                  <div key={hex} className="flex flex-col gap-1">
                    <span className="block h-10 border border-metro-line" style={{ background: hex }} />
                    <span className="font-metro-mono text-[8px] text-metro-navy/70">{n}</span>
                  </div>
                ))}
              </div>
            </Spec>
            <Spec index={14} label="Accent · one blue, one job">
              <div className="w-full">
                <span className="block h-14 w-full bg-metro-blue" />
                <p className="mt-2 font-metro-mono text-[10px] tabular-nums text-metro-navy/70">
                  #0A52E0 · primary action only
                </p>
              </div>
            </Spec>
            <Spec index={15} label="Service status · semantic, not decorative">
              <div className="flex w-full flex-col gap-1 font-metro-sans text-[11px] font-medium">
                <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-metro-green" />Normal service</span>
                <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-metro-yellow" />Minor delays</span>
                <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-metro-red" />Line closed</span>
              </div>
            </Spec>
            <Spec index={16} label="Contrast · checked, not assumed">
              <div className="w-full font-metro-sans text-[10px] font-semibold">
                <p className="bg-metro-blue px-2 py-1 text-white">White on blue · 6.4:1 ✓</p>
                <p className="mt-1 bg-metro-yellow px-2 py-1 text-metro-navy">Navy on yellow · 11.4:1 ✓</p>
                <p className="mt-1 border border-metro-line px-2 py-1 text-metro-navy/35">Disabled · not meant to be read</p>
              </div>
            </Spec>
          </Grid>
        </section>

        {/* 04 — TYPE */}
        <section aria-labelledby="type" className="mt-12">
          <SectionHead {...SECTIONS[3]} />
          <Grid cols="sm:grid-cols-3">
            <Spec index={17} label="Display · Inter Tight">
              <div className="w-full">
                <p className="font-metro-sans text-5xl font-bold leading-none tracking-tight">Aa</p>
                <p className="mt-1 font-metro-sans text-sm font-medium">Châtelet–Les Halles</p>
              </div>
            </Spec>
            <Spec index={18} label="Tabular figures · times must align">
              <p className="font-metro-mono text-xl tabular-nums leading-relaxed">
                09:40
                <br />
                11:15
                <br />
                14:05
              </p>
            </Spec>
            <Spec index={19} label="Type scale" span="col-span-2 sm:col-span-1">
              <div className="w-full font-metro-mono text-[10px] tabular-nums text-metro-navy/70">
                {[
                  ["48", "font-metro-sans text-3xl font-bold"],
                  ["32", "font-metro-sans text-2xl font-bold"],
                  ["20", "font-metro-sans text-lg font-semibold"],
                  ["16", "font-metro-sans text-base"],
                  ["13", "font-metro-mono text-xs"],
                ].map(([n, cls]) => (
                  <p key={n} className="flex items-baseline gap-2">
                    <span className="w-5">{n}</span>
                    <span className={`${cls} text-metro-navy`}>Ligne</span>
                  </p>
                ))}
              </div>
            </Spec>
          </Grid>
        </section>

        {/* 05 — STRUCTURE: photographs lead, the widest two first */}
        <section aria-labelledby="structure" className="mt-12">
          <SectionHead {...SECTIONS[4]} />
          <Grid>
            <Photo id="x01" index={20} span="col-span-2" h="h-60" />
            <Photo id="x02" index={21} span="col-span-2" h="h-60" />
            <Photo id="b13" index={22} h="h-48" />
            <Photo id="x05" index={23} h="h-48" />
            <Photo id="b15" index={24} span="col-span-2" h="h-48" />
            <Panel index={25} label="Platform edge" span="col-span-2">
              <div className="w-full" aria-hidden="true">
                <span className="block h-5 w-full bg-metro-yellow" />
                <span
                  className="block h-9 w-full"
                  style={{ backgroundImage: "repeating-linear-gradient(90deg, #0B1B3A 0 10px, #EEF0F3 10px 20px)" }}
                />
              </div>
            </Panel>
            <Spec index={26} label="Spacing · 8px rhythm throughout" span="col-span-2">
              <div className="flex w-full items-end gap-1" aria-hidden="true">
                {[8, 16, 24, 32, 48].map((s) => (
                  <span key={s} className="w-4 bg-metro-blue" style={{ height: `${s}px` }} />
                ))}
              </div>
            </Spec>
          </Grid>
        </section>

        {/* 06 — INTERFACE */}
        <section aria-labelledby="interface" className="mt-12">
          <SectionHead {...SECTIONS[5]} />
          <Grid>
            <Spec index={27} label="Buttons · three states, one accent">
              <div className="flex w-full flex-col gap-1.5">
                <span className="block bg-metro-blue px-3 py-2 text-center font-metro-sans text-xs font-semibold text-white">Open details</span>
                <span className="block border border-metro-navy px-3 py-2 text-center font-metro-sans text-xs font-semibold">Add to day</span>
                <span className="block border border-metro-line bg-metro-gray px-3 py-2 text-center font-metro-sans text-xs font-semibold text-metro-navy/35">Sold out</span>
              </div>
            </Spec>
            <Spec index={28} label="Filter chips · selected is solid">
              <div className="flex w-full flex-wrap gap-1">
                {["All", "Museum", "Food", "Walk"].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-full px-2.5 py-1 font-metro-sans text-[10px] font-semibold ${
                      i === 1 ? "bg-metro-navy text-white" : "border border-metro-line bg-metro-white text-metro-navy/70"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Spec>
            <Spec index={29} label="Empty state">
              <div className="w-full border border-dashed border-metro-line py-5 text-center">
                <p className="font-metro-sans text-xs font-medium text-metro-navy/70">No stops match</p>
                <p className="mt-0.5 font-metro-mono text-[10px] text-metro-navy/70">Clear filters</p>
              </div>
            </Spec>
            <Spec index={30} label="Rules of the system">
              <ul className="w-full font-metro-sans text-[11px] leading-relaxed text-metro-navy/80">
                <li>Time first, then place</li>
                <li>Line color labels, blue acts</li>
                <li>Never two accents on screen</li>
                <li className="text-metro-navy/70 line-through">Soft shadows</li>
              </ul>
            </Spec>
          </Grid>
        </section>

        {/* credits */}
        <section aria-labelledby="credits" className="mt-14 border-t-2 border-metro-navy pt-6">
          <h2 id="credits" className="font-metro-sans text-xl font-bold tracking-tight">
            Image credits
          </h2>
          <p className="mt-1 max-w-2xl font-metro-sans text-xs leading-relaxed text-metro-navy/70">
            The photographs below are stored with the site, so the page makes
            no external requests. Everything else on this board is drawn in CSS
            and SVG. Unsplash, Pexels and CC0 images need no credit; the CC
            BY-SA files require one, which is why the license is named on every
            line.
          </p>
          <ol className="mt-4 grid gap-x-8 gap-y-1 font-metro-mono text-[11px] leading-relaxed text-metro-navy/70 sm:grid-cols-2">
            {PHOTO_ORDER.map((id) => {
              const p = PHOTOS[id];
              return (
                <li key={id} className="flex gap-2">
                  <span className="shrink-0 tabular-nums text-metro-navy/70">{id}</span>
                  <span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-metro-navy/30 underline-offset-2 hover:text-metro-blue hover:decoration-metro-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-blue"
                    >
                      {p.by}
                    </a>
                    <span className="text-metro-navy/70">
                      {" "}
                      · {p.src} · {p.lic}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>
        </section>

        <footer className="mt-8 flex items-center justify-between border-t border-metro-line pt-5 font-metro-mono text-[10px] uppercase tracking-[0.15em] text-metro-navy/70">
          <span>6 sections · 30 artifacts</span>
          <span>drawn in CSS + SVG, except where credited</span>
        </footer>
      </div>
    </main>
  );
}
