/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Hash, 
  MoreHorizontal, 
  Image as ImageIcon, 
  Paperclip, 
  Loader2 
} from 'lucide-react';
import './AdminCommentModal.css';

export default function AdminCommentModal({ 
  isOpen, 
  onClose, 
  item, 
  type = 'contact', 
  onCommentAdded,
  onStatusChange 
}) {
  const [adminName, setAdminName] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('oxavyn_admin_comment_name') || 'Admin (Riya)';
    }
    return 'Admin (Riya)';
  });
  const [commentText, setCommentText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [commentFilter, setCommentFilter] = useState('All');
  const [comments, setComments] = useState(item?.comments || []);
  
  const isSubmittingRef = useRef(false);
  const fileInputRef = useRef(null);
  const commentsEndRef = useRef(null);

  const formatFileSize = (bytes) => {
    if (!bytes) return '1.0 MB';
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setFilePreview(url);
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    if (filePreview) {
      URL.revokeObjectURL(filePreview);
      setFilePreview(null);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Sync comments with item.comments whenever item prop updates
  useEffect(() => {
    if (item?.comments) {
      setComments(item.comments);
    } else {
      setComments([]);
    }
  }, [item?._id, item?.comments]);

  // Reset form when modal closes or active item changes
  useEffect(() => {
    if (!isOpen) {
      setCommentText('');
      removeSelectedFile();
    }
  }, [isOpen, item?._id]);

  // Scroll to bottom of comments when new comment arrives or modal opens
  useEffect(() => {
    if (isOpen && commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, comments.length]);

  // Handle Admin Name Change
  const handleAdminNameChange = (e) => {
    const val = e.target.value;
    setAdminName(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem('oxavyn_admin_comment_name', val);
    }
  };

  // Profile data extraction based on entity type
  const getName = () => {
    if (!item) return 'User';
    if (type === 'contact') {
      const n = `${item.firstName || ''} ${item.lastName || ''}`.trim();
      return n || item.fullName || 'User';
    }
    return item.fullName || item.name || 'User';
  };

  const getRole = () => {
    if (!item) return 'Applicant';
    switch (type) {
      case 'contact':
        return item.service ? `${item.service} Inquiry` : (item.company ? `${item.company} Inquiry` : 'Website Inquiry');
      case 'industry':
        return `${item.industryCategory || 'Industry'} Partner • ${item.organizationType || 'Organization'}`;
      case 'job':
        return `Applicant • ${item.jobTitle || 'Career Opportunity'}`;
      case 'internship':
        return `Student • ${item.internshipType || 'Internship'}${item.domain ? ` (${item.domain})` : ''}`;
      case 'skill':
        return `Student • ${item.program || 'Skill Enhancement'}`;
      case 'foundation':
        return `Student • ${item.areaOfInterest || item.foundationType || item.program || 'Foundation Course'}`;
      default:
        return 'Applicant';
    }
  };

  const getLocation = () => {
    if (!item) return 'India';
    if (type === 'job') {
      return item.city ? `${item.city}${item.state ? `, ${item.state}` : ''}` : 'India';
    }
    if (type === 'contact') {
      return item.company || 'India';
    }
    if (type === 'industry') {
      return item.organizationName || 'Corporate Client';
    }
    return item.university || 'University Student';
  };

  const getRefId = () => {
    if (!item) return 'REF000000';
    const prefixes = {
      contact: 'CON',
      industry: 'IND',
      job: 'JOB',
      internship: 'INT',
      skill: 'STU',
      foundation: 'FND'
    };
    const prefix = prefixes[type] || 'REF';
    return `${prefix}${item._id ? item._id.slice(-7).toUpperCase() : '001248'}`;
  };

  const getRegisteredDate = () => {
    if (!item.createdAt) return 'Recent';
    try {
      return new Date(item.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return 'Recent';
    }
  };

  // Handle Submit Comment
  const handleSendComment = async (e) => {
    if (e) e.preventDefault();
    if (isSubmittingRef.current || isSubmitting) return;
    if (!commentText.trim() && !selectedFile) return;

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    let uploadedImageUrl = '';
    let uploadedImageName = '';
    let uploadedFileSize = '';

    try {
      // 1. Upload to Cloudinary if file exists
      if (selectedFile) {
        uploadedImageName = selectedFile.name;
        uploadedFileSize = formatFileSize(selectedFile.size);

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('folder', 'oxavyn/comments');

        const uploadRes = await fetch('/api/admin/upload-cloudinary', {
          method: 'POST',
          body: formData
        });

        if (!uploadRes.ok) throw new Error('Cloudinary upload failed');
        const uploadData = await uploadRes.json();
        uploadedImageUrl = uploadData.secure_url || '';
      }

      // 2. Prepare payload
      const commentPayload = {
        text: commentText.trim(),
        authorName: adminName.trim() || 'Admin (Riya)',
        authorRole: 'Admin',
        imageUrl: uploadedImageUrl,
        imageName: uploadedImageName,
        fileSize: uploadedFileSize,
        timestamp: new Date().toISOString()
      };

      // 3. Determine endpoint
      let endpoint = '';
      let method = 'PUT';

      if (type === 'contact') {
        endpoint = `/api/admin/contact-queries/${item._id}`;
      } else if (type === 'industry') {
        endpoint = `/api/admin/industry-queries/${item._id}`;
      } else if (type === 'job') {
        endpoint = `/api/admin/job-applications/${item._id}`;
        method = 'PATCH';
      } else if (type === 'internship') {
        endpoint = `/api/admin/internships/${item._id}`;
      } else if (type === 'skill') {
        endpoint = `/api/admin/skills/${item._id}`;
      } else if (type === 'foundation') {
        endpoint = `/api/admin/foundations/${item._id}`;
      }

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newComment: commentPayload,
          comment: commentPayload
        })
      });

      const resData = await res.json();
      if (resData.success) {
        const updatedDoc = resData.data || resData.application;
        const freshComments = updatedDoc?.comments || [...comments, commentPayload];

        // Update local comments directly
        setComments(freshComments);

        // Reset input state
        setCommentText('');
        removeSelectedFile();

        // Notify parent
        if (onCommentAdded) {
          onCommentAdded(updatedDoc || { ...item, comments: freshComments });
        }
      } else {
        alert(resData.message || resData.error || 'Failed to post comment.');
      }
    } catch (err) {
      console.error('Error posting comment:', err);
      alert('Failed to send comment. Please try again.');
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  // Initial user message from query/application
  const initialUserMessage = item ? (item.message || item.challenge || item.whySuitable || item.whyJoin || 
    (item.program ? `Interested in ${item.program} Program. UTR: ${item.utrNumber || 'Pending'}` : '') ||
    (item.domain ? `Applied for ${item.domain} internship.` : '')) : '';

  // Deduplicate comments to guarantee only 1 message per comment
  const uniqueComments = [];
  const seenComments = new Set();
  for (const c of comments) {
    const key = c._id ? String(c._id) : `${c.authorName || ''}_${c.text || ''}_${c.imageUrl || ''}`;
    if (!seenComments.has(key)) {
      seenComments.add(key);
      uniqueComments.push(c);
    }
  }

  // Filtered comments
  const allDisplayComments = [
    ...(initialUserMessage ? [{
      _id: 'initial_msg',
      authorName: getName(),
      authorRole: 'User',
      text: initialUserMessage,
      timestamp: item?.createdAt || new Date(),
      isInitial: true
    }] : []),
    ...uniqueComments
  ];

  const filteredComments = allDisplayComments.filter(c => {
    const isUserMessage = c.isInitial === true || c.authorRole === 'User';
    if (commentFilter === 'Admin') return !isUserMessage;
    if (commentFilter === 'User') return isUserMessage;
    return true;
  });

  const statusClass = (item?.status || 'Active').toLowerCase().replace(/\s+/g, '-');

  if (!isOpen || !item) return null;

  return (
    <>
      <div className="acm-overlay" onClick={onClose}>
        <div className="acm-window" onClick={e => e.stopPropagation()}>
          
          {/* Top Right Close Button */}
          <button 
            className="acm-close-btn" 
            onClick={onClose} 
            title="Close window"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="acm-body">
            
            {/* 1. TOP PROFILE / USER CARD */}
            <div className="acm-profile-card">
              <div className="acm-profile-left">
                {item.avatarUrl ? (
                  <img src={item.avatarUrl} alt={getName()} className="acm-avatar" />
                ) : (
                  <div className="acm-avatar-fallback">
                    {getName().charAt(0).toUpperCase()}
                  </div>
                )}
                
                <div className="acm-profile-info">
                  <div className="acm-profile-header-row">
                    <h2 className="acm-profile-name">{getName()}</h2>
                    <span className={`acm-status-pill ${statusClass}`}>
                      <span className="acm-status-dot"></span>
                      {item.status || 'Active'}
                    </span>
                  </div>
                  
                  <p className="acm-profile-role">{getRole()}</p>
                  
                  <div className="acm-profile-meta-row">
                    <span className="acm-meta-item">
                      <Mail size={14} /> {item.email || 'No email provided'}
                    </span>
                    <span className="acm-divider">|</span>
                    <span className="acm-meta-item">
                      <Phone size={14} /> {item.phone || item.contactNumber || '+91 98765 43210'}
                    </span>
                    <span className="acm-divider">|</span>
                    <span className="acm-meta-item">
                      <MapPin size={14} /> {getLocation()}
                    </span>
                  </div>

                  <div className="acm-profile-meta-row" style={{ marginTop: '5px' }}>
                    <span className="acm-meta-item">
                      <Hash size={13} /> Student/Ref ID: {getRefId()}
                    </span>
                    <span className="acm-divider">|</span>
                    <span className="acm-meta-item">
                      <Calendar size={13} /> Registered: {getRegisteredDate()}
                    </span>
                    <span className="acm-divider">|</span>
                    <span className="acm-meta-item" style={{ color: '#64748b' }}>
                      Last active: 2 hours ago
                    </span>
                  </div>
                </div>
              </div>

              <div className="acm-profile-actions">
                <button 
                  className="acm-btn-secondary"
                  onClick={() => {
                    const newStatus = prompt('Update Status (e.g. Active, Approved, Pending, Rejected):', item.status || 'Active');
                    if (newStatus && onStatusChange) onStatusChange(newStatus);
                  }}
                >
                  Edit Status
                </button>
                <button className="acm-btn-icon" title="More options">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>

            {/* 2. COMMENTS SECTION */}
            <div className="acm-comments-card">
              <div className="acm-comments-header">
                <h3 className="acm-comments-title">
                  Comments ({uniqueComments.length})
                </h3>
                <select 
                  className="acm-comments-filter"
                  value={commentFilter}
                  onChange={e => setCommentFilter(e.target.value)}
                >
                  <option value="All">All Comments</option>
                  <option value="Admin">Admin Comments</option>
                  <option value="User">User Messages</option>
                </select>
              </div>

              {/* Comments Scrollable Area */}
              <div className="acm-comments-list">
                {filteredComments.length > 0 ? (
                  filteredComments.map((c, index) => {
                    const isUserMessage = c.isInitial === true || c.authorRole === 'User';
                    const isAdmin = !isUserMessage;
                    const isWarmAdmin = isAdmin && index % 2 === 0;

                    const authorDisplayName = isAdmin 
                      ? (c.authorName && c.authorName.trim() ? c.authorName : (adminName.trim() || 'Admin'))
                      : (c.authorName || getName());

                    let formattedDate = 'Recent';
                    try {
                      formattedDate = new Date(c.timestamp).toLocaleString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      });
                    } catch {}

                    return (
                      <div key={c._id || index} className="acm-comment-item">
                        {isAdmin ? (
                          <div className="acm-comment-avatar-fallback acm-comment-avatar-admin">
                            {authorDisplayName.charAt(0).toUpperCase()}
                          </div>
                        ) : (
                          <div className="acm-comment-avatar-fallback acm-comment-avatar-user">
                            {getName().charAt(0).toUpperCase()}
                          </div>
                        )}

                        <div className={`acm-comment-bubble ${isAdmin ? (isWarmAdmin ? 'admin-comment-highlight' : 'admin-comment') : 'user-comment'}`}>
                          <div className="acm-comment-top">
                            <div className="acm-comment-meta">
                              <span className="acm-comment-author">{authorDisplayName}</span>
                              {isAdmin ? (
                                <span className="acm-admin-tag">Admin</span>
                              ) : (
                                <span className="acm-role-tag user" style={{ fontSize: '0.68rem', padding: '1px 6px', borderRadius: '4px', background: '#e0f2fe', color: '#0369a1', fontWeight: 700 }}>User</span>
                              )}
                              <span className="acm-divider">|</span>
                              <span className="acm-comment-time">{formattedDate}</span>
                            </div>
                            <button className="acm-comment-menu-btn" title="Options">
                              <MoreHorizontal size={16} />
                            </button>
                          </div>

                          {c.text && (
                            <p className="acm-comment-text">{c.text}</p>
                          )}

                          {/* Inline Attached Image Display */}
                          {c.imageUrl && (
                            <div className="acm-comment-image-section">
                              <div 
                                className="acm-comment-image-wrap"
                                onClick={() => setPreviewImage(c.imageUrl)}
                                title="Click to view full image (50vw × 50vh)"
                                role="button"
                                tabIndex={0}
                              >
                                <img 
                                  src={c.imageUrl} 
                                  alt={c.imageName || 'Comment attachment'} 
                                  className="acm-comment-inline-img" 
                                />
                                <div className="acm-comment-image-badge">
                                  <ImageIcon size={14} />
                                  <span>Click to view (50vw × 50vh)</span>
                                </div>
                              </div>
                              <div className="acm-comment-image-caption">
                                <span className="acm-attachment-name">{c.imageName || 'Attached_Image.jpg'}</span>
                                {c.fileSize && <span className="acm-attachment-size">({c.fileSize})</span>}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="acm-no-comments">
                    No comments found in this category.
                  </div>
                )}
                <div ref={commentsEndRef} />
              </div>

              {/* 3. COMMENT INPUT BAR */}
              <div className="acm-footer">
                <div className="acm-admin-bar">
                  <div className="acm-admin-input-wrap">
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>Admin Name:</span>
                    <input 
                      type="text" 
                      value={adminName} 
                      onChange={handleAdminNameChange}
                      className="acm-admin-name-input"
                      placeholder="e.g. Akash or Admin (Riya)"
                    />
                  </div>
                  {isSubmitting && (
                    <span style={{ color: '#2563eb', fontSize: '0.8rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <Loader2 size={14} className="animate-spin" /> Uploading image to Cloudinary & saving...
                    </span>
                  )}
                </div>

                {/* Selected File Chip */}
                {selectedFile && (
                  <div className="acm-file-preview-chip">
                    {filePreview && (
                      <img src={filePreview} alt="Preview" className="acm-file-preview-thumb" />
                    )}
                    <span className="acm-file-preview-name">{selectedFile.name} ({formatFileSize(selectedFile.size)})</span>
                    <button type="button" onClick={removeSelectedFile} className="acm-file-preview-remove" title="Remove attachment">
                      <X size={14} />
                    </button>
                  </div>
                )}

                {/* Input Row */}
                <form onSubmit={handleSendComment} className="acm-input-row">
                  <div className="acm-action-icons">
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileSelect} 
                      accept="image/*" 
                      style={{ display: 'none' }} 
                    />
                    <button 
                      type="button" 
                      className="acm-icon-btn" 
                      onClick={() => fileInputRef.current?.click()}
                      title="Attach Image"
                    >
                      <ImageIcon size={20} />
                    </button>
                    <button 
                      type="button" 
                      className="acm-icon-btn" 
                      onClick={() => fileInputRef.current?.click()}
                      title="Attach File"
                    >
                      <Paperclip size={20} />
                    </button>
                  </div>

                  <input 
                    type="text"
                    className="acm-text-input"
                    placeholder="Type your comment here..."
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    disabled={isSubmitting}
                  />

                  <button 
                    type="submit" 
                    className="acm-send-btn"
                    disabled={isSubmitting || (!commentText.trim() && !selectedFile)}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Comment</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* 4. IMAGE VIEWER MODAL (50vw x 50vh with close button) */}
      {previewImage && (
        <div className="acm-img-overlay" onClick={() => setPreviewImage(null)}>
          <div className="acm-img-window" onClick={e => e.stopPropagation()}>
            <button 
              className="acm-img-close-btn" 
              onClick={() => setPreviewImage(null)}
              title="Close image preview"
              aria-label="Close image"
            >
              <X size={20} />
            </button>
            <img 
              src={previewImage} 
              alt="Enlarged attachment" 
              className="acm-img-preview" 
            />
          </div>
        </div>
      )}
    </>
  );
}
