import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import "./styles.scss";

const ItemCount = ({stock, initial, onAddStock }) => {
  const [count, setCount] = useState(initial);

  const handleClickCountMore = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleClickCountLess = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>
        <div className="counter-container">
          <button
            className="counter-button plus"
            variant="outline-success"
            onClick={handleClickCountMore}
          >
            +
          </button>{" "}
          <label className="contadorDeStock">{count}</label>
          <button
            className="counter-button minus"
            variant="outline-warning"
            onClick={handleClickCountLess}
          >
            -
          </button>{" "}
        </div>

        <button
          className="agregarAlCarrito"
          type="submit"
          variant="outline-dark"
          onClick={()=>onAddStock(count)}
        >
         
          Ready for your Cards? 

        </button>
      </div>
    </>
  );
};

export default ItemCount;
