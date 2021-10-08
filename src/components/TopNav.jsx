import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="nav-container">
      <div className="logo">
        <img
          src="../../img/profile-img.png"
          alt="arvand molla"
          width="50"
          height="50"
          className="logo-image"
        />
        <p>Arvand Molla</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <AnchorLink offset="100" href="#aboutMe">
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset="100" href="#skills">
              Skills
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset="100" href="#projects">
              Projects
            </AnchorLink>
          </li>

          <li>
            <AnchorLink offset="100" href="#contact">
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
      <div className="menu-mobile">
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </div>
        {isMenuOpen && (
          <div className="menu-items">
            <ul>
              <li>
                <AnchorLink offset="100" href="#aboutMe">
                  About
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset="100" href="#skills">
                  Skills
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset="100" href="#projects">
                  Projects
                </AnchorLink>
              </li>

              <li>
                <AnchorLink offset="100" href="#contact">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopNav;
