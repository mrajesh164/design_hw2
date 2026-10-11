import Link from "next/link";
import Itinerary from "./itinerary";

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
          <header className="mt-6 border-y-2 border-cafe-ink/80 py-7">
            <p className="font-cafe-body text-[11px] font-semibold uppercase tracking-[0.3em] text-cafe-tomato">
              Seven days · Île-de-France
            </p>
            <h1 className="mt-2 font-cafe-display text-6xl leading-[0.9] tracking-tight sm:text-8xl">
              Paris in a Week
            </h1>
            <p className="mt-5 max-w-xl font-cafe-body text-base leading-relaxed">
              One neighbourhood a day, with the rest left for the next trip.
              Thirty-five stops, roughly in the order you would walk them, with
              the times worth arriving at and the things worth skipping.
            </p>
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
              database, no account and no network request. Prices and opening
              days are planning estimates, not live information.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
