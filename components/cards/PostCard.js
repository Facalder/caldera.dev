import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <Link href='/example' className='space-y-4 border p-4 hover:bg-gray-50'>
      <div className='w-full'>
        <Image
          src='/../public/img/thumbnail.jpg'
          width={400}
          height={200}
          alt='Card Thumbnail'
        />
      </div>

      <div className='space-y-3'>
        <time className='paragraph text-yellow-600'>12 January 2023</time>
        <div className='space-y-2'>
          <h2 className='heading-3'>
            Unity’s inside sales team drives 80% of its revenue with Preline.
          </h2>
          <p className='paragraph'>The best way to collect oppo meneh iki</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
