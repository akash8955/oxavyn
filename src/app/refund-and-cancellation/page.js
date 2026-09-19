import React from 'react';

export const metadata = {
  title: 'Refund & Cancellation Policy | Oxavyn',
  description: 'Refund and cancellation policy for Oxavyn services.',
};

export default function RefundAndCancellation() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <section className="parallax-banner vh-80" style={{ backgroundImage: 'url(/images/Banner_4.png)' }}>
        <div className="banner-content animate-fade-in">
          <h1>Refund & Cancellation</h1>
          <p>Clear, transparent policies for project cancellations and financial refunds.</p>
        </div>
      </section>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="glass-panel animate-fade-in delay-1" style={{ padding: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>1. Cancellation Policy</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            Clients may request cancellation of their ongoing projects or subscriptions in accordance with the terms laid out in their specific service agreements. Requests must be submitted in writing. Depending on the stage of development or service delivery, cancellation fees may apply to cover work already completed.
          </p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>2. Refund Policy</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            Refunds are evaluated on a case-by-case basis. Initial deposits or setup fees are generally non-refundable as they cover administrative and initial planning efforts. If a service is canceled before any significant milestones are reached, a partial refund may be issued at Oxavyn's discretion, less any incurred costs.
          </p>
          
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>3. Processing Time</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            Approved refunds will be processed and credited back to the original method of payment within 7-14 business days, depending on your financial institution.
          </p>
        </div>
      </div>
    </main>
  );
}
