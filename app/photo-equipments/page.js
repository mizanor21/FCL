import React from "react";
import img2 from "@/public/assets/PhotoEquipment/50TCrane.jpg";
import img1 from "@/public/assets/banner/constraction.jpeg";

import Image from "next/image";
const PhotoEquipment = () => {
  return (
    <div>
      <div className="relative -top-20">
        <div class="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
          <div class="absolute inset-0 bg-black opacity-70">
            <Image
              class="relative object-cover w-full h-full"
              src={img1}
              alt="Construction"
            />
          </div>
        </div>
      </div>
      <div className="mx-5 lg:container lg:mx-auto pb-20">
        <div className="">
          <h2 className="text-3xl font-serif border-l-4 border-green-500 pl-3 uppercase">
            Photos Of Equipment
          </h2>
        </div>
        <section className="py-6 dark:bg-gray-100">
          <div className="container flex flex-col justify-center mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2">
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
              <Image
                className="object-cover w-full dark:bg-gray-500 aspect-square"
                src={img2}
                alt="50T Mobile Crane"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhotoEquipment;
