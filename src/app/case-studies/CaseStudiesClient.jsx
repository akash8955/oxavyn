import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '../../data/caseStudiesData';
import './CaseStudies.css';

export default function CaseStudiesClient() {
  return (
    <div className="case-studies-page">
      <div className="case-studies-ambient-bg"></div>

      {/* Banner Section */}
      <section className="cs-banner" style={{ backgroundImage: 'url(/images/case-studies/case_studies_banner_1789408850530.jpg)' }}>
        <div className="cs-banner-content animate-fade-in">
          <h1>Proven Transformations</h1>
          <p>Explore how we engineer success for leading global enterprises through cutting-edge technology and strategic innovation.</p>
        </div>
      </section>

      <div className="cs-container">
        <div className="cs-list">
          {caseStudies.map((study, index) => (
            <article key={study.id} className="cs-row glass-panel animate-fade-in delay-1">
              <div className="cs-image-wrapper">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={800}
                  height={500}
                  className="cs-image"
                />
              </div>
              <div className="cs-content">
                <div className="cs-meta">
                  <span className="cs-client">{study.client}</span>
                  <span className="cs-industry">{study.industry}</span>
                </div>
                <h2>{study.title}</h2>
                <p>{study.summary}</p>

                <div className="cs-metrics">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="cs-metric">
                      <span className="cs-metric-value">{metric.value}</span>
                      <span className="cs-metric-label">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/case-studies/${study.id}`} className="btn-primary">View Full Case Study</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
