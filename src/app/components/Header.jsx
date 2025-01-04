"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../public/assets/icons/air-borne.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname(); // Use usePathname hook for current route

  return (
    <header className="bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <Image
                className="w-auto h-8 lg:h-10"
                src={Logo}
                alt="Airborne Exports Logo"
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
              href="/"
              className={`text-base p-1 font-bold transition-all duration-200 ${currentPath === "/"
                ? "border-b-2 border-blue-600 !font-bold text-blue-600"
                : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-base p-1 font-medium transition-all duration-200 ${currentPath === "/products"
                ? "border-b-2 border-blue-600 !font-bold text-blue-600"
                : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                }`}
            >
              Products
            </Link>
            <Link
              href="/contact-us"
              className={`text-base p-1 font-medium transition-all duration-200 ${currentPath === "/contact-us"
                ? "border-b-2 border-blue-600 !font-bold text-blue-600"
                : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                }`}
            >
              Contact us
            </Link>
          </div>
        </nav>

        {isMenuOpen && (
          <nav className="absolute left-0 right-0 top-16 pt-4 mb-6 pb-6 bg-white border border-gray-200 shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base p-1 font-medium transition-all duration-200 ${currentPath === "/"
                    ? "text-blue-600 !font-bold"
                    : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                    }`}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base p-1 font-medium transition-all duration-200 ${currentPath === "/products"
                    ? "text-blue-600 !font-bold"
                    : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                    }`}
                >
                  Products
                </Link>
                <Link
                  href="/contact-us"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base p-1 font-medium transition-all duration-200 ${currentPath === "/contact-us"
                    ? "text-blue-600 !font-bold"
                    : "border-black text-black hover:text-blue-600 focus:text-blue-600"
                    }`}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
