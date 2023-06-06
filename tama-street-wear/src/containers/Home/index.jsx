import React, { useState } from "react";
import images from "../../assets/img.js";
import "./styles.scss";
import NewDrop from "../../components/NextDrop/index.jsx";


const Home = () => {

const [buttonMaps, setButtonMaps] = useState(false);



const handleButtonMapsClick = () =>{
setButtonMaps(true);
  
};


  return (
    <>
      <div className="container_home">
        <div className="contenedor_img">
          <img className="imagen_tama_street" src={images.img1} alt="" />
        </div>
          {/* Proximos Drops  , container de negocio , que vaya mostrando la nueva tanda que se viene */}
          <div className="container_nextDrop">
            <NewDrop/>
          </div>

        <div className="container">
          <div className="What_are_you_Looking">
            <h1>What are you looking for?</h1>
            <h2>
              Sometimes you have to choose to win, especially when it comes to
              clothing.
            </h2>
            {!buttonMaps ? (
        <button className="grayButton" onClick={handleButtonMapsClick}>
          Where do you find us?
        </button>
      ) : (
        <a href="https://www.google.com/maps/place/VIACONDOTTI/@10.2974173,-85.841203,17z/data=!3m1!4b1!4m6!3m5!1s0x8f9e398c17241699:0x8568adab0e9b2ec0!8m2!3d10.2974173!4d-85.841203!16s%2Fg%2F11tm_dkv_w?hl=es-CR&entry=ttu">
         
          <p>Redirecting to Google Maps... click here!!</p>
        </a>
      )}
          </div>



          <div className="container_img_local">
            
              <div>
                <img className="img" src={images.imgLocal1} alt="" />
              </div>
              <div>
                <img className="img" src={images.imgLocal2} alt="" />
              </div>
              <div>
                <img className="img" src={images.imgLocal3} alt="" />
              </div>
              <div>
                <img className="img" src={images.imgLocal4} alt="" />
              </div>
              <div>
                <img className="img" src={images.imgLocal5} alt="" />
              </div>
              <div>
                <img className="img" src={images.imgLocal6} alt="" />
              </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// import React from "react";
// import images from "../../assets/img.js";
// import "./styles.scss";

// const Home = () => {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <>
//       <div className="container_home">
//         <div className="contenedor_img">
//           <img className="imagen_tama_street" src={images[0].img1} alt="" />
//         </div>

//         <div className="container">
//           <div className="What_are_you_Looking">
//             <h1>What are you looking for?</h1>
//             <h2>
//               Sometimes you have to choose to win, especially when it comes to
//               clothing.
//             </h2>
//             <button className="grayButton">Where do you find us?</button>
//           </div>

//           <div className="container_nextDrop"></div>

//           <div className="container_img_local">
//             <img className="img" src={images[2].imgLocal1} alt="" />
//             <img className="img" src={images[3].imgLocal2} alt="" />
//             <img className="img" src={images[4].imgLocal3} alt="" />
//             <img className="img" src={images[5].imgLocal4} alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
