import React from "react";
import { Container, Navbar,Button,Badge } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Brand href="#home">STORE</Navbar.Brand>
        <Navbar.Brand href="#home">ABOUT</Navbar.Brand>
        <Button variant="primary">
          Cart <Badge bg="secondary">0</Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
