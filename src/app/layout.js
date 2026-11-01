import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "../../component/Navbar";
import MotionController from "../../component/MotionController";
import MotionProvider from "../../component/MotionProvider";
import SideNav from "../../component/SideNav";
import { site } from "@/data/site";
import { services as servicePages } from "@/data/services";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-ovo",
});

const themeScript = `(function(){try{var stored=localStorage.getItem("portfolio-theme");var dark=stored!=="light";document.documentElement.dataset.theme=dark?"dark":"light";document.documentElement.style.colorScheme=dark?"dark":"light";}catch(e){document.documentElement.dataset.theme="dark";document.documentElement.style.colorScheme="dark";}})();`;

const bingVerification = process.env.BING_SITE_VERIFICATION?.trim();

export const metadata = {
  metadataBase: new URL(site.url),
  applicationName: `${site.name} Portfolio`,
  title: {
    default: "Faizan Engineer | Full Stack .NET, ERP & POS Developer",
    template: "%s | Faizan Engineer",
  },
  description:
    "Faizan Engineer (Muhammad Faizan) builds custom ERP, POS, inventory and accounting software in Sindh, Pakistan with C#, ASP.NET Core and SQL Server.",
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.name,
  category: "Software Engineering",
  keywords: [
    "Faizan Engineer",
    "Muhammad Faizan",
    "Faizan software engineer",
    "Faizan software developer",
    "Faizan .NET developer",
    "full stack .NET developer",
    "ASP.NET Core developer Pakistan",
    "hire .NET developer",
    "freelance .NET developer",
    "C# developer",
    "SQL Server developer",
    "custom ERP development",
    "ERP developer Pakistan",
    "POS software development",
    "inventory management software",
    "accounting software development",
    "Windows desktop application developer",
    "WinForms developer",
    "business software Pakistan",
    "remote .NET developer",
  ],
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
    ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
  },
  openGraph: {
    title: "Faizan Engineer — Full Stack .NET, ERP & POS Developer",
    description:
      "Muhammad Faizan builds custom ERP, POS, inventory, accounting and business software with C#, ASP.NET Core and SQL Server. Explore real project case studies.",
    url: site.url,
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faizan Engineer — Full Stack .NET Developer building ERP, POS and business software",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizan Engineer — Full Stack .NET, ERP & POS Developer",
    description:
      "Custom ERP, POS, inventory, accounting and business software built with C#, ASP.NET Core and SQL Server.",
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
        alternateName: ["Faizan .NET Developer", "Faizan Engineer Portfolio"],
        description:
          "Portfolio of Muhammad Faizan, a full stack .NET developer specialising in ERP, POS, inventory, accounting and business software.",
        inLanguage: "en",
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.legalName,
        alternateName: [site.name, "Faizan .NET Developer", "Engineer Faizan"],
        url: site.url,
        image: `${site.url}/assets/FaizanDpNew.jpg`,
        jobTitle: "Full Stack .NET Developer",
        description:
          "Full stack .NET developer in Sindh, Pakistan with 3+ years of experience building ERP, POS, inventory, accounting, desktop and web applications.",
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
          "Web API",
          "SQL Server",
          "ADO.NET",
          "Blazor",
          "Angular",
          "JavaScript",
          "WinForms",
          "AI-assisted development",
          "Codex",
          "Claude Code",
          "DeepSeek Harness",
          "Antigravity",
          "OpenCode",
          "Qoder",
          "Custom ERP development",
          "Point of sale software",
          "Inventory management software",
          "Accounting software",
          "Business process automation",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Full Stack .NET Developer",
          occupationLocation: {
            "@type": "Country",
            name: "Pakistan",
          },
          skills:
            "C#, ASP.NET Core, ASP.NET MVC, SQL Server, stored procedures, Blazor, Angular, WinForms, AI-assisted development, custom ERP, POS and business software development",
        },
        makesOffer: {
          "@type": "OfferCatalog",
          name: "Software development services",
          itemListElement: servicePages.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: `${site.url}/services/${service.slug}`,
            },
          })),
        },
      },
    ],
  };

  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
        <MotionProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <div id="top" />
          <MotionController />
          <Navbar />
          <main id="main-content">{children}</main>
          <SideNav />
        </MotionProvider>
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
