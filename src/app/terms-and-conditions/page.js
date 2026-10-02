import React from 'react';
import DynamicBackground from '@/components/DynamicBackground';

export const metadata = {
  title: 'Terms & Conditions | Oxavyn',
  description: 'Terms and Conditions for Oxavyn.',
};
export const revalidate = 600;

export default function TermsAndConditions() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <DynamicBackground page="LEGAL" section="Terms & Conditions" title="Banner Image" className="parallax-banner vh-80">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))', zIndex: 1 }}></div>
        <div className="banner-content animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', WebkitTextFillColor: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>Terms & Conditions</h1>
          <p style={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Please read these terms and conditions carefully before using our service.</p>
        </div>
      </DynamicBackground>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="glass-panel animate-fade-in delay-1" style={{ padding: '3rem' }}>
          
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Welcome to OXAVYN</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN is a technology and digital solutions company providing modern software, web, mobile, AI, automation, analytics, and digital transformation services. These Terms & Conditions govern your access to and use of the OXAVYN website, digital platforms, software, applications, technology services, content, and other services available through <a href="https://oxavyn.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>oxavyn.com</a>.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>By accessing, browsing, submitting an enquiry, requesting a service, purchasing a service, creating an account, or otherwise using OXAVYN services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. If you do not agree with these Terms, please discontinue use of the website and services.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>About OXAVYN</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN provides technology solutions designed to help businesses, organizations, institutions, and individuals build, improve, automate, and scale their digital operations.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Our services may include Web Development, Mobile App Development, AI Solutions, Generative AI, Machine Learning, Custom Software Development, SaaS Development, Data Analytics, Business Intelligence, Data Science, Workflow Automation, CRM Automation, Business Process Automation, Third-Party Integrations, Cloud Solutions, UI/UX Design, Technology Consulting, and other related digital transformation services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The availability of a particular service may depend on the project requirements, technical feasibility, business needs, and applicable agreement.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Acceptance of Terms</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>By using the OXAVYN website or services, you agree to comply with these Terms & Conditions and all applicable laws and regulations.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>If you access or use OXAVYN services on behalf of a company, organization, institution, or other legal entity, you confirm that you have the authority to accept these Terms on its behalf.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Changes to These Terms</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may update, modify, or replace these Terms & Conditions from time to time to reflect changes in our services, technology, business practices, or applicable laws.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Any updated version may be published on this page with a revised "Last Updated" date. Your continued use of the website or services after an updated version is published may constitute acceptance of the revised Terms, to the extent permitted by applicable law.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Website Availability</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN aims to keep its website and digital services available and functional. However, continuous, uninterrupted, or error-free availability cannot be guaranteed.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The website or services may occasionally become unavailable due to maintenance, updates, hosting issues, network failures, security incidents, technical problems, third-party service interruptions, or circumstances beyond our reasonable control.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Permitted Use</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>You may use the OXAVYN website and services for lawful purposes, including learning about our services, exploring technology solutions, requesting information, submitting enquiries, requesting project proposals, accessing permitted resources, and using authorized software or digital services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>You agree to use the website responsibly and in accordance with these Terms.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Prohibited Activities</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>You must not use the OXAVYN website or services to violate applicable laws, attempt unauthorized access to our systems, introduce viruses or malicious code, conduct unauthorized security attacks, circumvent authentication or security systems, copy protected content without permission, impersonate another person or organization, distribute unlawful material, interfere with other users, reverse engineer restricted software, or access another user's account or information without authorization.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN may restrict or suspend access where it reasonably believes that these Terms have been violated.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>User-Submitted Information</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>When submitting information through the OXAVYN website, you agree to provide information that is accurate and not misleading.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>You should not submit malicious files, unauthorized personal information, confidential information belonging to another party, stolen content, fraudulent information, or materials that infringe third-party rights.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>You remain responsible for the information and materials you submit through the website.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Website Content</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The OXAVYN website may contain service descriptions, technology information, articles, graphics, images, videos, case studies, educational resources, software information, and other digital content.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may update, modify, replace, or remove website content without prior notice.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Information published on the website should not automatically be considered a binding quotation, guarantee, or contractual commitment unless expressly stated otherwise.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Software & Technology Services</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Web Development</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may provide website development services including UI/UX design, frontend development, backend development, database development, API development, CMS implementation, authentication systems, third-party integrations, admin dashboards, deployment, performance optimization, and maintenance.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The exact features, technologies, deliverables, and services provided will depend on the applicable project scope or agreement.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Mobile Application Development</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may develop mobile applications for platforms including Android, iOS, and cross-platform environments.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Application development may include UI/UX design, frontend development, backend systems, APIs, authentication, notifications, database integration, payment integration, third-party services, and application deployment.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Application-store submission and approval are controlled by the relevant platform provider. OXAVYN does not guarantee application approval, ranking, visibility, downloads, or acceptance by any third-party application marketplace.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Custom Software Development</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may develop customized software according to specific business requirements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Custom software may include business management systems, CRM platforms, ERP systems, SaaS platforms, internal dashboards, inventory systems, workflow platforms, customer portals, enterprise applications, automation systems, and data platforms.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Features that are not included in the agreed project scope may require additional development and charges.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>SaaS Services</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where OXAVYN provides software through a Software-as-a-Service model, access may depend on the applicable subscription plan, number of users, storage, usage limits, API limits, available features, subscription period, and other applicable conditions.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Specific SaaS products may have additional terms governing their use.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Cloud & Infrastructure Services</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN solutions may use cloud infrastructure, hosting, databases, content delivery networks, storage systems, APIs, authentication platforms, analytics systems, and other technology infrastructure.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Third-party infrastructure may have separate pricing, terms, limitations, security requirements, and availability conditions.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>AI, Automation & Data Services</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>AI Solutions</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may provide artificial intelligence solutions including AI chatbots, AI agents, Generative AI, Machine Learning, Natural Language Processing, recommendation systems, AI-powered applications, AI automation, and other intelligent technology solutions.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>AI-generated or AI-assisted results may be incomplete, inaccurate, unexpected, or unsuitable for a particular purpose. Users should review important AI-generated results before relying upon them.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Generative AI</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Generative AI services may be used for text, images, audio, video, code, summaries, research assistance, business workflows, customer support, and other approved use cases.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>AI outputs may vary depending on the input, model, technology, third-party provider, and other technical factors.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN does not guarantee that AI-generated content will always be unique, accurate, complete, unbiased, or error-free.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>AI Third-Party Providers</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Some OXAVYN AI services may depend on third-party artificial intelligence models, APIs, cloud platforms, SDKs, or software providers.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Third-party providers may change their pricing, availability, API limits, models, features, usage policies, or technical requirements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN is not responsible for changes independently made by third-party providers.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Automation Services</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may develop automation solutions involving CRM automation, business process automation, workflow automation, notifications, data processing, document processing, customer communication, internal business workflows, and system integrations.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Automation results depend on the accuracy, availability, configuration, and reliability of the systems connected to the automation.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Data Analytics & Business Intelligence</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may provide data analytics, business intelligence, dashboards, reports, data visualization, data processing, and data-driven insights.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Analytics and reports depend on the quality, accuracy, completeness, and availability of the underlying data.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN does not guarantee that analytical outputs will produce a specific business, financial, operational, or commercial result.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>No Professional Advice</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Unless expressly agreed otherwise, OXAVYN's technology, AI, analytics, and informational services should not be considered legal, medical, financial, investment, tax, or other professional advice.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Users should obtain appropriate professional advice where required.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Projects, Payments & Intellectual Property</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Project Scope</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Each development project may be governed by a proposal, quotation, Statement of Work, agreement, subscription plan, or other written document.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The applicable project document may define features, deliverables, technology, timelines, milestones, pricing, payment schedules, support, maintenance, deployment, ownership, and other project-specific conditions.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Project Changes</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Requests outside the agreed scope may require additional time and charges.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Additional work may include new features, additional pages, applications, integrations, dashboards, automation, design changes, functionality changes, or architectural changes.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN may provide a separate estimate before beginning additional work.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Client Responsibilities</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Clients are responsible for providing required content, images, videos, logos, product information, business information, technical requirements, approvals, feedback, and access credentials where necessary.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Delays in providing required information, approvals, or access may affect project timelines.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Payments</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Project and subscription pricing will be communicated through the applicable proposal, quotation, order form, subscription plan, or agreement.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Payment structures may include advance payments, milestone payments, monthly subscriptions, quarterly subscriptions, annual subscriptions, or final payments.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Applicable taxes and third-party costs may apply unless expressly included in the applicable agreement.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Intellectual Property</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may retain ownership of its pre-existing software, code libraries, frameworks, templates, components, development tools, design systems, algorithms, processes, methodologies, know-how, and reusable technology.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Ownership of project-specific deliverables will be determined by the applicable agreement.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Payment for a service does not automatically transfer ownership of OXAVYN's pre-existing intellectual property.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Third-Party & Open-Source Software</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN projects may contain third-party or open-source software.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Such software may be governed by separate licenses and terms. OXAVYN does not transfer ownership of third-party intellectual property unless legally permitted and expressly agreed.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Client Materials</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The client retains ownership of materials supplied to OXAVYN unless otherwise agreed.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The client grants OXAVYN the necessary permission to use those materials solely for providing the agreed services.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Privacy, Security, Support & Third-Party Services</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Privacy</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may collect and process information when visitors browse the website, submit enquiries, request services, use accounts, communicate with OXAVYN, or use software and digital services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Personal information will be handled according to the OXAVYN Privacy Policy and applicable laws.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Data Protection</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where OXAVYN processes personal data as part of providing services, additional data-protection obligations may apply.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Depending on the service and relationship between the parties, additional contractual documents may be required.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Security</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may implement reasonable technical and organizational measures to protect systems and information.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>However, no internet-connected system can be guaranteed to be completely secure.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Users are responsible for protecting their own passwords, authentication credentials, API keys, devices, accounts, and access tokens.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Support & Maintenance</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Support and maintenance may be provided where expressly included in the applicable service agreement or subscription.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Support may include bug fixes, technical assistance, security updates, system monitoring, maintenance, and performance improvements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>New features or substantial changes may require additional charges.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Third-Party Services</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN solutions may integrate with third-party services, including cloud providers, payment systems, AI platforms, databases, communication services, analytics systems, hosting providers, and other technology platforms.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Third-party services are controlled by their respective providers.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN is not responsible for independent changes, outages, pricing changes, restrictions, suspension, or discontinuation of third-party services.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Hosting & Domain Services</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Unless specifically included in an applicable agreement, domain registration, hosting, cloud infrastructure, database hosting, storage, CDN services, API usage, email services, SMS services, and third-party subscriptions may be separate from development services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The client may be responsible for applicable third-party charges.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Warranties, Liability & Termination</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Service Quality</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN will make reasonable efforts to provide services professionally and according to the agreed scope.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>However, technology services may be affected by third-party platforms, infrastructure, operating systems, browsers, APIs, networks, and other factors outside OXAVYN's direct control.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>No Guaranteed Business Results</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN does not guarantee specific revenue, profit, sales, leads, search rankings, app downloads, website traffic, conversion rates, customer acquisition, business growth, investment returns, or other commercial results unless a specific written agreement expressly provides otherwise.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Limitation of Liability</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>To the maximum extent permitted by applicable law, OXAVYN will not be responsible for indirect, incidental, special, consequential, or punitive losses arising from the use of its website or services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>This may include loss of revenue, profit, business opportunities, data, goodwill, expected savings, or business operations.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Nothing in these Terms is intended to exclude liability that cannot legally be excluded.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Liability Limit</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>To the extent permitted by applicable law, OXAVYN's total liability relating to a particular service or project may be limited to the amount paid for that service under the applicable agreement.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Any specific liability limitation contained in a signed agreement will govern where applicable.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Suspension</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN may suspend access to services where reasonably necessary due to non-payment, security concerns, misuse, illegal activity, violation of these Terms, unauthorized access, or excessive resource usage.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Termination</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>A service, project, or subscription may be terminated according to the applicable agreement.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Termination may occur because of completion of services, expiration of a subscription, material breach, non-payment, mutual agreement, or other circumstances permitted by the applicable agreement.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Effect of Termination</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>After termination, access to applicable services may end, outstanding payments may remain payable, applicable licenses may terminate, and confidentiality, intellectual-property, liability, and data-handling obligations may continue according to the applicable agreement and law.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Confidentiality, Legal Terms & Contact</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Confidentiality</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Information exchanged between OXAVYN and its clients may include confidential business, technical, financial, operational, or commercial information.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Each party should take reasonable measures to protect confidential information.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Confidentiality obligations generally do not apply to information that is publicly available without breach, was already lawfully known, is independently developed, is lawfully obtained from another source, or must be disclosed by law.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Force Majeure</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN will not be responsible for delays or failures caused by circumstances beyond reasonable control, including natural disasters, government actions, war, terrorism, internet failures, major cloud outages, cybersecurity incidents, power failures, telecommunications failures, pandemics, strikes, or other extraordinary events.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Governing Law</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>These Terms & Conditions shall be governed by the laws applicable in India.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Subject to applicable law, disputes relating to OXAVYN services may be subject to the jurisdiction of the appropriate courts in Jaipur, Rajasthan, India.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Dispute Resolution</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN and the concerned party should first attempt to resolve disputes through good-faith discussions.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where appropriate, the parties may mutually agree to mediation or arbitration in accordance with applicable law.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Severability</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by applicable law.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>No Waiver</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Failure to enforce any provision of these Terms does not constitute a waiver of the right to enforce that provision later.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Entire Agreement</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>These Terms, together with any applicable proposal, quotation, Statement of Work, subscription agreement, service agreement, SLA, Privacy Policy, or other written agreement, form the applicable contractual framework between OXAVYN and the user or client.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where a specific signed agreement contains terms that conflict with these general Terms, the specific agreement may prevail for that particular service.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Electronic Acceptance</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>By accessing the website, submitting an enquiry, purchasing a service, creating an account, accepting a quotation electronically, clicking an acceptance button, or using an OXAVYN service, you acknowledge these Terms to the extent permitted by applicable law.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>OXAVYN</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Website: <a href="https://oxavyn.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>https://oxavyn.com</a></p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Users may use the relevant Contact or Enquiry functionality available on the OXAVYN website for service-related or legal matters.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)', fontWeight: 'bold' }}>© 2026 OXAVYN. All Rights Reserved.</p>

        </div>
      </div>
    </main>
  );
}
