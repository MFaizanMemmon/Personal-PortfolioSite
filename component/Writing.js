'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiEdit3 } from 'react-icons/fi';
import { site, writingTopics } from '@/data/site';

export default function Writing() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="writing" className="writing-section relative overflow-hidden px-6 py-24 md:px-20 md:py-28">
      <div className="writing-orb" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="writing-layout">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="writing-intro"
          >
            <div className="section-kicker"><span /> Technical writing</div>
            <h2>Notes from building <em>business software.</em></h2>
            <p>
              Practical notes on ERP workflows, SQL Server and maintainable desktop
              applications. They are being prepared properly and will be published here when
              they are ready — not presented as finished articles before then.
            </p>
            <a
              className="writing-suggest"
              href={`mailto:${site.email}?subject=Topic%20suggestion%20for%20your%20technical%20notes`}
            >
              Suggest a topic
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </motion.div>

          <div className="writing-list">
            {writingTopics.map((topic, index) => (
              <motion.article
                key={topic.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="writing-card"
              >
                <div className="writing-card-meta">
                  <span>{topic.number}</span>
                  <p><FiEdit3 aria-hidden="true" /> {topic.status}</p>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="writing-draft">Draft outline</span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
