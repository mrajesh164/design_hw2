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
      ["#AE3220", "Tomato"],
      ["#2B1D16", "Espresso"],
    ],
    surface: "#E8DCC5",
    ink: "#2B1D16",
    accent: "#AE3220",
    muted: "rgba(43,29,22,0.75)",
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
      ["#0A52E0", "Signal"],
      ["#0B1B3A", "Navy"],
    ],
    surface: "#EEF0F3",
    ink: "#0B1B3A",
    accent: "#0A52E0",
    muted: "rgba(11,27,58,0.75)",
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
    muted: "rgba(237,230,216,0.75)",
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
          className="font-sans text-[11px] font-medium uppercase tracking-[0.22em]"
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
          className="mt-2 flex justify-between font-mono text-[11px] uppercase tracking-wider"
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

function Section({ num, id, title, blurb, children }) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-stone-600">{num}</span>
          <h2 id={id} className="text-2xl font-semibold tracking-tight">
            {title}
          </h2>
          <span className="ml-3 hidden h-px flex-1 bg-stone-900/15 sm:block" />
        </div>
        <p className="max-w-2xl text-stone-700">{blurb}</p>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#F7F6F3",
        backgroundImage: [
          /* the three directions, each tinting one corner of the hub */
          "radial-gradient(ellipse 60% 55% at 0% 0%, rgba(174,50,32,0.09), transparent 62%)",
          "radial-gradient(ellipse 55% 50% at 100% 2%, rgba(10,82,224,0.09), transparent 62%)",
          "radial-gradient(ellipse 75% 45% at 50% 100%, rgba(217,118,66,0.09), transparent 66%)",
          /* an 8px-derived drafting grid, barely there */
          "linear-gradient(to right, rgba(28,25,23,0.04) 1px, transparent 1px)",
          "linear-gradient(to bottom, rgba(28,25,23,0.04) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "auto, auto, auto, 32px 32px, 32px 32px",
        backgroundAttachment: "fixed, fixed, fixed, scroll, scroll",
      }}
    >
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-12 sm:py-20">
        <header className="flex flex-col gap-6 border-b border-stone-900/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-widest text-stone-600">
              Design, Build, Ship · HW2
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Paris in a Week
            </h1>
            <p className="max-w-xl text-lg text-stone-700">
              A hub for my design process: three styles explored, one chosen,
              and a small static trip itinerary built with it.
            </p>
          </div>
          <dl className="grid shrink-0 grid-cols-3 gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-stone-600 sm:grid-cols-1 sm:text-right">
            <div className="flex gap-2 sm:justify-end">
              <dt>Styles</dt>
              <dd className="font-semibold text-stone-900">3</dd>
            </div>
            <div className="flex gap-2 sm:justify-end">
              <dt>Artifacts</dt>
              <dd className="font-semibold text-stone-900">90</dd>
            </div>
            <div className="flex gap-2 sm:justify-end">
              <dt>Photographs</dt>
              <dd className="font-semibold text-stone-900">50</dd>
            </div>
          </dl>
        </header>

        <Section
          num="01"
          id="moodboards"
          title="Mood Boards"
          blurb="Three visual directions, each named, with 30 artifacts gathered and drawn."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STYLES.map((s) => (
              <StyleCard key={s.key} s={s} />
            ))}
          </div>
        </Section>

        <Section
          num="02"
          id="design-systems"
          title="Design Systems"
          blurb="One UI library per mood board: color roles, type roles, spacing, shape, components and every state."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {STYLES.map((s) => (
              <SystemCard key={s.key} s={s} />
            ))}
          </div>
        </Section>

        <Section
          num="03"
          id="site"
          title="The Site"
          blurb="A one-week Paris itinerary with filters and a detail panel, built in the chosen style."
        >
          <Link
            href="/trip-itinerary"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:bg-blue-900"
          >
            Open the Paris itinerary
            <span aria-hidden="true">→</span>
          </Link>
        </Section>
      </main>
    </div>
  );
}
