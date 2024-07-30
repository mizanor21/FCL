import React from "react";
import img1 from "@/public/assets/PhotoEquipment/50TCrane.jpg";
import Image from "next/image";
const PhotoEquipment = () => {
  return (
    <div className="mx-5 lg:container lg:mx-auto py-20">
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
              src={img1}
              alt="50T Mobile Crane"
            />
            <Image
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
              alt="50T Mobile Crane"
            />
            <Image
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
              alt="50T Mobile Crane"
            />
            <Image
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
              alt="50T Mobile Crane"
            />
            <Image
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
              alt="50T Mobile Crane"
            />
            <Image
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
              alt="50T Mobile Crane"
            />
            <Image
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
              alt="50T Mobile Crane"
            />
            <Image
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
              alt="50T Mobile Crane"
            />
            <Image
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
              alt="50T Mobile Crane"
            />
            <Image
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src={img1}
              alt="50T Mobile Crane"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoEquipment;
