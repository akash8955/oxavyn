import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import InternshipApplication from '@/models/InternshipApplication';

export async function POST(req) {
  try {
    await connectMongo();
    const body = await req.json();
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'university', 'graduationYear', 'currentSemester', 'internshipType', 'domain'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ success: false, message: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const application = new InternshipApplication(body);
    await application.save();

    return NextResponse.json({ success: true, message: 'Application submitted successfully', data: application });
  } catch (error) {
    console.error('Error in POST /api/internships:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
