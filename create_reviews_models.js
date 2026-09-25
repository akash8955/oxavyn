const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src');

// 1. Models
const studentReviewModel = `import mongoose from 'mongoose';
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
`;

const clientStoryModel = `import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  clientName: { type: String, required: true },
  industry: { type: String, required: true },
  title: { type: String, required: true },
  metrics: [{ type: String }],
  contactName: { type: String },
  email: { type: String },
  description: { type: String, required: true },
  logo: { type: String },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.models.ClientStory || mongoose.model('ClientStory', schema);
`;

fs.writeFileSync(path.join(baseDir, 'models/StudentReview.js'), studentReviewModel);
fs.writeFileSync(path.join(baseDir, 'models/ClientStory.js'), clientStoryModel);

// 2. Public POST APIs (for users submitting)
const makePublicApi = (modelName, modelPath) => `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ${modelName} from '${modelPath}';

export async function POST(req) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const body = await req.json();
    const newData = await ${modelName}.create(body);
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}`;

fs.mkdirSync(path.join(baseDir, 'app/api/student-reviews'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/student-reviews/route.js'), makePublicApi('StudentReview', '../../../models/StudentReview'));

fs.mkdirSync(path.join(baseDir, 'app/api/client-stories'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/client-stories/route.js'), makePublicApi('ClientStory', '../../../models/ClientStory'));

// 3. Admin APIs
const makeAdminApi = (modelName, modelPath) => `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ${modelName} from '${modelPath}';

export async function GET() {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const data = await ${modelName}.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const body = await req.json();
    const newData = await ${modelName}.create(body);
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}`;

const makeAdminApiId = (modelName, modelPath) => `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ${modelName} from '${modelPath}';

export async function DELETE(req, { params }) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const resolvedParams = await params;
    await ${modelName}.findByIdAndDelete(resolvedParams.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const resolvedParams = await params;
    const body = await req.json();
    const updatedData = await ${modelName}.findByIdAndUpdate(resolvedParams.id, body, { new: true });
    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}`;

fs.mkdirSync(path.join(baseDir, 'app/api/admin/student-reviews/[id]'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/admin/student-reviews/route.js'), makeAdminApi('StudentReview', '../../../../models/StudentReview'));
fs.writeFileSync(path.join(baseDir, 'app/api/admin/student-reviews/[id]/route.js'), makeAdminApiId('StudentReview', '../../../../../models/StudentReview'));

fs.mkdirSync(path.join(baseDir, 'app/api/admin/client-stories/[id]'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/admin/client-stories/route.js'), makeAdminApi('ClientStory', '../../../../models/ClientStory'));
fs.writeFileSync(path.join(baseDir, 'app/api/admin/client-stories/[id]/route.js'), makeAdminApiId('ClientStory', '../../../../../models/ClientStory'));

console.log('Models and APIs created successfully.');
