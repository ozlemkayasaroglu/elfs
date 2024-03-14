import Image from "next/image";

const categories = [
  {
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
];

const Joke = () => {
  return (
    <div className="bg-white flex justify-center text-center items-center ">
      <div className=" mt-10 mx-auto max-w-xl sm:px-2 sm:py-2 lg:max-w-7xl lg:px-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Elf'in Şaka Dükkanı
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Hayatın içerisinde gizlenen güzellikleri görmek için, görebilme
          yetisine sahip olanlar için tasarlanmıştır.
        </p>

        <div className="flex max-w-xl sm:px-6 lg:max-w-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-32 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>

          <div className="p-10 mt-5 space-y-12 lg:grid lg:gap-x-8 lg:space-y-0">
            {categories.map((category) => (
              <a
                key={category.description}
                href={category.href}
                className="group block"
              >
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <Image
                    width="1200"
                    height="1200"
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
                  <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                    <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                      <svg
                        viewBox="0 0 162 128"
                        fill="none"
                        aria-hidden="true"
                        className="absolute -top-10 left-1 -z-10 h-32  stroke-gray-700/20"
                      >
                        <path
                          id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                          d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                        />
                        <use
                          href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                          x="86"
                        />
                      </svg>
                      <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9 xs:text-sm">
                        <p>{category.description}</p>
                      </blockquote>
                    </div>
                  </figure>
                </section>
              </a>
            ))}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-32 "
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Joke;
