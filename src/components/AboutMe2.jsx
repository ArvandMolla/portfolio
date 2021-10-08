import { Row, Col } from "antd";

function AboutMe2() {
  return (
    <div className="projects-container" id="aboutMe">
      <Row justify="center" className="projects-header">
        <Col xs={24} md={20}>
          <video
            className="video-thumb"
            width="100%"
            src="https://storage.googleapis.com/strive-proj/vid-gqcqa50wktuegum5.mp4"
            type="video/mp4"
            controls
          ></video>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe2;
