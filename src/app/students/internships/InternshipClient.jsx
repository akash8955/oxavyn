"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function InternshipClient() {
  const containerRef = useRef(null);
  const flowRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Simple line drawing animation for the flow section
    if (flowRef.current) {
      const lines = flowRef.current.querySelectorAll('.flow-line');
      lines.forEach((line) => {
        gsap.fromTo(line, 
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true
            }
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const programs = [
    {
      id: "1",
      title: "Project-Based Internship",
      desc: "Learn by building. Work through structured projects that help you understand how ideas move from planning and design to development, testing, and delivery. This experience focuses on applying technical knowledge to practical project work while developing problem-solving and portfolio-building skills.",
      tags: ["PROJECTS", "PRACTICAL", "PORTFOLIO"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      )
    },
    {
      id: "2",
      title: "Learning-Based Internship",
      desc: "Designed for students who want a more structured learning experience. Learn concepts through guided sessions, practical exercises, assignments, and continuous feedback while gradually building confidence with the technologies and skills relevant to your chosen path.",
      tags: ["LEARNING", "GUIDANCE", "SKILLS"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      )
    },
    {
      id: "3",
      title: "Live Project Internship",
      desc: "Experience how professional technology projects are planned, developed, reviewed, tested, and delivered. Depending on the opportunity, students can gain exposure to team collaboration, development workflows, project tools, technical discussions, and real-world problem solving.",
      tags: ["LIVE PROJECT", "TEAMWORK", "WORKFLOW"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
      )
    },
    {
      id: "4",
      title: "Interview-Based Internship",
      desc: "Experience a structured internship selection process that gives students an opportunity to demonstrate their technical knowledge, problem-solving ability, communication skills, and interest in the selected field.",
      tags: ["ASSESSMENT", "INTERVIEW", "SELECTION"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    },
    {
      id: "5",
      title: "Stipend-Based Internship",
      desc: "Explore internship opportunities where a stipend may be provided depending on the specific role, program, eligibility requirements, responsibilities, and applicable terms. These opportunities combine practical exposure with professional contribution.",
      tags: ["OPPORTUNITY", "EXPERIENCE", "STIPEND*"],
      disclaimer: "*Stipend availability, eligibility, amount, and terms may vary by internship opportunity.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      )
    },
    {
      id: "6",
      title: "Mentorship-Based Internship",
      desc: "Learn with structured guidance from experienced professionals. Get support with technical concepts, project work, problem solving, feedback, and career-related decisions while developing a clearer understanding of your strengths and areas for improvement.",
      tags: ["MENTORSHIP", "FEEDBACK", "GROWTH"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="11" cy="7" r="4"></circle><polyline points="22 12 18 16 14 12"></polyline></svg>
      )
    }
  ];

  return (
    <div className="ambient-container" ref={containerRef}>
      {/* Background Decor */}
      <div className="ambient-bg-wrapper">
        <div className="ambient-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="ambient-grid"></div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="section-hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div 
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span className="eyebrow" variants={fadeInUp}>OXAVYN / STUDENT PROGRAMS</motion.span>
              <motion.h1 variants={fadeInUp}>Build Experience.<br/>Shape Your Future.</motion.h1>
              <motion.p variants={fadeInUp} className="hero-desc">
                An internship is more than a line on your resume. It is an opportunity to understand how technology is built, how professional teams work, and how your classroom knowledge can be applied to real-world challenges.
              </motion.p>
              <motion.p variants={fadeInUp} className="hero-desc">
                Oxavyn offers multiple internship experiences designed around different learning styles, project exposure, professional interaction, and mentorship. Choose the path that matches where you are today and where you want to go next.
              </motion.p>
              <motion.div variants={fadeInUp} className="hero-actions">
                <a href="#programs" className="btn-primary">Explore Internships &rarr;</a>
                <a href="#application" className="btn-secondary">Apply Now &rarr;</a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Decorative Graphic Lines */}
              <div className="luxury-graphics">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="graphic-ring">
                  <circle cx="100" cy="100" r="99" stroke="url(#paint0_linear)" strokeWidth="0.5"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7c3aed" stopOpacity="0.5"/>
                      <stop offset="1" stopColor="#06b6d4" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="dashboard-card">
                <div className="dash-header">
                  <span className="dash-title">OXAVYN INTERNSHIP</span>
                  <span className="dash-subtitle">Build • Learn • Grow</span>
                </div>
                <div className="dash-stats">
                  <div className="stat-box">
                    <span className="stat-label">PROJECT</span>
                    <span className="stat-value">Interactive</span>
                  </div>
                  <div className="stat-box active">
                    <span className="stat-label">SKILLS</span>
                    <span className="stat-value">Advanced</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">TEAM</span>
                    <span className="stat-value">Collaborative</span>
                  </div>
                </div>
                <div className="dash-progress">
                  <span className="prog-label">Learning Progress</span>
                  <div className="prog-bar"><div className="prog-fill" style={{width: '82%'}}></div></div>
                </div>
                <button className="dash-btn">Explore Program &rarr;</button>

                {/* Floating elements */}
                <motion.div className="float-card fc-1" animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4 }}>Project</motion.div>
                <motion.div className="float-card fc-2" animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 5 }}>Skills</motion.div>
                <motion.div className="float-card fc-3" animate={{ y: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 3 }}>Career</motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-intro">
        <div className="container">
          <motion.div 
            className="intro-header center-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="label">WHY OXAVYN INTERNSHIPS</motion.span>
            <motion.h2 variants={fadeInUp}>More Than an Internship.<br/>An Opportunity to Grow.</motion.h2>
            <motion.p variants={fadeInUp} className="desc-large">
              The transition from academic learning to professional work can be challenging. Students often know the theory but need opportunities to apply their knowledge, solve practical problems, understand development workflows, communicate with teams, and build confidence.
            </motion.p>
            <motion.p variants={fadeInUp} className="desc-large">
              Oxavyn's internship programs are designed to bridge that gap. Depending on the program, students can learn through structured training, work through projects, experience professional workflows, prepare for interviews, receive mentorship, or explore opportunities that provide practical exposure.
            </motion.p>
          </motion.div>

          <div className="intro-visual-container">
            {/* Visual Effect Background */}
            <div className="intro-visual-effect">
              <svg viewBox="0 0 400 400" className="intro-core">
                <circle cx="200" cy="200" r="180" stroke="url(#coreGrad)" strokeWidth="1.5" strokeDasharray="10 15" fill="none" className="spin-slow" />
                <circle cx="200" cy="200" r="130" stroke="url(#coreGrad2)" strokeWidth="2" strokeDasharray="5 25" fill="none" className="spin-reverse" />
                <circle cx="200" cy="200" r="80" stroke="#7c3aed" strokeWidth="0.5" fill="none" className="pulse" />
                <defs>
                  <linearGradient id="coreGrad" x1="0" y1="0" x2="400" y2="400">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="coreGrad2" x1="0" y1="400" x2="400" y2="0">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="vertical-flow" ref={flowRef}>
              {['LEARN', 'PRACTICE', 'BUILD', 'EXPERIENCE', 'GROW'].map((step, i, arr) => (
                <div key={step} className="flow-step-container">
                  <motion.div 
                    className="flow-step"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="ambient-glow-border"></div>
                    <span>{step}</span>
                  </motion.div>
                  {i < arr.length - 1 && <div className="flow-line"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERNSHIP PROGRAMS */}
      <section className="section-programs" id="programs">
        <div className="container">
          <motion.div 
            className="programs-header center-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>Choose Your Internship Experience.</motion.h2>
            <motion.p variants={fadeInUp} className="desc-large">
              Every student has different goals. Some want to build projects, some want structured learning, some want exposure to live development environments, while others are looking for mentorship or professional selection experience. Oxavyn brings these different pathways together so students can choose an experience that fits their current stage and career direction.
            </motion.p>
          </motion.div>

          <div className="programs-grid">
            {programs.map((prog, index) => (
              <motion.div 
                key={prog.id}
                className="program-card luxury-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover="hover"
              >
                <div className="ambient-border-glow"></div>
                <div className="card-top">
                  <motion.div className="card-icon" variants={{ hover: { y: -3 } }}>
                    {prog.icon}
                  </motion.div>
                </div>
                <h3 className="card-title">{prog.title}</h3>
                
                <div className="card-media">
                  <div className="media-placeholder">
                    <div className="media-text">{prog.title}<br/>VIDEO PLACEHOLDER</div>
                  </div>
                </div>

                <div className="card-tags">
                  {prog.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>

                <p className="card-desc">{prog.desc}</p>
                {prog.disclaimer && <p className="card-disclaimer">{prog.disclaimer}</p>}
                
                <a href="#application" className="luxury-btn-small">
                  <span>Apply Now &rarr;</span>
                  <div className="btn-glow"></div>
                </a>
                <div className="card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT STUDENTS CAN BUILD - WAVE THEME */}
      <section className="section-build">
        <div className="container">
          <motion.div 
            className="build-header center-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="label">THE EXPERIENCE</motion.span>
            <motion.h2 variants={fadeInUp}>Turn Learning Into Experience.</motion.h2>
            <motion.p variants={fadeInUp} className="desc-large">
              A strong internship experience should help students move beyond passive learning. It should encourage them to ask questions, solve problems, work with others, understand professional expectations, and create evidence of what they can do.
            </motion.p>
          </motion.div>

          <div className="build-wave-container">
            {/* SVG Background Wave */}
            <svg className="wave-bg" viewBox="0 0 1000 300" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,150 C200,50 300,250 500,150 C700,50 800,250 1000,150" stroke="url(#waveGradient)" strokeWidth="4" />
              <defs>
                <linearGradient id="waveGradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed" stopOpacity="0.1" />
                  <stop offset="0.5" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#7c3aed" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            <div className="build-wave-grid">
              {[
                { title: "LEARN", text: "Understand new concepts and technologies.", offset: 0 },
                { title: "PRACTICE", text: "Apply knowledge through practical tasks.", offset: 30 },
                { title: "BUILD", text: "Work on projects and meaningful outcomes.", offset: 60 },
                { title: "COLLABORATE", text: "Understand professional teamwork.", offset: 30 },
                { title: "GROW", text: "Develop confidence for future.", offset: 0 }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  className="wave-card luxury-card"
                  style={{ marginTop: `${item.offset}px` }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="ambient-border-glow"></div>
                  <div className="b-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERNSHIP → CAREER */}
      <section className="section-career">
        <div className="container center-text">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience Today. Prepare for Tomorrow.
          </motion.h2>
          <motion.p 
            className="desc-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The value of an internship extends beyond the internship period itself. The projects you work on, skills you develop, feedback you receive, and professional habits you build can become part of your long-term career journey.
          </motion.p>

          <div className="career-progression">
            {['INTERNSHIP', 'SKILLS', 'PROJECTS', 'CONFIDENCE', 'CAREER'].map((step, i, arr) => (
              <React.Fragment key={step}>
                <motion.div 
                  className="career-step luxury-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="ambient-border-glow"></div>
                  {step}
                </motion.div>
                {i < arr.length - 1 && (
                  <motion.div 
                    className="career-arrow"
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "40px" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    &rarr;
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION SECTION */}
      <section className="section-application" id="application">
        <div className="container">
          <motion.div 
            className="app-form-wrapper center-form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-glow-bg"></div>
            <div className="glass-form-card luxury-card">
              <div className="ambient-border-glow form-border"></div>
              <h2 className="center-text">Start Your Internship Journey</h2>
              <p className="form-desc center-text">Tell us a little about yourself and choose the internship experience you would like to explore. Your information will help us understand your academic background and the type of opportunity you are interested in.</p>
              
              <form className="student-form ultra-modern" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" id="fname" placeholder=" " required />
                  <label htmlFor="fname">Full Name</label>
                  <div className="input-line"></div>
                </div>
                
                <div className="form-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Email Address</label>
                  <div className="input-line"></div>
                </div>

                <div className="form-group">
                  <input type="text" id="uni" placeholder=" " required />
                  <label htmlFor="uni">University / College Name</label>
                  <div className="input-line"></div>
                </div>

                <div className="form-row">
                  <div className="form-group select-group">
                    <select id="grad" defaultValue="" required>
                      <option value="" disabled hidden></option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </select>
                    <label htmlFor="grad">Graduation Year</label>
                    <div className="input-line"></div>
                  </div>

                  <div className="form-group select-group">
                    <select id="sem" defaultValue="" required>
                      <option value="" disabled hidden></option>
                      <option value="1">1st Semester — 1st Year</option>
                      <option value="2">2nd Semester — 1st Year</option>
                      <option value="3">3rd Semester — 2nd Year</option>
                      <option value="4">4th Semester — 2nd Year</option>
                      <option value="5">5th Semester — 3rd Year</option>
                      <option value="6">6th Semester — 3rd Year</option>
                      <option value="7">7th Semester — 4th Year</option>
                      <option value="8">8th Semester — 4th Year</option>
                    </select>
                    <label htmlFor="sem">Current Semester</label>
                    <div className="input-line"></div>
                  </div>
                </div>

                <div className="form-group select-group">
                  <select id="prog" defaultValue="" required>
                    <option value="" disabled hidden></option>
                    <option value="Project">Project-Based Internship</option>
                    <option value="Learning">Learning-Based Internship</option>
                    <option value="Live">Live Project Internship</option>
                    <option value="Interview">Interview-Based Internship</option>
                    <option value="Stipend">Stipend-Based Internship</option>
                    <option value="Mentorship">Mentorship-Based Internship</option>
                  </select>
                  <label htmlFor="prog">Select Internship</label>
                  <div className="input-line"></div>
                </div>

                <button type="button" className="btn-submit luxury-btn">
                  <span>Submit Application &rarr;</span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-final center-text">
        <div className="container">
          <motion.div 
            className="final-cta-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background glow for the dark card */}
            <div className="final-cta-glow"></div>
            
            <span className="label final-label">YOUR NEXT STEP</span>
            <h2 className="final-heading">Build Experience.<br/>Become Ready for What's Next.</h2>
            <p className="desc-large final-desc">
              Your career journey starts with the skills you build and the experiences you choose. Explore an Oxavyn internship and take the next step toward becoming a more confident technology professional.
            </p>
            <div className="hero-actions center-actions">
              <a href="#application" className="btn-primary final-btn-primary">Apply Now &rarr;</a>
              <Link href="/students/skill-enhancement" className="btn-secondary final-btn-secondary">Explore Skill Enhancement &rarr;</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
