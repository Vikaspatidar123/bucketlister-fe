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
    label: "Group Trips",
    hasDropdown: false,
    href: "/explore/list",
  },
  // {
  //   label: "Customise Your Trip",
  //   hasDropdown: false,
  //   href: "/customise-trip",
  //   isHighlighted: true,
  // },
  {
    label: "Christmas & New Year",
    hasDropdown: false,
    href: "/explore/list?date=dec",
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

// Dynamic dropdowns derived from Travel Packages data
import { mapDestinationsByCategory } from "@/utils/travelData";

export const INTERNATIONAL_DESTINATIONS = mapDestinationsByCategory("international");

export const DOMESTIC_DESTINATIONS = mapDestinationsByCategory("domestic");

// Optional extra column for Domestic dropdown
export const DOMESTIC_WEEKEND_GETAWAYS = {
  title: "Weekend Getaways",
  items: mapDestinationsByCategory("weekend"),
};

// More dropdown links
export const MORE_LINKS = [
  { label: "Blogs", href: "/blogs" },
  // { label: "About us", href: "/about" },
  // { label: "Refer a friend", href: "/refer" },
  // { label: "Careers", href: "/careers" },
];
