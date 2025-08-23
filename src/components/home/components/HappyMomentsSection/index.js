import React from 'react';
import styles from './style.module.scss';
import { banner1 } from '@/assets/png';

const HappyMomentsSection = () => {
  const centerMoments = [
    {
      id: 1,
      image: banner1,
      alt: 'Hot air balloons over rocky landscape'
    },
    {
      id: 2,
      image: banner1,
      alt: 'Turquoise lake with mountains'
    },
    {
      id: 3,
      image: banner1,
      alt: 'Placeholder for future content'
    },
    {
      id: 4,
      image: banner1,
      alt: 'Placeholder for future content'
    }
  ];

  return (
    <section className={styles.happyMomentsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Happy Moments</h2>
        
        <div className={styles.momentsGrid}>
          {/* Left Full Height Card */}
          <div className={styles.fullHeightCard}>
            <div className={styles.imageContainer}>
              <img 
                src={banner1} 
                alt="Boat view on lake with mountains"
                className={styles.momentImage}
              />
            </div>
          </div>

          {/* Center 2x2 Grid */}
          <div className={styles.centerGrid}>
            {centerMoments.map((moment) => (
              <div key={moment.id} className={styles.centerCard}>
                <div className={styles.imageContainer}>
                  <img 
                    src={banner1} 
                    alt={moment.alt}
                    className={styles.momentImage}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Full Height Card */}
          <div className={styles.fullHeightCard}>
            <div className={styles.imageContainer}>
              <img 
                src={banner1} 
                alt="Boat view on lake with mountains"
                className={styles.momentImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyMomentsSection;