import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMessage } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-section">
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            <h3 className="location-text">Tamarindo, Costa Rica</h3>
          </div>
          <div className="contact">
            <FontAwesomeIcon icon={faMessage} className="contact-icon" />
            <span className="contact-text">Do you want to contact the store?</span>
          </div>
        </div>
        <div className="right-section">
          <div className="social-icons">
            <h4>Facebook</h4>
            <h4>Whatsapp</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
