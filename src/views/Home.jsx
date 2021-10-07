import AboutMe from "../components/AboutMe.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";

function Home() {
  return (
    <div className="home-container">
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
