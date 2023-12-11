import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Product = () => {
  const { cart, addToCart } = useContext(CartContext);

  const handleBuyNowClick = (productName, price) => {
    // Create a new product object
    const newProduct = {
      id: cart.length + 1,
      name: productName,
      price: price,
    };

    // Add the product to the cart using the context function
    addToCart(newProduct);
  };

  return (
    <div className="product_section layout_padding">
      <Container>
        <Row>
          <Col>
            <h1 className="product_taital">Our Products</h1>
            <p className="product_text">
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={3} sm={6}>
            <div className="product_box">
              <h4 className="bursh_text">Beauty Brush</h4>
              <p className="lorem_text">
                incididunt ut labore et dolore magna aliqua. Ut enim
              </p>
              <Image src="images/img-1.png" className="image_1" />
              <div className="btn_main">
                <Button
                  variant="primary"
                  onClick={() => handleBuyNowClick('Beauty Brush', 30)}
                >
                  Buy Now
                </Button>
                <h3 className="price_text">Price $30</h3>
              </div>
            </div>
          </Col>
          {/* Repeat this structure for other product boxes */}
        </Row>
        <Row>
          <Col>
            <div className="seemore_bt">
              <Button variant="primary">See More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
