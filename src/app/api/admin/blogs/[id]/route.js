import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import mongoose from 'mongoose';
import Blog from '../../../../../models/Blog';

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function DELETE(req, { params }) {
  try {
    const resolvedParams = await params;
    await connectToDatabase();
    await Blog.findByIdAndDelete(resolvedParams.id);
    revalidatePath('/blog');
    revalidatePath('/blog/[id]', 'page');
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
    const updatedData = await Blog.findByIdAndUpdate(resolvedParams.id, body, { new: true });
    revalidatePath('/blog');
    revalidatePath('/blog/[id]', 'page');
    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
