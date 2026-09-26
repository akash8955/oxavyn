"use client";
import React, { useState, useEffect } from 'react';
import DynamicMedia from './DynamicMedia';
import DynamicBackground from './DynamicBackground';
import './ContactNew.css';

export default function ContactNew() {
  const [submitStatus, setSubmitStatus] = useState('');
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', message: '' });
  const [mapSettings, setMapSettings] = useState({
    title: 'HQ & STUDIO',
    subtitle: 'Oxavyn Gurugram',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0123456!2d77.085!3d28.502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195c8c5c5c5%3A0x1234567890abcdef!2sUdyog%20Vihar%20Phase%203%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin',
    mapLink: 'https://www.google.com/maps?q=416+Phase+III+Udyog+Vihar+Sector+20+Gurugram+Haryana+122008'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/settings?key=contact_map_location');
        if (res.ok) {
          const data = await res.json();
          if (data.setting && data.setting.value) {
            setMapSettings(data.setting.value);
          }
        }
      } catch (err) {
        console.error("Failed to fetch map settings", err);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');
    try {
      const res = await fetch('/api/contact-queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitStatus("Thanks for submitting. Our team will contact you soon.");
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 8000);
      } else {
        setSubmitStatus("Error submitting form. Please try again.");
      }
    } catch (err) {
      setSubmitStatus("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="contact-new-wrapper">

      {/* Hero Section (Parallax Banner Image Only) */}
      <DynamicBackground page="CONTACT" section="Contact Banner" title="Banner Image" className="parallax-banner vh-90" />

      {/* Hero Text Content (Below Banner) */}
      <section style={{ padding: '4rem 2rem', background: '#f8fafc', textAlign: 'center' }}>
        <div className="banner-content animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', color: '#111827' }}>
          <span style={{ display: 'block', marginBottom: '1rem', color: '#a29bfe', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Contact us</span>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>Have any queries? We're all ears!</h1>
          <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>Our team is trained, equipped & ready to guide you from scratch to success.</p>
        </div>
      </section>



      {/* Embedded Map Section */}
      <section className="map-layout-section">
        <div className="map-layout-overlay">
          <h2>{mapSettings.title}</h2>
          <h3>{mapSettings.subtitle}</h3>
        </div>
        <div className="map-iframe-container">
          <iframe
            src={mapSettings.src}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
        <a href={mapSettings.mapLink} target="_blank" rel="noopener noreferrer" className="map-click-layer" aria-label="Open location in Google Maps"></a>
      </section>

      {/* Ambient Luxury Query Form Section */}
      <section id="query-form" className="query-form-section">
        <div className="query-form-container">

          <div className="query-form-content">
            <div className="query-form-header">
              <h2>Drop us a Query</h2>
              <p>Experience seamless communication. We'll handle the rest.</p>
            </div>

            <div className="contact-form-wrapper luxury-ambient-form">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group ambient-input-group">
                    <input type="text" id="firstName" placeholder=" " value={formData.firstName} onChange={handleChange} required />
                    <label htmlFor="firstName">First Name</label>
                    <span className="input-focus-border"></span>
                  </div>
                  <div className="form-group ambient-input-group">
                    <input type="text" id="lastName" placeholder=" " value={formData.lastName} onChange={handleChange} required />
                    <label htmlFor="lastName">Last Name</label>
                    <span className="input-focus-border"></span>
                  </div>
                </div>

                <div className="form-group ambient-input-group">
                  <input type="email" id="email" placeholder=" " value={formData.email} onChange={handleChange} required />
                  <label htmlFor="email">Email Address</label>
                  <span className="input-focus-border"></span>
                </div>

                <div className="form-group ambient-input-group">
                  <input type="text" id="company" placeholder=" " value={formData.company} onChange={handleChange} required />
                  <label htmlFor="company">Company</label>
                  <span className="input-focus-border"></span>
                </div>

                <div className="form-group ambient-input-group">
                  <textarea id="message" placeholder=" " value={formData.message} onChange={handleChange} required></textarea>
                  <label htmlFor="message">How can we help you achieve greatness?</label>
                  <span className="input-focus-border"></span>
                </div>

                <button type="submit" className="submit-btn ambient-btn" disabled={submitStatus === 'Submitting...'}>
                  <span>Send Message</span>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
                {submitStatus && <p style={{ marginTop: '1rem', color: '#10b981', fontWeight: '500', textAlign: 'center' }}>{submitStatus}</p>}
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Support Banner Section */}
      <section className="support-banner-section">
        <div className="support-banner-container">
          <div className="support-banner-content">
            <div className="support-image-container">
              <DynamicMedia page="CONTACT" section="Support Banner" title="Image" alt="Customer Care" fallbackSrc="/contact/woman_on_phone.jpg" />
              <div className="floating-avatar">
                <DynamicMedia page="CONTACT" section="Support Banner" title="Agent Image" alt="Agent" fallbackSrc="/contact/woman_on_phone.jpg" />
              </div>
            </div>
            <div className="support-text-container">
              <h2>Oxavyn customer care is always here</h2>
              <p>Go to the Oxavyn customer care self-help page for instant answers to frequently asked questions.</p>
              <button className="ask-now-btn" onClick={() => document.getElementById('query-form').scrollIntoView({ behavior: 'smooth' })}>Ask Now</button>
            </div>
          </div>
        </div>
      </section>



      {/* Embedded specific CTA Section */}
      <section className="growth-cta-section">
        <div className="growth-cta-container">
          <div className="growth-cta-content">
            <div className="cta-shape-left"></div>
            <div className="cta-text-wrapper">
              <h2>Ready to begin your growth journey?</h2>
              <p>Start without a platform fee. No hidden charges.</p>
              <button className="signup-btn" onClick={() => document.getElementById('query-form').scrollIntoView({ behavior: 'smooth' })}>Send Query</button>
            </div>
            <div className="cta-shape-right"></div>
          </div>
        </div>
      </section>

    </div>
  );
}
