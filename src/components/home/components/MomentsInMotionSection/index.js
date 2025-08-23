import React from 'react';
import styles from './style.module.scss';
import { banner1 } from '@/assets/png';

const MomentsInMotionSection = () => {
  const moments = [
    {
      id: 1,
      image: "https://www.w3schools.com/howto/rain.mp4",
      alt: "Boat view on lake with mountains - Moment 1"
    },
    {
      id: 2,
      image: "https://www.w3schools.com/howto/rain.mp4",
      alt: "Boat view on lake with mountains - Moment 2"
    },
    {
      id: 3,
      image: "https://www.w3schools.com/howto/rain.mp4",
      alt: "Boat view on lake with mountains - Moment 3"
    },
    {
      id: 4,
      image: "https://www.w3schools.com/howto/rain.mp4",
      alt: "Boat view on lake with mountains - Moment 4"
    },
    {
      id: 5,
      image: "https://www.w3schools.com/howto/rain.mp4",
      alt: "Boat view on lake with mountains - Moment 5"
    },
    {
      id: 6,
      image: "https://www.w3schools.com/howto/rain.mp4",
      alt: "Boat view on lake with mountains - Moment 6"
    }
  ];

  // Duplicate moments for seamless infinite scroll
  const duplicatedMoments = [...moments, ...moments];

  return (
    <section className={styles.momentsInMotionSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Moments in Motion</h2>
        
        <div className={styles.momentsRow}>
          <div className={styles.scrollingContainer}>
            {duplicatedMoments.map((moment, index) => (
              <div 
                key={`${moment.id}-${index}`} 
                className={styles.momentCard}
              >
                <div className={styles.imageContainer}>
                  <video 
                    src={moment.image} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    alt={moment.alt}
                    className={styles.momentImage}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.boatView}>
                      <div className={styles.boatBow}></div>
                      <div className={styles.waterReflection}></div>
                    </div>
                    <div className={styles.lakeView}>
                      <div className={styles.turquoiseWater}></div>
                    </div>
                    <div className={styles.mountainView}>
                      <div className={styles.greyMountains}></div>
                      <div className={styles.greenTrees}></div>
                    </div>
                    <div className={styles.skyView}>
                      <div className={styles.overcastSky}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* <div className={styles.motionIndicator}>
          <div className={styles.motionText}>Capturing Life&apos;s Beautiful Moments</div>
          <div className={styles.motionDots}>
            {moments.map((moment) => (
              <div 
                key={moment.id} 
                className={styles.dot}
              ></div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MomentsInMotionSection;
