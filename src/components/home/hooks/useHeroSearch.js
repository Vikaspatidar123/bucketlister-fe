"use client";
import { useState } from "react";

export const useHeroSearch = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    date: "",
  });

  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (name, value) => {
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!searchData.destination.trim() || !searchData.date.trim()) {
      return;
    }

    setIsSearching(true);

    try {
      // Simulate API call for search
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Handle search logic here
      console.log("Search submitted:", searchData);

      // You can add navigation or other actions here
      // For example: router.push(`/search?destination=${searchData.destination}&date=${searchData.date}`);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const resetSearch = () => {
    setSearchData({
      destination: "",
      date: "",
    });
  };

  return {
    searchData,
    isSearching,
    handleInputChange,
    handleSubmit,
    resetSearch,
  };
};
