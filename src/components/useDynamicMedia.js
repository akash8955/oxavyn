"use client";
import { useState, useEffect } from 'react';
import { mediaStructure } from '../app/admin/media/mediaStructure';

const mediaCache = {};
const CACHE_TTL = 5000; // 5 seconds

export function useDynamicMedia(page, section, title, fallbackSrc) {
  // Check if this component is managed by the admin panel
  const isManagedByAdmin = () => {
    if (!page || !section || !title) return false;
    const pageObj = mediaStructure.find(p => p.title.toLowerCase() === page.toLowerCase());
    if (!pageObj) return false;
    const sectionObj = pageObj.children.find(s => s.title.toLowerCase() === section.toLowerCase());
    if (!sectionObj) return false;
    return sectionObj.slots.some(s => s.title.toLowerCase() === title.toLowerCase());
  };
  
  const isManaged = isManagedByAdmin();

  const [src, setSrc] = useState(isManaged ? null : fallbackSrc);
  const [type, setType] = useState(isManaged ? 'image' : (fallbackSrc?.match(/\.(mp4|webm|mov)$/i) ? 'video' : 'image'));

  useEffect(() => {
    if (!page || !section || !title) return;
    
    let isMounted = true;
    
    const fetchMedia = async () => {
      const cacheKey = `${page}-${section}`.toLowerCase();
      
      try {
        const now = Date.now();
        let data;
        
        if (mediaCache[cacheKey] && (now - mediaCache[cacheKey].timestamp < CACHE_TTL || mediaCache[cacheKey].promise)) {
          if (mediaCache[cacheKey].promise) {
            data = await mediaCache[cacheKey].promise;
          } else {
            data = mediaCache[cacheKey].data;
          }
        } else {
          const fetchPromise = fetch(`/api/media/${encodeURIComponent(page)}/${encodeURIComponent(section)}`, { cache: 'no-store' })
            .then(res => res.ok ? res.json() : { media: [] });
          
          mediaCache[cacheKey] = { promise: fetchPromise, timestamp: now };
          data = await fetchPromise;
          mediaCache[cacheKey] = { data, timestamp: Date.now() };
        }

        if (data && data.media && isMounted) {
          const item = data.media.find(m => m.title.toLowerCase() === title.toLowerCase());
          if (item && item.cloudinaryUrl) {
            setSrc(item.cloudinaryUrl);
            setType(item.mediaType || 'image');
          } else {
            // Fallback to static src if nothing is uploaded yet or it's not managed
            setSrc(fallbackSrc);
            setType(fallbackSrc?.match(/\.(mp4|webm|mov)$/i) ? 'video' : 'image');
          }
        }
      } catch (err) {
        console.error('Failed to fetch dynamic media for', title, err);
      }
    };

    fetchMedia();
    
    return () => { isMounted = false; };
  }, [page, section, title]);

  return { src, type };
}
