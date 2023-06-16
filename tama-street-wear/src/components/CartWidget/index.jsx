import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./styles.scss"
import {Shop} from "../../context/Shop"
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {

    const {calculateItemTotal} =useContext(Shop)


    const Navigate= useNavigate();
  
  
    
    const handleNavigate=()=>{
      Navigate(`/cart`)
  
  
    };
  return (
    <>
    <FontAwesomeIcon  onClick={handleNavigate} icon={faCartShopping} className="cart_icon" />
    <span>{calculateItemTotal() === 0 ? null : `(${calculateItemTotal()})`} </span>
    </>

  )
}

export default CartWidget