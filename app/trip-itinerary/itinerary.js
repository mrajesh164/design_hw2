"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { BLOCKS, CATEGORIES, DAYS, ITEMS, TRIP, blockOf } from "./data";
import { STOP_PHOTOS } from "./photos";

/* ------------------------------------------------------------------ *
 * Everything here happens in React state. Nothing is fetched, nothing
 * is stored — reloading the page resets the plan, which is intended.
 * Built from design system A (Café Terrace).
 * ------------------------------------------------------------------ */

const BLOCK_COLOR = Object.fromEntries(BLOCKS.map((b) => [b.id, b.color]));

const BTN =
  "inline-flex items-center justify-center gap-2 rounded-[2px] px-4 py-2 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors disabled:cursor-not-allowed";

/* the accent fill is reserved for the single primary action on screen */
const PRIMARY = `${BTN} bg-cafe-tomato text-cafe-cream hover:bg-cafe-accenthover active:translate-y-px active:bg-cafe-accentpress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-ink disabled:bg-cafe-border disabled:text-cafe-ink/35`;

const SECONDARY = `${BTN} border border-cafe-ink text-cafe-ink hover:bg-cafe-surface2 active:translate-y-px active:bg-cafe-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato disabled:border-cafe-border disabled:text-cafe-ink/35`;

const STEP =
  "flex h-8 w-8 shrink-0 items-center justify-center border border-cafe-ink font-cafe-body text-sm transition-colors hover:bg-cafe-surface2 active:translate-y-px active:bg-cafe-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato disabled:border-cafe-border disabled:text-cafe-ink/35 disabled:active:translate-y-0";

const CHIP_BASE =
  "inline-flex items-center gap-1.5 rounded-[2px] border px-2.5 py-1 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato";

/* grouped by hand rather than with toLocaleString, which can disagree
   between the prerender and the browser and break hydration */
function money(n) {
  if (n === 0) return "Free";
  const [whole, cents] = (n % 1 === 0 ? String(n) : n.toFixed(2)).split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `€${grouped}${cents ? `.${cents}` : ""}`;
}

function areaLabel(area) {
  if (!/^\d/.test(area)) return area;
  return `${area} arrondissement${/[&,]/.test(area) ? "s" : ""}`;
}

function minutesBetween(a, b) {
  const [ah, am] = a.split(":").map(Number);
  const [bh, bm] = b.split(":").map(Number);
  return bh * 60 + bm - (ah * 60 + am);
}

function duration(a, b) {
  const m = minutesBetween(a, b);
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (h === 0) return `${r} min`;
  return r === 0 ? `${h} h` : `${h} h ${r}`;
}

/* trip totals and the spend breakdown — computed, not typed in */
const STOPS_SPEND = ITEMS.reduce((s, i) => s + i.price, 0);
const LODGING_SHARE = TRIP.lodging.total / TRIP.lodging.people;
/* one person's share, then what the pair actually pays: the flat is shared,
   the fares and the entries are not */
const TRIP_SPEND = LODGING_SHARE + TRIP.fares.total + STOPS_SPEND;
const TRIP_SPEND_PARTY =
  TRIP.lodging.total + TRIP.lodging.people * (TRIP.fares.total + STOPS_SPEND);

/* the three parts of the budget, biggest first, so lodging and fares are
   read before the category bars rather than inferred from them */
const SPEND_PARTS = [
  {
    name: "Lodging",
    total: LODGING_SHARE,
    note: `${TRIP.lodging.nights} nights × €${TRIP.lodging.nightly}, split ${TRIP.lodging.people} ways`,
  },
  { name: "Local transit", total: TRIP.fares.total, note: TRIP.fares.note },
  {
    name: "Entries & meals",
    total: STOPS_SPEND,
    note: `All ${ITEMS.length} stops; every fare is covered above`,
  },
];
const BY_CATEGORY = CATEGORIES.map((c) => ({
  name: c,
  total: ITEMS.filter((i) => i.category === c).reduce((s, i) => s + i.price, 0),
})).sort((a, b) => b.total - a.total);
const MAX_CATEGORY = Math.max(...BY_CATEGORY.map((c) => c.total));

/* one heading pattern, used three times, so the page has a visible spine */
function SectionHead({ id, title, blurb, aside, control }) {
  return (
    <header className="mb-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-b-2 border-cafe-ink/80 pb-2">
      <div>
        <div className="flex items-center gap-3">
          <h2 id={id} className="font-cafe-display text-3xl leading-none tracking-tight">
            {title}
          </h2>
          {control}
        </div>
        {blurb ? (
          <p className="mt-1 font-cafe-body text-xs italic text-cafe-muted">{blurb}</p>
        ) : null}
      </div>
      {aside}
    </header>
  );
}

