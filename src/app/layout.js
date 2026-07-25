import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const siteUrl = "https://faizan-portfolio-site.vercel.app";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Faizan Engineer Portfolio",
  title: {
    default: "Faizan Engineer | Full Stack .NET, ERP & POS Developer",
    template: "%s | Faizan Engineer",
  },
  description:
    "Faizan is a full stack .NET developer in Pakistan building ERP, POS, accounting, desktop, web and mobile software with ASP.NET Core, Blazor, Angular and React.",
  authors: [{ name: "Faizan Engineer", url: siteUrl }],
  creator: "Faizan Engineer",
  publisher: "Faizan Engineer",
  category: "Software Development",
  alternates: {
    canonical: "/",
  },
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
    title: "Faizan Engineer | Full Stack .NET, ERP & POS Developer",
    description:
      "Explore ERP, POS, accounting, desktop and web software built by Faizan, a full stack .NET developer in Pakistan.",
    url: siteUrl,
    siteName: "Faizan Engineer Portfolio",
    images: [
      {
        url: "/assets/FaizanDpNew.jpg",
        width: 1200,
        height: 630,
        alt: "Faizan Engineer — Full Stack .NET, ERP and POS Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizan Engineer | Full Stack .NET Developer",
    description:
      "ERP, POS, accounting, desktop and web software built with .NET, Blazor, Angular and React.",
    images: ["/assets/FaizanDpNew.jpg"],
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
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Faizan Engineer Portfolio",
        alternateName: "Faizan .NET Developer",
        description:
          "Portfolio of Faizan, a full stack .NET developer specializing in ERP, POS and business software.",
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: "Faizan Engineer — Full Stack .NET Developer",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#person` },
        about: { "@id": `${siteUrl}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Faizan Engineer",
        alternateName: ["Faizan .NET Developer", "Faizan Software Engineer"],
        url: siteUrl,
        image: `${siteUrl}/assets/FaizanDpNew.jpg`,
        jobTitle: "Full Stack .NET Developer",
        description:
          "Full stack .NET developer in Sindh, Pakistan with experience building ERP, POS, accounting, desktop, web and mobile applications.",
        email: "mailto:engineerfaizan56@gmail.com",
        telephone: "+92-318-9417122",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Sindh",
          addressCountry: "PK",
        },
        sameAs: [
          "https://www.linkedin.com/in/faizan-memon122/",
          "https://github.com/MFaizanMemmon",
          "https://www.youtube.com/@faizanengineer8811",
        ],
        knowsAbout: [
          "C#",
          "ASP.NET Core",
          "Blazor",
          "Angular",
          "React",
          "Next.js",
          "SQL Server",
          "ERP software",
          "Point of sale software",
          "Accounting software",
          "Desktop application development",
          "Mobile application development",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Software Engineer",
          occupationLocation: {
            "@type": "Country",
            name: "Pakistan",
          },
          skills:
            "C#, ASP.NET Core, Web API, Blazor, Angular, React, Next.js, SQL Server, ERP and POS development",
        },
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ERP and POS Software Development",
              description: "Custom ERP, point of sale, accounting and business management software.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Stack Web Application Development",
              description: "Secure business web applications using ASP.NET Core, Blazor, Angular and React.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desktop and Mobile Application Development",
              description: "Custom Windows and cross-platform applications for business workflows.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
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
