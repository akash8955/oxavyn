import React from 'react';
import './TechnologySolutions.css';

const solutions = [
  {
    id: 1,
    title: "Digital Transformation",
    description: "Turn ideas and business challenges into powerful digital experiences. We modernize workflows, customer journeys, and business processes with scalable technology built around your goals.",
    image: "/images/services/sr1.png"
  },
  {
    id: 2,
    title: "Web & Application Development",
    description: "Build fast, secure, and engaging digital products that are designed to perform. From business websites to complex web platforms and mobile applications, we create solutions that are reliable, scalable, and user-focused.",
    image: "/images/services/sr2.png"
  },
  {
    id: 3,
    title: "AI & Intelligent Automation",
    description: "Make your business smarter with AI-powered solutions and intelligent automation. We help automate repetitive processes, uncover valuable insights, and create faster, more efficient workflows.",
    image: "/images/services/sr3.png"
  },
  {
    id: 4,
    title: "Cloud & Scalable Infrastructure",
    description: "Build technology that grows with your business. Our cloud solutions help you deploy, manage, and scale applications with improved reliability, performance, security, and operational efficiency.",
    image: "/images/services/sr4.png"
  },
  {
    id: 5,
    title: "Enterprise Technology Solutions",
    description: "Solve complex business challenges with technology designed for scale. From custom enterprise platforms to integrations and workflow systems, we create secure solutions that connect teams, data, and operations.",
    image: "/images/services/sr5.png"
  },
  {
    id: 6,
    title: "Integration & Digital Ecosystems",
    description: "Connect the tools your business already uses and create one seamless digital ecosystem. We integrate APIs, CRMs, ERPs, payment platforms, third-party services, and custom applications to keep your business connected.",
    image: "/images/services/sr6.png"
  }
];

export default function TechnologySolutions() {
  return (
    <section className="tech-solutions-section">
      <div className="ts-container">
        <div className="ts-header">
          <h2 className="ts-main-title">Technology Solutions Built for Business Growth</h2>
          <p className="ts-sub-title">
            From strategy to execution, Oxavyn delivers scalable digital solutions that simplify operations, enhance customer experiences, and help businesses grow with confidence.
          </p>
        </div>

        <div className="ts-features-list">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              className={`ts-feature-row ${index % 2 !== 0 ? 'ts-row-reverse' : ''}`}
            >
              <div className="ts-feature-content">
                <h3 className="ts-feature-title">{solution.title}</h3>
                <p className="ts-feature-desc">{solution.description}</p>
              </div>
              <div className="ts-feature-image-wrapper">
                {/* Fallback styling in case image doesn't load or background grid is needed */}
                <div className="ts-image-bg-grid"></div>
                <img src={solution.image} alt={solution.title} className="ts-feature-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
