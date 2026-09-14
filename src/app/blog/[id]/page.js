import { notFound } from 'next/navigation';
import { blogs } from '../../../data/blogData';
import BlogArticleClient from './BlogArticleClient';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = blogs.find(b => b.id.toString() === resolvedParams.id);
  
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
  const blog = blogs.find(b => b.id.toString() === resolvedParams.id);

  if (!blog) {
    notFound();
  }

  return <BlogArticleClient blog={blog} />;
}
