import { Suspense } from "react";
import { useRouter } from "next/router";
import TravelPackagesSection from "@/components/TravelPackagesSection/components/TravelPackagesSection";
import SEO from "@/components/common/SEO";
import { generateBreadcrumbSchema } from "@/utils/seo";
import TheBucketListeerLoader from "@/common/Loader";

export default function ExploreListPage() {
  const router = useRouter();
  const { date, category, search } = router.query;

  // Generate dynamic title based on query parameters
  const getPageTitle = () => {
    if (date) {
      const dateFormatted = date.charAt(0).toUpperCase() + date.slice(1);
      return `${dateFormatted} Travel Packages - Upcoming Trips`;
    }
    if (category) {
      const categoryFormatted =
        category.charAt(0).toUpperCase() + category.slice(1);
      return `${categoryFormatted} Travel Packages - Upcoming Trips`;
    }
    if (search) {
      return `Travel Packages for "${search}" - Upcoming Trips`;
    }
    return "Upcoming Travel Packages & Adventures";
  };

  const getPageDescription = () => {
    if (date) {
      return `Discover amazing travel packages for ${date}. Book your adventure with THE BUCKETLISTER and explore curated experiences.`;
    }
    if (category) {
      return `Explore ${category} travel packages and adventures. Curated experiences with expert guides and small groups.`;
    }
    if (search) {
      return `Find the perfect travel packages for ${search}. Discover curated adventures with THE BUCKETLISTER.`;
    }
    return "Browse our upcoming travel packages and adventures. From domestic treks to international tours, find your perfect trip with THE BUCKETLISTER.";
  };

  const getKeywords = () => {
    const baseKeywords = [
      "upcoming trips",
      "travel packages",
      "adventure tours",
      "travel booking",
      "holiday packages",
    ];

    if (date) baseKeywords.unshift(`${date} trips`, `${date} travel packages`);
    if (category)
      baseKeywords.unshift(`${category} tours`, `${category} packages`);
    if (search) baseKeywords.unshift(search.toLowerCase());

    return baseKeywords;
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Explore", url: "/explore" },
    { name: "Upcoming Trips", url: "/explore/list" },
  ];

  const structuredData = [generateBreadcrumbSchema(breadcrumbs)];

  return (
    <>
      <SEO
        title={getPageTitle()}
        description={getPageDescription()}
        keywords={getKeywords()}
        url="/explore/list"
        structuredData={structuredData}
      />
      <Suspense
        fallback={
          <TheBucketListeerLoader
            size="medium"
            text="Discovering amazing destinations..."
          />
        }
      >
        <TravelPackagesSection isHomePage={false} listLayout={true} />
      </Suspense>
    </>
  );
}
