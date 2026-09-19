import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'FAQ | Oxavyn',
  description: 'Explore our most common questions about our services, technology, development process, AI solutions, automation, pricing, and ongoing support.',
};

export default function FaqPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <section className="parallax-banner vh-90" style={{ backgroundImage: 'url(/images/Banner_4.png)' }}>
        <div className="banner-content animate-fade-in">
          <span style={{ display: 'block', marginBottom: '1rem', color: '#a29bfe', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>FAQ</span>
          <h1>
            Have questions? <br/>
            <span style={{ color: '#60a5fa' }}>We have answers.</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Explore our most common questions about our services, technology, development process, AI solutions, automation, pricing, and ongoing support.
          </p>
        </div>
      </section>
      <FaqAccordion />
    </main>
  );
}
