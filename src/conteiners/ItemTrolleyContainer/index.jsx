import React from "react";
import { useContext } from "react";
import { Shop } from "../../context/cartContext";
import Cart from "../../components/Cart";
import "./styles.scss";
import generateOrderObject from "../../services/generateObjectOrder";
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../FireBase/config";

const ItemTrolleyContainer = () => {
  const { products, calculateTotal } = useContext(Shop);

  const confirmePurchase = () => {
    (async () => {
      const nombreComprador = "Sebas";
      const telefono = 3513296894;
      const mail = "julibischoff@gmail.com";

      const generateOrder = generateOrderObject(
        nombreComprador,
        telefono,
        mail,
        products,
        calculateTotal()
      );

      console.log(generateOrder);

      /// chequear el stock de los productos en el carrito

      let productOutOfStock = [];
      //Chequear el stock de los productos en el carrito
      for (const productInCart of products) {
        const docRef = doc(db, "products", productInCart.id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
        const productInFirebase = { ...docSnap.data(), id: doc.id };
        if (productInCart.quantity > productInFirebase.quantity)
          productOutOfStock.push(productInCart);
      }

      console.log(productOutOfStock);

      if (productOutOfStock.length === 0) {
        //Disminuir el stock existente
        console.log(products);

        for (const productInCart of products) {
          const productRef = doc(db, "products", productInCart.id);

          const docSnap = await getDoc(productRef);
          const productInFirebase = { ...docSnap.data(), id: doc.id };

          // Set the "capital" field of the city 'DC'
          await updateDoc(productRef, {
            quantity: productInFirebase.quantity - productInCart.quantity,
          });
        }

        //Generar la orden

        // Add a new document with a generated id
        try {
          const docRef = await addDoc(collection(db, "orders"), generateOrder);
          alert(`Se generó la order correctamente con ID: ${docRef.id}`);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Hay algún producto fuera de stock");
      }
    })();
  };

  return (
    <>
      <div>
        {products.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          products.map((product) => {
            return <Cart key={product.id} item={product} />;
          })
        )}
      </div>
      <div className="container-button">

        <button className="futuristic-button" onClick={confirmePurchase}>MANDAR ORDEN DE COMPRA</button>
      </div>
     
    </>
  );
};

export default ItemTrolleyContainer;
