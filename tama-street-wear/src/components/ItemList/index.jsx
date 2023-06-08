//aca va hacer el mapeo de los productos para las paginas principales, no para el next Drop 
import React from 'react'
import Item from '../Item'


const ItemList = ({ products }) => {
 console.log(products)


  return (
    
    
    products.map((product) => {
      console.log(product); // Agregado console.log para verificar cada objeto
      return <Item key={product.id} product={product} />;
    })
    
  );
};

export default ItemList;
