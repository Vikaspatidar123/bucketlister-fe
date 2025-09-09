import React from 'react';
import styles from './style.module.scss';

const TheBucketListeerLoader = ({ 
  size = 'medium', 
  showText = true, 
  text = 'Preparing your adventure...',
  className = '' 
}) => {
  return (
    <div className={`${styles.loaderContainer} ${styles[size]} ${className}`}>
      <div className={styles.loaderWrapper}>
        {/* Globe with rotating continents */}
        {/* <div className={styles.globe}> */}
          {/* <div className={styles.globeInner}> */}
            {/* <div className={styles.continent}></div>
            <div className={styles.continent}></div>
            <div className={styles.continent}></div>
            <div className={styles.continent}></div> */}
            
          {/* </div> */}
        {/* </div> */}
        <div className={styles.globe}> <span className={styles.globeIcon}> 🌎 </span> </div>
        {/* Paper plane flying in circles */}
        <div className={styles.planeOrbit}>
          <div className={styles.paperPlane}>
            <svg viewBox="0 0 24 24" className={styles.planeIcon}>
              <path d="M2 12l20-8-8 8 8 8-20-8z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        {/* Location pin morphing into checkmark */}
        <div className={styles.pinContainer}>
          <div className={styles.locationPin}>
            <svg viewBox="0 0 24 24" className={styles.pinIcon}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
          </div>
          <div className={styles.checkmark}>
            <svg viewBox="0 0 24 24" className={styles.checkIcon}>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        {/* Floating particles for ambiance */}
        <div className={styles.particles}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>
      </div>
      
      {showText && (
        <div className={styles.loadingText}>
          <span className={styles.text}>{text}</span>
          <div className={styles.dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheBucketListeerLoader;