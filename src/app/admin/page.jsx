'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Settings, Image as ImageIcon, Users, BarChart3, ShieldCheck, ChevronRight, Video, FileText, MessageSquare } from 'lucide-react';
import './AdminDashboard.css';

export default function AdminDashboardHome() {
  const [stats, setStats] = useState({ total: 0, images: 0, videos: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/media');
        if (res.ok) {
          const data = await res.json();
          setStats(data.stats);
        }
      } catch (err) {
        console.error("Failed to fetch stats", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="admin-root-layout">
      {/* Sidebar Navigation */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Oxavyn Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <Link href="/admin" className="nav-item active">
            <BarChart3 size={20} />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/media" className="nav-item">
            <ImageIcon size={20} />
            <span>Media Manager</span>
          </Link>
          <Link href="/admin/case-studies" className="nav-item">
            <FileText size={20} />
            <span>Case Studies</span>
          </Link>
          <Link href="/admin/blogs" className="nav-item">
            <FileText size={20} />
            <span>Blogs</span>
          </Link>
          <Link href="/admin/tech-guides" className="nav-item">
            <FileText size={20} />
            <span>Tech Guides</span>
          </Link>
          <Link href="/admin/student-reviews" className="nav-item">
            <MessageSquare size={20} />
            <span>Student Reviews</span>
          </Link>
          <Link href="/admin/client-stories" className="nav-item">
            <MessageSquare size={20} />
            <span>Client Stories</span>
          </Link>
          <Link href="/admin/contact-queries" className="nav-item">
            <Users size={20} />
            <span>Contact Queries</span>
          </Link>
          <Link href="/admin/industry-queries" className="nav-item">
            <Users size={20} />
            <span>Industry Queries</span>
          </Link>
          <Link href="/admin/job-postings" className="nav-item">
            <FileText size={20} />
            <span>Job Postings</span>
          </Link>
          <Link href="/admin/job-applications" className="nav-item">
            <Users size={20} />
            <span>Job Applications</span>
          </Link>
          <Link href="#" className="nav-item">
            <Users size={20} />
            <span>Student Enquiries</span>
          </Link>
          <Link href="#" className="nav-item">
            <FileText size={20} />
            <span>Blog CMS</span>
          </Link>
          <Link href="#" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>
        <div className="sidebar-footer">
          <div className="admin-user-card">
            <div className="user-avatar">
              <ShieldCheck size={20} />
            </div>
            <div className="user-info">
              <h4>Administrator</h4>
              <p>admin@oxavyn.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <h1>Dashboard Overview</h1>
            <p>Welcome back! Here's what's happening today.</p>
          </div>
        </header>

        <div className="admin-content">
          <div className="quick-actions">
            <Link href="/admin/media" className="action-card primary-action">
              <div className="action-icon">
                <ImageIcon size={24} />
              </div>
              <div className="action-text">
                <h3>Manage Website Media</h3>
                <p>Upload and update images/videos across the site</p>
              </div>
              <ChevronRight className="action-arrow" />
            </Link>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <h3>Total Media</h3>
                <ImageIcon size={20} className="text-gray" />
              </div>
              <div className="stat-value">
                {loading ? "..." : stats.total}
              </div>
              <p className="stat-desc">Images and videos hosted</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-header">
                <h3>Images</h3>
                <ImageIcon size={20} className="text-gray" />
              </div>
              <div className="stat-value">
                {loading ? "..." : stats.images}
              </div>
              <p className="stat-desc">Active on website</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Videos</h3>
                <Video size={20} className="text-gray" />
              </div>
              <div className="stat-value">
                {loading ? "..." : stats.videos}
              </div>
              <p className="stat-desc">Active on website</p>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
