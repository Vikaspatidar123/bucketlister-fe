"use client";
import React, { useMemo } from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
import PackageCard from "@/common/PackageCard";
import { TRAVEL_PACKAGES_DATA } from "@/components/TravelPackagesSection/constants";

const SimilarTours = ({ trips = [], baseCategory = null }) => {
  const router = useRouter();

  const filteredTrips = useMemo(() => {
    if (!baseCategory) return trips;
    const list = [];
    TRAVEL_PACKAGES_DATA.forEach((dest) => {
      if (dest.category === baseCategory && Array.isArray(dest.trips)) {
        dest.trips.forEach((t) => {
          list.push({
            ...t,
            destination_id: dest.destination_id,
            destination_name: dest.destination_name,
            thumbnail_image: dest.thumbnail_image,
          });
        });
      }
    });
    return list;
  }, [trips, baseCategory]);

  if (!Array.isArray(filteredTrips) || filteredTrips.length === 0) return null;

  const handleClick = (trip) => {
    router.push(
      `/trip?destinationId=${trip.destination_id}&tripId=${trip.tripId}`,
    );
  };

  const formatDuration = (d) => d || "10D-9N";
  const formatPrice = (p) =>
    typeof p === "number"
      ? `Starting at Rs. ${p.toLocaleString()}/-`
      : p || "Starting at Rs. 23,000/-";

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Similar Tours</h2>
      <div className={styles.scroller}>
        {filteredTrips.map((trip) => (
          <div key={trip.tripId} className={styles.card}>
            <PackageCard trip={trip} onClick={() => handleClick(trip)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarTours;
