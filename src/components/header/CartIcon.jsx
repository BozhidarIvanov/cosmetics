import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BiCart, BiCartAlt } from 'react-icons/bi';

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  return (
    <div>
      {cartItemCount > 0 ? (
        <div>
          <BiCartAlt size={24} />
          <span>{cartItemCount}</span>
        </div>
      ) : (
        <div>
          <BiCart size={24} /> {/* Empty cart icon */}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
