import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import JobPosting from '@/models/JobPosting';

export const dynamic = 'force-dynamic';

export async function DELETE(req, { params }) {
  try {
    await connectMongo();
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    const deleted = await JobPosting.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: 'Job not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectMongo();
    const resolvedParams = await params;
    const id = resolvedParams?.id;
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
