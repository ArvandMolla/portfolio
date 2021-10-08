import AboutMe2 from "../components/AboutMe2.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div className="home-container">
      <AboutMe2 />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
