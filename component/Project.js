import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";
import PointerGlow from "./PointerGlow";
import ProjectGallery from "./ProjectGallery";
import { projects } from "@/data/projects";
import { blurDataURL, screenshotQuality } from "@/data/image";

function ProjectTagList({ project }) {
  const tags = project.techGroups.flatMap((group) => group.items).slice(0, 4);
  return (
    <ul className="project-tags" aria-label={`Technologies used in ${project.title}`}>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      data-reveal="up"
      style={{ "--reveal-index": Math.min(index, 4) }}
    >
      <Link
        className="project-card-visual"
        href={`/projects/${project.slug}`}
        aria-label={`View the ${project.title} case study`}
      >
        <Image
          src={project.cardImage}
          alt={project.cardAlt}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
          quality={screenshotQuality}
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="project-card-image"
        />
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-card-overlay" aria-hidden="true">
          <span>
            View case study
            <FiArrowUpRight />
          </span>
        </span>
      </Link>
      <div className="project-card-body">
        <p className="project-category">{project.category}</p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <ul className="project-feature-list">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature}>
              <FiCheck aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <ProjectTagList project={project} />
        <div className="project-card-actions">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            View case study
            <FiArrowRight aria-hidden="true" />
          </Link>
          <ProjectGallery
            images={project.gallery}
            projectTitle={project.title}
            projectSlug={project.slug}
            mode="trigger"
          />
        </div>
      </div>
    </article>
  );
}

export default function Project() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="section section-work">
      <div className="section-shell">
        <div className="section-heading work-heading" data-reveal="up">
          <p className="eyebrow">Selected work</p>
          <div className="work-heading-row">
            <h2>
              Systems built around <em>how the work actually happens.</em>
            </h2>
            <div className="work-heading-note">
              <span>05 case studies</span>
              <p>
                ERP, POS, accounting, desktop utilities and web applications. Every project
                below uses screenshots from the real build.
              </p>
            </div>
          </div>
        </div>

        {featured && (
          <article className="featured-project" data-reveal="scale">
            <Link
              className="featured-visual"
              href={`/projects/${featured.slug}`}
              aria-label={`View the ${featured.title} case study`}
            >
              <Image
                src={featured.cardImage}
                alt={featured.cardAlt}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                quality={screenshotQuality}
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="featured-image"
              />
              <span className="featured-badge">Flagship project</span>
              <span className="featured-visual-note">
                <span>Enterprise ERP</span>
                <p>Sales · Purchasing · Inventory · Ledger</p>
              </span>
              <span className="featured-overlay" aria-hidden="true">
                <span>
                  Open case study
                  <FiArrowUpRight />
                </span>
              </span>
            </Link>

            <div className="featured-body">
              <p className="project-category">{featured.category}</p>
              <h3>{featured.title}</h3>
              <p className="featured-summary">{featured.summary}</p>

              <div className="featured-flow" aria-label="Core ERP transaction flow">
                {featured.workflow.map((item, index) => (
                  <div key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item.title}</strong>
                  </div>
                ))}
              </div>

              <ul className="featured-features">
                {featured.features.slice(0, 5).map((feature) => (
                  <li key={feature}>
                    <FiCheck aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <ProjectTagList project={featured} />

              <div className="featured-actions">
                <Link className="button button-primary" href={`/projects/${featured.slug}`}>
                  Read the ERP case study
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
                <ProjectGallery
                  images={featured.gallery}
                  projectTitle={featured.title}
                  projectSlug={featured.slug}
                  mode="trigger"
                />
              </div>
            </div>
          </article>
        )}

        <div className="project-grid" data-reveal-group>
          {others.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 1} />
          ))}
        </div>

        <div className="work-note" data-reveal="up">
          <p>
            Screenshots are from working builds. Customer names, contact details and connection
            information have been redacted before publication.
          </p>
          <a className="text-link" href="#engineering">
            See how I engineer these systems
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <PointerGlow selector=".project-card" />
    </section>
  );
}
