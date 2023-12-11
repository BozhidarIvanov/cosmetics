import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/authContex.jsx';
import CartIcon from './CartIcon';

export const Header = () => {
  const { isAuth, dataEmail } = useContext(AuthContext);
  console.log('3 ' + dataEmail);
  console.log('test ' + isAuth);
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
            <Nav.Link as={Link} to="/search">
              <Image src="images/search-icon.png" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
