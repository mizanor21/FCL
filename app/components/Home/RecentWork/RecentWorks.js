import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/recentWorks/constraction1.jpg";

const RecentWorks = () => {
  return (
    <div className="bg-slate-100 py-20">
      <div className="mx-5 lg:container lg:mx-auto lg:max-w-[1200px]">
        <div>
          <h2 className="text-3xl font-serif border-l-4 border-green-500 pl-3 uppercase">
            Recent Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div className="relative">
            <Image src={img1} alt="Shoes" layout="responsive" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-500 w-full hover:bg-green-500 duration-1000">
              <h2 className="text-2xl font-serif text-white font-bold">
                PSO Banglow, Dhaka Dantonment.
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  New Build
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={img1} alt="Shoes" layout="responsive" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-500 w-full hover:bg-green-500 duration-1000">
              <h2 className="text-2xl font-serif text-white font-bold">
                PSO Banglow, Dhaka Dantonment.
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  New Build
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={img1} alt="Shoes" layout="responsive" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-500 w-full hover:bg-green-500 duration-1000">
              <h2 className="text-2xl font-serif text-white font-bold">
                PSO Banglow, Dhaka Dantonment.
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  New Build
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image src={img1} alt="Shoes" layout="responsive" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-500 w-full hover:bg-green-500 duration-1000">
              <h2 className="text-2xl font-serif text-white font-bold">
                PSO Banglow, Dhaka Dantonment.
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  New Build
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={img1} alt="Shoes" layout="responsive" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-500 w-full hover:bg-green-500 duration-1000">
              <h2 className="text-2xl font-serif text-white font-bold">
                PSO Banglow, Dhaka Dantonment.
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  New Build
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={img1} alt="Shoes" layout="responsive" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-500 w-full hover:bg-green-500 duration-1000">
              <h2 className="text-2xl font-serif text-white font-bold">
                PSO Banglow, Dhaka Dantonment.
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white font-serif  rounded-full px-5 py-2">
                  New Build
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
