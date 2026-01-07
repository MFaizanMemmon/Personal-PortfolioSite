'use client'
import React from 'react'
import Image from 'next/image'

const services = [
  {
    title: 'Windows Applications',
    description:
      'Custom desktop applications for businesses, including Business Management apps, Code Workflow tools, SQL Server helpers, Restaurant apps, and any tailored solution.',
    image: '/assets/Skills/winformapp.jpg' // replace with your image path
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
    image: '/assets/Skills/StaticSite.jpg'
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
    <section id="services" className="bg-gray-50 px-6 md:px-20 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
        <p className="text-gray-600">
          I provide a range of solutions across desktop, web, and mobile platforms to help businesses thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
