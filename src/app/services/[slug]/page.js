import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiLayers,
  FiMapPin,
} from "react-icons/fi";
import SiteFooter from "../../../../component/SiteFooter";
import { services, getService, getServiceLinks } from "@/data/services";
import { getProject } from "@/data/projects";
import { blurDataURL, screenshotQuality } from "@/data/image";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return { title: "Service not found" };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Faizan Engineer`,
      description: service.seoDescription,
      url: `/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} by Faizan Engineer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Faizan Engineer`,
      description: service.seoDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const index = services.findIndex((item) => item.slug === service.slug);
  const previous = services[index > 0 ? index - 1 : services.length - 1];
  const next = services[index < services.length - 1 ? index + 1 : 0];
  const projectExamples = service.projectSlugs.map(getProject).filter(Boolean);
  const relatedServices = getServiceLinks(service.relatedSlugs);
  const heroProject = getProject(service.heroProjectSlug) ?? projectExamples[0];
  const pageUrl = `${site.url}/services/${service.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: service.title,
        description: service.seoDescription,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${pageUrl}/#service` },
        primaryImageOfPage: heroProject
          ? {
              "@type": "ImageObject",
              url: `${site.url}${heroProject.cardImage}`,
              caption: heroProject.cardAlt,
            }
          : undefined,
        inLanguage: "en",
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: service.title,
        serviceType: service.serviceType,
        description: service.summary,
        url: pageUrl,
        category: "Software development",
        provider: { "@id": `${site.url}/#person` },
        areaServed: [
          { "@type": "Country", name: "Pakistan" },
          { "@type": "City", name: "Hyderabad" },
          { "@type": "City", name: "Karachi" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${site.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="case-study-page">
      <article className="case-study service-page">
        <div className="case-study-hero">
          <div className="section-shell">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>

            <div className="case-study-heading">
              <div>
                <p className="eyebrow">
                  {service.eyebrow} <span aria-hidden="true">·</span> Service
                </p>
                <h1>{service.h1}</h1>
                <p className="case-study-summary">{service.summary}</p>
                <div className="case-study-actions">
                  <Link className="button button-primary" href="/#contact">
                    Discuss your project
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                  <Link className="button button-secondary" href="/services">
                    <FiArrowLeft aria-hidden="true" />
                    All services
                  </Link>
                </div>
              </div>

              <aside className="case-study-facts" aria-label="Service facts">
                <div>
                  <span>Service</span>
                  <strong>{service.title}</strong>
                </div>
                <div>
                  <span>Delivery</span>
                  <strong>Remote across Pakistan</strong>
                </div>
                <div>
                  <span>Core stack</span>
                  <strong>C# · .NET · SQL Server</strong>
                </div>
                <div>
                  <span>Case studies</span>
                  <strong>{projectExamples.length} related</strong>
                </div>
              </aside>
            </div>

            {heroProject && (
              <figure className="case-study-hero-image">
                <Image
                  src={heroProject.cardImage}
                  alt={heroProject.cardAlt}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 1280px"
                  quality={screenshotQuality}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-cover"
                />
                <figcaption>
                  {heroProject.cardAlt}. Representative screenshot from the {heroProject.title}{" "}
                  case study.
                </figcaption>
              </figure>
            )}
          </div>
        </div>

        <div className="section-shell case-study-layout">
          <aside className="case-study-sidebar">
            {service.technologies.map((group) => (
              <div className="case-study-sidebar-block" key={group.label}>
                <p className="eyebrow">{group.label}</p>
                <ul className="service-tech-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="case-study-sidebar-block">
              <p className="eyebrow">Typical scope</p>
              <ul className="case-module-list">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <FiCheck aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="case-study-sidebar-block">
              <p className="eyebrow">Related services</p>
              <ul className="service-link-list">
                {relatedServices.map((related) => (
                  <li key={related.slug}>
                    <Link href={`/services/${related.slug}`}>
                      {related.title}
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="case-study-sidebar-block">
              <p className="eyebrow">Service area</p>
              <p className="case-sidebar-note">
                <FiMapPin aria-hidden="true" /> {site.serviceArea}. No public office is
                presented on this site.
              </p>
            </div>
          </aside>

          <div className="case-study-content">
            <section className="case-section" data-reveal>
              <p className="case-section-number">01</p>
              <div>
                <h2>The business problem</h2>
                <p className="case-lead">{service.intro}</p>
                <div className="case-focus-grid service-problem-grid">
                  {service.problems.map((problem) => (
                    <article key={problem.title}>
                      <FiAlertCircle aria-hidden="true" />
                      <h3>{problem.title}</h3>
                      <p>{problem.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="case-section" data-reveal>
              <p className="case-section-number">02</p>
              <div>
                <h2>What this service covers</h2>
                <p>
                  The scope is shaped around the workflow, but these are the capabilities that
                  typically matter for this kind of system.
                </p>
                <div className="case-focus-grid">
                  {service.capabilities.map((capability) => (
                    <article key={capability.title}>
                      <FiLayers aria-hidden="true" />
                      <h3>{capability.title}</h3>
                      <p>{capability.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="case-section" data-reveal>
              <p className="case-section-number">03</p>
              <div>
                <h2>How I approach the work</h2>
                <div className="decision-list">
                  {service.approach.map((step, stepIndex) => (
                    <article key={step.title}>
                      <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="case-section case-section-wide" data-reveal>
              <p className="case-section-number">04</p>
              <div>
                <h2>Real project examples</h2>
                <p>
                  These case studies show how the service has been applied in a real build,
                  including the workflows, screens and engineering decisions behind it.
                </p>
                <div className="service-project-grid">
                  {projectExamples.map((project) => (
                    <Link
                      className="service-project-card"
                      href={`/projects/${project.slug}`}
                      key={project.slug}
                    >
                      <div className="service-project-media">
                        <Image
                          src={project.cardImage}
                          alt={project.cardAlt}
                          fill
                          sizes="(max-width: 700px) 100vw, 380px"
                          quality={screenshotQuality}
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="service-project-copy">
                        <span>{project.category}</span>
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                        <strong>
                          Read the case study
                          <FiArrowRight aria-hidden="true" />
                        </strong>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <section className="case-section" data-reveal>
              <p className="case-section-number">05</p>
              <div>
                <h2>Common questions</h2>
                <div className="service-faq">
                  {service.faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>
                        {faq.question}
                        <FiChevronDown aria-hidden="true" />
                      </summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            <section className="case-cta" data-reveal>
              <p className="eyebrow">Next conversation</p>
              <h2>Need a solution that fits your operation?</h2>
              <p>
                Tell me about the current workflow, the people involved and where the process
                breaks down. I will give you a straight answer about whether it is a fit.
              </p>
              <Link className="button button-primary" href="/#contact">
                Start a conversation
                <FiArrowRight aria-hidden="true" />
              </Link>
            </section>
          </div>
        </div>

        <nav className="case-pagination section-shell" aria-label="More services">
          <Link href={`/services/${previous.slug}`}>
            <span>
              <FiArrowLeft aria-hidden="true" /> Previous service
            </span>
            <strong>{previous.title}</strong>
          </Link>
          <Link href={`/services/${next.slug}`}>
            <span>
              Next service <FiArrowRight aria-hidden="true" />
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
      <SiteFooter />
    </div>
  );
}
