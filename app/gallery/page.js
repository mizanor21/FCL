import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/Gallery/BUP-Pic/1.jpg";
import img2 from "@/public/assets/Gallery/BUP-Pic/2.jpg";
import img3 from "@/public/assets/Gallery/BUP-Pic/3.jpg";
import img4 from "@/public/assets/Gallery/BUP-Pic/4.jpg";
import img5 from "@/public/assets/Gallery/BUP-Pic/5.jpg";
import img6 from "@/public/assets/Gallery/BUP-Pic/6.jpg";
import img7 from "@/public/assets/Gallery/BUP-Pic/7.jpg";
import img8 from "@/public/assets/Gallery/BUP-Pic/8.jpg";
import img9 from "@/public/assets/Gallery/BUP-Pic/9.jpg";

const gallery = () => {
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
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img2}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img4}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img5}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img6}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img7}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img8}
          />
          <Image
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img9}
          />
          <Image
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default gallery;
