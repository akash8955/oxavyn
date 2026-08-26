import React from 'react';
import './PerksRecreation.css';

const perksData = [
  {
    title: 'Flexible Working Hours',
    description: 'We provide flexible working hours, keeping our commuting employees in mind.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="16" height="14" rx="2" ry="2"></rect>
        <path d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2"></path>
        <circle cx="12" cy="13" r="3"></circle>
        <polyline points="12 11 12 13 13.5 14.5"></polyline>
      </svg>
    )
  },
  {
    title: 'Well Planned Leave Policy',
    description: 'We know how important work-life balance is. We have a leave policy centring our employees.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="M12 14l3.5-1.5L12 20V14z"></path>
      </svg>
    )
  },
  {
    title: 'Recreational Area',
    description: 'Take a break from work. Enjoy our recreational area and the indoor games.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="6"></circle>
        <path d="M13.5 13.5L16 16"></path>
        <circle cx="17" cy="7" r="1.5"></circle>
      </svg>
    )
  },
  {
    title: '5 Day Working Week',
    description: '3 words - Work-Life Balance. Also, the office lights need some rest too.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="M8 14h3v3H8z"></path>
      </svg>
    )
  },
  {
    title: 'Health Insurance',
    description: "Get the best healthcare treatment without worrying about the huge costs. We've got you covered!",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        <path d="M9 9h6M12 6v6"></path>
      </svg>
    )
  },
  {
    title: 'Chief Happiness Officer',
    description: "Bruno, our furry stressbuster & CHO, will definitely lighten your mood. Don't worry, he doesn't bite.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 5.5c-1.5 0-3 1.5-3 3 0 2 2 3 5 6 3-3 5-4 5-6 0-1.5-1.5-3-3-3-1 0-2 .5-2 1.5 0-1-1-1.5-2-1.5z"></path>
        <circle cx="9" cy="9" r="1" fill="#7e5cf5"></circle>
        <circle cx="15" cy="9" r="1" fill="#7e5cf5"></circle>
        <path d="M12 13v1"></path>
      </svg>
    )
  },
  {
    title: 'Annual Celebrations',
    description: 'Be a part of the Oxavyn Festivities! Celebrate Holi, Christmas, Diwali and more.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.8 11.3L2 22l10.7-3.8"></path>
        <path d="M4 20l4-4"></path>
        <path d="M13 13l6-6"></path>
        <circle cx="20" cy="4" r="1.5"></circle>
        <circle cx="16" cy="2" r="1"></circle>
        <circle cx="22" cy="8" r="1"></circle>
      </svg>
    )
  },
  {
    title: 'Parking Space',
    description: 'Coming to the office on two/four wheels? Give your vehicle rest in our designated parking space.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="15" y="3" width="6" height="6" rx="1"></rect>
        <path d="M17 6h2"></path>
        <path d="M15 9v11"></path>
        <path d="M4 14l2-4h6l2 4v5h-2v-2H6v2H4v-5z"></path>
        <circle cx="6" cy="16" r="1"></circle>
        <circle cx="12" cy="16" r="1"></circle>
      </svg>
    )
  },
  {
    title: 'Cafeteria',
    description: 'Assemble for lunch or just for a quick munch. Choose from a variety of healthy & tasty foods in our cafeteria.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7e5cf5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a2 2 0 0 1 0 4h-1"></path>
        <path d="M17 3v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3h12z"></path>
        <path d="M11 3v14"></path>
      </svg>
    )
  }
];

const PerksRecreation = () => {
  return (
    <section className="perks-section">
      <div className="perks-container">
        <h2 className="perks-title animate-fade-in">
          <span className="highlight-text">Perks</span> & Recreation
        </h2>
        
        <div className="perks-grid">
          {perksData.map((perk, index) => (
            <div className={`perk-card delay-${(index % 3) + 1} animate-fade-in`} key={index}>
              <div className="perk-icon">
                {perk.icon}
              </div>
              <h3 className="perk-title">{perk.title}</h3>
              <p className="perk-description">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element for the top right */}
      <svg className="perks-decor-top-right" width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 50 Q 15 0, 30 50 T 60 50 T 90 50 T 120 50" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <rect x="70" y="20" width="80" height="80" transform="rotate(30 70 20)" fill="#9f8cf0" />
      </svg>
    </section>
  );
};

export default PerksRecreation;
