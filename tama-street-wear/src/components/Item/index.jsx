import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
  const navigation = useNavigate();

  const navigateDetail = () => {
    navigation(`/detail/${product.id}`);
  };



  

  return (
    <div
      className="product_Cart"
      onDoubleClick={navigateDetail}
      style={{ cursor: 'pointer' }}
    >
      <img src={product.image} alt="Artículo" />
      <div className="product-details">
        <p className="product-title">{product.title}</p>
        <p className="product-price">Precio: ${product.price}</p>
      </div>
    </div>
  );
};

export default Item;
