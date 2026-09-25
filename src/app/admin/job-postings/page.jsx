"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trash2, Plus, Edit } from 'lucide-react';

export default function JobPostingsAdmin() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingJobId, setEditingJobId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    experience: '',
    type: 'Full-time',
    description: '',
    detailedDescription: '',
    responsibilities: '',
    requirements: '',
    technology: ''
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/admin/job-postings', { cache: 'no-store' });
      const data = await res.json();
      if (data.success) {
        setJobs(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch job postings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openModalForAdd = () => {
    setEditingJobId(null);
    setFormData({
      title: '', category: '', location: '', experience: '', type: 'Full-time',
      description: '', detailedDescription: '', responsibilities: '', requirements: '', technology: ''
    });
    setIsModalOpen(true);
  };

  const handleEdit = (job) => {
    setEditingJobId(job._id);
    setFormData({
      title: job.title || '',
      category: job.category || '',
      location: job.location || '',
      experience: job.experience || '',
      type: job.type || 'Full-time',
      description: job.description || '',
      detailedDescription: job.detailedDescription || '',
      responsibilities: job.responsibilities ? job.responsibilities.join('\n') : '',
      requirements: job.requirements ? job.requirements.join('\n') : '',
      technology: job.technology || ''
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Process comma separated lists
    const payload = {
      ...formData,
      responsibilities: formData.responsibilities.split('\n').filter(r => r.trim()),
      requirements: formData.requirements.split('\n').filter(r => r.trim())
    };

    try {
      const url = editingJobId ? `/api/admin/job-postings/${editingJobId}` : '/api/admin/job-postings';
      const method = editingJobId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      if (data.success) {
        if (editingJobId) {
          setJobs(jobs.map(j => j._id === editingJobId ? data.data : j));
        } else {
          setJobs([data.data, ...jobs]);
        }
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Failed to save job posting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job posting?')) return;
    try {
      const res = await fetch(`/api/admin/job-postings/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setJobs(jobs.filter(j => j._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete job posting:', error);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <Link href="/admin" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
        &larr; Back to Dashboard
      </Link>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#1e293b' }}>Job Postings</h1>
        <button 
          onClick={openModalForAdd}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#6366f1', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}
        >
          <Plus size={18} /> Add Job Posting
        </button>
      </div>

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {jobs.map(job => (
            <div key={job._id} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#1e293b', fontSize: '1.2rem' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                  <span>{job.category}</span>
                  <span>&bull;</span>
                  <span>{job.location}</span>
                  <span>&bull;</span>
                  <span>{job.experience}</span>
                </div>
                {!job.detailedDescription && (
                  <div style={{ marginTop: '0.5rem', display: 'inline-block', backgroundColor: '#fef3c7', color: '#92400e', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    No Detailed Description (Will show default "Not Hiring" message)
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={() => handleEdit(job)}
                  style={{ background: '#e0e7ff', color: '#4f46e5', border: 'none', padding: '0.75rem', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}
                  title="Edit Job"
                >
                  <Edit size={20} />
                </button>
                <button 
                  onClick={() => handleDelete(job._id)}
                  style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '0.75rem', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}
                  title="Delete Job"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          {jobs.length === 0 && <p style={{ textAlign: 'center', color: '#64748b' }}>No job postings found.</p>}
        </div>
      )}

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '700px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0 }}>{editingJobId ? 'Edit Job' : 'Add New Job'}</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#64748b' }}>&times;</button>
            </div>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Job Title *</label>
                  <input required name="title" value={formData.title} onChange={handleInputChange} style={inputStyle} placeholder="e.g. Full Stack Developer" />
                </div>
                <div>
                  <label style={labelStyle}>Category *</label>
                  <input required name="category" value={formData.category} onChange={handleInputChange} style={inputStyle} placeholder="e.g. Development" />
                </div>
                <div>
                  <label style={labelStyle}>Location *</label>
                  <input required name="location" value={formData.location} onChange={handleInputChange} style={inputStyle} placeholder="e.g. Jaipur, Rajasthan" />
                </div>
                <div>
                  <label style={labelStyle}>Experience *</label>
                  <input required name="experience" value={formData.experience} onChange={handleInputChange} style={inputStyle} placeholder="e.g. 2 - 4 Years" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Short Description (Optional)</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} style={{...inputStyle, minHeight: '60px'}} placeholder="Brief summary of the role..." />
              </div>

              <div>
                <label style={labelStyle}>Detailed Description (Optional - Leave blank to show "Not Hiring" message)</label>
                <textarea name="detailedDescription" value={formData.detailedDescription} onChange={handleInputChange} style={{...inputStyle, minHeight: '100px'}} placeholder="Full job description shown on application page..." />
              </div>

              <div>
                <label style={labelStyle}>Responsibilities (One per line)</label>
                <textarea name="responsibilities" value={formData.responsibilities} onChange={handleInputChange} style={{...inputStyle, minHeight: '100px'}} placeholder="- Write clean code&#10;- Participate in code reviews" />
              </div>

              <div>
                <label style={labelStyle}>Requirements (One per line)</label>
                <textarea name="requirements" value={formData.requirements} onChange={handleInputChange} style={{...inputStyle, minHeight: '100px'}} placeholder="- B.Tech in CS&#10;- 2+ years of React experience" />
              </div>

              <div>
                <label style={labelStyle}>Technology (Optional)</label>
                <input name="technology" value={formData.technology} onChange={handleInputChange} style={inputStyle} placeholder="e.g. React, Node.js, MongoDB" />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}>
                  Cancel
                </button>
                <button type="submit" disabled={isSubmitting} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6366f1', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}>
                  {isSubmitting ? 'Saving...' : 'Save Job'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const labelStyle = { display: 'block', marginBottom: '0.5rem', color: '#475569', fontSize: '0.9rem', fontWeight: 500 };
const inputStyle = { width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none', boxSizing: 'border-box' };
