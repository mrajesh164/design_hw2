import Link from "next/link";

export const metadata = {
  title: "Design system C · Encre de Nuit",
  description:
    "A UI library in the Encre de Nuit style: color and type roles, spacing and shape, components, control states and UI states.",
};

/* ------------------------------------------------------------------ *
 * Tokens are declared in globals.css as --color-encre-*. Every ratio
 * printed on this page was measured against the surface it sits on.
 * ------------------------------------------------------------------ */

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.28'/%3E%3C/svg%3E\")";

const SECTIONS = [
  { num: "I", id: "color", name: "Color roles" },
  { num: "II", id: "type", name: "Type roles" },
  { num: "III", id: "shape", name: "Spacing & shape" },
  { num: "IV", id: "components", name: "Components" },
  { num: "V", id: "control-states", name: "Control states" },
  { num: "VI", id: "ui-states", name: "UI states" },
];

const ROLES = [
  { hex: "#0E1424", role: "Background", use: "The page itself", ratio: "—" },
  { hex: "#151D32", role: "Surface", use: "Tiles, cards, inputs", ratio: "1.10:1 on bg" },
  { hex: "#262D3F", role: "Surface raised", use: "Hover fill", ratio: "1.33:1 on surface" },
  { hex: "#382D35", role: "Selected tint", use: "Chosen rows and chips", ratio: "10.59:1 with bone" },
  { hex: "#EDE6D8", role: "Text", use: "Headings and body", ratio: "13.49:1 on surface" },
  { hex: "#ACAAA6", role: "Muted text", use: "Captions, meta, placeholders", ratio: "7.21:1 on surface" },
  { hex: "#2C3345", role: "Border", use: "Hairline rules", ratio: "decorative" },
  { hex: "#6B6D74", role: "Border strong", use: "Input and control edges", ratio: "3.26:1 on surface" },
  { hex: "#D97642", role: "Accent", use: "Primary action only", ratio: "5.28:1 on surface" },
  { hex: "#C9A227", role: "Second ink", use: "Brass: rules, offsets, labels", ratio: "6.92:1 on surface" },
  { hex: "#8FBF6A", role: "Success", use: "Confirmation", ratio: "7.84:1 on surface" },
  { hex: "#F08C7A", role: "Error", use: "Failure and destructive", ratio: "6.97:1 on surface" },
  { hex: "#E8B04B", role: "Warning", use: "Caution, closures", ratio: "8.57:1 on surface" },
];

/* ---------- furniture ---------- */

function SectionHead({ num, id, name, blurb }) {
  return (
    <header className="mb-6 border-b border-encre-bone/35 pb-3">
      <div className="flex flex-wrap items-end gap-x-4 gap-y-1">
        <span className="font-encre-mono text-sm text-encre-ember">{num}</span>
        <h2 id={id} className="relative font-encre-display text-3xl uppercase leading-none tracking-tight">
          <span aria-hidden="true" className="absolute left-[2px] top-[2px] text-encre-brass/60">
            {name}
          </span>
          <span className="relative">{name}</span>
        </h2>
        <p className="max-w-xl font-encre-body text-xs text-encre-muted">{blurb}</p>
      </div>
    </header>
  );
}

function Plate({ title, note, children, className = "", ink = "ember" }) {
  const shadow =
    ink === "brass"
      ? "shadow-[4px_4px_0_var(--color-encre-brass)]"
      : "shadow-[4px_4px_0_var(--color-encre-ember)]";
  return (
    <figure className={`flex flex-col border border-encre-bone/30 bg-encre-deep ${shadow} ${className}`}>
      <figcaption className="border-b border-encre-bone/15 px-4 py-2">
        <span className="font-encre-mono text-[11px] uppercase tracking-[0.1em] text-encre-bone">
          {title}
        </span>
        {note ? (
          <span className="mt-0.5 block font-encre-body text-[11px] leading-snug text-encre-muted">
            {note}
          </span>
        ) : null}
      </figcaption>
      <div className="flex-1 p-4">{children}</div>
    </figure>
  );
}

/* ---------- recipes ---------- */

const BTN =
  "inline-flex items-center justify-center gap-2 rounded-[4px] px-4 py-2 font-encre-body text-xs font-semibold transition-colors";

const PRIMARY = {
  rest: `${BTN} bg-encre-ember text-encre-ink`,
  hover: `${BTN} bg-encre-emberhover text-encre-ink`,
  focus: `${BTN} bg-encre-ember text-encre-ink outline-2 outline-offset-2 outline-encre-bone`,
  pressed: `${BTN} bg-encre-emberpress text-encre-ink translate-y-px`,
  disabled: `${BTN} bg-encre-surface2 text-encre-bone/30 cursor-not-allowed`,
};

