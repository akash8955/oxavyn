import React, { useRef, useEffect, useState } from 'react';
import './ResponsiveVideo.css';

export default function ResponsiveVideo({ src, className = "" }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div 
      className={`responsive-video-wrapper ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="responsive-video"
        controls
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
