import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = () => {
  return (
    <Link
      href='/projectLayout'
      className='rounded-lg border border-gray-200 p-4 transition-all hover:border-2 hover:bg-gray-50'
    >
      <div className='w-full'>
        <Image
          src='/../public/img/thumbnail.jpg'
          width={400}
          height={200}
          alt='Card Thumbnail'
        />
      </div>

      <div className='mt-4 space-y-2'>
        <h2 className='text-base font-medium text-gray-800'>
          Unity’s inside sales team drives 80% of its revenue with Preline.
        </h2>
        <p className='text-base text-gray-600'>
          The best way to connect a wallet.
        </p>
      </div>

      <div className='mt-6 flex gap-x-4'>
        <span className='inline-flex items-center gap-1.5 rounded-md bg-yellow-600 px-3 py-1.5 text-xs font-medium text-yellow-100'>
          Badge
        </span>
      </div>
    </Link>
  )
}

export default ProjectCard
