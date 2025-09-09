import { Suspense } from "react";
import ReelsFeed from "@/components/reels/components";
import TheBucketListeerLoader from "@/common/Loader";

export default function ReelsPage() {
  return (
    <Suspense fallback={<TheBucketListeerLoader size="large" text="Loading amazing reels..." />}>
      <ReelsFeed />
    </Suspense>
  );
}
