import {
  LinkOutlined,
  VideoCameraOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Popover } from "antd";
function ProjectCard({
  banner,
  title,
  description,
  demo,
  live,
  BELink,
  FELink,
}) {
  return (
    <div className="project-card-container">
      <div className="project-banner">
        <img src={banner} alt={title} width="100%" />
      </div>
      <div className="project-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="project-footer">
        <div className="project-footer-item">
          <span className="footer-icon">
            <LinkOutlined />
          </span>

          <a href={live} target="_blank">
            <span>Live</span>
          </a>
        </div>
        {demo.length > 0 && (
          <div className="project-footer-item">
            <span className="footer-icon">
              <VideoCameraOutlined />
            </span>

            <a href={demo} target="_blank">
              <span>Demo</span>
            </a>
          </div>
        )}
        <div className="project-footer-item">
          <span className="footer-icon">
            <GithubOutlined />
          </span>

          <Popover
            placement="topRight"
            content={
              <div>
                <div className="popover-link-container">
                  <a href={BELink} target="_blank" className="popover-link">
                    Back-end Repo
                  </a>
                </div>
                <div className="popover-link-container">
                  <a href={FELink} target="_blank" className="popover-link">
                    Front-end Repo
                  </a>
                </div>
              </div>
            }
            trigger="click"
          >
            <a>
              <span>Github</span>
            </a>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
