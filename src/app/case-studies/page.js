import React from 'react';
import CaseStudiesClient from './CaseStudiesClient';

import mongoose from 'mongoose';
import CaseStudy from '../../models/CaseStudy';

export const metadata = {
  title: 'Case Studies & Transformations | Oxavyn',
  description: 'Explore how we engineer success for leading global enterprises through cutting-edge technology and strategic innovation.',
};
export const revalidate = 60;

async function getCaseStudies() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  const studies = await CaseStudy.find().sort({ createdAt: -1 }).lean();
  // Stringify the IDs
  return studies.map(s => ({
    ...s,
    _id: s._id.toString(),
    id: s._id.toString()
  }));
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return <CaseStudiesClient caseStudies={caseStudies} />;
}
