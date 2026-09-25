"use client";
import React from 'react';
import DynamicMedia from './DynamicMedia';
import DynamicBackground from './DynamicBackground';
import './ContactNew.css';

export default function ContactNew() {
  const [submitStatus, setSubmitStatus] = React.useState('');
  const [formData, setFormData] = React.useState({ firstName: '', lastName: '', email: '', company: '', message: '' });

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
      
      {/* Hero Section (Parallax Banner) */}
      <DynamicBackground page="CONTACT" section="Contact Banner" title="Banner Image" fallbackSrc="/images/Banner_5.png" className="parallax-banner vh-90">
        <div className="banner-content animate-fade-in">
          <span style={{ display: 'block', marginBottom: '1rem', color: '#a29bfe', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Contact us</span>
          <h1>Have any queries? We're all ears!</h1>
          <p>Our team is trained, equipped & ready to guide you from scratch to success.</p>
        </div>
      </DynamicBackground>

      {/* Contact Cards Section */}
      <section className="contact-cards-section" style={{ paddingTop: '4rem', paddingBottom: '4rem', background: '#f8fafc' }}>
        <div className="contact-hero-container">

          <div className="contact-card">
            <div className="card-left">
              
              <div className="card-contact-item">
                <div className="card-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div className="card-content">
                  <h4>Ring us up</h4>
                  <p className="highlight-text">
                    <a href="tel:8510036060">8510036060</a> | <a href="tel:9711451060">9711451060</a> | <a href="tel:8510042020">8510042020</a>
                  </p>
                  <span className="availability">Available: 09:00 AM - 07:00 PM</span>
                </div>
              </div>

              <hr className="card-divider" />

              <div className="card-contact-item">
                <div className="card-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div className="card-content">
                  <h4>Write to us</h4>
                  <p><a href="mailto:support@oxavyn.in">support@oxavyn.in</a></p>
                </div>
              </div>

              <hr className="card-divider" />

              <div className="card-contact-item">
                <div className="card-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div className="card-content">
                  <h4>Visit us</h4>
                  <p>416, Phase III, Udyog Vihar, Sector 20, Gurugram, Haryana - 122008</p>
                </div>
              </div>

            </div>
            
            <div className="card-right">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0123456!2d77.085!3d28.502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195c8c5c5c5%3A0x1234567890abcdef!2sUdyog%20Vihar%20Phase%203%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Oxavyn Location"
              ></iframe>
            </div>
          </div>
        </div>
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
              <DynamicMedia page="CONTACT" section="Support Banner" title="Image" fallbackSrc="/contact/woman_on_phone.jpg" alt="Customer Care" />
              <div className="floating-avatar">
                <DynamicMedia page="CONTACT" section="Support Banner" title="Agent Image" fallbackSrc="/contact/woman_on_phone.jpg" alt="Agent" />
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
