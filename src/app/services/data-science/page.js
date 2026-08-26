"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import './DsDev.css';

export default function DataScienceDevelopment() {
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
        <title>Data Science | Oxavyn</title>
        <meta name="description" content="Oxavyn combines data, statistical thinking, machine learning, and advanced visualization to uncover patterns and predict outcomes." />
      </Head>

      <main className="ds-page">
        {/* SECTION 01: HERO | 0-100vh */}
        <section id="hero" style={{minHeight: '100vh', padding: '12rem 5% 6rem'}}>
          <div className="ds-split visual-right">
            <div className="ds-text-header animate-on-scroll">
              <span className="ds-eyebrow">DATA SCIENCE</span>
              <h1 className="ds-heading">
                Find the Signal<br/>
                <span className="ds-gradient-text">Inside the Complexity.</span>
              </h1>
            </div>
            
            <div className="ds-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="ds-hero-visual">
                
                {/* Intense Background Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'400px', height:'400px', background:'var(--ds-accent-3)', filter:'blur(120px)', opacity:0.3, animation:'ds-pulse-glow 6s infinite alternate', zIndex: -2}}></div>

                {/* Central Data Science Core */}
                <div className="ds-core-sphere">
                  {/* Floating particles inside */}
                  <div style={{position:'absolute', top:'30%', left:'30%', width:'6px', height:'6px', background:'#fff', borderRadius:'50%', boxShadow:'0 0 10px #fff', animation:'ds-float-fast 3s infinite'}}></div>
                  <div style={{position:'absolute', top:'60%', left:'40%', width:'8px', height:'8px', background:'var(--ds-accent-1)', borderRadius:'50%', boxShadow:'0 0 15px var(--ds-accent-1)', animation:'ds-float-slow 4s infinite reverse'}}></div>
                  <div style={{position:'absolute', top:'45%', left:'70%', width:'5px', height:'5px', background:'var(--ds-accent-2)', borderRadius:'50%', boxShadow:'0 0 10px var(--ds-accent-2)', animation:'ds-float-fast 5s infinite'}}></div>
                  
                  {/* Internal Neural Web */}
                  <svg width="100%" height="100%" viewBox="0 0 100 100" style={{position:'absolute', top:0, left:0, opacity:0.5}}>
                    <path d="M 30 30 L 40 60 L 70 45 Z" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="2 2" style={{animation: 'ds-line-draw 3s linear infinite'}}/>
                    <path d="M 40 60 L 50 80 L 80 70 Z" fill="none" stroke="var(--ds-accent-1)" strokeWidth="1" strokeDasharray="2 2" style={{animation: 'ds-line-draw 4s linear infinite reverse'}}/>
                  </svg>
                  
                  <span style={{fontWeight:800, fontSize:'1.2rem', color:'var(--ds-text-primary)', zIndex:10, textShadow:'0 0 20px rgba(255,255,255,1)'}}>OXAVYN CORE</span>
                </div>

                {/* Orbiting Scientific Models */}
                <div className="ds-glass-card" style={{position:'absolute', top: '10%', left: '5%', animation: 'ds-card-flip 8s infinite ease-in-out'}}>
                  <div className="ds-glass-card-inner">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ds-accent-1)" strokeWidth="2">
                      <path d="M3 3v18h18" />
                      <circle cx="8" cy="14" r="2" fill="var(--ds-accent-1)"/>
                      <circle cx="14" cy="10" r="2" fill="var(--ds-accent-1)"/>
                      <circle cx="19" cy="6" r="2" fill="var(--ds-accent-1)"/>
                      <path d="M8 14L19 6" strokeDasharray="4 4"/>
                    </svg>
                    REGRESSION
                  </div>
                </div>
                
                <div className="ds-glass-card" style={{position:'absolute', bottom: '15%', right: '5%', animation: 'ds-card-flip 10s infinite ease-in-out reverse'}}>
                  <div className="ds-glass-card-inner">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ds-accent-2)" strokeWidth="2">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    PROBABILITY
                  </div>
                </div>
                
                <div className="ds-glass-card" style={{position:'absolute', top: '25%', right: '-5%', animation: 'ds-float-slow 6s infinite'}}>
                  <div className="ds-glass-card-inner">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ds-accent-3)" strokeWidth="2">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                    </svg>
                    NEURAL NET
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="ds-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="ds-desc">
                Oxavyn combines data, statistical thinking, machine learning, and advanced visualization to uncover patterns, predict outcomes, and turn complex information into decisions businesses can act on.
              </p>
              <div className="ds-btn-group">
                <a href="#cta" className="ds-btn ds-btn-primary">Unlock Your Data &rarr;</a>
                <a href="#explore" className="ds-btn ds-btn-secondary">Explore Data Science</a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: DATA EXPLORATION | 100-190vh */}
        <section id="explore">
          <div className="ds-split visual-left">
            <div className="ds-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <span className="ds-eyebrow">DISCOVER THE SIGNAL</span>
              <h2 className="ds-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Before the Model,<br/>
                <span className="ds-gradient-text">Understand the Data.</span>
              </h2>
            </div>
            
            <div className="ds-visual animate-on-scroll">
              <div className="ds-explore-visual">
                
                {/* Histogram Glass Panel */}
                <div className="ds-glass-panel" style={{width:'200px', height:'250px', position:'absolute', left:'10%', top:'10%', transform:'rotate(-10deg)', padding:'15px', zIndex:5, display:'flex', flexDirection:'column'}}>
                  <div style={{fontSize:'0.6rem', fontWeight:800, color:'var(--ds-text-secondary)', marginBottom:'10px'}}>DISTRIBUTION</div>
                  <div style={{flex:1, display:'flex', alignItems:'flex-end', gap:'5px'}}>
                    <div style={{flex:1, background:'var(--ds-accent-1)', height:'20%', borderRadius:'2px', animation:'ds-chart-drop 1s 0.1s both'}}></div>
                    <div style={{flex:1, background:'var(--ds-accent-1)', height:'50%', borderRadius:'2px', animation:'ds-chart-drop 1s 0.2s both'}}></div>
                    <div style={{flex:1, background:'var(--ds-accent-1)', height:'80%', borderRadius:'2px', animation:'ds-chart-drop 1s 0.3s both'}}></div>
                    <div style={{flex:1, background:'var(--ds-accent-1)', height:'40%', borderRadius:'2px', animation:'ds-chart-drop 1s 0.4s both'}}></div>
                  </div>
                </div>
                
                {/* Scatter Plot Panel */}
                <div className="ds-glass-panel" style={{width:'280px', height:'280px', position:'absolute', right:'10%', top:'30%', transform:'rotate(5deg)', padding:'15px', zIndex:10}}>
                  <div style={{fontSize:'0.6rem', fontWeight:800, color:'var(--ds-text-secondary)', marginBottom:'10px'}}>CORRELATION</div>
                  <div style={{position:'relative', width:'100%', height:'85%', borderLeft:'2px solid rgba(0,0,0,0.1)', borderBottom:'2px solid rgba(0,0,0,0.1)'}}>
                    <div style={{position:'absolute', bottom:'20%', left:'20%', width:'8px', height:'8px', background:'var(--ds-accent-2)', borderRadius:'50%'}}></div>
                    <div style={{position:'absolute', bottom:'30%', left:'40%', width:'8px', height:'8px', background:'var(--ds-accent-2)', borderRadius:'50%'}}></div>
                    <div style={{position:'absolute', bottom:'60%', left:'50%', width:'8px', height:'8px', background:'var(--ds-accent-2)', borderRadius:'50%'}}></div>
                    <div style={{position:'absolute', bottom:'80%', left:'70%', width:'8px', height:'8px', background:'var(--ds-accent-2)', borderRadius:'50%'}}></div>
                    
                    {/* Glowing Trendline */}
                    <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0}}>
                      <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="var(--ds-accent-1)" strokeWidth="3" strokeDasharray="4 4" filter="drop-shadow(0 0 5px var(--ds-accent-1))" style={{animation:'ds-line-draw 2s ease-out forwards'}}/>
                    </svg>
                  </div>
                </div>

                {/* Heatmap Panel */}
                <div className="ds-glass-panel" style={{width:'220px', height:'180px', position:'absolute', left:'25%', bottom:'10%', transform:'rotate(-5deg)', padding:'15px', zIndex:7}}>
                  <div style={{fontSize:'0.6rem', fontWeight:800, color:'var(--ds-text-secondary)', marginBottom:'10px'}}>HEATMAP</div>
                  <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'4px', height:'80%'}}>
                    {[0.2, 0.8, 0.4, 0.1, 0.9, 0.3, 0.7, 0.5, 0.1, 0.6, 0.9, 0.2].map((op, i) => (
                      <div key={i} style={{background:`rgba(59,130,246,${op})`, borderRadius:'2px'}}></div>
                    ))}
                  </div>
                </div>

                {/* Atmospheric Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'300px', height:'300px', background:'var(--ds-accent-3)', filter:'blur(100px)', opacity:0.3, zIndex: -1}}></div>
              </div>
            </div>
            
            <div className="ds-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="ds-desc" style={{marginBottom: 0}}>
                Strong data science begins with understanding what the data actually contains. Oxavyn explores relationships, distributions, anomalies, trends, and hidden patterns before models are built. Through structured analysis and thoughtful visualization, we turn complex datasets into a clearer foundation for intelligent decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03: DATA MODELING | 190-290vh */}
        <section id="modeling" style={{flexDirection: 'column'}}>
          <div className="ds-center animate-on-scroll">
            <h2 className="ds-heading" style={{marginBottom: 0}}>
              Models Built to<br/>
              <span className="ds-gradient-text">Reveal What Data Knows.</span>
            </h2>
          </div>
          
          <div className="ds-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="ds-modeling-visual">
              {/* Massive 3D Architecture */}
              <div className="ds-glass-panel" style={{width:'90%', height:'400px', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'40px', transform:'rotateX(15deg)', zIndex:10}}>
                
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'15px'}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--ds-text-secondary)'}}>DATA</div>
                  <div style={{width:'80px', height:'80px', background:'rgba(255,255,255,0.8)', border:'1px solid #fff', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', boxShadow:'0 15px 30px rgba(0,0,0,0.1)'}}>📄</div>
                </div>
                
                <div style={{color:'var(--ds-accent-1)', fontSize:'2rem'}}>→</div>
                
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'15px'}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--ds-text-secondary)'}}>FEATURES</div>
                  <div style={{width:'80px', height:'80px', background:'rgba(255,255,255,0.8)', border:'1px solid #fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', boxShadow:'0 15px 30px rgba(0,0,0,0.1)'}}>⚙️</div>
                </div>

                <div style={{color:'var(--ds-accent-1)', fontSize:'2rem'}}>→</div>
                
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'15px'}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--ds-text-secondary)'}}>MODEL</div>
                  <div style={{width:'100px', height:'100px', background:'linear-gradient(135deg, var(--ds-accent-3), var(--ds-accent-2))', border:'2px solid #fff', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', boxShadow:'0 20px 40px rgba(139,92,246,0.3)', animation:'ds-float-slow 4s infinite'}}>🧠</div>
                </div>

                <div style={{color:'var(--ds-accent-1)', fontSize:'2rem'}}>→</div>
                
                <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'15px'}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--ds-text-secondary)'}}>PREDICTION</div>
                  <div style={{width:'80px', height:'80px', background:'rgba(255,255,255,0.8)', border:'1px solid #fff', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', boxShadow:'0 15px 30px rgba(0,0,0,0.1)'}}>🎯</div>
                </div>
              </div>
              
              {/* Floating Labels */}
              <div className="ds-glass-card" style={{position:'absolute', top: '10%', left: '20%'}}>REGRESSION</div>
              <div className="ds-glass-card" style={{position:'absolute', bottom: '15%', left: '30%'}}>CLASSIFICATION</div>
              <div className="ds-glass-card" style={{position:'absolute', top: '20%', right: '20%'}}>CLUSTERING</div>
              <div className="ds-glass-card" style={{position:'absolute', bottom: '20%', right: '25%'}}>FORECASTING</div>

            </div>
          </div>
        </section>

        {/* SECTION 04: ML MODEL | 290-390vh */}
        <section id="ml-model">
          <div className="ds-split visual-right">
            <div className="ds-text-header animate-on-scroll">
              <span className="ds-eyebrow">INTELLIGENT MODELING</span>
              <h2 className="ds-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                From Data Patterns<br/>
                <span className="ds-gradient-text">to Predictive Intelligence.</span>
              </h2>
            </div>
            
            <div className="ds-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="ds-ml-visual">
                
                {/* 3D Neural Network Architecture */}
                <div style={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', zIndex:10}}>
                  
                  {/* Input Layer */}
                  <div className="ds-neural-layer">
                    <div className="ds-node">IN 1</div>
                    <div className="ds-node">IN 2</div>
                    <div className="ds-node">IN 3</div>
                  </div>
                  
                  {/* Hidden Layer 1 */}
                  <div className="ds-neural-layer" style={{transform:'translateY(-20px)'}}>
                    <div className="ds-node" style={{background:'rgba(240,248,255,0.9)'}}>H1</div>
                    <div className="ds-node" style={{background:'rgba(240,248,255,0.9)'}}>H2</div>
                    <div className="ds-node" style={{background:'rgba(240,248,255,0.9)'}}>H3</div>
                    <div className="ds-node" style={{background:'rgba(240,248,255,0.9)'}}>H4</div>
                  </div>
                  
                  {/* Hidden Layer 2 */}
                  <div className="ds-neural-layer" style={{transform:'translateY(20px)'}}>
                    <div className="ds-node" style={{background:'rgba(245,240,255,0.9)'}}>H1</div>
                    <div className="ds-node" style={{background:'rgba(245,240,255,0.9)'}}>H2</div>
                    <div className="ds-node" style={{background:'rgba(245,240,255,0.9)'}}>H3</div>
                  </div>
                  
                  {/* Output Layer */}
                  <div className="ds-neural-layer">
                    <div className="ds-node" style={{background:'var(--ds-accent-3)', color:'#fff', boxShadow:'0 0 20px var(--ds-accent-3)'}}>OUT</div>
                  </div>
                  
                </div>

                {/* Connecting SVG Lines */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex:1}}>
                  {/* Fake connections for aesthetics */}
                  <path d="M 50 150 Q 150 100, 250 120" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="2" strokeDasharray="4 4" style={{animation:'ds-line-draw 2s linear infinite'}}/>
                  <path d="M 50 250 Q 150 300, 250 280" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="2" strokeDasharray="4 4" style={{animation:'ds-line-draw 3s linear infinite'}}/>
                  <path d="M 250 120 Q 350 150, 450 250" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="2" strokeDasharray="4 4" style={{animation:'ds-line-draw 2s linear infinite reverse'}}/>
                </svg>

                {/* Ambient Model Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'80%', height:'80%', background:'linear-gradient(90deg, var(--ds-accent-1), var(--ds-accent-2))', filter:'blur(120px)', opacity:0.2, zIndex: 0}}></div>
                
                {/* Floating Metrics */}
                <div className="ds-glass-card" style={{position:'absolute', top: '0', right: '10%'}}>ACCURACY: 98.4%</div>
                <div className="ds-glass-card" style={{position:'absolute', bottom: '0', left: '10%'}}>F1 SCORE: 0.92</div>

              </div>
            </div>
            
            <div className="ds-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="ds-desc" style={{marginBottom: 0}}>
                Create an ultra-realistic floating machine learning model. Use a transparent neural-network structure with hundreds of glass nodes to show data flowing through feature engineering, validation, and directly into highly accurate prediction outputs.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 05: DATA VISUALIZATION | 390-490vh */}
        <section id="visualization" style={{flexDirection: 'column', padding: '0 5%'}}>
          <div className="ds-container">
            <div className="ds-center animate-on-scroll">
              <h2 className="ds-heading" style={{marginBottom: 0}}>
                Make Complex Information<br/>
                <span className="ds-gradient-text">Beautifully Understandable.</span>
              </h2>
            </div>
            
            <div className="ds-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <div className="ds-viz-visual">
                
                {/* Central Glass Lab Panel */}
                <div className="ds-glass-panel" style={{width:'300px', height:'100px', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:20, boxShadow:'0 30px 60px rgba(6,182,212,0.3)'}}>
                  <span style={{fontWeight:800, fontSize:'1.2rem', letterSpacing:'0.1em'}}>OXAVYN DATA LAB</span>
                </div>
                
                {/* Orbiting Visualizations */}
                <div className="ds-glass-panel" style={{width:'180px', height:'180px', position:'absolute', top:'10%', left:'20%', transform:'rotate(-15deg)', padding:'15px', zIndex:10, animation:'ds-float-slow 5s infinite'}}>
                  <div style={{fontSize:'0.6rem', fontWeight:800, color:'var(--ds-text-secondary)', marginBottom:'10px'}}>SCATTER PLOT</div>
                  <svg width="100%" height="70%">
                    <circle cx="20%" cy="80%" r="4" fill="var(--ds-accent-1)"/>
                    <circle cx="40%" cy="60%" r="5" fill="var(--ds-accent-2)"/>
                    <circle cx="70%" cy="30%" r="4" fill="var(--ds-accent-1)"/>
                    <circle cx="80%" cy="40%" r="6" fill="var(--ds-accent-3)"/>
                  </svg>
                </div>
                
                <div className="ds-glass-panel" style={{width:'180px', height:'180px', position:'absolute', bottom:'10%', right:'20%', transform:'rotate(10deg)', padding:'15px', zIndex:10, animation:'ds-float-fast 6s infinite reverse'}}>
                  <div style={{fontSize:'0.6rem', fontWeight:800, color:'var(--ds-text-secondary)', marginBottom:'10px'}}>PROBABILITY CURVE</div>
                  <svg width="100%" height="70%">
                    <path d="M 0 100 Q 50 10, 100 100" fill="rgba(6,182,212,0.2)" stroke="var(--ds-accent-1)" strokeWidth="2"/>
                  </svg>
                </div>
                
                <div className="ds-glass-panel" style={{width:'150px', height:'150px', position:'absolute', top:'20%', right:'10%', transform:'rotate(20deg)', padding:'15px', zIndex:10, animation:'ds-float-slow 7s infinite'}}>
                  <div style={{fontSize:'0.6rem', fontWeight:800, color:'var(--ds-text-secondary)', marginBottom:'10px'}}>NETWORK</div>
                  <svg width="100%" height="70%">
                    <circle cx="50%" cy="50%" r="5" fill="var(--ds-accent-2)"/>
                    <circle cx="20%" cy="20%" r="3" fill="var(--ds-accent-1)"/>
                    <circle cx="80%" cy="80%" r="3" fill="var(--ds-accent-1)"/>
                    <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(0,0,0,0.2)"/>
                    <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgba(0,0,0,0.2)"/>
                  </svg>
                </div>

                {/* Intense Ambient Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'500px', height:'500px', background:'var(--ds-accent-1)', filter:'blur(150px)', opacity:0.3, zIndex: -1}}></div>
                
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: REPORTS & INSIGHTS | 490-590vh */}
        <section id="reports">
          <div className="ds-split visual-left">
            <div className="ds-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <span className="ds-eyebrow">FROM ANALYSIS TO ANSWERS</span>
              <h2 className="ds-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Turn Analysis Into<br/>
                <span className="ds-gradient-text">Insights People Can Use.</span>
              </h2>
            </div>
            
            <div className="ds-visual animate-on-scroll">
              <div className="ds-report-visual">
                
                {/* Layered Glass Reports */}
                <div className="ds-glass-panel ds-report-card" style={{position:'absolute', zIndex:3, transform:'rotateY(-15deg) rotateX(10deg) translateZ(-50px)', opacity:0.6, right:'10%', filter:'blur(2px)'}}>
                  <div style={{width:'40%', height:'8px', background:'rgba(0,0,0,0.1)', marginBottom:'20px'}}></div>
                  <div style={{width:'100%', height:'150px', background:'rgba(0,0,0,0.05)', borderRadius:'8px'}}></div>
                </div>
                
                <div className="ds-glass-panel ds-report-card" style={{position:'absolute', zIndex:4, transform:'rotateY(-10deg) rotateX(5deg) translateZ(0)', opacity:0.8, right:'20%', filter:'blur(1px)'}}>
                  <div style={{width:'50%', height:'8px', background:'rgba(0,0,0,0.1)', marginBottom:'20px'}}></div>
                  <div style={{width:'100%', height:'150px', background:'rgba(139,92,246,0.1)', borderRadius:'8px'}}></div>
                </div>

                <div className="ds-glass-panel ds-report-card" style={{zIndex:5, display:'flex', flexDirection:'column'}}>
                  <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--ds-text-primary)', marginBottom:'20px', letterSpacing:'0.1em'}}>EXECUTIVE SUMMARY</div>
                  
                  <div style={{background:'rgba(255,255,255,0.8)', padding:'15px', borderRadius:'12px', marginBottom:'15px', boxShadow:'0 10px 20px rgba(0,0,0,0.05)'}}>
                    <div style={{fontSize:'0.6rem', color:'var(--ds-text-secondary)', marginBottom:'5px'}}>KEY FINDING</div>
                    <div style={{fontWeight:700, fontSize:'1.1rem', color:'var(--ds-accent-3)'}}>Model identifies 34% reduction in operational bottlenecking.</div>
                  </div>
                  
                  <div style={{display:'flex', gap:'10px', marginBottom:'15px'}}>
                    <div style={{flex:1, background:'rgba(255,255,255,0.8)', padding:'15px', borderRadius:'12px', boxShadow:'0 10px 20px rgba(0,0,0,0.05)'}}>
                      <div style={{fontSize:'0.6rem', color:'var(--ds-text-secondary)'}}>RISK</div>
                      <div style={{fontWeight:800, fontSize:'1.2rem', color:'#ef4444'}}>LOW</div>
                    </div>
                    <div style={{flex:1, background:'rgba(255,255,255,0.8)', padding:'15px', borderRadius:'12px', boxShadow:'0 10px 20px rgba(0,0,0,0.05)'}}>
                      <div style={{fontSize:'0.6rem', color:'var(--ds-text-secondary)'}}>OPPORTUNITY</div>
                      <div style={{fontWeight:800, fontSize:'1.2rem', color:'#10b981'}}>HIGH</div>
                    </div>
                  </div>
                  
                  <div style={{flex:1, background:'rgba(6,182,212,0.1)', borderRadius:'12px', position:'relative', overflow:'hidden'}}>
                    <svg width="100%" height="100%" style={{position:'absolute', bottom:0}}>
                      <path d="M 0 100 Q 50 50, 100 80 T 200 40 T 350 20" fill="none" stroke="var(--ds-accent-1)" strokeWidth="3"/>
                    </svg>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="ds-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="ds-desc" style={{marginBottom: 0}}>
                Data science becomes valuable when complex analysis can be communicated clearly. Oxavyn transforms model outputs and analytical findings into intuitive reports, visual stories, dashboards, and decision-ready insights that help business teams understand what the data means and what they can do next.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07: CASE STUDIES | 590-690vh */}
        <section id="cases" style={{flexDirection: 'column'}}>
          <div className="ds-center animate-on-scroll">
            <span className="ds-eyebrow">DATA SCIENCE IN ACTION</span>
            <h2 className="ds-heading" style={{marginBottom: 0}}>
              Models Built Around<br/>
              <span className="ds-gradient-text">Real Business Questions.</span>
            </h2>
          </div>
          
          <div className="ds-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="ds-case-visual">
              
              {/* Case 01 */}
              <div className="ds-glass-panel ds-case-card">
                <div style={{fontSize:'0.8rem', fontWeight:800, letterSpacing:'0.1em', marginBottom:'20px'}}>PREDICTIVE ANALYTICS</div>
                <div style={{flex:1, background:'rgba(255,255,255,0.5)', borderRadius:'12px', marginBottom:'20px', position:'relative', overflow:'hidden'}}>
                  <svg width="100%" height="100%" style={{position:'absolute', bottom:-10}}>
                    <path d="M 0 150 Q 50 100, 150 120 T 300 40" fill="none" stroke="var(--ds-accent-3)" strokeWidth="3"/>
                    <path d="M 150 120 T 300 40 L 300 200 L 0 200 Z" fill="rgba(59,130,246,0.1)"/>
                  </svg>
                </div>
                <div>
                  <div style={{fontSize:'2rem', fontWeight:800, color:'var(--ds-accent-1)'}}>+24%</div>
                  <div style={{fontSize:'0.7rem', fontWeight:700, color:'var(--ds-text-secondary)'}}>PREDICTIVE ACCURACY</div>
                </div>
              </div>

              {/* Case 02 */}
              <div className="ds-glass-panel ds-case-card">
                <div style={{fontSize:'0.8rem', fontWeight:800, letterSpacing:'0.1em', marginBottom:'20px'}}>CUSTOMER INTELLIGENCE</div>
                <div style={{flex:1, background:'rgba(255,255,255,0.5)', borderRadius:'12px', marginBottom:'20px', position:'relative', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <div style={{width:'60px', height:'60px', borderRadius:'50%', border:'3px solid var(--ds-accent-2)'}}></div>
                  <div style={{width:'40px', height:'40px', borderRadius:'50%', border:'3px solid var(--ds-accent-1)', marginLeft:'-20px', background:'rgba(255,255,255,0.8)'}}></div>
                </div>
                <div>
                  <div style={{fontSize:'2rem', fontWeight:800, color:'var(--ds-accent-2)'}}>+31%</div>
                  <div style={{fontSize:'0.7rem', fontWeight:700, color:'var(--ds-text-secondary)'}}>CUSTOMER INSIGHT</div>
                </div>
              </div>

              {/* Case 03 */}
              <div className="ds-glass-panel ds-case-card">
                <div style={{fontSize:'0.8rem', fontWeight:800, letterSpacing:'0.1em', marginBottom:'20px'}}>OPERATIONAL INTELLIGENCE</div>
                <div style={{flex:1, background:'rgba(255,255,255,0.5)', borderRadius:'12px', marginBottom:'20px', position:'relative', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <div style={{width:'80%', height:'80%', border:'2px dashed var(--ds-text-secondary)', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <div style={{width:'10px', height:'10px', background:'#ef4444', borderRadius:'50%', boxShadow:'0 0 10px #ef4444'}}></div>
                  </div>
                </div>
                <div>
                  <div style={{fontSize:'2rem', fontWeight:800, color:'#10b981'}}>-18%</div>
                  <div style={{fontSize:'0.7rem', fontWeight:700, color:'var(--ds-text-secondary)'}}>OPERATIONAL LOSS</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 08: DATA SCIENCE + AI | 690-760vh */}
        <section id="ai">
          <div className="ds-split visual-right">
            <div className="ds-text-header animate-on-scroll">
              <h2 className="ds-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Where Data Science<br/>
                <span className="ds-gradient-text">Meets Intelligent Systems.</span>
              </h2>
            </div>
            
            <div className="ds-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="ds-ai-visual">
                
                {/* Central Intelligence Core */}
                <div className="ds-core-sphere" style={{width:'200px', height:'200px', background:'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,240,255,0.8))'}}>
                  <span style={{fontWeight:800, textAlign:'center'}}>OXAVYN<br/>INTELLIGENCE<br/>CORE</span>
                </div>
                
                {/* Converging Elements */}
                <div className="ds-glass-card" style={{position:'absolute', top:'10%', left:'15%'}}>DATA MODEL</div>
                <div className="ds-glass-card" style={{position:'absolute', top:'10%', right:'15%'}}>AI AGENT</div>
                <div className="ds-glass-card" style={{position:'absolute', bottom:'15%', left:'15%'}}>AUTOMATION</div>
                <div className="ds-glass-card" style={{position:'absolute', bottom:'15%', right:'15%'}}>RECOMMENDATION</div>
                
                {/* Data flow paths */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: -1}}>
                  <line x1="50%" y1="50%" x2="25%" y2="15%" stroke="rgba(6,182,212,0.4)" strokeWidth="2" strokeDasharray="5 5" style={{animation:'ds-line-draw 2s linear infinite'}}/>
                  <line x1="50%" y1="50%" x2="75%" y2="15%" stroke="rgba(139,92,246,0.4)" strokeWidth="2" strokeDasharray="5 5" style={{animation:'ds-line-draw 3s linear infinite reverse'}}/>
                  <line x1="50%" y1="50%" x2="25%" y2="85%" stroke="rgba(59,130,246,0.4)" strokeWidth="2" strokeDasharray="5 5" style={{animation:'ds-line-draw 2.5s linear infinite'}}/>
                  <line x1="50%" y1="50%" x2="75%" y2="85%" stroke="rgba(6,182,212,0.4)" strokeWidth="2" strokeDasharray="5 5" style={{animation:'ds-line-draw 3.5s linear infinite reverse'}}/>
                </svg>

                {/* Intense Ambient Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'400px', height:'400px', background:'var(--ds-accent-2)', filter:'blur(120px)', opacity:0.3, zIndex: -2}}></div>

              </div>
            </div>
            
            <div className="ds-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="ds-desc" style={{marginBottom: 0}}>
                Create a massive futuristic combination of Data Science, Machine Learning, Generative AI, and Automation. Show the system continuously learning and producing increasingly useful insights.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 09: FINAL CTA | 760-800vh */}
        <section id="cta" style={{minHeight: '40vh', paddingBottom: '6rem', flexDirection: 'column'}}>
          <div className="ds-cta-container animate-on-scroll">
            <span className="ds-eyebrow">BUILD WITH DATA</span>
            <h2 className="ds-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '1.5rem'}}>
              Your Data Holds the Signal.<br/>
              <span className="ds-gradient-text">Let's Find It.</span>
            </h2>
            <p className="ds-desc" style={{margin: '0 auto 3rem', maxWidth: '800px'}}>
              From exploratory analysis and predictive modeling to advanced visualization and intelligent decision systems, Oxavyn combines data science with modern engineering to turn complex information into practical business intelligence.
            </p>
            <div className="ds-btn-group" style={{justifyContent: 'center', marginBottom: '3rem'}}>
              <a href="/contact" className="ds-btn ds-btn-primary">Start Your Data Science Project &rarr;</a>
              <a href="/contact" className="ds-btn ds-btn-secondary">Talk to Oxavyn</a>
            </div>
            
            <div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)', margin: '2rem 0 3rem'}}></div>
            
            {/* Giant Floating Crystal Core */}
            <div style={{position: 'relative', width: '150px', height: '150px', margin: '0 auto'}}>
              <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', borderRadius:'50%', background:'var(--ds-accent-1)', filter:'blur(60px)', opacity:0.5, animation:'ds-pulse-glow 4s infinite alternate'}}></div>
              <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="var(--ds-accent-1)" strokeWidth="1.5">
                <circle cx="50" cy="50" r="45" stroke="rgba(59,130,246,0.6)" />
                <circle cx="50" cy="50" r="35" strokeDasharray="4 4" stroke="rgba(139,92,246,0.8)" />
                <path d="M 30 50 Q 50 20, 70 50 T 90 50" stroke="rgba(6,182,212,0.5)" />
                <circle cx="50" cy="50" r="10" fill="#fff" filter="drop-shadow(0 0 15px var(--ds-accent-1))" />
              </svg>
            </div>
            
            <p style={{fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--ds-text-secondary)', marginTop: '2rem', textTransform: 'uppercase'}}>
              DATA, TRANSFORMED INTO INTELLIGENCE.
            </p>
          </div>
        </section>
      </main>

    </>
  );
}
