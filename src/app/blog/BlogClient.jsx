"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DynamicBackground from '@/components/DynamicBackground';
import DynamicMedia from '@/components/DynamicMedia';
import './Blog.css';
export const filters = ['All', 'Technology', 'Design', 'Business', 'Innovation'];

export default function BlogClient({ blogs = [] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredBlogs = activeFilter === 'All' ? blogs : blogs.filter(b => b.category === activeFilter);

  return (
    <div className="blog-page">
      <div className="blog-ambient-bg"></div>
      
      {/* Banner Section */}
      <DynamicBackground page="BLOG" section="Blog Banner" title="Banner Image" className="blog-banner">
        <div className="blog-banner-content animate-fade-in">
          <h1>Insights & Innovations</h1>
          <p>Discover the latest trends in technology, luxury design, and enterprise solutions.</p>
        </div>
      </DynamicBackground>

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
        {activeFilter === 'All' && blogs.length > 0 && (
          <section className="featured-blog glass-panel animate-fade-in delay-1">
            <div className="featured-image-wrapper">
              <Image 
                src={blogs[0].image} 
                alt={blogs[0].title} 
                width={800}
                height={500}
                style={{ width: '100%', height: 'auto', aspectRatio: '800/500', objectFit: 'cover' }}
                className="featured-image"
              />
            </div>
            <div className="featured-content">
              <span className="featured-badge">Featured</span>
              <h2>{blogs[0].title}</h2>
              <p>{blogs[0].desc}</p>
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
