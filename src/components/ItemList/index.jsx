import React from "react";
import Item from "../Item";
import "./styles.scss";

//Se encarga de hacer el map con los productos
const ItemList =React.memo( ({ products }) => {
  return (
    <div className="mapeo">
      {products.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </div>
  );
});

export default ItemList;
