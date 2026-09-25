import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  program: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
  avatar: { type: String },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.models.StudentReview || mongoose.model('StudentReview', schema);
