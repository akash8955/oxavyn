"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import './WaDev.css';

export default function WorkflowAutomation() {
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
        <title>Workflow Automation | Oxavyn</title>
        <meta name="description" content="Oxavyn connects your tools, systems, people, and business processes into intelligent workflows." />
      </Head>

      <main className="wa-page">
        {/* SECTION 01: HERO | 0-100vh */}
        <section id="hero" style={{minHeight: '100vh', padding: '12rem 5% 6rem'}}>
          <div className="wa-split visual-right">
            <div className="wa-text-header animate-on-scroll">
              <span className="wa-eyebrow">WORKFLOW AUTOMATION</span>
              <h1 className="wa-heading">
                Workflows That<br/>
                <span className="wa-gradient-text">Run Themselves.</span>
              </h1>
            </div>
            
            <div className="wa-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="wa-hero-visual">
                
                {/* Intense Background Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'400px', height:'400px', background:'var(--wa-accent-cyan)', filter:'blur(150px)', opacity:0.3, animation:'wa-pulse-energy 6s infinite alternate', zIndex: -2}}></div>

                {/* Main 3D Automation Workflow */}
                <div style={{display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', zIndex: 10}}>
                  
                  {/* Nodes */}
                  <div className="wa-node trigger" style={{transform: 'translateX(-50px) rotate(-5deg)', animation: 'wa-float-slow 5s infinite'}}>
                    <span style={{fontSize:'1.2rem'}}>⚡</span> FORM SUBMITTED
                  </div>
                  
                  <div className="wa-node process" style={{transform: 'translateX(30px) rotate(3deg)', animation: 'wa-float-slow 6s infinite reverse'}}>
                    <span style={{fontSize:'1.2rem'}}>🔄</span> CRM UPDATED
                  </div>
                  
                  <div className="wa-node ai" style={{transform: 'translateX(-20px) rotate(-2deg)', animation: 'wa-float-slow 7s infinite'}}>
                    <span style={{fontSize:'1.2rem'}}>🧠</span> AI CLASSIFICATION
                  </div>
                  
                  <div className="wa-node action" style={{transform: 'translateX(40px) rotate(4deg)', animation: 'wa-float-slow 5.5s infinite reverse'}}>
                    <span style={{fontSize:'1.2rem'}}>✉️</span> EMAIL SENT
                  </div>
                  
                  <div className="wa-node success" style={{transform: 'translateX(0) rotate(0)', animation: 'wa-node-activate 8s infinite'}}>
                    <span style={{fontSize:'1.2rem'}}>✅</span> TEAM NOTIFIED
                  </div>
                </div>

                {/* Connecting Energy Lines */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 1}}>
                  <path d="M 400 150 Q 500 200, 420 250 T 450 350 T 380 450 T 400 550" fill="none" stroke="rgba(0,229,255,0.4)" strokeWidth="3" strokeDasharray="5 5" style={{animation: 'wa-line-flow 4s linear infinite'}}/>
                  <path d="M 400 150 Q 500 200, 420 250 T 450 350 T 380 450 T 400 550" fill="none" stroke="rgba(138,43,226,0.6)" strokeWidth="2">
                    <animate attributeName="stroke-dasharray" values="0, 1000; 1000, 0" dur="4s" repeatCount="indefinite" />
                  </path>
                </svg>

              </div>
            </div>
            
            <div className="wa-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="wa-desc">
                Oxavyn connects your tools, systems, people, and business processes into intelligent workflows that reduce repetitive work, improve efficiency, and keep your operations moving automatically.
              </p>
              <div className="wa-btn-group">
                <a href="#cta" className="wa-btn wa-btn-primary">Automate Your Workflow &rarr;</a>
                <a href="#explore" className="wa-btn wa-btn-secondary">Explore Automation</a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: THE AUTOMATION ENGINE | 100-200vh */}
        <section id="explore">
          <div className="wa-split visual-left">
            <div className="wa-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <span className="wa-eyebrow">AUTOMATION ENGINE</span>
              <h2 className="wa-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Connect Everything.<br/>
                <span className="wa-gradient-text">Automate Anything.</span>
              </h2>
            </div>
            
            <div className="wa-visual animate-on-scroll">
              <div className="wa-engine-visual">
                
                {/* Central Core */}
                <div className="wa-core">OXAVYN<br/>AUTOMATION<br/>CORE</div>
                
                {/* Orbiting Applications */}
                <div className="wa-node" style={{position:'absolute', top:'10%', left:'15%', animation:'wa-float-slow 6s infinite'}}>CRM</div>
                <div className="wa-node" style={{position:'absolute', top:'5%', right:'20%', animation:'wa-float-slow 7s infinite reverse'}}>ERP</div>
                <div className="wa-node" style={{position:'absolute', bottom:'10%', left:'20%', animation:'wa-float-slow 5s infinite'}}>SLACK</div>
                <div className="wa-node" style={{position:'absolute', bottom:'15%', right:'15%', animation:'wa-float-slow 8s infinite reverse'}}>EMAIL</div>
                <div className="wa-node" style={{position:'absolute', top:'45%', left:'5%', animation:'wa-float-slow 6.5s infinite'}}>DATABASE</div>
                <div className="wa-node" style={{position:'absolute', top:'40%', right:'5%', animation:'wa-float-slow 5.5s infinite reverse'}}>PAYMENTS</div>

                {/* Particle Connections */}
                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: -1}}>
                  <line x1="50%" y1="50%" x2="25%" y2="15%" stroke="rgba(0,229,255,0.3)" strokeWidth="2" />
                  <circle cx="25%" cy="15%" r="3" fill="var(--wa-accent-cyan)">
                    <animate attributeName="cx" values="25%; 50%" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="15%; 50%" dur="2s" repeatCount="indefinite" />
                  </circle>

                  <line x1="50%" y1="50%" x2="80%" y2="10%" stroke="rgba(138,43,226,0.3)" strokeWidth="2" />
                  <circle cx="80%" cy="10%" r="3" fill="var(--wa-accent-violet)">
                    <animate attributeName="cx" values="80%; 50%" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="10%; 50%" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  
                  <line x1="50%" y1="50%" x2="25%" y2="85%" stroke="rgba(0,255,208,0.3)" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgba(0,123,255,0.3)" strokeWidth="2" />
                </svg>
                
              </div>
            </div>
            
            <div className="wa-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="wa-desc" style={{marginBottom: 0}}>
                Modern businesses rely on dozens of tools and systems. Oxavyn connects those systems into intelligent workflows so information can move automatically between the right people, platforms, and processes without unnecessary manual effort.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 03: TRIGGER -> ACTION | 200-300vh */}
        <section id="sequence" style={{flexDirection: 'column'}}>
          <div className="wa-center animate-on-scroll">
            <h2 className="wa-heading" style={{marginBottom: 0}}>
              One Trigger.<br/>
              <span className="wa-gradient-text">An Entire Workflow.</span>
            </h2>
          </div>
          
          <div className="wa-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="wa-sequence-visual">
              
              {/* Left: Trigger */}
              <div style={{display:'flex', flexDirection:'column', gap:'20px', zIndex:10}}>
                <div className="wa-node trigger" style={{transform:'scale(1.1)', boxShadow:'0 0 30px rgba(0,229,255,0.4)'}}>⚡ FORM SUBMIT</div>
              </div>
              
              {/* Center: Engine */}
              <div className="wa-core" style={{width:'180px', height:'180px', borderRadius:'50%', background:'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,248,255,0.8))'}}>
                AUTOMATION<br/>ENGINE
              </div>
              
              {/* Right: Actions */}
              <div style={{display:'flex', flexDirection:'column', gap:'30px', zIndex:10}}>
                <div className="wa-node action">CREATE CRM RECORD</div>
                <div className="wa-node action">SEND EMAIL</div>
                <div className="wa-node action">NOTIFY SALES</div>
                <div className="wa-node success">CREATE TASK</div>
              </div>

              {/* Connections */}
              <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 1}}>
                <path d="M 200 250 L 460 250" fill="none" stroke="var(--wa-accent-cyan)" strokeWidth="3" strokeDasharray="5 5" style={{animation: 'wa-line-flow 2s linear infinite'}}/>
                <path d="M 640 250 Q 750 250, 850 110" fill="none" stroke="rgba(0,123,255,0.4)" strokeWidth="2" />
                <path d="M 640 250 Q 750 250, 850 200" fill="none" stroke="rgba(0,123,255,0.4)" strokeWidth="2" />
                <path d="M 640 250 Q 750 250, 850 290" fill="none" stroke="rgba(0,123,255,0.4)" strokeWidth="2" />
                <path d="M 640 250 Q 750 250, 850 380" fill="none" stroke="rgba(0,123,255,0.4)" strokeWidth="2" />
                
                {/* Active pulse traveling */}
                <circle cx="200" cy="250" r="5" fill="var(--wa-accent-cyan)">
                  <animate attributeName="cx" values="200; 460; 460" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>

            </div>
          </div>
        </section>

        {/* SECTION 04: BUSINESS PROCESS AUTOMATION | 300-400vh */}
        <section id="bpa" style={{flexDirection: 'column', padding: '0 5%'}}>
          <div className="wa-container">
            <div className="wa-center animate-on-scroll">
              <span className="wa-eyebrow">BUSINESS PROCESS AUTOMATION</span>
              <h2 className="wa-heading" style={{marginBottom: 0}}>
                Replace Repetition<br/>
                <span className="wa-gradient-text">With Intelligent Flow.</span>
              </h2>
            </div>
            
            <div className="wa-visual animate-on-scroll" style={{transitionDelay: '0.1s', marginTop: '3rem'}}>
              <div className="wa-bpa-visual">
                
                <div className="wa-mini-flow">
                  <div style={{fontWeight:800, color:'var(--wa-accent-violet)', width:'100px'}}>SALES</div>
                  <div className="wa-node">Lead</div><div style={{color:'var(--wa-accent-cyan)'}}>→</div>
                  <div className="wa-node">CRM</div><div style={{color:'var(--wa-accent-cyan)'}}>→</div>
                  <div className="wa-node">Alert Team</div><div style={{color:'var(--wa-accent-cyan)'}}>→</div>
                  <div className="wa-node success">Follow-up</div>
                </div>
                
                <div className="wa-mini-flow">
                  <div style={{fontWeight:800, color:'var(--wa-accent-azure)', width:'100px'}}>HR</div>
                  <div className="wa-node">Apply</div><div style={{color:'var(--wa-accent-cyan)'}}>→</div>
                  <div className="wa-node">Screening</div><div style={{color:'var(--wa-accent-cyan)'}}>→</div>
                  <div className="wa-node">Assessment</div><div style={{color:'var(--wa-accent-cyan)'}}>→</div>
                  <div className="wa-node success">Interview</div>
                </div>
                
                <div className="wa-mini-flow">
                  <div style={{fontWeight:800, color:'var(--wa-accent-cyan)', width:'100px'}}>FINANCE</div>
                  <div className="wa-node">Invoice</div><div style={{color:'var(--wa-accent-cyan)'}}>→</div>
                  <div className="wa-node">Validation</div><div style={{color:'var(--wa-accent-cyan)'}}>→</div>
                  <div className="wa-node">Approval</div><div style={{color:'var(--wa-accent-cyan)'}}>→</div>
                  <div className="wa-node success">Payment</div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: AI WORKFLOW AUTOMATION | 400-500vh */}
        <section id="ai-automation">
          <div className="wa-split visual-right">
            <div className="wa-text-header animate-on-scroll">
              <span className="wa-eyebrow">AI-POWERED AUTOMATION</span>
              <h2 className="wa-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Automation That<br/>
                <span className="wa-gradient-text">Can Think Beyond Rules.</span>
              </h2>
            </div>
            
            <div className="wa-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="wa-ai-visual">
                
                {/* Background Glow */}
                <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'400px', height:'400px', background:'var(--wa-accent-purple)', filter:'blur(120px)', opacity:0.3, zIndex: -2}}></div>

                {/* AI Core */}
                <div className="wa-core" style={{background:'linear-gradient(135deg, rgba(255,255,255,1), rgba(245,240,255,0.9))', borderColor:'var(--wa-accent-purple)', boxShadow:'0 20px 50px rgba(178,0,255,0.3)', width:'160px', height:'160px', borderRadius:'30px', transform:'rotate(45deg)'}}>
                  <div style={{transform:'rotate(-45deg)'}}>OXAVYN<br/>AI CORE</div>
                </div>
                
                {/* Decision Cards */}
                <div className="wa-node ai" style={{position:'absolute', top:'15%', left:'20%', animation:'wa-float-slow 5s infinite'}}>CLASSIFY</div>
                <div className="wa-node ai" style={{position:'absolute', bottom:'15%', left:'20%', animation:'wa-float-slow 6s infinite reverse'}}>SUMMARIZE</div>
                <div className="wa-node ai" style={{position:'absolute', top:'15%', right:'20%', animation:'wa-float-slow 7s infinite'}}>PREDICT</div>
                <div className="wa-node ai" style={{position:'absolute', bottom:'15%', right:'20%', animation:'wa-float-slow 5.5s infinite reverse'}}>GENERATE</div>

              </div>
            </div>
            
            <div className="wa-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="wa-desc" style={{marginBottom: 0}}>
                Create a spectacular futuristic AI automation environment where data doesn't just route, it gets understood. AI nodes classify incoming messages, generate responses, and make intelligent routing decisions without manual rules.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 06: NO-CODE / LOW-CODE FLOW | 500-590vh */}
        <section id="builder">
          <div className="wa-split visual-left">
            <div className="wa-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <h2 className="wa-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Powerful Automation.<br/>
                <span className="wa-gradient-text">Without the Complexity.</span>
              </h2>
            </div>
            
            <div className="wa-visual animate-on-scroll">
              <div className="wa-builder-visual">
                
                {/* Floating Builder Canvas */}
                <div className="wa-glass-panel" style={{width:'80%', height:'80%', position:'relative', zIndex:5, display:'flex', padding:'40px', transform:'rotateX(10deg) rotateY(15deg)', boxShadow:'-30px 40px 80px rgba(0,0,0,0.1)'}}>
                  
                  {/* Sidebar */}
                  <div style={{width:'150px', borderRight:'1px solid rgba(0,0,0,0.1)', display:'flex', flexDirection:'column', gap:'15px', paddingRight:'20px'}}>
                    <div style={{fontSize:'0.7rem', fontWeight:800, color:'var(--wa-text-secondary)'}}>NODES</div>
                    <div className="wa-node" style={{padding:'8px 15px', fontSize:'0.7rem'}}>TRIGGER</div>
                    <div className="wa-node" style={{padding:'8px 15px', fontSize:'0.7rem'}}>CONDITION</div>
                    <div className="wa-node" style={{padding:'8px 15px', fontSize:'0.7rem'}}>AI</div>
                    <div className="wa-node" style={{padding:'8px 15px', fontSize:'0.7rem'}}>ACTION</div>
                  </div>
                  
                  {/* Canvas Area */}
                  <div style={{flex:1, position:'relative'}}>
                    <div className="wa-node trigger" style={{position:'absolute', top:'40px', left:'60px'}}>WEBHOOK</div>
                    <div className="wa-node process" style={{position:'absolute', top:'120px', left:'180px'}}>FORMAT DATA</div>
                    <div className="wa-node action" style={{position:'absolute', top:'200px', left:'300px'}}>UPDATE DB</div>
                    
                    <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex:-1}}>
                      <path d="M 170 60 Q 170 140, 180 140" fill="none" stroke="var(--wa-accent-cyan)" strokeWidth="2"/>
                      <path d="M 290 140 Q 290 220, 300 220" fill="none" stroke="var(--wa-accent-violet)" strokeWidth="2"/>
                    </svg>
                  </div>
                  
                  {/* Status Indicator */}
                  <div style={{position:'absolute', top:'20px', right:'20px', background:'rgba(16, 185, 129, 0.1)', color:'var(--wa-accent-success)', padding:'5px 10px', borderRadius:'20px', fontSize:'0.7rem', fontWeight:800}}>
                    ● RUNNING
                  </div>
                </div>

              </div>
            </div>
            
            <div className="wa-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
              <p className="wa-desc" style={{marginBottom: 0}}>
                A premium floating workflow builder interface. Drag and drop triggers, AI nodes, and actions into a smart canvas that automatically connects and validates your business logic in real time.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07: REAL-TIME AUTOMATION | 590-680vh */}
        <section id="realtime" style={{flexDirection: 'column'}}>
          <div className="wa-center animate-on-scroll">
            <span className="wa-eyebrow">AUTOMATION IN MOTION</span>
            <h2 className="wa-heading" style={{marginBottom: 0}}>
              See Your Business<br/>
              <span className="wa-gradient-text">Run in Real Time.</span>
            </h2>
          </div>
          
          <div className="wa-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="wa-dashboard-visual">
              
              <div className="wa-kpi-card">
                <div style={{fontSize:'3rem', fontWeight:800, color:'var(--wa-accent-cyan)'}}>1,284</div>
                <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--wa-text-secondary)', letterSpacing:'0.1em'}}>WORKFLOWS RUNNING</div>
              </div>
              
              <div className="wa-kpi-card">
                <div style={{fontSize:'3rem', fontWeight:800, color:'var(--wa-accent-success)'}}>98.7%</div>
                <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--wa-text-secondary)', letterSpacing:'0.1em'}}>SUCCESS RATE</div>
              </div>
              
              <div className="wa-kpi-card">
                <div style={{fontSize:'3rem', fontWeight:800, color:'var(--wa-accent-violet)'}}>12,840</div>
                <div style={{fontSize:'0.8rem', fontWeight:800, color:'var(--wa-text-secondary)', letterSpacing:'0.1em'}}>TASKS AUTOMATED</div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 08: AUTOMATION INTELLIGENCE | 680-770vh */}
        <section id="intelligence">
          <div className="wa-split visual-right">
            <div className="wa-text-header animate-on-scroll">
              <h2 className="wa-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
                Every Workflow<br/>
                <span className="wa-gradient-text">Gets Smarter With Time.</span>
              </h2>
            </div>
            
            <div className="wa-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
              <div className="wa-intel-visual">
                
                {/* Optimization Loop */}
                <div className="wa-core" style={{borderColor:'var(--wa-accent-azure)', boxShadow:'0 20px 50px rgba(0,123,255,0.3)'}}>OPTIMIZE</div>
                
                <div className="wa-node" style={{position:'absolute', top:'10%', animation:'wa-float-slow 5s infinite'}}>
                  <span style={{color:'var(--wa-accent-azure)'}}>✨</span> Route high-value leads faster.
                </div>
                
                <div className="wa-node" style={{position:'absolute', bottom:'10%', animation:'wa-float-slow 6s infinite reverse'}}>
                  <span style={{color:'var(--wa-accent-azure)'}}>✨</span> Automate repetitive validation.
                </div>

                <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: -1}}>
                  <circle cx="50%" cy="50%" r="150" fill="none" stroke="rgba(0,123,255,0.2)" strokeWidth="2" strokeDasharray="10 10" style={{animation:'wa-float-slow 10s infinite linear'}}/>
                </svg>

              </div>
            </div>
            
            <div className="wa-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
              <p className="wa-desc" style={{marginBottom: 0}}>
                Intelligent optimization environments analyze workflow performance to suggest improvements. Oxavyn AI automatically recommends reducing approval steps, rerouting data, or catching bottlenecks before they slow down your business.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 09: CASE STUDIES | 770-850vh */}
        <section id="cases" style={{flexDirection: 'column'}}>
          <div className="wa-center animate-on-scroll">
            <span className="wa-eyebrow">AUTOMATION IN ACTION</span>
            <h2 className="wa-heading" style={{marginBottom: 0}}>
              From Manual Work<br/>
              <span className="wa-gradient-text">to Intelligent Operations.</span>
            </h2>
          </div>
          
          <div className="wa-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="wa-case-visual">
              
              <div className="wa-glass-panel wa-case-card">
                <div style={{fontSize:'0.8rem', fontWeight:800, letterSpacing:'0.1em', marginBottom:'20px'}}>LEAD AUTOMATION</div>
                <div style={{display:'flex', flexDirection:'column', gap:'10px', flex:1, justifyContent:'center'}}>
                  <div className="wa-node trigger" style={{padding:'5px 10px'}}>Form</div>
                  <div className="wa-node ai" style={{padding:'5px 10px'}}>AI Qualify</div>
                  <div className="wa-node success" style={{padding:'5px 10px'}}>Sales Alert</div>
                </div>
              </div>
              
              <div className="wa-glass-panel wa-case-card">
                <div style={{fontSize:'0.8rem', fontWeight:800, letterSpacing:'0.1em', marginBottom:'20px'}}>CUSTOMER SUPPORT</div>
                <div style={{display:'flex', flexDirection:'column', gap:'10px', flex:1, justifyContent:'center'}}>
                  <div className="wa-node trigger" style={{padding:'5px 10px'}}>Message</div>
                  <div className="wa-node ai" style={{padding:'5px 10px'}}>AI Classify</div>
                  <div className="wa-node success" style={{padding:'5px 10px'}}>Auto-Response</div>
                </div>
              </div>
              
              <div className="wa-glass-panel wa-case-card">
                <div style={{fontSize:'0.8rem', fontWeight:800, letterSpacing:'0.1em', marginBottom:'20px'}}>OPERATIONS</div>
                <div style={{display:'flex', flexDirection:'column', gap:'10px', flex:1, justifyContent:'center'}}>
                  <div className="wa-node trigger" style={{padding:'5px 10px'}}>Data Sync</div>
                  <div className="wa-node process" style={{padding:'5px 10px'}}>Validation</div>
                  <div className="wa-node success" style={{padding:'5px 10px'}}>Execution</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA | 850-900vh */}
        <section id="cta" style={{minHeight: '40vh', paddingBottom: '6rem', flexDirection: 'column'}}>
          <div className="wa-cta-container animate-on-scroll">
            <span className="wa-eyebrow">AUTOMATE WHAT'S NEXT</span>
            <h2 className="wa-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '1.5rem'}}>
              Stop Managing Repetitive Work.<br/>
              <span className="wa-gradient-text">Start Building Intelligent Workflows.</span>
            </h2>
            <p className="wa-desc" style={{margin: '0 auto 3rem', maxWidth: '800px'}}>
              Oxavyn combines workflow automation, APIs, AI, business logic, and modern engineering to create connected systems that work continuously in the background while your team focuses on what matters.
            </p>
            <div className="wa-btn-group" style={{justifyContent: 'center', marginBottom: '3rem'}}>
              <a href="/contact" className="wa-btn wa-btn-primary">Automate Your Business &rarr;</a>
              <a href="/contact" className="wa-btn wa-btn-secondary">Talk to Oxavyn</a>
            </div>
            
            <div style={{height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)', margin: '2rem 0 3rem'}}></div>
            
            {/* Giant Floating Automation Core */}
            <div style={{position: 'relative', width: '150px', height: '150px', margin: '0 auto'}}>
              <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', borderRadius:'50%', background:'var(--wa-accent-cyan)', filter:'blur(60px)', opacity:0.5, animation:'wa-pulse-energy 4s infinite alternate'}}></div>
              <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="var(--wa-accent-cyan)" strokeWidth="2">
                <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="rgba(138,43,226,0.6)" fill="rgba(255,255,255,0.8)" style={{animation: 'wa-float-slow 6s infinite'}}/>
                <circle cx="50" cy="50" r="15" fill="var(--wa-accent-cyan)" filter="drop-shadow(0 0 10px var(--wa-accent-cyan))" />
              </svg>
            </div>
            
            <p style={{fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--wa-text-secondary)', marginTop: '2rem', textTransform: 'uppercase'}}>
              CONNECTED. AUTOMATED. INTELLIGENT.
            </p>
          </div>
        </section>
      </main>

    </>
  );
}
