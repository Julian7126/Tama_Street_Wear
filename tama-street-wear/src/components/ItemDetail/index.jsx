import React, { useContext, useState } from "react";
import "./styles.scss";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import {Shop} from "../../context/Shop"


const ItemDetail = ({ productDetail}) => {
  const Navigate = useNavigate();

  const { addProduct } = useContext(Shop);

  const [quantityReset, setQuantityReset] = useState(0);

  const confirmPurchase = (quantity) => {
    console.log(quantity);
    addProduct({ ...productDetail, quantity });
    setQuantityReset(quantity);
  };

  const handleNavigate = () => {
    Navigate(`/cart`);
  };


  return (
    <div className="item-detail-container">
      <div className="image-container">
        <img src={productDetail.image} alt={productDetail.title} />
      </div>
      <div className="details-container">
        <h2>{productDetail.title}</h2>

        <p className="description">Description: {productDetail.description}</p>
        <h2 className="price">${productDetail.price}</h2>
        {quantityReset ? (
            <button
            onClick={handleNavigate}
            as="/cart"
            className="button-carrito">Go card!</button>

        ) : (
          <ItemCount
            onAdd={confirmPurchase}
            initial={1}
            stock={20} // esto deberia estar dentro de los productos
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
