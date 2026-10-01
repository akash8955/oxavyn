"use client";
import React from 'react';
import { mediaStructure } from '../app/admin/media/mediaStructure';
import ResponsiveMedia from './cloudinary/ResponsiveMedia';
import { useGlobalMedia } from './MediaProvider';

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
  const { mediaMap } = useGlobalMedia();

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

  let src = fallbackSrc || null;
  let type = fallbackSrc?.match(/\.(mp4|webm|mov)$/i) ? 'video' : 'image';
  let altText = alt !== undefined ? alt : title;

  if (isManaged && mediaMap) {
    const cacheKey = `${page}-${section}`.toLowerCase();
    const sectionMedia = mediaMap[cacheKey] || [];
    const item = sectionMedia.find(m => m.title.toLowerCase() === title.toLowerCase());
    
    if (item && item.cloudinaryUrl) {
      src = item.cloudinaryUrl;
      type = item.mediaType || 'image';
      if (item.altText) altText = item.altText;
    }
  }

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

DynamicMedia.displayName = 'DynamicMedia';

export default DynamicMedia;
