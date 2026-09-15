"use client";
import React, { useRef, useState } from 'react';
import './StudentReviews.css';

const internshipReviews = [
  { id: 1, name: "Aarav Sharma", role: "Software Engineer Intern", text: "The internship at Oxavyn completely transformed my understanding of enterprise software. The mentorship was unparalleled.", rating: 5, avatar: "AS" },
  { id: 2, name: "Priya Patel", role: "Data Science Intern", text: "Working with real-world datasets and cutting-edge AI models gave me the exact exposure I needed for my career.", rating: 5, avatar: "PP" },
  { id: 3, name: "Rohan Gupta", role: "Product Design Intern", text: "The focus on ultra-luxury design aesthetics taught me how to craft experiences, not just interfaces. A truly premium internship.", rating: 5, avatar: "RG" },
  { id: 4, name: "Neha Singh", role: "Marketing Intern", text: "I was given ownership of actual campaigns. The level of trust and the elite environment is something you won't find anywhere else.", rating: 4, avatar: "NS" },
  { id: 5, name: "Kunal Verma", role: "Backend Intern", text: "I learned more in 3 months here than in my entire degree. The engineering standards are incredibly high.", rating: 5, avatar: "KV" }
];

const skillEnhancementReviews = [
  { id: 1, name: "Vikram Mehta", role: "Full Stack Developer", text: "The Skill Enhancement program upskilled me in React and Node.js. The curriculum is rigorous and perfectly aligned with industry needs.", rating: 5, avatar: "VM" },
  { id: 2, name: "Anjali Desai", role: "UI/UX Designer", text: "Learning glassmorphism and modern web aesthetics from the best. My portfolio has never looked better.", rating: 5, avatar: "AD" },
  { id: 3, name: "Karan Verma", role: "Cloud Architect", text: "The AWS certification track was phenomenal. I went from basics to deploying scalable infrastructure in weeks.", rating: 5, avatar: "KV" },
  { id: 4, name: "Sneha Reddy", role: "Frontend Developer", text: "A fantastic deep dive into modern CSS and performance optimization. Highly recommended for professionals.", rating: 5, avatar: "SR" },
  { id: 5, name: "Ishaan Ali", role: "DevOps Engineer", text: "The CI/CD pipelines and automation masterclass was exactly what I needed to get my promotion.", rating: 5, avatar: "IA" }
];

const foundationalReviews = [
  { id: 1, name: "Amit Kumar", role: "CS Student", text: "This program laid the perfect foundation for my career. The concepts are taught with extreme clarity.", rating: 5, avatar: "AK" },
  { id: 2, name: "Divya Sharma", role: "IT Graduate", text: "I finally understand data structures and algorithms, all thanks to the brilliant mentors at Oxavyn.", rating: 4, avatar: "DS" },
  { id: 3, name: "Rahul Jain", role: "Software Analyst", text: "The career guidance and mock interviews helped me land my dream job. They really care about your success.", rating: 5, avatar: "RJ" },
  { id: 4, name: "Pooja Mishra", role: "Tech Enthusiast", text: "From zero to coding my first application. The Foundational course is exactly what beginners need.", rating: 5, avatar: "PM" },
  { id: 5, name: "Tariq Khan", role: "BCA Student", text: "The holistic approach to career building is what sets this apart. They don't just teach code, they build careers.", rating: 5, avatar: "TK" }
];

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

export default function StudentReviewsClient() {
  const [formData, setFormData] = useState({ name: '', role: '', program: 'Internship', rating: '5', review: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your review has been submitted for moderation.");
    setFormData({ name: '', role: '', program: 'Internship', rating: '5', review: '' });
  };

  return (
    <div className="reviews-page">
      <div className="reviews-ambient-bg"></div>

      {/* Banner Section */}
      <section className="reviews-banner" style={{ backgroundImage: 'url(/images/Banner_1.png)' }}>
        <div className="reviews-banner-overlay"></div>
        <div className="reviews-banner-content animate-fade-in">
          <h1>Student Excellence</h1>
          <p>Hear from the brilliant minds who have elevated their careers through our elite programs.</p>
        </div>
      </section>

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
                <textarea name="review" placeholder="Write your review here..." rows="4" value={formData.review} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-primary">Submit Review</button>
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
