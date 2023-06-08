import React, { useState } from "react";
import images from "../../assets/img.js";
import "./styles.scss";
import NewDrop from "../../components/NextDrop/index.jsx";

const Home = () => {
  const [buttonMaps, setButtonMaps] = useState(false);

  const handleButtonMapsClick = () => {
    setButtonMaps(true);
  };

  const redirectToMaps = () => {
    window.open(
      "https://www.google.com/maps/place/VIACONDOTTI/@10.2974173,-85.841203,17z/data=!3m1!4b1!4m6!3m5!1s0x8f9e398c17241699:0x8568adab0e9b2ec0!8m2!3d10.2974173!4d-85.841203!16s%2Fg%2F11tm_dkv_w?hl=es-CR&entry=ttu",
      "_blank"
    );
  };

  return (
    <>
      <div className="container_home">
        <div className="contenedor_img">
          <img className="imagen_tama_street" src={images.img1} alt="" />
        </div>
        {/* Proximos Drops, container de negocio, que vaya mostrando la nueva tanda que se viene */}
        <div className="container_nextDrop">
          <NewDrop />
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
              <h2 onClick={redirectToMaps}>
                Redirecting to Google Maps... click here!!
              </h2>
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
