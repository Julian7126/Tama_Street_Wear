import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMessage,} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
          <h2 className="location-text">Tamarindo, Costa Rica</h2>
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faMessage} className="contact-icon" />
          <span className="contact-text">Do you want to contact the store?</span>
        </div>
        <div className="social-icons">
         <h2>Facebook</h2>
         <h2>Whatsapp</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
