import mongoose from 'mongoose';
import ClientStory from '../../models/ClientStory';
import ClientSuccessClient from './ClientSuccessClient';

export const metadata = {
  title: 'Client Success Stories | Oxavyn',
  description: 'Explore how Oxavyn empowers global enterprises through cutting-edge technology and ultra-luxury design.',
};
export const revalidate = 0;

async function getStories() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  const stories = await ClientStory.find({ isApproved: true }).sort({ createdAt: -1 }).lean();
  return stories.map(s => ({ ...s, _id: s._id.toString(), id: s._id.toString() }));
}

export default async function ClientSuccessPage() {
  const stories = await getStories();
  return <ClientSuccessClient stories={stories} />;
}
