"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import '../case-studies/CaseStudiesAdmin.css'; // Reusing CSS

export default function BlogsAdmin() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  
  const initialFormState = { title: '', category: '', date: new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'}), desc: '', content: '', image: '' };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch('/api/admin/blogs');
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this Blog?')) return;
    try {
      await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' });
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      ...initialFormState,
      ...item
    });
    setEditingId(item._id);
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
      
      if (file) {
        const sigRes = await fetch('/api/admin/upload-signature', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ folder: 'oxavyn/blogs' })
        });
        if (!sigRes.ok) throw new Error('Failed to get signature');
        const sigData = await sigRes.json();
        
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('api_key', sigData.apiKey);
        uploadFormData.append('timestamp', sigData.timestamp);
        uploadFormData.append('signature', sigData.signature);
        uploadFormData.append('folder', 'oxavyn/blogs');

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
        await fetch(`/api/admin/blogs/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalFormData)
        });
      } else {
        await fetch('/api/admin/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalFormData)
        });
      }
      setIsModalOpen(false);
      setEditingId(null);
      setFile(null);
      setFormData(initialFormState);
      fetchItems();
    } catch (err) {
      console.error(err);
      alert('Error saving: ' + err.message);
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
        <h1>Manage Blogs</h1>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Add New Blog</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="admin-cs-grid">
          {items.map(item => (
            <div key={item._id} className="admin-cs-card">
              
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.category} • {item.date}</p>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                <button className="btn-secondary" style={{ padding: '0.5rem 1rem', margin: 0, flex: 1 }} onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn-danger" style={{ flex: 1 }} onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          ))}
          {items.length === 0 && <p>No blogs found.</p>}
        </div>
      )}

      {isModalOpen && (
        <div className="admin-cs-modal">
          <div className="admin-cs-modal-content">
            <h2>{editingId ? 'Edit Blog' : 'Add New Blog'}</h2>
            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label>Title</label>
                <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Short Description (Paragraph)</label>
                <textarea required rows={3} value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Read Article Content (Full Text)</label>
                <textarea required rows={6} placeholder="Use double newlines for paragraphs" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
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

              <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                <button type="button" className="btn-secondary" onClick={() => { setIsModalOpen(false); setEditingId(null); setFile(null); setFormData(initialFormState); }} disabled={isUploading}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={isUploading}>
                  {isUploading ? 'Uploading & Saving...' : editingId ? 'Update Blog' : 'Save Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
