import React, { useContext,  } from "react";
import { Card, Button,  } from "react-bootstrap";
import CartContext from "../Context/CartContext";

const Product = () => {

  const details=useContext(CartContext)
  function addItemToCart(e){
    details.addItemToCart(e.target.id)
    console.log(e.target.id)
  }
  
  return (
    <div className="container"  style={{maxWidth:'67vw',padding:'20px 30px',margin:'auto',}}>
      <div className="d-flex justify-content-around flex-wrap" style={{rowGap:'2rem'}}>
        {details.items.map((item) => {
          return (
              <Card style={{ width: "18rem"}}>
                <Card.Title className="text-center">{item.title}</Card.Title>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body className='d-flex align-items-baseline justify-content-between'>
                  <Card.Text className="">${item.price}</Card.Text>
                  <Button variant="primary" id={item.Id} onClick={addItemToCart}>ADD TO CART</Button>
                </Card.Body>
              </Card>
        )})}
      </div>
    </div>
  );
};

export default Product;
