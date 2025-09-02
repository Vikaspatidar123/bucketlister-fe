"use client";
import { bedIcon, calendarIcon, foodIcon, peopleIcon } from "@/assets/svg";
import Tabs from "@/common/Tabs";
import { DATE_LABELS } from "@/components/tripDetails/constants";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./style.module.scss";

const Details = ({ destination, trip }) => {
  const [activeTab, setActiveTab] = useState("dates");

  const dateTabs = useMemo(() => {
    const ids = Array.isArray(trip?.availableDates) ? trip.availableDates : [];
    const tabs = ids.map((id) => ({ id, label: DATE_LABELS[id] || id }));
    return tabs.length > 0 ? tabs : [{ id: "soon", label: "Dates on request" }];
  }, [trip]);

  const computedMeta = useMemo(() => {
    const meta = {};
    meta.duration = trip?.duration || "";
    meta.capacity = trip?.capacity || 30;
    let nights = null;
    let days = null;
    try {
      const parts = String(trip?.duration || "").split("-");
      if (parts.length === 2) {
        days = parseInt(parts[0]);
        nights = parseInt(parts[1]);
      }
    } catch {}
    const defaultNights = Number.isFinite(nights) ? nights : 0;
    const defaultDays = Number.isFinite(days) ? days : 0;
    meta.accommodations =
      trip?.accommodations ||
      (defaultDays && defaultNights
        ? `${defaultNights} nights in Hotels, ${Math.max(
            0,
            defaultDays - defaultNights
          )} nights in Bungalow`
        : "Comfort stays included");
    meta.meals =
      trip?.meals ||
      "Breakfast, Lunch, Dinner (Vegetarian and Jain options available)";
    return meta;
  }, [trip]);

  return (
    <div className={styles.details}>
      <h1 className={styles.title}>{trip?.title}</h1>
      {destination?.description && (
        <div className={styles.section}>
          {/* <h2 className={styles.sectionTitle}>Description</h2> */}
          <p className={styles.description}>{destination.description}</p>
        </div>
      )}
      {Array.isArray(trip?.route) && trip.route.length > 0 && (
        <div className={styles.section}>
          {/* <h2 className={styles.sectionTitle}>Route</h2> */}
          <p className={styles.route}>{trip.route.join(" → ")}</p>
        </div>
      )}
      <div className={styles.metaList}>
        {computedMeta.duration && (
          <div className={styles.metaRow}>
            <span className={styles.metaBullet}>
              <Image src={calendarIcon} alt="calendar" width={22} height={22} />
            </span>
            <div>
              <div className={styles.metaLabel}>Duration</div>
              <div className={styles.metaValue}>{computedMeta.duration}</div>
            </div>
          </div>
        )}
        {computedMeta.capacity != null && (
          <div className={styles.metaRow}>
            <span className={styles.metaBullet}>
              <Image src={peopleIcon} alt="people" width={22} height={22} />
            </span>
            <div className={styles.metaValueWrapper}>
              <div className={styles.metaLabel}>Capacity</div>
              <div className={styles.metaValue}>
                {computedMeta.capacity} Travellers
              </div>
            </div>
          </div>
        )}
        {computedMeta.accommodations && (
          <div className={styles.metaRow}>
            <span className={styles.metaBullet}>
              <Image src={bedIcon} alt="bed" width={22} height={22} />
            </span>
            <div>
              <div className={styles.metaLabel}>Accommodations</div>
              <div className={styles.metaValue}>
                {computedMeta.accommodations}
              </div>
            </div>
          </div>
        )}
        {computedMeta.meals && (
          <div className={styles.metaRow}>
            <span className={styles.metaBullet}>
              <Image src={foodIcon} alt="food" width={22} height={22} />
            </span>
            <div>
              <div className={styles.metaLabel}>Meals</div>
              <div className={styles.metaValue}>{computedMeta.meals}</div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <Image src={peopleIcon} alt="calendar" width={22} height={22} />
          <span className={styles.sectionTitleText}>Upcoming Trips</span>
        </h2>
        <Tabs
          tabs={dateTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="pills"
        />
      </div>

      <div className={styles.ctaRow}>
        <button className={`${styles.btn} ${styles.secondary}`}>Enquire</button>
        <Link 
          href={`/book-now/${trip?.tripId || destination?.destination_id}?destination=${encodeURIComponent(destination?.destination_name || '')}&title=${encodeURIComponent(trip?.title || '')}&price=${trip?.price || ''}&duration=${encodeURIComponent(trip?.duration || '')}&capacity=${trip?.capacity || ''}`}
          className={`${styles.btn} ${styles.primary} ${styles.linkBtn}`}
        >
          Book Tour
        </Link>
      </div>
    </div>
  );
};

export default Details;
