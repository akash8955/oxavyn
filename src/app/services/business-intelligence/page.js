"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import './BiDev.css';

export default function BusinessIntelligence() {
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
        <title>Business Intelligence | Oxavyn</title>
        <meta name="description" content="Oxavyn transforms complex business information into intelligent dashboards, actionable insights, and decision-ready experiences." />
      </Head>

      <main className="bi-page">
        {/* SECTION 01: HERO | 0-100vh */}
        <section id="hero" style={{minHeight: '100vh', padding: '12rem 5% 6rem'}}>
          <div className="bi-split visual-right">
            <div className="bi-text-header animate-on-scroll">
              <span className="bi-eyebrow">BUSINESS INTELLIGENCE</span>
              <h1 className="bi-heading">
                See the Business.<br/>
                Understand the Data.<br/>
                <span className="bi-gradient-text">Act With Confidence.</span>
              </h1>
            </div>
            
            <div className="bi-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="bi-hero-visual">
                
                {/* Ambient Glowing Orbs */}
                <div style={{position:'absolute', top:'10%', left:'10%', width:'300px', height:'300px', background:'var(--bi-accent-1)', filter:'blur(100px)', opacity:0.4, animation:'bi-pulse-glow 6s infinite alternate', zIndex: -2}}></div>
                <div style={{position:'absolute', bottom:'20%', right:'10%', width:'250px', height:'250px', background:'var(--bi-accent-2)', filter:'blur(100px)', opacity:0.4, animation:'bi-pulse-glow 8s infinite alternate-reverse', zIndex: -2}}></div>
                <div style={{position:'absolute', top:'40%', right:'30%', width:'200px', height:'200px', background:'var(--bi-accent-3)', filter:'blur(80px)', opacity:0.3, zIndex: -2}}></div>

                {/* Floating 3D Dashboard */}
                <div className="bi-glass-panel hero-cmd-center">
                  <div style={{gridColumn:'span 2', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div style={{fontWeight:800}}>GLOBAL REVENUE</div>
                    <div style={{color:'#10b981', fontWeight:700}}>+42.8% YTD</div>
                  </div>
                  
                  <div style={{background:'rgba(255,255,255,0.6)', borderRadius:'12px', padding:'15px', position:'relative'}}>
                    <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--bi-text-secondary)', marginBottom:'10px'}}>SALES</div>
                    <div style={{fontSize:'1.8rem', fontWeight:800}}>$24.5M</div>
                    <svg width="100%" height="40px" style={{position:'absolute', bottom:10, left:0}}>
                      <path d="M 0 30 Q 50 10, 100 20 T 200 10" fill="none" stroke="var(--bi-accent-2)" strokeWidth="3" style={{animation: 'bi-line-draw 2s ease-out forwards'}}/>
                    </svg>
                  </div>
                  
                  <div style={{background:'rgba(255,255,255,0.6)', borderRadius:'12px', padding:'15px', position:'relative'}}>
                    <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--bi-text-secondary)', marginBottom:'10px'}}>CONVERSION</div>
                    <div style={{fontSize:'1.8rem', fontWeight:800}}>12.4%</div>
                    <div style={{display:'flex', alignItems:'flex-end', gap:'5px', height:'40px', marginTop:'10px'}}>
                      <div style={{flex:1, height:'40%', background:'var(--bi-accent-1)', borderRadius:'2px', animation: 'bi-chart-drop 1s 0.2s both'}}></div>
                      <div style={{flex:1, height:'70%', background:'var(--bi-accent-1)', borderRadius:'2px', animation: 'bi-chart-drop 1s 0.4s both'}}></div>
                      <div style={{flex:1, height:'100%', background:'var(--bi-accent-2)', borderRadius:'2px', animation: 'bi-chart-drop 1s 0.6s both'}}></div>
                    </div>
                  </div>
                </div>

                {/* Floating BI concept elements */}
                <div className="bi-glass-card" style={{position:'absolute', top: '5%', left: '0%', animation: 'bi-card-flip 8s infinite ease-in-out'}}>
                  <div className="bi-glass-card-inner">
                    <div style={{width:'15px', height:'15px', background:'#F2C811', borderRadius:'3px'}}></div>
                    POWER BI
                  </div>
                </div>
                <div className="bi-glass-card" style={{position:'absolute', bottom: '15%', right: '0%', animation: 'bi-card-flip 10s infinite ease-in-out reverse'}}>
                  <div className="bi-glass-card-inner">
                    <div style={{width:'15px', height:'15px', background:'#E97627', borderRadius:'3px'}}></div>
                    TABLEAU
                  </div>
                </div>
                <div className="bi-glass-card" style={{position:'absolute', top: '30%', right: '-5%', animation: 'bi-float-slow 6s infinite'}}>
                  <div className="bi-glass-card-inner">
                    <div style={{width:'15px', height:'15px', background:'#06b6d4', borderRadius:'3px'}}></div>
                    SQL CLOUD
                  </div>
                </div>
                
                {/* Luminous Data Streams */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: -1}}>
                  <path d="M 0 500 Q 150 400, 250 200" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="3" strokeDasharray="5 5" style={{animation: 'bi-line-draw 3s infinite linear'}}/>
                  <path d="M 500 500 Q 400 400, 300 200" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="3" strokeDasharray="5 5" style={{animation: 'bi-line-draw 4s infinite linear reverse'}}/>
                </svg>
              </div>
            </div>
            
            <div className="bi-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="bi-desc">
                Oxavyn transforms complex business information into intelligent dashboards, actionable insights, and decision-ready experiences using modern Business Intelligence, data visualization, AI, and analytics technologies.
              </p>
              <div className="bi-btn-group">
                <a href="#cta" className="bi-btn bi-btn-primary">Transform Your Data &rarr;</a>
                <a href="#connected" className="bi-btn bi-btn-secondary">Explore Business Intelligence</a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: CONNECTED DATA | 100-190vh */}
        <section id="connected">
          <div className="bi-split visual-left">
            <div className="bi-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <span className="bi-eyebrow">CONNECTED INTELLIGENCE</span>
              <h2 className="bi-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Bring Every Important<br/>
                <span className="bi-gradient-text">Business Signal Together.</span>
              </h2>
            </div>
            
            <div className="bi-visual animate-on-scroll">
              <div className="bi-connected-visual">
                {/* Ambient Glowing Orbs */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'400px', height:'400px', background:'var(--bi-accent-2)', filter:'blur(120px)', opacity:0.3, animation:'bi-pulse-glow 10s infinite', zIndex: -2}}></div>

                <div className="bi-core-diamond">OXAVYN BI CORE</div>
                
                {/* Orbital nodes */}
                <div className="bi-source-node" style={{top: '10%', left: '35%', animation: 'bi-float-slow 4s infinite'}}>CRM</div>
                <div className="bi-source-node" style={{top: '25%', right: '15%', animation: 'bi-float-fast 5s infinite reverse'}}>ERP</div>
                <div className="bi-source-node" style={{bottom: '20%', right: '10%', animation: 'bi-float-slow 6s infinite'}}>SQL</div>
                <div className="bi-source-node" style={{bottom: '10%', left: '40%', animation: 'bi-float-fast 4s infinite reverse'}}>CLOUD</div>
                <div className="bi-source-node" style={{bottom: '30%', left: '15%', animation: 'bi-float-slow 5s infinite'}}>API</div>
                
                {/* Connections */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 1}}>
                  <line x1="50%" y1="50%" x2="40%" y2="15%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="45%" y2="85%" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="20%" y2="65%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
                </svg>
              </div>
            </div>
            
            <div className="bi-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="bi-desc" style={{marginBottom: 0}}>
                Business intelligence becomes powerful when information from different systems can be understood together. Oxavyn connects data from applications, databases, cloud platforms, CRM systems, ERP platforms, websites, and operational tools into a unified analytics environment designed for clarity and speed.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03: EXECUTIVE DASHBOARDS | 190-290vh */}
        <section id="executive-dashboards" style={{flexDirection: 'column'}}>
          <div className="bi-center animate-on-scroll">
            <h2 className="bi-heading" style={{marginBottom: 0}}>
              Dashboards Built<br/>
              <span className="bi-gradient-text">for Decisions.</span>
            </h2>
          </div>
          
          <div className="bi-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="bi-exec-visual">
              {/* Massive ambient glow behind dashboard */}
              <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'80%', height:'80%', background:'linear-gradient(45deg, var(--bi-accent-1), var(--bi-accent-2))', filter:'blur(150px)', opacity:0.3, zIndex: -2}}></div>

              <div className="bi-glass-panel exec-map-dash">
                {/* Background Map layer */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, opacity:0.1, zIndex:0}}>
                  <path d="M100 100 Q 200 50 300 100 T 500 100 T 700 100 T 800 200 Q 700 300 600 250 T 400 300 T 200 200 Z" fill="var(--bi-accent-1)"/>
                  <circle cx="250" cy="150" r="15" fill="var(--bi-accent-2)"/>
                  <circle cx="650" cy="200" r="25" fill="var(--bi-accent-1)"/>
                  <circle cx="450" cy="250" r="10" fill="var(--bi-accent-2)"/>
                </svg>
                
                {/* Midground Charts */}
                <div style={{gridColumn:'span 2', background:'rgba(255,255,255,0.7)', borderRadius:'16px', padding:'20px', zIndex:5, display:'flex', flexDirection:'column'}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, marginBottom:'15px', color:'var(--bi-text-secondary)'}}>SALES PIPELINE & REVENUE</div>
                  <div style={{flex:1, display:'flex', gap:'15px', alignItems:'flex-end'}}>
                    <div style={{flex:1, height:'30%', background:'var(--bi-accent-1)', borderRadius:'4px 4px 0 0', animation: 'bi-chart-drop 1s 0.1s both'}}></div>
                    <div style={{flex:1, height:'50%', background:'var(--bi-accent-3)', borderRadius:'4px 4px 0 0', animation: 'bi-chart-drop 1s 0.2s both'}}></div>
                    <div style={{flex:1, height:'40%', background:'var(--bi-accent-1)', borderRadius:'4px 4px 0 0', animation: 'bi-chart-drop 1s 0.3s both'}}></div>
                    <div style={{flex:1, height:'70%', background:'var(--bi-accent-3)', borderRadius:'4px 4px 0 0', animation: 'bi-chart-drop 1s 0.4s both'}}></div>
                    <div style={{flex:1, height:'100%', background:'var(--bi-accent-2)', borderRadius:'4px 4px 0 0', animation: 'bi-chart-drop 1s 0.5s both'}}></div>
                  </div>
                </div>
                
                <div style={{background:'rgba(255,255,255,0.7)', borderRadius:'16px', padding:'20px', zIndex:5, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--bi-text-secondary)'}}>PROFIT MARGIN</div>
                  <div style={{position:'relative', width:'100px', height:'100px', margin:'0 auto'}}>
                    <svg width="100" height="100" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="15"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bi-accent-2)" strokeWidth="15" strokeDasharray="250" strokeDashoffset="50" style={{animation:'bi-line-draw 2s ease-out forwards'}}/>
                    </svg>
                    <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', fontWeight:800, fontSize:'1.2rem'}}>24%</div>
                  </div>
                </div>
                
                {/* Foreground KPI Cards */}
                <div style={{background:'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,1))', borderRadius:'16px', padding:'20px', zIndex:10, boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}}>
                  <div style={{fontSize:'0.7rem', color:'var(--bi-text-secondary)'}}>CUSTOMER ACQUISITION</div>
                  <div style={{fontSize:'1.8rem', fontWeight:800}}>$124.50</div>
                  <div style={{color:'#10b981', fontSize:'0.75rem', fontWeight:700}}>↓ 12% Vs Last QTR</div>
                </div>
                
                <div style={{background:'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,1))', borderRadius:'16px', padding:'20px', zIndex:10, boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}}>
                  <div style={{fontSize:'0.7rem', color:'var(--bi-text-secondary)'}}>RETENTION</div>
                  <div style={{fontSize:'1.8rem', fontWeight:800}}>96.2%</div>
                  <div style={{color:'#10b981', fontSize:'0.75rem', fontWeight:700}}>↑ 2.1% Vs Last QTR</div>
                </div>
                
                <div style={{background:'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,1))', borderRadius:'16px', padding:'20px', zIndex:10, boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}}>
                  <div style={{fontSize:'0.7rem', color:'var(--bi-text-secondary)'}}>OPERATIONAL EFFICIENCY</div>
                  <div style={{fontSize:'1.8rem', fontWeight:800}}>98.5%</div>
                  <div style={{color:'#10b981', fontSize:'0.75rem', fontWeight:700}}>OPTIMIZED</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: POWER BI + TABLEAU | 290-390vh */}
        <section id="ecosystems">
          <div className="bi-split visual-right">
            <div className="bi-text-header animate-on-scroll">
              <span className="bi-eyebrow">BI ECOSYSTEMS</span>
              <h2 className="bi-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Powerful BI Platforms.<br/>
                <span className="bi-gradient-text">Designed Around You.</span>
              </h2>
            </div>
            
            <div className="bi-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="bi-ecosystem-visual">
                
                <div className="bi-glass-panel ecosystem-panel" style={{transform:'rotateY(15deg)', marginRight:'-50px', background:'rgba(255,255,255,0.95)'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px'}}>
                    <div style={{width:'20px', height:'20px', background:'#F2C811', borderRadius:'4px'}}></div>
                    <span style={{fontWeight:800, fontSize:'0.9rem'}}>POWER BI CONCEPT</span>
                  </div>
                  <div style={{background:'rgba(242,200,17,0.1)', height:'100px', borderRadius:'8px', marginBottom:'10px'}}></div>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', flex:1}}>
                    <div style={{background:'rgba(0,0,0,0.05)', borderRadius:'8px'}}></div>
                    <div style={{background:'rgba(0,0,0,0.05)', borderRadius:'8px'}}></div>
                  </div>
                </div>
                
                <div className="bi-core-diamond" style={{width:'100px', height:'100px', zIndex:10, transform:'rotate(45deg)'}}>
                  <span style={{transform:'rotate(-45deg)', fontSize:'1.5rem'}}>⚡</span>
                </div>
                
                <div className="bi-glass-panel ecosystem-panel" style={{transform:'rotateY(-15deg)', marginLeft:'-50px', background:'rgba(255,255,255,0.95)'}}>
                  <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px'}}>
                    <div style={{width:'20px', height:'20px', background:'#E97627', borderRadius:'4px'}}></div>
                    <span style={{fontWeight:800, fontSize:'0.9rem'}}>TABLEAU CONCEPT</span>
                  </div>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', flex:1, marginBottom:'10px'}}>
                    <div style={{background:'rgba(233,118,39,0.1)', borderRadius:'8px'}}></div>
                    <div style={{background:'rgba(233,118,39,0.1)', borderRadius:'8px'}}></div>
                  </div>
                  <div style={{background:'rgba(0,0,0,0.05)', height:'100px', borderRadius:'8px'}}></div>
                </div>
                
              </div>
            </div>
            
            <div className="bi-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="bi-desc" style={{marginBottom: 0}}>
                Whether you rely on Microsoft Power BI, Tableau, or custom dashboards, Oxavyn designs, implements, and optimizes business intelligence environments. We build semantic data models, interactive reports, and intuitive filters that allow anyone to drill down into metrics and uncover insights securely.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 05: DATA INTO ACTION | 390-490vh */}
        <section id="action" style={{flexDirection: 'column', padding: '0 5%'}}>
          <div className="bi-container">
            <div className="bi-center animate-on-scroll">
              <h2 className="bi-heading" style={{marginBottom: 0}}>
                Don't Just See the Numbers.<br/>
                <span className="bi-gradient-text">Know What to Do Next.</span>
              </h2>
            </div>
            
            <div className="bi-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <div className="bi-action-visual">
                {/* Left: Raw Data */}
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', zIndex:2}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, marginBottom:'20px', color:'var(--bi-text-secondary)'}}>DATA & PATTERNS</div>
                  <div style={{width:'150px', height:'150px', background:'rgba(255,255,255,0.8)', border:'1px solid #fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 20px 40px rgba(139,92,246,0.15)'}}>
                    <svg width="80" height="80" viewBox="0 0 100 100">
                      <path d="M10 90 L 30 50 L 50 70 L 90 10" fill="none" stroke="var(--bi-accent-1)" strokeWidth="4"/>
                      <circle cx="90" cy="10" r="5" fill="var(--bi-accent-2)"/>
                    </svg>
                  </div>
                </div>
                
                {/* Arrow */}
                <div style={{color:'rgba(139,92,246,0.3)', fontSize:'2rem'}}>→</div>
                
                {/* Center: Engine */}
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', zIndex:2}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, marginBottom:'20px', color:'var(--bi-text-secondary)'}}>INTELLIGENCE</div>
                  <div className="bi-core-diamond" style={{width:'120px', height:'120px'}}></div>
                </div>
                
                {/* Arrow */}
                <div style={{color:'rgba(139,92,246,0.3)', fontSize:'2rem'}}>→</div>
                
                {/* Right: Actions */}
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'15px', zIndex:2}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, marginBottom:'5px', color:'var(--bi-text-secondary)'}}>ACTION</div>
                  
                  <div className="bi-glass-card" style={{width:'200px', animation:'bi-card-flip 6s infinite ease-in-out'}}>
                    <div className="bi-glass-card-inner">
                      <div style={{width:'8px', height:'8px', background:'#10b981', borderRadius:'50%'}}></div>
                      <span>Optimize Campaign</span>
                    </div>
                  </div>
                  
                  <div className="bi-glass-card" style={{width:'200px', animation:'bi-card-flip 7s infinite ease-in-out reverse'}}>
                    <div className="bi-glass-card-inner">
                      <div style={{width:'8px', height:'8px', background:'var(--bi-accent-1)', borderRadius:'50%'}}></div>
                      <span>Expand Region B</span>
                    </div>
                  </div>
                  
                  <div className="bi-glass-card" style={{width:'200px', animation:'bi-card-flip 8s infinite ease-in-out'}}>
                    <div className="bi-glass-card-inner">
                      <div style={{width:'8px', height:'8px', background:'var(--bi-accent-4)', borderRadius:'50%'}}></div>
                      <span>Identify Risk</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: REAL-TIME BI | 490-590vh */}
        <section id="realtime">
          <div className="bi-split visual-left">
            <div className="bi-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <span className="bi-eyebrow">REAL-TIME ANALYTICS</span>
              <h2 className="bi-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Your Business,<br/>
                <span className="bi-gradient-text">As It Happens.</span>
              </h2>
            </div>
            
            <div className="bi-visual animate-on-scroll">
              <div className="bi-realtime-visual">
                <div className="bi-glass-panel rt-bi-dash" style={{padding:'30px'}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom:'30px', position:'relative', zIndex:10}}>
                    <div style={{fontWeight:800, fontSize:'1.2rem'}}>LIVE OPERATIONS</div>
                    <div style={{display:'flex', alignItems:'center', gap:'10px', background:'#fff', padding:'5px 15px', borderRadius:'20px', boxShadow:'0 5px 15px rgba(0,0,0,0.05)', animation:'bi-pulse-glow 2s infinite'}}>
                      <div style={{width:'8px', height:'8px', background:'#10b981', borderRadius:'50%', boxShadow:'0 0 10px #10b981'}}></div>
                      <span style={{fontWeight:800, fontSize:'0.8rem', color:'#10b981'}}>LIVE</span>
                    </div>
                  </div>
                  
                  {/* Grid Layout inside Real-Time */}
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', height:'calc(100% - 80px)'}}>
                    
                    {/* Live Graph */}
                    <div style={{background:'rgba(255,255,255,0.6)', borderRadius:'12px', padding:'20px', position:'relative', overflow:'hidden'}}>
                      <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--bi-text-secondary)', marginBottom:'10px'}}>TRANSACTIONS / MIN</div>
                      <svg width="200%" height="100%" style={{position:'absolute', bottom:0, left:0, opacity:0.5}}>
                        <path d="M 0 150 Q 100 100, 200 130 T 400 80 T 600 110 T 800 40 T 1000 90" fill="none" stroke="var(--bi-accent-2)" strokeWidth="4" />
                      </svg>
                      <div style={{position:'absolute', top:'50%', right:'20px', fontSize:'2.5rem', fontWeight:800}}>248</div>
                    </div>
                    
                    {/* Live KPIs */}
                    <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                      <div style={{flex:1, background:'rgba(255,255,255,0.6)', borderRadius:'12px', padding:'20px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <div style={{fontSize:'0.7rem', color:'var(--bi-text-secondary)'}}>ACTIVE SESSIONS</div>
                        <div style={{fontSize:'1.8rem', fontWeight:800}}>14,291</div>
                      </div>
                      <div style={{flex:1, background:'rgba(255,255,255,0.6)', borderRadius:'12px', padding:'20px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <div style={{fontSize:'0.7rem', color:'var(--bi-text-secondary)'}}>SERVER LOAD</div>
                        <div style={{fontSize:'1.8rem', fontWeight:800, color:'var(--bi-accent-2)'}}>34%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bi-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="bi-desc" style={{marginBottom: 0}}>
                Create a bright futuristic real-time BI environment. Oxavyn designs streaming analytics dashboards that let you monitor live revenue, active users, transactions, and operational status the moment they happen.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07: AI + BI | 590-690vh */}
        <section id="ai-bi" style={{flexDirection: 'column'}}>
          <div className="bi-center animate-on-scroll">
            <h2 className="bi-heading" style={{marginBottom: 0}}>
              Intelligence Beyond<br/>
              <span className="bi-gradient-text">the Dashboard.</span>
            </h2>
          </div>
          
          <div className="bi-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
            <div className="bi-ai-visual">
              
              {/* Intense AI Glow */}
              <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'500px', height:'500px', background:'var(--bi-accent-1)', filter:'blur(150px)', opacity:0.4, animation:'bi-pulse-glow 4s infinite alternate', zIndex: -2}}></div>

              {/* Central Core */}
              <div className="bi-core-diamond" style={{width:'140px', height:'140px', zIndex:10}}>
                <span style={{transform:'rotate(-45deg)', fontSize:'2rem'}}>✨</span>
              </div>
              
              {/* Conversational AI Chat Interface */}
              <div style={{position:'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', width:'400px', background:'rgba(255,255,255,0.95)', padding:'20px', borderRadius:'24px', boxShadow:'0 20px 50px rgba(139,92,246,0.2)', zIndex: 15}}>
                <div style={{display:'flex', gap:'15px', marginBottom:'15px'}}>
                  <div style={{width:'30px', height:'30px', background:'rgba(0,0,0,0.1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.8rem'}}>👤</div>
                  <div style={{background:'rgba(0,0,0,0.05)', padding:'10px 15px', borderRadius:'0 15px 15px 15px', fontSize:'0.9rem', color:'var(--bi-text-primary)'}}>
                    "Show me our fastest-growing market."
                  </div>
                </div>
                <div style={{display:'flex', gap:'15px'}}>
                  <div style={{width:'30px', height:'30px', background:'var(--bi-accent-1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.8rem', color:'#fff'}}>AI</div>
                  <div style={{background:'rgba(139,92,246,0.1)', border:'1px solid rgba(139,92,246,0.2)', padding:'10px 15px', borderRadius:'15px 15px 15px 0', fontSize:'0.9rem', color:'var(--bi-accent-1)', fontWeight:600}}>
                    "North region — +24% growth." <br/>
                    <span style={{fontSize:'0.75rem', fontWeight:400, color:'var(--bi-text-secondary)', display:'block', marginTop:'5px'}}>Highlighting map now.</span>
                  </div>
                </div>
              </div>
              
              {/* Floating AI Insight Cards */}
              <div className="bi-glass-card" style={{position:'absolute', bottom: '25%', left: '10%'}}>
                <div className="bi-glass-card-inner">
                  <div style={{width:'8px', height:'8px', background:'var(--bi-accent-1)', borderRadius:'50%'}}></div>
                  <span>Revenue trending upward.</span>
                </div>
              </div>
              
              <div className="bi-glass-card" style={{position:'absolute', bottom: '15%', right: '10%'}}>
                <div className="bi-glass-card-inner">
                  <div style={{width:'8px', height:'8px', background:'var(--bi-accent-4)', borderRadius:'50%'}}></div>
                  <span>Demand expected to rise.</span>
                </div>
              </div>
              
              {/* Connection Lines */}
              <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 0}}>
                <path d="M 500 250 Q 200 250, 200 400" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="3" strokeDasharray="5 5" />
                <path d="M 500 250 Q 800 250, 800 450" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="3" strokeDasharray="5 5" />
              </svg>
            </div>
          </div>
        </section>

        {/* SECTION 08: BUSINESS ACTION CENTER | 690-760vh */}
        <section id="action-center">
          <div className="bi-split visual-right">
            <div className="bi-text-header animate-on-scroll">
              <h2 className="bi-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                From Insight to<br/>
                <span className="bi-gradient-text">Intelligent Action.</span>
              </h2>
            </div>
            
            <div className="bi-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="bi-cmd-visual">
                <div className="cmd-network">
                  <div className="bi-core-diamond" style={{width:'160px', height:'160px', zIndex:10}}>BI SYSTEM</div>
                  
                  <div className="bi-glass-card" style={{position:'absolute', top:'10%', left:'20%'}}>SALES</div>
                  <div className="bi-glass-card" style={{position:'absolute', top:'10%', right:'20%'}}>MARKETING</div>
                  <div className="bi-glass-card" style={{position:'absolute', bottom:'15%', left:'20%'}}>FINANCE</div>
                  <div className="bi-glass-card" style={{position:'absolute', bottom:'15%', right:'20%'}}>OPERATIONS</div>
                  
                  {/* Action Sequence */}
                  <div style={{position:'absolute', bottom:'40%', left:'50%', transform:'translateX(-50%)', background:'var(--bi-text-primary)', color:'#fff', padding:'10px 20px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:800, zIndex:20}}>
                    ANALYTICS → RECOMMENDATION → ACTION
                  </div>
                  
                  <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 1}}>
                    <line x1="50%" y1="50%" x2="30%" y2="20%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="70%" y2="20%" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bi-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="bi-desc" style={{marginBottom: 0}}>
                Create a massive floating executive command center. This visually communicates that BI is not simply reporting—it connects all corporate departments and directly drives business decisions and outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 09: FINAL CTA | 760-800vh */}
        <section id="cta" style={{minHeight: '40vh', paddingBottom: '6rem', flexDirection: 'column'}}>
          <div className="bi-cta-container animate-on-scroll">
            <span className="bi-eyebrow">BUILD YOUR INTELLIGENCE LAYER</span>
            <h2 className="bi-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '1.5rem'}}>
              Turn Business Data<br/>
              Into <span className="bi-gradient-text">Business Advantage.</span>
            </h2>
            <p className="bi-desc" style={{margin: '0 auto 3rem', maxWidth: '800px'}}>
              Oxavyn brings together Business Intelligence, Power BI, Tableau, data engineering, visualization, AI, and automation to create analytics experiences that help your teams understand faster and act with confidence.
            </p>
            <div className="bi-btn-group" style={{justifyContent: 'center', marginBottom: '3rem'}}>
              <a href="/contact" className="bi-btn bi-btn-primary">Build Your BI Solution &rarr;</a>
              <a href="/contact" className="bi-btn bi-btn-secondary">Talk to Oxavyn</a>
            </div>
            
            <div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)', margin: '2rem 0 3rem'}}></div>
            
            <div style={{position: 'relative', width: '140px', height: '140px', margin: '0 auto'}}>
              <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', borderRadius:'50%', background:'var(--bi-accent-1)', filter:'blur(60px)', opacity:0.4}}></div>
              <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="var(--bi-accent-1)" strokeWidth="1.5">
                <circle cx="50" cy="50" r="45" stroke="rgba(139,92,246,0.5)" />
                <circle cx="50" cy="50" r="35" strokeDasharray="4 4" stroke="rgba(6,182,212,0.8)" />
                <polygon points="50,20 80,80 20,80" stroke="rgba(139,92,246,0.3)" />
                <circle cx="50" cy="50" r="10" fill="#fff" filter="drop-shadow(0 0 15px var(--bi-accent-2))" />
              </svg>
            </div>
            
            <p style={{fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--bi-text-secondary)', marginTop: '2rem', textTransform: 'uppercase'}}>
              SEE CLEARER. DECIDE FASTER. GROW SMARTER.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
