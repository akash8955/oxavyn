import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/db';
import Media from '../../../../models/Media';

export async function GET(req) {
  try {
    await connectToDatabase();
    
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');
    const section = searchParams.get('section');
    const mediaType = searchParams.get('mediaType');
    const search = searchParams.get('search');
    
    let query = {};
    
    // Filtering logic
    if (page && page !== 'All') query.page = page;
    if (section && section !== 'All') query.section = section;
    if (mediaType && mediaType !== 'All') query.mediaType = mediaType;
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { page: { $regex: search, $options: 'i' } },
        { section: { $regex: search, $options: 'i' } },
      ];
    }

    const mediaList = await Media.find(query).sort({ page: 1, section: 1, order: 1 });
    
    // Stats
    const total = await Media.countDocuments();
    const images = await Media.countDocuments({ mediaType: 'image' });
    const videos = await Media.countDocuments({ mediaType: 'video' });
    const active = await Media.countDocuments({ isActive: true });
    
    return NextResponse.json({
      media: mediaList,
      stats: { total, images, videos, active }
    });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch media', error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();
    
    const data = await req.json();
    const newMedia = await Media.create(data);
    
    return NextResponse.json({ message: 'Media created successfully', media: newMedia }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create media', error: error.message }, { status: 500 });
  }
}
