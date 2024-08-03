import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-green-800 bg-green-900 py-10">
      <footer className="footer container mx-auto p-10 text-white">
        <aside>
          <Link href="/" className="text-3xl font-serif">
            <Image
              src={logo}
              className="w-12"
              title="Farees Construction Limited (FCL)"
              alt="FCL logo"
            ></Image>
          </Link>
          <p>
            Farees Construction Limited
            <br />A SISTER CONCERN OF MAN ENTERPRISE
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
