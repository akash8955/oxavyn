"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { jobsData, jobCategories } from '../data/jobsData';
import './JobOpenings.css';

const JobOpenings = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredJobs = jobsData.filter((job) => 
    activeCategory === 'All' ? true : job.category === activeCategory
  );

  return (
    <section className="jobs-section">
      <div className="jobs-container">
        <div className="jobs-header animate-fade-in">
          <p className="jobs-top-line">Bring your ideas to life. Build technology that creates real impact.</p>
          <h2 className="jobs-title">
            Join Oxavyn, <span className="highlight-text">We're Hiring!</span>
          </h2>
          <p className="jobs-subtitle">
            Be part of a passionate team building intelligent digital products, scalable software, and next-generation technology solutions for businesses worldwide.
          </p>
        </div>

        <div className="jobs-filters-wrapper animate-fade-in delay-1">
          <div className="jobs-filters">
            {jobCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="jobs-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div className={`job-card animate-fade-in delay-${(index % 3) + 1}`} key={job.id}>
                <div className="job-card-content">
                  <h3 className="job-card-title">{job.title}</h3>
                  <div className="job-card-meta">
                    <span className="meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      {job.experience}
                    </span>
                    <span className="meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {job.location}
                    </span>
                  </div>
                  {job.technology && (
                    <p className="job-card-tech">
                      <span className="tech-label">Technology:</span> {job.technology}
                    </p>
                  )}
                  <p className="job-card-desc">{job.description}</p>
                </div>
                <div className="job-card-action">
                  <Link href={`/careers/${job.id}`} className="btn-view-job" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>View Job</Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-jobs-message">
              No openings available in this category right now.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
