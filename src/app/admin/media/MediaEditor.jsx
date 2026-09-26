'use client';
import React, { useState } from 'react';
import { Upload, Trash2, Edit2, Link as LinkIcon, Info } from 'lucide-react';
import { toast } from 'react-hot-toast';
import UploadModal from './UploadModal';
import { getOptimizedImageUrl, getOptimizedVideoUrl } from '../../../lib/cloudinary-client';

export default function MediaEditor({ slot, mediaList, onSuccess }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Find the exact media document for this slot
  const existingMedia = mediaList.find(m => 
    m.page === slot.page && 
    m.section === slot.section && 
    m.title === slot.title
  );

  const handleDelete = async () => {
    if (!existingMedia) return;
    const confirm = window.confirm('Are you sure you want to delete this media? This will remove it from Cloudinary and the website.');
    if (!confirm) return;

    try {
      setIsDeleting(true);
      const res = await fetch(`/api/admin/media/${existingMedia._id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete media');
      
      toast.success('Media deleted successfully');
      onSuccess();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="media-editor">
      <div className="editor-header">
        <p className="breadcrumb">
          {slot.page} / {slot.section} / <span className="font-bold">{slot.title}</span>
        </p>
        <h2>{slot.title}</h2>
      </div>

      {!existingMedia ? (
        <div className="empty-media-card">
          <p>No media uploaded for this slot.</p>
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            <Upload size={16} style={{ marginRight: '8px' }} />
            Upload Media
          </button>
        </div>
      ) : (
        <div className="active-media-card">
          <div className="media-preview-container">
            {existingMedia.mediaType === 'video' ? (
              <video 
                src={getOptimizedVideoUrl(existingMedia.publicId || existingMedia.cloudinaryUrl) || existingMedia.cloudinaryUrl} 
                controls 
                autoPlay 
                muted 
                loop 
                className="media-preview"
              />
            ) : (
              <img 
                src={getOptimizedImageUrl(existingMedia.publicId || existingMedia.cloudinaryUrl, 400) || existingMedia.cloudinaryUrl} 
                alt={existingMedia.altText || existingMedia.title} 
                className="media-preview" 
              />
            )}
          </div>
          
          <div className="media-details">
            <div className="detail-item">
              <span className="label">Title:</span>
              <span className="value">{existingMedia.title}</span>
            </div>
            <div className="detail-item">
              <span className="label">Page:</span>
              <span className="value">{existingMedia.page}</span>
            </div>
            <div className="detail-item">
              <span className="label">Section:</span>
              <span className="value">{existingMedia.section}</span>
            </div>
            <div className="detail-item">
              <span className="label">Media Type:</span>
              <span className="value" style={{ textTransform: 'capitalize' }}>{existingMedia.mediaType}</span>
            </div>
            <div className="detail-item">
              <span className="label">Status:</span>
              <span className="value">
                {existingMedia.isActive ? (
                  <span className="badge badge-success">Active</span>
                ) : (
                  <span className="badge badge-error">Inactive</span>
                )}
              </span>
            </div>
            <div className="detail-item">
              <span className="label">Cloudinary URL:</span>
              <span className="value truncate">
                <a href={existingMedia.cloudinaryUrl} target="_blank" rel="noreferrer">
                  <LinkIcon size={14} style={{ marginRight: '4px', display: 'inline' }} />
                  {existingMedia.cloudinaryUrl}
                </a>
              </span>
            </div>
          </div>

          <div className="editor-actions">
            <button className="btn-secondary" onClick={() => setIsModalOpen(true)}>
              <Edit2 size={16} style={{ marginRight: '8px' }} />
              Update Media
            </button>
            <button className="btn-danger" onClick={handleDelete} disabled={isDeleting}>
              <Trash2 size={16} style={{ marginRight: '8px' }} />
              {isDeleting ? 'Deleting...' : 'Delete Media'}
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <UploadModal 
          slot={slot}
          existingMedia={existingMedia}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            onSuccess();
          }}
        />
      )}
    </div>
  );
}
