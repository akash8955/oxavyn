"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function EcommerceClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    businessType: "",
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
    const formElement = document.getElementById("ecommerce-enquiry");
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
    <div className="ec-wrapper">
      {/* Ambient background glows */}
      <div className="ec-ambient-bg">
        <div className="ec-ambient-blob ec-blob-1"></div>
        <div className="ec-ambient-blob ec-blob-2"></div>
        <div className="ec-ambient-blob ec-blob-3"></div>
        <div className="ec-ambient-blob ec-blob-4"></div>
      </div>

      {/* 2. HERO — E-COMMERCE DIGITAL ECOSYSTEM */}
      <section className="ec-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="ec-container" style={{ width: '100%' }}>
          
          {/* HEADING FIRST */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            <motion.div variants={fadeInUp} className="ec-eyebrow">OXAVYN FOR E-COMMERCE</motion.div>
            <motion.h1 variants={fadeInUp} className="ec-heading-primary" style={{ maxWidth: '900px', margin: '0 auto 1.5rem' }}>
              Build a Smarter, More Connected E-Commerce Business.
            </motion.h1>
          </motion.div>

          {/* MEDIA SECOND */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="ec-media-placeholder" style={{ minHeight: '550px' }}>
              [E-COMMERCE HERO IMAGE / VIDEO PLACEHOLDER]
              <div style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '1rem', fontWeight: 'normal' }}>
                Premium online store interface • Order management • E-commerce analytics • Fulfillment environment
              </div>
            </div>
          </motion.div>

          {/* PARAGRAPH/SUBHEADING THIRD */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.p variants={fadeInUp} className="ec-subheading" style={{ maxWidth: '800px', margin: '0 auto 1rem' }}>
              Connect customers, orders, inventory, operations, delivery, and business management through one intelligent digital ecosystem.
            </motion.p>
            <motion.p variants={fadeInUp} className="ec-paragraph" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
              Modern e-commerce businesses manage thousands of products, customers, orders, payments, shipments, inventory movements, support requests, and operational activities every day. Oxavyn helps bring these functions together through integrated CRM, ERP, order tracking, management systems, analytics, and automation.
            </motion.p>
            <motion.div variants={fadeInUp} className="ec-button-group" style={{ justifyContent: 'center' }}>
              <button onClick={scrollToEnquiry} className="ec-btn-primary">Explore E-Commerce Solutions</button>
              <button onClick={scrollToEnquiry} className="ec-btn-secondary">Talk to Oxavyn</button>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 3. THE E-COMMERCE CHALLENGE */}
      <section className="ec-section ec-section-alt">
        <div className="ec-container">
          
          {/* HEADING FIRST */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <motion.h2 variants={fadeInUp} className="ec-heading-secondary">E-Commerce Moves Fast. Your Systems Need to Keep Up.</motion.h2>
          </motion.div>

          {/* MEDIA SECOND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="ec-media-placeholder" style={{ minHeight: '400px' }}>
              [E-COMMERCE OPERATIONS IMAGE / VIDEO PLACEHOLDER]
            </div>
          </motion.div>

          {/* PARAGRAPH / CARDS THIRD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.p variants={fadeInUp} className="ec-paragraph" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
              As an e-commerce business grows, managing customers, orders, products, inventory, deliveries, payments, vendors, and internal teams through disconnected tools becomes increasingly difficult. Manual processes can create delays, duplicated information, limited visibility, and operational inefficiencies.
            </motion.p>

            <div className="ec-grid-4" style={{ textAlign: 'left' }}>
              <motion.div variants={fadeInUp} className="ec-glass-card">
                <div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title">Disconnected Operations</div>
                <div className="ec-card-desc">Different teams working across different systems.</div>
                  <div className="ec-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card">
                <div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title">Inventory Complexity</div>
                <div className="ec-card-desc">Maintaining accurate product and stock information across channels.</div>
                  <div className="ec-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card">
                <div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title">Order Visibility</div>
                <div className="ec-card-desc">Customers and teams need clear visibility into order status.</div>
                  <div className="ec-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card">
                <div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title">Manual Management</div>
                <div className="ec-card-desc">Repetitive operational tasks consume valuable time.</div>
                  <div className="ec-card-glow"></div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. OXAVYN E-COMMERCE ECOSYSTEM */}
      <section className="ec-section">
        <div className="ec-container">
          
          {/* HEADING FIRST */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <motion.h2 variants={fadeInUp} className="ec-heading-secondary">One Connected System for Your E-Commerce Operation.</motion.h2>
          </motion.div>

          {/* MEDIA (DIAGRAM) SECOND */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="ec-diagram-container">
               {/* Simplified 2D Diagram using CSS for desktop */}
               <div className="ec-diagram-center">OXAVYN E-COMMERCE PLATFORM</div>
               <div className="ec-diagram-node" style={{ top: '10%', left: '20%' }}>CRM</div>
               <div className="ec-diagram-node" style={{ top: '10%', right: '20%' }}>ERP</div>
               <div className="ec-diagram-node" style={{ top: '30%', left: '10%' }}>Orders</div>
               <div className="ec-diagram-node" style={{ top: '30%', right: '10%' }}>Inventory</div>
               <div className="ec-diagram-node" style={{ bottom: '30%', left: '10%' }}>Tracking</div>
               <div className="ec-diagram-node" style={{ bottom: '30%', right: '10%' }}>Customers</div>
               <div className="ec-diagram-node" style={{ bottom: '10%', left: '20%' }}>Management</div>
               <div className="ec-diagram-node" style={{ bottom: '10%', right: '20%' }}>Analytics</div>
               <div className="ec-diagram-node" style={{ top: '-5%', left: '50%', transform: 'translateX(-50%)' }}>Automation</div>
            </div>
          </motion.div>

          {/* PARAGRAPH THIRD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.p variants={fadeInUp} className="ec-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Oxavyn can bring customer management, order management, inventory, business operations, tracking, analytics, and automation into a connected digital environment. Each capability should work as part of the larger ecosystem instead of functioning as an isolated application.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* 5. E-COMMERCE CRM */}
      <section className="ec-section ec-section-alt">
        <div className="ec-container">
          
          {/* HEADING FIRST */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <motion.h2 variants={fadeInUp} className="ec-heading-secondary">Turn Every Customer Interaction Into a Connected Journey.</motion.h2>
          </motion.div>

          {/* MEDIA SECOND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="ec-media-placeholder">
              [E-COMMERCE CRM DASHBOARD IMAGE / VIDEO PLACEHOLDER]
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '1rem', fontWeight: 'normal' }}>
                Customer pipeline • Statistics • Interactions • Purchase history • Segments
              </div>
            </div>
          </motion.div>

          {/* SUBHEADING / PARAGRAPH / CARDS THIRD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.p variants={fadeInUp} className="ec-subheading" style={{ maxWidth: '800px', margin: '0 auto 1rem' }}>
              Understand your customers, manage relationships, and build stronger engagement.
            </motion.p>
            <motion.p variants={fadeInUp} className="ec-paragraph" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
              A centralized e-commerce CRM can bring customer information, enquiries, communication, purchase history, support interactions, and follow-ups into one place. This helps teams understand customer relationships more clearly and create more consistent experiences across the buying journey.
            </motion.p>

            <div className="ec-grid-3" style={{ textAlign: 'left' }}>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Customer Profiles</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Centralized customer information and interaction history.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Lead Management</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Track potential customers from enquiry to conversion.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Purchase History</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Understand previous purchases and customer activity.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Follow-Ups</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Manage customer follow-ups and engagement workflows.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Customer Support</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Connect customer interactions and service activities.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Segmentation</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Organize customers based on useful business criteria.</div>
                  <div className="ec-card-glow"></div></motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. E-COMMERCE ERP */}
      <section className="ec-section">
        <div className="ec-container">
          
          {/* HEADING FIRST */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <motion.h2 variants={fadeInUp} className="ec-heading-secondary">Manage the Business Behind Every Order.</motion.h2>
          </motion.div>

          {/* MEDIA SECOND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="ec-media-placeholder">
              [E-COMMERCE ERP DASHBOARD IMAGE / VIDEO PLACEHOLDER]
            </div>
          </motion.div>

          {/* SUBHEADING / PARAGRAPH / CARDS THIRD */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center' }}
          >
            <motion.p variants={fadeInUp} className="ec-subheading" style={{ maxWidth: '800px', margin: '0 auto 1rem' }}>
              Connect finance, inventory, procurement, vendors, products, and internal operations.
            </motion.p>
            <motion.p variants={fadeInUp} className="ec-paragraph" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
              An e-commerce business requires strong operational infrastructure behind the storefront. Oxavyn's ERP approach can connect important business processes so teams have better visibility across inventory, procurement, finance, products, vendors, employees, and operational activities.
            </motion.p>

            <div className="ec-grid-3" style={{ textAlign: 'left' }}>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Inventory</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Monitor stock levels, product movement, and availability.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Procurement</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Manage purchasing processes and supplier workflows.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Finance</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Connect financial information with operational activities.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Product Management</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Organize product information, categories, pricing, and related data.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Vendor Management</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Maintain supplier information and purchasing relationships.</div>
                  <div className="ec-card-glow"></div></motion.div>
              <motion.div variants={fadeInUp} className="ec-glass-card"><div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title" style={{fontSize: '1.1rem'}}>Business Operations</div><div className="ec-card-desc" style={{fontSize: '0.9rem'}}>Coordinate internal processes across teams.</div>
                  <div className="ec-card-glow"></div></motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. AUTOMATION */}
      <section className="ec-section ec-section-alt">
        <div className="ec-container">
          
          {/* HEADING FIRST */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <motion.h2 variants={fadeInUp} className="ec-heading-secondary">Automate the Work Behind Every Transaction.</motion.h2>
          </motion.div>

          {/* MEDIA SECOND (TIMELINE ACTS AS MEDIA HERE) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '3rem' }}
          >
            <div className="ec-timeline" style={{ background: 'white', padding: '2rem 3rem', borderRadius: '16px', border: '1px solid rgba(99, 102, 241, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', maxWidth: '800px', margin: '0 auto' }}>
              <div className="ec-timeline-item" style={{ padding: '0.8rem 1rem', marginBottom: '0.5rem' }}><div className="ec-timeline-title" style={{ fontSize: '0.8rem' }}>NEW ORDER</div></div>
              <div className="ec-timeline-item" style={{ padding: '0.8rem 1rem', marginBottom: '0.5rem' }}><div className="ec-timeline-title" style={{ fontSize: '0.8rem' }}>ORDER VALIDATION</div></div>
              <div className="ec-timeline-item" style={{ padding: '0.8rem 1rem', marginBottom: '0.5rem' }}><div className="ec-timeline-title" style={{ fontSize: '0.8rem' }}>INVENTORY UPDATED</div></div>
              <div className="ec-timeline-item" style={{ padding: '0.8rem 1rem', marginBottom: '0.5rem' }}><div className="ec-timeline-title" style={{ fontSize: '0.8rem' }}>WAREHOUSE TASK CREATED</div></div>
              <div className="ec-timeline-item" style={{ padding: '0.8rem 1rem', marginBottom: '0.5rem' }}><div className="ec-timeline-title" style={{ fontSize: '0.8rem' }}>CUSTOMER CONFIRMATION</div></div>
              <div className="ec-timeline-item" style={{ padding: '0.8rem 1rem', marginBottom: '0.5rem' }}><div className="ec-timeline-title" style={{ fontSize: '0.8rem' }}>SHIPMENT CREATED</div></div>
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
            <motion.p variants={fadeInUp} className="ec-subheading" style={{ maxWidth: '800px', margin: '0 auto 1rem' }}>
              Reduce repetitive tasks and keep your e-commerce operation moving.
            </motion.p>
            <motion.p variants={fadeInUp} className="ec-paragraph" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
              Growing e-commerce operations often involve repetitive activities such as order confirmations, customer notifications, inventory updates, follow-ups, delivery alerts, reports, and internal task assignments. Connected automation can trigger these actions based on predefined business workflows.
            </motion.p>
            
            <motion.div variants={fadeInUp} style={{ display: 'flex', justifyContent: 'center', gap: '4rem', textAlign: 'left', flexWrap: 'wrap' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#4b5563', lineHeight: '2' }}>
                <li>✓ Order confirmation</li>
                <li>✓ Inventory synchronization</li>
                <li>✓ Customer notifications</li>
                <li>✓ Shipment updates</li>
                <li>✓ Low-stock alerts</li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#4b5563', lineHeight: '2' }}>
                <li>✓ Follow-up reminders</li>
                <li>✓ Internal task assignment</li>
                <li>✓ Automated reports</li>
                <li>✓ Delivery alerts</li>
                <li>✓ Return workflows</li>
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 8. WHO BENEFITS */}
      <section className="ec-section">
        <div className="ec-container">
          <div className="ec-grid-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="ec-glass-card"
            >
              <div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title">Business Owners</div>
              <div style={{ fontWeight: 600, color: '#6366f1', marginBottom: '0.5rem' }}>See the bigger picture.</div>
              <div className="ec-card-desc">Monitor business performance, revenue, customers, orders, inventory, and operations.</div>
                  <div className="ec-card-glow"></div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="ec-glass-card"
            >
              <div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title">Operations Teams</div>
              <div style={{ fontWeight: 600, color: '#6366f1', marginBottom: '0.5rem' }}>Manage daily activity efficiently.</div>
              <div className="ec-card-desc">Coordinate orders, inventory, warehouses, deliveries, and internal workflows.</div>
                  <div className="ec-card-glow"></div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="ec-glass-card"
            >
              <div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title">Customer Support</div>
              <div style={{ fontWeight: 600, color: '#6366f1', marginBottom: '0.5rem' }}>Understand every customer interaction.</div>
              <div className="ec-card-desc">Access customer history, order information, communication, and support activities.</div>
                  <div className="ec-card-glow"></div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="ec-glass-card"
            >
              <div className="ec-ambient-border-glow"></div>
                  <div className="ec-card-title">Customers</div>
              <div style={{ fontWeight: 600, color: '#6366f1', marginBottom: '0.5rem' }}>Experience greater visibility.</div>
              <div className="ec-card-desc">Get clearer order updates, tracking information, notifications, and post-purchase communication.</div>
                  <div className="ec-card-glow"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA & E-COMMERCE ENQUIRY FORM */}
      <section className="ec-section" id="ecommerce-enquiry" style={{ background: 'linear-gradient(135deg, rgba(253,253,254,1) 0%, rgba(240,245,255,1) 100%)' }}>
        <div className="ec-container">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.h2 variants={fadeInUp} className="ec-heading-secondary">Build the E-Commerce System Your Business Needs.</motion.h2>
            <motion.p variants={fadeInUp} className="ec-paragraph" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
              Whether you are launching a new e-commerce operation or scaling an existing business, Oxavyn can help you explore a connected technology ecosystem covering CRM, ERP, order management, tracking, inventory, analytics, and automation.
            </motion.p>
          </motion.div>

          {/* MODERN FORM DESIGN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ec-form-container"
          >
            <div className="ec-form-modern">
              <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-outfit, sans-serif)', color: '#0f0f11' }}>Let's Build Your E-Commerce Ecosystem.</h3>
                <p style={{ color: '#4b5563' }}>Tell us what you're looking to improve.</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} style={{ position: 'relative', zIndex: 1 }}>
                
                <div className="ec-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="ec-form-group" style={{ marginBottom: 0 }}>
                    <label className="ec-form-label">Full Name</label>
                    <input type="text" className="ec-form-input" placeholder="Enter your full name" />
                  </div>
                  
                  <div className="ec-form-group" style={{ marginBottom: 0 }}>
                    <label className="ec-form-label">Work Email</label>
                    <input type="email" className="ec-form-input" placeholder="Enter your business email" />
                  </div>
                </div>

                <div className="ec-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="ec-form-group" style={{ marginBottom: 0 }}>
                    <label className="ec-form-label">Company / Brand Name</label>
                    <input type="text" className="ec-form-input" placeholder="Enter your company or brand name" />
                  </div>

                  <div className="ec-form-group" style={{ marginBottom: 0 }}>
                    <label className="ec-form-label">Business Type</label>
                    <select className="ec-form-select" defaultValue="">
                      <option value="" disabled>Select business type</option>
                      <option value="D2C">D2C</option>
                      <option value="Marketplace">Marketplace</option>
                      <option value="Retail">Retail + E-Commerce</option>
                      <option value="B2B">B2B E-Commerce</option>
                      <option value="Startup">E-Commerce Startup</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="ec-form-group">
                  <label className="ec-form-label">Areas of Interest (Select multiple)</label>
                  <select 
                    multiple 
                    className="ec-form-select" 
                    style={{ minHeight: '120px' }}
                    onChange={handleInterestChange}
                  >
                    <option value="CRM">CRM</option>
                    <option value="ERP">ERP</option>
                    <option value="Order Management">Order Management</option>
                    <option value="Order Tracking">Order Tracking</option>
                    <option value="Inventory Management">Inventory Management</option>
                    <option value="Product Management">Product Management</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Business Management">Business Management</option>
                    <option value="Automation">Automation</option>
                    <option value="Custom Software">Custom E-Commerce Software</option>
                  </select>
                </div>

                <div className="ec-form-group">
                  <label className="ec-form-label">Current Challenge</label>
                  <textarea className="ec-form-textarea" placeholder="Tell us about your current system or business challenge..."></textarea>
                </div>

                <button type="submit" className="ec-btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem' }}>
                  Send Enquiry
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#6b7280', marginTop: '1.5rem' }}>
                  Our team will review your requirements and help identify the right technology approach.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
