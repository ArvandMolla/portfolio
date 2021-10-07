import AboutMe2 from "../components/AboutMe2.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";

function Home() {
  return (
    <div className="home-container">
      <AboutMe2 />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
