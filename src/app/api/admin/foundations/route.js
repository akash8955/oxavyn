import { NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import FoundationApplication from '@/models/FoundationApplication';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    await connectMongo();
    
    const url = new URL(req.url);
    const type = url.searchParams.get('type');
    
    let query = {};
    if (type) {
      query.areaOfInterest = type;
    }

    const applications = await FoundationApplication.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: applications });
  } catch (error) {
    console.error('Error in GET /api/admin/foundations:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
