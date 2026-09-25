"use client";
import React, { useRef, useState } from 'react';
import DynamicBackground from '@/components/DynamicBackground';
import './StudentReviews.css';

export default function StudentReviewsClient({ reviews = [] }) {
  const internshipReviews = reviews.filter(r => r.program === 'Internship Program' || r.program === 'Internship');
  const skillEnhancementReviews = reviews.filter(r => r.program === 'Skill Enhancement');
  const foundationalReviews = reviews.filter(r => r.program === 'Foundational & Career' || r.program === 'Foundational');

const ReviewSlider = ({ title, reviews }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="review-section">
      <div className="review-header">
        <h2>{title}</h2>
      </div>
      <div className="slider-wrapper">
        <button onClick={() => scroll('left')} className="slider-btn left-btn" aria-label="Scroll Left">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="slider-container" ref={sliderRef}>
          {reviews.map(review => (
            <div key={review.id} className="review-card glass-panel">
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`star ${i < review.rating ? 'filled' : ''}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-info">
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll('right')} className="slider-btn right-btn" aria-label="Scroll Right">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
};

  const [formData, setFormData] = useState({ name: '', role: '', program: 'Internship', rating: '5', text: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');
    try {
      const payload = {
        ...formData,
        avatar: formData.name.substring(0, 2).toUpperCase(),
        rating: Number(formData.rating)
      };
      const res = await fetch('/api/student-reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setSubmitStatus("Our team will verify your authenticity and if you are a genuine person your review will show within 24 hours. Thanks for submitting your review.");
        setFormData({ name: '', role: '', program: 'Internship', rating: '5', text: '' });
        setTimeout(() => setSubmitStatus(''), 8000);
      } else {
        setSubmitStatus("Error submitting review. Please try again.");
      }
    } catch (err) {
      setSubmitStatus("Error submitting review. Please try again.");
    }
  };

  return (
    <div className="reviews-page">
      <div className="reviews-ambient-bg"></div>

      {/* Banner Section */}
      <DynamicBackground page="STUDENT REVIEWS" section="Student Reviews Banner" title="Banner Image" fallbackSrc="/images/Banner_1.png" className="reviews-banner">
        <div className="reviews-banner-overlay"></div>
        <div className="reviews-banner-content animate-fade-in">
          <h1>Student Excellence</h1>
          <p>Hear from the brilliant minds who have elevated their careers through our elite programs.</p>
        </div>
      </DynamicBackground>

      <div className="reviews-container">
        {/* Sliders */}
        <div className="all-sliders animate-fade-in delay-1">
          <ReviewSlider title="Internship Program Reviews" reviews={internshipReviews} />
          <ReviewSlider title="Skill Enhancement Reviews" reviews={skillEnhancementReviews} />
          <ReviewSlider title="Foundational & Career Reviews" reviews={foundationalReviews} />
        </div>

        {/* Review Form */}
        <div className="submit-review-section animate-fade-in delay-2">
          <div className="submit-review-card glass-panel">
            <div className="submit-review-content">
              <h2>Share Your Experience</h2>
              <p>Your journey with Oxavyn inspires others. Let us know how our programs have impacted your career.</p>
            </div>
            <form onSubmit={handleSubmit} className="submit-review-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="role" placeholder="Your Role (e.g., Software Intern, 1st Year Student)" value={formData.role} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <select name="program" value={formData.program} onChange={handleChange} required>
                    <option value="Internship">Internship Program</option>
                    <option value="Skill Enhancement">Skill Enhancement</option>
                    <option value="Foundational">Foundational & Career</option>
                  </select>
                </div>
                <div className="form-group half">
                  <select name="rating" value={formData.rating} onChange={handleChange} required>
                    <option value="5">5 Stars - Excellent</option>
                    <option value="4">4 Stars - Very Good</option>
                    <option value="3">3 Stars - Good</option>
                    <option value="2">2 Stars - Fair</option>
                    <option value="1">1 Star - Poor</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea name="text" placeholder="Write your review here..." rows="4" value={formData.text} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-primary" disabled={submitStatus === 'Submitting...'}>Submit Review</button>
              {submitStatus && <p style={{ marginTop: '1rem', color: '#10b981', fontWeight: '500' }}>{submitStatus}</p>}
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <section className="reviews-cta-section animate-fade-in delay-3">
          <div className="cta-content glass-panel">
            <h2>Ready to Elevate Your Career?</h2>
            <p>Join our prestigious programs and become the next success story. Apply today and unlock your true potential with Oxavyn.</p>
            <div className="cta-buttons">
              <a href="/students/internships" className="btn-primary">Explore Internships</a>
              <a href="/students/skill-enhancement" className="btn-secondary">View Skill Programs</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
