'use client';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 md:px-20 text-center md:text-left pt-20 md:pt-28 gap-12 relative overflow-hidden"
    >
      {/* Floating Bubbles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gray-200 rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gray-300 rounded-full opacity-15 animate-bounce-slower"></div>
      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gray-200 rounded-full opacity-10 animate-bounce-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-gray-300 rounded-full opacity-10 animate-bounce-slower"></div>

      {/* Profile Image */}
      <div className="relative flex-shrink-0">
        {/* Outer subtle glow */}
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gray-200 opacity-20 absolute top-0 left-0 -z-10 animate-pulse-slow"></div>

        {/* DP */}
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl">
          <Image
            src="/assets/FaizanDpNew.jpg"
            alt="Faizan Engineer"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 max-w-xl space-y-4">
        <p className="text-lg text-gray-500 uppercase tracking-wide">
          Hi, I am <span className="text-gray-900 font-semibold">Faizan</span>
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Full Stack <span className="text-gray-900">.NET Developer</span>
        </h1>

        <h2 className="text-xl text-gray-600">Based in Pakistan</h2>

        <p className="text-gray-700">
          I am a full stack developer from Sindh, Pakistan, with 4 years of
          experience in multiple companies like BMC Solution, Appsxone IT
          Solution, Intrapreneur, and my own products. I build professional
          and efficient software.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
  <a href="#contactme" className="button-primary">
    📩 Contact Me
  </a>

  <a href="/assets/Faizan-Resume.pdf" download className="button-primary">
    📄 My Resume
  </a>
</div>

      </div>

      {/* Tailwind Animations for bubbles */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-bounce-slow {
          animation: bounce-slow 8s ease-in-out infinite;
        }
        .animate-bounce-slower {
          animation: bounce-slower 12s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
