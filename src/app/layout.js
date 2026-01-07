import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
 
  subsets: ["latin"],
  weight : ["400","500","600","700"]
});

const ovo = Ovo({
  
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: {
    default: "Faizan Engineer | .NET Developer & ERP Expert",
    template: "%s | Faizan Engineer",
  },
  description:
    "Faizan Engineer is a .NET Developer specializing in Web API, Blazor, MAUI, WinForms, WPF, ERP Systems, and ML.NET projects.",
  keywords:
    ".NET, ASP.NET Core, Web API, Blazor, MAUI, WinForms, WPF, ML.NET, ERP Systems, POS, Developer Portfolio, Faizan Engineer",
  authors: [{ name: "Faizan Engineer", url: "https://faizandev.com" }],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${outfit.className}
          ${ovo.className}
          antialiased
       
        `}
      >
        {children}
      </body>
    </html>
  );
}
