import JobApplicationClient from './JobApplicationClient';

export async function generateMetadata({ params }) {
  const { jobId } = await params;
  return {
    title: `Apply for Job ${jobId} - Oxavyn`,
    description: 'Apply to join our team at Oxavyn.'
  };
}

export default async function JobApplicationPage({ params }) {
  const { jobId } = await params;
  return <JobApplicationClient jobId={jobId} />;
}
