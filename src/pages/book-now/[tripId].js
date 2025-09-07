import React, { Suspense } from "react";
import BookNow from "@/components/bookNow/components";

export default function BookNowTripPage({ tripId, searchParams }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookNow tripId={tripId} searchParams={searchParams} />
    </Suspense>
  );
}
