const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src');

const makeAdminPage = (titleSingular, titlePlural, apiRoute, initialFormStateStr, formFieldsJsx, itemRenderJsx) => {
  return `"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import '../case-studies/CaseStudiesAdmin.css';

export default function ${titlePlural.replace(/\s+/g, '')}Admin() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);
  
  const initialFormState = ${initialFormStateStr};
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch('${apiRoute}');
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this ${titleSingular}?')) return;
    try {
      await fetch(\`${apiRoute}/\${id}\`, { method: 'DELETE' });
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

  const handleToggleApprove = async (item) => {
    try {
      await fetch(\`${apiRoute}/\${item._id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isApproved: !item.isApproved })
      });
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await fetch(\`${apiRoute}/\${editingId}\`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } else {
        await fetch('${apiRoute}', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...formData, isApproved: true})
        });
      }
      setIsModalOpen(false);
      setEditingId(null);
      setFormData(initialFormState);
      fetchItems();
    } catch (err) {
      console.error(err);
      alert('Error saving: ' + err.message);
    }
  };

  return (
    <div className="admin-cs-container">
      <Link href="/admin" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}>
        <ArrowLeft size={18} /> Back to Dashboard
      </Link>
      
      <div className="admin-cs-header">
        <h1>Manage ${titlePlural}</h1>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Add New ${titleSingular}</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="admin-cs-grid">
          {items.map(item => (
            <div key={item._id} className="admin-cs-card" style={{ border: item.isApproved ? '1px solid #10b981' : '1px solid #ef4444' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '12px', 
                  fontWeight: 'bold',
                  backgroundColor: item.isApproved ? '#d1fae5' : '#fee2e2',
                  color: item.isApproved ? '#065f46' : '#991b1b'
                }}>
                  {item.isApproved ? 'APPROVED' : 'PENDING'}
                </span>
                
                <button 
                  onClick={() => handleToggleApprove(item)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    color: item.isApproved ? '#ef4444' : '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  {item.isApproved ? <><XCircle size={16}/> Reject</> : <><CheckCircle size={16}/> Approve</>}
                </button>
              </div>

              ${itemRenderJsx}
              
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem' }}>
                <button className="btn-secondary" style={{ padding: '0.5rem 1rem', margin: 0, flex: 1 }} onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn-danger" style={{ flex: 1 }} onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          ))}
          {items.length === 0 && <p>No ${titlePlural.toLowerCase()} found.</p>}
        </div>
      )}

      {isModalOpen && (
        <div className="admin-cs-modal">
          <div className="admin-cs-modal-content">
            <h2>{editingId ? 'Edit ${titleSingular}' : 'Add New ${titleSingular}'}</h2>
            <form onSubmit={handleSubmit}>
              ${formFieldsJsx}

              <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                <button type="button" className="btn-secondary" onClick={() => { setIsModalOpen(false); setEditingId(null); setFormData(initialFormState); }}>Cancel</button>
                <button type="submit" className="btn-primary">
                  {editingId ? 'Update ${titleSingular}' : 'Save ${titleSingular}'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
`;
};

// 1. Student Reviews Admin
const srInitial = `{ name: '', role: '', program: 'Internship Program', rating: 5, text: '', avatar: '' }`;
const srForm = `
              <div className="form-group">
                <label>Name</label>
                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input required value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Program</label>
                <select value={formData.program} onChange={e => setFormData({...formData, program: e.target.value})}>
                  <option value="Internship Program">Internship Program</option>
                  <option value="Skill Enhancement">Skill Enhancement</option>
                  <option value="Foundational & Career">Foundational & Career</option>
                </select>
              </div>
              <div className="form-group">
                <label>Rating (1-5)</label>
                <input type="number" min="1" max="5" required value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} />
              </div>
              <div className="form-group">
                <label>Avatar (Initials)</label>
                <input value={formData.avatar} onChange={e => setFormData({...formData, avatar: e.target.value})} placeholder="e.g. AS" />
              </div>
              <div className="form-group">
                <label>Review Text</label>
                <textarea required rows={4} value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})} />
              </div>
`;
const srRender = `
              <h3>{item.name}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.role} • {item.program}</p>
              <div style={{ color: '#fbbf24', marginBottom: '0.5rem' }}>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>"{item.text}"</p>
`;

fs.mkdirSync(path.join(baseDir, 'app/admin/student-reviews'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/admin/student-reviews/page.jsx'), makeAdminPage('Student Review', 'Student Reviews', '/api/admin/student-reviews', srInitial, srForm, srRender));


// 2. Client Stories Admin
const csInitial = `{ clientName: '', industry: '', title: '', metrics: '', contactName: '', email: '', description: '', logo: '' }`;
const csForm = `
              <div className="form-group">
                <label>Company Name</label>
                <input required value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Industry</label>
                <input required value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Story Title</label>
                <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Metrics (Comma separated)</label>
                <input required value={Array.isArray(formData.metrics) ? formData.metrics.join(', ') : formData.metrics} onChange={e => setFormData({...formData, metrics: e.target.value.split(',').map(s => s.trim())})} />
              </div>
              <div className="form-group">
                <label>Submitter Name</label>
                <input value={formData.contactName} onChange={e => setFormData({...formData, contactName: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Submitter Email</label>
                <input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Company Logo (Initials)</label>
                <input value={formData.logo} onChange={e => setFormData({...formData, logo: e.target.value})} placeholder="e.g. NG" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea required rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>
`;
const csRender = `
              <h3>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.clientName} ({item.industry})</p>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem', color: '#6366f1' }}>Metrics: {item.metrics?.join(' | ')}</p>
              <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.5rem' }}>"{item.description}"</p>
              {(item.contactName || item.email) && (
                <div style={{ marginTop: '0.5rem', padding: '0.5rem', backgroundColor: '#f8fafc', borderRadius: '4px', fontSize: '0.8rem' }}>
                  <strong>Submitted by:</strong> {item.contactName} ({item.email})
                </div>
              )}
`;

fs.mkdirSync(path.join(baseDir, 'app/admin/client-stories'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/admin/client-stories/page.jsx'), makeAdminPage('Client Story', 'Client Stories', '/api/admin/client-stories', csInitial, csForm, csRender));

console.log('Admin UI created successfully.');
