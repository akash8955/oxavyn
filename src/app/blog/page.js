export const metadata = {
  title: "OXAVYN Blog | Technology, AI, Software & Digital Transformation",
  description: "Explore articles from OXAVYN covering AI, web development, mobile apps, software, automation, data, business technology and digital transformation.",
  
  alternates: {
    canonical: "https://oxavyn.com/blog"
  },
  openGraph: {
    title: "OXAVYN Blog | Technology, AI, Software & Digital Transformation",
    description: "Explore articles from OXAVYN covering AI, web development, mobile apps, software, automation, data, business technology and digital transformation.",
    url: "https://oxavyn.com/blog",
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
    title: "OXAVYN Blog | Technology, AI, Software & Digital Transformation",
    description: "Explore articles from OXAVYN covering AI, web development, mobile apps, software, automation, data, business technology and digital transformation.",
    images: ["/images/oxavyn-digital-transformation.jpg"],
  },
};

import React from 'react';
import mongoose from 'mongoose';

import connectToDatabase from '@/lib/db';
import Blog from '../../models/Blog';
import BlogClient from './BlogClient';


export const revalidate = 600;

async function getBlogs() {
  await connectToDatabase();
  const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
  return blogs.map(b => ({
    ...b,
    _id: b._id.toString(),
    id: b._id.toString()
  }));
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  return <BlogClient blogs={blogs} />;
}
