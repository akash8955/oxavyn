import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import JobPosting from '../../../../../models/JobPosting';

export const dynamic = 'force-dynamic';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    await JobPosting.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
export async function PUT(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    const data = await req.json();
    
    const updatedJob = await JobPosting.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    
    if (!updatedJob) {
      return NextResponse.json({ success: false, message: 'Job not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: updatedJob });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
