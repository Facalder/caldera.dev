import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <Link href='/example' className='transition-all hover:scale-105'>
      <div className='w-full'>
        <Image
          src='/../public/img/thumbnail.jpg'
          width={400}
          height={200}
          alt='Card Thumbnail'
        />
      </div>

      <div className='mt-4 space-y-2'>
        <h2 className=' text-base font-medium text-gray-800'>
          Unity’s inside sales team drives 80% of its revenue with Preline.
        </h2>
        <p className='text-base text-gray-600'>
          The best way to connect a wallet.
        </p>
      </div>
    </Link>
  )
}

export default PostCard
