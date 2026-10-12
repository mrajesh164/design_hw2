import Link from "next/link";

export const metadata = {
  title: "Design system A · Café Terrace",
  description:
    "A UI library in the Café Terrace style: color and type roles, spacing and shape, components, control states and UI states.",
};

/* ------------------------------------------------------------------ *
 * Tokens are declared in globals.css as --color-cafe-*. Every ratio
 * printed on this page was measured against the surface it sits on.
 * ------------------------------------------------------------------ */

const SECTIONS = [
  { num: "I", id: "color", name: "Color roles" },
  { num: "II", id: "type", name: "Type roles" },
  { num: "III", id: "shape", name: "Spacing & shape" },
  { num: "IV", id: "components", name: "Components" },
  { num: "V", id: "control-states", name: "Control states" },
  { num: "VI", id: "ui-states", name: "UI states" },
];

const PAPER_TEXTURE = {
  backgroundImage:
    "radial-gradient(rgba(43,29,22,0.045) 1px, transparent 1px), radial-gradient(rgba(43,29,22,0.03) 1px, transparent 1px)",
  backgroundSize: "18px 18px, 11px 11px",
  backgroundPosition: "0 0, 6px 9px",
};

/* ---------- page furniture ---------- */

function SectionHead({ num, id, name, blurb }) {
  return (
    <header className="mb-6 border-b-2 border-cafe-ink/80 pb-2">
      <div className="flex items-baseline gap-3">
        <span className="font-cafe-display text-2xl leading-none text-cafe-tomato">
          {num}
        </span>
        <h2 id={id} className="font-cafe-display text-3xl leading-none tracking-tight">
          {name}
        </h2>
      </div>
      <p className="mt-1.5 max-w-2xl font-cafe-body text-xs italic text-cafe-muted">
        {blurb}
      </p>
    </header>
  );
}

/* a labelled specimen plate */
function Plate({ title, note, children, className = "" }) {
  return (
    <figure
      className={`flex flex-col border border-cafe-border bg-cafe-cream shadow-[2px_3px_0_rgba(43,29,22,0.08)] ${className}`}
    >
      <figcaption className="border-b border-cafe-border px-4 py-2">
        <span className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em] text-cafe-ink">
          {title}
        </span>
        {note ? (
          <span className="mt-0.5 block font-cafe-body text-[11px] leading-snug text-cafe-muted">
            {note}
          </span>
        ) : null}
      </figcaption>
      <div className="flex-1 p-4">{children}</div>
    </figure>
  );
}

/* one cell of a state matrix */
function State({ name, children }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-cafe-body text-[10px] uppercase tracking-[0.16em] text-cafe-muted">
        {name}
      </span>
      <div className="flex items-start">{children}</div>
    </div>
  );
}

function StateRow({ children, cols = "sm:grid-cols-3 lg:grid-cols-6" }) {
  return <div className={`grid grid-cols-2 gap-4 ${cols}`}>{children}</div>;
}

/* ---------- component recipes ---------- */

const BTN =
  "inline-flex items-center justify-center gap-2 rounded-[2px] px-4 py-2 font-cafe-body text-xs font-semibold uppercase tracking-[0.12em] transition-colors";

const PRIMARY = {
  rest: `${BTN} bg-cafe-tomato text-cafe-cream`,
  hover: `${BTN} bg-cafe-accenthover text-cafe-cream`,
  focus: `${BTN} bg-cafe-tomato text-cafe-cream outline-2 outline-offset-2 outline-cafe-ink`,
  pressed: `${BTN} bg-cafe-accentpress text-cafe-cream translate-y-px`,
  disabled: `${BTN} bg-cafe-border text-cafe-ink/35 cursor-not-allowed`,
};

const SECONDARY = {
  rest: `${BTN} border border-cafe-ink text-cafe-ink`,
  hover: `${BTN} border border-cafe-ink bg-cafe-surface2 text-cafe-ink`,
  focus: `${BTN} border border-cafe-ink text-cafe-ink outline-2 outline-offset-2 outline-cafe-tomato`,
  pressed: `${BTN} border border-cafe-ink bg-cafe-tint text-cafe-ink translate-y-px`,
  disabled: `${BTN} border border-cafe-border text-cafe-ink/35 cursor-not-allowed`,
};

const INPUT =
  "w-full rounded-[2px] border bg-cafe-cream px-3 py-2 font-cafe-body text-sm text-cafe-ink placeholder:text-cafe-muted";

const CHIP =
  "inline-flex items-center gap-1.5 rounded-[2px] border px-2.5 py-1 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.1em]";

