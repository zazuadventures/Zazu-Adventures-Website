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

    gallery: [
      ""
    ],

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
];

export const multiDayTours = [
  {
    id: "hwange-safari",
    slug: "hwange-national-park-safari",
    destinationIds: ["hwange-national-park"],
    title: "Hwange National Park Safari",
    image: "https://zazuadventures.com/wp-content/uploads/2026/07/hwange.jpeg",
    priceFrom: 420,
    duration: "3 Days",
    location: "Hwange",
    category: "Multi-Day Tour",
    type: "multi-day",
    summary:
      "A classic safari escape with elephants, predators, and expansive game-drive country.",
    highlights: [
      "Big game viewing",
      "Luxury lodge stays",
      "Longer safari time",
    ],
    includes: ["Accommodation planning", "Game drives", "Safari coordination"],
    itinerary: [
      "Day 1: Transfer to Hwange and settle into camp.",
      "Day 2: Full-day game drives and wildlife viewing.",
      "Day 3: Sunrise safari and return transfer.",
    ],
  },
  {
    id: "victoria-falls-hwange-combo",
    slug: "victoria-falls-and-hwange-combo",
    destinationIds: ["victoria-falls", "hwange-national-park"],
    title: "Victoria Falls and Hwange Combo",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery2.png",
    priceFrom: 690,
    duration: "4 Days",
    location: "Victoria Falls + Hwange",
    category: "Multi-Day Tour",
    type: "multi-day",
    summary:
      "Combine the drama of Victoria Falls with the wildlife density of Hwange in one trip.",
    highlights: [
      "Falls viewpoints",
      "Safari game drives",
      "Efficient two-stop itinerary",
    ],
    includes: ["Transfers", "Planning support", "Accommodation coordination"],
    itinerary: [
      "Day 1: Victoria Falls arrival and evening activity.",
      "Day 2: Falls tour and optional cruise or flight.",
      "Day 3: Transfer to Hwange with afternoon safari.",
      "Day 4: Morning game drive and departure.",
    ],
  },
  {
    id: "okavango-expedition",
    slug: "okavango-delta-expedition",
    destinationIds: ["okavango-delta"],
    title: "Okavango Delta Expedition",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/okavango-scaled.jpg",
    priceFrom: 1350,
    duration: "6 Days",
    location: "Botswana",
    category: "Multi-Day Tour",
    type: "multi-day",
    summary:
      "A remote wilderness journey with mokoro rides, water channels, and premium camp stays.",
    highlights: ["Mokoro rides", "Water safaris", "Remote camps"],
    includes: ["Camp planning", "Safari transfers", "Itinerary support"],
    itinerary: [
      "Day 1: Arrival and transfer into the delta region.",
      "Days 2-4: Water activities, game viewing, and camp time.",
      "Day 5: Optional scenic activity or second camp.",
      "Day 6: Return journey and departure.",
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
    duration: "1 Day",
    location: "Victoria Falls",
    category: "Package",
    type: "package",
    summary:
      "A simple all-in-one package combining viewpoints, lunch, and a river sunset.",
    highlights: [
      "Great first-timer package",
      "Lunch included",
      "Sunset on the river",
    ],
    includes: [
      "Guided tour",
      "Lunch arrangement",
      "Sunset cruise coordination",
    ],
    itinerary: [
      "Start with the guided falls tour.",
      "Pause for lunch at a curated venue.",
      "End the day with a sunset cruise.",
    ],
  },
  {
    id: "falls-safari-package",
    slug: "falls-safari-and-cruise-package",
    destinationIds: ["victoria-falls", "hwange-national-park", "zambezi-river"],
    title: "Falls, Safari and Cruise Package",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery3.png",
    priceFrom: 260,
    duration: "2 Days",
    location: "Victoria Falls",
    category: "Package",
    type: "package",
    summary:
      "A balanced short break with iconic viewpoints, wildlife, and a river experience.",
    highlights: ["Viewpoints", "Safari add-on", "Cruise included"],
    includes: [
      "Trip coordination",
      "Transfer planning",
      "Activity booking support",
    ],
    itinerary: [
      "Day 1: Victoria Falls guided experience and lunch.",
      "Day 2: Safari add-on followed by a sunset cruise.",
    ],
  },
  {
    id: "botswana-zimbabwe-highlights",
    slug: "botswana-and-zimbabwe-highlights-package",
    destinationIds: ["victoria-falls", "chobe-national-park", "okavango-delta"],
    title: "Botswana and Zimbabwe Highlights Package",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/ChobeGallery1.png",
    priceFrom: 1350,
    duration: "6 Days",
    location: "Zimbabwe + Botswana",
    category: "Package",
    type: "package",
    summary:
      "A polished cross-border itinerary with waterfalls, safari, and signature river moments.",
    highlights: ["Two countries", "Premium add-ons", "All-in-one package"],
    includes: ["Itinerary planning", "Transfers", "Activity booking support"],
    itinerary: [
      "Days 1-2: Victoria Falls experiences.",
      "Days 3-4: Safari and river activities.",
      "Days 5-6: Optional Botswana extension and departure.",
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
