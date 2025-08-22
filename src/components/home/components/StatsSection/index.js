import React from 'react';
import { STATS_DATA } from '../../constants';
import styles from './style.module.scss';

const StatsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {STATS_DATA.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statText}>{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
