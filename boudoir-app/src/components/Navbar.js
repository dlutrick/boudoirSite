import React, { useEffect } from "react";
import "./Navbar.css";
import Logo from "../images/TrueReflectionLight.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="Site logo." className="brand" />
        <ul className="navbar__links">
          <li className="navbar__link--active">Home</li>
          <li className="navbar__link">About</li>
          <li className="navbar__link">Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
