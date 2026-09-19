"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { jobsData } from '../../../data/jobsData';
import './JobApplication.css';

export default function JobApplicationClient({ jobId }) {
  const [job, setJob] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const foundJob = jobsData.find((j) => j.id.toString() === jobId);
    setJob(foundJob);
  }, [jobId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted for job:', job.title);
    setIsSubmitted(true);
  };

  if (!job) {
    return (
      <div className="job-app-page">
        <div className="job-app-ambient-bg"></div>
        <div className="job-app-container not-found">
          <h2>Job Not Found</h2>
          <Link href="/careers" className="btn-primary">Back to Careers</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="job-app-page">
      <div className="job-app-ambient-bg"></div>
      
      <div className="job-app-container">
        <Link href="/careers" className="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Careers
        </Link>
        
        <div className="job-header glass-panel animate-fade-in">
          <h1>{job.title}</h1>
          <div className="job-meta">
            <span className="meta-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              {job.experience}
            </span>
            <span className="meta-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {job.location}
            </span>
            <span className="meta-item">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
               {job.category}
            </span>
          </div>
          <p className="job-desc">{job.detailedDescription || job.description}</p>
          
          {job.responsibilities && (
            <div className="job-details-section">
              <h3>Responsibilities</h3>
              <ul className="job-details-list">
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          )}

          {job.requirements && (
            <div className="job-details-section">
              <h3>Requirements</h3>
              <ul className="job-details-list">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {job.technology && (
            <p className="job-tech"><strong>Technologies:</strong> {job.technology}</p>
          )}
        </div>

        {isSubmitted ? (
          <div className="success-message glass-panel animate-fade-in delay-1">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <h2>Application Submitted Successfully!</h2>
            <p>Thank you for applying for the <strong>{job.title}</strong> position. Our team will review your application and get back to you shortly.</p>
            <Link href="/careers" className="btn-primary">Browse More Jobs</Link>
          </div>
        ) : (
          <div className="form-wrapper glass-panel animate-fade-in delay-1">
            <h2>Apply for this position</h2>
            <form onSubmit={handleSubmit} className="job-app-form">
              
              {/* Section 1: Personal Details */}
              <div className="form-section">
                <h3>Personal Details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input type="tel" required placeholder="+91 9876543210" />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth *</label>
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <label>Gender *</label>
                    <select required>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Address */}
              <div className="form-section">
                <h3>Address</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Current City *</label>
                    <input type="text" required placeholder="e.g. Jaipur" />
                  </div>
                  <div className="form-group">
                    <label>State *</label>
                    <input type="text" required placeholder="e.g. Rajasthan" />
                  </div>
                  <div className="form-group full-width">
                    <label>Full Address</label>
                    <textarea rows="2" placeholder="Street address, apartment, suite, etc."></textarea>
                  </div>
                </div>
              </div>

              {/* Section 3: Professional Info */}
              <div className="form-section">
                <h3>Professional Info</h3>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>Position Applying For</label>
                    <input type="text" value={job.title} readOnly className="read-only-input" />
                  </div>
                  <div className="form-group">
                    <label>Notice Period *</label>
                    <select required>
                      <option value="">Select Notice Period</option>
                      <option value="immediate">Immediate</option>
                      <option value="15_days">15 Days</option>
                      <option value="1_month">1 Month</option>
                      <option value="2_months">2 Months</option>
                      <option value="3_months">3 Months or more</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Expected Joining Date</label>
                    <input type="date" />
                  </div>
                </div>
              </div>

              {/* Section 4: Education */}
              <div className="form-section">
                <h3>Education</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Highest Qualification *</label>
                    <select required>
                      <option value="">Select Qualification</option>
                      <option value="phd">Ph.D</option>
                      <option value="post_graduate">Post Graduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="diploma">Diploma</option>
                      <option value="high_school">High School</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Degree/Course *</label>
                    <input type="text" required placeholder="e.g. B.Tech, MCA, B.Sc" />
                  </div>
                  <div className="form-group">
                    <label>Specialization</label>
                    <input type="text" placeholder="e.g. Computer Science" />
                  </div>
                  <div className="form-group">
                    <label>College/University *</label>
                    <input type="text" required placeholder="Institution Name" />
                  </div>
                  <div className="form-group">
                    <label>Graduation Year *</label>
                    <input type="number" required min="1990" max="2030" placeholder="e.g. 2023" />
                  </div>
                  <div className="form-group">
                    <label>Percentage/CGPA *</label>
                    <input type="text" required placeholder="e.g. 8.5 CGPA or 85%" />
                  </div>
                  <div className="form-group">
                    <label>10th Percentage</label>
                    <input type="text" placeholder="e.g. 90%" />
                  </div>
                  <div className="form-group">
                    <label>12th Percentage</label>
                    <input type="text" placeholder="e.g. 88%" />
                  </div>
                </div>
              </div>

              {/* Section 5: Experience */}
              <div className="form-section">
                <h3>Experience</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Experience Level *</label>
                    <select required>
                      <option value="">Select Level</option>
                      <option value="fresher">Fresher</option>
                      <option value="1-3">1-3 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Total Experience (in years)</label>
                    <input type="number" step="0.5" min="0" placeholder="e.g. 2" />
                  </div>
                  <div className="form-group">
                    <label>Current/Previous Company</label>
                    <input type="text" placeholder="Company Name" />
                  </div>
                  <div className="form-group">
                    <label>Previous Job Title</label>
                    <input type="text" placeholder="e.g. Software Engineer" />
                  </div>
                  <div className="form-group">
                    <label>Employment Duration</label>
                    <input type="text" placeholder="e.g. Jan 2021 - Present" />
                  </div>
                  <div className="form-group full-width">
                    <label>Internship Experience (if any)</label>
                    <textarea rows="2" placeholder="Briefly describe your internships"></textarea>
                  </div>
                  <div className="form-group full-width">
                    <label>Primary Skills *</label>
                    <input type="text" required placeholder="e.g. React, Node.js, Python" />
                  </div>
                </div>
              </div>

              {/* Section 6: Attachments & Links */}
              <div className="form-section">
                <h3>Attachments & Links</h3>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label className="file-upload-label">
                      <div className="file-upload-content">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                        <span>Upload Resume/CV * (PDF, DOCX)</span>
                      </div>
                      <input type="file" required accept=".pdf,.doc,.docx" className="file-input" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label>LinkedIn Profile</label>
                    <input type="url" placeholder="https://linkedin.com/in/username" />
                  </div>
                  <div className="form-group">
                    <label>GitHub Profile</label>
                    <input type="url" placeholder="https://github.com/username" />
                  </div>
                </div>
              </div>

              {/* Section 7: Questions */}
              <div className="form-section">
                <h3>Questionnaire</h3>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>Why do you want to join our company? *</label>
                    <textarea rows="3" required placeholder="Tell us what motivates you..."></textarea>
                  </div>
                  <div className="form-group full-width">
                    <label>Why are you suitable for this position? *</label>
                    <textarea rows="3" required placeholder="Highlight your relevant skills and experience..."></textarea>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">Submit Application</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
