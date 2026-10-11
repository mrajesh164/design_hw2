import Link from "next/link";
import { Fraunces, Inter_Tight, Archivo_Black } from "next/font/google";

/* each card previews its own typeface as well as its palette */
const fraunces = Fraunces({ variable: "--hub-fraunces", subsets: ["latin"] });
const interTight = Inter_Tight({ variable: "--hub-inter-tight", subsets: ["latin"] });
const archivoBlack = Archivo_Black({
  variable: "--hub-archivo",
  subsets: ["latin"],
  weight: "400",
});

const STYLES = [
  {
    key: "a",
    name: "Café Terrace",
    tagline: "Warm editorial",
    blurb:
      "Parchment and pressed ink under a red awning. Printed, unhurried, worn at the corners.",
    swatches: [
      ["#F6EFE3", "Cream"],
      ["#E8DCC5", "Paper"],
      ["#B9795A", "Clay"],
      ["#6B6B3A", "Olive"],
      ["#C8412B", "Tomato"],
      ["#2B1D16", "Espresso"],
    ],
    surface: "#E8DCC5",
    ink: "#2B1D16",
    accent: "#C8412B",
    muted: "rgba(43,29,22,0.60)",
    rule: "rgba(43,29,22,0.25)",
    font: fraunces.className,
    nameClass: "text-4xl tracking-tight",
    texture:
      "radial-gradient(rgba(43,29,22,0.05) 1px, transparent 1px), radial-gradient(rgba(43,29,22,0.035) 1px, transparent 1px)",
    textureSize: "16px 16px, 10px 10px",
  },
  {
    key: "b",
    name: "Métro Ligne",
    tagline: "Transit signage",
    blurb:
      "Enamel, diagram and disc. Days are lines, activities are stops, and one blue acts.",
    swatches: [
      ["#FFFFFF", "White"],
      ["#EEF0F3", "Gray"],
      ["#C9CED6", "Line"],
      ["#FFCE00", "Ligne 1"],
      ["#0B5FFF", "Signal"],
      ["#0B1B3A", "Navy"],
    ],
    surface: "#EEF0F3",
    ink: "#0B1B3A",
    accent: "#0B5FFF",
    muted: "rgba(11,27,58,0.60)",
    rule: "rgba(11,27,58,0.20)",
    font: interTight.className,
    nameClass: "text-4xl font-bold tracking-tight",
    texture:
      "linear-gradient(to right, rgba(11,27,58,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,58,0.05) 1px, transparent 1px)",
    textureSize: "8px 8px",
  },
  {
    key: "c",
    name: "Encre de Nuit",
    tagline: "Night ink",
    blurb:
      "The city printed in two passes on dark stock. Risograph grain, amber lamplight, ember where it overlaps.",
    swatches: [
      ["#0E1424", "Ink"],
      ["#151D32", "Deep"],
      ["#6B4A7A", "Plum"],
      ["#C9A227", "Brass"],
      ["#D97642", "Ember"],
      ["#EDE6D8", "Bone"],
    ],
    surface: "#0E1424",
    ink: "#EDE6D8",
    accent: "#D97642",
    muted: "rgba(237,230,216,0.60)",
    rule: "rgba(237,230,216,0.25)",
    font: archivoBlack.className,
    nameClass: "text-3xl uppercase tracking-tight",
    texture:
      "radial-gradient(ellipse at 15% 0%, rgba(232,176,75,0.16), transparent 55%)",
    textureSize: "auto",
  },
];

function Swatches({ items, rule }) {
  return (
    <ul className="flex" aria-hidden="true">
      {items.map(([hex], i) => (
        <li
          key={hex}
          className="h-7 flex-1"
          style={{
            background: hex,
            borderLeft: i === 0 ? "none" : `1px solid ${rule}`,
          }}
        />
      ))}
    </ul>
  );
}

