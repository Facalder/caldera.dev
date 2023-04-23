import Hero from '@/components/home/hero/Hero';
import BlogList from '@/components/layout/BlogList/BlogList';

const Home = () => {
  return (
    <>
      <Hero />
      <BlogList title="Latest Post" allPost="block" column="2" />
    </>
  );
};

export default Home;
