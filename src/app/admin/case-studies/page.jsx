"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import './CaseStudiesAdmin.css';

export default function CaseStudiesAdmin() {
  const [studies, setStudies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  
  // Form State
  const initialFormState = {
    title: '', client: '', industry: '', summary: '', image: '', fullContent: '',
    metrics: [{ label: '', value: '' }, { label: '', value: '' }, { label: '', value: '' }]
  };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchStudies();
  }, []);

  const fetchStudies = async () => {
    try {
      const res = await fetch('/api/admin/case-studies');
      const data = await res.json();
      if (data.success) setStudies(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this Case Study?')) return;
    try {
      await fetch(`/api/admin/case-studies/${id}`, { method: 'DELETE' });
      fetchStudies();
    } catch (err) {
      console.error(err);
    }
  };

  const handleMetricChange = (index, field, value) => {
    const newMetrics = [...formData.metrics];
    newMetrics[index][field] = value;
    setFormData({ ...formData, metrics: newMetrics });
  };

  const handleEdit = (study) => {
    // Ensure metrics have at least 3 elements for the form
    const formMetrics = [...study.metrics];
    while (formMetrics.length < 3) {
      formMetrics.push({ label: '', value: '' });
    }
    setFormData({
      title: study.title || '',
      client: study.client || '',
      industry: study.industry || '',
      summary: study.summary || '',
      image: study.image || '',
      fullContent: study.fullContent || '',
      metrics: formMetrics.slice(0, 3)
    });
    setEditingId(study._id);
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsUploading(true);
      let imageUrl = formData.image;
      
      // Upload to Cloudinary if new file selected
      if (file) {
        const sigRes = await fetch('/api/admin/upload-signature', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ folder: 'oxavyn/case-studies' })
        });
        if (!sigRes.ok) throw new Error('Failed to get signature');
        const sigData = await sigRes.json();
        
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('api_key', sigData.apiKey);
        uploadFormData.append('timestamp', sigData.timestamp);
        uploadFormData.append('signature', sigData.signature);
        uploadFormData.append('folder', 'oxavyn/case-studies');

        const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${sigData.cloudName}/auto/upload`, {
          method: 'POST',
          body: uploadFormData
        });
        if (!cloudRes.ok) throw new Error('Cloudinary upload failed');
        const cloudData = await cloudRes.json();
        imageUrl = cloudData.secure_url;
      }

      const finalFormData = { ...formData, image: imageUrl };

      if (editingId) {
        await fetch(`/api/admin/case-studies/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalFormData)
        });
      } else {
        await fetch('/api/admin/case-studies', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalFormData)
        });
      }
      setIsModalOpen(false);
      setEditingId(null);
      setFile(null);
      setFormData(initialFormState);
      fetchStudies();
    } catch (err) {
      console.error(err);
      alert('Error saving case study: ' + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="admin-cs-container">
      <Link href="/admin" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
        <ArrowLeft size={18} /> Back to Dashboard
      </Link>
      
      <div className="admin-cs-header">
        <h1>Manage Case Studies</h1>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Add New Case Study</button>
      </div>

      {loading ? (
        <p>Loading case studies...</p>
      ) : (
        <div className="admin-cs-grid">
          {studies.map(study => (
            <div key={study._id} className="admin-cs-card">
              <img src={study.image} alt={study.title} />
              <h3>{study.title}</h3>
              <p>{study.client} • {study.industry}</p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                <button className="btn-secondary" style={{ padding: '0.5rem 1rem', margin: 0, flex: 1 }} onClick={() => handleEdit(study)}>Edit</button>
                <button className="btn-danger" style={{ flex: 1 }} onClick={() => handleDelete(study._id)}>Delete</button>
              </div>
            </div>
          ))}
          {studies.length === 0 && <p>No case studies found.</p>}
        </div>
      )}

      {isModalOpen && (
        <div className="admin-cs-modal">
          <div className="admin-cs-modal-content">
            <h2>{editingId ? 'Edit Case Study' : 'Add New Case Study'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Client</label>
                <input required value={formData.client} onChange={e => setFormData({...formData, client: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Industry</label>
                <input required value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Image Upload</label>
                <input type="file" accept="image/*" onChange={handleFileChange} required={!editingId && !formData.image} />
                {formData.image && !file && (
                  <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>
                    Current Image: <a href={formData.image} target="_blank" rel="noreferrer">View</a>
                  </p>
                )}
                {file && <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Selected: {file.name}</p>}
              </div>
              
              <label style={{ fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>Metrics (Label / Value)</label>
              {[0, 1, 2].map(i => (
                <div key={i} className="metric-group">
                  <input placeholder="Label (e.g. Revenue)" value={formData.metrics[i].label} onChange={e => handleMetricChange(i, 'label', e.target.value)} />
                  <input placeholder="Value (e.g. +300%)" value={formData.metrics[i].value} onChange={e => handleMetricChange(i, 'value', e.target.value)} />
                </div>
              ))}

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label>Short Summary</label>
                <textarea required rows={3} value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Full Content (View Full Case Study)</label>
                <textarea required rows={6} placeholder="Write the full content here. Use double newlines for paragraphs." value={formData.fullContent} onChange={e => setFormData({...formData, fullContent: e.target.value})} />
              </div>

              <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                <button type="button" className="btn-secondary" onClick={() => { setIsModalOpen(false); setEditingId(null); setFile(null); setFormData(initialFormState); }} disabled={isUploading}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={isUploading}>
                  {isUploading ? 'Uploading & Saving...' : editingId ? 'Update Case Study' : 'Save Case Study'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
