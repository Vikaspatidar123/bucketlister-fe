"use client";
import React, { Suspense } from "react";
import BookNow from "@/components/bookNow/components";

export default function Page({ params, searchParams }) {
  const { tripId } = params;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookNow tripId={tripId} searchParams={searchParams} />
    </Suspense>
  );
}
