"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Footer.css';

const footerColumns = [
  [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "Custom Software", href: "/services/custom-software" },
        { name: "AI Development", href: "/services/ai-development" },
        { name: "Generative AI", href: "/services/generative-ai" },
        { name: "Machine Learning", href: "/services/machine-learning" },
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "Business Intelligence", href: "/services/business-intelligence" },
        { name: "Data Science", href: "/services/data-science" },
        { name: "Workflow Automation", href: "/services/workflow-automation" },
        { name: "CRM Automation", href: "/services/crm-automation" },
        { name: "Business Process Automation", href: "/services/business-process-automation" }
      ]
    }
  ],
  [
    {
      title: "Industries",
      links: [
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "E-commerce", href: "/industries/e-commerce" },
        { name: "Education", href: "/industries/education" },
        { name: "Retail & Consumer", href: "/industries/retail" },
        { name: "Agency & Consultancy", href: "/industries/agency-consultancy" },
        { name: "Media & Entertainment", href: "/industries/retail" },
        { name: "Real Estate & Property", href: "/industries/agency-consultancy" },
        { name: "Logistics & Transportation", href: "/industries/e-commerce" },
        { name: "Food & Beverage", href: "/industries/retail" },
        { name: "Pharmaceuticals & Life Sciences", href: "/industries/healthcare" }
      ]
    }
  ],
  [
    {
      title: "Resources",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/contact" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "FAQs", href: "/faq" },
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help-center" },
        { name: "Student Reviews", href: "/student-reviews" },
        { name: "Client Success Stories", href: "/client-success-stories" },
        { name: "Technology Guides", href: "/technology-guides" }
      ]
    }
  ]
];

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (title) => {
    if (!isMobile) return;
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top/Left Section: Brand, Contact */}
        <div className="footer-brand-section">
          <div className="footer-logo-container">
            <h2 className="footer-logo">Oxavyn</h2>
          </div>

          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12.031 0C5.385 0 0 5.385 0 12.03c0 2.126.551 4.195 1.6 6.02L.031 24l6.104-1.6c1.764.966 3.754 1.474 5.896 1.474 6.645 0 12.029-5.384 12.029-12.03C24.06 5.384 18.675 0 12.031 0zm0 21.84c-1.782 0-3.525-.48-5.056-1.385l-.36-.215-3.76.985.998-3.666-.236-.375C2.617 15.58 2.059 13.84 2.059 12.03c0-5.5 4.477-9.973 9.972-9.973 5.5 0 9.973 4.473 9.973 9.973s-4.473 9.97-9.973 9.97zm5.474-7.465c-.3-.15-1.776-.877-2.052-.977-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.341-.667-2.38-1.354-3.284-2.585-.233-.317.234-.292.825-1.476.1-.15.05-.282-.025-.432-.075-.15-.675-1.626-.925-2.226-.242-.582-.487-.503-.675-.513-.175-.008-.375-.011-.575-.011-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.226 5.12 4.526 1.93.834 2.766.726 3.25.61.564-.134 1.776-.726 2.026-1.426.25-.7.25-1.3.175-1.426-.075-.125-.275-.2-.575-.35z"/></svg>
            </a>
            <a href="tel:+1234567890" className="social-icon" aria-label="Phone">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </a>
          </div>

          <div className="footer-reach-us">
            <h3 className="reach-us-title">Reach Us At</h3>
            <div className="reach-us-item">
              <span className="icon">✉</span>
              <a href="mailto:support@oxavyn.com">support@oxavyn.com</a>
            </div>
            <div className="reach-us-item">
              <span className="icon">✉</span>
              <a href="mailto:sales@oxavyn.com">sales@oxavyn.com</a>
            </div>
            
            <div className="reach-us-item">
              <span className="icon location-icon">📍</span>
              <div>
                <strong>Registered Office Address:</strong>
                <p>123 Innovation Drive, Tech Park Sector 5,<br/>New Delhi 110001, India</p>
              </div>
            </div>
            
            <div className="reach-us-item">
              <span className="icon location-icon">📍</span>
              <div>
                <strong>Corporate Office Address:</strong>
                <p>Oxavyn HQ, Tower B, Level 15, Cyber City,<br/>Gurugram, Haryana 122002</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Links Columns */}
        <div className="footer-links-section">
          {footerColumns.map((columnGroups, colIndex) => (
            <div key={colIndex} className="footer-col-wrapper">
              {columnGroups.map((group, groupIndex) => (
                <div 
                  key={groupIndex} 
                  className={`footer-col ${openSection === group.title && isMobile ? 'active' : ''} ${groupIndex > 0 ? 'mt-4' : ''}`}
                >
                  <h3 
                    className="footer-col-title" 
                    onClick={() => toggleSection(group.title)}
                  >
                    {group.title}
                    {isMobile && (
                      <span className={`dropdown-icon ${openSection === group.title ? 'rotate' : ''}`}>
                        ▼
                      </span>
                    )}
                  </h3>
                  <ul className={`footer-link-list ${openSection === group.title || !isMobile ? 'show' : 'hide'}`}>
                    {group.links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.href || "#"}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">© 2026 Oxavyn. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/refund-and-cancellation">Refund & Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
