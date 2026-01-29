'use client';

import React, { useState } from 'react';
import { FaDownload, FaGithub, FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: "SQL Server Helper",
    description: `A desktop application for SQL Server management.
- Compare database schemas
- Generate dummy data
- Track stored procedures, triggers, tables
- Transfer data between databases`,
    images: [
      "/assets/SqlHelper/Dashboard.jpg",
      "/assets/SqlHelper/Connection.jpg",
      "/assets/SqlHelper/TrackStoreProcedures.jpg",
      "/assets/SqlHelper/DBCompare.jpg",
    ],
    github: "https://github.com/yourrepo/sql-server-helper",
    download: "/downloads/sql-server-helper.zip",
  },
  {
    title: "Restaurant Management System",
    description: `Complete solution for restaurants:
- Billing & POS
- Kitchen token management
- Delivery tracking
- Multi-user support
- Expense & cash management
- Table & staff management`,
    images: [
      "/assets/Restaurant_Management/Billing.jpg",
      "/assets/Restaurant_Management/Dashboard.jpg",
      "/assets/Restaurant_Management/POS.jpg",
      "/assets/Restaurant_Management/Products.jpg",
      "/assets/Restaurant_Management/Staff.jpg",
      "/assets/Restaurant_Management/Tables.jpg",
    ],
    github: "https://github.com/yourrepo/restaurant-management",
    download: "/downloads/restaurant-management.zip",
  },
  {
    title: "Wheat Shop Accounting System",
    description: `Accounting software for grain businesses:
- Multi-language support
- Customer & invoice management
- Expense tracking
- Reports & dashboards`,
    images: [
      "/assets/AnajPOS/CreateCustomer.jpg",
      "/assets/AnajPOS/Invoices.jpg",
      "/assets/AnajPOS/Customer-Receiving-Voucher.jpg",
      "/assets/AnajPOS/Manage-Expenses.jpg",
      "/assets/AnajPOS/Report-Dashboard.jpg",
    ],
    github: "https://github.com/yourrepo/wheat-shop-accounting",
    download: "/downloads/wheat-shop-accounting.zip",
  },
  {
    title: "ERP System (ASP.NET Core MVC 8.0)",
    description: `Enterprise ERP system built with ASP.NET Core 8.0:
- Multi-branch architecture
- Multi-user role-based access
- Sales, accounting & inventory workflows
- Counter sales & receipt printing
- Financial & operational reports
- Secure authentication & authorization`,
    images: [
      "/assets/Electron-Erp/Dashboard.jpg",
      "/assets/Electron-Erp/CounterSale.jpg",
      "/assets/Electron-Erp/CounterSaleReceipt.jpg",
      "/assets/Electron-Erp/SaleOrder.jpg",
      "/assets/Electron-Erp/SaleOrderPrint.jpg",
      "/assets/Electron-Erp/General Journal Voucher.jpg",
      "/assets/Electron-Erp/Reports.jpg",
      "/assets/Electron-Erp/Multi-Theme.jpg",
      "/assets/Electron-Erp/UserProfile.jpg",
    ],
    github: "https://github.com/yourrepo/aspnet-core-erp",
    download: "/downloads/aspnet-core-erp.zip",
  },
  {
    title: "Job Listing System (Blazor SSR – .NET 8)",
    description: `Job Listing System built using Blazor SSR (.NET 8.0):
- Server-side rendering with Blazor
- Secure authentication & authorization
- Role-based dashboards (Admin / User)
- Job creation & category management
- Customer portal access
- Access denied & permission handling
- SEO-friendly and fast initial load`,
    images: [
      "/assets/JLS/JLS-CustomerPortal-3.jpg", // Thumbnail
      "/assets/JLS/JLS-LoginPage.jpg",
      "/assets/JLS/JLS-ShowCategory.jpg",
      "/assets/JLS/JLS-Dashboard.jpg",
      "/assets/JLS/JLS-DashboardWithAdmin.jpg",
      "/assets/JLS/JLS-DashboardWithAdmins.jpg",
      "/assets/JLS/JLS-DashboardWithUser.jpg",
      "/assets/JLS/JLS-AccessDenide.jpg",
      "/assets/JLS/JLS-CreateJob.jpg",
      "/assets/JLS/JLS-CustomerPortal-2.jpg",
    ],
    github: "https://github.com/yourrepo/jls-blazor-ssr",
    download: "/downloads/jls-blazor-ssr.zip",
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-white py-20 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          My Projects
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Explore my projects. Click on any card to see more details.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-50 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 text-sm whitespace-pre-line line-clamp-4">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900"
            >
              <FaTimes />
            </button>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 mb-6 whitespace-pre-line">
                {selectedProject.description}
              </p>

              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="h-64 md:h-96"
              >
                {selectedProject.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt=""
                      className="w-full h-64 md:h-96 object-cover rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
