"use client";
import React, { useState } from 'react';
import './ClientSuccess.css';

const clientStories = [
  {
    id: 1,
    clientName: "Nexus Global Holdings",
    industry: "Finance",
    title: "Revolutionizing Fintech Operations",
    description: "By implementing Oxavyn's bespoke AI solutions, Nexus Global reduced their risk assessment latency by 45%, driving an additional $12M in processed volume within the first quarter. Our ultra-luxury design team also revamped their internal dashboard, creating an interface their executives love.",
    logo: "NG",
    metrics: ["45% Faster", "$12M Revenue", "0 Downtime"]
  },
  {
    id: 2,
    clientName: "Aura Luxury Retail",
    industry: "E-Commerce",
    title: "Elevating the Digital Storefront",
    description: "Oxavyn crafted a mesmerizing glassmorphism UI for Aura, leading to a 300% increase in user engagement and securing their position as the premiere online boutique. We integrated a cutting-edge CMS for flawless product management.",
    logo: "AL",
    metrics: ["300% Engagement", "Premium UI", "2x Conversions"]
  },
  {
    id: 3,
    clientName: "HealthSync Providers",
    industry: "Healthcare",
    title: "Seamless Patient Data Integration",
    description: "Through advanced CRM automation and API integration, we enabled HealthSync to unify over 1 million patient records securely across 50 regional hospitals, all while strictly maintaining HIPAA compliance.",
    logo: "HS",
    metrics: ["1M+ Records", "HIPAA Compliant", "50 Hospitals"]
  },
  {
    id: 4,
    clientName: "Vortex Logistics",
    industry: "Supply Chain",
    title: "AI-Powered Fleet Optimization",
    description: "Our machine learning models analyzed decades of transit data to optimize Vortex's global routes. The result is a robust software ecosystem that cut fuel costs by 18% annually and improved delivery times.",
    logo: "VL",
    metrics: ["18% Fuel Saved", "Global Reach", "Predictive AI"]
  }
];

export default function ClientSuccessClient() {
  const [formData, setFormData] = useState({ company: '', industry: '', title: '', metrics: '', contactName: '', email: '', story: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for sharing your story. Our partnership team will review it shortly.");
    setFormData({ company: '', industry: '', title: '', metrics: '', contactName: '', email: '', story: '' });
  };

  return (
    <div className="client-success-page">
      <div className="cs-ambient-bg"></div>

      {/* Banner Section */}
      <section className="cs-hero-banner" style={{ backgroundImage: 'url(/images/Banner_3.png)' }}>
        <div className="cs-hero-overlay"></div>
        <div className="cs-hero-content animate-fade-in">
          <h1>Client Success Stories</h1>
          <p>Discover how the world's most ambitious enterprises achieve extraordinary results with Oxavyn's bespoke digital solutions.</p>
        </div>
      </section>

      <div className="cs-main-container">
        {/* Stories Grid */}
        <div className="stories-grid animate-fade-in delay-1">
          {clientStories.map(story => (
            <div key={story.id} className="story-card glass-panel">
              <div className="story-header">
                <div className="story-logo">{story.logo}</div>
                <div className="story-company-info">
                  <h3>{story.clientName}</h3>
                  <span className="industry-badge">{story.industry}</span>
                </div>
              </div>
              <h2 className="story-title">{story.title}</h2>
              <p className="story-desc">{story.description}</p>
              <div className="story-metrics">
                {story.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-pill">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Story Form */}
        <div className="submit-story-section animate-fade-in delay-2">
          <div className="submit-story-card glass-panel">
            <div className="submit-story-content">
              <h2>Add Your Story</h2>
              <p>Are you a proud partner of Oxavyn? Share how our collaboration transformed your business and get featured alongside industry leaders.</p>
            </div>
            <form onSubmit={handleSubmit} className="luxury-story-form">
              <div className="form-group">
                <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="industry" placeholder="Industry (e.g., Finance, Healthcare)" value={formData.industry} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="title" placeholder="Story Title (e.g., Revolutionizing Operations)" value={formData.title} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="metrics" placeholder="Key Metrics (comma separated, e.g., 45% Faster, $12M Revenue)" value={formData.metrics} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="contactName" placeholder="Your Full Name & Designation" value={formData.contactName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Corporate Email Address" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <textarea name="story" placeholder="Tell us about the impact of our partnership..." rows="5" value={formData.story} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-primary">Submit Story</button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <section className="cs-cta-section animate-fade-in delay-3">
          <div className="cta-content glass-panel">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Partner with Oxavyn and elevate your enterprise to new heights. Our elite advisors are ready to architect your next digital transformation.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Schedule a Consultation</a>
              <a href="/services" className="btn-secondary">Explore Our Services</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
