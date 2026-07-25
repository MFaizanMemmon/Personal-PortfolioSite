const siteUrl = "https://faizan-portfolio-site.vercel.app";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-25"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/assets/FaizanDpNew.jpg`,
        `${siteUrl}/assets/SqlHelper/Dashboard.jpg`,
        `${siteUrl}/assets/Electron-Erp/Dashboard.jpg`,
        `${siteUrl}/assets/Restaurant_Management/Dashboard.jpg`,
      ],
    },
  ];
}
