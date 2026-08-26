import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'FAQ | Oxavyn',
  description: 'Explore our most common questions about our services, technology, development process, AI solutions, automation, pricing, and ongoing support.',
};

export default function FaqPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', paddingTop: '140px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem', textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ 
          display: 'inline-block', 
          marginBottom: '1rem', 
          background: '#ef4444', 
          color: '#fff', 
          padding: '0.25rem 0.75rem', 
          borderRadius: '4px', 
          fontWeight: 'bold', 
          fontSize: '0.875rem', 
          letterSpacing: '1px' 
        }}>
          FAQ
        </span>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
          fontWeight: '800', 
          color: '#0f172a', 
          marginBottom: '1.5rem', 
          lineHeight: '1.2' 
        }}>
          Have questions? <br/><span style={{ color: '#3b82f6' }}>We have answers.</span>
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#64748b', 
          lineHeight: '1.6', 
          maxWidth: '700px', 
          margin: '0 auto' 
        }}>
          Explore our most common questions about our services, technology, development process, AI solutions, automation, pricing, and ongoing support.
        </p>
      </div>
      <FaqAccordion />
    </main>
  );
}
