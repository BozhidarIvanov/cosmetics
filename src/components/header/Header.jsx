import React, { useContext, useState } from 'react';
import { Navbar, Nav, Image, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContex.jsx';
import CartIcon from './CartIcon';

export const Header = ({ setSearchQuery }) => {
  const { isAuth, dataEmail } = useContext(AuthContext);
  const [showSearch, setShowSearch] = useState(false); // State to manage search field visibility
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch); // Toggles the visibility of the search field
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <Image src="images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/client">
              Client
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          <Nav>
            {!isAuth ? (
              <Nav.Link as={Link} to="/login">
                <Image src="images/user-icon.png" />
              </Nav.Link>
            ) : (
              <h4>{dataEmail}</h4>
            )}

            <Nav.Link as={Link} to="/cart">
              <CartIcon />
            </Nav.Link>
            <Nav.Link onClick={toggleSearch}>
              <Image src="images/search-icon.png" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {showSearch && ( // Render the search field if showSearch is true
  <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
    <Form inline="true">
    <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={handleSearch}
            />
      <Button variant="outline-success">Search</Button>
    </Form>
  </div>
)}

    </>
  );
};
