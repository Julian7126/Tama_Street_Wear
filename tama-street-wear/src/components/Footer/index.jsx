import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMessage,  } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        height: `150px`,
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <h2> <FontAwesomeIcon icon={faLocationDot} /></h2>
        <h2 className="ubic">-Tamarindo, Costa Rica</h2>
      </div>
        <div className="icons"> 
        <FontAwesomeIcon icon={faMessage} /> Do you want to contact the store? 
        </div>
      
    </footer>
  );
};

export default Footer;
