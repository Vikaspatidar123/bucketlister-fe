"use client";
import { useMemo } from "react";
import { TRAVEL_PACKAGES_DATA } from "@/components/TravelPackagesSection/constants";

// Compute a similarity score between two trips
// Heuristics: same destination strong boost, same category via destination, shared features, similar duration
const computeSimilarityScore = (a, b, destinationA, destinationB) => {
  let score = 0;

  // Same destination gets high weight
  if (destinationA?.destination_id === destinationB?.destination_id) score += 50;

  // Same top-level category (domestic/international/weekend)
  if (destinationA?.category && destinationA.category === destinationB?.category) score += 15;

  // Shared features overlap
  const aFeatures = Array.isArray(a?.features) ? a.features : [];
  const bFeatures = Array.isArray(b?.features) ? b.features : [];
  if (aFeatures.length && bFeatures.length) {
    const overlap = aFeatures.filter((f) => bFeatures.includes(f)).length;
    score += overlap * 8;
  }

  // Duration similarity: parse like "6D-5N"
  const parseDuration = (d) => {
    try {
      const [daysStr] = String(d || "").split("-");
      const days = parseInt(daysStr);
      return Number.isFinite(days) ? days : null;
    } catch {}
    return null;
  };
  const aDays = parseDuration(a?.duration);
  const bDays = parseDuration(b?.duration);
  if (aDays != null && bDays != null) {
    const diff = Math.abs(aDays - bDays);
    if (diff === 0) score += 10;
    else if (diff <= 2) score += 6;
    else if (diff <= 4) score += 3;
  }

  // Customizable preference alignment
  if (a?.customizable === b?.customizable) score += 2;

  return score;
};

export const useSimilarTours = (currentDestinationId, currentTripId, limit = 16) => {
  return useMemo(() => {
    if (currentTripId == null) return [];

    // Locate current destination and trip
    const destination = TRAVEL_PACKAGES_DATA.find(
      (d) => d.destination_id === currentDestinationId
    );
    const trip = destination?.trips?.find((t) => t.tripId === currentTripId) || null;
    if (!trip) return [];

    // Build candidate pool of all trips across destinations
    const candidates = [];
    TRAVEL_PACKAGES_DATA.forEach((dest) => {
      if (Array.isArray(dest.trips)) {
        dest.trips.forEach((t) => {
          if (t.tripId !== currentTripId) {
            candidates.push({ destination: dest, trip: t });
          }
        });
      }
    });

    // Score and sort
    const scored = candidates
      .map(({ destination: dest, trip: t }) => ({
        destination: dest,
        trip: t,
        score: computeSimilarityScore(trip, t, destination, dest),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ destination: dest, trip: t }) => ({
        ...t,
        destination_id: dest.destination_id,
        destination_name: dest.destination_name,
        thumbnail_image: dest.thumbnail_image,
      }));

    return scored;
  }, [currentDestinationId, currentTripId, limit]);
};


