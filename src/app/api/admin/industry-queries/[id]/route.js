import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import IndustryQuery from '../../../../../models/IndustryQuery';

export async function DELETE(req, { params }) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const resolvedParams = await params;
    await IndustryQuery.findByIdAndDelete(resolvedParams.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const resolvedParams = await params;
    const body = await req.json();
    
    if (body.newComment || body.comment) {
      const c = typeof body.newComment === 'object' ? body.newComment : (typeof body.comment === 'object' ? body.comment : { text: body.newComment || body.comment });
      const updatedData = await IndustryQuery.findByIdAndUpdate(
        resolvedParams.id, 
        { $push: { comments: {
          text: c.text || '',
          authorName: c.authorName || 'Admin',
          authorRole: c.authorRole || 'Admin',
          imageUrl: c.imageUrl || '',
          imageName: c.imageName || '',
          fileSize: c.fileSize || '',
          timestamp: new Date()
        } } }, 
        { new: true }
      );
      return NextResponse.json({ success: true, data: updatedData });
    }
    
    const updatedData = await IndustryQuery.findByIdAndUpdate(
      resolvedParams.id, 
      { status: body.status }, 
      { new: true }
    );
    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}