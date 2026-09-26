'use client';
import React, { useState, useRef } from 'react';
import { X, UploadCloud, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function UploadModal({ slot, existingMedia, onClose, onSuccess }) {
  const [file, setFile] = useState(null);
  const [altText, setAltText] = useState(existingMedia?.altText || '');
  const [isActive, setIsActive] = useState(existingMedia ? existingMedia.isActive : true);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(existingMedia?.cloudinaryUrl || null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      // Create local preview
      const objectUrl = URL.createObjectURL(selected);
      setPreviewUrl(objectUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file && !existingMedia) {
      toast.error('Please select a file to upload');
      return;
    }

    try {
      setIsUploading(true);
      let newCloudinaryUrl = existingMedia?.cloudinaryUrl;
      let newPublicId = existingMedia?.publicId;

      // 1. Upload to Cloudinary if new file selected
      if (file) {
        toast.loading('Uploading to Cloudinary...', { id: 'upload' });
        const sanitizeForFolder = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const folderPath = `oxavyn/${sanitizeForFolder(slot.page)}/${sanitizeForFolder(slot.section)}`;
        // Strategy 1: Direct Frontend Upload (Fastest, avoids server memory/size limits)
        let cloudData;
        try {
          const sigRes = await fetch('/api/admin/upload-signature', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ folder: folderPath })
          });
          if (!sigRes.ok) throw new Error('Failed to get signature');
          const sigData = await sigRes.json();

          const directFormData = new FormData();
          directFormData.append('file', file);
          directFormData.append('api_key', sigData.apiKey);
          directFormData.append('timestamp', sigData.timestamp);
          directFormData.append('signature', sigData.signature);
          directFormData.append('folder', folderPath);

          const directRes = await fetch(`https://api.cloudinary.com/v1_1/${sigData.cloudName}/auto/upload`, {
            method: 'POST',
            body: directFormData
          });
          
          if (!directRes.ok) throw new Error(`Direct upload failed: ${directRes.statusText}`);
          cloudData = await directRes.json();
        } catch (err) {
          // If direct upload fails (usually due to Ad-blockers blocking api.cloudinary.com, or CORS)
          console.warn('Direct upload failed, falling back to secure backend proxy...', err);
          
          // Strategy 2: Backend Proxy Upload (Bypasses ad-blockers, but uses server memory)
          const proxyFormData = new FormData();
          proxyFormData.append('file', file);
          proxyFormData.append('folder', folderPath);

          const proxyRes = await fetch('/api/admin/upload-cloudinary', {
            method: 'POST',
            body: proxyFormData
          });

          if (!proxyRes.ok) {
            let errMsg = `Backend proxy upload failed (Status ${proxyRes.status})`;
            try {
              const errData = await proxyRes.json();
              if (errData.error) errMsg += ': ' + errData.error;
            } catch (e) {
              errMsg += ' - ' + proxyRes.statusText;
            }
            throw new Error(errMsg);
          }
          cloudData = await proxyRes.json();
        }

        newCloudinaryUrl = cloudData.secure_url;
        newPublicId = cloudData.public_id;
      }

      toast.loading('Saving media data...', { id: 'upload' });

      // 2. Save to MongoDB
      const payload = {
        page: slot.page,
        section: slot.section,
        title: slot.title,
        mediaType: slot.type,
        cloudinaryUrl: newCloudinaryUrl,
        publicId: newPublicId,
        altText,
        isActive
      };

      let dbRes;
      if (existingMedia) {
        dbRes = await fetch(`/api/admin/media/${existingMedia._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } else {
        dbRes = await fetch('/api/admin/media', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      }

      if (!dbRes.ok) throw new Error('Failed to save to database');
      
      toast.success(existingMedia ? 'Media updated successfully' : 'Media uploaded successfully', { id: 'upload' });
      onSuccess();
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'An error occurred', { id: 'upload' });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{existingMedia ? 'Update Media' : 'Upload Media'}</h3>
          <button onClick={onClose} className="btn-icon" disabled={isUploading}>
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-body">
          <p className="text-gray" style={{ marginBottom: '1.5rem' }}>
            Uploading for: <span className="font-bold">{slot.page} &gt; {slot.section} &gt; {slot.title}</span>
          </p>

          <div className="form-group">
            <label>Media File ({slot.type === 'image' ? 'Images' : 'Videos'} only)</label>
            <div 
              className="upload-dropzone" 
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: '2px dashed #e2e8f0',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
                cursor: 'pointer',
                background: '#f8fafc',
                marginBottom: '1rem'
              }}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept={slot.type === 'image' ? "image/*" : "video/*"}
                style={{ display: 'none' }}
              />
              {previewUrl ? (
                <div className="upload-preview" style={{ maxHeight: '200px', overflow: 'hidden' }}>
                  {slot.type === 'video' ? (
                    <video src={previewUrl} style={{ maxWidth: '100%', maxHeight: '200px' }} controls />
                  ) : (
                    <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }} />
                  )}
                  <p className="text-sm text-gray" style={{ marginTop: '0.5rem' }}>Click to change file</p>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <UploadCloud size={48} className="text-gray-light" style={{ margin: '0 auto 1rem auto' }} />
                  <p className="font-bold text-gray">Click to browse or drag and drop</p>
                  <p className="text-sm text-gray-light">
                    {slot.type === 'image' ? 'JPG, PNG, WEBP, SVG' : 'MP4, WEBM, MOV'}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Alt Text (Important for SEO & Accessibility)</label>
            <input 
              type="text" 
              className="form-input" 
              value={altText} 
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Describe the image/video content..."
            />
          </div>

          <div className="form-group checkbox-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={isActive} 
                onChange={(e) => setIsActive(e.target.checked)}
              />
              Active (Visible on website)
            </label>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose} disabled={isUploading}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={isUploading}>
              {isUploading ? (
                <><Loader2 size={16} className="spin" style={{ marginRight: '8px' }} /> Processing...</>
              ) : (
                existingMedia ? 'Update Media' : 'Upload Media'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
