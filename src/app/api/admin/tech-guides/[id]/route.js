import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import TechGuide from '../../../../../models/TechGuide';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function DELETE(req, { params }) {
  try {
    const resolvedParams = await params;
    await connectToDatabase();
    await TechGuide.findByIdAndDelete(resolvedParams.id);
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
    const updatedData = await TechGuide.findByIdAndUpdate(resolvedParams.id, body, { new: true });
    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
