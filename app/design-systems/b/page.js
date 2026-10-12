import Link from "next/link";

export const metadata = {
  title: "Design system B · Métro Ligne",
  description:
    "A UI library in the Métro Ligne style: color and type roles, spacing and shape, components, control states and UI states.",
};

/* ------------------------------------------------------------------ *
 * Tokens are declared in globals.css as --color-metro-*. Every ratio
 * printed on this page was measured against the surface it sits on.
 * ------------------------------------------------------------------ */

const SECTIONS = [
  { num: "01", id: "color", name: "Color roles" },
  { num: "02", id: "type", name: "Type roles" },
  { num: "03", id: "shape", name: "Spacing & shape" },
  { num: "04", id: "components", name: "Components" },
  { num: "05", id: "control-states", name: "Control states" },
  { num: "06", id: "ui-states", name: "UI states" },
];

const ROLES = [
  { hex: "#EEF0F3", role: "Background", use: "The page itself", ratio: "—" },
  { hex: "#FFFFFF", role: "Surface", use: "Cells, cards, inputs", ratio: "1.14:1 on bg" },
  { hex: "#F0F1F3", role: "Surface raised", use: "Hover fill", ratio: "1.05:1 on surface" },
  { hex: "#E6EEFC", role: "Selected tint", use: "Chosen rows and chips", ratio: "14.59:1 with navy" },
  { hex: "#0B1B3A", role: "Text", use: "Headings and body", ratio: "17.04:1 on surface" },
  { hex: "#545F75", role: "Muted text", use: "Meta, captions, placeholders", ratio: "6.39:1 on surface" },
  { hex: "#C9CED6", role: "Border", use: "Hairline rules between cells", ratio: "decorative" },
  { hex: "#858D9C", role: "Border strong", use: "Input and control edges", ratio: "3.34:1 on surface" },
  { hex: "#0A52E0", role: "Accent", use: "Primary action only", ratio: "6.37:1 on surface" },
  { hex: "#0F6B42", role: "Success", use: "Normal service, confirmation", ratio: "6.56:1 on surface" },
  { hex: "#B3001B", role: "Error", use: "Line closed, failure", ratio: "7.16:1 on surface" },
  { hex: "#8A4B00", role: "Warning", use: "Delays, caution", ratio: "6.80:1 on surface" },
];

/* line colors label categories; they are never used for emphasis */
const LINES = { 1: "#FFCE00", 4: "#A0006E", 6: "#84C28E", 9: "#D5C900", 11: "#8D5E2A", 14: "#62259D" };

/* ---------- furniture ---------- */

function SectionHead({ num, id, name, blurb }) {
  return (
    <header className="mb-6 flex flex-wrap items-end gap-x-4 gap-y-1 border-b-2 border-metro-navy pb-2">
      <span className="font-metro-mono text-sm tabular-nums text-metro-blue">{num}</span>
      <h2 id={id} className="font-metro-sans text-3xl font-bold leading-none tracking-tight">
        {name}
      </h2>
      <p className="max-w-xl font-metro-sans text-xs text-metro-muted">{blurb}</p>
    </header>
  );
}

function Plate({ title, note, children, className = "" }) {
  return (
    <figure className={`flex flex-col border border-metro-line bg-metro-white ${className}`}>
      <figcaption className="border-b border-metro-line px-4 py-2">
        <span className="font-metro-sans text-[11px] font-semibold uppercase tracking-[0.1em]">
          {title}
        </span>
        {note ? (
          <span className="mt-0.5 block font-metro-sans text-[11px] leading-snug text-metro-muted">
            {note}
          </span>
        ) : null}
      </figcaption>
      <div className="flex-1 p-4">{children}</div>
    </figure>
  );
}

