// Photographs kept for mood board B. Files live in /public/moodboards/metro
// and are served locally — the page makes no external requests.
//
// This board is mostly drawn rather than photographed, because the Métro's
// identity is a vector system: enamel, diagram, roundel. Photography is used
// only where geometry does something a drawing cannot. Every photo is
// rendered as a navy duotone so the set reads as one system.
//
// "Métroën" and "FrT-eclairage" are Wikimedia Commons usernames — those
// contributors publish no real name, so the username is the correct credit.

export const PHOTOS = {
  b01: {
    w: 1000,
    h: 666,
    alt: "A green Art Nouveau Guimard Métro entrance standard with a yellow enamel METROPOLITAIN plaque and red glass lamps, against a Haussmann building.",
    note: "Guimard, 1900 — the system's first typeface",
    by: "Florian Olivo",
    src: "Unsplash",
    url: "https://unsplash.com/photos/metropolitan-signage-RodVdPKzYDw",
    lic: "Unsplash License",
  },
  b04: {
    w: 1000,
    h: 750,
    alt: "A dark blue enamel station plate reading Buzenval in white lettering, mounted on a wall of white bevelled Métro tiles.",
    note: "One word, maximum contrast, nothing else",
    by: "Métroën",
    src: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Buzenval_-_Ligne_9_-_2025_-_Signal%C3%A9tique.jpg",
    lic: "CC0",
  },
  b12: {
    w: 1000,
    h: 666,
    alt: "A straight-down aerial view of the Arc de Triomphe at the center of its roundabout, with twelve avenues radiating outward through gray Haussmann blocks.",
    note: "Twelve lines, one interchange — the city as diagram",
    by: "Mikhail Nilov",
    src: "Pexels",
    url: "https://www.pexels.com/photo/arc-de-triomphe-monument-at-the-center-of-the-roundabout-8431136/",
    lic: "Pexels License",
  },
  b13: {
    w: 1000,
    h: 1500,
    alt: "A symmetrical view along the lower deck of the Pont de Bir-Hakeim, riveted steel columns and cross-braced girders receding in repeating arches.",
    note: "One module, repeated until it becomes rhythm",
    by: "Masood Aslami",
    src: "Pexels",
    url: "https://www.pexels.com/photo/symmetrical-view-of-the-pont-de-bir-hakeim-paris-france-19235997/",
    lic: "Pexels License",
  },
  b15: {
    w: 1000,
    h: 666,
    alt: "A near-overhead view of a zebra crossing filling the frame with broad white stripes across dark gray asphalt.",
    note: "Maximum contrast, zero decoration",
    by: "Marija Zaric",
    src: "Unsplash",
    url: "https://unsplash.com/photos/a-zebra-crossing-is-shown-on-a-road-F0t1XLRIYgI",
    lic: "Unsplash License",
  },
  x01: {
    w: 1000,
    h: 750,
    alt: "A black and white view down a Washington DC Metro platform, where a vaulted ceiling of deeply recessed coffered concrete panels arcs symmetrically over the tracks on either side of a dark central pylon.",
    note: "A module repeated until it becomes a cathedral",
    by: "Dulcey Lima",
    src: "Unsplash",
    url: "https://unsplash.com/photos/2h1uMikSPQs",
    lic: "Unsplash License",
  },
  x02: {
    w: 1000,
    h: 666,
    alt: "A pair of empty escalators rising symmetrically between smooth gray tiled walls toward a bright glazed opening, lit in cool blue-teal tones.",
    note: "Symmetry as wayfinding: the exit needs no sign",
    by: "Teemu Laukkarinen",
    src: "Unsplash",
    url: "https://unsplash.com/photos/eBi0v1D_po8",
    lic: "Unsplash License",
  },
  x03: {
    w: 1000,
    h: 666,
    alt: "A black and white photograph of a subway train streaking in motion blur across the foreground while the tiled opposite platform stays sharp behind a row of steel columns.",
    note: "The only motion the system allows",
    by: "Chris Hardy",
    src: "Unsplash",
    url: "https://unsplash.com/photos/blurry-train-passing-a-subway-station-at-night-Z5BirX4KaYI",
    lic: "Unsplash License",
  },
  x05: {
    w: 1000,
    h: 1334,
    alt: "A high-contrast black and white photograph of a modernist facade looking up, its white concrete frame forming a strict grid around solid black window voids against a black sky.",
    note: "Grid reduced to black, white and nothing else",
    by: "Sebastian Schuster",
    src: "Unsplash",
    url: "https://unsplash.com/photos/modern-building-with-repeating-window-pattern-OWsaQTyS914",
    lic: "Unsplash License",
  },
  x06: {
    w: 1000,
    h: 669,
    alt: "A single arrow engraved into a cracked white-painted concrete wall, pointing right, isolated in a large empty field of pale gray surface.",
    note: "One arrow, enormous silence around it",
    by: "Nik",
    src: "Unsplash",
    url: "https://unsplash.com/photos/right-arrow-sign-on-wall-MAgPyHRO0AA",
    lic: "Unsplash License",
  },
};

export const PHOTO_ORDER = [
  "x01", "x02", "x03", "x05", "x06",
  "b01", "b04", "b12", "b13", "b15",
];
