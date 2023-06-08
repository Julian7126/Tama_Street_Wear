import React, { useState, useEffect } from 'react';
import "./styles.scss";
import ItemList from '../../components/ItemList';

const Mens = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(`ERROR: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='MensContainer'>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Mens;
