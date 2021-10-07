import { Divider, Row, Col } from "antd";

function Skills() {
  return (
    <div className="projects-container">
      <Row justify="center" className="projects-header">
        <Col xs={24} md={20}>
          <Divider orientation="center" className="projects-divider">
            SKILLS
          </Divider>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} md={20}>
          <Row gutter={[24, 24]} justify="start">
            <Col xs={12} lg={6} className="skill-container">
              <img
                src="../../img/node-logo.png"
                alt="Node JS"
                width="50"
                height="50"
              />

              <h3>Node JS</h3>
            </Col>
            <Col xs={12} lg={6} className="skill-container">
              <img
                src="../../img/react-logo.png"
                alt="React JS"
                width="50"
                height="50"
              />

              <h3>React JS</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/mongo-logo.png"
                alt="Mongo DB"
                width="50"
                height="50"
              />
              <h3>Mongo DB</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/express-logo.png"
                alt="Express JS"
                width="50"
                height="50"
              />
              <h3>Express JS</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/mongoose-logo.png"
                alt="mongoose js"
                width="50"
                height="50"
              />
              <h3>Mongoose JS</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/postgres-logo.png"
                alt="PostgreSQL"
                width="50"
                height="50"
              />
              <h3>PostgreSQL</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/typscript-logo.png"
                alt="TypeScript"
                width="50"
                height="50"
              />
              <h3>TypeScript</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/redux-logo.png"
                alt="Redux"
                width="50"
                height="50"
              />
              <h3>Redux</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/rest-logo.png"
                alt="REST APIs"
                width="50"
                height="50"
              />
              <h3>REST APIs</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/git-logo.png"
                alt="Git"
                width="50"
                height="50"
              />
              <h3>Git</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/jest-logo.png"
                alt="Jest"
                width="50"
                height="50"
              />
              <h3>Jest</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/bootstrap-logo.png"
                alt="Bootstrap"
                width="50"
                height="50"
              />
              <h3>Bootstrap</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/ant-logo.png"
                alt="Ant Design"
                width="50"
                height="50"
              />
              <h3>Ant Design</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/ci-cd-logo.png"
                alt="CI-CD"
                width="50"
                height="50"
              />
              <h3>CI-CD</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/html-logo.png"
                alt="html"
                width="50"
                height="50"
              />
              <h3>HTML</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/css-logo.png"
                alt="CSS"
                width="50"
                height="50"
              />
              <h3>CSS</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/ui-ux-logo.png"
                alt="ui ux design"
                width="50"
                height="50"
              />
              <h3>UX-UI Design</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/data-stracture-logo.png"
                alt="data structures"
                width="50"
                height="50"
              />
              <h3>Data Structures</h3>
            </Col>
            <Col xs={12} lg={6} lg={6} className="skill-container">
              <img
                src="../../img/agile-logo.png"
                alt="agile - scrum"
                width="50"
                height="50"
              />
              <h3>Scrum</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
