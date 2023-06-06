import React, { useEffect, useState } from "react";
import "./styles.scss";
import { rawNewDropItems } from "../../data/productsNextDrop";

const NewDrop = () => {


  const [ productsNextDrop , setProductsNext]= useState([]);






  useEffect(() => {
    
    (async () => {

      const obtenerNextDropItems= () =>{
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(rawNewDropItems)
          }, 2000);
        })
      }

      const response=  await obtenerNextDropItems();
      console.log(response)
      setProductsNext(response);
      



    })();


  }, []);

  return (
    <>
      {productsNextDrop.map((item) => (
        <div key={item.id} className="new-drop-container">
          <img src={item.image} alt="Artículo" />
          <div className="item-details">
            <p className="item-name">{item.name}</p>
            <p className="item-price">Precio: ${item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewDrop;
