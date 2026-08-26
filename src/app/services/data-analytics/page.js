"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import './DataDev.css';

export default function DataAnalyticsDevelopment() {
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
        <title>Data Analytics | Oxavyn</title>
        <meta name="description" content="Turn complex business data into clear, intelligent, and actionable insights with Oxavyn's data analytics and visualization platforms." />
      </Head>

      <main className="data-page">
        {/* SECTION 01: HERO | 0-100vh */}
        <section id="hero" style={{minHeight: '100vh', padding: '12rem 5% 6rem'}}>
          <div className="data-split visual-right">
            <div className="data-text-header animate-on-scroll">
              <span className="data-eyebrow">DATA ANALYTICS</span>
              <h1 className="data-heading">
                Turn Data Into<br/>
                <span className="data-gradient-text">Decisions That Matter.</span>
              </h1>
            </div>
            
            <div className="data-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="data-hero-visual">
                <div className="hero-sphere"></div>
                
                {/* Floating 3D Dashboard */}
                <div className="data-glass-panel hero-dashboard">
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div style={{fontWeight:800}}>REVENUE GROWTH</div>
                    <div style={{color:'#10b981', fontWeight:700}}>+34.2%</div>
                  </div>
                  
                  {/* Graph */}
                  <div style={{flex:1, position:'relative'}}>
                    <svg width="100%" height="100%" style={{position:'absolute'}}>
                      <path d="M 0 150 Q 100 120, 200 140 T 400 40" fill="none" stroke="var(--data-accent-1)" strokeWidth="4" filter="drop-shadow(0 10px 10px rgba(14,165,233,0.3))"/>
                      <path d="M 0 150 Q 100 120, 200 140 T 400 40 L 400 200 L 0 200 Z" fill="rgba(14,165,233,0.1)"/>
                    </svg>
                  </div>
                  
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
                    <div style={{background:'rgba(255,255,255,0.5)', padding:'10px', borderRadius:'10px'}}>
                      <div style={{fontSize:'0.7rem', color:'var(--data-text-secondary)'}}>CUSTOMERS</div>
                      <div style={{fontWeight:800, fontSize:'1.2rem'}}>12,450</div>
                    </div>
                    <div style={{background:'rgba(255,255,255,0.5)', padding:'10px', borderRadius:'10px'}}>
                      <div style={{fontSize:'0.7rem', color:'var(--data-text-secondary)'}}>CONVERSION</div>
                      <div style={{fontWeight:800, fontSize:'1.2rem'}}>4.8%</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="data-glass-card" style={{position:'absolute', top: '10%', left: '5%', animation: 'data-card-flip 6s infinite ease-in-out'}}>
                  <div className="data-glass-card-inner">
                    <span>📊</span> RAW DATA
                  </div>
                </div>
                <div className="data-glass-card" style={{position:'absolute', bottom: '15%', right: '5%', animation: 'data-card-flip 8s infinite ease-in-out reverse'}}>
                  <div className="data-glass-card-inner">
                    <span>⚡</span> ANALYTICS
                  </div>
                </div>
                <div className="data-glass-card" style={{position:'absolute', top: '25%', right: '0%', animation: 'data-card-flip 10s infinite ease-in-out'}}>
                  <div className="data-glass-card-inner">
                    <span>🧠</span> INSIGHT
                  </div>
                </div>
                
                {/* 3D Bars floating */}
                <div style={{position:'absolute', bottom:'30%', left:'0', width:'40px', height:'120px', background:'var(--data-accent-1)', borderRadius:'4px', transform:'rotateX(20deg) rotateY(15deg)', boxShadow:'10px 10px 20px rgba(14,165,233,0.3)', animation:'data-float-fast 6s infinite'}}></div>
                <div style={{position:'absolute', bottom:'20%', left:'12%', width:'40px', height:'80px', background:'rgba(255,255,255,0.8)', border:'1px solid #fff', borderRadius:'4px', transform:'rotateX(20deg) rotateY(15deg)', boxShadow:'10px 10px 20px rgba(0,0,0,0.05)', animation:'data-float-slow 5s infinite reverse'}}></div>
              </div>
            </div>
            
            <div className="data-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="data-desc">
                Oxavyn transforms complex business data into clear, intelligent, and actionable insights through modern analytics, visualization, automation, and scalable data infrastructure.
              </p>
              <div className="data-btn-group">
                <a href="#cta" className="data-btn data-btn-primary">Unlock Your Data &rarr;</a>
                <a href="#explore" className="data-btn data-btn-secondary">Explore Analytics</a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: DATA FOUNDATION | 100-190vh */}
        <section id="foundation">
          <div className="data-split visual-left">
            <div className="data-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <span className="data-eyebrow">THE DATA FOUNDATION</span>
              <h2 className="data-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                One View of Your<br/>
                <span className="data-gradient-text">Business Data.</span>
              </h2>
            </div>
            
            <div className="data-visual animate-on-scroll">
              <div className="data-foundation-visual">
                <div className="foundation-core">OXAVYN DATA CORE</div>
                
                {/* Orbital nodes */}
                <div className="foundation-node" style={{top: '5%', left: '40%', animation: 'data-float-slow 4s infinite'}}>CRM</div>
                <div className="foundation-node" style={{top: '20%', right: '10%', animation: 'data-float-fast 5s infinite reverse'}}>ERP</div>
                <div className="foundation-node" style={{bottom: '30%', right: '5%', animation: 'data-float-slow 6s infinite'}}>CLOUD</div>
                <div className="foundation-node" style={{bottom: '5%', right: '35%', animation: 'data-float-fast 4s infinite reverse'}}>API</div>
                <div className="foundation-node" style={{bottom: '15%', left: '15%', animation: 'data-float-slow 5s infinite'}}>DATABASE</div>
                <div className="foundation-node" style={{top: '25%', left: '5%', animation: 'data-float-fast 6s infinite reverse'}}>MOBILE</div>
                
                {/* Luminous data streams */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 1}}>
                  <line x1="50%" y1="50%" x2="45%" y2="15%" stroke="rgba(14,165,233,0.3)" strokeWidth="2" strokeDasharray="5 5" />
                  <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5 5" />
                  <line x1="50%" y1="50%" x2="85%" y2="60%" stroke="rgba(14,165,233,0.3)" strokeWidth="2" strokeDasharray="5 5" />
                  <line x1="50%" y1="50%" x2="60%" y2="85%" stroke="rgba(245,158,11,0.3)" strokeWidth="2" strokeDasharray="5 5" />
                  <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5 5" />
                  <line x1="50%" y1="50%" x2="15%" y2="35%" stroke="rgba(14,165,233,0.3)" strokeWidth="2" strokeDasharray="5 5" />
                </svg>
              </div>
            </div>
            
            <div className="data-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="data-desc" style={{marginBottom: 0}}>
                Business information often lives across disconnected systems, applications, spreadsheets, databases, and platforms. Oxavyn brings these sources together into a connected analytics foundation, helping teams access consistent information and understand what is happening across the organization.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03: DATA VISUALIZATION | 190-290vh */}
        <section id="visualization" style={{flexDirection: 'column'}}>
          <div className="data-center animate-on-scroll">
            <h2 className="data-heading" style={{marginBottom: 0}}>
              Complex Data.<br/>
              <span className="data-gradient-text">Beautifully Clear.</span>
            </h2>
          </div>
          
          <div className="data-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="data-viz-visual">
              <div className="data-glass-panel viz-workspace">
                {/* Chart 1: 3D Bar */}
                <div style={{background:'rgba(255,255,255,0.5)', borderRadius:'12px', padding:'15px', display:'flex', flexDirection:'column'}}>
                  <div style={{fontSize:'0.7rem', fontWeight:800, marginBottom:'10px'}}>REVENUE</div>
                  <div className="viz-3d-bar-container">
                    <div className="viz-3d-bar" style={{height:'40%', animationDelay: '0.2s'}}></div>
                    <div className="viz-3d-bar" style={{height:'60%', background:'linear-gradient(180deg, var(--data-accent-2), rgba(217,70,239,0.3))', animationDelay: '0.4s'}}></div>
                    <div className="viz-3d-bar" style={{height:'90%', animationDelay: '0.6s'}}></div>
                  </div>
                </div>
                
                {/* Chart 2: Massive Line Graph */}
                <div style={{gridColumn:'span 2', background:'rgba(255,255,255,0.5)', borderRadius:'12px', padding:'15px', position:'relative', overflow:'hidden'}}>
                  <div style={{fontSize:'0.7rem', fontWeight:800, marginBottom:'10px'}}>GROWTH TREND</div>
                  <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0}}>
                    <path d="M 0 150 Q 150 150, 250 80 T 500 20" fill="none" stroke="var(--data-accent-1)" strokeWidth="4" filter="drop-shadow(0 5px 5px rgba(6,182,212,0.5))" style={{animation: 'data-line-draw 3s ease-out forwards'}}/>
                    <circle cx="250" cy="80" r="6" fill="#fff" stroke="var(--data-accent-1)" strokeWidth="2" style={{animation: 'data-chart-drop 2s 1s both'}}/>
                    <circle cx="450" cy="30" r="6" fill="#fff" stroke="var(--data-accent-1)" strokeWidth="2" style={{animation: 'data-chart-drop 2s 1.5s both'}}/>
                  </svg>
                </div>
                
                {/* Chart 3: Donut */}
                <div style={{background:'rgba(255,255,255,0.5)', borderRadius:'12px', padding:'15px', display:'flex', alignItems:'center', justifyContent:'center', position:'relative'}}>
                  <div style={{width:'80px', height:'80px', borderRadius:'50%', border:'12px solid rgba(14,165,233,0.2)', borderTopColor:'var(--data-accent-1)', borderRightColor:'var(--data-accent-2)', transform:'rotate(45deg)'}}></div>
                  <div style={{position:'absolute', fontWeight:800}}>84%</div>
                </div>
                
                {/* Chart 4: KPI Cards */}
                <div style={{gridColumn:'span 2', display:'flex', gap:'20px'}}>
                  <div style={{flex:1, background:'rgba(255,255,255,0.5)', borderRadius:'12px', padding:'20px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <div style={{fontSize:'0.8rem', color:'var(--data-text-secondary)'}}>CUSTOMERS</div>
                    <div style={{fontSize:'2rem', fontWeight:800}}>24.5K</div>
                    <div style={{color:'#10b981', fontSize:'0.8rem', fontWeight:700}}>+12% THIS MONTH</div>
                  </div>
                  <div style={{flex:1, background:'rgba(255,255,255,0.5)', borderRadius:'12px', padding:'20px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <div style={{fontSize:'0.8rem', color:'var(--data-text-secondary)'}}>RETENTION</div>
                    <div style={{fontSize:'2rem', fontWeight:800}}>94.2%</div>
                    <div style={{color:'#10b981', fontSize:'0.8rem', fontWeight:700}}>+2.1% THIS MONTH</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Labels around workspace */}
              <div className="data-glass-card" style={{position:'absolute', top: '5%', left: '10%'}}>PERFORMANCE</div>
              <div className="data-glass-card" style={{position:'absolute', bottom: '15%', left: '5%'}}>CONVERSION</div>
              <div className="data-glass-card" style={{position:'absolute', top: '15%', right: '5%'}}>TRENDS</div>
              <div className="data-glass-card" style={{position:'absolute', bottom: '5%', right: '15%'}}>GROWTH</div>
            </div>
          </div>
        </section>

        {/* SECTION 04: REAL-TIME ANALYTICS | 290-390vh */}
        <section id="realtime">
          <div className="data-split visual-right">
            <div className="data-text-header animate-on-scroll">
              <span className="data-eyebrow">REAL-TIME INTELLIGENCE</span>
              <h2 className="data-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                See What Is Happening.<br/>
                <span className="data-gradient-text">As It Happens.</span>
              </h2>
            </div>
            
            <div className="data-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="data-realtime-visual">
                <div className="data-glass-panel" style={{width:'100%', height:'100%', position:'relative', overflow:'hidden', padding:'30px'}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom:'30px', position:'relative', zIndex:10}}>
                    <div style={{fontWeight:800, fontSize:'1.2rem'}}>LIVE TRANSACTIONS</div>
                    <div style={{display:'flex', alignItems:'center', gap:'10px', background:'#fff', padding:'5px 15px', borderRadius:'20px', boxShadow:'0 5px 15px rgba(0,0,0,0.05)'}}>
                      <div style={{width:'8px', height:'8px', background:'#10b981', borderRadius:'50%', boxShadow:'0 0 10px #10b981'}}></div>
                      <span style={{fontWeight:800, fontSize:'0.8rem', color:'#10b981'}}>LIVE DATA</span>
                    </div>
                  </div>
                  
                  {/* Moving Line Chart */}
                  <svg width="200%" height="200px" style={{position:'absolute', bottom:0, left:0}}>
                    <path d="M 0 150 Q 100 100, 200 130 T 400 80 T 600 110 T 800 40 T 1000 90 T 1200 20" fill="none" stroke="var(--data-accent-1)" strokeWidth="4" />
                    <path d="M 0 150 Q 100 100, 200 130 T 400 80 T 600 110 T 800 40 T 1000 90 T 1200 20 L 1200 200 L 0 200 Z" fill="rgba(14,165,233,0.1)" />
                  </svg>
                  
                  {/* Floating updating cards */}
                  <div style={{position:'absolute', top:'40%', right:'20%', background:'#fff', padding:'15px', borderRadius:'12px', boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}}>
                    <div style={{fontSize:'0.7rem', color:'var(--data-text-secondary)'}}>ACTIVE USERS</div>
                    <div style={{fontSize:'1.5rem', fontWeight:800}}>3,492</div>
                  </div>
                  
                  {/* Geographic Nodes */}
                  <div style={{position:'absolute', top:'50%', left:'30%', width:'10px', height:'10px', background:'var(--data-accent-2)', borderRadius:'50%', boxShadow:'0 0 15px var(--data-accent-2)'}}></div>
                  <div style={{position:'absolute', top:'60%', left:'50%', width:'15px', height:'15px', background:'var(--data-accent-1)', borderRadius:'50%', boxShadow:'0 0 20px var(--data-accent-1)'}}></div>
                </div>
              </div>
            </div>
            
            <div className="data-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="data-desc" style={{marginBottom: 0}}>
                Modern businesses cannot rely only on yesterday's reports. Oxavyn builds analytics experiences that help teams monitor important metrics as they change, identify emerging patterns, and respond with greater speed and confidence.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 05: BUSINESS INTELLIGENCE | 390-490vh */}
        <section id="business-intelligence" style={{flexDirection: 'column', padding: '0 5%'}}>
          <div className="data-container">
            <div className="data-center animate-on-scroll">
              <h2 className="data-heading" style={{marginBottom: 0}}>
                From Numbers<br/>
                <span className="data-gradient-text">to Business Intelligence.</span>
              </h2>
            </div>
            
            <div className="data-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <div className="data-bi-visual">
                {/* Left: Raw Data */}
                <div className="bi-stage">
                  <div style={{fontSize:'0.8rem', fontWeight:800, marginBottom:'20px', color:'var(--data-text-secondary)'}}>DATA</div>
                  <div style={{position:'relative', width:'120px', height:'120px'}}>
                    <div style={{position:'absolute', top:'20%', left:'10%', fontSize:'1.5rem'}}>📄</div>
                    <div style={{position:'absolute', top:'50%', right:'10%', fontSize:'1.5rem'}}>📊</div>
                    <div style={{position:'absolute', bottom:'20%', left:'30%', fontSize:'1.5rem'}}>☁️</div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div style={{color:'rgba(14,165,233,0.3)', fontSize:'2rem'}}>→</div>
                
                {/* Center: Engine */}
                <div className="bi-stage">
                  <div style={{fontSize:'0.8rem', fontWeight:800, marginBottom:'20px', color:'var(--data-text-secondary)'}}>PATTERNS</div>
                  <div className="bi-orb">⚙️</div>
                </div>
                
                {/* Arrow */}
                <div style={{color:'rgba(14,165,233,0.3)', fontSize:'2rem'}}>→</div>
                
                {/* Right: Insights */}
                <div className="bi-stage">
                  <div style={{fontSize:'0.8rem', fontWeight:800, marginBottom:'20px', color:'var(--data-text-secondary)'}}>DECISIONS</div>
                  <div style={{width:'140px', height:'100px', background:'rgba(255,255,255,0.9)', borderRadius:'16px', border:'1px solid #fff', boxShadow:'0 15px 30px rgba(14,165,233,0.15)', display:'flex', flexDirection:'column', padding:'10px'}}>
                    <div style={{width:'100%', height:'4px', background:'var(--data-accent-1)', borderRadius:'2px', marginBottom:'10px'}}></div>
                    <div style={{width:'60%', height:'4px', background:'var(--data-accent-2)', borderRadius:'2px', marginBottom:'20px'}}></div>
                    <div style={{flex:1, display:'flex', gap:'5px', alignItems:'flex-end'}}>
                      <div style={{flex:1, height:'40%', background:'rgba(14,165,233,0.2)', borderRadius:'2px 2px 0 0'}}></div>
                      <div style={{flex:1, height:'70%', background:'rgba(14,165,233,0.5)', borderRadius:'2px 2px 0 0'}}></div>
                      <div style={{flex:1, height:'100%', background:'var(--data-accent-1)', borderRadius:'2px 2px 0 0'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: PREDICTIVE ANALYTICS | 490-590vh */}
        <section id="predictive">
          <div className="data-split visual-left">
            <div className="data-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <span className="data-eyebrow">LOOKING AHEAD</span>
              <h2 className="data-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Don't Just Analyze the Past.<br/>
                <span className="data-gradient-text">Understand What's Next.</span>
              </h2>
            </div>
            
            <div className="data-visual animate-on-scroll">
              <div className="data-predict-visual">
                <div className="data-glass-panel" style={{width:'100%', height:'100%', position:'relative', overflow:'hidden'}}>
                  <svg width="100%" height="100%" style={{position:'absolute'}}>
                    {/* Grid */}
                    <pattern id="pGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(14,165,233,0.1)" strokeWidth="1"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#pGrid)" />
                    
                    {/* Historical (Solid) */}
                    <path d="M 0 350 Q 150 350, 300 250" fill="none" stroke="var(--data-text-secondary)" strokeWidth="4" />
                    
                    {/* Projected (Glowing) */}
                    <path d="M 300 250 Q 500 100, 800 50" fill="none" stroke="var(--data-accent-1)" strokeWidth="4" strokeDasharray="8 8" filter="drop-shadow(0 0 10px var(--data-accent-1))"/>
                    
                    {/* Probability Cone */}
                    <path d="M 300 250 Q 500 50, 800 0 L 800 150 Q 500 200, 300 250 Z" fill="rgba(14,165,233,0.05)"/>
                    
                    <circle cx="300" cy="250" r="8" fill="#fff" stroke="var(--data-text-secondary)" strokeWidth="3"/>
                    <circle cx="800" cy="50" r="10" fill="#fff" stroke="var(--data-accent-1)" strokeWidth="4" filter="drop-shadow(0 0 15px var(--data-accent-1))"/>
                  </svg>
                  
                  <div className="data-glass-card" style={{position:'absolute', top: '15%', right: '15%'}}>FORECAST</div>
                  <div className="data-glass-card" style={{position:'absolute', bottom: '30%', left: '15%'}}>HISTORICAL</div>
                  <div className="data-glass-card" style={{position:'absolute', top: '45%', right: '35%'}}>PROBABILITY</div>
                </div>
              </div>
            </div>
            
            <div className="data-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="data-desc" style={{marginBottom: 0}}>
                Create a futuristic predictive analytics environment. Oxavyn builds systems that project current trends into future outcomes, helping organizations anticipate market shifts, customer behavior, and operational needs before they happen.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07: AI + ANALYTICS | 590-690vh */}
        <section id="ai-analytics" style={{flexDirection: 'column'}}>
          <div className="data-center animate-on-scroll">
            <h2 className="data-heading" style={{marginBottom: 0}}>
              Analytics With<br/>
              <span className="data-gradient-text">Intelligence Built In.</span>
            </h2>
          </div>
          
          <div className="data-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
            <div className="data-ai-visual">
              <div className="ai-core-diamond">OXAVYN CORE</div>
              
              <div className="data-glass-card" style={{position:'absolute', top: '20%', left: '15%'}}>DATA</div>
              <div className="data-glass-card" style={{position:'absolute', top: '20%', right: '15%'}}>AI</div>
              <div className="data-glass-card" style={{position:'absolute', bottom: '20%', left: '20%'}}>ANALYTICS</div>
              <div className="data-glass-card" style={{position:'absolute', bottom: '20%', right: '20%'}}>DECISION</div>
              
              {/* Natural language query interface */}
              <div style={{position:'absolute', top:'60%', left:'50%', transform:'translateX(-50%)', background:'rgba(255,255,255,0.95)', padding:'15px 30px', borderRadius:'30px', boxShadow:'0 20px 40px rgba(0,0,0,0.1)', display:'flex', alignItems:'center', gap:'10px', zIndex: 20}}>
                <span style={{fontSize:'1.2rem'}}>✨</span>
                <span style={{fontFamily:'monospace', color:'var(--data-text-secondary)'}}>"Show me revenue growth by region"</span>
              </div>
              
              <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 0}}>
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(14,165,233,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="30%" y2="75%" stroke="rgba(14,165,233,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="70%" y2="75%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </section>

        {/* SECTION 08: EXECUTIVE DASHBOARD | 690-760vh */}
        <section id="executive">
          <div className="data-split visual-right">
            <div className="data-text-header animate-on-scroll">
              <h2 className="data-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Everything Important.<br/>
                <span className="data-gradient-text">One Intelligent View.</span>
              </h2>
            </div>
            
            <div className="data-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="data-exec-visual">
                <div className="exec-dashboard">
                  <div style={{gridColumn:'span 2', display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                    <div style={{fontWeight:800, fontSize:'1.2rem'}}>GLOBAL COMMAND CENTER</div>
                    <div style={{fontSize:'0.8rem', color:'var(--data-text-secondary)'}}>Q3 PERFORMANCE</div>
                  </div>
                  
                  {/* Revenue Panel */}
                  <div style={{background:'rgba(255,255,255,0.6)', borderRadius:'16px', padding:'20px'}}>
                    <div style={{fontSize:'0.7rem', fontWeight:800, marginBottom:'10px'}}>TOTAL REVENUE</div>
                    <div style={{fontSize:'2.5rem', fontWeight:700, marginBottom:'10px'}}>$14.2M</div>
                    <svg width="100%" height="60px">
                      <path d="M 0 50 Q 50 30, 100 40 T 200 10 T 300 20" fill="none" stroke="var(--data-accent-1)" strokeWidth="3"/>
                    </svg>
                  </div>
                  
                  {/* Geo Panel */}
                  <div style={{background:'rgba(255,255,255,0.6)', borderRadius:'16px', padding:'20px', position:'relative', overflow:'hidden'}}>
                    <div style={{fontSize:'0.7rem', fontWeight:800, marginBottom:'10px'}}>REGIONAL</div>
                    <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'100px', height:'50px', background:'rgba(14,165,233,0.1)', borderRadius:'50%'}}></div>
                    <div style={{position:'absolute', top:'40%', left:'40%', width:'8px', height:'8px', background:'var(--data-accent-1)', borderRadius:'50%'}}></div>
                    <div style={{position:'absolute', top:'60%', left:'60%', width:'6px', height:'6px', background:'var(--data-accent-2)', borderRadius:'50%'}}></div>
                  </div>
                  
                  <div style={{gridColumn:'span 2', display:'flex', gap:'20px'}}>
                    <div style={{flex:1, background:'rgba(255,255,255,0.6)', borderRadius:'12px', padding:'15px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <span style={{fontSize:'0.8rem', fontWeight:700}}>ACQUISITION</span>
                      <span style={{color:'#10b981', fontWeight:800}}>+14%</span>
                    </div>
                    <div style={{flex:1, background:'rgba(255,255,255,0.6)', borderRadius:'12px', padding:'15px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <span style={{fontSize:'0.8rem', fontWeight:700}}>RETENTION</span>
                      <span style={{color:'#10b981', fontWeight:800}}>96.4%</span>
                    </div>
                    <div style={{flex:1, background:'rgba(255,255,255,0.6)', borderRadius:'12px', padding:'15px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <span style={{fontSize:'0.8rem', fontWeight:700}}>EFFICIENCY</span>
                      <span style={{color:'#10b981', fontWeight:800}}>A+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="data-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="data-desc" style={{marginBottom: 0}}>
                The dashboard should look like an exclusive executive command center. Provide leadership with a breathtaking, panoramic view of the entire organization, combining financial, operational, and customer metrics into one unified interface.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 09: FINAL CTA | 760-800vh */}
        <section id="cta" style={{minHeight: '40vh', paddingBottom: '6rem', flexDirection: 'column'}}>
          <div className="data-cta-container animate-on-scroll">
            <span className="data-eyebrow">MAKE DATA WORK HARDER</span>
            <h2 className="data-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '1.5rem'}}>
              Your Data Has a Story.<br/>
              Let's Turn It Into <span className="data-gradient-text">Advantage.</span>
            </h2>
            <p className="data-desc" style={{margin: '0 auto 3rem', maxWidth: '800px'}}>
              Oxavyn combines data engineering, analytics, visualization, AI, and automation to transform complex information into insights your teams can actually use.
            </p>
            <div className="data-btn-group" style={{justifyContent: 'center', marginBottom: '3rem'}}>
              <a href="/contact" className="data-btn data-btn-primary">Unlock Your Data &rarr;</a>
              <a href="/contact" className="data-btn data-btn-secondary">Talk to Oxavyn</a>
            </div>
            
            <div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.2), transparent)', margin: '2rem 0 3rem'}}></div>
            
            <div style={{position: 'relative', width: '120px', height: '120px', margin: '0 auto'}}>
              <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', borderRadius:'50%', background:'var(--data-accent-1)', filter:'blur(50px)', opacity:0.3}}></div>
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="var(--data-accent-1)" strokeWidth="2">
                <circle cx="50" cy="50" r="45" strokeDasharray="2 4" stroke="rgba(14,165,233,0.5)" />
                <circle cx="50" cy="50" r="30" strokeDasharray="4 4" stroke="rgba(139,92,246,0.5)" />
                <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M25 75 L75 25" stroke="rgba(14,165,233,0.2)" />
                <circle cx="50" cy="50" r="10" fill="#fff" filter="drop-shadow(0 0 10px var(--data-accent-1))" />
              </svg>
            </div>
            
            <p style={{fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--data-text-secondary)', marginTop: '2rem', textTransform: 'uppercase'}}>
              DATA, ENGINEERED FOR WHAT'S NEXT.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
