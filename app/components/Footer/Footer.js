import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 bg-green-600 py-10">
      <footer className="footer container mx-auto p-10 text-white">
        <aside>
          <Link href="/" className="text-3xl font-serif font-bold">
            <span className="text-red-700">F</span>
            <span className="text-green-700">C</span>
            <span className="text-black">L</span>
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
