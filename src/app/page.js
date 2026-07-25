import About from "../../component/About";
import ContactMe from "../../component/ContactMe";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";
import Project from "../../component/Project";
import Services from "../../component/Services";
import SideNav from "../../component/SideNav";
import Skills from "../../component/Skills";
import MotionController from "../../component/MotionController";

export default function Home() {
  return (
    <>
      <MotionController />
      <Navbar />
      <main>
        <Header />
        <About />
        <Skills />
        <Project />
        <Services />
        <ContactMe />
      </main>
      <SideNav />
    </>
  );
}