function Disc({ n, size = "h-8 w-8 text-sm" }) {
  const pale = ["1", "6", "9"].includes(String(n));
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-metro-sans font-bold ${size}`}
      style={{ background: LINES[n], color: pale ? "#0B1B3A" : "#FFFFFF" }}
    >
      {n}
    </span>
  );
}

/* ---------- recipes ---------- */

const BTN =
  "inline-flex items-center justify-center gap-2 px-4 py-2 font-metro-sans text-xs font-semibold transition-colors";

const PRIMARY = {
  rest: `${BTN} bg-metro-blue text-white`,
  hover: `${BTN} bg-metro-bluehover text-white`,
  focus: `${BTN} bg-metro-blue text-white outline-2 outline-offset-2 outline-metro-navy`,
  pressed: `${BTN} bg-metro-bluepress text-white`,
  disabled: `${BTN} bg-metro-line text-metro-navy/40 cursor-not-allowed`,
};

const SECONDARY = {
  rest: `${BTN} border border-metro-navy text-metro-navy`,
  hover: `${BTN} border border-metro-navy bg-metro-surface2 text-metro-navy`,
  focus: `${BTN} border border-metro-navy text-metro-navy outline-2 outline-offset-2 outline-metro-blue`,
  pressed: `${BTN} border border-metro-navy bg-metro-tint text-metro-navy`,
  disabled: `${BTN} border border-metro-line text-metro-navy/40 cursor-not-allowed`,
};

const INPUT =
  "w-full border bg-metro-white px-3 py-2 font-metro-sans text-sm text-metro-navy placeholder:text-metro-muted";

const CHIP =
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-metro-sans text-[11px] font-semibold";

function Box({ checked, round, state }) {
  const ring = state === "focus" ? "outline-2 outline-offset-2 outline-metro-blue" : "";
  const border = state === "disabled" ? "border-metro-line" : "border-metro-navy";
  const fill =
    checked && state !== "disabled"
      ? "bg-metro-blue border-metro-blue"
      : checked
        ? "bg-metro-line border-metro-line"
        : state === "hover"
          ? "bg-metro-surface2"
          : "bg-metro-white";
  return (
    <span
      className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center border-2 ${border} ${fill} ${ring} ${
        round ? "rounded-full" : ""
      }`}
      aria-hidden="true"
    >
      {checked &&
        (round ? (
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        ) : (
          <svg viewBox="0 0 12 10" className="h-2.5 w-2.5" fill="none">
            <path d="M1 5l3.2 3.2L11 1.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="square" />
          </svg>
        ))}
    </span>
  );
}

function Toggle({ on, state }) {
  const ring = state === "focus" ? "outline-2 outline-offset-2 outline-metro-blue" : "";
  const ON_TRACK = { hover: "bg-metro-bluehover", pressed: "bg-metro-bluepress" };
  const OFF_TRACK = {
    hover: "bg-metro-gray border-2 border-metro-navy",
    pressed: "bg-metro-tint border-2 border-metro-navy",
  };
  const track =
    state === "disabled"
      ? "bg-metro-line"
      : on
        ? ON_TRACK[state] || "bg-metro-blue"
        : OFF_TRACK[state] || "bg-metro-white border-2 border-metro-navy";
  return (
    <span
      className={`inline-flex h-[22px] w-10 items-center rounded-full p-[3px] ${track} ${ring}`}
      aria-hidden="true"
    >
      <span
        className={`h-[14px] w-[14px] rounded-full ${
          on ? "ml-auto bg-white" : "bg-metro-navy"
        }`}
      />
    </span>
  );
}

const STATES = ["rest", "hover", "focus", "pressed", "selected", "disabled"];

const ROWCELL =
  "flex items-center gap-3 border border-metro-line px-3 py-1.5 font-metro-sans text-xs whitespace-nowrap";

