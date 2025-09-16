"use client";
import React, { useRef, useEffect, useState } from "react";
import { DESTINATION_TABS } from "../../constants";
import { useDestinations } from "../../hooks/useDestinations";
import DestinationCard from "../DestinationCard";
import styles from "./style.module.scss";

const ExploreDestinations = () => {
  const { activeTab, destinations, handleTabChange, router } =
    useDestinations();

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef(null);
  const tabRefs = useRef([]);

  const handleDestinationClick = (destination) => {
    const id = destination.destination_id || destination.id;
    router.push(`/explore?destinationId=${id}`);
  };

  const updateIndicator = () => {
    const activeIndex = DESTINATION_TABS.findIndex(
      (tab) => tab.id === activeTab,
    );
    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      const activeTabElement = tabRefs.current[activeIndex];
      const tabsContainer = tabsRef.current;

      if (activeTabElement && tabsContainer) {
        const tabRect = activeTabElement.getBoundingClientRect();
        const containerRect = tabsContainer.getBoundingClientRect();

        setIndicatorStyle({
          left: tabRect.left - containerRect.left,
          width: tabRect.width,
          opacity: 1,
        });
      }
    }
  };

  useEffect(() => {
    updateIndicator();
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize, { passive: true });
    return () =>
      window.removeEventListener("resize", handleResize, { passive: true });
  }, []);

  return (
    <section className={styles.exploreDestinations}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore Destinations</h2>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs} ref={tabsRef}>
            <div className={styles.slidingIndicator} style={indicatorStyle} />
            {DESTINATION_TABS.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.destinationsContainer}>
          <div className={styles.destinationsRow}>
            {destinations
              .slice(0, Math.ceil(destinations.length / 2))
              .map((destination) => (
                <DestinationCard
                  key={destination.destination_id || destination.id}
                  destination={destination}
                  onClick={handleDestinationClick}
                />
              ))}
          </div>
          <div className={styles.destinationsRow}>
            {destinations
              .slice(Math.ceil(destinations.length / 2))
              .map((destination) => (
                <DestinationCard
                  key={destination.destination_id || destination.id}
                  destination={destination}
                  onClick={handleDestinationClick}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;
