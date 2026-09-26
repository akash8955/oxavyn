import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import DynamicBackground from '@/components/DynamicBackground';

export const metadata = {
  title: 'FAQ | Oxavyn',
  description: 'Explore our most common questions about our services, technology, development process, AI solutions, automation, pricing, and ongoing support.',
};

export default function FaqPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Hero Section (Parallax Banner Image Only) */}
      <DynamicBackground page="FAQ" section="FAQ Banner" title="Banner Image" className="parallax-banner vh-90" />
      
      {/* Hero Text Content (Below Banner) */}
      <section style={{ padding: '4rem 2rem', background: '#f8fafc', textAlign: 'center' }}>
        <div className="banner-content animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', color: '#111827' }}>
          <span style={{ display: 'block', marginBottom: '1rem', color: '#a29bfe', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>FAQ</span>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
            Have questions? <br/>
            <span style={{ color: '#60a5fa' }}>We have answers.</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.6', fontSize: '1.2rem', color: '#4b5563' }}>
            Explore our most common questions about our services, technology, development process, AI solutions, automation, pricing, and ongoing support.
          </p>
        </div>
      </section>
      <FaqAccordion />
    </main>
  );
}
