import React from 'react';
import './CultureCode.css';

const cultureData = [
  {
    title: 'Innovate Without Limits',
    subtitle: 'Think Beyond Boundaries',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.45.62 2.84 1.5 3.5.76.75 1.23 1.51 1.41 2.5"></path>
        <path d="M12 2v2" stroke="#10b981" strokeWidth="2"></path>
        <path d="M4 8H2" stroke="#10b981" strokeWidth="2"></path>
        <path d="M22 8h-2" stroke="#10b981" strokeWidth="2"></path>
      </svg>
    )
  },
  {
    title: 'Customer First, Always',
    subtitle: 'Their Success Is Our Success',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" fill="#10b981" fillOpacity="0.2"></path>
        <circle cx="12" cy="10" r="3" stroke="#10b981"></circle>
      </svg>
    )
  },
  {
    title: 'Move With Purpose',
    subtitle: 'Think Fast. Build Better.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 5l7 7-7 7" stroke="#10b981" strokeWidth="2"></path>
        <path d="M4 12h16"></path>
        <path d="M4 5l7 7-7 7" opacity="0.5"></path>
      </svg>
    )
  },
  {
    title: 'Own What You Build',
    subtitle: 'Take Responsibility. Make It Happen.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M9 12l2 2 4-4" stroke="#10b981" strokeWidth="2"></path>
      </svg>
    )
  },
  {
    title: 'Grow Together',
    subtitle: 'Learn, Share & Elevate',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#10b981"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#10b981"></path>
      </svg>
    )
  },
  {
    title: 'Speak With Clarity',
    subtitle: 'Be Honest. Be Open.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <line x1="9" y1="10" x2="15" y2="10" stroke="#10b981" strokeWidth="2"></line>
        <line x1="9" y1="14" x2="13" y2="14" stroke="#10b981" strokeWidth="2"></line>
      </svg>
    )
  },
  {
    title: 'Build for Tomorrow',
    subtitle: 'Think Future-First',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20" stroke="#10b981"></path>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  },
  {
    title: 'Excellence Over Average',
    subtitle: 'Raise the Standard',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        <circle cx="12" cy="12" r="3" fill="#10b981" stroke="none"></circle>
      </svg>
    )
  },
  {
    title: 'Stay Human',
    subtitle: 'Respect. Empathy. Collaboration.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#10b981" strokeWidth="2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3"></line>
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3"></line>
      </svg>
    )
  }
];

const CultureCode = () => {
  return (
    <section className="culture-section">
      <div className="culture-container">
        <div className="culture-header animate-fade-in">
          <h2 className="culture-title">
            Our <span className="highlight-text">Culture Code</span>
          </h2>
          <p className="culture-description">
            At Oxavyn, our culture is built around curiosity, ownership, innovation, and the drive to create technology that makes a difference.
          </p>
        </div>
        
        <div className="culture-grid">
          {cultureData.map((item, index) => (
            <div className={`culture-card delay-${(index % 3) + 1} animate-fade-in`} key={index}>
              <div className="culture-icon">
                {item.icon}
              </div>
              <h3 className="culture-item-title">{item.title}</h3>
              <h4 className="culture-item-subtitle">{item.subtitle}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureCode;
