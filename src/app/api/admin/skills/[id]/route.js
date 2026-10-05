import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import SkillEnhancementApplication from '@/models/SkillEnhancementApplication';

export async function PUT(req, { params }) {
  try {
    await connectMongo();
    const body = await req.json();
    const { id } = params;

    const updateData = {};
    if (body.status) updateData.status = body.status;
    
    let updateOperation = { $set: updateData };
    if (body.newComment) {
      updateOperation.$push = {
        comments: { text: body.newComment, timestamp: new Date() }
      };
    }

    const application = await SkillEnhancementApplication.findByIdAndUpdate(id, updateOperation, { new: true });
    
    if (!application) {
      return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: application });
  } catch (error) {
    console.error('Error in PUT /api/admin/skills/[id]:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectMongo();
    const { id } = params;

    const deleted = await SkillEnhancementApplication.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/admin/skills/[id]:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
