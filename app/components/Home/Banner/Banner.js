import React from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative -top-20">
      <div class="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <div class="absolute inset-0 bg-black opacity-70">
          <Image
            class="object-cover w-full h-full"
            src={img1}
            alt="Construction"
          />
        </div>

        <div class="relative">
          <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div class="w-full lg:w-2/3 xl:w-1/2">
              <h1 class="font-sans text-base font-normal tracking-tight text-white text-opacity-90">
                Master the basics of baking
              </h1>
              <p class="mt-6 tracking-tighter text-white">
                <span class="font-sans font-normal text-7xl">
                  The road to the
                </span>
                <br />
                <span class="font-serif italic font-normal text-8xl">
                  perfect loaf
                </span>
              </p>
              <p class="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                penatibus pellentesque dolor consequat ligula egestas massa
                gravida. Porttitor venenatis enim praesent.
              </p>

              <div class="flex items-center mt-5 space-x-3 sm:space-x-4">
                <a
                  href="#"
                  title=""
                  class="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                  role="button"
                >
                  Get started
                </a>

                <a
                  href="#"
                  title=""
                  class="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                  role="button"
                >
                  <svg
                    class="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                    />
                  </svg>
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
