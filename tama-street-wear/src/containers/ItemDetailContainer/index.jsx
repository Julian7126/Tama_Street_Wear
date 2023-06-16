import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';


const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.log(`ERROR: ${error}`);
      }
    };

    fetchProductDetail();
  }, [id]);

  return <ItemDetail productDetail={productDetail} />;
};

export default ItemDetailContainer;
