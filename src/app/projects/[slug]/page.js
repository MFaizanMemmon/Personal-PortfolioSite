import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiLayers,
} from "react-icons/fi";
import ProjectGallery from "../../../../component/ProjectGallery";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/data/projects";
import { blurDataURL, screenshotQuality } from "@/data/image";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — ${project.category} Case Study`,
    description: project.seoDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.seoDescription,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.gallery[0].src,
          alt: project.gallery[0].alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study`,
      description: project.seoDescription,
      images: [project.gallery[0].src],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);
  const heroImage = project.gallery[0];
  const index = projects.findIndex((item) => item.slug === project.slug) + 1;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${site.url}/projects/${project.slug}/#project`,
        name: project.title,
        description: project.seoDescription,
        url: `${site.url}/projects/${project.slug}`,
        image: project.gallery.map((image) => `${site.url}${image.src}`),
        genre: project.category,
        keywords: project.techGroups.flatMap((group) => group.items).join(", "),
        creator: { "@id": `${site.url}/#person` },
        isPartOf: { "@id": `${site.url}/#website` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/projects/${project.slug}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Selected work",
            item: `${site.url}/#work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${site.url}/projects/${project.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <article className="case-study">
      <div className="case-study-hero">
        <div className="section-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#work">Selected work</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>

          <div className="case-study-heading">
            <div>
              <p className="eyebrow">
                {project.category} <span aria-hidden="true">·</span> Case study{" "}
                {String(index).padStart(2, "0")}
              </p>
              <h1>{project.title}</h1>
              <p className="case-study-summary">{project.summary}</p>
              <div className="case-study-actions">
                <Link className="button button-primary" href="/#contact">
                  Discuss a similar project
                  <FiArrowRight aria-hidden="true" />
                </Link>
                <Link className="button button-secondary" href="/#work">
                  <FiArrowLeft aria-hidden="true" />
                  All projects
                </Link>
              </div>
            </div>

            <aside className="case-study-facts" aria-label="Project facts">
              <div>
                <span>Project type</span>
                <strong>{project.category}</strong>
              </div>
              <div>
                <span>Screenshots</span>
                <strong>{project.gallery.length} images</strong>
              </div>
              <div>
                <span>Build</span>
                <strong>{project.featured ? "Flagship project" : "Working build"}</strong>
              </div>
              <div>
                <span>Portfolio</span>
                <strong>Case study {String(index).padStart(2, "0")} / 05</strong>
              </div>
            </aside>
          </div>

          <figure className="case-study-hero-image">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1280px"
              quality={screenshotQuality}
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-cover"
            />
            <figcaption>{heroImage.caption}</figcaption>
          </figure>
        </div>
      </div>

      <div className="section-shell case-study-layout">
        <aside className="case-study-sidebar">
          <div className="case-study-sidebar-block">
            <p className="eyebrow">Technology</p>
            {project.techGroups.map((group) => (
              <div key={group.label} className="case-tech-group">
                <span>{group.label}</span>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {project.modules && (
            <div className="case-study-sidebar-block">
              <p className="eyebrow">Verified modules</p>
              <ul className="case-module-list">
                {project.modules.map((module) => (
                  <li key={module}>
                    <FiCheck aria-hidden="true" />
                    {module}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="case-study-sidebar-block">
            <p className="eyebrow">Project links</p>
            {project.links.length > 0 ? (
              <ul className="case-project-links">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="case-sidebar-note">
                No public demo or repository is available for this project. Source and
                environment access remain private.
              </p>
            )}
          </div>

          <div className="case-study-sidebar-block">
            <p className="eyebrow">Note</p>
            <p className="case-sidebar-note">{project.note}</p>
          </div>
        </aside>

        <div className="case-study-content">
          <section className="case-section" data-reveal>
            <p className="case-section-number">01</p>
            <div>
              <h2>Project overview</h2>
              <p className="case-lead">{project.overview}</p>
            </div>
          </section>

          <section className="case-section" data-reveal>
            <p className="case-section-number">02</p>
            <div>
              <h2>Business problem</h2>
              <p>{project.problem}</p>
            </div>
          </section>

          <section className="case-section" data-reveal>
            <p className="case-section-number">03</p>
            <div>
              <h2>What the software does</h2>
              <p>{project.solution}</p>
              <ul className="case-feature-grid">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <FiCheck aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {project.workflow && (
            <section className="case-section case-section-wide" data-reveal>
              <p className="case-section-number">04</p>
              <div>
                <h2>Core business flow</h2>
                <p>
                  The operational path the ERP is built around, from the sales document to the
                  report a manager reads.
                </p>
                <ol className="case-workflow">
                  {project.workflow.map((step, stepIndex) => (
                    <li key={step.title}>
                      <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                      {stepIndex < project.workflow.length - 1 && (
                        <FiArrowRight className="case-workflow-arrow" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {project.architecture && (
            <section className="case-section case-section-wide" data-reveal>
              <p className="case-section-number">05</p>
              <div>
                <h2>Architecture overview</h2>
                <p>{project.architecture.note}</p>
                <div className="architecture-stack">
                  {project.architecture.layers.map((layer, layerIndex) => (
                    <div key={layer.label} className="architecture-layer">
                      <span>{String(layerIndex + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{layer.label}</h3>
                        <p>{layer.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="case-section" data-reveal>
            <p className="case-section-number">{project.architecture ? "06" : "04"}</p>
            <div>
              <h2>Technical focus</h2>
              <div className="case-focus-grid">
                {project.focus.map((item) => (
                  <article key={item.title}>
                    <FiLayers aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="case-section case-section-wide" data-reveal>
            <p className="case-section-number">{project.architecture ? "07" : "05"}</p>
            <div>
              <h2>Screenshots</h2>
              <p>{project.note}</p>
              <ProjectGallery
                images={project.gallery}
                projectTitle={project.title}
                projectSlug={project.slug}
                mode="grid"
              />
            </div>
          </section>

          {project.decisions && (
            <section className="case-section" data-reveal>
              <p className="case-section-number">08</p>
              <div>
                <h2>Engineering decisions</h2>
                <div className="decision-list">
                  {project.decisions.map((decision, decisionIndex) => (
                    <article key={decision.title}>
                      <span>{String(decisionIndex + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{decision.title}</h3>
                        <p>{decision.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="case-section" data-reveal>
            <p className="case-section-number">{project.decisions ? "09" : "06"}</p>
            <div>
              <h2>Business value</h2>
              <p className="case-lead">{project.businessValue}</p>
              {project.statusNote && <p className="case-status-note">{project.statusNote}</p>}
            </div>
          </section>

          {project.lessons && (
            <section className="case-section" data-reveal>
              <p className="case-section-number">{project.decisions ? "10" : "07"}</p>
              <div>
                <h2>What I took from it</h2>
                <blockquote className="case-quote">{project.lessons}</blockquote>
              </div>
            </section>
          )}

          <section className="case-cta" data-reveal>
            <p className="eyebrow">Next conversation</p>
            <h2>Need something like this built properly?</h2>
            <p>
              Describe the workflow and the problem it needs to solve. I will tell you honestly
              whether it is a fit.
            </p>
            <a className="button button-primary" href={`mailto:${site.email}`}>
              Email me about a project
              <FiArrowRight aria-hidden="true" />
            </a>
          </section>
        </div>
      </div>

      <nav className="case-pagination section-shell" aria-label="More projects">
        <Link href={`/projects/${previous.slug}`}>
          <span>
            <FiArrowLeft aria-hidden="true" /> Previous case study
          </span>
          <strong>{previous.title}</strong>
        </Link>
        <Link href={`/projects/${next.slug}`}>
          <span>
            Next case study <FiArrowRight aria-hidden="true" />
          </span>
          <strong>{next.title}</strong>
        </Link>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </article>
  );
}
