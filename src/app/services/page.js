import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiGrid,
  FiLayers,
  FiMapPin,
  FiServer,
} from "react-icons/fi";
import SiteFooter from "../../../component/SiteFooter";
import { services } from "@/data/services";
import { getProject } from "@/data/projects";
import { blurDataURL, screenshotQuality } from "@/data/image";
import { site } from "@/data/site";

const heroProject = getProject("enterprise-erp");

export const metadata = {
  title: "Software Development Services",
  description:
    "Custom ERP, POS, inventory, accounting, ASP.NET Core, Windows desktop and SQL Server development services by Muhammad Faizan (Faizan Engineer) in Sindh, Pakistan. Remote delivery across Pakistan.",
  alternates: { canonical: "/services" },
  keywords: [
    "custom software development services",
    "ERP development services",
    "POS software development",
    "ASP.NET Core development",
    "SQL Server development",
    "business software developer Pakistan",
  ],
  openGraph: {
    title: "Software Development Services | Faizan Engineer",
    description:
      "Custom ERP, POS, inventory, accounting, ASP.NET Core, Windows desktop and SQL Server development services.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faizan Engineer software development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | Faizan Engineer",
    description:
      "Custom ERP, POS, inventory, accounting, ASP.NET Core, Windows desktop and SQL Server development.",
    images: ["/og-image.png"],
  },
};

export default function ServicesHubPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${site.url}/services/#page`,
        url: `${site.url}/services`,
        name: "Software Development Services",
        description:
          "Custom business software services covering ERP, POS, inventory, accounting, ASP.NET Core, Windows desktop and SQL Server development.",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}/services/#list`,
        name: "Software development services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `${site.url}/services/${service.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/services/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${site.url}/services`,
          },
        ],
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
              <span aria-current="page">Services</span>
            </nav>

            <div className="case-study-heading">
              <div>
                <p className="eyebrow">Software services</p>
                <h1>Software development services for business operations</h1>
                <p className="case-study-summary">
                  I build custom ERP, POS, inventory, accounting and desktop systems for
                  businesses that have outgrown spreadsheets or fixed software. Each engagement
                  starts with the operational workflow, then moves into a maintainable .NET and
                  SQL Server implementation.
                </p>
                <div className="case-study-actions">
                  <Link className="button button-primary" href="/#contact">
                    Discuss your project
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                  <Link className="button button-secondary" href="/#projects">
                    <FiGrid aria-hidden="true" />
                    See selected work
                  </Link>
                </div>
              </div>

              <aside className="case-study-facts" aria-label="Service overview">
                <div>
                  <span>Focus</span>
                  <strong>Business software</strong>
                </div>
                <div>
                  <span>Core stack</span>
                  <strong>C# · .NET · SQL Server</strong>
                </div>
                <div>
                  <span>Delivery</span>
                  <strong>Remote across Pakistan</strong>
                </div>
                <div>
                  <span>Based in</span>
                  <strong>{site.location}</strong>
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
                  {heroProject.cardAlt}. Representative screenshot from the Enterprise ERP
                  case study.
                </figcaption>
              </figure>
            )}
          </div>
        </div>

        <div className="section-shell services-hub">
          <div className="services-hub-intro">
            <div>
              <p className="eyebrow">Where I can help</p>
              <h2>Start from the workflow, not a feature list.</h2>
            </div>
            <p>
              These services are based on work documented in this portfolio. I work remotely
              with businesses across Pakistan, including Hyderabad and Karachi, and scope each
              project around the documents, decisions and reports that matter to the operation.
            </p>
          </div>

          <div className="services-hub-grid">
            {services.map((service, index) => (
              <article className="service-hub-card" key={service.slug}>
                <div className="service-hub-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <FiLayers aria-hidden="true" />
                </div>
                <h2>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </h2>
                <p>{service.summary}</p>
                <ul>
                  {service.capabilities.slice(0, 3).map((capability) => (
                    <li key={capability.title}>
                      <FiCheck aria-hidden="true" />
                      {capability.title}
                    </li>
                  ))}
                </ul>
                <Link className="service-hub-card-link" href={`/services/${service.slug}`}>
                  View service
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="services-hub-note">
            <p>
              <FiMapPin aria-hidden="true" /> {site.serviceArea}
            </p>
            <p>
              <FiServer aria-hidden="true" /> Web, desktop and database systems delivered with
              clear handover expectations.
            </p>
          </div>

          <section className="case-cta" data-reveal>
            <p className="eyebrow">Next conversation</p>
            <h2>Have a workflow that needs software behind it?</h2>
            <p>
              Describe the current process and where it breaks down. I will tell you whether a
              custom application is a sensible fit and what information is needed to scope it.
            </p>
            <Link className="button button-primary" href="/#contact">
              Talk about the problem
              <FiArrowRight aria-hidden="true" />
            </Link>
          </section>
        </div>

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
