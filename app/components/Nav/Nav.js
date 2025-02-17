"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import logo from "@/public/assets/logo/logo.png";

const Nav = () => {
  const onButtonClick = () => {
    fetch("/assets/documents/FCL_Brochure.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "FCL_Brochure.pdf";
        alink.click();
      });
    });
  };

  const navItems = (
    <>
      <li>
        <Link href="/about">Home</Link>
      </li>
      <li>
        <Link href="/about">EXplore Us</Link>
      </li>
      <li>
        <Link href="/area-of-activities">Area of Activities</Link>
      </li>
      <li>
        <Link href="/about">CSR</Link>
      </li>
      <li className="relative group">
        <span className="cursor-pointer flex items-center">
          Associate With <GoChevronDown className="ml-1 font-bold text-2xl" />
        </span>
        <ul className="absolute left-0 mt-10 hidden bg-white opacity-80 text-black shadow-md rounded-md group-hover:block w-60 p-2">
          <li>
            <Link href="/company-1">Company 1</Link>
          </li>
          <li>
            <Link href="/company-2">Company 2</Link>
          </li>
        </ul>
      </li>
      <li className="relative group">
        <span className="cursor-pointer flex items-center">
          Equipment&apos;s <GoChevronDown className="ml-1 font-bold text-2xl" />
        </span>
        <ul className="absolute left-0 mt-10 hidden bg-white opacity-80 text-black shadow-md rounded-md group-hover:block w-60 p-2">
          <li>
            <Link href="/list-equipments">Equipment List</Link>
          </li>
          <li>
            <Link href="/photo-equipments">Equipment Photos</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/project">Projects</Link>
      </li>
      <li>
        <Link href="/about">Career</Link>
      </li>
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  const handleScroll = () => {
    const navbar = document.querySelector(".fancyNav");
    if (navbar) {
      if (window.scrollY > window.innerHeight * 0.3) {
        navbar.classList.add(
          "bg-gradient-to-r",
          "from-green-800",
          "bg-green-900",
          "text-black"
        );
      } else {
        navbar.classList.remove(
          "bg-gradient-to-r",
          "from-green-800",
          "bg-green-900",
          "text-black"
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-green-800 fancyNav sticky top-0 z-50 font-bold  text-white shadow-md">
      <div className="navbar flex justify-between items-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link href="/" className="text-3xl ">
              <Image
                src={logo}
                className="w-12"
                title="Farees Construction Limited (FCL)"
                alt="FCL logo"
              ></Image>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex flex-grow">
            <ul className="menu menu-horizontal px-1 uppercase flex items-center">
              {navItems}
            </ul>
          </div>
          <div className="navbar-end flex items-center">
            <a
              onClick={onButtonClick}
              href="#"
              className="bg-green-700 hover:bg-green-700 hover:text-white duration-500 rounded-full px-5 py-2 flex items-center cursor-pointer"
            >
              Brochure <MdOutlineFileDownload className="ml-2 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
