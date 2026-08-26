"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import './TpiDev.css';

export default function ThirdPartyIntegrations() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Third-Party Integrations | Oxavyn</title>
        <meta name="description" content="Oxavyn connects the tools, platforms, APIs, and systems your business already depends on." />
      </Head>

      <main className="tpi-page">
        {/* SECTION 01: HERO | 0-100vh */}
        <section id="hero" style={{minHeight: '100vh', padding: '12rem 5% 6rem'}}>
          <div className="tpi-split visual-right">
            <div className="tpi-text-header animate-on-scroll">
              <span className="tpi-eyebrow">THIRD-PARTY INTEGRATIONS</span>
              <h1 className="tpi-heading">
                Everything Connected.<br/>
                <span className="tpi-gradient-text">Nothing Isolated.</span>
              </h1>
            </div>
            
            <div className="tpi-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="tpi-hero-visual">
                
                {/* Background Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'400px', height:'400px', background:'var(--tpi-accent-orange)', filter:'blur(150px)', opacity:0.3, animation:'tpi-pulse-orange 6s infinite alternate', zIndex: -2}}></div>

                {/* Central Integration Core */}
                <div className="tpi-core" style={{transform:'rotateY(10deg) rotateX(10deg)'}}>
                  OXAVYN<br/>CORE
                </div>

                {/* Orbiting Platforms */}
                <div style={{position:'absolute', top:'10%', left:'10%', animation:'tpi-orbit-cw 20s linear infinite'}}>
                  <div className="tpi-node" style={{color:'var(--tpi-accent-cyan)'}}>CRM</div>
                </div>
                
                <div style={{position:'absolute', bottom:'10%', left:'20%', animation:'tpi-orbit-ccw 25s linear infinite'}}>
                  <div className="tpi-node" style={{color:'var(--tpi-accent-gold)'}}>PAYMENTS</div>
                </div>
                
                <div style={{position:'absolute', top:'30%', right:'5%', animation:'tpi-orbit-cw 15s linear infinite'}}>
                  <div className="tpi-node" style={{color:'var(--tpi-accent-violet)'}}>AI / ML</div>
                </div>
                
                <div style={{position:'absolute', bottom:'30%', right:'15%', animation:'tpi-orbit-ccw 18s linear infinite'}}>
                  <div className="tpi-node" style={{color:'var(--tpi-accent-azure)'}}>DATABASE</div>
                </div>

                {/* API Data Packets (Flying Particles) */}
                <svg width="400" height="400" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', zIndex: -1, pointerEvents:'none'}}>
                  <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,127,80,0.2)" strokeWidth="1" strokeDasharray="5 5" />
                  <path d="M 50 200 Q 150 150, 200 200" fill="none" stroke="var(--tpi-accent-cyan)" strokeWidth="2" strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="100;0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M 350 200 Q 250 250, 200 200" fill="none" stroke="var(--tpi-accent-gold)" strokeWidth="2" strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" values="0;100" dur="2.5s" repeatCount="indefinite" />
                  </path>
                </svg>

              </div>
            </div>
            
            <div className="tpi-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="tpi-desc">
                Oxavyn connects the tools, platforms, APIs, and systems your business already depends on, creating seamless data flows that allow information to move securely and intelligently across your digital ecosystem.
              </p>
              <div className="tpi-btn-group">
                <a href="#cta" className="tpi-btn tpi-btn-primary">Connect Your Systems &rarr;</a>
                <a href="#explore" className="tpi-btn tpi-btn-secondary">Explore Integrations</a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: CONNECT ANY SYSTEM | 100-200vh */}
        <section id="explore">
          <div className="tpi-split visual-left">
            <div className="tpi-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <h2 className="tpi-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Your Stack.<br/>
                <span className="tpi-gradient-text">Connected Around One Core.</span>
              </h2>
            </div>
            
            <div className="tpi-visual animate-on-scroll">
              <div className="tpi-ecosystem-visual">
                
                {/* Central Core */}
                <div className="tpi-core" style={{width:'180px', height:'180px', borderRadius:'50%'}}>
                  OXAVYN<br/>INTEGRATION
                </div>
                
                {/* Categories */}
                {/* BUSINESS */}
                <div style={{position:'absolute', top:'10%', left:'15%', display:'flex', flexDirection:'column', gap:'10px', alignItems:'center'}}>
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--tpi-text-secondary)', letterSpacing:'0.1em'}}>BUSINESS</div>
                  <div className="tpi-node">ERP</div>
                  <div className="tpi-node">FINANCE</div>
                </div>

                {/* CUSTOMER */}
                <div style={{position:'absolute', top:'10%', right:'15%', display:'flex', flexDirection:'column', gap:'10px', alignItems:'center'}}>
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--tpi-text-secondary)', letterSpacing:'0.1em'}}>CUSTOMER</div>
                  <div className="tpi-node">CRM</div>
                  <div className="tpi-node">SUPPORT</div>
                </div>

                {/* DATA */}
                <div style={{position:'absolute', bottom:'10%', left:'15%', display:'flex', flexDirection:'column', gap:'10px', alignItems:'center'}}>
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--tpi-text-secondary)', letterSpacing:'0.1em'}}>DATA</div>
                  <div className="tpi-node">CLOUD</div>
                  <div className="tpi-node">DATABASE</div>
                </div>

                {/* AI */}
                <div style={{position:'absolute', bottom:'10%', right:'15%', display:'flex', flexDirection:'column', gap:'10px', alignItems:'center'}}>
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--tpi-text-secondary)', letterSpacing:'0.1em'}}>INTELLIGENCE</div>
                  <div className="tpi-node">AI MODELS</div>
                  <div className="tpi-node">AUTOMATION</div>
                </div>

                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex:-1}}>
                  <line x1="25%" y1="25%" x2="45%" y2="40%" stroke="rgba(255,127,80,0.3)" strokeWidth="2" />
                  <line x1="75%" y1="25%" x2="55%" y2="40%" stroke="rgba(0,229,255,0.3)" strokeWidth="2" />
                  <line x1="25%" y1="75%" x2="45%" y2="60%" stroke="rgba(245,158,11,0.3)" strokeWidth="2" />
                  <line x1="75%" y1="75%" x2="55%" y2="60%" stroke="rgba(138,43,226,0.3)" strokeWidth="2" />
                </svg>

              </div>
            </div>
            
            <div className="tpi-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="tpi-desc" style={{marginBottom: 0}}>
                Create a huge floating 3D ecosystem of applications. Whether it's CRM platforms, external AI models, legacy databases, or modern marketing stacks, they all connect to the central Oxavyn integration core.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03: API CALL VISUALIZATION | 200-300vh */}
        <section id="api" style={{flexDirection: 'column'}}>
          <div className="tpi-center animate-on-scroll">
            <span className="tpi-eyebrow">API ENGINEERING</span>
            <h2 className="tpi-heading" style={{marginBottom: 0}}>
              Every Request.<br/>
              <span className="tpi-gradient-text">A Precise Digital Conversation.</span>
            </h2>
          </div>
          
          <div className="tpi-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="tpi-pipeline-visual">
              
              <div className="tpi-node" style={{position:'relative', color:'var(--tpi-accent-cyan)'}}>
                CLIENT
                <span className="tpi-badge post" style={{position:'absolute', top:'-20px', right:'-20px'}}>POST /user</span>
              </div>
              <div style={{color:'var(--tpi-accent-cyan)'}}>→</div>
              
              <div className="tpi-node" style={{color:'var(--tpi-accent-orange)'}}>🔒 AUTH</div>
              <div style={{color:'var(--tpi-accent-orange)'}}>→</div>
              
              <div className="tpi-node" style={{color:'var(--tpi-accent-violet)'}}>⚙️ PROCESSING</div>
              <div style={{color:'var(--tpi-accent-violet)'}}>→</div>
              
              <div className="tpi-node" style={{color:'var(--tpi-accent-azure)'}}>🗄️ DATABASE</div>
              <div style={{color:'var(--tpi-accent-azure)'}}>→</div>
              
              <div className="tpi-node" style={{position:'relative', color:'var(--tpi-accent-success)'}}>
                ✅ RESPONSE
                <span className="tpi-badge success" style={{position:'absolute', bottom:'-20px', left:'-20px'}}>201 CREATED</span>
              </div>

              {/* Connecting Lines Desktop */}
              <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: -1}}>
                <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="var(--tpi-accent-orange)" strokeWidth="2" strokeDasharray="10 10"/>
                {/* Active pulse */}
                <circle cx="5%" cy="50%" r="5" fill="var(--tpi-accent-cyan)">
                  <animate attributeName="cx" values="5%; 95%" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>

            </div>
          </div>
        </section>

        {/* SECTION 04: DATA FLOW | 300-400vh */}
        <section id="data-flow" style={{flexDirection: 'column', padding: '0 5%'}}>
          <div className="tpi-container">
            <div className="tpi-center animate-on-scroll">
              <h2 className="tpi-heading" style={{marginBottom: 0}}>
                Data Should Move<br/>
                <span className="tpi-gradient-text">as Fast as Your Business.</span>
              </h2>
            </div>
            
            <div className="tpi-visual animate-on-scroll" style={{transitionDelay: '0.1s', marginTop: '3rem'}}>
              <div className="tpi-flow-visual">
                
                {/* Complex network nodes */}
                <div className="tpi-node" style={{position:'absolute', top:'10%', left:'20%'}}>WEBSITE</div>
                <div className="tpi-node" style={{position:'absolute', top:'40%', left:'5%'}}>CRM</div>
                <div className="tpi-node" style={{position:'absolute', bottom:'20%', left:'25%'}}>EMAIL</div>
                
                <div className="tpi-node" style={{position:'absolute', top:'15%', right:'25%'}}>PAYMENT</div>
                <div className="tpi-node" style={{position:'absolute', top:'45%', right:'5%'}}>ERP</div>
                <div className="tpi-node" style={{position:'absolute', bottom:'15%', right:'30%'}}>ANALYTICS</div>
                
                <div className="tpi-core" style={{width:'100px', height:'100px'}}>CORE</div>

                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex:-1}}>
                  {/* Web to CRM */}
                  <path d="M 250 80 Q 150 120, 100 200" fill="none" stroke="rgba(0,229,255,0.4)" strokeWidth="2">
                    <animate attributeName="stroke-dasharray" values="0, 1000; 1000, 0" dur="2s" repeatCount="indefinite" />
                  </path>
                  {/* CRM to Email */}
                  <path d="M 100 230 Q 150 300, 280 340" fill="none" stroke="rgba(138,43,226,0.4)" strokeWidth="2">
                    <animate attributeName="stroke-dasharray" values="0, 1000; 1000, 0" dur="3s" repeatCount="indefinite" />
                  </path>
                  {/* Payment to ERP */}
                  <path d="M 720 100 Q 850 150, 900 220" fill="none" stroke="rgba(245,158,11,0.4)" strokeWidth="2">
                    <animate attributeName="stroke-dasharray" values="0, 1000; 1000, 0" dur="2.5s" repeatCount="indefinite" />
                  </path>
                  {/* ERP to Analytics */}
                  <path d="M 900 250 Q 800 350, 700 350" fill="none" stroke="rgba(255,127,80,0.4)" strokeWidth="2">
                    <animate attributeName="stroke-dasharray" values="0, 1000; 1000, 0" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: WEBHOOKS & REAL-TIME | 400-500vh */}
        <section id="webhooks">
          <div className="tpi-split visual-right">
            <div className="tpi-text-header animate-on-scroll">
              <span className="tpi-eyebrow">REAL-TIME INTEGRATION</span>
              <h2 className="tpi-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                When Something Happens,<br/>
                <span className="tpi-gradient-text">Everything Responds.</span>
              </h2>
            </div>
            
            <div className="tpi-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="tpi-webhook-visual">
                
                {/* Event Center */}
                <div style={{position:'relative', width:'150px', height:'150px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <div style={{position:'absolute', width:'100%', height:'100%', borderRadius:'50%', border:'2px solid var(--tpi-accent-orange)', animation:'tpi-webhook-pulse 3s infinite'}}></div>
                  <div style={{position:'absolute', width:'100%', height:'100%', borderRadius:'50%', border:'2px solid var(--tpi-accent-cyan)', animation:'tpi-webhook-pulse 3s infinite 1s'}}></div>
                  <div className="tpi-node" style={{color:'var(--tpi-accent-orange)', zIndex:10}}>WEBHOOK<br/>FIRED</div>
                </div>
                
                <div className="tpi-node" style={{position:'absolute', top:'20%', right:'10%'}}>EMAIL SENT</div>
                <div className="tpi-node" style={{position:'absolute', bottom:'20%', right:'10%'}}>CRM UPDATED</div>
                
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex:-1}}>
                  <path d="M 50% 50% L 80% 25%" fill="none" stroke="var(--tpi-accent-orange)" strokeWidth="2" strokeDasharray="5 5" style={{animation:'tpi-float-slow 2s linear infinite'}}/>
                  <path d="M 50% 50% L 80% 75%" fill="none" stroke="var(--tpi-accent-cyan)" strokeWidth="2" strokeDasharray="5 5" style={{animation:'tpi-float-slow 3s linear infinite'}}/>
                </svg>

              </div>
            </div>
            
            <div className="tpi-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="tpi-desc" style={{marginBottom: 0}}>
                Create a futuristic real-time event ecosystem. When a payment completes, a webhook fires immediately, creating a glowing event pulse that simultaneously updates the CRM, sends an email, and generates an invoice.
              </p>
            </div>
          </div>
        </section>
        
        {/* SECTION 06: SECURE INTEGRATIONS | 500-560vh */}
        <section id="security" style={{flexDirection: 'column'}}>
          <div className="tpi-center animate-on-scroll">
            <h2 className="tpi-heading" style={{marginBottom: 0}}>
              Connected by Design.<br/>
              <span className="tpi-gradient-text">Protected by Architecture.</span>
            </h2>
          </div>
          
          <div className="tpi-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="tpi-security-visual">
              
              <div className="tpi-crystal-shield">
                <div className="tpi-core" style={{width:'100px', height:'100px'}}>CORE</div>
              </div>
              
              <div className="tpi-badge" style={{position:'absolute', top:'20%', left:'30%', color:'var(--tpi-accent-gold)'}}>OAUTH 2.0</div>
              <div className="tpi-badge" style={{position:'absolute', bottom:'20%', right:'30%', color:'var(--tpi-accent-violet)'}}>ENCRYPTED</div>
              <div className="tpi-badge" style={{position:'absolute', top:'30%', right:'25%', color:'var(--tpi-accent-cyan)'}}>API KEY</div>

              <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex:-2}}>
                <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="2" strokeDasharray="10 10" style={{animation:'tpi-orbit-cw 20s linear infinite'}}/>
              </svg>

            </div>
          </div>
        </section>

        {/* SECTION 07: CTA / WIDE SHOT | 560-600vh */}
        <section id="cta" style={{minHeight: '40vh', paddingBottom: '6rem', flexDirection: 'column'}}>
          <div className="tpi-cta-container animate-on-scroll">
            <span className="tpi-eyebrow">BUILD YOUR CONNECTED ECOSYSTEM</span>
            <h2 className="tpi-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '1.5rem'}}>
              Your Systems Already Speak.<br/>
              <span className="tpi-gradient-text">Let's Connect Them.</span>
            </h2>
            <p className="tpi-desc" style={{margin: '0 auto 3rem', maxWidth: '800px'}}>
              Oxavyn engineers secure integrations, APIs, webhooks, and automated data flows that allow your applications and business systems to communicate reliably and intelligently.
            </p>
            <div className="tpi-btn-group" style={{justifyContent: 'center', marginBottom: '3rem'}}>
              <a href="/contact" className="tpi-btn tpi-btn-primary">Start an Integration &rarr;</a>
              <a href="/contact" className="tpi-btn tpi-btn-secondary">Talk to Oxavyn</a>
            </div>
            
            <div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,127,80,0.3), transparent)', margin: '2rem 0 3rem'}}></div>
            
            {/* Final Cinematic Network */}
            <div style={{position: 'relative', width: '100%', height: '200px', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'300px', height:'300px', background:'var(--tpi-accent-orange)', filter:'blur(100px)', opacity:0.3, animation:'tpi-pulse-orange 4s infinite alternate'}}></div>
              
              <div className="tpi-core" style={{width:'80px', height:'80px', fontSize:'0.6rem'}}>OXAVYN</div>
              <div className="tpi-node" style={{position:'absolute', top:'20px', left:'20%'}}>CRM</div>
              <div className="tpi-node" style={{position:'absolute', bottom:'20px', right:'20%'}}>API</div>
            </div>
            
            <p style={{fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--tpi-text-secondary)', marginTop: '2rem', textTransform: 'uppercase'}}>
              CONNECTED. SYNCHRONIZED. READY.
            </p>
          </div>
        </section>
      </main>

    </>
  );
}
