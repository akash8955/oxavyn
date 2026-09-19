"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResponsiveVideo from '@/components/ResponsiveVideo';

export default function AgencyConsultancyClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    teamSize: "",
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
    const formElement = document.getElementById("agency-consultancy-enquiry");
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
    <div className="agcy-wrapper">
      {/* Ambient background glows */}
      <div className="agcy-ambient-bg">
        <div className="agcy-ambient-blob agcy-blob-1"></div>
        <div className="agcy-ambient-blob agcy-blob-2"></div>
        <div className="agcy-ambient-blob agcy-blob-3"></div>
        <div className="agcy-ambient-blob agcy-blob-4"></div>
      </div>

      {/* 01 — HERO */}
      <section className="agcy-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="agcy-container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            {/* HEADING FIRST */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
              <motion.div variants={fadeInUp} className="agcy-eyebrow">OXAVYN FOR AGENCIES & CONSULTANCIES</motion.div>
              <motion.h1 variants={fadeInUp} className="agcy-heading-primary" style={{ maxWidth: '900px', margin: '0 auto 1.5rem' }}>
                Run Your Agency. Connect Your Business. Grow With Clarity.
              </motion.h1>
            </motion.div>

            {/* MEDIA SECOND */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ width: '100%', maxWidth: '1100px', margin: '0 auto 3rem' }}
            >
              <ResponsiveVideo src="/images/career-vid.mp4" />
            </motion.div>

            {/* SUBHEADING / PARAGRAPH THIRD */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ textAlign: 'center', width: '100%', maxWidth: '800px', margin: '0 auto' }}
            >
              <motion.p variants={fadeInUp} className="agcy-subheading" style={{ margin: '0 auto 1rem' }}>
                A connected digital ecosystem for client relationships, projects, teams, operations, finance, analytics, and automation.
              </motion.p>
              <motion.p variants={fadeInUp} className="agcy-paragraph" style={{ margin: '0 auto 2rem' }}>
                Agencies and consulting businesses manage multiple clients, projects, teams, proposals, deliverables, invoices, communication, and operational workflows simultaneously. As the organization grows, disconnected tools can make it difficult to maintain visibility and consistency. Oxavyn can help bring these functions together through CRM, ERP, project management, analytics, and intelligent automation.
              </motion.p>
              <motion.div variants={fadeInUp} className="agcy-button-group" style={{ justifyContent: 'center' }}>
                <button onClick={scrollToEnquiry} className="agcy-btn-primary">Explore Agency Solutions</button>
                <button onClick={scrollToEnquiry} className="agcy-btn-secondary">Talk to Oxavyn</button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 — AGENCY & CONSULTANCY ECOSYSTEM */}
      <section className="agcy-section agcy-section-alt">
        <div className="agcy-container std-layout-section">

          <div className="std-layout-split reverse">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="agcy-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Your Clients, Projects, Teams, and Operations — Connected.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="agcy-subheading" style={{ textAlign: 'left', marginBottom: '1rem' }}>One connected environment for the complete agency lifecycle.</motion.p>
                <motion.p variants={fadeInUp} className="agcy-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Agencies and consulting firms need to coordinate relationships, proposals, projects, employees, documents, finances, deliverables, and communication every day. Oxavyn can help connect these processes into a unified digital environment, giving teams better visibility while reducing unnecessary manual coordination.
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

          {/* CARDS BELOW */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-feature-card">
            <div className="agcy-grid-3">
              {[
                { title: "Client Management", desc: "Manage client profiles, communication, requirements, history, and relationships." },
                { title: "Sales & CRM", desc: "Track leads, opportunities, proposals, follow-ups, and conversions." },
                { title: "Project Management", desc: "Manage projects, tasks, deadlines, milestones, deliverables, and project status." },
                { title: "Team Management", desc: "Coordinate employees, consultants, responsibilities, workloads, and schedules." },
                { title: "Business Operations", desc: "Connect finance, invoices, documents, vendors, resources, and internal workflows." },
                { title: "Analytics", desc: "Understand revenue, projects, clients, team performance, and overall business activity." }
              ].map((card, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="agcy-glass-card">
                  <div className="agcy-ambient-border-glow"></div>
                  <h3 className="agcy-card-title">{card.title}</h3>
                  <p className="agcy-card-desc">{card.desc}</p>
                  <div className="agcy-card-glow"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 03 — CLIENT + CRM MANAGEMENT */}
      <section className="agcy-section">
        <div className="agcy-container std-layout-section">

          <div className="std-layout-split">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="agcy-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Turn Every Client Relationship Into a Connected Experience.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="agcy-subheading" style={{ textAlign: 'left', marginBottom: '1rem' }}>Manage leads, clients, proposals, communication, and relationships from one place.</motion.p>
                <motion.p variants={fadeInUp} className="agcy-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Client relationships are at the center of every agency and consultancy. A centralized CRM can help teams capture enquiries, manage prospects, track proposals, record communication, organize follow-ups, and maintain a clear history of client interactions. This creates a more structured journey from first conversation to long-term relationship.
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
            <div className="agcy-grid-3" style={{ marginBottom: '4rem' }}>
              {[
                { title: "Lead Management", desc: "Capture and organize new business opportunities." },
                { title: "Client Profiles", desc: "Maintain centralized client information and relationship history." },
                { title: "Proposal Management", desc: "Track proposals, presentations, requirements, and opportunities." },
                { title: "Follow-Up Management", desc: "Create structured follow-ups and reminders." },
                { title: "Communication History", desc: "Keep relevant client communication organized." },
                { title: "Opportunity Pipeline", desc: "Visualize prospects from enquiry through conversion." }
              ].map((card, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="agcy-glass-card" style={{ padding: '2rem' }}>
                  <div className="agcy-ambient-border-glow"></div>
                  <div className="agcy-card-title" style={{ fontSize: '1.2rem' }}>{card.title}</div>
                  <div className="agcy-card-desc" style={{ fontSize: '0.95rem' }}>{card.desc}</div>
                  <div className="agcy-card-glow"></div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="agcy-journey">
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">ENQUIRY</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">DISCOVERY</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">PROPOSAL</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">NEGOTIATION</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">CONTRACT</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">PROJECT</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">DELIVERY</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label" style={{ color: '#be123c' }}>RETAIN</div></div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 04 — PROJECT + TEAM + ERP MANAGEMENT */}
      <section className="agcy-section agcy-section-alt">
        <div className="agcy-container std-layout-section">

          <div className="std-layout-split reverse">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="agcy-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Turn Projects and Operations Into One Organized System.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="agcy-subheading" style={{ textAlign: 'left', marginBottom: '1rem' }}>Connect projects, people, finance, resources, and business operations.</motion.p>
                <motion.p variants={fadeInUp} className="agcy-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Agencies often manage several projects simultaneously, each involving different teams, deadlines, deliverables, budgets, and clients. Oxavyn can help connect project management with broader business operations, creating better visibility across project progress, team responsibilities, financial workflows, resources, and organizational activities.
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
            <div style={{ marginBottom: '4rem' }}>
              <h3 className="agcy-heading-tertiary" style={{ textAlign: 'center', marginBottom: '2rem' }}>Project Management</h3>
              <div className="agcy-grid-4">
                {[
                  { title: "Project Planning", desc: "Define projects, milestones, timelines, and deliverables." },
                  { title: "Task Management", desc: "Assign tasks and track progress across teams." },
                  { title: "Milestones", desc: "Monitor important project stages and deadlines." },
                  { title: "Client Deliverables", desc: "Organize deliverables and project outputs." }
                ].map((card, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="agcy-glass-card" style={{ padding: '2rem' }}>
                    <div className="agcy-ambient-border-glow"></div>
                    <div className="agcy-card-title" style={{ fontSize: '1.2rem' }}>{card.title}</div>
                    <div className="agcy-card-desc" style={{ fontSize: '0.95rem' }}>{card.desc}</div>
                    <div className="agcy-card-glow"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '4rem' }}>
              <h3 className="agcy-heading-tertiary" style={{ textAlign: 'center', marginBottom: '2rem' }}>Team Management</h3>
              <div className="agcy-grid-4">
                {[
                  { title: "Resource Allocation", desc: "Understand who is working on which project." },
                  { title: "Workload Visibility", desc: "Monitor workloads and resource availability." },
                  { title: "Employee Management", desc: "Maintain team information and organizational workflows." },
                  { title: "Collaboration", desc: "Connect internal communication and project activity." }
                ].map((card, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="agcy-glass-card" style={{ padding: '2rem' }}>
                    <div className="agcy-ambient-border-glow"></div>
                    <div className="agcy-card-title" style={{ fontSize: '1.2rem' }}>{card.title}</div>
                    <div className="agcy-card-desc" style={{ fontSize: '0.95rem' }}>{card.desc}</div>
                    <div className="agcy-card-glow"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="agcy-heading-tertiary" style={{ textAlign: 'center', marginBottom: '2rem' }}>ERP Capabilities</h3>
              <div className="agcy-grid-3">
                {[
                  { title: "Finance", desc: "Invoices, expenses, revenue, and financial workflows." },
                  { title: "HR", desc: "Employee information and internal processes." },
                  { title: "Vendor Management", desc: "Manage external partners and suppliers." },
                  { title: "Documents", desc: "Organize important business and project documents." },
                  { title: "Operations", desc: "Connect internal business workflows." }
                ].map((card, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="agcy-glass-card" style={{ padding: '2rem' }}>
                    <div className="agcy-ambient-border-glow"></div>
                    <div className="agcy-card-title" style={{ fontSize: '1.2rem' }}>{card.title}</div>
                    <div className="agcy-card-desc" style={{ fontSize: '0.95rem' }}>{card.desc}</div>
                    <div className="agcy-card-glow"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 05 — DATA + ANALYTICS + AUTOMATION */}
      <section className="agcy-section">
        <div className="agcy-container std-layout-section">
          
          <div className="std-layout-split">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="agcy-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Turn Agency Data Into Business Intelligence.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="agcy-subheading" style={{ textAlign: 'left', marginBottom: '1rem' }}>Understand your clients, projects, revenue, team, and business performance.</motion.p>
                <motion.p variants={fadeInUp} className="agcy-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Agencies generate valuable data across leads, clients, projects, hours, revenue, expenses, team activity, and deliverables. Bringing this information together can help management understand what is working, where resources are being used, and where the business has opportunities to improve.
                </motion.p>
              </motion.div>
            </div>

            {/* MEDIA SIDE */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="std-media-side">
              <img src="/images/Banner_2.png" alt="Media" style={{ width: '100%', height: '100%', minHeight: '350px', objectFit: 'cover', borderRadius: '12px' }} />
            </motion.div>
          </div>

          {/* FEATURES / CARDS BELOW */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-feature-card">
            <div className="agcy-grid-3" style={{ gap: '1.5rem' }}>
              {[
                { title: "Revenue Analytics", desc: "Understand revenue, billing, and financial trends." },
                { title: "Client Analytics", desc: "Monitor client activity, retention, and business relationships." },
                { title: "Project Analytics", desc: "Track project progress, profitability, deadlines, and performance." },
                { title: "Team Analytics", desc: "Understand workload, utilization, and operational activity." },
                { title: "Sales Analytics", desc: "Track leads, opportunities, proposals, and conversions." },
                { title: "Management Dashboard", desc: "Provide leadership with a centralized business view." }
              ].map((card, idx) => (
                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="agcy-glass-card" style={{ padding: '1.5rem' }}>
                  <div className="agcy-ambient-border-glow"></div>
                  <div className="agcy-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{card.title}</div>
                  <div className="agcy-card-desc" style={{ fontSize: '0.9rem' }}>{card.desc}</div>
                  <div className="agcy-card-glow"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 06 — CONNECTED AGENCY WORKFLOW */}
      <section className="agcy-section agcy-section-alt">
        <div className="agcy-container std-layout-section">
          
          <div className="std-layout-split reverse">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="agcy-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>From First Client Conversation to Final Delivery.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="agcy-subheading" style={{ textAlign: 'left', marginBottom: '1rem' }}>One connected workflow across sales, clients, projects, teams, finance, and management.</motion.p>
                <motion.p variants={fadeInUp} className="agcy-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  A connected agency environment allows information to move naturally from one stage of the business to another. A new enquiry can become a CRM opportunity, a converted client can become a project, a project can generate tasks for the team, completed work can move into billing, and business activity can flow into management analytics.
                </motion.p>
              </motion.div>
            </div>

            {/* MEDIA SIDE */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="std-media-side">
              <div style={{ minHeight: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ResponsiveVideo src="/images/career-vid.mp4" />
              </div>
            </motion.div>
          </div>

          {/* FEATURES / CARDS BELOW */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-feature-card">
            <motion.div variants={fadeInUp} className="agcy-journey" style={{ marginBottom: '4rem' }}>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">LEAD</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">CRM</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">PROPOSAL</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">CLIENT</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">PROJECT</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">TEAM</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">TASKS</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">DELIVERY</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">INVOICE</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label">ANALYTICS</div></div>
              <div className="agcy-journey-step"><div className="agcy-journey-dot"></div><div className="agcy-journey-label" style={{ color: '#be123c' }}>MANAGEMENT</div></div>
            </motion.div>

            <div className="agcy-grid-4">
              {[
                {
                  title: "Agency Leadership",
                  subtitle: "See the business clearly.",
                  desc: "Revenue, clients, projects, teams, and performance."
                },
                {
                  title: "Account Managers",
                  subtitle: "Build stronger client relationships.",
                  desc: "Communication, follow-ups, proposals, and client history."
                },
                {
                  title: "Project Managers",
                  subtitle: "Keep delivery organized.",
                  desc: "Projects, tasks, deadlines, teams, and deliverables."
                },
                {
                  title: "Teams & Consultants",
                  subtitle: "Know what needs to happen next.",
                  desc: "Tasks, responsibilities, deadlines, and collaboration."
                }
              ].map((card, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="agcy-glass-card">
                  <div className="agcy-ambient-border-glow"></div>
                  <div className="agcy-card-title">{card.title}</div>
                  <div style={{ fontWeight: 600, color: '#e11d48', marginBottom: '0.5rem' }}>{card.subtitle}</div>
                  <div className="agcy-card-desc">{card.desc}</div>
                  <div className="agcy-card-glow"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 07 — FINAL CTA + MODERN ENQUIRY FORM */}
      <section className="agcy-section" id="agency-consultancy-enquiry" style={{ background: 'linear-gradient(135deg, rgba(253,252,252,1) 0%, rgba(255,241,242,1) 100%)' }}>
        <div className="agcy-container">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.h2 variants={fadeInUp} className="agcy-heading-secondary">Build an Agency That Runs as One System.</motion.h2>
            <motion.p variants={fadeInUp} className="agcy-subheading" style={{ maxWidth: '800px', margin: '0 auto 1.5rem' }}>
              Connect clients, projects, teams, operations, analytics, and automation through technology designed around your business.
            </motion.p>
            <motion.p variants={fadeInUp} className="agcy-paragraph" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
              Whether you are a creative agency, digital agency, marketing agency, IT consultancy, management consultancy, design studio, or professional services firm, Oxavyn can help you explore a connected technology ecosystem built around your workflows.
            </motion.p>
            <motion.div variants={fadeInUp} className="agcy-button-group" style={{ justifyContent: 'center' }}>
              <button onClick={scrollToEnquiry} className="agcy-btn-primary">Start a Conversation</button>
              <button onClick={scrollToEnquiry} className="agcy-btn-secondary">Discuss Your Requirements</button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="agcy-form-container">
            <div style={{ position: 'relative' }}>
              <div className="agcy-form-modern-glow"></div>
              <div className="agcy-form-modern">

                <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', color: '#e11d48', marginBottom: '1rem' }}>LET'S BUILD SOMETHING BETTER</div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-outfit, sans-serif)', color: '#110f10' }}>Tell Us About Your Agency.</h3>
                  <p style={{ color: '#4c4345', marginBottom: '1.5rem', fontWeight: 500 }}>Share your requirements and let's explore the right technology approach for your business.</p>

                </div>

                <form onSubmit={(e) => e.preventDefault()} style={{ position: 'relative', zIndex: 1 }}>

                  <div className="agcy-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <div className="agcy-form-group" style={{ marginBottom: 0 }}>
                      <label className="agcy-form-label">Full Name</label>
                      <input type="text" className="agcy-form-input" placeholder="Enter your full name" />
                    </div>
                    <div className="agcy-form-group" style={{ marginBottom: 0 }}>
                      <label className="agcy-form-label">Company / Agency Name</label>
                      <input type="text" className="agcy-form-input" placeholder="Enter your company name" />
                    </div>
                  </div>

                  <div className="agcy-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <div className="agcy-form-group" style={{ marginBottom: 0 }}>
                      <label className="agcy-form-label">Work Email</label>
                      <input type="email" className="agcy-form-input" placeholder="Enter your business email" />
                    </div>
                    <div className="agcy-form-group" style={{ marginBottom: 0 }}>
                      <label className="agcy-form-label">Business Type</label>
                      <select className="agcy-form-select" defaultValue="">
                        <option value="" disabled>Select business type</option>
                        <option value="Creative Agency">Creative Agency</option>
                        <option value="Digital Marketing Agency">Digital Marketing Agency</option>
                        <option value="IT Consultancy">IT Consultancy</option>
                        <option value="Management Consultancy">Management Consultancy</option>
                        <option value="Design Agency">Design Agency</option>
                        <option value="Advertising Agency">Advertising Agency</option>
                        <option value="Software Agency">Software Agency</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="agcy-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <div className="agcy-form-group" style={{ marginBottom: 0 }}>
                      <label className="agcy-form-label">Phone Number</label>
                      <input type="tel" className="agcy-form-input" placeholder="Enter your phone number" />
                    </div>
                    <div className="agcy-form-group" style={{ marginBottom: 0 }}>
                      <label className="agcy-form-label">Team Size</label>
                      <select className="agcy-form-select" defaultValue="">
                        <option value="" disabled>Select team size</option>
                        <option value="1-10">1–10</option>
                        <option value="11-25">11–25</option>
                        <option value="26-50">26–50</option>
                        <option value="51-100">51–100</option>
                        <option value="100+">100+</option>
                      </select>
                    </div>
                  </div>

                  <div className="agcy-form-group">
                    <label className="agcy-form-label">Areas of Interest (Select multiple)</label>
                    <select multiple className="agcy-form-select" style={{ minHeight: '160px' }} onChange={handleInterestChange}>
                      <option value="CRM">CRM</option>
                      <option value="ERP">ERP</option>
                      <option value="Project Management">Project Management</option>
                      <option value="Client Management">Client Management</option>
                      <option value="Team Management">Team Management</option>
                      <option value="Finance Management">Finance Management</option>
                      <option value="Document Management">Document Management</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Business Intelligence">Business Intelligence</option>
                      <option value="Automation">Automation</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="System Integration">System Integration</option>
                    </select>
                  </div>

                  <div className="agcy-form-group">
                    <label className="agcy-form-label">Current Challenge</label>
                    <textarea className="agcy-form-textarea" placeholder="Tell us about your current workflow, challenge, or technology requirement..."></textarea>
                  </div>

                  <button type="submit" className="agcy-btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem' }}>
                    Send Enquiry
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#6b6365', marginTop: '1.5rem' }}>
                    We'll review your requirements and help identify the appropriate next step.
                  </p>
                  {/* TODO: Implement backend integration for enquiry submission */}
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
