// Travel Packages Data for the new section
export const TRAVEL_PACKAGES_DATA = [
  {
    id: 1,
    title: "Beach & Sands",
    destination: "beach",
    duration: "7D-8N",
    price: "Rs. 23,000/-",
    image: "/assets/png/banner1.jpg",
    availableDates: ["may25", "jun25", "jul25", "aug25", "sep25", "oct25", "nov25"],
    features: ["beach", "relaxation", "water-sports"],
    customizable: false
  },
  {
    id: 2,
    title: "Summer Fun",
    destination: "beach",
    duration: "7D-8N",
    price: "Rs. 23,000/-",
    image: "/assets/png/banner1.jpg",
    availableDates: ["jun25", "jul25", "aug25"],
    features: ["beach", "adventure", "family"],
    customizable: true,
    badge: {
      type: "new",
      text: "New Addition"
    }
  },
  {
    id: 3,
    title: "Beach & Sands",
    destination: "beach",
    duration: "7D-8N",
    price: "Rs. 23,000/-",
    image: "/assets/png/banner1.jpg",
    availableDates: ["jul25", "aug25", "sep25", "oct25"],
    features: ["beach", "relaxation", "luxury"],
    customizable: false
  },
  {
    id: 4,
    title: "Crystal Waters",
    destination: "island",
    duration: "7D-8N",
    price: "Rs. 23,000/-",
    image: "/assets/png/banner1.jpg",
    availableDates: ["may25", "jun25", "jul25", "aug25"],
    features: ["island", "luxury", "water-activities"],
    customizable: true,
    badge: {
      type: "luxe",
      text: "Luxe"
    }
  },
  {
    id: 5,
    title: "Out & About",
    destination: "nature",
    duration: "7D-8N",
    price: "Rs. 23,000/-",
    image: "/assets/png/banner1.jpg",
    availableDates: ["jul25", "aug25", "sep25", "oct25"],
    features: ["nature", "adventure", "outdoor"],
    customizable: true,
    badge: {
      type: "nature",
      text: "Nature Overload"
    }
  },
  {
    id: 6,
    title: "Suba safari",
    destination: "underwater",
    duration: "7D-8N",
    price: "Rs. 23,000/-",
    image: "/assets/png/banner1.jpg",
    availableDates: ["jun25", "jul25", "aug25", "sep25"],
    features: ["underwater", "adventure", "marine-life"],
    customizable: true
  },
  {
    id: 7,
    title: "Suba safari",
    destination: "underwater",
    duration: "7D-8N",
    price: "Rs. 23,000/-",
    image: "/assets/png/banner1.jpg",
    availableDates: ["jul25", "aug25", "sep25"],
    features: ["underwater", "adventure", "photography"],
    customizable: true
  },
  {
    id: 8,
    title: "Suba safari",
    destination: "underwater",
    duration: "7D-8N",
    price: "Rs. 23,000/-",
    image: "/assets/png/banner1.jpg",
    availableDates: ["aug25", "sep25", "oct25"],
    features: ["underwater", "adventure", "training"],
    customizable: true
  }
];

// Filter Options for the travel packages section
export const FILTER_OPTIONS = {
  destinations: [
    { value: "beach", label: "Beach Destinations" },
    { value: "mountain", label: "Mountain Destinations" },
    { value: "city", label: "City Destinations" },
    { value: "island", label: "Island Destinations" },
    { value: "nature", label: "Nature Destinations" },
    { value: "underwater", label: "Underwater Destinations" },
    { value: "cultural", label: "Cultural Destinations" },
    { value: "adventure", label: "Adventure Destinations" }
  ],
  price: [
    { value: "0-10000", label: "Under ₹10,000" },
    { value: "10000-25000", label: "₹10,000 - ₹25,000" },
    { value: "25000-50000", label: "₹25,000 - ₹50,000" },
    { value: "50000-100000", label: "₹50,000 - ₹1,00,000" },
    { value: "100000+", label: "Above ₹1,00,000" }
  ],
  dates: [
    { value: "may25", label: "May 2025" },
    { value: "jun25", label: "June 2025" },
    { value: "jul25", label: "July 2025" },
    { value: "aug25", label: "August 2025" },
    { value: "sep25", label: "September 2025" },
    { value: "oct25", label: "October 2025" },
    { value: "nov25", label: "November 2025" }
  ],
  features: [
    { value: "beach", label: "Beach Access" },
    { value: "mountain", label: "Mountain Views" },
    { value: "adventure", label: "Adventure Activities" },
    { value: "luxury", label: "Luxury Accommodation" },
    { value: "family", label: "Family Friendly" },
    { value: "romantic", label: "Romantic Getaway" },
    { value: "cultural", label: "Cultural Experience" },
    { value: "nature", label: "Nature & Wildlife" },
    { value: "water-activities", label: "Water Activities" },
    { value: "relaxation", label: "Relaxation & Spa" }
  ],
  sort: [
    { value: "default", label: "Default Sort" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "duration", label: "Duration: Short to Long" },
    { value: "name", label: "Name: A to Z" }
  ]
};

// Date Tabs for the travel packages section
export const DATE_TABS = [
  { id: 'all', label: 'All' },
  { id: 'may25', label: "May '25" },
  { id: 'jun25', label: "Jun '25" },
  { id: 'jul25', label: "Jul '25" },
  { id: 'aug25', label: "Aug '25" },
  { id: 'sep25', label: "Sep '25" },
  { id: 'oct25', label: "Oct '25" },
  { id: 'nov25', label: "Nov '25" }
];
