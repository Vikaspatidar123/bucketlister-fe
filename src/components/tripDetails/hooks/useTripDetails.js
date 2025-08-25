"use client";
import { useMemo } from "react";
import { TRAVEL_PACKAGES_DATA } from "@/components/TravelPackagesSection/constants";

export const useTripDetails = (destinationId, tripId) => {
  const parsedDestinationId = useMemo(() => {
    const n = parseInt(destinationId);
    return Number.isFinite(n) ? n : null;
  }, [destinationId]);

  const parsedTripId = useMemo(() => {
    const n = parseInt(tripId);
    return Number.isFinite(n) ? n : null;
  }, [tripId]);

  const { destination, trip } = useMemo(() => {
    if (parsedDestinationId == null || parsedTripId == null) {
      return { destination: null, trip: null };
    }

    const dest = TRAVEL_PACKAGES_DATA.find(
      (d) => d.destination_id === parsedDestinationId
    );
    if (!dest) return { destination: null, trip: null };

    const foundTrip = Array.isArray(dest.trips)
      ? dest.trips.find((t) => t.tripId === parsedTripId)
      : null;

    return { destination: dest, trip: foundTrip || null };
  }, [parsedDestinationId, parsedTripId]);

  return { destination, trip };
};


