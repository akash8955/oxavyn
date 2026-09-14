"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogs, filters } from '../../data/blogData';
import './Blog.css';

export default function BlogClient() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredBlogs = activeFilter === 'All' ? blogs : blogs.filter(b => b.category === activeFilter);

  return (
    <div className="blog-page">
      <div className="blog-ambient-bg"></div>
      
      {/* Banner Section */}
      <section className="blog-banner" style={{ backgroundImage: 'url(/images/blog/blog_banner_1789406612451.jpg)' }}>
        <div className="blog-banner-content animate-fade-in">
          <h1>Insights & Innovations</h1>
          <p>Discover the latest trends in technology, luxury design, and enterprise solutions.</p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="blog-filter-bar">
        {filters.map(filter => (
          <button 
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="blog-container">
        {/* Featured Blog */}
        {activeFilter === 'All' && (
          <section className="featured-blog glass-panel animate-fade-in delay-1">
            <div className="featured-image-wrapper">
              <Image 
                src="/images/blog/featured_blog_1789406665375.jpg" 
                alt="Featured Blog" 
                width={800} 
                height={500} 
                className="featured-image"
              />
            </div>
            <div className="featured-content">
              <span className="featured-badge">Featured</span>
              <h2>Enterprise Technology & Abstract Innovation</h2>
              <p>Step into the future with our comprehensive guide on premium corporate aesthetics, sleek enterprise design, and the glowing data streams powering tomorrow's business world.</p>
              <Link href={`/blog/${blogs[0].id}`} className="btn-primary">Read Article</Link>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="blog-grid animate-fade-in delay-2">
          {filteredBlogs.map(blog => (
            <article key={blog.id} className="blog-card glass-panel">
              <div className="blog-card-image-wrapper">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  width={400} 
                  height={240} 
                  className="blog-card-image"
                />
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <Link href={`/blog/${blog.id}`} className="read-more">
                  Read More 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </article>
          ))}
          {filteredBlogs.length === 0 && (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#6b7280', padding: '2rem' }}>
              No articles found in this category.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
