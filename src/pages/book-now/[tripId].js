import React, { Suspense } from "react";
import { useRouter } from "next/router";
import BookNow from "@/components/bookNow/components";
import SEO from "@/components/common/SEO";
import { generateBreadcrumbSchema } from "@/utils/seo";

export default function BookNowTripPage({ destination, trip, tripId }) {
  const router = useRouter();
  const { destination: destName, title, price, duration } = router.query;

  // Generate SEO data with query parameters or props
  const getPageTitle = () => {
    if (trip?.title) return `Book ${trip.title}`;
    if (title) return `Book ${title}`;
    if (destination?.destination_name) return `Book ${destination.destination_name} Trip`;
    if (destName) return `Book ${destName} Trip`;
    return "Book Your Adventure Trip";
  };

  const getPageDescription = () => {
    if (trip && destination) {
      return `Book your ${destination.destination_name} adventure: ${trip.title}. Secure your spot with THE BUCKETLISTER for ₹${trip.price}`;
    }
    if (destName && title && price) {
      return `Book your ${destName} adventure: ${title}. Secure your spot with THE BUCKETLISTER for ₹${price}`;
    }
    return "Book your perfect adventure trip with THE BUCKETLISTER. Secure your spot on curated travel experiences with expert guides.";
  };

  const getKeywords = () => {
    const baseKeywords = ['book trip', 'travel booking', 'adventure booking', 'trip reservation'];
    
    if (destination?.destination_name) baseKeywords.push(`book ${destination.destination_name.toLowerCase()}`);
    if (destName) baseKeywords.push(`book ${destName.toLowerCase()}`);
    if (trip?.title) baseKeywords.push(trip.title.toLowerCase());
    if (title) baseKeywords.push(title.toLowerCase());
    
    return baseKeywords;
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Explore', url: '/explore' },
    { name: destination?.destination_name || destName || 'Trip', url: '#' },
    { name: 'Book Now', url: '#' }
  ];

  const structuredData = [generateBreadcrumbSchema(breadcrumbs)];

  return (
    <>
      <SEO
        title={getPageTitle()}
        description={getPageDescription()}
        keywords={getKeywords()}
        url={`/book-now/${tripId}`}
        structuredData={structuredData}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BookNow tripId={tripId} />
      </Suspense>
    </>
  );
}

export async function getServerSideProps(context) {
  const { tripId } = context.params;
  
  try {
    // Try to import and find the trip data
    const { TRAVEL_PACKAGES_DATA } = await import('@/components/TravelPackagesSection/constants');
    
    let destination = null;
    let trip = null;

    // Try to find trip by ID in all destinations
    for (const dest of TRAVEL_PACKAGES_DATA) {
      if (Array.isArray(dest.trips)) {
        const foundTrip = dest.trips.find(t => 
          t.tripId === parseInt(tripId) || 
          t.id === parseInt(tripId) ||
          t.tripId === tripId ||
          t.id === tripId
        );
        if (foundTrip) {
          destination = dest;
          trip = foundTrip;
          break;
        }
      }
    }

    return {
      props: {
        destination: destination ? JSON.parse(JSON.stringify(destination)) : null,
        trip: trip ? JSON.parse(JSON.stringify(trip)) : null,
        tripId: tripId || null,
      },
    };
  } catch (error) {
    console.error('Error loading trip data:', error);
    return {
      props: {
        destination: null,
        trip: null,
        tripId: tripId || null,
      },
    };
  }
}
