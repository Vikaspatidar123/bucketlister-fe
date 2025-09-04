import { destinationIcon, instagramIcon, reviewIcon } from "@/assets/svg";
import { bigGroupImage, smallGroupImage, soloImage } from "@/assets/webp";

export const HERO_DATA = {
  mainHeading: {
    line1: "Stop Dreaming,",
    line2: "Start Living"
  },
  searchForm: {
    destination: {
      placeholder: "Where would you like to go?",
      label: "Destination"
    },
    date: {
      placeholder: "When would you like to go?",
      label: "Travel Date"
    },
    searchButton: "Search"
  }
};

export const STATS_DATA = [
  {
    id: 1,
    icon: reviewIcon,
    text: "★4.9 Stars (700+ Reviews)"
  },
  {
    id: 2,
    icon: destinationIcon,
    text: "50+ Destinations"
  },
  {
    id: 3,
    icon: destinationIcon,
    text: "50,000+ Satisfied Travellers"
  },
  {
    id: 4,
    icon: instagramIcon,
    text: "17K+ Following"
  }
];

export const DESTINATION_TABS = [
  { id: 'all', label: 'All', isActive: true },
  { id: 'international', label: 'International', isActive: false },
  { id: 'domestic', label: 'Domestic', isActive: false },
  { id: 'weekend', label: 'Weekend', isActive: false }
];



