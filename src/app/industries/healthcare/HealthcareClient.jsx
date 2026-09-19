"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResponsiveVideo from '@/components/ResponsiveVideo';

export default function HealthcareClient() {
  const [formData, setFormData] = useState({
    type: "",
    interests: []
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
    const formElement = document.getElementById("healthcare-enquiry");
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInterestChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.selected;
    
    // For a standard multi-select, React handles the 'value' as an array if we use an array in state.
    // However, native multi-select onChange events require iterating over selectedOptions.
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
    <div className="hc-wrapper">
      {/* Ambient background glows */}
      <div className="hc-ambient-bg">
        <div className="hc-ambient-blob hc-blob-1"></div>
        <div className="hc-ambient-blob hc-blob-2"></div>
        <div className="hc-ambient-blob hc-blob-3"></div>
        <div className="hc-ambient-blob hc-blob-4"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="hc-section hc-hero">
        <div className="hc-container">
          <motion.div className="hc-hero-grid" initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="hc-hero-content hc-order-wrapper">
              <motion.div className="hc-order-heading" variants={fadeInUp}>
                <span className="hc-eyebrow">OXAVYN FOR HEALTHCARE</span>
                <h1 className="hc-heading-primary">Transform Healthcare Into a Connected, Intelligent System.</h1>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="hc-order-media mobile-media" style={{ display: 'none' }}>
                <img src="/images/Banner_2.png" alt="Media" style={{ width: '100%', height: '100%', minHeight: '350px', objectFit: 'cover', borderRadius: '12px' }} />
              </motion.div>

              <motion.h3 className="hc-subheading hc-order-subheading" variants={fadeInUp}>
                Bring patients, healthcare teams, operations, data, and business processes together through one intelligent digital ecosystem.
              </motion.h3>
              
              <motion.p className="hc-paragraph hc-order-paragraph" variants={fadeInUp}>
                Healthcare organizations manage thousands of interactions every day — from patient enquiries and appointments to clinical operations, billing, inventory, staff coordination, reporting, and follow-ups. Oxavyn helps connect these processes through integrated healthcare technology, CRM, ERP, analytics, and automation, creating a more organized and efficient digital environment.
              </motion.p>
              
              <motion.div className="hc-order-cta" variants={fadeInUp} style={{ display: 'flex', gap: '1rem' }}>
                <button className="hc-btn-primary" onClick={scrollToEnquiry}>Explore Healthcare Solutions</button>
                <button className="hc-btn-secondary" onClick={scrollToEnquiry}>Talk to Oxavyn</button>
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="hc-order-media desktop-media">
              <ResponsiveVideo src="/images/career-vid.mp4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. HEALTHCARE CHALLENGE */}
      <section className="hc-section hc-section-alt">
        <div className="hc-container std-layout-section">
          
          <div className="std-layout-split reverse">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="hc-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Healthcare Is Complex. Your Technology Shouldn't Be.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="hc-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Healthcare organizations often operate across multiple disconnected systems. Patient information may sit in one platform, business operations in another, financial processes somewhere else, while reports and analytics require manual consolidation. This fragmentation can create unnecessary administrative work, delays, duplicated information, and limited visibility.
                </motion.p>
              </motion.div>
            </div>

            {/* MEDIA SIDE */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="std-media-side">
              <ResponsiveVideo src="/images/career-vid.mp4" />
            </motion.div>
          </div>

          {/* FEATURES / CARDS BELOW */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-feature-card">
            <div className="hc-2col-grid">
              {[
                { title: "Disconnected Systems", desc: "Different departments using isolated tools." },
                { title: "Manual Processes", desc: "Repetitive administrative work consuming valuable time." },
                { title: "Limited Visibility", desc: "Important operational information spread across multiple systems." },
                { title: "Delayed Decisions", desc: "Teams relying on manually prepared reports instead of real-time insights." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <div className="hc-glass-card hc-problem-card">
                    <div className="hc-ambient-border-glow"></div>
                    <h4 className="hc-problem-title">{item.title}</h4>
                    <p className="hc-problem-desc" style={{ marginBottom: 0 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. OXAVYN HEALTHCARE ECOSYSTEM */}
      <section className="hc-section">
        <div className="hc-container hc-mobile-flex">
          <motion.div className="hc-center-text hc-order-heading" style={{ maxWidth: '900px', margin: '0 auto' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="hc-heading-secondary" variants={fadeInUp}>One Healthcare Ecosystem. Multiple Connected Capabilities.</motion.h2>
          </motion.div>

          <motion.div className="hc-ecosystem hc-order-media" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <div className="hc-eco-center">OXAVYN HEALTHCARE PLATFORM</div>
            
            {/* Hub nodes using absolute positioning for the diagram */}
            <div className="hc-eco-node" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}>Healthcare Management</div>
            <div className="hc-eco-node" style={{ top: '25%', right: '15%' }}>CRM</div>
            <div className="hc-eco-node" style={{ top: '50%', right: '5%', transform: 'translateY(-50%)' }}>ERP</div>
            <div className="hc-eco-node" style={{ bottom: '25%', right: '15%' }}>Data Analytics</div>
            <div className="hc-eco-node" style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}>Automation</div>
            <div className="hc-eco-node" style={{ bottom: '25%', left: '15%' }}>Patient Experience</div>
            <div className="hc-eco-node" style={{ top: '50%', left: '5%', transform: 'translateY(-50%)' }}>Operations</div>
            <div className="hc-eco-node" style={{ top: '25%', left: '15%' }}>Reporting</div>
            
            {/* SVG Connecting Lines */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
              <circle cx="50%" cy="50%" r="200" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="80%" y2="28%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="80%" y2="72%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="20%" y2="72%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="20%" y2="28%" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
            </svg>
          </motion.div>

          <motion.div className="hc-center-text hc-order-paragraph" style={{ maxWidth: '900px', margin: '0 auto' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p className="hc-paragraph" variants={fadeInUp}>
              Oxavyn's healthcare technology approach connects essential business and operational functions into a unified digital environment. Instead of treating CRM, ERP, analytics, and automation as separate solutions, the platform can be designed around how your organization actually operates.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4. HEALTHCARE MANAGEMENT */}
      <section className="hc-section hc-section-alt">
        <div className="hc-container std-layout-section">
          
          <div className="std-layout-split">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="hc-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Healthcare Operations, Connected.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.h3 variants={fadeInUp} className="hc-subheading" style={{ textAlign: 'left', marginBottom: '1rem' }}>Digitize the workflows that keep your healthcare organization moving.</motion.h3>
                <motion.p variants={fadeInUp} className="hc-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Build a centralized environment for managing important healthcare operations and administrative workflows. Depending on organizational requirements, the system can support patient records, appointments, doctor and staff coordination, department workflows, billing-related processes, inventory visibility, reports, and other operational activities.
                </motion.p>
              </motion.div>
            </div>

            {/* MEDIA SIDE */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="std-media-side">
              <ResponsiveVideo src="/images/career-vid.mp4" />
            </motion.div>
          </div>

          {/* FEATURES / CARDS BELOW */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-feature-card">
            <div className="hc-3col-grid" style={{ marginTop: '4rem' }}>
              {[
                { title: "Patient Management", desc: "Centralize patient-related information and interactions." },
                { title: "Appointment Management", desc: "Organize appointments, schedules, availability, and follow-ups." },
                { title: "Doctor & Staff Management", desc: "Improve visibility across teams, roles, schedules, and responsibilities." },
                { title: "Billing & Operational Workflows", desc: "Connect important administrative and financial processes." },
                { title: "Inventory Management", desc: "Track healthcare supplies, equipment, and inventory-related workflows." },
                { title: "Reports & Monitoring", desc: "Give management teams clearer visibility into organizational activity." }
              ].map((feature, idx) => (
                <motion.div key={idx} className="hc-glass-card" variants={fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <div className="hc-ambient-border-glow"></div>
                  <h4 className="hc-problem-title">{feature.title}</h4>
                  <p className="hc-problem-desc" style={{ marginBottom: 0 }}>{feature.desc}</p>
                  <div className="hc-card-glow"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>


      {/* 6. HEALTHCARE ERP */}
      <section className="hc-section hc-section-alt">
        <div className="hc-container std-layout-section">
          
          <div className="std-layout-split reverse">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="hc-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Run Healthcare Operations With ERP Intelligence.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.h3 variants={fadeInUp} className="hc-subheading" style={{ textAlign: 'left', marginBottom: '1rem' }}>Connect the business side of healthcare with operational reality.</motion.h3>
                <motion.p variants={fadeInUp} className="hc-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Healthcare organizations require more than patient-facing technology. Procurement, finance, inventory, human resources, vendors, assets, and internal workflows also need to work together. Oxavyn's ERP approach can connect these functions to provide a more unified operational foundation.
                </motion.p>
              </motion.div>
            </div>

            {/* MEDIA SIDE */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="std-media-side">
              <div style={{ minHeight: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/Banner_2.png" alt="Media" style={{ width: '100%', height: '100%', minHeight: '350px', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
            </motion.div>
          </div>

          {/* FEATURES / CARDS BELOW */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-feature-card">
            <div className="hc-2col-grid" style={{ marginTop: '4rem' }}>
              {[
                { title: "Finance", desc: "Financial workflows, reporting, and operational visibility." },
                { title: "HR", desc: "Employee information, workflows, attendance, and organizational processes." },
                { title: "Procurement", desc: "Manage purchasing workflows and vendor interactions." },
                { title: "Inventory", desc: "Track stock levels, movement, and supply-related information." },
                { title: "Assets", desc: "Maintain visibility across organizational assets and resources." },
                { title: "Operations", desc: "Connect internal processes across departments." }
              ].map((item, idx) => (
                <motion.div key={idx} className="hc-glass-card" variants={fadeInUp} style={{ padding: '2rem' }}>
                  <div className="hc-ambient-border-glow"></div>
                  <h4 className="hc-problem-title">{item.title}</h4>
                  <p className="hc-problem-desc" style={{ marginBottom: 0 }}>{item.desc}</p>
                  <div className="hc-card-glow"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. DATA ANALYTICS & BUSINESS INTELLIGENCE */}
      <section className="hc-section">
        <div className="hc-container std-layout-section">
          
          <div className="std-layout-split">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="hc-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Turn Healthcare Data Into Actionable Intelligence.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="hc-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Healthcare organizations generate large volumes of operational, financial, patient, and administrative data. The challenge is turning that information into insights that decision-makers can actually use. Oxavyn can provide analytics and reporting environments that bring important information together and make organizational performance easier to understand.
                </motion.p>
              </motion.div>
            </div>

            {/* MEDIA SIDE */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="std-media-side">
              <div style={{ minHeight: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <img src="/images/Banner_2.png" alt="Media" style={{ width: '100%', height: '100%', minHeight: '350px', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
            </motion.div>
          </div>

          {/* FEATURES / CARDS BELOW */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-feature-card">
            <div className="hc-2col-grid" style={{ marginTop: '4rem' }}>
              {[
                { title: "Patient Analytics", desc: "Understand patient activity, trends, and engagement." },
                { title: "Operational Analytics", desc: "Monitor appointments, departments, workloads, and operational performance." },
                { title: "Financial Analytics", desc: "Understand revenue, expenses, billing activity, and financial trends." },
                { title: "Resource Analytics", desc: "Monitor staff, inventory, assets, and resource utilization." },
                { title: "Management Dashboards", desc: "Give leadership teams centralized performance visibility." },
                { title: "Predictive Insights", desc: "Use historical and operational data to identify patterns and support better planning." }
              ].map((item, idx) => (
                <motion.div key={idx} className="hc-glass-card" variants={fadeInUp} style={{ padding: '2rem' }}>
                  <div className="hc-ambient-border-glow"></div>
                  <h4 className="hc-problem-title">{item.title}</h4>
                  <p className="hc-problem-desc" style={{ marginBottom: 0 }}>{item.desc}</p>
                  <div className="hc-card-glow"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>


      {/* 9. CONNECTED END-TO-END SYSTEM */}
      <section className="hc-section">
        <div className="hc-container hc-center-text">
          <motion.h2 className="hc-heading-secondary" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Everything Connected. Nothing Lost Between Departments.
          </motion.h2>
          
          <motion.div className="hc-horizontal-progression" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {['Patient', 'CRM', 'Healthcare Operations', 'ERP', 'Analytics', 'Automation', 'Management'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <motion.div className="hc-prog-step" variants={fadeInUp}>{step}</motion.div>
                {idx < arr.length - 1 && <motion.div className="hc-prog-arrow" variants={fadeInUp}>&rarr;</motion.div>}
              </React.Fragment>
            ))}
          </motion.div>

          <motion.p className="hc-paragraph" style={{ maxWidth: '900px', margin: '0 auto 3rem auto' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            When systems communicate with each other, information can move more efficiently across the organization. This creates better visibility, more consistent workflows, and a stronger foundation for digital healthcare operations.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div style={{ minHeight: '500px' }}>
              <ResponsiveVideo src="/images/career-vid.mp4" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. ROLE-BASED EXPERIENCE */}
      <section className="hc-section hc-section-alt">
        <div className="hc-container">
          <motion.div className="hc-center-text" style={{ maxWidth: '800px', marginBottom: '4rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="hc-heading-secondary" variants={fadeInUp}>Role-Based Experience</motion.h2>
          </motion.div>

          <div className="hc-3col-grid">
            {[
              { title: "Hospital Management", sub: "See the organization clearly.", desc: "Dashboards, analytics, financial visibility, operational monitoring, and strategic insights." },
              { title: "Doctors & Professionals", sub: "Spend more time where it matters.", desc: "Reduce unnecessary administrative friction and improve access to relevant workflows and information." },
              { title: "Operations Teams", sub: "Coordinate with greater clarity.", desc: "Manage appointments, tasks, departments, resources, and operational processes." },
              { title: "Patients", sub: "Experience simpler interactions.", desc: "Improve communication, appointment experiences, follow-ups, and engagement." },
              { title: "Finance & Admin", sub: "Connect the business side.", desc: "Improve visibility into billing, procurement, inventory, finance, and organizational workflows." }
            ].map((role, idx) => (
              <motion.div key={idx} className="hc-glass-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="hc-ambient-border-glow"></div>
                <h4 className="hc-problem-title">{role.title}</h4>
                <div style={{ color: '#6366f1', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.9rem' }}>{role.sub}</div>
                <p className="hc-problem-desc" style={{ marginBottom: 0 }}>{role.desc}</p>
                <div className="hc-card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. WHY OXAVYN FOR HEALTHCARE */}
      <section className="hc-section">
        <div className="hc-container">
          <motion.div className="hc-center-text" style={{ maxWidth: '800px', marginBottom: '4rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span className="hc-eyebrow" variants={fadeInUp}>THE ADVANTAGE</motion.span>
            <motion.h2 className="hc-heading-secondary" variants={fadeInUp}>Why Oxavyn for Healthcare</motion.h2>
          </motion.div>

          <div className="hc-3col-grid">
            {[
              { title: "Connected", desc: "Bring different operational functions into one ecosystem." },
              { title: "Scalable", desc: "Design the technology architecture around organizational growth." },
              { title: "Intelligent", desc: "Use analytics and automation to support better decisions." },
              { title: "Secure", desc: "Build systems with appropriate access control and organizational security requirements." },
              { title: "Customizable", desc: "Adapt workflows to the specific needs of hospitals, clinics, diagnostic centers, and organizations." },
              { title: "Automated", desc: "Reduce repetitive administrative work through connected workflows." }
            ].map((feature, idx) => (
              <motion.div key={idx} className="hc-glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="hc-ambient-border-glow"></div>
                <h4 className="hc-problem-title">{feature.title}</h4>
                <p className="hc-problem-desc" style={{ marginBottom: 0 }}>{feature.desc}</p>
                <div className="hc-card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. IMPLEMENTATION APPROACH */}
      <section className="hc-section hc-section-alt">
        <div className="hc-container">
          <motion.div className="hc-center-text" style={{ maxWidth: '800px', marginBottom: '4rem' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="hc-heading-secondary">Implementation Approach</h2>
          </motion.div>

          <div className="hc-split-grid">
            <div className="hc-order-features hc-order-wrapper">
              {[
                { num: "01", title: "Understand", desc: "Study the organization's current processes, systems, challenges, and goals." },
                { num: "02", title: "Design", desc: "Create a technology architecture around the organization's requirements." },
                { num: "03", title: "Integrate", desc: "Connect healthcare, CRM, ERP, analytics, and relevant systems." },
                { num: "04", title: "Automate", desc: "Identify repetitive workflows and introduce intelligent automation." },
                { num: "05", title: "Optimize", desc: "Use analytics and feedback to continuously improve operations." }
              ].map((step, idx) => (
                <motion.div key={idx} className="hc-step-card" style={{ marginBottom: '2.5rem' }} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                  <div className="hc-step-num">{step.num} &mdash; {step.title}</div>
                  <p className="hc-problem-desc" style={{ fontSize: '1.05rem', marginLeft: '3rem' }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="hc-order-media">
              <div style={{ minHeight: '600px' }}>
                <ResponsiveVideo src="/images/career-vid.mp4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL ENQUIRY FORM */}
      <section className="hc-section" id="healthcare-enquiry" style={{ background: 'linear-gradient(180deg, transparent, rgba(167, 139, 250, 0.08))' }}>
        <div className="hc-container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <motion.div style={{ position: 'relative' }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="hc-form-glow-bg"></div>
              <div className="hc-glass-card">
                <div className="hc-ambient-border-glow"></div>
                
                <h3 className="hc-problem-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', textAlign: 'center' }}>Let's Discuss Your Healthcare Technology Needs</h3>
                <p className="hc-problem-desc" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>Tell us what you're looking to improve.</p>

                {/* TODO: Connect to Oxavyn backend/CRM */}
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="hc-input-group">
                    <label className="hc-label-input">Full Name</label>
                    <input type="text" className="hc-input" placeholder="Enter your full name" required />
                  </div>
                  
                  <div className="hc-input-group">
                    <label className="hc-label-input">Work Email</label>
                    <input type="email" className="hc-input" placeholder="Enter your business email" required />
                  </div>

                  <div className="hc-input-group">
                    <label className="hc-label-input">Organization Name</label>
                    <input type="text" className="hc-input" placeholder="Enter hospital / clinic / organization name" required />
                  </div>

                  <div className="hc-input-group">
                    <label className="hc-label-input">Organization Type</label>
                    <select className="hc-input hc-select" required defaultValue="">
                      <option value="" disabled>Select Organization Type</option>
                      <option value="Hospital">Hospital</option>
                      <option value="Clinic">Clinic</option>
                      <option value="Diagnostic Center">Diagnostic Center</option>
                      <option value="Healthcare Group">Healthcare Group</option>
                      <option value="Medical Organization">Medical Organization</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="hc-input-group">
                    <label className="hc-label-input">Areas of Interest (Select multiple)</label>
                    <select multiple className="hc-input hc-select" value={formData.interests} onChange={handleInterestChange}>
                      <option value="Healthcare Management">Healthcare Management</option>
                      <option value="CRM">CRM</option>
                      <option value="ERP">ERP</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Business Intelligence">Business Intelligence</option>
                      <option value="Automation">Automation</option>
                      <option value="System Integration">System Integration</option>
                      <option value="Custom Software">Custom Software</option>
                    </select>
                  </div>

                  <div className="hc-input-group">
                    <label className="hc-label-input">Current Challenge</label>
                    <textarea className="hc-input" style={{ minHeight: '100px', resize: 'vertical' }} placeholder="Tell us about your current process or challenge..." required></textarea>
                  </div>

                  <button type="submit" className="hc-btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Send Enquiry
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#888', marginTop: '1rem', marginBottom: 0 }}>
                    Our team will review your enquiry and help identify the appropriate next step.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
