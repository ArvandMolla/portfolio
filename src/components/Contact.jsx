import { Divider, Row, Col } from "antd";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

function Contact() {
  return (
    <div className="projects-container" id="contact">
      <Row justify="center" className="projects-header">
        <Col xs={24} md={20}>
          <Divider orientation="center" className="projects-divider">
            CONTACT
          </Divider>
          <div className="name-location">
            <div>Arvand Molla</div>
            <div>Trondheim, Norway</div>
          </div>
          <div className="contact-items">
            <span>
              <MailOutlined />
            </span>

            <span>arv.molla@gmail.com</span>
          </div>
          <div className="contact-items">
            <span>
              <LinkedinOutlined />
            </span>
            <a href="https://www.linkedin.com/in/arvandmolla/" target="_blank">
              <span>Linkedin</span>
            </a>
          </div>
          <div className="contact-items">
            <span>
              <GithubOutlined />
            </span>
            <a href="https://github.com/ArvandMolla" target="_blank">
              <span>Github</span>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
