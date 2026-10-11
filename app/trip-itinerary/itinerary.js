"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, CATEGORY_COLOR, DAYS, ITEMS } from "./data";

/* ------------------------------------------------------------------ *
 * Everything here happens in React state. Nothing is fetched, nothing
 * is stored — reloading the page resets the plan, which is intended.
 * Built from design system A (Café Terrace).
 * ------------------------------------------------------------------ */

const BTN =
  "inline-flex items-center justify-center gap-2 rounded-[2px] px-4 py-2 font-cafe-body text-xs font-semibold uppercase tracking-[0.12em] transition-colors disabled:cursor-not-allowed";

/* the accent fill is reserved for the single primary action on screen */
const PRIMARY = `${BTN} bg-cafe-tomato text-cafe-cream hover:bg-cafe-accenthover active:translate-y-px active:bg-cafe-accentpress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-ink disabled:bg-cafe-border disabled:text-cafe-ink/35`;

const SECONDARY = `${BTN} border border-cafe-ink text-cafe-ink hover:bg-cafe-surface2 active:translate-y-px active:bg-cafe-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato disabled:border-cafe-border disabled:text-cafe-ink/35`;

const CHIP_BASE =
  "inline-flex items-center gap-1.5 rounded-[2px] border px-2.5 py-1 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato";

