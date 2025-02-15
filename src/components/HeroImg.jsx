import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img"
          src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg"
          alt="IntroImg"
        />
      </div>

      <div className="content">
        <p> HI,I'M A BEKZAT</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">Project</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
