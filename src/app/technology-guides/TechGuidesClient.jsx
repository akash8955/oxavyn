"use client";
import React from 'react';
import './TechGuides.css';

const techGuides = [
  {
    id: 1,
    title: "Mastering Cloud Native Architecture",
    category: "Cloud Computing",
    description: "An in-depth guide to transitioning your monolithic applications to a highly scalable, resilient cloud-native infrastructure using Kubernetes and microservices.",
    readTime: "12 min read",
    author: "Elena Rodriguez",
    image: "/images/Banner_1.png"
  },
  {
    id: 2,
    title: "The Future of AI in Enterprise Security",
    category: "Artificial Intelligence",
    description: "Explore how machine learning models are revolutionizing threat detection, predictive analysis, and automated response systems for global enterprises.",
    readTime: "8 min read",
    author: "David Chen",
    image: "/images/Banner_2.png"
  },
  {
    id: 3,
    title: "Next-Gen Web Performance Optimization",
    category: "Web Development",
    description: "Discover ultra-luxury web performance techniques. Learn how to achieve sub-second load times while delivering heavy graphical assets and complex animations.",
    readTime: "15 min read",
    author: "Marcus Vance",
    image: "/images/Banner_4.png"
  },
  {
    id: 4,
    title: "Data Lakehouse: The Best of Both Worlds",
    category: "Data Engineering",
    description: "A comprehensive teardown of the data lakehouse paradigm, combining the flexibility of data lakes with the management and structure of traditional data warehouses.",
    readTime: "10 min read",
    author: "Sarah Jenkins",
    image: "/images/Banner_5.png"
  }
];

export default function TechGuidesClient() {
  return (
    <div className="tech-guides-page">
      <div className="tech-ambient-bg"></div>

      {/* Banner Section */}
      <section className="tech-hero-banner" style={{ backgroundImage: 'url(/images/Banner_5.png)' }}>
        <div className="tech-hero-overlay"></div>
        <div className="tech-hero-content animate-fade-in">
          <h1>Technology Guides</h1>
          <p>In-depth insights, whitepapers, and technical teardowns from the elite engineering minds at Oxavyn.</p>
        </div>
      </section>

      <div className="tech-main-container">
        {/* Guides Grid */}
        <div className="guides-grid animate-fade-in delay-1">
          {techGuides.map(guide => (
            <div key={guide.id} className="guide-card glass-panel">
              <div className="guide-image-wrapper">
                <img src={guide.image} alt={guide.title} className="guide-cover-image" />
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
                
                <a href="#" className="read-guide-link">
                  Read Full Guide
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
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
              <a href="/contact" className="btn-primary">Talk to an Expert</a>
              <a href="/services" className="btn-secondary">Explore Services</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
