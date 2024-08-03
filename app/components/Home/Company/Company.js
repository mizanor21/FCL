import "./Brand.css";
import brand1 from "@/public/assets/company/airforce_logo.png";
import brand2 from "@/public/assets/company/BUP_logo.png";
import brand3 from "@/public/assets/company/army_logo.svg";
import brand4 from "@/public/assets/company/navy_logo.png";
import brand5 from "@/public/assets/company/airforce_logo.png";
import Image from "next/image";
// import brand5 from "../../../assets/images/l-5.png";
// import brand6 from "../../../assets/images/l-6.png";
// import brand7 from "../../../assets/images/l-7.png";
// import brand8 from "../../../assets/images/l-8.png";
// import brand10 from "../../../assets/images/l-10.png";
// import brand12 from "../../../assets/images/l-12.png";
// import brand13 from "../../../assets/images/l-13.png";
// import brand14 from "../../../assets/images/l-14.png";
// import brand17 from "../../../assets/images/l-17.png";
// import brand18 from "../../../assets/images/l-18.png";

const Company = () => {
  return (
    <div className="my-20 ">
      <h3 className="text-center mb-10 text-4xl font-semibold text-[#185C5D]">
        Our Valuable Clients
      </h3>
      <div className="carousel-wrapper mb-5">
        <div className="carousel-container carousel-container-1">
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand1}
              alt="Brand 1"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand2}
              alt="Brand 2"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand3}
              alt="Brand 3"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand4}
              alt="Brand 5"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 6"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 7"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 10"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 12"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 8"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 13"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 14"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 17"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 18"
            />
          </div>
        </div>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel-container carousel-container-2 flex flex-row-reverse">
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand1}
              alt="Brand 1"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand2}
              alt="Brand 2"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand3}
              alt="Brand 3"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand4}
              alt="Brand 5"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 6"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 7"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 10"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 12"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 8"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 13"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 14"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 17"
            />
          </div>
          <div className="carousel-item">
            <Image
              className="w-40 h-40 hover:saturate-0"
              src={brand5}
              alt="Brand 18"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
