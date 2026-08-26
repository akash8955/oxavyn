"use client";
import React, { useEffect, useRef, useState } from "react";

export default function TechConstellationClient() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.4 } // Trigger when 40% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const connections = [15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345];

  return (
    <div className={`tech-constellation ${inView ? 'is-expanded' : ''}`} ref={containerRef}>
      <div className="center-node">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      </div>
      
      {connections.map((deg, idx) => (
        <div key={idx} className="tech-connection" style={{ '--rot': `${deg}deg`, transitionDelay: `${idx * 0.05}s` }}></div>
      ))}

      <div className="tech-label tl-1">React Native</div>
      <div className="tech-label tl-2">Flutter</div>
      <div className="tech-label tl-3">Swift</div>
      <div className="tech-label tl-4">Kotlin</div>
      <div className="tech-label tl-5">Node.js</div>
      <div className="tech-label tl-6">Python</div>
      <div className="tech-label tl-7">Firebase</div>
      <div className="tech-label tl-8">AWS</div>
      <div className="tech-label tl-9">MongoDB</div>
      <div className="tech-label tl-10">PostgreSQL</div>
      <div className="tech-label tl-11">GraphQL</div>
      <div className="tech-label tl-12">Generative AI</div>
    </div>
  );
}
