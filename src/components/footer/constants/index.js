import {
  chipIcon,
  curatedIcon,
  facebookIcon,
  immersiveIcon,
  instagramIconFooter,
  linkedinIcon,
  supportIcon,
  twitterIcon,
  youtubeIcon
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
    { name: "YouTube", icon: youtubeIcon },
    { name: "Facebook", icon: facebookIcon },
    { name: "Twitter", icon: twitterIcon },
    { name: "Instagram", icon: instagramIconFooter },
    { name: "LinkedIn", icon: linkedinIcon },
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
    { name: "Corporate Trips", url: "/explore/list" },
    { name: "Itinerary Planning", url: "/explore/list" },
    { name: "Family Vacations", url: "/explore/list" },
    { name: "Honeymoon Specials", url: "/explore/list" },
  ],
  quickLinks: [
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact-us" },
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms & Conditions", url: "/terms-and-conditions" },
    { name: "Cancellation Policy", url: "/cancellation-policy" },
  ],
};
