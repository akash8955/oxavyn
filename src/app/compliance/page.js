import React from 'react';
import DynamicBackground from '@/components/DynamicBackground';

export const metadata = {
  title: 'Compliance | Oxavyn',
  description: 'Compliance policies and standards for Oxavyn.',
};
export const revalidate = 600;

export default function Compliance() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <DynamicBackground page="LEGAL" section="Compliance" title="Banner Image" className="parallax-banner vh-80">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))', zIndex: 1 }}></div>
        <div className="banner-content animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ color: 'white', WebkitTextFillColor: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>Compliance & Standards</h1>
          <p style={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Our commitment to legal, ethical, and industry-standard practices.</p>
        </div>
      </DynamicBackground>

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
