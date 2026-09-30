"use client";
import React from 'react';
import DynamicBackground from '@/components/DynamicBackground';
import ResponsiveMedia from '@/components/cloudinary/ResponsiveMedia';
import './TechGuides.css';

import Link from 'next/link';

export default function TechGuidesClient({ techGuides = [] }) {
  return (
    <div className="tech-guides-page">
      <div className="tech-ambient-bg"></div>

      {/* Banner Section */}
      <DynamicBackground page="TECHNOLOGY GUIDE" section="Technology Guide Banner" title="Banner Image" className="tech-hero-banner">
        <div className="tech-hero-overlay"></div>
        <div className="tech-hero-content animate-fade-in">
          <h1>Technology Guides</h1>
          <p>In-depth insights, whitepapers, and technical teardowns from the elite engineering minds at Oxavyn.</p>
        </div>
      </DynamicBackground>

      <div className="tech-main-container">
        {/* Guides Grid */}
        <div className="guides-grid animate-fade-in delay-1">
          {techGuides.map(guide => (
            <div key={guide.id} className="guide-card glass-panel">
              <div className="guide-image-wrapper">
                <ResponsiveMedia src={guide.image} alt={guide.title} className="guide-cover-image" variant="card" />
                <span className="guide-category-badge">{guide.category}</span>
              </div>
              
              <div className="guide-content">
                <h2 className="guide-title">{guide.title}</h2>
                <p className="guide-desc">{guide.description}</p>
                
                <div className="guide-meta">
                  <div className="guide-author">
                    <div className="author-avatar">{guide.author.charAt(0)}</div>
                    <span className="author-name">{guide.author}</span>
                  </div>
                  <span className="guide-read-time">{guide.readTime}</span>
                </div>
                
                <Link href={`/technology-guides/${guide.id}`} className="read-guide-link">
                  Read Full Guide
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="tech-cta-section animate-fade-in delay-2">
          <div className="tech-cta-content glass-panel">
            <h2>Need a Custom Technical Solution?</h2>
            <p>Our engineers are ready to architect the impossible. Let's discuss your next enterprise deployment.</p>
            <div className="tech-cta-buttons">
              <Link href="/contact" className="btn-primary">Talk to an Expert</Link>
              <Link href="/services" className="btn-secondary">Explore Services</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
