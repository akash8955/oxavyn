"use client";
import React, { useState } from 'react';
import DynamicBackground from '@/components/DynamicBackground';
import './ClientSuccess.css';

export default function ClientSuccessClient({ stories = [] }) {
  const [formData, setFormData] = useState({ clientName: '', industry: '', title: '', metrics: '', contactName: '', email: '', description: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');
    try {
      const payload = {
        ...formData,
        logo: formData.clientName.substring(0, 2).toUpperCase(),
        metrics: formData.metrics.split(',').map(s => s.trim()).filter(Boolean)
      };
      const res = await fetch('/api/client-stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setSubmitStatus("Our team will verify your authenticity and if you are a genuine person your story will show within 24 hours. Thanks for submitting your story.");
        setFormData({ clientName: '', industry: '', title: '', metrics: '', contactName: '', email: '', description: '' });
        setTimeout(() => setSubmitStatus(''), 8000);
      } else {
        setSubmitStatus("Error submitting story. Please try again.");
      }
    } catch (err) {
      setSubmitStatus("Error submitting story. Please try again.");
    }
  };

  return (
    <div className="client-success-page">
      <div className="cs-ambient-bg"></div>

      {/* Banner Section */}
      <DynamicBackground page="CLIENT SUCCESS STORIES" section="Client Success Stories Banner" title="Banner Image" className="cs-hero-banner">
        <div className="cs-hero-overlay"></div>
        <div className="cs-hero-content animate-fade-in">
          <h1>Client Success Stories</h1>
          <p>Discover how the world's most ambitious enterprises achieve extraordinary results with Oxavyn's bespoke digital solutions.</p>
        </div>
      </DynamicBackground>

      <div className="cs-main-container">
        {/* Stories Grid */}
        <div className="stories-grid animate-fade-in delay-1">
          {stories.map(story => (
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
                <input type="text" name="clientName" placeholder="Company Name" value={formData.clientName} onChange={handleChange} required />
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
                <textarea name="description" placeholder="Tell us about the impact of our partnership..." rows="5" value={formData.description} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-primary" disabled={submitStatus === 'Submitting...'}>Submit Story</button>
              {submitStatus && <p style={{ marginTop: '1rem', color: '#10b981', fontWeight: '500' }}>{submitStatus}</p>}
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
