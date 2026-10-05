import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import InternshipApplication from '@/models/InternshipApplication';

export async function PUT(req, { params }) {
  try {
    await connectMongo();
    const body = await req.json();
    const { id } = params;

    const updateData = {};
    if (body.status) updateData.status = body.status;
    
    // Using $push to add a comment if provided
    let updateOperation = { $set: updateData };
    if (body.newComment) {
      updateOperation.$push = {
        comments: { text: body.newComment, timestamp: new Date() }
      };
    }

    const application = await InternshipApplication.findByIdAndUpdate(id, updateOperation, { new: true });
    
    if (!application) {
      return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: application });
  } catch (error) {
    console.error('Error in PUT /api/admin/internships/[id]:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectMongo();
    const { id } = params;

    const deleted = await InternshipApplication.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/admin/internships/[id]:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
