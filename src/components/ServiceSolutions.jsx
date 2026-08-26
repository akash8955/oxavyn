"use client";
import React, { useRef, useEffect, useState } from 'react';
import './ServiceSolutions.css';

const servicesData = [
  {
    id: 1,
    headerNum: '1/4',
    title: 'Web Development',
    iconColor: '#3b82f6',
    bgColor: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 50%, #e0c3fc 100%)', // soft cyan -> blue -> purple
    boxes: [
      { title: 'Web Development', desc: 'Fast, modern websites built to grow your business.', icon: 'W', image: '/images/box/box1.png' },
      { title: 'E-Commerce', desc: 'Powerful online stores designed to convert visitors.', icon: 'E', image: '/images/box/box2.png' },
      { title: 'UI/UX Design', desc: 'Simple, engaging experiences users love.', icon: 'U', image: '/images/box/box3.png' },
      { title: 'Custom Applications', desc: 'Scalable digital solutions built around your needs.', icon: 'C', image: '/images/box/box4.png' }
    ]
  },
  {
    id: 2,
    headerNum: '2/4',
    title: 'Full-Stack Technology & Cloud',
    iconColor: '#10b981',
    bgColor: 'linear-gradient(135deg, #84e8f5 0%, #63f5aa 50%, #a8ff78 100%)', // cyan -> mint -> green
    boxes: [
      { title: 'Full-Stack Development', desc: 'Complete web solutions from frontend to backend.', icon: 'F', image: '/images/box/box5.png' },
      { title: 'Cloud Solutions', desc: 'Secure, scalable infrastructure built for performance.', icon: 'C', image: '/images/box/box6.png' },
      { title: 'API & Integrations', desc: 'Connect your systems and automate your workflows.', icon: 'A', image: '/images/box/box7.png' },
      { title: 'DevOps & Deployment', desc: 'Reliable deployments with faster, smoother delivery.', icon: 'D', image: '/images/box/box8.png' }
    ]
  },
  {
    id: 3,
    headerNum: '3/4',
    title: 'AI-Powered Business Growth',
    iconColor: '#f59e0b',
    bgColor: 'linear-gradient(135deg, #ffc371 0%, #fffc00 50%, #b8e963 100%)', // orange -> yellow -> lime
    boxes: [
      { title: 'AI Automation', desc: 'Automate repetitive work and accelerate productivity.', icon: 'A', image: '/images/box/box9.png' },
      { title: 'AI Solutions', desc: 'Intelligent technology that turns ideas into impact.', icon: 'A', image: '/images/box/box10.png' },
      { title: 'Customer Support', desc: 'Smarter support experiences available around the clock.', icon: 'C', image: '/images/box/box11.png' },
      { title: 'Smart Payments', desc: 'Secure digital payment experiences for modern businesses.', icon: 'S', image: '/images/box/box12.png' }
    ]
  },
  {
    id: 4,
    headerNum: '4/4',
    title: 'Data, Analytics & Business Solutions',
    iconColor: '#a855f7',
    bgColor: 'linear-gradient(135deg, #e0c3fc 0%, #ffc3a0 50%, #f9f047 100%)', // purple -> pink -> neon yellow
    boxes: [
      { title: 'Data Analytics', desc: 'Turn business data into clear, actionable insights.', icon: 'D', image: '/images/box/box13.png' },
      { title: 'Business Intelligence', desc: 'Real-time insights that help you make better decisions.', icon: 'B', image: '/images/box/box14.png' },
      { title: 'Salesforce Solutions', desc: 'Streamline sales, customer relationships, and growth.', icon: 'S', image: '/images/box/box15.png' },
      { title: 'Digital Transformation', desc: 'Transform your business with technology that scales.', icon: 'D', image: '/images/box/box16.png' }
    ]
  }
];

