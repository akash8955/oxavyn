import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const SkillEnhancementSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  university: { type: String, required: true },
  graduationYear: { type: String, required: true },
  currentSemester: { type: String, required: true },
  program: { type: String, required: true },
  utrNumber: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  comments: [commentSchema]
}, { timestamps: true });

export default mongoose.models.SkillEnhancementApplication || mongoose.model('SkillEnhancementApplication', SkillEnhancementSchema);