function StyleCard({ s }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden border transition-transform duration-150 focus-within:-translate-y-0.5 hover:-translate-y-0.5"
      style={{ background: s.surface, color: s.ink, borderColor: s.rule }}
    >
      <div
        className="flex flex-1 flex-col p-5"
        style={{
          backgroundImage: s.texture,
          backgroundSize: s.textureSize,
        }}
      >
        <p
          className="font-sans text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: s.accent }}
        >
          {s.tagline}
        </p>

        {/* the name is set in the style's own display face */}
        <h3 className={`mt-2 leading-[0.95] ${s.font} ${s.nameClass}`}>
          <Link
            href={`/moodboards/${s.key}`}
            className="outline-offset-4 before:absolute before:inset-0 focus-visible:outline-2"
            style={{ outlineColor: s.accent }}
          >
            {s.name}
          </Link>
        </h3>

        <p
          className="mt-3 font-sans text-[13px] leading-relaxed"
          style={{ color: s.muted }}
        >
          {s.blurb}
        </p>

        <div className="mt-5 flex-1" />

        <div className="-mx-5 border-y" style={{ borderColor: s.rule }}>
          <Swatches items={s.swatches} rule={s.rule} />
        </div>

        <dl
          className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-wider"
          style={{ color: s.muted }}
        >
          <dt className="sr-only">Accent</dt>
          <dd>{s.swatches[0][1]}</dd>
          <dd style={{ color: s.accent }}>{s.swatches[4][1]} · accent</dd>
        </dl>

        <p
          className="mt-4 font-sans text-xs font-semibold"
          style={{ color: s.accent }}
        >
          View mood board{" "}
          <span
            aria-hidden="true"
            className="inline-block transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </p>
      </div>
    </article>
  );
}

function SystemCard({ s }) {
  return (
    <Link
      href={`/design-systems/${s.key}`}
      className="group flex items-center gap-4 border border-stone-300 bg-white p-4 transition-colors hover:border-stone-900 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
    >
      {/* the palette, stacked into a small square icon */}
      <span
        className="grid h-12 w-12 shrink-0 grid-cols-2 grid-rows-3 overflow-hidden border border-stone-300"
        aria-hidden="true"
      >
        {s.swatches.map(([hex]) => (
          <span key={hex} style={{ background: hex }} />
        ))}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-stone-900">
          {s.name}
        </span>
        <span className="block text-xs text-stone-600">
          UI library · {s.tagline.toLowerCase()}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="ml-auto text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-stone-900"
      >
        →
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-12 sm:py-20">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-stone-600">
          Design, Build, Ship · HW2
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Paris in a Week
        </h1>
        <p className="max-w-xl text-lg text-stone-700">
          A hub for my design process: three styles explored, one chosen, and a
          small static trip itinerary built with it.
        </p>
      </header>

      <section aria-labelledby="moodboards" className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 id="moodboards" className="text-2xl font-semibold">
            Mood boards
          </h2>
          <p className="text-stone-700">
            Three visual directions, each named, with 30 artifacts gathered and
            drawn.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STYLES.map((s) => (
            <StyleCard key={s.key} s={s} />
          ))}
        </div>
      </section>

      <section aria-labelledby="design-systems" className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 id="design-systems" className="text-2xl font-semibold">
            Design systems
          </h2>
          <p className="text-stone-700">
            One UI library per mood board: colour roles, type roles, spacing,
            shape, components and every state.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {STYLES.map((s) => (
            <SystemCard key={s.key} s={s} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="site"
        className="flex flex-col gap-4 border-t border-stone-300 pt-10"
      >
        <div className="flex flex-col gap-1">
          <h2 id="site" className="text-2xl font-semibold">
            The site
          </h2>
          <p className="text-stone-700">
            A one-week Paris itinerary with filters and a detail panel, built in
            the chosen style.
          </p>
        </div>
        <Link
          href="/trip-itinerary"
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:bg-blue-900"
        >
          Open the Paris itinerary
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
