import React, { useState } from 'react';
import './cart.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Tooltip from '@mui/material/Tooltip';
import CartForm from './CartForm/CartForm.jsx';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpenCart, setisOpenCart] = useState(false);

  const handleCartClick = () => {
    setisOpenCart(true);
  };

  // const handleIconClose = () => {
  //   setIsOpen(false);
  // };
  
  const handleCartMouseEnter = () => {
    setisOpenCart(true);
  };

  const handleCartMouseLeave = () => {
    setisOpenCart(false);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="Cart"
          onClick={handleCartClick}
          onMouseEnter={handleCartMouseEnter}
          onMouseLeave={handleCartMouseLeave}>
      <Tooltip title="Giỏ hàng" arrow>
      <div className="cartclick" >
          <ShoppingCartOutlinedIcon />
        </div>
        {isOpenCart && (
          <div className="cart-content">
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
                <CartForm/> 
            )}

          </div>
        )}
        </Tooltip>
    </div>
  );
};

export default Cart;
