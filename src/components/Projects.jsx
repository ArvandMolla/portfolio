import ProjectCard from "./ProjectCard.jsx";
import { Divider, Row, Col } from "antd";
import { YoutubeOutlined } from "@ant-design/icons";

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
          <Row className="small-videos" justify="space-between">
            <Col xs={24} lg={11} className="small-video">
              <div className="youtube-video-container-small">
                <iframe
                  className="youtube-video-small"
                  width="100%"
                  height="87%"
                  src="https://www.youtube.com/embed/rmEI70biYwc"
                  title="YouTube video player"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <a
                href="https://www.youtube.com/watch?v=rmEI70biYwc"
                target="_blank"
              >
                <h2>
                  <YoutubeOutlined
                    style={{ fontSize: "22px", color: "#ff0000" }}
                    className="youtube-icon"
                  />
                  Watch on YouTube
                </h2>
              </a>
            </Col>
            <Col xs={24} lg={11} className="small-video">
              <div className="youtube-video-container-small">
                <iframe
                  className="youtube-video-small"
                  width="100%"
                  height="87%"
                  src="https://www.youtube.com/embed/-YxLVwZkBrQ"
                  title="YouTube video player"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <a
                href="https://www.youtube.com/watch?v=-YxLVwZkBrQ"
                target="_blank"
              >
                <h2>
                  <YoutubeOutlined
                    style={{ fontSize: "22px", color: "#ff0000" }}
                    className="youtube-icon"
                  />
                  Watch on YouTube
                </h2>
              </a>
            </Col>
          </Row>
          <Row gutter="24">
            <Col xs={24} sm={12} lg={8}>
              <ProjectCard
                banner="../../img/30-sec.jpg"
                title="30 SECONDS"
                description="A video platform for e-commerce. Upload your video and the app makes your video searchable and filterable automatically! The app uses Google Cloud Platform (GCP) to analyze videos."
                live="https://30-seconds.vercel.app/"
                demo=""
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
                description="A Limited featured clone of Linkedin. You can add a post, change your profile pic, add or remove an 'experience', download a PDF of your CV including a list of your experiences, and more... "
                live="https://linkedin-eight.vercel.app/userprofile/60c9fddd35e957371cfa7adc"
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
