import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import TechGuide from '../../../../models/TechGuide';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectToDatabase();
    const data = await TechGuide.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const newData = await TechGuide.create(body);
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
