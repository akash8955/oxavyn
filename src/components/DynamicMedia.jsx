"use client";
import React, { useState, useEffect } from 'react';
import { mediaStructure } from '../app/admin/media/mediaStructure';
import ResponsiveMedia from './cloudinary/ResponsiveMedia';

// Global cache to prevent duplicate API calls for the same page/section, with TTL
const mediaCache = {};
const CACHE_TTL = 5000; // 5 seconds

const DynamicMedia = React.forwardRef(({ 
  page, 
  section, 
  title, 
  fallbackSrc, 
  alt, 
  className, 
  style, 
  ...props 
}, ref) => {
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

  const [src, setSrc] = useState(fallbackSrc || null);
  const [type, setType] = useState(fallbackSrc?.match(/\.(mp4|webm|mov)$/i) ? 'video' : 'image');
  const [altText, setAltText] = useState(alt !== undefined ? alt : title);

  useEffect(() => {
    let isMounted = true;
    
    // Optimization: If the component is not managed by admin, 
    // do not waste network requests fetching from the API.
    if (!isManaged) {
      return () => { isMounted = false; };
    }
    
    const fetchMedia = async () => {
      // Normalize cache key
      const cacheKey = `${page}-${section}`.toLowerCase();
      
      try {
        const now = Date.now();
        let data;
        
        if (mediaCache[cacheKey] && (now - mediaCache[cacheKey].timestamp < CACHE_TTL || mediaCache[cacheKey].promise)) {
          // Check if it's an unresolved promise from a concurrent fetch
          if (mediaCache[cacheKey].promise) {
            data = await mediaCache[cacheKey].promise;
          } else {
            data = mediaCache[cacheKey].data;
          }
        } else {
          // Create promise and store in cache for concurrent requests
          // Allowed browser caching to speed up transitions
          const fetchPromise = fetch(`/api/media/${encodeURIComponent(page)}/${encodeURIComponent(section)}`)
            .then(res => res.ok ? res.json() : { media: [] });
          
          mediaCache[cacheKey] = { promise: fetchPromise, timestamp: now };
          data = await fetchPromise;
          mediaCache[cacheKey] = { data, timestamp: Date.now() }; // Replace promise with actual data
        }

        if (data && data.media && isMounted) {
          // Find exact title match
          const item = data.media.find(m => m.title.toLowerCase() === title.toLowerCase());
          if (item && item.cloudinaryUrl) {
            setSrc(item.cloudinaryUrl);
            setType(item.mediaType || 'image'); // If mediaType is undefined for some reason
            if (item.altText) setAltText(item.altText);
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
  }, [page, section, title, isManaged, fallbackSrc]);

  if (!src) return null;

  // Determine variant based on title/section context (basic heuristics)
  let variant = 'content';
  const titleLower = title.toLowerCase();
  const sectionLower = section.toLowerCase();
  if (titleLower.includes('hero') || sectionLower.includes('hero') || titleLower.includes('banner') || sectionLower.includes('banner')) variant = 'hero';
  else if (titleLower.includes('card') || titleLower.includes('thumbnail')) variant = 'card';
  else if (titleLower.includes('logo')) variant = 'logo';
  else if (titleLower.includes('background')) variant = 'background';

  return (
    <ResponsiveMedia
      src={src}
      type={type}
      variant={variant}
      alt={altText}
      className={className}
      style={style}
      ref={ref}
      autoPlay={type === 'video'}
      muted={type === 'video'}
      loop={type === 'video'}
      controls={false}
      {...props}
    />
  );
});

export default DynamicMedia;
