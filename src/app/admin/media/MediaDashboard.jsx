'use client';

import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { mediaStructure } from './mediaStructure';
import MediaTree from './MediaTree';
import MediaEditor from './MediaEditor';
import { Search, Filter, Image as ImageIcon, Video, Box, Database, Menu, X } from 'lucide-react';
import './MediaDashboard.css';

export default function MediaDashboard() {
  const [allMedia, setAllMedia] = useState([]);
  const [stats, setStats] = useState({ total: 0, images: 0, videos: 0, active: 0 });
  const [loading, setLoading] = useState(true);
  
  // Tree state
  const [selectedSlot, setSelectedSlot] = useState(null); // { page, section, title, type }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Search/Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPage, setFilterPage] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterPage !== 'All') params.append('page', filterPage);
      if (filterType !== 'All') params.append('mediaType', filterType.toLowerCase());
      if (searchQuery) params.append('search', searchQuery);

      const res = await fetch(`/api/admin/media?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to fetch media');
      
      const data = await res.json();
      setAllMedia(data.media);
      setStats(data.stats);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, [filterPage, filterType, searchQuery]);

  // Derived empty slots count based on the massive structure
  // Total expected slots = sum of all slots in mediaStructure
  const totalExpectedSlots = mediaStructure.reduce((acc, page) => {
    return acc + page.children.reduce((cAcc, section) => cAcc + (section.slots?.length || 0), 0);
  }, 0);
  const emptySlots = totalExpectedSlots - allMedia.length;

  return (
    <div className="media-dashboard-layout">
      <Toaster position="top-right" />
      
      {/* MOBILE NAV TOGGLE */}
      <div className="mobile-header desktop-hidden">
        <h2>Oxavyn Admin</h2>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="btn-icon">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="dashboard-content">
        {/* MAIN CONTENT AREA */}
        <div className="main-content">
          
          <div className="header-block">
            <h1>MEDIA MANAGEMENT</h1>
            <p className="text-gray">Manage all images and videos used across the Oxavyn website.</p>
          </div>

          {/* STATS ROW */}
          <div className="stats-row">
            <div className="stat-card">
              <Database size={20} className="stat-icon" />
              <div>
                <p>Total Media</p>
                <h3>{allMedia.length}</h3>
              </div>
            </div>
            <div className="stat-card">
              <ImageIcon size={20} className="stat-icon" />
              <div>
                <p>Images</p>
                <h3>{stats.images}</h3>
              </div>
            </div>
            <div className="stat-card">
              <Video size={20} className="stat-icon" />
              <div>
                <p>Videos</p>
                <h3>{stats.videos}</h3>
              </div>
            </div>
            <div className="stat-card">
              <Box size={20} className="stat-icon" />
              <div>
                <p>Empty Slots</p>
                <h3>{Math.max(0, emptySlots)}</h3>
              </div>
            </div>
          </div>

          {/* FILTERS */}
          <div className="filters-row">
            <div className="search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search media..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select value={filterPage} onChange={(e) => setFilterPage(e.target.value)} className="filter-select">
              <option value="All">All Pages</option>
              {mediaStructure.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
            </select>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="filter-select">
              <option value="All">All Types</option>
              <option value="Image">Image</option>
              <option value="Video">Video</option>
            </select>
          </div>

          {/* EDITOR AREA */}
          <div className="editor-container">
            {selectedSlot ? (
              <MediaEditor 
                slot={selectedSlot} 
                mediaList={allMedia} 
                onSuccess={fetchMedia} 
              />
            ) : (
              <div className="empty-state">
                <Box size={48} className="text-gray-light" />
                <h3>Select a media slot</h3>
                <p>Choose an item from the right-hand menu to view or upload media.</p>
              </div>
            )}
          </div>

        </div>

        {/* SIDEBAR TREE */}
        <div className={`sidebar-tree ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h3>Media Hierarchy</h3>
            <button className="desktop-hidden btn-icon" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="tree-scroll">
            <MediaTree 
              structure={mediaStructure} 
              mediaList={allMedia}
              selectedSlot={selectedSlot}
              onSelect={(slot) => {
                setSelectedSlot(slot);
                if (window.innerWidth < 1024) setIsMobileMenuOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
