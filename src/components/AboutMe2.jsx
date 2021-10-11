import { Row, Col } from "antd";

function AboutMe2() {
  return (
    <div className="projects-container" id="aboutMe">
      <Row justify="center" className="projects-header">
        <Col xs={24} md={20}>
          <div className="youtube-video-container">
            <iframe
              className="youtube-video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0vsAAJlA1I8"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe2;
