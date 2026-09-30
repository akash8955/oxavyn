import React from 'react';
import Image from 'next/image';
import './LogoMarquee.css';

// 15 Placeholder logos available
const logos = Array.from({ length: 15 }, (_, i) => `Logo ${i + 1}`);

export default function LogoMarquee() {
  return (
    <section className="logo-marquee-section">
      <h2 className="marquee-title">Powering Solutions With <strong>Leading Technologies</strong></h2>
      <div className="marquee-container">
        <div className="marquee-track">
          {/* We render the list twice to create a seamless infinite loop effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-box" key={index}>
              <Image 
                src={`/images/blogo${(index % 15) + 1}.png`} 
                alt={logo} 
                width={120} 
                height={60} 
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
