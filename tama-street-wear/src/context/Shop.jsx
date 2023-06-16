import React, { useState, createContext } from 'react';

export const Shop = createContext({});

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);



  
  const addProduct = (productToAdd) => {
    console.log(productToAdd);
    const index = products.findIndex((product) => product.id === productToAdd.id);

    if (index !== -1) {
      const updatedProducts = [...products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        quantity: updatedProducts[index].quantity + productToAdd.quantity
      };
      setProducts(updatedProducts);
    } else {
      setProducts([...products, productToAdd]);
    }
  };

  const removeProduct = (productIdToRemove) => {
    const updatedProducts = products.filter((product) => product.id !== productIdToRemove);
    setProducts(updatedProducts);
  };

  const clearCart = () => {
    setProducts([]);
  };



  const calculateTotal = () => {
    const totalPrice = products.reduce((accumulator, product) => {
      return accumulator + (product.price * product.quantity);
    }, 0);
    return totalPrice;
  };

  const calculateItemTotal = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      return product.price * product.quantity;
    }
    return 0;
  };
  



  return (
    <Shop.Provider value={{ products , addProduct, removeProduct, clearCart , calculateTotal, calculateItemTotal}}>
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
