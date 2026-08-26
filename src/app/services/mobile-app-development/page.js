import React from "react";
import "./MobileDev.css";

// Reusing global Navbar and Footer (they are already provided by layout.js, so we don't import them here to prevent duplicates)

import TechConstellationClient from "./TechConstellationClient";

export const metadata = {
  title: "Mobile App Development | Oxavyn",
  description: "From ambitious ideas to intelligent digital products, Oxavyn designs and develops high-performance mobile experiences built for scale.",
};

export default function MobileAppDevelopmentPage() {
  return (
    <main className="mobile-dev-page">
      
      {/* SECTION 01: HERO */}
      <section className="hero-section">
        <div className="hero-content animate-fade-in">
          <span className="eyebrow">Mobile App Development</span>
          <h1 className="huge-heading">
            Apps That <span className="gradient-text">Move</span><br />
            <span className="gradient-text">Your Business Forward.</span>
          </h1>
          <p className="section-desc">
            From ambitious ideas to intelligent digital products, Oxavyn designs and develops high-performance mobile experiences built for scale.
          </p>
          <div className="hero-actions">
            <button className="luxury-btn luxury-btn-secondary">Explore Our Expertise</button>
          </div>
          <div className="hero-platforms">
            iOS &bull; Android &bull; Cross-Platform
          </div>
        </div>
        
        <div className="hero-visuals">
          <div className="light-trail trail-1"></div>
          <div className="light-trail trail-2"></div>
          <div className="light-trail trail-3"></div>
          
          <div className="phone-comp">
            {/* Primary Phone */}
            <div className="phone phone-front">
              <div className="phone-screen">
                <div className="ui-element ui-header"></div>
                <div className="ui-card-row">
                  <div className="ui-element ui-card-sm"></div>
                  <div className="ui-element ui-card-sm"></div>
                </div>
                <div className="ui-element ui-card-lg"></div>
                <div className="ui-element ui-card-lg"></div>
              </div>
            </div>
            {/* Background Phone 1 */}
            <div className="phone phone-back-1">
              <div className="phone-screen">
                <div className="ui-element ui-header"></div>
                <div className="ui-element ui-card-lg"></div>
                <div className="ui-element ui-card-lg"></div>
              </div>
            </div>
            {/* Background Phone 2 */}
            <div className="phone phone-back-2">
              <div className="phone-screen">
                <div className="ui-element ui-header"></div>
                <div className="ui-card-row">
                  <div className="ui-element ui-card-sm"></div>
                  <div className="ui-element ui-card-sm"></div>
                </div>
                <div className="ui-element ui-card-lg"></div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 02: INTRODUCTION */}
      <section className="intro-section">
        <div className="intro-grid">
          <div className="intro-text-content">
            <span className="eyebrow">Built for the mobile-first world</span>
            <h2 className="huge-heading" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", marginBottom: "1.5rem" }}>
              Your customers live<br/>on their phones.<br/>Your product should too.
            </h2>
            <p className="section-desc" style={{ fontSize: "1.25rem", color: "#6b7280" }}>
              Oxavyn transforms ideas into beautifully engineered mobile products that combine exceptional user experience, scalable architecture and intelligent technology.
            </p>
          </div>
          <div className="intro-abstract" style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center" }}>
            <img 
              src="/images/app_customer.png" 
              alt="Customers using mobile apps" 
              style={{ maxWidth: "100%", height: "auto", maxHeight: "550px", animation: "float 6s infinite ease-in-out" }} 
            />
          </div>
        </div>
      </section>

      {/* SECTION 03: OUR MOBILE EXPERTISE */}
      <section className="expertise-section">
        <div className="expertise-header">
          <h2 className="huge-heading">Everything Your App Needs.</h2>
          <p className="section-desc">
            From first concept to millions of users, Oxavyn handles the complete mobile product journey.
          </p>
        </div>
        
        <div className="expertise-grid">
          {[
            {
              title: "iOS Development",
              desc: "Elegant, high-performance experiences engineered for the Apple ecosystem.",
              icon: <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            },
            {
              title: "Android Development",
              desc: "Powerful and scalable applications built for the world's largest mobile ecosystem.",
              icon: <path d="M17.5 19.5v-7M6.5 19.5v-7M12 8V5M2 12h20M7 8h10l-1.4-2.8M12 12v10" />
            },
            {
              title: "Cross-Platform",
              desc: "One powerful codebase. Consistent experiences across platforms.",
              icon: <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9" />
            },
            {
              title: "UI/UX Design",
              desc: "Interfaces designed around real users, business goals and effortless interactions.",
              icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            },
            {
              title: "Backend & API",
              desc: "Secure, scalable infrastructure powering every interaction.",
              icon: <><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></>
            },
            {
              title: "App Maintenance",
              desc: "Continuous optimization, security, monitoring and product evolution.",
              icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            }
          ].map((card, idx) => (
            <div key={idx} className="expertise-card">
              <div className="exp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {card.icon}
                </svg>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04: TECHNOLOGY */}
      <section className="tech-section">
        <div className="tech-header">
          <h2 className="huge-heading">Engineered With<br/>Modern Technology.</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            We choose technology around your product—not the other way around.
          </p>
        </div>
        
        <TechConstellationClient />
      </section>

      {/* SECTION 05: PRODUCT JOURNEY */}
      <section className="journey-section">
        <div className="journey-header" style={{ textAlign: "center" }}>
          <h2 className="huge-heading">From Idea to App Store.</h2>
        </div>
        
        <div className="horizontal-timeline-container">
          <div className="wave-bg">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100px" }}>
              <path d="M0,60 C300,120 600,0 1200,60" fill="none" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="4" strokeDasharray="10 10"></path>
            </svg>
          </div>
          
          <div className="horizontal-timeline-items">
            {[
              { 
                title: "DISCOVER", 
                desc: "Understand the business, users and opportunity.",
                icon: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              },
              { 
                title: "DEFINE", 
                desc: "Shape requirements, features and technical direction.",
                icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              },
              { 
                title: "DESIGN", 
                desc: "Transform ideas into intuitive and beautiful experiences.",
                icon: <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              },
              { 
                title: "DEVELOP", 
                desc: "Build a secure, scalable and high-performance product.",
                icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              },
              { 
                title: "TEST", 
                desc: "Validate performance, usability, security and reliability.",
                icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              },
              { 
                title: "LAUNCH", 
                desc: "Deploy, monitor and continuously improve.",
                icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              }
            ].map((stage, idx) => (
              <div key={idx} className="h-timeline-item">
                <div className="h-timeline-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {stage.icon}
                  </svg>
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: APP EXPERIENCE */}
      <section className="experience-section">
        <div className="exp-header">
          <h2 className="huge-heading">Designed to Be Remembered.</h2>
        </div>
        
        <div className="mockups-showcase">
          {/* Mockup 1 */}
          <div className="mockup-wrapper mockup-1">
            <img src="/images/app_look1.png" alt="App look 1" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          
          {/* Mockup 2 */}
          <div className="mockup-wrapper mockup-2">
            <img src="/images/app_look2.png" alt="App look 2" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          
          {/* Mockup 3 */}
          <div className="mockup-wrapper mockup-3">
            <img src="/images/app_look3.png" alt="App look 3" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </div>
      </section>

      {/* SECTION 07: AI + INTELLIGENT APPS */}
      <section className="ai-section">
        <div className="ai-header">
          <h2 className="huge-heading">Make Your App Intelligent.</h2>
          <p className="section-desc">
            Go beyond traditional mobile experiences with AI-powered products that understand, predict and automate.
          </p>
        </div>
        
        <div className="ai-visualization">
          <div className="neural-net"></div>
          <div className="ai-phone">
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "rgba(255,255,255,0.8)" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="ai-features">
          {[
            "AI Assistants", "Personalized Experiences", "Predictive Intelligence", 
            "Voice Interfaces", "Computer Vision", "Workflow Automation"
          ].map((feature, idx) => (
            <div key={idx} className="ai-card">
              <h4>{feature}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 08: WHY OXAVYN */}
      <section className="why-section">
        <div className="why-header" style={{ textAlign: "center" }}>
          <h2 className="huge-heading" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>Why Businesses<br/>Choose Oxavyn.</h2>
        </div>
        
        <div className="why-grid">
          <div className="why-list">
            <div className="why-item">
              <h3>Business First</h3>
              <p>Technology should solve business problems, not create new ones.</p>
            </div>
            <div className="why-item">
              <h3>Built to Scale</h3>
              <p>Architecture designed for growth from the first release.</p>
            </div>
            <div className="why-item">
              <h3>Design Obsessed</h3>
              <p>Every interaction is considered, refined and intentional.</p>
            </div>
          </div>
          
          <div className="why-visual" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img 
              src="/images/app_why.png" 
              alt="Why choose Oxavyn" 
              style={{ maxWidth: "100%", height: "auto", maxHeight: "550px" }} 
            />
          </div>
        </div>
      </section>

      {/* SECTION 09: FINAL CTA */}
      <section className="cta-section">
        <div className="cta-orb"></div>
        <div className="cta-content">
          <h2 className="huge-heading">Have an App Idea?</h2>
          <h2 className="huge-heading gradient-text">Let's Build It.</h2>
          <p className="section-desc">
            Tell us what you're imagining. We'll help transform your idea into a product people love to use.
          </p>
          <div className="cta-actions">
            <button className="luxury-btn luxury-btn-primary">Start a Conversation &rarr;</button>
            <button className="luxury-btn luxury-btn-secondary">Explore Our Services</button>
          </div>
        </div>
      </section>

    </main>
  );
}
