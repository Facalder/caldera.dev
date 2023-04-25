import Link from 'next/link'

import Hero from '@/components/partials/Hero'
import Box from '@/layout/container/Box'

const ShowcaseProject = () => {
  return (
    <>
      <Hero
        title='Project 1 huhu hehe'
        description='Cuma desc jelek'
        image={true}
        src='/../public/img/thumbnail.jpg'
        alt='Profile Photo'
      />
      <Box>
        <div className='prose max-w-none pb-10'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            repellat ab sint. Tenetur eligendi perspiciatis repudiandae quia
            numquam facilis, vel, necessitatibus eos nam ipsum non excepturi
            libero ad ratione et!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            repellat ab sint. Tenetur eligendi perspiciatis repudiandae quia
            numquam facilis, vel, necessitatibus eos nam ipsum non excepturi
            libero ad ratione et!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            repellat ab sint. Tenetur eligendi perspiciatis repudiandae quia
            numquam facilis, vel, necessitatibus eos nam ipsum non excepturi
            libero ad ratione et!
          </p>
        </div>
      </Box>
      <Box>
        <div className='flex gap-x-4'>
          <Link href='/'>
            <span className='inline-flex items-center gap-1.5 rounded-md bg-yellow-600 px-3 py-1.5 text-xs font-medium text-yellow-100'>
              Badge
            </span>
          </Link>
          <Link href='/'>
            <span className='inline-flex items-center gap-1.5 rounded-md bg-yellow-600 px-3 py-1.5 text-xs font-medium text-yellow-100'>
              Badge
            </span>
          </Link>
          <Link href='/'>
            <span className='inline-flex items-center gap-1.5 rounded-md bg-yellow-600 px-3 py-1.5 text-xs font-medium text-yellow-100'>
              Badge
            </span>
          </Link>
        </div>
      </Box>
    </>
  )
}

export default ShowcaseProject
