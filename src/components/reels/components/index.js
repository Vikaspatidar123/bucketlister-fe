"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./style.module.scss";
import { useReels } from "../hooks/useReels";

const ReelItem = React.forwardRef(({ reel, isActive, onToggleSound, muted }, ref) => {
  return (
    <div className={styles.reelItem}>
      <video
        ref={ref}
        className={styles.reelVideo}
        src={reel.src}
        playsInline
        preload="metadata"
        loop
        muted={muted}
        controls={false}
        autoPlay={isActive}
      />
      <button className={styles.soundBtn} onClick={onToggleSound} aria-label={muted ? "Unmute" : "Mute"}>
        {muted ? "🔇" : "🔊"}
      </button>
      <div className={styles.meta}>
        <div className={styles.title}>{reel.title}</div>
        {reel.caption && <div className={styles.caption}>{reel.caption}</div>}
      </div>
    </div>
  );
});
ReelItem.displayName = "ReelItem";

const ReelsFeed = () => {
  const { reels } = useReels();
  const router = useRouter();
  const [current, setCurrent] = React.useState(0);
  const [muted, setMuted] = React.useState(true);
  const videoRefs = React.useRef([]);

  // Intersection observer to autoplay/pause
  React.useEffect(() => {
    const els = videoRefs.current.filter(Boolean);
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target).dataset.index);
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setCurrent(index);
          }
        });
      },
      { threshold: [0, 0.25, 0.6, 0.9, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reels.length]);

  // Play/pause according to current index
  React.useEffect(() => {
    videoRefs.current.forEach((el, idx) => {
      if (!el) return;
      try {
        if (idx === current) {
          el.muted = muted;
          const playPromise = el.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
          }
        } else {
          el.pause();
          el.currentTime = el.currentTime; // keep frame
        }
      } catch {}
    });
  }, [current, muted]);

  const toggleSound = () => setMuted((m) => !m);

  const setRefAt = (index) => (el) => {
    if (el) {
      el.dataset.index = String(index);
    }
    videoRefs.current[index] = el;
  };

  const handleClose = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      router.push("/");
    }
  };

  return (
    <section className={styles.reelsSection}>
      <button className={styles.closeBtn} onClick={handleClose} aria-label="Close reels">×</button>
      <div className={styles.feed}>
        {reels.map((reel, idx) => (
          <ReelItem
            key={reel.id}
            reel={reel}
            ref={setRefAt(idx)}
            isActive={idx === current}
            muted={muted}
            onToggleSound={toggleSound}
          />
        ))}
      </div>
    </section>
  );
};

export default ReelsFeed;


