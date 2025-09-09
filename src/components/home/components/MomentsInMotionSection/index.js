import { reel1, reel2, reel3, reel4, reel5 } from "@/assets/mp4";
import styles from "./style.module.scss";
import { useState, useRef, useEffect } from "react";

const MomentsInMotionSection = () => {
  const [mutedStates, setMutedStates] = useState({});
  const videoRefs = useRef([]);

  const moments = [
    // {
    //   id: 1,
    //   image: "https://www.w3schools.com/howto/rain.mp4",
    //   alt: "Boat view on lake with mountains - Moment 1",
    // },
    {
      id: 2,
      image: reel1,
      alt: "Boat view on lake with mountains - Moment 2",
    },
    {
      id: 3,
      image: reel2,
      alt: "Boat view on lake with mountains - Moment 3",
    },
    {
      id: 4,
      image: reel3,
      alt: "Boat view on lake with mountains - Moment 4",
    },
    {
      id: 5,
      image: reel4,
      alt: "Boat view on lake with mountains - Moment 5",
    },
    {
      id: 6,
      image: reel5,
      alt: "Boat view on lake with mountains - Moment 6",
    },
  ];

  // Duplicate moments for seamless infinite scroll
  const duplicatedMoments = [...moments, ...moments];

  const toggleSound = (index) => {
    setMutedStates((prev) => {
      const newStates = {};
      
      // If the clicked video is currently muted, unmute it and mute all others
      if (prev[index] !== false) {
        // Unmute the clicked video
        newStates[index] = false;
        // Mute all other videos
        duplicatedMoments.forEach((_, idx) => {
          if (idx !== index) {
            newStates[idx] = true;
          }
        });
      } else {
        // If the clicked video is already unmuted, mute it
        newStates[index] = true;
      }
      
      return newStates;
    });
  };

  const setRefAt = (index) => (el) => {
    if (el) {
      el.dataset.index = String(index);
    }
    videoRefs.current[index] = el;
  };

  // Update individual videos when their mute state changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = mutedStates[index] !== false; // Default to true (muted) if not set
      }
    });
  }, [mutedStates]);

  return (
    <section className={styles.momentsInMotionSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Moments in Motion</h2>

        <div className={styles.momentsRow}>
          <div className={styles.scrollingContainer}>
            {duplicatedMoments.map((moment, index) => (
              <div key={`${moment.id}-${index}`} className={styles.momentCard}>
                <div className={styles.imageContainer}>
                  <video
                    ref={setRefAt(index)}
                    src={moment.image}
                    autoPlay
                    loop
                    muted={mutedStates[index] !== false}
                    playsInline
                    alt={moment.alt}
                    className={styles.momentImage}
                  />
                  <button 
                    className={styles.soundBtn} 
                    onClick={() => toggleSound(index)} 
                    aria-label={mutedStates[index] !== false ? "Unmute" : "Mute"}
                  >
                    {mutedStates[index] !== false ? "🔇" : "🔊"}
                  </button>
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
