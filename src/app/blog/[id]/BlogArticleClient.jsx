"use client";
import React from 'react';
import Link from 'next/link';
import './BlogArticle.css';

export default function BlogArticleClient({ blog }) {
  return (
    <div className="blog-article-page">
      <div className="blog-ambient-bg"></div>
      
      {/* Dynamic Banner using the blog image */}
      <section 
        className="blog-article-banner" 
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="blog-article-banner-content animate-fade-in">
          <div className="blog-article-meta">
            <span className="blog-article-category">{blog.category}</span>
            <span className="blog-article-date">{blog.date}</span>
          </div>
          <h1>{blog.title}</h1>
        </div>
      </section>

      <main className="blog-article-container">
        <article className="blog-article-content glass-panel animate-fade-in delay-1">
          <Link href="/blog" className="back-to-blog">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Blog
          </Link>
          
          <div className="article-body">
            <p className="article-intro">{blog.desc}</p>
            
            {/* We split by \n\n to render paragraphs properly */}
            {blog.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
