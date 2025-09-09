import React from 'react';
import { FOOTER_LINKS } from '../../constants';
import styles from './style.module.scss';

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.linksContainer}>
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>International</h3>
          <ul className={styles.linkList}>
            {FOOTER_LINKS.international.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={styles.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Popular Upcoming</h3>
          <ul className={styles.linkList}>
            {FOOTER_LINKS.popularUpcoming.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={styles.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Other Services</h3>
          <ul className={styles.linkList}>
            {FOOTER_LINKS.otherServices.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={styles.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {FOOTER_LINKS.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={styles.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomSection}>
        <div className={styles.copyright}>
          <p>The Bucketlister @ 2021. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
