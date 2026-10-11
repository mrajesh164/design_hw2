// One photograph per stop, stored in /public/trip/stops/<id>.jpg so the page
// makes no external requests.
//
// Licences differ and several REQUIRE visible credit. Unsplash and Pexels
// images are attribution-optional; the Creative Commons ones are not, and
// four of those are ShareAlike. Every name below was read off the photo page
// itself rather than a search result, so do not "tidy" them.
//
// `note` marks the handful of images that are not literally the named place.

export const STOP_PHOTOS = {
  "d1-1": { alt: "A chrome espresso machine topped with rows of white cups on a dark wooden café counter beneath three pendant lamps.", by: "Céline", src: "Pexels", lic: "Pexels License", url: "https://www.pexels.com/photo/a-coffee-machine-is-in-the-middle-of-a-room-18394811/", note: "A Paris café, but not Verlet itself" },
  "d1-2": { alt: "Sunlit pink magnolias framing the arcaded stone colonnade of the Palais-Royal across a green lawn, the tricolour flying above.", by: "Svitlana Shakalova", src: "Pexels", lic: "Pexels License", url: "https://www.pexels.com/photo/elegant-spring-scene-at-palais-royal-garden-31250248/" },
  "d1-3": { alt: "Crowds on the sunlit pedestrian rue Montorgueil, passing café terraces packed with diners under cream and red awnings.", by: "Jean-Christophe BENOIST", src: "Wikimedia Commons", lic: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Paris_-_Rue_Montorgueil.JPG" },
  "d1-4": { alt: "Two people lounging in green metal chairs beside the round basin of the Tuileries, the fountain playing in front of the Louvre.", by: "Alessandro Cavestro", src: "Unsplash", lic: "Unsplash License", url: "https://unsplash.com/photos/a-couple-of-men-sitting-on-green-chairs-in-front-of-a-fountain-NKLLDNefQ_8" },
  "d1-5": { alt: "The cream-and-gold dining room of Bouillon Chartier, lined with tall mirrors, brass rails and globe lamps above crowded tables.", by: "MOSSOT", src: "Wikimedia Commons", lic: "CC BY 3.0", url: "https://commons.wikimedia.org/wiki/File:Bouillon_Chartier_-2.JPG" },

  "d2-1": { alt: "Diners at long wooden benches in the narrow covered alley of the Marché des Enfants Rouges, flanked by food stalls.", by: "Connie Ma", src: "Wikimedia Commons", lic: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:March%C3%A9_des_Enfants-Rouges,_Paris_July_2014.jpg" },
  "d2-2": { alt: "Towering stained-glass windows in deep blues and reds filling the upper chapel of the Sainte-Chapelle.", by: "Jean-Christophe BENOIST", src: "Wikimedia Commons", lic: "CC BY 3.0", url: "https://commons.wikimedia.org/wiki/File:Paris-SainteChapelle-Interieur.jpg" },
  "d2-3": { alt: "A queue outside the bright green shopfront of L'As du Fallafel on the sunlit cobbles of rue des Rosiers.", by: "Andrea Schaffer", src: "Wikimedia Commons", lic: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:As_du_falafel_Paris_Marais_Rue_des_rosiers.jpg" },
  "d2-4": { alt: "The matching red-brick and pale-stone pavilions of the Place des Vosges behind clipped trees, people sitting on the lawn.", by: "Diego Delso", src: "Wikimedia Commons", lic: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Plaza_de_los_Vosgos,_Par%C3%ADs,_Francia,_2022-10-30,_DD_58.jpg" },
  "d2-5": { alt: "The bronze statue of Louis XIV in the sunlit cobbled courtyard of the Hôtel Carnavalet, before a carved Renaissance facade.", by: "DiscoA340", src: "Wikimedia Commons", lic: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Statue_of_Louis_XIV_at_the_Mus%C3%A9e_Carnavalet.jpg" },

  "d3-1": { alt: "The barrel-vaulted nave of the Musée d'Orsay, its glass roof arching over the sculpture gallery and the great station window.", by: "xiquinhosilva", src: "Wikimedia Commons", lic: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Paris_75007_Mus%C3%A9e_d%27Orsay_Grande_nef_centrale_20170528.jpg" },
  "d3-2": { alt: "The crowded pavement terrace of Les Deux Magots, small round tables and cane chairs under a green awning hung with geraniums.", by: "Robyn Lee", src: "Wikimedia Commons", lic: "Public domain", url: "https://commons.wikimedia.org/wiki/File:Lesdeuxmagots.jpg" },
  "d3-3": { alt: "The green and yellow painted shopfront of Shakespeare and Company, with its hand-lettered sign and chalkboard panels.", by: "mana5280", src: "Unsplash", lic: "Unsplash License", url: "https://unsplash.com/photos/shakespeare-and-company-store-front-with-green-and-yellow-awning-gR_4IZk80Yw" },
  "d3-4": { alt: "The great octagonal basin of the Jardin du Luxembourg on a bright day, framed by potted palms and pale green metal chairs.", by: "xiquinhosilva", src: "Wikimedia Commons", lic: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Paris_75006_Jardin_du_Luxembourg_Bassin_20170527.jpg" },
  "d3-5": { alt: "A narrow cobbled street lined with restaurants, their awnings and chalkboard menus over cane chairs and orange-clothed tables.", by: "besopha", src: "Wikimedia Commons", lic: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Rue_Mouffetard,_Paris.jpg" },

  "d4-1": { alt: "A corner Parisian boulangerie-pâtisserie with gilt-lettered signs and a warmly lit interior glowing through curved windows.", by: "Pia Varošanec", src: "Pexels", lic: "Pexels License", url: "https://www.pexels.com/photo/charming-paris-patisserie-street-view-38889078/" },
  "d4-2": { alt: "The white domes and towers of the Sacré-Cœur against a blue sky, crowds sitting on the steps below.", by: "Fernando Losada Rodríguez", src: "Wikimedia Commons", lic: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Basilique_du_Sacr%C3%A9-C%C5%93ur.001_-_Montmartre.jpg" },
  "d4-3": { alt: "Terraced rows of vines on the Montmartre hillside with a crimson ivy-covered arbour and apartment buildings rising behind.", by: "Son of Groucho", src: "Wikimedia Commons", lic: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Montmartre_vineyard_2012-10-09_n2.jpg" },
  "d4-4": { alt: "The cobbled corner of rue Saint-Rustique in Montmartre, the green front of La Bonne Franquette facing the red one of Le Consulat.", by: "Céline", src: "Pexels", lic: "Pexels License", url: "https://www.pexels.com/photo/charming-montmartre-street-scene-in-paris-32757441/" },
  "d4-5": { alt: "The Moulin Rouge on boulevard de Clichy after dark, its red windmill and neon signs glowing against a black sky.", by: "Lola Delabays", src: "Unsplash", lic: "Unsplash License", url: "https://unsplash.com/photos/moulin-rouge-building-during-nighttime-G-rXfLPhWys" },

  "d5-1": { alt: "A greengrocer on rue Cler with a green awning lettered FRUITS and LÉGUMES over open crates and handwritten price signs.", by: "besopha", src: "Wikimedia Commons", lic: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Fruit_shop,_Rue_Cler,_Paris_18_August_2016.jpg" },
  "d5-2": { alt: "The Eiffel Tower seen from directly beneath, the sunlit ironwork of its arch and legs filling the frame against blue sky.", by: "Sung Jin Cho", src: "Unsplash", lic: "Unsplash License", url: "https://unsplash.com/photos/a-view-of-the-eiffel-tower-from-underneath-4-aOFx51Y_c" },
  "d5-3": { alt: "People sitting on the lawn of the Champ de Mars on a sunny afternoon, the Eiffel Tower rising directly behind them.", by: "Stephen Leonardi", src: "Pexels", lic: "Pexels License", url: "https://www.pexels.com/photo/people-sitting-on-the-grass-in-front-of-the-eiffel-tower-in-paris-france-18558688/" },
  "d5-4": { alt: "The lower deck of the Pont de Bir-Hakeim, its riveted steel columns receding in golden light toward a distant cyclist.", by: "Ivan", src: "Unsplash", lic: "Unsplash License", url: "https://unsplash.com/photos/eb28tNdhf-w" },
  "d5-5": { alt: "The Pont Alexandre III at dusk, its gilded lamp posts lit in a receding line under a violet sky, Les Invalides glowing behind.", by: "Léonard Cotte", src: "Unsplash", lic: "Unsplash License", url: "https://unsplash.com/photos/R5scocnOOdM" },

  "d6-1": { alt: "A silver and blue SNCF regional train standing at a sunlit platform under a red ironwork station canopy.", by: "Antoine Schibler", src: "Unsplash", lic: "Unsplash License", url: "https://unsplash.com/photos/a-train-at-a-train-station-H84rHbx7IP0", note: "A French regional train, photographed at Strasbourg rather than in Paris" },
  "d6-2": { alt: "The Hall of Mirrors at Versailles flooded with afternoon sun, its chandeliers and gilded figures reflected along the parquet.", by: "Myrabella", src: "Wikimedia Commons", lic: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Chateau_Versailles_Galerie_des_Glaces.jpg" },
  "d6-3": { alt: "A gingham blanket on summer grass with an open wicker hamper, a baguette, a bottle of wine, fruit and a bicycle at the edge.", by: "Melike B", src: "Pexels", lic: "Pexels License", url: "https://www.pexels.com/photo/picnic-in-a-park-16564695/", note: "A picnic, not photographed at Versailles" },
  "d6-4": { alt: "The clipped box parterres of the Parterre du Midi at Versailles in late light, with a reflecting pond and the palace behind.", by: "Basile Morin", src: "Wikimedia Commons", lic: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Parterre_du_Midi_Garden_pond_and_Palace_of_Versailles_at_golden_hour_with_blue_sky_in_France.jpg" },
  "d6-5": { alt: "Dark wooden bistro tables with bentwood chairs, wine glasses and folded napkins, warmly lit at night with the street outside.", by: "Hernán Santarelli", src: "Pexels", lic: "Pexels License", url: "https://www.pexels.com/photo/tables-in-an-empty-restaurant-11794317/", note: "A small bistro interior; the location is not stated" },

  "d7-1": { alt: "A fruit stall under a cream awning at the Marché d'Aligre, piled with peaches and melons behind chalkboard price signs.", by: "Jesús Gorriti", src: "Wikimedia Commons", lic: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:March%C3%A9_dAligre_4.jpg" },
  "d7-2": { alt: "The arched iron footbridge over the Récollets locks on the Canal Saint-Martin, framed by plane trees, a barge in the lock.", by: "JLPC", src: "Wikimedia Commons", lic: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Paris_Canal_St-Martin_%C3%A9cluses_R%C3%A9collets_2013.jpg" },
  "d7-3": { alt: "A green-fronted Asian grocery hung with red and gold lanterns, crates of fruit stacked on the pavement under plane trees.", by: "besopha", src: "Wikimedia Commons", lic: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Avenue_de_Choisy,_75013_Paris,_France_August_2013.jpg", note: "The 13th-arrondissement Chinatown rather than Belleville" },
  "d7-4": { alt: "A cobbled avenue at Père Lachaise running between close-packed stone tombs, dappled with sunlight under green trees.", by: "Pierre Antona", src: "Unsplash", lic: "Unsplash License", url: "https://unsplash.com/photos/145EQRoe5Og" },
  "d7-5": { alt: "Grey zinc Paris rooftops stretching to the horizon under an orange sunset sky, La Défense silhouetted beyond.", by: "Gökberk Keskinkılıç", src: "Pexels", lic: "Pexels License", url: "https://www.pexels.com/photo/city-building-during-sunset-14707452/", note: "An elevated view over the rooftops, not taken from Parc de Belleville" },
};

export const HERO_PHOTO = {
  by: "Lens by Benji",
  src: "Unsplash",
  lic: "Unsplash License",
  url: "https://unsplash.com/photos/cobblestone-street-with-buildings-and-people-at-sunset-0KLCWI3QkIk",
};
