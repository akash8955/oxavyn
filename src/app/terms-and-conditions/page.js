import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | Oxavyn',
  description: 'Terms and Conditions for Oxavyn.',
};

export default function TermsAndConditions() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <section className="parallax-banner vh-80" style={{ backgroundImage: 'url(/images/Banner_1.png)' }}>
        <div className="banner-content animate-fade-in">
          <h1>Terms & Conditions</h1>
          <p>Please read these terms and conditions carefully before using our service.</p>
        </div>
      </section>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="glass-panel animate-fade-in delay-1" style={{ padding: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>1. Introduction</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>
            Welcome to Oxavyn. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Oxavyn if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
          </p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>2. License</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            Unless otherwise stated, Oxavyn and/or its licensors own the intellectual property rights for all material on Oxavyn. All intellectual property rights are reserved. You may access this from Oxavyn for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          
          {/* Add more standard terms here later */}
        </div>
      </div>
    </main>
  );
}
