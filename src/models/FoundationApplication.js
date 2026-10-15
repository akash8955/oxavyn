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

const foundationApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  university: { type: String, required: true },
  currentYear: { type: String, required: true },
  areaOfInterest: { type: String, required: true }, // "Placement Preparation" or "Internship Preparation"
  utrNumber: { type: String, default: '' },
  feeAmount: { type: String, default: '' },
  message: { type: String },
  status: { type: String, default: 'Pending' },
  comments: [commentSchema]
}, { timestamps: true });

if (mongoose.models.FoundationApplication) {
  delete mongoose.models.FoundationApplication;
}

export default mongoose.model('FoundationApplication', foundationApplicationSchema);
