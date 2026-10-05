"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, BrainCircuit, BarChart, Layers, Database } from 'lucide-react';
import DynamicMedia from '@/components/DynamicMedia';
import './SkillEnhancement.css';

export default function SkillEnhancementClient() {
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    graduationYear: "",
    currentSemester: "",
    program: "",
    utrNumber: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: "" });
  const [highlightedField, setHighlightedField] = useState(false);
  const [activeTechId, setActiveTechId] = useState(null);
  
  const [paymentSettings, setPaymentSettings] = useState({
    qrCodeUrl: '',
    upiId: 'oxavyn@upi',
    priceWebDev: '₹5000',
    priceAppDev: '₹5000',
    priceAi: '₹6000',
    priceDataAnalytics: '₹4500',
    priceDsa: '₹4000',
    priceDataScience: '₹6500'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/settings?key=course_payment_settings');
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

  const getPrice = (program) => {
    switch (program) {
      case "Web Development": return paymentSettings.priceWebDev;
      case "App Development": return paymentSettings.priceAppDev;
      case "AI & Machine Learning": return paymentSettings.priceAi;
      case "Data Analytics": return paymentSettings.priceDataAnalytics;
      case "DSA & System Design": return paymentSettings.priceDsa;
      case "Data Science": return paymentSettings.priceDataScience;
      default: return "";
    }
  };

  const programs = [
    {
      id: "Web Development",
      title: "Web Development",
      icon: <Code size={24} />,
      desc: "Learn to build modern, responsive and full-stack web applications from frontend interfaces to backend APIs and databases.",
      tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git & GitHub"]
    },
    {
      id: "App Development",
      title: "App Development",
      icon: <Smartphone size={24} />,
      desc: "Learn how to design and develop modern mobile applications with responsive interfaces, APIs, databases and real-world application features.",
      tech: ["Flutter", "Dart", "React Native", "JavaScript", "UI/UX Basics", "REST APIs", "Firebase", "MongoDB", "Git & GitHub", "App Deployment"]
    },
    {
      id: "AI & Machine Learning",
      title: "AI & Machine Learning",
      icon: <BrainCircuit size={24} />,
      desc: "Learn the fundamentals of artificial intelligence and machine learning and understand how intelligent systems are built using real-world data.",
      tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch", "Jupyter Notebook", "Machine Learning", "Generative AI Basics"]
    },
    {
      id: "Data Analytics",
      title: "Data Analytics",
      icon: <BarChart size={24} />,
      desc: "Learn how to collect, clean, analyze and visualize data to discover meaningful insights and support better business decisions.",
      tech: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Power BI", "Tableau", "Matplotlib", "Data Visualization", "Statistics"]
    },
    {
      id: "DSA & System Design",
      title: "DSA & System Design",
      icon: <Layers size={24} />,
      desc: "Strengthen your problem-solving skills with data structures and algorithms while learning how scalable software systems are designed.",
      tech: ["C++", "Java", "Python", "Arrays", "Strings", "Linked Lists", "Stacks & Queues", "Trees & Graphs", "Dynamic Programming", "System Design"]
    },
    {
      id: "Data Science",
      title: "Data Science",
      icon: <Database size={24} />,
      desc: "Learn how programming, statistics, data analysis and machine learning come together to solve real-world analytical problems.",
      tech: ["Python", "NumPy", "Pandas", "SQL", "Statistics", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook", "Machine Learning"]
    }
  ];

  const toggleTech = (e, programId) => {
    e.stopPropagation();
    setActiveTechId(prev => prev === programId ? null : programId);
  };

  const handleKnowMore = (e, programId) => {
    e.stopPropagation();
    setFormData(prev => ({ ...prev, program: programId }));
    setHighlightedField(true);
    setTimeout(() => setHighlightedField(false), 2000);
    
    if (formRef.current) {
      const yOffset = -100;
      const y = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ show: false, success: false, message: "" });
    
    try {
      const res = await fetch('/api/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (data.success) {
        setSubmitStatus({ show: true, success: true, message: "Application is submitted successfully our HR team contact you soon within 48 hours." });
        setFormData({ fullName: "", email: "", university: "", graduationYear: "", currentSemester: "", program: "", utrNumber: "" });
      } else {
        setSubmitStatus({ show: true, success: false, message: data.message || "Submission failed" });
      }
    } catch (err) {
      setSubmitStatus({ show: true, success: false, message: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="se-page">
      {/* 1. HERO SECTION */}
      <section className="se-section">
        <div className="se-container">
          <div className="se-hero">
            <motion.div className="se-hero-content" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.h1 className="se-heading-primary" variants={fadeInUp}>
                Build Skills. Build Your Future.
              </motion.h1>

              {/* MOBILE ONLY MEDIA */}
              <motion.div className="se-hero-mobile-media" variants={fadeInUp}>
                <div className="se-hero-image-wrapper">
                  <DynamicMedia page="STUDENT" section="SKILLS" title="Build Skills" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </motion.div>

              <motion.p className="se-subheading" variants={fadeInUp}>
                Learn the technologies and problem-solving skills that help you become confident, capable and career ready.
              </motion.p>
              <motion.p className="se-paragraph" variants={fadeInUp} style={{ marginBottom: '2.5rem' }}>
                OXAVYN Skill Enhancement programs help students develop practical technology skills through structured learning, hands-on practice and real-world projects.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <a href="#programs" className="se-btn-primary">Explore Programs</a>
              </motion.div>
            </motion.div>
            
            {/* DESKTOP ONLY MEDIA */}
            <motion.div className="se-hero-media se-hero-desktop-media" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <div className="se-hero-image-wrapper">
                <DynamicMedia page="STUDENT" section="SKILLS" title="Build Skills" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMS SECTION */}
      <section id="programs" className="se-section se-section-light">
        <div className="se-container">
          <motion.div className="se-center-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 className="se-heading-secondary" variants={fadeInUp}>Learn Skills That Move You Forward.</motion.h2>
            <motion.p className="se-subheading" variants={fadeInUp}>
              Choose a technology path and build practical skills with modern tools, frameworks and industry-relevant technologies.
            </motion.p>
          </motion.div>

          <div className="se-cards-grid">
            {programs.map((prog, idx) => (
              <motion.div 
                key={prog.id}
                className="se-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="se-card-icon">{prog.icon}</div>
                <h3 className="se-card-title">{prog.title}</h3>
                <p className="se-card-desc">{prog.desc}</p>
                
                <button className="se-card-tech-toggle" onClick={(e) => toggleTech(e, prog.id)}>
                  {activeTechId === prog.id ? "Hide Technologies" : "View Technologies"}
                </button>
                
                {activeTechId === prog.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="se-tech-wrapper">
                    <h4 className="se-card-tech-label">Technologies You Will Learn</h4>
                    <div className="se-tech-chips">
                      {prog.tech.map(t => (
                        <span key={t} className="se-tech-chip">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                )}

                <button className="se-btn-primary se-know-more-btn" onClick={(e) => handleKnowMore(e, prog.id)} style={{ marginTop: 'auto', alignSelf: 'flex-start', padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                  Know More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEARNING APPROACH */}
      <section className="se-section">
        <div className="se-container">
          <motion.div className="se-center-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 className="se-heading-secondary" variants={fadeInUp}>Learn. Practice. Build. Grow.</motion.h2>
          </motion.div>

          <div className="se-approach-grid">
            {[
              { num: "01", title: "Learn", desc: "Understand the fundamentals and modern technologies." },
              { num: "02", title: "Practice", desc: "Strengthen your knowledge through hands-on exercises." },
              { num: "03", title: "Build", desc: "Create practical projects using the technologies you learn." },
              { num: "04", title: "Grow", desc: "Build confidence and prepare for internships, projects and career opportunities." }
            ].map((step, idx) => (
              <motion.div 
                key={step.num}
                className="se-approach-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="se-approach-num">— {step.num} —</div>
                <h3 className="se-approach-title">{step.title}</h3>
                <p className="se-approach-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENQUIRY FORM */}
      <section className="se-section se-section-light" ref={formRef}>
        <div className="se-container">
          <motion.div className="se-center-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 className="se-heading-secondary" variants={fadeInUp}>Start Your Learning Journey.</motion.h2>
            <motion.p className="se-subheading" variants={fadeInUp}>
              Tell us what you want to learn and our team will help you choose the right skill enhancement program.
            </motion.p>
          </motion.div>

          <motion.div 
            className="app-form-wrapper center-form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div className="glass-form-card luxury-card" style={{ background: '#ffffff', borderRadius: '24px', padding: '3rem', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)', border: '1px solid rgba(226, 232, 240, 0.8)', maxWidth: '800px', margin: '0 auto' }}>
            <form className="student-form ultra-modern" onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
              <div className="form-group">
                <input type="text" id="fname" className="se-floating-input" placeholder=" " required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
                <label htmlFor="fname" className="se-floating-label">Full Name</label>
                <div className="input-line"></div>
              </div>
              
              <div className="form-group">
                <input type="email" id="email" className="se-floating-input" placeholder=" " required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <label htmlFor="email" className="se-floating-label">Email Address</label>
                <div className="input-line"></div>
              </div>

              <div className="form-group">
                <input type="text" id="uni" className="se-floating-input" placeholder=" " required value={formData.university} onChange={e => setFormData({...formData, university: e.target.value})} />
                <label htmlFor="uni" className="se-floating-label">University / College Name</label>
                <div className="input-line"></div>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="form-group select-group">
                  <select id="grad" className="se-floating-select" required value={formData.graduationYear} onChange={e => setFormData({...formData, graduationYear: e.target.value})}>
                    <option value="" disabled hidden></option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                  <label htmlFor="grad" className="se-floating-label">Graduation Year</label>
                  <div className="input-line"></div>
                </div>
                
                <div className="form-group select-group">
                  <select id="sem" className="se-floating-select" required value={formData.currentSemester} onChange={e => setFormData({...formData, currentSemester: e.target.value})}>
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
                  <label htmlFor="sem" className="se-floating-label">Current Semester</label>
                  <div className="input-line"></div>
                </div>
              </div>

              <div className="form-group select-group">
                <select 
                  id="prog"
                  className={`se-floating-select ${highlightedField ? 'se-select-highlight' : ''}`}
                  required 
                  value={formData.program} 
                  onChange={e => setFormData({...formData, program: e.target.value})}
                >
                  <option value="" disabled hidden></option>
                  {programs.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
                <label htmlFor="prog" className="se-floating-label">Select Skill Enhancement Program</label>
                <div className="input-line"></div>
              </div>

              {formData.program && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ overflow: 'hidden' }}>
                  <div style={{ margin: '1rem 0', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div>
                        <span style={{ fontSize: '0.9rem', color: '#64748b', display: 'block' }}>Fee Amount</span>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>{getPrice(formData.program)}</span>
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
                      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>Scan to pay {getPrice(formData.program)}</p>
                    </div>
                    
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <input 
                        type="text" 
                        id="utr"
                        required 
                        placeholder=" " 
                        value={formData.utrNumber} 
                        onChange={e => setFormData({...formData, utrNumber: e.target.value})} 
                        style={{ backgroundColor: '#fff' }}
                      />
                      <label htmlFor="utr">Enter UTR Number (Mandatory)</label>
                      <div className="input-line"></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus.show && (
                <div style={{ padding: '1rem', marginBottom: '1.5rem', borderRadius: '8px', textAlign: 'center', backgroundColor: submitStatus.success ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: submitStatus.success ? '#15803d' : '#b91c1c', border: `1px solid ${submitStatus.success ? '#22c55e' : '#ef4444'}` }}>
                  {submitStatus.message}
                </div>
              )}

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="se-btn-primary" style={{ width: '100%' }} disabled={isSubmitting || (formData.program && !formData.utrNumber)}>
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </div>
            </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="se-section se-section-glass">
        <div className="se-container" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <motion.h2 className="se-heading-secondary" variants={fadeInUp}>Your Next Skill Starts Here.</motion.h2>
            <motion.p className="se-subheading" variants={fadeInUp} style={{ margin: '0 auto 2.5rem auto' }}>
              Start learning today and build the technical foundation for your future opportunities.
            </motion.p>
            <motion.button 
              className="se-btn-primary" 
              variants={fadeInUp}
              onClick={() => {
                if (formRef.current) {
                  const y = formRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Start Learning
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
