import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "./styles.scss";
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from '../../components/Item';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(`ERROR: ${error}`);
      }
    };

    fetchData();
  }, [categoryId]);

  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Habilita el desplazamiento infinito
    speed: 500, // Velocidad de desplazamiento (en milisegundos)
    slidesToShow: 3, // Número de objetos a mostrar por slide
    slidesToScroll: 1 // Número de objetos a desplazar por vez
  };

  return (
    <div className='ItemListContainer'>
      {products.length > 0 ? (
        <Slider {...settings}>
          
            {products.map((product) => (
              <Item key={product.id} product={product} />
            ))}
        
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
