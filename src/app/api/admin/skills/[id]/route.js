import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import SkillEnhancementApplication from '@/models/SkillEnhancementApplication';

export async function PUT(req, { params }) {
  try {
    await connectMongo();
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    const body = await req.json();

    const updateOperation = {};
    if (body.status) {
      updateOperation.$set = { status: body.status };
    }
    
    if (body.newComment || body.comment) {
      const c = typeof body.newComment === 'object' ? body.newComment : (typeof body.comment === 'object' ? body.comment : { text: body.newComment || body.comment });
      updateOperation.$push = {
        comments: {
          text: c.text || '',
          authorName: c.authorName || 'Admin',
          authorRole: c.authorRole || 'Admin',
          imageUrl: c.imageUrl || '',
          imageName: c.imageName || '',
          fileSize: c.fileSize || '',
          timestamp: new Date()
        }
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
    const resolvedParams = await params;
    const id = resolvedParams?.id;

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
