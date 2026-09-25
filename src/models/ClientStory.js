import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  clientName: { type: String, required: true },
  industry: { type: String, required: true },
  title: { type: String, required: true },
  metrics: [{ type: String }],
  contactName: { type: String },
  email: { type: String },
  description: { type: String, required: true },
  logo: { type: String },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.models.ClientStory || mongoose.model('ClientStory', schema);
