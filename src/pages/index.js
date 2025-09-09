import { Suspense } from "react";
import Home from "@/components/home/components";
import TheBucketListeerLoader from "@/common/Loader";

export default function HomePage() {
  return (
    <Suspense fallback={<TheBucketListeerLoader size="medium" text="Loading your adventure..." />}>
      <Home />
    </Suspense>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
