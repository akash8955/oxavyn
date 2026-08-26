import React from 'react';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="about-hero-container">
        
        {/* Left Content Area */}
        <div className="about-hero-content">
          <p className="about-hero-subtitle">About Oxavyn</p>
          <h1 className="about-hero-title">
            We build technology that turns ambitious ideas into powerful digital experiences
          </h1>
          
          <div className="about-hero-text">
            <p>
              At Oxavyn, we combine technology, creativity, and intelligent thinking to help businesses build, launch, and scale digital solutions.
            </p>
            <p>
              From web and application development to AI automation, cloud infrastructure, and enterprise technology, we create solutions designed around real business needs.
            </p>
            <p>
              Our approach brings together modern engineering, scalable architecture, intelligent automation, and seamless digital experiences to help businesses move faster, operate smarter, and create lasting value.
            </p>
          </div>
          
          <div className="about-hero-cta-wrapper">
            {/* SVG Doodle Arrow Left */}
            <svg className="doodle doodle-left" viewBox="0 0 50 50" fill="none" stroke="#ff7a59" strokeWidth="3" strokeLinecap="round">
              <path d="M10 40 C 20 20, 40 40, 20 10" />
            </svg>
            
            <button className="about-cta-btn">Explore Our Solutions</button>
            
            {/* SVG Doodle Arrow Right */}
            <svg className="doodle doodle-right" viewBox="0 0 50 50" fill="none" stroke="#ff7a59" strokeWidth="3" strokeLinecap="round">
              <path d="M40 10 C 20 20, 20 40, 40 40" />
              <path d="M40 40 L 35 30 M40 40 L 30 35" />
            </svg>
          </div>
        </div>

        {/* Right Image Collage */}
        <div className="about-hero-collage">
          <div className="collage-grid">
            <img src="/images/gallary/ab3.png" alt="Team 1" className="img-1" />
            <img src="/images/gallary/ab4.png" alt="Team 2" className="img-2" />
            <img src="/images/gallary/ab6.png" alt="Event" className="img-3" />
            <img src="/images/gallary/ab8.png" alt="Office" className="img-4" />
            {/* ab5 is the main photo at bottom */}
            <img src="/images/gallary/ab5.png" alt="Main Team" className="img-5-main" />
          </div>
        </div>

      </div>
    </section>
  );
}
