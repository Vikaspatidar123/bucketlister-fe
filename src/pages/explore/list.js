import { Suspense } from "react";
import TravelPackagesSection from "@/components/TravelPackagesSection/components/TravelPackagesSection";
import TheBucketListeerLoader from "@/common/Loader";

export default function ExploreListPage() {
  return (
    <Suspense fallback={<TheBucketListeerLoader size="medium" text="Discovering amazing destinations..." />}>
      <TravelPackagesSection isHomePage={false} listLayout={true} />
    </Suspense>
  );
}
