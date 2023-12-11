import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap';

const Product = () => {
  const { cart, addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSeeMoreClick = (productName, price) => {
    // Set the selected product details to be displayed in the modal
    const productDetails = {
      name: productName,
      price: price,
      // Add more details here if needed
    };

    setSelectedProduct(productDetails);
    setShowModal(true); // Show the modal
  };

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomString}`;
  };

  const handleBuyNowClick = (productName, price) => {
    // Create a new product object
    const newProduct = {
      id: generateUniqueId(),
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
          <Col lg={3} sm={6}>
            <div className="product2_box">
              <h4 className="bursh2_text">Beauty Brush</h4>
              <p className="lorem2_text">
                incididunt ut labore et dolore magna aliqua. Ut enim
              </p>
              <Image src="images/img-2.png" className="image_2" />
              <div className="btn2_main">
                <Button
                  variant="primary"
                  onClick={() => handleBuyNowClick('Beauty Set', 30)}
                >
                  Buy Now
                </Button>
                <h3 className="price_text2">Price $10</h3>
              </div>
            </div>
          </Col>
          {/* Repeat this structure for other product boxes */}
        </Row>
        <Row>
          <Col>
            <div className="seemore_bt">
            <Button variant="primary" onClick={() => handleSeeMoreClick('Beauty Brush', 30)}>
        See More
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <p>Price: ${selectedProduct.price}</p>
              {/* Add more details here */}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {/* Add any other buttons or actions needed */}
        </Modal.Footer>
      </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
