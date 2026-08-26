"use client";

import React, { useState } from 'react';
import './JobOpenings.css';

const jobCategories = [
  'All',
  'Software Engineering',
  'AI & Machine Learning',
  'Data & Analytics',
  'Cloud & DevOps',
  'UI/UX Design',
  'Quality Assurance'
];

const jobsData = [
  {
    id: 1,
    title: 'Full Stack Developer',
    category: 'Software Engineering',
    experience: '0–2 Years',
    location: 'Jaipur / Remote',
    technology: 'React.js, Next.js, Node.js, Express.js, MongoDB',
    description: 'Build scalable and high-performance web applications across the complete development lifecycle.'
  },
  {
    id: 2,
    title: 'Frontend Developer – React / Next.js',
    category: 'Software Engineering',
    experience: '0–2 Years',
    location: 'Jaipur / Remote',
    description: 'Create elegant, responsive, and high-performance digital experiences using modern frontend technologies.'
  },
  {
    id: 3,
    title: 'Backend Developer – Node.js',
    category: 'Software Engineering',
    experience: '1–3 Years',
    location: 'Jaipur / Remote',
    description: 'Design robust APIs, backend services, database architectures, and scalable application infrastructure.'
  },
  {
    id: 4,
    title: 'AI / Machine Learning Engineer',
    category: 'AI & Machine Learning',
    experience: '0–3 Years',
    location: 'Jaipur / Remote',
    description: 'Develop intelligent solutions using machine learning, generative AI, NLP, computer vision, and modern AI APIs.'
  },
  {
    id: 5,
    title: 'Data Scientist',
    category: 'Data & Analytics',
    experience: '0–3 Years',
    location: 'Jaipur / Remote',
    description: 'Transform complex datasets into meaningful insights and predictive solutions that drive smarter business decisions.'
  },
  {
    id: 6,
    title: 'Data Analyst',
    category: 'Data & Analytics',
    experience: '0–2 Years',
    location: 'Jaipur / Remote',
    description: 'Analyze business data, create dashboards, identify trends, and turn data into actionable insights.'
  },
  {
    id: 7,
    title: 'Cloud & DevOps Engineer',
    category: 'Cloud & DevOps',
    experience: '1–3 Years',
    location: 'Jaipur / Remote',
    description: 'Build reliable cloud infrastructure, automate deployments, and improve the scalability and security of our applications.'
  },
  {
    id: 8,
    title: 'UI/UX Designer',
    category: 'UI/UX Design',
    experience: '0–2 Years',
    location: 'Jaipur / Remote',
    description: 'Design intuitive, visually refined, and user-centric experiences for modern digital products.'
  },
  {
    id: 9,
    title: 'QA / Software Test Engineer',
    category: 'Quality Assurance',
    experience: '0–2 Years',
    location: 'Jaipur / Remote',
    description: 'Ensure every product we build is reliable, secure, performant, and ready for real-world users.'
  },
  {
    id: 10,
    title: 'Software Developer Intern',
    category: 'Software Engineering',
    experience: 'Internship / Fresher',
    location: 'Jaipur / Remote',
    description: 'Learn, build, experiment, and work alongside experienced developers on real-world technology projects.'
  }
];

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
                  <button className="btn-view-job">View Job</button>
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
