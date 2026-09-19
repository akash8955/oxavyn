"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResponsiveVideo from '@/components/ResponsiveVideo';

export default function RetailClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    const formElement = document.getElementById("retail-consumer-enquiry");
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
    <div className="ret-wrapper">
      {/* Ambient background glows */}
      <div className="ret-ambient-bg">
        <div className="ret-ambient-blob ret-blob-1"></div>
        <div className="ret-ambient-blob ret-blob-2"></div>
        <div className="ret-ambient-blob ret-blob-3"></div>
        <div className="ret-ambient-blob ret-blob-4"></div>
      </div>

      {/* 01 — HERO */}
      <section className="ret-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="ret-container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            {/* HEADING FIRST */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
              <motion.div variants={fadeInUp} className="ret-eyebrow">OXAVYN FOR RETAIL & CONSUMER</motion.div>
              <motion.h1 variants={fadeInUp} className="ret-heading-primary" style={{ maxWidth: '900px', margin: '0 auto 1.5rem' }}>
                Build a Smarter, More Connected Retail Business.
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
              <motion.p variants={fadeInUp} className="ret-subheading" style={{ margin: '0 auto 1rem' }}>
                Connect customers, stores, products, inventory, sales, operations, and business intelligence through one intelligent digital ecosystem.
              </motion.p>
              <motion.p variants={fadeInUp} className="ret-paragraph" style={{ margin: '0 auto 2rem' }}>
                Retail businesses operate across multiple touchpoints — physical stores, e-commerce, customers, products, inventory, sales teams, suppliers, warehouses, deliveries, and customer support. As operations grow, disconnected systems can make it harder to maintain visibility and consistency. Oxavyn helps businesses connect these functions through CRM, ERP, inventory management, analytics, automation, and customized digital solutions.
              </motion.p>
              <motion.div variants={fadeInUp} className="ret-button-group" style={{ justifyContent: 'center' }}>
                <button onClick={scrollToEnquiry} className="ret-btn-primary">Explore Retail Solutions</button>
                <button onClick={scrollToEnquiry} className="ret-btn-secondary">Talk to Oxavyn</button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 — RETAIL ECOSYSTEM */}
      <section className="ret-section ret-section-alt">
        <div className="ret-container std-layout-section">
          
          <div className="std-layout-split reverse">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="ret-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Retail Is More Than Selling Products. It's an Entire Ecosystem.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="ret-subheading" style={{ textAlign: 'left', marginBottom: '1rem' }}>Connect every important part of your retail operation.</motion.p>
                <motion.p variants={fadeInUp} className="ret-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  A modern retail business involves customers, products, stores, employees, inventory, suppliers, orders, finance, marketing, logistics, and management. When these functions operate through disconnected systems, teams may have limited visibility and spend more time coordinating information manually. Oxavyn can help create a connected technology environment where these processes work together.
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
            <div className="ret-grid-3">
              <motion.div variants={fadeInUp} className="ret-glass-card">
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title">Customers</div>
                <div className="ret-card-desc">Understand customer relationships, interactions, preferences, and purchase activity.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card">
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title">Products</div>
                <div className="ret-card-desc">Manage product information, categories, pricing, and product-related data.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card">
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title">Inventory</div>
                <div className="ret-card-desc">Maintain visibility across stock, warehouses, stores, and product movement.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card">
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title">Sales</div>
                <div className="ret-card-desc">Connect sales activity across retail channels and business operations.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card">
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title">Supply Chain</div>
                <div className="ret-card-desc">Improve visibility across procurement, suppliers, warehouses, and movement.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card">
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title">Management</div>
                <div className="ret-card-desc">Bring business information together for better operational visibility.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 03 — RETAIL & CONSUMER SOLUTIONS */}
      <section className="ret-section">
        <div className="ret-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.h2 variants={fadeInUp} className="ret-heading-secondary">Technology for Every Stage of the Retail Business.</motion.h2>
            <motion.p variants={fadeInUp} className="ret-paragraph" style={{ margin: '0 auto' }}>
              Retail businesses have different operating models, from single-location stores to multi-store brands, consumer businesses, D2C companies, wholesalers, and omnichannel organizations. Oxavyn can create technology solutions around the specific operational model and requirements of each business.
            </motion.p>
          </motion.div>

          <div className="ret-grid-2">
            {[
              {
                title: "Stores & Physical Retail",
                mediaText: "PHYSICAL RETAIL STORE",
                desc: "Connect store operations, customers, products, employees, inventory, sales, and management into a more organized digital environment.",
                tags: ["STORE MGMT", "SALES", "INVENTORY", "CUSTOMERS", "STAFF", "REPORTING"]
              },
              {
                title: "D2C & E-Commerce",
                mediaText: "D2C & E-COMMERCE",
                desc: "Build connected digital commerce operations covering customers, orders, products, inventory, fulfillment, communication, and analytics.",
                tags: ["CUSTOMERS", "ORDERS", "PRODUCTS", "INVENTORY", "FULFILLMENT"]
              },
              {
                title: "Consumer Brands",
                mediaText: "CONSUMER BRAND",
                desc: "Connect product operations, customers, sales channels, distributors, inventory, marketing, and business performance.",
                tags: ["BRAND MGMT", "CRM", "SALES", "INVENTORY", "DISTRIBUTION"]
              },
              {
                title: "Multi-Store Retail",
                mediaText: "MULTI-STORE RETAIL",
                desc: "Create centralized visibility across multiple stores, locations, inventory points, employees, customers, and operational activities.",
                tags: ["MULTI-STORE", "INVENTORY", "STAFF", "PERFORMANCE", "DASHBOARD"]
              },
              {
                title: "Wholesale & Distribution",
                mediaText: "WHOLESALE & DISTRIBUTION",
                desc: "Manage products, customers, distributors, suppliers, orders, inventory, logistics, and business operations through connected systems.",
                tags: ["DISTRIBUTORS", "ORDERS", "PROCUREMENT", "LOGISTICS", "ANALYTICS"]
              }
            ].map((segment, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                className="ret-glass-card"
                style={{ height: '100%' }}
              >
                <div className="ret-ambient-border-glow"></div>
                <h3 className="ret-heading-tertiary" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>{segment.title}</h3>
                
                <div className="ret-course-media">
                  <div style={{ height: '200px' }}>
                    <ResponsiveVideo src="/images/career-vid.mp4" />
                  </div>
                </div>

                <div className="ret-course-tags" style={{ justifyContent: 'center' }}>
                  {segment.tags.map(tag => (
                    <span key={tag} className="ret-tag">{tag}</span>
                  ))}
                </div>
                
                <p className="ret-course-desc" style={{ textAlign: 'center' }}>{segment.desc}</p>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                  <button className="ret-btn-outline" onClick={scrollToEnquiry}>Know More &rarr;</button>
                </div>
                <div className="ret-card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — CRM + CUSTOMER EXPERIENCE */}
      <section className="ret-section ret-section-alt">
        <div className="ret-container std-layout-section">
          
          <div className="std-layout-split">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="ret-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Turn Every Customer Interaction Into a Better Experience.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="ret-subheading" style={{ textAlign: 'left', marginBottom: '1rem' }}>Connect customer relationships across every retail touchpoint.</motion.p>
                <motion.p variants={fadeInUp} className="ret-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Customers interact with retail brands through stores, websites, social channels, support teams, campaigns, and post-purchase communication. A centralized CRM can help businesses maintain a clearer understanding of these interactions and create more consistent customer experiences.
                </motion.p>
              </motion.div>
            </div>

            {/* MEDIA SIDE */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="std-media-side">
              <div style={{ minHeight: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <ResponsiveVideo src="/images/career-vid.mp4" />
              </div>
            </motion.div>
          </div>

          {/* FEATURES / CARDS BELOW */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-feature-card">
            <div className="ret-grid-3" style={{ marginBottom: '4rem' }}>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Customer Profiles</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Centralized customer information and interaction history.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Purchase History</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Understand customer purchasing behavior and previous transactions.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Customer Segmentation</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Organize customers according to relevant business criteria.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Follow-Ups</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Manage customer engagement and follow-up activities.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Marketing Communication</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Support structured campaigns and customer communication.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Customer Support</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Connect support interactions with customer information.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="ret-journey">
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">DISCOVER</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">ENGAGE</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">PURCHASE</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">DELIVERY</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">SUPPORT</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">REPEAT PURCHASE</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label" style={{ color: '#f59e0b' }}>LOYALTY</div></div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 05 — ERP + INVENTORY + OPERATIONS */}
      <section className="ret-section">
        <div className="ret-container std-layout-section">
          
          <div className="std-layout-split reverse">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="ret-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Connect the Business Behind Every Sale.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="ret-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Retail success depends on more than customer experience. Products need to be available, inventory needs to be visible, suppliers need to be coordinated, stores need to operate efficiently, and management needs reliable information. Oxavyn can connect these operational processes through ERP and business management systems.
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
            <div className="ret-grid-3" style={{ marginBottom: '4rem' }}>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Inventory Management</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Track stock levels, product movement, locations, and availability.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Procurement</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Manage purchasing workflows, suppliers, purchase orders, and procurement activity.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Finance</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Connect financial information with retail operations and business reporting.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Warehouse Management</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Improve visibility across warehouses, stock movement, and fulfillment processes.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Supplier Management</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Maintain supplier information, purchasing activity, and relationships.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '2rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.2rem' }}>Store Operations</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Manage store-level operational processes and performance.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="ret-journey">
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">PRODUCT</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">SUPPLIER</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">PROCUREMENT</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">WAREHOUSE</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">STORE / ONLINE CHANNEL</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">CUSTOMER ORDER</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">INVENTORY UPDATE</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label">FINANCE</div></div>
              <div className="ret-journey-step"><div className="ret-journey-dot"></div><div className="ret-journey-label" style={{ color: '#f59e0b' }}>MANAGEMENT</div></div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 06 — ANALYTICS + AUTOMATION */}
      <section className="ret-section ret-section-alt">
        <div className="ret-container std-layout-section">
          
          <div className="std-layout-split">
            {/* TEXT SIDE */}
            <div className="std-text-side">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="std-heading">
                <motion.h2 variants={fadeInUp} className="ret-heading-secondary" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Turn Retail Data Into Business Intelligence.</motion.h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="std-paragraph">
                <motion.p variants={fadeInUp} className="ret-paragraph" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                  Retail businesses generate data across customers, products, sales, inventory, stores, orders, marketing, and operations. Oxavyn can bring this information together through dashboards and analytics so management teams can better understand performance and identify areas that need attention.
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
            <div className="ret-grid-3" style={{ gap: '1.5rem' }}>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '1.5rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Sales Analytics</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Monitor sales performance and trends.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '1.5rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Customer Analytics</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Understand customer activity and engagement.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '1.5rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Inventory Analytics</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Identify stock movement, availability, and inventory trends.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '1.5rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Store Analytics</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Compare performance across locations.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '1.5rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Product Analytics</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Understand product-level performance.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="ret-glass-card" style={{ padding: '1.5rem' }}>
                <div className="ret-ambient-border-glow"></div>
                <div className="ret-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Management Analytics</div>
                <div className="ret-card-desc" style={{ fontSize: '0.9rem' }}>Provide leadership with a centralized business view.</div>
                <div className="ret-card-glow"></div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 07 — FINAL CTA + ENQUIRY FORM */}
      <section className="ret-section" id="retail-consumer-enquiry" style={{ background: 'linear-gradient(135deg, rgba(253,253,252,1) 0%, rgba(254,252,232,1) 100%)' }}>
        <div className="ret-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <motion.h2 variants={fadeInUp} className="ret-heading-secondary">Build a Retail Business That Works as One System.</motion.h2>
            <motion.p variants={fadeInUp} className="ret-paragraph" style={{ margin: '0 auto 2rem' }}>
              Whether you operate a retail store, consumer brand, D2C business, multi-store network, e-commerce company, or wholesale operation, Oxavyn can help you explore a connected technology ecosystem spanning CRM, ERP, inventory, operations, analytics, and automation.
            </motion.p>
            <motion.div variants={fadeInUp} className="ret-button-group" style={{ justifyContent: 'center' }}>
              <button onClick={scrollToEnquiry} className="ret-btn-primary">Start a Conversation</button>
              <button onClick={scrollToEnquiry} className="ret-btn-secondary">Discuss Your Requirements</button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ret-form-container"
          >
            <div style={{ position: 'relative' }}>
              <div className="ret-form-modern-glow"></div>
              <div className="ret-form-modern">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-outfit, sans-serif)' }}>Let's Build Your Retail Technology Ecosystem.</h3>
                  <p style={{ color: '#6b7280', marginBottom: '1rem', fontWeight: 500 }}>Tell us about your business and what you want to improve.</p>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                <div className="ret-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                  <div className="ret-form-group" style={{ marginBottom: 0 }}>
                    <label className="ret-form-label">Full Name</label>
                    <input type="text" className="ret-form-input" placeholder="Enter your full name" />
                  </div>
                  
                  <div className="ret-form-group" style={{ marginBottom: 0 }}>
                    <label className="ret-form-label">Work Email</label>
                    <input type="email" className="ret-form-input" placeholder="Enter your business email" />
                  </div>
                </div>

                <div className="ret-grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                  <div className="ret-form-group" style={{ marginBottom: 0 }}>
                    <label className="ret-form-label">Phone Number</label>
                    <input type="tel" className="ret-form-input" placeholder="Enter your phone number" />
                  </div>

                  <div className="ret-form-group" style={{ marginBottom: 0 }}>
                    <label className="ret-form-label">Company / Brand Name</label>
                    <input type="text" className="ret-form-input" placeholder="Enter your company or brand name" />
                  </div>
                </div>

                <div className="ret-form-group">
                  <label className="ret-form-label">Business Type</label>
                  <select className="ret-form-select" defaultValue="">
                    <option value="" disabled>Select business type</option>
                    <option value="Retail Store">Retail Store</option>
                    <option value="Multi-Store Retail">Multi-Store Retail</option>
                    <option value="D2C Brand">D2C Brand</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Consumer Brand">Consumer Brand</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Distribution">Distribution</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="ret-form-group">
                  <label className="ret-form-label">Areas of Interest (Select multiple)</label>
                  <select 
                    multiple 
                    className="ret-form-select" 
                    style={{ minHeight: '140px' }}
                    onChange={handleInterestChange}
                  >
                    <option value="CRM">CRM</option>
                    <option value="ERP">ERP</option>
                    <option value="Customer Management">Customer Management</option>
                    <option value="Inventory Management">Inventory Management</option>
                    <option value="Store Management">Store Management</option>
                    <option value="Order Management">Order Management</option>
                    <option value="Product Management">Product Management</option>
                    <option value="Procurement">Procurement</option>
                    <option value="Warehouse Management">Warehouse Management</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Business Intelligence">Business Intelligence</option>
                    <option value="Automation">Automation</option>
                    <option value="Custom Retail Software">Custom Retail Software</option>
                  </select>
                </div>

                <div className="ret-form-group">
                  <label className="ret-form-label">Current Challenge</label>
                  <textarea className="ret-form-textarea" placeholder="Tell us about your current system, challenge, or requirement..."></textarea>
                </div>

                <button type="submit" className="ret-btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem' }}>
                  Send Enquiry
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#6b7280', marginTop: '1rem' }}>
                  Our team will review your requirements and help identify the appropriate next step.
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
