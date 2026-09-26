import React, { useRef, useEffect, useState } from 'react';
import { mediaStructure } from '../app/admin/media/mediaStructure';
import { getOptimizedVideoUrl, getOptimizedPosterUrl } from '../lib/cloudinary-client';
import './ResponsiveVideo.css';

// Global cache to prevent duplicate API calls, with TTL
const mediaCache = {};
const CACHE_TTL = 5000; // 5 seconds

export default function ResponsiveVideo({ page, section, title, src: fallbackSrc, className = "" }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
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

  const [dynamicSrc, setDynamicSrc] = useState(isManaged ? null : fallbackSrc);

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
          // Removed strict 'item.mediaType === video' to ensure videos uploaded to image slots still render
          if (item && item.cloudinaryUrl) {
            setDynamicSrc(item.cloudinaryUrl);
          } else {
            // Fallback to static src if nothing is uploaded yet or it's not managed
            setDynamicSrc(fallbackSrc);
          }
        }
      } catch (err) {
        console.error('Failed to fetch dynamic video for', title, err);
      }
    };

    fetchMedia();
    return () => { isMounted = false; };
  }, [page, section, title]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Only apply Intersection Observer on mobile
    if (!isMobile) return;

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px', // Shrink the root a bit so they stop earlier when scrolling away
      threshold: 0.5, // 50% visibility required to trigger play on mobile
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.muted = false; // Autoplay with sound on mobile when in view
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay policy might block unmuted play; fallback to muted
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            });
          }
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentVideo = videoRef.current;
    
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) observer.unobserve(currentVideo);
    };
  }, [isMobile]);

  // Global pause logic: ensure only one video plays at a time
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = (e) => {
      const allVideos = document.querySelectorAll('video');
      allVideos.forEach(v => {
        if (v !== e.target && !v.paused) {
          v.pause();
        }
      });
    };

    video.addEventListener('play', handlePlay);
    return () => video.removeEventListener('play', handlePlay);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.muted = false; // Autoplay with sound on desktop hover
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
    }
  };

  if (!dynamicSrc) return null;

  return (
    <div 
      className={`responsive-video-wrapper ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={getOptimizedVideoUrl(dynamicSrc) || dynamicSrc}
        poster={getOptimizedPosterUrl(dynamicSrc) || undefined}
        className="responsive-video"
        controls
        loop
        muted
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
