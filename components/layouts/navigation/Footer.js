import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mx-auto w-full py-10">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-flow-col">
        <div className="col-span-full lg:col-span-1 lg:block">
          <Link className="text-xl font-bold text-purple-500" href="#" aria-label="Brand">
            ~/
          </Link>
        </div>

        <ul className="flex flex-col gap-x-0 gap-y-4 sm:justify-end">
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

        <ul className="flex flex-col gap-x-0 gap-y-4 sm:justify-end">
          <li>
            <Link
              className="text-base font-normal text-gray-500 hover:text-purple-500"
              href="/"
            >
              Michat
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-normal text-gray-500 hover:text-purple-500"
              href="/"
            >
              Behance
            </Link>
          </li>
          <li>
            <Link
              className=" text-base font-normal text-gray-500 hover:text-purple-500"
              href="/"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-normal text-gray-600 hover:text-purple-500"
              href="/"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              className="text-base font-normal text-gray-500 hover:text-purple-500"
              href="/"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>

      <div class="mt-20 border-t border-gray-200 py-5">
        <div class="space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <p className="text-left text-base text-gray-500">
            © 2023 by Fa Ainama Caldera S
          </p>
          <p className="text-base text-gray-500 sm:text-right">
            Built with <span class="text-purple-500">Next Js, Tailwind, and Prismic</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
