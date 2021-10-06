import {
  LinkOutlined,
  VideoCameraOutlined,
  GithubOutlined,
} from "@ant-design/icons";

function ProjectCard() {
  return (
    <div className="project-card-container">
      <div className="project-banner">
        <img src="../../img/30-sec.jpg" alt="30-sec project" width="100%" />
      </div>
      <div className="project-description">
        <h2>30-SECONDS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore
          fuga, nulla quasi accusantium ipsam enim, quo minus dolore, recusandae
          voluptatem
        </p>
      </div>
      <div className="project-footer">
        <div className="project-footer-item">
          <span className="footer-icon">
            <LinkOutlined />
          </span>

          <a href="https://30-seconds.vercel.app/">
            <span>Live</span>
          </a>
        </div>
        <div className="project-footer-item">
          <span className="footer-icon">
            <VideoCameraOutlined />
          </span>

          <a href="https://30-seconds.vercel.app/">
            <span>Demo</span>
          </a>
        </div>
        <div className="project-footer-item">
          <span className="footer-icon">
            <GithubOutlined />
          </span>

          <a href="https://30-seconds.vercel.app/">
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
