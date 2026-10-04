import { notFound } from 'next/navigation';
import mongoose from 'mongoose';

import connectToDatabase from '@/lib/db';
import Blog from '../../../models/Blog';
import BlogArticleClient from './BlogArticleClient';

export const revalidate = 600;

async function getBlog(id) {
  await connectToDatabase();
  let blog = null;
  if (mongoose.Types.ObjectId.isValid(id)) {
    blog = await Blog.findById(id).lean();
  }
  
  if (!blog) return null;
  return { ...blog, _id: blog._id.toString(), id: blog._id.toString() };
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.id);
  
  if (!blog) {
    return { title: 'Article Not Found | Oxavyn' };
  }

  return {
    title: `${blog.title} | Oxavyn Blog`,
    description: blog.desc,
  };
}

export default async function BlogArticlePage({ params }) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.id);

  if (!blog) {
    notFound();
  }

  return <BlogArticleClient blog={blog} />;
}
