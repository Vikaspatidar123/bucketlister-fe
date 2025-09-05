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
  phone: ["+91 702664759"],
  email: "sales.thebucketlister@gmail.com",
  socialMedia: [
    { name: "YouTube", icon: youtubeIcon, url: "https://www.youtube.com/@the_bucketlister" },
    { name: "Facebook", icon: facebookIcon, url: "https://www.facebook.com/TheBucketlisterTravels" },
    { name: "Instagram", icon: instagramIconFooter, url: "https://www.instagram.com/thebucketlister_/" },
    { name: "LinkedIn", icon: linkedinIcon, url: "https://www.linkedin.com/company/the-bucketlister" },
  ],
};

export const FOOTER_LINKS = {
  international: [
    { name: "Thailand", url: "/explore?destinationId=8" },
    { name: "Vietnam", url: "/explore?destinationId=7" },
    { name: "Europe", url: "/explore?destinationId=14" },
    { name: "Japan", url: "/explore?destinationId=12" },
  ],
  popularUpcoming: [
    { name: "Gokarna", url: "/explore?destinationId=4" },
    { name: "Himachal", url: "/explore?destinationId=3" },
    { name: "Kashmir", url: "/explore?destinationId=20" },
    { name: "Ladakh", url: "/explore?destinationId=19" },
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
