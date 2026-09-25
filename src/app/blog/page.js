import React from 'react';
import mongoose from 'mongoose';
import Blog from '../../models/Blog';
import BlogClient from './BlogClient';

export const metadata = {
  title: 'Blog & Insights | Oxavyn',
  description: 'Discover the latest trends in technology, luxury design, and enterprise solutions from Oxavyn.',
};
export const revalidate = 0;

async function getBlogs() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
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
