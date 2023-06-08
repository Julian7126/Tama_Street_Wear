import React from 'react';

const Item = ({ product }) => {
  return (
    <div className="product_Cart">
      <img src={product.image} alt="Artículo" />
      <div className="product-details"> 
        <p className="product-title">{product.title}</p>
        <p className="product-price">Precio: ${product.price}</p>
      </div>
    </div>
  );
};

export default Item;
