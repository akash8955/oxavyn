"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Trash2 } from 'lucide-react';
import AdminCommentModal from '@/components/admin/AdminCommentModal';

export default function ContactQueriesAdmin() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Comment Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuery, setActiveQuery] = useState(null);
  const [newComment, setNewComment] = useState('');

  const fetchQueries = async () => {
    try {
      const res = await fetch('/api/admin/contact-queries', {
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

  useEffect(() => {
    fetchQueries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`/api/admin/contact-queries/${id}`, {
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
      await fetch(`/api/admin/contact-queries/${id}`, { method: 'DELETE' });
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
      await fetch(`/api/admin/contact-queries/${activeQuery._id}`, {
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
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <Link href="/admin" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
        <ArrowLeft size={18} /> Back to Dashboard
      </Link>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#1e293b' }}>Contact Queries</h1>
      </div>

      {loading ? (
        <p>Loading queries...</p>
      ) : (
        <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Date</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Name</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Email</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600 }}>Company</th>
                <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, width: '30%' }}>Message</th>
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
                    {query.firstName} {query.lastName}
                  </td>
                  <td style={{ padding: '1rem', color: '#3b82f6' }}>
                    <a href={`mailto:${query.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>{query.email}</a>
                  </td>
                  <td style={{ padding: '1rem', color: '#475569' }}>
                    {query.company || '-'}
                  </td>
                  <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem' }}>
                    {query.message}
                  </td>
                  <td style={{ padding: '1rem' }}>
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
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
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
                  <td colSpan="8" style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                    No contact queries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* 80vw x 70vh Admin Comment Modal */}
      <AdminCommentModal 
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setActiveQuery(null); }}
        item={activeQuery}
        type="contact"
        onCommentAdded={(updatedItem) => {
          fetchQueries();
          if (updatedItem) setActiveQuery(updatedItem);
        }}
        onStatusChange={(newStatus) => {
          if (activeQuery) {
            handleStatusChange(activeQuery._id, newStatus);
            setActiveQuery(prev => ({ ...prev, status: newStatus }));
          }
        }}
      />
    </div>
  );
}
