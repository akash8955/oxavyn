"use client";

import React, { useEffect } from 'react';
import './WebDev.css';

export default function WebDevelopmentPage() {
  
  useEffect(() => {
    // Simple intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="web-page">
      
      {/* SECTION 01: HERO */}
      <section className="web-hero">
        <div className="web-hero-content">
          <div className="hero-heading-part animate-on-scroll">
            <span className="eyebrow">WEB DEVELOPMENT</span>
            <h1 className="huge-heading">
              Digital Experiences<br />
              Built for <span className="gradient-text">What's Next.</span>
            </h1>
          </div>
          <div className="hero-desc-part animate-on-scroll">
            <div className="section-desc">
              <p>At Oxavyn, we build digital experiences that combine thoughtful design, modern technology, and measurable business value. From high-impact corporate websites to complex web applications and scalable digital platforms, our approach starts with understanding what your business needs to achieve.</p>
              <p>Our development process brings strategy, UX, engineering, performance, and scalability together from the beginning. The result is a digital experience that not only looks exceptional but also performs reliably across devices and environments.</p>
            </div>
            <div className="web-hero-actions">
              <a href="#contact" className="web-btn web-btn-primary">Start Your Project &rarr;</a>
              <a href="#work" className="web-btn web-btn-secondary">Explore Our Work &rarr;</a>
            </div>
          </div>
        </div>
        
        <div className="web-hero-visual">
          <img src="/images/service/web_web.png" alt="Web Development" className="luxury-visual-img" />
        </div>
      </section>

      {/* SECTION 02: THE DIGITAL EXPERIENCE */}
      <section className="web-exp">
        <div className="mobile-split-layout">
          <div className="mobile-split-image">
            <img src="/images/service/web_digital.png" alt="Digital Experience" className="luxury-visual-img" />
          </div>
          <div className="mobile-split-text-group">
            <div className="mobile-split-heading">
              <span className="eyebrow">THE DIGITAL EXPERIENCE</span>
              <h1 className="huge-heading">
                Your Website Is Your<br />
                <span className="gradient-text">First Digital Impression.</span>
              </h1>
            </div>
            <div className="mobile-split-desc">
              <div className="section-desc">
                <p>Your website is often the first meaningful interaction a potential customer has with your business. Within seconds, visitors form an impression about your credibility, quality, and value. That's why we approach web development as more than a visual exercise.</p>
                <p>At Oxavyn, we create experiences where brand, usability, performance, and business objectives work together naturally. Every section, interaction, animation, and piece of content has a purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: WHAT WE BUILD */}
      <section className="web-build">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <span className="eyebrow">WHAT WE BUILD</span>
          <h1 className="huge-heading" style={{margin: '0 auto'}}>
            From Digital Presence<br />
            <span className="gradient-text">to Digital Product.</span>
          </h1>
        </div>
        
        <div className="build-cards-grid">
          <div className="build-card">
            <h3>BUSINESS WEBSITES</h3>
            <p>Digital experiences that communicate your brand with clarity, confidence, and purpose.</p>
          </div>
          <div className="build-card">
            <h3>SAAS PLATFORMS</h3>
            <p>Scalable SaaS experiences designed for complex products, growing users, and evolving businesses.</p>
          </div>
          <div className="build-card">
            <h3>E-COMMERCE</h3>
            <p>Premium shopping experiences focused on discovery, trust, conversion, and retention.</p>
          </div>
          <div className="build-card">
            <h3>WEB APPLICATIONS</h3>
            <p>Custom web applications built around real workflows, real users, and real business requirements.</p>
          </div>
          <div className="build-card">
            <h3>CUSTOM PLATFORMS</h3>
            <p>Purpose-built digital platforms engineered around unique business models and operational requirements.</p>
          </div>
        </div>
      </section>

      {/* SECTION 04: THE OXAVYN METHOD */}
      <section className="web-method">
        <div style={{textAlign: 'center', margin: '0 auto', maxWidth: '800px'}}>
          <span className="eyebrow">THE OXAVYN METHOD</span>
          <h1 className="huge-heading">
            A Clear Process.<br />
            <span className="gradient-text">A Better Product.</span>
          </h1>
          <div className="section-desc" style={{margin: '0 auto'}}>
            <p>Great software rarely comes from jumping straight into development. It comes from understanding the problem, establishing the right direction, and making informed decisions at every stage. That's why Oxavyn follows a structured six-step approach.</p>
          </div>
        </div>
        
        <div className="method-timeline">
          <div className="method-step">
            <div className="method-num">01 &mdash; DISCOVER</div>
            <h3>Understand Before We Build.</h3>
            <p>We understand your business, users, challenges, and opportunities.</p>
          </div>
          <div className="method-step">
            <div className="method-num">02 &mdash; DEFINE</div>
            <h3>Turn Ideas Into a Clear Direction.</h3>
            <p>We define requirements, priorities, features, and the right technical foundation.</p>
          </div>
          <div className="method-step">
            <div className="method-num">03 &mdash; DESIGN</div>
            <h3>Create the Experience Before the Code.</h3>
            <p>We transform strategy into intuitive interfaces and meaningful user experiences.</p>
          </div>
          <div className="method-step">
            <div className="method-num">04 &mdash; DEVELOP</div>
            <h3>Engineer With Purpose.</h3>
            <p>Our development team turns approved designs into fast, reliable, and scalable products.</p>
          </div>
          <div className="method-step">
            <div className="method-num">05 &mdash; DEPLOY</div>
            <h3>Ready for the Real World.</h3>
            <p>We test, optimize, and prepare your product for a confident launch.</p>
          </div>
          <div className="method-step">
            <div className="method-num">06 &mdash; DELIVER</div>
            <h3>Launch Today. Grow Tomorrow.</h3>
            <p>We deliver the final product and remain focused on continuous improvement.</p>
          </div>
        </div>
      </section>

      {/* SECTION 05: TECHNOLOGY (Split Layout) */}
      <section className="web-tech">
        <div className="tech-split-layout">
          <div className="tech-split-text-group">
            <div className="tech-split-heading">
              <span className="eyebrow">TECHNOLOGY</span>
              <h1 className="huge-heading">
                Powerful Technology.<br />
                <span className="gradient-text">Invisible Complexity.</span>
              </h1>
            </div>
            <div className="tech-split-desc">
              <div className="section-desc">
                <p>Technology should enable your product rather than become the product. At Oxavyn, we select technologies based on the requirements of your business, users, performance expectations, security needs, and long-term growth.</p>
                <p>We work with modern, robust frameworks and tools to build digital products that are not only fast and responsive today but also remain scalable and maintainable as your business evolves.</p>
              </div>
            </div>
          </div>
          <div className="tech-split-image">
            <img src="/images/service/web_technology.png" alt="Technology" className="luxury-visual-img" />
          </div>
        </div>
      </section>

      {/* SECTION 06: USER EXPERIENCE */}
      <section className="web-ux">
        <div className="mobile-split-layout">
          <div className="mobile-split-image">
            <img src="/images/service/web_user.png" alt="User Experience" className="luxury-visual-img" />
          </div>
          
          <div className="mobile-split-text-group">
            <div className="mobile-split-heading">
              <span className="eyebrow">USER EXPERIENCE</span>
              <h1 className="huge-heading">
                Beautiful by Design.<br />
                <span className="gradient-text">Effortless by Nature.</span>
              </h1>
            </div>
            <div className="mobile-split-desc">
              <div className="section-desc">
                <p>A great digital experience shouldn't require users to think about how it works. It should simply feel natural.</p>
                <p>Our approach to UX combines research, information architecture, interaction design, visual systems, responsive layouts, and thoughtful micro-interactions to create experiences that are easy to understand and enjoyable to use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: PERFORMANCE */}
      <section className="web-perf">
        <div style={{textAlign: 'center', margin: '0 auto', maxWidth: '800px'}}>
          <span className="eyebrow">PERFORMANCE</span>
          <h1 className="huge-heading">
            Built to Look Fast.<br />
            <span className="gradient-text">Engineered to Be Fast.</span>
          </h1>
          <div className="section-desc" style={{margin: '0 auto'}}>
            <p>Visual quality means little when an experience feels slow. Performance is therefore considered from the architecture and development stage rather than added as an afterthought.</p>
            <p>We focus on efficient code, optimized assets, responsive architecture, intelligent data handling, and reliable infrastructure to create experiences that feel fast and dependable.</p>
          </div>
        </div>
        
        <div className="perf-metrics">
          <div className="metric-item">
            <div className="metric-value">01 &mdash; SPEED</div>
            <div className="metric-label">FAST LOAD TIMES</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">02 &mdash; DESIGN</div>
            <div className="metric-label">RESPONSIVE EXPERIENCES</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">03 &mdash; VISIBILITY</div>
            <div className="metric-label">SEO FOUNDATION</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">04 &mdash; GROWTH</div>
            <div className="metric-label">SCALABLE ARCHITECTURE</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">05 &mdash; RELIABILITY</div>
            <div className="metric-label">SECURE INFRASTRUCTURE</div>
          </div>
        </div>
      </section>

      {/* SECTION 08: WHY OXAVYN (Split Layout: Text Left, Cards Right) */}
      <section className="web-why">
        <div className="split-grid why-split-grid">
          <div className="split-content">
            <span className="eyebrow">WHY OXAVYN</span>
            <h1 className="huge-heading">
              Technology With<br />
              <span className="gradient-text">a Business Purpose.</span>
            </h1>
            <div className="section-desc">
              <p>Technology is valuable when it creates meaningful outcomes. At Oxavyn, every project begins with the business problem rather than the technology itself.</p>
              <p>We take the time to understand what you're trying to improve, what your users need, and what success looks like for your organization. That perspective influences everything from product architecture and UX to development priorities and future scalability.</p>
              <p>By treating technology as an enabler rather than just an output, we ensure that the digital experiences we create actively contribute to your long-term growth, operational efficiency, and market differentiation.</p>
            </div>
          </div>
          
          <div className="why-cards-right">
            <div className="why-card">
              <h3>BUSINESS FIRST</h3>
              <p>Technology should solve business problems, not create new ones.</p>
            </div>
            <div className="why-card">
              <h3>BUILT TO SCALE</h3>
              <p>Architecture designed for growth from the first release.</p>
            </div>
            <div className="why-card">
              <h3>DESIGN OBSESSED</h3>
              <p>Every interaction is considered, refined, and intentional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09: PARTNERSHIP (Split Layout: Image Left, Text Right) */}
      <section className="web-partner">
        <div className="tech-split-layout">
          <div className="tech-split-text-group">
            <div className="tech-split-heading">
              <span className="eyebrow">MORE THAN DEVELOPMENT</span>
              <h1 className="huge-heading">
                We Don't Just Build.<br />
                <span className="gradient-text">We Build With You.</span>
              </h1>
            </div>
            <div className="tech-split-desc">
              <div className="section-desc">
                <p>The strongest digital products are built through collaboration. At Oxavyn, we work closely with founders, business teams, product leaders, and internal technology teams throughout the development journey.</p>
                <p>Our team brings the technical and design expertise while your team brings the business knowledge and vision. Together, we create a solution that reflects your goals rather than simply following a predefined development model.</p>
              </div>
            </div>
          </div>
          
          <div className="tech-split-image">
            <img src="/images/service/web_more.png" alt="Partnership" className="luxury-visual-img" />
          </div>
        </div>
      </section>
      
    </div>
  );
}
