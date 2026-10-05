"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Trash2, Users, BarChart3, ImageIcon, FileText, MessageSquare, Settings } from 'lucide-react';

export default function SkillEnhancementManage() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Comment Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuery, setActiveQuery] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/skills', {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      const data = await res.json();
      if (data.success) setQueries(data.items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`/api/admin/skills/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      fetchQueries();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this application?')) return;
    try {
      await fetch(`/api/admin/skills/${id}`, { method: 'DELETE' });
      fetchQueries();
    } catch (err) {
      console.error(err);
    }
  };

  const openCommentModal = (query) => {
    setActiveQuery(query);
    setIsModalOpen(true);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    try {
      await fetch(`/api/admin/skills/${activeQuery._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newComment })
      });
      setNewComment('');
      setIsModalOpen(false);
      setActiveQuery(null);
      fetchQueries();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-root-layout">
      {/* Sidebar Navigation */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Oxavyn Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <Link href="/admin" className="nav-item">
            <BarChart3 size={20} />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/media" className="nav-item">
            <Settings size={20} />
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
          <Link href="/admin/job-applications" className="nav-item">
            <Users size={20} />
            <span>Job Applications</span>
          </Link>
          <Link href="/admin/internship-manage" className="nav-item">
            <Users size={20} />
            <span>Internships</span>
          </Link>
          <Link href="/admin/skill-enhancement-manage" className="nav-item active">
            <Users size={20} />
            <span>Skill Enhancement</span>
          </Link>
          <Link href="/admin/foundation-manage" className="nav-item">
            <Users size={20} />
            <span>Foundation</span>
          </Link>
          <Link href="/admin/settings" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-topbar" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#1e293b' }}>Skill Enhancement Applications</h1>
            <p>Manage applications for skill enhancement programs.</p>
          </div>
        </header>

        <div className="admin-content" style={{ padding: '0 2rem' }}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', marginTop: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Date</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Name</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Email</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Education</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Program</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>UTR Number</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Status</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, textAlign: 'center' }}>Comments</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {queries.map(query => (
                    <tr key={query._id} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: query.status === 'Approved' ? '#f0fdf4' : 'transparent' }}>
                      <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                        {new Date(query.createdAt).toLocaleDateString()}
                      </td>
                      <td style={{ padding: '1rem', fontWeight: 500, color: '#0f172a' }}>
                        {query.fullName}
                      </td>
                      <td style={{ padding: '1rem', color: '#3b82f6' }}>
                        <a href={`mailto:${query.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>{query.email}</a>
                      </td>
                      <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem' }}>
                        <div>{query.university}</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Class of {query.graduationYear} &middot; Sem {query.currentSemester}</div>
                      </td>
                      <td style={{ padding: '1rem', color: '#475569' }}>
                        <span style={{ display: 'inline-block', background: '#e0e7ff', color: '#4338ca', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '500' }}>
                          {query.program}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', color: '#475569' }}>
                        <span style={{ fontFamily: 'monospace', background: '#f1f5f9', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{query.utrNumber || '-'}</span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <select 
                          value={query.status} 
                          onChange={(e) => handleStatusChange(query._id, e.target.value)}
                          style={{ 
                            padding: '0.25rem 0.5rem', 
                            borderRadius: '4px', 
                            border: `1px solid ${query.status === 'Approved' ? '#86efac' : '#cbd5e1'}`,
                            backgroundColor: query.status === 'Approved' ? '#dcfce7' : query.status === 'Rejected' ? '#fee2e2' : '#f8fafc',
                            color: query.status === 'Approved' ? '#166534' : query.status === 'Rejected' ? '#991b1b' : '#475569',
                            fontWeight: 500,
                            cursor: 'pointer'
                          }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <button 
                          onClick={() => openCommentModal(query)}
                          style={{ 
                            background: 'none', border: 'none', color: '#6366f1', cursor: 'pointer',
                            display: 'inline-flex', alignItems: 'center', gap: '0.25rem'
                          }}
                        >
                          <MessageCircle size={18} />
                          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>({query.comments?.length || 0})</span>
                        </button>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <button 
                          onClick={() => handleDelete(query._id)}
                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {queries.length === 0 && (
                    <tr>
                      <td colSpan="9" style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                        No applications found in this section.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {isModalOpen && activeQuery && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
              <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '2rem', width: '90%', maxWidth: '500px', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b' }}>Comments for {activeQuery.fullName}</h2>
                  <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748b' }}>&times;</button>
                </div>
                
                <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '4px' }}>
                  {activeQuery.comments && activeQuery.comments.length > 0 ? (
                    activeQuery.comments.map((c, i) => (
                      <div key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
                        <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.9rem', color: '#334155' }}>{c.text}</p>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{new Date(c.timestamp).toLocaleString()}</span>
                      </div>
                    ))
                  ) : (
                    <p style={{ color: '#64748b', textAlign: 'center', margin: 0 }}>No comments yet.</p>
                  )}
                </div>

                <form onSubmit={handleAddComment} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <textarea 
                    rows="3"
                    placeholder="Add a new comment/note..." 
                    value={newComment} 
                    onChange={e => setNewComment(e.target.value)}
                    style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', resize: 'vertical' }}
                    required
                  />
                  <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#6366f1', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}>
                    Add Comment
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
