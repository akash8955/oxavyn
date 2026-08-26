"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import './CrmDev.css';

export default function CrmAutomation() {
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
        <title>CRM Automation | Oxavyn</title>
        <meta name="description" content="Oxavyn connects customer data, sales activity, and intelligent automation into one seamless CRM experience." />
      </Head>

      <main className="crm-page">
        {/* SECTION 01: HERO | 0-100vh */}
        <section id="hero" style={{minHeight: '100vh', padding: '12rem 5% 6rem'}}>
          <div className="crm-split visual-right">
            <div className="crm-text-header animate-on-scroll">
              <span className="crm-eyebrow">CRM AUTOMATION</span>
              <h1 className="crm-heading">
                Your Customers.<br/>
                Your Pipeline.<br/>
                <span className="crm-gradient-text">Running Smarter.</span>
              </h1>
            </div>
            
            <div className="crm-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="crm-hero-visual">
                
                {/* Intense Background Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'400px', height:'400px', background:'var(--crm-accent-pink)', filter:'blur(150px)', opacity:0.3, animation:'crm-pulse-energy 6s infinite alternate', zIndex: -2}}></div>

                {/* Central CRM Dashboard */}
                <div className="crm-glass-panel crm-dashboard" style={{boxShadow:'0 30px 60px rgba(255,0,127,0.2)'}}>
                  <div style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid rgba(0,0,0,0.1)', paddingBottom:'10px'}}>
                    <div style={{fontWeight:800}}>OXAVYN CRM</div>
                    <div style={{color:'var(--crm-text-secondary)', fontSize:'0.8rem'}}>Q3 REVENUE: <span style={{color:'var(--crm-accent-success)', fontWeight:800}}>$1.2M</span></div>
                  </div>
                  
                  <div style={{display:'flex', gap:'15px', flex:1}}>
                    {/* Pipeline Mock */}
                    <div style={{flex:2, background:'rgba(255,255,255,0.5)', borderRadius:'12px', padding:'10px', display:'flex', flexDirection:'column', gap:'8px'}}>
                      <div style={{fontSize:'0.6rem', fontWeight:800, color:'var(--crm-text-secondary)'}}>ACTIVE DEALS</div>
                      <div style={{height:'30px', background:'rgba(255,255,255,0.9)', borderRadius:'6px', display:'flex', alignItems:'center', padding:'0 10px', fontSize:'0.7rem', borderLeft:'3px solid var(--crm-accent-cyan)'}}>Acme Corp <span style={{marginLeft:'auto', fontWeight:700}}>$45K</span></div>
                      <div style={{height:'30px', background:'rgba(255,255,255,0.9)', borderRadius:'6px', display:'flex', alignItems:'center', padding:'0 10px', fontSize:'0.7rem', borderLeft:'3px solid var(--crm-accent-violet)'}}>Global Tech <span style={{marginLeft:'auto', fontWeight:700}}>$120K</span></div>
                      <div style={{height:'30px', background:'rgba(255,255,255,0.9)', borderRadius:'6px', display:'flex', alignItems:'center', padding:'0 10px', fontSize:'0.7rem', borderLeft:'3px solid var(--crm-accent-pink)'}}>Nexus Inc <span style={{marginLeft:'auto', fontWeight:700}}>$85K</span></div>
                    </div>
                    
                    {/* Tasks Mock */}
                    <div style={{flex:1, background:'rgba(255,255,255,0.5)', borderRadius:'12px', padding:'10px', display:'flex', flexDirection:'column', gap:'8px'}}>
                      <div style={{fontSize:'0.6rem', fontWeight:800, color:'var(--crm-text-secondary)'}}>TASKS</div>
                      <div style={{height:'20px', background:'rgba(16,185,129,0.2)', borderRadius:'4px'}}></div>
                      <div style={{height:'20px', background:'rgba(16,185,129,0.2)', borderRadius:'4px'}}></div>
                      <div style={{height:'20px', background:'rgba(255,0,127,0.2)', borderRadius:'4px'}}></div>
                    </div>
                  </div>
                </div>

                {/* Orbiting Customer Avatars */}
                <div style={{position:'absolute', top:'10%', left:'15%', animation:'crm-float-orbit 15s linear infinite'}}>
                  <div className="crm-avatar">👤</div>
                </div>
                
                <div style={{position:'absolute', bottom:'10%', right:'15%', animation:'crm-float-orbit 20s linear infinite reverse'}}>
                  <div className="crm-avatar" style={{borderColor:'var(--crm-accent-cyan)', boxShadow:'0 10px 20px rgba(0,229,255,0.3)'}}>👤</div>
                </div>
                
                <div style={{position:'absolute', top:'40%', right:'5%', animation:'crm-float-orbit 12s linear infinite'}}>
                  <div className="crm-avatar" style={{borderColor:'var(--crm-accent-violet)', boxShadow:'0 10px 20px rgba(138,43,226,0.3)'}}>👤</div>
                </div>

              </div>
            </div>
            
            <div className="crm-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="crm-desc">
                Oxavyn connects customer data, sales activity, communication, and intelligent automation into one seamless CRM experience built to help businesses move faster and build stronger relationships.
              </p>
              <div className="crm-btn-group">
                <a href="#cta" className="crm-btn crm-btn-primary">Automate Your CRM &rarr;</a>
                <a href="#explore" className="crm-btn crm-btn-secondary">Explore CRM</a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: LEAD AUTOMATION | 100-200vh */}
        <section id="explore" style={{flexDirection: 'column'}}>
          <div className="crm-center animate-on-scroll">
            <h2 className="crm-heading" style={{marginBottom: 0}}>
              Every Lead.<br/>
              <span className="crm-gradient-text">Handled Automatically.</span>
            </h2>
          </div>
          
          <div className="crm-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="crm-lead-visual">
              
              <div className="crm-node" style={{color:'var(--crm-accent-cyan)'}}>⚡ FORM SUBMITTED</div>
              <div style={{color:'var(--crm-accent-cyan)'}}>→</div>
              
              <div className="crm-node" style={{color:'var(--crm-accent-azure)'}}>📥 LEAD CAPTURED</div>
              <div style={{color:'var(--crm-accent-azure)'}}>→</div>
              
              <div className="crm-node" style={{color:'var(--crm-accent-violet)'}}>🧠 AI QUALIFICATION</div>
              <div style={{color:'var(--crm-accent-violet)'}}>→</div>
              
              <div className="crm-node" style={{color:'var(--crm-accent-pink)'}}>👤 CRM CREATED</div>
              <div style={{color:'var(--crm-accent-pink)'}}>→</div>
              
              <div className="crm-node" style={{color:'var(--crm-accent-success)'}}>✅ SALES ASSIGNED</div>

              {/* Connecting Lines Desktop */}
              <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: -1}}>
                <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="rgba(0,229,255,0.3)" strokeWidth="2" strokeDasharray="10 10"/>
              </svg>

            </div>
          </div>
        </section>

        {/* SECTION 03: AI CRM | 200-300vh */}
        <section id="ai">
          <div className="crm-split visual-left">
            <div className="crm-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <span className="crm-eyebrow">AI-POWERED CRM</span>
              <h2 className="crm-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                A CRM That Doesn't Just Store Data.<br/>
                <span className="crm-gradient-text">It Understands It.</span>
              </h2>
            </div>
            
            <div className="crm-visual animate-on-scroll">
              <div className="crm-ai-visual">
                
                {/* Central AI Core */}
                <div style={{width:'160px', height:'160px', background:'linear-gradient(135deg, rgba(255,255,255,1), rgba(245,240,255,0.9))', border:'2px solid var(--crm-accent-violet)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', fontWeight:800, fontSize:'0.9rem', boxShadow:'0 20px 50px rgba(138,43,226,0.3)', animation:'crm-pulse-energy 4s infinite alternate', zIndex:10}}>
                  OXAVYN<br/>AI CRM<br/>CORE
                </div>
                
                {/* Floating Insight Cards */}
                <div className="crm-node" style={{position:'absolute', top:'10%', left:'15%', animation:'crm-float-slow 5s infinite', color:'var(--crm-accent-success)'}}>
                  HIGH-VALUE LEAD
                </div>
                
                <div className="crm-node" style={{position:'absolute', top:'15%', right:'10%', animation:'crm-float-slow 6s infinite reverse', color:'var(--crm-accent-pink)'}}>
                  PURCHASE INTENT HIGH
                </div>
                
                <div className="crm-node" style={{position:'absolute', bottom:'15%', left:'10%', animation:'crm-float-slow 7s infinite', color:'var(--crm-accent-azure)'}}>
                  FOLLOW-UP REQUIRED
                </div>
                
                <div className="crm-node" style={{position:'absolute', bottom:'10%', right:'15%', animation:'crm-float-slow 5.5s infinite reverse', color:'var(--crm-accent-cyan)'}}>
                  OPPORTUNITY DETECTED
                </div>

                {/* Animated Neural Network */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: -1}}>
                  <circle cx="50%" cy="50%" r="150" fill="none" stroke="rgba(138,43,226,0.2)" strokeWidth="2" strokeDasharray="10 10" style={{animation:'crm-float-orbit 20s infinite linear'}}/>
                  <line x1="50%" y1="50%" x2="25%" y2="15%" stroke="rgba(138,43,226,0.4)" strokeWidth="2" strokeDasharray="5 5" style={{animation:'crm-line-draw 2s linear infinite'}}/>
                  <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="rgba(255,0,127,0.4)" strokeWidth="2" strokeDasharray="5 5" style={{animation:'crm-line-draw 3s linear infinite reverse'}}/>
                </svg>

                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'400px', height:'400px', background:'var(--crm-accent-violet)', filter:'blur(120px)', opacity:0.2, zIndex: -2}}></div>

              </div>
            </div>
            
            <div className="crm-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="crm-desc" style={{marginBottom: 0}}>
                The AI Core continuously analyzes emails, conversations, sales activities, and purchase history. It automatically generates insight cards like "High-Value Lead" and "Follow-up Required," turning raw data into strategic direction.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 04: SALES PIPELINE | 300-400vh */}
        <section id="pipeline" style={{flexDirection: 'column', padding: '0 5%'}}>
          <div className="crm-container">
            <div className="crm-center animate-on-scroll">
              <h2 className="crm-heading" style={{marginBottom: 0}}>
                See Every Deal.<br/>
                <span className="crm-gradient-text">Move Every Opportunity.</span>
              </h2>
            </div>
            
            <div className="crm-visual animate-on-scroll" style={{transitionDelay: '0.1s', marginTop: '3rem'}}>
              <div className="crm-pipeline-visual">
                
                {/* Columns */}
                <div className="crm-pipeline-col">
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--crm-text-secondary)', letterSpacing:'0.1em'}}>NEW LEAD</div>
                  <div className="crm-deal-card">
                    <div style={{fontWeight:800}}>Apex Global</div>
                    <div style={{fontSize:'0.8rem', color:'var(--crm-text-secondary)'}}>$15,000 • 20%</div>
                  </div>
                </div>
                
                <div className="crm-pipeline-col">
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--crm-accent-cyan)', letterSpacing:'0.1em'}}>QUALIFIED</div>
                  <div className="crm-deal-card" style={{borderLeftColor:'var(--crm-accent-cyan)'}}>
                    <div style={{fontWeight:800}}>Nexus Inc</div>
                    <div style={{fontSize:'0.8rem', color:'var(--crm-text-secondary)'}}>$45,000 • 50%</div>
                  </div>
                  <div className="crm-deal-card" style={{borderLeftColor:'var(--crm-accent-cyan)', animation:'crm-deal-move 4s ease-in-out infinite alternate'}}>
                    <div style={{fontWeight:800}}>Zephyr Tech</div>
                    <div style={{fontSize:'0.8rem', color:'var(--crm-text-secondary)'}}>$85,000 • 60%</div>
                  </div>
                </div>
                
                <div className="crm-pipeline-col">
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--crm-accent-violet)', letterSpacing:'0.1em'}}>PROPOSAL</div>
                  <div className="crm-deal-card" style={{borderLeftColor:'var(--crm-accent-violet)'}}>
                    <div style={{fontWeight:800}}>Meridian AI</div>
                    <div style={{fontSize:'0.8rem', color:'var(--crm-text-secondary)'}}>$120,000 • 75%</div>
                  </div>
                </div>
                
                <div className="crm-pipeline-col">
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--crm-accent-pink)', letterSpacing:'0.1em'}}>NEGOTIATION</div>
                </div>
                
                <div className="crm-pipeline-col">
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--crm-accent-success)', letterSpacing:'0.1em'}}>CLOSED</div>
                  <div className="crm-deal-card" style={{borderLeftColor:'var(--crm-accent-success)', boxShadow:'0 10px 30px rgba(16,185,129,0.2)'}}>
                    <div style={{fontWeight:800}}>Acme Corp</div>
                    <div style={{fontSize:'0.8rem', color:'var(--crm-text-secondary)'}}>$250,000 • 100%</div>
                    <div style={{marginTop:'10px', fontSize:'0.7rem', color:'var(--crm-accent-success)', fontWeight:800}}>✨ WON</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: CUSTOMER JOURNEY | 400-500vh */}
        <section id="journey">
          <div className="crm-split visual-right">
            <div className="crm-text-header animate-on-scroll">
              <span className="crm-eyebrow">CUSTOMER EXPERIENCE</span>
              <h2 className="crm-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                From First Interaction<br/>
                <span className="crm-gradient-text">to Long-Term Relationship.</span>
              </h2>
            </div>
            
            <div className="crm-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="crm-journey-visual">
                
                {/* Circular Path */}
                <svg width="400" height="400" style={{position:'absolute', zIndex: -1}}>
                  <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(0,229,255,0.2)" strokeWidth="2" />
                </svg>

                {/* Nodes along the path */}
                <div className="crm-node" style={{position:'absolute', top:'10px', left:'150px'}}>DISCOVER</div>
                <div className="crm-node" style={{position:'absolute', top:'80px', right:'10px'}}>ENGAGE</div>
                <div className="crm-node" style={{position:'absolute', bottom:'80px', right:'10px', color:'var(--crm-accent-pink)'}}>CONVERT</div>
                <div className="crm-node" style={{position:'absolute', bottom:'10px', left:'150px'}}>ONBOARD</div>
                <div className="crm-node" style={{position:'absolute', bottom:'80px', left:'10px'}}>RETAIN</div>
                <div className="crm-node" style={{position:'absolute', top:'80px', left:'10px', color:'var(--crm-accent-success)'}}>GROW</div>

                {/* Animated Avatar traveling the journey */}
                <div style={{position:'absolute', width:'100%', height:'100%', animation:'crm-float-orbit 15s linear infinite'}}>
                  <div className="crm-avatar" style={{position:'absolute', top:'0', left:'45%'}}>👤</div>
                </div>

                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'300px', height:'300px', background:'var(--crm-accent-cyan)', filter:'blur(100px)', opacity:0.2, zIndex: -2}}></div>

              </div>
            </div>
            
            <div className="crm-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="crm-desc" style={{marginBottom: 0}}>
                Create a massive circular 3D customer journey. Oxavyn tracks every stage from initial discovery through engagement, conversion, onboarding, retention, and long-term growth, automatically triggering the right actions at the right time.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 06: AUTOMATION COMMAND CENTER | 500-560vh */}
        <section id="command" style={{flexDirection: 'column'}}>
          <div className="crm-center animate-on-scroll">
            <h2 className="crm-heading" style={{marginBottom: 0}}>
              Your CRM.<br/>
              <span className="crm-gradient-text">Running in the Background.</span>
            </h2>
          </div>
          
          <div className="crm-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="crm-cmd-visual">
              
              <div className="crm-glass-panel" style={{width:'80%', height:'80%', display:'flex', padding:'30px', transform:'rotateX(15deg) rotateY(-10deg)', boxShadow:'30px 40px 80px rgba(0,0,0,0.1)'}}>
                
                {/* Left: Workflows */}
                <div style={{flex:2, display:'flex', flexDirection:'column', gap:'15px', borderRight:'1px solid rgba(0,0,0,0.1)', paddingRight:'30px'}}>
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--crm-text-secondary)', letterSpacing:'0.1em'}}>ACTIVE WORKFLOWS</div>
                  <div className="crm-node" style={{justifyContent:'space-between'}}>LEAD FOLLOW-UP <span style={{color:'var(--crm-accent-success)'}}>● RUNNING</span></div>
                  <div className="crm-node" style={{justifyContent:'space-between'}}>CUSTOMER ONBOARDING <span style={{color:'var(--crm-accent-success)'}}>● RUNNING</span></div>
                  <div className="crm-node" style={{justifyContent:'space-between'}}>SALES NOTIFICATION <span style={{color:'var(--crm-accent-success)'}}>● RUNNING</span></div>
                  <div className="crm-node" style={{justifyContent:'space-between'}}>RENEWAL REMINDER <span style={{color:'var(--crm-accent-success)'}}>● RUNNING</span></div>
                </div>
                
                {/* Right: Live Counters */}
                <div style={{flex:1, display:'flex', flexDirection:'column', gap:'30px', paddingLeft:'30px', justifyContent:'center'}}>
                  <div>
                    <div style={{fontSize:'2.5rem', fontWeight:800, color:'var(--crm-accent-cyan)'}}>4,281</div>
                    <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--crm-text-secondary)'}}>LEADS PROCESSED</div>
                  </div>
                  <div>
                    <div style={{fontSize:'2.5rem', fontWeight:800, color:'var(--crm-accent-pink)'}}>18,902</div>
                    <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--crm-text-secondary)'}}>FOLLOW-UPS SENT</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* SECTION 07: FINAL CTA | 560-600vh */}
        <section id="cta" style={{minHeight: '40vh', paddingBottom: '6rem', flexDirection: 'column'}}>
          <div className="crm-cta-container animate-on-scroll">
            <span className="crm-eyebrow">CRM, AUTOMATED</span>
            <h2 className="crm-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '1.5rem'}}>
              Build a CRM That<br/>
              <span className="crm-gradient-text">Works as Hard as Your Team.</span>
            </h2>
            <p className="crm-desc" style={{margin: '0 auto 3rem', maxWidth: '800px'}}>
              Oxavyn combines CRM engineering, AI, workflow automation, analytics, and customer intelligence to create systems that reduce manual work and help your team focus on relationships, opportunities, and growth.
            </p>
            <div className="crm-btn-group" style={{justifyContent: 'center', marginBottom: '3rem'}}>
              <a href="/contact" className="crm-btn crm-btn-primary">Build Your CRM &rarr;</a>
              <a href="/contact" className="crm-btn crm-btn-secondary">Talk to Oxavyn</a>
            </div>
            
            <div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,0,127,0.3), transparent)', margin: '2rem 0 3rem'}}></div>
            
            {/* Giant Floating CRM Core */}
            <div style={{position: 'relative', width: '150px', height: '150px', margin: '0 auto'}}>
              <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', borderRadius:'50%', background:'var(--crm-accent-pink)', filter:'blur(60px)', opacity:0.5, animation:'crm-pulse-energy 4s infinite alternate'}}></div>
              <div className="crm-glass-panel" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid var(--crm-accent-cyan)', animation:'crm-float-slow 5s infinite'}}>
                <span style={{fontSize:'2rem'}}>💎</span>
              </div>
            </div>
            
            <p style={{fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--crm-text-secondary)', marginTop: '2rem', textTransform: 'uppercase'}}>
              CUSTOMERS CONNECTED. WORKFLOWS AUTOMATED. GROWTH ACCELERATED.
            </p>
          </div>
        </section>
      </main>

    </>
  );
}
