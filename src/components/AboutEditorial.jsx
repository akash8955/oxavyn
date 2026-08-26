"use client";
import React, { useEffect, useRef } from 'react';
import './AboutEditorial.css';

export default function AboutEditorial() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Reveal elements on scroll with a slight stagger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = containerRef.current?.querySelectorAll('.fade-in-up, .slide-in-left');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <article className="about-page-wrapper" ref={containerRef}>

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-shape"></div>
        <div className="hero-left fade-in-up">
          <span className="eyebrow">ABOUT OXAVYN</span>
          <h1 className="heading-lg">
            We build technology that <br />
            <span className="text-orange">creates impact</span> and <br />
            <span className="text-blue">drives growth</span>
          </h1>
          <p className="paragraph">
            At Oxavyn, we combine technology, creativity and strategic thinking to deliver digital solutions that help businesses innovate, scale and stay ahead in a fast-changing world.
          </p>
          <p className="paragraph">
            From startups to enterprises, we partner with visionary teams to turn ideas into powerful digital experiences.
          </p>
          <button className="btn-primary" style={{ marginTop: '1rem' }}>
            Explore Our Solutions &rarr;
          </button>
        </div>
        <div className="hero-right fade-in-up delay-200">
          {/* Mobile Single Image */}
          <img src="/images/gallary/ab7.png" alt="Hero Mobile" className="mobile-hero-img" />

          {/* Desktop Collage Images */}
          <img src="/images/gallary/ab2.png" alt="Collage 1" className="collage-img collage-1 desktop-only" />
          <img src="/images/gallary/ab3.png" alt="Collage 2" className="collage-img collage-2 desktop-only" />
          <img src="/images/gallary/ab4.png" alt="Collage 3" className="collage-img collage-3 desktop-only" />
        </div>
      </section>

      {/* 2. OUR JOURNEY (Stats) */}
      <section className="section-container" style={{ background: '#f8fafc', maxWidth: '100%' }}>
        <div className="section-container" style={{ padding: '0', maxWidth: '1300px' }}>
          <div className="section-left slide-in-left">
            <span className="eyebrow">OUR JOURNEY</span>
            <h2 className="heading-md">Driven by purpose.<br />Built on innovation.</h2>
            <p className="paragraph">
              Founded with a vision to make technology more meaningful and accessible. Oxavyn continues to grow with a mission to create solutions that empower businesses and improve lives.
            </p>
          </div>
          <div className="section-right">
            <div className="stats-grid">
              <div className="stat-card fade-in-up delay-100">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-card fade-in-up delay-200">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="stat-number">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card fade-in-up delay-300">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="stat-number">40+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-card fade-in-up delay-400">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="stat-number">5+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* BRANDS SECTION */}
      <section className="brands-section" style={{ background: '#eef2ff', padding: '4rem 0', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }} className="fade-in-up">
          <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 0, background: '#ef4444', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px', marginRight: '0.5rem' }}>Brand We</span>
          <span className="eyebrow" style={{ display: 'inline-block', marginBottom: 0, color: 'var(--ox-gray)' }}>Work With</span>
        </div>

        <div className="marquee-container fade-in-up delay-200">
          <div className="marquee-group">
            {[
              "Clutch", "Gartner", "MOVEX", "A4TECH", "radiant", "MAXHUB", "ic solutions", "EXOTEC", "PROVIEW", "UNIQA"
            ].map((brand, i) => (
              <div className="brand-card" key={`brand1-${i}`}>
                <h3>{brand}</h3>
              </div>
            ))}
          </div>
          {/* Duplicate for infinite scroll */}
          <div className="marquee-group" aria-hidden="true">
            {[
              "Clutch", "Gartner", "MOVEX", "A4TECH", "radiant", "MAXHUB", "ic solutions", "EXOTEC", "PROVIEW", "UNIQA"
            ].map((brand, i) => (
              <div className="brand-card" key={`brand2-${i}`}>
                <h3>{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY US SECTION */}
      <section className="section-container" style={{ background: '#eef2ff', maxWidth: '100%' }}>
        <div className="section-container mobile-reorder-img-left" style={{ padding: '0', maxWidth: '1300px' }}>
          
          <div className="mobile-heading-block desktop-hidden slide-in-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="eyebrow" style={{ marginBottom: 0, background: '#ef4444', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>Why Us</span>
              <span className="eyebrow" style={{ marginBottom: 0, color: 'var(--ox-gray)' }}>Better</span>
            </div>
            <h2 className="heading-md">Why Our Services are<br />Better Than Others?</h2>
          </div>

          <div className="section-left slide-in-left">
            <div className="team-image-container">
              <img src="/images/gallary/ab5.png" alt="Why Us" />
            </div>
          </div>
          <div className="section-right">
            <div className="desktop-heading-block mobile-hidden">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="eyebrow" style={{ marginBottom: 0, background: '#ef4444', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>Why Us</span>
                <span className="eyebrow" style={{ marginBottom: 0, color: 'var(--ox-gray)' }}>Better</span>
              </div>
              <h2 className="heading-md">Why Our Services are<br />Better Than Others?</h2>
            </div>
            <div className="why-us-grid">
              {[
                { title: 'Quality Results', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { title: 'Flexible Cooperation', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
                { title: 'On-time Delivery', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> },
                { title: 'Transparent Costs', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
                { title: 'Qualified Developers', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                { title: 'Quick Scale-up', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
              ].map((item, idx) => (
                <div className="why-us-card fade-in-up delay-100" key={idx}>
                  <div className="why-us-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. 6-D APPROACH SECTION */}
      <section className="section-container mobile-reorder-img-right">
        <div className="mobile-heading-block desktop-hidden slide-in-left">
          <h2 className="heading-md">Our 6-D Approach</h2>
        </div>

        <div className="section-left slide-in-left">
          <div className="desktop-heading-block mobile-hidden">
            <h2 className="heading-md">Our 6-D Approach</h2>
          </div>
          <p className="paragraph" style={{ marginBottom: '2rem' }}>
            Our 6-D approach has helped us gain a recognition in the industry. We are delighted to help 700+ businesses with I.T. Solutions across the globe.
          </p>
          <ul className="approach-list">
            <li><strong>DISCOVER</strong> : Identify the problem and look for appropriate solution.</li>
            <li><strong>DEFINE</strong> : Define the resources available at the time of development.</li>
            <li><strong>DESIGN</strong> : The development team and client work together to design the software.</li>
            <li><strong>DEVELOP</strong> : Our experienced development team starts the development of the software.</li>
            <li><strong>DEPLOY</strong> : After development, our testing team tests the software and approves it for deployment.</li>
            <li><strong>DELIVER</strong> : The final software is delivered to the customer.</li>
          </ul>
        </div>
        <div className="section-right">
          <div className="team-image-container fade-in-up delay-200" style={{ background: 'transparent', boxShadow: 'none', marginTop: '3rem' }}>
            <img src="/images/gallary/ab9.png" alt="6-D Approach" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* 7. TEAM SECTION */}
      <section className="section-container mobile-reorder-img-right">
        <div className="mobile-heading-block desktop-hidden slide-in-left">
          <span className="eyebrow">OUR TEAM</span>
          <h2 className="heading-md">Passionate people.<br />Powerful ideas.<br />Real impact.</h2>
        </div>

        <div className="section-left slide-in-left">
          <div className="desktop-heading-block mobile-hidden">
            <span className="eyebrow">OUR TEAM</span>
            <h2 className="heading-md">Passionate people.<br />Powerful ideas.<br />Real impact.</h2>
          </div>
          <p className="paragraph">
            Our team of designers, developers, engineers and strategists work together to deliver solutions that create real impact and long-term value.
          </p>
          <button className="btn-primary" style={{ marginTop: '1rem' }}>
            Join Our Team &rarr;
          </button>
        </div>
        <div className="section-right">
          <div className="team-image-container fade-in-up delay-200">
            <img src="/images/gallary/ab4.png" alt="Our Team" />
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="cta-section">
        <div className="cta-banner fade-in-up">
          <div className="cta-left">
            <h2>Let's build something <br /><span className="text-orange">amazing together</span></h2>
            <p>Have a project in mind or want to learn more about Oxavyn? We'd love to hear from you.</p>
          </div>
          <div className="cta-right">
            <button className="btn-primary">Get in Touch &rarr;</button>
            <button className="btn-outline">Explore Solutions &rarr;</button>
          </div>
        </div>
      </section>

    </article>
  );
}
