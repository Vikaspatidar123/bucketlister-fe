import { Suspense } from "react";
import Home from "@/components/home/components";
import SEO from "@/components/common/SEO";
import { generateWebsiteSchema, generateOrganizationSchema } from "@/utils/seo";
import TheBucketListeerLoader from "@/common/Loader";

export default function HomePage() {
  const structuredData = [
    generateWebsiteSchema(),
    generateOrganizationSchema()
  ];

  return (
    <>
      <SEO
        title="The Bucketlister | Stop Dreaming, Start Living"
        description="Discover curated travel experiences with THE BUCKETLISTER. From Himalayan treks to international adventures, find your perfect trip with small groups and expert guides."
        keywords={['travel packages', 'adventure trips', 'himalayan treks', 'international tours', 'small group travel', 'curated experiences', 'travel agency india', 'adventure travel', 'trekking tours', 'vacation packages']}
        url="/"
        structuredData={structuredData}
      />
      <Suspense fallback={<TheBucketListeerLoader size="medium" text="Loading your adventure..." />}>
        <Home />
      </Suspense>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
