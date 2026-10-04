import React from 'react';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return {
    title: \`Web, App & AI Development Company in \${city} | OXAVYN\`,
    description: \`OXAVYN provides web development, mobile app development, AI, custom software and digital solutions for businesses in \${city}.\`,
    alternates: {
      canonical: \`https://oxavyn.com/locations/\${params.city.toLowerCase()}\`
    },
    openGraph: {
      title: \`Web, App & AI Development Company in \${city} | OXAVYN\`,
      description: \`OXAVYN provides web development, mobile app development, AI, custom software and digital solutions for businesses in \${city}.\`,
      url: \`https://oxavyn.com/locations/\${params.city.toLowerCase()}\`,
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
      title: \`Web, App & AI Development Company in \${city} | OXAVYN\`,
      description: \`OXAVYN provides web development, mobile app development, AI, custom software and digital solutions for businesses in \${city}.\`,
      images: ["/images/oxavyn-digital-transformation.jpg"],
    },
  };
}

export function generateStaticParams() {
  return [
    { city: 'jaipur' },
    { city: 'noida' },
    { city: 'gurugram' },
    { city: 'alwar' },
    { city: 'rewari' },
  ];
}

export default function LocationPage({ params }) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);

  return (
    <main className="location-page" style={{ paddingTop: '100px', minHeight: '80vh', background: '#f8fafc' }}>
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#0f172a' }}>
          Technology Solutions for Businesses in {city}.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          OXAVYN is your trusted partner for digital transformation in {city}. We specialize in web and mobile app development, artificial intelligence, and custom software solutions designed to scale your operations locally and globally.
        </p>
        
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/services/web-development" className="btn-primary">
            Web Development in {city}
          </Link>
          <Link href="/services/mobile-app-development" className="btn-outline">
            App Development in {city}
          </Link>
          <Link href="/services/ai-development" className="btn-outline">
            AI Solutions in {city}
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Custom Software for {city} Enterprises</h3>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>We build scalable software specifically designed for the unique operational requirements of businesses operating in {city} and the surrounding regions.</p>
          </div>
          <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Local Support, Global Standards</h3>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>Working with OXAVYN gives your {city} business access to global-standard engineering, backed by accessible and dedicated support.</p>
          </div>
          <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>Digital Transformation Experts</h3>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>From CRM implementations to AI-powered workflow automation, we help companies in {city} modernize their entire digital footprint.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', textAlign: 'center', background: '#0f172a', color: '#fff' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to build something great in {city}?</h2>
        <p style={{ fontSize: '1.2rem', opacity: '0.8', marginBottom: '2rem' }}>Let's discuss how our technology solutions can help your business grow.</p>
        <Link href="/contact" className="btn-primary" style={{ background: '#ef4444', color: '#fff', border: 'none' }}>
          Contact Our {city} Team
        </Link>
      </section>
    </main>
  );
}
