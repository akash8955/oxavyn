"use client";
import React from 'react';
import Link from 'next/link';
import { getOptimizedImageUrl } from '@/lib/cloudinary-client';
import '../../blog/[id]/BlogArticle.css'; // Reusing Blog Article CSS for layout consistency

export default function TechGuideArticleClient({ guide }) {
  return (
    <div className="blog-article-page">
      <div className="blog-ambient-bg"></div>
      
      {/* Dynamic Banner using the guide image */}
      <section 
        className="blog-article-banner" 
        style={{ backgroundImage: `url(${guide.image?.includes('cloudinary.com') ? getOptimizedImageUrl(guide.image, 1920) : guide.image})` }}
      >
        <div className="blog-article-banner-content animate-fade-in">
          <div className="blog-article-meta">
            <span className="blog-article-category">{guide.category}</span>
            <span className="blog-article-date">{guide.readTime} • By {guide.author}</span>
          </div>
          <h1>{guide.title}</h1>
        </div>
      </section>

      <main className="blog-article-container">
        <article className="blog-article-content glass-panel animate-fade-in delay-1">
          <Link href="/technology-guides" className="back-to-blog">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Guides
          </Link>
          
          <div className="article-body">
            <p className="article-intro">{guide.description}</p>
            
            {/* Split by \n or \n\n */}
            {guide.content ? guide.content.replace(/\\n/g, '\n').split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            )) : null}
          </div>
        </article>
      </main>
    </div>
  );
}
