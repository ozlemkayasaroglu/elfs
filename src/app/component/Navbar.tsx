import Image from "next/image"
import Link from "next/link";
const Navbar = () => {

  return (
    <nav className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <Link href="/">

          <div className="flex flex-shrink-0 items-center">
            <Image
              width="120"
              height="120"
              className="mt-16 h-30 w-auto sm:mx-auto"
              src="/images/logo.png"
              alt="Your Company"
              />
          </div>
              </Link>
        </div>
      </div>
    </div>

    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 pb-4 pt-2">
        <a
          href="#"
          className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
        >
          Home
        </a>
      </div>
    </div>
  </nav>

  )
}

export default Navbar;

