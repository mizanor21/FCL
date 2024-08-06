import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/banner/constraction.jpeg";

// Data array stored outside the component
const equipmentList = [
  {
    SNo: 1,
    Equipment: "50T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 2,
    Equipment: "25T Mobile Crane (wheel type)",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 3,
    Equipment: "Trailer 28 wheels",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 4,
    Equipment: "Cat 320 Excavator- 0.9 cum",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 11,
  },
  {
    SNo: 5,
    Equipment: "Cat 320 Excavator- 0.7 cum",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 19,
  },
  {
    SNo: 6,
    Equipment: "Dump Truck – 10 wheel",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 27,
  },
  {
    SNo: 7,
    Equipment: "Dump Truck – 6 wheel",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 13,
  },
  {
    SNo: 8,
    Equipment: "Dozer 950",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 9,
    Equipment: "Tafe Tractor",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 5,
  },
  {
    SNo: 10,
    Equipment: "Hammer Excavator 36 Ton",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 3,
  },
  {
    SNo: 11,
    Equipment: "13 Feet Motor Grader",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 12,
    Equipment: "9M sheet pile excavator 36 Ton",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 13,
    Equipment: "Hyd. Rotary Rig MAIT HR180 60M",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 3,
  },
  {
    SNo: 14,
    Equipment: "Hyd. Rotary Rig MAIT HR260 70M",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 15,
    Equipment: "New Zoomlion130 ton crawler crane",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 16,
    Equipment: "Wheel Loader 3 Ton & 5 Ton",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 5,
  },
  {
    SNo: 17,
    Equipment: "Fiori Concrete mixture",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 18,
    Equipment: "Batching plant",
    Ownership: "Own/Rent",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 19,
    Equipment:
      "Reverse Circulation Rotary Drilling Rig capable to Drill 28’’ x 24’’, 22” dia & bore hole upto 1200ft below Ground Level in Alluvium soils by 6’’/150mm dia drill pipes",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 4,
  },
  {
    SNo: 20,
    Equipment: "Water Jetting Set with Compressor (800 PSI)",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 21,
    Equipment: "Generator Capacity 350 KVA",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 4,
  },
  {
    SNo: 22,
    Equipment: "Geo-Logger",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 23,
    Equipment:
      "BS 410 or ASTM Standard Set/Sand Testing Sieves ASTM 8” dia Mesh No. 4 8 10 16 18 35 60 100 pan and lid.",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 24,
    Equipment: "Burner/Heater",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 25,
    Equipment: "Accurate Weighing balance complete set",
    Ownership: "Own",
    Unit: "Set",
    Quantity: 1,
  },
  {
    SNo: 26,
    Equipment: "Pipe Jointing Equipment (butt fusion/electro fusion machine)",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 4,
  },
  {
    SNo: 27,
    Equipment: "Pressure Testing Equipment for supply Network installed",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 4,
  },
  {
    SNo: 28,
    Equipment: "Asphalt Cutter",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 3,
  },
  {
    SNo: 29,
    Equipment: "De-watering Pump",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 30,
    Equipment: "Compaction Machine",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 4,
  },
  {
    SNo: 31,
    Equipment: "Air Compressor 283/Liter/second",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 32,
    Equipment: "Generator Capacity 550 KVA",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 33,
    Equipment: "Generator for Welding",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 3,
  },
  {
    SNo: 34,
    Equipment: "Submersible pumps 3.0 Cusec 110m Head",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 35,
    Equipment: "Welding Plant",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 2,
  },
  {
    SNo: 36,
    Equipment: "Complete set of Gas Cutter Equipments",
    Ownership: "Own",
    Unit: "Set",
    Quantity: 2,
  },
  {
    SNo: 37,
    Equipment: "150mm dia Drilling Pipe with threat/Flange",
    Ownership: "Own",
    Unit: "Meter",
    Quantity: 1100,
  },
  {
    SNo: 38,
    Equipment: "150mm dia Column Pipe",
    Ownership: "Own",
    Unit: "Meter",
    Quantity: 400,
  },
  {
    SNo: 39,
    Equipment: "Vertically Test Equipments",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: 1,
  },
  {
    SNo: 40,
    Equipment: "Necessary Vehicles (L.S)",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: "L.S",
  },
  {
    SNo: 41,
    Equipment:
      "Other related equipments (HDD Machine, Pipe Busting Machine, Water Tanker, Pickup, Crane Truck, Drum Truck, Sedan Car, Pajero Jeep, Haval Jeep)",
    Ownership: "Own",
    Unit: "Nos",
    Quantity: "",
  },
];

const Equipment = () => {
  return (
    <div>
      <div className="relative -top-20">
        <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
          <div className="absolute inset-0 bg-black opacity-70">
            <Image
              className="relative object-cover w-full h-full"
              src={img1}
              alt="Construction"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mx-5 lg:container lg:mx-auto lg:max-w-[1200px] pb-20">
        <h2 className="text-4xl text-center font-bold pl-3 uppercase">
          List Of Equipment
        </h2>
        <div className="overflow-x-auto mt-5">
          <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">
            <div className="overflow-x-auto">
              <table className="min-w-full text-lg">
                <thead className="rounded-t-lg dark:bg-gray-300">
                  <tr className="text-right">
                    <th title="Ranking" className="p-3 text-left">
                      Serial NO
                    </th>
                    <th title="Team name" className="p-3 text-left">
                      Equipment TYpe & Characteristics
                    </th>
                    <th title="Wins" className="p-3">
                      Ownership
                    </th>
                    <th title="Losses" className="p-3">
                      Unit
                    </th>
                    <th title="Win percentage" className="p-3">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>1</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>2</span>
                    </td>
                  </tr>

                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>2</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>4</span>
                    </td>
                  </tr>

                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>3</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>6</span>
                    </td>
                  </tr>

                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>4</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>8</span>
                    </td>
                  </tr>

                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>5</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>10</span>
                    </td>
                  </tr>

                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>6</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>12</span>
                    </td>
                  </tr>

                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>7</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>1</span>
                    </td>
                  </tr>

                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>8</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>1</span>
                    </td>
                  </tr>

                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>9</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>1</span>
                    </td>
                  </tr>

                  <tr className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                    <td className="px-3 py-2 text-left">
                      <span>10</span>
                    </td>
                    <td className="px-3 py-2 text-left">
                      <span>50T Mobile Crane (wheel type)</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Own/Rent </span>
                    </td>
                    <td className="px-3 py-2">
                      <span>Nos</span>
                    </td>
                    <td className="px-3 py-2">
                      <span>1</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
