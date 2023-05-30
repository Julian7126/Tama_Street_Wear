import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
//Card
const Item = ({ product }) => {
  const navigate = useNavigate();

  const navigateDetail = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <>
      <div className="card" onClick={navigateDetail}>
        <p key={product.id}>
          {" "}
          <img className="card__image" src={product.image} alt="" />
        </p>
        <div className="card__info ">
          <h1 className="card__name ">{product.name}</h1>
          <h2>{product.species}</h2>
          <section
            className={`card__status ${
              product.status === "Alive"
                ? "alive-style"
                : product.status === "Dead"
                ? "dead-style"
                : "unknown-style"
            }`}
          >
            {product.status}
          </section>
        </div>
      </div>
    </>
  );
};

export default Item;
