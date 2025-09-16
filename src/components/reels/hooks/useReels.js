"use client";
import { useMemo } from "react";
import { REELS_DATA } from "../constants";

export const useReels = () => {
  const reels = useMemo(() => {
    return Array.isArray(REELS_DATA) ? REELS_DATA : [];
  }, []);

  return { reels };
};
