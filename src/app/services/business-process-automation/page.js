"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import './BpaDev.css';

export default function BusinessProcessAutomation() {
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
        <title>Business Process Automation | Oxavyn</title>
        <meta name="description" content="Oxavyn connects people, systems, data, and business processes into intelligent automated workflows." />
      </Head>

      <main className="bpa-page">
        {/* SECTION 01: HERO | 0-100vh */}
        <section id="hero" style={{minHeight: '100vh', padding: '12rem 5% 6rem'}}>
          <div className="bpa-split visual-right">
            <div className="bpa-text-header animate-on-scroll">
              <span className="bpa-eyebrow">BUSINESS PROCESS AUTOMATION</span>
              <h1 className="bpa-heading">
                A Business That<br/>
                <span className="bpa-gradient-text">Moves Itself Forward.</span>
              </h1>
            </div>
            
            <div className="bpa-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="bpa-hero-visual">
                
                {/* Intense Background Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'450px', height:'450px', background:'var(--bpa-accent-purple)', filter:'blur(150px)', opacity:0.3, animation:'bpa-pulse-purple 6s infinite alternate', zIndex: -2}}></div>

                {/* 3D Main Corporate Building */}
                <div className="bpa-building bpa-main-building">
                  <div style={{position:'absolute', top:'20px', left:'20px', fontWeight:800, color:'var(--bpa-accent-purple)', letterSpacing:'0.2em', fontSize:'0.7rem'}}>OXAVYN HQ</div>
                  {/* Floating Departments connecting to building */}
                  <div className="bpa-node" style={{position:'absolute', top:'20%', left:'-100px', animation:'bpa-float-slow 5s infinite'}}>
                    <span style={{color:'var(--bpa-accent-cyan)'}}>●</span> SALES
                  </div>
                  <div className="bpa-node" style={{position:'absolute', top:'50%', right:'-120px', animation:'bpa-float-slow 6s infinite reverse'}}>
                    <span style={{color:'var(--bpa-accent-azure)'}}>●</span> FINANCE
                  </div>
                  <div className="bpa-node" style={{position:'absolute', bottom:'20%', left:'-80px', animation:'bpa-float-slow 5.5s infinite'}}>
                    <span style={{color:'var(--bpa-accent-violet)'}}>●</span> OPS
                  </div>

                  {/* Animated Data Streams to building */}
                  <svg width="400" height="400" style={{position:'absolute', top:'-25px', left:'-100px', zIndex: -1, pointerEvents:'none'}}>
                    <path d="M 50 120 Q 150 150, 180 180" fill="none" stroke="var(--bpa-accent-cyan)" strokeWidth="2" strokeDasharray="5 5">
                      <animate attributeName="stroke-dashoffset" values="100;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path d="M 320 220 Q 250 250, 180 250" fill="none" stroke="var(--bpa-accent-azure)" strokeWidth="2" strokeDasharray="5 5">
                      <animate attributeName="stroke-dashoffset" values="0;100" dur="3s" repeatCount="indefinite" />
                    </path>
                    <path d="M 70 300 Q 150 300, 150 250" fill="none" stroke="var(--bpa-accent-violet)" strokeWidth="2" strokeDasharray="5 5">
                      <animate attributeName="stroke-dashoffset" values="100;0" dur="2.5s" repeatCount="indefinite" />
                    </path>
                  </svg>
                </div>

              </div>
            </div>
            
            <div className="bpa-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="bpa-desc">
                Oxavyn connects people, systems, data, and business processes into intelligent automated workflows that reduce repetitive work, improve operational efficiency, and keep your organization moving.
              </p>
              <div className="bpa-btn-group">
                <a href="#cta" className="bpa-btn bpa-btn-primary">Automate Your Business &rarr;</a>
                <a href="#explore" className="bpa-btn bpa-btn-secondary">Explore Automation</a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: THE CONNECTED BUSINESS (Cutaway) | 100-200vh */}
        <section id="explore">
          <div className="bpa-split visual-left">
            <div className="bpa-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <h2 className="bpa-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Every Department.<br/>
                <span className="bpa-gradient-text">One Intelligent Flow.</span>
              </h2>
            </div>
            
            <div className="bpa-visual animate-on-scroll">
              <div className="bpa-cutaway-visual">
                
                {/* 3D Cutaway Building */}
                <div className="bpa-building bpa-cutaway-building">
                  {/* Floor 4: HR */}
                  <div className="bpa-floor">
                    <div style={{fontWeight:800, width:'60px', fontSize:'0.7rem', color:'var(--bpa-text-secondary)'}}>FL 04</div>
                    <div className="bpa-node" style={{flex:1, justifyContent:'center'}}>HUMAN RESOURCES</div>
                  </div>
                  {/* Floor 3: Finance */}
                  <div className="bpa-floor">
                    <div style={{fontWeight:800, width:'60px', fontSize:'0.7rem', color:'var(--bpa-text-secondary)'}}>FL 03</div>
                    <div className="bpa-node" style={{flex:1, justifyContent:'center'}}>FINANCE</div>
                  </div>
                  {/* Floor 2: Marketing */}
                  <div className="bpa-floor">
                    <div style={{fontWeight:800, width:'60px', fontSize:'0.7rem', color:'var(--bpa-text-secondary)'}}>FL 02</div>
                    <div className="bpa-node" style={{flex:1, justifyContent:'center'}}>MARKETING</div>
                  </div>
                  {/* Floor 1: Sales */}
                  <div className="bpa-floor">
                    <div style={{fontWeight:800, width:'60px', fontSize:'0.7rem', color:'var(--bpa-text-secondary)'}}>FL 01</div>
                    <div className="bpa-node" style={{flex:1, justifyContent:'center'}}>SALES</div>
                  </div>
                  {/* Floor 0: Customer Support */}
                  <div className="bpa-floor" style={{borderBottom:'none'}}>
                    <div style={{fontWeight:800, width:'60px', fontSize:'0.7rem', color:'var(--bpa-text-secondary)'}}>FL 00</div>
                    <div className="bpa-node" style={{flex:1, justifyContent:'center'}}>CUSTOMER SUPPORT</div>
                  </div>

                  {/* Vertical Data Elevator */}
                  <div style={{position:'absolute', right:'20px', top:'0', bottom:'0', width:'4px', background:'rgba(157,0,255,0.1)'}}>
                    <div style={{width:'4px', height:'50px', background:'var(--bpa-accent-purple)', borderRadius:'2px', animation:'bpa-data-flow-vertical 4s linear infinite'}}></div>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="bpa-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="bpa-desc" style={{marginBottom: 0}}>
                Create a cinematic cutaway view of a luxury corporate building. Information physically moves vertically through floors. A customer request on Floor 0 automatically routes data to Sales on Floor 1, triggers an invoice in Finance on Floor 3, and updates operations seamlessly.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03: AUTOMATED BUSINESS PROCESS | 200-300vh */}
        <section id="process" style={{flexDirection: 'column'}}>
          <div className="bpa-center animate-on-scroll">
            <span className="bpa-eyebrow">PROCESS AUTOMATION</span>
            <h2 className="bpa-heading" style={{marginBottom: 0}}>
              Turn Repetitive Work<br/>
              <span className="bpa-gradient-text">Into Intelligent Flow.</span>
            </h2>
          </div>
          
          <div className="bpa-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="bpa-process-visual">
              
              <div className="bpa-node" style={{color:'var(--bpa-accent-cyan)'}}>👤 EMPLOYEE RECEIVES FORM</div>
              <div style={{color:'var(--bpa-accent-cyan)'}}>→</div>
              
              <div className="bpa-node" style={{color:'var(--bpa-accent-purple)'}}>⚙️ DATA EXTRACTED</div>
              <div style={{color:'var(--bpa-accent-purple)'}}>→</div>
              
              <div className="bpa-node" style={{color:'var(--bpa-accent-azure)'}}>📊 CRM UPDATED</div>
              <div style={{color:'var(--bpa-accent-azure)'}}>→</div>
              
              <div className="bpa-node" style={{color:'var(--bpa-accent-violet)'}}>MANAGER APPROVES</div>
              <div style={{color:'var(--bpa-accent-violet)'}}>→</div>
              
              <div className="bpa-node" style={{color:'var(--bpa-accent-pink)'}}>✉️ CUSTOMER EMAILED</div>

              {/* Connecting Lines Desktop */}
              <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: -1}}>
                <line x1="5%" y1="50%" x2="95%" y2="50%" stroke="var(--bpa-accent-purple)" strokeWidth="2" strokeDasharray="10 10"/>
                {/* Active pulse */}
                <circle cx="5%" cy="50%" r="5" fill="var(--bpa-accent-cyan)">
                  <animate attributeName="cx" values="5%; 95%" dur="4s" repeatCount="indefinite" />
                </circle>
              </svg>

            </div>
          </div>
        </section>

        {/* SECTION 04: BUSINESS DEPARTMENTS | 300-400vh */}
        <section id="departments" style={{flexDirection: 'column', padding: '0 5%'}}>
          <div className="bpa-container">
            <div className="bpa-center animate-on-scroll">
              <h2 className="bpa-heading" style={{marginBottom: 0}}>
                Automation Across<br/>
                <span className="bpa-gradient-text">Your Entire Business.</span>
              </h2>
            </div>
            
            <div className="bpa-visual animate-on-scroll" style={{transitionDelay: '0.1s', marginTop: '3rem'}}>
              <div className="bpa-campus-visual">
                
                {/* Sales Building */}
                <div className="bpa-building bpa-mini-building">
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--bpa-accent-cyan)'}}>SALES</div>
                  <div style={{display:'flex', flexDirection:'column', gap:'8px', width:'100%'}}>
                    <div className="bpa-node" style={{padding:'5px 10px', fontSize:'0.65rem'}}>Lead Captured</div>
                    <div className="bpa-node" style={{padding:'5px 10px', fontSize:'0.65rem'}}>CRM Updated</div>
                    <div className="bpa-node" style={{padding:'5px 10px', fontSize:'0.65rem'}}>Follow-up Sent</div>
                  </div>
                </div>
                
                {/* HR Building */}
                <div className="bpa-building bpa-mini-building" style={{transform:'rotateY(10deg)'}}>
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--bpa-accent-violet)'}}>HUMAN RESOURCES</div>
                  <div style={{display:'flex', flexDirection:'column', gap:'8px', width:'100%'}}>
                    <div className="bpa-node" style={{padding:'5px 10px', fontSize:'0.65rem'}}>Application</div>
                    <div className="bpa-node" style={{padding:'5px 10px', fontSize:'0.65rem'}}>Screening</div>
                    <div className="bpa-node" style={{padding:'5px 10px', fontSize:'0.65rem'}}>Onboarding</div>
                  </div>
                </div>
                
                {/* Finance Building */}
                <div className="bpa-building bpa-mini-building">
                  <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--bpa-accent-azure)'}}>FINANCE</div>
                  <div style={{display:'flex', flexDirection:'column', gap:'8px', width:'100%'}}>
                    <div className="bpa-node" style={{padding:'5px 10px', fontSize:'0.65rem'}}>Invoice</div>
                    <div className="bpa-node" style={{padding:'5px 10px', fontSize:'0.65rem'}}>Approval</div>
                    <div className="bpa-node" style={{padding:'5px 10px', fontSize:'0.65rem'}}>Payment</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: AI BUSINESS AUTOMATION | 400-500vh */}
        <section id="ai-automation">
          <div className="bpa-split visual-right">
            <div className="bpa-text-header animate-on-scroll">
              <span className="bpa-eyebrow">AI-POWERED OPERATIONS</span>
              <h2 className="bpa-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                When Your Business<br/>
                <span className="bpa-gradient-text">Can Understand. Decide. Act.</span>
              </h2>
            </div>
            
            <div className="bpa-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="bpa-ai-visual">
                
                {/* Central AI Core */}
                <div style={{width:'180px', height:'180px', background:'linear-gradient(135deg, rgba(255,255,255,1), rgba(245,240,255,0.9))', border:'2px solid var(--bpa-accent-purple)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', fontWeight:800, fontSize:'0.9rem', boxShadow:'0 20px 50px rgba(157,0,255,0.3)', animation:'bpa-pulse-purple 4s infinite alternate', zIndex:10}}>
                  OXAVYN<br/>AI CORE
                </div>
                
                {/* Floating Recommendations */}
                <div className="bpa-node" style={{position:'absolute', top:'10%', left:'10%', animation:'bpa-float-slow 5s infinite', color:'var(--bpa-accent-cyan)'}}>
                  HIGH-VALUE LEAD DETECTED
                </div>
                
                <div className="bpa-node" style={{position:'absolute', bottom:'10%', right:'10%', animation:'bpa-float-slow 6s infinite reverse', color:'var(--bpa-accent-azure)'}}>
                  INVOICE READY FOR APPROVAL
                </div>
                
                <div className="bpa-node" style={{position:'absolute', top:'15%', right:'5%', animation:'bpa-float-slow 7s infinite', color:'var(--bpa-accent-pink)'}}>
                  CUSTOMER RISK DETECTED
                </div>

                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'400px', height:'400px', background:'var(--bpa-accent-purple)', filter:'blur(120px)', opacity:0.2, zIndex: -2}}></div>

              </div>
            </div>
            
            <div className="bpa-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="bpa-desc" style={{marginBottom: 0}}>
                An impressive futuristic AI command center inside the headquarters. The AI continuously observes data, understands intent, decides on the best action, and automatically triggers workflows across Sales, Finance, and Operations.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 06: CTA / THE AUTOMATED BUSINESS | 500-600vh */}
        <section id="cta" style={{minHeight: '60vh', paddingBottom: '6rem', flexDirection: 'column'}}>
          <div className="bpa-cta-container animate-on-scroll">
            <span className="bpa-eyebrow">BUILD THE AUTOMATED BUSINESS</span>
            <h2 className="bpa-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '1.5rem'}}>
              Your Business Has Momentum.<br/>
              <span className="bpa-gradient-text">Let's Make It Intelligent.</span>
            </h2>
            <p className="bpa-desc" style={{margin: '0 auto 3rem', maxWidth: '800px'}}>
              Oxavyn combines business process automation, AI, workflow engineering, APIs, CRM, data, and modern software to connect the systems behind your business and turn repetitive processes into intelligent operations.
            </p>
            <div className="bpa-btn-group" style={{justifyContent: 'center', marginBottom: '3rem'}}>
              <a href="/contact" className="bpa-btn bpa-btn-primary">Automate Your Business &rarr;</a>
              <a href="/contact" className="bpa-btn bpa-btn-secondary">Talk to Oxavyn</a>
            </div>
            
            <div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(157,0,255,0.3), transparent)', margin: '2rem 0 3rem'}}></div>
            
            {/* Final Cinematic City Network */}
            <div style={{position: 'relative', width: '100%', height: '200px', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'300px', height:'100px', background:'var(--bpa-accent-purple)', filter:'blur(80px)', opacity:0.4, animation:'bpa-pulse-purple 4s infinite alternate'}}></div>
              
              <div style={{display:'flex', gap:'40px', zIndex:10}}>
                <div className="bpa-building" style={{width:'80px', height:'120px', borderRadius:'10px'}}></div>
                <div className="bpa-building" style={{width:'100px', height:'160px', borderRadius:'10px', border:'2px solid var(--bpa-accent-cyan)'}}></div>
                <div className="bpa-building" style={{width:'80px', height:'140px', borderRadius:'10px'}}></div>
              </div>

              {/* Connecting Network Lines */}
              <svg width="300" height="100" style={{position:'absolute', top:'50px', zIndex: -1}}>
                <path d="M 40 50 Q 150 -20, 260 50" fill="none" stroke="var(--bpa-accent-cyan)" strokeWidth="2" strokeDasharray="5 5">
                   <animate attributeName="stroke-dashoffset" values="100;0" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M 40 50 L 260 50" fill="none" stroke="var(--bpa-accent-purple)" strokeWidth="2" />
              </svg>
            </div>
            
            <p style={{fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--bpa-text-secondary)', marginTop: '2rem', textTransform: 'uppercase'}}>
              CONNECTED. AUTOMATED. INTELLIGENT.
            </p>
          </div>
        </section>
      </main>

    </>
  );
}
