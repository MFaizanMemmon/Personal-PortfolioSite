'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiShoppingBag,
} from 'react-icons/fi';
import { services } from '@/data/site';

const serviceIcons = {
  erp: FiLayers,
  pos: FiShoppingBag,
  web: FiGlobe,
  desktop: FiMonitor,
  database: FiDatabase,
  report: FiBarChart2,
};

const serviceImages = {
  erp: '/assets/Skills/FullStack.jpg',
  pos: '/assets/Restaurant_Management/POS.jpg',
  web: '/assets/Skills/staticSite.jpg',
  desktop: '/assets/Skills/winformapp.jpg',
  database: '/assets/SqlServer.png',
  report: '/assets/Skills/PDFLogo.png',
};

const accents = ['blue', 'violet', 'cyan', 'indigo', 'blue', 'violet'];

export default function Services() {
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--services-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--services-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="services"
      onPointerMove={handlePointerMove}
      className="services-section relative overflow-hidden px-6 py-24 md:px-20 md:py-28"
    >
      <div className="services-spotlight" aria-hidden="true" />
      <div className="services-shape services-shape-one" aria-hidden="true" />
      <div className="services-shape services-shape-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="services-heading"
        >
          <div className="section-kicker"><span /> What I can build</div>
          <div className="services-title-row">
            <h2>From a business challenge<br />to a <em>finished product.</em></h2>
            <div>
              <p>
                Thoughtful software across desktop, web, mobile and data — designed for the way
                your business actually works.
              </p>
              <a href="#contact" className="services-heading-link">
                Discuss your project <FiArrowRight />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? FiLayers;
            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -9 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: (index % 3) * 0.07 }}
                className={`service-card compact-service-card service-card-${accents[index % accents.length]}`}
              >
                <div className="compact-service-top">
                  <div className="compact-service-image">
                    <Image src={serviceImages[service.icon]} alt="" fill sizes="88px" className="object-cover" />
                  </div>
                  <div className="compact-service-icon"><Icon aria-hidden="true" /></div>
                  <span className="service-number">{service.number}</span>
                  <span className="compact-service-label">{service.title.split(' ')[0]}</span>
                </div>

                <div className="service-card-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.outcomes.map((item) => <li key={item}><FiCheck aria-hidden="true" /> {item}</li>)}
                  </ul>
                  <a href="#contact" className="service-cta">
                    Start a conversation
                    <span><FiArrowRight /></span>
                  </a>
                </div>
                <div className="service-card-glow" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="services-bottom-cta"
        >
          <div>
            <span>Have something different in mind?</span>
            <h3>Custom requirements are welcome.</h3>
          </div>
          <a href="#contact" className="services-bottom-button">
            Let&apos;s build it <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
