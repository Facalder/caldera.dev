import Hero from '@/components/blog/hero/Hero';
import BlogList from '@/components/layout/BlogList/BlogList';

const Blog = () => {
  return (
    <>
      <Hero />
      <BlogList title="2023" allPost="hidden" column="2" />
    </>
  );
};

export default Blog;
