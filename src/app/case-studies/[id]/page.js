import { notFound } from 'next/navigation';
import { caseStudies } from '../../../data/caseStudiesData';
import CaseStudyClient from './CaseStudyClient';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const study = caseStudies.find(s => s.id.toString() === resolvedParams.id);
  
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
  const study = caseStudies.find(s => s.id.toString() === resolvedParams.id);

  if (!study) {
    notFound();
  }

  return <CaseStudyClient study={study} />;
}
