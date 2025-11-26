"use client";

import { forceClearAllData } from "@/utils/cacheManager";

export const DebugClearCache = () => {
  const handleClearCache = () => {
    forceClearAllData();
    window.location.reload();
  };

  // Only show in development or with a specific key combo
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <button
      onClick={handleClearCache}
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        background: "red",
        color: "white",
        border: "none",
        padding: "8px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      Clear Cache
    </button>
  );
};
