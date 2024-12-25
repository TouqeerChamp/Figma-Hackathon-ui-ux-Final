"use client";

import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Nike Logo" className="h-8 w-auto hover:bg-gray-100 rounded cursor-pointer" />
          </div>

          {/* Navbar Links for large screens */}
          <ul className="hidden sm:flex space-x-8 ml-48">
            <li>
              <Link href="/product">
                <li className="text-gray-700 hover:text-gray-400">New & Featured</li>
              </Link>
            </li>
            <li>
              <Link href="/">
                <li className="text-gray-700 hover:text-gray-400">Men</li>
              </Link>
            </li>
            <li>
              <Link href="/mensummary">
                <li className="text-gray-700 hover:text-gray-400">Women</li>
              </Link>
            </li>
            <li>
              <Link href="/kids">
                <li className="text-gray-700 hover:text-gray-400">Kids</li>
              </Link>
            </li>
            <li>
              <Link href="/menshoes">
                <li className="text-gray-700 hover:text-gray-400">Sale</li>
              </Link>
            </li>
            <li>
              <Link href="/snkrs">
                <li className="text-gray-700 hover:text-gray-400">SNKRS</li>
              </Link>
            </li>
          </ul>

          {/* Hamburger for mobile */}
          <div className="sm:hidden" onClick={toggleMenu}>
            <button className="text-gray-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Search Box and Icons */}
          <div className="flex items-center space-x-4 ml-4 sm:ml-8">
            {/* Search Box */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-gray-800 placeholder-gray-500 focus:outline-none ml-2"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <FaRegHeart className="hover:text-gray-400 cursor-pointer"/>
              <Link href="/cart"><IoBagOutline className="hover:text-gray-400 cursor-pointer"/></Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Toggle visibility */}
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center bg-white py-4 space-y-4">
            <Link href="/">
              <li className="text-gray-700">New & Featured</li>
            </Link>
            <Link href="/">
              <li className="text-gray-700">Men</li>
            </Link>
            <Link href="/mensummary">
              <li className="text-gray-700">Summary</li>
            </Link>
            <Link href="/kids">
              <li className="text-gray-700">Kids</li>
            </Link>
            <Link href="/menshoes">
              <li className="text-gray-700">Sale</li>
            </Link>
            <Link href="/snkrs">
              <li className="text-gray-700">SNKRS</li>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}