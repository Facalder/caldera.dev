import Link from 'next/link'

import PostCard from '@/components/cards/PostCard'

const Home = () => {
  return (
    <>
      <section className='space-y-3'>
        <h1 className='heading-1'>Design and Code</h1>
        <p className='paragraph'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
          impedit fugit dolorem perspiciatis laborum exercitationem quibusdam.
          Inventore repudiandae animi omnis, quos minima corporis veritatis,
          fugit eligendi recusandae distinctio, hic quae.
        </p>
      </section>

      <section className='space-y-4'>
        <h2 className='heading-2'>Recent Posts</h2>
        <div className='space-y-6'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className='w-full text-right'>
            <Link
              href='/blog'
              className='heading-5 mt-12 text-yellow-600 hover:underline hover:underline-offset-2'
            >
              More Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
