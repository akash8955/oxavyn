export const metadata = {
  title: "Compliance & Data Protection | OXAVYN",
  description: "Learn about OXAVYN's approach to privacy, data protection, security, responsible AI, transparency and customer data handling.",
  
  alternates: {
    canonical: "https://oxavyn.com/compliance"
  },
  openGraph: {
    title: "Compliance & Data Protection | OXAVYN",
    description: "Learn about OXAVYN's approach to privacy, data protection, security, responsible AI, transparency and customer data handling.",
    url: "https://oxavyn.com/compliance",
    siteName: "Oxavyn",
    images: [
      {
        url: "/images/oxavyn-digital-transformation.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance & Data Protection | OXAVYN",
    description: "Learn about OXAVYN's approach to privacy, data protection, security, responsible AI, transparency and customer data handling.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import React from 'react';
import DynamicBackground from '@/components/DynamicBackground';


export const revalidate = 600;

export default function Compliance() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <DynamicBackground page="LEGAL" section="Compliance" title="Banner Image" className="parallax-banner vh-80">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))', zIndex: 1 }}></div>
        <div className="banner-content animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', WebkitTextFillColor: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>Compliance</h1>
          <p style={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>We prioritize security, transparency, and trust in all our operations.</p>
        </div>
      </DynamicBackground>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="glass-panel animate-fade-in delay-1" style={{ padding: '3rem' }}>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Our Commitment to You</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>At OXAVYN, we believe technology should be built with privacy, security, transparency, and customer trust at its foundation.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>When you use OXAVYN services, submit information through oxavyn.com, or provide data to us as part of a project or software service, we aim to handle that information responsibly and transparently.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>We follow applicable data-protection and privacy requirements and continuously work to improve our security, privacy, and compliance practices.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Our approach is designed to give customers greater visibility and control over their information.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Privacy by Design</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Your Privacy Comes First</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where reasonably applicable, OXAVYN aims to consider privacy and security during the design, development, implementation, and operation of its technology solutions.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>We seek to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Collect only information reasonably required for the intended purpose.</li>
            <li>Explain why information is being collected.</li>
            <li>Use information only for appropriate and disclosed purposes.</li>
            <li>Avoid unnecessary access to customer information.</li>
            <li>Apply reasonable security measures.</li>
            <li>Limit access to authorized personnel and service providers.</li>
            <li>Retain information only for as long as reasonably necessary.</li>
            <li>Provide appropriate mechanisms for customers to exercise their privacy rights.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>We do not believe that customers should have to provide unnecessary personal information simply to explore our services.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Transparency</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>We Explain How Your Information Is Used</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>We aim to make our data practices understandable.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>When information is collected through OXAVYN websites, applications, forms, or services, we seek to explain:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>What information is being collected.</li>
            <li>Why it is being collected.</li>
            <li>How it may be used.</li>
            <li>Whether it may be shared with service providers.</li>
            <li>How long it may be retained where appropriate.</li>
            <li>What choices and rights may be available to you.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>We encourage customers to contact us through the appropriate website functionality if they have questions about how their information is handled.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Customer Control</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>You Maintain Control Over Your Personal Information</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where applicable under law, customers may have rights relating to their personal information.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>These may include the ability to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Request access to personal information.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion where legally applicable.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Request information about processing activities.</li>
            <li>Raise privacy concerns or complaints.</li>
            <li>Exercise other rights provided by applicable law.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>We aim to make the exercise of applicable privacy rights straightforward and transparent.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Certain legal, security, contractual, or operational requirements may affect the ability to fulfill a particular request.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Minimization</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>We Avoid Unnecessary Data Collection</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN aims to collect only information that is reasonably necessary for the relevant purpose.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>For example, an enquiry form should generally request information necessary to understand and respond to the enquiry rather than asking for unrelated personal information.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>For business and software projects, the information required may depend on the nature of the service.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Customers may ask us to clarify why particular information is required.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Customer Data</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Your Business Data Remains Important to You</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>When customers provide business information, customer records, employee information, operational information, documents, or other data while using an OXAVYN service, we recognize that such information may belong to or be controlled by the customer.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Unless otherwise agreed, OXAVYN does not claim ownership of customer-provided business data merely because the data is processed through an OXAVYN service.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The specific ownership and processing arrangements may be further defined in the applicable agreement.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Processing</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Processing Data on Your Behalf</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where OXAVYN processes personal information on behalf of a business customer, OXAVYN aims to process that information only as necessary to provide the agreed services and according to applicable contractual instructions and legal requirements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where appropriate, customers may enter into additional data-processing terms with OXAVYN.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>These terms may address:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Categories of personal data.</li>
            <li>Categories of individuals.</li>
            <li>Processing purposes.</li>
            <li>Security measures.</li>
            <li>Authorized service providers.</li>
            <li>Data retention.</li>
            <li>Data deletion.</li>
            <li>Data access.</li>
            <li>Security incidents.</li>
            <li>Assistance with applicable privacy obligations.</li>
          </ul>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Security</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Protecting Your Information</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN takes reasonable technical and organizational measures designed to protect information against unauthorized access, accidental loss, misuse, alteration, disclosure, or destruction.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on the service, security measures may include:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Authentication controls.</li>
            <li>Authorization controls.</li>
            <li>Access restrictions.</li>
            <li>Encryption where appropriate.</li>
            <li>Secure development practices.</li>
            <li>Infrastructure security.</li>
            <li>Monitoring and logging.</li>
            <li>Backup procedures.</li>
            <li>Security updates.</li>
            <li>Vulnerability management.</li>
            <li>Controlled access to customer environments.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Security measures may vary according to the nature, sensitivity, and technical requirements of a particular service.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Restricted Access</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Access Is Limited to Those Who Need It</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN aims to follow the principle of least-privilege access where reasonably appropriate.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Personnel and service providers should receive access to customer information only where such access is reasonably required to perform their responsibilities.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Access may be controlled through authentication, authorization, technical restrictions, and other security measures.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Confidentiality</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Your Information Is Treated as Confidential</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN understands that customers may provide sensitive business and technical information during projects.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on the applicable agreement, confidential information may include:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Business strategies.</li>
            <li>Customer information.</li>
            <li>Source code.</li>
            <li>Product plans.</li>
            <li>Technical architecture.</li>
            <li>Financial information.</li>
            <li>Internal processes.</li>
            <li>Credentials.</li>
            <li>Security information.</li>
            <li>Trade secrets.</li>
            <li>Operational information.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN aims to protect confidential information and use it only for legitimate business or service purposes.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Additional confidentiality obligations may be established through a separate agreement.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Third-Party Service Providers</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Transparency Around Service Providers</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may rely on carefully selected third-party technology providers to operate and deliver its services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>These may include providers for:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Cloud infrastructure.</li>
            <li>Hosting.</li>
            <li>Databases.</li>
            <li>Content delivery.</li>
            <li>Media storage.</li>
            <li>Analytics.</li>
            <li>Authentication.</li>
            <li>Payment processing.</li>
            <li>Communication.</li>
            <li>Security.</li>
            <li>AI services.</li>
            <li>Software infrastructure.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where third-party processing is necessary, OXAVYN aims to use providers appropriate to the relevant service and to apply reasonable contractual or technical safeguards.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>No Unnecessary Sale of Customer Data</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Your Information Is Not Treated as a Product</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN does not intend to sell customers' personal information as a commercial product.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>We aim to use personal information primarily for legitimate purposes such as providing services, responding to requests, maintaining security, improving our products, meeting legal obligations, and operating our business.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where information must be shared with service providers, we aim to limit sharing to what is reasonably necessary for the relevant purpose.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>AI & Customer Data</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Responsible Use of AI</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may use artificial intelligence technologies in certain products and services.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>We aim to provide transparency regarding AI-powered functionality where it materially affects how information is processed.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Customer information should not be used for unrelated AI purposes merely because it is accessible to an OXAVYN service.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where third-party AI providers are used, processing may also be subject to the provider's applicable terms and privacy practices.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Customers should review the specific service agreement where AI processing forms an important part of the service.</p>

          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>AI Training & Customer Information</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}><strong>Customer Data and AI Training:</strong> Unless expressly agreed otherwise in a specific agreement, OXAVYN will not intentionally use confidential customer information or customer-provided business data to train a general-purpose AI model for unrelated third parties.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where a customer specifically agrees to a particular AI training, improvement, research, or analytics use case, the applicable agreement should clearly describe that use.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Customers may request clarification regarding whether a particular OXAVYN service uses customer data for AI model improvement.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Retention</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>We Do Not Keep Data Forever Without a Reason</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN aims to retain personal information and customer data only for as long as reasonably necessary for its intended purpose, contractual obligations, legal requirements, security needs, or legitimate business requirements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where information is no longer required and there is no legal or legitimate reason to retain it, OXAVYN may delete, anonymize, or securely dispose of it.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Specific retention periods may depend on the service and applicable agreement.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Deletion</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Customers Can Request Deletion</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where applicable under law and the relevant service agreement, customers may request deletion of personal information or customer data.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Before deletion, OXAVYN may need to verify the request and confirm that the requester has appropriate authority.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Certain information may need to be retained where required by law, necessary for security, required for accounting or legal purposes, or necessary to establish or defend legal claims.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Data Export & Portability</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Your Data Should Remain Accessible</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where technically feasible and included in the applicable service, OXAVYN aims to provide customers with reasonable methods to retrieve or export their customer data.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on the service, exported information may be provided in a commonly used or technically supported format.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Any specific export procedures, formats, timeframes, or charges should be stated in the applicable service agreement.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Security Incident Response</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>We Take Security Incidents Seriously</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>If OXAVYN becomes aware of a security incident involving customer information, we will take reasonable steps to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Investigate the incident.</li>
            <li>Assess the potential impact.</li>
            <li>Contain and remediate the issue.</li>
            <li>Take reasonable measures to prevent recurrence.</li>
            <li>Provide notifications where required by applicable law or agreement.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where appropriate, customers may receive information necessary to understand and respond to the incident.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Customer Responsibilities</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Security Is a Shared Responsibility</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>While OXAVYN takes reasonable measures to protect information, customers also have an important role in protecting their data.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Customers should:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Use strong passwords.</li>
            <li>Protect authentication credentials.</li>
            <li>Restrict administrator access.</li>
            <li>Avoid sharing passwords.</li>
            <li>Protect API keys.</li>
            <li>Maintain secure devices.</li>
            <li>Notify OXAVYN of suspected unauthorized access.</li>
            <li>Provide only information necessary for the relevant service.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>For enterprise systems, additional security responsibilities may be defined in the applicable agreement.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Compliance With Applicable Laws</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Our Compliance Approach</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN aims to comply with applicable privacy, data-protection, cybersecurity, technology, and electronic-transaction requirements relevant to the services it provides.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>For customers in India, this may include applicable requirements under India's digital personal-data protection framework and other relevant laws.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The Digital Personal Data Protection Act, 2023 establishes India's framework for processing digital personal data and provides rights and obligations relating to personal-data processing.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The Digital Personal Data Protection Rules, 2025 provide additional requirements concerning matters such as notices, consent, security safeguards, rights, and related data-processing practices.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Specific compliance obligations may vary according to the customer's industry, location, type of data, and service.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Customer Privacy Requests</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Making a Privacy Request</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>If you want to:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Access your information.</li>
            <li>Correct your information.</li>
            <li>Request deletion.</li>
            <li>Withdraw consent.</li>
            <li>Ask how your information is being processed.</li>
            <li>Raise a privacy concern.</li>
            <li>Ask about customer-data handling.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>you may use the relevant Contact or Enquiry functionality available on oxavyn.com.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>We aim to respond to valid privacy requests within the timeframe required by applicable law.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>We may request reasonable information to verify your identity and authority before processing a request.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Children's Data</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Protecting Younger Users</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN's general business and technology services are primarily designed for businesses, organizations, professionals, institutions, and other users capable of entering into applicable agreements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where OXAVYN provides services specifically intended for students or younger users, appropriate privacy and consent measures will be considered based on the nature of the service and applicable law.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>We do not knowingly seek to collect personal information from children where such collection is prohibited by applicable law.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>International Data Processing</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Where Your Data May Be Processed</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Some OXAVYN services may use cloud infrastructure or technology providers located outside India.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>As a result, information may be processed or stored in another country depending on the technology architecture and service requirements.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where applicable, OXAVYN aims to use appropriate contractual, technical, and organizational safeguards for such processing.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Compliance Transparency</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Clear Information for Customers</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN aims to provide customers with clear information about important aspects of its data-processing practices.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on the service, this may include information about:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Data collected.</li>
            <li>Purpose of processing.</li>
            <li>Data retention.</li>
            <li>Third-party processors.</li>
            <li>Security practices.</li>
            <li>Customer responsibilities.</li>
            <li>Data deletion.</li>
            <li>Data export.</li>
            <li>Privacy rights.</li>
            <li>AI processing.</li>
            <li>International processing.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>For enterprise customers, additional documentation may be available through applicable contractual arrangements.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Continuous Improvement</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>We Continue to Improve</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Privacy and security are ongoing responsibilities.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may periodically review and improve its:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Security controls.</li>
            <li>Privacy practices.</li>
            <li>Data-processing procedures.</li>
            <li>Access controls.</li>
            <li>Infrastructure.</li>
            <li>Software architecture.</li>
            <li>Vendor-management practices.</li>
            <li>Compliance processes.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>As technology and regulatory requirements evolve, our practices may also evolve.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Updates to This Compliance Policy</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Keeping This Information Current</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may update this Compliance Policy from time to time to reflect changes in our services, technology, security practices, privacy requirements, or applicable laws.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The latest version will be made available through the OXAVYN website.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The "Last Updated" date at the beginning of this page will indicate when the policy was most recently revised.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Contact OXAVYN</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Compliance & Privacy Questions</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>If you have a question about OXAVYN's privacy, security, data protection, or compliance practices, you can use the relevant Contact or Enquiry functionality available on:</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}><a href="https://oxavyn.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>https://oxavyn.com</a></p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>We encourage customers to raise privacy or security concerns so that they can be reviewed and addressed appropriately.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>OXAVYN Compliance Principles</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Privacy by Design:</strong> We consider privacy during the design and delivery of technology solutions.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Data Minimization:</strong> We aim to avoid unnecessary collection and processing of personal information.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Customer Control:</strong> We support applicable customer rights and reasonable control over personal information.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Transparency:</strong> We aim to clearly communicate how information is collected and used.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Security:</strong> We implement reasonable safeguards appropriate to the services we provide.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Confidentiality:</strong> We respect the confidentiality of customer business and technical information.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Responsible AI:</strong> We aim to use AI technologies responsibly and transparently.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Accountability:</strong> We take privacy and security concerns seriously and continuously work to improve our practices.</li>
          </ul>

          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)', fontWeight: 'bold' }}>© 2026 OXAVYN. All Rights Reserved.</p>

        </div>
      </div>
    </main>
  );
}
