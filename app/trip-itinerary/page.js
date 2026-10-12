import Link from "next/link";
import Itinerary from "./itinerary";
import Image from "next/image";
import { HERO_PHOTO, STOP_PHOTOS } from "./photos";
import { ITEMS } from "./data";

export const metadata = {
  title: "Paris in a Week · A seven-day itinerary",
  description:
    "A one-week Paris plan, day by day: filter by category and open any stop for the detail. Static, with nothing saved.",
};

const JUMP =
  "inline-flex items-center gap-2 rounded-[2px] border border-cafe-ink px-3.5 py-2 font-cafe-body text-[11px] font-semibold uppercase tracking-[0.12em] text-cafe-ink transition-colors hover:bg-cafe-surface2 active:translate-y-px active:bg-cafe-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato";

const SECTIONS = [
  { href: "#section-trip", label: "The Trip" },
  { href: "#section-week", label: "The Week" },
  { href: "#section-the-day", label: "Daily Plans" },
];

const PAPER_TEXTURE = {
  backgroundImage:
    "radial-gradient(rgba(43,29,22,0.045) 1px, transparent 1px), radial-gradient(rgba(43,29,22,0.03) 1px, transparent 1px)",
  backgroundSize: "18px 18px, 11px 11px",
  backgroundPosition: "0 0, 6px 9px",
};

export default function TripItinerary() {
  return (
    <main className="min-h-screen bg-cafe-paper text-cafe-ink">
      <div className="min-h-screen" style={PAPER_TEXTURE}>
        <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
          <Link
            href="/"
            className="font-cafe-body text-[11px] uppercase tracking-[0.2em] text-cafe-muted underline-offset-4 hover:text-cafe-tomato hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
          >
            ← Back to hub
          </Link>

          {/* masthead: the one place the display face runs at full size */}
          <header className="mt-6 grid items-start gap-6 border-y-2 border-cafe-ink/80 py-7 lg:grid-cols-12 lg:items-stretch lg:gap-10">
            <div className="lg:col-span-7 lg:pt-1">
              <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.3em] text-cafe-tomato">
                Seven days · Paris, on foot
              </p>
              <h1 className="mt-2 font-cafe-display text-6xl leading-[0.9] tracking-tight sm:text-7xl">
                Paris in a Week
              </h1>
              <p className="mt-5 max-w-xl font-cafe-body text-base leading-relaxed">
                Discover Paris and everything it has to offer, one
                neighborhood a day, in roughly the order you would walk it,
                with the rest saved for the next trip. Choose a section below
                to start exploring the week.
              </p>

              {/* jump links, so the three sections are reachable without scrolling */}
              <nav aria-label="Jump to a section" className="mt-5 flex flex-wrap gap-2">
                {SECTIONS.map((sx) => (
                  <a key={sx.href} href={sx.href} className={JUMP}>
                    {sx.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* a printed photograph, pinned to the page */}
            <figure className="flex flex-col lg:col-span-5 lg:pt-1">
              <div className="flex min-h-0 flex-1 border border-cafe-ink/15 bg-cafe-cream p-2 shadow-[4px_4px_0_rgba(43,29,22,0.18)]">
                <Image
                  src="/trip/hero.jpg"
                  alt="A cobbled Montmartre street at golden hour, with two people walking past the pink corner facade of La Maison Rose and the city spread out beyond."
                  width={1100}
                  height={825}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="block h-52 w-full object-cover sm:h-60 lg:h-auto lg:min-h-[13rem] lg:flex-1"
                />
              </div>
              <figcaption className="mt-2 font-cafe-body text-[11px] text-cafe-muted">
                Rue de l&rsquo;Abreuvoir, Montmartre — day 4.{" "}
                <a
                  href="https://unsplash.com/photos/cobblestone-street-with-buildings-and-people-at-sunset-0KLCWI3QkIk"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-cafe-muted underline-offset-2 hover:text-cafe-tomato hover:decoration-cafe-tomato active:text-cafe-accentpress active:decoration-cafe-accentpress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
                >
                  Lens by Benji
                </a>
                , Unsplash.
              </figcaption>
            </figure>
          </header>

          <Itinerary />

          {/* several of these licenses legally require a visible credit, so
              this is a real credits list rather than a courtesy one */}
          <section aria-labelledby="credits" className="mt-16 border-t-2 border-cafe-ink/80 pt-6">
            {/* folded away by default: the licenses oblige a visible credit,
                not a credit that crowds out the itinerary */}
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center gap-3 rounded-[2px] py-1 transition-colors marker:hidden hover:text-cafe-tomato focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="font-cafe-body text-sm leading-none text-cafe-muted transition-transform group-open:rotate-90"
                >
                  ▶
                </span>
                <h2 id="credits" className="font-cafe-display text-2xl tracking-tight">
                  Photograph Credits
                </h2>
                <span className="font-cafe-body text-[11px] uppercase tracking-[0.18em] text-cafe-muted">
                  44 images
                </span>
              </summary>
              <p className="mt-2 max-w-2xl font-cafe-body text-xs leading-relaxed text-cafe-muted">
                Every photograph is stored with the site. Unsplash and Pexels
                images are free to use and credited as a courtesy; the Creative
                Commons ones require the credit and license named below, and the
                ShareAlike ones carry that condition onward. A few are a close
                stand-in rather than the exact place — each of those says so.
              </p>
            <ol className="mt-4 grid gap-x-8 gap-y-1.5 font-cafe-body text-[11px] leading-snug text-cafe-muted sm:grid-cols-2">
              <li className="flex gap-2">
                <span className="w-24 shrink-0 text-cafe-ink">Masthead</span>
                <span>
                  <a
                    href={HERO_PHOTO.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cafe-ink underline decoration-cafe-muted underline-offset-2 hover:text-cafe-tomato hover:decoration-cafe-tomato active:text-cafe-accentpress active:decoration-cafe-accentpress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
                  >
                    {HERO_PHOTO.by}
                  </a>
                  , {HERO_PHOTO.src} · {HERO_PHOTO.lic}
                </span>
              </li>
              {ITEMS.map((i) => {
                const p = STOP_PHOTOS[i.id];
                if (!p) return null;
                return (
                  <li key={i.id} className="flex gap-2">
                    <span className="w-24 shrink-0 text-cafe-ink">{i.title}</span>
                    <span>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cafe-ink underline decoration-cafe-muted underline-offset-2 hover:text-cafe-tomato hover:decoration-cafe-tomato active:text-cafe-accentpress active:decoration-cafe-accentpress focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
                      >
                        {p.by}
                      </a>
                      , {p.src} · {p.lic}
                      {p.note ? <span className="block italic">{p.note}</span> : null}
                    </span>
                  </li>
                );
              })}
            </ol>
            </details>
          </section>

        </div>
      </div>
    </main>
  );
}
