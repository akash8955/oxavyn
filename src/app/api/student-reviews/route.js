import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import StudentReview from '../../../models/StudentReview';

export async function POST(req) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const body = await req.json();
    const newData = await StudentReview.create(body);
    return NextResponse.json({ success: true, data: newData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}