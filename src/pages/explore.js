import { Suspense } from "react";
import ExplorePage from "@/components/explore/components";
import TheBucketListeerLoader from "@/common/Loader";

export default function ExplorePageComponent() {
    return (
        <Suspense fallback={<TheBucketListeerLoader size="medium" text="Exploring destinations..." />}>
            <ExplorePage />
        </Suspense>
    );
}
