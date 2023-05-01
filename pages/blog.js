import PostCard from '@/components/cards/PostCard'

const Blog = () => {
  return (
    <>
      <section className='space-y-6 border-b border-b-gray-300 pb-10'>
        <div className='space-y-3'>
          <h1 className='heading-1'>Blog</h1>
          <p className='paragraph'>
            I started writing articles in December 2020, mainly about software
            and sharing knowledge. I have written a total of 6 articles on my
            blog. You can search for articles by title in the search box below.
          </p>
        </div>
        <div className='relative'>
          <input
            type='text'
            className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-600'
            placeholder='Search Blog'
          />
        </div>
      </section>

      <section className='space-y-4'>
        <h2 className='heading-2'>Recent Posts</h2>
        <div className='space-y-4'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
