"use client";
import React, { useState } from 'react';
import './HelpCenter.css';

export default function HelpCenterClient() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your inquiry has been received. Our elite advisors will contact you shortly.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="help-center-page">
      <div className="help-ambient-bg"></div>

      {/* Banner Section */}
      <section className="help-banner" style={{ backgroundImage: 'url(/images/Banner_5.png)' }}>
        <div className="help-banner-overlay"></div>
        <div className="help-banner-content animate-fade-in">
          <h1>Exquisite Support</h1>
          <p>Experience our white-glove assistance and connect with our elite advisors.</p>
        </div>
      </section>

      <div className="help-container">
        <div className="help-grid">
          {/* Contact Form */}
          <div className="form-section glass-panel animate-fade-in delay-1">
            <h2>Send an Inquiry</h2>
            <p>Allow us to assist you with your bespoke requirements.</p>
            <form onSubmit={handleSubmit} className="luxury-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="How can we elevate your experience?" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-primary form-submit">Send Message</button>
            </form>
          </div>

          {/* Contact Channels */}
          <div className="channels-section animate-fade-in delay-2">
            <h2>Connect With Us</h2>
            <p>Reach out through your preferred premier channel.</p>
            <div className="channels-grid">
              
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="channel-card glass-panel">
                <div className="channel-icon whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <span>Instant Messaging</span>
                </div>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="channel-card glass-panel">
                <div className="channel-icon instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h3>Instagram</h3>
                  <span>@oxavyn.elite</span>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="channel-card glass-panel">
                <div className="channel-icon linkedin">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3>LinkedIn</h3>
                  <span>Oxavyn Enterprise</span>
                </div>
              </a>

              <a href="tel:+1234567890" className="channel-card glass-panel">
                <div className="channel-icon call">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3>Direct Call</h3>
                  <span>Priority Line</span>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <section className="help-cta-section animate-fade-in delay-3">
          <div className="cta-content glass-panel">
            <h2>Need Immediate Assistance?</h2>
            <p>Our concierge desk is available 24/7 to cater to your urgent enterprise needs. Don't hesitate to reach out directly.</p>
            <div className="cta-buttons">
              <a href="tel:+1234567890" className="btn-primary">Call Concierge Now</a>
              <a href="mailto:support@oxavyn.com" className="btn-secondary">Email Support</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
