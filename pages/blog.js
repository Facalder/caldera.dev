import Hero from '@/components/partials/Hero'
import BlogList from '@/layout/Posts'

const Blog = () => {
  return (
    <>
      <Hero
        title='Writing'
        description=' Brain dumps, explorations, and how-to guides. I write about different
        topics, such as frontend, accessibility, start ups and user/dev
        experience.'
      />
      <BlogList title='2023' allPost='hidden' />
    </>
  )
}

export default Blog
