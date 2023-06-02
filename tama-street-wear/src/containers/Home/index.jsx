import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import images from "../../assets/img.js";
import "./styles.scss";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="container_home">
        <div className="contenedor_img">
          <img className="imagen_tama_street" src={images.img1} alt="" />
        </div>

        <div className="container">
          <div className="What_are_you_Looking">
            <h1>What are you looking for?</h1>
            <h2>
              Sometimes you have to choose to win, especially when it comes to
              clothing.
            </h2>
            <button className="grayButton">Where do you find us?</button>
          </div>

          <div className="container_nextDrop"></div>

          <div className="container_img_local">
            <Slider {...settings}>
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
            </Slider>
            
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
