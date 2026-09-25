import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import CaseStudy from '../../../../../models/CaseStudy';

const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(MONGODB_URI);
}

export async function DELETE(req, { params }) {
  try {
    const resolvedParams = await params;
    await connectToDatabase();
    await CaseStudy.findByIdAndDelete(resolvedParams.id);
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
    const updatedStudy = await CaseStudy.findByIdAndUpdate(resolvedParams.id, body, { new: true });
    return NextResponse.json({ success: true, data: updatedStudy });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
