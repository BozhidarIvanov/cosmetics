import { Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <Image src="images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/client">Client</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              <Image src="images/user-icon.png" />
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <Image src="images/bag-icon.png" />
            </Nav.Link>
            <Nav.Link as={Link} to="/search">
              <Image src="images/search-icon.png" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
