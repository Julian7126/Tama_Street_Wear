import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import "./styles.scss"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FireBase/config";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getProductDetail = async () =>{
      try {
        // const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
        // const productDetail= await response.json()
        // setProductDetail(productDetail)

//1er generar una referencia al documento // tercer parametro es el id del documento a consultar
          const docRef = doc(db, "products", id);
          const docSnap = await getDoc(docRef);
 //2er generar la peticion         
          if (docSnap.exists()) {

            setProductDetail({...docSnap.data(), id: docSnap.id})

          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
          
        } catch  {
          <span>Material No disponible</span>
          
        }
    }
     getProductDetail();

  }, [id]);

  return (
    
     <ItemDetail productDetail={productDetail}  />
    
  );
};

export default ItemDetailContainer;
