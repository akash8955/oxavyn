import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: String,
  timestamp: { type: Date, default: Date.now }
});

const foundationApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  university: { type: String, required: true },
  currentYear: { type: String, required: true },
  areaOfInterest: { type: String, required: true }, // "Placement Preparation" or "Internship Preparation"
  message: { type: String },
  status: { type: String, default: 'Pending' },
  comments: [commentSchema]
}, { timestamps: true });

export default mongoose.models.FoundationApplication || mongoose.model('FoundationApplication', foundationApplicationSchema);
