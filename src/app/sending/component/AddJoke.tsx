import Image from "next/image";
import ModalButton from "./ModalButton";



export default function AddJoke() {


  return (
    <>
      {/* modal button */}
      <div className="flex items-center">
        <ModalButton />

        {/* joke sending */}
        <div className="-mx-4 flex w-full px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 2xl:w-full md:rounded-5xl md:px-16 xl:px-24 xl:pb-36 ">
          <div className="divide-y divide-slate-100 flex sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
            <div className=" mt-5 flex rounded-3xl md:w-72 sm:w-72 xs:w-72 bg-white py-10 pr-2 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
              <div className=" flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents relative">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end relative drop-shadow-2xl">
                  <a
                    aria-label="back"
                    href=""
                    className="relative block drop-shadow-md sm:w-74 md:w-72 lg:w-72"
                  >
                    <div className="relative flex items-center gap-5 overflow-hidden rounded-xl sm:gap-8  rotate-2">
                      <Image
                        width="1200"
                        height="1200"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className="w-44 h-auto sm:w-72 md:w-72 lg:w-72 object-cover"
                        src="/images/background.jpg"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <article
              aria-labelledby="episode-5-title"
              className="py-10 sm:py-12"
            >
              <div className="lg:px-8">
                <div className="lg:max-w-4xl">
                  <h2
                    id="episode-5-title"
                    className="mt-2 mb-3 text-lg font-semibold text-slate-400"
                  >
                    <a href="/5"> Latest Joke Sent</a>
                  </h2>
                  <div className="flex mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div className="flex flex-col items-start">
                      <h2
                        id="episode-5-title"
                        className="mt-2 text-md font-bold text-slate-500"
                      >
                        <a href="/5"> Bill Lumbergh</a>
                      </h2>
                      <time
                        dateTime="2022-02-24T00:00:00.000Z"
                        className="order-first font-mono text-sm leading-7  text-slate-400"
                      >
                        February 24, 2022
                      </time>
                      <p className="mt-1 text-base leading-7 text-slate-500">
                        He’s going to need you to go ahead and come in on
                        Saturday, but there’s a lot more to the story than you
                        think.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
