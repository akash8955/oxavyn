import mongoose from 'mongoose';

const JobPostingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // e.g. Development, Design, Marketing
  location: { type: String, required: true }, // e.g. Remote, Jaipur, India
  experience: { type: String, required: true }, // e.g. 2-4 Years
  type: { type: String, default: 'Full-time' }, // e.g. Full-time, Part-time
  
  description: { type: String }, // General description
  detailedDescription: { type: String },
  
  responsibilities: [{ type: String }],
  requirements: [{ type: String }],
  technology: { type: String }
}, { timestamps: true });

export default mongoose.models.JobPosting || mongoose.model('JobPosting', JobPostingSchema);
