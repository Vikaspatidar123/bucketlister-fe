"use client";
import React, { useEffect, useRef } from 'react';
import { HERO_DATA } from '../../constants';
import SearchForm from '../SearchForm';
import styles from './style.module.scss';
import { heroVideo } from '@/assets/mp4';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    try { v.muted = true; } catch (_) {}
    const tryPlay = () => {
      try { v.play().catch(() => {}); } catch (_) {}
    };
    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener('canplay', tryPlay, { once: true });
    }
    return () => {
      try { v.removeEventListener('canplay', tryPlay); } catch (_) {}
    };
  }, []);
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundImage}>
        <video
          className={styles.bgVideo}
          // src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          ref={videoRef}
          poster="/assets/png/banner1.jpg"
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.headingSection}>
            <h1 className={styles.mainHeading}>
              <span className={styles.line1}>{HERO_DATA.mainHeading.line1}</span>
              <span className={styles.line2}>{HERO_DATA.mainHeading.line2}</span>
            </h1>
          </div>
          
          <div className={styles.searchSection}>
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
