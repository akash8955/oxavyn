"use client";

import React, { useRef, useEffect } from 'react';
import './CareerHero.css';

const CareerHero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% visibility required to trigger
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Apply scroll-based unmuting only on mobile view
        if (window.innerWidth <= 768 && videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.muted = false;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // If autoplay policy blocks unmuting, fallback to muted playback
                videoRef.current.muted = true;
                videoRef.current.play();
              });
            }
          } else {
            videoRef.current.muted = true;
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentVideo = videoRef.current;
    
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    // Only apply hover effect on desktop
    if (window.innerWidth > 768 && videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          videoRef.current.muted = true;
          videoRef.current.play();
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768 && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="career-hero">
      <h1 className="career-heading animate-fade-in">
        A Career Built for <span className="highlight-text">Infinite Possibilities.</span>
      </h1>
      
      <p className="career-subheading delay-1 animate-fade-in">
        At Oxavyn, we believe great technology begins with great people. Join a team where ideas become meaningful solutions, challenges become opportunities, and every contribution helps shape what’s next.
      </p>

      <div 
        className="career-video-container delay-2 animate-fade-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src="/images/career-vid.mp4"
          className="career-video"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default CareerHero;
