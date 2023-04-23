import React from "react";
import { Card, Button,  } from "react-bootstrap";
const Product = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div className="container"  style={{maxWidth:'67vw',padding:'20px 30px',margin:'auto',}}>
      <div className="d-flex justify-content-around flex-wrap" style={{rowGap:'2rem'}}>
        {productsArr.map((item) => {
          return (
              <Card style={{ width: "18rem"}}>
                <Card.Title className="text-center">{item.title}</Card.Title>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body className='d-flex align-items-baseline justify-content-between'>
                  <Card.Text className="">${item.price}</Card.Text>
                  <Button variant="primary">ADD TO CART</Button>
                </Card.Body>
              </Card>
        )})}
      </div>
    </div>
  );
};

export default Product;
