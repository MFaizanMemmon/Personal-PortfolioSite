'use client';

import Image from 'next/image';
import { Link } from 'react-scroll';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiGlobe, FiLayout, FiMonitor, FiSmartphone } from 'react-icons/fi';

const services = [
  {
    number: '01',
    title: 'Windows Applications',
    shortTitle: 'Desktop',
    description: 'Reliable custom software designed around your daily business operations and team workflows.',
    deliverables: ['Business management', 'SQL Server tools', 'POS and restaurant systems'],
    image: '/assets/Skills/winformapp.jpg',
    icon: FiMonitor,
    accent: 'blue',
  },
  {
    number: '02',
    title: 'Web Applications',
    shortTitle: 'Web apps',
    description: 'Scalable, secure platforms with clean customer experiences and powerful administration.',
    deliverables: ['ERP and business portals', 'E-commerce platforms', 'API-driven applications'],
    image: '/assets/Skills/FullStack.jpg',
    icon: FiGlobe,
    accent: 'violet',
  },
  {
    number: '03',
    title: 'Professional Websites',
    shortTitle: 'Websites',
    description: 'Fast, responsive websites that communicate your value clearly and build trust with customers.',
    deliverables: ['Portfolio websites', 'Business showcase sites', 'SEO-friendly experiences'],
    image: '/assets/Skills/staticSite.jpg',
    icon: FiLayout,
    accent: 'cyan',
  },
  {
    number: '04',
    title: 'Mobile Applications',
    shortTitle: 'Mobile',
    description: 'Purpose-built mobile products that bring essential business workflows into your customers’ hands.',
    deliverables: ['Appointment systems', 'QR selling workflows', 'Cross-platform applications'],
    image: '/assets/Skills/MobileApp.jpg',
    icon: FiSmartphone,
    accent: 'indigo',
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--services-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--services-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="services" onPointerMove={handlePointerMove} className="services-section relative overflow-hidden px-6 md:px-20 py-24 md:py-28">
      <div className="services-spotlight" aria-hidden="true" />
      <div className="services-shape services-shape-one" aria-hidden="true" />
      <div className="services-shape services-shape-two" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .5 }}
          className="services-heading"
        >
          <div className="section-kicker"><span /> What I can build</div>
          <div className="services-title-row">
            <h2>From a business challenge<br />to a <em>finished product.</em></h2>
            <div>
              <p>Thoughtful software across desktop, web, and mobile—designed for the way your business actually works.</p>
              <Link to="contact" smooth duration={700} offset={-100} className="services-heading-link cursor-pointer">
                Discuss your project <FiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -9 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ duration: .65, delay: (index % 2) * .1 }}
                className={`service-card compact-service-card service-card-${service.accent}`}
              >
                <div className="compact-service-top">
                  <div className="compact-service-image">
                    <Image src={service.image} alt="" fill sizes="88px" className="object-cover" />
                  </div>
                  <div className="compact-service-icon"><Icon /></div>
                  <span className="service-number">{service.number}</span>
                  <span className="compact-service-label">{service.shortTitle}</span>
                </div>

                <div className="service-card-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.deliverables.map((item) => <li key={item}><FiCheck /> {item}</li>)}
                  </ul>
                  <Link to="contact" smooth duration={700} offset={-100} className="service-cta cursor-pointer">
                    Start a conversation
                    <span><FiArrowRight /></span>
                  </Link>
                </div>
                <div className="service-card-glow" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="services-bottom-cta"
        >
          <div>
            <span>Have something different in mind?</span>
            <h3>Custom requirements are welcome.</h3>
          </div>
          <Link to="contact" smooth duration={700} offset={-100} className="services-bottom-button cursor-pointer">
            Let’s build it <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
