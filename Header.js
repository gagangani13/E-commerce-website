import React ,{useContext} from "react";
import { Container, Navbar,Button,Badge } from "react-bootstrap";
import CartContext from "./Context/CartContext";
const Header = () => {
  const details=useContext(CartContext)
  return (
    <Navbar bg="dark" expand="sm" variant="dark" className='position-fixed w-100 ' style={{zIndex:'5'}}>
      <Container className='' >
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Brand href="#home">STORE</Navbar.Brand>
        <Navbar.Brand href="#home">ABOUT</Navbar.Brand>
        <Button variant="primary" onClick={details.showCart}>
          Cart <Badge bg="secondary">{details.items.reduce((acc,curr)=>{
            return acc+Number(curr.Qty)
          },0)}</Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
