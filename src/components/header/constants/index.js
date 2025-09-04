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
  phone: "+91 70216 64759",
  phoneIcon: "📞",
};

export const BRAND_INFO = {
  name: "THE BUCKETLISTER",
  logoPath: "/assets/png/logo.png",
};

// Curated static dropdowns (subset of destinations)
export const INTERNATIONAL_DESTINATIONS = [
  { label: "Northern Lights (Finnish Lapland)", href: "/explore?destinationId=7" },
  { label: "Europe", href: "/explore?destinationId=8" },
  { label: "France", href: "/explore?destinationId=9" },
  { label: "Switzerland", href: "/explore?destinationId=10" },
  { label: "Georgia", href: "/explore?destinationId=11" },
  { label: "Kazakhstan (Almaty)", href: "/explore?destinationId=12" },
];

export const DOMESTIC_DESTINATIONS = [
  { label: "Meghalaya", href: "/explore?destinationId=1" },
  { label: "Spiti Valley", href: "/explore?destinationId=2" },
  { label: "Himachal", href: "/explore?destinationId=3" },
  { label: "Kerala", href: "/explore?destinationId=13" },
  { label: "Goa", href: "/explore?destinationId=14" },
  { label: "Rajasthan", href: "/explore?destinationId=15" },
];

// Optional extra column for Domestic dropdown
export const DOMESTIC_WEEKEND_GETAWAYS = {
  title: "Weekend Getaways",
  items: [
    { label: "Gokarna", href: "/explore?destinationId=4" },
    { label: "Hampi", href: "/explore?destinationId=5" },
    { label: "Coorg", href: "/explore?destinationId=6" },
  ],
};

// More dropdown links
export const MORE_LINKS = [
  { label: "Blogs", href: "/blogs" },
  { label: "About us", href: "/about" },
  { label: "Refer a friend", href: "/refer" },
  { label: "Careers", href: "/careers" },
];
