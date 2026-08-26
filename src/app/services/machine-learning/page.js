"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import './MlDev.css';

export default function MachineLearningDevelopment() {
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
        <title>Machine Learning Development | Oxavyn</title>
        <meta name="description" content="Oxavyn builds machine learning solutions that transform complex data into intelligent predictions, automated decisions, and measurable business outcomes." />
      </Head>

      <main className="ml-page">
        {/* SECTION 01: HERO | 0-100vh */}
        <section id="hero" style={{minHeight: '100vh', padding: '12rem 5% 6rem'}}>
          <div className="ml-split visual-right">
            <div className="ml-text-header animate-on-scroll">
              <span className="ml-eyebrow">MACHINE LEARNING</span>
              <h1 className="ml-heading">
                Machines That Learn.<br/>
                <span className="ml-gradient-text">Systems That Evolve.</span>
              </h1>
            </div>
            
            <div className="ml-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="ml-hero-visual">
                <div className="ml-crystal-sphere">
                  {/* Neural net SVG */}
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="50" cy="50" r="45" stroke="url(#mlHeroGrad)" strokeDasharray="4 4"/>
                    <path d="M20 20 L50 50 L80 20 M20 80 L50 50 L80 80 M50 20 L50 80 M20 50 L80 50" stroke="rgba(59,130,246,0.4)"/>
                    <circle cx="50" cy="50" r="20" fill="rgba(59,130,246,0.1)"/>
                    <circle cx="50" cy="50" r="5" fill="#3b82f6"/>
                    <defs>
                      <linearGradient id="mlHeroGrad" x1="0" y1="0" x2="100" y2="100">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Floating Elements */}
                <div className="ml-glass-card" style={{position:'absolute', top: '10%', left: '5%', animation: 'ml-float-slow 6s infinite reverse'}}>
                  <span>📊</span> RAW DATA
                </div>
                <div className="ml-glass-card" style={{position:'absolute', bottom: '10%', right: '5%', animation: 'ml-float-fast 5s infinite'}}>
                  <span>⚡</span> ACTION
                </div>
                <div className="ml-glass-card" style={{position:'absolute', top: '20%', right: '0%', animation: 'ml-float-slow 7s infinite'}}>
                  <span>🧠</span> LEARNING
                </div>
                <div className="ml-glass-card" style={{position:'absolute', bottom: '15%', left: '0%', animation: 'ml-float-fast 8s infinite reverse'}}>
                  <span>🎯</span> PREDICTION
                </div>
                
                {/* Floating vectors */}
                <div style={{position:'absolute', top:'40%', left:'-10%', width:'80px', height:'4px', background:'linear-gradient(90deg, transparent, #3b82f6)', borderRadius:'2px', animation:'ml-float-fast 4s infinite'}}></div>
                <div style={{position:'absolute', top:'60%', right:'-10%', width:'100px', height:'4px', background:'linear-gradient(90deg, #8b5cf6, transparent)', borderRadius:'2px', animation:'ml-float-slow 5s infinite reverse'}}></div>
              </div>
            </div>
            
            <div className="ml-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="ml-desc">
                Oxavyn builds machine learning solutions that transform complex data into intelligent predictions, automated decisions, and measurable business outcomes.
              </p>
              <div className="ml-btn-group">
                <a href="#cta" className="ml-btn ml-btn-primary">Build With Machine Learning &rarr;</a>
                <a href="#data" className="ml-btn ml-btn-secondary">Explore Our Capabilities</a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: DATA | 100-190vh */}
        <section id="data">
          <div className="ml-split visual-left">
            <div className="ml-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <span className="ml-eyebrow">THE FOUNDATION</span>
              <h2 className="ml-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Every Intelligent Model<br/>
                <span className="ml-gradient-text">Begins With Better Data.</span>
              </h2>
            </div>
            
            <div className="ml-visual animate-on-scroll">
              <div className="ml-data-visual">
                <div className="data-cylinder">DATABASE</div>
                <div className="data-pipeline-container">
                  <div className="data-packet" style={{animationDelay: '0s'}}></div>
                  <div className="data-packet" style={{animationDelay: '0.6s'}}></div>
                  <div className="data-packet" style={{animationDelay: '1.2s'}}></div>
                </div>
                <div className="data-cylinder" style={{width:'140px', height:'60px', background:'rgba(255,255,255,0.8)'}}>PIPELINE</div>
                <div className="data-pipeline-container" style={{height:'100px'}}>
                  <div className="data-packet" style={{animationDelay: '0.3s'}}></div>
                  <div className="data-packet" style={{animationDelay: '0.9s'}}></div>
                </div>
                <div className="data-cylinder" style={{width:'120px', height:'50px', background:'var(--ml-accent-1)', color:'#fff'}}>MODEL</div>
                
                {/* Floating CSV/Data particles */}
                <div style={{position: 'absolute', top: '20%', left: '20%', fontSize: '1.5rem', animation: 'ml-float-slow 4s infinite'}}>📄</div>
                <div style={{position: 'absolute', top: '30%', right: '20%', fontSize: '1.5rem', animation: 'ml-float-fast 5s infinite reverse'}}>☁️</div>
                <div style={{position: 'absolute', bottom: '40%', left: '25%', fontSize: '1.5rem', animation: 'ml-float-slow 6s infinite'}}>🔄</div>
              </div>
            </div>
            
            <div className="ml-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="ml-desc" style={{marginBottom: 0}}>
                Machine learning is only as powerful as the data behind it. Oxavyn helps businesses structure, prepare, transform, and connect their data so it can become a reliable foundation for intelligent systems. From raw business information to carefully engineered datasets, we focus on creating data pipelines that support accuracy, scalability, and meaningful model performance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03: ML MODELS | 190-290vh */}
        <section id="models" style={{flexDirection: 'column'}}>
          <div className="ml-center animate-on-scroll">
            <h2 className="ml-heading" style={{marginBottom: 0}}>
              Models Built to Understand<br/>
              <span className="ml-gradient-text">What Your Data Is Saying.</span>
            </h2>
          </div>
          
          <div className="ml-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="ml-model-visual">
              {/* Layer 1: Input */}
              <div className="ml-layer" style={{left: '10%', zIndex: 1}}>
                <div style={{fontWeight: 800, color: 'var(--ml-text-primary)'}}>INPUT</div>
                <div style={{width:'80%', height:'2px', background:'rgba(59,130,246,0.3)'}}></div>
                <div style={{width:'80%', height:'2px', background:'rgba(59,130,246,0.3)'}}></div>
                <div style={{width:'80%', height:'2px', background:'rgba(59,130,246,0.3)'}}></div>
              </div>
              
              {/* Layer 2: Hidden Layers */}
              <div className="ml-layer" style={{left: '35%', zIndex: 2, background:'rgba(255,255,255,0.8)'}}>
                <div style={{fontWeight: 800, color: 'var(--ml-accent-1)'}}>HIDDEN LAYERS</div>
                <svg width="100%" height="200" style={{position:'absolute'}}>
                  <line x1="0" y1="50" x2="200" y2="100" stroke="rgba(59,130,246,0.2)" strokeWidth="2"/>
                  <line x1="0" y1="150" x2="200" y2="100" stroke="rgba(59,130,246,0.2)" strokeWidth="2"/>
                  <line x1="0" y1="100" x2="200" y2="50" stroke="rgba(59,130,246,0.2)" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Layer 3: Output */}
              <div className="ml-layer" style={{right: '10%', zIndex: 3, background:'linear-gradient(135deg, rgba(255,255,255,1), rgba(224,242,254,0.9))', border:'2px solid var(--ml-accent-1)'}}>
                <div style={{fontWeight: 800, color: 'var(--ml-accent-1)'}}>PREDICTION</div>
                <div className="ml-glass-card" style={{width:'80%', justifyContent:'center', padding:'8px'}}>CLASSIFICATION</div>
                <div className="ml-glass-card" style={{width:'80%', justifyContent:'center', padding:'8px'}}>REGRESSION</div>
                <div className="ml-glass-card" style={{width:'80%', justifyContent:'center', padding:'8px'}}>ANOMALY</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: PREDICTION | 290-390vh */}
        <section id="prediction">
          <div className="ml-split visual-right">
            <div className="ml-text-header animate-on-scroll">
              <span className="ml-eyebrow">PREDICTIVE INTELLIGENCE</span>
              <h2 className="ml-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Don't Just Understand<br/>What Happened.<br/>
                <span className="ml-gradient-text">Predict What's Next.</span>
              </h2>
            </div>
            
            <div className="ml-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="ml-predict-visual">
                <div className="predict-graph" style={{background: 'rgba(255,255,255,0.4)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 20px 40px rgba(59,130,246,0.05)', overflow: 'hidden'}}>
                  {/* Grid */}
                  <svg width="100%" height="100%" style={{position:'absolute'}}>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Vertical Projection Lines */}
                    <line x1="300" y1="290" x2="300" y2="450" stroke="rgba(59,130,246,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="500" y1="210" x2="500" y2="450" stroke="rgba(59,130,246,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="700" y1="130" x2="700" y2="450" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                    
                    {/* Glowing Prediction Curve */}
                    <path d="M 0 350 Q 200 350, 400 250 T 800 100" fill="none" stroke="var(--ml-accent-1)" strokeWidth="4" filter="drop-shadow(0 10px 10px rgba(59,130,246,0.4))"/>
                    
                    {/* Confidence Interval / Probability Curve */}
                    <path d="M 0 330 Q 200 300, 400 180 T 800 50 L 800 150 Q 600 280, 400 320 T 0 370 Z" fill="rgba(59,130,246,0.05)"/>
                    
                    {/* Data Points */}
                    <circle cx="100" cy="350" r="5" fill="var(--ml-accent-2)"/>
                    <circle cx="300" cy="290" r="5" fill="var(--ml-accent-2)"/>
                    <circle cx="500" cy="210" r="5" fill="var(--ml-accent-2)"/>
                    
                    {/* Projected Future Point (Glowing) */}
                    <circle cx="700" cy="130" r="8" fill="#fff" stroke="var(--ml-accent-1)" strokeWidth="4" filter="drop-shadow(0 0 15px var(--ml-accent-1))"/>
                  </svg>
                  
                  {/* Animated Scanner Line */}
                  <div className="predict-scanner"></div>
                </div>
                
                {/* Floating Labels & Metrics */}
                <div className="ml-glass-card" style={{position:'absolute', top: '15%', right: '15%', animation: 'ml-float-slow 6s infinite reverse'}}>
                  <div style={{width:'8px', height:'8px', background:'var(--ml-accent-1)', borderRadius:'50%'}}></div>
                  FORECAST: +24.8%
                </div>
                <div className="ml-glass-card" style={{position:'absolute', bottom: '25%', left: '10%', animation: 'ml-float-fast 5s infinite'}}>
                  <div style={{width:'8px', height:'8px', background:'var(--ml-accent-2)', borderRadius:'50%'}}></div>
                  HISTORICAL TREND
                </div>
                <div className="ml-glass-card" style={{position:'absolute', top: '40%', right: '40%', animation: 'ml-float-slow 7s infinite'}}>
                  <div style={{width:'8px', height:'8px', background:'var(--ml-accent-3)', borderRadius:'50%'}}></div>
                  PROBABILITY
                </div>
                
                {/* Micro Data Nodes */}
                <div style={{position:'absolute', top:'25%', left:'30%', background:'rgba(255,255,255,0.9)', padding:'4px 8px', borderRadius:'6px', fontSize:'0.7rem', fontWeight:800, color:'var(--ml-accent-1)', boxShadow:'0 5px 15px rgba(0,0,0,0.05)', animation: 'ml-float-fast 4s infinite reverse'}}>RISK: LOW</div>
                <div style={{position:'absolute', bottom:'15%', right:'25%', background:'rgba(255,255,255,0.9)', padding:'4px 8px', borderRadius:'6px', fontSize:'0.7rem', fontWeight:800, color:'var(--ml-accent-2)', boxShadow:'0 5px 15px rgba(0,0,0,0.05)', animation: 'ml-float-slow 5s infinite'}}>94.2% ACCURACY</div>
                
              </div>
            </div>
            
            <div className="ml-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="ml-desc" style={{marginBottom: 0}}>
                Machine learning can help businesses identify patterns that are difficult to see manually. Oxavyn develops predictive systems that analyze historical and real-time data to identify trends, forecast outcomes, detect anomalies, and support better decisions. The goal is not simply to produce a prediction, but to turn that prediction into something useful for the people and systems making decisions every day.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 05: ML + BUSINESS | 390-490vh */}
        <section id="business" style={{flexDirection: 'column', padding: '0 5%'}}>
          <div className="ml-container">
            <div className="ml-center animate-on-scroll">
              <h2 className="ml-heading" style={{marginBottom: 0}}>
                From Model Intelligence<br/>
                <span className="ml-gradient-text">to Business Impact.</span>
              </h2>
            </div>
            
            <div className="ml-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <div className="ml-biz-visual">
                <div className="biz-core-ml">OXAVYN ML</div>
                
                <div className="ml-glass-card" style={{position:'absolute', top: '10%', left: '20%'}}>CRM</div>
                <div className="ml-glass-card" style={{position:'absolute', top: '20%', right: '15%'}}>ERP</div>
                <div className="ml-glass-card" style={{position:'absolute', bottom: '20%', right: '25%'}}>API</div>
                <div className="ml-glass-card" style={{position:'absolute', bottom: '10%', left: '30%'}}>CLOUD</div>
                <div className="ml-glass-card" style={{position:'absolute', top: '45%', left: '5%'}}>ANALYTICS</div>
                
                {/* Luminous connection lines SVG */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 0}}>
                  <line x1="50%" y1="50%" x2="25%" y2="15%" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="70%" y2="75%" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="35%" y2="85%" stroke="rgba(245,158,11,0.3)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: REAL-TIME INTELLIGENCE | 490-590vh */}
        <section id="realtime">
          <div className="ml-split visual-left">
            <div className="ml-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <h2 className="ml-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Intelligence That Learns<br/>
                <span className="ml-gradient-text">As Your Business Changes.</span>
              </h2>
            </div>
            
            <div className="ml-visual animate-on-scroll">
              <div className="ml-realtime-visual">
                <div className="realtime-dashboard">
                  <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <div className="ml-chrome" style={{flex:1, borderRadius:'16px', padding:'20px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                      <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--ml-text-secondary)', marginBottom:'10px'}}>STATUS</div>
                      <div style={{display:'flex', alignItems:'center', gap:'10px', color:'#10b981', fontWeight:700}}>
                        <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'#10b981', boxShadow:'0 0 10px #10b981'}}></div> LIVE
                      </div>
                    </div>
                    <div className="ml-glass-card" style={{justifyContent:'space-between'}}>
                      <span>LEARNING</span>
                      <div style={{width:'40px', height:'4px', background:'var(--ml-accent-1)', borderRadius:'2px'}}></div>
                    </div>
                    <div className="ml-glass-card" style={{justifyContent:'space-between'}}>
                      <span>OPTIMIZING</span>
                      <div style={{width:'30px', height:'4px', background:'var(--ml-accent-2)', borderRadius:'2px'}}></div>
                    </div>
                  </div>
                  
                  <div style={{background:'rgba(255,255,255,0.7)', border:'1px solid #fff', borderRadius:'16px', position:'relative', overflow:'hidden'}}>
                    {/* Live updating graph simulation */}
                    <svg width="100%" height="100%" style={{position:'absolute'}}>
                      <path d="M 0 200 Q 50 150, 100 180 T 200 120 T 300 150 T 400 80 T 500 100 T 600 40" fill="none" stroke="var(--ml-accent-1)" strokeWidth="3" opacity="0.5"/>
                      <path d="M 0 250 Q 50 200, 100 230 T 200 170 T 300 200 T 400 130 T 500 150 T 600 90" fill="none" stroke="var(--ml-accent-2)" strokeWidth="3"/>
                    </svg>
                    <div style={{position:'absolute', bottom:'20px', right:'20px', background:'#fff', padding:'5px 10px', borderRadius:'8px', fontSize:'0.8rem', fontWeight:700, boxShadow:'0 5px 15px rgba(0,0,0,0.05)'}}>REAL-TIME</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ml-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="ml-desc" style={{marginBottom: 0}}>
                The world isn't static, and your models shouldn't be either. Oxavyn designs real-time machine learning pipelines that can ingest live data, update predictions instantly, and automatically retrain when data shifts. With built-in model monitoring and alerting, you always know how your systems are performing in the wild.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07: AI + ML | 590-690vh */}
        <section id="ai-ml" style={{flexDirection: 'column'}}>
          <div className="ml-center animate-on-scroll">
            <span className="ml-eyebrow">INTELLIGENT SYSTEMS</span>
            <h2 className="ml-heading" style={{marginBottom: 0}}>
              Machine Learning Meets<br/>
              <span className="ml-gradient-text">Generative Intelligence.</span>
            </h2>
          </div>
          
          <div className="ml-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
            <div className="ml-fusion-visual">
              <div className="fusion-sphere" style={{top: '5%', left: '15%', borderColor: 'var(--ml-accent-1)'}}>MACHINE LEARNING</div>
              <div className="fusion-sphere" style={{top: '5%', right: '15%', borderColor: 'var(--ml-accent-2)'}}>GENERATIVE AI</div>
              <div className="fusion-sphere" style={{bottom: '5%', left: '50%', transform: 'translateX(-50%)', borderColor: 'var(--ml-accent-3)'}}>AI AGENTS</div>
              
              <div className="ml-glass-card" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', zIndex: 10, background:'rgba(255,255,255,0.95)', padding:'15px 30px', borderRadius:'30px', color:'var(--ml-accent-1)'}}>
                INTELLIGENT SYSTEM
              </div>
              
              <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 0}}>
                <path d="M 250 150 Q 450 150, 450 250" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="3" strokeDasharray="5 5"/>
                <path d="M 650 150 Q 450 150, 450 250" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="3" strokeDasharray="5 5"/>
                <path d="M 450 350 Q 450 250, 450 250" fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth="3" strokeDasharray="5 5"/>
              </svg>
            </div>
          </div>
        </section>

        {/* SECTION 08: TRUST & SCALE | 690-760vh */}
        <section id="trust-scale">
          <div className="ml-split visual-left">
            <div className="ml-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <h2 className="ml-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Intelligence You Can<br/>
                <span className="ml-gradient-text">Build Your Business On.</span>
              </h2>
            </div>
            
            <div className="ml-visual animate-on-scroll">
              <div className="ml-trust-visual">
                <div className="trust-shield">
                  <div style={{width:'120px', height:'120px', borderRadius:'50%', background:'#fff', boxShadow:'0 20px 40px rgba(59,130,246,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, color:'var(--ml-text-primary)'}}>MODEL</div>
                  
                  <div className="ml-glass-card" style={{position:'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)'}}>🛡️ SECURITY</div>
                  <div className="ml-glass-card" style={{position:'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)'}}>🔒 PRIVACY</div>
                  <div className="ml-glass-card" style={{position:'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%)'}}>📈 SCALABILITY</div>
                  <div className="ml-glass-card" style={{position:'absolute', top: '50%', right: '-40px', transform: 'translateY(-50%)'}}>⚙️ RELIABILITY</div>
                </div>
              </div>
            </div>
            
            <div className="ml-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="ml-desc" style={{marginBottom: 0}}>
                A model that works perfectly in a notebook is useless if it fails in production. Oxavyn engineers machine learning systems with enterprise-grade architecture. We prioritize data privacy, rigorous security standards, and high-availability cloud infrastructure so your AI systems can scale securely as your business grows.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 09: FINAL CTA | 760-800vh */}
        <section id="cta" style={{minHeight: '40vh', paddingBottom: '6rem', flexDirection: 'column'}}>
          <div className="ml-cta-container animate-on-scroll">
            <span className="ml-eyebrow">BUILD WITH MACHINE LEARNING</span>
            <h2 className="ml-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '1.5rem'}}>
              Turn Your Data<br/>
              Into an <span className="ml-gradient-text">Intelligent Advantage.</span>
            </h2>
            <p className="ml-desc" style={{margin: '0 auto 3rem', maxWidth: '800px'}}>
              Whether you need predictive analytics, intelligent recommendations, forecasting, anomaly detection, or a complete machine learning platform, Oxavyn combines data engineering, model development, product design, and scalable infrastructure to turn complex information into practical intelligence.
            </p>
            <div className="ml-btn-group" style={{justifyContent: 'center', marginBottom: '3rem'}}>
              <a href="/contact" className="ml-btn ml-btn-primary">Start Your ML Project &rarr;</a>
              <a href="/contact" className="ml-btn ml-btn-secondary">Talk to Oxavyn</a>
            </div>
            
            <div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)', margin: '2rem 0 3rem'}}></div>
            
            <div style={{position: 'relative', width: '100px', height: '100px', margin: '0 auto'}}>
              <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', borderRadius:'50%', background:'var(--ml-accent-1)', filter:'blur(40px)', opacity:0.3}}></div>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="var(--ml-accent-1)" strokeWidth="2">
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                <path d="M50 20 L50 80 M20 50 L80 50 M30 30 L70 70 M30 70 L70 30" stroke="rgba(59,130,246,0.4)" />
                <circle cx="50" cy="50" r="10" fill="#fff" />
              </svg>
            </div>
            
            <p style={{fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--ml-text-secondary)', marginTop: '2rem', textTransform: 'uppercase'}}>
              INTELLIGENCE, ENGINEERED FOR WHAT'S NEXT.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
