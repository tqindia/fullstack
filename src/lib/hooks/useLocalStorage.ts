import { useState, useEffect } from "react";

// Function to retrieve value from localStorage or return default value
function getStorageValue(key: string, defaultValue: any) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    if (!saved) {
      return defaultValue;
    }
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  } else {
    return defaultValue;
  }
}

// Custom hook to manage state using localStorage
export default function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  // Update localStorage when value or key changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  // Return the current value and a function to update it
  return [value, setValue];
}
