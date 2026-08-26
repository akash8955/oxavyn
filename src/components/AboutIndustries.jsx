import React from 'react';
import './AboutIndustries.css';

const industries = [
  { name: 'Startups', icon: '🚀' },
  { name: 'E-commerce', icon: '🛒' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Education', icon: '🎓' },
  { name: 'FinTech', icon: '💳' },
  { name: 'SaaS', icon: '☁️' },
  { name: 'Retail', icon: '🛍️' },
  { name: 'Enterprise', icon: '🏢' },
];

export default function AboutIndustries() {
  return (
    <section className="about-industries-section">
      <div className="about-industries-container">
        
        <div className="industries-header">
          <h2 className="industries-title">
            Building technology for businesses ready to move forward
          </h2>
          {/* Svg decoration similar to the lines in image */}
          <svg className="industries-doodle" viewBox="0 0 50 50" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round">
            <path d="M10 10 L 20 40 M25 15 L 30 35 M40 10 L 35 40" />
          </svg>
        </div>

        <div className="industries-grid">
          {industries.map((ind, index) => (
            <div className="industry-box" key={index}>
              <span className="industry-icon">{ind.icon}</span>
              <span className="industry-name">{ind.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
