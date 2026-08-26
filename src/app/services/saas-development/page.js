"use client";

import React, { useEffect } from 'react';
import './SaasDev.css';

export default function SaasDevelopmentPage() {
  
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
    <div className="saas-page">
      
      {/* SECTION 01: HERO | 0-100vh */}
      <section id="hero">
        <div className="saas-split">
          <div className="saas-text-group animate-on-scroll">
            <div className="saas-text-header">
              <span className="saas-eyebrow">SAAS DEVELOPMENT</span>
              <h1 className="saas-heading">
                Software That Scales<br />
                With Your <span className="saas-gradient-text">Ambition.</span>
              </h1>
            </div>
            <div className="saas-text-body">
              <p className="saas-desc">
                Build powerful SaaS products designed for real users, recurring growth, and long-term scalability.
              </p>
              <div className="saas-btn-group">
                <a href="#cta" className="saas-btn saas-btn-primary">Start Your SaaS</a>
                <a href="#blueprint" className="saas-btn saas-btn-secondary">View Architecture</a>
              </div>
            </div>
          </div>
          
          <div className="saas-visual saas-hero-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            
            <div className="hero-laptop glass-panel">
              <div className="hero-laptop-header">
                <div className="eco-dot"></div><div className="eco-dot"></div><div className="eco-dot"></div>
              </div>
              <div className="hero-laptop-body">
                <div className="hero-laptop-sidebar">
                  <div className="hero-ui-bar" style={{width: '100%', background: 'rgba(99,102,241,0.2)'}}></div>
                  <div className="hero-ui-bar" style={{width: '80%'}}></div>
                  <div className="hero-ui-bar" style={{width: '60%'}}></div>
                </div>
                <div className="hero-laptop-content">
                  <div className="hero-ui-bar" style={{width: '30%', height: '24px'}}></div>
                  <div style={{display: 'flex', gap: '15px', height: '100px'}}>
                    <div className="hero-ui-card"></div>
                    <div className="hero-ui-card" style={{background: 'rgba(255,255,255,0.8)'}}></div>
                  </div>
                  <div className="hero-ui-bar" style={{width: '100%', flex: 1}}></div>
                </div>
              </div>
            </div>

            <div className="hero-mobile glass-panel">
              <div className="hero-ui-bar" style={{width: '40px', margin: '0 auto', background: 'rgba(0,0,0,0.2)'}}></div>
              <div className="hero-ui-card" style={{height: '60px'}}></div>
              <div className="hero-ui-bar" style={{width: '100%'}}></div>
              <div className="hero-ui-bar" style={{width: '100%'}}></div>
              <div className="hero-ui-bar" style={{width: '80%'}}></div>
            </div>

            <div className="hero-cloud glass-panel">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--saas-indigo)" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
            </div>

            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Scalable <span>•</span> Secure <span>•</span> Subscription Ready
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 02: SAAS FOUNDATION (BLUEPRINT) | 100-200vh */}
      <section id="blueprint">
        <div className="saas-split">
          <div className="saas-text-group animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="saas-text-header">
              <span className="saas-eyebrow">SAAS FOUNDATION</span>
              <h2 className="saas-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
                From Product Idea<br/>
                to <span className="saas-gradient-text">SaaS Platform.</span>
              </h2>
            </div>
            <div className="saas-text-body">
              <p className="saas-desc">
                We design and architect every layer of your product. From the user interface that drives engagement, to the resilient APIs and databases that power the logic, everything is built to integrate seamlessly and scale flawlessly.
              </p>
            </div>
          </div>
          <div className="saas-visual blueprint-visual animate-on-scroll">
            <div className="blueprint-layer l3">CLOUD / DATA</div>
            <div className="blueprint-layer l2">BACKEND / API</div>
            <div className="blueprint-layer l1">FRONTEND / UX</div>
          </div>
        </div>
      </section>

      {/* SECTION 03: PRODUCT EXPERIENCE | 200-300vh */}
      <section id="experience">
        <div className="saas-center animate-on-scroll">
          <span className="saas-eyebrow">PRODUCT EXPERIENCE</span>
          <h2 className="saas-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
            Designed for Users.<br/>
            <span className="saas-gradient-text">Built for Retention.</span>
          </h2>
        </div>
        
        <div className="product-dashboard glass-panel animate-on-scroll" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -30%) rotateX(5deg)', width: '90%', maxWidth: '1000px'}}>
          <div className="dash-header">
            <div style={{display: 'flex', gap: '8px'}}><div className="eco-dot"></div><div className="eco-dot"></div></div>
            <div className="hero-ui-bar" style={{width: '200px'}}></div>
            <div style={{display: 'flex', gap: '15px'}}>
              <div className="eco-dot" style={{background: 'var(--saas-indigo)'}}></div>
              <div className="eco-dot" style={{background: 'var(--saas-pink)'}}></div>
            </div>
          </div>
          <div className="dash-body">
            <div className="dash-sidebar">
              <div className="hero-ui-bar" style={{width: '100%', height: '30px', background: 'rgba(139,92,246,0.1)'}}></div>
              <div className="hero-ui-bar" style={{width: '80%', height: '20px'}}></div>
              <div className="hero-ui-bar" style={{width: '90%', height: '20px'}}></div>
              <div className="hero-ui-bar" style={{width: '70%', height: '20px'}}></div>
            </div>
            <div className="dash-content">
              <div className="dash-card main-chart">
                <div className="hero-ui-bar" style={{width: '150px', height: '20px', marginBottom: '30px'}}></div>
                {/* Fake chart */}
                <div style={{height: '200px', display: 'flex', alignItems: 'flex-end', gap: '10px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
                  <div style={{width: '30px', height: '40%', background: 'var(--saas-icy)', borderRadius: '4px 4px 0 0'}}></div>
                  <div style={{width: '30px', height: '70%', background: 'var(--saas-indigo)', borderRadius: '4px 4px 0 0'}}></div>
                  <div style={{width: '30px', height: '50%', background: 'var(--saas-icy)', borderRadius: '4px 4px 0 0'}}></div>
                  <div style={{width: '30px', height: '90%', background: 'var(--saas-pink)', borderRadius: '4px 4px 0 0'}}></div>
                </div>
              </div>
              <div className="dash-card stat">
                <div style={{fontSize: '2rem', fontWeight: 'bold', color: 'var(--saas-indigo)'}}>$12.4k</div>
                <div style={{fontSize: '0.8rem', color: '#888'}}>MRR Growth</div>
              </div>
              <div className="dash-card stat">
                <div style={{fontSize: '2rem', fontWeight: 'bold', color: 'var(--saas-pink)'}}>+42%</div>
                <div style={{fontSize: '0.8rem', color: '#888'}}>Active Users</div>
              </div>
            </div>
          </div>
          
          <div className="floating-tag" style={{top: '-20px', left: '10%'}}>Responsive</div>
          <div className="floating-tag" style={{top: '40%', right: '-30px'}}>Intuitive</div>
          <div className="floating-tag" style={{bottom: '-20px', left: '40%'}}>Conversion Focused</div>
        </div>
      </section>

      {/* SECTION 04: TECHNOLOGY & SCALE | 300-400vh */}
      <section id="scale">
        <div className="saas-split">
          <div className="saas-text-group animate-on-scroll">
            <div className="saas-text-header">
              <span className="saas-eyebrow">TECHNOLOGY & SCALE</span>
              <h2 className="saas-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
                Architecture Ready<br/>
                <span className="saas-gradient-text">For Growth.</span>
              </h2>
            </div>
            <div className="saas-text-body">
              <p className="saas-desc">
                Your software should never be the bottleneck. We build cloud-native SaaS architectures with microservices, scalable databases, and automated deployment pipelines that handle millions of requests seamlessly.
              </p>
            </div>
          </div>
          <div className="saas-visual tech-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="energy-path"></div>
            <div className="server-rack">
              <div className="server-node"><div className="server-light"></div></div>
              <div className="server-node"><div className="server-light"></div></div>
              <div className="server-node"><div className="server-light"></div></div>
              <div className="server-node"><div className="server-light"></div></div>
              <div className="server-node"><div className="server-light"></div></div>
            </div>
            <div className="floating-tag" style={{top: '20%', left: '0'}}>Cloud Ready</div>
            <div className="floating-tag" style={{bottom: '20%', right: '0'}}>API First</div>
          </div>
        </div>
      </section>

      {/* SECTION 05: SAAS BUSINESS ENGINE | 400-500vh */}
      <section id="business" style={{flexDirection: 'column', justifyContent: 'center', gap: '2rem'}}>
        <div className="saas-center animate-on-scroll">
          <span className="saas-eyebrow">SAAS BUSINESS ENGINE</span>
          <h2 className="saas-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
            Built Around Your<br/>
            <span className="saas-gradient-text">Business Model.</span>
          </h2>
        </div>
        
        <div className="business-visual animate-on-scroll">
          <div className="biz-circle"></div>
          <div className="biz-node" style={{top: '-50px', left: '150px'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Users
          </div>
          <div className="biz-node" style={{top: '150px', right: '-50px'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            Billing
          </div>
          <div className="biz-node" style={{bottom: '-50px', left: '150px'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Data
          </div>
          <div className="biz-node" style={{top: '150px', left: '-50px'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            Growth
          </div>
          
          <div className="glass-panel" style={{width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(244,114,182,0.2))'}}>
            <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--saas-text-primary)'}}>Product Core</div>
          </div>
        </div>
      </section>

      {/* SECTION 06: SECURITY & RELIABILITY | 500-600vh */}
      <section id="security">
        <div className="saas-split">
          <div className="saas-text-group animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="saas-text-header">
              <span className="saas-eyebrow">SECURITY & RELIABILITY</span>
              <h2 className="saas-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
                Secure by Design.<br/>
                <span className="saas-gradient-text">Reliable by Nature.</span>
              </h2>
            </div>
            <div className="saas-text-body">
              <p className="saas-desc">
                Trust is the foundation of any SaaS platform. We implement enterprise-grade security protocols, robust access controls, encrypted databases, and 24/7 monitoring systems to ensure your data is always protected and available.
              </p>
            </div>
          </div>
          <div className="saas-visual security-visual animate-on-scroll">
            <div className="crystal-shield">
              <div className="shield-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
            </div>
            <div className="floating-tag" style={{top: '10%', left: '10%'}}>Encryption</div>
            <div className="floating-tag" style={{bottom: '10%', right: '10%'}}>Authentication</div>
          </div>
        </div>
      </section>

      {/* SECTION 07: FINAL CTA | 600-700vh */}
      <section id="cta">
        <div className="saas-cta-container animate-on-scroll">
          <div className="saas-cta-bg"></div>
          <span className="saas-eyebrow">BUILD YOUR SAAS</span>
          <h2 className="saas-heading" style={{fontSize: 'clamp(40px, 5vw, 64px)'}}>
            Your SaaS Idea.<br/>
            <span className="saas-gradient-text">Engineered to Scale.</span>
          </h2>
          <p className="saas-desc" style={{margin: '0 auto 3rem'}}>
            From first concept to a production-ready platform, Oxavyn brings product strategy, UX, engineering, and cloud infrastructure together to build what's next.
          </p>
          <div className="saas-btn-group" style={{justifyContent: 'center'}}>
            <a href="#contact" className="saas-btn saas-btn-primary" style={{padding: '1.5rem 3rem', fontSize: '1.2rem'}}>Start Your SaaS Journey &rarr;</a>
          </div>
          <div style={{marginTop: '1.5rem', fontWeight: '500', color: 'var(--saas-indigo)'}}>Let's Build What's Next.</div>
        </div>
      </section>

    </div>
  );
}
