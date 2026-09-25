import mongoose from 'mongoose';
import StudentReview from '../../models/StudentReview';
import StudentReviewsClient from './StudentReviewsClient';

export const metadata = {
  title: 'Student Reviews | Oxavyn',
  description: 'Hear from our alumni. Discover how our internships and skill enhancement programs have transformed careers.',
};
export const revalidate = 0;

async function getReviews() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  const reviews = await StudentReview.find({ isApproved: true }).sort({ createdAt: -1 }).lean();
  return reviews.map(r => ({ ...r, _id: r._id.toString(), id: r._id.toString() }));
}

export default async function StudentReviewsPage() {
  const reviews = await getReviews();
  return <StudentReviewsClient reviews={reviews} />;
}
