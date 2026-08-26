import React from 'react';
import './WhyJoin.css';

const WhyJoin = () => {
  return (
    <section className="why-join-section">
      <div className="why-join-container">
        <h2 className="why-join-title animate-fade-in">
          Why Join <span className="highlight-text">Oxavyn?</span>
        </h2>
        <p className="why-join-description delay-1 animate-fade-in">
          With a team driven by technology, creativity, and collaboration, Oxavyn gives you the opportunity to work on meaningful digital solutions, grow your expertise, and become part of a culture built around innovation and continuous learning.
        </p>

        <div className="why-join-features delay-1 animate-fade-in">
          <div className="why-join-feature">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <div className="feature-text">
              <h3>Mission</h3>
              <p>To build smart, scalable technology solutions that help businesses solve complex challenges, improve efficiency, and create lasting digital impact.</p>
            </div>
          </div>

          <div className="why-join-feature">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div className="feature-text">
              <h3>Vision</h3>
              <p>To become a trusted technology partner for businesses worldwide by transforming ideas into intelligent, reliable, and future-ready digital experiences.</p>
            </div>
          </div>
        </div>

        <div className="why-join-image-wrapper delay-2 animate-fade-in">
          <img 
            src="/images/gallary/ab1.png" 
            alt="Team at Oxavyn" 
            className="why-join-image"
          />
          {/* Decorative elements */}
          <div className="decor-square"></div>
          <svg className="decor-squiggle" width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 15 Q 12 2, 22 15 T 42 15 T 62 15 T 82 15 T 102 15" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
