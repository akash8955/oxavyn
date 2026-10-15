import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import JobApplication from '@/models/JobApplication';

export const dynamic = 'force-dynamic';

export async function PATCH(req, { params }) {
  try {
    await connectMongo();
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    const updates = await req.json();

    let application = await JobApplication.findById(id);
    if (!application) {
      return NextResponse.json({ success: false, message: 'Application not found' }, { status: 404 });
    }

    if (updates.status) {
      application.status = updates.status;
    }

    if (updates.comment || updates.newComment) {
      const c = typeof updates.comment === 'object' ? updates.comment : (typeof updates.newComment === 'object' ? updates.newComment : { text: updates.comment || updates.newComment });
      application.comments.push({
        text: c.text || '',
        authorName: c.authorName || 'Admin',
        authorRole: c.authorRole || 'Admin',
        imageUrl: c.imageUrl || '',
        imageName: c.imageName || '',
        fileSize: c.fileSize || '',
        timestamp: new Date()
      });
    }

    await application.save();

    return NextResponse.json({ success: true, data: application });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectMongo();
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    
    const deleted = await JobApplication.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: 'Application not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Application deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export const PUT = PATCH;
