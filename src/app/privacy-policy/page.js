import React from 'react';
import DynamicBackground from '@/components/DynamicBackground';

export const metadata = {
  title: 'Privacy Policy | Oxavyn',
  description: 'Privacy Policy for Oxavyn.',
};
export const revalidate = 600;

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <DynamicBackground page="LEGAL" section="Privacy Policy" title="Banner Image" className="parallax-banner vh-80">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))', zIndex: 1 }}></div>
        <div className="banner-content animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', WebkitTextFillColor: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>Privacy Policy</h1>
          <p style={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Your privacy is important to us. Discover how we handle your data securely.</p>
        </div>
      </DynamicBackground>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="glass-panel animate-fade-in delay-1" style={{ padding: '3rem' }}>
          
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Your Privacy Matters to OXAVYN</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how OXAVYN may collect, use, store, protect, disclose, and otherwise process information when you visit <a href="https://oxavyn.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>oxavyn.com</a>, submit an enquiry, request our services, interact with our digital platforms, or use OXAVYN software and technology services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>This Privacy Policy applies to information collected through the OXAVYN website, online forms, applications, software platforms, dashboards, customer interactions, and other digital services operated or provided by OXAVYN.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>By using OXAVYN's website or services, you acknowledge this Privacy Policy. Where consent is required by applicable law, OXAVYN will seek consent through an appropriate mechanism.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Information We Collect</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Information You Provide</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>We may collect information that you voluntarily provide when you interact with OXAVYN.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on how you use our website or services, this may include:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Full name</li>
            <li>Business or organization name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Job title or professional information</li>
            <li>College or institution information</li>
            <li>Project requirements</li>
            <li>Service requirements</li>
            <li>Information submitted through enquiry forms</li>
            <li>Information provided during consultations</li>
            <li>Account information</li>
            <li>Support requests</li>
            <li>Feedback</li>
            <li>Documents or files that you voluntarily submit</li>
            <li>Other information necessary to provide requested services</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>We only request information that is reasonably relevant to the purpose for which it is collected.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Information Collected Automatically</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>When you visit oxavyn.com, certain technical information may be collected automatically.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>This may include:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Screen resolution</li>
            <li>Language preferences</li>
            <li>Approximate geographic information</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Referring website</li>
            <li>Navigation activity</li>
            <li>Interaction with website features</li>
            <li>Device and browser identifiers</li>
            <li>Technical logs</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>This information may be used to operate, secure, analyze, and improve the website.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Information From Communications</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>When you communicate with OXAVYN through website forms, support systems, applications, or other permitted communication channels, we may retain relevant information from those interactions.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>This may include your enquiry, project requirements, service preferences, and information necessary to respond to you.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>How We Use Your Information</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Providing Our Services</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may use personal information to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Respond to enquiries</li>
            <li>Understand project requirements</li>
            <li>Provide requested services</li>
            <li>Prepare proposals or quotations</li>
            <li>Create and manage accounts</li>
            <li>Provide customer support</li>
            <li>Deliver software and digital services</li>
            <li>Manage subscriptions</li>
            <li>Process service-related requests</li>
            <li>Communicate about projects</li>
            <li>Provide technical assistance</li>
            <li>Maintain our systems</li>
          </ul>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Improving Our Website & Services</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Information may also be used to understand how visitors interact with our website and services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>This can help us:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Improve website performance</li>
            <li>Improve user experience</li>
            <li>Identify technical problems</li>
            <li>Develop new features</li>
            <li>Improve existing services</li>
            <li>Analyze website usage</li>
            <li>Improve content</li>
            <li>Maintain security</li>
            <li>Understand general service requirements</li>
          </ul>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Communication</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>We may use information you provide to communicate with you regarding:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Enquiries</li>
            <li>Requested services</li>
            <li>Project discussions</li>
            <li>Account activity</li>
            <li>Service updates</li>
            <li>Support requests</li>
            <li>Important changes to services</li>
            <li>Security or technical matters</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where applicable, marketing communications will be handled in accordance with applicable law and available user choices.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Legal & Security Purposes</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Information may be processed where reasonably necessary to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Comply with applicable laws</li>
            <li>Respond to lawful requests</li>
            <li>Protect OXAVYN systems</li>
            <li>Prevent fraud</li>
            <li>Detect unauthorized activity</li>
            <li>Investigate security incidents</li>
            <li>Enforce our Terms & Conditions</li>
            <li>Protect users and other parties</li>
            <li>Establish or defend legal claims</li>
          </ul>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Cookies & Similar Technologies</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>What Are Cookies?</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Cookies are small files or similar technologies that may be stored on your device when you visit a website.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN may use cookies and similar technologies to support website functionality, security, analytics, preferences, and performance.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Types of Cookies We May Use</h3>
          <h4 style={{ marginBottom: '0.5rem', color: 'var(--foreground)', fontSize: '1.1rem', fontWeight: 'bold' }}>Essential Cookies</h4>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>These cookies may be necessary for basic website functionality, security, navigation, authentication, or other essential features.</p>
          <h4 style={{ marginBottom: '0.5rem', color: 'var(--foreground)', fontSize: '1.1rem', fontWeight: 'bold' }}>Functional Cookies</h4>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Functional technologies may help remember preferences and improve your experience.</p>
          <h4 style={{ marginBottom: '0.5rem', color: 'var(--foreground)', fontSize: '1.1rem', fontWeight: 'bold' }}>Analytics Cookies</h4>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Analytics technologies may help us understand:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Website traffic</li>
            <li>Popular pages</li>
            <li>User interactions</li>
            <li>General visitor behavior</li>
            <li>Performance</li>
            <li>Technical issues</li>
          </ul>
          <h4 style={{ marginBottom: '0.5rem', color: 'var(--foreground)', fontSize: '1.1rem', fontWeight: 'bold' }}>Marketing Technologies</h4>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where applicable, marketing or advertising technologies may be used to understand campaign performance or provide more relevant communications, subject to applicable requirements and user choices.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Managing Cookies</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on your browser and applicable consent requirements, you may be able to control or delete cookies through your browser settings.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Disabling certain cookies may affect the functionality of some website features.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Third-Party Services</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Third-Party Technology Providers</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may use third-party technology providers to operate and improve its website and services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>These providers may include services for:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Cloud hosting</li>
            <li>Database management</li>
            <li>Content delivery</li>
            <li>Media storage</li>
            <li>Analytics</li>
            <li>Authentication</li>
            <li>Payments</li>
            <li>Communication</li>
            <li>Customer support</li>
            <li>AI services</li>
            <li>Software development</li>
            <li>Security</li>
            <li>Performance monitoring</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Third-party providers may process information according to their own privacy policies and applicable contractual arrangements.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Cloud & Infrastructure Providers</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN services may use third-party cloud and infrastructure providers for hosting, storage, databases, media delivery, application deployment, security, and other technical requirements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Information may therefore be processed through infrastructure located in India or other countries, depending on the technology architecture and service requirements.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>AI Service Providers</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Certain OXAVYN services may use third-party AI models, APIs, platforms, or infrastructure.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on the particular service, information submitted to an AI-powered feature may be processed by the relevant technology provider.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN will take reasonable steps to configure such services appropriately for the intended use case and applicable requirements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Users should avoid submitting highly sensitive or confidential information to an AI-powered feature unless the relevant service specifically permits such use.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Sharing & Disclosure</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>When We May Share Information</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may share information where reasonably necessary to operate our business and provide requested services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Information may be shared with:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Technology service providers</li>
            <li>Cloud infrastructure providers</li>
            <li>Hosting providers</li>
            <li>Database providers</li>
            <li>Analytics providers</li>
            <li>AI service providers</li>
            <li>Payment service providers</li>
            <li>Security providers</li>
            <li>Professional advisors</li>
            <li>Contractors or service providers working on our behalf</li>
            <li>Legal or regulatory authorities where required</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>We aim to share only information reasonably necessary for the relevant purpose.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Legal Requirements</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN may disclose information where required or permitted by applicable law, regulation, legal process, court order, government request, or to protect legal rights, safety, security, or property.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Business Transfers</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>If OXAVYN undergoes a merger, acquisition, restructuring, financing, sale of assets, or other business transaction, information may be transferred as part of that transaction, subject to applicable law and appropriate safeguards.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Security</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Security Measures</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN takes reasonable measures designed to protect personal information against unauthorized access, alteration, disclosure, misuse, or destruction.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on the service, security measures may include:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Access controls</li>
            <li>Authentication</li>
            <li>Authorization</li>
            <li>Encryption where appropriate</li>
            <li>Secure application architecture</li>
            <li>Monitoring</li>
            <li>Logging</li>
            <li>Infrastructure security</li>
            <li>Backup procedures</li>
            <li>Security updates</li>
            <li>Administrative controls</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>However, no internet-based system, application, database, or transmission method can be guaranteed to be completely secure.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Account Security</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where you have an OXAVYN account, you are responsible for protecting your:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Password</li>
            <li>Authentication credentials</li>
            <li>API keys</li>
            <li>Access tokens</li>
            <li>Devices</li>
            <li>Account information</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>You should notify OXAVYN through the appropriate website or support channel if you believe your account has been accessed without authorization.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Security Incidents</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where required by applicable law, OXAVYN may take appropriate steps in response to a personal-data security incident, including investigation, containment, remediation, and applicable notifications.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Retention</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>How Long We Keep Information</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may retain personal information for as long as reasonably necessary for the purpose for which it was collected.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Retention periods may depend on:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>The type of information</li>
            <li>The purpose of processing</li>
            <li>The nature of the relationship</li>
            <li>Contractual requirements</li>
            <li>Legal obligations</li>
            <li>Accounting requirements</li>
            <li>Dispute resolution</li>
            <li>Security requirements</li>
            <li>Legitimate business requirements</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>When information is no longer required, OXAVYN may delete, anonymize, or otherwise securely dispose of it, subject to applicable legal and operational requirements.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Project & Customer Data</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Information associated with software projects, accounts, subscriptions, customer relationships, or contractual services may be retained according to the applicable agreement and legal requirements.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Your Privacy Rights</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Access & Information</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Depending on applicable law, you may have rights relating to your personal information, including rights to obtain information about the processing of your personal data.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Correction</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>You may request correction of inaccurate or incomplete personal information where applicable.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Withdrawal of Consent</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where processing is based on consent, you may have the right to withdraw that consent, subject to applicable law and the consequences of withdrawal.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Withdrawal of consent may not affect processing that was lawfully completed before the withdrawal.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Deletion</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on applicable law, you may request deletion of personal information where it is no longer required or where another legal basis for deletion applies.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Certain information may need to be retained where required by law, for legitimate purposes, or to establish or defend legal claims.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Grievances & Complaints</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>If you have a privacy-related concern, you may use the relevant Contact or Enquiry functionality available on the OXAVYN website.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN will review privacy-related concerns and take appropriate action in accordance with applicable law.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>India's Digital Personal Data Protection Act, 2023 establishes a framework concerning the processing of digital personal data and rights of individuals.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The Digital Personal Data Protection Rules, 2025 were notified by the Ministry of Electronics and Information Technology on 13 November 2025 and establish additional requirements concerning notices, consent, security, rights, and related data-processing matters.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Children's Privacy</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Services Intended for Adults and Businesses</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN's primary services are intended for businesses, organizations, professionals, institutions, and other users capable of entering into applicable agreements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN does not knowingly seek to collect personal information from children in circumstances where such collection is prohibited by applicable law.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where a service is specifically designed for students or younger users, additional safeguards and consent requirements may apply based on the nature of the service and applicable law.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>International Data Processing</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Processing Outside India</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Some OXAVYN services may use technology providers or infrastructure located outside India.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>As a result, personal information may be processed or stored in jurisdictions other than the country in which you are located.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where applicable, OXAVYN will take reasonable steps to ensure that such processing is carried out in accordance with applicable legal requirements and contractual safeguards.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Provided to OXAVYN by Clients</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Customer-Controlled Information</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>If you use an OXAVYN software platform, CRM, ERP, SaaS application, analytics system, automation platform, or other technology solution, you may provide information belonging to your customers, employees, users, suppliers, or other individuals.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on the applicable service arrangement, OXAVYN may process such information on behalf of the client.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The client remains responsible for determining the appropriate purpose and lawful basis for collecting and providing such information to OXAVYN, unless otherwise agreed.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Client Data Responsibilities</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Clients should ensure that information provided to OXAVYN is collected and shared lawfully and that appropriate notices, permissions, consents, or other legal requirements have been satisfied where necessary.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Additional contractual data-processing terms may apply to enterprise or business customers.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>AI & Automated Processing</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>AI-Powered Features</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Some OXAVYN services may use AI or automated technologies to process information and generate outputs.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Such technologies may be used for:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Customer support</li>
            <li>Content generation</li>
            <li>Data analysis</li>
            <li>Recommendations</li>
            <li>Workflow automation</li>
            <li>Document processing</li>
            <li>Search</li>
            <li>Classification</li>
            <li>Summarization</li>
            <li>Business intelligence</li>
            <li>Software development</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>AI-generated results may contain errors or unexpected outputs.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Human Review</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where AI-generated information is used for important business decisions, users should apply appropriate human review and verification.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN does not guarantee that AI-generated outputs will be accurate, complete, unbiased, or suitable for a particular purpose.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Sensitive Information</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Users should not provide sensitive personal information, confidential business information, passwords, payment credentials, private keys, or other highly confidential information to AI features unless the applicable OXAVYN service expressly supports such information and appropriate protections are in place.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Website Analytics & Performance</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Website Analytics</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may use analytics and performance technologies to understand how visitors interact with oxavyn.com.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>This may help us understand:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Which pages receive traffic</li>
            <li>How users navigate the website</li>
            <li>Website performance</li>
            <li>Device and browser trends</li>
            <li>Technical errors</li>
            <li>General usage patterns</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Analytics information may be aggregated or otherwise processed to improve our services.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Performance Monitoring</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may use technical monitoring tools to identify:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Website errors</li>
            <li>Application errors</li>
            <li>Performance issues</li>
            <li>Security events</li>
            <li>Availability problems</li>
            <li>Infrastructure problems</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>These tools may collect technical information necessary to diagnose and resolve issues.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Links to Other Websites</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Third-Party Websites</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The OXAVYN website may contain links to third-party websites, platforms, applications, or services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN does not control the privacy practices of third-party websites.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>When you leave oxavyn.com, you should review the privacy policy and terms of the third-party website you visit.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN is not responsible for the privacy practices, security, content, or policies of third-party websites.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Marketing & Communications</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Service Communications</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may send communications relating to services you have requested or used.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>These may include:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Enquiry responses</li>
            <li>Project updates</li>
            <li>Account notifications</li>
            <li>Service notifications</li>
            <li>Security notifications</li>
            <li>Important changes</li>
            <li>Support communications</li>
          </ul>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Promotional Communications</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where permitted by applicable law, OXAVYN may send information about services, technology, products, events, educational resources, or other relevant offerings.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>You may be provided with appropriate options to manage promotional communications.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Intellectual Property & Privacy</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Website Content</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The OXAVYN website contains proprietary content, designs, graphics, software, branding, documentation, and other intellectual property.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>This Privacy Policy governs personal-data processing and does not grant any ownership rights in OXAVYN intellectual property.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Use of the website remains subject to the OXAVYN Terms & Conditions.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Changes to This Privacy Policy</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Policy Updates</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may update this Privacy Policy from time to time to reflect changes in:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Technology</li>
            <li>Services</li>
            <li>Data-processing practices</li>
            <li>Security practices</li>
            <li>Legal requirements</li>
            <li>Regulatory requirements</li>
            <li>Business operations</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>When changes are made, the revised Privacy Policy may be published on this page with an updated "Last Updated" date.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>We encourage visitors and users to periodically review this page.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Governing Law</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Applicable Law</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>This Privacy Policy shall be governed by the laws applicable in India, subject to any mandatory rights or protections that apply to you under applicable law.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Subject to applicable law, privacy-related disputes concerning OXAVYN may be subject to the jurisdiction of the appropriate courts in Jaipur, Rajasthan, India.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Contact OXAVYN</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Privacy Questions</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>If you have questions, concerns, requests, or complaints regarding this Privacy Policy or the handling of personal information, you may use the relevant Contact or Enquiry functionality available on the OXAVYN website.</p>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>OXAVYN</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Website: <a href="https://oxavyn.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>https://oxavyn.com</a></p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)', fontWeight: 'bold' }}>© 2026 OXAVYN. All Rights Reserved.</p>

        </div>
      </div>
    </main>
  );
}
