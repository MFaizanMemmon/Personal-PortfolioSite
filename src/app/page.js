import About from "../../component/About";
import ContactMe from "../../component/ContactMe";
import Engineering from "../../component/Engineering";
import Experience from "../../component/Experience";
import Header from "../../component/Header";
import Project from "../../component/Project";
import Services from "../../component/Services";
import Skills from "../../component/Skills";
import Writing from "../../component/Writing";

export default function Home() {
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
    </>
  );
}
