import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../../lib/db';
import Media from '../../../../../models/Media';
import cloudinary from '../../../../../lib/cloudinary';

export async function PUT(req, { params }) {
  try {
    await connectToDatabase();
    
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    if (!id) return NextResponse.json({ message: 'Media ID required' }, { status: 400 });

    const data = await req.json();
    
    const existingMedia = await Media.findById(id);
    if (!existingMedia) {
      return NextResponse.json({ message: 'Media not found' }, { status: 404 });
    }

    if (data.publicId && existingMedia.publicId && data.publicId !== existingMedia.publicId) {
      try {
        const resourceType = existingMedia.mediaType === 'video' ? 'video' : 'image';
        await cloudinary.uploader.destroy(existingMedia.publicId, { resource_type: resourceType });
      } catch (cloudErr) {
        console.error('Failed to delete old cloudinary asset:', cloudErr);
      }
    }

    const updatedMedia = await Media.findByIdAndUpdate(id, data, { new: true });
    
    return NextResponse.json({ message: 'Media updated successfully', media: updatedMedia });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update media', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    if (!id) return NextResponse.json({ message: 'Media ID required' }, { status: 400 });

    const media = await Media.findById(id);
    if (!media) {
      return NextResponse.json({ message: 'Media not found' }, { status: 404 });
    }

    if (media.publicId) {
      try {
        const resourceType = media.mediaType === 'video' ? 'video' : 'image';
        await cloudinary.uploader.destroy(media.publicId, { resource_type: resourceType });
      } catch (cloudErr) {
        console.error('Failed to delete cloudinary asset:', cloudErr);
      }
    }

    await Media.findByIdAndDelete(id);
    
    return NextResponse.json({ message: 'Media deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to delete media', error: error.message }, { status: 500 });
  }
}
