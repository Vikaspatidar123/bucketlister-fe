import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SEO from "@/components/common/SEO";
import TheBucketListeerLoader from "@/common/Loader";

export default function BookNowPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to trip listing page after a brief delay
    const timer = setTimeout(() => {
      router.push('/explore/list');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <SEO
        title="Book Your Adventure Trip"
        description="Book your perfect adventure trip with THE BUCKETLISTER. Secure your spot on curated travel experiences with expert guides."
        keywords={['book trip', 'travel booking', 'adventure booking', 'trip reservation', 'travel package booking']}
        url="/book-now"
      />
      <Suspense fallback={<TheBucketListeerLoader size="small" text="Loading..." />}>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <TheBucketListeerLoader size="small" text="Redirecting to trip selection..." />
          <p style={{ marginTop: '1rem' }}>
            <Link href="/explore/list">Or click here to browse available trips</Link>
          </p>
        </div>
      </Suspense>
    </>
  );
}
