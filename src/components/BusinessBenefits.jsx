import React from 'react';
import './BusinessBenefits.css';

const businessData = [
  {
    heading: 'Startups',
    subheading: 'Build fast. Launch smart. Scale confidently.',
    image: '/images/business/bs1.png',
    glowColor: 'rgba(150, 255, 170, 0.5)' // Greenish glow
  },
  {
    heading: 'Growing Businesses',
    subheading: 'Modernize your operations and accelerate growth.',
    image: '/images/business/bs2.png',
    glowColor: 'rgba(200, 180, 255, 0.5)' // Purplish glow
  },
  {
    heading: 'SMEs & Online Brands',
    subheading: 'Power your business with smart digital solutions.',
    image: '/images/business/bs3.png',
    glowColor: 'rgba(255, 220, 150, 0.5)' // Yellowish glow
  },
  {
    heading: 'Enterprises',
    subheading: 'Transform complex operations with scalable technology.',
    image: '/images/business/bs4.png',
    glowColor: 'rgba(150, 240, 255, 0.5)' // Cyanish glow
  }
];

const BusinessBenefits = () => {
  return (
    <section className="bb-section">
      <div className="bb-container">
        <div className="bb-header">
          <h2 className="bb-title">Which Businesses Can Benefit from Oxavyn?</h2>
          <p className="bb-subtitle">
            If your business is ready to build, automate, scale, or transform digitally, Oxavyn is built for you.
          </p>
        </div>
        
        <div className="bb-grid">
          {businessData.map((card, index) => (
            <div key={index} className="bb-card">
              {/* Ambient Glow Background */}
              <div 
                className="bb-ambient-glow" 
                style={{ 
                  background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${card.glowColor} 100%)` 
                }}
              ></div>
              
              <div className="bb-card-content">
                <h3 className="bb-card-title">{card.heading}</h3>
                <p className="bb-card-subtitle">{card.subheading}</p>
              </div>
              
              <div className="bb-card-image">
                <img src={card.image} alt={card.heading} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
