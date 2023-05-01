import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-6 w-full px-6 sm:px-6 lg:p-0'>
      <div className='mx-auto w-full max-w-3xl'>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-flow-col'>
          <div className='col-span-full lg:col-span-1 lg:block'>
            <Link
              className='heading-4 text-yellow-600'
              href='#'
              aria-label='Brand'
            >
              @Caldera
            </Link>
          </div>

          <ul className='flex flex-col  gap-y-4 sm:justify-end'>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/blog'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/'
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                className=' text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/'
              >
                Uses
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/'
              >
                Project
              </Link>
            </li>
          </ul>

          <ul className='flex flex-col gap-x-0 gap-y-4 sm:justify-end'>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/blog'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/'
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                className=' text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/'
              >
                Uses
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/'
              >
                Project
              </Link>
            </li>
          </ul>
        </div>

        <div className='mt-10 border-t border-gray-200 py-3 md:py-5'>
          <div className='space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0'>
            <p className='text-left text-base text-gray-600'>
              © 2023 by{' '}
              <span className='heading-4 text-yellow-600'>
                Fa Ainama Caldera S
              </span>
            </p>
            <p className='text-base text-gray-600 sm:text-right'>
              Built with{' '}
              <span className='heading-4 text-yellow-600'>
                Next Js, Tailwind, and Prismic
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer