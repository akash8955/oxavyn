import React from 'react';
import './AIPoweredInnovations.css';

const AIPoweredInnovations = () => {
  return (
    <section className="ai-innovations-section">
      <div className="ai-container">
        <h2 className="ai-main-title">
          <span className="ai-highlight">AI</span> Powered Innovations
        </h2>
        
        <div className="ai-cards-grid">
          {/* Card 1 */}
          <div className="ai-card">
            <div className="ai-card-content">
              <h3 className="ai-card-title">Oxavyn Intelligence</h3>
              <p className="ai-card-text">
                Our AI-powered solutions turn complex business data into clear, actionable insights. Automate repetitive processes, streamline daily operations, and empower your team with intelligent tools that improve efficiency, accuracy, and customer experiences.
              </p>
              <a href="#" className="ai-card-link">Know more &rarr;</a>
            </div>
            <div className="ai-card-image">
              <img src="/images/aipower/ai1.png" alt="Oxavyn Intelligence" />
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="ai-card">
            <div className="ai-card-content">
              <h3 className="ai-card-title">Growth Analytics</h3>
              <p className="ai-card-text">
                Transform your business data into meaningful insights and smarter strategies. Oxavyn helps you understand customer behavior, identify emerging trends, track performance, and uncover new opportunities to make confident decisions and accelerate sustainable business growth.
              </p>
              <a href="#" className="ai-card-link">Know more &rarr;</a>
            </div>
            <div className="ai-card-image">
              <img src="/images/aipower/ai2.png" alt="Growth Analytics" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPoweredInnovations;
