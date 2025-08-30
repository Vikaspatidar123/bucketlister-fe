import React from 'react';
import { STATS_DATA } from '../../constants';
import styles from './style.module.scss';
import Image from 'next/image';

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {STATS_DATA.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.statIcon}>
                <Image src={stat.icon} alt={stat.text} width={40} height={40} />
              </div>
              <div className={styles.statText}>{stat.text}</div>
            </div>
          ))}
        </div>
        <div className={styles.mobileMarquee} aria-hidden="true">
          <div className={styles.marqueeInner}>
            <div className={styles.marqueeContent}>
              {STATS_DATA.map((stat) => (
                <div key={`m1-${stat.id}`} className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <Image src={stat.icon} alt={stat.text} width={40} height={40} />
                  </div>
                  <div className={styles.statText}>{stat.text}</div>
                </div>
              ))}
            </div>
            <div className={styles.marqueeContent} aria-hidden="true">
              {STATS_DATA.map((stat) => (
                <div key={`m2-${stat.id}`} className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <Image src={stat.icon} alt={stat.text} width={40} height={40} />
                  </div>
                  <div className={styles.statText}>{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
