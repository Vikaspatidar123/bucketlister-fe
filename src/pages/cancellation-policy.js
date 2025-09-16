import React from "react";
import CancellationPolicyPage from "@/components/CancellationPolicy/components";
import SEO from "@/components/common/SEO";

const CancellationPolicyPageComponent = () => {
  return (
    <>
      <SEO
        title="Cancellation Policy"
        description="Learn about THE BUCKETLISTER's cancellation and refund policy for travel bookings. Understand our terms for trip cancellations."
        keywords={[
          "cancellation policy",
          "refund policy",
          "booking cancellation",
          "travel cancellation",
          "trip cancellation",
        ]}
        url="/cancellation-policy"
        noIndex={true}
      />
      <CancellationPolicyPage />
    </>
  );
};

export default CancellationPolicyPageComponent;
