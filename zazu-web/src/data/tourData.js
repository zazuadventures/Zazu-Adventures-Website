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

function normalizeTourType(value = "") {
  const normalized = value.toString().trim().toLowerCase();

  if (normalized === "day-tour") {
    return "day";
  }

  return normalized;
}

export const dayTours = [
  {
    id: "guided-tour-victoria-falls",
    slug: "guided-tour-of-victoria-falls",
    destinationIds: ["victoria-falls"],
    title: "Guided Tour of Victoria Falls",

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/3awVeLvefbeqvWOaJNnR7L/95d57b96adc6f56831d96edb765778ea/GuidedTourHero.jpg",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/2w45T1dCiarcnsJ9FQUoFT/406a12dac5748a1a6a212ad52cec8ba3/GalleryGuidedTour1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/2ELcelhnQ7gyuMLcwViyt3/f0531bf0b4d7617945063d14378b6c9c/GalleryGuidedTour13.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7FDfaS6oC1pQJRbeAmTRAf/04e1c90fbaae48449f450d3c4ae8a525/GalleryGuidedTour12.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/2czFGG8h3CfmDLNP94zbeE/dbfe618db3e632f6c8c25d513229c4dc/GalleryGuidedTour9.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/4VQ2ZNjIvyfyyKyFsO4F0E/a93388b2d9af4fc83141e0ca92a11a12/GalleryGuidedTour6.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/16sHaBKtDoNln32pScYDGZ/6b180b9504d83421c1357ae54172c5a0/GalleryGuidedTour7.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/4HNrFCBwBwAkaeCIIkKec1/b1acc86af89e0a0eb1234c6ea198ebb3/GalleryGuidedTour8.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/2drgdcX5RjQ9OKljCznJ8F/f0894bd97387a88508ef94e8625c8e93/GalleryGuidedTour10.jpg",
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
      "https://images.ctfassets.net/ht2d038ql6u5/6eE5F2BkGAbhfVzq1qUsOI/389884b398f2eaae08d5a6ffe735718c/ChobeHero.png",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/1Uh9I8IyuBvOBZZBR24ysN/68af06a422da51b4d72a8299b04fa2c9/GalleryChobe1.png",
      "https://images.ctfassets.net/ht2d038ql6u5/2ioeCBPvRREtg35tiiuUNz/e20e350dbd9d6da10f977b236280c5d2/GalleryChobe2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/5oZTS8sy0VQLuGaUUwqnyz/8b8feea029454c91bbd52ed624656b27/GalleryChobe3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/4DBrfqzgKyApT3xDh7Ji2S/686d3b1ee5bd123cf2fb127ea0d6a655/GalleryChobe4.png",
      "https://images.ctfassets.net/ht2d038ql6u5/51efd15RAhzyVXAeJAyzDG/4e22718fb7a94df3559d0a92d4b565c1/GalleryChobe5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/6traOj8NplCbmK7lC8QvzG/7254dcc96050ba6e142c529307ae7252/GalleryChobe6.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/67mo1KImdkd76dQhQTYNv9/6afb6946a220a739acd1d8a543d85143/GalleryChobe7.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5jcH0zCY0V6ch7UPGwSkIx/34248d0a186e1e0f0df50896352ac085/GalleryChobe8.webp",
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
    id: "flight-of-angels",
    slug: "flight-of-angels",
    destinationIds: ["victoria-falls"],

    title: "Flight Of Angels",

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/4VMv3G0CNTLHQAuaH0xMKL/683e26a3d25b395b42ce44cef9e6cea4/HelicopterHero.jpg",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/4gzj95evroYzXJejPim2jV/96bd2d13b59e273921b4edfaf53150d2/GalleryHelicopter1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/4CoBryBW24fppwtI7qv1dX/58edf7174281a91b9e021637a0e95d19/GalleryHelicopter2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/2HeNxBaXnoxyJ64Fv8opR0/ef84e416825b16dd6ff619429f2de568/GalleryHelicopter3.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5JUyVKj9FB797dKtKdESsR/d5931337a8318a5440aaaaf9c18fe83f/GalleryHelicopter4.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5RBdjHllhbU5iwuvCPoWEy/9b7d5f08fc44d53cd9b8be8769dec68b/GalleryHelicopter5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/2sV2AgUO7Oi99YbPMplGIh/d35b622e615b8575e360b0ab53703922/GalleryHelicopter6.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/2MG1Hype0n865njEEvtMHy/ccbc3cef43e58a8dd1b4c983b7234714/GalleryHelicopter7.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/43LHw7FGFruYlxFkiWnHCe/00f55e434953c216a5a7b98adc3e6772/GalleryHelicopter8.webp",
      "https://images.ctfassets.net/ht2d038ql6u5/fC60vvGALbPi3ig9q6K51/d344933d61b12ad66b12f121c81b8a50/GalleryHelicopter9.png",
      "https://images.ctfassets.net/ht2d038ql6u5/7BztuZNvTuosjYCi1UWoMZ/697d3c88bd9d95cd515777e2d7ad1eca/GalleryHelicopter10.png",
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
      "https://images.ctfassets.net/ht2d038ql6u5/59U2WeM9neCK43y6NV9EnT/37169b820eca3be5e22ee68fede71152/BoatCruiseHero.jpg",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/6QXa1H9BBRk3grn6vWd5VB/ad283a8c9a4a5924f022ca6454a78e8d/GalleryBoatCruise1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/3NXDS5c7UCzGm5rWh5tjix/dab422d7bbcde2e76229567d708e4543/GalleryBoatCruise2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/zHWD1TFWsDmkr8fwSE2WA/ce3feca07364991208e952b159c4d9d5/GalleryBoatCruise3.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/4cLH3VDRnLqfKeCghUqXpd/7880a40a10b3c74958629ccdcb9bb2f7/GalleryBoatCruise4.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/5tZ7OHaFvfjTKOecy6Dzm8/b191f051d03d9984e15337521a72e637/GalleryBoatCruise5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/61PizyB3t27XnzFMDMUmOm/3d3a961d1dce1d8e2589d390eae2f585/GalleryBoatCruise6.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/70SeTbbFs1XhfUcDFsGrt4/b9bca82252fada9bbdd12db3682bda7c/GalleryBoatCruise7.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/6DnXx3ziiDpwEJBRilJOyI/f2603ff29e3e1bcafe04d5996a95154f/GalleryBoatCruise8.jpg",
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
      "https://images.ctfassets.net/ht2d038ql6u5/dnqZLj1zfpWzV3WJfoJsV/d2d0e99dbb6581717753dc857cc48428/BomaHero.jpg",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/6k2ydC1yiM1r5l7tksLmw3/9127351110a4db03c2dc76f56ef30ba8/GalleryBoma1.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/7zzOVaI7p0xDuuCy8NKJsi/d2c21e581050b3fbf11bf1b85bacab11/GalleryBoma2.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/LrcYO8ROh9ZeiMP2IH4wv/29d614535c79f6dbbf131663541fc884/GalleryBoma3.JPG",
      "https://images.ctfassets.net/ht2d038ql6u5/1a1Ex1agVjsrxoeBHKRipw/aaf1327af58e610257e32947edb7bf1c/GalleryBoma4.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/58ceVewm1l6IYJ5of0jWwx/9f701a7267602f9eeb3cfb1da8e8fa38/GalleryBoma5.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/6WVif3gD0tMfnApAT0JmW9/a8678e0cc7a63c1168cfe47df69d0480/GalleryBoma6.jpg",
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
    id: "cape-town-day-trip",
    slug: "cape-town-day-trip",

    destinationIds: ["cape-town"],

    title: "Cape Town Day Trip",

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/2nJSDK9En40QsOvzIidnDU/a605ef00bee53359fad0be7628e3e880/CapeTownHero.png",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/6ZO0jQQ1TIM9FfOF0ZBTFa/e3a40b80f32b7da15c799c575187ca37/GalleryCapeTown1.png",
      "https://images.ctfassets.net/ht2d038ql6u5/7wyi05iW96Pcvl6xQCaEH5/1021699a42a21a17b0618ec848b19432/GalleryCapeTown2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/2hJZQ8CJyiCRDXMLXxxyOg/d49fb6a03fff800bc6e30fab91d96b9a/GalleryCapeTown3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/01wZB4WZgqul5Z7HnDhlNd/3ce896b7fb0fa03b2804597b4bd85351/GalleryCapeTown4.png",
      "https://images.ctfassets.net/ht2d038ql6u5/foK668epphd0ws22yi21E/e5c93d6a2af018f99c4832c1e47db57d/GalleryCapeTown5.png",
      "https://images.ctfassets.net/ht2d038ql6u5/3HJ1EUxLcH91cXJpF8HGse/ed0938ee506d7b44382441b2013610c2/GalleryCapeTown6.png",
    ],

    priceFrom: 180,

    duration: "Full Day",

    location: "Cape Town, South Africa",

    category: "Day Tour",

    type: "day",

    summary:
      "Discover the highlights of Cape Town on a full-day guided adventure. Experience breathtaking mountain views, pristine beaches, iconic landmarks, and the vibrant culture that makes Cape Town one of the world's most beautiful cities.",

    highlights: [
      "Ride the famous Table Mountain Cableway for spectacular city views",
      "Drive along the breathtaking Chapman's Peak scenic route",
      "Visit the Cape of Good Hope and Cape Point Nature Reserve",
      "See the adorable African penguins at Boulders Beach",
      "Explore the colourful Bo-Kaap neighbourhood",
      "Enjoy stunning coastal scenery and photo opportunities throughout the day",
    ],

    includes: [
      "Professional local tour guide",
      "Comfortable air-conditioned transport",
      "Hotel pickup and drop-off (selected areas)",
      "Bottled drinking water",
      "Sightseeing stops at major attractions",
      "Tour coordination and assistance",
    ],

    itinerary: [
      "Begin your day with pickup and a visit to Table Mountain for panoramic views of Cape Town.",
      "Travel along the scenic Atlantic coastline via Camps Bay and Chapman's Peak Drive.",
      "Visit Cape Point and the Cape of Good Hope for breathtaking ocean views and unforgettable photo opportunities.",
      "Stop at Boulders Beach to see the famous African penguin colony.",
      "Explore the colourful streets of Bo-Kaap before returning to your hotel in the late afternoon.",
    ],
  },
  {
    id: "kruger-national-park-day-trip",
    slug: "kruger-national-park-day-trip",

    destinationIds: ["kruger-national-park"],

    title: "Kruger National Park Day Trip",

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/1ueYFGXjkt6U33UR3NHNbT/fa0ed12ea160e081c0f435085d4565e8/KrugerHero.png",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/7AAZ7IWjQwjSFH7TisyqJh/d493676e998691e345d37f9c9a037faa/GalleryKruger1.png",
      "https://images.ctfassets.net/ht2d038ql6u5/40fdpBuoQeFi6twe2H0Cyw/96225b1b739e4c3e6f61f623bd0c4837/GalleryKruger2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/2IKtOs4RRZ8L3S5ZctrAjb/20bbd1f4a343eb8893d61b4936050922/GalleryKruger3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/1ba0hbDC1n8Y0uAY2iOg1H/b97059586ddedf54646f4ec43780a86d/GalleryKruger4.png",
      "https://images.ctfassets.net/ht2d038ql6u5/6RXvnpcanKIcxrf6Fkg2QI/f41160c5bf7d538010ac137eb7be7c6d/GalleryKruger5.png",
      "https://images.ctfassets.net/ht2d038ql6u5/7Ha7SUgm9T86X4xGq8hjq1/535c4ade3f957a72d3c8882c40bc0b8f/GalleryKruger6.png",
      "https://images.ctfassets.net/ht2d038ql6u5/5fEliWkcrA4yA2RfWtY6d4/832faeaa05aea960795642a99b490c5d/GalleryKruger7.png",
    ],

    priceFrom: 220,

    duration: "Full Day",

    location: "Kruger National Park, South Africa",

    category: "Day Tour",

    type: "day",

    summary:
      "Experience an unforgettable full-day safari in the world-renowned Kruger National Park. Search for the Big Five while exploring one of Africa's largest and most diverse wildlife reserves with an experienced guide.",

    highlights: [
      "Embark on a full-day guided safari through Kruger National Park",
      "Look out for the Big Five—lion, leopard, elephant, rhino, and buffalo",
      "Spot giraffes, zebras, hippos, crocodiles, and a variety of antelope",
      "Learn about the park's ecosystems and wildlife from an expert guide",
      "Capture incredible wildlife photography throughout the day",
      "Enjoy one of Africa's premier safari destinations",
    ],

    includes: [
      "Professional safari guide",
      "Open safari vehicle or comfortable game-viewing transport",
      "Park entry fees",
      "Bottled drinking water",
      "Hotel or lodge pickup and drop-off (selected areas)",
      "Tour coordination and assistance",
    ],

    itinerary: [
      "Depart early in the morning and enter Kruger National Park as the wildlife becomes most active.",
      "Enjoy a guided game drive through diverse habitats in search of the Big Five and other iconic African wildlife.",
      "Stop at designated rest camps for breakfast or lunch (meals at own expense unless specified).",
      "Continue exploring different sections of the park while learning about its rich biodiversity and conservation efforts.",
      "Conclude your safari in the late afternoon before returning to your accommodation with unforgettable wildlife memories.",
    ],
  },
  {
    id: "hwange-national-park-day-trip",
    slug: "hwange-national-park-day-trip",

    destinationIds: ["hwange-national-park"],

    title: "Hwange National Park Day Trip",

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/eMdcuJW5MemcDYgugNzlg/93a1ed95234623df93f038eac9318b0f/HwangeHero.png",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/23f6xAPQWDQmCwrnAe34th/03f361f5f8ab07b0603152cc74631444/GalleryHwange2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/3Y9pxtC9yrwPERN3kuNUrJ/fff41cfa101b62693fc24f4d99d5c58c/GalleryHwange3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/7aLUfiXKCf3aCfgmdQweu9/c9e0a1960721ffbd79c8c5c7e23f4a71/GalleryHwange4.png",
      "https://images.ctfassets.net/ht2d038ql6u5/6SFDVkgfFXnmzmXG4AIGRW/349b5e93a5290084834d1da3bdcd3b40/GalleryHwange5.png",
      "https://images.ctfassets.net/ht2d038ql6u5/439nI8sGgmNeAGs7lkbtMy/daecb06b1b22aa81162cd0f06cf25e10/GalleryHwange6.jpg",
      "https://images.ctfassets.net/ht2d038ql6u5/55JCTQkxvwR2tdTJJwMSDk/6ac98450b152752f1faf3eb9428c8e6b/GalleryHwange7.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/3KE6QGKJng9kyWNr91ii9v/34a3d873d22162ff9e18e2cd669327d3/GalleryHwange8.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/64iiefrLUs7s4La0rgXnbm/ddcbc9af5eafbb75ea12aceb289c6cd5/GalleryHwange9.jpeg",
      "https://images.ctfassets.net/ht2d038ql6u5/3HnlshtlEft18vFX5D6Lg2/5916f6221c2169e77508d33d1ee52010/GalleryHwange10.jpeg",
    ],

    priceFrom: 180,

    duration: "Full Day",

    location: "Hwange National Park, Zimbabwe",

    category: "Day Tour",

    type: "day",

    summary:
      "Experience an exciting full-day safari in Zimbabwe's largest national park, home to one of Africa's largest elephant populations. Discover incredible wildlife, breathtaking landscapes, and unforgettable game-viewing opportunities with an experienced guide.",

    highlights: [
      "Enjoy a full-day guided game drive through Hwange National Park",
      "Spot elephants, lions, buffalo, giraffes, zebras, and many other iconic species",
      "Visit some of the park's famous waterholes that attract abundant wildlife",
      "Learn about Hwange's diverse ecosystems and conservation efforts",
      "Capture spectacular wildlife photographs throughout the safari",
      "Experience one of Zimbabwe's premier safari destinations",
    ],

    includes: [
      "Professional safari guide",
      "Comfortable game-viewing vehicle",
      "National park entry fees",
      "Bottled drinking water",
      "Hotel or lodge pickup and drop-off (selected areas)",
      "Tour coordination and assistance",
    ],

    itinerary: [
      "Depart early in the morning for Hwange National Park and begin your guided game drive.",
      "Explore different sections of the park in search of elephants, predators, and a wide variety of plains game.",
      "Stop at selected picnic or rest areas for a break and refreshments (meals at own expense unless specified).",
      "Continue your safari while visiting popular waterholes where wildlife gathers throughout the day.",
      "Return in the late afternoon after an unforgettable day of wildlife viewing and photography.",
    ],
  },
  {
    id: "okavango-delta-day-trip",
    slug: "okavango-delta-day-trip",

    destinationIds: ["okavango-delta"],

    title: "Okavango Delta Day Trip",

    image:
      "https://images.ctfassets.net/ht2d038ql6u5/1tAxUYLuP0SZ3Lqv8fWFpl/a03a5a40eb3104cce9af968d749822f5/OkavangoHero.png",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/3ZNVjouikFmXY3rvvIdlf5/b082edda23aff7598160139d5f54fe56/GalleryOkavango1.png",
      "https://images.ctfassets.net/ht2d038ql6u5/3vuR0L7xk2nDOzXxx54bSx/d85c57b38cd498186d008c51b4a81e40/GalleryOkavango2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/72By91ZhtbVprrWYoJwUJ1/10406b580939c4765dfceb3bbdd9ffe2/GalleryOkavango3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/6dOVCcstsYYxZmlM8CFh6B/9101fec5b356ddb301a7c80b75fd1a3e/GalleryOkavango4.png",
    ],

    priceFrom: 250,

    duration: "Full Day",

    location: "Okavango Delta, Botswana",

    category: "Day Tour",

    type: "day",

    summary:
      "Experience the magic of Botswana's world-famous Okavango Delta on a full-day adventure. Glide through crystal-clear waterways in a traditional mokoro canoe, discover diverse wildlife, and explore one of Africa's most spectacular UNESCO World Heritage Sites.",

    highlights: [
      "Explore the breathtaking Okavango Delta by traditional mokoro canoe",
      "Enjoy a guided nature walk on one of the Delta's islands",
      "Spot elephants, hippos, crocodiles, antelope, and abundant birdlife",
      "Learn about the Delta's unique ecosystem from experienced local guides",
      "Experience the peaceful beauty of Africa's largest inland delta",
      "Capture stunning landscapes and unforgettable wildlife encounters",
    ],

    includes: [
      "Professional local guide",
      "Traditional mokoro canoe excursion",
      "Guided bush walk",
      "Park and conservation fees",
      "Bottled drinking water",
      "Tour coordination and assistance",
    ],

    itinerary: [
      "Begin the day with a transfer to the Okavango Delta and meet your experienced local guide.",
      "Board a traditional mokoro canoe and glide through the Delta's winding channels while observing wildlife and birdlife.",
      "Disembark for a guided nature walk on one of the Delta's islands, learning about local flora, fauna, and animal tracking.",
      "Enjoy time to relax, take photographs, and immerse yourself in the tranquility of this remarkable wilderness.",
      "Return by mokoro before transferring back in the late afternoon with unforgettable memories of the Okavango Delta.",
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
      "https://images.ctfassets.net/ht2d038ql6u5/JhaRtZuvAusZarJ83WQcp/66ff3f1e118324da7c7e64b6b401501b/AroundZimHero.png",

    gallery: [
      "https://images.ctfassets.net/ht2d038ql6u5/1x2VTSKcIBsO3luXnjBLmZ/94702446236a5fce20ba2385390fc1c5/GalleryAroundZim1.png",
      "https://images.ctfassets.net/ht2d038ql6u5/4wZu98WIUZZUX65w6H9Szv/5c7f3e4e4c5842431654ceb72eb4117d/GalleryAroundZim2.png",
      "https://images.ctfassets.net/ht2d038ql6u5/JKyPzBOuTjxK6g1v1vAg8/2b2258796f27b2977ef1b7e916bcc8f4/GalleryAroundZim3.png",
      "https://images.ctfassets.net/ht2d038ql6u5/1TnCFbunbQ86AabftTwfsZ/87eab8399dcef86f1eee548bd94459aa/GalleryAroundZim4.png",
      "https://images.ctfassets.net/ht2d038ql6u5/4dKwMT8qvtkWPH9lBAcbmM/249b67a25e105be27e44d443116a0530/GalleryAroundZim5.png",
      "https://images.ctfassets.net/ht2d038ql6u5/3LhVSKIw9EtUPaJM3psvWn/50fe5d0114f7bdd3d1b970c31a3a5e9b/GalleryAroundZim6.png",
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
  const normalizedType = normalizeTourType(type);

  if (normalizedType === "all") {
    return allTours;
  }

  return allTours.filter(
    (tour) => normalizeTourType(tour.type) === normalizedType,
  );
}

export const tourSections = [
  { key: "day", title: "Day Trips", items: dayTours },
  { key: "multi-day", title: "Multi-Day Trips", items: multiDayTours },
  { key: "package", title: "Packages", items: packages },
];
