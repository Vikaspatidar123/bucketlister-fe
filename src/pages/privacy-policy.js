import PrivacyPolicyPage from "@/components/privacypolicy/components";
import SEO from "@/components/common/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn about THE BUCKETLISTER's privacy policy and how we protect your personal information when you book travel with us."
        keywords={[
          "privacy policy",
          "data protection",
          "personal information",
          "privacy",
          "travel booking privacy",
        ]}
        url="/privacy-policy"
        noIndex={true}
      />
      <PrivacyPolicyPage />
    </>
  );
}
