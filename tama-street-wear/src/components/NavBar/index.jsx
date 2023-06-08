import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const NavBar = () => {
  return (
    <div className="container_global">
      <ul className="left_items">
        <li><Link to="/category/men's clothing" >Mens</Link></li>
        <li><Link to="/category/women's clothing" >Womans</Link></li>
        <li><Link to="/category/electronics" >SKNKS</Link></li>
        <li><Link to="/category/jewelery" >Accesories</Link></li>
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
