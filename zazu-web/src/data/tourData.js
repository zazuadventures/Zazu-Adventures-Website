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
      "https://images.ctfassets.net/ht2d038ql6u5/3hegzew0Tnkb1cwQmO8U4U/6fc32fa5ad5c37398bed01e98b067bf4/GuidedTourHero.jpg",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/79Tkf9g2XNKgCfgPUzh7Ad/a4e64d90095356323b115c90c18f25ac/GalleryGuidedTour2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3JE0ucZD4IuFyCzmIZYu3h/73009eae9f91c33c8cefa408309cde1a/GalleryGuidedTour6.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/4HmZynacYaVamABquLQ4wG/94c0337bb8e0cc6971d732a30e0d5d6e/GalleryGuidedTour3.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/2CYSRBQw8SNT0FAtcWgE09/98a00ace1b4a26e5e62f85636e89d9f0/GalleryGuidedTour1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7AiawNsJTC26Kp22hTa8MD/44a01c21a0b36c7a0597974403bef205/GalleryGuidedTour7.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/spG3iOGN63nYwNDcZlZpu/832e47b67bc64ac635b5398d1b41299e/GalleryGuidedTour8.jpeg",
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
    id: "chobe-day-trip",
    slug: "chobe-day-trip",
    destinationIds: ["chobe-national-park", "victoria-falls"],
    title: "Chobe Day Trip",

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/3Qsf4Y77z1AJ4Kgx3Y17T9/361106d9762062f52b0146fd1cdc4c28/GalleryChobe2.png",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/3Qsf4Y77z1AJ4Kgx3Y17T9/361106d9762062f52b0146fd1cdc4c28/GalleryChobe2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/32jv9B6Ey6BMIjxD9usjJm/283fd4820902d425e71732b523f62e02/GalleryChobe3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/2AqECgcq6EOdnXMf0hRtPi/aaca39a2dee52d6361c6b26d322a0537/GalleryChobe4.png",
      "https://images.ctfassets.net/ht2d038ql6u5/1moJS9sG0MvQy9iSRMYa0P/2f7b41f3b0587f481f8cd8b6cc1d8c46/GalleryChobe1.png",
    ],

    priceFrom: 220,

    duration: "Full Day",

    location: "Chobe National Park, Botswana",

    category: "Day Tour",

    type: "day",

    summary:
      "Enjoy a full-day safari adventure to Chobe National Park, one of Botswana's premier wildlife destinations. Combine a game drive and a relaxing river safari with excellent chances of spotting elephants, buffalo, hippos, crocodiles, and a wide variety of birdlife.",

    highlights: [
      "Full-day safari experience in Chobe National Park",
      "Game drive with expert local guides",
      "Boat cruise on the Chobe River",
      "Excellent elephant and wildlife viewing",
      "Scenic cross-border day trip from Victoria Falls",
    ],

    includes: [
      "Return transfers",
      "Chobe National Park game drive",
      "Chobe River boat cruise",
      "Park entry fees",
      "Professional safari guide",
    ],

    itinerary: [
      "Early morning pick-up from your accommodation in Victoria Falls and transfer to the Botswana border.",
      "Cross into Botswana and continue to Chobe National Park for a guided game drive.",
      "Enjoy a buffet lunch at a selected lodge or restaurant, depending on the day plan.",
      "Board a boat cruise on the Chobe River to watch wildlife from the water and enjoy the scenery.",
      "Return to Victoria Falls in the afternoon or early evening after your safari day.",
    ],
  },
  {
    id: "helicopter-flight",
    slug: "helicopter-flight-over-victoria-falls",
    destinationIds: ["victoria-falls"],

    title: "Helicopter Flight Over Victoria Falls",

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/6ZVrSYkOhqhWtxuPQWTpMP/280053ce7af25a03b993f5a3e626d0db/HelicopterHero.jpg",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/7l6NsQh1sBiZDsXLOtfFh3/c24741c9349a5bdaeca9c04afab076f3/GalleryHero3.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5A0yzTbY86dNtXxMQwLN4l/f3cf2edfa8cbbf7c652b7bcb76563e9e/GalleryHero2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/6yQNicvtc4Ua4OXv70RjAJ/c164ad7cddb1ff00fb40238fc6f280fd/GalleryHero1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/ybR2cnXEZmO84IQA4j4S5/c0d2ef0fc75c0c25aa377b3c1bb7d692/GalleryHero4.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/27w5OMiRlNVpGrrtKiveDg/9d685923f7897ca813d505d2516253dc/GalleryHero5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3faa65skhYs1zg1A2cLNtD/b0d4e6b34160ea616a55e53d0f699cfd/GalleryHero7.jpg",
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
      "https://images.ctfassets.net/ht2d038ql6u5/26kOabG3F85v8yIWeneqm8/a08b9faeec35a51a1a285da6933c48b1/BoatCruiseHero.jpg",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/64CP9gQS7qI1zzjasKclH8/52a154e59e40bb2c6be33ab5c9e623ca/GalleryBoatCruise7.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/1x3l3zfgTKwQVm6yot6XdT/daf567888e221957c4b3569662c2d8f9/GalleryBoatCruise8.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3Y920DfgMy4EJ9jGj7pvm/b3b302bb785879ddf5755c0c753fdb89/GalleryBoatCruise3.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/1iZuxFJ8fDE2NgAc2Sy9os/ea7c6c399c2e36026b87017794df1839/GalleryBoatCruise1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/22rZUabXCNt37cjwAX2ZGx/9e53ce2a3801399b0e0d8b704eea44c8/GalleryBoatCruise2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/70Au683j0WxjQXn5XGFtW4/5bda05f212486a4dc4480edc91aa86f3/GalleryBoatCruise4.jpg",
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

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/7sM5BxVGSXA90Y8A4umxGY/61c2b4ebd78900b881ce55b974e6bf40/BomaHero.jpg",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/7zNZexp2pqo09OWTiZIzQy/d8298c9ff37654f31b6066ed43768e3e/GalleryBoma2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3lEmvkSlNIMRk9LDOz8tv0/54e9fd8688259a8ff0b26be57ae9511e/GalleryBoma1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5KLderVcpTvJ98GIcEwaCY/cc7e11b8e02049013598d9fe4be36d02/GalleryBoma5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7I9Sq0yCFW3KFDhKRdV9h8/2108c481916ebc8ce50687f0d420cf45/GalleryBoma3.JPG",
      "https://images.ctfassets.net/ht2d038ql6u5/2H1T1D0Zch5X5RkgPuJOId/a24b1a9cd36f6825dcf85688747b2161/GalleryBoma4.jpg",
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
  {
    id: "tour-around-zimbabwe",
    slug: "tour-around-zimbabwe",

    destinationIds: [
      "victoria-falls",
      "harare",
      "great-zimbabwe",
      "matobo-hills",
      "hwange-national-park",
    ],

    title: "Tour Around Zimbabwe",

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/3V7j14rpVFyzXKoN4pAhWu/317fa1beed646fa46cf1716e28746bf7/AroundZimHero.png",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/2v0mqqw7qhyb1OhyrWcbmJ/e034ca8e4646d2693bdb5907cdf12864/GalleryAroundZim2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/1lnrkPKdXaC5F1EfRUPMZ8/6967aba80c137ac29e70289fd09cfad9/GalleryAroundZim4.png",
      "https://images.ctfassets.net/ht2d038ql6u5/1uxmMMz3v5ebdzuwfkO3uZ/14425e7587ff06bf346bb8a7f22caf72/GalleryAroundZim3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/7gpFsL5gAey2Wi758SIzSk/fef641e51711b24cdb26f253e1400b1c/GalleryAroundZim6.png",
      "https://images.ctfassets.net/ht2d038ql6u5/3WPc3aJcu9LxdSxB1Gykk2/ca53f1123478043e93c9eb1357c69841/GalleryAroundZim5.png",
      "https://images.ctfassets.net/ht2d038ql6u5/4GTilgMnSNiPNybZCupP2y/aef202dcc16d6644508be1fd59847e2b/GalleryAroundZim1.png",
    ],

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
    image:
      "https://images.ctfassets.net/ht2d038ql6u5/1moJS9sG0MvQy9iSRMYa0P/2f7b41f3b0587f481f8cd8b6cc1d8c46/GalleryChobe1.png",
    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/3Qsf4Y77z1AJ4Kgx3Y17T9/361106d9762062f52b0146fd1cdc4c28/GalleryChobe2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/32jv9B6Ey6BMIjxD9usjJm/283fd4820902d425e71732b523f62e02/GalleryChobe3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/2AqECgcq6EOdnXMf0hRtPi/aaca39a2dee52d6361c6b26d322a0537/GalleryChobe4.png",
      "https://images.ctfassets.net/ht2d038ql6u5/1moJS9sG0MvQy9iSRMYa0P/2f7b41f3b0587f481f8cd8b6cc1d8c46/GalleryChobe1.png",
      "https://images.ctfassets.net/ht2d038ql6u5/3JE0ucZD4IuFyCzmIZYu3h/73009eae9f91c33c8cefa408309cde1a/GalleryGuidedTour6.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/4HmZynacYaVamABquLQ4wG/94c0337bb8e0cc6971d732a30e0d5d6e/GalleryGuidedTour3.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/2CYSRBQw8SNT0FAtcWgE09/98a00ace1b4a26e5e62f85636e89d9f0/GalleryGuidedTour1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7AiawNsJTC26Kp22hTa8MD/44a01c21a0b36c7a0597974403bef205/GalleryGuidedTour7.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/spG3iOGN63nYwNDcZlZpu/832e47b67bc64ac635b5398d1b41299e/GalleryGuidedTour8.jpeg",
    ],
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
      "https://images.ctfassets.net/ht2d038ql6u5/5VCljg9l7tILiGhXrW5Buk/237a727f1bf919d67936754b2525d128/GalleryVictoriaFalls4.png",
    gallery: [],
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
      "https://images.ctfassets.net/ht2d038ql6u5/AIkK0tVlU4GbbdN6cwrnr/2adc78f3071b9c033efb74707456f62c/NataGallery1.png",
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
      "https://images.ctfassets.net/ht2d038ql6u5/1R9OJpqR4mk1P2fyMXeU8B/2ec9200fd4ce2f9e37aab50393e4a8f0/GalleryOkavango3.png",
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
      "https://images.ctfassets.net/ht2d038ql6u5/spG3iOGN63nYwNDcZlZpu/832e47b67bc64ac635b5398d1b41299e/GalleryGuidedTour8.jpeg",
    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/79Tkf9g2XNKgCfgPUzh7Ad/a4e64d90095356323b115c90c18f25ac/GalleryGuidedTour2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3JE0ucZD4IuFyCzmIZYu3h/73009eae9f91c33c8cefa408309cde1a/GalleryGuidedTour6.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/4HmZynacYaVamABquLQ4wG/94c0337bb8e0cc6971d732a30e0d5d6e/GalleryGuidedTour3.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/2CYSRBQw8SNT0FAtcWgE09/98a00ace1b4a26e5e62f85636e89d9f0/GalleryGuidedTour1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7AiawNsJTC26Kp22hTa8MD/44a01c21a0b36c7a0597974403bef205/GalleryGuidedTour7.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/spG3iOGN63nYwNDcZlZpu/832e47b67bc64ac635b5398d1b41299e/GalleryGuidedTour8.jpeg",
    ],
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
      "https://images.ctfassets.net/ht2d038ql6u5/5k8EVYL2BBOaQLZZiqK7Cz/0927d20ffb8cd11b4edd3a6a2cb29d79/BambaHero.png",
    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/6pNIj3SZtQ3ab5aoOlhkKT/ae5d26bd5be68494fd10e407b98a2b57/GalleryBamba6.png",
      "https://images.ctfassets.net/ht2d038ql6u5/50Dk5FaLg8CHJHQYAsw2Hb/0b20340736d832e2b7b5064c4e6e859b/GalleryBamba5.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/4R430wgKY1QVAbKdO1B6kh/bb34f586e957385fd85d3b1ab948ca72/GalleryBamba4.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/67YrgtdCYNFlEPufab8v91/e488ea0e37996391a9a1556a8ff52d31/GalleryBamba3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/2uVJvgv4k3DrKW1ojgpf71/4355c847aca2e05819caea84da1f6b3f/GalleryBamba2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/6UZGu3Gy5qcmV8QqgwVKM3/1a32f8636ecb746bc304b99d0b6976ba/GalleryBamba1.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/7zNZexp2pqo09OWTiZIzQy/d8298c9ff37654f31b6066ed43768e3e/GalleryBoma2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3lEmvkSlNIMRk9LDOz8tv0/54e9fd8688259a8ff0b26be57ae9511e/GalleryBoma1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5KLderVcpTvJ98GIcEwaCY/cc7e11b8e02049013598d9fe4be36d02/GalleryBoma5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7I9Sq0yCFW3KFDhKRdV9h8/2108c481916ebc8ce50687f0d420cf45/GalleryBoma3.JPG",
      "https://images.ctfassets.net/ht2d038ql6u5/2H1T1D0Zch5X5RkgPuJOId/a24b1a9cd36f6825dcf85688747b2161/GalleryBoma4.jpg",
    ],
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
      "https://images.ctfassets.net/ht2d038ql6u5/7djINnZLroovFqZSJSuFUH/2fd0fa9cf92466d225eb7a24b2edda35/GameDriveHero.jpg",
    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/KjgeiYa3bmTxDX9tD5h2g/53b262a0c0f5e5a6358300456c981383/GalleryGameDrive3.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5aewoFk5ljl3Vl06M91p37/af0839a674e6cd550d27e567ca078814/GalleryGameDrive1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/MlqtZN4s97hbVnRrehmJU/c2bea2bc9a8f5228dcf4d3e5903b3864/GalleryGameDrive5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3CDLDVOQ5lHlFFrCmnzdcE/33572f2c5a85f51cab6ebc69fc9da1dd/GalleryGameDrive2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5dLLV8SSReyy4LUVkbIgPX/19a4006f42bbbf9fd7a47b1da39e3544/GalleryGameDrive4.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7vCOCATMhOMKvkhV8GldY5/2c86c61c1d564e1608e0ac4cd033ca1a/GalleryGameDrive6.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7zNZexp2pqo09OWTiZIzQy/d8298c9ff37654f31b6066ed43768e3e/GalleryBoma2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3lEmvkSlNIMRk9LDOz8tv0/54e9fd8688259a8ff0b26be57ae9511e/GalleryBoma1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5KLderVcpTvJ98GIcEwaCY/cc7e11b8e02049013598d9fe4be36d02/GalleryBoma5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7I9Sq0yCFW3KFDhKRdV9h8/2108c481916ebc8ce50687f0d420cf45/GalleryBoma3.JPG",
      "https://images.ctfassets.net/ht2d038ql6u5/2H1T1D0Zch5X5RkgPuJOId/a24b1a9cd36f6825dcf85688747b2161/GalleryBoma4.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/2v0mqqw7qhyb1OhyrWcbmJ/e034ca8e4646d2693bdb5907cdf12864/GalleryAroundZim2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/1lnrkPKdXaC5F1EfRUPMZ8/6967aba80c137ac29e70289fd09cfad9/GalleryAroundZim4.png",
      "https://images.ctfassets.net/ht2d038ql6u5/1uxmMMz3v5ebdzuwfkO3uZ/14425e7587ff06bf346bb8a7f22caf72/GalleryAroundZim3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/7gpFsL5gAey2Wi758SIzSk/fef641e51711b24cdb26f253e1400b1c/GalleryAroundZim6.png",
      "https://images.ctfassets.net/ht2d038ql6u5/3WPc3aJcu9LxdSxB1Gykk2/ca53f1123478043e93c9eb1357c69841/GalleryAroundZim5.png",
      "https://images.ctfassets.net/ht2d038ql6u5/4GTilgMnSNiPNybZCupP2y/aef202dcc16d6644508be1fd59847e2b/GalleryAroundZim1.png",
    ],
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
      "https://images.ctfassets.net/ht2d038ql6u5/482Bqbefg8l6ksUuv7r3va/1b56f73b63806583e180eb6d1fb88c2c/ElephantWalkHero.jpg",
    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/7l6NsQh1sBiZDsXLOtfFh3/c24741c9349a5bdaeca9c04afab076f3/GalleryHero3.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5A0yzTbY86dNtXxMQwLN4l/f3cf2edfa8cbbf7c652b7bcb76563e9e/GalleryHero2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/6yQNicvtc4Ua4OXv70RjAJ/c164ad7cddb1ff00fb40238fc6f280fd/GalleryHero1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/ybR2cnXEZmO84IQA4j4S5/c0d2ef0fc75c0c25aa377b3c1bb7d692/GalleryHero4.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/27w5OMiRlNVpGrrtKiveDg/9d685923f7897ca813d505d2516253dc/GalleryHero5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3faa65skhYs1zg1A2cLNtD/b0d4e6b34160ea616a55e53d0f699cfd/GalleryHero7.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/64CP9gQS7qI1zzjasKclH8/52a154e59e40bb2c6be33ab5c9e623ca/GalleryBoatCruise7.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/1x3l3zfgTKwQVm6yot6XdT/daf567888e221957c4b3569662c2d8f9/GalleryBoatCruise8.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3Y920DfgMy4EJ9jGj7pvm/b3b302bb785879ddf5755c0c753fdb89/GalleryBoatCruise3.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/1iZuxFJ8fDE2NgAc2Sy9os/ea7c6c399c2e36026b87017794df1839/GalleryBoatCruise1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/22rZUabXCNt37cjwAX2ZGx/9e53ce2a3801399b0e0d8b704eea44c8/GalleryBoatCruise2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/70Au683j0WxjQXn5XGFtW4/5bda05f212486a4dc4480edc91aa86f3/GalleryBoatCruise4.jpg",
    ],
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
