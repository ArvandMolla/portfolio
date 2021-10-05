import ProjectCard from "./ProjectCard.jsx";
import { Divider, Row, Col } from "antd";

function Projects() {
  return (
    <div className="projects-container">
      <Row justify="center">
        <Col xs={24} md={20}>
          <Divider orientation="center" className="projects-divider">
            PROJECTS
          </Divider>
        </Col>
      </Row>
      {/* <Row justify="center">
        <Col xs={24} md={8}>
          <ProjectCard />
        </Col>
        <Col xs={24} md={8}>
          <ProjectCard />
        </Col>
        <Col xs={24} md={8}>
          <ProjectCard />
        </Col>
      </Row> */}
      <div className="projects-parent">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
