'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiGrid, FiImage } from 'react-icons/fi';
import ProjectGallery from './ProjectGallery';
import { projects } from '@/data/projects';
import { blurDataURL, screenshotQuality } from '@/data/image';

export default function Project() {
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--projects-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--projects-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="projects"
      onPointerMove={handlePointerMove}
      className="projects-section relative overflow-hidden px-6 py-24 md:px-20 md:py-28"
    >
      <div className="projects-spotlight" aria-hidden="true" />
      <div className="projects-orb projects-orb-one" aria-hidden="true" />
      <div className="projects-orb projects-orb-two" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="projects-heading"
        >
          <div className="section-kicker"><span /> Selected work</div>
          <div className="projects-title-row">
            <h2>Products built around<br /><em>real business needs.</em></h2>
            <div className="projects-heading-note">
              <span><FiGrid /> 05 case studies</span>
              <p>
                Desktop, web, ERP and operational systems designed to make complex work feel
                simple. Every screenshot comes from a working build, with client identifiers
                redacted.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="projects-showcase">
          {projects.map((project, index) => {
            const tags = project.techGroups.flatMap((group) => group.items).slice(0, 4);
            const featured = Boolean(project.featured);
            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.65, delay: (index % 3) * 0.08 }}
                className={`project-showcase-card project-card-${index + 1} ${featured ? 'is-featured' : ''}`}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-visual"
                  aria-label={`View the ${project.title} case study`}
                >
                  <Image
                    src={project.cardImage}
                    alt={project.cardAlt}
                    fill
                    sizes={
                      index === 2
                        ? '(max-width: 900px) 100vw, 90vw'
                        : index === 0 || index === 3
                          ? '(max-width: 900px) 100vw, 64vw'
                          : '(max-width: 900px) 100vw, 36vw'
                    }
                    quality={screenshotQuality}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-cover object-top"
                  />
                  <span className="project-visual-overlay" aria-hidden="true" />
                  <span className="project-count">{String(index + 1).padStart(2, '0')}</span>
                  {featured && <span className="project-featured-badge">Flagship project</span>}
                  <span className="project-gallery-count"><FiImage /> {project.gallery.length} screens</span>
                  <span className="project-open" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>

                <div className="project-body">
                  <span className="project-category">{project.category}</span>
                  <h3>
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p>{project.summary}</p>
                  <div className="project-tags">
                    {tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>

                  <ul className="project-card-features">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature}><FiCheck aria-hidden="true" /> {feature}</li>
                    ))}
                  </ul>

                  <div className="project-card-links">
                    <Link href={`/projects/${project.slug}`} className="project-case-link">
                      View case study
                      <FiArrowUpRight aria-hidden="true" />
                    </Link>
                    <ProjectGallery
                      images={project.gallery}
                      project={project}
                      projectTitle={project.title}
                      projectSlug={project.slug}
                      mode="trigger"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
