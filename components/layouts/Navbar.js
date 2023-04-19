import ThemeSwitch from '../ThemeSwitch';

const Navbar = () => {
  return (
    <header class="z-50 flex w-full flex-wrap py-3 text-sm sm:flex-nowrap sm:justify-start sm:py-0">
      <nav
        class="relative mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <a
            class="flex-none text-xl font-semibold text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border border-white/[.5] p-2 align-middle text-sm font-medium text-white/[.5] shadow-sm transition-all hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="h-4 w-4 hs-collapse-open:hidden"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                class="hidden h-4 w-4 hs-collapse-open:block"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
        >
          <div class="mt-5 flex flex-col gap-x-0 gap-y-4 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:gap-y-0 sm:pl-7">
            <a class="font-medium text-white sm:py-6" href="#" aria-current="page">
              Landing
            </a>
            <a class="font-medium text-white/[.8] hover:text-white sm:py-6" href="#">
              Account
            </a>
            <a class="font-medium text-white/[.8] hover:text-white sm:py-6" href="#">
              Work
            </a>
            <a class="font-medium text-white/[.8] hover:text-white sm:py-6" href="#">
              Blog
            </a>
          </div>
        </div>

        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Navbar;
