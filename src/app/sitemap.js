import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap() {
  const lastModified = new Date();

  const projectPages = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: project.featured ? 0.9 : 0.75,
    images: project.gallery.slice(0, 4).map((image) => `${site.url}${image.src}`),
  }));

  const servicePages = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
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
        `${site.url}/assets/FaizanDpNew.jpg`,
        `${site.url}/assets/Electron-Erp/Dashboard.jpg`,
        `${site.url}/assets/Restaurant_Management/POS.jpg`,
        `${site.url}/assets/AnajPOS/Invoices.jpg`,
      ],
    },
    {
      url: `${site.url}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...servicePages,
    ...projectPages,
  ];
}
