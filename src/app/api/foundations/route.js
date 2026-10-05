import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import FoundationApplication from '@/models/FoundationApplication';

export async function POST(req) {
  try {
    await connectMongo();
    const body = await req.json();
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'university', 'currentYear', 'areaOfInterest'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ success: false, message: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const application = new FoundationApplication(body);
    await application.save();

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully', data: application });
  } catch (error) {
    console.error('Error in POST /api/foundations:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