const SECONDARY = {
  rest: `${BTN} border border-encre-bone/60 text-encre-bone`,
  hover: `${BTN} border border-encre-bone bg-encre-surface2 text-encre-bone`,
  focus: `${BTN} border border-encre-bone/60 text-encre-bone outline-2 outline-offset-2 outline-encre-ember`,
  pressed: `${BTN} border border-encre-bone bg-encre-tint text-encre-bone translate-y-px`,
  disabled: `${BTN} border border-encre-bone/15 text-encre-bone/30 cursor-not-allowed`,
};

const INPUT =
  "w-full rounded-[4px] border bg-encre-ink px-3 py-2 font-encre-body text-sm text-encre-bone placeholder:text-encre-muted";

const CHIP =
  "inline-flex items-center gap-1.5 rounded-[3px] px-2.5 py-1 font-encre-mono text-[10px] uppercase tracking-[0.1em]";

function Box({ checked, round, state }) {
  const ring = state === "focus" ? "outline-2 outline-offset-2 outline-encre-ember" : "";
  const border = state === "disabled" ? "border-encre-bone/20" : "border-encre-bone/70";
  const fill =
    checked && state !== "disabled"
      ? "bg-encre-ember border-encre-ember"
      : checked
        ? "bg-encre-surface2 border-encre-bone/20"
        : state === "hover"
          ? "bg-encre-surface2"
          : "bg-encre-ink";
  return (
    <span
      className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center border-2 ${border} ${fill} ${ring} ${
        round ? "rounded-full" : "rounded-[3px]"
      }`}
      aria-hidden="true"
    >
      {checked &&
        (round ? (
          <span className="h-1.5 w-1.5 rounded-full bg-encre-ink" />
        ) : (
          <svg viewBox="0 0 12 10" className="h-2.5 w-2.5" fill="none">
            <path d="M1 5l3.2 3.2L11 1.5" stroke="#0E1424" strokeWidth="2.4" strokeLinecap="square" />
          </svg>
        ))}
    </span>
  );
}

function Toggle({ on, state }) {
  const ring = state === "focus" ? "outline-2 outline-offset-2 outline-encre-ember" : "";
  const track =
    state === "disabled"
      ? "bg-encre-surface2 border-encre-bone/20"
      : on
        ? "bg-encre-ember border-encre-ember"
        : "bg-encre-ink border-encre-bone/60";
  return (
    <span className={`inline-flex h-[22px] w-10 items-center rounded-full border-2 p-[2px] ${track} ${ring}`} aria-hidden="true">
      <span className={`h-[14px] w-[14px] rounded-full ${on ? "ml-auto bg-encre-ink" : "bg-encre-bone/70"}`} />
    </span>
  );
}

const STATES = ["rest", "hover", "focus", "pressed", "selected", "disabled"];

const ROWCELL =
  "flex items-center gap-3 border border-encre-bone/20 px-3 py-1.5 font-encre-body text-xs whitespace-nowrap";

const CONTROLS = [
  {
    name: "Primary button",
    note: "ember appears once per screen",
    render: (st) => (st === "selected" ? null : <span className={PRIMARY[st]}>Open details</span>),
  },
  {
    name: "Secondary button",
    render: (st) => (st === "selected" ? null : <span className={SECONDARY[st]}>Add to day</span>),
  },
  {
    name: "Link",
    render: (st) => {
      const base = "font-encre-body text-sm font-semibold underline-offset-[3px]";
      const map = {
        rest: `${base} text-encre-bone underline decoration-encre-borderstrong`,
        hover: `${base} text-encre-ember underline decoration-2 decoration-encre-ember`,
        focus: `${base} text-encre-bone underline decoration-encre-borderstrong outline-2 outline-offset-2 outline-encre-ember`,
        pressed: `${base} text-encre-emberpress underline decoration-2 decoration-encre-emberpress`,
        disabled: `${base} text-encre-bone/30 line-through`,
      };
      return st === "selected" ? null : <span className={map[st]}>the lamps at dusk</span>;
    },
  },
  {
    name: "Text input",
    note: "selected reads as filled",
    render: (st) => {
      const map = {
        rest: `${INPUT} border-encre-borderstrong text-encre-muted`,
        hover: `${INPUT} border-encre-bone/70 text-encre-muted`,
        focus: `${INPUT} border-encre-ember outline-2 outline-offset-2 outline-encre-ember`,
        pressed: `${INPUT} border-encre-ember`,
        selected: `${INPUT} border-encre-borderstrong font-semibold`,
        disabled: `${INPUT} border-encre-bone/15 bg-encre-surface2 text-encre-bone/30`,
      };
      return <span className={`${map[st]} block min-w-[9rem]`}>Pont Alexandre III</span>;
    },
  },
  { name: "Checkbox", render: (st) => <Box checked={st === "selected" || st === "disabled"} state={st} /> },
  { name: "Radio", render: (st) => <Box round checked={st === "selected" || st === "disabled"} state={st} /> },
  { name: "Toggle", render: (st) => <Toggle on={st === "selected" || st === "disabled"} state={st} /> },
  {
    name: "Filter chip",
    render: (st) => {
      const map = {
        rest: `${CHIP} border border-encre-brass/70 text-encre-bone`,
        hover: `${CHIP} border border-encre-brass bg-encre-surface2 text-encre-bone`,
        focus: `${CHIP} border border-encre-brass/70 text-encre-bone outline-2 outline-offset-2 outline-encre-ember`,
        pressed: `${CHIP} translate-y-px border border-encre-brass bg-encre-tint text-encre-bone`,
        selected: `${CHIP} border border-encre-bone bg-encre-bone text-encre-ink`,
        disabled: `${CHIP} border border-encre-bone/15 text-encre-bone/30`,
      };
      return <span className={map[st]}>Dinner</span>;
    },
  },
  {
    name: "List row",
    note: "the dense view",
    render: (st) => {
      const map = {
        rest: "",
        hover: "bg-encre-surface2",
        focus: "outline-2 outline-offset-[-2px] outline-encre-ember",
        pressed: "bg-encre-tint",
        selected: "border-l-2 border-l-encre-ember bg-encre-tint",
        disabled: "opacity-45",
      };
      return (
        <span className={`${ROWCELL} ${map[st]}`}>
          <span className="font-encre-mono font-bold tabular-nums">20:30</span>
          <span>Pont Alexandre III</span>
        </span>
      );
    },
  },
];

const ITEM = {
  day: "Day 5",
  area: "Pigalle & the river",
  time: "20:30",
  until: "22:00",
  title: "Pont Alexandre III",
  blurb:
    "The lamps come on at dusk and the gilt picks up every one of them. Walk it east to west, then down the steps to the quay.",
  price: "Free",
  category: "Walk",
};

const ROWS = [
  ["19:40", "Dinner, rue Montorgueil", "Food · 1 h 30", "€28"],
  ["20:30", "Pont Alexandre III", "Walk · 40 min", "Free"],
  ["22:15", "Bar, Le Comptoir", "Bar · 1 h", "€14"],
];

export default function DesignSystemC() {
  return (
    <main className="min-h-screen bg-encre-ink text-encre-bone">
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 12% 6%, rgba(232,176,75,0.12), transparent 45%), radial-gradient(ellipse at 88% 28%, rgba(217,118,66,0.10), transparent 42%)",
        }}
      >
        <div className="min-h-screen" style={{ backgroundImage: GRAIN, backgroundBlendMode: "overlay" }}>
          <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
            <Link
              href="/"
              className="font-encre-mono text-xs uppercase tracking-[0.18em] text-encre-muted underline-offset-4 hover:text-encre-ember hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-encre-ember"
            >
              ← Back to hub
            </Link>

            <header className="mt-6 border-y-2 border-encre-bone/70 py-7">
              <p className="font-encre-mono text-[11px] uppercase tracking-[0.3em] text-encre-ember">
                Design system C
              </p>
              <h1 className="relative mt-3 font-encre-display text-5xl uppercase leading-[0.88] tracking-tight sm:text-7xl">
                <span aria-hidden="true" className="absolute left-[3px] top-[3px] text-encre-brass/70">
                  Encre de Nuit
                </span>
                <span className="relative">Encre de Nuit</span>
              </h1>
              <p className="mt-5 max-w-2xl font-encre-body text-base leading-relaxed text-encre-bone">
                The UI library for the night-ink direction. Two inks on dark
                stock, 4px corners, hard offset shadows in the second ink, and
                an ember accent spent only on the primary action.
              </p>
              <p className="mt-3 max-w-2xl font-encre-body text-xs leading-relaxed text-encre-muted">
                Nothing sits below 400 weight on this ground — light weights
                shimmer against the grain. Every ratio below was measured: body
                text clears 4.5:1 and control edges clear 3:1.
              </p>
            </header>

            <nav aria-label="Sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="font-encre-mono text-[11px] uppercase tracking-[0.12em] text-encre-muted underline-offset-4 hover:text-encre-ember hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-encre-ember"
                >
                  {s.num}. {s.name}
                </a>
              ))}
            </nav>

            {/* ===== I COLOR ===== */}
            <section aria-labelledby="color" className="mt-12">
              <SectionHead {...SECTIONS[0]} blurb="Dark ground, bone text, brass as the second ink, and ember reserved entirely for action." />
              <div className="grid grid-cols-2 gap-px bg-encre-bone/20 sm:grid-cols-4">
                {ROLES.map((r) => (
                  <figure key={r.role} className="flex flex-col bg-encre-deep">
                    <span className="h-14 border-b border-encre-bone/15" style={{ background: r.hex }} aria-hidden="true" />
                    <figcaption className="flex flex-1 flex-col gap-0.5 p-3">
                      <span className="font-encre-body text-xs font-semibold">{r.role}</span>
                      <span className="font-encre-mono text-[11px] tabular-nums text-encre-muted">{r.hex}</span>
                      <span className="font-encre-body text-[11px] leading-snug text-encre-muted">{r.use}</span>
                      <span className="mt-auto pt-2 font-encre-mono text-[11px] tabular-nums text-encre-bone">{r.ratio}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-12">
                <Plate className="sm:col-span-7" title="Two inks, one accent" note="Brass labels and rules; ember acts. They never swap jobs.">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={PRIMARY.rest}>Ember acts</span>
                    <span className="border-l-2 border-encre-brass px-3 py-2 font-encre-mono text-[11px] uppercase tracking-[0.1em] text-encre-brass">
                      Brass labels
                    </span>
                    <span className="font-encre-body text-[11px] text-encre-muted">
                      On dark, semantics lighten instead of darkening.
                    </span>
                  </div>
                </Plate>
                <Plate className="sm:col-span-5" title="The roles in place" ink="brass">
                  <article className="border-l-2 border-encre-ember bg-encre-ink/60 p-3">
                    <p className="font-encre-mono text-[10px] uppercase tracking-[0.12em] text-encre-warning">
                      {ITEM.day} · {ITEM.time}
                    </p>
                    <h3 className="mt-1 font-encre-display text-base uppercase leading-tight">{ITEM.title}</h3>
                    <p className="mt-1 font-encre-body text-[11px] text-encre-muted">
                      Muted carries the meta; bone carries the title.
                    </p>
                  </article>
                </Plate>
              </div>
            </section>

            {/* ===== II TYPE ===== */}
            <section aria-labelledby="type" className="mt-12">
              <SectionHead {...SECTIONS[1]} blurb="Archivo Black shouts, IBM Plex Sans reads, Space Mono counts." />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                <Plate className="sm:col-span-12" title="Display" note="Archivo Black · 56/50 · 400 · uppercase · printed twice, 3px off">
                  <p className="relative font-encre-display text-[36px] uppercase leading-[0.9] tracking-tight sm:text-[56px] sm:leading-[50px]">
                    <span aria-hidden="true" className="absolute left-[3px] top-[3px] text-encre-brass/70">
                      Paris in a Week
                    </span>
                    <span className="relative">Paris in a Week</span>
                  </p>
                </Plate>
                <Plate className="sm:col-span-7" title="Heading" note="Archivo Black · 24/30 · uppercase" ink="brass">
                  <p className="font-encre-display text-[24px] uppercase leading-[30px]">Day 5 — after dark</p>
                </Plate>
                <Plate className="sm:col-span-5" title="Label" note="Space Mono · 11/16 · 700 · 0.12em · uppercase">
                  <div className="flex flex-col gap-2">
                    <p className="font-encre-mono text-[11px] font-bold uppercase leading-4 tracking-[0.12em]">
                      20:30 · 40 min · Free
                    </p>
                    <p className="font-encre-mono text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-encre-muted">
                      Last métro 00:40
                    </p>
                  </div>
                </Plate>
                <Plate className="sm:col-span-7" title="Body" note="IBM Plex Sans · 16/26 · 400 · never lighter">
                  <p className="max-w-prose font-encre-body text-[16px] leading-[26px]">
                    The lamps come on at dusk and the gilt picks up every one of
                    them. Walk it east to west, then down the steps to the quay
                    where the bateaux throw light back at the stone.
                  </p>
                </Plate>
                <Plate className="sm:col-span-5" title="All four at once" note="Hierarchy from size and face, not color" ink="brass">
                  <article className="border border-encre-bone/25 p-3">
                    <p className="font-encre-mono text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-encre-muted">
                      Day 5 · 20:30
                    </p>
                    <h3 className="mt-1 font-encre-display text-[22px] uppercase leading-[26px]">Pont Alexandre III</h3>
                    <p className="mt-1.5 font-encre-body text-[15px] leading-[24px]">
                      Go at dusk. The lamps are the reason.
                    </p>
                    <p className="mt-2 font-encre-mono text-[11px] font-bold uppercase tracking-[0.12em]">Free</p>
                  </article>
                </Plate>
              </div>
            </section>

            {/* ===== III SPACING & SHAPE ===== */}
            <section aria-labelledby="shape" className="mt-12">
              <SectionHead {...SECTIONS[2]} blurb="A 4px base, one radius, hairlines in bone, and shadows that offset in the second ink instead of blurring." />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-12">
                <Plate className="col-span-2 sm:col-span-3" title="Spacing" note="4px base">
                  <div className="flex flex-col gap-1.5">
                    {[4, 8, 12, 20, 32, 48, 64].map((n) => (
                      <div key={n} className="flex items-center gap-2">
                        <span className="h-3 bg-encre-ember" style={{ width: `${n}px` }} aria-hidden="true" />
                        <span className="font-encre-mono text-[11px] tabular-nums text-encre-muted">{n}</span>
                      </div>
                    ))}
                  </div>
                </Plate>
                <Plate className="sm:col-span-3" title="Corners" note="4px on everything. Pills for nothing." ink="brass">
                  <div className="flex flex-wrap items-end gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <span className="h-12 w-12 rounded-[4px] border-2 border-encre-bone/70" />
                      <span className="font-encre-mono text-[11px] text-encre-muted">4px</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-45">
                      <span className="h-12 w-12 rounded-2xl border-2 border-dashed border-encre-borderstrong" />
                      <span className="font-encre-mono text-[11px] text-encre-muted">never</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-45">
                      <span className="h-12 w-12 rounded-full border-2 border-dashed border-encre-borderstrong" />
                      <span className="font-encre-mono text-[11px] text-encre-muted">never</span>
                    </div>
                  </div>
                </Plate>
                <Plate className="sm:col-span-3" title="Borders" note="Bone hairlines; brass marks a section">
                  <div className="flex flex-col gap-3 py-1">
                    <span className="h-px bg-encre-bone/20" />
                    <span className="h-px bg-encre-borderstrong" />
                    <span className="h-px bg-encre-brass" />
                    <span className="h-[2px] bg-encre-ember" />
                  </div>
                  <p className="mt-2 font-encre-body text-[11px] leading-snug text-encre-muted">
                    hairline · strong · brass rule · 2px accent edge
                  </p>
                </Plate>
                <Plate className="sm:col-span-3" title="Shadow" note="Misregistration, not depth — no blur, ever" ink="brass">
                  <div className="flex flex-wrap items-end gap-4 py-2">
                    {[
                      ["none", ""],
                      ["ember", "shadow-[4px_4px_0_var(--color-encre-ember)]"],
                      ["brass", "shadow-[4px_4px_0_var(--color-encre-brass)]"],
                    ].map(([n, c]) => (
                      <div key={n} className="flex flex-col items-center gap-1.5">
                        <span className={`h-12 w-12 rounded-[4px] border border-encre-bone/30 bg-encre-deep ${c}`} />
                        <span className="font-encre-body text-[11px] text-encre-muted">{n}</span>
                      </div>
                    ))}
                  </div>
                </Plate>
              </div>
            </section>

            {/* ===== IV COMPONENTS ===== */}
            <section aria-labelledby="components" className="mt-12">
              <SectionHead {...SECTIONS[3]} blurb="The parts the itinerary needs. Buttons, links and inputs here respond for real." />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                <Plate className="sm:col-span-5" title="Buttons" note="Primary carries ember; secondary never does">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      className={`${BTN} bg-encre-ember text-encre-ink hover:bg-encre-emberhover active:translate-y-px active:bg-encre-emberpress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-encre-bone`}
                    >
                      Open details
                    </button>
                    <button
                      type="button"
                      className={`${BTN} border border-encre-bone/60 text-encre-bone hover:bg-encre-surface2 active:translate-y-px active:bg-encre-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-encre-ember`}
                    >
                      Add to day
                    </button>
                    <button type="button" disabled className={PRIMARY.disabled}>
                      Closed
                    </button>
                  </div>
                </Plate>

                <Plate className="sm:col-span-4" title="Link" note="Underlined always; ember on hover" ink="brass">
                  <p className="font-encre-body text-sm leading-relaxed">
                    Go for{" "}
                    <a
                      href="#components"
                      className="font-semibold text-encre-bone underline decoration-encre-borderstrong underline-offset-[3px] hover:text-encre-ember hover:decoration-2 hover:decoration-encre-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-encre-ember"
                    >
                      the lamps at dusk
                    </a>
                    , not after dark.
                  </p>
                </Plate>

                <Plate className="sm:col-span-3" title="Badges" note="Status, not action">
                  <div className="flex flex-wrap gap-2">
                    <span className={`${CHIP} border border-encre-success text-encre-success`}>Booked</span>
                    <span className={`${CHIP} border border-encre-borderstrong text-encre-muted`}>Free</span>
                    <span className={`${CHIP} border border-encre-warning text-encre-warning`}>Late</span>
                    <span className={`${CHIP} border border-encre-error text-encre-error`}>Closed</span>
                  </div>
                </Plate>

                <Plate className="sm:col-span-4" title="Text input" note="Ink well on a deep surface">
                  <label className="flex flex-col gap-1.5">
                    <span className="font-encre-mono text-[11px] font-bold uppercase tracking-[0.12em]">
                      Search the evening
                    </span>
                    <input
                      type="text"
                      placeholder="Pont Alexandre III"
                      className={`${INPUT} border-encre-borderstrong focus:border-encre-ember focus:outline-2 focus:outline-offset-2 focus:outline-encre-ember`}
                    />
                    <span className="font-encre-body text-[11px] text-encre-muted">
                      Matches titles and neighborhoods.
                    </span>
                  </label>
                </Plate>

                <Plate className="sm:col-span-4" title="Select" note="Same frame as the input" ink="brass">
                  <label className="flex flex-col gap-1.5">
                    <span className="font-encre-mono text-[11px] font-bold uppercase tracking-[0.12em]">
                      Sort by
                    </span>
                    <div className="relative">
                      <select
                        defaultValue="time"
                        className={`${INPUT} appearance-none border-encre-borderstrong pr-9 focus:border-encre-ember focus:outline-2 focus:outline-offset-2 focus:outline-encre-ember`}
                      >
                        <option value="time">Time of day</option>
                        <option value="price">Price, low to high</option>
                        <option value="area">Neighbourhood</option>
                      </select>
                      <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-encre-muted">
                        ▾
                      </span>
                    </div>
                  </label>
                </Plate>

                <Plate className="sm:col-span-4" title="Checkbox, radio & toggle">
                  <div className="flex flex-col gap-3">
                    <span className="flex items-center gap-2.5 font-encre-body text-sm">
                      <Box checked /> Booked already
                    </span>
                    <span className="flex items-center gap-2.5 font-encre-body text-sm">
                      <Box round checked /> Evening
                    </span>
                    <span className="flex items-center gap-3 font-encre-body text-sm">
                      <Toggle on /> Show walking times
                    </span>
                  </div>
                </Plate>

                <Plate className="sm:col-span-7" title="Tabs" note="Selected carries the 2px ember edge" ink="brass">
                  <div className="flex overflow-x-auto border-b border-encre-bone/20">
                    {["Day 3", "Day 4", "Day 5", "Day 6", "Day 7"].map((d, i) => (
                      <span
                        key={d}
                        aria-current={i === 2 ? "page" : undefined}
                        className={`shrink-0 border-b-2 px-3 py-2 font-encre-mono text-[11px] uppercase tracking-[0.1em] ${
                          i === 2 ? "border-encre-ember text-encre-bone" : "border-transparent text-encre-muted"
                        }`}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </Plate>

                <Plate className="sm:col-span-5" title="Filter chips" note="Selected inverts to bone; ember is not spent here">
                  <div className="flex flex-wrap gap-2">
                    {["All", "Dinner", "Bar", "Walk", "Late"].map((t, i) => (
                      <span
                        key={t}
                        className={`${CHIP} ${
                          i === 1
                            ? "border border-encre-bone bg-encre-bone text-encre-ink"
                            : "border border-encre-brass/70 text-encre-bone"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Plate>

                <Plate className="sm:col-span-7" title="Card" note="One stop from the itinerary">
                  <article className="rounded-[4px] border-l-2 border-encre-ember bg-encre-ink/60 p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-encre-mono text-[10px] uppercase tracking-[0.12em] text-encre-warning">
                        {ITEM.day} · {ITEM.area}
                      </p>
                      <span className={`${CHIP} border border-encre-borderstrong text-encre-muted`}>{ITEM.category}</span>
                    </div>
                    <h3 className="mt-1 font-encre-display text-xl uppercase leading-tight">{ITEM.title}</h3>
                    <p className="mt-2 font-encre-body text-sm leading-relaxed">{ITEM.blurb}</p>
                    <div className="mt-3 flex items-center justify-between gap-3 border-t border-encre-bone/20 pt-3">
                      <p className="font-encre-mono text-xs font-bold tabular-nums">
                        {ITEM.time}–{ITEM.until} · {ITEM.price}
                      </p>
                      <span className={PRIMARY.rest}>Open details</span>
                    </div>
                  </article>
                </Plate>

                <Plate className="sm:col-span-5" title="Halftone divider" note="The print texture, used as a rule" ink="brass">
                  <span
                    className="block h-12 w-full rounded-[4px]"
                    style={{
                      backgroundImage: "radial-gradient(#C9A227 2.2px, transparent 2.4px)",
                      backgroundSize: "9px 9px",
                    }}
                    aria-hidden="true"
                  />
                </Plate>

                <Plate className="sm:col-span-12" title="List rows" note="Dense view: rest, selected, rest">
                  <ul className="border-y border-encre-bone/20">
                    {ROWS.map(([time, title, meta, price], i) => (
                      <li
                        key={title}
                        className={`flex items-center gap-4 border-b border-encre-bone/20 px-3 py-3 last:border-0 ${
                          i === 1 ? "border-l-2 border-l-encre-ember bg-encre-tint pl-2.5" : ""
                        }`}
                      >
                        <span className="font-encre-mono text-sm font-bold tabular-nums">{time}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-encre-body text-sm font-semibold">{title}</span>
                          <span className="block font-encre-body text-[11px] text-encre-muted">{meta}</span>
                        </span>
                        <span className="font-encre-mono text-sm tabular-nums">{price}</span>
                      </li>
                    ))}
                  </ul>
                </Plate>

                <Plate className="sm:col-span-12" title="Detail panel" note="Opens over a dimmed page; ember sits on one action only" ink="brass">
                  <div className="relative overflow-hidden rounded-[4px] border border-encre-bone/20 bg-encre-ink p-4">
                    <div className="pointer-events-none select-none opacity-30" aria-hidden="true">
                      <p className="font-encre-display text-xl uppercase">Day 5 — after dark</p>
                      <p className="font-encre-mono text-sm">19:40 Dinner · 20:30 Pont Alexandre III · 22:15 Bar</p>
                    </div>
                    <div className="mt-4 rounded-[4px] border-2 border-encre-bone bg-encre-deep shadow-[6px_6px_0_var(--color-encre-ember)]">
                      <div className="flex items-start justify-between gap-4 border-b border-encre-bone/20 p-4">
                        <div>
                          <p className="font-encre-mono text-[11px] font-bold uppercase tracking-[0.12em] text-encre-warning">
                            {ITEM.day} · {ITEM.time}–{ITEM.until}
                          </p>
                          <h3 className="mt-1 font-encre-display text-2xl uppercase leading-tight">{ITEM.title}</h3>
                        </div>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] border border-encre-borderstrong text-sm" aria-hidden="true">
                          ✕
                        </span>
                      </div>
                      <div className="flex flex-col gap-3 p-4">
                        <p className="font-encre-body text-sm leading-relaxed">{ITEM.blurb}</p>
                        <dl className="grid grid-cols-2 gap-x-6 gap-y-1 border-t border-encre-bone/20 pt-3 font-encre-body text-xs sm:grid-cols-4">
                          {[
                            ["Price", "Free"],
                            ["Duration", "40 min"],
                            ["Nearest", "Invalides"],
                            ["Best at", "Dusk"],
                          ].map(([k, v]) => (
                            <div key={k}>
                              <dt className="text-encre-muted">{k}</dt>
                              <dd className="font-encre-mono font-bold tabular-nums">{v}</dd>
                            </div>
                          ))}
                        </dl>
                        <div className="mt-1 flex flex-wrap gap-3">
                          <span className={PRIMARY.rest}>Add to day</span>
                          <span className={SECONDARY.rest}>Back to list</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Plate>
              </div>
            </section>

            {/* ===== V CONTROL STATES ===== */}
            <section aria-labelledby="control-states" className="mt-12">
              <SectionHead
                {...SECTIONS[4]}
                blurb="One matrix: nine controls down, six states across. n/a is marked where a state does not apply."
              />
              <div className="overflow-x-auto border border-encre-bone/30 bg-encre-deep shadow-[4px_4px_0_var(--color-encre-brass)]">
                <table className="w-full min-w-[920px] border-collapse">
                  <caption className="sr-only">Every control in every applicable state</caption>
                  <thead>
                    <tr className="border-b-2 border-encre-bone/70">
                      <th scope="col" className="w-36 px-3 py-2 text-left font-encre-mono text-[10px] uppercase tracking-[0.12em] text-encre-muted">
                        Control
                      </th>
                      {STATES.map((st) => (
                        <th key={st} scope="col" className="px-3 py-2 text-left font-encre-mono text-[10px] uppercase tracking-[0.12em] text-encre-muted">
                          {st}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CONTROLS.map((c) => (
                      <tr key={c.name} className="border-b border-encre-bone/15 last:border-0">
                        <th scope="row" className="px-3 py-3 text-left align-middle font-encre-body text-xs font-semibold">
                          {c.name}
                          {c.note ? (
                            <span className="mt-0.5 block text-[10px] font-normal leading-snug text-encre-muted">
                              {c.note}
                            </span>
                          ) : null}
                        </th>
                        {STATES.map((st) => (
                          <td key={st} className="px-3 py-3 align-middle">
                            {c.render(st) ?? (
                              <span className="font-encre-body text-[11px] italic text-encre-muted">n/a</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 max-w-2xl font-encre-body text-xs leading-relaxed text-encre-muted">
                Focus is the same everywhere: a 2px outline offset 2px, in ember
                on quiet controls and in bone on the ember fill, so it stays
                visible on both. Pressed shifts down 1px — the only motion here.
              </p>
            </section>

            {/* ===== VI UI STATES ===== */}
            <section aria-labelledby="ui-states" className="mt-12">
              <SectionHead {...SECTIONS[5]} blurb="What the evening looks like with nothing, while waiting, after failing, and after succeeding." />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                <Plate className="sm:col-span-5" title="Empty" note="Nothing planned yet">
                  <div className="flex flex-col items-start gap-3 rounded-[4px] border border-dashed border-encre-borderstrong p-6">
                    <svg viewBox="0 0 48 40" className="h-10 w-14" aria-hidden="true">
                      <circle cx="30" cy="16" r="11" fill="#C9A227" opacity="0.35" />
                      <circle cx="24" cy="13" r="10" fill="#151D32" />
                    </svg>
                    <div>
                      <p className="font-encre-display text-lg uppercase leading-tight">Nothing after 22:00</p>
                      <p className="mt-1 font-encre-body text-sm text-encre-muted">
                        Clear a filter, or add something from another night.
                      </p>
                    </div>
                    <span className={SECONDARY.rest}>Clear filters</span>
                  </div>
                </Plate>

                <Plate className="sm:col-span-7" title="Loading" note="Skeleton rows, keeping the row rhythm" ink="brass">
                  <div className="flex flex-col gap-3">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="flex animate-pulse items-center gap-4">
                        <span className="h-4 w-12 rounded-[2px] bg-encre-surface2" />
                        <span className="flex-1">
                          <span className="block h-3.5 w-2/3 rounded-[2px] bg-encre-surface2" />
                          <span className="mt-1.5 block h-2.5 w-1/3 rounded-[2px] bg-encre-surface2" />
                        </span>
                        <span className="h-4 w-10 rounded-[2px] bg-encre-surface2" />
                      </div>
                    ))}
                    <p className="mt-1 flex items-center gap-2 font-encre-mono text-xs text-encre-muted">
                      <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-encre-borderstrong border-t-encre-ember" aria-hidden="true" />
                      Loading the evening…
                    </p>
                  </div>
                </Plate>

                <Plate className="sm:col-span-7" title="Error" note="Left rule, icon and tint — never the accent">
                  <div className="flex gap-3 rounded-[4px] border-l-2 border-encre-error bg-encre-error/10 p-4">
                    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
                      <circle cx="10" cy="10" r="9" fill="none" stroke="#F08C7A" strokeWidth="2" />
                      <path d="M10 5v6M10 14v1.5" stroke="#F08C7A" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                    <div>
                      <p className="font-encre-body text-sm font-semibold text-encre-error">That time is already taken</p>
                      <p className="mt-1 font-encre-body text-sm text-encre-muted">
                        Dinner on rue Montorgueil runs until 21:10. Move it, or pick a later slot.
                      </p>
                      <span className="mt-3 inline-block">
                        <span className={SECONDARY.rest}>Pick another time</span>
                      </span>
                    </div>
                  </div>
                </Plate>

                <Plate className="sm:col-span-5" title="Success" note="Quiet and brief" ink="brass">
                  <div className="flex gap-3 rounded-[4px] border-l-2 border-encre-success bg-encre-success/10 p-4">
                    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
                      <circle cx="10" cy="10" r="9" fill="none" stroke="#8FBF6A" strokeWidth="2" />
                      <path d="M5.5 10.5l3 3L15 7" fill="none" stroke="#8FBF6A" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                    <div>
                      <p className="font-encre-body text-sm font-semibold text-encre-success">Added to Day 5</p>
                      <p className="mt-1 font-encre-body text-sm text-encre-muted">
                        The bridge now sits between dinner and the bar.
                      </p>
                    </div>
                  </div>
                </Plate>
              </div>
            </section>

            <footer className="mt-14 flex flex-wrap items-center justify-between gap-2 border-t-2 border-encre-bone/70 pt-5 font-encre-mono text-[10px] uppercase tracking-[0.15em] text-encre-muted">
              <span>6 sections · 13 color roles · 4 type roles · 14 components</span>
              <span>9 controls × 6 states</span>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
