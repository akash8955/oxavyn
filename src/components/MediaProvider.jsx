"use client";
import React, { createContext, useContext } from 'react';

const MediaContext = createContext({ mediaMap: {} });

export const MediaProvider = ({ children, initialMedia = [] }) => {
  // Pre-process media into a map for fast O(1) lookups
  // Key format: "page-section" (lowercase)
  const mediaMap = {};
  
  if (Array.isArray(initialMedia)) {
    initialMedia.forEach(item => {
      if (!item.page || !item.section) return;
      const key = `${item.page}-${item.section}`.toLowerCase();
      if (!mediaMap[key]) mediaMap[key] = [];
      mediaMap[key].push(item);
    });
  }

  return (
    <MediaContext.Provider value={{ mediaMap }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useGlobalMedia = () => useContext(MediaContext);
