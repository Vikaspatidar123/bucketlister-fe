import TermsAndConditionsPage from "@/components/terms-and-condition/components";
import SEO from "@/components/common/SEO";

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Read THE BUCKETLISTER's terms and conditions for booking travel packages and using our services."
        keywords={[
          "terms and conditions",
          "travel terms",
          "booking terms",
          "service terms",
          "legal",
        ]}
        url="/terms-and-conditions"
        noIndex={true}
      />
      <TermsAndConditionsPage />
    </>
  );
}
