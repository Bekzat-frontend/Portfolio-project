import React, { useState } from "react";
import "./NavbarStyled.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const changeColor = () => {
    if (window.scrollY > 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <div className="hamburger" onClick={handleClick}>
        ☰
      </div>
      <ul className={click ? "nav-menu.active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={handleClick}>
            Project
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/ contact" onClick={handleClick}>
            Contact{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
