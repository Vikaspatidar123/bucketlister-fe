import { Suspense } from "react";
import TravelPackagesSection from "@/components/TravelPackagesSection/components/TravelPackagesSection";

export default function ExploreListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TravelPackagesSection isHomePage={false} listLayout={true} />
    </Suspense>
  );
}
