import Link from 'next/link';

import BlogCard from '@/components/Card/BlogCard';
import CardContainer from '@/components/layout/container/CardContainer';

const BlogList = ({ title, allPost, column }) => {
  return (
    <div className="space-y-10">
      <h1 className="text-base font-medium">{title}</h1>
      <CardContainer column={column}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </CardContainer>
      <Link
        href="/blog"
        className={`text-base ${allPost} font-medium hover:text-yellow-600 hover:underline hover:underline-offset-4`}
      >
        All Post
      </Link>
    </div>
  );
};

export default BlogList;
