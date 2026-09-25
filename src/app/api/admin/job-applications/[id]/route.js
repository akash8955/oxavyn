import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import JobApplication from '../../../../../models/JobApplication';

export const dynamic = 'force-dynamic';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function PATCH(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const updates = await req.json();

    let application = await JobApplication.findById(id);
    if (!application) {
      return NextResponse.json({ success: false, message: 'Application not found' }, { status: 404 });
    }

    if (updates.status) {
      application.status = updates.status;
    }

    if (updates.comment) {
      application.comments.push({ text: updates.comment });
    }

    await application.save();

    return NextResponse.json({ success: true, data: application });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    
    await JobApplication.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: 'Application deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
