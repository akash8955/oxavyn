"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SkillEnhancementClient() {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [highlighted, setHighlighted] = useState(false);

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
  const handleKnowMore = (e, programName) => {
    e.preventDefault();
    setSelectedProgram(programName);
    
    // Trigger highlight animation
    setHighlighted(true);
    setTimeout(() => setHighlighted(false), 2000);

    // Smooth scroll to form
    const formElement = document.getElementById("skill-enhancement-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const courses = [
    {
      number: "COURSE 01",
      title: "LIVE TECHNOLOGY COURSES",
      desc: "Learn modern technologies through structured live sessions, practical demonstrations, guided exercises, and hands-on learning. Develop familiarity with tools and technologies used in today's digital environment while learning alongside instructors and other students.",
      tags: ["LIVE LEARNING", "TECHNOLOGY", "HANDS-ON"]
    },
    {
      number: "COURSE 02",
      title: "DSA",
      desc: "Strengthen your problem-solving abilities through data structures, algorithms, logical thinking, and coding practice. Build a stronger programming foundation and develop the skills needed to approach technical problems more systematically.",
      tags: ["DSA", "PROBLEM SOLVING", "CODING"]
    },
    {
      number: "COURSE 03",
      title: "CORE SUBJECTS",
      desc: "Build a strong foundation in essential computer science concepts such as DBMS, Operating Systems, Object-Oriented Programming, Computer Networks, Software Engineering, and other subjects that support long-term technical growth.",
      tags: ["DBMS", "OS", "OOP", "NETWORKS"]
    },
    {
      number: "COURSE 04",
      title: "RESUME BUILDING",
      desc: "Create a professional resume that clearly communicates your education, technical skills, projects, achievements, and experience. Learn how to organize your information and present your strengths in a way that is easier for recruiters to understand.",
      tags: ["RESUME", "CAREER", "PLACEMENT"]
    },
    {
      number: "COURSE 05",
      title: "SELF-PACED COURSES",
      desc: "Learn according to your own schedule with flexible course experiences that allow you to revisit concepts, practice consistently, and progress at a comfortable pace. Designed for students balancing academics, projects, internships, and personal learning goals.",
      tags: ["FLEXIBLE", "SELF-PACED", "LEARNING"]
    },
    {
      number: "COURSE 06",
      title: "MENTORSHIP",
      desc: "Get structured guidance and practical feedback from experienced professionals. Receive support with technical learning, projects, career decisions, skill development, and the challenges that often come with building a technology career.",
      tags: ["MENTORSHIP", "GUIDANCE", "CAREER"]
    }
  ];

  return (
    <div className="skill-enhancement-wrapper">
      
      {/* Ambient background glows */}
      <div className="se-ambient-bg">
        <div className="se-ambient-blob se-blob-1"></div>
        <div className="se-ambient-blob se-blob-2"></div>
        <div className="se-ambient-blob se-blob-3"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="se-section se-hero">
        <div className="se-container">
          <motion.div 
            className="se-hero-grid"
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <div className="se-hero-content">
              <motion.h1 className="se-heading-primary" variants={fadeInUp}>
                Build Skills.<br />Create Opportunities.
              </motion.h1>
              <motion.h3 className="se-subheading" variants={fadeInUp}>
                Practical learning experiences designed to help students strengthen their technical knowledge, build confidence, and prepare for real-world opportunities.
              </motion.h3>
              
              {/* Media for mobile layout order */}
              <motion.div variants={fadeInUp} className="se-hero-media" style={{ display: 'none' /* Handled in CSS for mobile order */ }}>
                <div className="se-media-placeholder">
                  <div className="se-media-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="se-media-text">SKILL ENHANCEMENT<br/>HERO IMAGE / VIDEO PLACEHOLDER</div>
                </div>
              </motion.div>

              <motion.p className="se-paragraph" variants={fadeInUp}>
                Oxavyn's Skill Enhancement programs are designed to help students move beyond classroom learning and develop practical, career-focused skills. From modern technologies and data structures to core computer science concepts, resume preparation, self-paced learning, and professional mentorship, students can choose learning experiences based on their current goals and career direction.
              </motion.p>
            </div>
            
            <motion.div variants={fadeInUp} className="se-hero-media desktop-media">
              <div className="se-media-placeholder">
                <div className="se-media-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="se-media-text">SKILL ENHANCEMENT<br/>HERO IMAGE / VIDEO PLACEHOLDER</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="se-section">
        <div className="se-container">
          <motion.div 
            className="se-intro-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <div className="se-intro-content">
              <motion.h2 className="se-heading-secondary" variants={fadeInUp}>Learn. Practice.<br/>Improve. Grow.</motion.h2>
              
              <motion.div variants={fadeInUp} className="se-intro-media" style={{ display: 'none' /* CSS handling */ }}>
                <div className="se-media-placeholder">
                  <div className="se-media-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <div className="se-media-text">SKILL DEVELOPMENT<br/>IMAGE / VIDEO PLACEHOLDER</div>
                </div>
              </motion.div>

              <motion.p className="se-paragraph" variants={fadeInUp}>
                Technical growth requires continuous learning, practical exposure, problem-solving, and career preparation. Our programs are structured to help you develop the abilities that the tech industry expects, while building a portfolio of knowledge that you can rely on throughout your career.
              </motion.p>
            </div>
            
            <motion.div variants={fadeInUp} className="se-intro-media desktop-media">
              <div className="se-media-placeholder">
                <div className="se-media-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <div className="se-media-text">SKILL DEVELOPMENT<br/>IMAGE / VIDEO PLACEHOLDER</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. COURSES SECTION */}
      <section className="se-section">
        <div className="se-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="se-center-text" style={{ maxWidth: '800px', marginBottom: '3rem' }}
          >
            <motion.h2 className="se-heading-secondary" variants={fadeInUp}>Choose Your Learning Path</motion.h2>
            <motion.p className="se-subheading" variants={fadeInUp}>Build the skills that match your academic, technical, and career goals.</motion.p>
          </motion.div>

          <div className="se-courses-grid">
            {courses.map((course, idx) => (
              <motion.div 
                key={idx}
                className="se-glass-card se-course-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="se-ambient-border-glow"></div>
                <div className="se-course-number">{course.number}</div>
                <h3 className="se-course-title">{course.title}</h3>
                
                <div className="se-course-media">
                  <div className="se-media-placeholder" style={{ minHeight: '100%', padding: '1rem' }}>
                    <div className="se-media-text">{course.title}<br/>IMAGE / VIDEO</div>
                  </div>
                </div>

                <div className="se-course-tags">
                  {course.tags.map(tag => <span key={tag} className="se-tag">{tag}</span>)}
                </div>
                
                <p className="se-course-desc">{course.desc}</p>
                
                <button 
                  className="se-btn-outline" 
                  onClick={(e) => handleKnowMore(e, course.title === "LIVE TECHNOLOGY COURSES" ? "Live Technology Courses" : course.title)}
                >
                  Know More &rarr;
                </button>
                <div className="se-card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COURSE EXPERIENCE SECTION */}
      <section className="se-section">
        <div className="se-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="se-center-text"
          >
            <motion.h2 className="se-heading-secondary" variants={fadeInUp}>Designed Around Your Growth</motion.h2>
          </motion.div>

          <div className="se-exp-grid">
            <motion.div className="se-exp-block" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h4 className="se-exp-title">Learn</h4>
              <p className="se-paragraph" style={{marginBottom: 0}}>Build strong conceptual understanding.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="se-media-placeholder" style={{ minHeight: '200px' }}>
                <div className="se-media-text">LEARNING IMAGE PLACEHOLDER</div>
              </div>
            </motion.div>

            <motion.div className="se-exp-block" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h4 className="se-exp-title">Practice</h4>
              <p className="se-paragraph" style={{marginBottom: 0}}>Apply concepts through exercises and practical activities.</p>
            </motion.div>

            <motion.div className="se-exp-block" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h4 className="se-exp-title">Build</h4>
              <p className="se-paragraph" style={{marginBottom: 0}}>Work on projects and meaningful learning outcomes.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="se-media-placeholder" style={{ minHeight: '200px' }}>
                <div className="se-media-text">PRACTICAL LEARNING VIDEO PLACEHOLDER</div>
              </div>
            </motion.div>

            <motion.div className="se-exp-block" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h4 className="se-exp-title">Improve</h4>
              <p className="se-paragraph" style={{marginBottom: 0}}>Identify gaps and continuously strengthen your skills.</p>
            </motion.div>

            <motion.div className="se-exp-block" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h4 className="se-exp-title">Prepare</h4>
              <p className="se-paragraph" style={{marginBottom: 0}}>Develop confidence for internships, placements, and professional opportunities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SKILL ENHANCEMENT APPLICATION FORM */}
      <section className="se-section" id="skill-enhancement-form">
        <div className="se-container">
          <div className="se-form-wrapper">
            <motion.div 
              className="se-center-text"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            >
              <motion.h2 className="se-heading-secondary" variants={fadeInUp}>Start Your Skill Enhancement Journey</motion.h2>
              <motion.p className="se-subheading" variants={fadeInUp}>Choose your learning path and take the next step toward becoming career-ready.</motion.p>
              <motion.p className="se-paragraph se-center-text" variants={fadeInUp} style={{ marginBottom: '3rem' }}>
                Tell us a little about yourself and select the skill enhancement program that matches your current goals. Our team can use this information to understand your learning interests and guide you toward the appropriate program.
              </motion.p>
            </motion.div>

            <motion.div 
              style={{ position: 'relative' }}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <div className="se-form-glow-bg"></div>
              <div className="se-glass-card se-form-card">
                <div className="se-ambient-border-glow"></div>
              {selectedProgram && (
                <motion.div 
                  className="se-form-highlight"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: '2rem' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  You're interested in: {selectedProgram}
                </motion.div>
              )}

              {/* TODO: Form will later be connected to the Oxavyn student/application dashboard */}
              <form className="se-form" onSubmit={(e) => e.preventDefault()}>
                <div className="se-input-group">
                  <label className="se-label">Full Name</label>
                  <input type="text" className="se-input" placeholder="Enter your full name" />
                </div>
                
                <div className="se-input-group">
                  <label className="se-label">Email Address</label>
                  <input type="email" className="se-input" placeholder="Enter your email address" />
                </div>

                <div className="se-input-group">
                  <label className="se-label">University / College Name</label>
                  <input type="text" className="se-input" placeholder="Enter your university or college name" />
                </div>

                <div className="se-input-group">
                  <label className="se-label">Graduation Year</label>
                  <select className="se-input se-select" defaultValue="">
                    <option value="" disabled>Select Year</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="se-input-group">
                  <label className="se-label">Current Semester & Year</label>
                  <input type="text" className="se-input" placeholder="Example: 6th Semester, 3rd Year" />
                </div>

                <div className="se-input-group">
                  <label className="se-label">Select Skill Enhancement Program</label>
                  <select 
                    className={`se-input se-select ${highlighted ? 'se-input-highlight' : ''}`}
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                  >
                    <option value="" disabled>Select a program</option>
                    <option value="Live Technology Courses">Live Technology Courses</option>
                    <option value="DSA">DSA</option>
                    <option value="CORE SUBJECTS">Core Subjects</option>
                    <option value="RESUME BUILDING">Resume Building</option>
                    <option value="SELF-PACED COURSES">Self-Paced Courses</option>
                    <option value="MENTORSHIP">Mentorship</option>
                  </select>
                </div>

                <button type="submit" className="se-btn-primary" style={{ marginTop: '1rem' }}>
                  Submit Application
                </button>
              </form>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. AFTER FORM SECTION */}
      <section className="se-section se-career-section">
        <div className="se-container">
          <motion.h2 className="se-heading-secondary" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Skills Today. Opportunities Tomorrow.
          </motion.h2>
          <motion.p className="se-paragraph se-center-text" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Skill development becomes more valuable when learning is connected to real opportunities. Oxavyn's learning experiences are designed to help students strengthen their technical foundation, improve confidence, prepare professional profiles, and become better prepared for internships and future career opportunities.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="se-career-media">
              <div className="se-media-placeholder">
                <div className="se-media-text">CAREER PREPARATION<br/>IMAGE / VIDEO PLACEHOLDER</div>
              </div>
            </div>
          </motion.div>
          
          <motion.a href="/students/internships" className="se-btn-outline" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Explore Internships &rarr;
          </motion.a>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="se-final-cta">
        <div className="se-container">
          <motion.h2 className="se-heading-secondary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Your Next Skill Starts Here.
          </motion.h2>
          <motion.p className="se-paragraph se-center-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Choose a learning path, strengthen your capabilities, and take a meaningful step toward your future career.
          </motion.p>
          <motion.button 
            className="se-btn-primary" 
            style={{ marginTop: '1.5rem' }}
            onClick={(e) => {
              e.preventDefault();
              const formElement = document.getElementById("skill-enhancement-form");
              if (formElement) formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Start Learning
          </motion.button>
        </div>
      </section>

    </div>
  );
}
