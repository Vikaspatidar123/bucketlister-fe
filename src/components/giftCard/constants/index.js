import { banner1 } from "@/assets/png";
import { banner2, banner3 } from "@/assets/webp";

// Central gift card catalog used by listing and detail pages
export const GIFT_CARD_ITEMS = [
  {
    id: 1,
    title: "Best Friends Forever",
    imageUrl:
      "https://wanderon-images.gumlet.io/Gift-card/Best%20Friends%20Forever.webp?updatedAt=1739367382777",
  },
  {
    id: 2,
    title: "Best Siblings",
    imageUrl:
      "	https://wanderon-images.gumlet.io/Gift-card/Best%20Siblings.webp?updatedAt=173936738258",
  },
  {
    id: 3,
    title: "Happy Birthday",
    imageUrl:
      "https://wanderon-images.gumlet.io/Gift-card/Happy%20Birthday.webp?updatedAt=1739367382612",
  },
  { id: 4, title: "Happy Wedding", imageUrl: banner1 },
  { id: 5, title: "Family Vacay", imageUrl: banner2 },
  { id: 6, title: "Love You", imageUrl: banner3 },
  { id: 7, title: "Honey-Moon", imageUrl: banner1 },
  { id: 8, title: "Travel Gift Card", imageUrl: banner2 },
];

export default GIFT_CARD_ITEMS;
