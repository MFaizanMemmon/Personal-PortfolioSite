'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FiCheck, FiLayers } from 'react-icons/fi';
import ProcessRail from './ProcessRail';
import {
  engineeringContext,
  engineeringPractices,
  engineeringProcess,
} from '@/data/site';

export default function Engineering() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="engineering"
      className="engineering-section relative overflow-hidden px-6 py-24 md:px-20 md:py-28"
    >
      <div className="engineering-orb engineering-orb-one" aria-hidden="true" />
      <div className="engineering-orb engineering-orb-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="engineering-heading"
        >
          <div className="section-kicker"><span /> How I engineer software</div>
          <div className="engineering-title-row">
            <h2>The visible screen is the last part <em>I think about.</em></h2>
            <p>
              Business software is mostly decisions about data, state and sequence. These are
              the working principles I bring to an ERP, POS or back-office build.
            </p>
          </div>
        </motion.div>

        <ProcessRail steps={engineeringProcess} />

        <div className="practice-grid">
          {engineeringPractices.map((practice, index) => (
            <motion.article
              key={practice.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.06 }}
              className="practice-card"
            >
              <div className="practice-top">
                <span>{practice.number}</span>
                <small>{practice.status}</small>
              </div>
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="engineering-bottom">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="engineering-note"
          >
            <div className="section-kicker"><span /> Architecture context</div>
            <h3>Layered where it helps. Pragmatic where it does not.</h3>
            <p>
              In production I have worked with ASP.NET MVC/Core applications, SQL Server,
              stored procedures, ADO.NET and server-rendered interfaces. I use layered
              separation to keep business rules, data access and presentation from turning into
              one another, without adding abstraction that has no operational benefit.
            </p>
            <p>
              I have studied cleaner architecture patterns and use them selectively. I will not
              claim a pattern is in production simply because it is familiar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="engineering-context"
          >
            <div className="section-kicker"><span /> Production context</div>
            <ul>
              {engineeringContext.map((item) => (
                <li key={item}><FiCheck aria-hidden="true" /> {item}</li>
              ))}
            </ul>
            <div className="engineering-flow" aria-label="Data flow from transaction to report">
              <div>
                <span>01</span>
                <strong>Transaction</strong>
              </div>
              <i aria-hidden="true" />
              <div>
                <span>02</span>
                <strong>Ledger / stock</strong>
              </div>
              <i aria-hidden="true" />
              <div>
                <span>03</span>
                <strong>Report</strong>
              </div>
            </div>
            <div className="engineering-context-badge">
              <FiLayers aria-hidden="true" />
              <span>Document → state → report</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
