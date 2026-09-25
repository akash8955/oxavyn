import mongoose from 'mongoose';

const techGuideSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  readTime: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String }, // For individual guide page
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.TechGuide || mongoose.model('TechGuide', techGuideSchema);