export const DESTINATIONS_DATA = {
  international: [
    {
      id: 1,
      name: 'Thailand',
      image: '/assets/png/thailand.jpg',
      category: 'international',
      rating: 4.8,
      price: '₹45,000',
      duration: '6 Days'
    },
    {
      id: 2,
      name: 'Europe',
      image: '/assets/png/europe.jpg',
      category: 'international',
      rating: 4.9,
      price: '₹1,25,000',
      duration: '12 Days'
    },
    {
      id: 3,
      name: 'Indonesia',
      image: '/assets/png/indonesia.jpg',
      category: 'international',
      rating: 4.7,
      price: '₹52,000',
      duration: '7 Days'
    },
    {
      id: 4,
      name: 'Vietnam',
      image: '/assets/png/vietnam.jpg',
      category: 'international',
      rating: 4.6,
      price: '₹48,000',
      duration: '8 Days'
    },
    {
      id: 5,
      name: 'Egypt',
      image: '/assets/png/egypt.jpg',
      category: 'international',
      rating: 4.8,
      price: '₹75,000',
      duration: '10 Days'
    },
    {
      id: 6,
      name: 'USA',
      image: '/assets/png/usa.jpg',
      category: 'international',
      rating: 4.9,
      price: '₹1,50,000',
      duration: '15 Days'
    },
    {
      id: 7,
      name: 'Canada',
      image: '/assets/png/canada.jpg',
      category: 'international',
      rating: 4.7,
      price: '₹1,35,000',
      duration: '14 Days'
    },
    {
      id: 8,
      name: 'Argentina',
      image: '/assets/png/argentina.jpg',
      category: 'international',
      rating: 4.6,
      price: '₹95,000',
      duration: '12 Days'
    },
    {
      id: 9,
      name: 'Brazil',
      image: '/assets/png/brazil.jpg',
      category: 'international',
      rating: 4.7,
      price: '₹88,000',
      duration: '11 Days'
    },
    {
      id: 10,
      name: 'South Africa',
      image: '/assets/png/south-africa.jpg',
      category: 'international',
      rating: 4.8,
      price: '₹82,000',
      duration: '13 Days'
    },
    {
      id: 11,
      name: 'Japan',
      image: '/assets/png/japan.jpg',
      category: 'international',
      rating: 4.9,
      price: '₹1,80,000',
      duration: '14 Days'
    },
    {
      id: 12,
      name: 'Australia',
      image: '/assets/png/australia.jpg',
      category: 'international',
      rating: 4.8,
      price: '₹2,00,000',
      duration: '16 Days'
    },
    {
      id: 13,
      name: 'New Zealand',
      image: '/assets/png/new-zealand.jpg',
      category: 'international',
      rating: 4.7,
      price: '₹1,95,000',
      duration: '15 Days'
    },
    {
      id: 14,
      name: 'Singapore',
      image: '/assets/png/singapore.jpg',
      category: 'international',
      rating: 4.6,
      price: '₹55,000',
      duration: '5 Days'
    },
    {
      id: 15,
      name: 'Malaysia',
      image: '/assets/png/malaysia.jpg',
      category: 'international',
      rating: 4.5,
      price: '₹48,000',
      duration: '6 Days'
    },
    {
      id: 16,
      name: 'Philippines',
      image: '/assets/png/philippines.jpg',
      category: 'international',
      rating: 4.4,
      price: '₹42,000',
      duration: '7 Days'
    },
    {
      id: 17,
      name: 'Cambodia',
      image: '/assets/png/cambodia.jpg',
      category: 'international',
      rating: 4.3,
      price: '₹38,000',
      duration: '5 Days'
    },
    {
      id: 18,
      name: 'Laos',
      image: '/assets/png/laos.jpg',
      category: 'international',
      rating: 4.2,
      price: '₹35,000',
      duration: '4 Days'
    },
    {
      id: 19,
      name: 'Myanmar',
      image: '/assets/png/myanmar.jpg',
      category: 'international',
      rating: 4.1,
      price: '₹40,000',
      duration: '6 Days'
    },
    {
      id: 20,
      name: 'Sri Lanka',
      image: '/assets/png/sri-lanka.jpg',
      category: 'international',
      rating: 4.0,
      price: '₹45,000',
      duration: '8 Days'
    }
  ],
  domestic: [
    {
      id: 52,
      name: 'Spiti',
      image: '/assets/png/kerala.jpg',
      category: 'domestic',
      rating: 4.8,
      price: '₹25,000',
      duration: '5 Days'
    },
    {
      id: 21,
      name: 'Kerala',
      image: '/assets/png/kerala.jpg',
      category: 'domestic',
      rating: 4.8,
      price: '₹25,000',
      duration: '5 Days'
    },
    {
      id: 22,
      name: 'Goa',
      image: '/assets/png/goa.jpg',
      category: 'domestic',
      rating: 4.7,
      price: '₹22,000',
      duration: '4 Days'
    },
    {
      id: 23,
      name: 'Rajasthan',
      image: '/assets/png/rajasthan.jpg',
      category: 'domestic',
      rating: 4.9,
      price: '₹28,000',
      duration: '6 Days'
    },
    {
      id: 24,
      name: 'Himachal',
      image: '/assets/png/himachal.jpg',
      category: 'domestic',
      rating: 4.8,
      price: '₹30,000',
      duration: '7 Days'
    },
    {
      id: 25,
      name: 'Uttarakhand',
      image: '/assets/png/uttarakhand.jpg',
      category: 'domestic',
      rating: 4.7,
      price: '₹26,000',
      duration: '5 Days'
    },
    {
      id: 26,
      name: 'Kashmir',
      image: '/assets/png/kashmir.jpg',
      category: 'domestic',
      rating: 4.9,
      price: '₹35,000',
      duration: '8 Days'
    },
    {
      id: 27,
      name: 'Sikkim',
      image: '/assets/png/sikkim.jpg',
      category: 'domestic',
      rating: 4.8,
      price: '₹32,000',
      duration: '7 Days'
    },
    {
      id: 28,
      name: 'Arunachal Pradesh',
      image: '/assets/png/arunachal.jpg',
      category: 'domestic',
      rating: 4.7,
      price: '₹38,000',
      duration: '9 Days'
    },
    {
      id: 29,
      name: 'Meghalaya',
      image: '/assets/png/meghalaya.jpg',
      category: 'domestic',
      rating: 4.6,
      price: '₹28,000',
      duration: '6 Days'
    },
    {
      id: 30,
      name: 'Nagaland',
      image: '/assets/png/nagaland.jpg',
      category: 'domestic',
      rating: 4.5,
      price: '₹30,000',
      duration: '7 Days'
    },
    {
      id: 31,
      name: 'Manipur',
      image: '/assets/png/manipur.jpg',
      category: 'domestic',
      rating: 4.4,
      price: '₹26,000',
      duration: '5 Days'
    },
    {
      id: 32,
      name: 'Mizoram',
      image: '/assets/png/mizoram.jpg',
      category: 'domestic',
      rating: 4.3,
      price: '₹24,000',
      duration: '4 Days'
    },
    {
      id: 33,
      name: 'Tripura',
      image: '/assets/png/tripura.jpg',
      category: 'domestic',
      rating: 4.2,
      price: '₹22,000',
      duration: '3 Days'
    },
    {
      id: 34,
      name: 'Assam',
      image: '/assets/png/assam.jpg',
      category: 'domestic',
      rating: 4.1,
      price: '₹25,000',
      duration: '5 Days'
    },
    {
      id: 35,
      name: 'West Bengal',
      image: '/assets/png/west-bengal.jpg',
      category: 'domestic',
      rating: 4.0,
      price: '₹20,000',
      duration: '4 Days'
    },{
      id: 51,
      name: 'Meghalaya',
      image: '/assets/png/west-bengal.jpg',
      category: 'domestic',
      rating: 4.0,
      price: '₹25,000',
      duration: '9 Days'
    }
  ],
  weekend: [
    {
      id: 36,
      name: 'Lonavala',
      image: '/assets/png/lonavala.jpg',
      category: 'weekend',
      rating: 4.6,
      price: '₹8,000',
      duration: '2 Days'
    },
    {
      id: 37,
      name: 'Mahabaleshwar',
      image: '/assets/png/mahabaleshwar.jpg',
      category: 'weekend',
      rating: 4.7,
      price: '₹9,500',
      duration: '2 Days'
    },
    {
      id: 38,
      name: 'Alibaug',
      image: '/assets/png/alibaug.jpg',
      category: 'weekend',
      rating: 4.5,
      price: '₹7,500',
      duration: '2 Days'
    },
    {
      id: 39,
      name: 'Khandala',
      image: '/assets/png/khandala.jpg',
      category: 'weekend',
      rating: 4.6,
      price: '₹8,500',
      duration: '2 Days'
    },
    {
      id: 40,
      name: 'Matheran',
      image: '/assets/png/matheran.jpg',
      category: 'weekend',
      rating: 4.7,
      price: '₹9,000',
      duration: '2 Days'
    },
    {
      id: 41,
      name: 'Panchgani',
      image: '/assets/png/panchgani.jpg',
      category: 'weekend',
      rating: 4.8,
      price: '₹10,000',
      duration: '2 Days'
    },
    {
      id: 42,
      name: 'Karjat',
      image: '/assets/png/karjat.jpg',
      category: 'weekend',
      rating: 4.5,
      price: '₹6,500',
      duration: '2 Days'
    },
    {
      id: 43,
      name: 'Bhandardara',
      image: '/assets/png/bhandardara.jpg',
      category: 'weekend',
      rating: 4.6,
      price: '₹8,000',
      duration: '2 Days'
    },
    {
      id: 44,
      name: 'Igatpuri',
      image: '/assets/png/igatpuri.jpg',
      category: 'weekend',
      rating: 4.4,
      price: '₹7,000',
      duration: '2 Days'
    },
    {
      id: 45,
      name: 'Nashik',
      image: '/assets/png/nashik.jpg',
      category: 'weekend',
      rating: 4.3,
      price: '₹6,000',
      duration: '2 Days'
    },
    {
      id: 46,
      name: 'Shirdi',
      image: '/assets/png/shirdi.jpg',
      category: 'weekend',
      rating: 4.2,
      price: '₹5,500',
      duration: '2 Days'
    },
    {
      id: 47,
      name: 'Trimbakeshwar',
      image: '/assets/png/trimbakeshwar.jpg',
      category: 'weekend',
      rating: 4.1,
      price: '₹5,000',
      duration: '2 Days'
    },
    {
      id: 48,
      name: 'Bhimashankar',
      image: '/assets/png/bhimashankar.jpg',
      category: 'weekend',
      rating: 4.0,
      price: '₹4,500',
      duration: '2 Days'
    },
    {
      id: 49,
      name: 'Jejuri',
      image: '/assets/png/jejuri.jpg',
      category: 'weekend',
      rating: 3.9,
      price: '₹4,000',
      duration: '2 Days'
    },
    {
      id: 50,
      name: 'Pune',
      image: '/assets/png/pune.jpg',
      category: 'weekend',
      rating: 4.0,
      price: '₹6,500',
      duration: '2 Days'
    }
  ]
};

