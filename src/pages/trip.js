import React, { Suspense } from "react";
import Head from "next/head";
import TripDetails from "@/components/tripDetails/components";
import SEO from "@/components/common/SEO";
import { generateTripSchema, generateBreadcrumbSchema } from "@/utils/seo";
import TheBucketListeerLoader from "@/common/Loader";

export default function TripPage({ destination, trip, tripId, destinationId }) {
  // Generate SEO data with server-side rendered data
  const getSEOTitle = () => {
    if (trip?.title) return trip.title;
    if (destination?.destination_name)
      return `${destination.destination_name} Trip`;
    return "Adventure Trip Details";
  };

  const getSEODescription = () => {
    if (trip?.description) return trip.description;
    if (destination?.destination_name) {
      return `Discover amazing ${destination.destination_name} experiences with THE BUCKETLISTER. Book your adventure today!`;
    }
    return "Explore curated travel experiences with expert guides and small groups.";
  };

  const getSEOKeywords = () => {
    const baseKeywords = [
      "trip",
      "travel package",
      "adventure",
      "tour",
      "booking",
    ];
    const keywords = [...baseKeywords];

    if (destination?.destination_name) {
      keywords.unshift(destination.destination_name.toLowerCase());
    }
    if (trip?.tags && Array.isArray(trip.tags)) {
      keywords.push(...trip.tags);
    }

    return keywords.filter(Boolean);
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Explore", url: "/explore" },
    { name: destination?.destination_name || "Trip", url: "#" },
  ];

  const structuredData = [];

  if (trip && destination) {
    structuredData.push(
      generateTripSchema({
        title: trip.title || `${destination.destination_name} Trip`,
        description:
          trip.description ||
          `Explore ${destination.destination_name} with THE BUCKETLISTER`,
        price: trip.price,
        startDate: trip.startDate,
        endDate: trip.endDate,
        duration: trip.duration,
        images: trip.images,
        itinerary: trip.itinerary,
        id: tripId,
      }),
    );
  }

  if (breadcrumbs.length > 0) {
    structuredData.push(generateBreadcrumbSchema(breadcrumbs));
  }

  return (
    <>
      <SEO
        title={getSEOTitle()}
        description={getSEODescription()}
        keywords={getSEOKeywords()}
        url={`/trip?id=${tripId || ""}&destinationId=${destinationId || ""}`}
        image={trip?.images?.[0] || destination?.image}
        structuredData={structuredData.length > 0 ? structuredData : undefined}
      />
      <Suspense
        fallback={
          <TheBucketListeerLoader
            size="medium"
            text="Loading trip details..."
          />
        }
      >
        <TripDetails />
      </Suspense>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id: tripId, destinationId } = context.query;

  // Import the data on server-side
  const { TRAVEL_PACKAGES_DATA } = await import(
    "@/components/TravelPackagesSection/constants"
  );

  let destination = null;
  let trip = null;

  // Parse IDs safely
  const parsedDestinationId = parseInt(destinationId);
  const parsedTripId = parseInt(tripId);

  if (Number.isFinite(parsedDestinationId) && Number.isFinite(parsedTripId)) {
    // Find destination
    destination = TRAVEL_PACKAGES_DATA.find(
      (d) => d.destination_id === parsedDestinationId,
    );

    // Find trip within destination
    if (destination && Array.isArray(destination.trips)) {
      trip = destination.trips.find((t) => t.tripId === parsedTripId);
    }
  }

  // Clean serialization for Next.js
  return {
    props: {
      destination: destination ? JSON.parse(JSON.stringify(destination)) : null,
      trip: trip ? JSON.parse(JSON.stringify(trip)) : null,
      tripId: tripId || null,
      destinationId: destinationId || null,
    },
  };
}
