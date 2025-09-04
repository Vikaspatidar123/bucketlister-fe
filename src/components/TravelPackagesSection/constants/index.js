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
    destination_name: "Meghalaya",
    category: "domestic",
    destination_description:
      "Meghalaya, meaning 'Abode of Clouds', is a breathtaking northeastern state that offers an incredible blend of adventure and natural beauty. **Living root bridges** carved by nature herself stretch across crystal-clear rivers, while **Asia's cleanest village** showcases the harmony between humans and environment.\n\nKey highlights include:\n- Double Decker Living Root Bridge - a marvel of bio-engineering\n- **Dawki River** with its crystal-clear waters perfect for kayaking\n- __Cherrapunjee__ - one of the wettest places on Earth\n- Sacred forests and mystical caves waiting to be explored\n- Stunning waterfalls including India's tallest plunge waterfall\n\nWhether you're seeking adrenaline-pumping adventures like cliff jumping, serene camping under starlit skies, or cultural immersion with local tribes, Meghalaya delivers an unforgettable journey through India's most pristine landscapes.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description:
      "Experience Meghalaya's mystical living root bridges and crystal-clear rivers flowing through lush green valleys.",
    reviews: [
      {
        id: 1,
        description:
          "An absolutely mesmerizing experience! The living root bridge trek was challenging but so rewarding. The crystal-clear waters of Dawki and the camping experience under the stars made it unforgettable.",
        name: "PRIYA SHARMA",
        location: "Meghalaya (Nov 2024)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Smiling woman with dark wavy hair wearing red top",
        rating: 4.8,
      },
      {
        id: 2,
        description:
          "The adventure activities in Dawki were incredible! Cliff jumping and kayaking in Asia's cleanest river was an adrenaline rush. The guides were knowledgeable and safety was top priority.",
        name: "RAHUL KUMAR",
        location: "Meghalaya (Dec 2024)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Young man with curly hair wearing dark hat and t-shirt",
        rating: 4.7,
      },
      {
        id: 3,
        description:
          "Mawlynnong village was a revelation - so clean and beautiful! The sunrise at Nongjrong was worth the 2 AM wake-up call. Meghalaya exceeded all my expectations.",
        name: "ANITA DESAI",
        location: "Meghalaya (Jan 2025)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Smiling woman with short hair wearing green jacket",
        rating: 4.9,
      },
      {
        id: 4,
        description:
          "The caves exploration was thrilling and the waterfalls were spectacular! Basic food was actually quite good and the trip captain made sure everyone was comfortable throughout.",
        name: "VIKRAM SINGH",
        location: "Meghalaya (Feb 2025)",
        profileImage: "/assets/png/profile-1.jpg",
        imageAlt: "Smiling man with beard wearing blue shirt",
        rating: 4.6,
      },
    ],
    trips: [
      {
        tripId: 1,
        title: "Explore Adventurous Route of Meghalaya",
        tripDescription:
          "An epic adventure through Meghalaya's living root bridges, crystal-clear rivers, and mystical caves with camping under the stars.",
        duration: "6N-7D",
        price: 21999,
        originalPrice: 25999,
        discountAmount: 4000,
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
          {
            id: 4,
            image: "/assets/png/banner1.jpg",
          },
          {
            id: 5,
            image: "/assets/png/banner1.jpg",
          },
        ],
        features: ["adventure", "nature", "trekking", "camping", "waterfalls"],
        customizable: true,
        badge: { type: "popular", text: "Most Popular" },
        capacity: 20,
        meals: "6 Breakfasts and 3 Dinners",
        accommodations:
          "6 nights in Hotels, Resorts & Camps on Triple & Quad sharing",
        baseCity: "Guwahati",
        route: ["Guwahati", "Shillong", "Dawki", "Cherrapunjee", "Guwahati"],
        isCircuit: true,
        batches: [
          {
            October: ["19/10/25 - 25/10/25"],
          },
          {
            November: [
              "26/10/25 - 01/11/25",
              "02/11/25 - 08/11/25",
              "16/11/25 - 22/11/25",
              "30/11/25 - 06/12/25",
            ],
          },
          {
            December: ["14/12/25 - 20/12/25", "21/12/25 - 27/12/25"],
          },
          {
            January: [
              "26/12/25 - 01/01/26",
              "27/12/25 - 02/01/26",
              "28/12/25 - 03/01/26",
              "29/12/25 - 04/01/26",
              "11/01/26 - 17/01/26",
              "25/01/26 - 31/01/26",
            ],
          },
          {
            February: ["08/02/26 - 14/02/26", "22/02/26 - 28/02/26"],
          },
          {
            March: ["01/03/26 - 07/03/26"],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Guwahati - Proceed to Shillong",
            details:
              "Touchdown at Guwahati Airport, scenic drive through mountains, pit stop at Umiam Lake, explore Police Bazaar evening.",
          },
          {
            day: 2,
            summary: "Shillong Waterfalls - Dawki Camping",
            details:
              "Visit Phe Phe Falls and Krang Suri Falls, kayak river crossing, 30-min hike, camp by Umngot River under stars.",
          },
          {
            day: 3,
            summary: "Adventure Activities in Dawki - Mawlynnong village",
            details:
              "Kayaking and cliff jumping in Umngot River, visit Asia's Cleanest Village - Mawlynnong, proceed to Cherrapunjee.",
          },
          {
            day: 4,
            summary: "Double Decker Living Root Bridge - Cherrapunji",
            details:
              "2-hour trek each way to Double Decker Living Root Bridge, freshwater blue pool dip, Rainbow Falls if time permits.",
          },
          {
            day: 5,
            summary: "Mawsmai Caves - Nohakalikai Falls - Proceed to Shillong",
            details:
              "Navigate through Mawsmai Caves' narrow passages, visit India's tallest plunge waterfall Nohakalikai, see Mawsawa Falls.",
          },
          {
            day: 6,
            summary: "Nongjrong Sunrise - Mawphlang Sacred Forest",
            details:
              "2:00 AM departure for sunrise at Nongjrong Village, guided tour of Mawphlang Sacred Forest, optional Shillong sightseeing.",
          },
          {
            day: 7,
            summary: "Transfer to Airport",
            details:
              "Check-out and departure to Guwahati Airport with memories and souvenirs.",
          },
        ],
        includes: [
          "Accommodation in Hotels, Resorts & Camps on sharing basis",
          "Pure Veg Meals - 6 Breakfasts and 3 Dinners",
          "All entry fees to places mentioned in itinerary",
          "Kayaking and Cliff Jumping activities in Dawki River",
          "All intercity and local transportation by Tempo Traveler",
          "Guwahati Airport pickup and drop-off",
          "Mineral water during road journey",
          "First Aid kit and medical assistance",
          "Trip Captain assistance throughout the journey",
        ],
        excludes: [
          "5% GST",
          "Flight tickets to/from Guwahati",
          "Lunch meals",
          "Personal expenses not mentioned in inclusions",
          "Camera and vehicle charges where company vehicle unavailable",
          "Extra food, drinks, tips, laundry, shopping",
        ],
        notes: [
          "Standard check-in: 12 noon, check-out: 10:00 AM",
          "At some destinations, buses allowed only till parking - walking required to monuments",
          "DJ parties not allowed in Guwahati hotels - can visit cafes/clubs for 31st Night",
          "Schedule may change based on circumstances and convenience",
          "Force majeure costs (strikes, natural calamities, cancellations) borne by participants",
          "Company not responsible for cancellations due to natural calamities or man-made incidents",
          "Guest responsible for luggage throughout the trip",
          "Trip cancellation: 10% fee charged, remaining amount as credit note for future use",
          "Basic food provided throughout the trip, including lunch at basic restaurants",
          "Flight to be booked before 14:00 for Day 1 arrival",
        ],
      },
    ],
  },
  {
    destination_id: 2,
    destination_name: "Spiti Valley",
    category: "domestic",
    destination_description:
      "Spiti Valley, meaning 'The Middle Land', is a breathtaking cold desert mountain valley nestled between India and Tibet. This remote Himalayan destination offers an otherworldly experience with ancient Buddhist monasteries, dramatic landscapes, and unique cultural encounters at extreme altitudes.\n\nKey highlights include:\n- **World's Highest Post Office** at Hikkim village (14,567 ft)\n- **Chandratal Lake** - the mystical moon lake at 4,200 meters\n- **Ancient Monasteries** - Tabo (1000+ years old) and Key Monastery\n- **India's Last Village** Chitkul on Indo-Tibet border\n- **Fossil Village Langza** with prehistoric remains and Giant Buddha statue\n- **Chicham Bridge** - world's highest suspension bridge\n- **Kinnaur Kailash** views - Lord Shiva's summer abode\n\nWhether you're seeking spiritual awakening in ancient gompas, adventure through high-altitude passes, or cultural immersion with Tibetan Buddhist communities, Spiti Valley delivers an unforgettable journey through one of the world's most remote and pristine landscapes.",
    thumbnail_image: "/assets/svg/Spiti.svg",
    hero_image: "/assets/svg/Spiti.svg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 2,
        title: "Spiti Valley Explorer",
        tripDescription:
          "A 10-day journey through the mystical Spiti Valley covering ancient monasteries, highest post office, fossil village Langza, and the dramatic landscapes of the cold desert with train travel from Mumbai.",
        duration: "9N-10D",
        price: 21000,
        originalPrice: "",
        discountAmount: "",
        image: "/assets/png/banner1.jpg",
        other_images: [],
        features: [
          "adventure",
          "mountains",
          "desert",
          "monasteries",
          "backpacking",
          "culture",
          "fossil",
        ],
        customizable: true,
        badge: "",
        capacity: 30,
        meals: "7 Breakfasts and 7 Dinners",
        accommodations:
          "7 nights in Hotels, Homestays, Hostels & Camps on Triple sharing",
        baseCity: "Mumbai",
        route: [
          "Mumbai",
          "Chandigarh",
          "Shimla",
          "Kalpa",
          "Tabo",
          "Kaza",
          "Nako",
          "Narkanda",
          "Mumbai",
        ],
        isCircuit: true,
        batches: [
          {
            October: ["24/10/25 - 02/11/25"],
          },
          {
            November: ["20/11/25 - 29/11/25"],
          },
          {
            December: [
              "04/12/25 - 13/12/25",
              "18/12/25 - 27/12/25",
              "24/12/25 - 02/01/26",
              "26/12/25 - 04/01/26",
              "28/12/25 - 06/01/26",
            ],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Mumbai to Chandigarh - Train Journey",
            details:
              "Meet at 11:00 AM at Mumbai Central/Bandra Terminus. Board Paschim Express/Chandigarh Superfast Express. Ice breaking games with fellow Spiti backpackers.",
          },
          {
            day: 2,
            summary: "Chandigarh to Shimla",
            details:
              "Reach Chandigarh 4:00 PM, drive towards Shimla. Reach Shimla at 11:00 PM, check-in to hotel. Dinner and rest.",
          },
          {
            day: 3,
            summary: "Shimla to Kalpa",
            details:
              "Early start towards Kalpa, small village in Kinnaur famous for Apple Orchards & magnificent Kinnaur Kailash views. Evening reach Kalpa, check-in and dinner.",
          },
          {
            day: 4,
            summary: "Kalpa - Tabo",
            details:
              "After breakfast, visit Suicide Point for Instagram-worthy photos. Leave for Tabo with halt at Khab Sangam - confluence of Spiti & Sutlej Rivers. Evening reach Tabo, dinner and rest.",
          },
          {
            day: 5,
            summary: "Tabo to Kaza",
            details:
              "Post breakfast, visit Tabo Monastery - oldest monastery of Spiti. Visit Dhankar Monastery surrounded by mountain beauty. Reach Kaza, dinner and rest.",
          },
          {
            day: 6,
            summary: "Langza - Hikkim - Komic",
            details:
              "After breakfast, visit Hikkim - world's highest post office at 14,567 ft. Komic Village - world's highest village with motorable roads at 15,500 ft. Langza - known for fossils and famous Buddha Statue. Evening explore Kaza Market and cafes.",
          },
          {
            day: 7,
            summary: "Key Monastery - Chicham - Nako",
            details:
              "Check out, visit Key Monastery at 13,668 ft height. Visit Chicham Bridge - world's highest suspension bridge. After lunch, head to Nako Village. Explore Nako Monastery and Nako Lake.",
          },
          {
            day: 8,
            summary: "Nako to Narkanda",
            details:
              "After breakfast, check out and leave for Narkanda. Reach evening. Last night of trip - enjoy with new friends and share memories of this beautiful journey.",
          },
          {
            day: 9,
            summary: "Narkanda to Chandigarh/Ambala",
            details:
              "After breakfast, visit Hatu Peak. Leave for Ambala Railway station, can visit Shimla Mall Road depending on time. 22:50 PM catch Golden Temple Mail back to Mumbai.",
          },
          {
            day: 10,
            summary: "Arrive Mumbai",
            details:
              "Train journey with games, photo sharing and memories. Reach Mumbai by 11:00 PM.",
          },
        ],
        includes: [
          "Train Fare - Mumbai to Mumbai (Confirm/RAC - refer notes section)",
          "Private Tempo Traveller/Innova throughout (depending on group size)",
          "7 Nights accommodation in Hotels/Homestays/Hostels/Camps on Triple Sharing",
          "Pure Veg/Jain Meals - 7 Breakfasts & 7 Dinners",
          "Bonfire wherever possible",
          "Daily water during road journey",
          "Super-Experienced Tour Manager assistance throughout",
          "All Necessary Permits & Entry Fees",
          "First Aid Kit & Medical Assistance",
        ],
        excludes: [
          "5% GST",
          "Train Meals",
          "Lunch (expect Rs 100-150 per meal for local cuisines)",
          "Safari, Camera charges where company vehicle unavailable",
          "Any Adventure Activities",
          "Personal expenses",
          "Extra food & drinks, Tips, Laundry, Shopping",
          "Anything not mentioned in inclusions",
        ],
        notes: [
          "Early check-in subject to availability",
          "Company vehicle accessible only to parking areas",
          "Schedule can be changed based on circumstances",
          "Force majeure costs borne by guests",
          "Backpacking trip, not luxury - to experience local culture fully",
          "No room service, laundry, luxury hotels, room heaters",
          "Train tickets may be RAC/Waiting if booked late",
          "Use backpack, avoid suitcases or heavy luggage",
        ],
      },
      {
        tripId: 3,
        title: "Spiti with Chandratal Lake",
        tripDescription:
          "An epic 11-day Spiti adventure including the mystical Chandratal Lake, India's last village Chitkul, ancient monasteries, highest post office, and dramatic cold desert landscapes with comprehensive circuit route.",
        duration: "10N-11D",
        price: 22000,
        originalPrice: "",
        discountAmount: "",
        image: "/assets/png/banner1.jpg",
        other_images: [],
        features: [
          "adventure",
          "mountains",
          "desert",
          "monasteries",
          "lake",
          "backpacking",
          "culture",
          "trekking",
        ],
        customizable: true,
        badge: { type: "comprehensive", text: "Complete Spiti" },
        capacity: 30,
        meals: "8 Breakfasts and 8 Dinners",
        accommodations:
          "8 nights in Hotels, Homestays, Hostels & Camps on Triple sharing",
        baseCity: "Mumbai",
        route: [
          "Mumbai",
          "Chandigarh",
          "Narkanda",
          "Rakchham",
          "Chitkul",
          "Kalpa",
          "Tabo",
          "Kaza",
          "Chandratal",
          "Manali",
          "Mumbai",
        ],
        isCircuit: true,
        batches: [
          {
            September: ["11/09/25 - 21/09/25", "18/09/25 - 28/09/25"],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Mumbai to Chandigarh - Train Journey",
            details:
              "11:00 AM Meet at Mumbai Central/Bandra Terminus for Paschim Express/Chandigarh Superfast Express OR 6:00 PM Golden Temple Express. Ice breaking games with fellow Spiti backpackers.",
          },
          {
            day: 2,
            summary: "Chandigarh to Narkanda",
            details:
              "Reach Chandigarh late afternoon, drive towards Narkanda. Check-in and dinner.",
          },
          {
            day: 3,
            summary: "Narkanda to Rakchham",
            details:
              "After breakfast, visit Hatu Peak - highest peak of Shimla. Enjoy scenic Shivalik Hills beauty. Hatu Temple dedicated to Maa Kali at peak top. Leave for Rakchham - beautiful Sangla Valley town. Check-in and dinner.",
          },
          {
            day: 4,
            summary: "Rakchham - Chitkul - Kalpa",
            details:
              "Wake up to Baspa River sounds. After breakfast, visit Chitkul - India's Last Village on Indo-Tibet Border. Visit 'Hindustan ka Akhri Dhaba'. Evening leave for Kalpa - beautiful Kinnaur Valley town.",
          },
          {
            day: 5,
            summary: "Kalpa to Tabo",
            details:
              "Wake up to spectacular Kinner Kailash Peak views - Lord Shiva's summer abode. Visit Suicide Point at Rohgi village. Drive to Tabo with pitstops at Khab Sangam (Spiti-Sutlej confluence), Nako Lake and Monastery, Gue village with 500-year-old Buddhist monk mummy.",
          },
          {
            day: 6,
            summary: "Tabo to Kaza",
            details:
              "After breakfast, visit Tabo Monastery and Tabo caves. Move towards Kaza - Spiti headquarters. Check-in and dinner.",
          },
          {
            day: 7,
            summary: "Kaza Local Sightseeing",
            details:
              "Visit Spiti Valley's best places: Hikkim - world's highest post office at 14,567 ft. Komic Village - world's highest motorable village at 15,500 ft. Langza - fossil village with famous Buddha Statue. Evening explore Kaza Market and cafes.",
          },
          {
            day: 8,
            summary: "Kaza to Chandratal Lake",
            details:
              "Check out, visit Key Monastery at 13,668 ft. Visit Chicham Bridge - world's highest suspension bridge. Head to Chandratal Lake via Kunzum Pass - stunning blue lake at 4,200 mts altitude. Check into camps, dinner. (Stay subject to weather conditions)",
          },
          {
            day: 9,
            summary: "Chandratal Lake to Manali",
            details:
              "After breakfast, check out from Chandratal camps. 5-6 hour drive to Manali passing through famous Atal Tunnel. Evening reach Manali, free to explore Mall Road.",
          },
          {
            day: 10,
            summary: "Manali to Chandigarh/Ambala",
            details:
              "After breakfast, check out and leave for Ambala Cantt Railway Station. Bid farewell to mountains. 11:00 PM board train back to Mumbai.",
          },
          {
            day: 11,
            summary: "Arrive Mumbai",
            details:
              "Train journey with games, photo sharing and memories. Reach Mumbai by 11:00 PM.",
          },
        ],
        includes: [
          "Train Fare - Mumbai to Mumbai (Confirm/RAC - refer notes section)",
          "Private Tempo Traveller/Innova throughout (depending on group size)",
          "8 Nights accommodation in Hotels/Homestays/Hostels/Camps on Triple Sharing",
          "Pure Veg/Jain Meals - 8 Breakfasts & 8 Dinners",
          "Daily water during road journey",
          "Super-Experienced Tour Manager assistance throughout",
          "All Necessary Permits & Entry Fees",
          "First Aid Kit & Medical Assistance",
        ],
        excludes: [
          "Train Meals",
          "Lunch (expect Rs 100-150 per meal for local cuisines)",
          "Safari, Camera charges where company vehicle unavailable",
          "Any Adventure Activities",
          "Personal expenses",
          "Extra food & drinks, Tips, Laundry, Shopping",
          "Anything not mentioned in inclusions",
        ],
        notes: [
          "Early check-in subject to availability",
          "Company vehicle accessible only to parking areas",
          "Schedule can be changed based on circumstances",
          "Force majeure costs borne by guests",
          "Backpacking trip, not luxury - to experience local culture fully",
          "No room service, laundry, luxury hotels, room heaters",
          "Train tickets may be RAC/Waiting if booked late",
          "Use backpack, avoid suitcases or heavy luggage",
          "Chandratal Lake stay in tents subject to climate conditions",
        ],
      },
    ],
  },
  {
    destination_id: 3,
    destination_name: "Himachal",
    category: "domestic",
    destination_description:
      "Himachal Pradesh, the 'Land of Gods', offers an incredible journey through snow-capped mountains, serene valleys, and vibrant hill stations. From the hippie paradise of **Kasol** in Parvati Valley to the adventure hub of **Manali**, this destination promises diverse experiences for every traveler.\n\nKey highlights include:\n- **Kasol & Parvati Valley** - Israel of India with stunning mountain views\n- **Manali** - Gateway to Himalayan adventures and Solang Valley\n- **Bir Billing** - Asia's highest paragliding site\n- **Golden Temple, Amritsar** - Spiritual serenity and cultural immersion\n- White water rafting in Kullu and adventure activities\n- Scenic train journey through the heart of India\n\nWhether you're seeking mountain adventures, spiritual experiences, or cultural exploration through local dhabas and cafes, this circuit trip delivers an authentic taste of North Indian hill station culture combined with thrilling outdoor activities.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 4,
        title: "Explore Offbeat Himachal - Bir Barot Circuit",
        tripDescription:
          "A 10-day offbeat journey through Himachal's hidden gems including paragliding at Bir Billing, serene Barot valley, mystical Jibhi, and spiritual Amritsar with train travel from Mumbai.",
        duration: "9N-10D",
        price: 20499,
        originalPrice: "",
        discountAmount: "",
        image: "/assets/png/banner1.jpg",
        other_images: [],
        features: [
          "offbeat",
          "mountains",
          "paragliding",
          "trekking",
          "spiritual",
          "backpacking",
          "nature",
        ],
        customizable: true,
        badge: "",
        capacity: 20,
        meals: "7 Breakfasts and 6 Dinners",
        accommodations:
          "6 nights in Premium Hotels, Homestays & Camps on sharing basis",
        baseCity: "Mumbai",
        route: [
          "Mumbai",
          "Amritsar",
          "Bir Billing",
          "Barot Valley",
          "Jibhi",
          "Mumbai",
        ],
        isCircuit: true,
        batches: [
          {
            October: ["02/10/25 - 12/10/25"],
          },
          {
            November: ["23/10/25 - 01/11/25", "13/11/25 - 22/11/25"],
          },
          {
            December: ["04/12/25 - 13/12/25"],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Mumbai to Ambala - Train Journey",
            details:
              "Meet and Greet at 11:00 AM/6:00 PM at Bandra Terminus. Board Paschim Express/Chandigarh Superfast Express for Amritsar. Ice breaking games with fellow backpackers.",
          },
          {
            day: 2,
            summary: "Arrival Amritsar - Explore Amritsar",
            details:
              "Spend day in train with games and bonding. Reach Amritsar by 9pm/11pm, check-in, freshen up, have dinner and rest.",
          },
          {
            day: 3,
            summary: "Golden Temple, Wagah Border",
            details:
              "Visit Golden Temple, Jallianwala Bagh. Explore local delicacies for lunch. Witness Wagah Border Parade & Flag Ceremony. Evening explore Amritsar Mall Road, local dhabas for Kulcha-Lassi. Overnight journey to Bir.",
          },
          {
            day: 4,
            summary: "Arrive at Bir Billing",
            details:
              "Early morning reach Bir, check-in. Cycling around town, small hikes to nearby places. Evening paragliding slot. Sunset at landing site, explore Bir market for hippie clothes. Local cafes with live music for dinner.",
          },
          {
            day: 5,
            summary: "Bir to Barot Valley",
            details:
              "Early morning paragliding slot. After breakfast, journey to Barot. Check into homestay. Relax near Uhl River or village walk. Dinner and rest.",
          },
          {
            day: 6,
            summary: "Excursion to Rajgunda Valley",
            details:
              "Early morning trek to Rajgundha Village with stunning Dhauladhar range views through dense forests and meadows. Explore traditional wooden houses village. Lunch at Rajgundha Homestay with authentic local cuisine. Return to Barot evening.",
          },
          {
            day: 7,
            summary: "Barot to Jibhi",
            details:
              "After breakfast, 7-hour journey to Jibhi. Reach late afternoon-evening. Explore Jibhi market for amazing cafes and vibes.",
          },
          {
            day: 8,
            summary: "Jalori Pass Day Excursion",
            details:
              "Post breakfast, journey to Jalori Pass via beautiful Shoja Village. Trek to 180° and 360° View Points for mesmerizing Great Himalayan National Park views. Afternoon return, explore Jibhi waterfall and market cafes.",
          },
          {
            day: 9,
            summary: "Journey towards Ambala",
            details:
              "Morning departure after breakfast, 7-8 hour ride saying goodbye to mountains. Reach Ambala evening, dinner and board train at 10:55 PM from Ambala Cantt or 2am from Chandigarh.",
          },
          {
            day: 10,
            summary: "Back to Mumbai",
            details:
              "Reach Borivali/Mumbai Central 10:45-11:30 PM OR Vasai/Panvel 11pm-12:30am with unforgettable memories.",
          },
        ],
        includes: [
          "Train Fare - Mumbai to Amritsar and Ambala to Mumbai (Confirm/RAC - refer notes)",
          "All intercity and local transportation by Tempo Traveller/Innova",
          "6 Nights accommodation in Premium Hotels/Homestays/Camps on sharing basis",
          "Bonfire and Music wherever possible",
          "Veg and Jain Meals - 7 Breakfasts & 6 Dinners",
          "Mineral Water during road journeys",
          "All Necessary Permits & Entry Fees",
          "First Aid kit and medical assistance",
          "Experienced Trip Captain assistance throughout",
        ],
        excludes: [
          "5% GST",
          "Train Meals, Lunch or other meals not mentioned (expect Rs 100-150 per meal)",
          "Cafe meals budget Rs 300-350 per meal",
          "Rafting, Paragliding, Camera charges where company vehicle unavailable",
          "Personal expenses, extra food & drinks, Tips, Laundry, Shopping",
          "Anything not mentioned in inclusions",
        ],
        notes: [
          "Train tickets subject to confirmation/RAC availability",
          "Early check-in subject to availability",
          "Paragliding weather dependent",
          "Local cuisine exploration for lunch at own cost",
          "Company vehicle accessible only to parking areas",
          "Trip schedule may change based on circumstances",
        ],
      },
      {
        tripId: 5,
        title: "Explore Offbeat Himachal - Barot Bir Circuit (Premium)",
        tripDescription:
          "A premium 10-day offbeat Himachal experience featuring Barot valley first, then Bir Billing paragliding, mystical Jibhi, and Golden Temple Amritsar with enhanced capacity and comfort.",
        duration: "9N-10D",
        price: 22999,
        originalPrice: "",
        discountAmount: "",
        image: "/assets/png/banner1.jpg",
        other_images: [],
        features: [
          "offbeat",
          "mountains",
          "paragliding",
          "trekking",
          "spiritual",
          "premium",
          "nature",
        ],
        customizable: true,
        badge: "",
        capacity: 30,
        meals: "7 Breakfasts and 6 Dinners",
        accommodations:
          "6 nights in Premium Hotels, Homestays & Camps on sharing basis",
        baseCity: "Mumbai",
        route: [
          "Mumbai",
          "Amritsar",
          "Barot Valley",
          "Bir Billing",
          "Jibhi",
          "Mumbai",
        ],
        isCircuit: true,
        batches: [
          {
            December: [
              "25/12/25 - 03/01/26",
              "27/12/25 - 05/01/26",
              "28/12/25 - 06/01/26",
            ],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Mumbai to Ambala - Train Journey",
            details:
              "Meet and Greet at 11:00 AM/6:00 PM at Bandra Terminus. Board Paschim Express/Chandigarh Superfast Express for Amritsar. Ice breaking games with fellow backpackers.",
          },
          {
            day: 2,
            summary: "Arrival Amritsar - Explore Amritsar",
            details:
              "Train journey with games and bonding. Reach Amritsar by 9pm/11pm, check-in, freshen up, dinner and rest.",
          },
          {
            day: 3,
            summary: "Golden Temple, Wagah Border",
            details:
              "Visit Golden Temple, Jallianwala Bagh. Local delicacies for lunch. Wagah Border Parade & Flag Ceremony. Evening Amritsar Mall Road shopping, local dhabas for Kulcha-Lassi. Overnight journey to Bir.",
          },
          {
            day: 4,
            summary: "Arrive at Barot",
            details:
              "Early morning reach Barot, check into stay. Spend time with nature, ice breaking and outdoor games. Relax near Uhl River or village walks. Dinner and rest.",
          },
          {
            day: 5,
            summary: "Excursion to Rajgunda Valley",
            details:
              "Early morning trek to Rajgundha Village with stunning Dhauladhar range views through dense forests and meadows. Explore traditional wooden houses village. Lunch at Rajgundha Homestay. Return to Barot evening.",
          },
          {
            day: 6,
            summary: "Barot to Bir - Explore Bir",
            details:
              "After breakfast, journey to Bir Billing. Reach afternoon, check-in and rest. Paragliding from Asia's second highest point (weather dependent). Evening sunset at landing site, Bir market shopping, local cafes with live music.",
          },
          {
            day: 7,
            summary: "Paragliding - Journey towards Jibhi",
            details:
              "Paragliding from Billing - World's Second highest site highlight! After breakfast and paragliding, 6-8 hour journey to Jibhi. Reach late evening, rest for amazing day ahead.",
          },
          {
            day: 8,
            summary: "Explore Jibhi - Jalori Pass Day Excursion",
            details:
              "Post breakfast, journey to Jalori Pass via Shoja Village. Trek to 180° and 360° View Points for Great Himalayan National Park views. Afternoon return, explore Jibhi waterfall and market cafes.",
          },
          {
            day: 9,
            summary: "Journey towards Ambala",
            details:
              "Morning departure, 7-8 hour mountain goodbye ride. Evening Ambala arrival, dinner and board train 10:55 PM Ambala Cantt or 2am Chandigarh.",
          },
          {
            day: 10,
            summary: "Back to Mumbai",
            details:
              "Reach Borivali/Mumbai Central 10:45-11:30 PM OR Vasai/Panvel 11pm-12:30am with unforgettable Bucketlister memories.",
          },
        ],
        includes: [
          "Train Fare - Mumbai to Amritsar and Ambala to Mumbai (Confirm/RAC - refer notes)",
          "All intercity and local transportation by Tempo Traveller/Innova",
          "6 Nights accommodation in Premium Hotels/Homestays/Camps on sharing basis",
          "Bonfire and Music wherever possible",
          "Veg and Jain Meals - 7 Breakfasts & 6 Dinners",
          "Mineral Water during road journeys",
          "All Necessary Permits & Entry Fees",
          "First Aid kit and medical assistance",
          "Experienced Trip Captain assistance throughout",
        ],
        excludes: [
          "5% GST",
          "Train Meals, Lunch or other meals not mentioned (expect Rs 100-150 per meal)",
          "Cafe meals budget Rs 300-350 per meal",
          "Rafting, Paragliding, Camera charges where company vehicle unavailable",
          "Personal expenses, extra food & drinks, Tips, Laundry, Shopping",
          "Anything not mentioned in inclusions",
        ],
        notes: [
          "Train tickets subject to confirmation/RAC availability",
          "Early check-in subject to availability",
          "Paragliding weather dependent",
          "Premium capacity with enhanced comfort",
          "Local cuisine exploration for lunch at own cost",
          "Company vehicle accessible only to parking areas",
        ],
      },
      {
        tripId: 6,
        title: "NY Trip to Himachal - Manali Kasol Special",
        tripDescription:
          "A special New Year 10-day Himachal adventure covering Amritsar's spirituality, Bir's paragliding, Manali's snow peaks, and Kasol's hippie culture with DJ night celebration.",
        duration: "9N-10D",
        price: 22999,
        originalPrice: "",
        discountAmount: "",
        image: "/assets/png/banner1.jpg",
        other_images: [],
        features: [
          "newyear",
          "mountains",
          "paragliding",
          "adventure",
          "spiritual",
          "culture",
          "party",
        ],
        customizable: true,
        badge: { type: "special", text: "New Year Special" },
        capacity: 30,
        meals: "8 Breakfasts and 8 Dinners",
        accommodations:
          "8 nights in Hotels, Homestays, Hostels & Camps on Triple sharing",
        baseCity: "Mumbai",
        route: [
          "Mumbai",
          "Amritsar",
          "Bir Billing",
          "Manali",
          "Kasol",
          "Chandigarh",
          "Mumbai",
        ],
        isCircuit: true,
        batches: [
          {
            December: ["24/12/25 - 02/01/26", "26/12/25 - 04/01/26"],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Mumbai to Amritsar - Train Journey",
            details:
              "Meet at 11:00 AM, board Paschim Express (12925) 11:25 AM or Golden Temple Express (12903) 07:15 PM. Ice breaking games with fellow Himachal backpackers.",
          },
          {
            day: 2,
            summary: "Reach Amritsar",
            details:
              "Reach Amritsar by 09:00 PM/11:00 PM. Check-in and good night's sleep.",
          },
          {
            day: 3,
            summary: "Explore Amritsar - O/N Bir",
            details:
              "Early breakfast. Golden Temple, Jallianwala Bagh, Amritsar streets exploration. Post lunch, Wagah Border Parade & Flag Ceremony. Evening local dhabas for Kulcha Lassi. Overnight journey to Bir.",
          },
          {
            day: 4,
            summary: "Explore Bir",
            details:
              "After breakfast, check out and reach Bir evening. Explore famous cafes with live music. Evening bonfire gathering. Overnight in Bir.",
          },
          {
            day: 5,
            summary: "Bir - Billing - Enroute Manali",
            details:
              "Early morning paragliding at Asia's highest site (own cost, weather dependent). Explore Bir town on cycles, nearby hikes. Leave for Manali, reach evening. Explore Mall Road & Hidimba Devi Temple.",
          },
          {
            day: 6,
            summary: "Manali Local Sightseeing",
            details:
              "Post breakfast, Solang Valley and Atal Tunnel (weather dependent). First half adventure activities. If time permits, Vashishtha temple and hot springs. Evening Mall Road street food and cafes.",
          },
          {
            day: 7,
            summary: "Manali - Kasol via Kullu",
            details:
              "After breakfast, journey to magical Kasol in Parvati Valley. Kullu halt for River Rafting and shawl shopping (own cost). Evening Kasol arrival, check-in. Delicious dinner and bonfire awaits!",
          },
          {
            day: 8,
            summary: "Explore Local Kasol - Chandigarh",
            details:
              "Mountain view wake-up. Live adulthood dreams in KASOL! Chill by Parvati valley, short Chalal Village trek. Manikaran Gurudwara visit, hot springs experience. Last dinner together in local hippie cafe!",
          },
          {
            day: 9,
            summary: "Departure from Chandigarh",
            details:
              "After breakfast, checkout and move to Chandigarh/Ambala Railway station. Dinner and board train 10:55 PM Ambala Cantt or from Delhi. Train games, photo sharing, trip nostalgia.",
          },
          {
            day: 10,
            summary: "Back to Mumbai",
            details:
              "Back to Mumbai with lots of memories. Meet soon for next trip and tick off another Bucketlist destination.",
          },
        ],
        includes: [
          "Train Fare - Mumbai to Amritsar & Chandigarh to Mumbai (Confirm/RAC - refer notes)",
          "Private Tempo Traveller/Innova throughout (depending on group size)",
          "Accommodation in Hotels/Homestays/Hostels/Camps on Triple Sharing",
          "One DJ Night during New Year's",
          "Pure Veg/Jain Meals - Breakfast & Dinner",
          "Daily water during road journey",
          "Super-Experienced Tour Manager assistance throughout",
          "All Necessary Permits & Entry Fees",
          "First Aid Kit & Medical Assistance",
        ],
        excludes: [
          "5% GST",
          "Train Meals, Lunch (expect Rs 100-150 per meal for local cuisines)",
          "Cafe meals budget Rs 300-350 per meal",
          "Rafting, Paragliding, Safari, Camera charges where company vehicle unavailable",
          "Any Adventure Activities",
          "Personal expenses",
          "Extra food & drinks, Tips, Laundry, Shopping",
          "Anything not mentioned in inclusions",
        ],
        notes: [
          "Train tickets subject to confirmation/RAC availability",
          "Special New Year DJ Night included",
          "Paragliding weather dependent at own cost",
          "Local cuisine exploration for lunch",
          "Enhanced group capacity for New Year celebration",
          "Company vehicle accessible only to parking areas",
        ],
      },
      {
        tripId: 7,
        title: "Explore Best of Himachal",
        tripDescription:
          "An epic 10-day backpacking adventure through Himachal's most iconic destinations including Kasol, Manali, Bir Billing, and Amritsar with train journey from Mumbai.",
        duration: "9N-10D",
        price: 20999,
        originalPrice: "",
        discountAmount: "",
        image: "/assets/png/banner1.jpg",
        other_images: [],
        features: [
          "adventure",
          "mountains",
          "culture",
          "backpacking",
          "paragliding",
          "rafting",
          "spiritual",
        ],
        customizable: true,
        badge: "",
        capacity: 20,
        meals: "9 Breakfasts and 9 Dinners",
        accommodations:
          "9 nights in Hotels, Homestays, Hostels & Camps on Triple sharing",
        baseCity: "Mumbai",
        route: [
          "Mumbai",
          "Chandigarh",
          "Kasol",
          "Manali",
          "Bir",
          "Amritsar",
          "Mumbai",
        ],
        isCircuit: true,
        batches: [
          {
            November: ["20/11/25 - 29/11/25"],
          },
          {
            December: ["11/12/25 - 20/12/25"],
          },
          {
            January: ["08/01/26 - 17/01/26", "22/01/26 - 31/01/26"],
          },
          {
            February: ["12/02/26 - 21/02/26"],
          },
          {
            March: ["26/02/26 - 07/03/26"],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Mumbai to Chandigarh - Train Journey",
            details:
              "Meet and Greet at 11:00 AM and start your journey towards Chandigarh by Paschim Express/Chandigarh Superfast Express. Ice breaking games with fellow Himachal backpackers.",
          },
          {
            day: 2,
            summary: "Chandigarh - Kasol",
            details:
              "Reach Chandigarh at 03:00/04:00 PM and drive to Kasol. Enroute dinner halt and reach Kasol late night. Check-in and rest.",
          },
          {
            day: 3,
            summary: "Explore Kasol & Parvati Valley",
            details:
              "Wake up to mountain views. Chill by Parvati valley, short trek to Chalal Village, visit Manikaran Gurudwara and experience hot springs. Free time at own pace.",
          },
          {
            day: 4,
            summary: "Kasol - Manali via Kullu - River Rafting",
            details:
              "After breakfast, depart for Manali. White water rafting halt in Kullu. Visit Hadimba Devi Temple and explore Mall Road & Old Manali cafes.",
          },
          {
            day: 5,
            summary: "Manali Local Sightseeing",
            details:
              "Visit Solang Valley & Atal Tunnel (weather dependent). Adventure activities in first half. Evening DJ Night celebration.",
          },
          {
            day: 6,
            summary: "Manali - Bir",
            details:
              "Check out and drive to Bir. Evening free to explore famous cafes with live music. Bonfire gathering at night.",
          },
          {
            day: 7,
            summary: "Bir Billing Local Sightseeing",
            details:
              "Early morning paragliding at Asia's highest site (own cost, weather dependent). Explore Bir town on cycles, visit Tibetan Monasteries, cafe hopping.",
          },
          {
            day: 8,
            summary: "Bir - Amritsar",
            details:
              "Drive to Amritsar. Lunch with local delicacies. Visit Wagah Border for Flag Ceremony. Evening explore local dhabas for Kulcha-Lassi and Golden Temple.",
          },
          {
            day: 9,
            summary: "Departure from Amritsar",
            details:
              "After breakfast, depart for Amritsar Railway Station. Board Paschim Express/Golden Temple Express at 07:30 AM/06:30 PM back to Mumbai.",
          },
          {
            day: 10,
            summary: "Arrive Mumbai",
            details:
              "Arrive back in Mumbai with lots of memories. Trip nostalgia sharing and photo exchanges during train journey.",
          },
        ],
        includes: [
          "Train Fare - Mumbai to Ambala & Amritsar to Ambala (Confirm/RAC - refer notes)",
          "Private Tempo Traveller/Innova throughout (depending on group size)",
          "Accommodation in Hotels/Homestays/Hostels/Camps on Triple Sharing",
          "Pure Veg/Jain Meals - 9 Breakfasts & 9 Dinners",
          "DJ & Bonfire wherever possible",
          "Daily water during road journey",
          "Super-Experienced Tour Manager assistance throughout",
          "All Necessary Permits & Entry Fees",
          "First Aid Kit & Medical Assistance",
        ],
        excludes: [
          "5% GST",
          "Train Meals",
          "Lunch meals (expect Rs 100-150 per meal at local places)",
          "Cafe meals (budget Rs 300-350 per meal)",
          "Rafting, Paragliding, Safari, Camera charges where company vehicle unavailable",
          "Any Adventure Activities",
          "Personal expenses",
          "Extra food & drinks, Tips, Laundry, Shopping",
          "Anything not mentioned in inclusions",
        ],
        notes: [
          "Early check-in subject to availability",
          "Participants must carry masks and sanitizers",
          "Paragliding with GoPro Video in Bir Billing costs around Rs 3000",
          "Company vehicle accessible only to parking areas",
          "Manager can change schedule based on circumstances",
          "Force majeure costs borne by guests",
          "Company not responsible for cancellations due to natural calamities",
          "Guests responsible for luggage safety throughout trip",
          "Trip cancellation: 8% fee, remaining as credit note",
          "Backpacking trip, not luxury - helps experience local culture fully",
          "Lunch not included as most exploration happens during lunch time",
          "Local dhaba/cafe exploration expected at Rs 100-150 per meal",
        ],
      },
    ],
  },
  {
    destination_id: 4,
    destination_name: "Gokarna",
    category: "weekend",
    destination_description:
      "Gokarna, meaning 'Cow's Ear', is a pristine coastal paradise in Karnataka that perfectly blends spirituality with stunning beach landscapes. This laid-back destination offers unspoiled beaches, ancient temples, and thrilling adventures, making it an ideal weekend escape from city life.\n\nKey highlights include:\n- **Beach Trek Circuit** - Belekon, Paradise, Half Moon, and iconic Om Beach\n- **Murudeshwar** - World's largest Shiva statue by the Arabian Sea\n- **Vibhuti Falls** - Hidden waterfall perfect for a refreshing dip\n- **Sharavati River** - Kerala-style backwater boating experience\n- **Mahabaleshwar Temple** - Ancient Shiva temple and pilgrimage site\n- **Water Activities** - Surfing, kayaking, and beach sports at Om Beach\n\nWhether you're seeking spiritual solace, beach adventures, or simply want to unwind by pristine coastlines, Gokarna delivers the perfect blend of tranquility and excitement in a compact weekend getaway.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 8,
        title: "Gokarna Beach Trek & Waterfalls",
        tripDescription:
          "A perfect 5-day weekend escape covering Gokarna's pristine beaches, Murudeshwar's giant Shiva statue, Sharavati River boating, and refreshing Vibhuti Falls with train travel from Mumbai.",
        duration: "4N-5D",
        price: 9499,
        originalPrice: "",
        discountAmount: "",
        image: "/assets/png/banner1.jpg",
        other_images: [],
        features: [
          "beaches",
          "trekking",
          "waterfalls",
          "spiritual",
          "adventure",
          "backpacking",
          "weekend",
        ],
        customizable: true,
        badge: { type: "weekend", text: "Weekend Special" },
        capacity: 20,
        meals: "2 Breakfasts, 1 Lunch, 1 Dinner",
        accommodations: "3 nights in AC Rooms/Dormitory on Triple sharing",
        baseCity: "Mumbai",
        route: [
          "Mumbai",
          "Kumta",
          "Murudeshwar",
          "Honnavar",
          "Gokarna",
          "Vibhuti Falls",
          "Mumbai",
        ],
        isCircuit: true,
        batches: [
          {
            September: ["11/09/25 - 15/09/25", "25/09/25 - 29/09/25"],
          },
          {
            October: [
              "02/10/25 - 06/10/25",
              "09/10/25 - 13/10/25",
              "24/10/25 - 28/10/25",
            ],
          },
          {
            November: [
              "06/11/25 - 10/11/25",
              "13/11/25 - 17/11/25",
              "20/11/25 - 24/11/25",
            ],
          },
          {
            December: [
              "04/12/25 - 08/12/25",
              "19/12/25 - 23/12/25",
              "24/12/25 - 28/12/25",
              "29/12/25 - 02/01/26",
            ],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Mumbai to Kumta - Train Journey",
            details:
              "Meet at Mumbai CSMT 10:02 PM for Mangaluru Express OR Dadar 8:40 PM for Ten Express. Ice breaking games with fellow Gokarna backpackers.",
          },
          {
            day: 2,
            summary: "Murudeshwar - Honnavar",
            details:
              "Reach Kumta Railway Station, have lunch. Visit Murudeshwar - World's largest Shiva Statue. Experience Kerala style backwaters boating in Sharavati River.",
          },
          {
            day: 3,
            summary: "Beach Trek",
            details:
              "Start with Belekon Beach trek covering Paradise Beach, Half Moon Beach & Om Beach. Lunch at Om Beach with new friends. Water activities at Om Beach (own cost). Evening explore market or 15-minute walk to Mahableshwar Temple.",
          },
          {
            day: 4,
            summary: "Vibhuti Falls - Departure",
            details:
              "Breakfast, check-out, proceed to Vibhuti Falls with 15-minute short hike. Experience calmness, take a dip or sit by falls. Freshen up, leave for Kumta/Gokarna Railway Station. Board train 5:00/8:00 PM for CSMT.",
          },
          {
            day: 5,
            summary: "Back to Mumbai",
            details:
              "Back to Mumbai with lots of memories & new friends. Meet soon for next Bucketlist destination.",
          },
        ],
        includes: [
          "Train Fare - Mumbai to Mumbai (Confirm/RAC - refer notes)",
          "Gokarna internal transfers, Honnavar, Vibhuti Falls & Murudeshwar by Private Vehicle",
          "AC Rooms/Dormitory accommodation on triple sharing",
          "Pure Veg/Jain Meals - 2 Breakfasts, 1 Lunch & 1 Dinner",
          "One-Hour Boating in Sharavati River in Honnavar",
          "Day excursions to Vibhuti Falls & Murudeshwar",
          "Daily water during road journeys",
          "Gokarna Beach Trek covering Belekon, Paradise, Half Moon & OM Beach",
          "Experienced Tour Manager assistance throughout",
          "All Necessary Permits & Entry Fees",
          "First Aid Kit & Medical Assistance",
        ],
        excludes: [
          "5% GST",
          "Train Meals",
          "Meals not mentioned in itinerary",
          "Safari, Camera charges where company vehicle unavailable",
          "Any Adventure Activities",
          "Personal expenses",
          "Extra food & drinks, Tips, Laundry, Shopping",
          "Anything not mentioned in inclusions",
        ],
        notes: [
          "Early check-in subject to availability",
          "Company vehicle accessible only to parking areas",
          "Schedule can be changed based on circumstances",
          "Force majeure costs borne by guests",
          "Backpacking trip, not luxury",
          "Train tickets may be RAC/Waiting if booked late",
          "Use backpack, avoid suitcases",
          "New Year batch rooms 4-6 sharing basis",
        ],
      },
      {
        tripId: 9,
        title: "Gokarna Luxury Beach Retreat",
        tripDescription:
          "A 3-day luxurious weekend escape to Gokarna. Stay at a premium cliff-top resort with panoramic sea views, enjoy private beach access, indulge in spa treatments, and savor gourmet coastal cuisine.",
        duration: "2N-3D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: ["luxury", "weekend", "romance", "beach", "spa", "scenic"],
        customizable: true,
        badge: { type: "luxury", text: "Beachfront Luxury" },
        capacity: 4,
        meals: "2 Breakfasts, 1 Lunch, 2 Dinners",
        accommodations:
          "2 nights in a sea-view cottage at a luxury resort (e.g., Kahani Paradise, SwaSwara).",
        baseCity: "Bengaluru",
        route: ["Bengaluru", "Gokarna", "Kudle Beach"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Travel to Gokarna & Resort Relaxation",
            details:
              "Take an overnight sleeper bus from Bengaluru or a flight to Goa/Hubli followed by a private car transfer. Arrive in Gokarna and check into your luxury resort. Spend the day relaxing by the infinity pool overlooking the ocean. Enjoy a sunset dinner.",
          },
          {
            day: 2,
            summary: "Private Boat Trip & Spa",
            details:
              "After a leisurely breakfast, embark on a private boat trip to visit the secluded Half Moon and Paradise beaches. Enjoy a picnic lunch on a quiet stretch of sand. Return to the resort for a rejuvenating Ayurvedic spa session in the afternoon.",
          },
          {
            day: 3,
            summary: "Leisure & Departure",
            details:
              "Enjoy a final morning at your own pace. Have a relaxed breakfast, take a dip in the sea, and check out by noon for your return journey to Bengaluru.",
          },
        ],
        includes: [
          "2 nights in luxury resort accommodation",
          "Private car transfer from Hubli/Goa airport (if flight option chosen)",
          "Meals as specified",
          "A signature spa treatment",
          "Private boat trip",
        ],
        excludes: [
          "Bus/Flight tickets from Bengaluru",
          "Personal expenses",
          "Watersports activities",
        ],
        notes: [
          "This itinerary is focused on complete relaxation and privacy.",
          "Gokarna is best visited between October and March.",
        ],
      },
      {
        tripId: 10,
        title: "Offbeat Gokarna: Yana Caves & Mirjan Fort",
        tripDescription:
          "A 3-day exploratory weekend that goes beyond the beaches of Gokarna. Discover the unique black limestone rock formations of Yana, explore the historic Mirjan Fort, and witness a mesmerizing sunset from a hidden cliff.",
        duration: "2N-3D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "history",
          "nature",
          "hiking",
          "weekend",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Explorers' Weekend" },
        capacity: 15,
        meals: "2 Breakfasts, 1 Lunch, 1 Dinner",
        accommodations:
          "2 nights in a comfortable homestay or guesthouse near Gokarna town.",
        baseCity: "Bengaluru",
        route: ["Bengaluru", "Gokarna", "Yana", "Mirjan Fort"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Overnight Journey to Gokarna",
            details: "Board an overnight bus from Bengaluru to Gokarna.",
          },
          {
            day: 2,
            summary: "Yana Caves & Mirjan Fort",
            details:
              "Arrive in Gokarna, check into your homestay. After breakfast, travel to Yana village. Hike through the forest to see the stunning Yana Caves (rock formations). On the way back, explore the 16th-century Mirjan Fort, covered in moss and history. Evening at leisure.",
          },
          {
            day: 3,
            summary: "Gokarna Temple, Beach & Departure",
            details:
              "Morning visit to the Mahabaleshwar Temple. Take a quick trip to Kudle or Om beach for a final glimpse of the sea. Check out and board your afternoon/evening bus back to Bengaluru.",
          },
        ],
        includes: [
          "Accommodation for 2 nights",
          "Sleeper bus tickets from/to Bengaluru",
          "Private vehicle for sightseeing (Day 2 & 3)",
          "2 breakfasts",
        ],
        excludes: ["Lunches and dinners", "Entrance fees", "Personal expenses"],
        notes: [
          "The hike to Yana Caves involves walking through a forest; wear comfortable shoes.",
          "This trip is for those who want to explore the history and nature around Gokarna.",
        ],
      },
      {
        tripId: 11,
        title: "Gokarna Beach Trek & Camping Experience",
        tripDescription:
          "The quintessential 2-day Gokarna experience for backpackers and adventure lovers. Trek across the five main beaches, from Kudle to Paradise, camp under the stars on a secluded beach, and soak in the vibrant, bohemian vibe of the town.",
        duration: "1N-2D (plus travel time)",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "hiking",
          "beach",
          "camping",
          "adventure",
          "weekend",
        ],
        customizable: true,
        badge: { type: "experience", text: "Backpacker's Trail" },
        capacity: 25,
        meals: "1 Breakfast, 1 Dinner",
        accommodations:
          "1 night in tents at a beach campsite (e.g., Paradise/Half Moon Beach).",
        baseCity: "Bengaluru",
        route: [
          "Bengaluru",
          "Gokarna",
          "Kudle Beach",
          "Om Beach",
          "Paradise Beach",
        ],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 0,
            summary: "Departure from Bengaluru",
            details:
              "Board an overnight bus from Bengaluru to Gokarna on Friday night.",
          },
          {
            day: 1,
            summary: "Arrival & Beach Trek",
            details:
              "Arrive in Gokarna on Saturday morning. Freshen up and have breakfast. Start the famous Gokarna beach trek. Trek from Kudle Beach to the scenic Om Beach. After lunch, continue the trek over the cliffs to Half Moon Beach and finally to the secluded Paradise Beach. Set up camp, enjoy the sunset, a campfire, and dinner.",
          },
          {
            day: 2,
            summary: "Sunrise, Relaxation & Departure",
            details:
              "Wake up to the sound of waves. Enjoy the beach in the morning. Take a boat ride back from Paradise Beach to Om Beach (or trek back). Explore the town and temples. Board the bus back to Bengaluru in the evening, reaching on Monday morning.",
          },
        ],
        includes: [
          "Return sleeper bus tickets",
          "1 night tented accommodation (on sharing basis)",
          "1 Breakfast & 1 Dinner at the campsite",
          "Trek lead",
          "Boat ride from Paradise Beach",
        ],
        excludes: [
          "Meals during the bus journey",
          "Lunch on both days",
          "Personal expenses",
        ],
        notes: [
          "This is a rustic backpacking trip. Be prepared for basic facilities at the campsite.",
          "The trek is moderately difficult with some uphill and downhill sections.",
          "Carry a small backpack for the trek.",
        ],
      },
    ],
  },
  {
    destination_id: 5,
    destination_name: "Hampi",
    category: "weekend",
    destination_description:
      "Hampi, a UNESCO World Heritage Site, is an extraordinary open-air museum that transports you back to the golden age of the Vijayanagara Empire. This ancient city offers a perfect blend of historical magnificence, spiritual significance, and adventure activities amidst stunning boulder landscapes.\n\nKey highlights include:\n- **Vijaya Vitthala Temple** - Iconic stone chariot featured on ₹50 note\n- **Hippie Island** - Coracle rides and cliff jumping in Tungabhadra River\n- **Virupaksha Temple** - Ancient living temple dedicated to Lord Shiva\n- **Heritage Cycle Tours** - Explore ruins including Lotus Mahal, Elephant Stables\n- **Malyavanta Hill** - Spectacular sunrise and sunset viewpoints\n- **Boulder Landscapes** - Unique geological formations perfect for rock climbing\n- **Hampi Bazaar** - Ancient marketplace with vibrant local culture\n\nWhether you're fascinated by history, seeking spiritual experiences, or craving adventure activities, Hampi offers an unforgettable journey through India's glorious past in a compact weekend adventure.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 12,
        title: "Backpacking Hampi Heritage",
        tripDescription:
          "A 5-day heritage adventure exploring UNESCO World Heritage Hampi with temple tours, heritage cycle rides, Hippie Island coracle experiences, cliff jumping, and sunrise at Malyavanta Hill with train travel from Mumbai.",
        duration: "4N-5D",
        price: 8999,
        originalPrice: "",
        discountAmount: "",
        image: "/assets/png/banner1.jpg",
        other_images: [],
        features: [
          "heritage",
          "culture",
          "adventure",
          "cycling",
          "spiritual",
          "backpacking",
          "weekend",
        ],
        customizable: true,
        badge: { type: "heritage", text: "UNESCO Heritage" },
        capacity: 20,
        meals: "2 Breakfasts, 3 Lunches",
        accommodations: "3 nights in Homestays on Triple/Quad sharing",
        baseCity: "Mumbai",
        route: ["Mumbai", "Hospet", "Hampi", "Hippie Island", "Mumbai"],
        isCircuit: false,
        batches: [
          {
            August: ["21/08/25 - 25/08/25"],
          },
          {
            September: [
              "04/09/25 - 08/09/25",
              "11/09/25 - 15/09/25",
              "18/09/25 - 22/09/25",
            ],
          },
          {
            October: [
              "02/10/25 - 06/10/25",
              "09/10/25 - 13/10/25",
              "23/10/25 - 27/10/25",
              "30/10/25 - 03/11/25",
            ],
          },
          {
            November: [
              "06/11/25 - 10/11/25",
              "13/11/25 - 17/11/25",
              "27/11/25 - 01/12/25",
            ],
          },
          {
            December: [
              "04/12/25 - 08/12/25",
              "11/12/25 - 15/12/25",
              "19/12/25 - 23/12/25",
              "24/12/25 - 28/12/25",
            ],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Meet & Greet at CSMT Station",
            details:
              "Meet at CSMT Railway Station, board HPT EXP (11139) at 9:20 PM. Ice breaking sessions with fellow Hampi backpackers during overnight journey.",
          },
          {
            day: 2,
            summary: "Reach Hospet & Explore Local",
            details:
              "Reach Hospet, have lunch, check-in and freshen up. Visit Narsimha Temple, Badavalinga, Sasivekalu Ganesh, Virupaksha Temple & Hampi Bazar. Dinner at hippie cafes.",
          },
          {
            day: 3,
            summary: "City Cycle Tour & Hippie Island",
            details:
              "After breakfast, cycle city tour including Zanana Enclosure, Lotus Mahal, Elephant Stable, King's Audience Hall, Pushkarni & Queens Bath. Lunch at Queen's Bath. Ferry to Hippie Island for Coracle Ride & Cliff Jumping (subject to water availability).",
          },
          {
            day: 4,
            summary: "Sunrise & Temple",
            details:
              "Early morning beautiful sunrise from Malyavanta Hill. Breakfast and explore Vijaya Vitthala Temple (New 50 Rs Note Photo).",
          },
          {
            day: 5,
            summary: "Back to Mumbai",
            details:
              "Early morning reach CSMT Railway Station at 05:08 AM. Say goodbye to fellow travellers until next time.",
          },
        ],
        includes: [
          "Mumbai/Pune to Hospet by Sleeper/AC Train (Confirm or RAC)",
          "Hospet to Hampi & back by Private Rickshaw",
          "Accommodation in Hampi's Homestay on Triple/Quad sharing",
          "Veg/Jain Meals - 2 Breakfasts, 3 Lunches",
          "Motor-Boat/Auto from Hampi to Hippie Island in Tungabhadra River",
          "Hippie Island tour by Bike/Scooty/Rickshaw (subject to availability)",
          "Hampi heritage city tour by Cycle/Auto & Certified Guide",
          "Coracle Ride in Sanapur Lake (complimentary if available)",
          "Trip Captain assistance throughout",
          "Complete guide & expertise",
          "All entry fees",
        ],
        excludes: [
          "5% GST",
          "Train Meals",
          "Dinner",
          "Cliff Jumping activities (Rs 200-250 per jump with life jacket)",
          "Camera, Movie Camera charges where company vehicle unavailable",
          "Extra food & drinks, Tips, Laundry, Shopping",
          "Personal emergency costs",
          "Personal expenses",
        ],
        notes: [
          "Avoid suitcases, use backpack",
          "Backpacking trip, not luxury",
          "Local cafes for breakfast experience",
          "Local South Indian thalis for lunch",
          "Self-sponsored dinner at famous restaurants like Mango Tree, Chill Out",
          "Schedule can be changed based on circumstances",
          "Train tickets may be RAC/Waiting if booked late",
        ],
      },
      {
        tripId: 13,
        title: "Hampi Royal Retreat: A Luxury Heritage Weekend",
        tripDescription:
          "A 3-day luxurious journey into the heart of the Vijayanagara Empire. Stay at a heritage palace hotel, explore the ruins with a private historian guide, enjoy a coracle ride at sunset, and experience the grandeur of Hampi in ultimate comfort.",
        duration: "2N-3D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "weekend",
          "history",
          "culture",
          "romance",
          "heritage",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Heritage Luxury" },
        capacity: 4,
        meals: "2 Breakfasts, 2 Dinners",
        accommodations:
          "2 nights in a palace hotel (e.g., WelcomHeritage Shivavilas Palace) or a luxury resort (e.g., Evolve Back, Hampi).",
        baseCity: "Bengaluru",
        route: ["Bengaluru", "Hospet", "Hampi"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Journey to Hampi & Palace Stay",
            details:
              "Private luxury car transfer from Bengaluru or flight to Vidyanagar (VDY) airport followed by a transfer. Check into your luxurious palace hotel. Evening at leisure to enjoy the property.",
          },
          {
            day: 2,
            summary: "Private Guided Tour of Hampi",
            details:
              "A full-day exploration of Hampi's main sights with a private historian guide. Visit the Virupaksha Temple, Vijaya Vittala Temple (Stone Chariot), Queen's Bath, and Royal Enclosure. End the day with a private coracle ride on the Tungabhadra at sunset.",
          },
          {
            day: 3,
            summary: "Leisure & Departure",
            details:
              "Enjoy a leisurely breakfast at the palace. Optional visit to the Anegundi village across the river before starting your comfortable journey back to Bengaluru.",
          },
        ],
        includes: [
          "2 nights luxury palace/resort accommodation",
          "Private luxury car for round trip and sightseeing",
          "Meals as specified",
          "Private historian guide for one full day",
          "Private coracle ride",
          "All entrance fees",
        ],
        excludes: [
          "Flights (if chosen)",
          "Lunches",
          "Camera fees",
          "Personal expenses",
        ],
        notes: [
          "A private guide can bring the history of the ruins to life in a way a regular tour cannot.",
          "The palace hotels are located a short drive from Hampi, offering tranquility.",
        ],
      },
      {
        tripId: 14,
        title: "Offbeat Hampi: Bouldering, Cycling & Anegundi Village",
        tripDescription:
          "A 3-day active and offbeat weekend in Hampi. Try your hand at bouldering on the famous rocks, cycle through the ruins and paddy fields, stay on the 'hippie island' side, and explore the ancient village of Anegundi, believed to be the mythical Kishkinda.",
        duration: "2N-3D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "hiking",
          "cycling",
          "bouldering",
          "weekend",
        ],
        customizable: true,
        badge: { type: "adventure", text: "Active Weekend" },
        capacity: 16,
        meals: "2 Breakfasts",
        accommodations:
          "2 nights in a comfortable guesthouse or huts on the Anegundi (hippie island) side.",
        baseCity: "Bengaluru",
        route: ["Bengaluru", "Hospet", "Hampi", "Anegundi"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Overnight Journey to Hospet",
            details:
              "Board an overnight sleeper bus from Bengaluru to Hospet on Friday night.",
          },
          {
            day: 2,
            summary: "Cycling the Ruins & Bouldering",
            details:
              "Arrive in Hospet, take an auto to Hampi. Cross the river to your guesthouse on Anegundi side. Rent bicycles or scooters and explore the ruins at your own pace. In the late afternoon, join an introductory bouldering session with a local instructor.",
          },
          {
            day: 3,
            summary: "Anegundi Village & Departure",
            details:
              "Explore the ancient village of Anegundi. Visit the Anjanadri Hill (Hanuman's birthplace), Sanapur Lake, and the Pampa Sarovar. Check out, cross the river, and take an evening bus from Hampi/Hospet back to Bengaluru, arriving Monday morning.",
          },
        ],
        includes: [
          "Return sleeper bus tickets",
          "2 nights accommodation in a guesthouse",
          "2 breakfasts",
          "Introductory bouldering session",
          "Bicycle rental for one day",
        ],
        excludes: [
          "Local transport (autos, coracle)",
          "Lunches and dinners",
          "Entrance fees",
          "Personal expenses",
        ],
        notes: [
          "The Anegundi side offers a more relaxed, bohemian atmosphere.",
          "Bouldering is a popular activity in Hampi due to its unique rock formations. Basic fitness is required.",
        ],
      },
      {
        tripId: 15,
        title: "Hampi Experience: Ruins, Sunset & Coracles",
        tripDescription:
          "The classic 2-day Hampi backpacking trip. Explore the major temples and monuments, climb Matanga Hill for an unforgettable sunset, and enjoy the unique experience of a coracle ride on the Tungabhadra river.",
        duration: "1N-2D (plus travel time)",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "history",
          "culture",
          "weekend",
          "backpacking",
          "scenic",
        ],
        customizable: true,
        badge: { type: "experience", text: "Backpacker Classic" },
        capacity: 25,
        meals: "1 Breakfast",
        accommodations: "1 night in a hotel/guesthouse in Hampi Bazaar area.",
        baseCity: "Bengaluru",
        route: ["Bengaluru", "Hospet", "Hampi", "Matanga Hill"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 0,
            summary: "Departure from Bengaluru",
            details:
              "Board an overnight bus from Bengaluru to Hospet on Friday night.",
          },
          {
            day: 1,
            summary: "Ruins Exploration & Sunset from Matanga Hill",
            details:
              "Arrive in Hospet, transfer to Hampi and check in. Hire a guide or an auto-rickshaw for a full-day tour of the main sites: Virupaksha Temple, Vittala Temple, Royal Enclosure, etc. In the evening, trek up Matanga Hill for a spectacular sunset over the entire Hampi landscape.",
          },
          {
            day: 2,
            summary: "Coracle Ride & Departure",
            details:
              "After breakfast, enjoy a traditional coracle ride on the river. Do some last-minute souvenir shopping at Hampi Bazaar. Check out and take an evening bus from Hampi/Hospet back to Bengaluru, reaching on Monday morning.",
          },
        ],
        includes: [
          "Return sleeper bus tickets",
          "1 night hotel/guesthouse accommodation",
          "1 breakfast",
          "Guided tour on Day 1 (if with a group trip)",
        ],
        excludes: [
          "Local transport in Hampi (auto-rickshaw)",
          "Lunches and dinners",
          "Coracle ride fee",
          "Entrance fees to monuments",
          "Personal expenses",
        ],
        notes: [
          "This is a budget-friendly, fast-paced itinerary perfect for a weekend.",
          "Hiring an auto-rickshaw for the day is a popular and efficient way to see the spread-out ruins.",
          "Wear a hat and carry plenty of water as it can get very hot.",
        ],
      },
    ],
  },
  {
    destination_id: 6,
    destination_name: "Coorg",
    category: "weekend",
    destination_description:
      "Coorg, known as the 'Scotland of India', is a mesmerizing hill station in Karnataka famous for its coffee plantations, misty mountains, and rich cultural heritage. This verdant destination offers the perfect blend of natural beauty, adventure, and aromatic coffee experiences.\n\nKey highlights include:\n- **Mandalpatti Peak** - Breathtaking sunrise viewpoint with off-road jeep safari\n- **Dubarae Elephant Camp** - Interactive elephant experiences and Tibetan monastery\n- **Coffee Plantations** - Guided tours through aromatic coffee estates\n- **Abbey Falls** - Spectacular waterfall requiring a scenic trek\n- **Raja's Seat** - Stunning sunset viewpoint of the Western Ghats\n- **Omkareshwar Temple** - Ancient temple with unique architecture\n- **Madikeri Fort** - Historical fort with panoramic valley views\n\nWhether you're seeking mountain adventures, coffee plantation walks, wildlife encounters, or simply want to unwind in misty hills, Coorg delivers an enchanting weekend escape with its cool climate and warm hospitality.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 16,
        title: "Coorg Coffee & Hills Adventure",
        tripDescription:
          "A delightful 5-day Coorg experience featuring Mandalpatti Peak sunrise safari, Dubarae elephant camp, coffee plantation tours, Abbey Falls trek, and scenic viewpoints with train travel from Mumbai.",
        duration: "4N-5D",
        price: 9999,
        originalPrice: "",
        discountAmount: "",
        image: "/assets/png/banner1.jpg",
        other_images: [],
        features: [
          "hills",
          "coffee",
          "adventure",
          "wildlife",
          "nature",
          "safari",
          "weekend",
        ],
        customizable: true,
        badge: { type: "hills", text: "Hill Station" },
        capacity: 20,
        meals: "2 Breakfasts, 2 Dinners",
        accommodations:
          "2 nights in comfortable rooms/dormitory on Triple/Quad sharing",
        baseCity: "Mumbai",
        route: [
          "Mumbai",
          "Mangalore",
          "Coorg",
          "Mandalpatti",
          "Dubarae",
          "Mumbai",
        ],
        isCircuit: false,
        batches: [
          {
            September: ["04/09/25 - 08/09/25", "18/09/25 - 22/09/25"],
          },
          {
            October: ["02/10/25 - 06/10/25", "24/10/25 - 28/10/25"],
          },
          {
            November: ["06/11/25 - 10/11/25", "20/11/25 - 24/11/25"],
          },
          {
            December: ["04/12/25 - 08/12/25", "24/12/25 - 28/12/25"],
          },
        ],
        itinerary: [
          {
            day: 1,
            summary: "Mumbai to Mangalore - Train Journey",
            details:
              "Meet at CSMT 10:00 PM for Mangalore Express (12133) or Dadar 8:40 PM for Ten Express (22629). Ice breaking games with fellow Coorg backpackers. Overnight in train.",
          },
          {
            day: 2,
            summary: "Train Journey - Off to Coorg",
            details:
              "Reach Mangalore Railway Station at 1:00 PM, have lunch outside station (own cost). 4-5 hour journey to Coorg. Evening reach and explore Coorg Market.",
          },
          {
            day: 3,
            summary: "Coorg Local Sightseeing",
            details:
              "After breakfast, explore Coorg sightseeing. 2-hour drive to Dubare elephant camp and Tibetan Monastery. Later proceed to Raja Seat for breathtaking viewpoint. Overnight in Coorg.",
          },
          {
            day: 4,
            summary: "Mandalpatti - Temple - Departure",
            details:
              "Wake up 4:00 AM for best sunrise from Mandalpatti with off-road jeep safari. Return to hotel, freshen up, breakfast and checkout. Local sightseeing - Abbey Falls (2-3 km walk), Omkareshwar temple, Coffee Plantation. Proceed to Mangalore railway for 22:50 train.",
          },
          {
            day: 5,
            summary: "Back to Mumbai",
            details:
              "Back to Mumbai with lots of memories & new friends. Meet soon for next Bucketlist destination.",
          },
        ],
        includes: [
          "Train Fare - Mumbai to Mumbai (Confirm/RAC - refer notes)",
          "Internal transport by Private Vehicle (Sumo, TT Bus)",
          "2 Night accommodation in comfortable rooms/dormitory on Triple/Quad sharing",
          "Pure Veg/Jain Meals - 2 Breakfasts & 2 Dinners",
          "Jeep Ride at Mandalpatti Peak",
          "Coffee Plantation Tour Entry Charges",
          "Daily water during road journey",
          "Experienced Tour Manager assistance throughout",
          "All Necessary Permits & Entry Fees",
          "First Aid Kit & Medical Assistance",
        ],
        excludes: [
          "5% GST",
          "Train Meals",
          "Lunch",
          "Safari, Camera charges where company vehicle unavailable",
          "Any Adventure Activities",
          "Personal expenses",
          "Extra food & drinks, Tips, Laundry, Shopping",
          "Anything not mentioned in inclusions",
        ],
        notes: [
          "Early check-in subject to availability",
          "Company vehicle accessible only to parking areas",
          "Schedule can be changed based on circumstances",
          "Force majeure costs borne by guests",
          "Backpacking trip, not luxury",
          "Lunch exploration at local places (expect Rs 100-150 per meal)",
          "No room service, laundry, luxury hotels",
          "Train tickets may be RAC/Waiting if booked late",
          "Use backpack, avoid suitcases",
        ],
      },
      {
        tripId: 17,
        title: "Coorg Luxury Escape: Plantations & Pampering",
        tripDescription:
          "A 3-day indulgent weekend retreat in Coorg. Stay in a luxurious private pool villa at a top-rated resort, enjoy private plantation tours, rejuvenate with spa therapies, and savor gourmet dining experiences.",
        duration: "2N-3D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: ["luxury", "weekend", "romance", "nature", "coffee", "spa"],
        customizable: true,
        badge: { type: "luxury", text: "Luxury Weekend" },
        capacity: 4,
        meals: "2 Breakfasts, 1 Lunch, 2 Dinners",
        accommodations:
          "2 nights in a Private Pool Villa at a 5-star resort (e.g., Evolve Back, Taj Madikeri).",
        baseCity: "Bengaluru",
        route: ["Bengaluru", "Madikeri", "Coorg"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Drive to Coorg & Resort Indulgence",
            details:
              "Private luxury car transfer from Bengaluru to your resort in Coorg. Check into your private pool villa. Spend the afternoon enjoying the resort's amenities. Enjoy a curated gourmet dinner.",
          },
          {
            day: 2,
            summary: "Private Plantation Tour & Spa",
            details:
              "After a leisurely breakfast, embark on a private, guided tour of the resort's coffee and spice plantation. In the afternoon, indulge in a couple's spa therapy session. Evening at leisure with a private bonfire.",
          },
          {
            day: 3,
            summary: "Return to Bengaluru",
            details:
              "Enjoy a final elaborate breakfast. Optional visit to the Namdroling Monastery (Golden Temple) at Bylakuppe on your way back to Bengaluru. Arrive in the evening.",
          },
        ],
        includes: [
          "2 nights in a luxury private pool villa",
          "Private luxury car for round trip from Bengaluru",
          "Meals as specified",
          "Private plantation tour",
          "A signature spa therapy session",
          "All taxes",
        ],
        excludes: [
          "Lunches not specified",
          "Entrance fees at Bylakuppe",
          "Personal expenses",
          "Alcoholic beverages",
        ],
        notes: [
          "This is a pure relaxation and luxury-focused itinerary.",
          "Booking well in advance is essential for top resorts.",
        ],
      },
      {
        tripId: 18,
        title: "Offbeat Coorg: Waterfalls, Treks & Homestays",
        tripDescription:
          "A 3-day adventurous weekend exploring the lesser-known side of Coorg. Trek to hidden waterfalls, conquer the Tadiandamol peak, stay in an authentic Kodava homestay, and experience the wild, untamed beauty of the Western Ghats.",
        duration: "2N-3D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "hiking",
          "nature",
          "waterfall",
          "homestay",
        ],
        customizable: true,
        badge: { type: "adventure", text: "Trekking Weekend" },
        capacity: 12,
        meals: "2 Breakfasts, 2 Lunches, 2 Dinners",
        accommodations:
          "2 nights in a traditional Kodava homestay near Kakkabe.",
        baseCity: "Bengaluru",
        route: ["Bengaluru", "Kakkabe", "Tadiandamol", "Chelavara Falls"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Bengaluru to Kakkabe & Chelavara Falls",
            details:
              "Leave Bengaluru early. Drive to your homestay near Kakkabe. After checking in and having lunch, take a short drive and hike to the beautiful but lesser-visited Chelavara Falls. Enjoy a traditional Kodava dinner.",
          },
          {
            day: 2,
            summary: "Trek to Tadiandamol Peak",
            details:
              "An early start for the trek to Tadiandamol, the highest peak in Coorg. It's a challenging but rewarding 10-12 km trek (round trip) offering stunning views. A packed lunch will be provided. Return to the homestay in the evening for a well-deserved rest.",
          },
          {
            day: 3,
            summary: "Nalknad Palace & Return",
            details:
              "After breakfast, visit the historic Nalknad Palace at the base of the Tadiandamol peak. Begin your drive back to Bengaluru, stopping for lunch en route. Arrive in Bengaluru by late evening.",
          },
        ],
        includes: [
          "Accommodation in an authentic homestay",
          "Transport from Bengaluru and back in a minibus",
          "All meals as specified",
          "Trekking guide for Tadiandamol",
          "Forest department permits for the trek",
        ],
        excludes: [
          "Any personal expenses",
          "Anything not mentioned in inclusions",
        ],
        notes: [
          "A high level of fitness is required for the Tadiandamol trek.",
          "The homestay will be simple, clean, and run by a local family, offering an authentic experience.",
        ],
      },
      {
        tripId: 19,
        title: "Classic Coorg Experience: Coffee, Culture & Elephants",
        tripDescription:
          "A perfect 3-day weekend introduction to the best of Coorg. Ride a jeep to Mandalpatti viewpoint, interact with elephants at Dubare, explore a coffee estate, and enjoy the classic sights of the 'Scotland of India'.",
        duration: "2N-3D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "weekend",
          "coffee",
          "nature",
          "family",
          "safari",
        ],
        customizable: true,
        badge: { type: "experience", text: "Classic Weekend" },
        capacity: 16,
        meals: "2 Breakfasts, 2 Dinners",
        accommodations:
          "2 nights in a comfortable 3-star hotel or resort in Madikeri.",
        baseCity: "Bengaluru",
        route: ["Bengaluru", "Madikeri", "Mandalpatti", "Dubare"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Bengaluru to Coorg & Raja's Seat",
            details:
              "Early morning departure from Bengaluru. Reach Madikeri and check into your hotel. In the evening, visit Raja's Seat to witness a beautiful sunset over the valley.",
          },
          {
            day: 2,
            summary: "Mandalpatti Jeep Safari & Abbey Falls",
            details:
              "Morning adventure with a thrilling 4x4 jeep safari to the Mandalpatti viewpoint for panoramic views of the Western Ghats. On return, visit the picturesque Abbey Falls.",
          },
          {
            day: 3,
            summary: "Dubare Elephant Camp & Return",
            details:
              "After breakfast, check out and drive to the Dubare Elephant Camp on the banks of the Kaveri. Spend time with the elephants. Afterwards, visit a coffee plantation for a guided tour before starting your journey back to Bengaluru.",
          },
        ],
        includes: [
          "2 nights accommodation",
          "Transport from/to Bengaluru",
          "Meals as specified (2 Breakfasts, 2 Dinners)",
          "Mandalpatti Jeep Safari",
          "Entrance fees to Raja's Seat and Abbey Falls",
        ],
        excludes: [
          "Lunches",
          "Entry and activity fees at Dubare Elephant Camp",
          "Coffee plantation tour fees",
          "Personal expenses",
        ],
        notes: [
          "This is a fast-paced itinerary covering the main highlights.",
          "Roads to Mandalpatti are rough and only accessible by authorized jeeps.",
        ],
      },
    ],
  },
  {
    destination_id: 7,
    destination_name: "Vietnam",
    category: "international",
    destination_description:
      "Vietnam is a country of breathtaking natural beauty and resilient spirit. From the dramatic limestone karsts of Halong Bay and the terraced rice fields of Sapa to the bustling energy of its cities and the tranquil waterways of the Mekong Delta, Vietnam offers an incredible diversity of experiences. Its rich history, delicious cuisine, and warm, welcoming people make it a captivating destination for every type of traveler.\n\nKey highlights include:\n- **Halong Bay** - Cruise through thousands of limestone islands on a traditional junk boat.\n- **Hanoi** - The charming capital with its bustling Old Quarter and colonial architecture.\n- **Hoi An** - A beautifully preserved ancient town with lantern-lit streets and a vibrant culinary scene.\n- **Ho Chi Minh City (Saigon)** - A dynamic, modern metropolis rich with history from the Vietnam War.\n- **Mekong Delta** - Explore floating markets and lush fruit orchards in the 'rice bowl' of Vietnam.\n- **Sapa** - Trek through stunning terraced rice paddies and meet local hill-tribe communities.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 20,
        title: "Indochine Elegance: A Luxury Journey from North to South",
        tripDescription:
          "A 12-day luxurious exploration of Vietnam's highlights. Stay in colonial-style 5-star hotels, cruise Halong Bay on a private junk, enjoy exclusive culinary tours, and travel seamlessly with private transfers and flights.",
        duration: "11N-12D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "culture",
          "romance",
          "foodie",
          "cruise",
          "history",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Five-Star Vietnam" },
        capacity: 8,
        meals: "11 Breakfasts, 8 Lunches, 7 Dinners",
        accommodations:
          "5-star hotels in Hanoi, Hoi An, and Saigon (e.g., Sofitel Metropole, The Reverie Saigon), and a luxury private cabin on an overnight Halong Bay cruise.",
        baseCity: "Customizable",
        route: [
          "Hanoi",
          "Halong Bay",
          "Da Nang",
          "Hoi An",
          "Ho Chi Minh City",
          "Mekong Delta",
        ],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Hanoi",
            details:
              "Arrive at Noi Bai Airport (HAN). Private transfer to your luxury hotel in the heart of the French Quarter. Welcome dinner at a renowned Vietnamese restaurant.",
          },
          {
            day: 2,
            summary: "Hanoi's Culture & History",
            details:
              "Private guided tour of Hanoi's key sites, including the Ho Chi Minh Mausoleum, the Temple of Literature, and a cyclo ride through the Old Quarter. Enjoy a traditional water puppet show in the evening.",
          },
          {
            day: 3,
            summary: "Overnight Luxury Cruise on Halong Bay",
            details:
              "Private transfer to Halong Bay. Board a luxurious junk boat, settle into your private cabin, and enjoy a gourmet lunch as you cruise through the limestone karsts. Activities include kayaking and visiting a cave.",
          },
          {
            day: 4,
            summary: "Sunrise over Halong & Flight to Da Nang",
            details:
              "Wake up to sunrise over the bay, with an option for a Tai Chi session on the sundeck. After brunch, disembark and transfer to Hanoi airport for your flight to Da Nang. Private transfer to your 5-star resort in Hoi An.",
          },
          {
            day: 5,
            summary: "Hoi An Ancient Town & Lantern Making",
            details:
              "Private walking tour of the enchanting, lantern-lit streets of Hoi An Ancient Town. In the afternoon, participate in a private lantern-making workshop.",
          },
          {
            day: 6,
            summary: "Exclusive Vietnamese Cooking Class",
            details:
              "Visit a local market with a chef to select fresh ingredients, then take a private boat to a cooking school for an exclusive hands-on class in Vietnamese cuisine.",
          },
          {
            day: 7,
            summary: "Leisure in Hoi An",
            details:
              "A day at leisure to relax at your resort's private beach, indulge in spa treatments, or have custom clothing made by Hoi An's famous tailors.",
          },
          {
            day: 8,
            summary: "Flight to Ho Chi Minh City (Saigon)",
            details:
              "Transfer to Da Nang airport for your flight to Saigon. Private transfer to your luxury hotel. Evening Vespa food tour to taste the city's best street food in style.",
          },
          {
            day: 9,
            summary: "Saigon's History & Cu Chi Tunnels",
            details:
              "Private tour of the Cu Chi Tunnels, an immense network of connecting tunnels used during the Vietnam War. In the afternoon, explore Saigon's historic landmarks like the Reunification Palace and Notre Dame Cathedral.",
          },
          {
            day: 10,
            summary: "Private Tour of the Mekong Delta",
            details:
              "Embark on a private boat trip through the lush waterways of the Mekong Delta. Visit fruit orchards, a coconut candy workshop, and enjoy a sampan ride through smaller canals, away from the crowds.",
          },
          {
            day: 11,
            summary: "Leisure & Farewell Dinner Cruise",
            details:
              "Day at leisure for shopping or personal exploration. In the evening, enjoy a farewell dinner on a luxurious cruise along the Saigon River.",
          },
          {
            day: 12,
            summary: "Departure",
            details:
              "After breakfast, private transfer to Tan Son Nhat Airport (SGN) for your departure.",
          },
        ],
        includes: [
          "Luxury 5-star and cruise accommodation",
          "Domestic flights (Hanoi-Da Nang, Da Nang-Saigon)",
          "All private airport and activity transfers",
          "Private, English-speaking guides",
          "Meals as specified",
          "All entrance fees and exclusive activities mentioned",
        ],
        excludes: [
          "International flights",
          "Vietnam visa fees",
          "Travel insurance",
          "Personal expenses",
        ],
        notes: [
          "A visa or e-visa is required for most nationalities.",
          "This itinerary offers a relaxed pace with premium services.",
        ],
      },
      {
        tripId: 21,
        title: "Vietnam's Northern Soul: The Ha Giang Loop & Sapa Trek",
        tripDescription:
          "An epic 13-day offbeat adventure through Northern Vietnam. Conquer the legendary Ha Giang Loop by motorbike (with an easy-rider), trek through Sapa's iconic rice terraces, and stay with local families to experience the authentic culture of the remote highlands.",
        duration: "12N-13D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "motorbike",
          "hiking",
          "homestay",
          "culture",
        ],
        customizable: true,
        badge: { type: "adventure", text: "Ultimate Adventure" },
        capacity: 10,
        meals: "12 Breakfasts, 9 Lunches, 8 Dinners",
        accommodations:
          "2 nights in Hanoi hotel, 1 night on overnight bus, 3 nights in guesthouses/homestays on Ha Giang loop, 2 nights in Sapa homestays, 2 nights in Sapa hotel, 1 night in Ninh Binh homestay.",
        baseCity: "Customizable",
        route: [
          "Hanoi",
          "Ha Giang",
          "Dong Van",
          "Meo Vac",
          "Sapa",
          "Ninh Binh",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Hanoi",
            details:
              "Arrive in Hanoi, transfer to the hotel. Meet your group for a briefing. Explore the Old Quarter and enjoy a welcome dinner of Bun Cha.",
          },
          {
            day: 2,
            summary: "Hanoi Exploration & Overnight Bus",
            details:
              "Day to explore Hanoi. In the evening, board a comfortable sleeper bus to Ha Giang city.",
          },
          {
            day: 3,
            summary: "Ha Giang Loop Day 1: To Quan Ba",
            details:
              "Arrive in Ha Giang, meet your easy-rider, and begin the loop. Ride through stunning scenery to Quan Ba Heaven's Gate and the Twin Mountains. Overnight in a homestay.",
          },
          {
            day: 4,
            summary: "Ha Giang Loop Day 2: Dong Van Karst Plateau",
            details:
              "Ride through the UNESCO Global Geopark of Dong Van. Visit the Hmong King's Palace and ride through epic mountain passes. Overnight in Dong Van town.",
          },
          {
            day: 5,
            summary: "Ha Giang Loop Day 3: Ma Pi Leng Pass & Meo Vac",
            details:
              "Conquer the breathtaking Ma Pi Leng Pass, one of Vietnam's most spectacular roads, with views of the Nho Que River. Ride to Meo Vac and return to Ha Giang City. Take an overnight bus to Sapa.",
          },
          {
            day: 6,
            summary: "Arrival in Sapa & Acclimatization",
            details:
              "Arrive in Sapa in the early morning. Check into a hotel to rest. In the afternoon, take a short hike to Cat Cat village to acclimatize.",
          },
          {
            day: 7,
            summary: "Sapa Trek Day 1: Y Linh Ho to Lao Chai",
            details:
              "Begin your 2-day trek through the Muong Hoa Valley. Hike through incredible terraced rice paddies, with stunning views of Fansipan mountain. Overnight in a homestay with a local Giay family in Lao Chai.",
          },
          {
            day: 8,
            summary: "Sapa Trek Day 2: Ta Van to Giang Ta Chai",
            details:
              "Continue your trek through bamboo forests and past waterfalls. Meet people from the Red Dzao minority in Giang Ta Chai village. Transfer back to Sapa town in the afternoon.",
          },
          {
            day: 9,
            summary: "Fansipan Peak & Return to Hanoi",
            details:
              "Take the spectacular cable car ride to the summit of Fansipan, the 'Roof of Indochina'. Enjoy the incredible views before returning to Sapa. Take an evening limousine bus back to Hanoi.",
          },
          {
            day: 10,
            summary: "Hanoi to Ninh Binh",
            details:
              "Arrive in Hanoi in the early morning. Take a train or bus to Ninh Binh, often called 'Ha Long Bay on Land'. Check into a homestay surrounded by limestone karsts.",
          },
          {
            day: 11,
            summary: "Ninh Binh Exploration",
            details:
              "Explore Ninh Binh. Take a sampan boat trip through the caves of Trang An or Tam Coc, and hike up to the Mua Caves viewpoint for a breathtaking panoramic view.",
          },
          {
            day: 12,
            summary: "Return to Hanoi",
            details:
              "Morning at leisure in Ninh Binh. In the afternoon, take a train back to Hanoi for a final farewell dinner.",
          },
          {
            day: 13,
            summary: "Departure",
            details: "The tour concludes after breakfast. Depart from Hanoi.",
          },
        ],
        includes: [
          "Accommodation as specified",
          "Overnight bus and limousine bus tickets",
          "4-day Ha Giang Loop tour with easy-rider, bike, fuel, and meals",
          "Guided 2-day Sapa trek with homestay and meals",
          "Fansipan cable car ticket",
          "Ninh Binh boat trip",
        ],
        excludes: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Meals not specified",
          "Personal expenses and tips",
        ],
        notes: [
          "This is a physically demanding trip for adventurous travelers.",
          "An 'easy-rider' is a local guide who drives the motorbike while you ride safely on the back.",
          "Weather in the mountains can be unpredictable.",
        ],
      },
      {
        tripId: 22,
        title: "Vietnam Experience: Highlights from North to South",
        tripDescription:
          "A classic 10-day Vietnamese journey perfect for first-timers. Experience the best of the country, from an overnight cruise in Halong Bay and the charming streets of Hoi An to the vibrant energy of Saigon, all while savoring incredible food along the way.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "culture",
          "foodie",
          "cruise",
          "history",
          "classic",
        ],
        customizable: true,
        badge: { type: "experience", text: "Classic Vietnam" },
        capacity: 18,
        meals: "9 Breakfasts, 4 Lunches, 3 Dinners",
        accommodations:
          "Comfortable 3/4-star hotels in cities, comfortable cabin on an overnight Halong Bay cruise.",
        baseCity: "Customizable",
        route: ["Hanoi", "Halong Bay", "Hoi An", "Ho Chi Minh City"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Welcome to Hanoi!",
            details:
              "Arrive in Hanoi and transfer to your hotel. Meet your group and guide for a welcome meeting, followed by a street food tour through the bustling Old Quarter.",
          },
          {
            day: 2,
            summary: "Hanoi City Tour & Overnight in Halong Bay",
            details:
              "Morning tour of Hanoi's highlights including the Temple of Literature. In the afternoon, transfer to Halong Bay and board your cruise ship for an unforgettable night among the limestone karsts.",
          },
          {
            day: 3,
            summary: "Halong Bay & Flight to Da Nang",
            details:
              "Wake up on the bay, enjoy brunch as you cruise back to shore. Transfer to Hanoi airport for an evening flight to Da Nang. Upon arrival, transfer to your hotel in Hoi An.",
          },
          {
            day: 4,
            summary: "Hoi An Ancient Town",
            details:
              "Enjoy a walking tour of Hoi An's charming ancient town, visiting the Japanese Covered Bridge, a traditional merchant house, and a Chinese assembly hall. The rest of the day is free to explore.",
          },
          {
            day: 5,
            summary: "Hoi An Cooking Class & Basket Boat Ride",
            details:
              "Learn the art of Vietnamese cooking with a hands-on class. Start with a market visit and then enjoy a fun ride in a traditional round 'basket boat' through coconut groves.",
          },
          {
            day: 6,
            summary: "Free Day in Hoi An",
            details:
              "A full day to enjoy Hoi An at your own pace. Relax at An Bang beach, get some clothes tailored, or simply wander the beautiful lantern-lit streets.",
          },
          {
            day: 7,
            summary: "Fly to Ho Chi Minh City",
            details:
              "Transfer to Da Nang airport for a morning flight to Ho Chi Minh City (Saigon). In the afternoon, take a city tour visiting the War Remnants Museum and the Reunification Palace.",
          },
          {
            day: 8,
            summary: "Cu Chi Tunnels & Saigon Life",
            details:
              "Morning excursion to the Cu Chi Tunnels to learn about the ingenuity and resilience of the Vietnamese soldiers. Afternoon is free. Optional evening activity could be watching a show at the Saigon Opera House.",
          },
          {
            day: 9,
            summary: "Mekong Delta Day Trip",
            details:
              "Take a day trip to the Mekong Delta. Cruise on the mighty river, visit local workshops to see how coconut candy is made, and enjoy a ride on a small sampan through the canals. Farewell group dinner in Saigon.",
          },
          {
            day: 10,
            summary: "Departure",
            details:
              "The tour ends after breakfast. Depart from Ho Chi Minh City.",
          },
        ],
        includes: [
          "Accommodation for 9 nights",
          "Domestic flights (Hanoi-Da Nang, Da Nang-Saigon)",
          "Overnight Halong Bay cruise",
          "Airport and activity transfers",
          "Guided tours as mentioned",
          "Meals as specified",
          "Cooking class and other activities",
        ],
        excludes: [
          "International flights",
          "Vietnam visa",
          "Travel insurance",
          "Lunches and dinners not specified",
          "Optional activities",
        ],
        notes: [
          "This itinerary covers a lot of ground and is perfect for those who want to see the main highlights in a limited time.",
          "Book flights in advance for better pricing.",
        ],
      },
    ],
  },
  {
    destination_id: 8,
    destination_name: "Thailand",
    category: "international",
    destination_description:
      "Thailand, the 'Land of Smiles', is a kingdom of wonders, from shimmering temples and bustling cities to idyllic islands and lush jungles. It's a country where ancient culture is woven into the fabric of modern life, and the world-renowned cuisine tantalizes the taste buds. Whether you're seeking spiritual enlightenment, pristine beaches, or vibrant nightlife, Thailand offers a warm welcome and an unforgettable adventure.\n\nKey highlights include:\n- **Bangkok** - A vibrant metropolis with ornate shrines, bustling markets, and a sophisticated rooftop bar scene.\n- **Chiang Mai** - The cultural heart of Northern Thailand, known for its temples, elephant sanctuaries, and night bazaars.\n- **Andaman Islands (Phuket, Krabi, Phi Phi)** - World-famous for their stunning limestone cliffs, turquoise waters, and vibrant marine life.\n- **Gulf Islands (Koh Samui, Koh Phangan, Koh Tao)** - Beautiful islands offering everything from luxury resorts to legendary Full Moon Parties and world-class diving.\n- **Thai Cuisine** - From street food stalls to fine dining, experience one of the world's most beloved culinary traditions.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 23,
        title: "Siam's Ultimate Indulgence: A Luxury Thai Escape",
        tripDescription:
          "A 10-day journey showcasing the best of Thailand in absolute luxury. Stay in private pool villas and iconic 5-star hotels, dine at Michelin-starred restaurants, explore by private yacht, and rejuvenate with exclusive spa treatments.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: ["luxury", "romance", "beach", "foodie", "spa", "yacht"],
        customizable: true,
        badge: { type: "luxury", text: "Ultimate Luxury" },
        capacity: 6,
        meals: "9 Breakfasts, 5 Lunches, 5 Dinners",
        accommodations:
          "3 nights in a 5-star Bangkok hotel (e.g., Mandarin Oriental), 3 nights in a luxury resort in Chiang Mai (e.g., Four Seasons), 3 nights in a private pool villa in Phuket (e.g., Trisara).",
        baseCity: "Customizable",
        route: ["Bangkok", "Chiang Mai", "Phuket", "Phi Phi Islands"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Bangkok & Rooftop Cocktails",
            details:
              "Arrive at Suvarnabhumi Airport (BKK). Private VIP transfer to your riverside hotel. In the evening, enjoy bespoke cocktails at a world-famous rooftop bar with stunning city views.",
          },
          {
            day: 2,
            summary: "Bangkok's Royal & Culinary Treasures",
            details:
              "Private long-tail boat tour through the city's klongs (canals). Visit the magnificent Grand Palace and Wat Phra Kaew (Emerald Buddha). Evening reservation at a Michelin-starred Thai restaurant for a modern gastronomic experience.",
          },
          {
            day: 3,
            summary: "Flight to Chiang Mai & Lanna Kingdom Luxury",
            details:
              "Private transfer to the airport for your flight to Chiang Mai. Check into your luxurious resort nestled among rice paddies. Afternoon at leisure to enjoy the resort's amenities.",
          },
          {
            day: 4,
            summary: "Ethical Elephant Sanctuary & Private Cooking Class",
            details:
              "Visit a reputable, ethical elephant sanctuary for a private encounter with rescued elephants. In the afternoon, enjoy a private cooking class with a renowned local chef.",
          },
          {
            day: 5,
            summary: "Doi Suthep Temple & Spa Retreat",
            details:
              "Private tour to Wat Phra That Doi Suthep, a sacred temple perched on a mountain with panoramic views of the city. Afternoon dedicated to a lavish spa treatment package at one of Chiang Mai's top spas.",
          },
          {
            day: 6,
            summary: "Flight to Phuket & Private Villa Paradise",
            details:
              "Fly from Chiang Mai to Phuket. Private transfer to your exclusive private pool villa overlooking the Andaman Sea. Day at leisure to relax and soak in the views.",
          },
          {
            day: 7,
            summary: "Private Yacht Trip to Phi Phi Islands",
            details:
              "Charter a private luxury yacht for a full-day trip to the stunning Phi Phi Islands. Snorkel in crystal-clear waters, visit Maya Bay (from a distance), and enjoy a gourmet lunch served on board by a private chef.",
          },
          {
            day: 8,
            summary: "Phuket's Hidden Beaches & Fine Dining",
            details:
              "Explore some of Phuket's quieter, more exclusive beaches with your private driver. Enjoy a sunset cocktail at a chic beach club, followed by a farewell dinner at a fine-dining restaurant.",
          },
          {
            day: 9,
            summary: "Leisure and Relaxation",
            details:
              "Full day at leisure to enjoy your villa, the beach, or any last-minute shopping. An in-villa private yoga session can be arranged.",
          },
          {
            day: 10,
            summary: "Departure",
            details:
              "Enjoy a final breakfast before your private transfer to Phuket International Airport (HKT) for departure.",
          },
        ],
        includes: [
          "9 nights in luxury hotels and private villas",
          "Domestic flights (Bangkok-Chiang Mai, Chiang Mai-Phuket)",
          "All private airport and activity transfers",
          "Private, English-speaking guides",
          "Private yacht charter",
          "Meals as specified, including Michelin-star dining",
          "Spa packages and exclusive activities",
        ],
        excludes: [
          "International flights",
          "Thailand visa fees",
          "Travel insurance",
          "Personal expenses and gratuities",
        ],
        notes: [
          "This itinerary is designed for ultimate comfort and exclusivity.",
          "Yacht charters and restaurant reservations should be made well in advance.",
        ],
      },
      {
        tripId: 24,
        title: "Offbeat Thailand: Isan Culture & Jungle Treks",
        tripDescription:
          "A 12-day journey beyond the beaches to discover the authentic heart of Thailand. Explore the Khmer ruins and unique culture of the Isan region, trek through the jungles near Chiang Dao, and experience the real, untouched 'Land of Smiles'.",
        duration: "11N-12D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "culture",
          "history",
          "hiking",
          "homestay",
          "nature",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Authentic Thailand" },
        capacity: 10,
        meals: "11 Breakfasts, 6 Lunches, 5 Dinners",
        accommodations:
          "Comfortable local hotels, 2 nights in a jungle eco-lodge, 1 night in a village homestay.",
        baseCity: "Customizable",
        route: [
          "Bangkok",
          "Nakhon Ratchasima",
          "Phimai",
          "Khon Kaen",
          "Chiang Dao",
          "Chiang Mai",
        ],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Bangkok",
            details:
              "Arrive in Bangkok and transfer to your hotel. Meet your group for a briefing and explore a local neighborhood market for dinner.",
          },
          {
            day: 2,
            summary: "Journey to Isan: Khao Yai National Park",
            details:
              "Travel by road to the Isan region. Stop at Khao Yai National Park, a UNESCO site, for a short jungle walk and a chance to see wildlife.",
          },
          {
            day: 3,
            summary: "Khmer Ruins of Phimai",
            details:
              "Explore the magnificent Khmer temple complex at Phimai, often compared to a smaller Angkor Wat. Also, visit Sai Ngam, a huge, ancient banyan tree grove.",
          },
          {
            day: 4,
            summary: "Khon Kaen & Isan Culture",
            details:
              "Travel to Khon Kaen, a major Isan city. Visit a local village known for its silk weaving and learn about the unique culture and spicy cuisine of the region.",
          },
          {
            day: 5,
            summary: "Flight to Chiang Mai & Onward to Chiang Dao",
            details:
              "Fly from Khon Kaen to Chiang Mai. Transfer north to the tranquil area of Chiang Dao, dominated by a massive limestone mountain. Check into an eco-lodge.",
          },
          {
            day: 6,
            summary: "Chiang Dao Caves & Jungle Trek Start",
            details:
              "Explore the Chiang Dao cave system. In the afternoon, begin your 2-day jungle trek with a local guide, hiking into the lush mountains.",
          },
          {
            day: 7,
            summary: "Trekking & Village Homestay",
            details:
              "Continue your trek, passing through beautiful scenery and rice fields. Arrive at a Karen hill-tribe village where you will stay overnight in a homestay, sharing a meal with a local family.",
          },
          {
            day: 8,
            summary: "End Trek & Return to Chiang Mai",
            details:
              "A final few hours of trekking before being picked up and transferred back to Chiang Mai. Check into your hotel and enjoy a well-deserved rest.",
          },
          {
            day: 9,
            summary: "Chiang Mai's Hidden Temples",
            details:
              "Explore some of Chiang Mai's lesser-known but beautiful temples, such as Wat Umong (the forest tunnel temple) and Wat Suan Dok.",
          },
          {
            day: 10,
            summary: "Free Day in Chiang Mai",
            details:
              "A free day to pursue your interests. You could visit an art gallery, take a Muay Thai class, or explore the trendy Nimman area.",
          },
          {
            day: 11,
            summary: "Return to Bangkok",
            details:
              "Take a morning flight or an overnight train back to Bangkok. Enjoy a final farewell dinner.",
          },
          {
            day: 12,
            summary: "Departure",
            details: "The tour concludes after breakfast. Depart from Bangkok.",
          },
        ],
        includes: [
          "Accommodation as specified",
          "Domestic flights (Khon Kaen-Chiang Mai, Chiang Mai-Bangkok)",
          "Private vehicle for Isan portion",
          "Guided 2-day jungle trek with meals and guide",
          "Village homestay experience",
        ],
        excludes: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Meals not specified",
          "Entrance fees to temples and parks",
        ],
        notes: [
          "This trip requires a good level of fitness for the jungle trek.",
          "Accommodations in rural areas are simple but authentic.",
          "Isan is the least touristy region of Thailand, offering a genuine cultural experience.",
        ],
      },
      {
        tripId: 25,
        title: "Thailand Island Hopper: Krabi, Phi Phi & Phuket",
        tripDescription:
          "The ultimate 9-day Thai island-hopping adventure. Discover the stunning landscapes of the Andaman Sea, from the limestone cliffs of Krabi and the famous shores of Phi Phi to the vibrant energy of Phuket. A perfect mix of adventure, relaxation, and nightlife.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "beach",
          "island hopping",
          "adventure",
          "nightlife",
          "scenic",
        ],
        customizable: true,
        badge: { type: "experience", text: "Island Adventure" },
        capacity: 20,
        meals: "8 Breakfasts, 3 Lunches, 1 Dinner",
        accommodations:
          "Comfortable and well-located 3/4-star hotels and resorts.",
        baseCity: "Customizable",
        route: ["Krabi", "Railay Beach", "Phi Phi Islands", "Phuket"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Krabi",
            details:
              "Arrive at Krabi Airport (KBV) and transfer to your hotel in the Ao Nang area. Settle in and meet your group for a welcome dinner on the beach.",
          },
          {
            day: 2,
            summary: "Railay Beach & Rock Climbing",
            details:
              "Take a long-tail boat to the stunning Railay Beach, accessible only by sea. Relax on the beach, hike to a viewpoint, or try an introductory rock climbing session on the world-famous limestone cliffs.",
          },
          {
            day: 3,
            summary: "4 Islands Tour",
            details:
              "Embark on a classic '4 Islands' speedboat tour from Ao Nang. Visit Tup Island, Chicken Island, and Poda Island for swimming and snorkeling, and explore the Phra Nang Cave Beach.",
          },
          {
            day: 4,
            summary: "Ferry to Phi Phi Islands",
            details:
              "Take a morning ferry to the spectacular Phi Phi Islands. Check into your hotel and spend the afternoon exploring the main village or relaxing on Loh Dalum Bay.",
          },
          {
            day: 5,
            summary: "Phi Phi Leh & Maya Bay Tour",
            details:
              "Take a private long-tail boat tour around Phi Phi Leh. Snorkel in the Pileh Lagoon, see the Viking Cave, and admire Maya Bay (the setting for 'The Beach') from the boat. Enjoy sunset views from a viewpoint.",
          },
          {
            day: 6,
            summary: "Ferry to Phuket & Patong Beach",
            details:
              "Enjoy a final morning in Phi Phi before taking an afternoon ferry to Phuket, Thailand's largest island. Transfer to your hotel near Patong Beach and get ready to experience the vibrant nightlife on Bangla Road.",
          },
          {
            day: 7,
            summary: "Phuket Island Exploration",
            details:
              "Explore Phuket's highlights. Visit the Big Buddha for panoramic views, wander through the colorful streets of Phuket Old Town with its Sino-Portuguese architecture, and relax on a quieter beach like Karon or Kata.",
          },
          {
            day: 8,
            summary: "Free Day in Phuket",
            details:
              "Your last full day is free to do as you please. Relax by the pool, go shopping, take a Thai cooking class, or visit a viewpoint for a final Andaman sunset. Farewell party in the evening.",
          },
          {
            day: 9,
            summary: "Departure",
            details:
              "The tour ends after breakfast. Depart from Phuket International Airport (HKT).",
          },
        ],
        includes: [
          "8 nights accommodation",
          "Airport and ferry port transfers",
          "Ferry tickets (Krabi-Phi Phi, Phi Phi-Phuket)",
          "4 Islands speedboat tour and Phi Phi Leh boat tour with lunch",
          "Meals as specified",
          "Experienced trip leader",
        ],
        excludes: [
          "Flights to Krabi/from Phuket",
          "Visa fees",
          "Travel insurance",
          "Most lunches and dinners",
          "Optional activities like rock climbing or cooking classes",
        ],
        notes: [
          "This trip is perfect for social travelers who love beaches and a mix of activity and free time.",
          "Be prepared for some lively nights, especially in Phi Phi and Patong.",
          "Pack light as you'll be moving between islands.",
        ],
      },
    ],
  },
  {
    destination_id: 9,
    destination_name: "Cambodia",
    category: "international",
    destination_description:
      "Cambodia, the Kingdom of Wonder, is a country with a soul-stirring history and a hopeful future. It is home to the magnificent temples of Angkor, a testament to the incredible power of the ancient Khmer empire. Beyond the temples, Cambodia offers vibrant cities, a beautiful coastline, and a countryside dotted with rice paddies and sugar palms. The resilience and warmth of the Cambodian people are what truly make a visit here unforgettable.\n\nKey highlights include:\n- **Angkor Wat** - The world's largest religious monument and the breathtaking heart of the Angkor temple complex.\n- **Angkor Thom** - The last capital of the Khmer Empire, featuring the enigmatic stone faces of the Bayon Temple.\n- **Phnom Penh** - The bustling capital, home to the Royal Palace and poignant historical sites like the Killing Fields.\n- **Tonlé Sap Lake** - Southeast Asia's largest freshwater lake, with fascinating floating villages.\n- **Southern Coast (Koh Rong)** - Unspoiled islands with white-sand beaches and turquoise waters.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 26,
        title: "Khmer Empire in Luxury: Temples, River & Coast",
        tripDescription:
          "An 8-day journey through Cambodia's cultural and natural treasures in ultimate comfort. Stay in the country's most luxurious hotels, explore the Angkor temples with a private archaeologist guide, and unwind at a serene coastal retreat.",
        duration: "7N-8D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "culture",
          "history",
          "beach",
          "romance",
          "archaeology",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Luxury Heritage" },
        capacity: 6,
        meals: "7 Breakfasts, 4 Lunches, 5 Dinners",
        accommodations:
          "3 nights in a 5-star Siem Reap hotel (e.g., Belmond La Résidence d'Angkor), 2 nights in a 5-star Phnom Penh hotel (e.g., Rosewood), 2 nights in a luxury coastal resort (e.g., Shinta Mani Wild).",
        baseCity: "Customizable",
        route: ["Siem Reap", "Angkor Wat", "Phnom Penh", "Cardamom Mountains"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Siem Reap",
            details:
              "Arrive at Siem Reap Airport (REP). VIP transfer to your luxury hotel. Evening welcome dinner with a traditional Apsara dance performance.",
          },
          {
            day: 2,
            summary: "Angkor Wat at Sunrise & Grand Circuit",
            details:
              "Pre-dawn start for a private guided tour of Angkor Wat at sunrise. After breakfast, explore the 'Grand Circuit' temples including Preah Khan and Neak Pean with your expert guide.",
          },
          {
            day: 3,
            summary: "Angkor Thom & Ta Prohm",
            details:
              "Explore the ancient city of Angkor Thom, visiting the Bayon with its serene stone faces, the Terrace of the Elephants, and the Terrace of the Leper King. In the afternoon, visit the iconic, jungle-clad Ta Prohm temple ('Tomb Raider').",
          },
          {
            day: 4,
            summary: "Fly to Phnom Penh & Sunset Cruise",
            details:
              "Morning at leisure. Afternoon flight to Phnom Penh. Private transfer to your hotel. Enjoy a private sunset cruise on the Mekong River with cocktails and canapés.",
          },
          {
            day: 5,
            summary: "Phnom Penh's Royal & Modern History",
            details:
              "Private guided tour of the glittering Royal Palace, the Silver Pagoda, and the National Museum. In the afternoon, a reflective visit to the Tuol Sleng Genocide Museum and Choeung Ek (the Killing Fields).",
          },
          {
            day: 6,
            summary: "Journey to a Luxury Wilderness Retreat",
            details:
              "Private road transfer to a unique, all-inclusive luxury tented camp in the Cardamom Mountains. Arrive via zipline or jungle jeep. Settle into your luxurious tented suite.",
          },
          {
            day: 7,
            summary: "Jungle Adventures & Conservation",
            details:
              "Enjoy the all-inclusive activities at the retreat. Options include joining anti-poaching patrols with Wildlife Alliance rangers, kayaking the river, or enjoying a waterfall picnic. Indulge in creative fine dining and spa treatments.",
          },
          {
            day: 8,
            summary: "Departure",
            details:
              "After a final gourmet breakfast in the jungle, take a private transfer back to Phnom Penh Airport (PNH) for your departure.",
          },
        ],
        includes: [
          "7 nights in luxury hotel and resort accommodation",
          "Domestic flight (Siem Reap-Phnom Penh)",
          "All-inclusive stay at the wilderness retreat",
          "Private vehicle and driver throughout",
          "Expert archaeologist guide in Siem Reap",
          "Meals as specified",
          "All entrance fees and private tours",
        ],
        excludes: [
          "International flights",
          "Cambodia visa fees",
          "Travel insurance",
          "Personal expenses",
        ],
        notes: [
          "Visiting the Killing Fields and Tuol Sleng can be emotionally challenging.",
          "The luxury wilderness retreat offers a unique blend of adventure and conservation.",
        ],
      },
      {
        tripId: 27,
        title: "Cambodia Off the Beaten Path: Battambang & Beyond",
        tripDescription:
          "A 10-day journey that goes beyond Angkor to reveal Cambodia's authentic countryside and lesser-known gems. Travel by local boat, ride a bamboo train, explore remote temples, stay in a community homestay, and discover the resilient spirit of rural Cambodia.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "culture",
          "homestay",
          "countryside",
          "history",
          "adventure",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Authentic Cambodia" },
        capacity: 12,
        meals: "9 Breakfasts, 4 Lunches, 3 Dinners",
        accommodations:
          "Comfortable local hotels, 1 night in a village homestay, boutique hotels.",
        baseCity: "Customizable",
        route: [
          "Phnom Penh",
          "Kampong Chhnang",
          "Battambang",
          "Siem Reap",
          "Banteay Chhmar",
        ],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Phnom Penh",
            details:
              "Arrive in Phnom Penh, transfer to your hotel. Meet your group for a briefing and a welcome dinner at a social enterprise restaurant.",
          },
          {
            day: 2,
            summary: "Phnom Penh Exploration",
            details:
              "Morning visit to the Royal Palace and Silver Pagoda. Afternoon visit to the Killing Fields and Tuol Sleng for historical context.",
          },
          {
            day: 3,
            summary: "River Journey to Battambang",
            details:
              "Embark on a fascinating full-day boat journey up the Tonlé Sap river to Battambang. Witness life along the river and pass through floating villages. (Note: This boat runs in the wet season; in the dry season, travel is by road).",
          },
          {
            day: 4,
            summary: "Battambang's Countryside & Bamboo Train",
            details:
              "Explore the beautiful countryside around Battambang by tuk-tuk. See local artisans making rice paper and fish paste. In the afternoon, take a thrilling ride on the famous 'Norry' (bamboo train).",
          },
          {
            day: 5,
            summary: "Bat Caves & Homestay",
            details:
              "Visit Phnom Sampeau, a hill with a tragic Khmer Rouge history and a beautiful temple. At dusk, witness millions of bats streaming out of a cave. Continue to a local village for a homestay experience with a Cambodian family.",
          },
          {
            day: 6,
            summary: "Journey to Siem Reap",
            details:
              "After breakfast with your host family, travel by road to Siem Reap. Check into your hotel and enjoy some rest. Evening free to explore the night market.",
          },
          {
            day: 7,
            summary: "The Main Angkor Temples",
            details:
              "A full day exploring the highlights of Angkor: Angkor Wat, Angkor Thom (including Bayon), and the jungle temple of Ta Prohm.",
          },
          {
            day: 8,
            summary: "Remote Temple of Banteay Chhmar",
            details:
              "Take a day trip to the remote and rarely visited Banteay Chhmar temple complex. This huge, jungle-clad ruin offers an 'Indiana Jones' experience without the crowds.",
          },
          {
            day: 9,
            summary: "Tonlé Sap Lake & Farewell Dinner",
            details:
              "Visit a floating village on Tonlé Sap Lake to see how communities live on the water. Return to Siem Reap for a farewell dinner.",
          },
          {
            day: 10,
            summary: "Departure",
            details:
              "The tour concludes after breakfast. Depart from Siem Reap.",
          },
        ],
        includes: [
          "Accommodation as specified",
          "Public boat from Phnom Penh to Battambang (seasonal)",
          "Private transport for other journeys",
          "Local guides",
          "Meals as specified",
          "All mentioned activities including bamboo train and temple fees",
        ],
        excludes: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Meals not specified",
        ],
        notes: [
          "The riverboat journey is dependent on water levels (best from July-January).",
          "The homestay is basic with shared facilities but offers a rewarding cultural exchange.",
        ],
      },
      {
        tripId: 28,
        title: "Cambodia Experience: Temples, History & Beaches",
        tripDescription:
          "A well-rounded 9-day trip that combines the awe-inspiring Angkor temples and poignant history of Phnom Penh with relaxation on the beautiful island of Koh Rong. A perfect introduction to the wonders of Cambodia.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: ["experience", "history", "temples", "beach", "classic"],
        customizable: true,
        badge: { type: "experience", text: "Classic Cambodia" },
        capacity: 18,
        meals: "8 Breakfasts, 2 Lunches, 2 Dinners",
        accommodations:
          "Comfortable and stylish 3/4-star hotels and a beach resort.",
        baseCity: "Customizable",
        route: [
          "Siem Reap",
          "Angkor Wat",
          "Phnom Penh",
          "Sihanoukville",
          "Koh Rong",
        ],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Siem Reap",
            details:
              "Arrive in Siem Reap, the gateway to Angkor. Transfer to your hotel. In the evening, meet your group and enjoy a welcome dinner.",
          },
          {
            day: 2,
            summary: "Sunrise at Angkor Wat & Temples Tour",
            details:
              "An early start to witness the unforgettable sunrise over Angkor Wat. Spend the day exploring the main temples including Angkor Thom and Ta Prohm with a local guide.",
          },
          {
            day: 3,
            summary: "Free Day in Siem Reap",
            details:
              "A free day to explore more temples at your own pace, take a cooking class, visit the landmine museum, or relax by the pool.",
          },
          {
            day: 4,
            summary: "Travel to Phnom Penh",
            details:
              "Take a comfortable morning bus or a short flight to the capital, Phnom Penh. Check into your hotel. In the afternoon, take a walking tour along the riverfront and visit Wat Phnom.",
          },
          {
            day: 5,
            summary: "Phnom Penh's Past & Present",
            details:
              "Learn about Cambodia's history with visits to the Tuol Sleng Genocide Museum and the Choeung Ek Killing Fields. In the afternoon, visit the dazzling Royal Palace.",
          },
          {
            day: 6,
            summary: "To the Coast: Koh Rong",
            details:
              "Travel by road to Sihanoukville and then take a speedboat ferry to the beautiful island of Koh Rong. Check into your beach resort and feel the sand between your toes.",
          },
          {
            day: 7,
            summary: "Island Life on Koh Rong",
            details:
              "A full day of relaxation and adventure. Go snorkeling or diving, take a boat trip to Long Beach, or simply relax in a hammock. In the evening, take a boat trip to see bioluminescent plankton.",
          },
          {
            day: 8,
            summary: "Return to Phnom Penh",
            details:
              "Enjoy a final morning on the island before taking the ferry and road transport back to Phnom Penh. Enjoy a farewell dinner with your group.",
          },
          {
            day: 9,
            summary: "Departure",
            details:
              "The tour ends after breakfast. Depart from Phnom Penh International Airport (PNH).",
          },
        ],
        includes: [
          "8 nights accommodation",
          "All road and ferry transport between destinations",
          "Guided tour of Angkor temples",
          "Guided tour of Phnom Penh",
          "Meals as specified",
          "Experienced trip leader",
        ],
        excludes: [
          "International flights",
          "Cambodia visa",
          "Flight from Siem Reap to Phnom Penh (if chosen)",
          "Optional activities",
          "Most meals",
        ],
        notes: [
          "This itinerary offers a great balance of culture, history, and beach relaxation.",
          "The quality of roads in Cambodia has improved, making bus travel a comfortable and scenic option.",
        ],
      },
    ],
  },
  {
    destination_id: 10,
    destination_name: "Singapore",
    category: "international",
    destination_description:
      "Singapore is a futuristic city-state where gleaming skyscrapers, lush green spaces, and a vibrant multicultural tapestry create a truly unique destination. This small island packs a powerful punch with its world-class attractions, innovative architecture, and a legendary culinary scene that ranges from Michelin-starred restaurants to bustling hawker centres. It's a marvel of efficiency, cleanliness, and imagination.\n\nKey highlights include:\n- **Gardens by the Bay** - Explore the iconic Supertree Grove and the stunning Cloud Forest and Flower Dome biomes.\n- **Marina Bay Sands** - The architectural icon with its rooftop SkyPark, infinity pool, and luxury shops.\n- **Hawker Centres** - Dive into Singapore's foodie soul and sample a huge variety of delicious and affordable local dishes.\n- **Jewel Changi Airport** - An attraction in itself, featuring the world's tallest indoor waterfall.\n- **Cultural Enclaves** - Explore the vibrant streets of Chinatown, Little India, and Kampong Glam.\n\nSingapore is a perfect destination for a stopover or a longer city break, offering a seamless blend of nature, technology, and culture.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 29,
        title: "Singapore in Ultimate Style: A Luxurious City Sojourn",
        tripDescription:
          "A 5-day immersion into the luxurious side of Singapore. Stay at the iconic Marina Bay Sands, enjoy private tours, indulge in Michelin-starred dining, and experience the city's finest offerings, from bespoke cocktails to exclusive shopping.",
        duration: "4N-5D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "city break",
          "foodie",
          "architecture",
          "romance",
          "shopping",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Iconic Luxury" },
        capacity: 4,
        meals: "4 Breakfasts, 2 Lunches, 3 Dinners",
        accommodations:
          "4 nights in a Club Room at Marina Bay Sands with access to the Club55 lounge and rooftop infinity pool.",
        baseCity: "Customizable",
        route: ["Singapore", "Marina Bay", "Sentosa Island"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival & Marina Bay Sands",
            details:
              "Arrive at Changi Airport. Private limousine transfer to Marina Bay Sands. Check into your Club Room and enjoy exclusive access to the rooftop infinity pool. Welcome dinner at a celebrity chef restaurant within the resort.",
          },
          {
            day: 2,
            summary: "Private City & Cultural Tour",
            details:
              "Embark on a private, chauffeur-driven tour of Singapore's cultural districts. Explore Kampong Glam, Little India, and Chinatown. Visit a private Peranakan museum. Lunch at a top-rated Peranakan restaurant.",
          },
          {
            day: 3,
            summary: "Gardens by the Bay VIP & Michelin Dining",
            details:
              "Enjoy a private guided tour of Gardens by the Bay, including the Flower Dome and Cloud Forest, with buggy access. In the evening, experience the Supertree Grove light show from a prime location, followed by dinner at a 2-Michelin-star restaurant.",
          },
          {
            day: 4,
            summary: "Luxury Shopping & Bespoke Cocktail Experience",
            details:
              "Morning dedicated to a personalized shopping experience on Orchard Road with a style consultant. In the afternoon, learn the art of mixology at a private cocktail-making class at one of Asia's 50 Best Bars. Farewell dinner at the iconic Long Bar at Raffles Hotel, home of the Singapore Sling.",
          },
          {
            day: 5,
            summary: "Departure from Jewel Changi",
            details:
              "Enjoy a final swim in the infinity pool. Private transfer to Changi Airport. Spend some time exploring the Jewel complex and the Rain Vortex before your departure.",
          },
        ],
        includes: [
          "4 nights in a Club Room at Marina Bay Sands",
          "Private limousine airport transfers",
          "Private chauffeur-driven city tour",
          "Meals as specified including Michelin-starred dining",
          "Private guided tours and exclusive experiences",
          "Personal shopping consultant",
        ],
        excludes: [
          "International flights",
          "Travel insurance",
          "Visa requirements",
          "Personal expenses",
          "Spa treatments",
        ],
        notes: [
          "Access to the Marina Bay Sands infinity pool is exclusive to hotel guests.",
          "Reservations for top restaurants and bars are essential and should be made weeks in advance.",
        ],
      },
      {
        tripId: 30,
        title: "Hidden Singapore: The Green & Local Trail",
        tripDescription:
          "A 5-day offbeat journey that reveals a different side of Singapore, beyond the skyscrapers and shopping malls. Discover lush nature reserves, explore quirky neighborhoods, cycle through rustic islands, and eat like a local at hidden foodie spots.",
        duration: "4N-5D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "nature",
          "foodie",
          "local life",
          "cycling",
          "hiking",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Secret Singapore" },
        capacity: 12,
        meals: "4 Breakfasts, 2 Lunches",
        accommodations:
          "4 nights in a stylish boutique hotel in a characterful neighborhood like Tiong Bahru or Katong.",
        baseCity: "Customizable",
        route: [
          "Singapore",
          "Pulau Ubin",
          "MacRitchie Reservoir",
          "Tiong Bahru",
          "Katong",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival & Tiong Bahru Exploration",
            details:
              "Arrive in Singapore and check into your boutique hotel in the hip Tiong Bahru neighborhood. Spend the afternoon exploring its art deco architecture, independent bookshops, and cool cafes. Evening meal at the famous Tiong Bahru Market Hawker Centre.",
          },
          {
            day: 2,
            summary: "Island Escape to Pulau Ubin",
            details:
              "Take a bumboat from Changi Point Ferry Terminal to Pulau Ubin, an island that feels like a step back into 1960s Singapore. Rent bicycles and explore the island's rustic trails, mangrove forests, and the Chek Jawa Wetlands.",
          },
          {
            day: 3,
            summary: "MacRitchie Reservoir & Treetop Walk",
            details:
              "Explore Singapore's 'Green Lung' at the MacRitchie Reservoir Park. Hike the trails and cross the Treetop Walk, a 250m-long suspension bridge offering a bird's-eye view of the forest canopy. Look out for long-tailed macaques and other wildlife.",
          },
          {
            day: 4,
            summary: "Peranakan Culture in Joo Chiat & Katong",
            details:
              "Discover the rich Peranakan culture in the colorful neighborhoods of Joo Chiat and Katong. Admire the beautiful shophouse architecture and feast on Katong Laksa, a famous local noodle dish. In the afternoon, explore the quirky Haw Par Villa theme park.",
          },
          {
            day: 5,
            summary: "Departure",
            details:
              "Enjoy a final 'Kopi' (local coffee) and 'Kaya Toast' for breakfast before heading to the airport for your departure.",
          },
        ],
        includes: [
          "4 nights boutique hotel accommodation",
          "Public transport card (EZ-Link) with stored value",
          "Bicycle rental on Pulau Ubin",
          "Guided food tour in Katong",
          "Meals as specified",
        ],
        excludes: [
          "International flights",
          "Airport transfers",
          "Most meals",
          "Entrance fees to attractions not specified",
          "Travel insurance",
        ],
        notes: [
          "This trip relies heavily on Singapore's excellent public transport system.",
          "A good level of fitness is beneficial for the hiking and cycling activities.",
          "Explore the hawker centres for the most authentic and affordable food.",
        ],
      },
      {
        tripId: 31,
        title: "Singapore for Foodies: A Culinary Adventure",
        tripDescription:
          "A 4-day deep dive into Singapore's legendary food scene. This experience-focused trip will take you from humble hawker stalls awarded Michelin stars to chic cocktail bars, with hands-on cooking classes and curated food tours along the way.",
        duration: "3N-4D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "foodie",
          "experience",
          "cooking class",
          "local life",
          "city break",
        ],
        customizable: true,
        badge: { type: "foodie", text: "Gastronomic Trip" },
        capacity: 10,
        meals: "3 Breakfasts, 2 Lunches, 2 Dinners",
        accommodations:
          "3 nights in a centrally located 4-star hotel, close to transport and food options.",
        baseCity: "Customizable",
        route: ["Singapore", "Chinatown", "Little India", "Katong"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival & Hawker Centre Feast",
            details:
              "Arrive in Singapore, check into your hotel. Kick off your culinary journey with a guided tour of the Maxwell Food Centre, tasting iconic dishes like Hainanese Chicken Rice and Tian Tian. In the evening, explore the Chinatown Night Market.",
          },
          {
            day: 2,
            summary: "Cultural Bites & Cooking Class",
            details:
              "Morning food tour through Little India, sampling savory snacks and sweet treats. In the afternoon, participate in a hands-on cooking class to learn how to make classic Singaporean dishes like Laksa and Chilli Crab.",
          },
          {
            day: 3,
            summary: "Peranakan Flavors & Cocktail Crawl",
            details:
              "Explore the Katong district, the heart of Peranakan culture. Enjoy a traditional Peranakan lunch. In the evening, embark on a guided tour of Singapore's best cocktail bars, learning about the local craft spirits and mixology scene.",
          },
          {
            day: 4,
            summary: "Kopi & Kaya Farewell",
            details:
              "Enjoy a classic Singaporean breakfast of Kaya Toast (coconut jam toast), soft-boiled eggs, and Kopi (local coffee) at a traditional 'kopitiam'. Head to the airport for departure.",
          },
        ],
        includes: [
          "3 nights accommodation",
          "Guided food tours in Maxwell, Little India, and Katong",
          "Hands-on Singaporean cooking class",
          "Guided cocktail bar tour (includes 2-3 drinks)",
          "Meals as specified",
        ],
        excludes: [
          "International flights",
          "Airport transfers",
          "Meals not on the tours",
          "Additional drinks",
          "Travel insurance",
        ],
        notes: [
          "Come with an empty stomach and an adventurous palate!",
          "This trip involves a lot of walking and eating.",
          "Dietary restrictions can be accommodated with advance notice.",
        ],
      },
    ],
  },
  {
    destination_id: 11,
    destination_name: "Malaysia",
    category: "international",
    destination_description:
      "Malaysia is a vibrant and diverse country where different cultures, religions, and cuisines coexist harmoniously. It offers a tale of two halves: the bustling, modern cities and colonial towns of Peninsular Malaysia, and the wild, untamed jungles of Borneo. From towering skyscrapers to ancient rainforests, and from idyllic beaches to flavorful street food, Malaysia is truly Asia in miniature.\n\nKey highlights include:\n- **Kuala Lumpur** - The dynamic capital, home to the iconic Petronas Towers and Batu Caves.\n- **Penang** - A UNESCO World Heritage site famous for its colonial architecture, street art, and legendary street food.\n- **Langkawi** - An archipelago of 99 islands offering beautiful beaches, lush jungles, and duty-free shopping.\n- **Malaysian Borneo (Sabah & Sarawak)** - Home to incredible biodiversity, including orangutans, remote tribes, and Mount Kinabalu.\n- **Cameron Highlands** - A cool, mountainous region with rolling tea plantations and strawberry farms.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      { 
        tripId: 32,
        title: "Luxury Malaysia: Rainforests, Islands & Cityscapes",
        tripDescription:
          "A 10-day journey that combines Malaysia's most luxurious experiences. Stay in 5-star city hotels, an exclusive island resort in Langkawi, and a unique nature retreat in Borneo, enjoying private tours and seamless travel throughout.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "rainforest",
          "beach",
          "nature",
          "wildlife",
          "romance",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Exclusive Escape" },
        capacity: 6,
        meals: "9 Breakfasts, 5 Lunches, 5 Dinners",
        accommodations:
          "3 nights in a 5-star Kuala Lumpur hotel, 3 nights in a luxury beach resort in Langkawi (e.g., The Datai), 3 nights in a premier rainforest lodge in Borneo.",
        baseCity: "Customizable",
        route: [
          "Kuala Lumpur",
          "Langkawi",
          "Borneo (Kota Kinabalu)",
          "Kinabatangan River",
        ],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Kuala Lumpur",
            details:
              "Arrive at Kuala Lumpur International Airport (KUL). Private transfer to your luxury hotel. Evening dinner at a rooftop restaurant with views of the Petronas Towers.",
          },
          {
            day: 2,
            summary: "Private KL City Tour",
            details:
              "Enjoy a private guided tour of Kuala Lumpur's landmarks, including the Petronas Towers (with pre-booked tickets), the National Mosque, and Merdeka Square.",
          },
          {
            day: 3,
            summary: "Fly to Langkawi",
            details:
              "Morning flight to Langkawi. Transfer to your exclusive beachfront resort, nestled between ancient rainforest and the Andaman Sea. Afternoon at leisure.",
          },
          {
            day: 4,
            summary: "Private Mangrove & Eagle Safari",
            details:
              "Embark on a private boat tour through the Kilim Karst Geoforest Park. Explore mangrove forests, spot eagles, and visit a floating fish farm. Enjoy a seafood lunch.",
          },
          {
            day: 5,
            summary: "Langkawi at Leisure",
            details:
              "A full day to relax. Indulge in spa treatments, lounge by the private beach, or take the Langkawi Cable Car up to the Sky Bridge for panoramic views.",
          },
          {
            day: 6,
            summary: "Journey to Borneo",
            details:
              "Fly from Langkawi to Kota Kinabalu, the gateway to Malaysian Borneo. Transfer to a luxury rainforest lodge located on the Kinabatangan River, a haven for wildlife.",
          },
          {
            day: 7,
            summary: "Private River Safaris",
            details:
              "Enjoy private morning and evening river safaris with an expert naturalist guide. Look for proboscis monkeys, orangutans, pygmy elephants, and a huge variety of birdlife.",
          },
          {
            day: 8,
            summary: "Orangutan Sanctuary & Rainforest Canopy",
            details:
              "Visit the Sepilok Orangutan Rehabilitation Centre for a private tour. In the afternoon, experience the rainforest from above on a canopy walkway at the Rainforest Discovery Centre.",
          },
          {
            day: 9,
            summary: "Return to Kota Kinabalu",
            details:
              "After a final morning safari, transfer back to Kota Kinabalu and check into a 5-star resort. Enjoy a sunset cocktail and a farewell seafood barbecue dinner.",
          },
          {
            day: 10,
            summary: "Departure",
            details:
              "Transfer to Kota Kinabalu Airport (BKI) for your departure.",
          },
        ],
        includes: [
          "9 nights in luxury accommodation",
          "Domestic flights (KL-Langkawi, Langkawi-Kota Kinabalu)",
          "All private airport and activity transfers",
          "Private guides and naturalists",
          "All tours and activities as specified",
          "Meals as mentioned",
        ],
        excludes: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Personal expenses",
        ],
        notes: [
          "Wildlife sightings in Borneo are common but not guaranteed.",
          "Booking well in advance is crucial for the best resorts and lodges.",
        ],
      },
      {
        tripId: 33,
        title: "Offbeat Borneo: Tribes, Caves & Headhunter Trails",
        tripDescription:
          "A 12-day rugged adventure into the heart of Sarawak, Borneo. Explore the massive caves of Mulu National Park, trek a former headhunter's trail, and stay in a traditional longhouse with the Iban tribe, experiencing a side of Malaysia few tourists ever see.",
        duration: "11N-12D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "jungle",
          "hiking",
          "caves",
          "culture",
          "homestay",
        ],
        customizable: true,
        badge: { type: "adventure", text: "Jungle Expedition" },
        capacity: 8,
        meals: "11 Breakfasts, 9 Lunches, 8 Dinners",
        accommodations:
          "Hotels in Kuching & Miri, national park lodges in Mulu, basic jungle camp, traditional Iban longhouse.",
        baseCity: "Customizable",
        route: [
          "Kuching",
          "Bako National Park",
          "Miri",
          "Mulu National Park",
          "Batang Ai",
        ],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Kuching, Sarawak",
            details:
              "Arrive in Kuching, the charming capital of Sarawak. Check into your hotel and take a stroll along the waterfront.",
          },
          {
            day: 2,
            summary: "Bako National Park",
            details:
              "Day trip to Bako National Park, known for its diverse ecosystems and wildlife, especially the proboscis monkey. Trek one of the many trails.",
          },
          {
            day: 3,
            summary: "Fly to Miri & Onward to Mulu",
            details:
              "Fly from Kuching to Miri, then take a small propeller plane to Mulu National Park, a UNESCO World Heritage Site.",
          },
          {
            day: 4,
            summary: "Mulu Caves & Bat Exodus",
            details:
              "Explore the massive Deer and Lang Caves. In the evening, witness the spectacular sight of millions of bats exiting the caves in search of food.",
          },
          {
            day: 5,
            summary: "Canopy Walk & Headhunters' Trail Start",
            details:
              "Experience the Mulu Canopy Skywalk. In the afternoon, take a longboat upriver to begin your trek along the historic Headhunters' Trail.",
          },
          {
            day: 6,
            summary: "Trekking the Trail",
            details:
              "A full day of trekking through the remote rainforest, following the path once used by Iban warriors. Overnight in a basic jungle camp (Camp 5).",
          },
          {
            day: 7,
            summary: "End Trek & Return to Miri",
            details:
              "Complete the trek and get picked up by boat. Transfer back to Mulu airport for your flight to Miri.",
          },
          {
            day: 8,
            summary: "Journey to Batang Ai",
            details:
              "An overland journey from Miri towards Batang Ai National Park. Stop at a local market along the way.",
          },
          {
            day: 9,
            summary: "Iban Longhouse Experience",
            details:
              "Take a longboat across a lake to reach a traditional Iban longhouse. Spend the day learning about the Iban culture, customs, and their way of life from your hosts.",
          },
          {
            day: 10,
            summary: "Jungle Activities with the Iban",
            details:
              "Participate in daily activities with the Iban, such as a jungle walk to learn about edible plants, a blowpipe demonstration, and sharing stories over rice wine (tuak).",
          },
          {
            day: 11,
            summary: "Return to Kuching",
            details:
              "Bid farewell to your hosts and travel back to Kuching by boat and road. Farewell dinner.",
          },
          {
            day: 12,
            summary: "Departure",
            details: "Depart from Kuching International Airport (KCH).",
          },
        ],
        includes: [
          "All accommodation as specified",
          "Domestic flights within Sarawak",
          "All transport including longboats",
          "Experienced local and jungle guides",
          "Guided treks and tours",
          "Most meals as specified",
          "National park permits",
        ],
        excludes: [
          "International flights",
          "Travel insurance",
          "Some meals",
          "Tips for local guides",
          "Personal trekking gear",
        ],
        notes: [
          "This is a strenuous trip for experienced and fit adventurers.",
          "Accommodation in the jungle and longhouse is very basic with shared facilities.",
          "Be prepared for humid conditions and insects.",
        ],
      },
      {
        tripId: 34,
        title: "Malaysia Food & Culture Experience: KL, Penang & Malacca",
        tripDescription:
          "A 7-day culinary and cultural deep dive into Peninsular Malaysia. Eat your way through the street food paradise of Penang, explore the historic charm of Malacca, and experience the modern vibrancy of Kuala Lumpur.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "foodie",
          "culture",
          "history",
          "street art",
          "city break",
        ],
        customizable: true,
        badge: { type: "foodie", text: "Culinary Tour" },
        capacity: 16,
        meals: "6 Breakfasts, 2 Lunches, 3 Dinners",
        accommodations:
          "Well-located, stylish 3/4-star hotels and boutique heritage hotels.",
        baseCity: "Customizable",
        route: ["Kuala Lumpur", "Malacca", "Penang"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Kuala Lumpur",
            details:
              "Arrive in KL, check into your hotel. Kick things off with a guided street food tour of Jalan Alor, the city's most famous food street.",
          },
          {
            day: 2,
            summary: "KL's Icons & Batu Caves",
            details:
              "Visit the iconic Petronas Towers and climb the steps to the sacred Hindu shrine at Batu Caves. Afternoon is free to explore on your own.",
          },
          {
            day: 3,
            summary: "Historic Malacca",
            details:
              "Travel by bus to the UNESCO World Heritage city of Malacca. Take a walking tour of its historic center, including the Dutch Square and St. Paul's Hill. Enjoy a river cruise in the evening.",
          },
          {
            day: 4,
            summary: "Malacca's Food & Flight to Penang",
            details:
              "Explore Malacca's Jonker Street and sample famous local dishes like Chicken Rice Balls. In the afternoon, travel to KL airport for a short flight to Penang, the food capital of Malaysia.",
          },
          {
            day: 5,
            summary: "Penang's Heritage, Street Art & Food",
            details:
              "Explore the UNESCO-listed George Town. Hunt for famous street art murals by Ernest Zacharevic, visit a clan house like Khoo Kongsi, and embark on an evening hawker food tour to taste Char Kway Teow, Assam Laksa, and more.",
          },
          {
            day: 6,
            summary: "Penang Hill & Cooking Class",
            details:
              "Take the funicular railway up Penang Hill for panoramic views. In the afternoon, join a hands-on cooking class to learn the secrets of Malaysian cuisine. Farewell dinner at a seafront restaurant.",
          },
          {
            day: 7,
            summary: "Departure",
            details:
              "The tour ends after breakfast. Depart from Penang International Airport (PEN).",
          },
        ],
        includes: [
          "6 nights accommodation",
          "Flight from KL to Penang",
          "Bus from KL to Malacca",
          "Guided food and city tours",
          "Cooking class in Penang",
          "Entrance fees for specified sites",
          "Meals as mentioned",
        ],
        excludes: [
          "International flights",
          "Airport transfers in KL and Penang",
          "Most lunches",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "This is the perfect trip for food lovers!",
          "The itinerary involves city walking and using public transport/ride-sharing apps.",
          "Malaysia's food is a fusion of Malay, Chinese, and Indian influences.",
        ],
      },
    ],
  },
  {
    destination_id: 12,
    destination_name: "Japan",
    category: "international",
    destination_description:
      "Japan is a timeless land where ancient traditions harmoniously coexist with futuristic technology. From the neon-lit energy of Tokyo and the serene temples of Kyoto to the majestic peak of Mount Fuji and the pristine nature of its national parks, Japan offers a journey of profound contrasts and unparalleled beauty.\n\nKey highlights include:\n- **Tokyo** - The bustling capital, a megapolis of iconic landmarks, world-class cuisine, and vibrant pop culture.\n- **Kyoto** - The heart of traditional Japan, with stunning temples, geisha districts, and tranquil gardens.\n- **Mount Fuji** - The iconic, sacred volcano that has inspired artists and pilgrims for centuries.\n- **Shinkansen (Bullet Train)** - Experience futuristic travel on one of the world's most efficient and scenic rail networks.\n- **Onsen (Hot Springs)** - Relax and rejuvenate in natural geothermal hot springs, a quintessential Japanese experience.\n- **Japanese Cuisine** - Savor everything from Michelin-starred sushi to hearty ramen and delicate kaiseki meals.\n\nWhether you seek cultural immersion, culinary adventures, or breathtaking landscapes, Japan promises an impeccably organized and deeply enriching travel experience that will captivate your senses and leave a lasting impression.",
    thumbnail_image: "/assets/png/banner1.jpg",
    hero_image: "/assets/png/banner1.jpg",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 35,
        title: "The Golden Route in Ultimate Luxury: A Journey of Elegance",
        tripDescription:
          "An exquisite 10-day journey through Japan's celebrated 'Golden Route'. Indulge in 5-star accommodations, travel in First Class on the Shinkansen, and experience the culture through private guided tours, exclusive dinners, and stays in a luxurious ryokan with a private onsen.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "culture",
          "romance",
          "foodie",
          "scenic",
          "history",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Ultimate Luxury" },
        capacity: 8,
        meals:
          "9 Breakfasts, 5 Lunches, 6 Dinners including a private Geisha dinner",
        accommodations:
          "4 nights in a 5-star Tokyo hotel (e.g., Park Hyatt), 2 nights in a luxury Hakone ryokan with private onsen, 3 nights in a 5-star Kyoto hotel (e.g., Ritz-Carlton).",
        baseCity: "Customizable",
        route: ["Tokyo", "Hakone", "Mount Fuji", "Kyoto", "Nara"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Tokyo & Skyline Dinner",
            details:
              "Arrive at Narita (NRT) or Haneda (HND) Airport. Be greeted by a private driver for a seamless transfer to your 5-star hotel in Shinjuku. In the evening, enjoy a welcome dinner at a renowned restaurant with panoramic views of the city skyline.",
          },
          {
            day: 2,
            summary: "Private Tour of Tokyo: Tradition & Modernity",
            details:
              "Embark on a full-day private guided tour of Tokyo. Visit the serene Meiji Shrine, explore the historic Asakusa district and Senso-ji Temple, and witness the famous Shibuya Crossing from a prime viewpoint. Lunch at a high-end tempura restaurant.",
          },
          {
            day: 3,
            summary: "Art, Fish Markets & Imperial Palace",
            details:
              "Early morning private tour of the Toyosu Fish Market followed by a world-class sushi breakfast. Later, visit the Imperial Palace East Garden. Afternoon at leisure for high-end shopping in Ginza or exploring the teamLab Borderless digital art museum with pre-booked VIP access.",
          },
          {
            day: 4,
            summary: "To Hakone: Mount Fuji & Private Onsen",
            details:
              "Travel via the 'Romancecar' train or private vehicle to Hakone. Check into a luxurious ryokan. Embark on a private tour of the Hakone Open-Air Museum and take a ropeway ride for views of Mount Fuji and the volcanic Owakudani valley. Return to your ryokan for a multi-course 'kaiseki' dinner.",
          },
          {
            day: 5,
            summary: "Lake Ashi Cruise & Relaxation",
            details:
              "Enjoy a scenic cruise across Lake Ashi on a pirate ship, with views of Mount Fuji and the floating torii gate of Hakone Shrine. The rest of the day is at your leisure to enjoy your private onsen and the serene surroundings of your ryokan.",
          },
          {
            day: 6,
            summary: "First Class Shinkansen to Kyoto",
            details:
              "Take a private transfer to Odawara station and board the Shinkansen (Bullet Train) in a 'Green Car' (First Class) to Kyoto. Upon arrival, you'll be met and transferred to your luxury hotel. Evening walk through the enchanting Gion district.",
          },
          {
            day: 7,
            summary: "Kyoto's Imperial Treasures",
            details:
              "A full-day private tour of Kyoto's UNESCO sites. Visit the golden Kinkaku-ji (Golden Pavilion), the iconic Fushimi Inari Shrine with its thousands of red torii gates, and the tranquil Arashiyama Bamboo Grove.",
          },
          {
            day: 8,
            summary: "Exclusive Geisha Dinner & Tea Ceremony",
            details:
              "Participate in a private, traditional tea ceremony with a tea master. In the evening, experience a true highlight: a private dinner in Gion with an apprentice Geisha (maiko) or a Geisha (geiko), including traditional performances and conversation.",
          },
          {
            day: 9,
            summary: "Nara's Sacred Deer & Temples",
            details:
              "Take a short private excursion to Nara, Japan's first permanent capital. Visit Todai-ji Temple, home to a giant bronze Buddha, and wander through Nara Park, where sacred deer roam freely. Farewell dinner at a Michelin-starred restaurant in Kyoto.",
          },
          {
            day: 10,
            summary: "Departure from Kyoto",
            details:
              "After a final Japanese breakfast, take a private transfer to Kansai International Airport (KIX) or Itami Airport (ITM) for your departure.",
          },
        ],
        includes: [
          "9 nights in 5-star and luxury ryokan accommodations",
          "Private airport and internal transfers with chauffeur",
          "First Class (Green Car) Shinkansen tickets",
          "Private, expert English-speaking guides for all tours",
          "Meals as specified, including exclusive dining experiences",
          "All entrance fees and activity costs mentioned",
        ],
        excludes: [
          "International flights",
          "Travel insurance",
          "Visa fees",
          "Lunches and dinners not specified",
          "Personal expenses and shopping",
        ],
        notes: [
          "This itinerary is fully customizable.",
          "Reservations for top restaurants and exclusive experiences like the Geisha dinner must be made many months in advance.",
          "Ryokan stays offer a traditional Japanese experience with tatami mat floors and futon bedding.",
        ],
      },
      {
        tripId: 36,
        title: "Japan's Alpine Soul: Offbeat Nakasendo & Takayama Trail",
        tripDescription:
          "An 11-day adventurous journey into the heart of the Japan Alps, far from the tourist crowds. Hike a portion of the ancient Nakasendo samurai trail, explore the traditional wooden town of Takayama, and discover the unique culture and crafts of this stunning, less-traveled region.",
        duration: "10N-11D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "hiking",
          "culture",
          "nature",
          "history",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Hidden Japan" },
        capacity: 12,
        meals: "10 Breakfasts, 7 Dinners",
        accommodations:
          "3 nights in Tokyo hotel, 1 night in a traditional 'minshuku' (family-run inn) in Tsumago, 3 nights in a Takayama ryokan, 3 nights in a Kanazawa hotel.",
        baseCity: "Customizable",
        route: [
          "Tokyo",
          "Nagoya",
          "Magome",
          "Tsumago",
          "Takayama",
          "Shirakawa-go",
          "Kanazawa",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Tokyo",
            details:
              "Arrive in Tokyo, make your own way to the hotel (instructions provided). Meet your tour leader and fellow travelers for a welcome briefing and group dinner at an 'izakaya' (Japanese pub).",
          },
          {
            day: 2,
            summary: "Tokyo Exploration",
            details:
              "Explore Tokyo using the efficient public transport system. Visit the bustling Tsukiji Outer Market for a fresh seafood breakfast, wander through the tranquil Hamarikyu Gardens, and explore the trendy Harajuku district.",
          },
          {
            day: 3,
            summary: "Free Day in Tokyo",
            details:
              "A full day to explore Tokyo at your own pace. Optional activities include visiting the Ghibli Museum (tickets must be pre-booked months in advance), exploring the electronics mecca of Akihabara, or taking a day trip to Nikko.",
          },
          {
            day: 4,
            summary: "To the Kiso Valley & Nakasendo Trail",
            details:
              "Activate your Japan Rail Pass. Take the Shinkansen to Nagoya, then a scenic local train to Nakatsugawa. Begin your hike on the Nakasendo trail from Magome to Tsumago (approx. 8km, 3 hours), two beautifully preserved post towns. Overnight in a traditional minshuku in Tsumago with a home-cooked dinner.",
          },
          {
            day: 5,
            summary: "Journey to Takayama",
            details:
              "Morning at leisure to explore Tsumago. Travel by local train and limited express to Takayama, a charming town in the Hida Mountains. Check into your ryokan and take a dip in the onsen.",
          },
          {
            day: 6,
            summary: "Takayama's Old Town & Sake Breweries",
            details:
              "Explore Takayama's morning market. Walk through the Sanmachi Suji, the beautifully preserved old town with its traditional wooden houses. Visit a local sake brewery for a tasting and learn about the brewing process.",
          },
          {
            day: 7,
            summary: "Hida Folk Village",
            details:
              "Visit the Hida Folk Village, an open-air museum showcasing traditional gassho-zukuri (thatched roof) farmhouses from across the region. Afternoon free to explore more of Takayama or hike in the surrounding hills.",
          },
          {
            day: 8,
            summary: "UNESCO Village of Shirakawa-go",
            details:
              "Take a bus to the UNESCO World Heritage village of Shirakawa-go, famous for its iconic gassho-zukuri farmhouses. Explore the village and learn about its unique history and culture. Continue by bus to the historic city of Kanazawa.",
          },
          {
            day: 9,
            summary: "Kanazawa: Gardens & Samurai",
            details:
              "Explore Kanazawa. Visit Kenrokuen, considered one of Japan's three most beautiful landscape gardens. Discover the Nagamachi samurai district and enter a restored samurai residence, the Nomura-ke House.",
          },
          {
            day: 10,
            summary: "Kanazawa's Art & Geisha District",
            details:
              "Visit the 21st Century Museum of Contemporary Art. Explore the Higashi Chaya District, Kanazawa's historic geisha district, and participate in a gold leaf craft workshop. Farewell group dinner.",
          },
          {
            day: 11,
            summary: "Departure",
            details:
              "The tour ends after breakfast. You can use the Shinkansen to travel to Tokyo or Osaka for your departure flight.",
          },
        ],
        includes: [
          "10 nights accommodation in hotels, ryokans, and a minshuku",
          "Meals as specified (10 breakfasts, 7 dinners)",
          "7-Day Japan Rail Pass",
          "Bus tickets for Takayama-Shirakawago-Kanazawa route",
          "Experienced tour leader",
          "Sake tasting and gold leaf workshop",
          "Luggage forwarding service for the Nakasendo trail hike",
        ],
        excludes: [
          "International flights",
          "Public transport within cities",
          "Lunches and some dinners",
          "Entrance fees to museums and sites not specified",
          "Travel insurance",
        ],
        notes: [
          "This is an active trip involving hiking and extensive use of public transport.",
          "Pack light for the overnight Nakasendo hike; main luggage will be forwarded.",
          "Accommodation in minshuku and some ryokans is traditional with shared facilities.",
        ],
      },
      {
        tripId: 37,
        title: "Japan's Neon Pulse: Tokyo to Osaka Pop Culture Trip",
        tripDescription:
          "An electrifying 9-day journey through Japan's modern cultural landscape. Dive headfirst into Tokyo's anime world, Kyoto's manga scene, and Osaka's incredible street food and nightlife. Perfect for the young and young-at-heart, this trip is a high-energy blend of iconic sights and unforgettable experiences.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "pop culture",
          "anime",
          "foodie",
          "city break",
          "nightlife",
        ],
        customizable: true,
        badge: { type: "experience", text: "Modern & Fun" },
        capacity: 20,
        meals: "8 Breakfasts, 3 Dinners",
        accommodations:
          "8 nights in centrally located, stylish and modern 3/4-star hotels or premium hostels.",
        baseCity: "Customizable",
        route: ["Tokyo", "Kyoto", "Osaka"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Tokyo & Shinjuku Nights",
            details:
              "Arrive in Tokyo, make your way to our hotel in Shinjuku. Meet your trip leader and the group. Head out for a welcome dinner followed by an exploration of Shinjuku's neon-lit streets, including the Omoide Yokocho (Memory Lane) and Golden Gai areas.",
          },
          {
            day: 2,
            summary: "Harajuku Fashion & Shibuya Scramble",
            details:
              "Morning visit to the Meiji Shrine before diving into the vibrant youth culture of Harajuku's Takeshita Street. See the latest street styles and try unique snacks. In the evening, head to Shibuya to witness the world's busiest intersection, the Shibuya Scramble, from a viewpoint.",
          },
          {
            day: 3,
            summary: "Akihabara 'Electric Town' & Themed Cafe",
            details:
              "Full immersion into the world of anime, manga, and gaming in Akihabara. Visit multi-story arcades, retro game shops, and figurine stores. Experience one of Japan's famous themed cafes (e.g., Maid Cafe or Animal Cafe).",
          },
          {
            day: 4,
            summary: "Bullet Train to Kyoto & Gion's Charm",
            details:
              "Speed to Kyoto on the Shinkansen. After checking in, take a walking tour through the historic Gion district, Japan's most famous geisha area. Learn about the customs and perhaps spot a geiko or maiko on her way to an appointment.",
          },
          {
            day: 5,
            summary: "Kyoto's Greatest Hits",
            details:
              "A day of iconic sights. Hike through the thousands of torii gates at Fushimi Inari Shrine (perfect for photos), visit the stunning Kinkaku-ji (Golden Pavilion), and wander through the magical Arashiyama Bamboo Grove.",
          },
          {
            day: 6,
            summary: "Manga & Markets",
            details:
              "Visit the Kyoto International Manga Museum, a must-see for any fan of the art form. In the afternoon, explore Nishiki Market, 'Kyoto's Kitchen', and sample various local street foods and delicacies.",
          },
          {
            day: 7,
            summary: "Osaka's Food & Fun",
            details:
              "Take a short train ride to Osaka. Check in and then dive into the culinary heart of Japan with a street food tour of the Dotonbori district. Try takoyaki, okonomiyaki, and kushikatsu under the glare of the Glico Running Man sign.",
          },
          {
            day: 8,
            summary: "Free Day in Osaka",
            details:
              "Your day, your choice! Options include a trip to Universal Studios Japan, exploring the historic Osaka Castle, or shopping in the trendy Amerikamura district. In the evening, gather for a farewell dinner and karaoke night!",
          },
          {
            day: 9,
            summary: "Departure",
            details:
              "The trip ends after breakfast. You can easily access Kansai International Airport (KIX) from central Osaka for your flight home.",
          },
        ],
        includes: [
          "8 nights accommodation",
          "8 breakfasts, 3 dinners",
          "Shinkansen ticket from Tokyo to Kyoto",
          "Local train ticket from Kyoto to Osaka",
          "Experienced Trip Leader",
          "Guided tours in each city",
          "Entry to Kyoto International Manga Museum",
          "Dotonbori street food tour",
        ],
        excludes: [
          "International flights",
          "Airport transfers",
          "Public transport within cities (a transport card like Suica/Pasmo is recommended)",
          "Lunches and most dinners",
          "Optional activities like Universal Studios Japan or themed cafes",
          "Travel insurance",
        ],
        notes: [
          "This is a fast-paced trip designed for travelers aged 18-35.",
          "You will be doing a lot of walking and using public transport, so pack comfortable shoes.",
          "Japan is largely a cash-based society, so it's good to have yen on hand.",
        ],
      },
    ],
  },
  {
    destination_id: 13,
    destination_name: "Northern Lights",
    category: "international",
    destination_description:
      "Venture into the Arctic Circle to witness the Aurora Borealis, one of nature's most spectacular phenomena. This magical region in Finnish Lapland offers a surreal winter wonderland experience, from husky sledding through pristine forests to meeting reindeer herders and staying in iconic glass igloos.\n\nKey highlights include:\n- **Aurora Borealis** - Chase the ethereal dancing green lights in the night sky.\n- **Glass Igloos & Aurora Cabins** - Sleep under the stars and (hopefully) the Northern Lights.\n- **Husky Sledding & Reindeer Safaris** - Experience traditional Arctic modes of transport.\n- **Santa Claus Village** - Cross the Arctic Circle and meet Santa himself in Rovaniemi.\n- **Snowmobile Adventures** - Thrilling rides across frozen lakes and snowy landscapes.\n- **Finnish Saunas & Ice Floating** - Indulge in quintessential Finnish wellness rituals, from intense heat to icy plunges.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 38,
        title: "Arctic Elegance: A Lapland Glass Igloo & Icebreaker Retreat",
        tripDescription:
          "An exclusive 7-day luxury journey through Finnish Lapland, staying in premium glass igloos and boutique lodges. This itinerary features a private Northern Lights photography tour, an arctic icebreaker cruise, and gourmet Lappish dining.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "aurora",
          "romance",
          "adventure",
          "winter",
          "cruise",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Luxury Escape" },
        capacity: 8,
        meals: "6 Breakfasts, 4 Lunches, 6 Dinners",
        accommodations:
          "3 nights in a 5-star Design Hotel/Lodge, 3 nights in a Luxury Glass Igloo Suite with private sauna.",
        baseCity: "Customizable",
        route: ["Rovaniemi", "Kemi", "Arctic Circle", "Levi/Saariselkä"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Rovaniemi & Arctic Design",
            details:
              "Arrive at Rovaniemi Airport (RVN), private transfer to a luxury boutique hotel. Settle in and enjoy a welcome dinner at a top-rated restaurant specializing in modern Lappish cuisine.",
          },
          {
            day: 2,
            summary: "Private Husky Safari & Aurora Photography",
            details:
              "Embark on an exclusive, full-day husky safari, mushing your own team of dogs through the silent, snowy wilderness. Enjoy lunch over an open fire. In the evening, join a professional photographer for a private Northern Lights expedition to learn how to capture the perfect shot.",
          },
          {
            day: 3,
            summary: "Sampo Icebreaker Cruise in Kemi",
            details:
              "Private transfer to Kemi. Board the Sampo Icebreaker for a unique cruise on the frozen Gulf of Bothnia. Witness the immense power of the ship breaking through the ice, and take a dip in the freezing sea in a survival suit. Return to Rovaniemi in the evening.",
          },
          {
            day: 4,
            summary: "Reindeer Farm & Glass Igloo Check-in",
            details:
              "Visit a traditional Sami reindeer farm for a private sleigh ride and cultural insight. Transfer to your luxury glass igloo resort. Enjoy the Arctic night sky from the comfort of your bed.",
          },
          {
            day: 5,
            summary: "Snowmobile Adventure & Smoke Sauna",
            details:
              "Embark on a private, high-powered snowmobile safari to the fells for breathtaking panoramic views. In the evening, experience a traditional Finnish smoke sauna ritual, complete with a roll in the snow or a dip in an ice hole.",
          },
          {
            day: 6,
            summary: "Arctic Spa & Farewell Dinner",
            details:
              "Day of relaxation. Enjoy the Arctic spa facilities at your resort. In the evening, enjoy a farewell gourmet dinner in a unique ice restaurant or a private 'kota' (Lappish hut).",
          },
          {
            day: 7,
            summary: "Departure",
            details:
              "Enjoy a final Finnish breakfast. Private transfer to Rovaniemi airport for your flight home.",
          },
        ],
        includes: [
          "All accommodations as specified",
          "Private airport and internal transfers",
          "Sampo Icebreaker cruise",
          "All private tours and safaris (Husky, Reindeer, Snowmobile)",
          "Private aurora photography tour",
          "Meals as specified",
          "Premium winter gear rental",
        ],
        excludes: [
          "International airfare",
          "Visa fees",
          "Travel insurance",
          "Alcoholic beverages",
          "Personal expenses",
        ],
        notes: [
          "Northern Lights sightings are a natural phenomenon and cannot be guaranteed.",
          "Booking 6-12 months in advance is highly recommended for this level of exclusivity.",
        ],
      },
      {
        tripId: 39,
        title: "Lapland's Remote Soul: A Journey to Inari-Saariselkä",
        tripDescription:
          "An 8-day offbeat adventure that leaves the crowds of Rovaniemi behind. Journey deep into Northern Lapland to explore authentic Sami culture, trek in Urho Kekkonen National Park, and chase the Aurora in one of the world's best viewing locations.",
        duration: "7N-8D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "culture",
          "aurora",
          "nature",
          "adventure",
          "hiking",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Cultural Immersion" },
        capacity: 12,
        meals: "7 Breakfasts, 5 Lunches, 6 Dinners",
        accommodations:
          "3 nights in a family-run guesthouse in Inari, 2 nights in a wilderness cabin, 2 nights in a hotel in Saariselkä.",
        baseCity: "Customizable",
        route: ["Ivalo", "Inari", "Saariselkä", "Urho Kekkonen National Park"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Ivalo & Journey to Inari",
            details:
              "Arrive at Ivalo (IVL), the northernmost airport in Finland. Transfer to a cozy guesthouse in Inari, the heart of Sami culture. Welcome dinner and briefing.",
          },
          {
            day: 2,
            summary: "Sami Culture & Siida Museum",
            details:
              "Visit the Siida Museum to learn about the history and culture of the Sami people. Afternoon with a local Sami family, learning about reindeer husbandry. Evening Northern Lights hunt on snowshoes.",
          },
          {
            day: 3,
            summary: "Ice Fishing on Lake Inari",
            details:
              "Travel by snowmobile-pulled sleigh to a prime spot on the vast, frozen Lake Inari. Learn the art of ice fishing from a local and enjoy a lunch of your hopefully successful catch, grilled over a campfire.",
          },
          {
            day: 4,
            summary: "Transfer to Wilderness Cabin",
            details:
              "Journey to a remote wilderness cabin, away from all light pollution. Spend the afternoon exploring the pristine surroundings on cross-country skis. The evening is dedicated to watching for the Aurora Borealis.",
          },
          {
            day: 5,
            summary: "Husky Sledding Expedition",
            details:
              "Transfer to a local husky kennel. After a lesson, embark on a full-day sledding expedition through the taiga forest, driving your own team of huskies. Return to your wilderness cabin.",
          },
          {
            day: 6,
            summary: "Saariselkä & National Park Snowshoeing",
            details:
              "Travel south to the resort town of Saariselkä. Check into your hotel. In the afternoon, embark on a guided snowshoeing hike into Urho Kekkonen National Park, known for its beautiful, snow-laden trees.",
          },
          {
            day: 7,
            summary: "Free Day & Aurora Sleigh Ride",
            details:
              "Day at leisure to relax, try the local toboggan run, or revisit a favorite activity. In the evening, a final Aurora hunt in a heated sleigh pulled by a snowmobile, taking you to the best viewpoints.",
          },
          {
            day: 8,
            summary: "Departure from Ivalo",
            details:
              "After breakfast, transfer back to Ivalo Airport for your departure, filled with authentic Arctic memories.",
          },
        ],
        includes: [
          "All accommodations as specified",
          "All transfers from/to Ivalo airport",
          "Meals as mentioned",
          "All guided activities and equipment (Snowshoeing, Skiing, Husky Sledding, Ice Fishing)",
          "Local Sami guide for cultural experiences",
          "Entrance to Siida Museum",
        ],
        excludes: [
          "Flights to/from Ivalo",
          "Travel insurance",
          "Some lunches",
          "Personal expenses",
          "Alcoholic beverages",
        ],
        notes: [
          "This trip requires a moderate level of physical fitness.",
          "Accommodations are authentic and cozy, not luxurious.",
          "Be prepared for very cold temperatures (-5°C to -30°C).",
        ],
      },
      {
        tripId: 40,
        title: "Lapland Winter Wonderland Adventure",
        tripDescription:
          "A 6-day experience-focused trip based in Rovaniemi, packed with Lapland's most iconic activities. Perfect for first-timers, families, and adventure seekers looking for a blend of thrills, magic, and culture.",
        duration: "5N-6D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "adventure",
          "aurora",
          "winter",
          "family",
          "experience",
          "santa claus",
        ],
        customizable: true,
        badge: { type: "experience", text: "Action-Packed" },
        capacity: 20,
        meals: "5 Breakfasts, 3 Dinners",
        accommodations:
          "Comfortable 3/4-star hotels or apartments in/near Rovaniemi.",
        baseCity: "Rovaniemi",
        route: ["Rovaniemi", "Arctic Circle", "Ranua"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Rovaniemi, Gateway to the Arctic",
            details:
              "Arrive at Rovaniemi airport and transfer to your hotel. Settle in and receive your thermal clothing for the week. Evening welcome meeting and dinner.",
          },
          {
            day: 2,
            summary: "Husky Sledding & Reindeer Farm",
            details:
              "Morning visit to a husky farm for an exhilarating 10km sled ride. In the afternoon, enjoy a peaceful reindeer sleigh ride through the forest and learn about their importance in Lappish culture at a local farm.",
          },
          {
            day: 3,
            summary: "Santa's Village & Northern Lights Hunt",
            details:
              "Spend the day at Santa Claus Village. Meet Santa, send postcards from the official post office, and cross the magical Arctic Circle line. In the evening, embark on a guided Northern Lights hunt by bus to locations with clear skies.",
          },
          {
            day: 4,
            summary: "Snowmobile Safari",
            details:
              "Get your adrenaline pumping with a 2-hour snowmobile safari across frozen rivers and through snow-covered forests. Afternoon free to explore Rovaniemi, visit the Arktikum museum, or relax.",
          },
          {
            day: 5,
            summary: "Arctic Wildlife & Finnish Sauna",
            details:
              "Day trip to Ranua Wildlife Park, the world's northernmost zoo, to see polar bears, lynx, wolverines, and other Arctic animals in their naturalistic habitat. Return for a traditional Finnish sauna experience at your hotel or a local facility.",
          },
          {
            day: 6,
            summary: "Departure",
            details:
              "Enjoy a final breakfast before transferring to the airport for your flight home, with a camera full of winter wonderland memories.",
          },
        ],
        includes: [
          "Accommodation for 5 nights",
          "Airport transfers in Rovaniemi",
          "Meals as specified",
          "All mentioned group activities and safaris",
          "Thermal clothing and gear for the entire stay",
          "Professional English-speaking guides",
          "Entrance to Ranua Wildlife Park",
        ],
        excludes: [
          "Flights to/from Rovaniemi",
          "Lunches and dinners not specified",
          "Visa",
          "Travel Insurance",
          "Personal expenses",
        ],
        notes: [
          "The order of activities may change due to weather conditions.",
          "Driving a snowmobile requires a valid car driving license.",
          "This is an active trip suitable for all age groups with a spirit for adventure.",
        ],
      },
    ],
  },
  {
    destination_id: 14,
    destination_name: "Europe",
    category: "international",
    destination_description:
      "Europe is a continent of unparalleled diversity, where ancient history, groundbreaking art, and breathtaking landscapes converge. From the romantic avenues of Paris to the majestic peaks of the Swiss Alps and the sun-drenched coasts of the Mediterranean, a journey through Europe is a rite of passage. Each country offers a unique cultural tapestry, a distinct culinary identity, and a wealth of experiences waiting to be discovered.\n\nKey highlights include:\n- **Iconic Capitals** - Explore the world-class museums, historic landmarks, and vibrant street life of cities like Paris, Rome, London, and Prague.\n- **Stunning Landscapes** - Witness the dramatic fjords of Norway, the rolling vineyards of Tuscany, and the pristine lakes of Switzerland.\n- **Rich History** - Step back in time at ancient Greek ruins, Roman colosseums, and medieval castles.\n- **Efficient Travel** - Traverse the continent with ease using its extensive and scenic high-speed rail network.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 41,
        title: "The Grand European Tour: Paris, Alps & Italian Lakes",
        tripDescription:
          "An opulent 12-day discovery of Europe's most elegant destinations. Travel by first-class rail, stay in legendary 5-star hotels, and enjoy private, in-depth tours of Parisian art, Swiss mountain peaks, and the romantic Italian Lakes.",
        duration: "11N-12D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "culture",
          "history",
          "romance",
          "scenic",
          "train",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Ultimate Luxury" },
        capacity: 8,
        meals: "11 Breakfasts, 5 Lunches, 6 Dinners",
        accommodations:
          "11 nights in landmark 5-star hotels (e.g., Le Meurice in Paris, Victoria Jungfrau in Interlaken, Grand Hotel Tremezzo on Lake Como).",
        baseCity: "Customizable",
        route: ["Paris", "Interlaken", "Jungfrau", "Lake Como", "Milan"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Paris, the City of Light",
            details:
              "Arrive at CDG Airport, private transfer to your palace hotel. Evening welcome dinner cruise on a private yacht on the Seine with champagne.",
          },
          {
            day: 2,
            summary: "Private Louvre & Parisian Art",
            details:
              "Enjoy a private, before-hours tour of the Louvre with an art historian, focusing on your specific interests. Afternoon at leisure for shopping on the Rue Saint-Honoré with a personal shopper.",
          },
          {
            day: 3,
            summary: "Versailles & Gastronomy",
            details:
              "Full-day private excursion to the Palace of Versailles. Evening gourmet dining experience at a 3-Michelin-star restaurant.",
          },
          {
            day: 4,
            summary: "First Class to the Swiss Alps",
            details:
              "Travel by first-class TGV Lyria train to Interlaken, Switzerland. Private transfer to your luxury hotel with stunning mountain views.",
          },
          {
            day: 5,
            summary: "Helicopter Tour over the Alps & Jungfrau",
            details:
              "Private guided excursion to Jungfraujoch, the 'Top of Europe'. The highlight is a breathtaking private helicopter tour over the Eiger, Mönch, and Jungfrau peaks and the Aletsch Glacier.",
          },
          {
            day: 6,
            summary: "Leisure in Interlaken",
            details:
              "A day at leisure. Indulge in the hotel's spa, take a boat trip on Lake Thun, or explore the charming town of Grindelwald at your own pace.",
          },
          {
            day: 7,
            summary: "Scenic Train to the Italian Lakes",
            details:
              "Travel through the Alps on a scenic first-class train to Milan, connecting to a private transfer to your iconic hotel on the shores of Lake Como.",
          },
          {
            day: 8,
            summary: "Private Riva Boat on Lake Como",
            details:
              "Explore Lake Como in style on a classic Riva speedboat. Visit the charming villages of Bellagio and Varenna, and tour the magnificent Villa del Balbianello.",
          },
          {
            day: 9,
            summary: "Italian Cooking & Villa Carlotta",
            details:
              "Private Italian cooking class focusing on regional cuisine. In the afternoon, visit the beautiful gardens of Villa Carlotta.",
          },
          {
            day: 10,
            summary: "Milan's Fashion & Art",
            details:
              "Day trip to Milan. Enjoy a private viewing of Leonardo da Vinci's 'The Last Supper' and a private tour of La Scala opera house. Afternoon for exclusive shopping in the Quadrilatero della Moda.",
          },
          {
            day: 11,
            summary: "Leisure & Farewell Dinner",
            details:
              "A final day to relax by the lake. Farewell dinner at a Michelin-starred lakeside restaurant.",
          },
          {
            day: 12,
            summary: "Arrivederci Italia",
            details:
              "After breakfast, enjoy a private transfer to Milan Malpensa Airport (MXP) for your departure.",
          },
        ],
        includes: [
          "11 nights in 5-star luxury accommodations",
          "First-class train travel between cities",
          "All private transfers and private yacht/boat tours",
          "Private guided tours with expert guides",
          "Meals as specified, including Michelin-star dining",
          "Private helicopter tour",
        ],
        excludes: [
          "International flights",
          "Visas",
          "Travel insurance",
          "Lunches and dinners not specified",
          "Personal expenses",
        ],
        notes: [
          "This itinerary can be fully customized.",
          "Pre-booking of galleries and special tours is essential.",
          "Ideal for celebrating a special occasion.",
        ],
      },
      {
        tripId: 42,
        title: "Bavaria & Austria's Offbeat Alpine Route",
        tripDescription:
          "A 10-day self-drive or rail journey that bypasses the major capitals for the heart of the Alps. Explore fairytale castles, hike to pristine lakes, wander through charming villages like Hallstatt, and soak in the culture of Bavaria and the Austrian Tyrol.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "road trip",
          "hiking",
          "culture",
          "nature",
          "mountains",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Alpine Road Trip" },
        capacity: 14,
        meals: "9 Breakfasts, 3 Dinners",
        accommodations:
          "9 nights in carefully selected boutique hotels, charming alpine guesthouses (Gasthof), and family-run inns.",
        baseCity: "Munich",
        route: [
          "Munich",
          "Füssen",
          "Garmisch-Partenkirchen",
          "Innsbruck",
          "Salzburg",
          "Hallstatt",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Munich",
            details:
              "Arrive in Munich, Germany. Pick up your rental car or get acquainted with the train system. Explore the English Garden and enjoy a traditional Bavarian dinner at a beer hall.",
          },
          {
            day: 2,
            summary: "Fairytale Castles of Bavaria",
            details:
              "Drive or take a train to Füssen. Visit the iconic Neuschwanstein Castle, the inspiration for Disney's Sleeping Beauty castle. Also explore the nearby Hohenschwangau Castle.",
          },
          {
            day: 3,
            summary: "Zugspitze & Garmisch-Partenkirchen",
            details:
              "Travel to the classic alpine town of Garmisch-Partenkirchen. Take the cable car to the top of the Zugspitze, Germany's highest peak, for incredible 360-degree views.",
          },
          {
            day: 4,
            summary: "Cross into Austria: Innsbruck",
            details:
              "A scenic drive across the border to Innsbruck, the capital of the Alps. Explore the charming Old Town with its Golden Roof and ride the Nordkette cable car for stunning city and mountain views.",
          },
          {
            day: 5,
            summary: "Hiking in the Tyrol",
            details:
              "Day dedicated to hiking in the beautiful Tyrolean Alps. Choose a trail based on your fitness level, perhaps a scenic walk to a mountain hut (Alm) for a traditional lunch.",
          },
          {
            day: 6,
            summary: "Grossglockner High Alpine Road to Salzburg",
            details:
              "Embark on one of Europe's most spectacular drives, the Grossglockner High Alpine Road (seasonal, May-Oct). Stop at numerous viewpoints before arriving in Salzburg, the city of Mozart.",
          },
          {
            day: 7,
            summary: "Salzburg & The Sound of Music",
            details:
              "Explore Salzburg's UNESCO-listed Old Town, Hohensalzburg Fortress, and Mozart's birthplace. Fans can take a 'Sound of Music' tour to see the famous filming locations.",
          },
          {
            day: 8,
            summary: "The Lake District & Hallstatt",
            details:
              "Drive into the beautiful Salzkammergut (Lake District). Visit the impossibly picturesque village of Hallstatt. Optional visit to the historic salt mines.",
          },
          {
            day: 9,
            summary: "Berchtesgaden & Return to Munich",
            details:
              "Cross back into Germany and visit Berchtesgaden National Park. Take a boat on the emerald-green Königssee lake. In the afternoon, complete the scenic loop and drive back to Munich.",
          },
          {
            day: 10,
            summary: "Departure",
            details: "Depart from Munich Airport (MUC).",
          },
        ],
        includes: [
          "9 nights accommodation",
          "Daily breakfasts, 3 dinners",
          "Rental car for 9 days (optional category) or a rail pass",
          "Entrance fees to Neuschwanstein Castle",
        ],
        excludes: [
          "International flights",
          "Fuel, tolls, and parking for rental car",
          "Most meals and drinks",
          "Cable car tickets and other entrance fees",
          "Travel insurance",
        ],
        notes: [
          "This itinerary is best from late May to early October when the Grossglockner road is open.",
          "An International Driving Permit is recommended for drivers.",
          "The itinerary can be easily adapted for train travel.",
        ],
      },
      {
        tripId: 43,
        title: "European Magic: Amsterdam, Berlin & Prague",
        tripDescription:
          "A 10-day, high-energy journey through three of Europe's coolest and most vibrant capitals. This trip is designed for social, young-at-heart travelers, blending iconic history with cutting-edge art, unforgettable nightlife, and authentic local experiences.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "city break",
          "nightlife",
          "history",
          "culture",
          "art",
        ],
        customizable: true,
        badge: { type: "experience", text: "City Hopper" },
        capacity: 25,
        meals: "9 Breakfasts, 3 Dinners",
        accommodations:
          "9 nights in centrally located, stylish and social 3/4-star hotels or premium hostels.",
        baseCity: "Amsterdam",
        route: ["Amsterdam", "Berlin", "Prague"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Welcome to Amsterdam!",
            details:
              "Arrive in Amsterdam, check into our hotel. Meet your Trip Manager and fellow travelers. Kick things off with a classic canal cruise to see the city from the water, followed by a welcome dinner.",
          },
          {
            day: 2,
            summary: "Amsterdam's Culture & Canals",
            details:
              "Morning guided bike tour of the city, exploring neighborhoods like the Jordaan. Afternoon is free to visit the Anne Frank House (book far in advance!), the Rijksmuseum, or the Van Gogh Museum.",
          },
          {
            day: 3,
            summary: "Free Day & Travel to Berlin",
            details:
              "Morning free for last-minute exploration. In the afternoon, take a comfortable train to Berlin, a city of history and creativity. Check in and head out for dinner in the trendy Kreuzberg district.",
          },
          {
            day: 4,
            summary: "Berlin's Past & Present",
            details:
              "A guided historical walking tour covering the Brandenburg Gate, the Reichstag, the Holocaust Memorial, and remnants of the Berlin Wall. Learn about the city's incredible transformation.",
          },
          {
            day: 5,
            summary: "Berlin's Alternative Side",
            details:
              "Explore Berlin's famous street art scene with a local guide, including the East Side Gallery. Afternoon free to explore vintage shops, art galleries, or relax at Tempelhof Field, a former airport turned public park.",
          },
          {
            day: 6,
            summary: "Train to Prague",
            details:
              "Take a scenic morning train to Prague, the 'City of a Hundred Spires'. After checking in, take a walk across the iconic Charles Bridge at sunset and get your first views of Prague Castle.",
          },
          {
            day: 7,
            summary: "Prague's Fairytale City",
            details:
              "Guided walking tour of Prague's Old Town Square, including the Astronomical Clock. Explore the vast Prague Castle complex and St. Vitus Cathedral.",
          },
          {
            day: 8,
            summary: "Prague at Your Pace",
            details:
              "Free day in Prague. Optional activities include visiting the Jewish Quarter, taking a river cruise on the Vltava, or exploring the quirky John Lennon Wall. Enjoy a traditional Czech dinner and a taste of the famous local beer.",
          },
          {
            day: 9,
            summary: "Day Trip Option & Farewell",
            details:
              "Optional day trip to the hauntingly beautiful Kutná Hora Bone Church. Alternatively, spend the day exploring more of Prague. Farewell party in the evening to celebrate an amazing trip.",
          },
          {
            day: 10,
            summary: "Departure",
            details:
              "The trip ends after breakfast. Say goodbye to your new friends and depart from Prague.",
          },
        ],
        includes: [
          "9 nights accommodation",
          "All train travel between cities",
          "9 breakfasts, 3 dinners",
          "Experienced Trip Manager",
          "Guided walking tours in each city",
          "Amsterdam canal cruise and bike tour",
        ],
        excludes: [
          "Flights to Amsterdam/from Prague",
          "Airport transfers",
          "Public transport within cities",
          "Most lunches and dinners",
          "Optional excursions like museums or day trips",
          "Travel insurance",
        ],
        notes: [
          "This is a fast-paced trip for social travelers aged 18-39.",
          "Book museum tickets and the Anne Frank House well in advance.",
          "Pack comfortable shoes as you'll be doing a lot of walking.",
        ],
      },
    ],
  },
  {
    destination_id: 15,
    destination_name: "France",
    category: "international",
    destination_description:
      "France is a country of timeless allure, captivating visitors with its iconic landmarks, world-renowned cuisine, and diverse landscapes. From the romantic ambiance of Paris to the sun-drenched lavender fields of Provence and the glamorous coastline of the French Riviera, France offers an endless array of experiences.\n\nKey highlights include:\n- **Paris** - The Eiffel Tower, Louvre Museum, Notre Dame, and charming cobblestone streets.\n- **Provence** - Rolling vineyards, fragrant lavender fields, and historic towns like Avignon and Arles.\n- **French Riviera (Côte d'Azur)** - Glamorous beaches in Nice, Cannes, and Saint-Tropez.\n- **Loire Valley** - A fairy-tale region of magnificent châteaux and gardens.\n- **Normandy** - Historic D-Day beaches, Mont Saint-Michel, and delicious cheese and cider.\n\nIndulge in haute couture, savor exquisite wines and cheeses, and immerse yourself in a culture that has shaped the course of Western civilization. A journey through France is a feast for all the senses.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 44,
        title: "Châteaux, Wine & Gastronomy: A Luxury Tour of France",
        tripDescription:
          "An indulgent 10-day journey through France's most elegant regions. Stay in luxurious converted châteaux in the Loire Valley and a 5-star hotel in Bordeaux, enjoy private tours of grand estates, and savor exclusive tastings at prestigious wineries.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: ["luxury", "romance", "history", "foodie", "wine", "chateau"],
        customizable: true,
        badge: { type: "luxury", text: "Royal Experience" },
        capacity: 6,
        meals: "9 Breakfasts, 5 Lunches, 6 Dinners",
        accommodations:
          "3 nights in a 5-star Paris hotel, 3 nights in a 5-star Château-hotel in the Loire Valley, 3 nights in a luxury wine estate hotel in Bordeaux.",
        baseCity: "Paris",
        route: ["Paris", "Loire Valley", "Bordeaux", "Saint-Émilion"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Paris",
            details:
              "Arrive at CDG Airport, private transfer to your palace hotel. Welcome gourmet dinner at a Michelin-starred restaurant.",
          },
          {
            day: 2,
            summary: "Art & Haute Couture in Paris",
            details:
              "Private guided tour of the Musée d'Orsay. Afternoon private tour of a haute couture fashion house or a bespoke perfume creation workshop.",
          },
          {
            day: 3,
            summary: "Transfer to Loire Valley & Château de Chambord",
            details:
              "You will be met by your private driver for a comfortable transfer to your luxurious château-hotel in the Loire Valley. In the afternoon, a private tour of the magnificent Château de Chambord.",
          },
          {
            day: 4,
            summary: "Chenonceau & Hot Air Balloon Ride",
            details:
              "Explore the elegant Château de Chenonceau. In the afternoon, visit a top Vouvray wine estate for a private tasting. Conclude the day with a magical sunset hot air balloon ride over the valley.",
          },
          {
            day: 5,
            summary: "First Class Train to Bordeaux",
            details:
              "Private transfer to the station for a first-class TGV journey to Bordeaux. Check into your luxury wine estate hotel. Evening wine pairing dinner at the estate.",
          },
          {
            day: 6,
            summary: "The Grands Crus of Médoc",
            details:
              "A full-day private wine tour along the prestigious 'Route des Châteaux' in the Médoc region. Enjoy private tours and tastings at two or three classified growth estates (e.g., Margaux, Pauillac).",
          },
          {
            day: 7,
            summary: "UNESCO Heritage of Saint-Émilion",
            details:
              "Private tour of the charming medieval village of Saint-Émilion, a UNESCO World Heritage site. Explore the underground monolithic church and enjoy tastings at a Premier Grand Cru Classé winery.",
          },
          {
            day: 8,
            summary: "Arcachon Bay & Oyster Tasting",
            details:
              "Excursion to Arcachon Bay. Climb the Dune du Pilat, Europe's tallest sand dune, for spectacular views. Enjoy a fresh oyster tasting lunch at an oyster farm in Cap Ferret.",
          },
          {
            day: 9,
            summary: "Bordeaux City & Cité du Vin",
            details:
              "Explore the elegant city of Bordeaux. Visit the immersive Cité du Vin museum for a journey through the world of wine. Farewell dinner in Bordeaux.",
          },
          {
            day: 10,
            summary: "Departure",
            details:
              "After breakfast, enjoy a private transfer to Bordeaux–Mérignac Airport (BOD) for your departure.",
          },
        ],
        includes: [
          "9 nights in luxury château/hotel accommodation",
          "Private chauffeur-driven vehicle throughout",
          "First-class TGV ticket",
          "Meals as specified",
          "All private guided tours and exclusive wine tastings",
          "Hot air balloon ride",
        ],
        excludes: [
          "International flights",
          "Visas",
          "Travel insurance",
          "Some meals",
          "Personal expenses",
        ],
        notes: [
          "Tours at top Bordeaux wine estates must be booked far in advance.",
          "This itinerary is ideal for connoisseurs of wine, food, and history.",
        ],
      },
      {
        tripId: 45,
        title: "Offbeat France: Secrets of Brittany & Normandy",
        tripDescription:
          "A 12-day self-drive road trip through the rugged, historic, and delicious regions of Normandy and Brittany. Discover dramatic coastlines, ancient Celtic legends, the historic D-Day beaches, and indulge in the region's famous seafood, cider, and crêpes.",
        duration: "11N-12D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "road trip",
          "history",
          "culture",
          "scenic",
          "foodie",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Coastal Road Trip" },
        capacity: 10,
        meals: "11 Breakfasts, 4 Dinners",
        accommodations:
          "11 nights in charming guesthouses (chambres d'hôtes), boutique hotels, and historic inns.",
        baseCity: "Paris",
        route: [
          "Paris",
          "Giverny",
          "Honfleur",
          "Bayeux",
          "Mont Saint-Michel",
          "Saint-Malo",
          "Pink Granite Coast",
          "Quimper",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Paris to Giverny & Honfleur",
            details:
              "Pick up your rental car in Paris. Drive to Giverny to visit Monet's famous house and gardens. Continue to the picturesque port town of Honfleur in Normandy.",
          },
          {
            day: 2,
            summary: "The D-Day Landing Beaches",
            details:
              "Base yourself in Bayeux. Spend a full day on a guided tour of the historic D-Day sites: Omaha Beach, the American Cemetery, Pointe du Hoc, and Arromanches.",
          },
          {
            day: 3,
            summary: "Bayeux Tapestry & Cheese Route",
            details:
              "Visit the famous Bayeux Tapestry. In the afternoon, drive the 'Route du Fromage' and sample local Camembert, Livarot, and Pont-l'Évêque cheeses at a local farm.",
          },
          {
            day: 4,
            summary: "The Wonder of Mont Saint-Michel",
            details:
              "Drive to Mont Saint-Michel, the iconic tidal island abbey. Explore the abbey and the winding village streets. Stay overnight nearby to see it lit up at night.",
          },
          {
            day: 5,
            summary: "Walled City of Saint-Malo",
            details:
              "Cross into Brittany and drive to the formidable walled port city of Saint-Malo. Walk the ramparts and explore the old town. Enjoy a classic seafood platter for dinner.",
          },
          {
            day: 6,
            summary: "Cap Fréhel & Pink Granite Coast",
            details:
              "Drive along the stunning Emerald Coast. Hike at the dramatic cliffs of Cap Fréhel. Continue to the unique Pink Granite Coast (Côte de Granit Rose) and explore the area around Ploumanac'h.",
          },
          {
            day: 7,
            summary: "Parish Closes & Breton Culture",
            details:
              "Drive inland to explore the 'Parish Closes', elaborate church enclosures unique to Brittany, showcasing incredible stone carving and craftsmanship.",
          },
          {
            day: 8,
            summary: "Finistère & Pointe du Raz",
            details:
              "Journey to the 'end of the earth' at Pointe du Raz, Brittany's dramatic westernmost point. Explore the nearby town of Quimper, known for its pottery and Breton culture.",
          },
          {
            day: 9,
            summary: "Carnac Standing Stones",
            details:
              "Drive to Carnac to witness the incredible sight of over 3,000 prehistoric standing stones (megaliths), dating back to 4500 BC.",
          },
          {
            day: 10,
            summary: "Vannes & Gulf of Morbihan",
            details:
              "Explore the beautiful medieval town of Vannes and the protected inland sea of the Gulf of Morbihan with its many islands.",
          },
          {
            day: 11,
            summary: "Return Journey via Chartres",
            details:
              "Begin the drive back towards Paris. Break the journey in the city of Chartres to visit its magnificent UNESCO-listed cathedral, famous for its stained glass windows.",
          },
          {
            day: 12,
            summary: "Departure from Paris",
            details:
              "Complete the drive to Charles de Gaulle Airport (CDG), return your rental car, and depart.",
          },
        ],
        includes: [
          "11 nights accommodation",
          "Daily breakfasts, 4 dinners",
          "Guided D-Day tour",
        ],
        excludes: [
          "International flights",
          "Rental car and fuel",
          "Most lunches and dinners",
          "Entrance fees not specified",
          "Travel insurance",
        ],
        notes: [
          "An International Driving Permit is required.",
          "This itinerary is packed with history and natural beauty, offering a deep dive into France's coastal regions.",
        ],
      },
      {
        tripId: 46,
        title: "South of France Summer Experience",
        tripDescription:
          "A 9-day sun-soaked adventure through Provence and the French Riviera. Discover glamorous beaches in Nice, experience the lavender fields of Provence, kayak in the Verdon Gorge, and soak up the vibrant summer atmosphere of the South of France.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "summer",
          "beach",
          "adventure",
          "scenic",
          "lavender",
        ],
        customizable: true,
        badge: { type: "experience", text: "Summer Escape" },
        capacity: 18,
        meals: "8 Breakfasts, 3 Dinners",
        accommodations: "8 nights in well-located, stylish 3/4-star hotels.",
        baseCity: "Nice",
        route: [
          "Nice",
          "Monaco",
          "Èze",
          "Verdon Gorge",
          "Aix-en-Provence",
          "Valensole Plateau",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Nice",
            details:
              "Arrive at Nice Côte d'Azur Airport (NCE). Check into your hotel and take a stroll along the famous Promenade des Anglais. Welcome dinner with the group.",
          },
          {
            day: 2,
            summary: "Nice & Saint-Paul de Vence",
            details:
              "Explore Nice's Old Town (Vieux Nice) and its colourful Cours Saleya flower market. In the afternoon, visit the charming hilltop artist village of Saint-Paul de Vence.",
          },
          {
            day: 3,
            summary: "Glamour of Monaco & Èze",
            details:
              "Day trip along the stunning coast. Visit the medieval village of Èze with its exotic garden. Continue to the glamorous Principality of Monaco to see the Prince's Palace and Monte Carlo Casino.",
          },
          {
            day: 4,
            summary: "The Grand Canyon of Verdon",
            details:
              "Travel inland to the spectacular Gorges du Verdon. Spend the afternoon kayaking or paddleboarding on the turquoise waters of the Sainte-Croix Lake.",
          },
          {
            day: 5,
            summary: "Provence & Lavender Fields",
            details:
              "Drive through the Valensole Plateau, home to the most famous and expansive lavender fields (best from mid-June to mid-July). Visit a local distillery. Continue to the elegant city of Aix-en-Provence.",
          },
          {
            day: 6,
            summary: "Aix-en-Provence & Cézanne",
            details:
              "Explore Aix-en-Provence, following a walking trail in the footsteps of the painter Paul Cézanne. Enjoy the city's fountains, markets, and charming streets.",
          },
          {
            day: 7,
            summary: "Lourmarin & the Luberon Valley",
            details:
              "Explore the beautiful Luberon region, visiting one of the 'Most Beautiful Villages of France', Lourmarin. Enjoy the Provençal way of life.",
          },
          {
            day: 8,
            summary: "Return to Nice via the Coast",
            details:
              "Drive back to Nice, taking a scenic coastal route. Enjoy a final afternoon on the beach. Farewell dinner in Nice.",
          },
          {
            day: 9,
            summary: "Departure",
            details: "The tour ends after breakfast. Depart from Nice.",
          },
        ],
        includes: [
          "8 nights accommodation",
          "Transport in a comfortable minibus",
          "Meals as specified",
          "Guided tours and orientation walks",
          "Kayaking in the Verdon Gorge",
        ],
        excludes: [
          "International flights",
          "Most lunches and dinners",
          "Entrance fees to museums",
          "Travel insurance",
          "Tips for guide/driver",
        ],
        notes: [
          "The best time for this trip is June and July to see the lavender in full bloom.",
          "This is an active trip with opportunities for swimming and hiking.",
        ],
      },
    ],
  },
  {
    destination_id: 16,
    destination_name: "Switzerland",
    category: "international",
    destination_description:
      "Switzerland is a land of dramatic natural beauty, where majestic snow-capped Alps, pristine turquoise lakes, and rolling green meadows create a picture-perfect landscape. Renowned for its efficiency, cleanliness, and quality, it's a paradise for outdoor enthusiasts and luxury seekers alike.\n\nKey highlights include:\n- **The Matterhorn** - The iconic, pyramid-shaped peak towering over the car-free village of Zermatt.\n- **Jungfrau Region** - Home to stunning peaks like Eiger, Mönch, and Jungfrau, and charming towns like Interlaken and Grindelwald.\n- **Scenic Train Journeys** - Ride the world-famous Glacier Express or Bernina Express through breathtaking landscapes.\n- **Pristine Lakes** - Cruise on Lake Geneva, Lake Lucerne, or the twin lakes of Thun and Brienz.\n- **World-Class Chocolate & Cheese** - Indulge in the country's finest culinary exports.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 47,
        title: "Swiss Alps in Ultimate Luxury: The Grand Train Tour",
        tripDescription:
          "An 8-day journey of a lifetime across Switzerland aboard its most legendary panoramic trains in Excellence or Prestige Class. Stay in 5-star palace hotels, enjoy gourmet dining, and witness the country's most spectacular scenery in unparalleled comfort and style.",
        duration: "7N-8D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "scenic",
          "train",
          "romance",
          "nature",
          "mountains",
        ],
        customizable: true,
        badge: { type: "luxury", text: "First Class" },
        capacity: 6,
        meals: "7 Breakfasts, 4 Multi-course Lunches on train, 4 Dinners",
        accommodations:
          "7 nights in Junior Suites at iconic 5-star hotels (e.g., Badrutt's Palace in St. Moritz, Mont Cervin Palace in Zermatt, Beau-Rivage in Geneva).",
        baseCity: "Zurich",
        route: ["Zurich", "St. Moritz", "Zermatt", "Geneva", "Montreux"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Zurich & Transfer to St. Moritz",
            details:
              "Arrive at Zurich Airport. Private transfer to St. Moritz. Check into your palace hotel. Welcome dinner at a gourmet restaurant.",
          },
          {
            day: 2,
            summary: "Glacier Express Excellence Class to Zermatt",
            details:
              "Board the legendary Glacier Express. Settle into your guaranteed window seat in Excellence Class. Enjoy a 5-course lunch with wine pairing as you cross 291 bridges and 91 tunnels. Arrive in car-free Zermatt at the foot of the Matterhorn.",
          },
          {
            day: 3,
            summary: "Gornergrat & Matterhorn Views",
            details:
              "Ascend by cogwheel train to the Gornergrat summit for the most breathtaking, classic views of the Matterhorn and surrounding peaks. Afternoon at leisure for spa treatments or exploring Zermatt's exclusive boutiques.",
          },
          {
            day: 4,
            summary: "Zermatt to Geneva",
            details:
              "Travel by first-class train to Geneva, the cosmopolitan city on the lake. Private transfer to your luxurious lakeside hotel. Private walking tour of the Old Town and the Jet d'Eau.",
          },
          {
            day: 5,
            summary: "Private Watchmaking Workshop & Lake Cruise",
            details:
              "Delve into the heart of Swiss craftsmanship with a private watchmaking workshop where you can assemble your own Swiss watch. In the afternoon, enjoy a private cruise on Lake Geneva.",
          },
          {
            day: 6,
            summary: "GoldenPass Express to Montreux",
            details:
              "Day trip to Montreux on the new, luxurious GoldenPass Express train. Visit the beautiful Château de Chillon, a medieval castle on the lake's shore. Return to Geneva in the evening.",
          },
          {
            day: 7,
            summary: "Lavaux Vineyards & Wine Tasting",
            details:
              "Private excursion to the UNESCO World Heritage Lavaux vineyard terraces. Enjoy a tour and tasting at a prestigious local winery with stunning views over Lake Geneva. Farewell dinner at a Michelin-starred restaurant in Geneva.",
          },
          {
            day: 8,
            summary: "Departure from Geneva",
            details:
              "After breakfast, enjoy a private transfer to Geneva Airport (GVA) for your departure.",
          },
        ],
        includes: [
          "7 nights in 5-star hotel suites",
          "First Class Swiss Travel Pass",
          "Glacier Express Excellence Class & GoldenPass Express Prestige Class tickets",
          "Meals as specified",
          "All private tours and transfers",
          "Watchmaking workshop",
          "Mountain excursion tickets",
        ],
        excludes: [
          "International flights",
          "Visas",
          "Travel insurance",
          "Some dinners",
          "Personal expenses",
        ],
        notes: [
          "Seat reservations on panoramic trains are mandatory and should be made months in advance.",
          "This itinerary is a celebration of Swiss engineering and luxury hospitality.",
        ],
      },
      { 
        tripId: 48,
        title: "Hiker's Paradise: Offbeat Trekking in the Valais Region",
        tripDescription:
          "A 9-day challenging and rewarding trekking adventure in Switzerland's Valais region, home to the most 4,000m peaks. Hike stunning trails, stay in traditional mountain huts, and witness the raw beauty of the Aletsch Glacier, far from the tourist crowds.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "hiking",
          "mountains",
          "nature",
          "glacier",
        ],
        customizable: true,
        badge: { type: "adventure", text: "High-Alpine Trek" },
        capacity: 10,
        meals: "8 Breakfasts, 6 Lunches, 6 Dinners",
        accommodations:
          "4 nights in comfortable hotels in villages, 4 nights in shared dormitories in Swiss Alpine Club (SAC) mountain huts.",
        baseCity: "Geneva",
        route: ["Geneva", "Zermatt", "Aletsch Arena", "Saas-Fee"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Geneva & Transfer to Zermatt",
            details:
              "Arrive in Geneva, take a train to the iconic mountain village of Zermatt. Check into your hotel and meet your guide and group for a briefing.",
          },
          {
            day: 2,
            summary: "Acclimatization Hike: The 5 Lakes Walk",
            details:
              "A stunning acclimatization hike, the 5-Seenweg (Five Lakes Walk), offering beautiful reflections of the Matterhorn in the alpine lakes. Return to Zermatt.",
          },
          {
            day: 3,
            summary: "Hike to a Mountain Hut",
            details:
              "Begin your multi-day trek. Ascend via cable car and then hike to a traditional Swiss mountain hut, such as the Hörnli Hut base camp (seasonally) or another scenic hut. Enjoy a simple, hearty dinner and sunset over the peaks.",
          },
          {
            day: 4,
            summary: "Glacier Trekking",
            details:
              "With your certified mountain guide, learn basic crampon and ice axe techniques for a short, guided trek onto a glacier (e.g., the Gorner Glacier), experiencing the world of crevasses and ice formations safely.",
          },
          {
            day: 5,
            summary: "Transfer to Aletsch Arena",
            details:
              "Descend from the hut and travel by train to the Aletsch Arena region, home to the largest glacier in the Alps. Check into a hotel in a car-free village like Riederalp or Bettmeralp.",
          },
          {
            day: 6,
            summary: "Aletsch Glacier Ridge Hike",
            details:
              "Hike along the spectacular ridge trail with constant, breathtaking views over the 23km-long Aletsch Glacier. This is a UNESCO World Heritage trail.",
          },
          {
            day: 7,
            summary: "Journey to Saas-Fee",
            details:
              "Travel to the neighboring valley of Saas-Fee, the 'Pearl of the Alps', surrounded by thirteen 4,000-meter peaks. Check into your hotel.",
          },
          {
            day: 8,
            summary: "High-Alpine Trail & Marmots",
            details:
              "Take a high-alpine trail above Saas-Fee, with chances to spot marmots and ibex. Enjoy a final farewell dinner with classic Swiss fondue.",
          },
          {
            day: 9,
            summary: "Departure",
            details:
              "Take a scenic postbus and train journey back to Geneva airport for your departure.",
          },
        ],
        includes: [
          "All accommodation (hotels and mountain huts)",
          "Certified UIMLA/IFMGA mountain guide",
          "All transport within Switzerland (trains, buses, cable cars)",
          "Meals as specified",
          "Glacier trekking equipment rental",
        ],
        excludes: [
          "International flights",
          "Some lunches and dinners",
          "Personal hiking gear (boots, clothing etc.)",
          "Travel insurance with mountain rescue coverage",
        ],
        notes: [
          "This is a strenuous trip for experienced hikers with a high level of fitness.",
          "Mountain huts have basic, shared dormitory-style accommodation.",
          "Weather can change rapidly in the Alps; flexibility is key.",
        ],
      },
      {
        tripId: 49,
        title: "Swiss Adrenaline Week in Interlaken",
        tripDescription:
          "A 7-day action-packed trip for thrill-seekers and nature lovers based in Interlaken, the adventure capital of Europe. Hike stunning trails, experience a range of adrenaline sports, and immerse yourself in the heart of the Swiss Alps.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "adventure",
          "hiking",
          "adrenaline",
          "nature",
          "mountains",
          "youth",
        ],
        customizable: true,
        badge: { type: "adventure", text: "Adrenaline Rush" },
        capacity: 20,
        meals: "6 Breakfasts",
        accommodations:
          "6 nights in a comfortable 3-star hotel or a top-rated adventure hostel in Interlaken.",
        baseCity: "Interlaken",
        route: ["Interlaken", "Grindelwald", "Lauterbrunnen", "Mürren"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Interlaken",
            details:
              "Arrive in Interlaken. Check into your accommodation. Take a stroll along the river and watch the paragliders land in the central park. Meet your group for a welcome briefing.",
          },
          {
            day: 2,
            summary: "Grindelwald-First: Hike & Adventure",
            details:
              "Travel to Grindelwald and take the cable car to 'First'. Hike to the scenic Bachalpsee lake. On the way down, experience the thrills of the First Cliff Walk, the First Flyer (zip line), and the Mountain Cart.",
          },
          {
            day: 3,
            summary: "Canyoning Adventure",
            details:
              "Get kitted out for a canyoning trip. Under the guidance of professional instructors, you will rappel, jump, and slide down waterfalls and rock faces in a beautiful local canyon. A true adrenaline rush!",
          },
          {
            day: 4,
            summary: "Paragliding over Interlaken",
            details:
              "Experience the ultimate freedom of a tandem paragliding flight. After a short drive up the mountain, you'll run a few steps and soar into the air, enjoying breathtaking views of Interlaken, its two lakes, and the Jungfrau massif.",
          },
          {
            day: 5,
            summary: "Lauterbrunnen & Mürren Exploration",
            details:
              "Visit the spectacular Lauterbrunnen Valley with its 72 waterfalls, including the powerful Staubbach Falls. Take a series of cable cars up to the car-free village of Mürren and hike a portion of the North Face trail.",
          },
          {
            day: 6,
            summary: "Jet Boat on Lake Brienz",
            details:
              "Enjoy a high-speed jet boat ride on the turquoise waters of Lake Brienz. Experience 360-degree spins, incredible speed, and stunning views of the surrounding mountains and the Giessbach Falls. Afternoon free for souvenir shopping.",
          },
          {
            day: 7,
            summary: "Departure",
            details:
              "Enjoy a final Swiss breakfast before departing from Interlaken.",
          },
        ],
        includes: [
          "6 nights accommodation",
          "Daily breakfasts",
          "All specified adventure activities (Grindelwald-First adventure package, Canyoning, Paragliding, Jet Boating)",
          "Professional, certified guides and all safety equipment",
          "A local transport pass for the Interlaken area",
        ],
        excludes: [
          "Flights/transport to Interlaken",
          "Mountain cable car/train tickets on Day 5",
          "Lunches and dinners",
          "Travel insurance with adventure sports coverage",
        ],
        notes: [
          "This itinerary is for active travelers and adrenaline junkies. No prior experience is needed for the activities.",
          "All adventure sports are run by certified professionals with excellent safety records.",
          "Booking in advance is essential during peak season.",
        ],
      },
    ],
  },
  {
    destination_id: 17,
    destination_name: "Georgia",
    category: "international",
    destination_description:
      "Nestled at the crossroads of Europe and Asia, Georgia is a land of ancient history, stunning mountain landscapes, and legendary hospitality. Known as the birthplace of wine, this captivating country offers a unique blend of culture, adventure, and gastronomy that is still largely undiscovered by mass tourism.\n\nKey highlights include:\n- **Tbilisi** - A vibrant capital with a charming Old Town, eclectic architecture, and Sulphur baths.\n- **Caucasus Mountains** - Breathtaking scenery in regions like Svaneti and Kazbegi, perfect for hiking and exploration.\n- **Kakheti Wine Region** - Explore ancient monasteries and taste wine made in traditional qvevri (clay jars).\n- **Cave Monasteries** - Marvel at the ancient cave cities of Uplistsikhe and Vardzia.\n- **Georgian Cuisine** - Savor delicious dishes like Khachapuri (cheese bread) and Khinkali (dumplings).\n\nWith its warm-hearted people, rich history, and dramatic scenery, Georgia is a destination that will capture your heart and soul.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 50,
        title: "Georgia in Style: Wine, Mountains & Helicopter Views",
        tripDescription:
          "A 9-day luxury tour of Georgia's highlights, combining stays in Tbilisi's finest design hotels and boutique wineries, with private tours, exclusive culinary experiences, and a breathtaking helicopter flight to Kazbegi.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "culture",
          "wine",
          "foodie",
          "mountains",
          "helicopter",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Boutique Luxury" },
        capacity: 6,
        meals: "8 Breakfasts, 6 Lunches, 7 Dinners",
        accommodations:
          "4 nights in a 5-star design hotel in Tbilisi (e.g., Stamba Hotel), 2 nights in a luxury winery château hotel in Kakheti, 2 nights at a luxury mountain resort in Kazbegi.",
        baseCity: "Tbilisi",
        route: ["Tbilisi", "Mtskheta", "Kakheti", "Sighnaghi", "Kazbegi"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Tbilisi & Welcome Dinner",
            details:
              "Arrive at Tbilisi International Airport (TBS), private transfer to your luxury hotel. Welcome dinner at a top-rated Georgian restaurant with panoramic city views.",
          },
          {
            day: 2,
            summary: "Tbilisi Old & New",
            details:
              "Private guided tour of Tbilisi: explore the Old Town, Narikala Fortress, and the ancient Sulphur baths. In the afternoon, a private tour of the Georgian National Museum's treasury.",
          },
          {
            day: 3,
            summary: "Ancient Capital & Jvari Monastery",
            details:
              "Excursion to Mtskheta, the ancient capital. Visit the UNESCO sites of Jvari Monastery and Svetitskhoveli Cathedral. Evening at the Tbilisi Opera and Ballet Theatre.",
          },
          {
            day: 4,
            summary: "To Kakheti, the Cradle of Wine",
            details:
              "Private transfer to the Kakheti wine region. Check into a luxurious winery estate. Enjoy a private tour of the estate's vineyards and qvevri cellars, followed by a Supra (Georgian feast) hosted by a famous toastmaster (Tamada).",
          },
          {
            day: 5,
            summary: "Sighnaghi & Kakhetian Delicacies",
            details:
              "Visit the beautifully preserved walled town of Sighnaghi. Participate in a private masterclass to learn how to make Khachapuri and Churchkhela, followed by lunch with a local family.",
          },
          {
            day: 6,
            summary: "Helicopter to Kazbegi",
            details:
              "Experience the ultimate transfer: a private helicopter flight from Kakheti over the mountains to Stepantsminda (Kazbegi). The views are unparalleled. Check into your luxury mountain resort with views of Mt. Kazbek.",
          },
          {
            day: 7,
            summary: "Gergeti Trinity & Gveleti Waterfalls",
            details:
              "Private 4x4 jeep tour up to the iconic Gergeti Trinity Church. Afterwards, take a short hike to the beautiful Gveleti waterfalls, hidden in a gorge.",
          },
          {
            day: 8,
            summary: "Return to Tbilisi & Farewell",
            details:
              "Enjoy the scenic drive back down the Georgian Military Highway to Tbilisi in a luxury vehicle. Stop at the Ananuri Fortress. Farewell dinner at a private art gallery with a curated menu.",
          },
          {
            day: 9,
            summary: "Departure",
            details:
              "After breakfast, enjoy some last-minute souvenir shopping before your private transfer to the airport.",
          },
        ],
        includes: [
          "8 nights in luxury accommodation",
          "Private vehicle with driver throughout",
          "Private helicopter transfer from Kakheti to Kazbegi",
          "Expert English-speaking guide",
          "Meals as specified",
          "All private tours, wine tastings, and masterclasses",
          "All entrance fees",
        ],
        excludes: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Some meals",
          "Personal expenses",
        ],
        notes: [
          "Georgia offers a unique luxury experience focused on authentic culture and gastronomy.",
          "The helicopter flight is weather-dependent and has a road transfer as a backup.",
        ],
      },
      {
        tripId: 51,
        title: "Untamed Tusheti: A 4x4 & Trekking Expedition",
        tripDescription:
          "A 9-day hardcore adventure into the remote and spectacular Tusheti National Park, accessible only a few months a year. Traverse one of the world's most dangerous roads by 4x4, trek between ancient tower villages, and stay in rustic guesthouses in this isolated corner of the Caucasus.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "hiking",
          "mountains",
          "culture",
          "4x4",
          "remote",
        ],
        customizable: true,
        badge: { type: "adventure", text: " Caucasus Expedition" },
        capacity: 8,
        meals: "8 Breakfasts, 7 Lunches, 7 Dinners",
        accommodations:
          "2 nights in a hotel in Tbilisi, 1 night in a guesthouse in Telavi, 5 nights in basic family-run guesthouses in Tusheti.",
        baseCity: "Tbilisi",
        route: ["Tbilisi", "Telavi", "Omalo", "Dartlo", "Parsma", "Abano Pass"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Tbilisi",
            details:
              "Arrive in Tbilisi, transfer to hotel. Meet your expedition leader and group for a detailed briefing about the challenging journey ahead.",
          },
          {
            day: 2,
            summary: "To Kakheti's Edge",
            details:
              "Drive from Tbilisi to Telavi, the main city of the Kakheti region. Final preparations and rest before the mountain journey.",
          },
          {
            day: 3,
            summary: "The Abano Pass to Omalo",
            details:
              "The adventure begins. Board specialized 4x4 vehicles for the exhilarating and notoriously dangerous drive over the 2,850m Abano Pass into Tusheti. Arrive in the main village of Omalo.",
          },
          {
            day: 4,
            summary: "Trek to Dartlo & Kvavlo",
            details:
              "Begin trekking. Hike from Upper Omalo to the stunningly beautiful and well-preserved village of Dartlo. Continue with a steep climb to the village of Kvavlo. Overnight in a Dartlo guesthouse.",
          },
          {
            day: 5,
            summary: "Trek to Parsma",
            details:
              "Continue your trek deeper into the valley, following the river to the village of Parsma, famous for its formidable defensive towers.",
          },
          {
            day: 6,
            summary: "Exploring the Upper Valleys",
            details:
              "A day of exploration around Parsma. Depending on the group's fitness, hike towards Girevi or explore other nearby tower villages and learn about the semi-nomadic life of the Tush people.",
          },
          {
            day: 7,
            summary: "Return to Omalo",
            details:
              "Trek back towards Omalo, taking a different path to enjoy new perspectives of the incredible landscape. Celebratory dinner in Omalo.",
          },
          {
            day: 8,
            summary: "Crossing the Abano Pass Back to Telavi",
            details:
              "An early start for the thrilling 4x4 drive back over the Abano Pass to the lowlands. The journey is just as spectacular in reverse. Overnight and relax in Telavi.",
          },
          {
            day: 9,
            summary: "Return to Tbilisi & Departure",
            details:
              "Drive back to Tbilisi. Depending on flight schedules, either transfer directly to the airport or have some free time in the city before departure.",
          },
        ],
        includes: [
          "All accommodation",
          "Expert mountain guide and expedition leader",
          "Private 4x4 vehicles for Tusheti",
          "Meals as specified",
          "All necessary permits",
          "Luggage transport between guesthouses where possible",
        ],
        excludes: [
          "International flights",
          "Travel insurance with emergency evacuation coverage (mandatory)",
          "Personal trekking gear",
          "Tips for local crew",
        ],
        notes: [
          "This is an extremely challenging trip for physically fit and adventurous travelers.",
          "The road to Tusheti is only open from roughly June to early October.",
          "Guesthouses are very basic with shared facilities.",
        ],
      },
      {
        tripId: 52,
        title: "A Taste of Georgia: Food, Wine & Culture",
        tripDescription:
          "A 7-day experiential journey designed for food and wine lovers. Discover the secrets of Georgian cuisine, taste unique qvevri wines, and explore the historical sites and stunning mountain scenery that have shaped this incredible culture.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "foodie",
          "wine",
          "culture",
          "history",
          "experience",
          "scenic",
        ],
        customizable: true,
        badge: { type: "foodie", text: "Culinary Journey" },
        capacity: 14,
        meals: "6 Breakfasts, 4 Lunches, 4 Dinners (including feasts)",
        accommodations:
          "6 nights in well-located, charming 3/4-star hotels and guesthouses.",
        baseCity: "Tbilisi",
        route: ["Tbilisi", "Kakheti", "Sighnaghi", "Kazbegi"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival & Tbilisi Food Walk",
            details:
              "Arrive in Tbilisi. Check in, then embark on a guided food walk, tasting street food, visiting a traditional bread baker, and ending at a modern wine bar.",
          },
          {
            day: 2,
            summary: "Khinkali Masterclass & Sulphur Baths",
            details:
              "Morning masterclass dedicated to mastering the art of making Khinkali (Georgian dumplings). In the afternoon, relax and rejuvenate in a traditional Sulphur bath.",
          },
          {
            day: 3,
            summary: "To Kakheti: The Wine Heartland",
            details:
              "Travel to the Kakheti region. Visit a family-run winery for an authentic experience. Learn about the 8,000-year-old tradition of making wine in qvevri and enjoy a home-cooked Supra (feast).",
          },
          {
            day: 4,
            summary: "Sighnaghi & Churchkhela Making",
            details:
              "Explore the beautiful 'City of Love', Sighnaghi. Participate in a workshop to make Churchkhela, a traditional candy made from grape juice and nuts.",
          },
          {
            day: 5,
            summary: "The Georgian Military Highway to Kazbegi",
            details:
              "Embark on a spectacular drive along the Georgian Military Highway. Stop at Ananuri Fortress and the Russia-Georgia Friendship Monument. Arrive in Stepantsminda (Kazbegi) with the iconic Mount Kazbek in view.",
          },
          {
            day: 6,
            summary: "Gergeti Trinity Church & Return to Tbilisi",
            details:
              "Take a 4x4 vehicle up to the stunningly located Gergeti Trinity Church. After soaking in the views, drive back to Tbilisi for a farewell dinner at a restaurant with traditional music and dance.",
          },
          {
            day: 7,
            summary: "Departure",
            details:
              "Enjoy a final Georgian breakfast and perhaps a last visit to the Dry Bridge Market for souvenirs before heading to the airport.",
          },
        ],
        includes: [
          "6 nights accommodation",
          "All transfers in a comfortable vehicle",
          "English-speaking guide",
          "Meals as specified",
          "All cooking classes and workshops",
          "All wine tastings",
          "Entrance fees",
          "4x4 in Kazbegi",
        ],
        excludes: [
          "International flights",
          "Travel insurance",
          "Some meals",
          "Personal expenses",
        ],
        notes: [
          "Come prepared to eat and drink well!",
          "Dietary restrictions can be accommodated with advance notice.",
          "This trip offers a deep dive into the soul of Georgian culture through its food and hospitality.",
        ],
      },
    ],
  },
  {
    destination_id: 18,
    destination_name: "Kazakhstan (Almaty)",
    category: "international",
    destination_description:
      "Almaty, the former capital of Kazakhstan, is a city of stunning natural beauty and Soviet-era charm, nestled at the foothills of the majestic Tian Shan mountains. This vibrant cultural hub offers a unique blend of nomadic traditions, modern city life, and breathtaking alpine landscapes just a short drive away.\n\nKey highlights include:\n- **Big Almaty Lake** - A surreal, turquoise alpine lake surrounded by snow-capped peaks.\n- **Charyn Canyon** - Often compared to the Grand Canyon, with its dramatic 'Valley of Castles'.\n- **Shymbulak Ski Resort** - Ride the gondola for panoramic views, whether in snowy winter or green summer.\n- **Kolsai and Kaindy Lakes** - A pair of stunning mountain lakes, with Kaindy famous for its submerged forest.\n- **Zenkov Cathedral** - A remarkable wooden cathedral built entirely without nails.\n\nDiscover a destination off the beaten path, where epic landscapes, warm hospitality, and a fascinating history await.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 53,
        title: "Almaty's Alpine Jewels: A Luxury Mountain Retreat",
        tripDescription:
          "A 6-day exclusive journey exploring the natural wonders around Almaty. Stay in the region's top luxury hotel, travel by private premium 4x4, and experience the stunning canyons and lakes with private guides and gourmet picnics, including a helicopter tour.",
        duration: "5N-6D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "nature",
          "mountains",
          "scenic",
          "offbeat",
          "helicopter",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Exclusive Nature" },
        capacity: 4,
        meals: "5 Breakfasts, 4 Lunches, 4 Dinners",
        accommodations:
          "5 nights in a suite at The Ritz-Carlton, Almaty, offering panoramic mountain views.",
        baseCity: "Almaty",
        route: ["Almaty", "Big Almaty Lake", "Charyn Canyon", "Shymbulak"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Almaty & Skyscraper Views",
            details:
              "Arrive at Almaty International Airport (ALA). Private transfer to The Ritz-Carlton. Welcome dinner at the hotel's sky-lounge restaurant.",
          },
          {
            day: 2,
            summary: "Private Tour to Big Almaty Lake",
            details:
              "Private Land Cruiser excursion to the stunning Big Almaty Lake. Enjoy the vibrant turquoise colors against the backdrop of the Tian Shan peaks. A gourmet picnic lunch will be served by the lake.",
          },
          {
            day: 3,
            summary: "Helicopter Tour over Tian Shan & Charyn Canyon",
            details:
              "Experience the ultimate perspective with a private helicopter tour over the Tian Shan mountains, Big Almaty Lake, and providing an aerial view of the vast Charyn Canyon. Land for a catered lunch with spectacular views.",
          },
          {
            day: 4,
            summary: "Shymbulak & High-Altitude Dining",
            details:
              "Private transfer to the Medeu gondola to ascend to the Shymbulak Mountain Resort. Enjoy the panoramic vistas from over 3,200 meters. Lunch at a high-altitude restaurant. Afternoon at leisure for spa treatments.",
          },
          {
            day: 5,
            summary: "Almaty City Culture & Falconry",
            details:
              "Private guided tour of Almaty city, visiting Panfilov Park, the vibrant Green Bazaar, and Zenkov Cathedral. Conclude with a private demonstration at a traditional Sunkar falcon farm.",
          },
          {
            day: 6,
            summary: "Departure",
            details:
              "Enjoy a final breakfast with mountain views before your private transfer to the airport for departure.",
          },
        ],
        includes: [
          "5 nights in a luxury hotel suite",
          "Private premium 4x4 vehicle with driver/guide throughout",
          "Private helicopter tour",
          "All meals as specified",
          "All private tours and entrance fees",
          "Gourmet picnics and exclusive dining",
          "Private falconry demonstration",
        ],
        excludes: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Dinners not specified",
          "Personal expenses",
        ],
        notes: [
          "Roads to mountain sights can be rough; a premium 4x4 ensures comfort.",
          "The helicopter tour is subject to weather conditions.",
          "Big Almaty Lake is in a border zone and requires permits, which will be arranged.",
        ],
      },
      {
        tripId: 54,
        title: "The Golden Ring: Kolsai, Kaindy & Charyn Canyon Expedition",
        tripDescription:
          "A 4-day offbeat 4x4 expedition into the heart of the Almaty region's most spectacular and remote landscapes. Stay in a rustic guesthouse, hike to the sunken forest of Kaindy lake, see the Kolsai lakes, and explore Charyn Canyon.",
        duration: "3N-4D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "nature",
          "hiking",
          "homestay",
          "4x4",
        ],
        customizable: true,
        badge: { type: "adventure", text: "4x4 Expedition" },
        capacity: 12,
        meals: "3 Breakfasts, 4 Lunches, 3 Dinners",
        accommodations:
          "1 night in a hotel in Almaty, 2 nights in a family guesthouse in Saty village.",
        baseCity: "Almaty",
        route: [
          "Almaty",
          "Charyn Canyon",
          "Kaindy Lake",
          "Kolsai Lakes",
          "Saty",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Almaty to Charyn Canyon & Saty Village",
            details:
              "Depart Almaty by 4x4. Drive to Charyn Canyon, stopping at viewpoints. Hike down into the Valley of Castles. In the late afternoon, continue to the village of Saty and check into your guesthouse for a home-cooked dinner.",
          },
          {
            day: 2,
            summary: "Kaindy Lake's Sunken Forest & Kolsai 1",
            details:
              "Take a rough off-road Soviet UAZ van to the incredible Kaindy Lake, famous for its surreal submerged tree trunks. Short hike around the lake. In the afternoon, visit the first and largest of the Kolsai Lakes, a pristine alpine lake.",
          },
          {
            day: 3,
            summary: "Hike to Kolsai Lake 2 & Return to Almaty",
            details:
              "For the fit, embark on a challenging 8km hike from the first Kolsai Lake to the second, more remote lake (approx. 5-6 hours round trip). Others can relax at the first lake. Enjoy a picnic lunch. In the afternoon, begin the long drive back to Almaty. Check into your hotel.",
          },
          {
            day: 4,
            summary: "Almaty Exploration & Departure",
            details:
              "Morning tour of Almaty's highlights like the Green Bazaar and Panfilov Park before being dropped off at the airport for your departure.",
          },
        ],
        includes: [
          "All transport by 4x4 vehicle",
          "Experienced driver/guide",
          "Accommodation as specified",
          "All meals on the expedition (Day 1 dinner to Day 3 lunch)",
          "National park entrance fees",
        ],
        excludes: [
          "Flights to/from Almaty",
          "Accommodation in Almaty before/after the trip",
          "Travel insurance",
          "Personal expenses",
          "Drinks",
        ],
        notes: [
          "This is a rugged adventure trip with long driving days.",
          "Accommodation in Saty is basic but clean and hospitable, with shared facilities.",
          "The road to Kaindy Lake is very rough and non-negotiable for non-4x4 vehicles.",
        ],
      },
      {
        tripId: 55,
        title: "Almaty's Wonders & Nomadic Culture",
        tripDescription:
          "A 5-day experiential journey blending Almaty's must-see natural sights with an immersion into Kazakh nomadic culture. Visit breathtaking lakes and mountains, and experience the traditions, food, and hospitality of the steppe at an ethno-village.",
        duration: "4N-5D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "culture",
          "nature",
          "foodie",
          "mountains",
          "family",
        ],
        customizable: true,
        badge: { type: "culture", text: "Cultural Immersion" },
        capacity: 16,
        meals: "4 Breakfasts, 3 Lunches, 2 Dinners",
        accommodations: "4 nights in a comfortable 4-star hotel in Almaty.",
        baseCity: "Almaty",
        route: [
          "Almaty",
          "Ethno-village 'The Huns'",
          "Big Almaty Lake",
          "Shymbulak",
        ],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival & Almaty City Tour",
            details:
              "Arrive in Almaty, transfer to your hotel. Afternoon guided city tour, including Republic Square, the Central Mosque, and Panfilov Park with Zenkov Cathedral.",
          },
          {
            day: 2,
            summary: "Nomadic Experience at 'The Huns' Ethno-Village",
            details:
              "Day trip to 'The Huns' ethno-village. Experience traditional Kazakh life: see yurt construction, watch horse games (Kyz Kuu) and archery, and enjoy a traditional lunch. Participate in a craft workshop.",
          },
          {
            day: 3,
            summary: "The Turquoise Jewel: Big Almaty Lake",
            details:
              "Morning excursion to the breathtaking Big Almaty Lake. Take in the stunning scenery and learn about the lake's importance to the city. Return to Almaty in the afternoon.",
          },
          {
            day: 4,
            summary: "Medeu Ice Rink & Shymbulak Mountains",
            details:
              "Visit the world's highest outdoor ice-skating rink at Medeu. Then, take the gondola up to Shymbulak ski resort for incredible mountain views and fresh alpine air. Enjoy lunch with a view. Farewell dinner at a restaurant serving modern Kazakh cuisine.",
          },
          {
            day: 5,
            summary: "Green Bazaar & Departure",
            details:
              "Morning visit to the bustling Green Bazaar to shop for local snacks, dried fruits, and souvenirs. Transfer to the airport for your departure.",
          },
        ],
        includes: [
          "4 nights accommodation",
          "Airport transfers",
          "Private vehicle for excursions",
          "English-speaking guide",
          "Meals as specified",
          "All entrance fees and activities",
          "Ethno-village experience",
        ],
        excludes: [
          "International flights",
          "Visa fees",
          "Travel insurance",
          "Some meals",
          "Personal expenses",
        ],
        notes: [
          "This itinerary offers a good balance of nature and culture without long, strenuous drives.",
          "The Ethno-village provides an interactive and accessible way to experience nomadic traditions.",
        ],
      },
    ],
  },
  {
    destination_id: 19,
    destination_name: "Ladakh",
    category: "domestic",
    destination_description:
      "Ladakh, the 'Land of High Passes', is a starkly beautiful desert landscape in the Himalayas. A world of dramatic barren mountains, crystal-clear turquoise lakes, and ancient Buddhist monasteries clinging to cliffs, it offers an adventure that is both spiritual and thrilling. The crisp mountain air and the vast, empty spaces create a sense of profound peace and wonder.\n\nKey highlights include:\n- **Pangong Tso Lake** - A mesmerizing high-altitude lake that changes colour throughout the day.\n- **Nubra Valley** - Famous for its sand dunes, double-humped Bactrian camels, and the Diskit Monastery.\n- **Khardung La Pass** - One of the world's highest motorable roads, offering breathtaking views.\n- **Monasteries** - Explore the ancient wisdom and art at Thiksey, Hemis, and Diskit monasteries.\n- **Leh Market** - The vibrant heart of Ladakh, perfect for acclimatization and souvenir shopping.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 56,
        title: "Himalayan Serenity: A Luxury Ladakh Retreat",
        tripDescription:
          "An 8-day journey through Ladakh in unparalleled comfort. Stay in the region's most luxurious hotels and glamping sites, travel by premium SUV, and experience the stunning landscapes through private, curated tours, including a gourmet picnic by Pangong Lake.",
        duration: "7N-8D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "mountains",
          "scenic",
          "culture",
          "road trip",
          "romance",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Luxury Escape" },
        capacity: 6,
        meals: "7 Breakfasts, 6 Lunches, 7 Dinners",
        accommodations:
          "4 nights in a 5-star hotel in Leh (e.g., The Grand Dragon), 1 night in a luxury camp in Nubra Valley, 1 night in a luxury camp by Pangong Tso, 1 night in a boutique hotel near Hemis.",
        baseCity: "Leh",
        route: ["Leh", "Sham Valley", "Nubra Valley", "Pangong Tso", "Hemis"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Leh & Acclimatization",
            details:
              "Arrive at Leh Airport (IXL). Private transfer to your luxury hotel. Spend the full day resting to acclimatize to the high altitude (11,500 ft). Enjoy a welcome dinner at the hotel.",
          },
          {
            day: 2,
            summary: "Leh's Monasteries & Sunset Views",
            details:
              "Gentle exploration day. Private guided tour of Thiksey Monastery, resembling the Potala Palace, and Shey Palace. In the evening, visit Shanti Stupa for a panoramic sunset view over Leh.",
          },
          {
            day: 3,
            summary: "Sham Valley's Wonders",
            details:
              "Private excursion down the Indus River to the 'Sham Valley'. Visit the Hall of Fame museum, witness the gravity-defying Magnetic Hill, and see the confluence of the Indus and Zanskar rivers. Lunch at a premium riverside resort.",
          },
          {
            day: 4,
            summary: "To Nubra Valley via Khardung La",
            details:
              "Drive to Nubra Valley via the spectacular Khardung La pass. Check into your luxury camp. In the evening, enjoy a Bactrian camel safari on the Hunder sand dunes followed by a private bonfire dinner.",
          },
          {
            day: 5,
            summary: "Diskit Monastery & Journey to Pangong Tso",
            details:
              "Visit the Diskit Monastery with its towering Maitreya Buddha statue. Take the scenic, lesser-traveled Shyok river road to the magnificent Pangong Tso Lake. Check into your luxury lakefront camp.",
          },
          {
            day: 6,
            summary: "Sunrise at Pangong & Hemis Monastery",
            details:
              "Witness a breathtaking sunrise over Pangong Tso. Enjoy a gourmet picnic breakfast by the lake. Drive back towards Leh, visiting the ancient and wealthy Hemis Monastery en route. Overnight in a nearby boutique hotel.",
          },
          {
            day: 7,
            summary: "Return to Leh & Leisure",
            details:
              "Drive back to Leh. The afternoon is free for you to relax, indulge in a spa treatment, or do some last-minute shopping for Pashmina shawls and local crafts.",
          },
          {
            day: 8,
            summary: "Departure from Leh",
            details:
              "After breakfast, enjoy a private transfer to Leh Airport for your departure.",
          },
        ],
        includes: [
          "All luxury accommodation",
          "Private premium SUV (Innova Crysta/XUV700) with a dedicated driver",
          "All meals as specified",
          "Private English-speaking guide",
          "All permits and entrance fees",
          "Camel safari in Nubra",
          "Oxygen cylinder in the vehicle",
        ],
        excludes: [
          "Flights to/from Leh",
          "Travel insurance",
          "Personal expenses",
          "Tips and gratuities",
        ],
        notes: [
          "Acclimatization on Day 1 is crucial to prevent altitude sickness.",
          "This itinerary is designed for a relaxed pace to maximize comfort and enjoyment.",
        ],
      },
      {
        tripId: 57,
        title: "Offbeat Ladakh: The Zanskar Valley Expedition",
        tripDescription:
          "A rugged 14-day 4x4 expedition into the remote and mythical Zanskar Valley. Traverse high passes, visit ancient monasteries frozen in time, witness the stunning Drang-Drung Glacier, and experience a side of Ladakh few travelers ever see.",
        duration: "13N-14D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "road trip",
          "mountains",
          "hiking",
          "culture",
          "remote",
        ],
        customizable: true,
        badge: { type: "adventure", text: "4x4 Expedition" },
        capacity: 10,
        meals: "13 Breakfasts, 12 Lunches, 12 Dinners",
        accommodations:
          "Hotels in Leh and Kargil, basic guesthouses and homestays in Zanskar.",
        baseCity: "Leh",
        route: [
          "Leh",
          "Lamayuru",
          "Kargil",
          "Rangdum",
          "Padum",
          "Drang-Drung Glacier",
          "Pensi La",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Leh & Acclimatization",
            details:
              "Arrive in Leh and transfer to the hotel. Full day rest for acclimatization.",
          },
          {
            day: 2,
            summary: "Leh Acclimatization",
            details:
              "Second day of acclimatization with a gentle walk to Shanti Stupa and Leh Palace.",
          },
          {
            day: 3,
            summary: "Leh to Lamayuru",
            details:
              "Begin the road trip. Drive to Lamayuru, visiting Magnetic Hill and the Alchi Monastery en route. Explore the surreal 'moonland' landscapes around Lamayuru.",
          },
          {
            day: 4,
            summary: "Lamayuru to Kargil",
            details:
              "Drive to Kargil, the gateway to Zanskar. This is an important transit town with a unique culture.",
          },
          {
            day: 5,
            summary: "Kargil to Rangdum",
            details:
              "Enter the remote Suru Valley. The road gets rough as you drive to Rangdum, a vast, isolated plateau with a lone monastery. Overnight in a very basic guesthouse.",
          },
          {
            day: 6,
            summary: "Rangdum to Padum via Pensi La",
            details:
              "Cross the Pensi La pass (14,436 ft) and get your first stunning views of the massive Drang-Drung Glacier. Descend into the Zanskar Valley and reach its capital, Padum.",
          },
          {
            day: 7,
            summary: "Exploring Padum & Karsha Monastery",
            details:
              "Explore Padum town. Hike up to the spectacular Karsha Monastery, the largest in Zanskar, clinging to a cliffside.",
          },
          {
            day: 8,
            summary: "Sani Monastery & Zangla Fort",
            details:
              "Visit the ancient Sani Monastery, associated with the Kushan emperor Kanishka. Continue to the ruined Zangla Fort, the former seat of Zanskari royalty.",
          },
          {
            day: 9,
            summary: "Hike to Phuktal Monastery (Optional)",
            details:
              "For the extremely fit, begin the 2-day trek to the incredible Phuktal Monastery, built into a cave. Others can explore more local monasteries like Stongdey. *This requires an extra day and guide*.",
          },
          {
            day: 10,
            summary: "Return Journey: Padum to Rangdum",
            details:
              "Begin the long journey back, retracing your steps to Rangdum. The views are just as stunning in the opposite direction.",
          },
          {
            day: 11,
            summary: "Rangdum to Kargil",
            details:
              "Continue the drive from Rangdum back to the relative comfort of Kargil.",
          },
          {
            day: 12,
            summary: "Kargil to Leh",
            details:
              "A full day's drive from Kargil back to Leh, completing the circuit.",
          },
          {
            day: 13,
            summary: "Buffer Day in Leh",
            details:
              "A crucial buffer day in case of road closures or delays. If not used, explore Leh market or relax.",
          },
          {
            day: 14,
            summary: "Departure",
            details: "Transfer to Leh airport for departure.",
          },
        ],
        includes: [
          "Accommodation as specified",
          "Private 4x4 vehicle with an experienced driver",
          "All meals outside of Leh",
          "All permits and entrance fees",
          "Experienced local guide",
          "Oxygen cylinder and first aid kit",
        ],
        excludes: [
          "Flights to/from Leh",
          "Trekking guide for Phuktal (optional extra)",
          "Meals in Leh",
          "Travel insurance with evacuation coverage",
        ],
        notes: [
          "This is a physically and mentally demanding trip on very rough roads.",
          "Accommodation in Zanskar is extremely basic.",
          "The route is typically only open from late June to September.",
        ],
      },
      {
        tripId: 58,
        title: "Ladakh for the Soul: Monasteries, Mindfulness & Culture",
        tripDescription:
          "A 9-day experiential journey that goes beyond the landscapes to connect with Ladakh's spiritual heart. Participate in a monastery morning prayer, take a class on Buddhist philosophy, stay in a local homestay, and experience the culture in a meaningful way.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "culture",
          "spiritual",
          "homestay",
          "monastery",
          "foodie",
        ],
        customizable: true,
        badge: { type: "experience", text: "Cultural Immersion" },
        capacity: 12,
        meals: "8 Breakfasts, 4 Lunches, 5 Dinners",
        accommodations:
          "4 nights in a comfortable hotel in Leh, 2 nights in a family-run homestay, 2 nights in a deluxe camp in Nubra Valley.",
        baseCity: "Leh",
        route: ["Leh", "Thiksey", "Sham Valley", "Nubra Valley"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival and Acclimatization",
            details:
              "Arrive in Leh. Transfer to hotel and rest for the full day to acclimatize.",
          },
          {
            day: 2,
            summary: "Monastery Prayer & Buddhist Philosophy",
            details:
              "An early start to attend the mesmerizing morning prayer ceremony at Thiksey Monastery. Afterwards, have a session with a resident monk or scholar on the basics of Tibetan Buddhist philosophy.",
          },
          {
            day: 3,
            summary: "Heritage Walk & Local Food",
            details:
              "Take a guided heritage walk through the old town of Leh, learning about its history and architecture. In the evening, join a Ladakhi family for a traditional cooking class and dinner in their home.",
          },
          {
            day: 4,
            summary: "To Sham Valley & Homestay Experience",
            details:
              "Travel to the lower altitude Sham Valley. Check into a traditional Ladakhi homestay in a village like Likir or Yangthang. Experience authentic local life and hospitality.",
          },
          {
            day: 5,
            summary: "Life in a Ladakhi Village",
            details:
              "Spend the day with your host family. Depending on the season, you might help in the fields, learn to make butter tea, or take a walk with the family's livestock. A truly immersive experience.",
          },
          {
            day: 6,
            summary: "Journey to Nubra Valley",
            details:
              "Travel from your homestay to the Nubra Valley via Khardung La. Check into a comfortable camp. Evening at leisure.",
          },
          {
            day: 7,
            summary: "Yarab Tso Lake & Village Walk",
            details:
              "Visit the holy Yarab Tso Lake, which requires a short hike to reach. In the afternoon, take a guided walk through the village of Sumur to understand the local farming and irrigation systems.",
          },
          {
            day: 8,
            summary: "Return to Leh & Farewell",
            details:
              "Visit Diskit Monastery before driving back to Leh. Enjoy a final farewell dinner at a restaurant specializing in Central Asian cuisine.",
          },
          {
            day: 9,
            summary: "Departure",
            details:
              "Transfer to Leh airport for your flight home, with a deeper understanding of Ladakhi culture.",
          },
        ],
        includes: [
          "All accommodation as specified",
          "Private vehicle",
          "All meals at homestay and cooking class dinner",
          "Guided tours and all activities",
          "Session on Buddhist philosophy",
          "All permits and fees",
        ],
        excludes: [
          "Flights to/from Leh",
          "Most lunches and dinners in Leh/Nubra",
          "Travel insurance",
          "Personal expenses",
        ],
        notes: [
          "This trip prioritizes cultural interaction over covering maximum sights.",
          "The homestay experience is authentic and facilities are simple but clean.",
          "An open mind and respectful attitude are essential.",
        ],
      },
    ],
  },
  {
    destination_id: 20,
    destination_name: "Kashmir",
    category: "domestic",
    destination_description:
      "Often called 'Paradise on Earth', Kashmir is a land of breathtaking beauty, with lush green valleys, snow-capped Himalayan peaks, and serene lakes. The intricate Mughal gardens, the unique experience of staying on a houseboat on Dal Lake, and the warmth of Kashmiri hospitality create a truly magical atmosphere.\n\nKey highlights include:\n- **Srinagar** - The summer capital, famous for Dal Lake, shikara rides, and Mughal gardens like Shalimar Bagh.\n- **Gulmarg** - A stunning meadow of flowers in summer and a world-class ski resort in winter, with the famous Gondola ride.\n- **Pahalgam** - A tranquil town on the banks of the Lidder River, serving as the gateway to many treks.\n- **Sonamarg** - The 'Meadow of Gold', offering spectacular views of glaciers and alpine scenery.\n- **Kashmiri Cuisine (Wazwan)** - A delicious and elaborate multi-course meal, a feast for the senses.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 59,
        title: "Kashmir's Royal Heritage: A Luxury Sojourn",
        tripDescription:
          "A 7-day indulgent journey through Kashmir's paradise. Stay in opulent palace hotels and luxurious houseboats, enjoy private shikara rides, guided tours of Mughal gardens, and experience the best of Kashmiri culture and cuisine in ultimate style.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "romance",
          "culture",
          "scenic",
          "houseboat",
          "gardens",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Palace Stay" },
        capacity: 4,
        meals: "6 Breakfasts, 6 Dinners",
        accommodations:
          "3 nights in a 5-star Palace Hotel in Srinagar (e.g., The Lalit Grand Palace), 1 night in a luxury houseboat on Nigeen Lake, 2 nights in a 5-star resort in Gulmarg (e.g., The Khyber).",
        baseCity: "Srinagar",
        route: ["Srinagar", "Dal Lake", "Gulmarg", "Pahalgam"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Srinagar & Palace Stay",
            details:
              "Arrive at Srinagar Airport (SXR). Private luxury transfer to your palace hotel overlooking Dal Lake. Settle in and enjoy the regal ambiance. Evening at leisure.",
          },
          {
            day: 2,
            summary: "Mughal Gardens & Old City Charm",
            details:
              "Private guided tour of the famous Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Chashme Shahi. In the afternoon, a curated heritage walk through the old city of Srinagar and a visit to the Shah-e-Hamdan shrine.",
          },
          {
            day: 3,
            summary: "Day Trip to Pahalgam",
            details:
              "A full-day private excursion to the tranquil valley of Pahalgam. Enjoy a gentle walk along the Lidder River and a picnic lunch at a scenic spot. Return to Srinagar in the evening.",
          },
          {
            day: 4,
            summary: "Luxury Houseboat on Nigeen Lake",
            details:
              "Transfer to a secluded, luxury houseboat on the quieter Nigeen Lake. In the evening, enjoy a private, candle-lit shikara ride during sunset, followed by a specially prepared traditional Wazwan dinner on the houseboat.",
          },
          {
            day: 5,
            summary: "Journey to Gulmarg",
            details:
              "After breakfast, transfer to the alpine resort of Gulmarg. Check into your luxury resort. Spend the day at leisure, perhaps taking a gentle walk through the meadows.",
          },
          {
            day: 6,
            summary: "Gulmarg Gondola & High-Altitude Tea",
            details:
              "Take the Gulmarg Gondola, one of the world's highest cable cars, up to the Apharwat Peak for stunning Himalayan views. In the afternoon, enjoy a high-tea experience at your resort with panoramic vistas.",
          },
          {
            day: 7,
            summary: "Departure from Srinagar",
            details:
              "Enjoy a final Kashmiri breakfast before your private transfer back to Srinagar Airport for your departure.",
          },
        ],
        includes: [
          "All luxury accommodation",
          "Private luxury vehicle (e.g., SUV) for all transfers and sightseeing",
          "All meals as specified",
          "Private English-speaking guide",
          "Gondola tickets in Gulmarg",
          "Private shikara ride",
          "All entrance fees",
        ],
        excludes: [
          "Flights to/from Srinagar",
          "Lunches",
          "Pony rides or local union taxis in Pahalgam/Gulmarg",
          "Travel insurance",
          "Personal expenses",
        ],
        notes: [
          "Nigeen Lake offers a more serene and exclusive houseboat experience than Dal Lake.",
          "This itinerary is designed for relaxation and soaking in the beauty of Kashmir.",
        ],
      },
      {
        tripId: 60,
        title: "Off the Grid in Kashmir: The Great Lakes Trek",
        tripDescription:
          "An 8-day challenging and immensely rewarding trek through the pristine alpine meadows and high-altitude lakes of Kashmir. This is one of India's most beautiful treks, taking you far from civilization into a world of turquoise lakes, snow-capped peaks, and nomadic shepherds.",
        duration: "7N-8D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "hiking",
          "mountains",
          "camping",
          "nature",
        ],
        customizable: true,
        badge: { type: "adventure", text: "Himalayan Trek" },
        capacity: 12,
        meals: "7 Breakfasts, 6 Lunches, 6 Dinners",
        accommodations:
          "1 night in a hotel in Srinagar, 6 nights in alpine tents.",
        baseCity: "Srinagar",
        route: [
          "Srinagar",
          "Sonamarg",
          "Nichnai",
          "Vishansar Lake",
          "Gadsar",
          "Satsar",
          "Gangabal Lake",
          "Naranag",
        ],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Srinagar",
            details:
              "Arrive in Srinagar. Transfer to your hotel. Meet the trek leader and the group for a detailed briefing and gear check. Last-minute shopping for any essentials.",
          },
          {
            day: 2,
            summary: "Drive to Sonamarg & Trek to Nichnai",
            details:
              "A scenic 3-hour drive to the trek starting point in Sonamarg. Begin the trek with a gradual ascent through meadows and forests to the campsite at Nichnai (11,500 ft).",
          },
          {
            day: 3,
            summary: "Nichnai to Vishansar Lake",
            details:
              "Cross the Nichnai Pass (13,100 ft) with breathtaking views. Descend into the meadows to reach the stunning turquoise Vishansar Lake, where we camp for the night.",
          },
          {
            day: 4,
            summary: "Vishansar to Gadsar via Gadsar Pass",
            details:
              "A challenging day. Hike past the adjacent Kishansar Lake and then a steep ascent to the Gadsar Pass (13,750 ft), the highest point of the trek. Descend to the beautiful Gadsar Lake.",
          },
          {
            day: 5,
            summary: "Gadsar to Satsar",
            details:
              "A relatively easier day of trekking through meadows dotted with wildflowers. We camp near Satsar Lake, a collection of seven small alpine lakes.",
          },
          {
            day: 6,
            summary: "Satsar to Gangabal Twin Lakes",
            details:
              "Cross another pass, Zaj Pass (13,000 ft), and descend to the highlight of the trek: the magnificent twin lakes of Gangabal and Nundkol, situated at the base of Mt. Harmukh.",
          },
          {
            day: 7,
            summary: "Explore Gangabal & Descend to Naranag",
            details:
              "Enjoy the morning by the lakes. Afterwards, a long descent through pine forests to the village of Naranag. Drive back to Srinagar and check into a houseboat for a well-deserved rest.",
          },
          {
            day: 8,
            summary: "Departure from Srinagar",
            details:
              "After breakfast on the houseboat, transfer to Srinagar airport for your departure.",
          },
        ],
        includes: [
          "All accommodation (hotel and tents)",
          "All transport from Srinagar and back",
          "All meals during the trek",
          "Experienced trek leader, guides, and support staff",
          "All camping equipment (tents, sleeping bags, mats)",
          "Porters/mules for carrying common gear",
          "All permits and fees",
        ],
        excludes: [
          "Flights to/from Srinagar",
          "Trekking gear (boots, poles, personal clothing)",
          "Meals in Srinagar",
          "Travel insurance with emergency evacuation",
        ],
        notes: [
          "This is a difficult high-altitude trek requiring excellent physical fitness.",
          "The best season is from July to September.",
          "You will be in remote areas with no connectivity.",
        ],
      },
      {
        tripId: 61,
        title: "Kashmir Experience: Valleys, Lakes & Local Life",
        tripDescription:
          "A 7-day immersive journey that combines Kashmir's iconic sights with authentic local experiences. Stay on a houseboat, visit a saffron farm, explore the lesser-known Aru and Betaab valleys, and connect with the culture of this beautiful land.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "culture",
          "homestay",
          "scenic",
          "houseboat",
          "foodie",
        ],
        customizable: true,
        badge: { type: "experience", text: "Cultural Journey" },
        capacity: 14,
        meals: "6 Breakfasts, 3 Dinners",
        accommodations:
          "3 nights in a traditional houseboat on Dal Lake, 1 night in a hotel in Pahalgam, 2 nights in a hotel in Gulmarg.",
        baseCity: "Srinagar",
        route: ["Srinagar", "Dal Lake", "Pahalgam", "Gulmarg", "Doodhpathri"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival & Houseboat Stay",
            details:
              "Arrive in Srinagar and transfer by shikara to your traditional houseboat on Dal Lake. In the evening, enjoy a relaxing shikara ride to the floating markets.",
          },
          {
            day: 2,
            summary: "Srinagar's Culture & Cuisine",
            details:
              "Morning tour of the Mughal Gardens. In the afternoon, take a walking tour of the old city and visit a local bakery. Evening is for a home-style Kashmiri cooking demonstration and dinner with a local family.",
          },
          {
            day: 3,
            summary: "Day trip to Doodhpathri",
            details:
              "Explore the offbeat and stunningly beautiful meadow of Doodhpathri, the 'Valley of Milk'. Enjoy the pristine scenery and tranquil environment away from the crowds.",
          },
          {
            day: 4,
            summary: "Journey to Pahalgam",
            details:
              "Travel to Pahalgam. En route, visit a cricket bat factory and a saffron farm (seasonal). In Pahalgam, explore the beautiful Aru and Betaab valleys by local taxi (at own cost).",
          },
          {
            day: 5,
            summary: "Pahalgam to Gulmarg",
            details:
              "Enjoy a leisurely morning in Pahalgam. In the afternoon, drive to the scenic meadow of Gulmarg. Check into your hotel and enjoy the cool mountain air.",
          },
          {
            day: 6,
            summary: "Gulmarg Gondola & Local School Visit",
            details:
              "Ride the famous Gulmarg Gondola. In the afternoon, an opportunity to visit a local village school to interact with the children and understand the local education system (subject to permissions).",
          },
          {
            day: 7,
            summary: "Return to Srinagar & Departure",
            details:
              "Drive back to Srinagar airport for your departure, filled with authentic Kashmiri memories.",
          },
        ],
        includes: [
          "All accommodation as specified",
          "Private vehicle for transfers and sightseeing",
          "Meals as specified",
          "Shikara rides on Dal Lake",
          "Gondola ride (Phase 1) in Gulmarg",
          "Cooking demonstration and dinner",
          "Entrance fees",
        ],
        excludes: [
          "Flights to/from Srinagar",
          "Lunches",
          "Local taxis in Pahalgam and Gulmarg for inner valleys",
          "Travel insurance",
        ],
        notes: [
          "This trip focuses on meaningful interactions and seeing both popular and offbeat sights.",
          "The visit to the school is a special activity and requires sensitivity and respect.",
        ],
      },
    ],
  },
  {
    destination_id: 21,
    destination_name: "Kerala",
    category: "domestic",
    destination_description:
      "Known as 'God's Own Country', Kerala is a slice of tropical paradise in South India. Famous for its serene backwaters, lush tea plantations, palm-fringed beaches, and vibrant culture, it offers a perfect blend of relaxation and rejuvenation. The state's rich heritage is visible in its Kathakali performances, Ayurvedic traditions, and delicious cuisine.\n\nKey highlights include:\n- **Alleppey (Alappuzha)** - The heart of the backwaters, famous for its houseboat cruises.\n- **Munnar** - A breathtaking hill station with rolling hills covered in emerald-green tea gardens.\n- **Kochi (Cochin)** - A city with a rich colonial past, known for Fort Kochi's Chinese fishing nets and art scene.\n- **Thekkady** - Home to the Periyar National Park, offering chances to see wildlife like elephants and tigers.\n- **Varkala & Kovalam** - Stunning cliff-side and crescent-shaped beaches.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 62,
        title: "Kerala in Luxury: Backwaters, Tea Estates & Private Villas",
        tripDescription:
          "A 9-day opulent journey through Kerala's finest experiences. Stay in luxurious private pool villas and premier resorts, cruise the backwaters on a private luxury houseboat (Kettuvallam), and indulge in personalized cooking classes and Ayurvedic spa treatments.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "romance",
          "backwaters",
          "nature",
          "spa",
          "foodie",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Ultimate Luxury" },
        capacity: 4,
        meals: "8 Breakfasts, 5 Lunches, 7 Dinners",
        accommodations:
          "3 nights in a luxury heritage hotel in Fort Kochi, 2 nights in a private villa at a luxury resort in Munnar, 1 night on a private luxury houseboat in Kumarakom, 2 nights at a luxury backwater resort in Kumarakom.",
        baseCity: "Kochi",
        route: ["Kochi", "Munnar", "Kumarakom", "Alleppey"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Kochi",
            details:
              "Arrive at Cochin International Airport (COK). Private luxury transfer to your heritage hotel in Fort Kochi. Evening at leisure.",
          },
          {
            day: 2,
            summary: "Kochi's Colonial Charm",
            details:
              "Private guided tour of Fort Kochi, including the Chinese Fishing Nets, St. Francis Church, and the Jewish Quarter. In the evening, witness a private Kathakali performance.",
          },
          {
            day: 3,
            summary: "Journey to Munnar's Tea Gardens",
            details:
              "A scenic private drive to Munnar. Check into your luxury resort with panoramic views of the tea estates. The rest of the day is for relaxation amidst nature.",
          },
          {
            day: 4,
            summary: "Munnar's Tea Experience",
            details:
              "Visit a high-altitude tea estate for a private tour and tea tasting session. In the afternoon, indulge in a signature spa treatment at your resort.",
          },
          {
            day: 5,
            summary: "To the Backwaters of Kumarakom",
            details:
              "Drive to Kumarakom. Board your private, air-conditioned luxury houseboat. Enjoy a freshly prepared lunch as you cruise serenely through the Vembanad Lake and narrow canals. Overnight on the houseboat.",
          },
          {
            day: 6,
            summary: "Backwater Resort & Ayurveda",
            details:
              "After breakfast, disembark from the houseboat and check into a luxury backwater resort. The day is dedicated to a personalized Ayurvedic wellness program and relaxation.",
          },
          {
            day: 7,
            summary: "Village Life & Culinary Delights",
            details:
              "Experience local life with a guided village walk or canoe trip. In the afternoon, participate in an exclusive Syrian Christian cooking class with a local expert.",
          },
          {
            day: 8,
            summary: "Return to Kochi & Leisure",
            details:
              "Drive back to Kochi. The afternoon is free for you to explore art cafes or go antique shopping in Fort Kochi. Farewell dinner at a renowned seafood restaurant.",
          },
          {
            day: 9,
            summary: "Departure",
            details:
              "After breakfast, private transfer to Kochi airport for your departure.",
          },
        ],
        includes: [
          "All luxury accommodation",
          "Private AC luxury vehicle for all transfers",
          "Private luxury houseboat with all meals",
          "Meals as specified",
          "Private guides and exclusive experiences",
          "Spa sessions and cooking class",
        ],
        excludes: [
          "Flights to/from Kochi",
          "Lunches not specified",
          "Personal expenses",
          "Alcoholic beverages",
        ],
        notes: [
          "This itinerary is paced for ultimate relaxation and deep immersion.",
          "Ayurvedic treatments are best experienced over multiple days.",
        ],
      },
      {
        tripId: 63,
        title: "Offbeat Kerala: Wayanad's Jungles & Coastal Vistas",
        tripDescription:
          "A 9-day adventure that explores the wild heart of North Kerala. Trek to Chembra Peak, explore the ancient Edakkal Caves in Wayanad, stay in eco-lodges, and discover the hidden beaches and Theyyam rituals of the Malabar Coast.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "hiking",
          "nature",
          "culture",
          "homestay",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Explorer's Trail" },
        capacity: 10,
        meals: "8 Breakfasts, 3 Lunches, 5 Dinners",
        accommodations:
          "Hotels in Calicut and Kannur, 3 nights in an eco-lodge/treehouse in Wayanad, 2 nights in a beachside homestay.",
        baseCity: "Calicut",
        route: ["Calicut", "Wayanad", "Kannur", "Bekal"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Calicut (Kozhikode)",
            details:
              "Arrive at Calicut Airport (CCJ). Transfer to your hotel. Explore the historic city, once a major spice trading hub.",
          },
          {
            day: 2,
            summary: "Drive to Wayanad",
            details:
              "A scenic drive up the Ghat roads to the lush district of Wayanad. Check into your eco-lodge or treehouse resort.",
          },
          {
            day: 3,
            summary: "Chembra Peak Trek",
            details:
              "Embark on a guided trek to the top of Chembra Peak, the highest in Wayanad, featuring a heart-shaped lake en route. A moderately challenging but rewarding trek.",
          },
          {
            day: 4,
            summary: "Edakkal Caves & Waterfalls",
            details:
              "Explore the ancient Edakkal Caves with their prehistoric petroglyphs. In the afternoon, visit the Soochipara or Meenmutty waterfalls.",
          },
          {
            day: 5,
            summary: "Journey to the Malabar Coast (Kannur)",
            details:
              "Drive down from the hills to the coastal town of Kannur. Check into a beachside homestay. If in season (Oct-May), witness a powerful Theyyam ritual performance in the evening.",
          },
          {
            day: 6,
            summary: "Kannur's Forts & Beaches",
            details:
              "Explore the massive St. Angelo Fort, drive along the Muzhappilangad Drive-in Beach (India's only one), and relax at the quiet Thottada Beach.",
          },
          {
            day: 7,
            summary: "Bekal Fort & Valiyaparamba Backwaters",
            details:
              "Travel north to visit the magnificent, sea-facing Bekal Fort. In the afternoon, take a boat trip on the unspoiled Valiyaparamba backwaters, a far quieter alternative to Alleppey.",
          },
          {
            day: 8,
            summary: "Return to Calicut",
            details:
              "Drive back down the coast to Calicut. Enjoy a final dinner of Malabar cuisine.",
          },
          {
            day: 9,
            summary: "Departure",
            details: "Depart from Calicut Airport.",
          },
        ],
        includes: [
          "All accommodation",
          "Private vehicle for the entire circuit",
          "Meals as specified",
          "Guide for Chembra Peak trek",
          "Boat trip in Valiyaparamba",
          "All permits and entrance fees",
        ],
        excludes: [
          "Flights to/from Calicut",
          "Theyyam performance costs (as it's a local ritual)",
          "Most lunches",
          "Travel insurance",
        ],
        notes: [
          "Theyyam is a seasonal ritual and sightings depend on the local temple schedules.",
          "This trip is for those who want to see a different, more rugged side of Kerala.",
        ],
      },
      {
        tripId: 64,
        title: "Classic Kerala Experience: God's Own Country Trail",
        tripDescription:
          "The quintessential 7-day journey through Kerala's most iconic landscapes. From the historic port of Kochi, through the rolling tea gardens of Munnar and the spice plantations of Thekkady, to a magical night on an Alleppey houseboat.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "classic",
          "backwaters",
          "tea gardens",
          "nature",
          "family",
        ],
        customizable: true,
        badge: { type: "experience", text: "Classic Circuit" },
        capacity: 16,
        meals: "6 Breakfasts, 1 Lunch, 2 Dinners",
        accommodations:
          "Comfortable 3/4-star hotels in Kochi, Munnar, and Thekkady, 1 night on a traditional houseboat.",
        baseCity: "Kochi",
        route: ["Kochi", "Munnar", "Thekkady", "Alleppey"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Kochi",
            details:
              "Arrive in Kochi. Check into your hotel in the Fort Kochi area. In the evening, witness the iconic Chinese Fishing Nets at sunset.",
          },
          {
            day: 2,
            summary: "Scenic Drive to Munnar",
            details:
              "Enjoy a beautiful drive from the coast to the Western Ghats. Arrive in Munnar, check into your hotel, and enjoy the cool mountain air. The evening is at leisure.",
          },
          {
            day: 3,
            summary: "Munnar's Tea Gardens & Mattupetty Dam",
            details:
              "Visit a tea museum to learn about tea processing. Drive to Mattupetty Dam and Echo Point. Enjoy the stunning views of the surrounding tea-covered hills.",
          },
          {
            day: 4,
            summary: "Thekkady's Spices & Wildlife",
            details:
              "Drive to Thekkady (Periyar). In the afternoon, take a guided tour of a spice plantation. In the evening, you can opt to watch a Kalaripayattu (traditional martial arts) show.",
          },
          {
            day: 5,
            summary: "Periyar National Park & Houseboat in Alleppey",
            details:
              "Early morning boat safari on Periyar Lake to spot wildlife. Afterwards, drive to Alleppey to board your private houseboat by lunchtime. Cruise the backwaters and enjoy the serene scenery. Overnight on the houseboat.",
          },
          {
            day: 6,
            summary: "Return to Kochi",
            details:
              "After breakfast on the houseboat, disembark and drive back to Kochi. Spend the afternoon exploring the art cafes and boutiques of Fort Kochi. Farewell dinner.",
          },
          {
            day: 7,
            summary: "Departure",
            details: "Transfer to Kochi airport for your flight home.",
          },
        ],
        includes: [
          "All accommodation",
          "Private AC vehicle for the tour",
          "1 night on a houseboat with all meals",
          "Breakfast at all hotels",
          "Farewell dinner",
          "Entrance fees for standard sightseeing",
        ],
        excludes: [
          "Flights to/from Kochi",
          "Lunches and some dinners",
          "Boating fees at Periyar and Mattupetty",
          "Optional activity charges",
          "Travel insurance",
        ],
        notes: [
          "This is the most popular tourist circuit in Kerala, offering a fantastic overview of the state.",
          "Book Periyar boat tickets online in advance to avoid long queues.",
        ],
      },
    ],
  },
  {
    destination_id: 22,
    destination_name: "Arunachal Pradesh",
    category: "domestic",
    destination_description:
      "Known as the 'Land of the Dawn-Lit Mountains', Arunachal Pradesh is one of India's most remote and unexplored states. A treasure trove of natural beauty, it features lush valleys, roaring rivers, and snow-capped peaks. The state is home to a diverse array of tribal cultures, each with its unique traditions, and ancient Buddhist monasteries that seem to touch the sky.\n\nKey highlights include:\n- **Tawang Monastery** - The second-largest monastery in the world, offering stunning views and spiritual solace.\n- **Sela Pass** - A breathtaking high-altitude pass at 13,700 ft, surrounded by pristine lakes.\n- **Ziro Valley** - A UNESCO World Heritage tentative site, home to the Apatani tribe and famous for its paddy-cum-fish cultivation.\n- **Dirang Valley** - Known for its apple and kiwi orchards, hot springs, and the Monpa tribe.\n- **Bum La Pass** - The Indo-China border, offering a sense of adventure and patriotic pride (requires special permits).",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 65,
        title: "Arunachal in Comfort: A Tawang & Dirang Luxury Tour",
        tripDescription:
          "A 9-day journey through Western Arunachal in premium comfort. Travel in a top-of-the-line SUV, stay in the best available luxury hotels and resorts, and enjoy a curated experience of the region's monasteries and natural beauty with an expert local guide.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "mountains",
          "scenic",
          "culture",
          "road trip",
          "monastery",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Premium Comfort" },
        capacity: 4,
        meals: "8 Breakfasts, 8 Dinners",
        accommodations:
          "1 night in a 5-star hotel in Guwahati, 2 nights in the best resort in Dirang, 3 nights in the best hotel in Tawang, 2 nights in a premium hotel in Bomdila/Bhalukpong.",
        baseCity: "Guwahati",
        route: [
          "Guwahati",
          "Bhalukpong",
          "Dirang",
          "Sela Pass",
          "Tawang",
          "Bum La Pass",
          "Bomdila",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Guwahati",
            details:
              "Arrive at Guwahati Airport (GAU). Transfer to your 5-star hotel and relax. Your permits will be processed and handed over.",
          },
          {
            day: 2,
            summary: "Guwahati to Dirang",
            details:
              "An early start for a long but scenic drive to Dirang. Check into your premium resort and enjoy the serene valley views.",
          },
          {
            day: 3,
            summary: "Explore Dirang",
            details:
              "Visit the Dirang Monastery, the old Dirang Dzong, and the local hot water springs. Enjoy a relaxed day acclimatizing to the altitude.",
          },
          {
            day: 4,
            summary: "To Tawang via Sela Pass",
            details:
              "Drive towards Tawang, crossing the spectacular Sela Pass and visiting the serene Sela Lake. Stop at the Jaswant Garh War Memorial. Arrive in Tawang and check into the best available hotel.",
          },
          {
            day: 5,
            summary: "Tawang Monastery & Local Sights",
            details:
              "Visit the magnificent Tawang Monastery. Also explore the Tawang War Memorial and the Giant Buddha Statue. The evening is at leisure.",
          },
          {
            day: 6,
            summary: "Bum La Pass & Sangetsar Lake",
            details:
              "A thrilling excursion to the Indo-China border at Bum La Pass (subject to weather and permits). Visit the beautiful Sangetsar (Madhuri) Lake on the way back.",
          },
          {
            day: 7,
            summary: "Tawang to Bomdila",
            details:
              "Begin the return journey. Drive from Tawang to Bomdila, a town with beautiful viewpoints and a monastery. Check into your hotel.",
          },
          {
            day: 8,
            summary: "Bomdila to Guwahati",
            details:
              "Drive back from the hills to the plains of Assam, reaching Guwahati by the evening. Farewell dinner at a specialty restaurant.",
          },
          {
            day: 9,
            summary: "Departure",
            details:
              "After breakfast, transfer to Guwahati airport for your departure.",
          },
        ],
        includes: [
          "All premium accommodation",
          "Private premium SUV (e.g., Innova Crysta) with an experienced driver",
          "All meals as specified",
          "Expert local English-speaking guide",
          "Inner Line Permits (ILP) for Arunachal",
          "Special permit for Bum La Pass",
        ],
        excludes: [
          "Flights to/from Guwahati",
          "Lunches",
          "Camera fees",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "'Luxury' in Arunachal is relative; this itinerary uses the best available properties.",
          "Permits must be applied for weeks in advance.",
          "The Bum La Pass trip is highly dependent on road and weather conditions.",
        ],
      },
      {
        tripId: 66,
        title: "The Forbidden Valley: Offbeat Mechuka Expedition",
        tripDescription:
          "A 12-day 4x4 expedition to the stunningly beautiful and remote Mechuka Valley. Known as the 'Forbidden Valley', this offbeat destination near the Indo-China border offers breathtaking landscapes, unique tribal culture, and a true sense of discovery.",
        duration: "11N-12D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "road trip",
          "remote",
          "culture",
          "homestay",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "Remote Expedition" },
        capacity: 8,
        meals: "11 Breakfasts, 10 Lunches, 10 Dinners",
        accommodations:
          "Hotels in Dibrugarh, Pasighat, and Aalo. 4 nights in a basic but clean homestay in Mechuka.",
        baseCity: "Dibrugarh",
        route: ["Dibrugarh", "Pasighat", "Aalo", "Mechuka"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Dibrugarh, Assam",
            details:
              "Arrive at Dibrugarh Airport (DIB). Transfer to your hotel. Meet the expedition leader for a briefing.",
          },
          {
            day: 2,
            summary: "Cross the Brahmaputra to Pasighat",
            details:
              "A major travel day. Cross the mighty Brahmaputra river via the Bogibeel Bridge and drive to Pasighat, the gateway to Arunachal.",
          },
          {
            day: 3,
            summary: "Pasighat to Aalo (Along)",
            details:
              "Drive along the Siang River (the Brahmaputra in Arunachal) to Aalo, the headquarters of the West Siang district.",
          },
          {
            day: 4,
            summary: "The Final Push to Mechuka",
            details:
              "The most challenging and scenic part of the drive. The road winds through stunning valleys to finally reach the breathtaking Mechuka Valley. Check into a local homestay.",
          },
          {
            day: 5,
            summary: "Exploring Mechuka",
            details:
              "Explore the main town of Mechuka. Visit the 400-year-old Samten Yongcha Monastery located on a hilltop with panoramic views of the valley.",
          },
          {
            day: 6,
            summary: "Hike to Dorjeeling Village",
            details:
              "Take a walk or drive to the nearby village of Dorjeeling. Interact with the local Memba tribe and see their traditional houses and way of life.",
          },
          {
            day: 7,
            summary: "Yarlung & the Indo-China Border Viewpoint",
            details:
              "Drive towards the Yarlung outpost. Subject to army permissions, you may be able to go to a viewpoint offering a glimpse of the McMohan Line (Indo-China border).",
          },
          {
            day: 8,
            summary: "Leisure Day in Mechuka",
            details:
              "A day to relax and soak in the serene atmosphere of the valley. Walk along the river, read a book, or interact more with your host family.",
          },
          {
            day: 9,
            summary: "Begin Return Journey: Mechuka to Aalo",
            details: "Start the long drive back, retracing your steps to Aalo.",
          },
          {
            day: 10,
            summary: "Aalo to Pasighat",
            details: "Continue the journey from Aalo back to Pasighat.",
          },
          {
            day: 11,
            summary: "Pasighat to Dibrugarh",
            details:
              "Drive from Pasighat back to Dibrugarh in Assam. Farewell dinner.",
          },
          {
            day: 12,
            summary: "Departure",
            details: "Transfer to Dibrugarh airport for your departure.",
          },
        ],
        includes: [
          "All accommodation as specified",
          "Private 4x4 vehicle with an experienced driver",
          "All meals as specified",
          "Local guide in Mechuka",
          "All permits (ILP and PAP)",
        ],
        excludes: [
          "Flights to/from Dibrugarh",
          "Personal expenses",
          "Camera fees",
          "Travel insurance",
        ],
        notes: [
          "This is a very demanding road trip with long hours on difficult roads.",
          "Accommodation in Mechuka is in simple homestays with basic facilities.",
          "Permits are mandatory and require significant advance processing time.",
        ],
      },
      {
        tripId: 67,
        title: "Arunachal Experience: The Ziro Music Festival Special",
        tripDescription:
          "A 7-day cultural extravaganza centered around the Ziro Festival of Music. Experience one of India's most unique outdoor music festivals, explore the Apatani tribal villages, and soak in the vibrant, creative energy of Ziro Valley.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "music festival",
          "culture",
          "homestay",
          "youth",
          "camping",
        ],
        customizable: true,
        badge: { type: "experience", text: "Music & Culture" },
        capacity: 20,
        meals: "6 Breakfasts, 4 Dinners",
        accommodations:
          "1 night in Guwahati hotel, 1 night in Itanagar hotel, 4 nights in a fixed campsite with tents in Ziro.",
        baseCity: "Guwahati",
        route: ["Guwahati", "Itanagar", "Ziro"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Guwahati",
            details:
              "Arrive in Guwahati. Meet the group and check into the hotel. Evening briefing about the festival and the journey ahead.",
          },
          {
            day: 2,
            summary: "Guwahati to Ziro",
            details:
              "An early start for the long drive to Ziro Valley. The journey itself is an experience. Arrive in Ziro in the evening and check into our pre-pitched campsite.",
          },
          {
            day: 3,
            summary: "Ziro Festival of Music - Day 1",
            details:
              "After breakfast, head to the festival grounds. Enjoy the eclectic mix of music from across India and the world. Soak in the festival vibe.",
          },
          {
            day: 4,
            summary: "Ziro Festival & Apatani Village Walk",
            details:
              "In the morning, before the music starts, take a guided walk through a traditional Apatani village like Hong or Hari. See the unique paddy-cum-fish farms and interact with the locals, famous for their facial tattoos. Afternoon and evening at the festival.",
          },
          {
            day: 5,
            summary: "Ziro Festival of Music - Final Day",
            details:
              "Enjoy the final day of the music festival. Discover new artists, try local food and brews at the stalls, and celebrate with fellow music lovers.",
          },
          {
            day: 6,
            summary: "Ziro to Itanagar/North Lakhimpur",
            details:
              "After breakfast, bid farewell to Ziro and begin the drive back. Break the journey with an overnight stay in Itanagar or North Lakhimpur.",
          },
          {
            day: 7,
            summary: "Return to Guwahati & Departure",
            details:
              "Complete the drive back to Guwahati. You will be dropped at the airport for your evening flight home.",
          },
        ],
        includes: [
          "All accommodation as specified (hotels and campsite)",
          "Transport from Guwahati to Ziro and back",
          "3-day pass for the Ziro Festival of Music",
          "Meals as specified",
          "Inner Line Permits (ILP)",
          "Guided Apatani village walk",
        ],
        excludes: [
          "Flights to/from Guwahati",
          "Lunches and meals at the festival",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "The Ziro Festival happens annually in late September; this trip is only operational during that time.",
          "Accommodation is in tents with common washrooms.",
          "Book this trip many months in advance as passes and accommodation sell out fast.",
        ],
      },
    ],
  },
  {
    destination_id: 23,
    destination_name: "Sikkim",
    category: "domestic",
    destination_description:
      "Sikkim, a tiny Himalayan state, is a land of pristine natural beauty and serene spirituality. Dominated by the magnificent Mount Kanchenjunga, the world's third-highest peak, Sikkim offers a stunning panorama of snow-capped mountains, vibrant rhododendron forests, and cascading waterfalls. It is a peaceful haven of ancient Buddhist monasteries and warm, welcoming people.\n\nKey highlights include:\n- **Gangtok** - The charming capital city with stunning views, a pedestrian-friendly main street, and access to Tsomgo Lake.\n- **Pelling** - Offers the best close-up views of the Kanchenjunga range and is home to the Pemayangtse Monastery.\n- **Tsomgo Lake & Nathu La Pass** - A beautiful glacial lake and a high-altitude pass on the Indo-China border.\n- **Yumthang Valley** - The 'Valley of Flowers' in North Sikkim, a paradise of alpine meadows and hot springs.\n- **Rumtek Monastery** - A magnificent Tibetan Buddhist monastery, the seat of the Karmapa Lama.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 68,
        title: "Sikkim's Regal Heights: A Luxury Kanchenjunga Vista Tour",
        tripDescription:
          "An 8-day luxurious journey through Sikkim's most scenic landscapes. Stay in heritage hotels and luxury resorts, enjoy private tours, and experience the grandeur of the Himalayas in comfort, including a spectacular helicopter flight for aerial views of the mountains.",
        duration: "7N-8D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "mountains",
          "scenic",
          "romance",
          "helicopter",
          "monastery",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Himalayan Luxury" },
        capacity: 4,
        meals: "7 Breakfasts, 7 Dinners",
        accommodations:
          "3 nights in a luxury resort in Gangtok (e.g., Mayfair), 2 nights in a heritage hotel in Pelling (e.g., The Elgin), 2 nights in a luxury tea estate resort near Darjeeling.",
        baseCity: "Bagdogra",
        route: ["Bagdogra", "Gangtok", "Pelling", "Darjeeling"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival & Transfer to Gangtok",
            details:
              "Arrive at Bagdogra Airport (IXB). Private luxury transfer to your resort in Gangtok. Evening at leisure to enjoy the hotel's amenities.",
          },
          {
            day: 2,
            summary: "Tsomgo Lake & Private Monastery Tour",
            details:
              "Private excursion to the glacial Tsomgo Lake. On return, enjoy a private, in-depth tour of the Rumtek Monastery, avoiding the usual tourist rush.",
          },
          {
            day: 3,
            summary: "Helicopter Flight over Sikkim",
            details:
              "The highlight of the trip: a private helicopter flight offering breathtaking aerial views of the Kanchenjunga range and the valleys of Sikkim (subject to weather). Afternoon is free for spa treatments or exploring MG Marg.",
          },
          {
            day: 4,
            summary: "Journey to Pelling",
            details:
              "A scenic drive to Pelling in West Sikkim. En route, visit the giant Buddha statue at the Buddha Park in Ravangla. Check into your heritage hotel with stunning views of Kanchenjunga.",
          },
          {
            day: 5,
            summary: "Pelling's Monasteries & Skywalk",
            details:
              "Visit the ancient Pemayangtse Monastery. Later, experience the thrill of walking on the glass Pelling Skywalk. Also visit the Rabdentse Ruins, the former capital of Sikkim.",
          },
          {
            day: 6,
            summary: "To the Tea Gardens of Darjeeling",
            details:
              "Drive from Pelling to a luxury tea estate resort near Darjeeling. The experience of staying amidst the tea gardens is serene and unique.",
          },
          {
            day: 7,
            summary: "Darjeeling's Heritage",
            details:
              "Enjoy a private tour of the tea estate and a tasting session. In the afternoon, ride the famous UNESCO World Heritage 'Toy Train' of the Darjeeling Himalayan Railway.",
          },
          {
            day: 8,
            summary: "Departure",
            details:
              "After a final breakfast overlooking the tea gardens, take a private transfer back to Bagdogra Airport for your departure.",
          },
        ],
        includes: [
          "All luxury/heritage accommodation",
          "Private luxury vehicle for all transfers",
          "Meals as specified",
          "Private helicopter flight",
          "Private guides",
          "Toy Train ride",
          "All permits and entrance fees",
        ],
        excludes: [
          "Flights to/from Bagdogra",
          "Lunches",
          "Nathu La Pass permits (optional extra)",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "The helicopter flight is highly dependent on clear weather.",
          "This itinerary combines the best of Sikkim with the colonial charm of a Darjeeling tea estate.",
        ],
      },
      {
        tripId: 69,
        title: "North Sikkim's Forbidden Frontier: A 4x4 Adventure",
        tripDescription:
          "A 7-day rugged 4x4 adventure into the restricted and breathtakingly beautiful region of North Sikkim. Journey to the high-altitude Gurudongmar Lake, wander through the Valley of Flowers at Yumthang, and experience a raw, untamed side of the Himalayas.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "road trip",
          "mountains",
          "remote",
          "nature",
        ],
        customizable: true,
        badge: { type: "adventure", text: "High-Altitude Journey" },
        capacity: 10,
        meals: "6 Breakfasts, 5 Lunches, 5 Dinners",
        accommodations:
          "2 nights in a hotel in Gangtok, 2 nights in a basic hotel/homestay in Lachen, 2 nights in a basic hotel/homestay in Lachung.",
        baseCity: "Bagdogra",
        route: [
          "Bagdogra",
          "Gangtok",
          "Lachen",
          "Gurudongmar Lake",
          "Lachung",
          "Yumthang Valley",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Bagdogra to Gangtok",
            details:
              "Arrive at Bagdogra airport and take a shared taxi or private car to Gangtok. Check into your hotel and get your permits for North Sikkim processed.",
          },
          {
            day: 2,
            summary: "Gangtok to Lachen",
            details:
              "Begin the journey into North Sikkim. A long and scenic drive takes you to the small town of Lachen (approx. 9,600 ft), the gateway to Gurudongmar Lake. Overnight in Lachen.",
          },
          {
            day: 3,
            summary: "Gurudongmar Lake & Transfer to Lachung",
            details:
              "An early start for the drive to the sacred Gurudongmar Lake, one of the world's highest lakes at 17,800 ft. The landscape is a surreal high-altitude desert. After visiting the lake, drive back to Lachen for lunch and then proceed to Lachung.",
          },
          {
            day: 4,
            summary: "Yumthang Valley & Zero Point",
            details:
              "Drive to the beautiful Yumthang Valley, filled with rhododendrons in spring. Continue further up to Zero Point (Yumesamdong) for stunning views of snow-clad peaks (subject to road conditions). Return to Lachung.",
          },
          {
            day: 5,
            summary: "Lachung to Gangtok",
            details:
              "Begin the long drive back from Lachung to Gangtok, stopping at various waterfalls and viewpoints along the way. Arrive in Gangtok in the evening.",
          },
          {
            day: 6,
            summary: "Gangtok Leisure & Buffer Day",
            details:
              "A crucial buffer day in case of delays due to landslides or bad weather in the north. If the day is free, explore Gangtok's sights like the Ropeway, Rumtek Monastery, or simply relax.",
          },
          {
            day: 7,
            summary: "Departure from Gangtok",
            details:
              "Travel from Gangtok back to Bagdogra airport for your departure.",
          },
        ],
        includes: [
          "All accommodation",
          "Exclusive 4x4 vehicle (e.g., Sumo/Bolero) for the North Sikkim circuit",
          "All meals in North Sikkim",
          "All permits for North Sikkim",
          "Driver and his expenses",
        ],
        excludes: [
          "Transport from Bagdogra to Gangtok and back",
          "Meals in Gangtok",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "This is a very strenuous trip with long hours on extremely bad roads and at very high altitudes.",
          "Accommodation in North Sikkim is very basic.",
          "Permits are mandatory and require passport photos and ID copies in advance.",
        ],
      },
      {
        tripId: 70,
        title: "Sikkim Silk Route Experience: An Ancient Trail",
        tripDescription:
          "A 7-day offbeat journey tracing a part of the ancient Silk Route in East Sikkim. Stay in remote homestays, navigate the hairpin bends of Zuluk, and witness a spectacular sunrise over the Kanchenjunga range from Thambi Viewpoint.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "offbeat",
          "homestay",
          "scenic",
          "road trip",
          "history",
        ],
        customizable: true,
        badge: { type: "experience", text: "Historic Route" },
        capacity: 12,
        meals: "6 Breakfasts, 5 Lunches, 5 Dinners",
        accommodations:
          "1 night in Gangtok hotel, 1 night in Aritar homestay, 2 nights in Zuluk homestay, 2 nights in Nathang Valley homestay.",
        baseCity: "Bagdogra",
        route: [
          "Bagdogra",
          "Gangtok",
          "Aritar",
          "Zuluk",
          "Nathang Valley",
          "Tsomgo Lake",
        ],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Bagdogra to Gangtok",
            details:
              "Arrive at Bagdogra and travel to Gangtok. Obtain permits for the Silk Route. Overnight in Gangtok.",
          },
          {
            day: 2,
            summary: "Gangtok to Aritar",
            details:
              "Drive to Aritar in the East Sikkim region. Visit the Lampokhari Lake, one of the oldest natural lakes in Sikkim. Overnight in a local homestay.",
          },
          {
            day: 3,
            summary: "Aritar to Zuluk",
            details:
              "Drive to Zuluk, a small village located on the rugged terrain of the lower Himalayas. This was once a transit point on the historic Silk Route. Overnight in a Zuluk homestay.",
          },
          {
            day: 4,
            summary: "Zuluk Loops & Nathang Valley",
            details:
              "Early morning drive to Thambi Viewpoint to witness the sunrise and the spectacular view of the Kanchenjunga range and the famous 32 hairpin bends of the Zuluk road. Proceed to Nathang Valley, also known as the 'Ladakh of the East'. Overnight in Nathang.",
          },
          {
            day: 5,
            summary: "Old Baba Mandir & Kupup Lake",
            details:
              "Explore the area around Nathang Valley. Visit the Old Baba Mandir and the beautiful Kupup Lake (Elephant Lake). Spend another night acclimatizing in Nathang.",
          },
          {
            day: 6,
            summary: "Nathang to Gangtok via Tsomgo Lake",
            details:
              "Drive from Nathang towards Gangtok, visiting the Tsomgo Lake en route. This completes the Silk Route circuit. Arrive in Gangtok and relax.",
          },
          {
            day: 7,
            summary: "Departure from Gangtok",
            details:
              "Travel from Gangtok to Bagdogra airport for your departure.",
          },
        ],
        includes: [
          "All homestay and hotel accommodation",
          "Exclusive vehicle for the circuit",
          "All meals during the Silk Route portion",
          "All necessary permits for the Silk Route",
          "Driver and his expenses",
        ],
        excludes: [
          "Transport from Bagdogra to Gangtok and back",
          "Meals in Gangtok",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "This is a restricted area and requires special permits.",
          "Accommodation is exclusively in basic homestays run by local families.",
          "The route is at a high altitude; be prepared for cold weather.",
        ],
      },
    ],
  },
  {
    destination_id: 24,
    destination_name: "Rajasthan",
    category: "domestic",
    destination_description:
      "Rajasthan, the 'Land of Kings', is a dazzling tapestry of majestic forts, opulent palaces, and vibrant culture. It's a land of heroic tales, royal traditions, and stark desert landscapes. From the Pink City of Jaipur to the Blue City of Jodhpur and the Golden City of Jaisalmer, Rajasthan is a journey back in time to an era of regal splendor.\n\nKey highlights include:\n- **Jaipur** - The capital, famous for the Hawa Mahal, Amer Fort, and bustling bazaars.\n- **Udaipur** - The 'City of Lakes', a romantic oasis with the stunning Lake Pichola and City Palace.\n- **Jodhpur** - The 'Blue City', dominated by the imposing Mehrangarh Fort.\n- **Jaisalmer** - The 'Golden City', a magical desert outpost with a living fort and vast sand dunes.\n- **Thar Desert** - Experience a camel safari and a night under the stars in the desert.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 71,
        title: "Royal Rajasthan: A Palace & Forts Luxury Journey",
        tripDescription:
          "A 10-day regal tour of Rajasthan's finest destinations. Stay in magnificent heritage palace hotels, enjoy private guided tours, dine in exclusive locations, and travel in a private luxury car, experiencing the life of Maharajas.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "heritage",
          "palace stay",
          "romance",
          "culture",
          "history",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Royal Heritage" },
        capacity: 4,
        meals: "9 Breakfasts, 7 Dinners",
        accommodations:
          "2 nights in a palace hotel in Jaipur (e.g., Rambagh Palace), 2 nights in a palace hotel in Jodhpur (e.g., Umaid Bhawan Palace), 2 nights in a luxury desert camp in Jaisalmer, 3 nights in a palace hotel in Udaipur (e.g., Taj Lake Palace).",
        baseCity: "Jaipur",
        route: ["Jaipur", "Jodhpur", "Jaisalmer", "Udaipur"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in the Pink City, Jaipur",
            details:
              "Arrive at Jaipur Airport (JAI). Private transfer to your palace hotel. Evening at leisure to enjoy the royal ambiance.",
          },
          {
            day: 2,
            summary: "Jaipur's Forts & Palaces",
            details:
              "Private guided tour of the majestic Amer Fort (with an elephant or jeep ride up), the City Palace, and the astronomical observatory of Jantar Mantar. Photo stop at Hawa Mahal.",
          },
          {
            day: 3,
            summary: "Journey to the Blue City, Jodhpur",
            details:
              "A scenic drive to Jodhpur. Check into your magnificent palace hotel. In the evening, take a private tour of the palace museum.",
          },
          {
            day: 4,
            summary: "Mehrangarh Fort & Old City",
            details:
              "Visit the imposing Mehrangarh Fort, one of India's most impressive forts. Explore the blue-hued lanes of the old city and the bustling Sardar Market.",
          },
          {
            day: 5,
            summary: "To the Golden City, Jaisalmer",
            details:
              "Drive through the desert to Jaisalmer. Check into your luxury desert camp in the Sam Sand Dunes. Enjoy a sunset camel safari followed by a cultural program and dinner under the stars.",
          },
          {
            day: 6,
            summary: "Jaisalmer Fort & Havelis",
            details:
              "Explore the living Jaisalmer Fort, a UNESCO World Heritage site. Visit the intricately carved Patwon Ki Haveli. Spend another magical night at the desert camp.",
          },
          {
            day: 7,
            summary: "Fly to the City of Lakes, Udaipur",
            details:
              "Transfer to Jaisalmer airport for a short flight to Udaipur. Check into your iconic lake palace hotel. The evening is free to admire the stunning views.",
          },
          {
            day: 8,
            summary: "Udaipur's City Palace & Lake Pichola",
            details:
              "Private guided tour of the sprawling City Palace complex. In the evening, enjoy a private boat ride on Lake Pichola during sunset, with views of Jag Mandir and the City Palace.",
          },
          {
            day: 9,
            summary: "Udaipur's Art & Leisure",
            details:
              "Visit Saheliyon-ki-Bari and a local art school to see the famous miniature paintings. The afternoon is free for spa treatments or shopping. Enjoy a private farewell dinner at a rooftop restaurant overlooking the lake.",
          },
          {
            day: 10,
            summary: "Departure",
            details:
              "After a royal breakfast, take a private transfer to Udaipur Airport (UDR) for your departure.",
          },
        ],
        includes: [
          "All luxury palace hotel and camp accommodation",
          "Private AC luxury car and driver for the entire tour",
          "Flight from Jaisalmer to Udaipur",
          "Private guides in each city",
          "Meals as specified",
          "All entrance fees and activity charges",
        ],
        excludes: [
          "Flights to Jaipur/from Udaipur",
          "Lunches",
          "Camera fees",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "This itinerary is the epitome of luxury travel in India.",
          "Booking palace stays, especially the Taj Lake Palace, requires planning many months in advance.",
        ],
      },
      {
        tripId: 72,
        title: "Offbeat Rajasthan: Shekhawati's Havelis & Desert Life",
        tripDescription:
          "A 10-day road trip that delves into the lesser-seen parts of Rajasthan. Explore the painted havelis of the Shekhawati region, live with a local family in a desert village, and discover the charming, non-touristy towns of Bundi and Bikaner.",
        duration: "9N-10D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "road trip",
          "culture",
          "heritage",
          "homestay",
          "art",
        ],
        customizable: true,
        badge: { type: "offbeat", text: "The Painted Route" },
        capacity: 8,
        meals: "9 Breakfasts, 1 Lunch, 4 Dinners",
        accommodations:
          "Heritage havelis in Shekhawati, a hotel in Bikaner, a rural homestay near Khuri, a haveli hotel in Bundi, and a hotel in Jaipur.",
        baseCity: "Delhi",
        route: ["Delhi", "Mandawa", "Bikaner", "Khuri", "Bundi", "Jaipur"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Delhi to Shekhawati (Mandawa)",
            details:
              "Start your road trip from Delhi. Drive to the Shekhawati region and check into a restored heritage haveli in Mandawa.",
          },
          {
            day: 2,
            summary: "The Open-Air Art Gallery",
            details:
              "Spend the day exploring the beautifully frescoed havelis of Mandawa, Fatehpur, and Nawalgarh. The entire region is like an open-air art gallery.",
          },
          {
            day: 3,
            summary: "Journey to Bikaner",
            details:
              "Drive to the desert city of Bikaner. Visit the impressive Junagarh Fort and the infamous Karni Mata Temple (Rat Temple) in Deshnoke.",
          },
          {
            day: 4,
            summary: "To the Desert Village of Khuri",
            details:
              "Drive towards Jaisalmer but turn off to the quieter desert village of Khuri. Check into a traditional rural homestay.",
          },
          {
            day: 5,
            summary: "Authentic Desert Experience",
            details:
              "Spend the day experiencing desert life. Take a camel ride into the dunes, learn to cook a local meal with your hosts, and sleep on a charpoy under a blanket of stars.",
          },
          {
            day: 6,
            summary: "Khuri to Bundi",
            details:
              "A long driving day. Travel from the desert to the charming, lesser-visited town of Bundi, known for its stunning fort, step-wells, and miniature paintings.",
          },
          {
            day: 7,
            summary: "Exploring Bundi",
            details:
              "Explore the Bundi Palace with its beautiful murals and the imposing Taragarh Fort. In the afternoon, wander through the blue lanes of the old town and visit a step-well (baori).",
          },
          {
            day: 8,
            summary: "Bundi to Jaipur",
            details:
              "A shorter drive to Jaipur. Check into your hotel. In the evening, you can opt to watch a Bollywood movie at the famous Raj Mandir cinema.",
          },
          {
            day: 9,
            summary: "Jaipur's Highlights & Farewell",
            details:
              "A quick tour of Jaipur's main sights like Amer Fort and Hawa Mahal. Enjoy a final farewell dinner at a rooftop restaurant.",
          },
          {
            day: 10,
            summary: "Return to Delhi",
            details: "Drive back to Delhi in the morning for your departure.",
          },
        ],
        includes: [
          "All accommodation as specified",
          "Private AC car with driver for the entire circuit",
          "Meals as specified",
          "Camel safari and one night under the stars in Khuri",
        ],
        excludes: [
          "Flights",
          "Guide services",
          "Entrance fees to monuments",
          "Most meals",
          "Travel insurance",
        ],
        notes: [
          "This trip offers a deep dive into the rural and artistic heritage of Rajasthan.",
          "The homestay in Khuri is very basic but provides an unmatched authentic experience.",
        ],
      },
      {
        tripId: 73,
        title: "Rajasthan Experience: The Desert Triangle",
        tripDescription:
          "An 8-day classic journey through the heart of Rajasthan's desert circuit. Explore the vibrant cities of Jodhpur, Jaisalmer, and Bikaner, ride a camel into the sunset on the Sam Sand Dunes, and immerse yourself in the history and culture of Marwar.",
        duration: "7N-8D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "classic",
          "desert",
          "forts",
          "culture",
          "camel safari",
        ],
        customizable: true,
        badge: { type: "experience", text: "Desert Circuit" },
        capacity: 16,
        meals: "7 Breakfasts, 1 Dinner",
        accommodations:
          "Comfortable 3/4-star hotels and heritage havelis, 1 night in a desert camp.",
        baseCity: "Jodhpur",
        route: ["Jodhpur", "Jaisalmer", "Sam Sand Dunes", "Bikaner"],
        isCircuit: true,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Jodhpur",
            details:
              "Arrive in the Blue City, Jodhpur. Check into your hotel. In the evening, explore the old city and the Clock Tower market.",
          },
          {
            day: 2,
            summary: "Mehrangarh Fort & Jaswant Thada",
            details:
              "Visit the mighty Mehrangarh Fort, which offers stunning views of the blue city. Also visit the Jaswant Thada, a beautiful marble cenotaph.",
          },
          {
            day: 3,
            summary: "Drive to Jaisalmer",
            details:
              "A scenic drive through the Thar Desert to the Golden City of Jaisalmer. Check into your hotel inside or near the fort.",
          },
          {
            day: 4,
            summary: "Jaisalmer Fort & Havelis",
            details:
              "Explore the living Jaisalmer Fort, with its narrow lanes, temples, and houses. In the afternoon, visit the intricately carved Patwon Ki Haveli and Nathmal Ki Haveli.",
          },
          {
            day: 5,
            summary: "Camel Safari & Desert Camp",
            details:
              "Drive to the Sam Sand Dunes. Enjoy a camel safari into the desert to watch the sunset. Overnight in a desert camp with a cultural program and dinner.",
          },
          {
            day: 6,
            summary: "Journey to Bikaner",
            details:
              "After breakfast, drive to Bikaner. Check into your hotel. In the afternoon, visit the camel breeding farm.",
          },
          {
            day: 7,
            summary: "Bikaner Fort & Return to Jodhpur",
            details:
              "Visit the Junagarh Fort in Bikaner. In the afternoon, begin your drive back to Jodhpur. Farewell dinner in Jodhpur.",
          },
          {
            day: 8,
            summary: "Departure",
            details:
              "After breakfast, transfer to Jodhpur Airport (JDH) or the railway station for your onward journey.",
          },
        ],
        includes: [
          "All accommodation",
          "Private AC vehicle for the tour",
          "Breakfast daily and one dinner at the desert camp",
          "Camel safari in Jaisalmer",
          "Entrance fees for standard sightseeing",
        ],
        excludes: [
          "Flights/Trains to/from Jodhpur",
          "Guides in the cities",
          "Lunches and most dinners",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "This is a classic road trip covering the main highlights of western Rajasthan.",
          "The desert can be very hot during the day and cold at night; pack accordingly.",
        ],
      },
    ],
  },
  {
    destination_id: 25,
    destination_name: "Andaman & Nicobar Islands",
    category: "domestic",
    destination_description:
      "The Andaman and Nicobar Islands are a stunning archipelago in the Bay of Bengal, a slice of paradise with pristine white-sand beaches, turquoise waters, and lush tropical rainforests. Famous for their world-class coral reefs and vibrant marine life, they are a haven for scuba diving, snorkeling, and relaxation.\n\nKey highlights include:\n- **Havelock Island (Swaraj Dweep)** - The most popular island, home to the world-famous Radhanagar Beach.\n- **Neil Island (Shaheed Dweep)** - A quieter island with a relaxed vibe and beautiful beaches like Bharatpur and Laxmanpur.\n- **Port Blair** - The capital city and gateway to the islands, rich with history including the infamous Cellular Jail.\n- **Scuba Diving & Snorkeling** - Explore the incredible underwater world and vibrant coral reefs.\n- **Radhanagar Beach** - Consistently ranked among the best beaches in Asia for its stunning beauty and sunsets.",
    thumbnail_image: "",
    hero_image: "",
    hero_image_description: "",
    reviews: [],
    trips: [
      {
        tripId: 74,
        title: "Andaman Luxury Escape: Private Villas, Yachts & Seaplanes",
        tripDescription:
          "A 7-day ultra-luxurious journey through the Andaman Islands. Stay in private pool villas at exclusive resorts, charter a private yacht for island hopping, enjoy gourmet beach dinners, and experience the islands' beauty from a seaplane.",
        duration: "6N-7D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "luxury",
          "beach",
          "romance",
          "scuba diving",
          "yacht",
          "seaplane",
        ],
        customizable: true,
        badge: { type: "luxury", text: "Island Paradise" },
        capacity: 4,
        meals: "6 Breakfasts, 4 Lunches, 5 Dinners",
        accommodations:
          "2 nights in a luxury hotel in Port Blair, 4 nights in a private pool villa at a luxury resort on Havelock Island (e.g., Taj Exotica).",
        baseCity: "Port Blair",
        route: ["Port Blair", "Havelock Island", "Neil Island"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Port Blair",
            details:
              "Arrive at Port Blair Airport (IXZ). VIP transfer to your luxury hotel. Evening at leisure.",
          },
          {
            day: 2,
            summary: "Seaplane to Havelock & Villa Life",
            details:
              "Experience a breathtaking seaplane transfer from Port Blair to Havelock Island. Check into your private pool villa at a luxury beachfront resort. The rest of the day is for relaxation.",
          },
          {
            day: 3,
            summary: "Private Yacht to Neil Island",
            details:
              "Charter a private yacht for a full-day trip to Neil Island. Explore its quiet beaches and enjoy a gourmet lunch prepared by your onboard chef. Snorkel at prime, secluded spots.",
          },
          {
            day: 4,
            summary: "Private Scuba Diving Experience",
            details:
              "Embark on a private scuba diving excursion with a personal dive master. Explore the vibrant coral reefs and marine life of the Andaman Sea. This is tailored for both beginners (Discover Scuba) and certified divers.",
          },
          {
            day: 5,
            summary: "Radhanagar Beach & Private Sunset Dinner",
            details:
              "Spend the afternoon at the world-renowned Radhanagar Beach. In the evening, enjoy a private, candle-lit barbecue dinner set up specially for you on a quiet part of the beach.",
          },
          {
            day: 6,
            summary: "Return to Port Blair & Cellular Jail",
            details:
              "Take a luxury ferry back to Port Blair. Check back into your hotel. In the evening, a private guide will take you to the Cellular Jail for the Sound and Light Show, narrating its poignant history.",
          },
          {
            day: 7,
            summary: "Departure",
            details:
              "After breakfast, take a private transfer to Port Blair airport for your departure.",
          },
        ],
        includes: [
          "All luxury accommodation",
          "Seaplane transfer",
          "Private yacht charter",
          "Private scuba diving session",
          "Private vehicle for all land transfers",
          "Luxury ferry tickets",
          "Private guide for Cellular Jail",
          "Meals as specified",
        ],
        excludes: [
          "Flights to/from Port Blair",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "Seaplane operations are subject to weather and availability.",
          "This itinerary is perfect for honeymoons and special occasions.",
        ],
      },
      {
        tripId: 75,
        title: "Andaman's Diving Deep: An Offbeat Scuba Adventure",
        tripDescription:
          "A 9-day trip focused on exploring the incredible underwater world of the Andamans. Get your PADI Open Water certification, or if already certified, explore deeper dive sites, stay in a diver-focused resort, and discover the less-visited marine ecosystems.",
        duration: "8N-9D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "offbeat",
          "adventure",
          "scuba diving",
          "beach",
          "nature",
          "marine life",
        ],
        customizable: true,
        badge: { type: "adventure", text: "Dive Expedition" },
        capacity: 10,
        meals: "8 Breakfasts",
        accommodations:
          "1 night in a Port Blair hotel, 7 nights in a dive resort on Havelock Island.",
        baseCity: "Port Blair",
        route: ["Port Blair", "Havelock Island"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Port Blair",
            details:
              "Arrive in Port Blair, transfer to your hotel. Meet your dive master in the evening for a course briefing.",
          },
          {
            day: 2,
            summary: "Ferry to Havelock & Dive Course Begins",
            details:
              "Take an early morning ferry to Havelock Island. Check into your dive resort. Begin your PADI Open Water Diver course with theory sessions and confined water (pool) training.",
          },
          {
            day: 3,
            summary: "Open Water Dives 1 & 2",
            details:
              "Your first two open water dives! Practice your skills under the direct supervision of your PADI instructor at a shallow and calm dive site.",
          },
          {
            day: 4,
            summary: "Open Water Dives 3 & 4 - Certification!",
            details:
              "Complete your final two open water dives to a maximum depth of 18 meters. Upon successful completion, you are now a certified PADI Open Water Diver!",
          },
          {
            day: 5,
            summary: "Fun Dives as a Certified Diver",
            details:
              "Enjoy your first fun dives as a certified diver. Explore famous dive sites like 'The Wall' or 'Johnny's Gorge' (for advanced divers).",
          },
          {
            day: 6,
            summary: "Exploring Havelock on Land",
            details:
              "Take a break from diving. Rent a scooter and explore Havelock Island. Visit Radhanagar Beach for sunset and explore the local market.",
          },
          {
            day: 7,
            summary: "Advanced Adventure Dive (Night Dive)",
            details:
              "For those interested, do an Advanced Adventure dive. The most thrilling option is a night dive, to see the completely different marine life that comes out after dark.",
          },
          {
            day: 8,
            summary: "Return to Port Blair",
            details:
              "Enjoy a final morning on Havelock. Take an afternoon ferry back to Port Blair. Farewell dinner with your dive buddies.",
          },
          {
            day: 9,
            summary: "Departure",
            details: "Transfer to Port Blair airport for your departure.",
          },
        ],
        includes: [
          "All accommodation",
          "PADI Open Water Diver course (or an equivalent number of fun dives for certified divers)",
          "All dive equipment rental",
          "Ferry tickets between Port Blair and Havelock",
          "Airport transfers",
        ],
        excludes: [
          "Flights to/from Port Blair",
          "All meals except breakfast",
          "Personal expenses",
          "Scooter rental",
          "Travel and diving insurance",
        ],
        notes: [
          "You must be medically fit for diving.",
          "You cannot fly for at least 18-24 hours after your last dive, so plan your flights accordingly.",
        ],
      },
      {
        tripId: 76,
        title: "Andaman Experience: Islands, Beaches & History",
        tripDescription:
          "A classic 6-day Andaman itinerary perfect for first-timers, families, and couples. It covers the historical sights of Port Blair, the stunning beauty of Havelock Island's Radhanagar Beach, and the pristine charm of Neil Island.",
        duration: "5N-6D",
        price: "",
        originalPrice: "",
        discountAmount: "",
        image: "",
        other_images: [],
        features: [
          "experience",
          "classic",
          "beach",
          "family",
          "snorkeling",
          "history",
        ],
        customizable: true,
        badge: { type: "experience", text: "Classic Andamans" },
        capacity: 20,
        meals: "5 Breakfasts",
        accommodations:
          "2 nights in a 3-star hotel in Port Blair, 2 nights in a 3-star resort on Havelock, 1 night in a 3-star resort on Neil Island.",
        baseCity: "Port Blair",
        route: ["Port Blair", "Havelock Island", "Neil Island"],
        isCircuit: false,
        batches: [],
        itinerary: [
          {
            day: 1,
            summary: "Arrival in Port Blair & Cellular Jail",
            details:
              "Arrive in Port Blair. Transfer to your hotel. In the afternoon, visit the historic Cellular Jail. In the evening, attend the moving Sound and Light Show at the jail.",
          },
          {
            day: 2,
            summary: "Ferry to Havelock & Radhanagar Beach",
            details:
              "Take a morning cruise to Havelock Island. Check into your resort. In the afternoon, visit Radhanagar Beach, famed as one of Asia's best beaches, to witness a spectacular sunset.",
          },
          {
            day: 3,
            summary: "Elephant Beach Snorkeling",
            details:
              "Take a boat to Elephant Beach for an exciting session of complimentary snorkeling to see the beautiful coral reefs. The rest of the day is free to relax.",
          },
          {
            day: 4,
            summary: "Havelock to Neil Island",
            details:
              "Take a morning ferry to the tranquil Neil Island. Visit the natural rock formation known as the Natural Bridge. Check into your resort.",
          },
          {
            day: 5,
            summary: "Neil Island Beaches & Return to Port Blair",
            details:
              "Visit the beautiful Bharatpur and Laxmanpur beaches. In the afternoon, take a ferry back to Port Blair. Do some last-minute souvenir shopping.",
          },
          {
            day: 6,
            summary: "Departure",
            details:
              "After breakfast, transfer to the airport for your flight home.",
          },
        ],
        includes: [
          "All accommodation",
          "Private AC vehicle for sightseeing in Port Blair",
          "Shared transport on the islands",
          "All ferry tickets (Port Blair - Havelock - Neil - Port Blair)",
          "Entry tickets to Cellular Jail and monuments",
          "One complimentary snorkeling session at Elephant Beach",
        ],
        excludes: [
          "Flights to/from Port Blair",
          "All meals except breakfast",
          "Watersports activities",
          "Personal expenses",
          "Travel insurance",
        ],
        notes: [
          "This is a well-paced itinerary covering the most popular islands.",
          "Ferries are the lifeline of the Andamans; book them in advance, especially during peak season.",
        ],
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