const CONTROLS = [
  {
    name: "Primary button",
    note: "the only blue fill on screen",
    render: (st) => (st === "selected" ? null : <span className={PRIMARY[st]}>Open details</span>),
  },
  {
    name: "Secondary button",
    render: (st) => (st === "selected" ? null : <span className={SECONDARY[st]}>Add to day</span>),
  },
  {
    name: "Link",
    render: (st) => {
      const base = "font-metro-sans text-sm font-semibold underline-offset-[3px]";
      const map = {
        rest: `${base} text-metro-navy underline decoration-metro-borderstrong`,
        hover: `${base} text-metro-blue underline decoration-2 decoration-metro-blue`,
        focus: `${base} text-metro-navy underline decoration-metro-borderstrong outline-2 outline-offset-2 outline-metro-blue`,
        pressed: `${base} text-metro-bluepress underline decoration-2 decoration-metro-bluepress`,
        disabled: `${base} text-metro-navy/40 line-through`,
      };
      return st === "selected" ? null : <span className={map[st]}>line 4 to Cité</span>;
    },
  },
  {
    name: "Text input",
    note: "selected reads as filled",
    render: (st) => {
      const map = {
        rest: `${INPUT} border-metro-borderstrong text-metro-muted`,
        hover: `${INPUT} border-metro-navy text-metro-muted`,
        focus: `${INPUT} border-metro-blue outline-2 outline-offset-2 outline-metro-blue`,
        pressed: `${INPUT} border-metro-blue`,
        selected: `${INPUT} border-metro-borderstrong font-semibold`,
        disabled: `${INPUT} border-metro-line bg-metro-surface2 text-metro-navy/40`,
      };
      return <span className={`${map[st]} block min-w-[9rem]`}>Sainte-Chapelle</span>;
    },
  },
  { name: "Checkbox", render: (st) => <Box checked={st === "selected" || st === "disabled"} state={st} /> },
  { name: "Radio", render: (st) => <Box round checked={st === "selected" || st === "disabled"} state={st} /> },
  { name: "Toggle", render: (st) => <Toggle on={st === "selected" || st === "disabled"} state={st} /> },
  {
    name: "Filter chip",
    render: (st) => {
      const map = {
        rest: `${CHIP} border-metro-borderstrong text-metro-navy`,
        hover: `${CHIP} border-metro-navy bg-metro-surface2 text-metro-navy`,
        focus: `${CHIP} border-metro-borderstrong text-metro-navy outline-2 outline-offset-2 outline-metro-blue`,
        pressed: `${CHIP} border-metro-navy bg-metro-tint text-metro-navy`,
        selected: `${CHIP} border-metro-navy bg-metro-navy text-white`,
        disabled: `${CHIP} border-metro-line text-metro-navy/40`,
      };
      return <span className={map[st]}>Museum</span>;
    },
  },
  {
    name: "Stop row",
    note: "the dense view",
    render: (st) => {
      const map = {
        rest: "",
        hover: "bg-metro-surface2",
        focus: "outline-2 outline-offset-[-2px] outline-metro-blue",
        pressed: "bg-metro-tint",
        selected: "border-l-[4px] border-l-metro-blue bg-metro-tint",
        disabled: "opacity-45",
      };
      return (
        <span className={`${ROWCELL} ${map[st]}`}>
          <span className="font-metro-mono font-semibold tabular-nums">10:30</span>
          <span>Sainte-Chapelle</span>
        </span>
      );
    },
  },
];

const ITEM = {
  day: "Day 2",
  area: "Île de la Cité",
  time: "10:30",
  until: "12:00",
  title: "Sainte-Chapelle",
  blurb:
    "Fifteen stained-glass windows, best an hour after opening when the south wall lights up. Combined ticket with the Conciergerie next door.",
  price: "€11.50",
  category: "Museum",
};

const ROWS = [
  ["09:15", "Marché Bastille", "Market · 45 min", "Free", 1],
  ["10:30", "Sainte-Chapelle", "Museum · 1 h 30", "€11.50", 4],
  ["13:00", "Lunch, Rue des Rosiers", "Food · 1 h", "€18", 9],
];

