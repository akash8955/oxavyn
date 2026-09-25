import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import ContactQuery from '../../../../../models/ContactQuery';

export async function DELETE(req, { params }) {
  try {
    if (mongoose.connection.readyState !== 1) await mongoose.connect(process.env.MONGODB_URI);
    const resolvedParams = await params;
    await ContactQuery.findByIdAndDelete(resolvedParams.id);
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
    
    // Check if adding a comment
    if (body.newComment) {
      const updatedData = await ContactQuery.findByIdAndUpdate(
        resolvedParams.id, 
        { $push: { comments: { text: body.newComment } } }, 
        { new: true }
      );
      return NextResponse.json({ success: true, data: updatedData });
    }
    
    // Otherwise update status
    const updatedData = await ContactQuery.findByIdAndUpdate(
      resolvedParams.id, 
      { status: body.status }, 
      { new: true }
    );
    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}