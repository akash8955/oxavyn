export const metadata = {
  title: "Client Success Stories | Digital Transformation | OXAVYN",
  description: "Discover client success stories and digital transformation journeys involving technology, software, AI, automation and connected digital experiences.",
  
  alternates: {
    canonical: "https://oxavyn.com/client-success-stories"
  },
  openGraph: {
    title: "Client Success Stories | Digital Transformation | OXAVYN",
    description: "Discover client success stories and digital transformation journeys involving technology, software, AI, automation and connected digital experiences.",
    url: "https://oxavyn.com/client-success-stories",
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
    title: "Client Success Stories | Digital Transformation | OXAVYN",
    description: "Discover client success stories and digital transformation journeys involving technology, software, AI, automation and connected digital experiences.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import mongoose from 'mongoose';
import ClientStory from '../../models/ClientStory';
import ClientSuccessClient from './ClientSuccessClient';


export const revalidate = 600;

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
