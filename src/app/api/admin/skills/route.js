import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import SkillEnhancementApplication from '@/models/SkillEnhancementApplication';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    await connectMongo();
    const items = await SkillEnhancementApplication.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, items });
  } catch (error) {
    console.error('Error fetching skill enhancement applications:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PUT(req) {
  try {
    await connectMongo();
    const body = await req.json();
    const { id, status, comment } = body;

    const application = await SkillEnhancementApplication.findById(id);
    if (!application) {
      return NextResponse.json({ success: false, error: 'Application not found' }, { status: 404 });
    }

    if (status) {
      application.status = status;
    }

    if (comment && comment.trim() !== '') {
      application.comments.push({ text: comment, timestamp: new Date() });
    }

    await application.save();

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error('Error updating skill enhancement application:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
