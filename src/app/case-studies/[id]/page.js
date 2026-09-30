import { notFound } from 'next/navigation';
import mongoose from 'mongoose';
import CaseStudy from '../../../models/CaseStudy';
import CaseStudyClient from './CaseStudyClient';

export const revalidate = 600;

async function getCaseStudy(id) {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let study = null;
  // Handle both ObjectId and custom numeric IDs (from static data)
  if (mongoose.Types.ObjectId.isValid(id)) {
    study = await CaseStudy.findById(id).lean();
  } else {
    // If it's a numeric ID migrated from static or something else, we could handle it here,
    // but seeded data uses Mongoose _id for everything.
    // However, our old static data used 1, 2, 3...
    // If users visit /case-studies/1 it might fail unless we migrated it perfectly.
    // The seed script gave them new ObjectIds. 
  }
  
  if (!study) return null;
  return { ...study, _id: study._id.toString(), id: study._id.toString() };
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const study = await getCaseStudy(resolvedParams.id);
  
  if (!study) {
    return { title: 'Case Study Not Found | Oxavyn' };
  }

  return {
    title: `${study.title} | Case Studies | Oxavyn`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const study = await getCaseStudy(resolvedParams.id);

  if (!study) {
    notFound();
  }

  return <CaseStudyClient study={study} />;
}
