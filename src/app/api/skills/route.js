import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import SkillEnhancementApplication from '@/models/SkillEnhancementApplication';

export async function POST(req) {
  try {
    await connectMongo();
    const body = await req.json();

    const application = new SkillEnhancementApplication({
      fullName: body.fullName,
      email: body.email,
      university: body.university,
      graduationYear: body.graduationYear,
      currentSemester: body.currentSemester,
      program: body.program,
      utrNumber: body.utrNumber,
      status: 'Pending',
      comments: []
    });

    await application.save();

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error('Error in Skill Enhancement POST:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
