export const metadata = {
  title: "Technology Case Studies | Digital Transformation | OXAVYN",
  description: "Explore OXAVYN case studies showing how digital products, software, AI, automation and connected technology can address real business challenges.",
  keywords: ["technology case studies"],
  alternates: {
    canonical: "https://oxavyn.com/case-studies"
  },
  openGraph: {
    title: "Technology Case Studies | Digital Transformation | OXAVYN",
    description: "Explore OXAVYN case studies showing how digital products, software, AI, automation and connected technology can address real business challenges.",
    url: "https://oxavyn.com/case-studies",
    siteName: "Oxavyn",
    images: [
      {
        url: "/images/oxavyn-digital-transformation.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Case Studies | Digital Transformation | OXAVYN",
    description: "Explore OXAVYN case studies showing how digital products, software, AI, automation and connected technology can address real business challenges.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import React from 'react';
import CaseStudiesClient from './CaseStudiesClient';

import mongoose from 'mongoose';
import CaseStudy from '../../models/CaseStudy';


export const revalidate = 600;

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
