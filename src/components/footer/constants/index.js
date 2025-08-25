import {
  chipIcon,
  curatedIcon,
  immersiveIcon,
  supportIcon,
} from "@/assets/svg";

export const FOOTER_SERVICES = [
  {
    id: 1,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises.",
    icon: chipIcon,
  },
  {
    id: 2,
    title: "Curated Offbeat Journeys",
    description: "Handpicked hidden gems.",
    icon: curatedIcon,
  },
  {
    id: 3,
    title: "Immersive Local Culture",
    description: "Home-stays, street-food & meet-ups.",
    icon: immersiveIcon,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Help whenever you need it.",
    icon: supportIcon,
  },
];

export const COMPANY_INFO = {
  logo: "/assets/png/footer-logo.png",
  name: "THE BUCKETL.STER",
  address:
    "Sai leela commercial complex, 502, Swami Vivekananda Rd, opp. Moksh Plaza, Datta Park Borivali, Mumbai, Maharashtra 400092",
  phone: ["702664759", "9137911579"],
  email: "sales.thebucketlister@gmail.com",
  socialMedia: [
    { name: "YouTube", icon: "📺" },
    { name: "Facebook", icon: "📘" },
    { name: "Twitter", icon: "🐦" },
    { name: "Instagram", icon: "📷" },
    { name: "LinkedIn", icon: "💼" },
  ],
};

export const FOOTER_LINKS = {
  international: [
    { name: "Thailand", url: "/explore?destinationId=1" },
    { name: "Indonesia", url: "/explore?destinationId=3" },
    { name: "Europe", url: "/explore?destinationId=2" },
    { name: "Japan", url: "/explore?destinationId=8" },
  ],
  popularUpcoming: [
    { name: "Goa", url: "/explore?destinationId=14" },
    { name: "Mahabaleshwar", url: "/explore?destinationId=20" },
    { name: "Kashmir", url: "/explore?destinationId=18" },
    { name: "Ladakh", url: "/explore?destinationId=17" },
  ],
  otherServices: [
    "Corporate Trips",
    "Itinerary Planning",
    "Family Vacations",
    "Honeymoon Specials",
  ],
  quickLinks: [
    "About Us",
    "Contact Us",
    "Terms & Conditions",
    "Cancellation Policy",
  ],
};
