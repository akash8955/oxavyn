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

const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  service: { type: String },
  message: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved'], default: 'Pending' },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now }
});

if (mongoose.models.ContactQuery) {
  delete mongoose.models.ContactQuery;
}

export default mongoose.model('ContactQuery', schema);
