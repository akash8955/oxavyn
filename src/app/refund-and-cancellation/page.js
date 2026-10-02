import React from 'react';
import DynamicBackground from '@/components/DynamicBackground';

export const metadata = {
  title: 'Refund & Cancellation Policy | Oxavyn',
  description: 'Refund and Cancellation Policy for Oxavyn services.',
};
export const revalidate = 600;

export default function RefundAndCancellation() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <DynamicBackground page="LEGAL" section="Refund & Cancellation Policy" title="Banner Image" className="parallax-banner vh-80">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))', zIndex: 1 }}></div>
        <div className="banner-content animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', WebkitTextFillColor: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>Refund & Cancellation</h1>
          <p style={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Transparent policies for your peace of mind.</p>
        </div>
      </DynamicBackground>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="glass-panel animate-fade-in delay-1" style={{ padding: '3rem' }}>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Our Refund & Cancellation Commitment</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>At OXAVYN, we aim to keep project pricing, payment milestones, cancellation terms, and refund conditions clear and transparent before development begins.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>This Refund & Cancellation Policy applies to eligible OXAVYN software and digital projects, including website development, mobile application development, custom software, SaaS development, AI solutions, automation, UI/UX design, and other technology projects, unless a separate written agreement states otherwise.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>By approving a project and making the initial project payment, the client acknowledges and accepts this Refund & Cancellation Policy.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Project Start & Initial Payment</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Project Starts After 25% Payment</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>A project will officially be considered started when OXAVYN receives the initial 25% project payment and the project requirements or scope have been approved.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The 25% initial payment allows OXAVYN to begin project planning, design, development, technical setup, resource allocation, architecture, and other project activities.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Once the project has started, cancellation and refund eligibility will be determined according to the timelines described below.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Project Payment Structure</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>25% Initial Payment</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The client is required to pay 25% of the total project cost before the project officially begins.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>This payment confirms the client's approval to start the project and allows OXAVYN to allocate resources and begin development activities.</p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Remaining 75% Payment</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The remaining 75% of the total project cost must be paid before the final deployment or production launch of the project.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>OXAVYN may complete development and provide the project for final review, but production deployment may be withheld until the outstanding project amount has been received.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Cancellation & Refund Policy</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Cancellation Within 3 Days</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>If the client cancels the project within 3 calendar days from the official project start date, the client will be eligible for a 100% refund of the amount paid, subject to any non-refundable third-party expenses already incurred on the client's behalf.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where no such third-party expenses have been incurred, the applicable refund will be processed for the amount paid to OXAVYN.</p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Cancellation Within 5 Days</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>If the client cancels the project after 3 days and within 5 calendar days from the project start date, the client will be eligible for a 50% refund of the amount paid to OXAVYN, subject to applicable deductions for approved or non-refundable third-party expenses.</p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Cancellation Within 7 Days</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>If the client cancels the project after 5 days and within 7 calendar days from the project start date, the client will be eligible for a 25% refund of the amount paid to OXAVYN, subject to applicable deductions for approved or non-refundable third-party expenses.</p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Cancellation After 7 Days</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>If the client cancels the project after 7 calendar days from the project start date but before 10 calendar days, the refund will be determined based on the work already completed, resources committed, and applicable project expenses.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Where the applicable project terms specify a fixed refund amount, that agreement will prevail.</p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Cancellation After 10 Days</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>After 10 calendar days from the official project start date, the project will be considered sufficiently progressed for the initial project payment to become non-refundable.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>No refund will normally be provided for project cancellation after this period because OXAVYN may have already committed development resources, personnel, planning, design, technical infrastructure, and development time to the project.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Cancellation Timeline</h2>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--foreground)', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', background: 'rgba(var(--accent-primary-rgb), 0.1)' }}>Cancellation Time</th>
                  <th style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', background: 'rgba(var(--accent-primary-rgb), 0.1)' }}>Refund</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>Within 3 days</td>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>100% of amount paid*</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>After 3 days and within 5 days</td>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>50% of amount paid*</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>After 5 days and within 7 days</td>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>25% of amount paid*</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>After 7 days and before 10 days</td>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>Based on work completed / applicable agreement</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>After 10 days</td>
                  <td style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>No refund</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>* Refunds may be adjusted for approved, non-refundable third-party expenses already incurred specifically for the client's project.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>How the Cancellation Period Is Calculated</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Project Start Date</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The cancellation period begins from the date on which:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>The client has paid the required 25% initial project amount; and</li>
            <li>OXAVYN has formally commenced the project.</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The project start date may be recorded in the applicable proposal, project confirmation, invoice, order, or project-management system.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Weekends and public holidays are included when calculating calendar days unless otherwise agreed in writing.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Domain & Deployment Charges</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Domain Charges</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Domain registration and renewal charges are payable separately by the client.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Domain charges are not included in the project development fee unless specifically stated in the project quotation or agreement.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The client may be responsible for:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Domain registration</li>
            <li>Domain renewal</li>
            <li>Domain transfer</li>
            <li>Domain privacy services</li>
            <li>Domain-related third-party charges</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Once a domain has been purchased or registered for the client, applicable third-party domain charges may be non-refundable according to the domain provider's policies.</p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Deployment & Hosting Charges</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Deployment, hosting, cloud infrastructure, server, database, CDN, storage, bandwidth, and other infrastructure charges are payable separately by the client unless expressly included in the project quotation.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The exact infrastructure requirements will depend on the project.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Third-party infrastructure charges are subject to the pricing and policies of the respective provider.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>One-Year Project Policy</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>One-Year Support & Project Policy</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Unless otherwise specified in the project agreement, the project will be covered by a one-year project policy beginning from the official deployment date.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>During this period, OXAVYN may provide support relating to the originally agreed project scope, subject to the applicable service agreement.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>This one-year policy does not automatically include unlimited new development or new features.</p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Included Within the One-Year Period</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Depending on the agreed project scope, support may include:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Correction of development-related bugs</li>
            <li>Technical assistance</li>
            <li>Minor fixes related to the delivered functionality</li>
            <li>Assistance with the deployed project</li>
            <li>Reasonable troubleshooting of the delivered system</li>
          </ul>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Not Automatically Included</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The one-year policy does not automatically include:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>New features</li>
            <li>Major redesigns</li>
            <li>New pages</li>
            <li>New applications</li>
            <li>New integrations</li>
            <li>Additional modules</li>
            <li>New automation workflows</li>
            <li>Major changes in business requirements</li>
            <li>Third-party service changes</li>
            <li>New hosting infrastructure</li>
            <li>Domain renewal</li>
            <li>Paid third-party APIs</li>
            <li>Cloud usage charges</li>
            <li>Major version migrations</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Such work may be quoted separately.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Third-Party Expenses</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Third-Party Services</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Some projects require third-party services such as:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Domain providers</li>
            <li>Hosting providers</li>
            <li>Cloud platforms</li>
            <li>Databases</li>
            <li>Cloudinary</li>
            <li>Payment gateways</li>
            <li>AI APIs</li>
            <li>SMS providers</li>
            <li>Email services</li>
            <li>Maps APIs</li>
            <li>Analytics platforms</li>
            <li>App-store accounts</li>
            <li>Premium plugins</li>
            <li>Software licenses</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>These charges are generally the responsibility of the client unless specifically included in the project agreement.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Third-party fees are subject to the provider's own pricing, refund, cancellation, and renewal policies.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Refund Processing</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>How Refunds Are Processed</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where a refund is approved under this policy, OXAVYN will initiate the refund through the applicable payment method or another mutually agreed payment method.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Refund processing time may depend on:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Payment provider</li>
            <li>Bank</li>
            <li>Payment gateway</li>
            <li>Transaction method</li>
            <li>Verification requirements</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Third-party processing times are outside OXAVYN's direct control.</p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Refund Calculation</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Unless otherwise agreed, the refund percentage applies to the amount actually paid to OXAVYN for the project.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Approved non-refundable third-party expenses incurred specifically for the project may be deducted where applicable.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Client Cancellation Request</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>How to Request Cancellation</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>A client wishing to cancel a project should submit a cancellation request through the appropriate Contact or Enquiry functionality available on oxavyn.com.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The cancellation request should include sufficient information to identify the relevant project.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The applicable cancellation date will generally be the date on which OXAVYN receives the cancellation request.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>OXAVYN Project Cancellation</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Cancellation by OXAVYN</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may suspend or terminate a project where reasonably necessary because of:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Non-payment</li>
            <li>Repeated failure to provide required information</li>
            <li>Misuse of services</li>
            <li>Illegal activity</li>
            <li>Material breach of the applicable agreement</li>
            <li>Security concerns</li>
            <li>Extended inactivity</li>
            <li>Circumstances beyond reasonable control</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Where appropriate, OXAVYN will communicate the reason for cancellation or suspension.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Any refund applicable to an OXAVYN-initiated cancellation will be determined according to the applicable project agreement and applicable law.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Client Delays</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Delays Caused by the Client</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Project timelines may be affected if the client does not provide required:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Content</li>
            <li>Approvals</li>
            <li>Feedback</li>
            <li>Credentials</li>
            <li>Access</li>
            <li>Business information</li>
            <li>Technical information</li>
            <li>Third-party accounts</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>A client-caused delay does not automatically restart or extend the cancellation period.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Scope Changes & Additional Work</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Changes After Project Start</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>If the client requests substantial changes after development has started, OXAVYN may provide a revised estimate or change request.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Additional work may include:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>New functionality</li>
            <li>New pages</li>
            <li>New modules</li>
            <li>Additional integrations</li>
            <li>New platforms</li>
            <li>Major UI/UX changes</li>
            <li>Additional automation</li>
            <li>Additional development</li>
          </ul>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Approved additional work may be charged separately.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Final Payment & Deployment</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Payment Before Deployment</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The remaining 75% project balance must be paid before production deployment, unless a different payment schedule has been agreed in writing.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>Once the agreed project has been completed and approved for deployment, OXAVYN may require settlement of all outstanding amounts before making the project available in the production environment.</p>
          
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Deployment</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>Deployment may include publishing the completed software to the client's hosting or production environment.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The client is responsible for applicable domain, hosting, cloud, infrastructure, app-store, and third-party service charges unless expressly included in the project agreement.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Policy Updates</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Changes to This Policy</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>OXAVYN may update this Refund & Cancellation Policy from time to time.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>The latest version will be published on this page with an updated "Last Updated" date.</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The policy applicable to a particular project may also be governed by the specific terms accepted by the client at the time the project was initiated.</p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', marginTop: '2rem' }}>Contact OXAVYN</h2>
          <h3 style={{ marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.25rem' }}>Cancellation & Refund Requests</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>For cancellation, refund, or project-related requests, users may use the relevant Contact or Enquiry functionality available on:</p>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}><a href="https://oxavyn.com" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>https://oxavyn.com</a></p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)', fontWeight: 'bold' }}>© 2026 OXAVYN. All Rights Reserved.</p>

        </div>
      </div>
    </main>
  );
}
