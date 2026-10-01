import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../../lib/db';
import Media from '../../../../../models/Media';

export const revalidate = 600;

export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    
    const resolvedParams = await params;
    const page = resolvedParams?.page ? decodeURIComponent(resolvedParams.page) : null;
    const section = resolvedParams?.section ? decodeURIComponent(resolvedParams.section) : null;
    
    console.log("Fetching media for:", { page, section }); // Trigger hot-reload


    if (!page || !section) {
      return NextResponse.json({ message: 'Page and section parameters are required' }, { status: 400 });
    }

    const mediaList = await Media.find({
      page: { $regex: new RegExp(`^${page}$`, 'i') },
      section: { $regex: new RegExp(`^${section}$`, 'i') },
      isActive: true
    }).sort({ order: 1 });
    
    return NextResponse.json({ media: mediaList });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch media', error: error.message }, { status: 500 });
  }
}
