import { NextResponse } from 'next/server';
import cloudinary from '../../../../lib/cloudinary';

export async function POST(req) {
  try {
    const { folder } = await req.json();
    const timestamp = Math.round((new Date).getTime() / 1000);
    
    const paramsToSign = {
      timestamp,
    };
    
    if (folder) {
      paramsToSign.folder = folder;
    }

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign, 
      process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET
    );

    return NextResponse.json({
      timestamp,
      signature,
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY
    });
  } catch (error) {
    return NextResponse.json({ message: 'Signature generation failed', error: error.message }, { status: 500 });
  }
}
