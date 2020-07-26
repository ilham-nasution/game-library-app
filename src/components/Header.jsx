import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/1024px-Video-Game-Controller-Icon-IDV-green.svg.png"
          width="35"
          height="35"
          className="d-inline-block align-top mr-2"
          alt="logo"
        />
        Game Library
      </a>
    </nav>
  );
};

export default Header;
