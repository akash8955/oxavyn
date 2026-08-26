import React from 'react';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <div className="cta-banner-global-container">
      <div className="cta-banner-global fade-in-up">
        <div className="cta-banner-content">
          <h2 className="cta-banner-title">Let's help you<br />skyrocket your business</h2>
          
          <div className="cta-banner-arrow">
            <svg viewBox="0 0 150 50" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10,35 C40,0 60,30 80,20 C100,10 120,30 140,25" />
              <path d="M132,17 L140,25 L132,33" />
            </svg>
          </div>
          
          <button className="cta-banner-btn">Explore now</button>
        </div>
      </div>
    </div>
  );
}
