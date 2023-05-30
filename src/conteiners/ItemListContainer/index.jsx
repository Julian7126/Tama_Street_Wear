import React, { useEffect, useState } from "react";
import "../ItemListContainer/styles.scss";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../FireBase/config";
import { capitalizeFirstLetter } from "../../utils/capitalCase";
import saveProductsFirebase from "../../FireBase/services";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        // let response;
        // if (categoryId) {
        //   response = await fetch(
        //     `https://rickandmortyapi.com/api/character/?species=${categoryId}`);
        // } else {
        //   response = await fetch(`https://rickandmortyapi.com/api/character`);
        // }

        let q;
        if (categoryId) {
          const CapitalLetter = capitalizeFirstLetter();
          q = query(
            collection(db, "products"),where("species", "===", CapitalLetter())
          );
        } else {
          q = query(collection(db, "products"));
        }

        //2do paso: realizar la query
        const querySnapshot = await getDocs(q);
        const productosFirebase = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          productosFirebase.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productosFirebase);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  const handleAddProducts = () => {
    saveProductsFirebase();
  };

  return (
    <>
            <ItemList products={products} />

{/*       
        // <button onClick={handleAddProducts}>
        //   Save characters automatically in firebase
        // </button>
       */}
    </>
  );
};

export default ItemListContainer;
