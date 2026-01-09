'use client';

import React, { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveLink(link.toLowerCase());
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 py-4">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={700}
          offset={-100}
          spy={true}
          className={`text-xl sm:text-2xl font-bold tracking-wide cursor-pointer ${
            activeLink === "home" ? "text-blue-600" : "text-gray-900"
          }`}
        >
          Faizan .Net Dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={700}
                offset={-100}
                className={`cursor-pointer text-gray-700 hover:text-gray-900 transition font-medium ${
                  activeLink === link.toLowerCase()
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* CV Download */}
        <div className="hidden md:flex">
          <a
            href="/assets/Faizan%20.Net%20Developer.pdf"
            download
            className="flex items-center space-x-2 px-4 py-2 border rounded-full font-medium hover:shadow-md transition text-gray-900 hover:text-white hover:bg-blue-600"
          >
            <FiDownload size={18} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-900"
          >
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-lg">
          <ul className="flex flex-col px-4 py-4 space-y-4">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={700}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                  className={`block cursor-pointer text-gray-700 hover:text-gray-900 transition font-medium ${
                    activeLink === link.toLowerCase()
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/assets/Faizan%20.Net%20Developer.pdf"
                download
                className="flex items-center space-x-2 px-4 py-2 border rounded-full font-medium hover:shadow-md transition text-gray-900 hover:text-white hover:bg-blue-600"
              >
                <FiDownload size={18} />
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
