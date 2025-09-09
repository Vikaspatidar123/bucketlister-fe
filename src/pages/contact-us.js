import ContactUsPage from "@/components/contactUs/components";
import SEO from "@/components/common/SEO";
import { generateLocalBusinessSchema } from "@/utils/seo";

export default function ContactUs() {
  const structuredData = [generateLocalBusinessSchema()];
  
  return (
    <>
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact THE BUCKETLISTER for travel inquiries, bookings, and customer support. We're here to help plan your perfect adventure."
        keywords={['contact us', 'travel support', 'customer service', 'travel inquiry', 'booking help', 'travel agency contact']}
        url="/contact-us"
        structuredData={structuredData}
      />
      <ContactUsPage />
    </>
  );
}