// Domestic Trips Banner Data
export const DOMESTIC_BANNER_DATA = {
  title: "Domestic Trips",
  description: "Breathtaking landscapes and vibrant cultures—journey from Tokyo's neon streets to Bali's hidden coves.",
  ctaButton: "Explore More",
  carouselSlides: [
    {
      id: 1,
      image: "/assets/png/banner1.jpg",
      title: "Kerala Backwaters",
      subtitle: "Experience the Serene Beauty"
    },
    {
      id: 2,
      image: "/assets/png/banner1.jpg",
      title: "Goa Beaches",
      subtitle: "Sun, Sand & Sea Adventures"
    },
    {
      id: 3,
      image: "/assets/png/banner1.jpg",
      title: "Rajasthan Heritage",
      subtitle: "Discover Royal Traditions"
    },
    {
      id: 4,
      image: "/assets/png/banner1.jpg",
      title: "Himachal Mountains",
      subtitle: "Adventure in the Himalayas"
    }
  ]
};

// Domestic Destinations for Banner Cards
export const DOMESTIC_DESTINATIONS = [
  {
    id: 1,
    name: "Sundarbans",
    image: "/assets/png/banner1.jpg",
    duration: "10D-9N",
    badge: "L"
  },
  {
    id: 2,
    name: "Kaziranga",
    image: "/assets/png/banner1.jpg",
    duration: "10D-9N"
  },
  {
    id: 3,
    name: "Pench",
    image: "/assets/png/banner1.jpg",
    duration: "10D-9N"
  },
  {
    id: 4,
    name: "Tadoba",
    image: "/assets/png/banner1.jpg",
    duration: "10D-9N"
  }
];

// Your Adventure Section Constants
export const YOUR_ADVENTURE_DATA = {
  title: "Your Adventure, Your Way",
  subtitle: "Real Connections. Zero Hassles. All Fun.",
  travelTypes: [
    {
      id: 1,
      icon:soloImage,
      title: "Solo Traveller",
      subtitle: "Never alone",
      description: ""
    },
    {
      id: 2,
      icon: smallGroupImage,
      title: "Small Group (2-3 People)",
      subtitle: "Your crew, our curation",
      description: ""
    },
    {
      id: 3,  
      icon: bigGroupImage,
      title: "Big Group (4+ People)",
      subtitle: "Effortless coordination and spacious fun",
      description: ""
    }
  ]
};






