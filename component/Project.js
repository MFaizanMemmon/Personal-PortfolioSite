'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaDownload, FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: "SQL Server Helper",
        description: `A powerful desktop application for SQL Server management. Features include:
- Compare database schemas between development and production environments.
- Generate dummy data for testing purposes.
- Track stored procedures, triggers, and tables.
- Transfer data from one database to another.
Some features are still in progress.`,
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
        description: `A comprehensive desktop application for restaurant management with features including:
- Billing system for counters and POS
- Kitchen token management
- Delivery rider tracking
- Multi-user support with cashier protection
- Daily cash and expense management
- Table and staff management
- Secure multi-user operations to prevent fraud`,
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
        description: `A powerful accounting software designed for wheat, rice, and dal businesses. Features include:
- Multi-language support (English & Urdu)
- Full accounting functionality for trading shops and mills
- Customer and invoice management
- Expense tracking and receiving vouchers
- Comprehensive reports and dashboard for business insights
- Easy-to-use interface tailored for rice and grain businesses`,
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
];

const Project = () => {
    return (
        <section id="projects" className="bg-gray-50 py-16 px-6 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
                <p className="text-gray-600 text-lg">Explore my projects and download or view the code.</p>
            </div>

            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Navigation]}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        {/* Make the card flex column and full height */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                            
                            {/* Nested Swiper for project images */}
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                className="relative w-full h-56"
                            >
                                {project.images.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="relative w-full h-56 group">
                                            <img
                                                src={img}
                                                alt={`${project.title} ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Full image overlay */}
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-white text-black p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
                                                    >
                                                        <FaGithub size={20} />
                                                    </a>
                                                )}
                                                {project.download && (
                                                    <a
                                                        href={project.download}
                                                        download
                                                        className="bg-white text-black p-3 rounded-full hover:bg-green-600 hover:text-white transition"
                                                    >
                                                        <FaDownload size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Make description grow to fill space */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 whitespace-pre-line flex-1">{project.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Project;
