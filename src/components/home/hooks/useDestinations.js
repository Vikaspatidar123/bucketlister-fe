"use client";
import { useState, useEffect } from 'react';
import { DESTINATIONS_DATA } from '../constants';

export const useDestinations = () => {
  const [activeTab, setActiveTab] = useState('international');
  const [destinations, setDestinations] = useState([]);

  // Function to handle tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setDestinations(DESTINATIONS_DATA[tabId] || []);
  };

  // Function to get destination by ID
  const getDestinationById = (id) => {
    return destinations.find(dest => dest.id === id) || null;
  };

  // Function to search destinations
  const searchDestinations = (query) => {
    return destinations.filter(dest => 
      dest.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Initialize with international destinations
  useEffect(() => {
    setDestinations(DESTINATIONS_DATA.international || []);
  }, []);

  return {
    activeTab,
    destinations,
    handleTabChange,
    getDestinationById,
    searchDestinations
  };
};
