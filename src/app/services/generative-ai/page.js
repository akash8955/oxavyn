"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import './GenAiDev.css';

export default function GenerativeAiPage() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Generative AI | Oxavyn</title>
        <meta name="description" content="Oxavyn builds enterprise Generative AI that transforms how organizations create, reason, and operate." />
      </Head>

      <main className="genai-page">
      
      {/* SECTION 01: HERO | 0-100vh */}
      <section id="hero" style={{minHeight: '100vh', padding: '12rem 5% 6rem'}}>
        <div className="genai-split visual-right">
          <div className="genai-text-header animate-on-scroll">
            <span className="genai-eyebrow">GENERATIVE AI</span>
            <h1 className="genai-heading">
              Create Without Limits.<br/>
              <span className="genai-gradient-text">Powered by Intelligence.</span>
            </h1>
          </div>
          
          <div className="genai-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="genai-hero-visual">
              
              <div className="hero-ai-core">
                {/* Particle ring inner */}
                <div style={{position: 'absolute', width: '120%', height: '120%', borderRadius: '50%', border: '1px dashed rgba(139,92,246,0.5)', animation: 'genai-orbit 20s linear infinite'}}></div>
                {/* Neural net SVG */}
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="rgba(79,70,229,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="50" cy="50" r="40" stroke="url(#heroGrad)" />
                  <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M25 75 L75 25" stroke="rgba(236,72,153,0.3)"/>
                  <circle cx="50" cy="50" r="15" fill="rgba(139,92,246,0.1)"/>
                  <defs>
                    <linearGradient id="heroGrad" x1="0" y1="0" x2="100" y2="100">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating Outputs */}
              <div className="hero-glass-card" style={{top: '10%', left: '10%', animation: 'genai-float-slow 6s infinite reverse'}}>
                <span style={{fontSize:'1.2rem'}}>📝</span> TEXT
              </div>
              <div className="hero-glass-card" style={{bottom: '10%', right: '10%', animation: 'genai-float-fast 5s infinite'}}>
                <span style={{fontSize:'1.2rem'}}>🖼️</span> IMAGE
              </div>
              <div className="hero-glass-card" style={{top: '15%', right: '5%', animation: 'genai-float-slow 7s infinite'}}>
                <span style={{fontSize:'1.2rem'}}>💻</span> CODE
              </div>
              <div className="hero-glass-card" style={{bottom: '15%', left: '5%', animation: 'genai-float-fast 8s infinite reverse'}}>
                <span style={{fontSize:'1.2rem'}}>🎥</span> VIDEO
              </div>
              
              {/* Floating Devices */}
              <div className="hero-laptop-float">
                <div style={{height: '10px', width: '30px', background: '#e2e8f0', margin: '5px auto', borderRadius: '5px'}}></div>
                <div style={{margin: '10px', height: '120px', background: 'linear-gradient(180deg, #f8fafc, #e0e7ff)', borderRadius: '8px', border: '1px solid #cbd5e1'}}></div>
              </div>
              
              <div className="hero-phone-float">
                <div style={{height: '4px', width: '30px', background: '#cbd5e1', margin: '8px auto', borderRadius: '4px'}}></div>
                <div style={{margin: '5px', height: '140px', background: 'linear-gradient(180deg, #f8fafc, #fce7f3)', borderRadius: '12px', border: '1px solid #cbd5e1'}}></div>
              </div>

            </div>
          </div>
          
          <div className="genai-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
            <p className="genai-desc">
              Oxavyn builds generative AI experiences that transform ideas, information, and workflows into intelligent digital products. From AI-powered content and conversational experiences to intelligent applications and automated workflows, we combine advanced AI capabilities with thoughtful product design and scalable engineering.
            </p>
            <div className="genai-btn-group">
              <a href="#cta" className="genai-btn genai-btn-primary">Build With AI &rarr;</a>
              <a href="#what-is-genai" className="genai-btn genai-btn-secondary">Explore Generative AI</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: WHAT IS GENERATIVE AI? | 100-190vh */}
      <section id="what-is-genai">
        <div className="genai-split visual-left">
          <div className="genai-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <span className="genai-eyebrow">THE NEW CREATIVE LAYER</span>
            <h2 className="genai-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
              From Human Ideas<br/>
              to <span className="genai-gradient-text">Intelligent Creation.</span>
            </h2>
          </div>
          
          <div className="genai-visual animate-on-scroll">
            <div className="transformation-visual">
              <div className="trans-node">HUMAN IDEA</div>
              <div className="trans-arrow"></div>
              <div className="trans-node ai" style={{padding: '30px 20px', fontSize: '1.2rem'}}>GENERATIVE AI</div>
              <div className="trans-arrow"></div>
              <div className="trans-node" style={{color: 'var(--genai-pink)'}}>INTELLIGENT OUTPUT</div>
              
              {/* Floating icons around central core */}
              <div style={{position: 'absolute', top: '50%', left: '10%', fontSize: '2rem', filter: 'drop-shadow(0 10px 20px rgba(139,92,246,0.2))', animation: 'genai-float-slow 5s infinite'}}>🎵</div>
              <div style={{position: 'absolute', top: '40%', right: '10%', fontSize: '2rem', filter: 'drop-shadow(0 10px 20px rgba(236,72,153,0.2))', animation: 'genai-float-fast 6s infinite reverse'}}>📊</div>
            </div>
          </div>
          
          <div className="genai-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
            <p className="genai-desc" style={{marginBottom: 0}}>
              Generative AI is changing how businesses create, communicate, analyze, and operate. Instead of simply processing information, modern AI systems can generate new content, summarize complex information, understand natural language, create visual concepts, write code, and assist people with everyday decisions. At Oxavyn, we turn these capabilities into practical products and workflows designed around real business needs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03: GENERATIVE AI CAPABILITIES | 190-290vh */}
      <section id="capabilities" style={{flexDirection: 'column'}}>
        <div className="genai-center animate-on-scroll">
          <h2 className="genai-heading" style={{marginBottom: 0}}>
            One Intelligence.<br/>
            <span className="genai-gradient-text">Infinite Possibilities.</span>
          </h2>
        </div>
        
        <div className="genai-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
          <div className="capabilities-visual">
            <div className="cap-core">OXAVYN AI</div>
          
          <div className="cap-module" style={{top: '0', left: '50%', transform: 'translateX(-50%)'}}>
            <div className="cap-icon">📝</div>
            <h4>01 — AI CONTENT</h4>
            <p>Generate intelligent text, documents, reports and business content.</p>
          </div>
          
          <div className="cap-module" style={{top: '20%', right: '0'}}>
            <div className="cap-icon">🖼️</div>
            <h4>02 — AI IMAGE</h4>
            <p>Create visual concepts, product imagery and creative assets.</p>
          </div>
          
          <div className="cap-module" style={{bottom: '20%', right: '0'}}>
            <div className="cap-icon">💻</div>
            <h4>03 — AI CODE</h4>
            <p>Accelerate development with intelligent coding assistance.</p>
          </div>
          
          <div className="cap-module" style={{bottom: '0', left: '50%', transform: 'translateX(-50%)'}}>
            <div className="cap-icon">🎙️</div>
            <h4>04 — AI VOICE</h4>
            <p>Build natural conversational and voice-powered experiences.</p>
          </div>
          
          <div className="cap-module" style={{bottom: '20%', left: '0'}}>
            <div className="cap-icon">📊</div>
            <h4>05 — AI ANALYTICS</h4>
            <p>Transform complex information into understandable insights.</p>
          </div>
          
          <div className="cap-module" style={{top: '20%', left: '0'}}>
            <div className="cap-icon">⚙️</div>
            <h4>06 — AI AUTOMATION</h4>
            <p>Connect intelligence with real-world business workflows.</p>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 04: AI PRODUCT EXPERIENCE | 290-390vh */}
      <section id="product-experience" style={{flexDirection: 'column'}}>
        <div className="genai-center animate-on-scroll">
          <h2 className="genai-heading" style={{marginBottom: '0'}}>
            Generative AI, Designed for Humans.
          </h2>
        </div>
        
        <div className="genai-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
          <div className="prod-exp-visual">
            <div className="prod-exp-app">
            <div className="prod-exp-header">
              <div style={{display: 'flex', gap: '8px'}}>
                <div style={{width:'12px', height:'12px', borderRadius:'50%', background:'#fecdd3'}}></div>
                <div style={{width:'12px', height:'12px', borderRadius:'50%', background:'#fde68a'}}></div>
                <div style={{width:'12px', height:'12px', borderRadius:'50%', background:'#bbf7d0'}}></div>
              </div>
            </div>
            <div className="prod-exp-body">
              <div className="prod-sidebar"></div>
              <div className="prod-main">
                <div className="prod-chat">
                  <div style={{background:'#e0e7ff', padding:'15px', borderRadius:'12px', width:'70%', marginBottom:'15px', borderBottomLeftRadius: 0}}>
                    Analyze the latest user feedback and generate a summary report.
                  </div>
                  <div style={{background:'#f3e8ff', padding:'15px', borderRadius:'12px', width:'85%', marginLeft:'auto', borderBottomRightRadius: 0}}>
                    <strong>Summary generated:</strong> Based on 500+ recent interactions, users are responding positively to the new interface but request faster load times in the analytics dashboard. Recommended action items generated below.
                  </div>
                </div>
                <div className="prod-input" style={{display:'flex', alignItems:'center', padding:'0 15px'}}>
                  <span style={{opacity:0.4}}>Ask anything, generate anything...</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-glass-card" style={{top: '20%', left: '-5%', animation: 'genai-float-slow 6s infinite reverse'}}>UNDERSTAND</div>
          <div className="hero-glass-card" style={{top: '40%', right: '-5%', animation: 'genai-float-fast 5s infinite'}}>CREATE</div>
          <div className="hero-glass-card" style={{bottom: '20%', left: '-2%', animation: 'genai-float-slow 7s infinite'}}>ANALYZE</div>
        </div>
        </div>
        
        <div className="genai-center animate-on-scroll" style={{transitionDelay: '0.3s'}}>
          <p className="genai-desc" style={{margin: '0 auto', maxWidth: '800px'}}>
            Powerful AI becomes truly valuable when people can use it naturally. Oxavyn combines generative models with thoughtful UX to create interfaces that feel intuitive rather than complicated. We design conversational systems, AI assistants, intelligent search, recommendation experiences, document intelligence, and AI-powered workflows around how people actually work.
          </p>
        </div>
      </section>

      {/* SECTION 05: AI + BUSINESS | 390-490vh */}
      <section id="business">
        <div className="genai-split visual-right">
          <div className="genai-text-header animate-on-scroll">
            <span className="genai-eyebrow">BUSINESS INTELLIGENCE</span>
            <h2 className="genai-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
              Turn Intelligence Into<br/>
              <span className="genai-gradient-text">Business Advantage.</span>
            </h2>
          </div>
          
          <div className="genai-visual animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <div className="biz-ecosystem-visual">
              <div className="biz-core-gen"><span>OXAVYN AI</span></div>
              
              <div className="biz-node-gen" style={{top: '5%', left: '30%'}}>CRM</div>
              <div className="biz-node-gen" style={{top: '15%', right: '15%'}}>ERP</div>
              <div className="biz-node-gen" style={{bottom: '15%', right: '20%'}}>DATABASE</div>
              <div className="biz-node-gen" style={{bottom: '5%', left: '25%'}}>CLOUD</div>
              <div className="biz-node-gen" style={{top: '45%', left: '5%'}}>API</div>
              
              {/* Luminous connection lines SVG */}
              <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, zIndex: 0}}>
                <line x1="50%" y1="50%" x2="35%" y2="10%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="rgba(236,72,153,0.3)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="rgba(79,70,229,0.3)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="30%" y2="90%" stroke="rgba(139,92,246,0.3)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="rgba(236,72,153,0.3)" strokeWidth="2" />
              </svg>
            </div>
          </div>
          
          <div className="genai-text-body animate-on-scroll" style={{transitionDelay: '0.1s'}}>
            <p className="genai-desc" style={{marginBottom: 0}}>
              The strongest generative AI solutions are connected to the systems and information that businesses already depend on. Oxavyn integrates AI with your applications, databases, APIs, cloud infrastructure, knowledge bases, and internal workflows to create intelligent experiences that deliver practical value.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 06: AI WORKFLOWS | 490-590vh */}
      <section id="workflows" style={{flexDirection: 'column'}}>
        <div className="workflow-container">
          <div className="genai-center animate-on-scroll">
            <h2 className="genai-heading" style={{marginBottom: 0}}>
              From Prompt to Action.
            </h2>
          </div>
          
          <div className="genai-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
            <div className="workflow-visual">
              <div className="wf-stage"><span>👤</span><br/>USER</div>
          <div className="wf-line"></div>
          <div className="wf-stage"><span>✍️</span><br/>PROMPT</div>
          <div className="wf-line"></div>
          <div className="wf-stage" style={{border:'2px solid var(--genai-violet)'}}><span>🧠</span><br/>AI MODEL</div>
          <div className="wf-line"></div>
          <div className="wf-stage"><span>⚙️</span><br/>ACTION</div>
          <div className="wf-line"></div>
          <div className="wf-stage"><span>✅</span><br/>RESULT</div>
          
          <div className="hero-glass-card" style={{position:'absolute', top: '10%', left: '30%', animation: 'genai-float-fast 4s infinite'}}>RESEARCH</div>
          <div className="hero-glass-card" style={{position:'absolute', bottom: '10%', right: '30%', animation: 'genai-float-slow 5s infinite'}}>EXECUTE</div>
        </div>
        </div>
        </div>
      </section>

      {/* SECTION 07: RESPONSIBLE & SCALABLE AI | 590-690vh */}
      <section id="responsible-ai">
        <div className="genai-split visual-left">
          <div className="genai-text-header animate-on-scroll" style={{transitionDelay: '0.2s'}}>
            <h2 className="genai-heading" style={{fontSize: 'clamp(36px, 4vw, 56px)'}}>
              Built for Intelligence.<br/>
              <span className="genai-gradient-text">Engineered for Trust.</span>
            </h2>
          </div>
          
          <div className="genai-visual animate-on-scroll">
            <div className="responsible-visual">
              <div className="resp-sphere">
                <div className="resp-core">AI</div>
                
                <div className="resp-guard" style={{top: '-10px', left: '50%', transform: 'translateX(-50%)'}}>🛡️ SECURITY</div>
                <div className="resp-guard" style={{bottom: '-10px', left: '50%', transform: 'translateX(-50%)'}}>🔒 PRIVACY</div>
                <div className="resp-guard" style={{top: '50%', left: '-30px', transform: 'translateY(-50%)'}}>📈 SCALABILITY</div>
                <div className="resp-guard" style={{top: '50%', right: '-30px', transform: 'translateY(-50%)'}}>⚙️ CONTROL</div>
              </div>
            </div>
          </div>
          
          <div className="genai-text-body animate-on-scroll" style={{transitionDelay: '0.3s'}}>
            <p className="genai-desc" style={{marginBottom: 0}}>
              Generative AI should be powerful without becoming unpredictable. Oxavyn approaches AI development with attention to security, scalability, reliability, data privacy, and responsible implementation. We design AI systems with clear boundaries, appropriate access controls, robust infrastructure, and monitoring so businesses can confidently introduce intelligent capabilities into their products and workflows.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 08: FUTURE OF CREATION | 690-760vh */}
      <section id="future" style={{flexDirection: 'column'}}>
        <div className="genai-center animate-on-scroll">
          <h2 className="genai-heading" style={{marginBottom: 0}}>
            The Future Won't Just Be Digital.<br/>
            <span className="genai-gradient-text">It Will Be Intelligent.</span>
          </h2>
        </div>
        
        <div className="genai-visual animate-on-scroll" style={{transitionDelay: '0.1s'}}>
          <div className="future-visual">
            <div className="future-giant-sphere">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1">
              <circle cx="50" cy="50" r="45" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="30" stroke="rgba(139,92,246,0.5)" />
              <path d="M50 20 L50 80 M20 50 L80 50" />
            </svg>
          </div>
          <div className="hero-glass-card" style={{position:'absolute', top: '20%', left: '10%'}}>TODAY</div>
          <div className="hero-glass-card" style={{position:'absolute', top: '10%', right: '20%'}}>GENERATIVE AI</div>
          <div className="hero-glass-card" style={{position:'absolute', bottom: '15%', left: '20%'}}>AI AGENTS</div>
          <div className="hero-glass-card" style={{position:'absolute', bottom: '20%', right: '10%'}}>INTELLIGENT PRODUCTS</div>
        </div>
        </div>
      </section>

      {/* SECTION 09: FINAL CTA | 760-800vh */}
      <section id="cta">
        <div className="genai-cta-container animate-on-scroll">
          <span className="genai-eyebrow">BUILD WITH GENERATIVE AI</span>
          <h2 className="genai-heading" style={{fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '1rem'}}>
            Your Ideas. <span className="genai-gradient-text">Amplified by Intelligence.</span>
          </h2>
          <p className="genai-desc" style={{margin: '0 auto 2rem', fontSize: '1.1rem'}}>
            Whether you want to create an AI-powered product, transform an existing application, automate a complex workflow, or explore what generative AI can do for your business, Oxavyn can help turn the opportunity into a practical digital experience.
          </p>
          <div className="genai-btn-group" style={{justifyContent: 'center'}}>
            <a href="#contact" className="genai-btn genai-btn-primary" style={{padding: '1rem 2rem', fontSize: '1rem'}}>Start Your AI Project &rarr;</a>
            <a href="#services" className="genai-btn genai-btn-secondary" style={{padding: '1rem 2rem', fontSize: '1rem'}}>Talk to Oxavyn</a>
          </div>
          
          <div style={{marginTop: '2rem', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.1em', color: 'rgba(74, 74, 90, 0.5)'}}>
            INTELLIGENCE, ENGINEERED FOR WHAT'S NEXT.
          </div>
        </div>
      </section>

      </main>
    </>
  );
}
