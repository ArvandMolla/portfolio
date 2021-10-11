import ProjectCard from "./ProjectCard.jsx";
import { Divider, Row, Col } from "antd";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <Row justify="center" className="projects-header">
        <Col xs={24} md={20}>
          <Divider orientation="center" className="projects-divider">
            PROJECTS
          </Divider>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} md={20}>
          <Row gutter="24">
            <Col xs={24} sm={12} lg={8}>
              <ProjectCard
                banner="../../img/30-sec.jpg"
                title="30 SECONDS"
                description="A video platform for e-commerce. Upload your video and the app makes your video searchable and filterable automatically! The app uses Google Cloud Platform (GCP) to analyze videos."
                live="https://30-seconds.vercel.app/"
                demo="https://www.youtube.com/watch?v=T8RUoKBPZRM&list=PLIz8i-HCdhvkeJKmje4IEon5yvFTD6XCk&index=10"
                BELink="https://github.com/ArvandMolla/capstone-backend"
                FELink="https://github.com/ArvandMolla/capstone-frontend"
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <ProjectCard
                banner="../../img/my-messenger.jpg"
                title="My Messenger"
                description="An instant messaging app. Clients can search others and start chatting! The app uses Socket.io to enable clients to send and recieve realtime messages."
                live="https://messenger-lemon.vercel.app/"
                demo=""
                BELink="https://github.com/ArvandMolla/messenger-be"
                FELink="https://github.com/ArvandMolla/messenger-fe"
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <ProjectCard
                banner="../../img/my-linkedin.jpg"
                title="My Linkedin"
                description="A video platform for e-commerce. Upload your video and the app makes your video searchable and filterable automatically! The app uses Google Cloud Platform (GCP) to analyze videos."
                live="https://linkedin-eight.vercel.app"
                demo=""
                BELink="https://github.com/ArvandMolla/linkedin-be"
                FELink="https://github.com/ArvandMolla/linkedin-fe"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
