import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
const ProductDetail = () => {
    console.log('ssg');
  const details = useContext(CartContext);
  const {Id}= useParams()
  console.log(Id);
  const location=useLocation()
  console.log(location);
  
  return (
    <div
      className="container"
      style={{ maxWidth: "67vw", padding: "20px 30px", margin: "auto" }}
    >
      <div
        className="d-flex justify-content-around flex-wrap"
        style={{ rowGap: "2rem" }}
      >
        {details.items.map((item) => {
        //   console.log(item.Id);
          return (
            <Card style={{ width: "18rem" }}>
              <div id={item.Id}>
                <Card.Title className="text-center">
                  {item.title}
                </Card.Title>
                <Card.Img variant="top"  src={item.imageUrl} />
              </div>
              <Card.Body className="d-flex align-items-baseline justify-content-between">
                <Card.Text className="">${item.price}</Card.Text>
                <Button variant="primary" id={item.Id} >
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
