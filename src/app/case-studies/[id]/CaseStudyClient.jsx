"use client";
import React from 'react';
import Link from 'next/link';
import './CaseStudy.css';

export default function CaseStudyClient({ study }) {
  return (
    <div className="case-study-page">
      <div className="case-studies-ambient-bg"></div>
      
      {/* Dynamic Banner using the case study image */}
      <section 
        className="cs-article-banner" 
        style={{ backgroundImage: `url(${study.image})` }}
      >
        <div className="cs-article-banner-content animate-fade-in">
          <div className="cs-article-meta">
            <span className="cs-article-client">{study.client}</span>
            <span className="cs-article-industry">{study.industry}</span>
          </div>
          <h1>{study.title}</h1>
        </div>
      </section>

      <main className="cs-article-container">
        <article className="cs-article-content glass-panel animate-fade-in delay-1">
          <Link href="/case-studies" className="back-to-cs">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Case Studies
          </Link>
          
          <div className="cs-article-metrics">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="cs-article-metric">
                <span className="cs-article-metric-value">{metric.value}</span>
                <span className="cs-article-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="cs-article-body">
            <p className="cs-article-intro">{study.summary}</p>
            
            <p>Our strategic approach involved a complete end-to-end evaluation of existing infrastructure and workflows. By identifying key bottlenecks and implementing our proprietary automation technologies, we were able to deliver unprecedented results.</p>
            
            <p>The solution was deployed seamlessly with zero downtime, ensuring that day-to-day operations continued without interruption while the new capabilities were brought online. This transformation is a testament to the power of integrating high-end modern tech with deep industry expertise.</p>
          </div>
        </article>
      </main>
    </div>
  );
}
