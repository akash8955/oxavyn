"use client";

import React, { useRef, useEffect } from 'react';
import DynamicMedia from '@/components/DynamicMedia';
import DynamicBackground from '@/components/DynamicBackground';
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
    <>
      {/* Hero Section (Parallax Banner Image Only) */}
      <DynamicBackground page="CAREERS" section="Careers Banner" title="Career Banner Image" className="parallax-banner vh-110" />

      {/* Hero Text Content (Below Banner) */}
      <section style={{ padding: '4rem 2rem', background: '#f8fafc', textAlign: 'center' }}>
        <div className="banner-content animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', color: '#111827' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
            A Career Built for <span style={{ color: '#a29bfe' }}>Infinite Possibilities.</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#4b5563', lineHeight: '1.6' }}>
            At Oxavyn, we believe great technology begins with great people. Join a team where ideas become meaningful solutions, challenges become opportunities, and every contribution helps shape what’s next.
          </p>
        </div>
      </section>

      <section className="career-hero" style={{ paddingTop: '4rem' }}>
        <div 
          className="career-video-container delay-2 animate-fade-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DynamicMedia 
            page="CAREERS" 
            section="Careers Video" 
            title="A Career Built For" 
            className="career-video"
            fallbackSrc="https://res.cloudinary.com/df9q38m2a/video/upload/v1727027581/career_n737al.mp4"
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>
    </>
  );
};

export default CareerHero;
