import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = () => {
  return (
    <Link
      href='/projectLayout'
      className='space-y-4 border p-4 hover:bg-gray-50'
    >
      <div className='w-full'>
        <Image
          src='/../public/img/thumbnail.jpg'
          width={400}
          height={200}
          alt='Card Thumbnail'
        />
      </div>

      <div className='space-y-2'>
        <h2 className='heading-3'>Project Blog Caldera.dev</h2>
        <p className='paragraph'>Menggunakan Next Js</p>
      </div>

      <div className='flex gap-x-4'>
        <span className='footnote inline-flex items-center gap-1.5 rounded-full bg-yellow-600 px-3 py-1.5 text-yellow-100'>
          Next Js
        </span>
      </div>
    </Link>
  )
}

export default ProjectCard
