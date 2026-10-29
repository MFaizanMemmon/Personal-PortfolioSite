import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "../../component/Navbar";
import SideNav from "../../component/SideNav";
import SiteFooter from "../../component/SiteFooter";
import MotionController from "../../component/MotionController";
import { site } from "@/data/site";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata = {
  metadataBase: new URL(site.url),
  applicationName: `${site.name} Portfolio`,
  title: {
    default: "Full Stack .NET Engineer | ERP, POS & Business Software — Faizan",
    template: "%s | Faizan Engineer",
  },
  description:
    "Faizan is a full stack .NET engineer in Pakistan building ERP, POS, accounting and business software with C#, ASP.NET Core and SQL Server. Available for remote roles and selected freelance projects.",
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.name,
  category: "Software Engineering",
  keywords: [
    "Full Stack .NET Developer",
    "ASP.NET Core developer",
    "ERP developer",
    "POS software developer",
    "SQL Server developer",
    "C# engineer",
    "business software",
    "Pakistan software engineer",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "LL0rJSNPuUzHzBPDOS7Lj_gz5SZGkktSN1tJ4cBAd0s",
  },
  openGraph: {
    title: "Faizan Engineer — Full Stack .NET, ERP & POS Engineer",
    description:
      "Enterprise ERP, POS and accounting software built with C#, ASP.NET Core and SQL Server. Explore five detailed case studies.",
    url: site.url,
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faizan Engineer — Full Stack .NET Engineer building ERP, POS and enterprise software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizan Engineer — Full Stack .NET Engineer",
    description:
      "ERP, POS and business software built with C#, ASP.NET Core and SQL Server. Five detailed case studies.",
    images: ["/og-image.png"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.name} Portfolio`,
        alternateName: "Faizan .NET Engineer",
        description:
          "Portfolio of Muhammad Faizan, a full stack .NET engineer specializing in ERP, POS, accounting and business software.",
        inLanguage: "en",
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profile`,
        url: site.url,
        name: "Faizan Engineer — Full Stack .NET Engineer",
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: { "@id": `${site.url}/#person` },
        about: { "@id": `${site.url}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.legalName,
        alternateName: [site.name, "Faizan .NET Developer"],
        url: site.url,
        image: `${site.url}/assets/FaizanDpNew.jpg`,
        jobTitle: "Full Stack .NET Engineer",
        description:
          "Full stack .NET engineer in Sindh, Pakistan with 3+ years of experience building ERP, POS, accounting, desktop and web applications.",
        email: `mailto:${site.email}`,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Sindh",
          addressCountry: "PK",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Sindh, Jamshoro",
        },
        sameAs: [site.linkedin, site.github, site.youtube],
        knowsAbout: [
          "C#",
          "ASP.NET Core",
          "ASP.NET MVC",
          "SQL Server",
          "ADO.NET",
          "Blazor",
          "Angular",
          "JavaScript",
          "WinForms",
          "ERP software",
          "Point of sale software",
          "Accounting software",
          "Business process automation",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Full Stack .NET Engineer",
          occupationLocation: {
            "@type": "Country",
            name: "Pakistan",
          },
          skills:
            "C#, ASP.NET Core, ASP.NET MVC, SQL Server, stored procedures, Blazor, Angular, WinForms, ERP and POS development",
        },
        makesOffer: {
          "@type": "OfferCatalog",
          name: "Software development services",
          itemListElement: [
            "Custom ERP and business software",
            "POS and inventory systems",
            "ASP.NET Core web applications",
            "Windows desktop applications",
            "SQL Server development",
            "Reporting and business automation",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div id="top" />
        <MotionController />
        <Navbar />
        <main id="main-content">{children}</main>
        <SideNav />
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
