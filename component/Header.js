'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6 sm:px-10 md:px-20 text-center md:text-left pt-20 md:pt-28 gap-10 md:gap-16 overflow-hidden"
    >
      {/* Background animated circles */}
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <div className="bg-circle3"></div>

      {/* Profile Image */}
      <div className="relative flex-shrink-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-200 opacity-20 -z-10"></div>
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl relative">
          <Image
            src="/assets/FaizanDpNew.jpg"
            alt="Faizan Engineer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 max-w-xl space-y-4 z-10">
        <p className="text-base sm:text-lg text-gray-700 uppercase tracking-wide">
          Hi, I am <span className="text-blue-600 font-semibold">Faizan</span>
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug">
          Full Stack <span className="text-gray-900">.NET Developer</span>
        </h1>

        <h2 className="text-lg sm:text-xl text-gray-700">Based in Pakistan</h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-lg">
          I am a full stack developer from Sindh, Pakistan, with 4 years of
          experience in multiple companies like BMC Solution, Appsxone IT
          Solution, Intrapreneur, and my own products. I build professional
          and efficient software.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* Contact Me - subtle theme-matched style */}
          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-100}
            className="flex items-center justify-center space-x-2 px-4 py-2 border border-blue-600 rounded-full font-medium text-blue-600 hover:text-white hover:bg-blue-600 hover:shadow-md transition cursor-pointer"
          >
            📩 Contact Me
          </Link>

          {/* Resume - keep same as Navbar */}
          <a
            href="/assets/Faizan%20.Net%20Developer.pdf"
            download
            className="flex items-center justify-center space-x-2 px-4 py-2 border rounded-full font-medium hover:shadow-md transition text-gray-900 hover:text-white hover:bg-blue-600"
          >
            📄 My Resume
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
