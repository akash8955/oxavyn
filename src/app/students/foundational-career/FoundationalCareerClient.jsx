"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FoundationalCareerClient() {
  const [formData, setFormData] = useState({
    year: "",
    interest: ""
  });
  const [enquiryContext, setEnquiryContext] = useState("");
  const [highlightedField, setHighlightedField] = useState(null); // 'year' or 'interest'

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Interaction logic for Know More buttons
  const handleKnowMore = (e, stageTitle) => {
    e.preventDefault();
    setEnquiryContext(stageTitle);
    
    // Map card title to form dropdowns
    let newYear = formData.year;
    let newInterest = formData.interest;
    let fieldToHighlight = null;

    switch (stageTitle) {
      case "First Year":
      case "Second Year":
      case "Third Year":
      case "Fourth Year":
        newYear = stageTitle;
        fieldToHighlight = 'year';
        break;
      case "Placement Ready":
        newInterest = "Placement Preparation";
        fieldToHighlight = 'interest';
        break;
      case "Internship Ready":
        newInterest = "Internship Preparation";
        fieldToHighlight = 'interest';
        break;
      default:
        break;
    }

    setFormData({ year: newYear, interest: newInterest });
    setHighlightedField(fieldToHighlight);
    
    // Remove highlight after animation
    setTimeout(() => setHighlightedField(null), 2000);

    // Smooth scroll to form
    const formElement = document.getElementById("foundational-career-enquiry");
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cards = [
    {
      number: "CARD 01",
      title: "First Year",
      desc: "Build the right foundation from the beginning. Understand programming fundamentals, computer science basics, problem-solving, communication, and the habits that support long-term technical growth.",
      tags: ["FOUNDATION", "PROGRAMMING", "FUNDAMENTALS"]
    },
    {
      number: "CARD 02",
      title: "Second Year",
      desc: "Move from basic concepts toward stronger technical understanding. Develop data structures knowledge, core computer science skills, practical coding ability, and begin working on meaningful academic and personal projects.",
      tags: ["DSA", "CORE CS", "PROJECTS"]
    },
    {
      number: "CARD 03",
      title: "Third Year",
      desc: "Start connecting your technical skills with real-world opportunities. Focus on advanced development, projects, internships, problem-solving, professional profiles, and the skills companies expect from students approaching graduation.",
      tags: ["INTERNSHIP", "PROJECTS", "SKILL DEVELOPMENT"]
    },
    {
      number: "CARD 04",
      title: "Fourth Year",
      desc: "Turn your accumulated knowledge into career opportunities. Strengthen interview preparation, resume presentation, technical communication, aptitude, coding, and placement-focused skills.",
      tags: ["PLACEMENTS", "INTERVIEWS", "CAREER"]
    },
    {
      number: "CARD 05",
      title: "Placement Ready",
      desc: "Prepare for the recruitment process with a focused approach to technical interviews, coding assessments, aptitude, communication, resume building, mock interviews, and professional confidence.",
      tags: ["INTERVIEW", "APTITUDE", "PLACEMENT"]
    },
    {
      number: "CARD 06",
      title: "Internship Ready",
      desc: "Develop the skills and professional preparation required to approach internship opportunities with greater confidence. Build projects, improve your profile, understand interview expectations, and prepare for real-world work environments.",
      tags: ["INTERNSHIP", "PROJECTS", "CAREER READY"]
    }
  ];

  const workflowSteps = [
    { num: "01", title: "Learn the Fundamentals", desc: "Build strong academic and technical foundations." },
    { num: "02", title: "Develop Technical Skills", desc: "Strengthen programming, DSA, development, and core subjects." },
    { num: "03", title: "Build Projects", desc: "Turn knowledge into practical experience." },
    { num: "04", title: "Gain Industry Exposure", desc: "Prepare for internships and real-world environments." },
    { num: "05", title: "Prepare for Interviews", desc: "Develop technical and professional confidence." },
    { num: "06", title: "Become Career Ready", desc: "Move toward internships, placements, and professional opportunities." }
  ];

  return (
    <div className="fc-wrapper">
      
      {/* Ambient background glows */}
      <div className="fc-ambient-bg">
        <div className="fc-ambient-blob fc-blob-1"></div>
        <div className="fc-ambient-blob fc-blob-2"></div>
        <div className="fc-ambient-blob fc-blob-3"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="fc-section fc-hero">
        <div className="fc-container">
          <motion.div className="fc-hero-grid" initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="fc-hero-content">
              <motion.span className="fc-label" variants={fadeInUp}>FOUNDATIONAL & CAREER</motion.span>
              <motion.h1 className="fc-heading-primary" variants={fadeInUp}>
                Build Your Foundation.<br />Shape Your Career.
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="fc-hero-media mobile-media" style={{ display: 'none' /* CSS Handles Mobile Order */ }}>
                <div className="fc-media-placeholder">
                  FOUNDATIONAL & CAREER HERO<br/>IMAGE / VIDEO PLACEHOLDER
                </div>
              </motion.div>

              <motion.h3 className="fc-subheading" variants={fadeInUp}>
                A structured learning journey designed to help students grow from their first year of college to becoming internship and placement ready.
              </motion.h3>
              <motion.p className="fc-paragraph" variants={fadeInUp}>
                Every stage of a student's academic journey requires a different approach to learning and career preparation. Oxavyn's Foundational & Career programs help students understand what to learn, when to learn it, and how to gradually build the technical, professional, and practical skills required for future opportunities.
              </motion.p>
              
              <motion.button 
                className="fc-btn-primary" 
                variants={fadeInUp}
                onClick={(e) => handleKnowMore(e, "")}
              >
                Send an Enquiry
              </motion.button>
            </div>
            
            <motion.div variants={fadeInUp} className="desktop-media">
              <div className="fc-media-placeholder" style={{ minHeight: '500px' }}>
                FOUNDATIONAL & CAREER HERO<br/>IMAGE / VIDEO PLACEHOLDER
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. JOURNEY INTRODUCTION */}
      <section className="fc-section">
        <div className="fc-container">
          <motion.div className="fc-intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <div className="fc-intro-content">
              <motion.h2 className="fc-heading-secondary" variants={fadeInUp}>Your Career Is a Journey, Not a Single Step.</motion.h2>
              
              <motion.div variants={fadeInUp} className="mobile-media" style={{ display: 'none' }}>
                <div className="fc-media-placeholder">STUDENT CAREER JOURNEY<br/>IMAGE / VIDEO PLACEHOLDER</div>
              </motion.div>

              <motion.p className="fc-paragraph" variants={fadeInUp}>
                Strong careers are built gradually. The concepts you understand in your early academic years become the foundation for advanced technical skills, projects, internships, interviews, and professional opportunities later. Oxavyn helps students approach this journey step by step instead of waiting until the final year to start preparing.
              </motion.p>
            </div>
            
            <motion.div variants={fadeInUp} className="desktop-media">
              <div className="fc-media-placeholder">STUDENT CAREER JOURNEY<br/>IMAGE / VIDEO PLACEHOLDER</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. CAREER JOURNEY CARDS */}
      <section className="fc-section">
        <div className="fc-container">
          <motion.div className="fc-center-text" style={{ maxWidth: '800px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="fc-heading-secondary" variants={fadeInUp}>Choose Your Stage</motion.h2>
            <motion.p className="fc-subheading" variants={fadeInUp}>Start where you are and build toward where you want to go.</motion.p>
          </motion.div>

          <div className="fc-cards-grid">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                className="fc-glass-card fc-course-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="fc-ambient-border-glow"></div>
                <div className="fc-course-number">{card.number}</div>
                <h3 className="fc-course-title">{card.title}</h3>
                
                <div className="fc-course-media">
                  <div className="fc-media-placeholder" style={{ minHeight: '100%', padding: '1rem' }}>
                    {card.title.toUpperCase()} IMAGE / VIDEO PLACEHOLDER
                  </div>
                </div>

                <div className="fc-course-tags">
                  {card.tags.map(tag => <span key={tag} className="fc-tag">{tag}</span>)}
                </div>
                
                <p className="fc-course-desc">{card.desc}</p>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="fc-btn-outline" onClick={(e) => handleKnowMore(e, card.title)}>
                    Know More
                  </button>
                  <button className="fc-btn-primary" style={{ padding: '1rem 1.5rem' }} onClick={(e) => handleKnowMore(e, card.title)}>
                    Enquire Now
                  </button>
                </div>
                
                <div className="fc-card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW THE JOURNEY WORKS */}
      <section className="fc-section">
        <div className="fc-container">
          <motion.div className="fc-center-text" style={{ maxWidth: '800px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="fc-heading-secondary" variants={fadeInUp}>From Foundation to Opportunity</motion.h2>
          </motion.div>

          <div className="fc-workflow-grid">
            {workflowSteps.map((step, idx) => (
              <motion.div key={idx} className="fc-step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="fc-step-num">{step.num}</div>
                <h4 className="fc-step-title">{step.title}</h4>
                <p className="fc-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="fc-media-placeholder" style={{ minHeight: '400px' }}>
              CAREER JOURNEY VIDEO PLACEHOLDER
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FOUNDATION + CAREER CONTENT SECTION */}
      <section className="fc-section">
        <div className="fc-container">
          <motion.div className="fc-center-text" style={{ maxWidth: '800px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="fc-heading-secondary" variants={fadeInUp}>Build Skills Before You Need Them.</motion.h2>
            <motion.p className="fc-paragraph" variants={fadeInUp}>
              Career preparation becomes easier when it starts early. Students who gradually develop programming fundamentals, technical concepts, projects, communication skills, professional profiles, and problem-solving abilities are better positioned to take advantage of opportunities when they appear. Oxavyn's structured approach helps students build these capabilities progressively throughout their academic journey.
            </motion.p>
          </motion.div>

          <div className="fc-editorial-grid">
            <motion.div className="fc-glass-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="fc-ambient-border-glow"></div>
              <h3 className="fc-course-title">Academic Foundation</h3>
              <ul style={{ marginBottom: '2rem', paddingLeft: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                <li>Programming fundamentals</li>
                <li>Core computer science</li>
                <li>Logical thinking</li>
                <li>Problem-solving</li>
                <li>Technical concepts</li>
              </ul>
              <div className="fc-media-placeholder" style={{ minHeight: '200px' }}>
                ACADEMIC FOUNDATION IMAGE PLACEHOLDER
              </div>
            </motion.div>

            <motion.div className="fc-glass-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="fc-ambient-border-glow"></div>
              <h3 className="fc-course-title">Career Preparation</h3>
              <ul style={{ marginBottom: '2rem', paddingLeft: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                <li>Resume</li>
                <li>Projects</li>
                <li>Internships</li>
                <li>Interviews</li>
                <li>Placement preparation</li>
              </ul>
              <div className="fc-media-placeholder" style={{ minHeight: '200px' }}>
                CAREER PREPARATION IMAGE / VIDEO PLACEHOLDER
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. ENQUIRY FORM */}
      <section className="fc-section" id="foundational-career-enquiry">
        <div className="fc-container">
          <div className="fc-form-wrapper">
            <motion.div className="fc-center-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 className="fc-heading-secondary" variants={fadeInUp}>Plan Your Next Step</motion.h2>
              <motion.p className="fc-subheading" variants={fadeInUp}>Tell us where you are in your journey and we'll help you understand the right path forward.</motion.p>
              <motion.p className="fc-paragraph fc-center-text" variants={fadeInUp} style={{ marginBottom: '3rem' }}>
                Whether you are just beginning your college journey, developing technical skills, preparing for internships, or approaching placements, share your details with us. Our team can understand your current stage and help you explore the appropriate learning and career pathway.
              </motion.p>
            </motion.div>

            <motion.div style={{ position: 'relative' }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="fc-form-glow-bg"></div>
              <div className="fc-glass-card">
                <div className="fc-ambient-border-glow"></div>
                
                {enquiryContext && (
                  <motion.div 
                    className="fc-form-highlight"
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginBottom: '2rem' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    You're enquiring about: {enquiryContext}
                  </motion.div>
                )}

                {/* TODO: Connect this form to Oxavyn enquiry/student management system backend */}
                <form className="fc-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="fc-input-group">
                    <label className="fc-label-input">Full Name</label>
                    <input type="text" className="fc-input" placeholder="Enter your full name" />
                  </div>
                  
                  <div className="fc-input-group">
                    <label className="fc-label-input">Email Address</label>
                    <input type="email" className="fc-input" placeholder="Enter your email address" />
                  </div>

                  <div className="fc-input-group">
                    <label className="fc-label-input">Phone Number</label>
                    <input type="tel" className="fc-input" placeholder="Enter your phone number" />
                  </div>

                  <div className="fc-input-group">
                    <label className="fc-label-input">University / College Name</label>
                    <input type="text" className="fc-input" placeholder="Enter your university or college" />
                  </div>

                  <div className="fc-input-group">
                    <label className="fc-label-input">Current Year</label>
                    <select 
                      className={`fc-input fc-select ${highlightedField === 'year' ? 'fc-input-highlight' : ''}`}
                      value={formData.year}
                      onChange={(e) => setFormData({...formData, year: e.target.value})}
                    >
                      <option value="" disabled>Select Year</option>
                      <option value="First Year">First Year</option>
                      <option value="Second Year">Second Year</option>
                      <option value="Third Year">Third Year</option>
                      <option value="Fourth Year">Fourth Year</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="fc-input-group">
                    <label className="fc-label-input">Area of Interest</label>
                    <select 
                      className={`fc-input fc-select ${highlightedField === 'interest' ? 'fc-input-highlight' : ''}`}
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    >
                      <option value="" disabled>Select Interest</option>
                      <option value="Foundation & Programming">Foundation & Programming</option>
                      <option value="DSA">DSA</option>
                      <option value="Core Computer Science">Core Computer Science</option>
                      <option value="Projects">Projects</option>
                      <option value="Internship Preparation">Internship Preparation</option>
                      <option value="Placement Preparation">Placement Preparation</option>
                      <option value="Career Guidance">Career Guidance</option>
                    </select>
                  </div>

                  <div className="fc-input-group">
                    <label className="fc-label-input">Message</label>
                    <textarea className="fc-input" style={{ minHeight: '120px', resize: 'vertical' }} placeholder="Tell us what you would like help with..."></textarea>
                  </div>

                  <button type="submit" className="fc-btn-primary" style={{ marginTop: '1rem' }}>
                    Send Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CAREER READINESS MEDIA SECTION */}
      <section className="fc-section" style={{ background: 'rgba(139, 92, 246, 0.02)' }}>
        <div className="fc-container">
          <motion.div className="fc-center-text" style={{ maxWidth: '800px', marginBottom: '4rem' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="fc-heading-secondary">Preparation Creates Confidence.</h2>
            <p className="fc-paragraph">
              Academic knowledge is only one part of career preparation. Students also need practical experience, communication, problem-solving ability, professional presentation, and the confidence to demonstrate what they know. The right preparation helps turn these individual skills into a stronger overall profile.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ position: 'relative' }}>
            <div className="fc-media-placeholder" style={{ minHeight: '500px', border: 'none', background: 'rgba(139, 92, 246, 0.1)' }}>
              CAREER READINESS VIDEO PLACEHOLDER
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '10%',
                background: '#fff',
                padding: '1rem 2rem',
                borderRadius: '50px',
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)',
                color: '#6d28d9',
                fontWeight: '700',
                fontSize: '0.9rem',
                letterSpacing: '0.05em'
              }}
            >
              Learn &rarr; Practice &rarr; Build &rarr; Prepare &rarr; Grow
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="fc-section" style={{ borderTop: '1px solid rgba(139, 92, 246, 0.1)' }}>
        <div className="fc-container">
          <motion.div className="fc-center-text" style={{ maxWidth: '800px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="fc-heading-secondary" variants={fadeInUp}>Start Building Your Future Today.</motion.h2>
            <motion.p className="fc-paragraph fc-center-text" variants={fadeInUp} style={{ marginBottom: '2.5rem' }}>
              Wherever you are in your academic journey, there is always a next step to take. Build the right foundation, develop practical skills, gain experience, and prepare for the opportunities ahead.
            </motion.p>
            <motion.button 
              className="fc-btn-primary" 
              variants={fadeInUp}
              onClick={(e) => handleKnowMore(e, "")}
            >
              Send an Enquiry
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
