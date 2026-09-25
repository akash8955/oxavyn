const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src');

// 1. Model
const contactQueryModel = `import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  message: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved'], default: 'Pending' },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.ContactQuery || mongoose.model('ContactQuery', schema);
`;

fs.writeFileSync(path.join(baseDir, 'models/ContactQuery.js'), contactQueryModel);

// 2. Public POST API
const publicApi = `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ContactQuery from '../../../models/ContactQuery';

export async function POST(req) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const body = await req.json();
    const newData = await ContactQuery.create(body);
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}`;

fs.mkdirSync(path.join(baseDir, 'app/api/contact-queries'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/contact-queries/route.js'), publicApi);

// 3. Admin APIs
const adminApiRoute = `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ContactQuery from '../../../../models/ContactQuery';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const data = await ContactQuery.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
`;

const adminApiIdRoute = `import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ContactQuery from '../../../../../models/ContactQuery';

export async function DELETE(req, { params }) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const resolvedParams = await params;
    await ContactQuery.findByIdAndDelete(resolvedParams.id);
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
    
    // Check if adding a comment
    if (body.newComment) {
      const updatedData = await ContactQuery.findByIdAndUpdate(
        resolvedParams.id, 
        { $push: { comments: { text: body.newComment } } }, 
        { new: true }
      );
      return NextResponse.json({ success: true, data: updatedData });
    }
    
    // Otherwise update status
    const updatedData = await ContactQuery.findByIdAndUpdate(
      resolvedParams.id, 
      { status: body.status }, 
      { new: true }
    );
    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}`;

fs.mkdirSync(path.join(baseDir, 'app/api/admin/contact-queries/[id]'), { recursive: true });
fs.writeFileSync(path.join(baseDir, 'app/api/admin/contact-queries/route.js'), adminApiRoute);
fs.writeFileSync(path.join(baseDir, 'app/api/admin/contact-queries/[id]/route.js'), adminApiIdRoute);

console.log('Contact Query models and APIs created.');