export default function DesignSystemB() {
  return (
    <main className="min-h-screen bg-metro-gray text-metro-navy">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-metro-sans text-xs font-medium uppercase tracking-[0.12em] text-metro-muted hover:text-metro-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-blue"
        >
          ← Back to hub
        </Link>

        <header className="mt-6 bg-metro-navy p-7 sm:p-10">
          <p className="font-metro-mono text-[11px] uppercase tracking-[0.3em] text-white/70">
            Design system B
          </p>
          <h1 className="mt-3 font-metro-sans text-5xl font-bold leading-[0.9] tracking-tight text-white sm:text-7xl">
            Métro Ligne
          </h1>
          <p className="mt-5 max-w-2xl font-metro-sans text-base leading-relaxed text-white/85">
            The UI library for the signage direction. Square corners, hairline
            rules, tabular numerals, and a single signal blue that is spent
            only on the primary action.
          </p>
          <p className="mt-3 max-w-2xl font-metro-sans text-xs leading-relaxed text-white/70">
            Line colors label categories and never carry emphasis — that is the
            accent&rsquo;s job alone. Every ratio below was measured: body text
            clears 4.5:1 and control edges clear 3:1.
          </p>
        </header>

        <nav aria-label="Sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-metro-mono text-[11px] uppercase tracking-[0.12em] text-metro-muted hover:text-metro-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-blue"
            >
              {s.num} {s.name}
            </a>
          ))}
        </nav>

        {/* ===== 01 COLOR ===== */}
        <section aria-labelledby="color" className="mt-12">
          <SectionHead {...SECTIONS[0]} blurb="Eight roles plus three semantics, on an almost entirely neutral page." />
          <div className="grid grid-cols-2 gap-px bg-metro-line sm:grid-cols-4">
            {ROLES.map((r) => (
              <figure key={r.role} className="flex flex-col bg-metro-white">
                <span className="h-14 border-b border-metro-line" style={{ background: r.hex }} aria-hidden="true" />
                <figcaption className="flex flex-1 flex-col gap-0.5 p-3">
                  <span className="font-metro-sans text-xs font-semibold">{r.role}</span>
                  <span className="font-metro-mono text-[11px] tabular-nums text-metro-muted">{r.hex}</span>
                  <span className="font-metro-sans text-[11px] leading-snug text-metro-muted">{r.use}</span>
                  <span className="mt-auto pt-2 font-metro-mono text-[11px] font-semibold tabular-nums">{r.ratio}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-12">
            <Plate className="sm:col-span-7" title="Line colors" note="Category only. They label a day; they never mean 'act here'.">
              <div className="flex flex-wrap items-center gap-2">
                {[1, 4, 6, 9, 11, 14].map((n) => (
                  <Disc key={n} n={n} />
                ))}
                <span className="ml-2 font-metro-sans text-[11px] text-metro-muted">
                  paired with navy or white text, never with the accent
                </span>
              </div>
            </Plate>
            <Plate className="sm:col-span-5" title="The roles in place">
              <article className="border-l-4 border-metro-blue bg-metro-surface2 p-3">
                <p className="font-metro-mono text-[10px] uppercase tracking-[0.12em] text-metro-muted">
                  {ITEM.day} · Stop 2
                </p>
                <h3 className="font-metro-sans text-lg font-bold leading-tight">{ITEM.title}</h3>
                <p className="mt-1 font-metro-mono text-[11px] tabular-nums text-metro-muted">
                  {ITEM.time} → {ITEM.until} · {ITEM.price}
                </p>
              </article>
            </Plate>
          </div>
        </section>

        {/* ===== 02 TYPE ===== */}
        <section aria-labelledby="type" className="mt-12">
          <SectionHead {...SECTIONS[1]} blurb="Inter Tight for everything readable, IBM Plex Mono wherever numbers must line up." />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
            <Plate className="sm:col-span-12" title="Display" note="Inter Tight · 56/50 · 700 · −0.03em">
              <p className="font-metro-sans text-[40px] font-bold leading-[0.9] tracking-tight sm:text-[56px] sm:leading-[50px]">
                Paris in a Week
              </p>
            </Plate>
            <Plate className="sm:col-span-7" title="Heading" note="Inter Tight · 26/32 · 700">
              <p className="font-metro-sans text-[26px] font-bold leading-[32px]">Day 2 — Île de la Cité</p>
            </Plate>
            <Plate className="sm:col-span-5" title="Label" note="Plex Mono · 11/16 · 500 · 0.12em · uppercase">
              <div className="flex flex-col gap-2">
                <p className="font-metro-mono text-[11px] font-medium uppercase leading-4 tracking-[0.12em]">
                  Stop 2 · Ligne 4 · Cité
                </p>
                <p className="font-metro-mono text-[11px] font-medium uppercase leading-4 tracking-[0.12em] text-metro-muted">
                  6 stops · 4.2 km walking
                </p>
              </div>
            </Plate>
            <Plate className="sm:col-span-7" title="Body" note="Inter Tight · 16/26 · 400">
              <p className="max-w-prose font-metro-sans text-[16px] leading-[26px]">
                Fifteen stained-glass windows, best an hour after opening when
                the south wall lights up. The combined ticket with the
                Conciergerie next door saves a few euros, and the queue is
                shorter on the Conciergerie side.
              </p>
            </Plate>
            <Plate className="sm:col-span-5" title="Tabular numerals" note="Times must align down a column">
              <p className="font-metro-mono text-xl tabular-nums leading-relaxed">
                09:15
                <br />
                10:30
                <br />
                13:00
              </p>
            </Plate>
          </div>
        </section>

        {/* ===== 03 SPACING & SHAPE ===== */}
        <section aria-labelledby="shape" className="mt-12">
          <SectionHead {...SECTIONS[2]} blurb="An 8px grid, square corners with pills for badges only, hairline rules, and almost no shadow." />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-12">
            <Plate className="col-span-2 sm:col-span-3" title="Spacing" note="8px base">
              <div className="flex flex-col gap-1.5">
                {[4, 8, 16, 24, 32, 48, 64].map((n) => (
                  <div key={n} className="flex items-center gap-2">
                    <span className="h-3 bg-metro-blue" style={{ width: `${n}px` }} aria-hidden="true" />
                    <span className="font-metro-mono text-[11px] tabular-nums text-metro-muted">{n}</span>
                  </div>
                ))}
              </div>
            </Plate>
            <Plate className="sm:col-span-3" title="Corners" note="Square for surfaces, pill for badges. Nothing between.">
              <div className="flex flex-wrap items-end gap-3">
                <div className="flex flex-col items-center gap-1">
                  <span className="h-12 w-12 border-2 border-metro-navy" />
                  <span className="font-metro-mono text-[11px] text-metro-muted">0px</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="h-12 w-20 rounded-full border-2 border-metro-navy" />
                  <span className="font-metro-mono text-[11px] text-metro-muted">pill</span>
                </div>
                <div className="flex flex-col items-center gap-1 opacity-45">
                  <span className="h-12 w-12 rounded-lg border-2 border-dashed border-metro-borderstrong" />
                  <span className="font-metro-mono text-[11px] text-metro-muted">never</span>
                </div>
              </div>
            </Plate>
            <Plate className="sm:col-span-3" title="Borders" note="1px hairline divides; 4px marks the selected line">
              <div className="flex flex-col gap-3 py-1">
                <span className="h-px bg-metro-line" />
                <span className="h-px bg-metro-borderstrong" />
                <span className="h-[2px] bg-metro-navy" />
                <span className="h-1 bg-metro-blue" />
              </div>
              <p className="mt-2 font-metro-sans text-[11px] leading-snug text-metro-muted">
                1px line · 1px strong · 2px rule · 4px accent edge
              </p>
            </Plate>
            <Plate className="sm:col-span-3" title="Shadow" note="Signage is flat; depth comes from the rule, not a shadow">
              <div className="flex flex-wrap items-end gap-4 py-2">
                {[
                  ["none", ""],
                  ["panel", "shadow-[0_1px_0_#C9CED6]"],
                  ["raised", "shadow-[0_2px_4px_rgba(11,27,58,0.12)]"],
                ].map(([n, c]) => (
                  <div key={n} className="flex flex-col items-center gap-1.5">
                    <span className={`h-12 w-12 border border-metro-line bg-metro-white ${c}`} />
                    <span className="font-metro-sans text-[11px] text-metro-muted">{n}</span>
                  </div>
                ))}
              </div>
            </Plate>
          </div>
        </section>

        {/* ===== 04 COMPONENTS ===== */}
        <section aria-labelledby="components" className="mt-12">
          <SectionHead {...SECTIONS[3]} blurb="The parts the itinerary needs. Buttons, links and inputs here respond for real." />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
            <Plate className="sm:col-span-5" title="Buttons" note="Primary carries the accent; secondary never does">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className={`${BTN} bg-metro-blue text-white hover:bg-metro-bluehover active:bg-metro-bluepress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-navy`}
                >
                  Open details
                </button>
                <button
                  type="button"
                  className={`${BTN} border border-metro-navy text-metro-navy hover:bg-metro-surface2 active:bg-metro-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-blue`}
                >
                  Add to day
                </button>
                <button type="button" disabled className={PRIMARY.disabled}>
                  Sold out
                </button>
              </div>
            </Plate>

            <Plate className="sm:col-span-4" title="Link" note="Underlined always; blue on hover">
              <p className="font-metro-sans text-sm leading-relaxed">
                Take{" "}
                <a
                  href="#components"
                  className="font-semibold text-metro-navy underline decoration-metro-borderstrong underline-offset-[3px] hover:text-metro-blue hover:decoration-2 hover:decoration-metro-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metro-blue"
                >
                  line 4 to Cité
                </a>
                , one stop from Châtelet.
              </p>
            </Plate>

            <Plate className="sm:col-span-3" title="Badges" note="Status, not action">
              <div className="flex flex-wrap gap-2">
                <span className={`${CHIP} border-metro-success text-metro-success`}>Booked</span>
                <span className={`${CHIP} border-metro-borderstrong text-metro-muted`}>Free</span>
                <span className={`${CHIP} border-metro-warning text-metro-warning`}>Delays</span>
                <span className={`${CHIP} border-metro-error text-metro-error`}>Closed</span>
              </div>
            </Plate>

            <Plate className="sm:col-span-4" title="Text input" note="Square frame, label above">
              <label className="flex flex-col gap-1.5">
                <span className="font-metro-mono text-[11px] font-medium uppercase tracking-[0.12em]">
                  Search stops
                </span>
                <input
                  type="text"
                  placeholder="Sainte-Chapelle"
                  className={`${INPUT} border-metro-borderstrong focus:border-metro-blue focus:outline-2 focus:outline-offset-2 focus:outline-metro-blue`}
                />
                <span className="font-metro-sans text-[11px] text-metro-muted">
                  Matches titles and neighborhoods.
                </span>
              </label>
            </Plate>

            <Plate className="sm:col-span-4" title="Select" note="Same frame as the input">
              <label className="flex flex-col gap-1.5">
                <span className="font-metro-mono text-[11px] font-medium uppercase tracking-[0.12em]">
                  Sort by
                </span>
                <div className="relative">
                  <select
                    defaultValue="time"
                    className={`${INPUT} appearance-none border-metro-borderstrong pr-9 focus:border-metro-blue focus:outline-2 focus:outline-offset-2 focus:outline-metro-blue`}
                  >
                    <option value="time">Time of day</option>
                    <option value="price">Price, low to high</option>
                    <option value="area">Neighborhood</option>
                  </select>
                  <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-metro-muted">
                    ▾
                  </span>
                </div>
              </label>
            </Plate>

            <Plate className="sm:col-span-4" title="Checkbox, radio & toggle">
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-2.5 font-metro-sans text-sm">
                  <Box checked /> Booked already
                </span>
                <span className="flex items-center gap-2.5 font-metro-sans text-sm">
                  <Box round checked /> Morning
                </span>
                <span className="flex items-center gap-3 font-metro-sans text-sm">
                  <Toggle on /> Show walking times
                </span>
              </div>
            </Plate>

            <Plate className="sm:col-span-7" title="Tabs" note="One day at a time; selected carries the 4px edge">
              <div className="flex overflow-x-auto border-b border-metro-line">
                {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((d, i) => (
                  <span
                    key={d}
                    aria-current={i === 1 ? "page" : undefined}
                    className={`shrink-0 border-b-4 px-3 py-2 font-metro-sans text-xs font-semibold ${
                      i === 1 ? "border-metro-blue text-metro-navy" : "border-transparent text-metro-muted"
                    }`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Plate>

            <Plate className="sm:col-span-5" title="Filter chips" note="Selected inverts to navy, not to the accent">
              <div className="flex flex-wrap gap-2">
                {["All", "Museum", "Food", "Market", "Walk"].map((t, i) => (
                  <span
                    key={t}
                    className={`${CHIP} ${
                      i === 1 ? "border-metro-navy bg-metro-navy text-white" : "border-metro-borderstrong text-metro-navy"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Plate>

            <Plate className="sm:col-span-7" title="Card" note="One stop from the itinerary">
              <article className="border-l-4 border-metro-blue bg-metro-white p-4 shadow-[0_1px_0_#C9CED6]">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-metro-mono text-[10px] uppercase tracking-[0.12em] text-metro-muted">
                    {ITEM.day} · {ITEM.area}
                  </p>
                  <span className={`${CHIP} border-metro-borderstrong text-metro-muted`}>{ITEM.category}</span>
                </div>
                <h3 className="mt-1 font-metro-sans text-xl font-bold leading-tight">{ITEM.title}</h3>
                <p className="mt-2 font-metro-sans text-sm leading-relaxed">{ITEM.blurb}</p>
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-metro-line pt-3">
                  <p className="font-metro-mono text-xs font-semibold tabular-nums">
                    {ITEM.time} → {ITEM.until} · {ITEM.price}
                  </p>
                  <span className={PRIMARY.rest}>Open details</span>
                </div>
              </article>
            </Plate>

            <Plate className="sm:col-span-5" title="Service status" note="Semantic colors, with a shape as backup">
              <div className="flex flex-col gap-2 font-metro-sans text-xs font-medium">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-metro-success" /> Normal service
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 bg-metro-warning" /> Minor delays
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rotate-45 bg-metro-error" /> Line closed
                </span>
              </div>
            </Plate>

            <Plate className="sm:col-span-12" title="Stop rows" note="Days are lines, so the list is drawn as one">
              <ul className="border-y border-metro-line">
                {ROWS.map(([time, title, meta, price, line], i) => (
                  <li
                    key={title}
                    className={`flex items-center gap-4 border-b border-metro-line px-3 py-3 last:border-0 ${
                      i === 1 ? "border-l-4 border-l-metro-blue bg-metro-tint pl-2" : ""
                    }`}
                  >
                    <span className="font-metro-mono text-sm font-semibold tabular-nums">{time}</span>
                    <Disc n={line} size="h-6 w-6 text-[11px]" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-metro-sans text-sm font-semibold">{title}</span>
                      <span className="block font-metro-sans text-[11px] text-metro-muted">{meta}</span>
                    </span>
                    <span className="font-metro-mono text-sm tabular-nums">{price}</span>
                  </li>
                ))}
              </ul>
            </Plate>

            <Plate className="sm:col-span-12" title="Detail panel" note="Opens over a dimmed page; the accent sits on one action only">
              <div className="relative overflow-hidden border border-metro-line bg-metro-gray p-4">
                <div className="pointer-events-none select-none opacity-30" aria-hidden="true">
                  <p className="font-metro-sans text-xl font-bold">Day 2 — Île de la Cité</p>
                  <p className="font-metro-mono text-sm">09:15 Marché · 10:30 Sainte-Chapelle · 13:00 Lunch</p>
                </div>
                <div className="mt-4 border-t-4 border-metro-blue bg-metro-white shadow-[0_2px_4px_rgba(11,27,58,0.12)]">
                  <div className="flex items-start justify-between gap-4 border-b border-metro-line p-4">
                    <div>
                      <p className="font-metro-mono text-[11px] uppercase tracking-[0.12em] text-metro-muted">
                        {ITEM.day} · {ITEM.time} → {ITEM.until}
                      </p>
                      <h3 className="mt-1 font-metro-sans text-2xl font-bold leading-tight">{ITEM.title}</h3>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-metro-borderstrong text-sm" aria-hidden="true">
                      ✕
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 p-4">
                    <p className="font-metro-sans text-sm leading-relaxed">{ITEM.blurb}</p>
                    <dl className="grid grid-cols-2 gap-x-6 gap-y-1 border-t border-metro-line pt-3 font-metro-sans text-xs sm:grid-cols-4">
                      {[
                        ["Price", ITEM.price],
                        ["Duration", "1 h 30"],
                        ["Nearest", "Cité, ligne 4"],
                        ["Closed", "Mondays"],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <dt className="text-metro-muted">{k}</dt>
                          <dd className="font-metro-mono font-semibold tabular-nums">{v}</dd>
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

        {/* ===== 05 CONTROL STATES ===== */}
        <section aria-labelledby="control-states" className="mt-12">
          <SectionHead
            {...SECTIONS[4]}
            blurb="One matrix: nine controls down, six states across. n/a is marked where a state does not apply."
          />
          <div className="overflow-x-auto border border-metro-line bg-metro-white">
            <table className="w-full min-w-[920px] border-collapse">
              <caption className="sr-only">Every control in every applicable state</caption>
              <thead>
                <tr className="border-b-2 border-metro-navy">
                  <th scope="col" className="w-36 px-3 py-2 text-left font-metro-mono text-[10px] font-medium uppercase tracking-[0.12em] text-metro-muted">
                    Control
                  </th>
                  {STATES.map((st) => (
                    <th key={st} scope="col" className="px-3 py-2 text-left font-metro-mono text-[10px] font-medium uppercase tracking-[0.12em] text-metro-muted">
                      {st}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CONTROLS.map((c) => (
                  <tr key={c.name} className="border-b border-metro-line last:border-0">
                    <th scope="row" className="px-3 py-3 text-left align-middle font-metro-sans text-xs font-semibold">
                      {c.name}
                      {c.note ? (
                        <span className="mt-0.5 block text-[10px] font-normal leading-snug text-metro-muted">
                          {c.note}
                        </span>
                      ) : null}
                    </th>
                    {STATES.map((st) => (
                      <td key={st} className="px-3 py-3 align-middle">
                        {c.render(st) ?? (
                          <span className="font-metro-sans text-[11px] italic text-metro-muted">n/a</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 max-w-2xl font-metro-sans text-xs leading-relaxed text-metro-muted">
            Focus is the same everywhere: a 2px outline offset 2px, in blue on
            quiet controls and in navy on the accent fill, so it stays visible
            on both. Nothing moves on press — the fill darkens instead.
          </p>
        </section>

        {/* ===== 06 UI STATES ===== */}
        <section aria-labelledby="ui-states" className="mt-12">
          <SectionHead {...SECTIONS[5]} blurb="What the list looks like with nothing, while waiting, after failing, and after succeeding." />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
            <Plate className="sm:col-span-5" title="Empty" note="No stops match">
              <div className="flex flex-col items-start gap-3 border border-dashed border-metro-borderstrong p-6">
                <svg viewBox="0 0 60 40" className="h-10 w-16" aria-hidden="true" fill="none">
                  <line x1="10" y1="20" x2="50" y2="20" stroke="#C9CED6" strokeWidth="5" strokeDasharray="6 5" />
                  <circle cx="10" cy="20" r="5" fill="#fff" stroke="#858D9C" strokeWidth="2.5" />
                  <circle cx="50" cy="20" r="5" fill="#fff" stroke="#858D9C" strokeWidth="2.5" />
                </svg>
                <div>
                  <p className="font-metro-sans text-lg font-bold leading-tight">No stops on this line</p>
                  <p className="mt-1 font-metro-sans text-sm text-metro-muted">
                    Clear a filter, or pick another day.
                  </p>
                </div>
                <span className={SECONDARY.rest}>Clear filters</span>
              </div>
            </Plate>

            <Plate className="sm:col-span-7" title="Loading" note="Skeleton rows that keep the row rhythm">
              <div className="flex flex-col gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex animate-pulse items-center gap-4">
                    <span className="h-4 w-12 bg-metro-surface2" />
                    <span className="h-6 w-6 rounded-full bg-metro-surface2" />
                    <span className="flex-1">
                      <span className="block h-3.5 w-2/3 bg-metro-surface2" />
                      <span className="mt-1.5 block h-2.5 w-1/3 bg-metro-surface2" />
                    </span>
                    <span className="h-4 w-10 bg-metro-surface2" />
                  </div>
                ))}
                <p className="mt-1 flex items-center gap-2 font-metro-mono text-xs text-metro-muted">
                  <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-metro-line border-t-metro-navy" aria-hidden="true" />
                  Loading the day…
                </p>
              </div>
            </Plate>

            <Plate className="sm:col-span-7" title="Error" note="Left edge, icon and tint — never the accent">
              <div className="flex gap-3 border-l-4 border-metro-error bg-metro-error/8 p-4">
                <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill="none" stroke="#B3001B" strokeWidth="2" />
                  <path d="M10 5v6M10 14v1.5" stroke="#B3001B" strokeWidth="2" strokeLinecap="square" />
                </svg>
                <div>
                  <p className="font-metro-sans text-sm font-semibold text-metro-error">That time is already taken</p>
                  <p className="mt-1 font-metro-sans text-sm text-metro-muted">
                    Lunch on Rue des Rosiers runs until 14:00. Move it, or pick a later slot.
                  </p>
                  <span className="mt-3 inline-block">
                    <span className={SECONDARY.rest}>Pick another time</span>
                  </span>
                </div>
              </div>
            </Plate>

            <Plate className="sm:col-span-5" title="Success" note="Quiet and brief">
              <div className="flex gap-3 border-l-4 border-metro-success bg-metro-success/8 p-4">
                <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill="none" stroke="#0F6B42" strokeWidth="2" />
                  <path d="M5.5 10.5l3 3L15 7" fill="none" stroke="#0F6B42" strokeWidth="2" strokeLinecap="square" />
                </svg>
                <div>
                  <p className="font-metro-sans text-sm font-semibold text-metro-success">Added to Day 2</p>
                  <p className="mt-1 font-metro-sans text-sm text-metro-muted">
                    Sainte-Chapelle now sits between the market and lunch.
                  </p>
                </div>
              </div>
            </Plate>
          </div>
        </section>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-2 border-t-2 border-metro-navy pt-5 font-metro-mono text-[10px] uppercase tracking-[0.15em] text-metro-muted">
          <span>6 sections · 12 color roles · 5 type roles · 14 components</span>
          <span>9 controls × 6 states</span>
        </footer>
      </div>
    </main>
  );
}
