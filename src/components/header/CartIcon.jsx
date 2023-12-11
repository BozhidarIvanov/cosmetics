import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext'; // Import your CartContext

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  // Calculate the number of items in the cart
  const cartItemCount = cart.length;

  return (
    <div>
      {cartItemCount > 0 ? (
        <div>
          <Image src="images/filled-cart.svg" alt="Filled Cart" />
          <span>{cartItemCount}</span>
        </div>
      ) : (
        <Image src="images/empty-cart.svg" alt="Empty Cart" />
      )}
    </div>
  );
};

export default CartIcon;
