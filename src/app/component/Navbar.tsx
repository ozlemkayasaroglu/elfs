import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <main>
      <nav className="bg-white mt-10 shadow-md pb-3">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  width="600"
                  height="400"
                  className="h-24 w-full "
                  src="/images/logo.png"
                  alt="Your Company"
                />
              </Link>
            </div>

            <div className="flex flez-1 justify-end items-center">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 object-right">
                <a
                  href="#"
                  className=" uppercase font-bold text-gray-600 items-center hover:border-gray-900 border-b-2 border-transparent font-3xl hover:text-gray-900"
                >
                  Anasayfa
                </a>
                <a
                  href="/sending"
                  className=" uppercase font-bold text-gray-600 items-center hover:border-gray-900 border-b-2 border-transparent font-3xl hover:text-gray-900"
                >
                  Şaka Gönder
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 pb-4 pt-2">
            <a
              href="#"
              className=" uppercase font-bold block border-l-4 text-zinc-600 hover:border-blue-600  py-2 pl-3 pr-4 text-base font-medium hover:text-blue-800"
            >
              Anasayfa
            </a>
            <a
              href="#"
              className=" uppercase font-bold  block border-l-4 border-transparent py-2 pl-3 pr-4 text-base text-zinc-600 hover:border-blue-600 py-2 pl-3 pr-4 text-base font-medium hover:text-blue-800"
            >
              Şaka Gönder
            </a>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
