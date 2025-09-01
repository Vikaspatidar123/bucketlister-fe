"use client";
import React, { Suspense } from "react";
import TripDetails from "@/components/tripDetails/components";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TripDetails />
    </Suspense>
  );
}


