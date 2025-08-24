"use client";
import { useState, useEffect, useMemo } from "react";
import { TRAVEL_PACKAGES_DATA } from "@/components/TravelPackagesSection/constants";
import { useRouter } from "next/navigation";

export const useDestinations = () => {
  const [activeTab, setActiveTab] = useState("international");
  const [destinations, setDestinations] = useState([]);
  const router = useRouter();

  // Build destination lists from TRAVEL_PACKAGES_DATA using category field
  const categorized = useMemo(() => {
    const international = [];
    const domestic = [];
    const weekend = [];

    TRAVEL_PACKAGES_DATA.forEach((destination) => {
      const mapped = {
        id: destination.destination_id,
        destination_id: destination.destination_id,
        name: destination.destination_name,
        image: destination.thumbnail_image || destination.hero_image,
        rating: Array.isArray(destination.reviews) && destination.reviews.length > 0
          ? destination.reviews.reduce((acc, r) => acc + (r.rating || 0), 0) / destination.reviews.length
          : undefined,
      };

      const category = destination.category || "international";
      if (category === "domestic") domestic.push(mapped);
      else if (category === "weekend") weekend.push(mapped);
      else international.push(mapped);
    });

    return { international, domestic, weekend };
  }, []);

  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setDestinations(categorized[tabId] || []);
  };

  // Get destination by id
  const getDestinationById = (id) => {
    const pool = [...categorized.international, ...categorized.domestic, ...categorized.weekend];
    return pool.find((d) => d.id === id) || null;
  };

  // Search
  const searchDestinations = (query) => {
    const pool = categorized[activeTab] || [];
    return pool.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));
  };

  // Initialize with international
  useEffect(() => {
    setDestinations(categorized.international || []);
  }, [categorized]);

  return {
    activeTab,
    destinations,
    handleTabChange,
    getDestinationById,
    searchDestinations,
    router,
  };
};
