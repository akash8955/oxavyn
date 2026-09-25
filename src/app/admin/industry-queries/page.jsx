"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Trash2 } from 'lucide-react';

export default function IndustryQueriesAdmin() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Comment Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuery, setActiveQuery] = useState(null);
  const [newComment, setNewComment] = useState('');

  // Tabs State
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Healthcare', 'E-Commerce', 'Education', 'Retail', 'Agency & Consultancy'];

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const res = await fetch('/api/admin/industry-queries', {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      const data = await res.json();
      if (data.success) setQueries(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`/api/admin/industry-queries/${id}`, {
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
    if (!confirm('Are you sure you want to delete this query?')) return;
    try {
      await fetch(`/api/admin/industry-queries/${id}`, { method: 'DELETE' });
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
      await fetch(`/api/admin/industry-queries/${activeQuery._id}`, {
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

  const filteredQueries = activeTab === 'All' ? queries : queries.filter(q => q.industryCategory === activeTab);

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <Link href="/admin" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
        <ArrowLeft size={18} /> Back to Dashboard
      </Link>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#1e293b' }}>Industry Queries</h1>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: activeTab === tab ? '#6366f1' : '#f1f5f9',
              color: activeTab === tab ? '#fff' : '#475569',
              fontWeight: 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading queries...</p>
      ) : (
        <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}>
          <table style={{ width: 'max-content', minWidth: '100%', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid #e2e8f0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Date</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Industry</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Name</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Email</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Phone</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Org Name</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Org Type</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Team Size</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Interests</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Challenge</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>Status</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap', textAlign: 'center' }}>Comments</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, border: '1px solid #e2e8f0', whiteSpace: 'nowrap', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredQueries.map(query => (
                <tr key={query._id} style={{ backgroundColor: query.status === 'Approved' ? '#f0fdf4' : 'transparent' }}>
                  <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.9rem', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    {new Date(query.createdAt).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 600, color: '#334155', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    <span style={{ backgroundColor: '#e2e8f0', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                      {query.industryCategory}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 500, color: '#0f172a', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    {query.fullName}
                  </td>
                  <td style={{ padding: '1rem', color: '#3b82f6', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    <a href={`mailto:${query.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>{query.email}</a>
                  </td>
                  <td style={{ padding: '1rem', color: '#475569', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    {query.phone || '-'}
                  </td>
                  <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    <strong>{query.organizationName}</strong>
                  </td>
                  <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    {query.organizationType}
                  </td>
                  <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    {query.teamSize || '-'}
                  </td>
                  <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    {query.interests && query.interests.length > 0 ? (
                      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'nowrap' }}>
                        {query.interests.map((int, i) => (
                          <span key={i} style={{ backgroundColor: '#f1f5f9', color: '#64748b', fontSize: '0.7rem', padding: '0.1rem 0.3rem', borderRadius: '2px', whiteSpace: 'nowrap' }}>{int}</span>
                        ))}
                      </div>
                    ) : '-'}
                  </td>
                  <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem', border: '1px solid #e2e8f0', whiteSpace: 'nowrap', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }} title={query.challenge}>
                    {query.challenge}
                  </td>
                  <td style={{ padding: '1rem', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    <select 
                      value={query.status} 
                      onChange={(e) => handleStatusChange(query._id, e.target.value)}
                      style={{ 
                        padding: '0.25rem 0.5rem', 
                        borderRadius: '4px', 
                        border: `1px solid ${query.status === 'Approved' ? '#86efac' : '#cbd5e1'}`,
                        backgroundColor: query.status === 'Approved' ? '#dcfce7' : '#f8fafc',
                        color: query.status === 'Approved' ? '#166534' : '#475569',
                        fontWeight: 500,
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                    </select>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    <button 
                      onClick={() => openCommentModal(query)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#6366f1', 
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      <MessageCircle size={18} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>({query.comments?.length || 0})</span>
                    </button>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                    <button 
                      onClick={() => handleDelete(query._id)}
                      style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredQueries.length === 0 && (
                <tr>
                  <td colSpan="13" style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                    No industry queries found.
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
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Comments for {activeQuery.fullName}</h2>
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
  );
}
