import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

const absoluteUrl = (path) => new URL(path, `${site.url}/`).toString();

export default function sitemap() {
  const lastModified = new Date();

  const projectPages = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: project.featured ? 0.9 : 0.75,
    images: project.gallery
      .slice(0, 4)
      .map((image) => absoluteUrl(image.src)),
  }));

  const servicePages = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        absoluteUrl("/assets/FaizanDpNew.jpg"),
        absoluteUrl("/assets/Electron-Erp/Dashboard.jpg"),
        absoluteUrl("/assets/Restaurant_Management/POS.jpg"),
        absoluteUrl("/assets/AnajPOS/Invoices.jpg"),
      ],
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...servicePages,
    ...projectPages,
  ];
}
