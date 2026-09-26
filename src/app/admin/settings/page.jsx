'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Settings, Image as ImageIcon, Users, BarChart3, ShieldCheck, ChevronRight, Video, FileText, MessageSquare, Save, MapPin, Link as LinkIcon, Mail } from 'lucide-react';
import '../AdminDashboard.css';

export default function SettingsDashboard() {
  const [showStudentSections, setShowStudentSections] = useState(true);
  const [mapSettings, setMapSettings] = useState({
    title: 'HQ & STUDIO',
    subtitle: 'Oxavyn Gurugram',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0123456!2d77.085!3d28.502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195c8c5c5c5%3A0x1234567890abcdef!2sUdyog%20Vihar%20Phase%203%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin',
    mapLink: 'https://www.google.com/maps?q=416+Phase+III+Udyog+Vihar+Sector+20+Gurugram+Haryana+122008'
  });
  const [footerData, setFooterData] = useState({
    socials: {
      instagram: '#',
      linkedin: '#',
      whatsapp: '#',
      phone: '+1234567890'
    },
    reachUs: {
      supportEmail: 'support@oxavyn.com',
      salesEmail: 'sales@oxavyn.com',
      registeredOffice: '123 Innovation Drive, Tech Park Sector 5, New Delhi 110001, India',
      corporateOffice: 'Oxavyn HQ, Tower B, Level 15, Cyber City, Gurugram, Haryana 122002'
    }
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/settings');
        if (res.ok) {
          const data = await res.json();
          if (data.settings) {
            data.settings.forEach(setting => {
              if (setting.key === 'showStudentSections') setShowStudentSections(setting.value);
              if (setting.key === 'contact_map_location') setMapSettings(setting.value);
              if (setting.key === 'footer_data') setFooterData(setting.value);
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch settings", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      const payload = [
        { key: 'showStudentSections', value: showStudentSections },
        { key: 'contact_map_location', value: mapSettings },
        { key: 'footer_data', value: footerData }
      ];

      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setMessage('Settings saved successfully!');
      } else {
        setMessage('Failed to save settings.');
      }
    } catch (err) {
      console.error(err);
      setMessage('An error occurred.');
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleMapChange = (e) => {
    setMapSettings({...mapSettings, [e.target.name]: e.target.value});
  };

  const handleFooterSocialChange = (e) => {
    setFooterData({
      ...footerData,
      socials: { ...footerData.socials, [e.target.name]: e.target.value }
    });
  };

  const handleFooterReachChange = (e) => {
    setFooterData({
      ...footerData,
      reachUs: { ...footerData.reachUs, [e.target.name]: e.target.value }
    });
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
          <Link href="/admin/settings" className="nav-item active">
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
      <main className="admin-main" style={{ overflowY: 'auto' }}>
        <header className="admin-topbar">
          <div>
            <h1>Global Site Settings</h1>
            <p>Manage visibility and dynamic content sections on the main website.</p>
          </div>
        </header>

        <div className="admin-content" style={{ maxWidth: '800px', padding: '2rem' }}>
          {loading ? (
            <p>Loading settings...</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* SECTION 1: Features & Visibility */}
              <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Student & Review Pages</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Toggle the visibility of Student Internships, Skill Enhancement, Foundation, and Student Reviews in the navigation menu and routes.</p>
                  </div>
                  <label style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px', flexShrink: 0 }}>
                    <input type="checkbox" checked={showStudentSections} onChange={(e) => setShowStudentSections(e.target.checked)} style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: showStudentSections ? '#10b981' : '#cbd5e1', transition: '.4s', borderRadius: '34px' }}>
                      <span style={{ position: 'absolute', content: '""', height: '26px', width: '26px', left: showStudentSections ? '30px' : '4px', bottom: '4px', backgroundColor: 'white', transition: '.4s', borderRadius: '50%' }} />
                    </span>
                  </label>
                </div>
              </div>

              {/* SECTION 2: Contact Page Map */}
              <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={20} /> Contact Page Map Location</h3>
                
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem' }}>Map Overlay Title</label>
                    <input type="text" name="title" value={mapSettings.title} onChange={handleMapChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem' }}>Map Overlay Subtitle</label>
                    <input type="text" name="subtitle" value={mapSettings.subtitle} onChange={handleMapChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem' }}>Google Maps Iframe Embed URL (src)</label>
                    <input type="text" name="src" value={mapSettings.src} onChange={handleMapChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} placeholder="https://www.google.com/maps/embed?..." />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem' }}>Google Maps Redirect Link (for when clicked)</label>
                    <input type="text" name="mapLink" value={mapSettings.mapLink} onChange={handleMapChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} placeholder="https://maps.app.goo.gl/..." />
                  </div>
                </div>
              </div>

              {/* SECTION 3: Footer Data */}
              <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><LinkIcon size={20} /> Footer Data</h3>
                
                <h4 style={{ fontSize: '1rem', color: '#334155', marginBottom: '1rem' }}>Social Media Links</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>Instagram</label>
                    <input type="text" name="instagram" value={footerData.socials.instagram} onChange={handleFooterSocialChange} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>LinkedIn</label>
                    <input type="text" name="linkedin" value={footerData.socials.linkedin} onChange={handleFooterSocialChange} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>WhatsApp (Link)</label>
                    <input type="text" name="whatsapp" value={footerData.socials.whatsapp} onChange={handleFooterSocialChange} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>Phone (e.g. tel:+123456789)</label>
                    <input type="text" name="phone" value={footerData.socials.phone} onChange={handleFooterSocialChange} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0' }} />
                  </div>
                </div>

                <h4 style={{ fontSize: '1rem', color: '#334155', marginBottom: '1rem' }}>Reach Us At</h4>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>Support Email</label>
                      <input type="text" name="supportEmail" value={footerData.reachUs.supportEmail} onChange={handleFooterReachChange} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>Sales Email</label>
                      <input type="text" name="salesEmail" value={footerData.reachUs.salesEmail} onChange={handleFooterReachChange} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>Registered Office Address</label>
                    <textarea name="registeredOffice" value={footerData.reachUs.registeredOffice} onChange={handleFooterReachChange} rows={2} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0', resize: 'vertical' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>Corporate Office Address</label>
                    <textarea name="corporateOffice" value={footerData.reachUs.corporateOffice} onChange={handleFooterReachChange} rows={2} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0', resize: 'vertical' }} />
                  </div>
                </div>
              </div>

              {/* SAVE BUTTON */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', paddingBottom: '2rem' }}>
                {message && <span style={{ color: message.includes('success') ? '#10b981' : '#ef4444', fontWeight: '500' }}>{message}</span>}
                <button onClick={handleSave} disabled={saving} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#6366f1', color: '#fff', padding: '0.75rem 2rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
                  <Save size={18} />
                  {saving ? 'Saving...' : 'Save All Settings'}
                </button>
              </div>

            </div>
          )}
        </div>
      </main>
    </div>
  );
}
