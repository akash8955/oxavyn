import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Settings from '@/models/Settings';

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const key = searchParams.get('key');

    if (key) {
      const setting = await Settings.findOne({ key });
      return NextResponse.json({ success: true, setting });
    }

    const settings = await Settings.find({});
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Allow updating multiple settings at once if an array is passed, or just one
    if (Array.isArray(body)) {
      const results = [];
      for (const item of body) {
        const { key, value } = item;
        const updated = await Settings.findOneAndUpdate(
          { key },
          { value },
          { new: true, upsert: true }
        );
        results.push(updated);
      }
      return NextResponse.json({ success: true, settings: results });
    } else {
      const { key, value } = body;
      const updated = await Settings.findOneAndUpdate(
        { key },
        { value },
        { new: true, upsert: true }
      );
      return NextResponse.json({ success: true, setting: updated });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
