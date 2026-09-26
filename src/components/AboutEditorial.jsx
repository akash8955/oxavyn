"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import DynamicMedia from './DynamicMedia';
import DynamicBackground from './DynamicBackground';
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

      {/* 1. HERO SECTION (Parallax Banner Image Only) */}
      <DynamicBackground page="ABOUT" section="About Banner" title="Banner Image" className="parallax-banner vh-110" />

      {/* Hero Text Content (Below Banner) */}
      <section style={{ padding: '4rem 2rem', background: '#f8fafc', textAlign: 'center' }}>
        <div className="banner-content fade-in-up" style={{ maxWidth: '800px', margin: '0 auto', color: '#111827' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
            About Oxavyn
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#4b5563', lineHeight: '1.6' }}>
            Ideas, People, Impact. We are a team of passionate technologists dedicated to redefining digital excellence.
          </p>
        </div>
      </section>

      {/* 1.5. WE BUILD TECHNOLOGY SECTION */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Light Ambient Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(255,117,140,0.4), rgba(255,223,0,0.4), rgba(0,242,254,0.4), rgba(79,172,254,0.4), rgba(255,117,140,0.4))',
          backgroundSize: '200% 100%',
          animation: 'movingGradient 10s linear infinite',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div className="section-container mobile-reorder-img-right" style={{ position: 'relative', zIndex: 1 }}>

          {/* MOBILE HEADING (shows first on mobile) */}
          <div className="mobile-heading-block desktop-hidden slide-in-left">
            <span className="eyebrow" style={{ color: '#6366f1' }}>OUR MISSION</span>
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem', color: '#0f172a' }}>We Build Technology.</h2>
          </div>

          <div className="section-left slide-in-left" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* DESKTOP HEADING (shows normal on desktop) */}
            <div className="desktop-heading-block mobile-hidden">
              <span className="eyebrow" style={{ color: '#6366f1' }}>OUR MISSION</span>
              <h2 className="heading-lg" style={{ marginBottom: '2rem', color: '#0f172a' }}>We Build Technology.</h2>
            </div>

            <p className="paragraph" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
              At Oxavyn, we combine technology, creativity and strategic thinking to deliver digital solutions that help businesses innovate, scale and stay ahead in a fast-changing world.
            </p>
            <p className="paragraph" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
              From startups to enterprises, we partner with visionary teams to turn ideas into powerful digital experiences.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/services/web-development" className="btn-primary" style={{ display: 'inline-flex' }}>
                Explore Our Solutions &rarr;
              </Link>
            </div>
          </div>
          <div className="section-right fade-in-up delay-200" style={{ flex: 1, position: 'relative' }}>
            <div className="luxury-collage">
              {/* Left Polaroid */}
              <div className="hanging-wrapper hanging-left">
                <div className="string"></div>
                <div className="collage-img-box">
                  <div className="clip"></div>
                  <DynamicMedia page="ABOUT" section="About Oxavyn" title="Image 1" alt="Technology 1" />
                </div>
              </div>

              {/* Center Polaroid */}
              <div className="hanging-wrapper hanging-center">
                <div className="string"></div>
                <div className="collage-img-box">
                  <div className="clip"></div>
                  <DynamicMedia page="ABOUT" section="About Oxavyn" title="Image 2" alt="Technology 2" />
                </div>
              </div>

              {/* Right Polaroid */}
              <div className="hanging-wrapper hanging-right">
                <div className="string"></div>
                <div className="collage-img-box">
                  <div className="clip"></div>
                  <DynamicMedia page="ABOUT" section="About Oxavyn" title="Image 3" alt="Technology 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR JOURNEY (Stats) */}
      <section style={{ background: '#f8fafc' }}>
        <div className="section-container">
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
      <section style={{ background: '#eef2ff' }}>
        <div className="section-container mobile-reorder-img-left">

          <div className="mobile-heading-block desktop-hidden slide-in-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="eyebrow" style={{ marginBottom: 0, background: '#ef4444', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px' }}>Why Us</span>
              <span className="eyebrow" style={{ marginBottom: 0, color: 'var(--ox-gray)' }}>Better</span>
            </div>
            <h2 className="heading-md">Why Our Services are<br />Better Than Others?</h2>
          </div>

          <div className="section-left slide-in-left">
            <div className="team-image-container">
              <DynamicMedia page="ABOUT" section="Why Us Better" title="Image" alt="Why Us" />
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
            <DynamicMedia page="ABOUT" section="Our 6D Approach" title="Image" alt="6-D Approach" style={{ objectFit: 'contain' }} />
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
          <Link href="/careers" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
            Join Our Team &rarr;
          </Link>
        </div>
        <div className="section-right">
          <div className="team-image-container fade-in-up delay-200">
            <DynamicMedia page="ABOUT" section="Our Team" title="Image" alt="Our Team" />
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
            <Link href="/contact" className="btn-primary">Get in Touch &rarr;</Link>
            <Link href="/services/mobile-app-development" className="btn-outline">Explore Solutions &rarr;</Link>
          </div>
        </div>
      </section>

    </article>
  );
}
