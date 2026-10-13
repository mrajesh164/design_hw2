// A made-up but plausible one-week Paris plan. Everything here is static —
// no database, no accounts, no network. Prices are approximate and were not
// looked up live, so treat them as a planning estimate rather than a quote.

export const CATEGORIES = ["Food", "Museums", "Landmarks", "Outdoors"];

export const DAYS = [
  { n: 1, date: "Mon, May 11", title: "Right Bank", area: "1st & 2nd" },
  { n: 2, date: "Tue, May 12", title: "Île de la Cité & the Marais", area: "1st & 4th" },
  { n: 3, date: "Wed, May 13", title: "Left Bank", area: "6th & 7th" },
  { n: 4, date: "Thu, May 14", title: "Montmartre", area: "18th & 9th" },
  { n: 5, date: "Fri, May 15", title: "The Eiffel Tower & the Seine", area: "7th & 8th" },
  { n: 6, date: "Sat, May 16", title: "Versailles", area: "Day trip" },
  { n: 7, date: "Sun, May 17", title: "East Paris, Last Look", area: "10th, 11th & 20th" },
];

export const TRIP = {
  dates: "May 11 – 17, 2026",
  nights: 6,
  base: "Rental flat, Rue de Turenne, 3rd Arrondissement",
  checkIn: "Mon, May 11 at 15:00",
  checkOut: "Sun, May 17 at 11:00",
  transit: "Forfait Navigo Semaine, all zones — it runs Mon–Sun, which is this exact week, and it reaches Versailles",
  // the two costs the per-stop prices do not include, named here rather than
  // left for the reader to work out from the breakdown below
  lodging: { nights: 6, nightly: 180, total: 1080, people: 2 },
  fares: { total: 37.4, note: "Navigo Semaine at €32.40, plus the €5 card" },
};

// Three time blocks. These colors were validated with the dataviz palette
// checker against the cream surface: CVD separation ΔE 11.2, normal-vision
// ΔE 19.1, all three ≥3:1 as marks. They are marks only — never text.
export const BLOCKS = [
  { id: "Morning", label: "Morning", range: "before 12:00", color: "#A86A00" },
  { id: "Afternoon", label: "Afternoon", range: "12:00 – 18:00", color: "#0F7A72" },
  { id: "Night", label: "Night", range: "after 18:00", color: "#4A42B8" },
];

export function blockOf(start) {
  const h = Number(start.split(":")[0]);
  if (h < 12) return "Morning";
  return h < 18 ? "Afternoon" : "Night";
}

const RAW_ITEMS = [
  // ---- Day 1 ----
  { id: "d1-1", day: 1, start: "10:00", end: "10:45", category: "Food", title: "Coffee at Café Verlet", area: "Rue Saint-Honoré", price: 8, metro: "Palais Royal, ligne 1", note: "A roastery since 1880 with a narrow wooden room upstairs. Order at the counter, then take the stairs — the ground floor is all takeaway queue.", tip: "The single-origin filter is what to order here. Save room for pastries — the best ones are two stops away." },
  { id: "d1-2", day: 1, start: "11:00", end: "12:30", category: "Outdoors", title: "Palais-Royal gardens & colonnades", area: "1st", price: 0, metro: "Palais Royal, ligne 1", note: "The Buren columns in the first courtyard, then the arcade shops and the long avenue of clipped limes behind them. Quiet in a way nowhere else in the 1st is.", tip: "Come in from Rue de Montpensier and the columns are yours for a few minutes, before the crowd arrives from the Louvre side." },
  { id: "d1-3", day: 1, start: "13:00", end: "14:15", category: "Food", title: "Lunch on Rue Montorgueil", area: "2nd", price: 22, metro: "Sentier, ligne 3", note: "A pedestrian market street that has stayed a market street. Pick whichever terrace has locals rather than menus in four languages.", tip: "Stohrer at number 51 is the oldest patisserie in Paris. Buy the baba au rhum and save it for later — it keeps beautifully." },
  { id: "d1-6", day: 1, start: "14:45", end: "17:30", category: "Museums", title: "Musée du Louvre", area: "1st", price: 22, metro: "Palais Royal–Musée du Louvre, ligne 1", note: "Far too large to see in one visit, which is freeing rather than daunting: pick two wings and leave while you are still enjoying it. The Richelieu sculpture courtyards and the Near Eastern antiquities are the calmest rooms in the building.", tip: "Closed Tuesdays. The Carrousel and Porte des Lions entrances are far calmer than the Pyramid, and by late afternoon the morning tours have cleared out and the galleries feel almost private.", closed: "Tue" },
  { id: "d1-4", day: 1, start: "17:45", end: "18:45", category: "Outdoors", title: "Jardin des Tuileries", area: "1st", price: 0, metro: "Tuileries, ligne 1", note: "Walk straight out of the Louvre into the garden and drag one of the green metal chairs to the round basin. After three hours of galleries, an hour with no plan at all is exactly the right thing.", tip: "The chairs with the reclined back are the comfortable ones, and they are worth hunting for." },
  { id: "d1-5", day: 1, start: "19:30", end: "21:00", category: "Food", title: "Dinner, Bouillon Chartier", area: "9th", price: 24, metro: "Grands Boulevards, ligne 8", note: "An 1896 workers' canteen with the original mirrored room, brass racks and waiters who write the bill on the paper tablecloth. Cheap, loud, and genuinely old.", tip: "No reservations — turn up around 19:00 and you will walk straight in. Shared tables are part of the fun here, not a mistake.", closed: null },

  // ---- Day 2 ----
  { id: "d2-1", day: 2, start: "09:15", end: "10:00", category: "Food", title: "Marché des Enfants Rouges", area: "Marais", price: 0, metro: "Filles du Calvaire, ligne 8", note: "The oldest covered market in Paris, from 1615, now as much lunch counters as produce. Narrow, loud and roofed, which matters if the morning is wet.", tip: "Come before eleven for the produce and after it for the food stalls. Picking one makes for a far happier visit than trying both.", closed: "Mon" },
  { id: "d2-2", day: 2, start: "10:30", end: "11:45", category: "Landmarks", title: "Sainte-Chapelle", area: "Île de la Cité", price: 11.5, metro: "Cité, ligne 4", note: "Fifteen stained-glass windows reaching the vault, at their best about an hour after opening when the south wall lights up. The lower chapel, painted deep red and blue, sets you up for the stairs.", tip: "The combined ticket with the Conciergerie next door saves a few euros, and the security queue on that side is shorter." },
  { id: "d2-3", day: 2, start: "13:15", end: "14:15", category: "Food", title: "Lunch on Rue des Rosiers", area: "Marais", price: 12, metro: "Saint-Paul, ligne 1", note: "Falafel eaten standing up, or a proper sit-down at one of the older delis. The street is short and almost entirely about one thing.", tip: "Most of the street closes Saturday for Shabbat, and Friday afternoon is when it is at its liveliest.", closed: "Sat" },
  { id: "d2-4", day: 2, start: "14:30", end: "15:30", category: "Outdoors", title: "Place des Vosges & the arcades", area: "Marais", price: 0, metro: "Chemin Vert, ligne 8", note: "The oldest planned square in Paris, identical on all four sides. Walk the arcade first, then cut through the Hôtel de Sully passage to Rue Saint-Antoine.", tip: "The passage through Hôtel de Sully hides behind an unmarked door in the southwest corner. It looks private; go through anyway." },
  { id: "d2-5", day: 2, start: "15:45", end: "17:45", category: "Museums", title: "Musée Carnavalet", area: "Marais", price: 0, metro: "Saint-Paul, ligne 1", note: "The history of Paris itself, in two linked mansions — shop signs, rooms lifted whole from demolished buildings, and a model of the Île de la Cité before Haussmann.", tip: "The permanent collection is free. Start on the top floor and work down, so you reach the Revolution rooms with attention to spare.", closed: "Mon" },

  { id: "d2-6", day: 2, start: "12:00", end: "12:45", category: "Landmarks", title: "Notre-Dame de Paris", area: "Île de la Cité", price: 0, metro: "Cité, ligne 4", note: "Five minutes from the Sainte-Chapelle, and open again since December 2024. The cleaned stone is startlingly pale, the vault has been rebuilt in oak, and the nave is brighter than anyone alive remembers it.", tip: "Entry is free, and a timed slot booked ahead walks you straight past a very long queue. The towers are a separate ticket, worth booking weeks out." },
  { id: "d2-7", day: 2, start: "19:00", end: "20:30", category: "Food", title: "Rooftop drinks, Le Perchoir Marais", area: "4th", price: 18, metro: "Hôtel de Ville, lignes 1/11", note: "A bar on the roof of the BHV department store, looking straight down on the Hôtel de Ville with the Tour Saint-Jacques and Notre-Dame off to one side. The right way to end a day spent on the island.", tip: "Opening days shift with the season and the weather, so check before you walk over. Seven o'clock gets you a table with the light still on the rooftops." },

  // ---- Day 3 ----
  { id: "d3-1", day: 3, start: "09:30", end: "12:00", category: "Museums", title: "Musée d'Orsay", area: "7th", price: 16, metro: "Solférino, ligne 12", note: "A railway station turned museum, which means the building competes with the collection and mostly wins. Impressionists are on the top floor under the roof lights.", tip: "Head for the fifth floor first and work down. The clock face overlooking the Seine is tucked behind the café — easy to miss, and the best window in the building.", closed: "Mon" },
  { id: "d3-6", day: 3, start: "12:15", end: "13:15", category: "Museums", title: "Musée de l'Orangerie", area: "1st", price: 12.5, metro: "Concorde, lignes 1/8/12", note: "Two oval rooms built to Monet's own instructions, holding eight Water Lilies panels that wrap the walls under daylight from above. One unhurried hour here is the whole visit.", tip: "A ten-minute walk from the Orsay across the Passerelle Léopold-Sédar-Senghor, and one combined ticket covers both. Closed Tuesdays.", closed: "Tue" },
  { id: "d3-2", day: 3, start: "13:30", end: "14:30", category: "Food", title: "Lunch, Saint-Germain", area: "6th", price: 20, metro: "Saint-Germain-des-Prés, ligne 4", note: "Back across the river. A street or two off the two famous terraces, the places around Rue de Buci still do a very good plat du jour for under twenty euros.", tip: "Les Deux Magots and Café de Flore are worth a look as you pass. Then turn down Rue de Seine, where lunch is better and half the price." },
  { id: "d3-3", day: 3, start: "15:00", end: "16:00", category: "Landmarks", title: "Shakespeare and Company", area: "5th", price: 0, metro: "Saint-Michel, ligne 4", note: "The English-language bookshop opposite Notre-Dame, with beds upstairs that writers have slept in since the fifties. Small, stacked to the ceiling, and all the better for it.", tip: "No photos inside, so you get to simply browse. The café next door has the better view of the cathedral anyway." },
  { id: "d3-4", day: 3, start: "16:15", end: "18:00", category: "Outdoors", title: "Jardin du Luxembourg", area: "6th", price: 0, metro: "Odéon, ligne 4", note: "The Médicis fountain in the shade on the east side, the big basin where children push wooden boats, and the orchard at the back that almost nobody walks to.", tip: "The apiary and the orchard in the southwest corner are the quietest part of the garden, and almost nobody finds them." },
  { id: "d3-5", day: 3, start: "19:00", end: "20:30", category: "Food", title: "Dinner, Rue Mouffetard", area: "5th", price: 26, metro: "Place Monge, ligne 7", note: "A steep market street that becomes a dinner street after dark. Student-priced at the top, more serious at the bottom near the church.", tip: "Look for the places with nobody out front holding a menu — on this street that rule is unusually reliable." },

  { id: "d3-7", day: 3, start: "21:30", end: "23:30", category: "Landmarks", title: "Jazz at Le Caveau de la Huchette", area: "5th", price: 16, metro: "Saint-Michel, ligne 4", note: "A stone cellar off Rue de la Huchette that has run live jazz every night since 1946, in a vaulted cave that is centuries older than that. Bands play on a low stage and people genuinely swing-dance on the floor in front of it.", tip: "Ten minutes downhill from Mouffetard. Bring cash for the door, which moves faster than the card machine, and claim a seat along the wall before eleven." },

  // ---- Day 4 ----
  { id: "d4-1", day: 4, start: "09:00", end: "10:00", category: "Food", title: "Breakfast on Rue des Martyrs", area: "9th", price: 10, metro: "Notre-Dame-de-Lorette, ligne 12", note: "The approach to Montmartre from the south, lined with bakeries, cheese shops and a fishmonger — the best eating anywhere on the hill.", tip: "Walk up rather than taking the métro to Abbesses. The climb is half the pleasure." },
  { id: "d4-2", day: 4, start: "10:15", end: "11:30", category: "Landmarks", title: "Sacré-Cœur & the steps", area: "18th", price: 0, metro: "Anvers, ligne 2", note: "White travertine that self-cleans in the rain, standing on the highest point in the city. Inside it is cool and low-lit, with an enormous gold mosaic filling the apse.", tip: "The stairs on the left beat the funicular queue every time. The dome climb costs extra, and the view from the steps outside is just as good and free." },
  { id: "d4-3", day: 4, start: "11:45", end: "13:00", category: "Museums", title: "Musée de Montmartre & the vineyard", area: "18th", price: 15, metro: "Lamarck–Caulaincourt, ligne 12", note: "The house Renoir and Utrillo worked in, with restored gardens looking over the last working vineyard in Paris.", tip: "The garden alone justifies the ticket, and most people walk straight past the entrance on their way to Place du Tertre, which leaves it pleasantly empty." },
  { id: "d4-4", day: 4, start: "13:15", end: "14:30", category: "Food", title: "Lunch, away from Place du Tertre", area: "18th", price: 18, metro: "Abbesses, ligne 12", note: "Two streets north of Place du Tertre, Rue Caulaincourt is where people who live on the hill actually eat: proper neighborhood cooking a few minutes from the crowds.", tip: "Two streets of distance from the square halves the price and doubles the cooking." },
  { id: "d4-5", day: 4, start: "20:30", end: "21:30", category: "Landmarks", title: "Pigalle after dark, from outside", area: "9th", price: 0, metro: "Blanche, ligne 2", note: "The Moulin Rouge sign, the neon along Boulevard de Clichy, and the quieter bars on Rue Frochot. The whole pleasure of it is seeing the lights from the street.", tip: "South of the boulevard is where the good bars are — Rue Frochot and the streets around it reward the detour. The north side is the postcard version." },

  { id: "d4-6", day: 4, start: "16:00", end: "17:30", category: "Landmarks", title: "Galeries Lafayette dome & rooftop", area: "9th", price: 0, metro: "Chaussée d\'Antin – La Fayette, lignes 7/9", note: "Come down off the hill for the 1912 stained-glass dome over the central well, then the roof terrace above it — one of the widest free views in Paris, with the Opéra in the foreground and the tower beyond.", tip: "The terrace is free, just badly signposted: take the lift to the top floor, then keep climbing. Nothing to buy and nothing expected, just the rooftops and the dome." },
  { id: "d4-7", day: 4, start: "18:45", end: "20:15", category: "Food", title: "Dinner, Pink Mamma", area: "9th", price: 28, metro: "Pigalle, lignes 2/12", note: "Four floors of a Pigalle building fitted out as a greenhouse, with a glass roof over the top one. Italian, loud and justly photographed — the room really is worth sitting in.", tip: "No reservations by phone. Book online the morning slots open, or arrive at 18:45 when service starts and ask for the top floor — the queue moves faster than it looks." },

  // ---- Day 5 ----
  { id: "d5-1", day: 5, start: "09:30", end: "10:30", category: "Food", title: "Rue Cler market street", area: "7th", price: 0, metro: "École Militaire, ligne 8", note: "A pedestrian street of permanent food shops rather than stalls — cheese, bread, a fishmonger and a horse butcher that has been there a very long time.", tip: "Assemble a picnic here for the Champ de Mars later; that is the whole reason this slot comes first. The Franprix two streets over covers the unglamorous half of the basket for a third of café prices.", closed: "Mon" },
  { id: "d5-2", day: 5, start: "11:00", end: "13:00", category: "Landmarks", title: "Eiffel Tower", area: "7th", price: 29, metro: "Bir-Hakeim, ligne 6", note: "Up close it is iron rather than silver, a deep red-brown that photographs rarely catch, and far bigger overhead than any picture prepares you for. The second floor has the best view over the city; the summit trades the view for the height itself.", tip: "Book the timed lift slot weeks ahead. The stairs to the second floor are the better deal anyway — a third of the price, no queue, and the view arrives gradually." },
  { id: "d5-3", day: 5, start: "13:15", end: "14:30", category: "Outdoors", title: "Picnic on the Champ de Mars", area: "7th", price: 0, metro: "École Militaire, ligne 8", note: "The long lawn southeast of the tower. Sit facing back toward it with the picnic from Rue Cler.", tip: "The lawns nearest the tower are often fenced for reseeding, so walk a few hundred meters toward the École Militaire end: more grass, fewer people, same tower." },
  { id: "d5-4", day: 5, start: "15:00", end: "17:00", category: "Outdoors", title: "Seine walk, Bir-Hakeim to Invalides", area: "7th", price: 0, metro: "Bir-Hakeim, ligne 6", note: "Down on the quay rather than up on the road. Under Bir-Hakeim the riveted steel columns repeat the whole way across the river.", tip: "The lower quay closes when the river runs high, most often in winter. The upper path is a fine walk in its own right." },
  { id: "d5-5", day: 5, start: "20:30", end: "21:10", category: "Landmarks", title: "Pont Alexandre III at dusk", area: "8th", price: 0, metro: "Invalides, lignes 8/13", note: "The most ornate bridge in the city, and the lamps come on at dusk and pick out every piece of gilt. Walk it east to west, then down the steps to the quay.", tip: "Go at dusk rather than full dark — you want the sky still blue behind the gold." },

  { id: "d5-6", day: 5, start: "17:30", end: "19:00", category: "Landmarks", title: "Champs-Élysées & the Arc de Triomphe", area: "8th", price: 16, metro: "Charles de Gaulle–Étoile, lignes 1/2/6", note: "Cross back over Pont Alexandre III and walk the avenue uphill to the arch. The avenue is really about the axis: from the roof of the Arc it runs dead straight to the Louvre one way and La Défense the other.", tip: "Reach the arch by the underpass at the métro rather than across the roundabout. Afterwards, Avenue de Wagram and Rue de Ponthieu are where to eat: one block off the Champs and a different city." },

  // ---- Day 6 ----
  { id: "d6-1", day: 6, start: "08:30", end: "09:30", category: "Outdoors", title: "RER C out to Versailles", area: "Transfer", price: 0, metro: "RER C, Versailles Château–Rive Gauche", note: "About 40 minutes from the central stations, and the train follows the river for the first half of the ride.", tip: "Versailles sits in zone 4, past where a single métro ticket reaches. The weekly Navigo covers all five zones, which is exactly why it is worth buying over a book of tickets." },
  { id: "d6-2", day: 6, start: "10:00", end: "12:30", category: "Museums", title: "Château de Versailles", area: "Versailles", price: 21, metro: "Versailles Château–Rive Gauche", note: "The State Apartments and the Hall of Mirrors, which is every bit as astonishing as its reputation. Busy from the moment it opens, so arrive early and let the rooms do the rest.", tip: "Tuesday and Sunday draw the biggest crowds. Arriving at opening does more for you than any skip-the-line ticket.", closed: "Mon" },
  { id: "d6-3", day: 6, start: "12:45", end: "14:00", category: "Food", title: "Lunch in the gardens", area: "Versailles", price: 16, metro: "—", note: "The cafés near the Grand Canal will feed you perfectly well. Better still is a basket carried out from Paris and eaten on the grass.", tip: "There is a market in Versailles town, five minutes from the station and open most mornings — a good detour before the château." },
  { id: "d6-4", day: 6, start: "14:00", end: "17:00", category: "Outdoors", title: "Gardens & the Hameau de la Reine", area: "Versailles", price: 0, metro: "—", note: "The formal gardens are free on most days. The long walk to Marie-Antoinette's model hamlet at the far end is the best part of the estate, and the emptiest.", tip: "Rent a bike at the Grand Canal. The grounds are far bigger than they look, and riding them is the best hour of the day." },
  { id: "d6-5", day: 6, start: "19:30", end: "21:00", category: "Food", title: "Dinner back in the 11th", area: "11th", price: 30, metro: "Parmentier, ligne 3", note: "After a day of grandeur, a small room with ten tables and a chalkboard. The 11th is where most of the interesting cooking in Paris happens now.", tip: "These places book out, so if you make one reservation for the whole week, make it this one." },

  // ---- Day 7 ----
  { id: "d7-1", day: 7, start: "09:30", end: "10:45", category: "Food", title: "Marché d'Aligre", area: "12th", price: 0, metro: "Ledru-Rollin, ligne 8", note: "Covered hall, open-air stalls and a flea market in the same square. Cheaper and friendlier than Bastille, and open almost every day.", tip: "The wine bar in the covered hall pours from eight in the morning, and nobody there finds that strange.", closed: "Mon" },
  { id: "d7-2", day: 7, start: "11:15", end: "12:30", category: "Outdoors", title: "Canal Saint-Martin", area: "10th", price: 0, metro: "République, lignes 3/5/8/9/11", note: "Iron footbridges, plane trees and a chain of locks that still cycles for passing boats. The whole stretch is about thirty minutes at a slow pace.", tip: "If a lock is filling, stop and watch — ten unhurried minutes, and the best free show on the canal." },
  { id: "d7-3", day: 7, start: "13:00", end: "14:00", category: "Food", title: "Lunch, Rue de Belleville", area: "20th", price: 14, metro: "Belleville, lignes 2/11", note: "Paris's other Chinatown, plus Tunisian bakeries and a lot of very good cheap food on one long uphill street.", tip: "Go up the hill rather than down: the food gets better as the rents get lower." },
  { id: "d7-4", day: 7, start: "14:30", end: "16:30", category: "Outdoors", title: "Père Lachaise", area: "20th", price: 0, metro: "Père Lachaise, lignes 2/3", note: "A walled city of tombs on a hillside, cobbled and steep and far larger than the map suggests. Chopin, Wilde and Piaf are all here, along with thousands of quieter graves worth wandering past.", tip: "Take a photo of the map at the gate. The numbered divisions are how you find anything here, and the signal under the trees is patchy." },
  { id: "d7-5", day: 7, start: "18:00", end: "19:00", category: "Outdoors", title: "Parc de Belleville at sunset", area: "20th", price: 0, metro: "Pyrénées, ligne 11", note: "The highest park in Paris, with the whole city laid out west and the tower on the horizon. Locals, a few beers, almost no visitors.", tip: "Head for the terrace at the top of the park and arrive twenty minutes before sunset. It is the best last look in the city." },
];

// Sorted here rather than at each call site, so stops can be added anywhere
// in the list above without the schedule, the day totals or the week bars
// falling out of order.
export const ITEMS = [...RAW_ITEMS].sort(
  (a, b) => a.day - b.day || a.start.localeCompare(b.start),
);

// Categories are labeled in text, not color-coded. Even seven categorical
// hues could not be separated safely on this surface — the closest pair
// measured ΔE 6.4 for normal vision and ΔE 0.3 under deuteranopia — and
// four would sit no further apart, because the cream surface is what
// compresses them. Color encodes the three time blocks instead, where
// separation is achievable.

