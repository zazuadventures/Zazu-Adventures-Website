export const tourFilters = [
  { key: "all", label: "All Tours" },
  { key: "day", label: "Day Trips" },
  { key: "multi-day", label: "Multi-Day Trips" },
  { key: "package", label: "Packages" },
];

function normalizeDestinationKey(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const dayTours = [
  {
    id: "guided-tour-victoria-falls",
    slug: "guided-tour-of-victoria-falls",
    destinationIds: ["victoria-falls"],
    title: "Guided Tour of Victoria Falls",

    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery2.png",

    gallery: [
      "https://zazuadventures.com/wp-content/uploads/2026/05/IMG_2859-scaled.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/05/IMG_2895-scaled.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/05/IMG-20250623-WA0025.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/05/IMG-20250731-WA0002-1.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/05/IMG-20250622-WA0009-1.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/05/IMG-20250622-WA0005-1.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/05/IMG-20250909-WA0163.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-06-at-16.50.28.jpeg",
    ],

    priceFrom: 40,

    duration: "2 - 3 Hours",

    location: "Victoria Falls, Zimbabwe",

    category: "Day Tour",

    type: "day",

    summary:
      "Discover the breathtaking beauty of Victoria Falls on a guided walking tour through the rainforest. Visit the most spectacular viewpoints, learn about the history, geology, and local legends of one of the Seven Natural Wonders of the World, and capture unforgettable photos of the world's largest sheet of falling water.",

    highlights: [
      "Explore Victoria Falls with a professional local guide",
      "Visit the best panoramic viewpoints of the Falls",
      "Learn about the history, geology, and local culture",
      "Enjoy incredible photography opportunities",
      "Experience the rainforest ecosystem and seasonal spray",
      "Perfect for first-time visitors to Victoria Falls",
    ],

    includes: [
      "Professional English-speaking guide",
      "Guided walking tour of Victoria Falls",
      "Tour briefing and local insights",
      "Assistance with activity and transfer arrangements",
    ],

    itinerary: [
      "Meet your guide at the designated meeting point in Victoria Falls.",
      "Enter the Victoria Falls Rainforest and begin your guided walking tour.",
      "Visit the iconic viewpoints, including Devil's Cataract, Main Falls, Horseshoe Falls, and Rainbow Falls (depending on water levels and seasonal conditions).",
      "Learn about the history of Victoria Falls, its discovery by David Livingstone, and its cultural significance.",
      "Stop at scenic viewpoints for photographs and to enjoy the spectacular mist and thunderous roar of the Falls.",
      "Conclude the tour with recommendations for other activities and optional transfers.",
    ],
  },
  {
    id: "helicopter-flight",
    slug: "helicopter-flight-over-victoria-falls",
    destinationIds: ["victoria-falls"],

    title: "Helicopter Flight Over Victoria Falls",

    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/Shearwater-Victoria-Falls-Zambezi-Spectacular-Helicopter-Experience-1.jpg",

    gallery: [
      "https://zazuadventures.com/wp-content/uploads/2026/05/Screenshot-2026-05-06-at-12.59.19.png",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Shearwater-Victoria-Falls-Zambezi-Spectacular-Helicopter-Experience_4.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Shearwater-Victoria-Falls-Zambezi-Spectacular-Helicopter-Experience.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Shearwater-Victoria-Falls-Zambezi-Spectacular-Helicopter-Experience_6.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Shearwater-Victoria-Falls-Zambezi-Spectacular-Helicopter-Experience_5.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Shearwater-Victoria-Falls-Zambezi-Spectacular-Helicopter-Experience_2.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Shearwater-Victoria-Falls-Zambezi-Spectacular-Helicopter-Experience_3.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Shearwater-Victoria-Falls-Zambezi-Spectacular-Helicopter-Experience_1.jpg",
    ],

    priceFrom: 205,

    duration: "15 - 25 Minutes",

    location: "Victoria Falls, Zimbabwe",

    category: "Day Tour",

    type: "day",

    summary:
      "Experience the world-famous Flight of Angels and witness Victoria Falls from above. Soar over the mighty Zambezi River, the Batoka Gorge, and one of the Seven Natural Wonders of the World for breathtaking panoramic views and unforgettable photographs.",

    highlights: [
      "Enjoy spectacular aerial views of Victoria Falls",
      "Fly over the Zambezi River and Batoka Gorge",
      "Experience the iconic Flight of Angels helicopter tour",
      "Capture incredible photographs from the sky",
      "Choose between 15-minute and 25-minute scenic flights",
      "Perfect addition to any Victoria Falls itinerary",
    ],

    includes: [
      "Helicopter scenic flight over Victoria Falls",
      "Professional pilot and safety briefing",
      "Airport transfers (where applicable)",
      "Pre-flight assistance and booking coordination",
    ],

    itinerary: [
      "Arrive at the helicopter base and complete your check-in and safety briefing.",
      "Board your helicopter and take off for a scenic flight over Victoria Falls.",
      "Enjoy unparalleled views of the Zambezi River, Batoka Gorge, and surrounding landscapes.",
      "Capture stunning aerial photographs during your flight.",
      "Land back at the helipad and receive assistance with transfers or planning your next Victoria Falls activity.",
    ],
  },
  {
    id: "zambezi-boat-cruise",
    slug: "zambezi-river-sunset-cruise",
    destinationIds: ["victoria-falls", "zambezi-river"],

    title: "Zambezi River Sunset Cruise",

    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/Zambezi-Breeze.jpg",

    gallery: [
      "https://zazuadventures.com/wp-content/uploads/2026/07/Zambezi-Explorer.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Zambezi-Explorer_1.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Zambezi-Explorer_3.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Hippos.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Zambezi-Explorer_2.jpeg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Private-Sunset-Cruise.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Zambezi-Explorer_4.jpg",
      "https://zazuadventures.com/wp-content/uploads/2026/07/Zambezi-Breeze_1.jpg",
    ],

    priceFrom: 80,

    duration: "2 - 3 Hours",

    location: "Zambezi River, Victoria Falls",

    category: "Day Tour",

    type: "day",

    summary:
      "Experience one of Victoria Falls' most popular activities aboard a relaxing sunset cruise on the mighty Zambezi River. Watch the African sunset paint the sky while spotting hippos, crocodiles, elephants, and a variety of birdlife as you enjoy drinks and delicious snacks on the water.",

    highlights: [
      "Cruise the Zambezi River at sunset",
      "Spot hippos, crocodiles, elephants, and birdlife",
      "Enjoy spectacular African sunset views",
      "Relax with complimentary drinks and snacks",
      "Capture beautiful photographs of the river and wildlife",
      "Perfect for couples, families, and groups",
    ],

    includes: [
      "Zambezi River sunset cruise",
      "Complimentary drinks and light snacks",
      "Professional onboard host and crew",
      "Wildlife viewing opportunities",
      "Pre-booking and activity assistance",
    ],

    itinerary: [
      "Transfer to the departure point and board your sunset cruise vessel.",
      "Set sail along the Zambezi River while enjoying panoramic views of the surrounding wilderness.",
      "Spot wildlife including hippos, crocodiles, elephants, and numerous bird species along the riverbanks.",
      "Enjoy complimentary drinks and light snacks as the sun sets over the African horizon.",
      "Return to the jetty after sunset with optional transfer arrangements available.",
    ],
  },
  {
    id: "boma-dinner-drum-show",
    slug: "the-boma-dinner-and-drum-show",
    destinationIds: ["victoria-falls", "local-community"],

    title: "The Boma Dinner & Drum Show",

    image: "https://zazuadventures.com/wp-content/uploads/2026/07/dsc6710.jpg",

    gallery: [""],

    priceFrom: 80,

    duration: "2 - 3 Hours",

    location: "Victoria Falls, Zimbabwe",

    category: "Day Tour",

    type: "day",

    summary:
      "Experience an unforgettable African evening at The Boma Dinner & Drum Show in Victoria Falls. Enjoy a lavish buffet of traditional and international cuisine, interactive drumming performances, vibrant cultural entertainment, and an authentic taste of Zimbabwean hospitality.",

    highlights: [
      "Enjoy Victoria Falls' most popular cultural dining experience",
      "Sample traditional Zimbabwean and international dishes",
      "Take part in the famous interactive drumming show",
      "Watch live traditional dance and cultural performances",
      "Experience authentic African hospitality and entertainment",
      "Perfect for families, couples, and groups",
    ],

    includes: [
      "Dinner at The Boma Restaurant",
      "Traditional welcome ceremony",
      "Interactive drumming experience",
      "Live cultural dance and entertainment",
      "Booking and activity coordination assistance",
    ],

    itinerary: [
      "Arrive at The Boma Restaurant and receive a traditional African welcome.",
      "Enjoy an extensive buffet featuring local delicacies and international favourites.",
      "Participate in the interactive drumming session led by talented local performers.",
      "Watch traditional dance performances and experience Zimbabwean culture firsthand.",
      "Conclude your evening with unforgettable memories and optional transfer arrangements.",
    ],
  },
  {
  id: "tour-around-zimbabwe",
  slug: "tour-around-zimbabwe",

  destinationIds: [
    "victoria-falls",
    "harare",
    "great-zimbabwe",
    "matobo-hills",
    "hwange-national-park"
  ],

  title: "Tour Around Zimbabwe",

  image: "https://zazuadventures.com/wp-content/uploads/2026/07/zimbabwe-tour.jpg",

  gallery: [""],

  priceFrom: 4300,

  duration: "7 - 14 Days",

  location: "Zimbabwe",

  category: "Multi-Day Tour",

  type: "multi-day",

  summary:
    "Discover the beauty, culture, wildlife, and history of Zimbabwe on an unforgettable journey across the country. Explore the mighty Victoria Falls, experience thrilling wildlife safaris, visit ancient historical sites, and immerse yourself in Zimbabwe's breathtaking landscapes and local communities.",

  highlights: [
    "Explore the magnificent Victoria Falls, one of the world's natural wonders",
    "Experience unforgettable wildlife encounters in Zimbabwe's national parks",
    "Discover the ancient Great Zimbabwe historical monument",
    "Visit the scenic Matobo Hills and experience its cultural heritage",
    "Enjoy authentic Zimbabwean cuisine and local hospitality",
    "Experience the diversity of Zimbabwe's landscapes, people, and traditions",
  ],

  includes: [
    "Accommodation throughout the tour",
    "Professional local guide and tour assistance",
    "Transport between destinations",
    "Entry fees to selected attractions and activities",
    "Wildlife safari experiences",
    "Booking and activity coordination assistance",
  ],

  itinerary: [
    "Begin your Zimbabwe adventure in Victoria Falls with sightseeing, adventure activities, and cultural experiences.",
    "Travel through Zimbabwe's beautiful landscapes while exploring national parks and enjoying wildlife encounters.",
    "Visit Hwange National Park for a memorable safari experience with opportunities to see elephants, lions, and other wildlife.",
    "Explore the historic Great Zimbabwe ruins and learn about the country's ancient civilisation.",
    "Discover the dramatic landscapes and cultural significance of the Matobo Hills.",
    "Conclude your journey with unforgettable memories of Zimbabwe's wildlife, history, and hospitality.",
  ],
},
];

export const multiDayTours = [
  {
    id: "victoria-falls-chobe",
    slug: "victoria-falls-chobe",
    destinationIds: ["victoria-falls", "chobe-national-park", "zambezi-river"],
    title: "Victoria Falls, Chobe",
    image: "https://zazuadventures.com/wp-content/uploads/2026/07/hwange.jpeg",
    gallery: [""],
    priceFrom: 1450,
    duration: "3 Days",
    location: "Victoria Falls & Chobe",
    category: "Multi-Day Tour",
    type: "multi-day",
    summary:
      "Experience the best of Zimbabwe and Botswana with a 3-day adventure combining the spectacular Victoria Falls, a relaxing Zambezi River sunset cruise, and an unforgettable Chobe National Park safari.",

    highlights: [
      "Guided Victoria Falls tour",
      "Chobe National Park game drive",
      "Chobe River boat cruise",
      "Zambezi River sunset cruise",
      "Cross-border safari experience",
    ],

    includes: [
      "Return transfers",
      "Guided Victoria Falls tour",
      "Chobe game drive",
      "Chobe River boat cruise",
      "Professional guides",
    ],

    itinerary: [
      "Day 1: Arrival in Victoria Falls, guided tour of the Falls, followed by a relaxing sunset cruise on the Zambezi River.",
      "Day 2: Full-day Chobe National Park safari in Botswana, including a morning game drive, buffet lunch, and an afternoon Chobe River boat cruise.",
      "Day 3: Leisure morning in Victoria Falls before departure transfer.",
    ],
  },
  {
    id: "cape-town-kruger-vic-falls-chobe",
    slug: "cape-town-kruger-vic-falls-chobe",
    destinationIds: [
      "cape-town",
      "kruger-national-park",
      "victoria-falls",
      "chobe-national-park",
    ],
    title: "Cape Town, Kruger, Vic Falls and Chobe",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/HwangeGallery3.png",
    priceFrom: 4800,
    duration: "5 Days",
    location: "South Africa, Zimbabwe & Botswana",
    category: "Multi-Day Tour",
    type: "multi-day",
    summary:
      "Experience the best of Southern Africa with an unforgettable journey through Cape Town, Kruger National Park, Victoria Falls, and Chobe National Park, combining vibrant city life, world-class safaris, and iconic natural wonders.",

    highlights: [
      "Explore Cape Town",
      "Kruger National Park safari",
      "Guided Victoria Falls tour",
      "Chobe National Park game drive",
      "Chobe River boat cruise",
      "Three-country adventure",
    ],

    includes: [
      "Accommodation",
      "Airport and road transfers",
      "Guided Cape Town sightseeing",
      "Kruger National Park game drive",
      "Guided Victoria Falls tour",
      "Chobe game drive",
      "Chobe River boat cruise",
      "Professional guides",
    ],

    itinerary: [
      "Day 1: Arrive in Cape Town and enjoy a guided city tour, including Table Mountain (weather permitting) and the V&A Waterfront.",
      "Day 2: Fly to Kruger National Park for an afternoon game drive and overnight stay.",
      "Day 3: Morning safari in Kruger before flying to Victoria Falls for an evening at leisure.",
      "Day 4: Guided tour of Victoria Falls followed by a full-day excursion to Chobe National Park, including a game drive, buffet lunch, and Chobe River boat cruise.",
      "Day 5: Leisure morning before your airport transfer for departure.",
    ],
  },
  {
    id: "hwange-victoria-falls-chobe-nata",
    slug: "hwange-national-park-victoria-falls-chobe-nata",
    destinationIds: [
      "hwange-national-park",
      "victoria-falls",
      "chobe-national-park",
      "nata",
    ],
    title: "Hwange National Park, Victoria Falls, Chobe and Nata",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/ChobeGallery4.png",
    gallery: [""],
    priceFrom: 2500,
    duration: "4 Days",
    location: "Hwange • Victoria Falls • Chobe • Nata",
    category: "Multi-Day Tour",
    type: "multi-day",
    summary:
      "Embark on an unforgettable four-day journey through Zimbabwe and Botswana, combining the wildlife of Hwange National Park, the natural wonder of Victoria Falls, the famous Chobe National Park, and the scenic landscapes of Nata.",

    highlights: [
      "Hwange National Park game drive",
      "Guided Victoria Falls tour",
      "Chobe National Park safari",
      "Chobe River boat cruise",
      "Visit to Nata",
      "Cross-border wildlife adventure",
    ],

    includes: [
      "Return transfers",
      "Guided Victoria Falls tour",
      "Hwange game drive",
      "Chobe game drive",
      "Chobe River boat cruise",
      "Accommodation",
      "Professional guides",
    ],

    itinerary: [
      "Day 1: Arrival in Victoria Falls and transfer to Hwange National Park for an afternoon game drive and overnight stay.",
      "Day 2: Morning safari in Hwange before returning to Victoria Falls for a guided tour of the Falls and overnight stay.",
      "Day 3: Cross into Botswana for a full-day Chobe National Park experience, including a game drive, river cruise, and continue to Nata for an overnight stay.",
      "Day 4: Enjoy breakfast in Nata before your departure or onward transfer.",
    ],
  },
  {
    id: "hwange-victoria-falls-chobe-okavango",
    slug: "hwange-national-park-victoria-falls-chobe-okavango-delta",
    destinationIds: [
      "hwange-national-park",
      "victoria-falls",
      "chobe-national-park",
      "okavango-delta",
    ],
    title: "Hwange National Park, Victoria Falls, Chobe and Okavango Delta",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/okavango-scaled.jpg",
    priceFrom: 4800,
    duration: "6 Days",
    location: "Zimbabwe & Botswana",
    category: "Multi-Day Tour",
    type: "multi-day",
    summary:
      "Experience the ultimate Southern African safari, combining the wildlife-rich Hwange National Park, the magnificent Victoria Falls, the famous Chobe National Park, and the breathtaking waterways of the Okavango Delta.",

    highlights: [
      "Hwange National Park game drives",
      "Guided Victoria Falls tour",
      "Chobe National Park safari",
      "Chobe River boat cruise",
      "Okavango Delta mokoro excursion",
      "Cross-border wildlife adventure",
    ],

    includes: [
      "Accommodation",
      "Return transfers",
      "Guided Victoria Falls tour",
      "Hwange game drives",
      "Chobe game drive",
      "Chobe River boat cruise",
      "Okavango Delta mokoro excursion",
      "Professional guides",
    ],

    itinerary: [
      "Day 1: Arrival in Victoria Falls and transfer to Hwange National Park for an afternoon game drive and overnight stay.",
      "Day 2: Morning safari in Hwange before returning to Victoria Falls for a guided tour of the Falls and overnight stay.",
      "Day 3: Cross into Botswana for a full-day Chobe National Park safari, including a game drive, river cruise, and overnight stay.",
      "Day 4: Transfer to the Okavango Delta and enjoy an afternoon mokoro excursion through the pristine waterways.",
      "Day 5: Full-day Okavango Delta safari with guided bush walks, wildlife viewing, and optional boat activities.",
      "Day 6: Breakfast followed by your departure transfer.",
    ],
  },
];

export const packages = [
  {
    id: "victoria-falls-tour-lunch-sunset-cruise",
    slug: "victoria-falls-tour-lunch-sunset-cruise",
    destinationIds: ["victoria-falls", "zambezi-river"],
    title: "Victoria Falls Tour, Lunch and Sunset Cruise",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/05/IMG-20250623-WA0029.jpg",
    priceFrom: 120,
    duration: "Full Day",
    location: "Victoria Falls",
    category: "Package",
    type: "package",
    summary:
      "Discover the majestic Victoria Falls on a guided tour, enjoy a delicious lunch at a local restaurant, and end your day with a relaxing sunset cruise on the Zambezi River.",

    highlights: [
      "Guided tour of Victoria Falls",
      "Lunch at a selected local restaurant",
      "Sunset cruise on the Zambezi River",
      "Wildlife and bird viewing",
      "Complimentary snacks and drinks on the cruise",
    ],

    includes: [
      "Guided Victoria Falls tour",
      "Lunch",
      "Sunset cruise",
      "Return hotel transfers",
      "Professional guide",
    ],

    itinerary: [
      "Morning: Pick-up from your accommodation and enjoy a guided tour of the magnificent Victoria Falls, visiting the best viewpoints.",
      "Afternoon: Relax with lunch at a carefully selected local restaurant.",
      "Late Afternoon: Board a luxury sunset cruise on the Zambezi River with snacks, drinks, and opportunities to spot wildlife while watching the African sunset.",
      "Evening: Return transfer to your accommodation.",
    ],
  },
  {
    id: "",
    slug: "am-bamba-tram-falls-tour-boma",
    destinationIds: ["victoria-falls"],
    title: "AM Bamba Tram, Falls Tour and Boma",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/Bamba-Tram_2.jpg",
    priceFrom: 200,
    duration: "Full Day",
    location: "Victoria Falls",
    category: "Package",
    type: "package",
    summary:
      "Experience the charm of the Bamba Tram, discover the breathtaking Victoria Falls on a guided tour, and end your day with the famous Boma Dinner and Drum Show for an unforgettable cultural evening.",

    highlights: [
      "Scenic Bamba Tram experience",
      "Guided Victoria Falls tour",
      "The Boma Dinner & Drum Show",
    ],

    includes: [
      "Bamba Tram ride",
      "Guided Victoria Falls tour",
      "The Boma Dinner and Drum Show",
      "Return hotel transfers",
      "Professional guide",
    ],

    itinerary: [
      "Morning: Pick-up from your accommodation and enjoy a scenic ride on the Bamba Tram.",
      "Late Morning: Explore the magnificent Victoria Falls on a guided tour, visiting the best viewpoints and learning about its history and geology.",
      "Evening: Transfer to The Boma Restaurant for a traditional African dinner, drumming, cultural performances, and entertainment before returning to your accommodation.",
    ],
  },
  {
    id: "",
    slug: "am",
    destinationIds: "victoria-falls",
    title: "AM Safari Drive, Helicopter Flight and Boma Dinner",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/Game-Drives.jpg",
    priceFrom: 365,
    duration: "Full Day",
    location: "Victoria Falls",
    category: "Package",
    type: "package",
    summary:
      "Experience an exciting morning safari drive, enjoy breathtaking aerial views of Victoria Falls on a helicopter flight, and end your day with the famous Boma Dinner and Drum Show.",

    highlights: [
      "Morning game drive",
      "Helicopter flight over Victoria Falls",
      "The Boma Dinner & Drum Show",
    ],

    includes: [
      "Morning safari drive",
      "Helicopter flight",
      "The Boma Dinner and Drum Show",
      "Return transfers",
      "Professional guides",
    ],

    itinerary: [
      "Morning: Pick-up from your accommodation and depart for a guided safari drive in Zambezi National Park.",
      "Midday: Enjoy the iconic Helicopter Flight over Victoria Falls for spectacular aerial views.",
      "Evening: Transfer to The Boma Restaurant for dinner, traditional entertainment, drumming, and cultural performances before returning to your accommodation.",
    ],
  },
  {
    id: "lion-elephant-walk-helicopter-sunset-cruise",
    slug: "lion-elephant-walk-helicopter-sunset-cruise",
    destinationIds: ["victoria-falls", "zambezi-river"],
    title: "Lion/Elephant Walk, Helicopter Flight and Sunset Cruise",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/05/583051098_829236743146707_772401892647147049_n.jpg",
    priceFrom: 450,
    duration: "Full Day",
    location: "Victoria Falls",
    category: "Package",
    type: "package",
    summary:
      "Enjoy an unforgettable day in Victoria Falls featuring a close-up lion or elephant encounter, a spectacular helicopter flight over the Falls, and a relaxing sunset cruise on the Zambezi River.",

    highlights: [
      "Lion or Elephant Walk experience",
      "Helicopter Flight over Victoria Falls",
      "Zambezi River Sunset Cruise",
      "Wildlife encounters",
      "Scenic aerial views of the Falls",
    ],

    includes: [
      "Lion or Elephant Walk",
      "Helicopter Flight",
      "Sunset Cruise",
      "Return hotel transfers",
      "Professional guides",
    ],

    itinerary: [
      "Morning: Pick-up from your accommodation for a memorable Lion or Elephant Walk experience.",
      "Midday: Take to the skies on the iconic Helicopter Flight over Victoria Falls for breathtaking panoramic views.",
      "Late Afternoon: Board a luxury sunset cruise on the Zambezi River with complimentary snacks and drinks while watching wildlife and the African sunset.",
      "Evening: Return transfer to your accommodation.",
    ],
  },
];

export const allTours = [...dayTours, ...multiDayTours, ...packages];

export const homepageActivities = dayTours.slice(0, 4);

export function getTourPath(slug = "") {
  const normalizedSlug = slug.toString().trim().toLowerCase();

  return normalizedSlug ? `/tours/${normalizedSlug}` : "/tours";
}

export function getTourBySlug(slug = "") {
  const normalized = slug.toString().trim().toLowerCase();
  return allTours.find((tour) => tour.slug === normalized) || null;
}

export function getToursByDestination(destinationId = "") {
  const normalizedDestinationId = normalizeDestinationKey(destinationId);

  if (!normalizedDestinationId) {
    return [];
  }

  return allTours.filter((tour) => {
    const destinationIds = Array.isArray(tour.destinationIds)
      ? tour.destinationIds
      : tour.destinationId
        ? [tour.destinationId]
        : [];

    return destinationIds.some(
      (tourDestinationId) =>
        normalizeDestinationKey(tourDestinationId) === normalizedDestinationId,
    );
  });
}

export function getToursByType(type = "all") {
  if (type === "all") {
    return allTours;
  }

  return allTours.filter((tour) => tour.type === type);
}

export const tourSections = [
  { key: "day", title: "Day Trips", items: dayTours },
  { key: "multi-day", title: "Multi-Day Trips", items: multiDayTours },
  { key: "package", title: "Packages", items: packages },
];
