"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DynamicMedia from '@/components/DynamicMedia';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function InternshipClient() {
  const containerRef = useRef(null);
  const flowRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    graduationYear: "",
    currentSemester: "",
    internshipType: "",
    domain: "",
    duration: "",
    utrNumber: "",
    resumeUrl: ""
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: "" });
  
  // Dynamic Payment Settings
  const [paymentSettings, setPaymentSettings] = useState({
    qrCodeUrl: '',
    upiId: 'oxavyn@upi',
    price1Month: '₹1000',
    price3Month: '₹2500',
    price6Month: '₹4500'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/settings?key=internship_payment_settings');
        if (res.ok) {
          const data = await res.json();
          if (data.setting && data.setting.value) {
            setPaymentSettings(data.setting.value);
          }
        }
      } catch (err) {
        console.error("Failed to fetch payment settings", err);
      }
    };
    fetchSettings();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const calculatePrice = (duration) => {
    switch (duration) {
      case "1 month": return paymentSettings.price1Month;
      case "3 month": return paymentSettings.price3Month;
      case "6 month": return paymentSettings.price6Month;
      default: return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ show: false, success: false, message: "" });
    try {
      let uploadedResumeUrl = "";
      
      if (formData.internshipType === "Stipend-Based Internship" && resumeFile) {
        const formDataUpload = new FormData();
        formDataUpload.append("file", resumeFile);
        formDataUpload.append("folder", "oxavyn/resumes");
        
        const uploadRes = await fetch('/api/admin/upload-cloudinary', {
          method: 'POST',
          body: formDataUpload
        });
        
        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          uploadedResumeUrl = uploadData.secure_url;
        } else {
          setSubmitStatus({ show: true, success: false, message: "Resume upload failed. Please try again." });
          setIsSubmitting(false);
          return;
        }
      }

      const res = await fetch('/api/internships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, resumeUrl: uploadedResumeUrl })
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus({ show: true, success: true, message: "Application is submitted successfully our HR team contact you soon within 48 hours." });
        setFormData({ fullName: "", email: "", university: "", graduationYear: "", currentSemester: "", internshipType: "", domain: "", duration: "", utrNumber: "", resumeUrl: "" });
        setResumeFile(null);
      } else {
        setSubmitStatus({ show: true, success: false, message: data.message || "Submission failed" });
      }
    } catch (err) {
      setSubmitStatus({ show: true, success: false, message: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      title: "Live Project Internship",
      desc: "Experience how professional technology projects are planned, developed, reviewed, tested, and delivered. Depending on the opportunity, students can gain exposure to team collaboration, development workflows, project tools, technical discussions, and real-world problem solving.",
      tags: ["LIVE PROJECT", "TEAMWORK", "WORKFLOW"],
      disclaimer: "*This internship require small charge based on 1, 3, 6 month and only for 1st, 2nd and 3rd year student",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
      )
    },
    {
      id: "2",
      title: "Stipend-Based Internship",
      desc: "Explore internship opportunities where a stipend may be provided depending on the specific role, program, eligibility requirements, responsibilities, and applicable terms. These opportunities combine practical exposure with professional contribution.",
      tags: ["OPPORTUNITY", "EXPERIENCE", "STIPEND*"],
      disclaimer: "*Stipend availability, eligibility, amount, and terms may vary by internship opportunity, only for 3rd and 4th year student",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
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

      {/* INTRODUCTION & INTERNSHIP PROGRAMS */}
      <section className="section-intro">
        <div className="container std-layout-section">
          
          <div className="std-layout-split reverse">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.span variants={fadeInUp} className="label" style={{ display: 'block', textAlign: 'left', marginBottom: '0.5rem' }}>WHY OXAVYN INTERNSHIPS</motion.span>
                <motion.h2 variants={fadeInUp} style={{ textAlign: 'left', marginBottom: '1.5rem' }}>More Than an Internship.<br/>An Opportunity to Grow.</motion.h2>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="desc-large" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                  The transition from academic learning to professional work can be challenging. Students often know the theory but need opportunities to apply their knowledge, solve practical problems, understand development workflows, communicate with teams, and build confidence.
                </motion.p>
                <motion.p variants={fadeInUp} className="desc-large" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Oxavyn's internship programs are designed to bridge that gap. Depending on the program, students can learn through structured training, work through projects, experience professional workflows, prepare for interviews, receive mentorship, or explore opportunities that provide practical exposure.
                </motion.p>
              </motion.div>
            </div>
            
            {/* MEDIA SIDE (Vertical Flow Effect) */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="std-media-side">
              <div className="intro-visual-container" style={{ margin: 0, height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-feature-card" id="programs" style={{ marginTop: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <motion.h2 variants={fadeInUp} style={{ marginBottom: '1rem' }}>Choose Your Internship Experience.</motion.h2>
              <motion.p variants={fadeInUp} className="desc-large">
                Every student has different goals. Some want to build projects, some want structured learning, some want exposure to live development environments, while others are looking for mentorship or professional selection experience. Oxavyn brings these different pathways together so students can choose an experience that fits their current stage and career direction.
              </motion.p>
            </div>
            
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
                  
                  <div className="card-media" style={{ height: '200px' }}>
                    <DynamicMedia page="STUDENT" section="INTERNSHIP" title={"Card Video " + (index + 1)} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} controls={true} />
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
          </motion.div>

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
              
              <form className="student-form ultra-modern" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" id="fname" placeholder=" " required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
                  <label htmlFor="fname">Full Name</label>
                  <div className="input-line"></div>
                </div>
                
                <div className="form-group">
                  <input type="email" id="email" placeholder=" " required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  <label htmlFor="email">Email Address</label>
                  <div className="input-line"></div>
                </div>

                <div className="form-group">
                  <input type="text" id="uni" placeholder=" " required value={formData.university} onChange={e => setFormData({...formData, university: e.target.value})} />
                  <label htmlFor="uni">University / College Name</label>
                  <div className="input-line"></div>
                </div>

                <div className="form-row">
                  <div className="form-group select-group">
                    <select id="grad" required value={formData.graduationYear} onChange={e => setFormData({...formData, graduationYear: e.target.value})}>
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
                    <select id="sem" required value={formData.currentSemester} onChange={e => setFormData({...formData, currentSemester: e.target.value})}>
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
                  <select id="prog" required value={formData.internshipType} onChange={e => {
                      setFormData({...formData, internshipType: e.target.value, domain: "", duration: "", utrNumber: ""});
                      setResumeFile(null);
                  }}>
                    <option value="" disabled hidden></option>
                    <option value="Live Project Internship">Live Project Internship</option>
                    <option value="Stipend-Based Internship">Stipend-Based Internship</option>
                  </select>
                  <label htmlFor="prog">Select Internship</label>
                  <div className="input-line"></div>
                </div>

                {formData.internshipType && (
                  <div className="form-group select-group">
                    <select id="domain" required value={formData.domain} onChange={e => setFormData({...formData, domain: e.target.value})}>
                      <option value="" disabled hidden></option>
                      <option value="Web development">Web development</option>
                      <option value="App development">App development</option>
                      <option value="Software development">Software development</option>
                      <option value="UI/UX designer">UI/UX designer</option>
                      <option value="Full stack development">Full stack development</option>
                      <option value="AI-ML and data analytics">AI-ML and data analytics</option>
                    </select>
                    <label htmlFor="domain">Select Domain</label>
                    <div className="input-line"></div>
                  </div>
                )}

                {formData.internshipType === "Live Project Internship" && (
                  <>
                    <div className="form-group select-group">
                      <select id="duration" required value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})}>
                        <option value="" disabled hidden></option>
                        <option value="1 month">1 month</option>
                        <option value="3 month">3 month</option>
                        <option value="6 month">6 month</option>
                      </select>
                      <label htmlFor="duration">Internship Duration</label>
                      <div className="input-line"></div>
                    </div>

                    {formData.duration && (
                      <div style={{ margin: '1rem 0', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                          <div>
                            <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'block' }}>Fee Amount</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>{calculatePrice(formData.duration)}</span>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'block' }}>UPI ID</span>
                            <span style={{ fontWeight: '600', color: '#0f172a' }}>{paymentSettings.upiId}</span>
                          </div>
                        </div>
                        <div style={{ textAlign: 'center', padding: '1rem', background: '#fff', borderRadius: '8px', marginBottom: '1rem', border: '1px dashed #cbd5e1' }}>
                          {paymentSettings.qrCodeUrl ? (
                            <img src={paymentSettings.qrCodeUrl} alt="QR Code" style={{ width: '150px', height: '150px', margin: '0 auto', objectFit: 'contain', display: 'block' }} />
                          ) : (
                            <div style={{ width: '150px', height: '150px', margin: '0 auto', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                              <span style={{ color: '#64748b', fontSize: '0.9rem' }}>No QR uploaded</span>
                            </div>
                          )}
                          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>Scan to pay {calculatePrice(formData.duration)}</p>
                        </div>
                        
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <input type="text" id="utr" placeholder=" " required value={formData.utrNumber} onChange={e => setFormData({...formData, utrNumber: e.target.value})} style={{ backgroundColor: '#fff' }} />
                          <label htmlFor="utr">Enter UTR Number (Mandatory)</label>
                          <div className="input-line"></div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {formData.internshipType === "Stipend-Based Internship" && (
                  <div className="form-group">
                    <input type="file" id="resume" accept=".pdf,.doc,.docx" required onChange={handleFileChange} style={{ padding: '1rem 0 0.5rem 0', color: '#0f172a' }} />
                    <label htmlFor="resume" style={{ transform: 'translateY(-20px)', fontSize: '0.85rem', color: '#6366f1' }}>Upload Resume (PDF/DOC)</label>
                    <div className="input-line"></div>
                  </div>
                )}

                {submitStatus.show && (
                  <div style={{ padding: '1rem', marginBottom: '1rem', borderRadius: '4px', textAlign: 'center', backgroundColor: submitStatus.success ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: submitStatus.success ? '#22c55e' : '#ef4444', border: `1px solid ${submitStatus.success ? '#22c55e' : '#ef4444'}` }}>
                    {submitStatus.message}
                  </div>
                )}

                <button type="submit" className="btn-submit luxury-btn" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Application \u2192'}</span>
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
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
