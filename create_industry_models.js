const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src');

// 1. Model
const industryQueryModel = `import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const schema = new mongoose.Schema({
  industryCategory: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  organizationName: { type: String, required: true },
  organizationType: { type: String, required: true },
  interests: [{ type: String }],
  challenge: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved'], default: 'Pending' },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.IndustryQuery || mongoose.model('IndustryQuery', schema);
`;

fs.writeFileSync(path.join(baseDir, 'models/IndustryQuery.js'), industryQueryModel);

// 2. Public POST API
const publicApi = `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import IndustryQuery from '../../../models/IndustryQuery';

export async function POST(req) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const body = await req.json();
    const newData = await IndustryQuery.create(body);
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}`;

fs.mkdirSync(path.join(baseDir, 'app/api/industry-queries'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/industry-queries/route.js'), publicApi);

// 3. Admin APIs
const adminApiRoute = `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import IndustryQuery from '../../../../models/IndustryQuery';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const data = await IndustryQuery.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
`;

const adminApiIdRoute = `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import IndustryQuery from '../../../../../models/IndustryQuery';

export async function DELETE(req, { params }) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const resolvedParams = await params;
    await IndustryQuery.findByIdAndDelete(resolvedParams.id);
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
    
    if (body.newComment) {
      const updatedData = await IndustryQuery.findByIdAndUpdate(
        resolvedParams.id, 
        { $push: { comments: { text: body.newComment } } }, 
        { new: true }
      );
      return NextResponse.json({ success: true, data: updatedData });
    }
    
    const updatedData = await IndustryQuery.findByIdAndUpdate(
      resolvedParams.id, 
      { status: body.status }, 
      { new: true }
    );
    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}`;

fs.mkdirSync(path.join(baseDir, 'app/api/admin/industry-queries/[id]'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/admin/industry-queries/route.js'), adminApiRoute);
fs.writeFileSync(path.join(baseDir, 'app/api/admin/industry-queries/[id]/route.js'), adminApiIdRoute);

console.log('Industry Query models and APIs created.');