const ServiceSolutions = () => {
  const containerRef = useRef(null);
  const wrapperRefs = useRef([]);
  const cardRefs = useRef([]);
  const [visibleSlides, setVisibleSlides] = useState(servicesData.map(() => false));

  // Pure Sticky-Stacking scroll engine
  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const sectionRect = containerRef.current.getBoundingClientRect();
      // Section starts with 5vh padding
      const sectionTop = sectionRect.top;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        
        // CSS has: margin-bottom: 100vh, height: 90vh
        const cardTotalHeight = window.innerHeight * 1.9; // 190vh
        
        // Each card's original top relative to the section is 5vh (padding) + index * 190vh
        const cardOriginalTop = (window.innerHeight * 0.05) + (index * cardTotalHeight);
        
        // Match CSS sticky top: `calc(10vh + ${index * 40}px)`
        const stickyTop = (window.innerHeight * 0.1) + (index * 40);
        
        // The card sticks when its original position reaches its sticky position
        const stickPoint = stickyTop - cardOriginalTop;
        
        let scale = 1;
        let brightness = 1;
        let translateY = 0;

        if (sectionTop > stickPoint) {
          // Entry phase: Card is coming up from below
          const distanceToStick = sectionTop - stickPoint;
          const entryProgress = Math.max(0, Math.min(1, 1 - (distanceToStick / window.innerHeight)));
          
          scale = 0.90 + (0.10 * entryProgress);
          
          // Overshoot logic: goes upward past 0, then settles down
          if (entryProgress < 0.75) {
            // Map 0 to 0.75 -> translate 100px to -15px (overshoot upwards)
            const t = entryProgress / 0.75;
            translateY = 100 - (115 * t);
          } else {
            // Map 0.75 to 1.0 -> translate -15px to 0px (settle downwards)
            const t = (entryProgress - 0.75) / 0.25;
            translateY = -15 + (15 * t);
          }
        } else {
          // The card is stuck.
          const distancePastStuck = stickPoint - sectionTop;
          
          // Next card starts 190vh below.
          const progress = Math.max(0, Math.min(1, distancePastStuck / (window.innerHeight * 1.5)));
          
          scale = 1 - (0.04 * progress); // Back slightly to 0.96
          translateY = -30 * progress; // Move up slightly behind the next card
          brightness = 1 - (0.25 * progress); 
        }

        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        card.style.filter = `brightness(${brightness})`;
      });
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); 
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Handle Inner Content Staggered Animations using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisibleSlides(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of the slide is visible
    });

    cardRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-solutions-wrapper" ref={containerRef}>
      {servicesData.map((slide, index) => {
        const isVisible = visibleSlides[index];
        const animateClass = isVisible ? 'animate-in' : '';

        return (
          <div 
            key={slide.id} 
            className="ss-scroll-area"
            ref={(el) => wrapperRefs.current[index] = el}
            data-index={index}
            style={{ zIndex: index + 1 }}
          >
            <div 
              className="ss-sticky-container"
              ref={(el) => cardRefs.current[index] = el}
              data-index={index}
              style={{ 
                top: `calc(10vh + ${index * 40}px)`,
                background: slide.bgColor,
                willChange: 'transform, opacity, filter'
              }}
            >
              {/* Header */}
              <div className={`ss-header ${animateClass}`}>
                <div className="ss-slide-number">{slide.headerNum}</div>
                <div className="ss-header-main">
                  <div className="ss-badge">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <h2 className="ss-title">{slide.title}</h2>
                </div>
              </div>
              
              {/* 4 Content Boxes Grid */}
              <div className="ss-boxes-grid">
                {slide.boxes.map((box, boxIndex) => (
                  <div 
                    key={boxIndex} 
                    className={`ss-box ${animateClass}`}
                    style={{ transitionDelay: `${100 + (boxIndex * 100)}ms` }}
                  >
                    {/* Image Area */}
                    <div className="ss-box-image">
                       <div className="ss-image-placeholder">
                          {box.image ? (
                            <img src={box.image} alt={box.title} className="ss-box-img-tag" />
                          ) : (
                            <div className="ss-img-shape" style={{backgroundColor: slide.iconColor}}></div>
                          )}
                       </div>
                    </div>
                    
                    {/* Content Bottom Area */}
                    <div className="ss-box-content">
                      <div className="ss-box-header">
                        <div className="ss-box-icon-title">
                          <div className="ss-box-icon" style={{color: slide.iconColor}}>{box.icon}</div>
                          <h4 className="ss-box-title">{box.title}</h4>
                        </div>
                        <button className="ss-arrow-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </button>
                      </div>
                      <p className="ss-box-desc">{box.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSolutions;
