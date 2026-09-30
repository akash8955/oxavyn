import mongoose from 'mongoose';
import TechGuide from '../../models/TechGuide';
import TechGuidesClient from './TechGuidesClient';

export const metadata = {
  title: 'Technology Guides | Oxavyn',
  description: 'In-depth resources and guides on the latest enterprise technologies, authored by Oxavyn experts.',
};
export const revalidate = 600;

async function getTechGuides() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  const guides = await TechGuide.find().sort({ createdAt: -1 }).lean();
  return guides.map(g => ({
    ...g,
    _id: g._id.toString(),
    id: g._id.toString()
  }));
}

export default async function TechnologyGuidesPage() {
  const techGuides = await getTechGuides();
  return <TechGuidesClient techGuides={techGuides} />;
}
