import Image from "next/image";
import Link from "next/link";
import { PHOTOS, PHOTO_ORDER } from "./photos";

export const metadata = {
  title: "Mood board B · Métro Ligne",
  description:
    "A transit-signage direction: roundels, route lines, tabular times and one signal blue.",
};

/* ---------- cells ---------- */

function Cell({ children, label, index, flush = false }) {
  return (
    <figure className="flex flex-col border border-metro-line bg-metro-white">
      <div className="flex items-center gap-2 border-b border-metro-line px-3 py-1.5">
        <span className="font-metro-mono text-[10px] tabular-nums text-metro-navy/45">
          {String(index).padStart(2, "0")}
        </span>
        <figcaption className="font-metro-sans text-[10px] font-medium uppercase leading-tight tracking-[0.08em] text-metro-navy/60">
          {label}
        </figcaption>
      </div>
      <div
        className={
          flush
            ? "flex flex-1 items-stretch"
            : "flex flex-1 items-center justify-center p-4"
        }
      >
        {children}
      </div>
    </figure>
  );
}

function Photo({ id, index }) {
  const p = PHOTOS[id];
  return (
    <Cell index={index} label={p.note} flush>
      <Image
        src={`/moodboards/metro/${id}.jpg`}
        alt={p.alt}
        width={p.w}
        height={p.h}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="h-48 w-full object-cover sm:h-44"
      />
    </Cell>
  );
}

function Roundel({ n, color, ink = "#fff" }) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-full font-metro-sans text-base font-bold"
      style={{ background: color, color: ink }}
    >
      {n}
    </span>
  );
}

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

        {/* strict grid: every cell identical, hairline gaps */}
        <div className="mt-8 grid grid-cols-2 gap-px bg-metro-line sm:grid-cols-3 lg:grid-cols-4">
          <Photo id="b01" index={1} />
          <Photo id="b04" index={2} />

          <Cell index={3} label="Palette · neutrals carry everything">
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

          <Photo id="b02" index={4} />
          <Photo id="b06" index={5} />

          <Cell index={6} label="Line colours · category, never emphasis">
            <div className="flex flex-wrap gap-1.5">
              <Roundel n={1} color="#FFCE00" ink="#0B1B3A" />
              <Roundel n={4} color="#8E3A8C" />
              <Roundel n={5} color="#C25A00" />
              <Roundel n={8} color="#D47BA8" ink="#0B1B3A" />
              <Roundel n={9} color="#C9A227" ink="#0B1B3A" />
              <Roundel n={11} color="#7B3F00" />
            </div>
          </Cell>

          <Cell index={7} label="Accent · one blue, one job">
            <div className="w-full">
              <span className="block h-14 w-full bg-metro-blue" />
              <p className="mt-2 font-metro-mono text-[10px] tabular-nums text-metro-navy/60">
                #0B5FFF · primary action only
              </p>
            </div>
          </Cell>

          <Photo id="b10" index={8} />
          <Photo id="b03" index={9} />

          <Cell index={10} label="Display · Inter Tight">
            <div className="w-full">
              <p className="font-metro-sans text-5xl font-bold leading-none tracking-tight">
                Aa
              </p>
              <p className="mt-1 font-metro-sans text-sm font-medium">
                Châtelet–Les Halles
              </p>
            </div>
          </Cell>

          <Photo id="b08" index={11} />
          <Photo id="b05" index={12} />

          <Cell index={13} label="Tabular figures · times must align">
            <p className="font-metro-mono text-xl tabular-nums leading-relaxed">
              09:40
              <br />
              11:15
              <br />
              14:05
            </p>
          </Cell>

          <Photo id="b07" index={14} />
          <Photo id="b09" index={15} />

          <Cell index={16} label="Route line · stops">
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

          <Photo id="b11" index={17} />
          <Photo id="b12" index={18} />

          <Cell index={19} label="Buttons · three states, one accent">
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

          <Photo id="b13" index={20} />
          <Photo id="b15" index={21} />

          <Cell index={22} label="Filter chips · selected is solid">
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

          <Photo id="b16" index={23} />
          <Photo id="b18" index={24} />

          <Cell index={25} label="Spacing · 8px rhythm throughout">
            <div className="flex w-full items-end gap-1" aria-hidden="true">
              {[8, 16, 24, 32, 48].map((s) => (
                <span
                  key={s}
                  className="w-4 bg-metro-blue"
                  style={{ height: `${s}px` }}
                />
              ))}
            </div>
          </Cell>

          <Photo id="b14" index={26} />
          <Photo id="b20" index={27} />

          <Cell index={28} label="Contrast · checked, not assumed">
            <div className="w-full font-metro-sans text-[10px] font-semibold">
              <p className="bg-metro-blue px-2 py-1 text-white">
                White on blue · 5.9:1 ✓
              </p>
              <p className="mt-1 bg-metro-yellow px-2 py-1 text-metro-navy">
                Navy on yellow · 12.1:1 ✓
              </p>
              <p className="mt-1 border border-metro-line px-2 py-1 text-metro-navy/35">
                Disabled · not meant to be read
              </p>
            </div>
          </Cell>

          <Photo id="b17" index={29} />
          <Photo id="b19" index={30} />
        </div>

        {/* credits */}
        <section
          aria-labelledby="credits"
          className="mt-10 border-t-2 border-metro-navy pt-6"
        >
          <h2
            id="credits"
            className="font-metro-sans text-xl font-bold tracking-tight"
          >
            Image credits
          </h2>
          <p className="mt-1 max-w-2xl font-metro-sans text-xs leading-relaxed text-metro-navy/60">
            Twenty collected photographs, stored with the site so the page
            makes no external requests. Ten further artifacts are specimens
            drawn in CSS. Unsplash, Pexels and CC0 images need no credit; the
            CC BY-SA files below require one, and that is why the licence is
            named on every line.
          </p>
          <ol className="mt-4 grid gap-x-8 gap-y-1 font-metro-mono text-[11px] leading-relaxed text-metro-navy/70 sm:grid-cols-2">
            {PHOTO_ORDER.map((id) => {
              const p = PHOTOS[id];
              return (
                <li key={id} className="flex gap-2">
                  <span className="shrink-0 tabular-nums text-metro-navy/40">
                    {id}
                  </span>
                  <span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-metro-navy/30 underline-offset-2 hover:text-metro-blue hover:decoration-metro-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-blue"
                    >
                      {p.by}
                    </a>
                    <span className="text-metro-navy/45">
                      {" "}
                      · {p.src} · {p.lic}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>
        </section>

        <footer className="mt-8 flex items-center justify-between border-t border-metro-line pt-5 font-metro-mono text-[10px] uppercase tracking-[0.15em] text-metro-navy/50">
          <span>30 artifacts</span>
          <span>20 photographs · 10 CSS specimens</span>
        </footer>
      </div>
    </main>
  );
}
