import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Oxavyn',
  description: 'Privacy Policy for Oxavyn.',
};

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <section className="parallax-banner vh-80" style={{ backgroundImage: 'url(/images/Banner_2.png)' }}>
        <div className="banner-content animate-fade-in">
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. Discover how we handle your data securely.</p>
        </div>
      </section>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="glass-panel animate-fade-in delay-1" style={{ padding: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>1. Information We Collect</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: 'var(--foreground)' }}>
            At Oxavyn, accessible from oxavyn.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Oxavyn and how we use it.
          </p>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>2. How We Use Your Information</h2>
          <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            We use the information we collect in various ways, including to:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--foreground)' }}>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
