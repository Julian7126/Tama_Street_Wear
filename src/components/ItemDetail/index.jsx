import React, { useContext, useState } from "react";
import "./styles.scss";
import ItemCount from "../ItemCount";
import { Shop } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ productDetail }) => {
  // const navigateCard=useNavigate();

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
    <>
      <div className="item-detail">
        <img src={productDetail.image} width={300} alt="" />
        <h1>{productDetail.name}</h1>
        {quantityReset ? (
          <button
            onClick={handleNavigate}
            as="/cart"
            className="button-carrito"
          >
            {" "}
            Go to buy
          </button>
        ) : (
          <ItemCount initial={1} stock={50} onAddStock={confirmPurchase} />
        )}
        </div>
    </>
  );
};

export default ItemDetail;
