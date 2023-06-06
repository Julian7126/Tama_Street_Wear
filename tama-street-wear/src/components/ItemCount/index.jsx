import React, { useState } from 'react';
import "./styles.scss";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

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

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAdd} >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
