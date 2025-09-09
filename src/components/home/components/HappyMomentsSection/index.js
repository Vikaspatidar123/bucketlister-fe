import React from 'react';
import styles from './style.module.scss';
import { TRAVEL_PACKAGES_DATA } from '@/components/TravelPackagesSection/constants';
import Image from 'next/image';

const HappyMomentsSection = () => {
  // Configurable: how many random images to show per destination
  const RANDOM_IMAGES_PER_DESTINATION = 2;

  const pickRandomItems = (array, count) => {
    if (!Array.isArray(array) || array.length === 0) return [];
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    const limit = Math.min(count, copy.length);
    return copy.slice(0, limit);
  };

  const isValidPhoto = (src) => {
    if (typeof src !== 'string') return false;
    if (/\.svg(\?|$)/i.test(src)) return false;
    return /(\.webp|\.jpg|\.jpeg|\.png)(\?|$)/i.test(src);
  };

  // Build moments from travel packages: pick N random images per destination from any trip
  const moments = React.useMemo(() => {
    const items = [];
    const usedImages = new Set();
    try {
      TRAVEL_PACKAGES_DATA.forEach((destination) => {
        const imageCandidates = [];

        if (Array.isArray(destination.trips)) {
          destination.trips.forEach((trip) => {
            if (trip?.image) {
              imageCandidates.push(trip.image);
            }
            if (Array.isArray(trip?.other_images)) {
              trip.other_images.forEach((imgObj) => {
                if (imgObj?.image) {
                  imageCandidates.push(imgObj.image);
                }
              });
            }
          });
        }

        // Destination-level fallbacks
        if (destination?.thumbnail_image) imageCandidates.push(destination.thumbnail_image);
        if (destination?.hero_image) imageCandidates.push(destination.hero_image);

        const uniqueCandidates = Array.from(new Set(imageCandidates))
          .filter((src) => isValidPhoto(src))
          .filter((src) => !usedImages.has(src));

        const selected = pickRandomItems(uniqueCandidates, RANDOM_IMAGES_PER_DESTINATION);

        selected.forEach((img, idx) => {
          items.push({
            id: `${destination.destination_id}-${idx}`,
            image: img,
            alt: `${destination.destination_name} moment`,
          });
          usedImages.add(img);
        });
      });
    } catch (_) {
      // ignore and return what we have
    }
    return items;
  }, []);

  // Build panels in pattern: Full, Grid(2x2), Full, Grid ...
  const buildPanels = () => {
    const panels = [];
    let index = 0;
    while (index < moments.length) {
      // Full height panel uses one item
      if (index < moments.length) {
        panels.push({ type: 'full', items: [moments[index]] });
        index += 1;
      }
      // Grid panel uses next 4 items (or fewer if not enough)
      if (index < moments.length) {
        const gridItems = moments.slice(index, index + 4);
        panels.push({ type: 'grid', items: gridItems });
        index += gridItems.length;
      }
    }
    return panels;
  };
  const panels = buildPanels();

  return (
    <section className={styles.happyMomentsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Happy Moments</h2>
        
        <div className={styles.momentsScroller}>
          <div className={styles.momentsRow}>
            {panels.map((panel, idx) => (
              <div key={idx} className={panel.type === 'full' ? styles.panelFull : styles.panelGrid}>
                {panel.type === 'full' ? (
                  <div className={styles.imageContainer}>
                    <Image
                      src={panel.items[0].image}
                      alt={panel.items[0].alt}
                      className={styles.momentImage}
                      width={500}
                      height={500}
                    />
                  </div>
                ) : (
                  <div className={styles.centerGrid}> 
                    {panel.items.map((moment) => (
                      <div key={moment.id} className={styles.centerCard}>
                        <div className={styles.imageContainer}>
                          <Image
                            src={moment.image}
                            alt={moment.alt}
                            className={styles.momentImage}
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                    ))}
                    {/* Fill empty cells if fewer than 4 to keep layout stable */}
                    {Array.from({ length: Math.max(0, 4 - panel.items.length) }).map((_, i2) => (
                      <div key={`ph-${i2}`} className={styles.centerCard} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyMomentsSection;