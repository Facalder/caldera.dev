/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import { BiMenuAltRight, BiX } from 'react-icons/bi';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full flex-wrap py-5 font-grotesk sm:flex-nowrap sm:justify-start">
      <nav
        className="relative mx-auto w-full sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link className="text-xl font-bold text-purple-500" href="#" aria-label="Brand">
            ~/
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle inline-flex items-center justify-center gap-2 transition-all"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <BiMenuAltRight
                size={24}
                className="text-purple-500 hs-collapse-open:hidden"
              />
              <BiX size={24} className="hidden text-purple-500 hs-collapse-open:block" />
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
          <ul className="mt-5 flex flex-col gap-x-0 gap-y-6 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-10 sm:gap-y-0 sm:pl-7">
            <li>
              <Link
                className="text-base font-normal text-gray-500 hover:text-purple-500"
                href="/"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal text-gray-500 hover:text-purple-500"
                href="/"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                className=" text-base font-normal text-gray-500 hover:text-purple-500"
                href="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal text-gray-500 hover:text-purple-500"
                href="/"
              >
                Uses
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal text-gray-500 hover:text-purple-500"
                href="/"
              >
                Project
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
