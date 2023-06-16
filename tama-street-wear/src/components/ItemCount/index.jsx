import React, { useState } from 'react';
import "./styles.scss";

const ItemCount = ({ stock, onAdd, initial }) => {
  
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button className="add-to-cart-button animated-button" onClick={()=>onAdd(count)} >
       Buy Now!
      </button>
    </div>
  );
};

export default ItemCount;
