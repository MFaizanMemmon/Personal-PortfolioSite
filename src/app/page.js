import About from "../../component/About";
import ContactMe from "../../component/ContactMe";
import Engineering from "../../component/Engineering";
import Experience from "../../component/Experience";
import Header from "../../component/Header";
import Project from "../../component/Project";
import Services from "../../component/Services";
import Skills from "../../component/Skills";
import Writing from "../../component/Writing";
import { site } from "@/data/site";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const profileData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/#profile`,
    url: site.url,
    name: "Faizan Engineer — Full Stack .NET Developer",
    description:
      "Profile of Muhammad Faizan (Faizan Engineer), a full stack .NET developer in Sindh, Pakistan building ERP, POS, inventory, accounting and business software.",
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: { "@id": `${site.url}/#person` },
    about: { "@id": `${site.url}/#person` },
    inLanguage: "en",
  };

  return (
    <>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Engineering />
      <Writing />
      <Services />
      <ContactMe />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
