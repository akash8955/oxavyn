export const metadata = {
  title: "OXAVYN FAQ | Web, App, AI & Software Development",
  description: "Find answers to common questions about OXAVYN web development, mobile apps, AI solutions, custom software, automation, projects and student programs.",
  
  alternates: {
    canonical: "https://oxavyn.com/faq"
  },
  openGraph: {
    title: "OXAVYN FAQ | Web, App, AI & Software Development",
    description: "Find answers to common questions about OXAVYN web development, mobile apps, AI solutions, custom software, automation, projects and student programs.",
    url: "https://oxavyn.com/faq",
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
    title: "OXAVYN FAQ | Web, App, AI & Software Development",
    description: "Find answers to common questions about OXAVYN web development, mobile apps, AI solutions, custom software, automation, projects and student programs.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import React from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import DynamicBackground from '@/components/DynamicBackground';



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
