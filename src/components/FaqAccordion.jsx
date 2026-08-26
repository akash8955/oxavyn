"use client";
import React, { useState, useEffect, useRef } from 'react';
import './FaqAccordion.css';
import { faqData } from '../data/faqData';

export default function FaqAccordion() {
  // Track the open item per section.
  // state will be an array of numbers, where index is sectionIndex, and value is itemIndex
  const [openItems, setOpenItems] = useState(
    faqData.map(() => 0) // Initialize with 0 (first item open for each section)
  );

  const containerRef = useRef(null);

  useEffect(() => {
    // Reveal elements on scroll with a slight stagger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = containerRef.current?.querySelectorAll('.faq-fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleItem = (sectionIndex, itemIndex) => {
    setOpenItems(prev => {
      const newOpenItems = [...prev];
      // If the clicked item is already open, close it (set to -1)
      if (newOpenItems[sectionIndex] === itemIndex) {
        newOpenItems[sectionIndex] = -1;
      } else {
        newOpenItems[sectionIndex] = itemIndex;
      }
      return newOpenItems;
    });
  };

  return (
    <div className="faq-container" ref={containerRef}>
      {faqData.map((section, sIndex) => (
        <div key={sIndex} className="faq-section faq-fade-in">
          <h2 className="faq-section-title">{section.sectionTitle}</h2>
          <div className="faq-list">
            {section.items.map((item, iIndex) => {
              const isOpen = openItems[sIndex] === iIndex;
              return (
                <div 
                  key={iIndex} 
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleItem(sIndex, iIndex)}
                >
                  <div className="faq-question">
                    <h3>{item.question}</h3>
                    <div className="faq-icon">
                      {isOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                      )}
                    </div>
                  </div>
                  <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? '800px' : '0' }}>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
