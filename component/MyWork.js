import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Electron-ERP',
    description: 'A full-featured ERP system for electronics businesses.',
    image: '/projects/electron-erp.png',
    link: '#',
  },
  {
    title: 'Restaurant Management System',
    description: 'Desktop app for small restaurants to manage orders and inventory.',
    image: '/projects/restaurant.png',
    link: '#',
  },
  {
    title: 'SQL Helper',
    description: 'Tool to simplify SQL server operations.',
    image: '/projects/sql-helper.png',
    link: '#',
  },
  // Add more projects here
];

const MyWork = () => {
  return (
    <section id="mywork" className="bg-gray-50 py-16 px-6 md:px-20">
      {/* <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div> */}
    </section>
  );
};

export default MyWork;
