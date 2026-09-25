const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src');

// 1. Models
const blogModelContent = `import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  desc: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
`;
fs.writeFileSync(path.join(baseDir, 'models/Blog.js'), blogModelContent);

const techGuideModelContent = `import mongoose from 'mongoose';

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
`;
fs.writeFileSync(path.join(baseDir, 'models/TechGuide.js'), techGuideModelContent);

// 2. APIs
const makeApi = (modelName, modelPath) => {
  return `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ${modelName} from '${modelPath}';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function GET() {
  try {
    await connectToDatabase();
    const data = await ${modelName}.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const newData = await ${modelName}.create(body);
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
`;
};

const makeApiId = (modelName, modelPath) => {
  return `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ${modelName} from '${modelPath}';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function DELETE(req, { params }) {
  try {
    const resolvedParams = await params;
    await connectToDatabase();
    await ${modelName}.findByIdAndDelete(resolvedParams.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const resolvedParams = await params;
    await connectToDatabase();
    const body = await req.json();
    const updatedData = await ${modelName}.findByIdAndUpdate(resolvedParams.id, body, { new: true });
    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
`;
};

fs.mkdirSync(path.join(baseDir, 'app/api/admin/blogs/[id]'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/admin/blogs/route.js'), makeApi('Blog', '../../../../models/Blog'));
fs.writeFileSync(path.join(baseDir, 'app/api/admin/blogs/[id]/route.js'), makeApiId('Blog', '../../../../../models/Blog'));

fs.mkdirSync(path.join(baseDir, 'app/api/admin/tech-guides/[id]'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/admin/tech-guides/route.js'), makeApi('TechGuide', '../../../../models/TechGuide'));
fs.writeFileSync(path.join(baseDir, 'app/api/admin/tech-guides/[id]/route.js'), makeApiId('TechGuide', '../../../../../models/TechGuide'));

console.log('Models and APIs created.');
