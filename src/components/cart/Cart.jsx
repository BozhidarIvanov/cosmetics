import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext'; // Import your CartContext

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      <ListGroup>
        {cart.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
            <Button variant="danger" onClick={() => handleRemove(item.id)}>
              X
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3>Subtotal: ${subtotal}</h3>
    </div>
  );
};

export default Cart;
