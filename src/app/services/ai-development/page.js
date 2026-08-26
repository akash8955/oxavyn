"use client";

import React, { useEffect, useRef } from 'react';
import './AiDev.css';

export default function AiDevelopmentPage() {
  const vid1Ref = useRef(null);
  const vid2Ref = useRef(null);
  
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

  // Video interaction logic identical to CareerHero
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (window.innerWidth <= 768) {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.muted = false;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                video.muted = true;
                video.play();
              });
            }
          } else {
            video.muted = true;
          }
        }
      });
    };

    const videoObserver = new IntersectionObserver(observerCallback, observerOptions);
    if (vid1Ref.current) videoObserver.observe(vid1Ref.current);
    if (vid2Ref.current) videoObserver.observe(vid2Ref.current);

    return () => {
      if (vid1Ref.current) videoObserver.unobserve(vid1Ref.current);
      if (vid2Ref.current) videoObserver.unobserve(vid2Ref.current);
    };
  }, []);

  const handleVideoEnter = (videoRef) => {
    if (window.innerWidth > 768 && videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          videoRef.current.muted = true;
          videoRef.current.play();
        });
      }
    }
  };

  const handleVideoLeave = (videoRef) => {
    if (window.innerWidth > 768 && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="ai-page">
      
      {/* SECTION 01: HERO | 0-100vh */}
      <section id="hero">
        <div className="ai-split">
          <div className="ai-text-group animate-on-scroll">
            <div className="ai-text-header">
              <span className="ai-eyebrow">AI DEVELOPMENT</span>
              <h1 className="ai-heading">
                Build With Intelligence.<br />
                Build for <span className="ai-gradient-text">What's Next.</span>
              </h1>
            </div>
            <div className="ai-text-body">
              <p className="ai-desc">
                Transform ambitious ideas into intelligent digital products with AI systems designed around your users, business, and future growth.
              </p>
              <div className="ai-btn-group">
                <a href="#cta" className="ai-btn ai-btn-primary">Start Your AI Project</a>
                <a href="#intelligence" className="ai-btn ai-btn-secondary">Explore AI Systems</a>
              </div>
            </div>
          </div>
          
          <div className="ai-visual ai-hero-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="hero-glass-ring"></div>
            <div className="hero-glass-ring" style={{transform: 'rotateX(70deg) rotateY(-20deg)', width: '500px', height: '500px'}}></div>
            
            <div className="hero-floating-orb top-right"></div>
            <div className="hero-floating-orb bottom-left"></div>
            
            <div 
              className="hero-video-container"
              onMouseEnter={() => handleVideoEnter(vid1Ref)}
              onMouseLeave={() => handleVideoLeave(vid1Ref)}
            >
              <video 
                ref={vid1Ref}
                autoPlay 
                loop 
                muted 
                playsInline
                src="/images/service/ai_v1.mp4"
                poster="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><rect width='100%' height='100%' fill='%23e0e7ff'/><text x='50%' y='50%' font-family='sans-serif' font-size='20' font-weight='bold' fill='%236366f1' text-anchor='middle' dominant-baseline='middle'>[AI VIDEO 01]</text></svg>"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: AI INTELLIGENCE | 100-200vh */}
      <section id="intelligence">
        <div className="ai-split">
          <div className="ai-visual intel-visual animate-on-scroll">
            <div className="intel-core">AI CORE</div>
            
            {/* Orbital Nodes */}
            <div className="intel-node" style={{top: '10%', left: '20%', animation: 'ai-float-fast 5s infinite'}}>DATA</div>
            <div className="intel-node" style={{top: '30%', right: '10%', animation: 'ai-float-fast 6s infinite reverse'}}>MODELS</div>
            <div className="intel-node" style={{bottom: '20%', left: '15%', animation: 'ai-float-slow 7s infinite'}}>VISION</div>
            <div className="intel-node" style={{bottom: '10%', right: '25%', animation: 'ai-float-slow 5s infinite reverse'}}>AGENTS</div>
            <div className="intel-node" style={{top: '50%', left: '5%', animation: 'ai-float-fast 4s infinite'}}>INSIGHTS</div>
            
            {/* Connecting lines conceptually represented via absolute positioned thin divs or SVGs could go here, omitting for CSS art brevity */}
            <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none'}}>
              <circle cx="50%" cy="50%" r="150" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" strokeDasharray="5,5" />
              <circle cx="50%" cy="50%" r="220" fill="none" stroke="rgba(244, 114, 182, 0.2)" strokeWidth="1" strokeDasharray="10,10" />
            </svg>
          </div>
          
          <div className="ai-text-group animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="ai-text-header">
              <span className="ai-eyebrow">AI INTELLIGENCE</span>
              <h2 className="ai-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
                Where Ideas Become<br/>
                <span className="ai-gradient-text">Intelligence.</span>
              </h2>
            </div>
            <div className="ai-text-body">
              <p className="ai-desc">
                We engineer sophisticated AI ecosystems tailored to your exact needs. From robust data pipelines to cutting-edge language models, we orchestrate intelligence at every layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: INTELLIGENT PRODUCTS | 200-300vh */}
      <section id="products" style={{flexDirection: 'column', justifyContent: 'center'}}>
        <div className="ai-center animate-on-scroll">
          <span className="ai-eyebrow">INTELLIGENT PRODUCTS</span>
          <h2 className="ai-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
            AI Products Designed to<br/>
            <span className="ai-gradient-text">Think Ahead.</span>
          </h2>
        </div>
        
        <div className="product-visual animate-on-scroll">
          <div className="product-dashboard ai-glass-panel">
            <div className="prod-header">
              <div style={{display: 'flex', gap: '8px'}}>
                <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'var(--ai-indigo)'}}></div>
                <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'var(--ai-pink)'}}></div>
              </div>
            </div>
            <div className="prod-body">
              <div className="prod-card" style={{gridRow: '1/3'}}>
                <div style={{width:'50%', height:'20px', background:'rgba(139,92,246,0.1)', borderRadius:'10px', marginBottom:'20px'}}></div>
                {/* Abstract Bar Chart */}
                <div style={{display:'flex', alignItems:'flex-end', gap:'10px', height:'200px', borderBottom:'1px solid rgba(0,0,0,0.1)', paddingBottom:'10px'}}>
                  <div style={{flex:1, height:'40%', background:'var(--ai-icy)', borderRadius:'5px 5px 0 0'}}></div>
                  <div style={{flex:1, height:'70%', background:'var(--ai-indigo)', borderRadius:'5px 5px 0 0'}}></div>
                  <div style={{flex:1, height:'50%', background:'var(--ai-pink)', borderRadius:'5px 5px 0 0'}}></div>
                  <div style={{flex:1, height:'90%', background:'var(--ai-violet)', borderRadius:'5px 5px 0 0'}}></div>
                  <div style={{flex:1, height:'100%', background:'linear-gradient(180deg, var(--ai-indigo), var(--ai-pink))', borderRadius:'5px 5px 0 0', position:'relative'}}>
                    <div style={{position:'absolute', top:'-25px', left:'50%', transform:'translateX(-50%)', background:'#fff', padding:'2px 8px', borderRadius:'10px', fontSize:'0.7rem', fontWeight:'bold', color:'var(--ai-indigo)', boxShadow:'0 5px 10px rgba(0,0,0,0.1)'}}>AI PREDICTION</div>
                  </div>
                </div>
              </div>
              <div className="prod-card">
                <div style={{width:'80%', height:'15px', background:'rgba(244,114,182,0.2)', borderRadius:'10px'}}></div>
                <div style={{width:'60%', height:'15px', background:'rgba(244,114,182,0.1)', borderRadius:'10px', marginTop:'10px'}}></div>
              </div>
              <div className="prod-card">
                <div style={{width:'100%', height:'40px', background:'rgba(99,102,241,0.1)', borderRadius:'10px'}}></div>
                <div style={{width:'100%', height:'40px', background:'rgba(99,102,241,0.05)', borderRadius:'10px', marginTop:'10px'}}></div>
              </div>
            </div>
          </div>
          
          <div className="prod-ai-assistant">
            <div className="ai-avatar"></div>
            <div style={{flex:1}}>
              <div style={{fontSize:'0.9rem', fontWeight:'700', color:'var(--ai-indigo)'}}>AI Assistant</div>
              <div style={{fontSize:'0.75rem', color:'#888', marginTop:'4px'}}>How can I optimize your workflow today?</div>
            </div>
          </div>

          <div className="floating-tag" style={{top: '-20px', left: '5%'}}>SMART</div>
          <div className="floating-tag" style={{bottom: '40%', left: '-30px'}}>FAST</div>
          <div className="floating-tag" style={{top: '10%', right: '-30px'}}>ADAPTIVE</div>
          <div className="floating-tag" style={{bottom: '-20px', right: '10%'}}>INTELLIGENT</div>
        </div>
      </section>

      {/* SECTION 04: AI AGENTS | 300-400vh */}
      <section id="agents">
        <div className="ai-split">
          <div className="ai-text-group animate-on-scroll">
            <div className="ai-text-header">
              <span className="ai-eyebrow">AI AGENTS</span>
              <h2 className="ai-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
                Your Digital Workforce,<br/>
                <span className="ai-gradient-text">Powered by AI.</span>
              </h2>
            </div>
            <div className="ai-text-body">
              <p className="ai-desc">
                Deploy autonomous multi-agent systems that research, decide, and act. From customer support to complex data analysis, our agents work seamlessly together.
              </p>
            </div>
          </div>
          <div className="ai-visual agents-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="agent-core">AI ORCHESTRATOR</div>
            
            <div className="agent-orb" style={{top: '10%', left: '20%', animation: 'ai-float-fast 4s infinite'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              Research
            </div>
            <div className="agent-orb" style={{top: '10%', right: '20%', animation: 'ai-float-slow 5s infinite reverse'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Support
            </div>
            <div className="agent-orb" style={{bottom: '15%', right: '15%', animation: 'ai-float-fast 6s infinite'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Sales
            </div>
            <div className="agent-orb" style={{bottom: '15%', left: '15%', animation: 'ai-float-slow 4.5s infinite reverse'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              Data
            </div>
            
            <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none'}}>
              <circle cx="50%" cy="50%" r="180" fill="none" stroke="rgba(14, 165, 233, 0.2)" strokeWidth="2" strokeDasharray="10,15" />
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 05: GENERATIVE AI | 400-500vh */}
      <section id="generative" style={{flexDirection: 'column', justifyContent: 'center'}}>
        <div className="ai-center animate-on-scroll">
          <span className="ai-eyebrow">GENERATIVE AI</span>
          <h2 className="ai-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
            One Intelligence.<br/>
            <span className="ai-gradient-text">Infinite Possibilities.</span>
          </h2>
        </div>
        
        <div className="gen-visual animate-on-scroll">
          <div className="gen-input">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ai-indigo)" strokeWidth="2" style={{marginBottom:'10px'}}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <div style={{fontWeight:'700', color:'var(--ai-text-primary)', marginBottom:'5px'}}>Generative Engine</div>
            <div style={{fontSize:'0.85rem', color:'var(--ai-text-secondary)'}}>Prompt → Multimodal Output</div>
          </div>
          
          <div className="gen-path"></div>
          
          <div className="gen-outputs">
            <div className="gen-card" style={{animation: 'ai-float-slow 4s infinite'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Text Intelligence
            </div>
            <div className="gen-card" style={{animation: 'ai-float-fast 5s infinite'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              Image Generation
            </div>
            <div className="gen-card" style={{animation: 'ai-float-slow 6s infinite reverse'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Code Generation
            </div>
            <div className="gen-card" style={{animation: 'ai-float-fast 4.5s infinite reverse'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
              Predictive Analytics
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: VIDEO EXPERIENCE | 500-600vh */}
      <section id="video-experience" style={{flexDirection: 'column', justifyContent: 'center'}}>
        <div className="ai-center animate-on-scroll">
          <span className="ai-eyebrow">VIDEO EXPERIENCE</span>
          <h2 className="ai-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
            See Intelligence<br/>
            <span className="ai-gradient-text">In Motion.</span>
          </h2>
        </div>
        
        <div 
          className="video-showcase animate-on-scroll"
          onMouseEnter={() => handleVideoEnter(vid2Ref)}
          onMouseLeave={() => handleVideoLeave(vid2Ref)}
        >
          <div className="vid-particles" style={{top: '-50px', left: '-50px'}}></div>
          <div className="vid-particles" style={{bottom: '-50px', right: '-50px', background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)'}}></div>
          
          <div className="frameless-video">
            <video 
              ref={vid2Ref}
              autoPlay 
              loop 
              muted 
              playsInline
              src="/images/service/ai_v2.mp4"
              poster="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><rect width='100%' height='100%' fill='%23fdf2f8'/><text x='50%' y='50%' font-family='sans-serif' font-size='24' font-weight='bold' fill='%23f472b6' text-anchor='middle' dominant-baseline='middle'>[AI VIDEO 02]</text></svg>"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* SECTION 07: AI + BUSINESS | 600-700vh */}
      <section id="business">
        <div className="ai-split">
          <div className="ai-visual business-ecosystem animate-on-scroll">
            <div className="biz-core"><span>OXAVYN AI</span></div>
            
            <div className="biz-system" style={{top: '15%', left: '15%', animation: 'ai-float-fast 4s infinite'}}>CRM Integration</div>
            <div className="biz-system" style={{top: '10%', right: '10%', animation: 'ai-float-slow 5s infinite reverse'}}>Enterprise ERP</div>
            <div className="biz-system" style={{bottom: '15%', right: '15%', animation: 'ai-float-fast 6s infinite'}}>Customer Data</div>
            <div className="biz-system" style={{bottom: '10%', left: '10%', animation: 'ai-float-slow 4.5s infinite reverse'}}>Web APIs</div>
            
            <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none'}}>
              <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="75%" y1="15%" x2="50%" y2="50%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="20%" y1="85%" x2="50%" y2="50%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
          <div className="ai-text-group animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="ai-text-header">
              <span className="ai-eyebrow">AI + BUSINESS</span>
              <h2 className="ai-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
                Intelligence That Works<br/>
                <span className="ai-gradient-text">With Your Business.</span>
              </h2>
            </div>
            <div className="ai-text-body">
              <p className="ai-desc">
                AI shouldn't exist in a silo. We architect intelligent systems that connect seamlessly with your existing CRM, ERP, databases, and internal tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08: FUTURE READY | 700-760vh */}
      <section id="future" style={{flexDirection: 'column', justifyContent: 'center'}}>
        <div className="ai-center animate-on-scroll">
          <span className="ai-eyebrow">FUTURE READY</span>
          <h2 className="ai-heading" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
            Ready for the<br/>
            <span className="ai-gradient-text">Intelligence Era.</span>
          </h2>
        </div>
        
        <div className="timeline-visual animate-on-scroll">
          <div className="time-line"></div>
          
          <div className="time-node" style={{background: 'rgba(255,255,255,0.9)'}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ai-icy)" strokeWidth="2" style={{marginBottom:'10px'}}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            NOW
          </div>
          <div className="time-node" style={{background: 'rgba(255,255,255,0.7)', transform: 'translateY(-20px)'}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ai-indigo)" strokeWidth="2" style={{marginBottom:'10px'}}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            AGENTS
          </div>
          <div className="time-node" style={{background: 'rgba(255,255,255,0.5)', transform: 'translateY(-40px)'}}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--ai-pink)" strokeWidth="2" style={{marginBottom:'10px'}}><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
            AUTONOMOUS
          </div>
        </div>
      </section>

      {/* SECTION 09: FINAL CTA */}
      <section id="cta">
        <div className="ai-cta-container animate-on-scroll">
          <span className="ai-eyebrow">BUILD WITH AI</span>
          <h2 className="ai-heading" style={{fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '1rem'}}>
            Your Next Product Should <span className="ai-gradient-text">Think Bigger.</span>
          </h2>
          <p className="ai-desc" style={{margin: '0 auto 2rem', fontSize: '1.1rem'}}>
            Oxavyn transforms ambitious ideas into intelligent digital experiences built for the future.
          </p>
          <div className="ai-btn-group" style={{justifyContent: 'center'}}>
            <a href="#contact" className="ai-btn ai-btn-primary" style={{padding: '1rem 2rem', fontSize: '1rem'}}>Start Your AI Project &rarr;</a>
          </div>
        </div>
      </section>

    </div>
  );
}
