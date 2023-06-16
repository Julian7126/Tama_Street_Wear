import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMessage } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-section separate-section">
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            <a
              href="https://www.google.com/maps/place/VIACONDOTTI/@10.2974173,-85.841203,17z/data=!3m1!4b1!4m6!3m5!1s0x8f9e398c17241699:0x8568adab0e9b2ec0!8m2!3d10.2974173!4d-85.841203!16s%2Fg%2F11tm_dkv_w?hl=es-CR&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="non-link"
            >
              <h5 className="location-text">Tamarindo, Costa Rica</h5>
            </a>
          </div>
        </div>
        {/* <div className="center-section separate-section">
          <div className="center-content">
            <h5 className="center-text">We only want people with style</h5>
          </div>
        </div> */}
        <div className="right-section separate-section">
          <div className="contact">
            <a
              href="https://wa.me/+50672344398"
              target="_blank"
              rel="noopener noreferrer"
              className="non-link"
            >
              <FontAwesomeIcon icon={faMessage} className="contact-icon" />
              <span>Do you want to contact the store?</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
