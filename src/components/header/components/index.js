'use client'
import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ContactInfo from './ContactInfo';
import MobileMenu from './MobileMenu';
import MobileSearch from './MobileSearch';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <Navigation />
        <ContactInfo showSearch={false} />
      </div>
      <div className={styles.mobileBar}>
        <MobileMenu />
        <Logo />
        <MobileSearch />
      </div>
    </header>
  );
};

export default Header;