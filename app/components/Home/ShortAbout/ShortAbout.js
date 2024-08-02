import Link from "next/link";
import house from "@/public/assets/shortAbout/house.jpg";
import road from "@/public/assets/shortAbout/road.jpeg";
import cons from "@/public/assets/shortAbout/cons.jpg";
import Image from "next/image";

const ShortAbout = () => {
  return (
    <div className="bg-white">
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className=" mb-6 text-3xl font-serif border-l-4 border-green-500 pl-3 py-5">
                <span className="uppercase">
                  Farees Construction <br /> Limited (FCL)
                </span>
                <p className="font-medium text-xl mt-5">
                  A sister concern of MAN Enterprise
                </p>
              </h2>

              <p>
                <strong>FAREES CONSTRUCTION LIMITED (FCL)</strong> is an
                independent engineering construction company with an objective
                to provide complete and international standard technical
                approach in the construction industry of Bangladesh.
              </p>
            </div>
            <div>
              <Link
                href="/about"
                aria-label=""
                className="inline-flex items-center font-serif font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <Image
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={cons}
                alt=""
              />
              <Image
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={road}
                alt=""
              />
            </div>
            <div className="px-3">
              <Image
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={house}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortAbout;