/* drawn controls, so every state can be shown at once */
function Box({ checked, round, state }) {
  const ring =
    state === "focus" ? "outline-2 outline-offset-2 outline-cafe-tomato" : "";
  const border =
    state === "disabled" ? "border-cafe-border" : "border-cafe-ink";
  const fill =
    checked && state !== "disabled"
      ? "bg-cafe-tomato border-cafe-tomato"
      : checked
        ? "bg-cafe-border border-cafe-border"
        : state === "hover"
          ? "bg-cafe-surface2"
          : "bg-cafe-cream";
  return (
    <span
      className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center border-2 ${border} ${fill} ${ring} ${
        round ? "rounded-full" : "rounded-[2px]"
      }`}
      aria-hidden="true"
    >
      {checked &&
        (round ? (
          <span className="h-1.5 w-1.5 rounded-full bg-cafe-cream" />
        ) : (
          <svg viewBox="0 0 12 10" className="h-2.5 w-2.5" fill="none">
            <path
              d="M1 5l3.2 3.2L11 1.5"
              stroke="#F6EFE3"
              strokeWidth="2.2"
              strokeLinecap="square"
            />
          </svg>
        ))}
    </span>
  );
}

function Toggle({ on, state }) {
  const ring =
    state === "focus" ? "outline-2 outline-offset-2 outline-cafe-tomato" : "";
  const track =
    state === "disabled"
      ? "bg-cafe-border border-cafe-border"
      : on
        ? "bg-cafe-tomato border-cafe-tomato"
        : "bg-cafe-cream border-cafe-ink";
  return (
    <span
      className={`inline-flex h-[22px] w-10 items-center border-2 p-[2px] ${track} ${ring}`}
      aria-hidden="true"
    >
      <span
        className={`h-[14px] w-[14px] bg-cafe-cream ${on ? "ml-auto" : ""} ${
          on ? "" : "border border-cafe-ink"
        }`}
      />
    </span>
  );
}

const ROLES = [
  { hex: "#E8DCC5", role: "Background", use: "The page itself", ratio: "—", span: "sm:col-span-3" },
  { hex: "#F6EFE3", role: "Surface", use: "Cards, inputs, panels", ratio: "1.19:1 on bg", span: "sm:col-span-3" },
  { hex: "#EAE2D7", role: "Surface raised", use: "Hover fill on quiet controls", ratio: "1.11:1 on surface", span: "sm:col-span-3" },
  { hex: "#EDD8CC", role: "Selected tint", use: "Chosen rows and chips", ratio: "11.86:1 with ink", span: "sm:col-span-3" },
  { hex: "#2B1D16", role: "Text", use: "Headings and body", ratio: "14.24:1 on surface", span: "sm:col-span-3" },
  { hex: "#685C54", role: "Muted text", use: "Captions, meta, placeholders", ratio: "5.66:1 on surface", span: "sm:col-span-3" },
  { hex: "#C3BAB0", role: "Border", use: "Dividers and plate rules", ratio: "decorative", span: "sm:col-span-3" },
  { hex: "#90867C", role: "Border strong", use: "Input and control edges", ratio: "3.12:1 on surface", span: "sm:col-span-3" },
  { hex: "#AE3220", role: "Accent", use: "Primary action only", ratio: "5.61:1 on surface", span: "sm:col-span-3" },
  { hex: "#41662F", role: "Success", use: "Confirmation", ratio: "5.80:1 on surface", span: "sm:col-span-3" },
  { hex: "#7B1E2B", role: "Error", use: "Failure and destructive", ratio: "8.91:1 on surface", span: "sm:col-span-3" },
  { hex: "#7A4F10", role: "Warning", use: "Caution, closures", ratio: "6.22:1 on surface", span: "sm:col-span-3" },
];

/* ---------- the control × state matrix ---------- */

const STATES = ["rest", "hover", "focus", "pressed", "selected", "disabled"];

const ROWCELL =
  "flex items-center gap-3 border border-cafe-border px-3 py-1.5 font-cafe-body text-xs whitespace-nowrap";

const CONTROLS = [
  {
    name: "Primary button",
    note: "accent lives here and nowhere else",
    render: (st) =>
      st === "selected" ? null : <span className={PRIMARY[st]}>Add to day</span>,
  },
  {
    name: "Secondary button",
    render: (st) =>
      st === "selected" ? null : <span className={SECONDARY[st]}>Details</span>,
  },
  {
    name: "Link",
    render: (st) => {
      const base = "font-cafe-body text-sm font-semibold underline-offset-[3px]";
      const map = {
        rest: `${base} underline decoration-cafe-borderstrong`,
        hover: `${base} text-cafe-tomato underline decoration-2 decoration-cafe-tomato`,
        focus: `${base} underline decoration-cafe-borderstrong outline-2 outline-offset-2 outline-cafe-tomato`,
        pressed: `${base} text-cafe-accentpress underline decoration-2 decoration-cafe-accentpress`,
        disabled: `${base} text-cafe-ink/35 line-through`,
      };
      return st === "selected" ? null : (
        <span className={map[st]}>combined entry</span>
      );
    },
  },
  {
    name: "Text input",
    note: "selected reads as filled",
    render: (st) => {
      const map = {
        rest: `${INPUT} border-cafe-borderstrong text-cafe-muted`,
        hover: `${INPUT} border-cafe-ink text-cafe-muted`,
        focus: `${INPUT} border-cafe-tomato outline-2 outline-offset-2 outline-cafe-tomato`,
        pressed: `${INPUT} border-cafe-tomato`,
        selected: `${INPUT} border-cafe-borderstrong font-semibold`,
        disabled: `${INPUT} border-cafe-border bg-cafe-surface2 text-cafe-ink/35`,
      };
      return (
        <span className={`${map[st]} block min-w-[9rem]`}>Sainte-Chapelle</span>
      );
    },
  },
  {
    name: "Checkbox",
    render: (st) => (
      <Box checked={st === "selected" || st === "disabled"} state={st} />
    ),
  },
  {
    name: "Radio",
    render: (st) => (
      <Box round checked={st === "selected" || st === "disabled"} state={st} />
    ),
  },
  {
    name: "Toggle",
    render: (st) => (
      <Toggle on={st === "selected" || st === "disabled"} state={st} />
    ),
  },
  {
    name: "Filter chip",
    render: (st) => {
      const map = {
        rest: `${CHIP} border-cafe-borderstrong text-cafe-ink`,
        hover: `${CHIP} border-cafe-ink bg-cafe-surface2 text-cafe-ink`,
        focus: `${CHIP} border-cafe-borderstrong text-cafe-ink outline-2 outline-offset-2 outline-cafe-tomato`,
        pressed: `${CHIP} translate-y-px border-cafe-ink bg-cafe-tint text-cafe-ink`,
        selected: `${CHIP} border-cafe-ink bg-cafe-ink text-cafe-cream`,
        disabled: `${CHIP} border-cafe-border text-cafe-ink/35`,
      };
      return <span className={map[st]}>Museum</span>;
    },
  },
  {
    name: "List row",
    note: "the dense view",
    render: (st) => {
      const map = {
        rest: "",
        hover: "bg-cafe-surface2",
        focus: "outline-2 outline-offset-[-2px] outline-cafe-tomato",
        pressed: "bg-cafe-tint",
        selected: "border-l-[3px] border-l-cafe-tomato bg-cafe-tint",
        disabled: "opacity-45",
      };
      return (
        <span className={`${ROWCELL} ${map[st]}`}>
          <span className="font-semibold tabular-nums">10:30</span>
          <span>Sainte-Chapelle</span>
        </span>
      );
    },
  },
];

/* ---------- content: real items from the itinerary ---------- */

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
  ["09:15", "Marché Bastille", "Market · 45 min", "Free"],
  ["10:30", "Sainte-Chapelle", "Museum · 1 h 30", "€11.50"],
  ["13:00", "Lunch, rue des Rosiers", "Food · 1 h", "€18"],
];

/* ---------- page ---------- */

export default function DesignSystemA() {
  return (
    <main className="min-h-screen bg-cafe-paper text-cafe-ink">
      <div className="min-h-screen" style={PAPER_TEXTURE}>
        <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
          <Link
            href="/"
            className="font-cafe-body text-xs uppercase tracking-[0.2em] text-cafe-muted underline-offset-4 hover:text-cafe-tomato hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
          >
            ← Back to hub
          </Link>

          <header className="mt-6 border-y-2 border-cafe-ink/80 py-6">
            <p className="font-cafe-body text-[11px] uppercase tracking-[0.3em] text-cafe-tomato">
              Design system A
            </p>
            <h1 className="mt-2 font-cafe-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              Café Terrace
            </h1>
            <p className="mt-4 max-w-2xl font-cafe-body text-base leading-relaxed text-cafe-ink">
              The UI library for the warm editorial direction. Sharp corners,
              hairline rules, printed offset shadows, and a single tomato
              accent that is spent only on the primary action.
            </p>
            <p className="mt-3 max-w-2xl font-cafe-body text-xs leading-relaxed text-cafe-muted">
              Every contrast ratio below was measured, not estimated. Body text
              clears 4.5:1 and control boundaries clear 3:1. Controls are drawn
              specimens so all six states can be seen at once; buttons, links
              and inputs also respond for real.
            </p>
          </header>

          <nav aria-label="Sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-cafe-body text-[11px] uppercase tracking-[0.16em] text-cafe-muted underline-offset-4 hover:text-cafe-tomato hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
              >
                {s.num}. {s.name}
              </a>
            ))}
          </nav>

          {/* ============ I · COLOUR ============ */}
          <section aria-labelledby="color" className="mt-12">
            <SectionHead
              {...SECTIONS[0]}
              blurb="Six roles, plus three semantic colors. Ratios are against the surface the color is used on."
            />
            <div className="grid grid-cols-2 gap-px bg-cafe-border sm:grid-cols-12">
              {ROLES.map((r) => (
                <figure
                  key={r.role}
                  className={`flex flex-col bg-cafe-cream ${r.span}`}
                >
                  <span
                    className="h-14 border-b border-cafe-ink/15"
                    style={{ background: r.hex }}
                    aria-hidden="true"
                  />
                  <figcaption className="flex flex-1 flex-col gap-0.5 p-3">
                    <span className="font-cafe-body text-xs font-semibold">
                      {r.role}
                    </span>
                    <span className="font-cafe-body text-[11px] tabular-nums text-cafe-muted">
                      {r.hex}
                    </span>
                    <span className="font-cafe-body text-[11px] leading-snug text-cafe-muted">
                      {r.use}
                    </span>
                    <span className="mt-auto pt-2 font-cafe-body text-[11px] font-semibold tabular-nums">
                      {r.ratio}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* the roles doing their jobs at once */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-12">
              <div className="border border-cafe-border bg-cafe-cream p-4 shadow-[2px_3px_0_rgba(43,29,22,0.08)] sm:col-span-7">
                <p className="font-cafe-body text-[10px] font-semibold uppercase tracking-[0.16em] text-cafe-muted">
                  The roles in place
                </p>
                <div className="mt-3 border border-cafe-borderstrong bg-cafe-cream p-3">
                  <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em] text-cafe-muted">
                    Day 2 · Île de la Cité
                  </p>
                  <h3 className="font-cafe-display text-xl leading-tight text-cafe-ink">
                    Sainte-Chapelle
                  </h3>
                  <p className="mt-1 font-cafe-body text-xs text-cafe-muted">
                    Muted text carries the meta line; ink carries the title.
                  </p>
                  <span className={`mt-3 inline-flex ${PRIMARY.rest}`}>
                    Open details
                  </span>
                </div>
              </div>
              <div className="border border-cafe-border bg-cafe-cream p-4 shadow-[2px_3px_0_rgba(43,29,22,0.08)] sm:col-span-5">
                <p className="font-cafe-body text-[10px] font-semibold uppercase tracking-[0.16em] text-cafe-muted">
                  Why error is not the accent
                </p>
                <p className="mt-2 font-cafe-body text-xs leading-relaxed text-cafe-ink">
                  Both are red, so they are told apart by form, not hue. The
                  accent is only ever a solid fill on a primary button. Error is
                  only ever a left rule, an icon and a tint — never a button.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className={PRIMARY.rest}>Accent</span>
                  <span className="flex items-center gap-2 border-l-[3px] border-cafe-error bg-cafe-error/8 px-3 py-2 font-cafe-body text-xs font-semibold text-cafe-error">
                    Error
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ============ II · TYPE ============ */}
          <section aria-labelledby="type" className="mt-12">
            <SectionHead
              {...SECTIONS[1]}
              blurb="Four roles. Fraunces for display and headings, Source Sans for everything that has to be read quickly."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              {/* display gets the full measure, because that is how it is used */}
              <Plate className="sm:col-span-12" title="Display" note="Fraunces · 56/52 · 600 · −0.02em · page titles only">
                <p className="font-cafe-display text-[40px] font-semibold leading-[0.95] tracking-tight sm:text-[56px] sm:leading-[52px]">
                  Paris in a Week
                </p>
              </Plate>

              <Plate className="sm:col-span-7" title="Heading" note="Fraunces · 28/34 · 600 · day and section titles">
                <p className="font-cafe-display text-[28px] font-semibold leading-[34px]">
                  Day 2 — Île de la Cité
                </p>
              </Plate>

              <Plate className="sm:col-span-5" title="Label" note="Source Sans · 12/16 · 600 · 0.14em · uppercase">
                <div className="flex flex-col gap-2">
                  <p className="font-cafe-body text-[12px] font-semibold uppercase leading-4 tracking-[0.14em]">
                    10:30 · 1 h 30 · €11.50
                  </p>
                  <p className="font-cafe-body text-[12px] font-semibold uppercase leading-4 tracking-[0.14em] text-cafe-muted">
                    Day 2 · Île de la Cité
                  </p>
                </div>
              </Plate>

              <Plate className="sm:col-span-7" title="Body" note="Source Sans · 16/26 · 400 · max 68 characters">
                <p className="max-w-prose font-cafe-body text-[16px] leading-[26px]">
                  Fifteen stained-glass windows, best an hour after opening
                  when the south wall lights up. The combined ticket with the
                  Conciergerie next door saves a few euros, and the queue is
                  shorter on the Conciergerie side.
                </p>
              </Plate>

              {/* all four roles at once, so the hierarchy is visible rather than described */}
              <Plate className="sm:col-span-5" title="All four at once" note="Hierarchy comes from size and face, not color">
                <article className="border border-cafe-borderstrong p-3">
                  <p className="font-cafe-body text-[12px] font-semibold uppercase leading-4 tracking-[0.14em] text-cafe-muted">
                    Day 2 · 10:30
                  </p>
                  <h3 className="mt-1 font-cafe-display text-[28px] font-semibold leading-[30px]">
                    Sainte-Chapelle
                  </h3>
                  <p className="mt-1.5 font-cafe-body text-[16px] leading-[26px]">
                    Go early. The south wall is the reason you came.
                  </p>
                  <p className="mt-2 font-cafe-body text-[12px] font-semibold uppercase leading-4 tracking-[0.14em]">
                    €11.50
                  </p>
                </article>
              </Plate>
            </div>
          </section>

          {/* ============ III · SPACING & SHAPE ============ */}
          <section aria-labelledby="shape" className="mt-12">
            <SectionHead
              {...SECTIONS[2]}
              blurb="A 4px base, corners that stay sharp, hairline rules, and shadows that print rather than blur."
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-12">
              <Plate className="col-span-2 sm:col-span-3" title="Spacing" note="4px base, used for padding and gaps">
                <div className="flex flex-col gap-1.5">
                  {[4, 8, 12, 16, 24, 32, 48, 64].map((n) => (
                    <div key={n} className="flex items-center gap-2">
                      <span
                        className="h-3 bg-cafe-tomato"
                        style={{ width: `${n}px` }}
                        aria-hidden="true"
                      />
                      <span className="font-cafe-body text-[11px] tabular-nums text-cafe-muted">
                        {n}
                      </span>
                    </div>
                  ))}
                </div>
              </Plate>

              <Plate className="sm:col-span-3" title="Corners" note="0px default, 2px on controls. Nothing rounder.">
                <div className="flex flex-wrap items-end gap-3">
                  {[
                    ["0", "rounded-none"],
                    ["2", "rounded-[2px]"],
                  ].map(([n, c]) => (
                    <div key={n} className="flex flex-col items-center gap-1">
                      <span className={`h-12 w-12 border-2 border-cafe-ink ${c}`} />
                      <span className="font-cafe-body text-[11px] tabular-nums text-cafe-muted">
                        {n}px
                      </span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center gap-1 opacity-45">
                    <span className="h-12 w-12 rounded-full border-2 border-dashed border-cafe-borderstrong" />
                    <span className="font-cafe-body text-[11px] text-cafe-muted">
                      never
                    </span>
                  </div>
                </div>
              </Plate>

              <Plate className="sm:col-span-3" title="Borders" note="Hairline divides, 2px rules separate sections">
                <div className="flex flex-col gap-3 py-1">
                  <span className="h-px bg-cafe-border" />
                  <span className="h-px bg-cafe-borderstrong" />
                  <span className="h-[2px] bg-cafe-ink" />
                  <span className="h-px border-t border-dotted border-cafe-borderstrong" />
                  <span className="h-[3px] bg-cafe-tomato" />
                </div>
                <p className="mt-2 font-cafe-body text-[11px] leading-snug text-cafe-muted">
                  1px border · 1px strong · 2px rule · dotted leader · 3px accent
                </p>
              </Plate>

              <Plate className="sm:col-span-3" title="Shadow" note="Hard offset, no blur — ink on paper">
                <div className="flex flex-wrap items-end gap-4 py-2">
                  {[
                    ["none", ""],
                    ["raised", "shadow-[2px_3px_0_rgba(43,29,22,0.08)]"],
                    ["lifted", "shadow-[4px_4px_0_rgba(43,29,22,0.18)]"],
                  ].map(([n, c]) => (
                    <div key={n} className="flex flex-col items-center gap-1.5">
                      <span
                        className={`h-12 w-12 border border-cafe-border bg-cafe-cream ${c}`}
                      />
                      <span className="font-cafe-body text-[11px] text-cafe-muted">
                        {n}
                      </span>
                    </div>
                  ))}
                </div>
              </Plate>
            </div>
          </section>

          {/* ============ IV · COMPONENTS ============ */}
          <section aria-labelledby="components" className="mt-12">
            <SectionHead
              {...SECTIONS[3]}
              blurb="The parts the itinerary needs. Buttons, links and inputs here are live — hover and tab to them."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <Plate className="sm:col-span-5" title="Buttons" note="Primary carries the accent; secondary never does">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className={`${BTN} bg-cafe-tomato text-cafe-cream hover:bg-cafe-accenthover active:translate-y-px active:bg-cafe-accentpress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-ink`}
                  >
                    Add to day
                  </button>
                  <button
                    type="button"
                    className={`${BTN} border border-cafe-ink text-cafe-ink hover:bg-cafe-surface2 active:translate-y-px active:bg-cafe-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato`}
                  >
                    Details
                  </button>
                  <button type="button" disabled className={PRIMARY.disabled}>
                    Sold out
                  </button>
                </div>
              </Plate>

              <Plate className="sm:col-span-4" title="Link" note="Underlined always, accent on hover">
                <p className="font-cafe-body text-sm leading-relaxed">
                  Tickets are timed; book the{" "}
                  <a
                    href="#components"
                    className="font-semibold text-cafe-ink underline decoration-cafe-borderstrong decoration-1 underline-offset-[3px] hover:text-cafe-tomato hover:decoration-cafe-tomato hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
                  >
                    combined entry
                  </a>{" "}
                  with the Conciergerie.
                </p>
              </Plate>

              <Plate className="sm:col-span-3" title="Text input" note="Label above, hint below, 2px corner">
                <label className="flex flex-col gap-1.5">
                  <span className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em]">
                    Search the itinerary
                  </span>
                  <input
                    type="text"
                    placeholder="Sainte-Chapelle"
                    className={`${INPUT} border-cafe-borderstrong focus:border-cafe-tomato focus:outline-2 focus:outline-offset-2 focus:outline-cafe-tomato`}
                  />
                  <span className="font-cafe-body text-[11px] text-cafe-muted">
                    Matches titles and neighborhoods.
                  </span>
                </label>
              </Plate>

              <Plate className="sm:col-span-4" title="Select" note="Native control, same frame as the input">
                <label className="flex flex-col gap-1.5">
                  <span className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em]">
                    Sort by
                  </span>
                  <div className="relative">
                    <select
                      defaultValue="time"
                      className={`${INPUT} appearance-none border-cafe-borderstrong pr-9 focus:border-cafe-tomato focus:outline-2 focus:outline-offset-2 focus:outline-cafe-tomato`}
                    >
                      <option value="time">Time of day</option>
                      <option value="price">Price, low to high</option>
                      <option value="area">Neighbourhood</option>
                    </select>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cafe-muted"
                    >
                      ▾
                    </span>
                  </div>
                </label>
              </Plate>

              <Plate className="sm:col-span-4" title="Checkbox &amp; radio" note="Square for many, round for one">
                <div className="flex flex-col gap-3">
                  <span className="flex items-center gap-2.5 font-cafe-body text-sm">
                    <Box checked />
                    Booked already
                  </span>
                  <span className="flex items-center gap-2.5 font-cafe-body text-sm">
                    <Box />
                    Needs a reservation
                  </span>
                  <span className="mt-1 h-px bg-cafe-border" />
                  <span className="flex items-center gap-2.5 font-cafe-body text-sm">
                    <Box round checked />
                    Morning
                  </span>
                  <span className="flex items-center gap-2.5 font-cafe-body text-sm">
                    <Box round />
                    Afternoon
                  </span>
                </div>
              </Plate>

              <Plate className="sm:col-span-4" title="Toggle" note="For settings that apply at once">
                <div className="flex flex-col gap-3">
                  <span className="flex items-center gap-3 font-cafe-body text-sm">
                    <Toggle on />
                    Show walking times
                  </span>
                  <span className="flex items-center gap-3 font-cafe-body text-sm">
                    <Toggle />
                    Hide booked activities
                  </span>
                </div>
              </Plate>

              <Plate className="sm:col-span-7" title="Tabs" note="One day at a time; selected carries the 3px rule">
                <div className="flex overflow-x-auto border-b border-cafe-border">
                  {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((d, i) => (
                    <span
                      key={d}
                      aria-current={i === 1 ? "page" : undefined}
                      className={`shrink-0 border-b-[3px] px-3 py-2 font-cafe-body text-xs font-semibold uppercase tracking-[0.12em] ${
                        i === 1
                          ? "border-cafe-tomato text-cafe-ink"
                          : "border-transparent text-cafe-muted"
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </Plate>

              <Plate className="sm:col-span-5" title="Filter chips" note="Selected inverts; the accent is not spent here">
                <div className="flex flex-wrap gap-2">
                  {["All", "Museum", "Food", "Market", "Walk"].map((t, i) => (
                    <span
                      key={t}
                      className={`${CHIP} ${
                        i === 1
                          ? "border-cafe-ink bg-cafe-ink text-cafe-cream"
                          : "border-cafe-borderstrong text-cafe-ink"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Plate>

              <Plate className="sm:col-span-5" title="Badges" note="Status, not action. Never clickable.">
                <div className="flex flex-wrap gap-2">
                  <span className={`${CHIP} border-cafe-success text-cafe-success`}>
                    Booked
                  </span>
                  <span className={`${CHIP} border-cafe-borderstrong text-cafe-muted`}>
                    Free
                  </span>
                  <span className={`${CHIP} border-cafe-warning text-cafe-warning`}>
                    Closed Mondays
                  </span>
                  <span className={`${CHIP} border-cafe-error text-cafe-error`}>
                    Sold out
                  </span>
                </div>
              </Plate>

              <Plate className="sm:col-span-7" title="Card" note="One activity from the itinerary">
                <article className="border border-cafe-borderstrong bg-cafe-cream p-4 shadow-[2px_3px_0_rgba(43,29,22,0.08)]">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em] text-cafe-muted">
                      {ITEM.day} · {ITEM.area}
                    </p>
                    <span className={`${CHIP} border-cafe-borderstrong text-cafe-muted`}>
                      {ITEM.category}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-cafe-display text-2xl leading-tight">
                    {ITEM.title}
                  </h3>
                  <p className="mt-2 font-cafe-body text-sm leading-relaxed text-cafe-ink">
                    {ITEM.blurb}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3 border-t border-cafe-border pt-3">
                    <p className="font-cafe-body text-[12px] font-semibold uppercase tracking-[0.12em] tabular-nums">
                      {ITEM.time}–{ITEM.until} · {ITEM.price}
                    </p>
                    <span className={PRIMARY.rest}>Open details</span>
                  </div>
                </article>
              </Plate>

              <Plate
                title="List rows"
                note="The dense view; rest, hover and selected shown in order"
                className="sm:col-span-12"
              >
                <ul className="divide-y divide-cafe-border border-y border-cafe-border">
                  {ROWS.map(([time, title, meta, price], i) => (
                    <li
                      key={title}
                      className={`flex items-center gap-4 px-3 py-3 ${
                        i === 1 ? "bg-cafe-surface2" : ""
                      } ${i === 2 ? "border-l-[3px] border-l-cafe-tomato bg-cafe-tint pl-[9px]" : ""}`}
                    >
                      <span className="w-14 shrink-0 font-cafe-body text-sm font-semibold tabular-nums">
                        {time}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-cafe-body text-sm font-semibold">
                          {title}
                        </span>
                        <span className="block font-cafe-body text-[11px] text-cafe-muted">
                          {meta}
                        </span>
                      </span>
                      <span className="font-cafe-body text-sm tabular-nums">
                        {price}
                      </span>
                      <span
                        className="font-cafe-body text-[10px] uppercase tracking-[0.14em] text-cafe-muted"
                      >
                        {["rest", "hover", "selected"][i]}
                      </span>
                    </li>
                  ))}
                </ul>
              </Plate>

              <Plate
                title="Detail panel"
                note="Opens over a dimmed page; the accent sits on one action only"
                className="sm:col-span-12"
              >
                <div className="relative overflow-hidden border border-cafe-border bg-cafe-paper p-4">
                  {/* the dimmed page behind */}
                  <div className="pointer-events-none select-none opacity-30" aria-hidden="true">
                    <p className="font-cafe-display text-xl">Day 2 — Île de la Cité</p>
                    <p className="font-cafe-body text-sm text-cafe-ink">
                      09:15 Marché Bastille · 10:30 Sainte-Chapelle · 13:00 Lunch
                    </p>
                  </div>
                  <div className="mt-4 border-2 border-cafe-ink bg-cafe-cream shadow-[4px_4px_0_rgba(43,29,22,0.18)]">
                    <div className="flex items-start justify-between gap-4 border-b border-cafe-border p-4">
                      <div>
                        <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em] text-cafe-muted">
                          {ITEM.day} · {ITEM.time}–{ITEM.until}
                        </p>
                        <h3 className="mt-1 font-cafe-display text-3xl leading-tight">
                          {ITEM.title}
                        </h3>
                      </div>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center border border-cafe-borderstrong font-cafe-body text-sm"
                        aria-hidden="true"
                      >
                        ✕
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 p-4">
                      <p className="font-cafe-body text-sm leading-relaxed">
                        {ITEM.blurb}
                      </p>
                      <dl className="grid grid-cols-2 gap-x-6 gap-y-1 border-t border-cafe-border pt-3 font-cafe-body text-xs sm:grid-cols-4">
                        {[
                          ["Price", ITEM.price],
                          ["Duration", "1 h 30"],
                          ["Nearest", "Cité, ligne 4"],
                          ["Closed", "Mondays"],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <dt className="text-cafe-muted">{k}</dt>
                            <dd className="font-semibold tabular-nums">{v}</dd>
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

          {/* ============ V · CONTROL STATES ============ */}
          <section aria-labelledby="control-states" className="mt-12">
            <SectionHead
              {...SECTIONS[4]}
              blurb="One matrix: nine controls down, six states across. Every cell is drawn, so no state has to be imagined, and n/a is marked where a state does not apply."
            />
            {/* one matrix instead of seven stacked plates: control × state */}
            <div className="overflow-x-auto border border-cafe-border bg-cafe-cream shadow-[2px_3px_0_rgba(43,29,22,0.08)]">
              <table className="w-full min-w-[920px] border-collapse">
                <caption className="sr-only">
                  Every control in every applicable state
                </caption>
                <thead>
                  <tr className="border-b-2 border-cafe-ink/80">
                    <th scope="col" className="w-36 px-3 py-2 text-left font-cafe-body text-[10px] font-semibold uppercase tracking-[0.16em] text-cafe-muted">
                      Control
                    </th>
                    {STATES.map((st) => (
                      <th
                        key={st}
                        scope="col"
                        className="px-3 py-2 text-left font-cafe-body text-[10px] font-semibold uppercase tracking-[0.16em] text-cafe-muted"
                      >
                        {st}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CONTROLS.map((c) => (
                    <tr key={c.name} className="border-b border-cafe-border last:border-0 align-middle">
                      <th
                        scope="row"
                        className="px-3 py-3 text-left align-middle font-cafe-body text-xs font-semibold"
                      >
                        {c.name}
                        {c.note ? (
                          <span className="mt-0.5 block font-normal text-[10px] leading-snug text-cafe-muted">
                            {c.note}
                          </span>
                        ) : null}
                      </th>
                      {STATES.map((st) => (
                        <td key={st} className="px-3 py-3 align-middle">
                          {c.render(st) ?? (
                            <span className="font-cafe-body text-[11px] italic text-cafe-muted">
                              n/a
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 max-w-2xl font-cafe-body text-xs leading-relaxed text-cafe-muted">
              Focus is the same everywhere: a 2px outline offset 2px, in tomato
              on quiet controls and in espresso on the accent fill, so it stays
              visible on both. Pressed shifts down 1px, which is the only
              motion in the system.
            </p>
          </section>

          {/* ============ VI · UI STATES ============ */}
          <section aria-labelledby="ui-states" className="mt-12">
            <SectionHead
              {...SECTIONS[5]}
              blurb="What the list looks like when it has nothing, is waiting, has failed, or has just succeeded."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <Plate className="sm:col-span-5" title="Empty" note="No activities match the filters">
                <div className="flex flex-col items-start gap-3 border border-dashed border-cafe-borderstrong p-6">
                  <svg viewBox="0 0 48 32" className="h-10 w-16" aria-hidden="true" fill="none">
                    <rect x="1" y="1" width="46" height="30" stroke="#C3BAB0" strokeDasharray="4 3" />
                    <path d="M8 22h32M8 16h20" stroke="#C3BAB0" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                  <div>
                    <p className="font-cafe-display text-xl leading-tight">
                      Nothing on this day yet
                    </p>
                    <p className="mt-1 font-cafe-body text-sm text-cafe-muted">
                      Clear a filter, or add something from another day.
                    </p>
                  </div>
                  <span className={SECONDARY.rest}>Clear filters</span>
                </div>
              </Plate>

              <Plate className="sm:col-span-7" title="Loading" note="Skeleton rows, not a spinner on its own">
                <div className="flex flex-col gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex animate-pulse items-center gap-4">
                      <span className="h-4 w-12 bg-cafe-surface2" />
                      <span className="flex-1">
                        <span className="block h-3.5 w-2/3 bg-cafe-surface2" />
                        <span className="mt-1.5 block h-2.5 w-1/3 bg-cafe-surface2" />
                      </span>
                      <span className="h-4 w-10 bg-cafe-surface2" />
                    </div>
                  ))}
                  <p className="mt-1 flex items-center gap-2 font-cafe-body text-xs text-cafe-muted">
                    <span
                      className="inline-block h-3 w-3 animate-spin border-2 border-cafe-borderstrong border-t-cafe-ink"
                      aria-hidden="true"
                    />
                    Loading the day…
                  </p>
                </div>
              </Plate>

              <Plate className="sm:col-span-7" title="Error" note="A rule, an icon and a tint — never the accent">
                <div className="flex gap-3 border-l-[3px] border-cafe-error bg-cafe-error/8 p-4">
                  <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="none" stroke="#7B1E2B" strokeWidth="2" />
                    <path d="M10 5v6M10 14v1.5" stroke="#7B1E2B" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                  <div>
                    <p className="font-cafe-body text-sm font-semibold text-cafe-error">
                      That time is already taken
                    </p>
                    <p className="mt-1 font-cafe-body text-sm text-cafe-muted">
                      Lunch on rue des Rosiers runs until 14:00. Move it, or pick
                      a later slot.
                    </p>
                    <span className="mt-3 inline-block">
                      <span className={SECONDARY.rest}>Pick another time</span>
                    </span>
                  </div>
                </div>
              </Plate>

              <Plate className="sm:col-span-5" title="Success" note="Quiet and brief; it does not ask for anything">
                <div className="flex gap-3 border-l-[3px] border-cafe-success bg-cafe-success/8 p-4">
                  <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="none" stroke="#41662F" strokeWidth="2" />
                    <path d="M5.5 10.5l3 3L15 7" fill="none" stroke="#41662F" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                  <div>
                    <p className="font-cafe-body text-sm font-semibold text-cafe-success">
                      Added to Day 2
                    </p>
                    <p className="mt-1 font-cafe-body text-sm text-cafe-muted">
                      Sainte-Chapelle now sits between the market and lunch.
                    </p>
                  </div>
                </div>
              </Plate>
            </div>
          </section>

          <footer className="mt-14 border-t-2 border-cafe-ink/80 pt-5 font-cafe-body text-[11px] uppercase tracking-[0.18em] text-cafe-muted">
            6 sections · 12 color roles · 4 type roles · 13 components · 9 controls × 6 states
          </footer>
        </div>
      </div>
    </main>
  );
}
