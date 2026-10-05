import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import InternshipApplication from '@/models/InternshipApplication';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    await connectMongo();
    
    // Check if there's a filter in query string
    const url = new URL(req.url);
    const type = url.searchParams.get('type');
    
    let query = {};
    if (type) {
      query.internshipType = type;
    }

    const applications = await InternshipApplication.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: applications });
  } catch (error) {
    console.error('Error in GET /api/admin/internships:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
