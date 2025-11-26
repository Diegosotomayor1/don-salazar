// Cache management utilities

export const CACHE_VERSION_KEY = "don_salazar_cache_version";
export const CURRENT_CACHE_VERSION = "1.0.0";

export const clearAppCache = () => {
  // Clear localStorage
  if (typeof window !== "undefined") {
    localStorage.clear();

    // Clear sessionStorage
    sessionStorage.clear();

    // Update cache version
    localStorage.setItem(CACHE_VERSION_KEY, CURRENT_CACHE_VERSION);
  }
};

export const checkAndClearCache = () => {
  if (typeof window !== "undefined") {
    const storedVersion = localStorage.getItem(CACHE_VERSION_KEY);

    // If version doesn't match or doesn't exist, clear cache
    if (storedVersion !== CURRENT_CACHE_VERSION) {
      clearAppCache();
      console.log("Cache cleared due to version mismatch");
      return true;
    }
  }
  return false;
};

export const forceClearAllData = () => {
  if (typeof window !== "undefined") {
    // Clear everything
    localStorage.clear();
    sessionStorage.clear();

    // Also clear any IndexedDB if used
    if ("indexedDB" in window) {
      indexedDB.databases().then((databases) => {
        databases.forEach((db) => {
          if (db.name) {
            indexedDB.deleteDatabase(db.name);
          }
        });
      });
    }

    console.log("All app data cleared");
  }
};
