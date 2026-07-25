'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiGrid, FiImage, FiX } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'SQL Server Helper',
    category: 'Developer Tool',
    summary: 'A focused desktop toolkit that makes SQL Server administration and database comparison faster.',
    tags: ['C#', 'SQL Server', 'Desktop'],
    features: ['Compare database schemas', 'Generate realistic dummy data', 'Track procedures, triggers and tables', 'Transfer data between databases'],
    images: ['/assets/SqlHelper/Dashboard.jpg', '/assets/SqlHelper/Connection.jpg', '/assets/SqlHelper/TrackStoreProcedures.jpg', '/assets/SqlHelper/DBCompare.jpg'],
  },
  {
    title: 'Restaurant Management System',
    category: 'Business Platform',
    summary: 'An end-to-end restaurant operations platform—from table service and billing to kitchen and reporting.',
    tags: ['POS', '.NET', 'Reporting'],
    features: ['Billing and point of sale', 'Kitchen token management', 'Delivery tracking', 'Multi-user support', 'Expense and cash management', 'Table and staff management'],
    images: ['/assets/Restaurant_Management/Billing.jpg', '/assets/Restaurant_Management/Dashboard.jpg', '/assets/Restaurant_Management/POS.jpg', '/assets/Restaurant_Management/Products.jpg', '/assets/Restaurant_Management/Staff.jpg', '/assets/Restaurant_Management/Tables.jpg'],
  },
  {
    title: 'Wheat Shop Accounting',
    category: 'Accounting System',
    summary: 'Purpose-built accounting software for grain businesses with multilingual workflows and clear reporting.',
    tags: ['Accounting', 'Invoices', 'Desktop'],
    features: ['Multi-language support', 'Customer and invoice management', 'Expense tracking', 'Reports and dashboards'],
    images: ['/assets/AnajPOS/CreateCustomer.jpg', '/assets/AnajPOS/Invoices.jpg', '/assets/AnajPOS/Customer-Receiving-Voucher.jpg', '/assets/AnajPOS/Manage-Expenses.jpg', '/assets/AnajPOS/Report-Dashboard.jpg'],
  },
  {
    title: 'Enterprise ERP System',
    category: 'Flagship Product',
    summary: 'A secure, multi-branch ERP connecting sales, accounting, inventory and business reporting.',
    tags: ['ASP.NET Core 8', 'ERP', 'MVC'],
    features: ['Multi-branch architecture', 'Role-based access', 'Sales, accounting and inventory', 'Counter sales and printing', 'Financial reports', 'Secure authentication'],
    images: ['/assets/Electron-Erp/Dashboard.jpg', '/assets/Electron-Erp/CounterSale.jpg', '/assets/Electron-Erp/CounterSaleReceipt.jpg', '/assets/Electron-Erp/SaleOrder.jpg', '/assets/Electron-Erp/SaleOrderPrint.jpg', '/assets/Electron-Erp/General Journal Voucher.jpg', '/assets/Electron-Erp/Reports.jpg', '/assets/Electron-Erp/Multi-Theme.jpg', '/assets/Electron-Erp/UserProfile.jpg'],
  },
  {
    title: 'Job Listing System',
    category: 'Web Application',
    summary: 'A fast, SEO-ready hiring platform with customer portals and role-specific administration.',
    tags: ['Blazor SSR', '.NET 8', 'Auth'],
    features: ['Server-side rendering', 'Secure authentication', 'Admin and user dashboards', 'Job and category management', 'Customer portal', 'Permission handling'],
    images: ['/assets/JLS/JLS-CustomerPortal-3.jpg', '/assets/JLS/JLS-LoginPage.jpg', '/assets/JLS/JLS-ShowCategory.jpg', '/assets/JLS/JLS-Dashboard.jpg', '/assets/JLS/JLS-DashboardWithAdmin.jpg', '/assets/JLS/JLS-DashboardWithAdmins.jpg', '/assets/JLS/JLS-DashboardWithUser.jpg', '/assets/JLS/JLS-AccessDenide.jpg', '/assets/JLS/JLS-CreateJob.jpg', '/assets/JLS/JLS-CustomerPortal-2.jpg'],
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--projects-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--projects-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="projects" onPointerMove={handlePointerMove} className="projects-section relative overflow-hidden px-6 md:px-20 py-24 md:py-28">
      <div className="projects-spotlight" aria-hidden="true" />
      <div className="projects-orb projects-orb-one" aria-hidden="true" />
      <div className="projects-orb projects-orb-two" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .5 }}
          className="projects-heading"
        >
          <div className="section-kicker"><span /> Selected work</div>
          <div className="projects-title-row">
            <h2>Products built around<br /><em>real business needs.</em></h2>
            <div className="projects-heading-note">
              <span><FiGrid /> 05 case studies</span>
              <p>Desktop, web, ERP and operational systems designed to make complex work feel simple.</p>
            </div>
          </div>
        </motion.div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              viewport={{ once: true, amount: .16 }}
              transition={{ duration: .65, delay: (index % 3) * .08 }}
              onClick={() => setSelectedProject(project)}
              className={`project-showcase-card project-card-${index + 1}`}
            >
              <div className="project-visual">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} interface`}
                  fill
                  sizes={index === 0 || index === 3 ? '(max-width: 900px) 100vw, 64vw' : '(max-width: 900px) 100vw, 36vw'}
                  className="object-cover object-top"
                />
                <div className="project-visual-overlay" />
                <span className="project-count">{String(index + 1).padStart(2, '0')}</span>
                <span className="project-gallery-count"><FiImage /> {project.images.length} screens</span>
                <button className="project-open" aria-label={`View ${project.title}`}>
                  <FiArrowUpRight />
                </button>
              </div>

              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: .94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: .96, y: 20 }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              onClick={(event) => event.stopPropagation()}
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <button onClick={() => setSelectedProject(null)} className="project-modal-close" aria-label="Close project"><FiX /></button>
              <div className="project-modal-layout">
                <div className="project-modal-gallery">
                  <Swiper
                    spaceBetween={18}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="project-swiper"
                  >
                    {selectedProject.images.map((image, index) => (
                      <SwiperSlide key={image}>
                        <div className="project-slide">
                          <Image src={image} alt={`${selectedProject.title} screen ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 65vw" className="object-contain" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="project-modal-copy">
                  <span className="project-category">{selectedProject.category}</span>
                  <h3 id="project-modal-title">{selectedProject.title}</h3>
                  <p>{selectedProject.summary}</p>
                  <div className="project-modal-tags">
                    {selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <h4>Core capabilities</h4>
                  <ul>
                    {selectedProject.features.map((feature) => <li key={feature}><FiCheck /> {feature}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
