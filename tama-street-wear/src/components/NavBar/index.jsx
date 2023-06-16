import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const NavBar = () => {
  return (
    <div className="container_global">
      <div className="left_items">
        <ul>
          <li className="Home"><Link to="/">Home</Link></li>
        </ul>
      </div>
      <div className="center_items">
        <ul>
          <li><Link to="/category/men's clothing">Mens</Link></li>
          <li><Link to="/category/women's clothing">Womans</Link></li>
          <li><Link to="/category/electronics">SKNKS</Link></li>
          <li><Link to="/category/jewelery">Accesories</Link></li>
        </ul>
      </div>
      <div className="right_items">
        <ul>
          <li>Sale</li>
          <li><Link to="/aboutUs">About Us</Link></li>
        </ul>
        <input type="text" placeholder="Search" className="search_bar" />
        <FontAwesomeIcon icon={faCartShopping} className="cart_icon" />
      </div>
    </div>
  );
};

export default NavBar;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import './styles.scss';

// const NavBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);

//   useEffect(() => {
//     if (isSearching) {
//       // Lógica para realizar la búsqueda en la API y actualizar los resultados
//       // Puedes usar fetch, axios u otra librería para realizar la solicitud HTTP

//       // Ejemplo de solicitud utilizando fetch
//       fetch(`https://fakestoreapi.com/products?title=${searchTerm}`)
//         .then(response => response.json())
//         .then(data => setSearchResults(data))
//         .catch(error => console.log(error));
//     }
//   }, [searchTerm, isSearching]);

//   const handleSearchChange = (event) => {
//     const inputValue = event.target.value;
//     setSearchTerm(inputValue);

//     // Iniciar la búsqueda solo si hay al menos un carácter en el input
//     if (inputValue.length > 0) {
//       setIsSearching(true);
//     } else {
//       setIsSearching(false);
//     }
//   };

//   return (
//     <div className="container_global">
//       <div className="left_items">
//         <ul>
//           <li className="Home"><Link to="/">Home</Link></li>
//         </ul>
//       </div>
//       <div className="center_items">
//         <ul>
//           <li><Link to="/category/men's clothing">Mens</Link></li>
//           <li><Link to="/category/women's clothing">Womans</Link></li>
//           <li><Link to="/category/electronics">SKNKS</Link></li>
//           <li><Link to="/category/jewelery">Accesories</Link></li>
//         </ul>
//       </div>
//       <div className="right_items">
//         <ul>
//           <li>Sale</li>
//           <li><Link to="/aboutUs">About Us</Link></li>
//         </ul>
//         <input
//           type="text"
//           placeholder="Search"
//           className="search_bar"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <FontAwesomeIcon icon={faCartShopping} className="cart_icon" />
//       </div>
//       {searchResults.length > 0 && (
//         <div className="search_results">
//           <ul>
//             {searchResults.map(product => (
//               <li key={product.id} className="product_item">
//                 <img src={product.image} alt={product.name} className="product_image" />
//                 <span className="product_title">{product.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar






