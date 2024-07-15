import React, { useContext } from 'react';
import CartItem from './CartItem';
import Footer from '../Footer';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faFaceSadTear
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import CartTotals from './CartTotals';
import './Cart.css'



const Cart = () => {

  const {cart} = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.amount * item.quantity, 0);
  };


  return (
    <>
    <div >
      <Link to='/shopping' style={{textDecoration:'none' , display:'flex' ,gap:'10px' , alignItems:'center' , color:'black'}}>
      <FontAwesomeIcon icon={faArrowLeft} style={{color:'#1C75BC'}}/>
      <span>
        <h4 style={{color:'#1C75BC'}}>Continue Shopping </h4>
      </span>
      </Link>   
      <hr />
    </div>

    <div className='cart-container'>
    <div className="cart">
      {
        cart.length === 0 ? (
          <>
          <div className="empty-cart-message">
      <FontAwesomeIcon icon={faFaceSadTear} className="sad-face-icon" />
      <span className="message-text">
        Oops! Your cart is empty...
      </span>
    </div>
         
          </>
          
        ):(
          cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))
        )
      }
    </div>

    { 
      cart.length > 0 && <CartTotals calculateTotal={calculateTotal}/>
    }

      
      </div>

  
    <hr />
    <Footer/>
    </>
  );
};

export default Cart;
