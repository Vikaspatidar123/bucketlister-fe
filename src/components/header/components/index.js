'use client'
import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ContactInfo from './ContactInfo';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <Navigation />
        <ContactInfo />
      </div>
    </header>
  );
};

export default Header;