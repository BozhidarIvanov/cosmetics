import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleAdd = (product) => {
    const newProduct = {
      id: generateUniqueId(),
      name: product.name,
      price: product.price,
    };

    addToCart(newProduct);
  };

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomString}`;
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <ListGroup>
        {groupedCart.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <span>
                {item.name} (Quantity: {item.quantity})
              </span>
              <span>Price: {item.price}</span>
            </div>
            <div>
              <Button variant="danger" onClick={() => handleRemove(item.id)}>
                -
              </Button>
              <Button variant="primary" onClick={() => handleAdd(item)}>
                +
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3>Subtotal: ${subtotal}</h3>
    </div>
  );
};

export default Cart;
