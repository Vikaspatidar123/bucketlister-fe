import {
  andamanImage,
  BaliImage,
  coorgImage,
  DubaiImage,
  GokarnaImage,
  himachalImage,
  kashmirImage,
  keralaImage,
  lehImage,
  maldivesImage,
  sikkimImage,
  singaporeImage,
  spitiImage,
  srilankaImage,
  thailandImage,
  uttarakhandImage,
  vietnamImage,
} from "@/assets/svg";

// Travel Packages Data for the new section
export const TRAVEL_PACKAGES_DATA = [
  {
    destination_id: 1,
    destination_name: "Thailand",
    category: "international",
    description:
      "Explore vibrant beaches, bustling markets, and rich culture of Thailand.",
    thumbnail_image: thailandImage,
    hero_image: thailandImage,
    reviews: [
      {
        id: 1,
        description:
          "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
        name: "JAMES THOMAS",
        location: "Sri Lanka (Jul 2024)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Smiling woman with dark wavy hair wearing red top",
        rating: 4.6,
      },
      {
        id: 2,
        description:
          "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
        name: "JAMES THOMAS",
        location: "Coorg (Oct 2025)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Young man with curly hair wearing dark hat and t-shirt",
        rating: 4.6,
      },
      {
        id: 3,
        description:
          "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
        name: "JAMES THOMAS",
        location: "Coorg (Oct 2025)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt:
          "Smiling Black man with shaved head wearing green and white patterned shirt",
        rating: 4.6,
      },
      {
        id: 1,
        description:
          "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
        name: "JAMES THOMAS",
        location: "Sri Lanka (Jul 2024)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Smiling woman with dark wavy hair wearing red top",
        rating: 4.6,
      },
      {
        id: 2,
        description:
          "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
        name: "JAMES THOMAS",
        location: "Coorg (Oct 2025)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Young man with curly hair wearing dark hat and t-shirt",
        rating: 4.6,
      },
      {
        id: 3,
        description:
          "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see.",
        name: "JAMES THOMAS",
        location: "Coorg (Oct 2025)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt:
          "Smiling Black man with shaved head wearing green and white patterned shirt",
        rating: 4.6,
      },
    ],
    trips: [
      {
        tripId: 1,
        title: "Bangkok & Pattaya Special",
        duration: "6D-5N",
        price: 35000,
        originalPrice: 40000,
        discountAmount: 5000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/footer-image.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],

        availableDates: ["jun25", "jul25", "aug25"],
        features: ["city-life", "nightlife", "beach"],
        customizable: true,
        badge: { type: "", text: "" },
        capacity: 30,
        meals: "Breakfast and Dinner",
        accommodations: "5 nights in 3★ Hotels",
        baseCity: "Mumbai",
        route: ["Mumbai", "Bangkok", "Pattaya", "Mumbai"],
        itinerary: [
          {
            day: 1,
            summary: "Arrive Bangkok, transfer to Pattaya.",
            details: "Evening leisure and local market visit.",
          },
          {
            day: 2,
            summary: "Coral Island tour.",
            details: "Water activities and beach time.",
          },
          {
            day: 3,
            summary: "Pattaya to Bangkok.",
            details: "Check-in and evening city walk.",
          },
          {
            day: 4,
            summary: "Bangkok City & Temple tour.",
            details: "Visit major temples and riverfront.",
          },
          {
            day: 5,
            summary: "Free day for shopping.",
            details: "Optional Safari World tour.",
          },
          { day: 6, summary: "Departure.", details: "Airport drop." },
        ],
        includes: [
          "Return airport transfers",
          "Daily breakfast",
          "City and Coral Island tours",
          "All internal transfers",
        ],
        excludes: [
          "Personal expenses",
          "Visa and insurance",
          "Meals not mentioned",
        ],
      },
      {
        tripId: 2,
        title: "Phuket & Krabi Escape",
        duration: "7D-6N",
        price: 42000,
        originalPrice: 45000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["jul25", "aug25", "sep25"],
        features: ["beach", "island", "water-sports"],
        customizable: true,
        badge: { type: "", text: "" },
        capacity: 28,
        meals: "Breakfast included",
        accommodations: "6 nights in 3★/4★ Hotels",
        baseCity: "Mumbai",
        route: ["Mumbai", "Phuket", "Krabi", "Mumbai"],
        itinerary: [
          { day: 1, summary: "Arrive Phuket.", details: "Check-in and relax." },
          {
            day: 2,
            summary: "Phi Phi Island tour.",
            details: "Snorkeling and beach time.",
          },
          {
            day: 3,
            summary: "Phuket city tour.",
            details: "Viewpoints and old town.",
          },
          {
            day: 4,
            summary: "Transfer to Krabi.",
            details: "Evening at leisure.",
          },
          {
            day: 5,
            summary: "Four Islands tour.",
            details: "Long-tail boat experience.",
          },
          { day: 6, summary: "Free day.", details: "Optional activities." },
          { day: 7, summary: "Departure.", details: "Airport drop." },
        ],
        includes: [
          "Airport transfers",
          "Breakfast",
          "Phi Phi and 4 Islands tours",
        ],
        excludes: [
          "Any personal expenses",
          "Entry fees not mentioned",
          "GST/TCS as applicable",
        ],
      },
    ],
  },
  {
    destination_id: 2,
    destination_name: "Europe",
    category: "international",
    description:
      "Experience the charm of European cities, culture, and history.",
    thumbnail_image: coorgImage,
    hero_image: coorgImage,
    reviews: [
      {
        name: "Neha Patel",
        description:
          "The Swiss Alps were breathtaking! Loved the train journeys.",
        rating: 4.9,
      },
    ],
    trips: [
      {
        tripId: 3,
        title: "European Grand Tour",
        duration: "12D-11N",
        price: 125000,
        // originalPrice: 130000,
        // discountAmount: 5000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["sep25", "oct25", "nov25"],
        features: ["culture", "history", "architecture"],
        customizable: true,
        badge: { type: "", text: "" },
        capacity: 24,
        meals: "Breakfast and select dinners",
        accommodations: "11 nights in 3★/4★ Hotels",
        baseCity: "Mumbai",
        route: ["Mumbai", "Paris", "Zurich", "Venice", "Rome", "Mumbai"],
        itinerary: [
          {
            day: 1,
            summary: "Arrive Paris.",
            details: "Evening Seine cruise.",
          },
          {
            day: 2,
            summary: "Paris city tour.",
            details: "Eiffel Tower photo-stop.",
          },
          {
            day: 3,
            summary: "Paris to Zurich.",
            details: "Scenic train ride.",
          },
          {
            day: 4,
            summary: "Mount Titlis excursion.",
            details: "Snow activities.",
          },
          {
            day: 5,
            summary: "Zurich to Venice.",
            details: "Gondola optional.",
          },
          { day: 6, summary: "Venice to Rome.", details: "City orientation." },
          {
            day: 7,
            summary: "Rome & Vatican.",
            details: "Colosseum exterior and St. Peter's.",
          },
          { day: 8, summary: "Free day.", details: "Shopping and leisure." },
          { day: 9, summary: "Departure.", details: "Fly back to Mumbai." },
        ],
        includes: [
          "Airport transfers",
          "Daily breakfast",
          "Seine cruise and Titlis",
        ],
        excludes: [
          "Schengen visa",
          "Insurance",
          "Lunches and personal expenses",
        ],
      },
    ],
  },
  {
    destination_id: 3,
    destination_name: "Indonesia",
    category: "international",
    description:
      "Discover tropical paradise with temples, rice fields, and beaches.",
    thumbnail_image: maldivesImage,
    hero_image: maldivesImage,
    reviews: [
      {
        name: "Simran Joshi",
        description: "Bali was magical, especially the temples and beaches.",
        rating: 4.7,
      },
    ],
    trips: [
      {
        tripId: 4,
        title: "Bali Temple & Beach Tour",
        duration: "7D-6N",
        price: 52000,
        originalPrice: 55000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["jul25", "aug25", "sep25"],
        features: ["temple", "beach", "culture"],
        customizable: true,
        badge: { type: "", text: "" },
        capacity: 26,
        meals: "Breakfast",
        accommodations: "6 nights in Resorts",
        baseCity: "Mumbai",
        route: ["Mumbai", "Bali", "Ubud", "Kuta", "Mumbai"],
        itinerary: [
          {
            day: 1,
            summary: "Arrive Bali.",
            details: "Relax and sunset at beach.",
          },
          {
            day: 2,
            summary: "Ubud & Rice terraces.",
            details: "Swing and coffee plantation.",
          },
          {
            day: 3,
            summary: "Temple tour.",
            details: "Tanah Lot and Ulun Danu.",
          },
          {
            day: 4,
            summary: "Nusa Penida day trip.",
            details: "Kelingking beach.",
          },
          { day: 5, summary: "Free day.", details: "Optional water sports." },
          { day: 6, summary: "Shopping.", details: "Local markets and spa." },
          { day: 7, summary: "Departure.", details: "Airport drop." },
        ],
        includes: ["Breakfast", "Transfers", "Sightseeing as per itinerary"],
        excludes: ["Personal expenses", "Entry fees not mentioned"],
      },
    ],
  },
  {
    destination_id: 4,
    destination_name: "Vietnam",
    category: "international",
    description:
      "Explore rich history, delicious cuisine, and stunning landscapes.",
    thumbnail_image: vietnamImage,
    hero_image: vietnamImage,
    reviews: [
      {
        name: "Rajesh Kumar",
        description:
          "Vietnam's food scene is incredible! Loved the street food.",
        rating: 4.6,
      },
    ],
    trips: [
      {
        tripId: 5,
        title: "Vietnam Cultural Journey",
        duration: "8D-7N",
        price: 48000,
        originalPrice: 50000,
        discountAmount: 2000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["aug25", "sep25", "oct25"],
        features: ["culture", "food", "history"],
        customizable: true,
        badge: { type: "", text: "" },
        capacity: 30,
        meals: "Breakfast",
        accommodations: "7 nights in Hotels",
        baseCity: "Mumbai",
        route: [
          "Mumbai",
          "Hanoi",
          "Halong Bay",
          "Da Nang",
          "Ho Chi Minh",
          "Mumbai",
        ],
        itinerary: [
          { day: 1, summary: "Arrive Hanoi.", details: "Old Quarter walk." },
          {
            day: 2,
            summary: "Halong Bay cruise.",
            details: "Overnight on boat optional.",
          },
          { day: 3, summary: "Fly to Da Nang.", details: "Marble Mountains." },
          { day: 4, summary: "Hoi An.", details: "Ancient town tour." },
          { day: 5, summary: "Fly to HCMC.", details: "City tour." },
          { day: 6, summary: "Cu Chi tunnels.", details: "Guided excursion." },
          { day: 7, summary: "Mekong Delta.", details: "Local village visit." },
          { day: 8, summary: "Departure.", details: "Airport drop." },
        ],
        includes: ["Breakfast", "Transfers", "Major sightseeing"],
        excludes: ["Personal expenses", "Tips", "Meals not mentioned"],
      },
    ],
  },
  {
    destination_id: 5,
    destination_name: "Egypt",
    category: "international",
    description: "Uncover ancient mysteries, pyramids, and the Nile River.",
    thumbnail_image: srilankaImage,
    hero_image: srilankaImage,
    reviews: [
      {
        name: "Priya Nair",
        description: "The pyramids are absolutely magnificent! A must-visit.",
        rating: 4.8,
      },
    ],
    trips: [
      {
        tripId: 6,
        title: "Egypt Pyramids & Nile",
        duration: "10D-9N",
        price: 75000,
        originalPrice: 78000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["oct25", "nov25", "dec25"],
        features: ["history", "pyramids", "nile-cruise"],
        customizable: true,
        badge: { type: "historical", text: "Historical Tour" },
        capacity: 22,
        meals: "Breakfast and select dinners",
        accommodations: "9 nights including Nile cruise",
        baseCity: "Mumbai",
        route: ["Mumbai", "Cairo", "Aswan", "Luxor", "Mumbai"],
        itinerary: [
          { day: 1, summary: "Arrive Cairo.", details: "Evening leisure." },
          {
            day: 2,
            summary: "Giza Pyramids & Sphinx.",
            details: "Museum visit.",
          },
          {
            day: 3,
            summary: "Fly to Aswan, cruise start.",
            details: "Temple visits.",
          },
          {
            day: 4,
            summary: "Cruise to Luxor.",
            details: "Valley of the Kings.",
          },
          { day: 5, summary: "Luxor to Cairo.", details: "Free evening." },
          { day: 6, summary: "Departure.", details: "Airport drop." },
        ],
        includes: ["Transfers", "Breakfast", "Cruise sector sightseeing"],
        excludes: ["Visa", "Tips", "Personal expenses"],
      },
    ],
  },
  {
    destination_id: 6,
    destination_name: "USA",
    category: "international",
    description: "Experience the American dream, from coast to coast.",
    thumbnail_image: GokarnaImage,
    hero_image: GokarnaImage,
    reviews: [
      {
        name: "Arjun Singh",
        description: "New York and LA were incredible! Loved the diversity.",
        rating: 4.9,
      },
    ],
    trips: [
      {
        tripId: 7,
        title: "USA Coast to Coast",
        duration: "15D-14N",
        price: 150000,
        originalPrice: 155000,
        discountAmount: 5000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["nov25", "dec25", "jan26"],
        features: ["cities", "culture", "adventure"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 7,
    destination_name: "Canada",
    category: "international",
    description:
      "Discover natural beauty, friendly people, and outdoor adventures.",
    thumbnail_image: andamanImage,
    hero_image: andamanImage,
    reviews: [
      {
        name: "Meera Iyer",
        description:
          "Canada's nature is breathtaking! Loved Banff National Park.",
        rating: 4.7,
      },
    ],
    trips: [
      {
        tripId: 8,
        title: "Canadian Rockies Adventure",
        duration: "14D-13N",
        price: 135000,
        originalPrice: 138000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["jun25", "jul25", "aug25"],
        features: ["mountains", "nature", "adventure"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 8,
    destination_name: "Japan",
    category: "international",
    description: "Experience the perfect blend of tradition and modernity.",
    thumbnail_image: spitiImage,
    hero_image: spitiImage,
    reviews: [
      {
        name: "Kavya Reddy",
        description:
          "Japan is amazing! Cherry blossoms and temples were magical.",
        rating: 4.9,
      },
    ],
    trips: [
      {
        tripId: 9,
        title: "Japan Cherry Blossom",
        duration: "14D-13N",
        price: 180000,
        originalPrice: 185000,
        discountAmount: 5000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["mar26", "apr26", "may26"],
        features: ["cherry-blossom", "culture", "technology"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 9,
    destination_name: "Australia",
    category: "international",
    description:
      "Explore the land down under with unique wildlife and landscapes.",
    thumbnail_image: vietnamImage,
    hero_image: vietnamImage,
    reviews: [
      {
        name: "Vikram Malhotra",
        description:
          "Sydney Opera House and Great Barrier Reef were incredible!",
        rating: 4.8,
      },
    ],
    trips: [
      {
        tripId: 10,
        title: "Australia Wildlife & Reef",
        duration: "16D-15N",
        price: 200000,
        originalPrice: 205000,
        discountAmount: 5000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["sep25", "oct25", "nov25"],
        features: ["wildlife", "reef", "cities"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 10,
    destination_name: "Singapore",
    category: "international",
    description:
      "Modern city-state with diverse culture and amazing attractions.",
    thumbnail_image: singaporeImage,
    hero_image: singaporeImage,
    reviews: [
      {
        name: "Ananya Sharma",
        description:
          "Singapore is so clean and modern! Gardens by the Bay was stunning.",
        rating: 4.6,
      },
    ],
    trips: [
      {
        tripId: 11,
        title: "Singapore City Explorer",
        duration: "5D-4N",
        price: 55000,
        originalPrice: 58000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["jun25", "jul25", "aug25"],
        features: ["city", "culture", "shopping"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 11,
    destination_name: "Maldives",
    category: "international",
    description:
      "Luxury resorts, white sandy beaches, and crystal-clear waters.",
    thumbnail_image: maldivesImage,
    hero_image: maldivesImage,
    reviews: [
      {
        name: "Priya Nair",
        description: "Best honeymoon destination with stunning water villas.",
        rating: 4.9,
      },
    ],
    trips: [
      {
        tripId: 12,
        title: "Maldives Luxury Escape",
        duration: "5D-4N",
        price: 95000,
        // originalPrice: 98000,
        // discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["aug25", "sep25", "oct25"],
        features: ["luxury", "beach", "water-villa"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 12,
    destination_name: "Dubai",
    category: "international",
    description: "Desert safaris, shopping malls, and futuristic skyscrapers.",
    thumbnail_image: DubaiImage,
    hero_image: DubaiImage,
    reviews: [
      {
        name: "Arjun Singh",
        description: "Dubai is a shopping paradise with incredible nightlife.",
        rating: 4.5,
      },
    ],
    trips: [
      {
        tripId: 13,
        title: "Dubai Shopping Festival",
        duration: "6D-5N",
        price: 60000,
        originalPrice: 63000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["dec25", "jan26", "feb26"],
        features: ["shopping", "luxury", "desert"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 13,
    destination_name: "Kerala",
    category: "domestic",
    description: "God's own country with backwaters, beaches, and ayurveda.",
    thumbnail_image: keralaImage,
    hero_image: keralaImage,
    reviews: [
      {
        name: "Ravi Verma",
        description: "Kerala's backwaters are so peaceful and beautiful.",
        rating: 4.8,
      },
    ],
    trips: [
      {
        tripId: 14,
        title: "Kerala Backwaters & Ayurveda",
        duration: "5D-4N",
        price: 25000,
        originalPrice: 28000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["jun25", "jul25", "aug25"],
        features: ["backwaters", "ayurveda", "nature"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 14,
    destination_name: "Goa",
    category: "domestic",
    description:
      "Sun, sand, and sea with Portuguese heritage and vibrant nightlife.",
    thumbnail_image: kashmirImage,
    hero_image: kashmirImage,
    reviews: [
      {
        name: "Sofia Khan",
        description: "Goa beaches are perfect for relaxation and partying!",
        rating: 4.7,
      },
    ],
    trips: [
      {
        tripId: 15,
        title: "Goa Beach & Party",
        duration: "4D-3N",
        price: 22000,
        originalPrice: 25000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["jun25", "jul25", "aug25"],
        features: ["beach", "party", "heritage"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 15,
    destination_name: "Rajasthan",
    category: "domestic",
    description: "Land of kings with magnificent palaces, forts, and desert.",
    thumbnail_image: sikkimImage,
    hero_image: sikkimImage,
    reviews: [
      {
        name: "Neha Patel",
        description: "Rajasthan's palaces are like fairy tales come true!",
        rating: 4.9,
      },
    ],
    trips: [
      {
        tripId: 16,
        title: "Rajasthan Royal Heritage",
        duration: "6D-5N",
        price: 28000,
        originalPrice: 31000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["oct25", "nov25", "dec25"],
        features: ["heritage", "palace", "culture"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 16,
    destination_name: "Himachal Pradesh",
    category: "domestic",
    description:
      "Himalayan paradise with snow-capped peaks and adventure sports.",
    thumbnail_image: himachalImage,
    hero_image: himachalImage,
    reviews: [
      {
        name: "Vikram Malhotra",
        description: "Manali and Shimla are perfect for mountain lovers!",
        rating: 4.8,
      },
    ],
    trips: [
      {
        tripId: 17,
        title: "Himachal Mountain Adventure",
        duration: "7D-6N",
        price: 30000,
        originalPrice: 33000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["jun25", "jul25", "aug25"],
        features: ["mountains", "adventure", "nature"],
        customizable: true,
        badge: { type: "", text: "" },
      },
    ],
  },
  {
    destination_id: 17,
    destination_name: "Ladakh",
    category: "domestic",
    description:
      "High-altitude deserts, monasteries, and breathtaking landscapes.",
    thumbnail_image: lehImage,
    hero_image: lehImage,
    reviews: [
      {
        name: "Ravi Verma",
        description: "Ladakh's mountains are magical, truly heaven on earth.",
        rating: 5.0,
      },
    ],
    trips: [
      {
        tripId: 18,
        title: "Leh & Nubra Valley Adventure",
        duration: "8D-7N",
        price: 55000,
        originalPrice: 58000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["jun25", "jul25", "aug25", "sep25"],
        features: ["mountain", "adventure", "culture"],
        customizable: false,
        badge: { type: "hot", text: "Trending" },
        capacity: 20,
        meals: "Breakfast and Dinner",
        accommodations: "7 nights in Camps/Hotels",
        baseCity: "Delhi",
        route: ["Delhi", "Leh", "Nubra", "Pangong", "Leh", "Delhi"],
        itinerary: [
          { day: 1, summary: "Arrive Leh.", details: "Acclimatization." },
          {
            day: 2,
            summary: "Local sightseeing.",
            details: "Shanti Stupa, Leh Palace.",
          },
          { day: 3, summary: "Leh to Nubra.", details: "Khardung La pass." },
          {
            day: 4,
            summary: "Nubra to Pangong.",
            details: "Overnight near lake.",
          },
          { day: 5, summary: "Pangong to Leh.", details: "Free evening." },
          { day: 6, summary: "Departure.", details: "Fly back." },
        ],
        includes: [
          "Airport transfers",
          "Meals as per plan",
          "Inner line permits",
        ],
        excludes: ["Flights", "Personal expenses"],
      },
    ],
  },
  {
    destination_id: 18,
    destination_name: "Kashmir",
    category: "domestic",
    description: "Paradise on earth with beautiful valleys and houseboats.",
    thumbnail_image: kashmirImage,
    hero_image: kashmirImage,
    reviews: [
      {
        name: "Priya Nair",
        description: "Kashmir is absolutely stunning! Dal Lake is magical.",
        rating: 4.9,
      },
    ],
    trips: [
      {
        tripId: 19,
        title: "Kashmir Valley & Houseboat",
        duration: "8D-7N",
        price: 35000,
        originalPrice: 38000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["jun25", "jul25", "aug25"],
        features: ["valley", "houseboat", "nature"],
        customizable: true,
        badge: { type: "romantic", text: "Romantic Getaway" },
      },
    ],
  },
  {
    destination_id: 19,
    destination_name: "Lonavala",
    category: "weekend",
    description: "Perfect weekend getaway with scenic views and adventure.",
    thumbnail_image: BaliImage,
    hero_image: BaliImage,
    reviews: [
      {
        name: "Ananya Sharma",
        description:
          "Perfect weekend escape from Mumbai! Loved the viewpoints.",
        rating: 4.6,
      },
    ],
    trips: [
      {
        id: 20,
        title: "Lonavala Weekend Escape",
        duration: "2D-1N",
        price: 8000,
        originalPrice: 11000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["every-weekend"],
        features: ["weekend", "nature", "adventure"],
        customizable: true,
        badge: { type: "", text: "" },
        capacity: 40,
        meals: "Breakfast",
        accommodations: "1 night in Resort",
        baseCity: "Mumbai",
        route: ["Mumbai", "Lonavala", "Mumbai"],
        itinerary: [
          {
            day: 1,
            summary: "Arrive and local sightseeing.",
            details: "Tiger Point, caves.",
          },
          {
            day: 2,
            summary: "Leisure and departure.",
            details: "Strawberry farm optional.",
          },
        ],
        includes: ["Breakfast", "Resort stay"],
        excludes: ["Transport to Lonavala", "Lunch/Dinner"],
      },
    ],
  },
  {
    destination_id: 20,
    destination_name: "Mahabaleshwar",
    category: "weekend",
    description:
      "Queen of hill stations with strawberry farms and scenic beauty.",
    thumbnail_image: uttarakhandImage,
    hero_image: uttarakhandImage,
    reviews: [
      {
        name: "Rajesh Kumar",
        description:
          "Mahabaleshwar is so peaceful! Strawberry picking was fun.",
        rating: 4.7,
      },
    ],
    trips: [
      {
        tripId: 21,
        title: "Mahabaleshwar Strawberry Tour",
        duration: "2D-1N",
        price: 9500,
        originalPrice: 12000,
        discountAmount: 3000,
        image: "/assets/png/banner1.jpg",
        other_images: [
          {
            id: 1,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 2,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 3,
            image: "/assets/png/banner1.jpg",
          },
        ],
        availableDates: ["every-weekend"],
        features: ["weekend", "strawberry", "nature"],
        customizable: true,
        badge: { type: "", text: "" },
        capacity: 40,
        meals: "Breakfast",
        accommodations: "1 night in Resort",
        baseCity: "Pune",
        route: ["Pune", "Mahabaleshwar", "Pune"],
        itinerary: [
          {
            day: 1,
            summary: "Mapro garden and viewpoints.",
            details: "Evening leisure.",
          },
          {
            day: 2,
            summary: "Strawberry picking and return.",
            details: "Shopping time.",
          },
        ],
        includes: ["Breakfast", "Stay"],
        excludes: ["Transport", "Lunch/Dinner"],
      },
    ],
  },
];

export const FILTER_OPTIONS = {
  destinations: TRAVEL_PACKAGES_DATA.map((d) => ({
    value: d.destination_name,
    label: d.destination_name,
  })),
  destinationType: [
    { value: "international", label: "International" },
    { value: "domestic", label: "Domestic" },
    { value: "weekend", label: "Weekend" },
  ],
  dates: [
    { value: "jun25", label: "June 2025" },
    { value: "jul25", label: "July 2025" },
    { value: "aug25", label: "August 2025" },
    { value: "sep25", label: "September 2025" },
    { value: "oct25", label: "October 2025" },
    { value: "nov25", label: "November 2025" },
    { value: "dec25", label: "December 2025" },
    { value: "jan26", label: "January 2026" },
    { value: "feb26", label: "February 2026" },
    { value: "mar26", label: "March 2026" },
    { value: "apr26", label: "April 2026" },
    { value: "may26", label: "May 2026" },
  ],
  features: [
    { value: "beach", label: "Beach" },
    { value: "mountain", label: "Mountain" },
    { value: "culture", label: "Culture" },
    { value: "adventure", label: "Adventure" },
    { value: "luxury", label: "Luxury" },
    { value: "heritage", label: "Heritage" },
    { value: "nature", label: "Nature" },
    { value: "city-life", label: "City Life" },
    { value: "nightlife", label: "Nightlife" },
    { value: "island", label: "Island" },
    { value: "water-sports", label: "Water Sports" },
    { value: "shopping", label: "Shopping" },
    { value: "desert", label: "Desert" },
    { value: "temple", label: "Temple" },
    { value: "backwaters", label: "Backwaters" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "party", label: "Party" },
    { value: "palace", label: "Palace" },
    { value: "valley", label: "Valley" },
    { value: "houseboat", label: "Houseboat" },
    { value: "weekend", label: "Weekend" },
    { value: "strawberry", label: "Strawberry" },
  ],
  sort: [
    { value: "default", label: "Default" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "duration", label: "Duration" },
    { value: "name", label: "Name" },
  ],
};

// Date tabs for filtering
export const DATE_TABS = [
  { id: "all", label: "All" },
  { id: "jun25", label: "Jun 25" },
  { id: "jul25", label: "Jul 25" },
  { id: "aug25", label: "Aug 25" },
  { id: "sep25", label: "Sep 25" },
  { id: "oct25", label: "Oct 25" },
  { id: "nov25", label: "Nov 25" },
  { id: "dec25", label: "Dec 25" },
  { id: "jan26", label: "Jan 26" },
  { id: "feb26", label: "Feb 26" },
  { id: "mar26", label: "Mar 26" },
  { id: "apr26", label: "Apr 26" },
  { id: "may26", label: "May 26" },
];
