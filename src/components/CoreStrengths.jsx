"use client";

import React, { useRef } from 'react';
import './CoreStrengths.css';

const strengthsData = [
  { heading: '500+ Digital Solutions', image: '/images/strength/s1.png' },
  { heading: '50+ Tech Experts', image: '/images/strength/s2.png' },
  { heading: '20+ Industry Verticals', image: '/images/strength/s3.png' },
  { heading: '30+ Global Markets', image: '/images/strength/s4.png' },
  { heading: '100+ Integrations', image: '/images/strength/s5.png' },
  { heading: '1M+ Operations Optimized', image: '/images/strength/s6.png' },
];

const CoreStrengths = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 384; // Card width (360) + gap (24)
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="cs-section">
      <div className="cs-container">
        <div className="cs-header">
          <h2 className="cs-title">Our Core Strengths</h2>
          <div className="cs-nav-buttons">
            <button className="cs-nav-btn" onClick={() => scroll('left')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="cs-nav-btn" onClick={() => scroll('right')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="cs-slider-container" ref={scrollRef}>
          <div className="cs-slider-track">
            {strengthsData.map((item, index) => (
              <div key={index} className="cs-card">
                <h3 className="cs-card-heading">
                  {item.heading.split(' ').map((word, i) => {
                    // Bold the first part (the number/statistic)
                    if (i === 0) return <strong key={i}>{word} </strong>;
                    return word + ' ';
                  })}
                </h3>
                <div className="cs-card-image">
                  <img src={item.image} alt={item.heading} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;
