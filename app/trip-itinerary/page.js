import Link from "next/link";
import Itinerary from "./itinerary";
import Image from "next/image";

export const metadata = {
  title: "Paris in a Week · A seven-day itinerary",
  description:
    "A one-week Paris plan, day by day: filter by category, search, and open any stop for the detail. Static, with nothing saved.",
};

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
            className="font-cafe-body text-xs uppercase tracking-[0.2em] text-cafe-muted underline-offset-4 hover:text-cafe-tomato hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
          >
            ← Back to hub
          </Link>

          {/* masthead: the one place the display face runs at full size */}
          <header className="mt-6 grid items-end gap-8 border-y-2 border-cafe-ink/80 py-7 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.3em] text-cafe-tomato">
                Seven days · Paris, on foot
              </p>
              <h1 className="mt-2 font-cafe-display text-6xl leading-[0.9] tracking-tight sm:text-7xl">
                Paris in a Week
              </h1>
              <p className="mt-5 max-w-xl font-cafe-body text-base leading-relaxed">
                One neighbourhood a day, with the rest left for the next trip.
                Thirty-five stops, roughly in the order you would walk them,
                with the times worth arriving at and the things worth skipping.
              </p>
            </div>

            {/* a printed photograph, pinned to the page */}
            <figure className="lg:col-span-5">
              <div className="border border-cafe-ink/15 bg-cafe-cream p-2 shadow-[4px_4px_0_rgba(43,29,22,0.18)]">
                <Image
                  src="/trip/hero.jpg"
                  alt="A cobbled Montmartre street at golden hour, with two people walking past the pink corner facade of La Maison Rose and the city spread out beyond."
                  width={1100}
                  height={825}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="block h-56 w-full object-cover sm:h-64 lg:h-full"
                />
              </div>
              <figcaption className="mt-2 font-cafe-body text-[11px] text-cafe-muted">
                Rue de l&rsquo;Abreuvoir, Montmartre — day 4.{" "}
                <a
                  href="https://unsplash.com/photos/cobblestone-street-with-buildings-and-people-at-sunset-0KLCWI3QkIk"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-cafe-borderstrong underline-offset-2 hover:text-cafe-tomato hover:decoration-cafe-tomato focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
                >
                  Lens by Benji
                </a>
                , Unsplash.
              </figcaption>
            </figure>
          </header>

          <Itinerary />

          <footer className="mt-16 border-t-2 border-cafe-ink/80 pt-5">
            <p className="max-w-2xl font-cafe-body text-xs leading-relaxed text-cafe-muted">
              Built in the Café Terrace style — see the{" "}
              <Link
                href="/design-systems/a"
                className="font-semibold text-cafe-ink underline decoration-cafe-borderstrong underline-offset-2 hover:text-cafe-tomato hover:decoration-cafe-tomato focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
              >
                design system
              </Link>{" "}
              and the{" "}
              <Link
                href="/moodboards/a"
                className="font-semibold text-cafe-ink underline decoration-cafe-borderstrong underline-offset-2 hover:text-cafe-tomato hover:decoration-cafe-tomato focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-tomato"
              >
                mood board
              </Link>{" "}
              it came from. Filtering, searching and marking stops as done all
              happen in the browser and are forgotten on reload — there is no
              database, no account and no network request. Color marks the three time blocks, not the categories: seven
              categorical hues could not be told apart safely on this surface,
              so categories are labelled in words instead. Prices and opening days are planning
              estimates, not live information.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
