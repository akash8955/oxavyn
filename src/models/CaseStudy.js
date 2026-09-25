import mongoose from 'mongoose';

const metricSchema = new mongoose.Schema({
  label: String,
  value: String
}, { _id: false });

const caseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  client: { type: String, required: true },
  industry: { type: String, required: true },
  metrics: [metricSchema],
  summary: { type: String, required: true },
  image: { type: String, required: true },
  fullContent: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.CaseStudy || mongoose.model('CaseStudy', caseStudySchema);
