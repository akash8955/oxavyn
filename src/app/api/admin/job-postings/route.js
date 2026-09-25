import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import JobPosting from '../../../../models/JobPosting';

export const dynamic = 'force-dynamic';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function GET() {
  try {
    await connectToDatabase();
    const jobs = await JobPosting.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: jobs }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const newJob = new JobPosting(data);
    await newJob.save();
    return NextResponse.json({ success: true, data: newJob }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
