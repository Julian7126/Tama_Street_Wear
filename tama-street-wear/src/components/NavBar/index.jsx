import React from 'react';
import '../NavBar/styles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="container_global">
      <ul className="left_items">
        <li ><Link to="/mens">Mens</Link></li>
        <li><Link to="/womans">Womans</Link></li>
        <li><Link to="/sknks">SKNKS</Link></li>
        <li><Link to="/accesories">Accesories </Link></li>
      </ul>
      <div className="right_items">
        <ul>
          <li>Sale</li>
          <li><Link to="/aboutUs">About Us</Link></li>
        </ul>
        <input type="text" placeholder="Search" className="search_bar" />
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  );
}

export default NavBar;
