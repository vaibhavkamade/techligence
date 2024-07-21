import React, { useContext } from 'react';
import CartItem from './CartItem';
import Footer from '../Footer';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import CartTotals from './CartTotals';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.amount * item.quantity, 0);
  };

  const calculateGST = () => {
    return cart.reduce((total, item) => {
      const gstRate = item.GST ? item.GST : 0;
      return total + (item.amount * item.quantity * (gstRate / 100));
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const gst = calculateGST();
    return subtotal + gst;
  };

  console.log(cart);

  return (
    <>
      <div>
        <Link to='/shopping' style={{ textDecoration: 'none', display: 'flex', gap: '10px', alignItems: 'center', color: 'black' }}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#1C75BC' }} />
          <span>
            <h4 style={{ color: '#1C75BC' }}>Continue Shopping</h4>
          </span>
        </Link>
        <hr />
      </div>

      <div className='cart-container'>
        <div className="cart">
          {
            cart.length === 0 ? (
              <div className="empty-cart-message">
                <FontAwesomeIcon icon={faFaceSadTear} className="sad-face-icon" />
                <span className="message-text">
                  Oops! Your cart is empty...
                </span>
              </div>
            ) : (
              cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))
            )
          }
        </div>

        {
          cart.length > 0 && <CartTotals calculateSubtotal={calculateSubtotal} calculateGST={calculateGST} calculateTotal={calculateTotal} cart={cart} />
        }
      </div>

      <hr />
      <Footer />
    </>
  );
};

export default Cart;
