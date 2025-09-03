export const NAVIGATION_ITEMS = [
  {
    label: "International",
    hasDropdown: true,
    href: "/international",
  },
  {
    label: "Domestic",
    hasDropdown: true,
    href: "/domestic",
  },
  {
    label: "Upcoming Tours",
    hasDropdown: false,
    href: "/explore/list",
  },
  {
    label: "Customise Your Trip",
    hasDropdown: false,
    href: "/customise-trip",
    isHighlighted: true,
  },
  {
    label: "More",
    hasDropdown: true,
    href: "/more",
  },
];

export const CONTACT_INFO = {
  phone: "+91 987654321",
  phoneIcon: "📞",
};

export const BRAND_INFO = {
  name: "THE BUCKETLISTER",
  logoPath: "/assets/png/logo.png",
};

// Curated static dropdowns (subset of destinations)
export const INTERNATIONAL_DESTINATIONS = [
  { label: "Thailand", href: "/explore?destinationId=1" },
  { label: "Europe", href: "/explore?destinationId=2" },
  { label: "Indonesia", href: "/explore?destinationId=3" },
  { label: "Egypt", href: "/explore?destinationId=5" },
  { label: "Japan", href: "/explore?destinationId=8" },
  { label: "Singapore", href: "/explore?destinationId=10" },
  { label: "Maldives", href: "/explore?destinationId=11" },
  { label: "Dubai", href: "/explore?destinationId=12" },
];

export const DOMESTIC_DESTINATIONS = [
  { label: "Kerala", href: "/explore?destinationId=13" },
  { label: "Goa", href: "/explore?destinationId=14" },
  { label: "Rajasthan", href: "/explore?destinationId=15" },
  { label: "Himachal Pradesh", href: "/explore?destinationId=16" },
  { label: "Ladakh", href: "/explore?destinationId=17" },
  { label: "Kashmir", href: "/explore?destinationId=18" },
];

// Optional extra column for Domestic dropdown
export const DOMESTIC_WEEKEND_GETAWAYS = {
  title: "Weekend Getaways",
  items: [
    { label: "Lonavala", href: "/explore?destinationId=19" },
    { label: "Mahabaleshwar", href: "/explore?destinationId=20" },
  ],
};

// More dropdown links
export const MORE_LINKS = [
  { label: "Blogs", href: "/blogs" },
  { label: "About us", href: "/about" },
  { label: "Refer a friend", href: "/refer" },
  { label: "Careers", href: "/careers" },
];
