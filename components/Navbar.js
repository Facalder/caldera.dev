/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link'
import { BiMenuAltRight, BiX } from 'react-icons/bi'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 flex w-full flex-wrap bg-[#fefefefe]/90 p-4 backdrop-blur-sm sm:flex-nowrap sm:justify-start sm:px-6 md:p-6 lg:px-0'>
      <div
        className='relative mx-auto w-full max-w-3xl sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <Link
            className='heading-4 text-yellow-600'
            href='/'
            aria-label='Brand'
          >
            @Caldera
          </Link>
          <div className='sm:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle inline-flex items-center justify-center gap-2 transition-all'
              data-hs-collapse='#navbar-collapse-with-animation'
              aria-controls='navbar-collapse-with-animation'
              aria-label='Toggle navigation'
            >
              <BiMenuAltRight
                size={24}
                className='text-yellow-600 hs-collapse-open:hidden'
              />
              <BiX
                size={24}
                className='hidden  text-yellow-600  hs-collapse-open:block'
              />
            </button>
          </div>
        </div>
        <nav
          id='navbar-collapse-with-animation'
          className='hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block'
        >
          <ul className='mt-5 flex flex-col gap-x-0 gap-y-6 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-10 sm:gap-y-0 sm:pl-7'>
            <li>
              <Link
                className='text-sm font-medium text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/blog'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/category'
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                className=' text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/uses'
              >
                Uses
              </Link>
            </li>
            <li>
              <Link
                className='text-sm font-normal text-gray-600 hover:text-yellow-600 hover:underline hover:underline-offset-4'
                href='/project'
              >
                Project
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
