"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Users, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  Settings, 
  MessageCircle, 
  Trash2,
  Copy,
  Check
} from 'lucide-react';
import AdminCommentModal from '@/components/admin/AdminCommentModal';
import '../AdminDashboard.css';

export default function FoundationManageAdmin() {
  const [activeTab, setActiveTab] = useState('All');
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedUtrId, setCopiedUtrId] = useState(null);
  
  // Comment Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuery, setActiveQuery] = useState(null);

  const fetchQueries = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === 'All' 
        ? '/api/admin/foundations?type=All' 
        : `/api/admin/foundations?type=${encodeURIComponent(activeTab)}`;
      
      const res = await fetch(endpoint, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      const data = await res.json();
      if (data.success) {
        setQueries(data.data || data.items || []);
      }
    } catch (err) {
      console.error("Error fetching foundation queries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, [activeTab]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`/api/admin/foundations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      fetchQueries();
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      await fetch(`/api/admin/foundations/${id}`, { method: 'DELETE' });
      fetchQueries();
    } catch (err) {
      console.error("Error deleting enquiry:", err);
    }
  };

  const openCommentModal = (query) => {
    setActiveQuery(query);
    setIsModalOpen(true);
  };

  const handleCopyUtr = (utr, id) => {
    if (!utr) return;
    navigator.clipboard.writeText(utr);
    setCopiedUtrId(id);
    setTimeout(() => setCopiedUtrId(null), 2000);
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
          <Link href="/admin/skill-enhancement-manage" className="nav-item">
            <Users size={20} />
            <span>Skill Enhancement</span>
          </Link>
          <Link href="/admin/foundation-manage" className="nav-item active">
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
        <header className="admin-topbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 2rem' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#1e293b' }}>Foundational & Career Applications</h1>
            <p style={{ margin: '0.25rem 0 0', color: '#64748b', fontSize: '0.95rem' }}>
              Manage student enquiries, payments, and communications for foundational programs.
            </p>
          </div>
        </header>

        <div className="admin-content" style={{ padding: '0 2rem 2rem' }}>
          {/* Navigation Filter Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            <button 
              onClick={() => setActiveTab('All')}
              style={{ 
                padding: '0.65rem 1.25rem', 
                borderRadius: '8px', 
                border: 'none', 
                cursor: 'pointer', 
                fontWeight: 600, 
                fontSize: '0.9rem',
                backgroundColor: activeTab === 'All' ? '#0f172a' : '#f1f5f9', 
                color: activeTab === 'All' ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease'
              }}
            >
              All Applications
            </button>
            <button 
              onClick={() => setActiveTab('Placement Preparation')}
              style={{ 
                padding: '0.65rem 1.25rem', 
                borderRadius: '8px', 
                border: 'none', 
                cursor: 'pointer', 
                fontWeight: 600, 
                fontSize: '0.9rem',
                backgroundColor: activeTab === 'Placement Preparation' ? '#0f172a' : '#f1f5f9', 
                color: activeTab === 'Placement Preparation' ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease'
              }}
            >
              Placement Ready
            </button>
            <button 
              onClick={() => setActiveTab('Internship Preparation')}
              style={{ 
                padding: '0.65rem 1.25rem', 
                borderRadius: '8px', 
                border: 'none', 
                cursor: 'pointer', 
                fontWeight: 600, 
                fontSize: '0.9rem',
                backgroundColor: activeTab === 'Internship Preparation' ? '#0f172a' : '#f1f5f9', 
                color: activeTab === 'Internship Preparation' ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease'
              }}
            >
              Internship Ready
            </button>
          </div>

          {loading ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              <p>Loading applications...</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', border: '1px solid #e2e8f0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>Date</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>Name</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>Contact</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>Education</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>Program</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>Fee</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>UTR Number</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem' }}>Status</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem', textAlign: 'center' }}>Comments</th>
                    <th style={{ padding: '1rem', color: '#475569', fontWeight: 600, fontSize: '0.85rem', textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {queries.map(query => (
                    <tr key={query._id} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: query.status === 'Approved' ? '#f0fdf4' : 'transparent', transition: 'background-color 0.2s ease' }}>
                      <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                        {new Date(query.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td style={{ padding: '1rem', fontWeight: 600, color: '#0f172a', fontSize: '0.9rem' }}>
                        {query.fullName}
                      </td>
                      <td style={{ padding: '1rem', fontSize: '0.85rem' }}>
                        <div>
                          <a href={`mailto:${query.email}`} style={{ textDecoration: 'none', color: '#2563eb', fontWeight: 500 }}>
                            {query.email}
                          </a>
                        </div>
                        <div style={{ color: '#64748b', marginTop: '2px' }}>
                          <a href={`tel:${query.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {query.phone}
                          </a>
                        </div>
                      </td>
                      <td style={{ padding: '1rem', color: '#475569', fontSize: '0.85rem' }}>
                        <div style={{ fontWeight: 500, color: '#1e293b' }}>{query.university}</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px' }}>{query.currentYear}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ 
                          display: 'inline-block', 
                          background: query.areaOfInterest === 'Placement Preparation' ? '#ede9fe' : '#e0e7ff', 
                          color: query.areaOfInterest === 'Placement Preparation' ? '#6d28d9' : '#4338ca', 
                          padding: '0.25rem 0.55rem', 
                          borderRadius: '6px', 
                          fontSize: '0.82rem', 
                          fontWeight: '600' 
                        }}>
                          {query.areaOfInterest === 'Placement Preparation' ? 'Placement Ready' : (query.areaOfInterest === 'Internship Preparation' ? 'Internship Ready' : query.areaOfInterest)}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', color: '#0f172a', fontWeight: 600, fontSize: '0.85rem' }}>
                        {query.feeAmount || '-'}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        {query.utrNumber ? (
                          <div 
                            onClick={() => handleCopyUtr(query.utrNumber, query._id)}
                            style={{ 
                              display: 'inline-flex', 
                              alignItems: 'center', 
                              gap: '6px', 
                              fontFamily: 'monospace', 
                              background: '#f1f5f9', 
                              padding: '0.25rem 0.55rem', 
                              borderRadius: '6px',
                              fontSize: '0.82rem',
                              color: '#1e293b',
                              cursor: 'pointer',
                              border: '1px solid #e2e8f0'
                            }}
                            title="Click to copy UTR Number"
                          >
                            <span>{query.utrNumber}</span>
                            {copiedUtrId === query._id ? (
                              <Check size={12} color="#16a34a" />
                            ) : (
                              <Copy size={12} color="#94a3b8" />
                            )}
                          </div>
                        ) : (
                          <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>-</span>
                        )}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <select 
                          value={query.status || 'Pending'} 
                          onChange={(e) => handleStatusChange(query._id, e.target.value)}
                          style={{ 
                            padding: '0.3rem 0.6rem', 
                            borderRadius: '6px', 
                            border: `1px solid ${query.status === 'Approved' ? '#86efac' : query.status === 'Rejected' ? '#fca5a5' : '#cbd5e1'}`,
                            backgroundColor: query.status === 'Approved' ? '#dcfce7' : query.status === 'Rejected' ? '#fee2e2' : '#f8fafc',
                            color: query.status === 'Approved' ? '#166534' : query.status === 'Rejected' ? '#991b1b' : '#475569',
                            fontWeight: 600,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            outline: 'none'
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
                            background: '#eef2ff', 
                            border: '1px solid #c7d2fe', 
                            borderRadius: '6px',
                            color: '#4f46e5', 
                            padding: '0.35rem 0.65rem',
                            cursor: 'pointer',
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.35rem',
                            fontSize: '0.82rem',
                            fontWeight: '600',
                            transition: 'all 0.2s ease'
                          }}
                          title="Open Comments Modal"
                        >
                          <MessageCircle size={15} />
                          <span>{query.comments?.length || 0}</span>
                        </button>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <button 
                          onClick={() => handleDelete(query._id)}
                          style={{ 
                            background: '#fef2f2', 
                            border: '1px solid #fee2e2', 
                            borderRadius: '6px', 
                            color: '#ef4444', 
                            padding: '0.35rem 0.5rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          title="Delete application"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {queries.length === 0 && (
                    <tr>
                      <td colSpan="10" style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                        No applications found in this section.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Unified 90vh Admin Comment Modal */}
          <AdminCommentModal 
            isOpen={isModalOpen}
            onClose={() => { setIsModalOpen(false); setActiveQuery(null); }}
            item={activeQuery}
            type="foundation"
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
      </main>
    </div>
  );
}
