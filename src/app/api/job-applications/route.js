import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import JobApplication from '../../../models/JobApplication';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function POST(req) {
  try {
    await connectToDatabase();
    
    const data = await req.json();
    
    const newApplication = new JobApplication(data);
    await newApplication.save();

    return NextResponse.json({ success: true, data: newApplication }, { status: 201 });
  } catch (error) {
    console.error('Error submitting job application:', error);
    return NextResponse.json(
      { message: 'Failed to submit application', error: error.message },
      { status: 500 }
    );
  }
}
