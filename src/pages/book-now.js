import React, { Suspense } from "react";
import Link from "next/link";
import SEO from "@/components/common/SEO";

export default function BookNowPage() {
  return (
    <>
      <SEO
        title="Book Your Adventure Trip"
        description="Book your perfect adventure trip with THE BUCKETLISTER. Secure your spot on curated travel experiences with expert guides."
        keywords={['book trip', 'travel booking', 'adventure booking', 'trip reservation', 'travel package booking']}
        url="/book-now"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Book Your Adventure Trip</h1>
          <p>Please select a specific trip to book, or contact us for customized options.</p>
          <p><Link href="/explore/list">Browse Available Trips</Link></p>
        </div>
      </Suspense>
    </>
  );
}
