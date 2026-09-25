import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema({
  page: { type: String, required: true },
  section: { type: String, required: true },
  subsection: { type: String },
  title: { type: String, required: true },
  mediaType: { type: String, enum: ['image', 'video'], required: true },
  cloudinaryUrl: { type: String, required: true },
  publicId: { type: String, required: true },
  resourceType: { type: String },
  format: { type: String },
  thumbnailUrl: { type: String },
  altText: { type: String },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.Media || mongoose.model('Media', MediaSchema);
