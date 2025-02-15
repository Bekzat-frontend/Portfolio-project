import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
        <h1>Portfolio</h1>
      </Link>

      <div className="hamburger" onClick={handleClick}>
        ☰
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={() => setClick(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={() => setClick(false)}>
            Project
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setClick(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setClick(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