export default function Itinerary() {
  const [day, setDay] = useState(1);
  const [cats, setCats] = useState([]); // empty = all categories
  const [openId, setOpenId] = useState(null);
  const [visited, setVisited] = useState([]); // lost on reload, deliberately
  const [hideVisited, setHideVisited] = useState(false);

  const panelRef = useRef(null);
  const lastTrigger = useRef(null);

  const dayItems = useMemo(() => ITEMS.filter((i) => i.day === day), [day]);

  const visible = useMemo(
    () =>
      dayItems.filter((i) => {
        if (cats.length && !cats.includes(i.category)) return false;
        if (hideVisited && visited.includes(i.id)) return false;
        return true;
      }),
    [dayItems, cats, hideVisited, visited],
  );

  const open = openId ? ITEMS.find((i) => i.id === openId) : null;

  const totals = useMemo(() => {
    const cost = dayItems.reduce((s, i) => s + i.price, 0);
    const mins = dayItems.reduce((s, i) => s + minutesBetween(i.start, i.end), 0);
    return { stops: dayItems.length, cost, hours: Math.round((mins / 60) * 10) / 10 };
  }, [dayItems]);

  const filtered = cats.length > 0 || hideVisited;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpenId(null);
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open && lastTrigger.current) {
      lastTrigger.current.focus?.();
      lastTrigger.current = null;
    }
  }, [open]);

  function goToDay(n) {
    setDay(n);
    setOpenId(null);
  }

  function toggleCat(c) {
    setCats((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));
  }

  function toggleVisited(id) {
    setVisited((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }

  function clearFilters() {
    setCats([]);
    setHideVisited(false);
  }

  const activeDay = DAYS.find((d) => d.n === day);

  return (
    <>
      {/* ================= THE TRIP ================= */}
      <section id="section-trip" aria-labelledby="trip" className="mt-12 scroll-mt-6">
        <SectionHead
          id="trip"
          title="The Trip"
          blurb="What the week costs, where you sleep, and how you get around."
        />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid grid-cols-2 gap-px border border-cafe-border bg-cafe-border sm:grid-cols-4">
            {[
              ["Dates", TRIP.dates.replace(" 2026", ""), `2026 · ${TRIP.nights} nights`],
              ["Travelers", TRIP.lodging.people, "sharing one flat"],
              ["Stops", ITEMS.length, "across 7 days"],
              ["Spend per Person", money(TRIP_SPEND), "lodging, fares & stops"],
            ].map(([k, v, sub]) => (
              <div key={k} className="bg-cafe-cream p-4">
                <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.16em] text-cafe-muted">
                  {k}
                </p>
                <p className="mt-1 font-cafe-display text-2xl leading-none tracking-tight">
                  {v}
                </p>
                <p className="mt-1 font-cafe-body text-[11px] text-cafe-muted">{sub}</p>
              </div>
            ))}
          </div>

          <div className="border border-cafe-border bg-cafe-cream p-4">
            <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.16em] text-cafe-muted">
              Base &amp; Getting Around
            </p>
            <p className="mt-1.5 font-cafe-display text-lg leading-tight">{TRIP.base}</p>
            <dl className="mt-2 space-y-1 font-cafe-body text-[11px]">
              {[
                ["Check in", TRIP.checkIn],
                ["Check out", TRIP.checkOut],
                ["Transit", TRIP.transit],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <dt className="w-16 shrink-0 text-cafe-muted">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-4 border border-cafe-border bg-cafe-cream p-4">
          <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.16em] text-cafe-muted">
            Planned Spend
          </p>

          {/* two columns: the breakdown pays for the width the single-column
              version was leaving empty between each label and its figure */}
          <div className="mt-3 grid gap-x-10 gap-y-6 lg:grid-cols-2">
            <dl className="divide-y divide-cafe-border border-y border-cafe-border">
              {SPEND_PARTS.map((part) => (
                <div key={part.name} className="py-2.5">
                  <div className="flex items-baseline justify-between gap-x-4">
                    <dt className="font-cafe-body text-sm font-semibold">{part.name}</dt>
                    <dd className="font-cafe-display text-lg leading-none tabular-nums">
                      {money(part.total)}
                    </dd>
                  </div>
                  <p className="mt-0.5 font-cafe-body text-[11px] text-cafe-muted">
                    {part.note}
                  </p>
                </div>
              ))}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 bg-cafe-tint px-2 py-3">
                <dt className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Week total
                </dt>
                <dd className="flex items-baseline gap-4">
                  <span className="font-cafe-display text-2xl leading-none tabular-nums">
                    {money(TRIP_SPEND)}
                    <span className="ml-1.5 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em] text-cafe-muted">
                      each
                    </span>
                  </span>
                  <span className="font-cafe-display text-lg leading-none tabular-nums text-cafe-muted">
                    {money(TRIP_SPEND_PARTY)}
                    <span className="ml-1.5 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em]">
                      for two
                    </span>
                  </span>
                </dd>
              </div>
            </dl>

            <div>
              <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.16em] text-cafe-muted">
                Entries &amp; Meals, by Category
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {BY_CATEGORY.map((c) => (
                  <li key={c.name} className="flex items-center gap-3">
                    <span className="w-20 shrink-0 font-cafe-body text-xs">{c.name}</span>
                    <span className="flex h-4 min-w-px flex-1 items-center">
                      {c.total === 0 ? (
                        /* a stub bar read as a rendering fault, so nothing is drawn */
                        <span className="h-px w-full bg-cafe-border" />
                      ) : (
                        <span
                          className="h-full rounded-r-[3px] bg-cafe-clay"
                          style={{ width: `${(c.total / MAX_CATEGORY) * 100}%` }}
                        />
                      )}
                    </span>
                    <span className="w-14 shrink-0 text-right font-cafe-body text-xs tabular-nums">
                      {money(c.total)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE WEEK ================= */}
      <section id="section-week" aria-labelledby="week" className="mt-14 scroll-mt-6">
        <SectionHead
          id="week"
          title="The Week"
          blurb="Pick a day to open its schedule below. All prices shown are per person."
        />
        <ol className="grid grid-cols-2 gap-px border border-cafe-border bg-cafe-border sm:grid-cols-4 lg:grid-cols-7">
          {DAYS.map((d) => {
            const items = ITEMS.filter((i) => i.day === d.n);
            const current = d.n === day;
            return (
              /* seven cards in a two- or four-column grid leave the last one
                 orphaned beside an empty cell, so it takes the spare column */
              <li key={d.n} className={d.n === DAYS.length ? "col-span-2 lg:col-span-1" : undefined}>
                <button
                  type="button"
                  onClick={() => goToDay(d.n)}
                  aria-current={current ? "true" : undefined}
                  className={`flex h-full w-full flex-col gap-1 border-l-4 p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cafe-tomato ${
                    current
                      ? "border-l-cafe-ink bg-cafe-tint"
                      : "border-l-transparent bg-cafe-cream hover:bg-cafe-surface2 active:bg-cafe-tint"
                  }`}
                >
                  <span className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em] text-cafe-muted">
                    Day {d.n} · {d.date}
                  </span>
                  <span className="font-cafe-display text-base leading-tight">{d.title}</span>
                  {/* one bar per stop, in time order, so the count is visible */}
                  <span className="mt-auto flex gap-[2px] pt-2" aria-hidden="true">
                    {items.map((i) => (
                      <span
                        key={i.id}
                        className="h-1.5 flex-1"
                        style={{ background: BLOCK_COLOR[blockOf(i.start)] }}
                      />
                    ))}
                  </span>
                  {/* the bar is decorative, so its breakdown is read out here */}
                  <span className="sr-only">
                    {BLOCKS.map((b) => {
                      const n = items.filter((i) => blockOf(i.start) === b.id).length;
                      return n === 0 ? null : `${n} ${b.label.toLowerCase()}. `;
                    })}
                  </span>
                  <span className="font-cafe-body text-[11px] text-cafe-muted">
                    {items.length} stops · {money(items.reduce((s, i) => s + i.price, 0))}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ================= THE DAY ================= */}
      <section id="section-the-day" aria-labelledby="the-day" className="mt-14 scroll-mt-6">
        <SectionHead
          id="the-day"
          title={`Day ${activeDay.n} — ${activeDay.title}`}
          blurb={`${activeDay.date} · ${areaLabel(activeDay.area)}`}
          control={
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => goToDay(day - 1)}
                disabled={day === 1}
                className={STEP}
              >
                <span aria-hidden="true">‹</span>
                <span className="sr-only">Previous day</span>
              </button>
              <button
                type="button"
                onClick={() => goToDay(day + 1)}
                disabled={day === DAYS.length}
                className={STEP}
              >
                <span aria-hidden="true">›</span>
                <span className="sr-only">Next day</span>
              </button>
            </div>
          }
          aside={
            <div className="flex items-end gap-5">
              <dl className="flex gap-5 font-cafe-body text-xs">
                {[
                  ["Stops", totals.stops],
                  ["Planned", `${totals.hours} h`],
                  ["Cost Per Person", money(totals.cost)],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="uppercase tracking-[0.14em] text-cafe-muted">{k}</dt>
                    <dd className="mt-0.5 font-cafe-display text-lg leading-none tabular-nums">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          }
        />

        {/* --- filters --- */}
        <section
          aria-label="Filter this day"
          className="border border-cafe-border bg-cafe-cream p-4 shadow-[2px_3px_0_rgba(43,29,22,0.08)]"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-12">
            <div className="flex flex-col gap-2">
              <span
                id="cat-label"
                className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em]"
              >
                Category
              </span>
              <div className="flex flex-wrap gap-2" role="group" aria-labelledby="cat-label">
                {CATEGORIES.map((c) => {
                  const on = cats.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleCat(c)}
                      className={`${CHIP_BASE} ${
                        on
                          ? "border-cafe-ink bg-cafe-ink text-cafe-cream"
                          : "border-cafe-borderstrong text-cafe-ink hover:bg-cafe-surface2 active:translate-y-px active:bg-cafe-tint"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <label className="group flex cursor-pointer items-center gap-2.5 py-2">
                <input
                  type="checkbox"
                  checked={hideVisited}
                  onChange={(e) => setHideVisited(e.target.checked)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="inline-flex h-[22px] w-10 items-center border-2 border-cafe-ink bg-cafe-cream p-[2px] transition-colors group-hover:bg-cafe-surface2 group-active:bg-cafe-tint peer-checked:border-cafe-tomato peer-checked:bg-cafe-tomato peer-checked:group-hover:bg-cafe-accenthover peer-checked:group-active:bg-cafe-accentpress peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cafe-tomato"
                >
                  <span className="h-[14px] w-[14px] border border-cafe-ink bg-cafe-cream transition-transform group-has-[:checked]:translate-x-[14px] group-has-[:checked]:border-cafe-cream" />
                </span>
                <span className="font-cafe-body text-xs">Hide visited</span>
              </label>
            </div>
          </div>

          {filtered ? (
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-cafe-border pt-3">
              <p className="font-cafe-body text-xs text-cafe-muted" aria-live="polite">
                Showing <span className="font-semibold text-cafe-ink">{visible.length}</span> of{" "}
                {dayItems.length} stops on this day
              </p>
              <button type="button" onClick={clearFilters} className={SECONDARY}>
                Clear filters
              </button>
            </div>
          ) : null}
        </section>

        {/* --- schedule + detail --- */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <div>
            <div className="mb-4 border-b border-cafe-border pb-2">
              <span className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em]">
                Schedule
              </span>
            </div>

            {visible.length === 0 ? (
              <div className="flex flex-col items-start gap-3 border border-dashed border-cafe-borderstrong p-8">
                <svg viewBox="0 0 48 32" className="h-10 w-16" aria-hidden="true" fill="none">
                  <rect x="1" y="1" width="46" height="30" stroke="#C3BAB0" strokeDasharray="4 3" />
                  <path d="M8 22h32M8 16h20" stroke="#C3BAB0" strokeWidth="2" strokeLinecap="square" />
                </svg>
                <div>
                  <p className="font-cafe-display text-2xl leading-tight">Nothing matches</p>
                  <p className="mt-1 font-cafe-body text-sm text-cafe-muted">
                    No stop on day {day} fits those filters. Clear them, or try another day.
                  </p>
                </div>
                <button type="button" onClick={clearFilters} className={SECONDARY}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {BLOCKS.map((b) => {
                  const inBlock = visible.filter((i) => blockOf(i.start) === b.id);
                  if (inBlock.length === 0) return null;
                  return (
                    <section key={b.id} aria-labelledby={`block-${b.id}`}>
                      {/* each phase of the day wears its own color, at a tint
                          light enough to leave ink at 12.9:1 and muted at 5.1 */}
                      <h3
                        id={`block-${b.id}`}
                        className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b-2 px-2.5 py-1.5"
                        style={{
                          borderBottomColor: b.color,
                          background: `color-mix(in srgb, ${b.color} 8%, #F6EFE3)`,
                        }}
                      >
                        <span
                          aria-hidden="true"
                          className="h-3 w-3 shrink-0 self-center"
                          style={{ background: b.color }}
                        />
                        <span className="font-cafe-display text-xl leading-none">{b.label}</span>
                        <span className="font-cafe-body text-[11px] text-cafe-muted">
                          {b.range} · {inBlock.length} {inBlock.length === 1 ? "stop" : "stops"}
                        </span>
                      </h3>
                      <ol>
                        {inBlock.map((i) => {
                          const isOpen = i.id === openId;
                          const isVisited = visited.includes(i.id);
                          return (
                            <li key={i.id} className="border-b border-cafe-border last:border-0">
                              <button
                                type="button"
                                onClick={(e) => {
                                  lastTrigger.current = e.currentTarget;
                                  setOpenId(i.id);
                                }}
                                aria-expanded={isOpen}
                                aria-controls="stop-detail"
                                style={{
                                  borderLeftColor: isOpen
                                    ? "var(--color-cafe-ink)"
                                    : b.color,
                                }}
                                className={`flex w-full items-start gap-4 border-l-4 py-4 pl-[8px] pr-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cafe-tomato ${
                                  isOpen
                                    ? "bg-cafe-tint"
                                    : "hover:bg-cafe-surface2 active:bg-cafe-tint"
                                }`}
                              >
                                <span className="w-14 shrink-0 pt-0.5">
                                  <span className="block font-cafe-body text-sm font-semibold tabular-nums">
                                    {i.start}
                                  </span>
                                  <span className="block font-cafe-body text-[11px] text-cafe-muted">
                                    {duration(i.start, i.end)}
                                  </span>
                                </span>

                                {/* decorative here — the title already names the place */}
                                <span className="hidden shrink-0 border border-cafe-ink/15 bg-cafe-cream p-1 sm:block">
                                  <Image
                                    src={`/trip/stops/${i.id}.jpg`}
                                    alt=""
                                    width={900}
                                    height={900}
                                    sizes="96px"
                                    className="block h-12 w-16 object-cover"
                                  />
                                </span>

                                <span className="min-w-0 flex-1">
                                  <span className="flex flex-wrap items-center gap-2">
                                    <span
                                      className={`font-cafe-display text-xl leading-tight ${
                                        isVisited ? "text-cafe-muted line-through" : ""
                                      }`}
                                    >
                                      {i.title}
                                    </span>
                                    {isVisited ? (
                                      <span className="rounded-[2px] border border-cafe-success px-1.5 py-0.5 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.1em] text-cafe-success">
                                        Visited
                                      </span>
                                    ) : null}
                                    {i.closed ? (
                                      <span className="rounded-[2px] border border-cafe-warning px-1.5 py-0.5 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.1em] text-cafe-warning">
                                        Closed {i.closed}
                                      </span>
                                    ) : null}
                                  </span>
                                  <span className="mt-0.5 block font-cafe-body text-[11px] uppercase tracking-[0.12em] text-cafe-muted">
                                    {i.category} · {i.area}
                                  </span>
                                </span>

                                <span className="shrink-0 pt-0.5 text-right">
                                  <span className="block font-cafe-body text-sm tabular-nums">
                                    {money(i.price)}
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className="mt-0.5 block font-cafe-body text-xs text-cafe-muted"
                                  >
                                    →
                                  </span>
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ol>
                    </section>
                  );
                })}
              </div>
            )}
          </div>

          {/* detail panel: sticky column on desktop, bottom sheet on mobile */}
          {open ? (
            <div
              className="fixed inset-0 z-20 bg-cafe-ink/45 lg:hidden"
              onClick={() => setOpenId(null)}
              aria-hidden="true"
            />
          ) : null}

          <aside
            id="stop-detail"
            className={
              open
                ? "fixed inset-x-0 bottom-0 z-30 max-h-[82vh] overflow-y-auto overscroll-contain border-t-2 border-cafe-ink bg-cafe-cream shadow-[0_-4px_0_rgba(43,29,22,0.18)] lg:sticky lg:top-6 lg:z-auto lg:max-h-none lg:overflow-visible lg:border-2 lg:border-cafe-ink lg:shadow-[4px_4px_0_rgba(43,29,22,0.18)]"
                : "hidden lg:sticky lg:top-6 lg:block lg:border lg:border-dashed lg:border-cafe-borderstrong"
            }
          >
            {open ? (
              <div
                ref={panelRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="false"
                aria-labelledby="stop-detail-title"
                className="outline-none"
              >
                <div className="border-b border-cafe-border bg-cafe-paper p-2">
                  <Image
                    src={`/trip/stops/${open.id}.jpg`}
                    alt={STOP_PHOTOS[open.id].alt}
                    width={900}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="block h-40 w-full object-cover"
                  />
                  <p className="mt-1.5 font-cafe-body text-[11px] leading-snug text-cafe-muted">
                    {STOP_PHOTOS[open.id].note ? `${STOP_PHOTOS[open.id].note}. ` : ""}
                    <a
                      href={STOP_PHOTOS[open.id].url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-cafe-muted underline-offset-2 hover:text-cafe-tomato hover:decoration-cafe-tomato active:text-cafe-accentpress active:decoration-cafe-accentpress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
                    >
                      {STOP_PHOTOS[open.id].by}
                    </a>
                    , {STOP_PHOTOS[open.id].src} · {STOP_PHOTOS[open.id].lic}
                  </p>
                </div>
                <div
                  className="flex items-start justify-between gap-3 border-b-2 p-4"
                  style={{
                    borderBottomColor: BLOCK_COLOR[blockOf(open.start)],
                    background: `color-mix(in srgb, ${BLOCK_COLOR[blockOf(open.start)]} 10%, #F6EFE3)`,
                  }}
                >
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em] text-cafe-ink">
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 shrink-0"
                        style={{ background: BLOCK_COLOR[blockOf(open.start)] }}
                      />
                      {blockOf(open.start)} · Day {open.day} · {open.start}–{open.end}
                    </p>
                    <h3
                      id="stop-detail-title"
                      className="mt-1 font-cafe-display text-3xl leading-tight"
                    >
                      {open.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenId(null)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center border border-cafe-borderstrong font-cafe-body text-sm transition-colors hover:bg-cafe-surface2 active:bg-cafe-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
                  >
                    <span aria-hidden="true">✕</span>
                    <span className="sr-only">Close details</span>
                  </button>
                </div>

                <div className="flex flex-col gap-4 p-4">
                  <p className="font-cafe-body text-sm leading-relaxed">{open.note}</p>

                  <dl className="grid grid-cols-2 gap-x-6 gap-y-2 border-t border-cafe-border pt-3 font-cafe-body text-xs">
                    {[
                      ["Price Per Person", money(open.price)],
                      ["Duration", duration(open.start, open.end)],
                      ["Category", open.category],
                      ["Nearest Métro", open.metro],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-cafe-muted">{k}</dt>
                        <dd className="mt-0.5 font-semibold">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  {open.closed ? (
                    <p className="flex gap-2 border-l-[3px] border-cafe-warning bg-cafe-warning/8 p-3 font-cafe-body text-xs leading-relaxed text-cafe-ink">
                      <span className="font-semibold text-cafe-warning">
                        Closed {open.closed}.
                      </span>
                      Check before you build the day around it.
                    </p>
                  ) : null}

                  <div className="border-t border-cafe-border pt-3">
                    <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em] text-cafe-muted">
                      Worth knowing
                    </p>
                    <p className="mt-1 font-cafe-display text-base italic leading-snug">
                      {open.tip}
                    </p>
                  </div>

                  {visited.includes(open.id) ? (
                    <p className="flex items-center gap-2 border-l-[3px] border-cafe-success bg-cafe-success/8 p-3 font-cafe-body text-xs font-semibold text-cafe-success">
                      Marked as visited
                    </p>
                  ) : null}

                  <div className="sticky bottom-0 -mx-4 -mb-4 flex flex-wrap gap-3 border-t border-cafe-border bg-cafe-cream px-4 pb-4 pt-3 lg:static lg:mx-0 lg:mb-0 lg:px-0 lg:pb-0">
                    <button
                      type="button"
                      onClick={() => toggleVisited(open.id)}
                      className={visited.includes(open.id) ? SECONDARY : PRIMARY}
                    >
                      {visited.includes(open.id) ? "Mark as not visited" : "Mark as visited"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <p className="font-cafe-display text-xl leading-tight text-cafe-ink">Pick a stop</p>
                <p className="mt-1 font-cafe-body text-sm text-cafe-muted">
                  Choose anything on the left to read the detail, the nearest
                  métro and what is worth knowing before you go.
                </p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
