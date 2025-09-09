'use client';
import React, { useState, useEffect } from 'react';
import { mapDestinationsByCategory } from '@/utils/travelData';
import styles from './style.module.scss';

const FooterLinks = () => {
  const [footerLinks, setFooterLinks] = useState(null);

  useEffect(() => {
    const international = mapDestinationsByCategory('international')
      .map(({ label, href }) => ({ name: label, url: href }));
    
    const popularUpcoming = mapDestinationsByCategory('domestic')
      .map(({ label, href }) => ({ name: label, url: href }));

    const otherServices = [
      { name: "Corporate Trips", url: "/explore/list" },
      { name: "Itinerary Planning", url: "/explore/list" },
      { name: "Family Vacations", url: "/explore/list" },
      { name: "Honeymoon Specials", url: "/explore/list" },
    ];

    const quickLinks = [
      { name: "About Us", url: "/about" },
      { name: "Blog", url: "/blogs" },
      { name: "Contact Us", url: "/contact-us" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" },
      { name: "Cancellation Policy", url: "/cancellation-policy" },
    ];

    setFooterLinks({
      international,
      popularUpcoming,
      otherServices,
      quickLinks
    });
  }, []);

  if (!footerLinks) {
    return (
      <div className={styles.footerLinks}>
        <div className={styles.linksContainer}>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>International</h3>
            <ul className={styles.linkList}></ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Popular Upcoming</h3>
            <ul className={styles.linkList}></ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Other Services</h3>
            <ul className={styles.linkList}></ul>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}></ul>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <p>The Bucketlister @ 2021. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.footerLinks}>
      <div className={styles.linksContainer}>
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>International</h3>
          <ul className={styles.linkList}>
            {footerLinks.international.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={styles.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Popular Upcoming</h3>
          <ul className={styles.linkList}>
            {footerLinks.popularUpcoming.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={styles.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Other Services</h3>
          <ul className={styles.linkList}>
            {footerLinks.otherServices.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={styles.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {footerLinks.quickLinks.map((link, index) => (
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
