function TopNav() {
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
        <p>ARVAND MOLLA</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
