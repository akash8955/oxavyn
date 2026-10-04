import mongoose from 'mongoose';

import connectToDatabase from '@/lib/db';
import StudentReview from '../../models/StudentReview';
import StudentReviewsClient from './StudentReviewsClient';

export const metadata = {
  title: 'Student Reviews | Oxavyn',
  description: 'Hear from our alumni. Discover how our internships and foundational programs have transformed careers.',
};
export const revalidate = 600;

async function getReviews() {
  await connectToDatabase();
  const reviews = await StudentReview.find({ isApproved: true }).sort({ createdAt: -1 }).lean();
  return reviews.map(r => ({ ...r, _id: r._id.toString(), id: r._id.toString() }));
}

export default async function StudentReviewsPage() {
  const reviews = await getReviews();
  return <StudentReviewsClient reviews={reviews} />;
}
