"use client";
import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Usually an API call here
    alert("Thank you for reaching out! We'll get back to you shortly.");
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        
        <div className="contact-info fade-in-left">
          <h1 className="contact-title">Let's build something <span className="highlight">extraordinary.</span></h1>
          <p className="contact-desc">
            Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen and collaborate.
          </p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="contact-detail-text">
                <h4>Email Us</h4>
                <a href="mailto:hello@oxavyn.com">hello@oxavyn.com</a>
                <p>We'll respond within 24 hours.</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="contact-detail-text">
                <h4>Call Us</h4>
                <a href="tel:+1234567890">+1 (555) 123-4567</a>
                <p>Mon-Fri from 9am to 6pm.</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="contact-detail-text">
                <h4>Visit Us</h4>
                <p>123 Innovation Drive, Tech Park<br/>New Delhi 110001, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper fade-in-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="John" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@company.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" placeholder="Your Company Name" />
            </div>

            <div className="form-group">
              <label htmlFor="service">How can we help?</label>
              <select id="service" required defaultValue="">
                <option value="" disabled>Select a service</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="ai">AI Solutions & Automation</option>
                <option value="uiux">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us about your project..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
