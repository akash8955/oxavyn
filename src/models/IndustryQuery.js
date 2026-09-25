import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const schema = new mongoose.Schema({
  industryCategory: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  organizationName: { type: String, required: true },
  organizationType: { type: String, required: true },
  teamSize: { type: String },
  interests: [{ type: String }],
  challenge: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved'], default: 'Pending' },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.IndustryQuery || mongoose.model('IndustryQuery', schema);
