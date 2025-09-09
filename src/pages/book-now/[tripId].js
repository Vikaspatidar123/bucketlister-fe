import React, { Suspense } from "react";
import BookNow from "@/components/bookNow/components";
import TheBucketListeerLoader from "@/common/Loader";

export default function BookNowTripPage({ tripId, searchParams }) {
  return (
    <Suspense fallback={<TheBucketListeerLoader size="medium" text="Preparing your booking..." />}>
      <BookNow tripId={tripId} searchParams={searchParams} />
    </Suspense>
  );
}
