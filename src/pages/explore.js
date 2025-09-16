import { Suspense } from "react";
import { useRouter } from "next/router";
import ExplorePage from "@/components/explore/components";
import SEO from "@/components/common/SEO";
import { generateBreadcrumbSchema } from "@/utils/seo";
import TheBucketListeerLoader from "@/common/Loader";

export default function ExplorePageComponent() {
  const router = useRouter();
  const { search, category, destinationId } = router.query;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Explore", url: "/explore" },
  ];

  const structuredData = [generateBreadcrumbSchema(breadcrumbs)];

  let pageTitle = "Explore Travel Packages & Adventures";
  let pageDescription =
    "Discover curated travel packages and adventures. From Himalayan treks to international tours, find your perfect trip with THE BUCKETLISTER.";
  let pageKeywords = [
    "explore trips",
    "travel packages",
    "adventure tours",
    "himalayan treks",
    "international trips",
    "vacation packages",
  ];

  if (search) {
    pageTitle = `Travel Packages for "${search}"`;
    pageDescription = `Find travel packages and adventures for ${search}. Curated experiences with expert guides and small groups.`;
    pageKeywords = [search.toLowerCase(), ...pageKeywords];
  }

  if (category) {
    pageTitle = `${category.charAt(0).toUpperCase() + category.slice(1)} Travel Packages`;
    pageDescription = `Discover ${category} travel packages and adventures. Expertly curated experiences with THE BUCKETLISTER.`;
    pageKeywords = [category.toLowerCase(), ...pageKeywords];
  }

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        url="/explore"
        structuredData={structuredData}
      />
      <Suspense
        fallback={
          <TheBucketListeerLoader
            size="medium"
            text="Exploring destinations..."
          />
        }
      >
        <ExplorePage />
      </Suspense>
    </>
  );
}
