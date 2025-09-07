import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/router";
import BookNow from "@/components/bookNow/components";

export default function BookNowPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to a generic trip ID or show a trip selection page
    // For now, let's redirect to a default trip
    router.replace("/book-now/default");
  }, [router]);

  return (
    <Suspense fallback={<div>Redirecting...</div>}>
      <div>Redirecting to trip selection...</div>
    </Suspense>
  );
}
