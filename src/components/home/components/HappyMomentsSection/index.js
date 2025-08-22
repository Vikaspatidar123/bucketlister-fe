import React from 'react';
import styles from './style.module.scss';
import { banner1 } from '@/assets/png';

const HappyMomentsSection = () => {
  const happyMoments = [
    {
      id: 1,
      image: banner1,
      alt: 'Boat view on lake with mountains',
      title: 'Lake Adventure',
      description: 'Peaceful moments on the water'
    },
    {
      id: 2,
      image: banner1,
      alt: 'Hot air balloons over rocky landscape',
      title: 'Balloon Festival',
      description: 'Magical sky adventures'
    },
    {
      id: 3,
      image: banner1,
      alt: 'Turquoise lake with mountains',
      title: 'Mountain Lake',
      description: 'Crystal clear waters'
    },
    {
      id: 4,
      image: banner1,
      alt: 'Boat view on lake with mountains',
      title: 'Lake Adventure',
      description: 'Peaceful moments on the water'
    }
  ];

  return (
    <section className={styles.happyMomentsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Happy Moments</h2>
        
        <div className={styles.momentsGrid}>
          {happyMoments.map((moment, index) => (
            <div key={moment.id} className={styles.momentCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={banner1} 
                  alt={moment.alt}
                  className={styles.momentImage}
                />
              </div>
              <div className={styles.momentInfo}>
                <h3 className={styles.momentTitle}>{moment.title}</h3>
                <p className={styles.momentDescription}>{moment.description}</p>
              </div>
            </div>
          ))}
          
          {/* Placeholder cards for bottom row */}
          {/* {[5, 6, 7, 8].map((id) => (
            <div key={id} className={styles.placeholderCard}>
              <div className={styles.placeholderContent}>
                <span className={styles.placeholderText}>Coming Soon</span>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default HappyMomentsSection;