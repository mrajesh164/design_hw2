// A made-up but plausible one-week Paris plan. Everything here is static —
// no database, no accounts, no network. Prices are approximate and were not
// looked up live, so treat them as a planning estimate rather than a quote.

export const CATEGORIES = [
  "Museum",
  "Food",
  "Market",
  "Walk",
  "Park",
  "Landmark",
  "Evening",
];

export const DAYS = [
  { n: 1, title: "Right Bank, slowly", area: "1st & 2nd" },
  { n: 2, title: "Île de la Cité & the Marais", area: "1st & 4th" },
  { n: 3, title: "Left Bank", area: "6th & 7th" },
  { n: 4, title: "Montmartre", area: "18th" },
  { n: 5, title: "The tower and the river", area: "7th & 8th" },
  { n: 6, title: "Versailles", area: "day trip" },
  { n: 7, title: "East Paris, last look", area: "10th, 11th & 20th" },
];

export const ITEMS = [
  // ---- Day 1 ----
  { id: "d1-1", day: 1, start: "10:00", end: "10:45", category: "Food", title: "Coffee at Café Verlet", area: "Rue Saint-Honoré", price: 8, metro: "Palais Royal, ligne 1", note: "A roastery since 1880 with a narrow wooden room upstairs. Order at the counter, then take the stairs — the ground floor is all takeaway queue.", tip: "The single-origin filter is the point; skip the pastries, they are better two stops away." },
  { id: "d1-2", day: 1, start: "11:00", end: "12:30", category: "Landmark", title: "Palais-Royal gardens & colonnades", area: "1st", price: 0, metro: "Palais Royal, ligne 1", note: "The Buren columns in the first courtyard, then the arcade shops and the long avenue of clipped limes behind them. Quiet in a way nowhere else in the 1st is.", tip: "Enter from rue de Montpensier to get the columns before the crowd from the Louvre side." },
  { id: "d1-3", day: 1, start: "13:00", end: "14:15", category: "Food", title: "Lunch on rue Montorgueil", area: "2nd", price: 22, metro: "Sentier, ligne 3", note: "A pedestrian market street that has stayed a market street. Pick whichever terrace has locals rather than menus in four languages.", tip: "Stohrer at number 51 is the oldest patisserie in Paris — buy the baba au rhum for later, not now." },
  { id: "d1-4", day: 1, start: "15:00", end: "17:30", category: "Park", title: "Jardin des Tuileries", area: "1st", price: 0, metro: "Tuileries, ligne 1", note: "Drag one of the green metal chairs to the round basin and sit. This is the recovery slot for a first day with jet lag, and it is deliberately unstructured.", tip: "The chairs with the reclined back are the comfortable ones. They are worth hunting for." },
  { id: "d1-5", day: 1, start: "19:30", end: "21:00", category: "Evening", title: "Dinner, Bouillon Chartier", area: "9th", price: 24, metro: "Grands Boulevards, ligne 8", note: "An 1896 workers' canteen with the original mirrored room, brass racks and waiters who write the bill on the paper tablecloth. Cheap, loud, and genuinely old.", tip: "No reservations. Arrive at 19:00 or expect to queue. Shared tables are normal, not a mistake.", closed: null },

  // ---- Day 2 ----
  { id: "d2-1", day: 2, start: "09:15", end: "10:00", category: "Market", title: "Marché Bastille", area: "11th", price: 0, metro: "Bastille, lignes 1/5/8", note: "The big Thursday and Sunday market along boulevard Richard-Lenoir. Oysters shucked at the stall, rotisserie potatoes under the chickens, cheese sold by people who ask what day you plan to eat it.", tip: "Thursday and Sunday only. On other days, Marché d'Aligre is the substitute.", closed: "Mon–Wed, Fri, Sat" },
  { id: "d2-2", day: 2, start: "10:30", end: "12:00", category: "Museum", title: "Sainte-Chapelle", area: "Île de la Cité", price: 11.5, metro: "Cité, ligne 4", note: "Fifteen stained-glass windows reaching the vault, best about an hour after opening when the south wall lights up. The lower chapel is a dim red and blue warm-up for the stairs.", tip: "The combined ticket with the Conciergerie next door saves a few euros, and the security queue on the Conciergerie side is shorter." },
  { id: "d2-3", day: 2, start: "12:30", end: "13:45", category: "Food", title: "Lunch on rue des Rosiers", area: "Marais", price: 12, metro: "Saint-Paul, ligne 1", note: "Falafel eaten standing up, or a proper sit-down at one of the older delis. The street is short and almost entirely about one thing.", tip: "Most of the street closes Saturday for Shabbat. Friday afternoon is the busiest it gets.", closed: "Sat" },
  { id: "d2-4", day: 2, start: "14:15", end: "15:15", category: "Walk", title: "Place des Vosges & the arcades", area: "Marais", price: 0, metro: "Chemin Vert, ligne 8", note: "The oldest planned square in Paris, identical on all four sides. Walk the arcade first, then cut through the Hôtel de Sully passage to rue Saint-Antoine.", tip: "The passage through Hôtel de Sully is an unmarked door in the south-west corner. It looks private. It is not." },
  { id: "d2-5", day: 2, start: "15:30", end: "17:30", category: "Museum", title: "Musée Carnavalet", area: "Marais", price: 0, metro: "Saint-Paul, ligne 1", note: "The history of Paris itself, in two linked mansions — shop signs, rooms lifted whole from demolished buildings, and a model of the Île de la Cité before Haussmann.", tip: "Permanent collection is free. Start on the top floor and work down, or you will run out of attention before the Revolution rooms.", closed: "Mon" },

  // ---- Day 3 ----
  { id: "d3-1", day: 3, start: "09:30", end: "12:00", category: "Museum", title: "Musée d'Orsay", area: "7th", price: 16, metro: "Solférino, ligne 12", note: "A railway station turned museum, which means the building competes with the collection and mostly wins. Impressionists are on the top floor under the roof lights.", tip: "Go up to the fifth floor first and work down. The clock face overlooking the Seine is behind the café, not in the main hall.", closed: "Mon" },
  { id: "d3-2", day: 3, start: "12:30", end: "13:30", category: "Food", title: "Lunch, Saint-Germain", area: "6th", price: 20, metro: "Saint-Germain-des-Prés, ligne 4", note: "Away from the two famous terraces, the side streets off rue de Buci still do a decent plat du jour for under twenty euros.", tip: "Les Deux Magots and Café de Flore are worth seeing and not worth eating at. Walk past, then turn down rue de Seine." },
  { id: "d3-3", day: 3, start: "14:00", end: "15:00", category: "Walk", title: "Shakespeare and Company", area: "5th", price: 0, metro: "Saint-Michel, ligne 4", note: "The English-language bookshop opposite Notre-Dame, with beds upstairs that writers have slept in since the fifties. Cramped, and the point is that it is cramped.", tip: "No photos inside, which is enforced. The café next door has the better view of the cathedral anyway." },
  { id: "d3-4", day: 3, start: "15:30", end: "17:30", category: "Park", title: "Jardin du Luxembourg", area: "6th", price: 0, metro: "Odéon, ligne 4", note: "The Médicis fountain in the shade on the east side, the big basin where children push wooden boats, and the orchard at the back that almost nobody walks to.", tip: "The apiary and the orchard in the south-west corner are the quietest part of the garden." },
  { id: "d3-5", day: 3, start: "19:00", end: "20:30", category: "Evening", title: "Dinner, rue Mouffetard", area: "5th", price: 26, metro: "Place Monge, ligne 7", note: "A steep market street that becomes a dinner street after dark. Student-priced at the top, more serious at the bottom near the church.", tip: "Avoid the places with a host outside holding a menu. That rule is unusually reliable here." },

  // ---- Day 4 ----
  { id: "d4-1", day: 4, start: "09:00", end: "10:00", category: "Food", title: "Breakfast on rue des Martyrs", area: "9th", price: 10, metro: "Notre-Dame-de-Lorette, ligne 12", note: "The approach to Montmartre from the south, lined with bakeries, cheese shops and a fishmonger. Better than anything at the top of the hill.", tip: "Walk up it rather than taking the métro to Abbesses. The climb is the introduction." },
  { id: "d4-2", day: 4, start: "10:15", end: "11:30", category: "Landmark", title: "Sacré-Cœur & the steps", area: "18th", price: 0, metro: "Anvers, ligne 2", note: "White travertine that self-cleans in rain, on the highest point in the city. The interior is dim and the mosaic in the apse is enormous.", tip: "Skip the funicular queue and take the stairs on the left. The dome climb costs extra and the view is better from the steps outside." },
  { id: "d4-3", day: 4, start: "11:45", end: "13:00", category: "Museum", title: "Musée de Montmartre & the vineyard", area: "18th", price: 15, metro: "Lamarck–Caulaincourt, ligne 12", note: "The house Renoir and Utrillo worked in, with restored gardens looking over the last working vineyard in Paris.", tip: "The garden alone justifies the ticket. Most people walk past the entrance to get to Place du Tertre, which is the wrong choice." },
  { id: "d4-4", day: 4, start: "13:15", end: "14:30", category: "Food", title: "Lunch, away from Place du Tertre", area: "18th", price: 18, metro: "Abbesses, ligne 12", note: "Place du Tertre is portrait artists and bad crêpes. Two streets north, rue Caulaincourt is where people who live here actually eat.", tip: "Anything with a view of the square costs double and tastes half." },
  { id: "d4-5", day: 4, start: "20:00", end: "21:00", category: "Evening", title: "Pigalle after dark, from outside", area: "9th", price: 0, metro: "Blanche, ligne 2", note: "The Moulin Rouge sign, the neon along boulevard de Clichy, and the quieter bars on rue Frochot. Worth seeing lit; not worth the ticket price inside.", tip: "South of the boulevard is where the good bars are. North of it is mostly for tourists." },

  // ---- Day 5 ----
  { id: "d5-1", day: 5, start: "09:30", end: "10:30", category: "Market", title: "Rue Cler market street", area: "7th", price: 0, metro: "École Militaire, ligne 8", note: "A pedestrian street of permanent food shops rather than stalls — cheese, bread, a fishmonger and a horse butcher that has been there a very long time.", tip: "Assemble a picnic here for the Champ de Mars later. It is the whole reason this slot comes first.", closed: "Mon" },
  { id: "d5-2", day: 5, start: "11:00", end: "13:00", category: "Landmark", title: "Eiffel Tower", area: "7th", price: 29, metro: "Bir-Hakeim, ligne 6", note: "Closer than you expect and browner than photographs suggest. The second floor has the better view; the top is mostly about having been to the top.", tip: "Book the timed lift slot weeks ahead, or climb the stairs to the second floor for roughly a third of the price and no queue." },
  { id: "d5-3", day: 5, start: "13:15", end: "14:30", category: "Park", title: "Picnic on the Champ de Mars", area: "7th", price: 0, metro: "École Militaire, ligne 8", note: "The long lawn south-east of the tower. Sit facing back toward it with the picnic from rue Cler.", tip: "The lawns nearest the tower are often fenced for reseeding. Walk a few hundred metres toward the École Militaire end." },
  { id: "d5-4", day: 5, start: "15:00", end: "17:00", category: "Walk", title: "Seine walk, Bir-Hakeim to Invalides", area: "7th", price: 0, metro: "Bir-Hakeim, ligne 6", note: "Down on the quay rather than up on the road. Under Bir-Hakeim the riveted steel columns repeat the whole way across the river.", tip: "The lower quay is closed when the river is high, which happens most winters. The upper path is a fair substitute." },
  { id: "d5-5", day: 5, start: "20:30", end: "21:10", category: "Evening", title: "Pont Alexandre III at dusk", area: "8th", price: 0, metro: "Invalides, lignes 8/13", note: "The most ornate bridge in the city, and the lamps come on at dusk and pick out every piece of gilt. Walk it east to west, then down the steps to the quay.", tip: "Go at dusk rather than full dark — you want the sky still blue behind the gold." },

  // ---- Day 6 ----
  { id: "d6-1", day: 6, start: "08:30", end: "09:30", category: "Walk", title: "RER C out to Versailles", area: "transfer", price: 4.5, metro: "RER C, Versailles Château–Rive Gauche", note: "About 40 minutes from the central stations. The train runs along the river for the first half, which is more interesting than it sounds.", tip: "A standard métro ticket does not cover this. Buy the Île-de-France ticket for the right zone or you will be fined." },
  { id: "d6-2", day: 6, start: "10:00", end: "12:30", category: "Museum", title: "Château de Versailles", area: "Versailles", price: 21, metro: "Versailles Château–Rive Gauche", note: "The State Apartments and the Hall of Mirrors. Crowded in a way that is genuinely hard to overstate, and still worth it once.", tip: "Tuesday and Sunday are the worst days. Arriving at opening beats any skip-the-line ticket.", closed: "Mon" },
  { id: "d6-3", day: 6, start: "12:45", end: "14:00", category: "Food", title: "Lunch in the gardens", area: "Versailles", price: 16, metro: "—", note: "The cafés near the Grand Canal are mediocre and fine. Bringing something from Paris is the better plan if you thought of it in time.", tip: "There is a market in Versailles town, five minutes from the station, open most mornings." },
  { id: "d6-4", day: 6, start: "14:00", end: "17:00", category: "Park", title: "Gardens & the Hameau de la Reine", area: "Versailles", price: 0, metro: "—", note: "The formal gardens are free on most days. The long walk to Marie-Antoinette's fake hamlet at the far end is the best part of the estate and the emptiest.", tip: "Rent a bike at the Grand Canal, or the walk out and back eats two hours on its own." },
  { id: "d6-5", day: 6, start: "19:30", end: "21:00", category: "Evening", title: "Dinner back in the 11th", area: "11th", price: 30, metro: "Parmentier, ligne 3", note: "After a day of grandeur, a small room with ten tables and a chalkboard. The 11th is where most of the interesting cooking in Paris happens now.", tip: "These places book out. If you plan one reservation for the whole week, make it this one." },

  // ---- Day 7 ----
  { id: "d7-1", day: 7, start: "09:30", end: "10:45", category: "Market", title: "Marché d'Aligre", area: "12th", price: 0, metro: "Ledru-Rollin, ligne 8", note: "Covered hall, open-air stalls and a flea market in the same square. Cheaper and scruffier than Bastille, and open almost every day.", tip: "The wine bar in the covered hall pours from eight in the morning. This is apparently normal.", closed: "Mon" },
  { id: "d7-2", day: 7, start: "11:15", end: "12:30", category: "Walk", title: "Canal Saint-Martin", area: "10th", price: 0, metro: "République, lignes 3/5/8/9/11", note: "Iron footbridges, plane trees and a chain of locks that still cycles for passing boats. The whole stretch is about thirty minutes at a slow pace.", tip: "If a lock is filling, stop and watch it. It takes about ten minutes and is the only thing on the canal that moves." },
  { id: "d7-3", day: 7, start: "13:00", end: "14:00", category: "Food", title: "Lunch, rue de Belleville", area: "20th", price: 14, metro: "Belleville, lignes 2/11", note: "Paris's other Chinatown, plus Tunisian bakeries and a lot of very good cheap food on one long uphill street.", tip: "Go up the hill rather than down. The food gets better and the rents get lower." },
  { id: "d7-4", day: 7, start: "14:30", end: "16:30", category: "Walk", title: "Père Lachaise", area: "20th", price: 0, metro: "Père Lachaise, lignes 2/3", note: "A walled city of tombs on a hillside, cobbled and steep and far larger than it looks on the map. Chopin, Wilde, Piaf, and thousands of people nobody visits.", tip: "Take a photo of the map at the gate. The numbered divisions are the only way to find anything, and phone signal is poor." },
  { id: "d7-5", day: 7, start: "18:00", end: "19:00", category: "Landmark", title: "Parc de Belleville at sunset", area: "20th", price: 0, metro: "Pyrénées, ligne 11", note: "The highest park in Paris, with the whole city laid out west and the tower on the horizon. Locals, a few beers, almost no visitors.", tip: "The terrace at the top of the park, not the bottom. Come twenty minutes before sunset." },
];

// One color per category, each measured against cream (#F6EFE3):
// all clear 4.5:1 as text, as cream-on-fill, and on their own 10% tint.
// Tomato is deliberately absent — it stays reserved for the primary action.
export const CATEGORY_COLOR = {
  Museum: "#3F5668", // slate   · 6.70:1
  Food: "#8C4A2F", // clay      · 5.86:1
  Market: "#55682C", // olive   · 5.40:1
  Walk: "#6B5423", // bronze    · 6.30:1
  Park: "#356B45", // green     · 5.50:1
  Landmark: "#6B3A52", // plum  · 7.81:1
  Evening: "#41477A", // indigo · 7.63:1
};

export const CATEGORY_LABEL = {
  Museum: "Museums & galleries",
  Food: "Food & drink",
  Market: "Markets",
  Walk: "Walks",
  Park: "Parks & gardens",
  Landmark: "Landmarks",
  Evening: "Evening",
};
