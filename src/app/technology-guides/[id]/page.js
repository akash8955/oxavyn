import { notFound } from 'next/navigation';
import mongoose from 'mongoose';
import TechGuide from '../../../models/TechGuide';
import TechGuideArticleClient from './TechGuideArticleClient';

export const revalidate = 60;

async function getGuide(id) {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let guide = null;
  if (mongoose.Types.ObjectId.isValid(id)) {
    guide = await TechGuide.findById(id).lean();
  }
  
  if (!guide) return null;
  return { ...guide, _id: guide._id.toString(), id: guide._id.toString() };
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const guide = await getGuide(resolvedParams.id);
  
  if (!guide) {
    return { title: 'Guide Not Found | Oxavyn' };
  }

  return {
    title: `${guide.title} | Technology Guides | Oxavyn`,
    description: guide.description,
  };
}

export default async function TechGuideArticlePage({ params }) {
  const resolvedParams = await params;
  const guide = await getGuide(resolvedParams.id);

  if (!guide) {
    notFound();
  }

  return <TechGuideArticleClient guide={guide} />;
}
