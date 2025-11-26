"use client";

import { useEffect } from "react";
import { checkAndClearCache } from "@/utils/cacheManager";

export const CacheManager = () => {
  useEffect(() => {
    // Check cache version on app initialization
    const wasCleared = checkAndClearCache();

    if (wasCleared) {
      // Force a reload if cache was cleared to ensure fresh state
      window.location.reload();
    }
  }, []);

  return null; // This component doesn't render anything
};
