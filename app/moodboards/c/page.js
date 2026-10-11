import Image from "next/image";
import Link from "next/link";
import { PHOTOS, PHOTO_ORDER } from "./photos";

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
function Tile({ children, label, index, span = "col-span-6", ink = "ember", flush = false }) {
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
        <figcaption className="font-encre-mono text-[10px] uppercase leading-tight tracking-[0.08em] text-encre-bone/55">
          {label}
        </figcaption>
      </div>
      <div className={flush ? "flex-1" : "flex flex-1 items-center p-4"}>
        {children}
      </div>
    </figure>
  );
}

function Photo({ id, index, span = "col-span-6 sm:col-span-3", ink = "ember", tall = false }) {
  const p = PHOTOS[id];
  return (
    <Tile index={index} label={p.note} span={span} ink={ink} flush>
      <Image
        src={`/moodboards/encre/${id}.jpg`}
        alt={p.alt}
        width={p.w}
        height={p.h}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className={`w-full object-cover ${tall ? "h-64" : "h-40"}`}
      />
    </Tile>
  );
}

export default function MoodboardC() {
  return (
    <main className="min-h-screen bg-encre-ink text-encre-bone">
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
              <Photo id="n02" index={1} span="col-span-12 sm:col-span-7" tall />

              <Tile index={2} label="The two inks + ground" span="col-span-12 sm:col-span-5" ink="brass">
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

              <Photo id="n06" index={3} ink="brass" />
              <Photo id="n04" index={4} />
              <Photo id="p03" index={5} span="col-span-12 sm:col-span-6" ink="brass" />

              <Tile index={6} label="Display · Archivo Black" span="col-span-6 sm:col-span-3">
                <div>
                  <p className="font-encre-display text-5xl leading-none">Aa</p>
                  <p className="mt-1 font-encre-display text-sm uppercase tracking-tight text-encre-amber">
                    Minuit
                  </p>
                </div>
              </Tile>

              <Tile index={7} label="Type scale" span="col-span-6 sm:col-span-3" ink="brass">
                <div className="w-full font-encre-mono text-[10px] tabular-nums text-encre-bone/40">
                  {[
                    ["56", "font-encre-display text-2xl uppercase"],
                    ["32", "font-encre-display text-lg uppercase"],
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

              <Photo id="p01" index={8} />
              <Photo id="n01" index={9} ink="brass" />
              <Photo id="n07" index={10} span="col-span-6 sm:col-span-3" tall />
              <Photo id="p02" index={11} span="col-span-6 sm:col-span-3" ink="brass" tall />

              <Tile index={12} label="Buttons · ember is the only accent" span="col-span-12 sm:col-span-6">
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

              <Photo id="n08" index={13} ink="brass" />
              <Photo id="n05" index={14} />
              <Photo id="p04" index={15} ink="brass" />

              <Tile index={16} label="Chips · brass outline, never filled" span="col-span-6 sm:col-span-3">
                <div className="flex flex-wrap gap-1.5 font-encre-mono text-[10px] uppercase tracking-[0.1em]">
                  {["Dîner", "Bar", "Musée", "Tard"].map((t, i) => (
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

              <Photo id="n09" index={17} span="col-span-6 sm:col-span-3" tall />
              <Photo id="p06" index={18} span="col-span-6 sm:col-span-3" ink="brass" tall />

              <Tile index={19} label="Stop card, after dark" span="col-span-12 sm:col-span-6">
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

              <Photo id="p05" index={20} ink="brass" />
              <Photo id="n03" index={21} />
              <Photo id="p08" index={22} ink="brass" />

              <Tile index={23} label="Spacing · 4 8 12 20 32" span="col-span-6 sm:col-span-3">
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

              <Photo id="p09" index={24} span="col-span-12 sm:col-span-6" />

              <Tile index={25} label="Radius: 4px, and that is all" span="col-span-6 sm:col-span-3" ink="brass">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-11 w-11 rounded-[4px] bg-encre-bone/80" />
                  <span className="h-11 w-11 rounded-[4px] border border-encre-brass" />
                  <span className="h-11 w-11 rounded-full border border-dashed border-encre-bone/20" />
                </div>
              </Tile>

              <Photo id="p07" index={26} />
              <Photo id="n10" index={27} ink="brass" />
              <Photo id="p10" index={28} />

              <Tile index={29} label="Contrast on the ink ground" span="col-span-12 sm:col-span-6" ink="brass">
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

              <Tile index={30} label="Colour roles, fixed" span="col-span-12 sm:col-span-6">
                <dl className="w-full font-encre-mono text-[10px] leading-relaxed">
                  {[
                    ["ground", "ink"],
                    ["surface", "deep"],
                    ["text", "bone"],
                    ["secondary", "brass / amber"],
                    ["primary action", "ember"],
                    ["overprint only", "plum"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between gap-3 border-b border-encre-bone/10 py-0.5"
                    >
                      <dt className="text-encre-bone/45">{k}</dt>
                      <dd className="text-encre-bone">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Tile>
            </div>

            {/* credits */}
            <section
              aria-labelledby="credits"
              className="mt-12 border-t-2 border-encre-bone/70 pt-6"
            >
              <h2
                id="credits"
                className="font-encre-display text-xl uppercase tracking-tight"
              >
                Image credits
              </h2>
              <p className="mt-2 max-w-2xl font-encre-body text-xs leading-relaxed text-encre-bone/60">
                Twenty collected photographs, stored with the site so the page
                makes no external requests. Ten further artifacts are
                specimens drawn in CSS. Unsplash and Pexels images are free to
                use; the Wikimedia file is released for free use by its
                copyright holder. Credit is given on every line regardless.
              </p>
              <ol className="mt-4 grid gap-x-8 gap-y-1 font-encre-mono text-[11px] leading-relaxed text-encre-bone/70 sm:grid-cols-2">
                {PHOTO_ORDER.map((id) => {
                  const p = PHOTOS[id];
                  return (
                    <li key={id} className="flex gap-2">
                      <span className="shrink-0 tabular-nums text-encre-bone/35">
                        {id}
                      </span>
                      <span>
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-encre-bone/30 underline-offset-2 hover:text-encre-ember hover:decoration-encre-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-encre-ember"
                        >
                          {p.by}
                        </a>
                        <span className="text-encre-bone/40">
                          {" "}
                          · {p.src} · {p.lic}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ol>
            </section>

            <footer className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-encre-bone/25 pt-5 font-encre-mono text-[10px] uppercase tracking-[0.15em] text-encre-bone/45">
              <span>30 artifacts</span>
              <span>20 photographs · 10 CSS specimens</span>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
