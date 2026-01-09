// app/layout.js
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: {
    default: "Faizan Engineer | .NET Developer & ERP Expert",
    template: "%s | Faizan Engineer",
  },
  description:
    "Faizan Engineer is a Full Stack .NET Developer specializing in Web API, Blazor, MAUI, WinForms, WPF, ERP Systems, and ML.NET projects.",
  keywords:
    ".NET, ASP.NET Core, Web API, Blazor, MAUI, WinForms, WPF, ML.NET, ERP Systems, POS, Developer Portfolio, Faizan Engineer",
  authors: [{ name: "Faizan Engineer", url: "https://faizan-portfolio-site.vercel.app" }],
  robots: "index, follow",
  verification: {
    google: "LL0rJSNPuUzHzBPDOS7Lj_gz5SZGkktSN1tJ4cBAd0s", // ← Your actual Google verification code
  },
  metadataBase: new URL("https://faizan-portfolio-site.vercel.app"),
  openGraph: {
    title: "Faizan Engineer | .NET Developer & ERP Expert",
    description:
      "Full stack .NET Developer with expertise in ERP, Blazor, MAUI, WinForms, WPF, and ML.NET solutions.",
    url: "https://faizan-portfolio-site.vercel.app",
    siteName: "Faizan Engineer Portfolio",
    images: [
      {
        url: "https://faizan-portfolio-site.vercel.app/assets/FaizanDpNew.jpg",
        width: 1200,
        height: 630,
        alt: "Faizan Engineer - .NET Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="LL0rJSNPuUzHzBPDOS7Lj_gz5SZGkktSN1tJ4cBAd0s" />
      </head>
      <body
        className={`
          ${outfit.className}
          ${ovo.className}
          antialiased
        `}
      >
        {children}

        {/* Structured Data JSON-LD for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faizan Engineer",
              url: "https://faizan-portfolio-site.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/faizan-memon122/",
                "https://github.com/MFaizanMemmon",
                "https://www.youtube.com/@faizanengineer8811",
                "https://wa.me/923189417122",
              ],
              jobTitle: ".NET Developer & ERP Expert",
              worksFor: {
                "@type": "Organization",
                name: "Faizan Engineer",
              },
              description:
                "Full Stack .NET Developer specializing in Web API, Blazor, MAUI, WinForms, WPF, ERP Systems, and ML.NET projects.",
              image: "https://faizan-portfolio-site.vercel.app/assets/FaizanDpNew.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sindh",
                addressCountry: "Pakistan",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
