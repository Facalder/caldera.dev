import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <Link
      href='/example'
      className='space-y-4 rounded-lg bg-gray-50 p-4 transition-all hover:bg-gray-100'
    >
      <div className='w-full'>
        <Image
          src='/../public/img/thumbnail.jpg'
          width={400}
          height={200}
          alt='Card Thumbnail'
        />
      </div>

      <div className='space-y-3'>
        <h2 className='text-lg font-medium text-gray-800'>
          Unity’s inside sales team drives 80% of its revenue with Preline.
        </h2>
        <p className='text-base text-gray-600'>
          The best way to connect a wallet.
        </p>
        <p className='text-yellow-600'>12 January 2023</p>
      </div>
    </Link>
  )
}

export default PostCard
