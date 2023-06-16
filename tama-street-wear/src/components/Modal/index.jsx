import React, { useState } from "react";
import images from "../../assets/Logo.png";
import "./styles.scss";
import Router from "../../router";
import { motion } from "framer-motion";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-image-container">
              <img className="modal-image" src={images} alt="Logo" />
              
            </div>
            <motion.button
              className="modal-close-button"
              onClick={handleClose}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
            This is Fire!

            </motion.button>
          </div>
        </div>
      )}
      {!isOpen && <Router />}
    </>
  );
};

export default Modal;
