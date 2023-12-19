import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap';

const Product = ({ products, searchQuery }) => {
  const { addToCart } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Filter products based on searchQuery
    if (searchQuery) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      // Reset to original products if search query is empty
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomString}`;
  };

  const handleBuyNowClick = (product) => {
    const newProduct = {
      id: generateUniqueId(),
      name: product.name,
      price: product.price,
    };
    addToCart(newProduct);
  };

  const handleSeeMoreClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
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
          {filteredProducts.map((product, index) => (
            <Col lg={3} sm={6} key={index}>
              <div className="product_box">
                <h4 className="bursh_text">{product.name}</h4>
                <p className="lorem_text">{product.description}</p>
                <Image src={product.image} className={`image_${index}`} />
                <div className="btn_main">
                  <Button
                    variant="primary"
                    onClick={() => handleBuyNowClick(product)}
                  >
                    Buy Now
                  </Button>
                  <h3 className="price_text">Price ${product.price}</h3>
                </div>
                <Button variant="outline-secondary" onClick={() => handleSeeMoreClick(product)}>
                  See More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <div className="seemore_bt">
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {selectedProduct && selectedProduct.name}
                  </Modal.Title>
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
                  {/* Add other buttons or actions needed */}
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
