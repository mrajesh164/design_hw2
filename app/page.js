import Link from "next/link";

const sections = [
  {
    id: "moodboards",
    title: "Mood boards",
    blurb: "Three visual directions, each with a name and a collection of artifacts.",
    links: [
      { label: "A · Café Terrace", href: "/moodboards/a" },
      { label: "B · Métro Ligne", href: "/moodboards/b" },
      { label: "C · Nuit Pop", href: "/moodboards/c" },
    ],
  },
  {
    id: "design-systems",
    title: "Design systems",
    blurb: "One UI library per mood board: color, type, spacing, components and states.",
    links: [
      { label: "A · Café Terrace", href: "/design-systems/a" },
      { label: "B · Métro Ligne", href: "/design-systems/b" },
      { label: "C · Nuit Pop", href: "/design-systems/c" },
    ],
  },
];

const linkClass =
  "flex items-center justify-between rounded-lg border border-stone-300 bg-white px-4 py-3 text-base font-medium text-stone-900 transition-colors hover:border-stone-900 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 active:bg-stone-200";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-12 sm:py-20">
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

      <div className="grid gap-8 sm:grid-cols-2">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 id={section.id} className="text-2xl font-semibold">
                {section.title}
              </h2>
              <p className="text-stone-700">{section.blurb}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section aria-labelledby="site" className="flex flex-col gap-4 border-t border-stone-300 pt-10">
        <div className="flex flex-col gap-1">
          <h2 id="site" className="text-2xl font-semibold">
            The site
          </h2>
          <p className="text-stone-700">
            A one-week Paris itinerary with filters and a detail panel, built in the chosen style.
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
