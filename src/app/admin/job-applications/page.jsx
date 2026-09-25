"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Trash2, FileText } from 'lucide-react';

export default function JobApplicationsAdmin() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Comment Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeApp, setActiveApp] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch('/api/admin/job-applications', { cache: 'no-store' });
      const data = await res.json();
      if (data.success) {
        setApplications(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch job applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/admin/job-applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setApplications(apps => apps.map(app => app._id === id ? { ...app, status: newStatus } : app));
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job application?')) return;
    
    try {
      const res = await fetch(`/api/admin/job-applications/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setApplications(apps => apps.filter(app => app._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete application:', error);
    }
  };

  const openCommentModal = (app) => {
    setActiveApp(app);
    setNewComment('');
    setIsModalOpen(true);
  };

  const handleAddComment = async () => {
    if (!newComment.trim() || !activeApp) return;

    try {
      const res = await fetch(`/api/admin/job-applications/${activeApp._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: newComment })
      });
      const data = await res.json();
      
      if (data.success) {
        setApplications(apps => apps.map(app => app._id === activeApp._id ? data.data : app));
        setActiveApp(data.data);
        setNewComment('');
      }
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '100%', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <Link href="/admin" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
        &larr; Back to Dashboard
      </Link>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#1e293b' }}>Job Applications</h1>
      </div>

      {loading ? (
        <p>Loading applications...</p>
      ) : (
        <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}>
          <table style={{ width: 'max-content', minWidth: '100%', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid #e2e8f0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                <th style={thStyle}>S.No</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Job Role</th>
                <th style={thStyle}>Full Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Mobile</th>
                <th style={thStyle}>Resume</th>
                <th style={thStyle}>Experience Level</th>
                <th style={thStyle}>Total Exp (Yrs)</th>
                <th style={thStyle}>Current/Prev Co.</th>
                <th style={thStyle}>Skills</th>
                <th style={thStyle}>Qualification</th>
                <th style={thStyle}>Degree/Course</th>
                <th style={thStyle}>College</th>
                <th style={thStyle}>Grad Year</th>
                <th style={thStyle}>City</th>
                <th style={thStyle}>State</th>
                <th style={thStyle}>Notice Period</th>
                <th style={thStyle}>Why Join Us</th>
                <th style={thStyle}>Why Suitable</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Comments</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app._id} style={{ backgroundColor: app.status === 'Selected' ? '#f0fdf4' : app.status === 'Rejected' ? '#fef2f2' : 'transparent' }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{new Date(app.createdAt).toLocaleDateString()}</td>
                  <td style={tdStyle}><strong>{app.jobTitle}</strong></td>
                  <td style={tdStyle}>{app.fullName}</td>
                  <td style={tdStyle}><a href={`mailto:${app.email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{app.email}</a></td>
                  <td style={tdStyle}>{app.mobile}</td>
                  <td style={tdStyle}>
                    <a href={app.resumeUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: '#8b5cf6', textDecoration: 'none', fontWeight: 500 }}>
                      <FileText size={16} /> View
                    </a>
                  </td>
                  <td style={tdStyle}>{app.experienceLevel}</td>
                  <td style={tdStyle}>{app.totalExperience || '-'}</td>
                  <td style={tdStyle}>{app.currentCompany || '-'}</td>
                  <td style={tdStyle}>{app.skills}</td>
                  <td style={tdStyle}>{app.highestQualification}</td>
                  <td style={tdStyle}>{app.degree}</td>
                  <td style={tdStyle}>{app.college}</td>
                  <td style={tdStyle}>{app.graduationYear}</td>
                  <td style={tdStyle}>{app.city}</td>
                  <td style={tdStyle}>{app.state}</td>
                  <td style={tdStyle}>{app.noticePeriod}</td>
                  <td style={{ ...tdStyle, maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis' }} title={app.whyJoin}>{app.whyJoin}</td>
                  <td style={{ ...tdStyle, maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis' }} title={app.whySuitable}>{app.whySuitable}</td>
                  <td style={tdStyle}>
                    <select 
                      value={app.status} 
                      onChange={(e) => handleStatusChange(app._id, e.target.value)}
                      style={{ 
                        padding: '0.4rem', 
                        borderRadius: '4px', 
                        border: '1px solid #cbd5e1',
                        backgroundColor: app.status === 'Pending' ? '#fef9c3' 
                                      : app.status === 'In Progress' ? '#e0f2fe'
                                      : app.status === 'Selected' ? '#dcfce3'
                                      : app.status === 'Rejected' ? '#fee2e2'
                                      : '#f1f5f9',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Selected">Selected</option>
                      <option value="Not Selected">Not Selected</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>
                    <button 
                      onClick={() => openCommentModal(app)}
                      style={{ background: 'none', border: 'none', color: '#6366f1', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      <MessageCircle size={18} />
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>({app.comments?.length || 0})</span>
                    </button>
                  </td>
                  <td style={{ ...tdStyle, textAlign: 'center' }}>
                    <button 
                      onClick={() => handleDelete(app._id)}
                      style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan="23" style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                    No job applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Comment Modal */}
      {isModalOpen && activeApp && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '600px', maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0 }}>Comments for {activeApp.fullName}</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748b' }}>&times;</button>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#f8fafc' }}>
              {activeApp.comments && activeApp.comments.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activeApp.comments.map((comment, index) => (
                    <div key={index} style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '6px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <p style={{ margin: '0 0 0.5rem 0', color: '#334155' }}>{comment.text}</p>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        {new Date(comment.timestamp).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ textAlign: 'center', color: '#94a3b8', margin: '2rem 0' }}>No comments yet.</p>
              )}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="text" 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a new comment..."
                style={{ flex: 1, padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none' }}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              />
              <button 
                onClick={handleAddComment}
                style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6366f1', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const thStyle = {
  padding: '1rem', 
  color: '#475569', 
  fontWeight: 600, 
  border: '1px solid #e2e8f0', 
  whiteSpace: 'nowrap'
};

const tdStyle = {
  padding: '1rem', 
  color: '#475569', 
  fontSize: '0.9rem', 
  border: '1px solid #e2e8f0', 
  whiteSpace: 'nowrap'
};
