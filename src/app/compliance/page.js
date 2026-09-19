import React from 'react';

export const metadata = {
  title: 'Compliance | Oxavyn',
  description: 'Compliance policies and standards for Oxavyn.',
};

export default function Compliance() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <section className="parallax-banner vh-80" style={{ backgroundImage: 'url(/images/Banner_3.png)' }}>
        <div className="banner-content animate-fade-in">
          <h1>Compliance & Standards</h1>
          <p>Our commitment to legal, ethical, and industry-standard practices.</p>
        </div>
      </section>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="glass-panel animate-fade-in delay-1" style={{ padding: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>1. Ethical Operations</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            Oxavyn strictly adheres to all relevant industry guidelines and statutory regulations regarding digital data management, client privacy, and software development practices. We maintain rigorous standards for compliance at every tier of our operations.
          </p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>2. Data Security & GDPR</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            Our organization complies with international data privacy regulations, including GDPR, ensuring that all client and user data is processed lawfully, transparently, and securely. Regular audits are conducted to uphold these high standards.
          </p>
        </div>
      </div>
    </main>
  );
}
