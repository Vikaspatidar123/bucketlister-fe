import React from "react";
import AboutUsPage from "@/components/aboutUs/components";
import SEO from "@/components/common/SEO";
import { generateOrganizationSchema } from "@/utils/seo";

const AboutUsPageComponent = () => {
  const structuredData = [generateOrganizationSchema()];

  return (
    <>
      <SEO
        title="About Us - Travel Experts & Adventure Curators"
        description="Learn about THE BUCKETLISTER team of travel experts. We curate unique adventures and create unforgettable experiences for travelers worldwide."
        keywords={[
          "about us",
          "travel experts",
          "adventure curators",
          "travel team",
          "travel company",
          "bucketlister team",
        ]}
        url="/about"
        structuredData={structuredData}
      />
      <AboutUsPage />
    </>
  );
};

export default AboutUsPageComponent;
