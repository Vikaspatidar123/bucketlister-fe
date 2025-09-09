import React, { Suspense } from "react";
import TripDetails from "@/components/tripDetails/components";
import TheBucketListeerLoader from "@/common/Loader";

export default function TripPage() {
  return (
    <Suspense fallback={<TheBucketListeerLoader size="medium" text="Loading trip details..." />}>
      <TripDetails />
    </Suspense>
  );
}
