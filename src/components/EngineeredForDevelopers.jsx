import React from 'react';
import Link from 'next/link';
import './EngineeredForDevelopers.css';

const EngineeredForDevelopers = () => {
  return (
    <section className="dev-section">
      <div className="dev-container">
        <div className="dev-header">
          <h2 className="dev-title">
            Engineered for
            <span className="dev-highlight"> Developers</span>
          </h2>
          <p className="dev-subtitle">
            Our advanced integrations consolidate business operations, making them smoother and more efficient.
          </p>
        </div>

        <div className="dev-grid">
          {/* Column 1 */}
          <div className="dev-card">
            <div className="dev-card-header">
              <div className="dev-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="dev-card-title">Technology</h3>
            </div>
            <p className="dev-card-desc">
              Build scalable digital products with modern technologies and robust architectures.            </p>
            <Link href="/services/custom-software" className="dev-card-link">Access documentation &rarr;</Link>
          </div>

          {/* Column 2 */}
          <div className="dev-card">
            <div className="dev-card-header">
              <div className="dev-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="dev-card-title">AI Solutions</h3>
            </div>
            <p className="dev-card-desc">
              Bring intelligent automation, analytics, and AI-powered experiences into your business.            </p>
            <Link href="/services/machine-learning" className="dev-card-link">Access documentation &rarr;</Link>
          </div>

          {/* Column 3 */}
          <div className="dev-card">
            <div className="dev-card-header">
              <div className="dev-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="dev-card-title">Cloud & APIs</h3>
            </div>
            <p className="dev-card-desc">
              Reliable cloud infrastructure and flexible APIs built for fast, secure, and scalable applications.            </p>
            <Link href="/services/third-party-integrations" className="dev-card-link">Access documentation &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeredForDevelopers;
