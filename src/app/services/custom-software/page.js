"use client";

import React, { useEffect } from 'react';
import './CustomSoftware.css';

export default function CustomSoftwarePage() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="custom-software-page">
      
      {/* SECTION 01: HERO */}
      <section className="cs-hero">
        <div className="cs-section-split">
          <div className="cs-hero-content animate-on-scroll">
            <span className="cs-eyebrow">CUSTOM SOFTWARE DEVELOPMENT</span>
            <h1 className="cs-heading">
              Software Built Around<br />
              the Way You <span className="cs-gradient-text">Work.</span>
            </h1>
            <p className="cs-desc">
              We design and develop custom software that fits your business, your users, and your long-term vision. From internal business platforms to customer-facing products, Oxavyn combines strategy, UX, engineering, and scalable architecture to create technology that works exactly the way your business needs it to.
            </p>
            <div className="cs-btn-group">
              <a href="#contact" className="cs-btn cs-btn-primary">Build Your Software</a>
              <a href="#process" className="cs-btn cs-btn-secondary">Explore Our Process</a>
            </div>
          </div>
          
          <div className="cs-hero-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            
            <div className="eco-line" style={{width: '300px', top: '20%', left: '10%'}}></div>
            <div className="eco-line" style={{width: '200px', bottom: '30%', right: '10%'}}></div>

            <div className="eco-desktop">
              <div className="eco-header">
                <div className="eco-dot" style={{background: '#ff5f56'}}></div>
                <div className="eco-dot" style={{background: '#ffbd2e'}}></div>
                <div className="eco-dot" style={{background: '#27c93f'}}></div>
              </div>
              <div className="eco-body">
                <div className="eco-row" style={{width: '70%'}}></div>
                <div className="eco-row" style={{width: '40%'}}></div>
                <div className="eco-block"></div>
                <div style={{display: 'flex', gap: '1rem', height: '60px'}}>
                  <div className="eco-block" style={{flex: 1}}></div>
                  <div className="eco-block accent" style={{flex: 2}}></div>
                </div>
              </div>
            </div>

            <div className="eco-mobile">
              <div className="eco-mob-notch"></div>
              <div className="eco-mob-body">
                <div className="eco-mob-card"></div>
                <div className="eco-mob-card"></div>
                <div className="eco-mob-card"></div>
              </div>
            </div>

            <div className="eco-cylinder">
              <div className="eco-cyl-ring"></div>
              <div className="eco-cyl-ring"></div>
              <div className="eco-cyl-ring"></div>
            </div>

            <div className="eco-label ux">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
              UX
            </div>
            <div className="eco-label api">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              API
            </div>
            <div className="eco-label cloud">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
              CLOUD
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 02: FROM IDEA TO DIGITAL PRODUCT */}
      <section className="cs-process" id="process">
        <div className="cs-process-header animate-on-scroll">
          <span className="cs-eyebrow">FROM COMPLEXITY TO CLARITY</span>
          <h2 className="cs-heading" style={{fontSize: 'clamp(32px, 4vw, 52px)'}}>
            Your Business Is Unique.<br/>
            Your Software <span className="cs-gradient-text">Should Be Too.</span>
          </h2>
          <p className="cs-desc" style={{margin: '0 auto'}}>
            Off-the-shelf software often forces businesses to change their processes around the limitations of a product. Custom software does the opposite. We understand your workflows, challenges, users, and goals before designing the solution. Every feature is created with a purpose, every interaction is considered, and every technical decision is made with future growth in mind.
          </p>
        </div>

        <div className="cs-process-diagram animate-on-scroll" style={{transitionDelay: '0.2s'}}>
          <div className="process-connector"></div>
          
          <div className="process-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span>Strategy</span>
          </div>
          
          <div className="process-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            <span>UX/UI</span>
          </div>
          
          <div className="process-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            <span>Architecture</span>
          </div>
          
          <div className="process-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <span>Development</span>
          </div>
          
          <div className="process-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>Testing</span>
          </div>
          
          <div className="process-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            <span>Growth</span>
          </div>
        </div>
      </section>

      {/* SECTION 03: ENGINEERED FOR SCALE */}
      <section className="cs-scale">
        <div className="cs-section-split" style={{alignItems: 'center'}}>
          <div className="cs-scale-visual animate-on-scroll">
            <div className="scale-core">
              <div className="scale-core-inner"></div>
            </div>
            
            <div className="scale-satellite sat-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              Cloud Ready
            </div>
            
            <div className="scale-satellite sat-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Secure by Design
            </div>
            
            <div className="scale-satellite sat-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              99.9% Reliability
            </div>
            
            <div className="scale-satellite sat-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              API First
            </div>
          </div>
          
          <div className="cs-scale-content animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <span className="cs-eyebrow">BUILT FOR WHAT'S NEXT</span>
            <h2 className="cs-heading" style={{fontSize: 'clamp(32px, 4vw, 52px)'}}>
              Architecture That<br/>
              <span className="cs-gradient-text">Grows With You.</span>
            </h2>
            <p className="cs-desc">
              Great software is not simply functional at launch—it is prepared for what comes after. Oxavyn builds modern, maintainable architectures designed to support new users, features, integrations, and business requirements as your organization evolves. Performance, security, scalability, and reliability are considered from the beginning rather than added later.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04: WHAT WE BUILD */}
      <section className="cs-modules">
        <div className="animate-on-scroll">
          <span className="cs-eyebrow">CUSTOM DIGITAL SOLUTIONS</span>
          <h2 className="cs-heading" style={{fontSize: 'clamp(32px, 4vw, 52px)'}}>
            From Internal Systems to<br/>
            <span className="cs-gradient-text">Customer-Facing Products.</span>
          </h2>
          <p className="cs-desc" style={{margin: '0 auto'}}>
            Whether you need to streamline internal operations, launch a digital product, connect multiple systems, or create an entirely new software platform, our team builds solutions around the exact requirements of your business. We combine thoughtful product design with robust engineering to create software that is intuitive for users and dependable for the teams behind it.
          </p>
        </div>

        <div className="modules-grid">
          
          <div className="module-card animate-on-scroll" style={{transitionDelay: '0.1s'}}>
            <div className="module-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h3 className="module-title">Business Platforms</h3>
            <div className="module-visual">
              <div className="mod-vis-el w-half"></div>
              <div className="mod-vis-el w-third"></div>
            </div>
          </div>
          
          <div className="module-card animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="module-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
            </div>
            <h3 className="module-title">SaaS Products</h3>
            <div className="module-visual">
              <div className="mod-vis-el w-full"></div>
              <div className="mod-vis-el w-full" style={{top: '40px', left: '10%', opacity: 0.5}}></div>
            </div>
          </div>
          
          <div className="module-card animate-on-scroll" style={{transitionDelay: '0.3s'}}>
            <div className="module-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="module-title">CRM & ERP</h3>
            <div className="module-visual">
              <div className="mod-vis-el" style={{width: '20px', height: '20px', borderRadius: '50%', top: '20px', left: '10%'}}></div>
              <div className="mod-vis-el" style={{width: '20px', height: '20px', borderRadius: '50%', top: '20px', left: '40%'}}></div>
              <div className="mod-vis-el" style={{width: '20px', height: '20px', borderRadius: '50%', top: '20px', left: '70%'}}></div>
            </div>
          </div>
          
          <div className="module-card animate-on-scroll" style={{transitionDelay: '0.4s'}}>
            <div className="module-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3 className="module-title">Web Applications</h3>
            <div className="module-visual">
              <div className="mod-vis-el w-half" style={{background: 'rgba(244,114,182,0.2)'}}></div>
              <div className="mod-vis-el w-third" style={{background: 'rgba(139,92,246,0.2)'}}></div>
            </div>
          </div>
          
          <div className="module-card animate-on-scroll" style={{transitionDelay: '0.5s'}}>
            <div className="module-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3 className="module-title">Mobile Applications</h3>
            <div className="module-visual">
              <div className="mod-vis-el" style={{width: '40px', height: '60px', top: '10px', left: '20%', borderRadius: '8px'}}></div>
              <div className="mod-vis-el" style={{width: '40px', height: '60px', top: '10px', left: '60%', borderRadius: '8px', opacity: 0.5}}></div>
            </div>
          </div>
          
          <div className="module-card animate-on-scroll" style={{transitionDelay: '0.6s'}}>
            <div className="module-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </div>
            <h3 className="module-title">Automation</h3>
            <div className="module-visual">
              <div className="mod-vis-el w-half" style={{top: '30px'}}></div>
              <svg style={{position: 'absolute', top: '35px', left: '60%', width: '16px', height: '16px', color: 'rgba(139,92,246,0.6)'}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="5 12 12 5 19 12"></polyline></svg>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 05: FINAL CTA / PREMIUM CLOSING */}
      <section className="cs-cta">
        <div className="cta-ecosystem">
          <div className="cta-circle cta-c1"></div>
          <div className="cta-circle cta-c2"></div>
          <div className="cta-circle cta-c3"></div>
        </div>
        
        <div className="cs-cta-content animate-on-scroll">
          <span className="cs-eyebrow">LET'S BUILD SOMETHING BETTER</span>
          <h2 className="cs-heading" style={{fontSize: 'clamp(32px, 4vw, 52px)'}}>
            Your Business Has a Vision.<br/>
            Let's Turn It Into <span className="cs-gradient-text">Software.</span>
          </h2>
          <p className="cs-desc" style={{margin: '0 auto', paddingBottom: '2.5rem'}}>
            The best software starts with understanding—not coding. Tell us what you are trying to achieve, what is slowing your business down, or what you want to build next. Our team will help shape the right digital solution, from the first idea through design, development, launch, and continuous growth.
          </p>
          <div className="cs-btn-group" style={{justifyContent: 'center'}}>
            <a href="#contact" className="cs-btn cs-btn-primary">Start Your Project</a>
            <a href="#team" className="cs-btn cs-btn-secondary">Talk to Our Team</a>
          </div>
        </div>
      </section>

    </div>
  );
}
