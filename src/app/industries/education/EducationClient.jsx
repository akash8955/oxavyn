"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function EducationClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    organizationType: "",
    interests: [],
    challenge: ""
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const scrollToEnquiry = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("education-enquiry");
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInterestChange = (e) => {
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setFormData({ ...formData, interests: selectedValues });
  };

  return (
    <div className="edu-wrapper">
      {/* Ambient background glows */}
      <div className="edu-ambient-bg">
        <div className="edu-ambient-blob edu-blob-1"></div>
        <div className="edu-ambient-blob edu-blob-2"></div>
        <div className="edu-ambient-blob edu-blob-3"></div>
        <div className="edu-ambient-blob edu-blob-4"></div>
      </div>

      {/* 01 — HERO */}
      <section className="edu-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="edu-container" style={{ width: '100%' }}>

          {/* HEADING FIRST */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            <motion.div variants={fadeInUp} className="edu-eyebrow">OXAVYN FOR EDUCATION</motion.div>
            <motion.h1 variants={fadeInUp} className="edu-heading-primary" style={{ maxWidth: '900px', margin: '0 auto 1.5rem' }}>
              Build a Smarter, More Connected Education Ecosystem.
            </motion.h1>
          </motion.div>

          {/* MEDIA SECOND */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="edu-media-placeholder" style={{ minHeight: '550px' }}>
              [EDUCATION HERO IMAGE / VIDEO PLACEHOLDER]
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '1rem', fontWeight: 'normal' }}>
                Smart classroom • Online learning • Digital campus
              </div>
            </div>
          </motion.div>

          {/* SUBHEADING / PARAGRAPH THIRD */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.p variants={fadeInUp} className="edu-subheading" style={{ maxWidth: '800px', margin: '0 auto 1rem' }}>
              Connect students, educators, institutions, learning, operations, communication, and technology through one intelligent digital environment.
            </motion.p>
            <motion.p variants={fadeInUp} className="edu-paragraph" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
              Education organizations manage much more than teaching and learning. Schools, colleges, universities, coaching centers, training institutes, and online education platforms need to coordinate students, teachers, admissions, attendance, fees, courses, examinations, communication, performance, and administration. Oxavyn helps bring these functions together through connected education technology, management systems, CRM, ERP, analytics, and automation.
            </motion.p>
            <motion.div variants={fadeInUp} className="edu-button-group" style={{ justifyContent: 'center' }}>
              <button onClick={scrollToEnquiry} className="edu-btn-primary">Explore Education Solutions</button>
              <button onClick={scrollToEnquiry} className="edu-btn-secondary">Talk to Oxavyn</button>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 02 — EDUCATION ECOSYSTEM */}
      <section className="edu-section edu-section-alt">
        <div className="edu-container">

          {/* HEADING FIRST */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <motion.h2 variants={fadeInUp} className="edu-heading-secondary">Education Is an Ecosystem. Technology Should Connect It.</motion.h2>
          </motion.div>

          {/* MEDIA SECOND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="edu-media-placeholder" style={{ minHeight: '400px' }}>
              [CONNECTED EDUCATION ECOSYSTEM IMAGE / VIDEO PLACEHOLDER]
            </div>
          </motion.div>

          {/* SUBHEADING / PARAGRAPH / FEATURES THIRD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.p variants={fadeInUp} className="edu-subheading" style={{ maxWidth: '800px', margin: '0 auto 1rem' }}>
              One connected environment for students, educators, administrators, and management.
            </motion.p>
            <motion.p variants={fadeInUp} className="edu-paragraph" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
              Modern education involves multiple stakeholders and interconnected processes. Student information, admissions, academics, attendance, fees, communication, faculty operations, examinations, learning platforms, and management reporting often operate across different systems. Oxavyn can help bring these capabilities together into a more unified digital ecosystem.
            </motion.p>

            <div className="edu-grid-3" style={{ textAlign: 'left' }}>
              <motion.div variants={fadeInUp} className="edu-glass-card">
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title">Student Management</div>
                <div className="edu-card-desc">Centralize student profiles, academic information, classes, courses, and records.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="edu-glass-card">
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title">Admissions</div>
                <div className="edu-card-desc">Manage enquiries, applications, counselling, admission workflows, and enrollment.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="edu-glass-card">
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title">Learning</div>
                <div className="edu-card-desc">Connect courses, lessons, assessments, learning activity, and student progress.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="edu-glass-card">
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title">Administration</div>
                <div className="edu-card-desc">Manage fees, attendance, faculty, departments, operations, and institutional processes.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="edu-glass-card">
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title">Communication</div>
                <div className="edu-card-desc">Connect students, parents, teachers, administrators, and management.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="edu-glass-card">
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title">Analytics</div>
                <div className="edu-card-desc">Turn institutional data into dashboards, reports, and actionable insights.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03 — EDUCATION SEGMENTS */}
      <section className="edu-section">
        <div className="edu-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.h2 variants={fadeInUp} className="edu-heading-secondary">Technology Designed for Every Education Environment.</motion.h2>
            <motion.p variants={fadeInUp} className="edu-paragraph" style={{ margin: '0 auto' }}>
              Every education organization has different workflows and priorities. Oxavyn can provide flexible technology solutions designed around the requirements of schools, higher education institutions, coaching organizations, training institutes, and online learning businesses.
            </motion.p>
          </motion.div>

          <div className="edu-grid-2">
            {[
              {
                title: "Schools",
                mediaText: "SCHOOL TECHNOLOGY",
                desc: "Create a connected digital environment for students, teachers, parents, and school administration with tools for student management, attendance, fees, examinations, communication, academic records, and institutional reporting.",
                tags: ["STUDENT MGMT", "ATTENDANCE", "PARENTS", "FEES", "EXAM", "ADMIN"]
              },
              {
                title: "Colleges & Universities",
                mediaText: "COLLEGE & UNIVERSITY",
                desc: "Connect students, departments, faculty, admissions, examinations, placements, finance, and administration through a centralized technology ecosystem.",
                tags: ["ADMISSIONS", "DEPARTMENTS", "FACULTY", "EXAMS", "PLACEMENTS"]
              },
              {
                title: "Coaching Centers",
                mediaText: "COACHING CENTER",
                desc: "Simplify the management of batches, students, faculty, fees, enquiries, schedules, communication, and student performance.",
                tags: ["BATCHES", "PERFORMANCE", "FACULTY", "ENQUIRIES", "FEES"]
              },
              {
                title: "Training Institutes",
                mediaText: "TRAINING INSTITUTE",
                desc: "Manage learners, courses, trainers, schedules, assessments, certificates, admissions, and operational workflows through a connected platform.",
                tags: ["COURSES", "LEARNERS", "TRAINERS", "ASSESSMENTS", "CERTIFICATES"]
              },
              {
                title: "Online Education Platforms",
                mediaText: "ONLINE EDUCATION PLATFORM",
                desc: "Build a complete digital learning experience covering courses, video content, assessments, student accounts, progress tracking, instructor management, communication, and analytics.",
                tags: ["LMS", "COURSES", "VIDEO", "ASSESSMENTS", "TRACKING"]
              }
            ].map((segment, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                className="edu-glass-card"
                style={{ height: '100%' }}
              >
                <div className="edu-ambient-border-glow"></div>
                <h3 className="edu-heading-tertiary" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>{segment.title}</h3>
                
                <div className="edu-course-media">
                  <div className="edu-media-placeholder" style={{ minHeight: '100%', padding: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center' }}>{segment.mediaText}<br/>IMAGE / VIDEO</div>
                  </div>
                </div>

                <div className="edu-course-tags" style={{ justifyContent: 'center' }}>
                  {segment.tags.map(tag => (
                    <span key={tag} className="edu-tag">{tag}</span>
                  ))}
                </div>
                
                <p className="edu-course-desc" style={{ textAlign: 'center' }}>{segment.desc}</p>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                  <button className="edu-btn-outline" onClick={scrollToEnquiry}>Know More &rarr;</button>
                </div>
                <div className="edu-card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — DATA / ANALYTICS */}
      <section className="edu-section edu-section-alt">
        <div className="edu-container">

          {/* HEADING FIRST */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <motion.h2 variants={fadeInUp} className="edu-heading-secondary">Turn Education Data Into Better Decisions.</motion.h2>
          </motion.div>

          {/* MEDIA SECOND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="edu-media-placeholder" style={{ minHeight: '600px' }}>
              [EDUCATION ANALYTICS DASHBOARD IMAGE / VIDEO PLACEHOLDER]
            </div>
          </motion.div>

          {/* SUBHEADING / PARAGRAPH / FEATURES THIRD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.p variants={fadeInUp} className="edu-paragraph" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
              Educational organizations generate valuable information across admissions, attendance, academics, finance, learning activity, student performance, faculty operations, and engagement. Oxavyn can bring this information into dashboards and reporting systems that give decision-makers clearer visibility.
            </motion.p>

            <div className="edu-grid-3" style={{ textAlign: 'left' }}>
              <motion.div variants={fadeInUp} className="edu-glass-card" style={{ padding: '1.5rem' }}>
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Student Analytics</div>
                <div className="edu-card-desc" style={{ fontSize: '0.9rem' }}>Enrollment, attendance, engagement, and performance insights.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="edu-glass-card" style={{ padding: '1.5rem' }}>
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Admission Analytics</div>
                <div className="edu-card-desc" style={{ fontSize: '0.9rem' }}>Enquiries, applications, conversions, and admission trends.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="edu-glass-card" style={{ padding: '1.5rem' }}>
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Academic Analytics</div>
                <div className="edu-card-desc" style={{ fontSize: '0.9rem' }}>Student, subject, course, department, and performance analysis.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="edu-glass-card" style={{ padding: '1.5rem' }}>
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Financial Analytics</div>
                <div className="edu-card-desc" style={{ fontSize: '0.9rem' }}>Fees, revenue, expenses, and financial trends.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="edu-glass-card" style={{ padding: '1.5rem' }}>
                <div className="edu-ambient-border-glow"></div>
                <div className="edu-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Management Analytics</div>
                <div className="edu-card-desc" style={{ fontSize: '0.9rem' }}>A centralized view of institutional performance and operational indicators.</div>
                <div className="edu-card-glow"></div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 05 — FINAL CTA + EDUCATION ENQUIRY */}
      <section className="edu-section" id="education-enquiry" style={{ background: 'linear-gradient(135deg, rgba(253,253,254,1) 0%, rgba(240,249,255,1) 100%)' }}>
        <div className="edu-container">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.h2 variants={fadeInUp} className="edu-heading-secondary">Build the Education Technology Your Organization Needs.</motion.h2>
            <motion.p variants={fadeInUp} className="edu-paragraph" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
              Whether you operate a school, college, university, coaching center, training institute, or online education platform, Oxavyn can help you explore a connected technology ecosystem built around your organization's needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="edu-form-container"
          >
            <div className="edu-form-modern">
              <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-outfit, sans-serif)', color: '#0f0f11' }}>Let's Build Your Education Technology Solution.</h3>
                <p style={{ color: '#4b5563', marginBottom: '1rem', fontWeight: 500 }}>Tell us about your organization and what you want to improve.</p>
                <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} style={{ position: 'relative', zIndex: 1 }}>
                <div className="edu-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="edu-form-group" style={{ marginBottom: 0 }}>
                    <label className="edu-form-label">Full Name</label>
                    <input type="text" className="edu-form-input" placeholder="Enter your full name" />
                  </div>

                  <div className="edu-form-group" style={{ marginBottom: 0 }}>
                    <label className="edu-form-label">Work Email</label>
                    <input type="email" className="edu-form-input" placeholder="Enter your business email" />
                  </div>
                </div>

                <div className="edu-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="edu-form-group" style={{ marginBottom: 0 }}>
                    <label className="edu-form-label">Phone Number</label>
                    <input type="tel" className="edu-form-input" placeholder="Enter your phone number" />
                  </div>

                  <div className="edu-form-group" style={{ marginBottom: 0 }}>
                    <label className="edu-form-label">Institution / Organization Name</label>
                    <input type="text" className="edu-form-input" placeholder="Enter your institution name" />
                  </div>
                </div>

                <div className="edu-form-group">
                  <label className="edu-form-label">Organization Type</label>
                  <select className="edu-form-select" defaultValue="">
                    <option value="" disabled>Select organization type</option>
                    <option value="School">School</option>
                    <option value="College">College</option>
                    <option value="University">University</option>
                    <option value="Coaching Center">Coaching Center</option>
                    <option value="Training Institute">Training Institute</option>
                    <option value="Online Education Platform">Online Education Platform</option>
                    <option value="Education Group">Education Group</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="edu-form-group">
                  <label className="edu-form-label">Areas of Interest (Select multiple)</label>
                  <select
                    multiple
                    className="edu-form-select"
                    style={{ minHeight: '140px' }}
                    onChange={handleInterestChange}
                  >
                    <option value="Student Management">Student Management</option>
                    <option value="CRM">CRM</option>
                    <option value="ERP">ERP</option>
                    <option value="LMS">LMS</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Attendance">Attendance</option>
                    <option value="Examination Management">Examination Management</option>
                    <option value="Fees Management">Fees Management</option>
                    <option value="Faculty Management">Faculty Management</option>
                    <option value="Online Learning">Online Learning</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Automation">Automation</option>
                    <option value="Communication">Communication</option>
                    <option value="Custom Education Software">Custom Education Software</option>
                  </select>
                </div>

                <div className="edu-form-group">
                  <label className="edu-form-label">Current Challenge</label>
                  <textarea className="edu-form-textarea" placeholder="Tell us about your current system, challenge, or requirement..."></textarea>
                </div>

                <button type="submit" className="edu-btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem' }}>
                  Send Enquiry
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#6b7280', marginTop: '1.5rem' }}>
                  Our team will review your requirements and help identify the appropriate next step.
                </p>
                {/* TODO: Implement backend integration for enquiry submission */}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
