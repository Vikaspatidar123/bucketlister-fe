import React from 'react';
import styles from './style.module.scss';
import { banner1 } from '@/assets/png';

const HappyMomentsSection = () => {
  // Sample moments – repeat to demonstrate horizontal scrolling
  const moments = Array.from({ length: 16 }).map((_, i) => ({
    id: i + 1,
    image: banner1,
    alt: `Happy moment ${i + 1}`
  }));

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
                    <img
                      src={panel.items[0].image}
                      alt={panel.items[0].alt}
                      className={styles.momentImage}
                    />
                  </div>
                ) : (
                  <div className={styles.centerGrid}> 
                    {panel.items.map((moment) => (
                      <div key={moment.id} className={styles.centerCard}>
                        <div className={styles.imageContainer}>
                          <img
                            src={moment.image}
                            alt={moment.alt}
                            className={styles.momentImage}
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