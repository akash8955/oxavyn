"use client";
import { mediaStructure } from '../app/admin/media/mediaStructure';
import { useGlobalMedia } from './MediaProvider';

export function useDynamicMedia(page, section, title, fallbackSrc) {
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

  if (isManaged && mediaMap) {
    const cacheKey = `${page}-${section}`.toLowerCase();
    const sectionMedia = mediaMap[cacheKey] || [];
    const item = sectionMedia.find(m => m.title.toLowerCase() === title.toLowerCase());
    
    if (item && item.cloudinaryUrl) {
      src = item.cloudinaryUrl;
      type = item.mediaType || 'image';
    }
  }

  return { src, type };
}
