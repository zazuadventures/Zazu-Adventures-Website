export const destinations = [
  {
    id: "victoria-falls",
    title: "Victoria Falls",
    location: "Victoria Falls",
    region: "Zimbabwe",
    summary:
      "The iconic waterfall destination with dramatic viewpoints, river sunsets, and adventure activities.",
    heroImage: "https://zazuadventures.com/wp-content/uploads/2026/07/victoria-falls.jpg",
    about:
      "Victoria Falls is one of Africa's most unforgettable destinations, pairing dramatic natural scenery with wildlife encounters, river-based experiences, and adventure activities.",
    thingsToDo: [
      {
        title: "Helicopter Flight",
        href: "/tours/helicopter-flight-over-victoria-falls",
      },
      {
        title: "Sunset Cruise",
        href: "/tours/zambezi-river-sunset-cruise",
      },
      {
        title: "Guided Falls Tour",
        href: "/tours/guided-tour-of-victoria-falls",
      },
      {
        title: "Boma Dinner & Drum Show",
        href: "/tours/the-boma-dinner-and-drum-show",
      },
      {
        title: "Falls, Safari and Cruise",
        href: "/tours/falls-safari-and-cruise-package",
      },
    ],
    travelTips: [
      "Book high-demand activities like helicopter flights and Devil's Pool in advance.",
      "Carry a light rain jacket or poncho when visiting the falls viewpoints.",
      "Plan a few nights if you want to enjoy both adventure and slower sunset moments.",
    ],
    gallery: [
      "https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery1.png",
      "https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery2.png",
      "https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery3.png",
      "https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery4.png",
      "https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery5.png",
    ],
    overview:
      "Choose from viewpoints, scenic flights, river cruises, safari add-ons, and cultural experiences to build a trip that feels balanced and memorable.",
    whatsIncluded: [
      "Guided destination support",
      "Selected activity planning",
      "Airport or hotel transfer options",
      "Booking assistance for add-on experiences",
    ],
    duration: "Flexible from 1 to 4 days",
    price: "From $95 per person",
    faqs: [
      {
        question: "When is the best time to visit Victoria Falls?",
        answer:
          "The destination works year-round, but water levels, weather, and activity availability change through the year. We can help match your preferred experience to the right season.",
      },
      {
        question: "Can I combine several activities in one trip?",
        answer:
          "Yes. Victoria Falls is ideal for combining a scenic flight, a river cruise, and a safari day trip in the same itinerary.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "Book early if you want peak-season availability for premium experiences like Devil's Pool or helicopter flights.",
      },
    ],
    image: "https://zazuadventures.com/wp-content/uploads/2026/07/victoria-falls.jpg",
    highlights: ["Falls viewpoints", "Helicopter flights", "Sunset cruises"],
  },
  {
    id: "hwange-national-park",
    title: "Hwange National Park",
    location: "Hwange",
    region: "Zimbabwe",
    summary:
      "A classic safari destination known for elephants, predators, and wide open game-drive country.",
    image: "https://zazuadventures.com/wp-content/uploads/2026/07/hwange.jpeg",
    highlights: ["Game drives", "Big five sightings", "Luxury safari lodges"],
    thingsToDo: [
      {
        title: "Hwange Safari",
        href: "/tours/hwange-national-park-safari",
      },
      {
        title: "Victoria Falls + Hwange",
        href: "/tours/victoria-falls-and-hwange-combo",
      },
    ],
  },
  {
    id: "chobe-national-park",
    title: "Chobe National Park",
    location: "Chobe",
    region: "Botswana",
    summary:
      "Riverfront safaris and boat cruises with one of the largest elephant populations in Africa.",
    image: "https://placehold.co/1200x800?text=Chobe+National+Park",
    highlights: ["Boat safaris", "Elephant herds", "Border transfers"],
    thingsToDo: [
      {
        title: "Botswana & Zimbabwe Highlights",
        href: "/tours/botswana-and-zimbabwe-highlights-package",
      },
    ],
  },
  {
    id: "zambezi-river",
    title: "Zambezi River",
    location: "Zambezi River",
    region: "Zimbabwe",
    summary:
      "A scenic river setting for sunset cruises, fishing, and relaxed water-based experiences.",
    image: "https://zazuadventures.com/wp-content/uploads/2026/07/okavango-scaled.jpg",
    highlights: ["Sunset cruise", "Fishing", "Birdwatching"],
    thingsToDo: [
      {
        title: "Sunset Cruise",
        href: "/tours/zambezi-river-sunset-cruise",
      },
      {
        title: "Falls, Safari and Cruise",
        href: "/tours/falls-safari-and-cruise-package",
      },
    ],
  },
  {
    id: "okavango-delta",
    title: "Okavango Delta",
    location: "Okavango",
    region: "Botswana",
    summary:
      "A lush inland delta with mokoro rides, wildlife, and remote wilderness stays.",
    image: "https://placehold.co/1200x800?text=Okavango+Delta",
    highlights: ["Mokoro rides", "Water safaris", "Remote camps"],
    thingsToDo: [
      {
        title: "Okavango Delta Expedition",
        href: "/tours/okavango-delta-expedition",
      },
      {
        title: "Botswana & Zimbabwe Highlights",
        href: "/tours/botswana-and-zimbabwe-highlights-package",
      },
    ],
  },
  {
    id: "local-community",
    title: "Local Community",
    location: "Local Community",
    region: "Zimbabwe",
    summary:
      "A cultural stop that introduces visitors to people, traditions, and everyday life around the region.",
    image: "https://placehold.co/1200x800?text=Local+Community",
    highlights: ["Village visits", "Cultural storytelling", "Local crafts"],
    thingsToDo: [
      {
        title: "Boma Dinner & Drum Show",
        href: "/tours/the-boma-dinner-and-drum-show",
      },
    ],
  },
];

export function normalizeDestinationId(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getDestinationById(id) {
  const normalizedId = normalizeDestinationId(id);

  return destinations.find((destination) => destination.id === normalizedId) || null;
}

export function getDestinationPath(location = "") {
  const normalizedId = normalizeDestinationId(location);

  return normalizedId ? `/destinations/${normalizedId}` : "/destinations";
}
