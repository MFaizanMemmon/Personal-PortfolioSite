import About from "../../component/About";
import ContactMe from "../../component/ContactMe";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";
import Project from "../../component/Project";
import Services from "../../component/Services";
import Skills from "../../component/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Services />
      <ContactMe />
    </>
  );
}
