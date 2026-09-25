import mongoose from 'mongoose';

const JobApplicationSchema = new mongoose.Schema({
  jobId: { type: String, required: true },
  jobTitle: { type: String, required: true },
  
  // Personal Details
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  
  // Address
  city: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: String },
  
  // Professional Info
  noticePeriod: { type: String, required: true },
  joiningDate: { type: String },
  
  // Education
  highestQualification: { type: String, required: true },
  degree: { type: String, required: true },
  specialization: { type: String },
  college: { type: String, required: true },
  graduationYear: { type: Number, required: true },
  percentage: { type: String, required: true },
  tenthPercentage: { type: String },
  twelfthPercentage: { type: String },
  
  // Experience
  experienceLevel: { type: String, required: true },
  totalExperience: { type: Number },
  currentCompany: { type: String },
  previousJobTitle: { type: String },
  employmentDuration: { type: String },
  internships: { type: String },
  skills: { type: String, required: true },
  
  // Attachments & Links
  resumeUrl: { type: String, required: true },
  linkedin: { type: String },
  github: { type: String },
  
  // Questionnaire
  whyJoin: { type: String, required: true },
  whySuitable: { type: String, required: true },
  
  // Admin fields
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Selected', 'Not Selected', 'Rejected'], 
    default: 'Pending' 
  },
  comments: [{
    text: String,
    timestamp: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.models.JobApplication || mongoose.model('JobApplication', JobApplicationSchema);
