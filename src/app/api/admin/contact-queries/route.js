import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ContactQuery from '../../../../models/ContactQuery';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const data = await ContactQuery.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
