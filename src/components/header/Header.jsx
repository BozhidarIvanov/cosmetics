import { Navbar, Nav, Image } from 'react-bootstrap'

export const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Image src="images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#client">Client</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">
              <Image src="images/user-icon.png" />
            </Nav.Link>
            <Nav.Link href="#cart">
              <Image src="images/bag-icon.png" />
            </Nav.Link>
            <Nav.Link href="#search">
              <Image src="images/search-icon.png" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
