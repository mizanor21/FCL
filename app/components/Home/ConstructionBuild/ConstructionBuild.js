import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import img1 from "@/public/assets/BuildConstruction/buildings.png";
import bgImage from "@/public/assets/BuildConstruction/bgImg.png";

const ConstructionBuild = () => {
  return (
    <div
      className="py-20"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" py-20">
        <div className="mx-5 lg:container lg:mx-auto max-w-[1200px]">
          <div>
            <h2 className="text-3xl font-serif border-l-4 border-green-500 pl-3 uppercase">
              What We Build
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            <div className="p-10 border bg-white">
              <Image src={img1} className="w-24 mb-20" alt="Building"></Image>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Construction
                </h3>
                <p className="text-lg text-gray-600 mt-3">
                  Our construction services are designed to create beautiful and
                  functional homes with a high level of safety and comfort.
                </p>
              </div>
              <button className="border border-black hover:bg-black hover:text-white duration-500 font-serif  rounded-full px-5 py-2 mt-10 flex items-center">
                Learn More <GoArrowUpRight className="font-bold text-xl" />
              </button>
            </div>
            <div className="p-10 border bg-white">
              <Image src={img1} className="w-24 mb-20" alt="Building"></Image>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Construction
                </h3>
                <p className="text-lg text-gray-600 mt-3">
                  Our construction services are designed to create beautiful and
                  functional homes with a high level of safety and comfort.
                </p>
              </div>
              <button className="border border-black hover:bg-black hover:text-white duration-500 font-serif  rounded-full px-5 py-2 mt-10 flex items-center">
                Learn More <GoArrowUpRight className="font-bold text-xl" />
              </button>
            </div>
            <div className="p-10 border bg-white">
              <Image src={img1} className="w-24 mb-20" alt="Building"></Image>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Construction
                </h3>
                <p className="text-lg text-gray-600 mt-3">
                  Our construction services are designed to create beautiful and
                  functional homes with a high level of safety and comfort.
                </p>
              </div>
              <button className="border border-black hover:bg-black hover:text-white duration-500 font-serif  rounded-full px-5 py-2 mt-10 flex items-center">
                Learn More <GoArrowUpRight className="font-bold text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionBuild;
