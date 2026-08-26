"use client";
import { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    title: "AI-Powered Solutions,",
    subtitle: "Built to Transform Your Business",
    description: "Harness the power of Artificial Intelligence and Machine Learning to automate processes, uncover insights, and create smarter digital experiences.",
    cta: "Explore AI Solutions",
    image: "/images/Banner_1.png"
  },
  {
    id: 2,
    title: "Cloud Solutions",
    subtitle: "That Scale With Your Ambitions",
    description: "Build, migrate, and manage secure cloud environments designed for performance, flexibility, and long-term business growth.",
    cta: "Explore Cloud Solutions",
    image: "/images/Banner_2.png"
  },
  {
    id: 3,
    title: "Designing Digital Experiences",
    subtitle: "That Drive Growth",
    description: "From intuitive UI/UX to powerful web and mobile applications, we turn ideas into seamless digital experiences your customers love.",
    cta: "Build Your Digital Product",
    image: "/images/Banner_3.png"
  },
  {
    id: 4,
    title: "Turn Your Data",
    subtitle: "Into Decisions That Matter",
    description: "Unlock the power of your data with advanced analytics, actionable insights, and intelligent solutions that help your business move forward.",
    cta: "Discover Data Solutions",
    image: "/images/Banner_4.png"
  },
  {
    id: 5,
    title: "Technology Solutions",
    subtitle: "Built Around Your Business",
    description: "From customized applications and Salesforce solutions to digital marketing and enterprise technology, we build solutions that solve real business challenges.",
    cta: "Let's Build Together",
    image: "/images/Banner_5.png"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="hero-slider-container">
      {/* Animated Bottom Gradient Background */}
      <div className="bottom-gradient-bg"></div>

      <div className="slider-content-wrapper">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div className="slide-content">
              <h1 className="slide-title">
                {slide.title} <br />
                <span>{slide.subtitle}</span>
              </h1>
              <p className="slide-description">{slide.description}</p>
              <button className="btn-primary slide-btn">{slide.cta}</button>
            </div>
            
            <div className="slide-visual">
              {slide.image.startsWith('/') ? (
                <img src={slide.image} alt={slide.title} className="hero-graphic" />
              ) : (
                <div className="glass-panel visual-card">
                  <span className="visual-icon">{slide.image}</span>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Navigation Controls */}
        <div className="slider-controls">
          <button className="control-arrow" onClick={prevSlide} aria-label="Previous slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="dot-progress"></div>
              </button>
            ))}
          </div>
          
          <button className="control-arrow" onClick={nextSlide} aria-label="Next slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
