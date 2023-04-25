import React  from "react";
import { Container, Navbar, } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" expand="sm" variant="dark" className='position-fixed w-100 ' style={{zIndex:'5'}} >
      <Container className='' >
        <Navbar.Brand href="http://localhost:3000/">HOME</Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/STORE">STORE</Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/ABOUT">ABOUT</Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/CONTACT">CONTACT US</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
