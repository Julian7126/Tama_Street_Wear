import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHashtag, faLocationDot, faMessage } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "blac",
        color: "white",
        padding: "20px",
        height: `150px`,
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <h2> <FontAwesomeIcon icon={faLocationDot} /></h2>
        <h2 className="ubic">Tamarindo, Costa Rica</h2>
      </div>
        <div className="icons"> 
        <FontAwesomeIcon icon={faMessage} />
        <FontAwesomeIcon icon={faHashtag} />
        </div>
      
    </footer>
  );
};

export default Footer;
