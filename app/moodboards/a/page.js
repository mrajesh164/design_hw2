import Image from "next/image";
import Link from "next/link";
import { PHOTOS, PHOTO_ORDER } from "./photos";

export const metadata = {
  title: "Mood board A · Café Terrace",
  description:
    "A warm editorial direction: parchment, ink, menu typography and tomato red.",
};

/* ---------- tiles ---------- */

function Frame({ children, caption, index, tilt = "" }) {
  return (
    <figure
      className={`mb-4 break-inside-avoid border border-cafe-ink/15 bg-cafe-cream p-2.5 shadow-[2px_3px_0_rgba(43,29,22,0.08)] ${tilt}`}
    >
      {children}
      <figcaption className="mt-2 flex gap-2 font-cafe-body text-[11px] leading-snug text-cafe-ink/60">
        <span className="shrink-0 tabular-nums text-cafe-ink/35">
          {String(index).padStart(2, "0")}
        </span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

function Photo({ id, index, tilt = "" }) {
  const p = PHOTOS[id];
  return (
    <Frame index={index} caption={p.note} tilt={tilt}>
      <Image
        src={`/moodboards/cafe/${id}.jpg`}
        alt={p.alt}
        width={p.w}
        height={p.h}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="block h-auto w-full"
      />
    </Frame>
  );
}

function Spec({ children, caption, index, tilt = "" }) {
  return (
    <Frame index={index} caption={caption} tilt={tilt}>
      <div className="bg-cafe-paper/40 p-3">{children}</div>
    </Frame>
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
        <span className="tabular-nums text-cafe-ink/45">{hex}</span>
        <span className="text-cafe-ink/45"> · {from}</span>
      </span>
    </div>
  );
}

/* ---------- board ---------- */

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
              awning overhead. The itinerary should read like a prix-fixe
              menu — unhurried, printed, a little worn at the corners.
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

          {/* masonry — artifacts flow down uneven columns, scrapbook-style */}
          <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
            <Photo id="c02" index={1} />

            <Spec index={2} caption="Palette, sampled from the photographs">
              <div className="flex flex-col gap-2">
                <Swatch hex="#F6EFE3" name="Cream" from="marble" />
                <Swatch hex="#E8DCC5" name="Paper" from="parchment" />
                <Swatch hex="#2B1D16" name="Espresso" from="shopfront" />
                <Swatch hex="#C8412B" name="Tomato" from="awning" />
                <Swatch hex="#6B6B3A" name="Olive" from="book boxes" />
                <Swatch hex="#B9795A" name="Clay" from="cobbles" />
              </div>
            </Spec>

            <Photo id="c05" index={3} tilt="-rotate-1" />
            <Photo id="s03" index={4} />

            <Spec index={5} caption="Display face, Fraunces">
              <p className="font-cafe-display text-6xl leading-none">Aa</p>
              <p className="mt-1 font-cafe-display text-xl italic">Déjeuner</p>
            </Spec>

            <Photo id="c04" index={6} />
            <Photo id="s01" index={7} tilt="rotate-1" />

            <Spec index={8} caption="Type scale, 1.25 ratio">
              <div className="flex flex-col gap-1">
                <span className="font-cafe-display text-3xl leading-none">39</span>
                <span className="font-cafe-display text-2xl leading-none">31</span>
                <span className="font-cafe-display text-xl leading-none">25</span>
                <span className="font-cafe-body text-base leading-none">20</span>
                <span className="font-cafe-body text-sm leading-none">16</span>
                <span className="font-cafe-body text-xs leading-none">13</span>
              </div>
            </Spec>

            <Photo id="c07" index={9} />
            <Photo id="c03" index={10} />

            <Spec index={11} caption="Rules and dividers, borrowed from the ironwork">
              <div className="flex flex-col gap-2 py-1">
                <span className="h-px bg-cafe-ink/80" />
                <span className="h-[2px] bg-cafe-ink/80" />
                <span className="h-px border-t border-dotted border-cafe-ink/70" />
                <span className="h-px border-t border-dashed border-cafe-ink/70" />
                <span className="h-[3px] bg-cafe-tomato" />
              </div>
            </Spec>

            <Photo id="s02" index={12} />
            <Photo id="c06" index={13} tilt="-rotate-1" />

            <Spec index={14} caption="Menu setting, leader dots">
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

            <Photo id="s04" index={15} />
            <Photo id="c01" index={16} />

            <Spec index={17} caption="Buttons: tomato is the primary action, and nothing else">
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
            </Spec>

            <Photo id="s08" index={18} tilt="rotate-1" />
            <Photo id="c10" index={19} />

            <Spec index={20} caption="Category chips, taken from the chalkboard">
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
            </Spec>

            <Photo id="s05" index={21} />
            <Photo id="s06" index={22} />

            <Spec index={23} caption="Spacing, 4px base">
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
            </Spec>

            <Photo id="c08" index={24} />
            <Photo id="s10" index={25} tilt="-rotate-1" />

            <Spec index={26} caption="Corners stay sharp: 0px, or 2px at most">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-11 w-11 border-2 border-cafe-ink/60" />
                <span className="h-11 w-11 rounded-[2px] border-2 border-cafe-ink/60" />
                <span className="h-11 w-11 rounded-[6px] border-2 border-dashed border-cafe-ink/25" />
              </div>
            </Spec>

            <Photo id="s07" index={27} />
            <Photo id="c09" index={28} />

            <Spec index={29} caption="Tone of voice">
              <ul className="font-cafe-display text-sm leading-relaxed">
                <li>Unhurried, not slow</li>
                <li>Specific, not clever</li>
                <li>Warm, not cute</li>
                <li className="text-cafe-ink/40 line-through">
                  Exclamation marks
                </li>
              </ul>
            </Spec>

            <Photo id="s09" index={30} />
          </div>

          {/* credits */}
          <section
            aria-labelledby="credits"
            className="mt-12 border-t-2 border-cafe-ink/80 pt-6"
          >
            <h2
              id="credits"
              className="font-cafe-display text-xl tracking-tight"
            >
              Image credits
            </h2>
            <p className="mt-1 max-w-2xl font-cafe-body text-xs leading-relaxed text-cafe-ink/60">
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
                    <span className="shrink-0 tabular-nums text-cafe-ink/35">
                      {id}
                    </span>
                    <span>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-cafe-ink/30 underline-offset-2 hover:text-cafe-tomato hover:decoration-cafe-tomato focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
                      >
                        {p.by}
                      </a>
                      <span className="text-cafe-ink/45">
                        {" "}
                        · {p.src} · {p.lic}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>

          <footer className="mt-8 border-t border-cafe-ink/30 pt-5 font-cafe-body text-[11px] uppercase tracking-[0.18em] text-cafe-ink/50">
            30 artifacts · 20 photographs, 10 CSS specimens
          </footer>
        </div>
      </div>
    </main>
  );
}
