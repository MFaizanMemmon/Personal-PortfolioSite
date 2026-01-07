'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 px-6 md:px-20 py-16">
      {/* Introduction */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-lg md:text-xl text-gray-700 uppercase tracking-wider mb-2">
          Introduction
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About Me
        </h2>
      </div>

      {/* About Me Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
        {/* Left Side Content */}
        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            I am a Full Stack .NET Developer from Pakistan with 4+ years of experience building ERP, POS, and enterprise web applications.
            I have worked with companies like BMC Solution, Appsxone IT Solution, and Intrapreneur, and I also develop my own professional products.
            I specialize in ASP.NET Core, Web APIs, Angular, Blazor, and React / Next.js, with a strong foundation in finance,
            accounting systems, and business automation. I am passionate about writing clean code, learning continuously,
            and building software that creates real-world impact.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <Image
              src="/assets/FaizanWhiteBg.jpg"
              alt="Faizan Engineer"
              width={800}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* 3 Cards: Languages / Education / Certifications */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {/* Languages Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-3">
            <Image
              src="/assets/code-icon.png"
              alt="Programming Languages"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h5 className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
            Languages
          </h5>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            C#, JavaScript, TypeScript, Visual Basic (VBA)
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-3">
            <Image
              src="/assets/edu-icon.png"
              alt="Education"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h5 className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
            Education
          </h5>
          <ul className="text-gray-500 text-sm sm:text-base leading-relaxed list-disc list-inside space-y-1">
            <li>BCOM from Sindh University</li>
            <li>DCBM from Polytechnic College</li>
          </ul>
        </div>

        {/* Certifications Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-3">
            <Image
              src="/assets/project-icon.png"
              alt="Certification"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h5 className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
            Certifications
          </h5>
          <ul className="text-gray-500 text-sm sm:text-base leading-relaxed list-disc list-inside space-y-1">
            <li>Certification in .NET Programming</li>
            <li>Certification in Information Technology</li>
          </ul>
        </div>
      </div>

      {/* Tools I Use */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
          Tools I Use
        </h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {[
            { name: 'Visual Studio', src: '/assets/VS2026.svg.png' },
            { name: 'SQL Server', src: '/assets/SqlServer.jpg' },
            { name: 'VSCode', src: '/assets/vscode.png' },
            { name: 'GitHub', src: '/assets/git.png' },
            { name: 'SQL Lite', src: '/assets/SqlLite.png' },
            { name: 'Azure', src: '/assets/Azure.png' },
          ].map((tool) => (
            <div
              key={tool.name}
              className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg"
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
