"use client";
import { useState } from 'react';

export const useHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (itemLabel) => {
    if (activeDropdown === itemLabel) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(itemLabel);
    }
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  return {
    activeDropdown,
    toggleDropdown,
    closeAllDropdowns
  };
};
