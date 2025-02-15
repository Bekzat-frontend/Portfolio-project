import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>Kyrgyzstan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +996 700 64 65 08
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              example@email.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            This is me Fahimul kabir. CEO & Founder of Teach2etc. I enjoy
            discussing new project and desing challenges
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
