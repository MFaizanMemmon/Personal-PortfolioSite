'use client'
import React from 'react'
import Image from 'next/image'

const services = [
  {
    title: 'Windows Applications',
    description:
      'Custom desktop applications for businesses, including Business Management apps, Code Workflow tools, SQL Server helpers, Restaurant apps, and any tailored solution.',
    image: '/assets/Skills/winformapp.jpg'
  },
  {
    title: 'Web Applications',
    description:
      'ERP systems for businesses, E-Commerce platforms, Book Stores, complete with customer and admin portals, hosting-ready.',
    image: '/assets/Skills/FullStack.jpg'
  },
  {
    title: 'Websites',
    description:
      'Static and showcase websites, such as portfolios, business showcase sites, and other informational websites.',
    image: '/assets/Skills/staticSite.jpg'
  },
  {
    title: 'Mobile Applications',
    description:
      'Mobile solutions including appointment systems, QR-based item selling apps, and other customized mobile applications.',
    image: '/assets/Skills/MobileApp.jpg'
  }
]

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 px-6 md:px-20 py-16 font-sans">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-gray-900">
          Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I provide a range of solutions across desktop, web, and mobile platforms to help businesses thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 duration-300 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-inner flex items-center justify-center bg-gray-50">
              <Image
                src={service.image}
                alt={service.title}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-serif text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
