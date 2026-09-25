import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import CaseStudy from '../../../../models/CaseStudy';

const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(MONGODB_URI);
}

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectToDatabase();
    const studies = await CaseStudy.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: studies });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const newStudy = await CaseStudy.create(body);
    return NextResponse.json({ success: true, data: newStudy });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
