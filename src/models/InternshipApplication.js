import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, default: '' },
  authorName: { type: String, default: 'Admin' },
  authorRole: { type: String, default: 'Admin' },
  imageUrl: { type: String, default: '' },
  imageName: { type: String, default: '' },
  fileSize: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now }
});

const internshipApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  university: { type: String, required: true },
  graduationYear: { type: String, required: true },
  currentSemester: { type: String, required: true },
  internshipType: { type: String, required: true }, // "Live Project Internship" or "Stipend-Based Internship"
  domain: { type: String, required: true },
  duration: { type: String }, // For Project
  utrNumber: { type: String }, // For Project
  resumeUrl: { type: String }, // For Stipend
  status: { type: String, default: 'Pending' },
  comments: [commentSchema]
}, { timestamps: true });

if (mongoose.models.InternshipApplication) {
  delete mongoose.models.InternshipApplication;
}

export default mongoose.model('InternshipApplication', internshipApplicationSchema);
