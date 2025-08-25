"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useTripDetails } from "@/components/tripDetails/hooks/useTripDetails";
import TripDetails from "./TripDetails";

const TripDetailsIndex = () => {
  const params = useSearchParams();
  const destinationId = params.get("destinationId");
  const tripId = params.get("tripId");
  const { destination, trip } = useTripDetails(destinationId, tripId);

  if (!destination || !trip) {
    return null;
  }

  return <TripDetails destination={destination} trip={trip} />;
};

export default TripDetailsIndex;

