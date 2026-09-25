import React from 'react';
import DynamicMedia from './DynamicMedia';
import './LogoMarquee.css';

// 16 Placeholder logos as requested
const logos = Array.from({ length: 16 }, (_, i) => `Logo ${i + 1}`);

export default function LogoMarquee() {
  return (
    <section className="logo-marquee-section">
      <h2 className="marquee-title">Powering Solutions With <strong>Leading Technologies</strong></h2>
      <div className="marquee-container">
        <div className="marquee-track">
          {/* We render the list twice to create a seamless infinite loop effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-box" key={index}>
              <DynamicMedia page="HOME" section="Client Logos" title={`Image ${(index % 16) + 1}`} fallbackSrc={`/images/blogo${(index % 16) + 1}.png`} alt={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