function money(n) {
  return n === 0 ? "Free" : `€${n % 1 === 0 ? n : n.toFixed(2)}`;
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

export default function Itinerary() {
  const [day, setDay] = useState(1);
  const [cats, setCats] = useState([]); // empty = all categories
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);
  const [done, setDone] = useState([]); // ids marked as done, lost on reload
  const [hideDone, setHideDone] = useState(false);

  const panelRef = useRef(null);
  const lastTrigger = useRef(null);

  const dayItems = useMemo(() => ITEMS.filter((i) => i.day === day), [day]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dayItems.filter((i) => {
      if (cats.length && !cats.includes(i.category)) return false;
      if (hideDone && done.includes(i.id)) return false;
      if (!q) return true;
      return (
        i.title.toLowerCase().includes(q) ||
        i.area.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
      );
    });
  }, [dayItems, cats, query, hideDone, done]);

  const open = openId ? ITEMS.find((i) => i.id === openId) : null;

  /* day totals describe the whole day, not the filtered view */
  const totals = useMemo(() => {
    const cost = dayItems.reduce((s, i) => s + i.price, 0);
    const mins = dayItems.reduce((s, i) => s + minutesBetween(i.start, i.end), 0);
    return { stops: dayItems.length, cost, hours: Math.round((mins / 60) * 10) / 10 };
  }, [dayItems]);

  const filtered = cats.length > 0 || query.trim() !== "" || hideDone;

  /* close the panel on Escape and give focus back to whatever opened it */
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

  function toggleCat(c) {
    setCats((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  }

  function toggleDone(id) {
    setDone((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function clearFilters() {
    setCats([]);
    setQuery("");
    setHideDone(false);
  }

  function openItem(id, el) {
    lastTrigger.current = el;
    setOpenId(id);
  }

  const activeDay = DAYS.find((d) => d.n === day);

  return (
    <>
      {/* ---------------- day navigation ---------------- */}
      <nav aria-label="Days of the trip" className="mt-8 border-b-2 border-cafe-ink/80">
        <ul className="-mb-px flex overflow-x-auto">
          {DAYS.map((d) => {
            const current = d.n === day;
            return (
              <li key={d.n} className="shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setDay(d.n);
                    setOpenId(null);
                  }}
                  aria-current={current ? "page" : undefined}
                  className={`flex flex-col items-start gap-0.5 border-b-[3px] px-4 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cafe-tomato ${
                    current
                      ? "border-cafe-tomato"
                      : "border-transparent hover:bg-cafe-surface2"
                  }`}
                >
                  <span
                    className={`font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em] ${
                      current ? "text-cafe-tomato" : "text-cafe-muted"
                    }`}
                  >
                    Day {d.n}
                  </span>
                  <span
                    className={`font-cafe-display text-base leading-tight ${
                      current ? "text-cafe-ink" : "text-cafe-muted"
                    }`}
                  >
                    {d.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ---------------- the day ---------------- */}
      <header className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.18em] text-cafe-muted">
            Day {activeDay.n} · {activeDay.area}
          </p>
          <h2 className="mt-1 font-cafe-display text-4xl leading-none tracking-tight sm:text-5xl">
            {activeDay.title}
          </h2>
        </div>
        <dl className="flex gap-6 font-cafe-body text-xs">
          {[
            ["Stops", totals.stops],
            ["Planned", `${totals.hours} h`],
            ["Approx. cost", money(totals.cost)],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="uppercase tracking-[0.14em] text-cafe-muted">{k}</dt>
              <dd className="mt-0.5 font-cafe-display text-xl leading-none tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ---------------- filters ---------------- */}
      <section
        aria-label="Filter this day"
        className="mt-6 border border-cafe-border bg-cafe-cream p-4 shadow-[2px_3px_0_rgba(43,29,22,0.08)]"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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
                    style={
                      on
                        ? { background: CATEGORY_COLOR[c], borderColor: CATEGORY_COLOR[c] }
                        : { borderColor: CATEGORY_COLOR[c], color: CATEGORY_COLOR[c] }
                    }
                    className={`${CHIP_BASE} ${
                      on
                        ? "text-cafe-cream"
                        : "hover:bg-cafe-surface2 active:translate-y-px active:bg-cafe-tint"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0"
                      style={{ background: on ? "#F6EFE3" : CATEGORY_COLOR[c] }}
                    />
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <label className="flex flex-col gap-1.5">
              <span className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em]">
                Search
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Sainte-Chapelle"
                className="w-full rounded-[2px] border border-cafe-borderstrong bg-cafe-cream px-3 py-2 font-cafe-body text-sm text-cafe-ink placeholder:text-cafe-muted focus:border-cafe-tomato focus:outline-2 focus:outline-offset-2 focus:outline-cafe-tomato sm:w-56"
              />
            </label>

            {/* toggle: a real checkbox, drawn to match the design system */}
            <label className="group flex cursor-pointer items-center gap-2.5 py-2">
              <input
                type="checkbox"
                checked={hideDone}
                onChange={(e) => setHideDone(e.target.checked)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className="inline-flex h-[22px] w-10 items-center border-2 border-cafe-ink bg-cafe-cream p-[2px] transition-colors peer-checked:border-cafe-tomato peer-checked:bg-cafe-tomato peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cafe-tomato"
              >
                <span className="h-[14px] w-[14px] border border-cafe-ink bg-cafe-cream transition-transform group-has-[:checked]:translate-x-[14px] group-has-[:checked]:border-cafe-cream" />
              </span>
              <span className="font-cafe-body text-xs">Hide done</span>
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

      {/* ---------------- list + panel ---------------- */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        {/* the timeline */}
        <section aria-label={`Stops on day ${day}`}>
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
            <ol className="border-t border-cafe-border">
              {visible.map((i) => {
                const isOpen = i.id === openId;
                const isDone = done.includes(i.id);
                return (
                  <li key={i.id} className="border-b border-cafe-border">
                    <button
                      type="button"
                      onClick={(e) => openItem(i.id, e.currentTarget)}
                      aria-expanded={isOpen}
                      aria-controls="stop-detail"
                      style={{
                        borderLeftColor: isOpen
                          ? "var(--color-cafe-tomato)"
                          : CATEGORY_COLOR[i.category],
                      }}
                      className={`flex w-full items-start gap-4 border-l-4 py-4 pl-[8px] pr-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cafe-tomato ${
                        isOpen ? "bg-cafe-tint" : "hover:bg-cafe-surface2 active:bg-cafe-tint"
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

                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span
                            className={`font-cafe-display text-xl leading-tight ${
                              isDone ? "text-cafe-muted line-through" : ""
                            }`}
                          >
                            {i.title}
                          </span>
                          {isDone ? (
                            <span className="rounded-[2px] border border-cafe-success px-1.5 py-0.5 font-cafe-body text-[10px] font-semibold uppercase tracking-[0.1em] text-cafe-success">
                              Done
                            </span>
                          ) : null}
                          {i.closed ? (
                            <span className="rounded-[2px] border border-cafe-warning px-1.5 py-0.5 font-cafe-body text-[10px] font-semibold uppercase tracking-[0.1em] text-cafe-warning">
                              Closed {i.closed}
                            </span>
                          ) : null}
                        </span>
                        <span className="mt-0.5 block font-cafe-body text-[11px] uppercase tracking-[0.12em]">
                          <span style={{ color: CATEGORY_COLOR[i.category] }} className="font-semibold">
                            {i.category}
                          </span>
                          <span className="text-cafe-muted"> · {i.area}</span>
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
          )}
        </section>

        {/* ---------------- detail panel ----------------
            desktop: a sticky column beside the list
            mobile:  a bottom sheet over a scrim                        */}
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
              ? "fixed inset-x-0 bottom-0 z-30 max-h-[82vh] overflow-y-auto border-t-2 border-cafe-ink bg-cafe-cream shadow-[0_-4px_0_rgba(43,29,22,0.18)] lg:sticky lg:top-6 lg:z-auto lg:max-h-none lg:overflow-visible lg:border-2 lg:border-cafe-ink lg:shadow-[4px_4px_0_rgba(43,29,22,0.18)]"
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
              <div
                className="flex items-start justify-between gap-3 border-b-2 p-4"
                style={{
                  borderBottomColor: CATEGORY_COLOR[open.category],
                  background: `color-mix(in srgb, ${CATEGORY_COLOR[open.category]} 10%, #F6EFE3)`,
                }}
              >
                <div className="min-w-0">
                  <p
                    className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: CATEGORY_COLOR[open.category] }}
                  >
                    {open.category} · Day {open.day} · {open.start}–{open.end}
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
                    ["Price", money(open.price)],
                    ["Duration", duration(open.start, open.end)],
                    [
                      "Category",
                      <span key="c" style={{ color: CATEGORY_COLOR[open.category] }}>
                        {open.category}
                      </span>,
                    ],
                    ["Nearest", open.metro],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-cafe-muted">{k}</dt>
                      <dd className="mt-0.5 font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>

                {open.closed ? (
                  <p className="flex gap-2 border-l-[3px] border-cafe-warning bg-cafe-warning/8 p-3 font-cafe-body text-xs leading-relaxed text-cafe-ink">
                    <span className="font-semibold text-cafe-warning">Closed {open.closed}.</span>
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

                {done.includes(open.id) ? (
                  <p className="flex items-center gap-2 border-l-[3px] border-cafe-success bg-cafe-success/8 p-3 font-cafe-body text-xs font-semibold text-cafe-success">
                    Marked as done
                  </p>
                ) : null}

                <div className="flex flex-wrap gap-3 border-t border-cafe-border pt-3">
                  <button
                    type="button"
                    onClick={() => toggleDone(open.id)}
                    className={done.includes(open.id) ? SECONDARY : PRIMARY}
                  >
                    {done.includes(open.id) ? "Mark as not done" : "Mark as done"}
                  </button>
                  <button type="button" onClick={() => setOpenId(null)} className={SECONDARY}>
                    Back to the day
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* resting state of the desktop panel */
            <div className="p-6">
              <p className="font-cafe-display text-xl leading-tight text-cafe-ink">
                Pick a stop
              </p>
              <p className="mt-1 font-cafe-body text-sm text-cafe-muted">
                Choose anything on the left to read the detail, the nearest
                métro and what is worth knowing before you go.
              </p>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
