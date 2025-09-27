import React, { Suspense } from "react";
import GiftCards from "@/components/giftCard/components";
import SEO from "@/components/common/SEO";
import TheBucketListeerLoader from "@/common/Loader";

export default function GiftCardsPage() {
  return (
    <>
      <SEO
        title="Gift Cards"
        description="Celebrate special moments with travel gift cards. Thoughtful, flexible, and perfect for every occasion."
        keywords={["gift cards", "travel gifts", "voucher"]}
        url="/gift-cards"
      />
      <Suspense fallback={<TheBucketListeerLoader size="small" text="Loading..." />}>
        <GiftCards />
      </Suspense>
    </>
  );
}


