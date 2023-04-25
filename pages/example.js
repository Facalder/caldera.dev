import Image from 'next/image'
import Link from 'next/link'

import Box from '@/layout/container/Box'

const BlogLayout = () => {
  return (
    <article className='space-y-8'>
      <Box space='8'>
        <address className='flex items-center justify-between not-italic'>
          <div className='mr-3 inline-flex items-center text-xs'>
            <Image
              className='mr-4 h-12 w-12 rounded-full bg-center object-cover'
              src='/../public/img/thumbnail.jpg'
              alt='Jese Leos'
              width={100}
              height={100}
            />
            <div>
              <h4 className='text-base font-medium'>Fa Ainama Caldera</h4>
              <p className='text-sm text-gray-600 md:text-base'>
                Frontend Developer & SMK IDN Boarding School Graduated
              </p>
              <p className='text-sm text-gray-600 md:text-base'>
                <time dateTime='2022-02-08' title='February 8th, 2022'>
                  Feb. 8, 2022
                </time>
              </p>
            </div>
          </div>
        </address>
        <h1 className='font-medium text-gray-800'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius
          nihil debitis, esse tenetur, doloremque, optio aspernatur quae odit ab
        </h1>
      </Box>

      <Box>
        <div className='prose max-w-none pb-10'>
          <figure>
            <Image
              src='/../public/img/thumbnail.jpg'
              alt='Jese Leos'
              width={100}
              height={100}
            />
            <figcaption>this alt of image</figcaption>
          </figure>

          <h2>This h2</h2>
          <h3>This h3</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            repellat ab sint. Tenetur eligendi perspiciatis repudiandae quia
            numquam facilis, vel, necessitatibus eos nam ipsum non excepturi
            libero ad ratione et!
          </p>

          <ul>
            <li>this is list 1</li>
            <li>this is list 2</li>
            <li>this is list 3</li>
          </ul>

          <blockquote>this is blockquote</blockquote>
          <pre>this is pre</pre>

          <Link href='/'>Hello </Link>
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
    </article>
  )
}

export default BlogLayout
