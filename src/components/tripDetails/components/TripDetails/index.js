"use client";
import React from "react";
import styles from "./style.module.scss";
import Gallery from "../Gallery";
import Details from "../Details";
import Itinerary from "../Itinerary";
import Inclusions from "../Inclusions";
import SimilarTours from "../SimilarTours";
import { useSimilarTours } from "../../hooks/useSimilarTours";
import TripHeader from "../TripHeader";
import FeaturesBar from "@/components/home/components/FeaturesBar";
import TravellersTestimonialsSection from "@/components/home/components/TravellersTestimonialsSection";
// import HappyMomentsSection from "@/components/home/components/HappyMomentsSection";
import TripNavTabs from "../TripNavTabs";

const TripDetails = ({ destination, trip }) => {
  const similarTrips = useSimilarTours(
    destination?.destination_id,
    trip?.tripId,
    16
  );

  if (!destination || !trip) {
    return null;
  }
  // console.log(destination, trip, "destination, trip");

  return (
    <section className={styles.tripDetailsSection}>
      <div id="trip-overview">
        <TripHeader title={destination.destination_name} price={trip.price} />
      </div>
      <TripNavTabs />
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div id="trip-gallery">
            <Gallery trip={trip} />
          </div>
        </div>
        <div className={styles.rightCol}>
          <Details destination={destination} trip={trip} />
        </div>
      </div>
      <div id="trip-itinerary">
        <Itinerary destination={destination} trip={trip} />
      </div>
      <div id="trip-included">
        <Inclusions trip={trip} />
      </div>
      <FeaturesBar />
      {/* <HappyMomentsSection /> */}
      <div id="trip-reviews">
        <TravellersTestimonialsSection />
      </div>
      <div id="trip-similar">
        <SimilarTours trips={similarTrips} baseCategory={destination?.category} />
      </div>
    </section>
  );
};

export default TripDetails;
