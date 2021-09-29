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
    </div>
  );
}

export default Projects;
