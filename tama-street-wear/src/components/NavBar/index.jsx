import React from 'react';
import '../NavBar/styles.scss';

const NavBar = () => {
  return (
    <div className="container_global">
      <ul className="left_items">
        <li>Mens</li>
        <li>Woman</li>
        <li>SNKRS</li>
        <li>Accessories</li>
      </ul>
      <div className="right_items">
        <ul>
          <li>Sale</li>
          <li>About Us</li>
        </ul>
        <input type="text" placeholder="Search" className="search_bar" />
      </div>
    </div>
  );
}

export default NavBar;
