import { Row, Col } from "antd";

function AboutMe() {
  return (
    <div className="about-me-container" id="aboutMe">
      <Row gutter={32} align="middle" justify="center">
        <Col xs={24} md={8}>
          <img
            src="../../img/full-stack-developer.png"
            alt="arvand molla full-stack-developer"
            width="100%"
          />
        </Col>
        <Col xs={24} md={12} className="mern">
          <img src="../../img/mern.png" alt="MERN developer" width="100%" />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} md={20}>
          <div className="about-video">
            <video
              className="video-thumb"
              width="100%"
              src="https://storage.googleapis.com/strive-proj/vid-gqcqa50wktuegum5.mp4"
              type="video/mp4"
              controls
            ></video>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
