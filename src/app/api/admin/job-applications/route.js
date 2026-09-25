import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import JobApplication from '../../../../models/JobApplication';

export const dynamic = 'force-dynamic';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function GET() {
  try {
    await connectToDatabase();
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: applications }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
