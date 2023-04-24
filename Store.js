import React, { useContext ,} from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import Product from "./Product";
const Store = () => {
  const details=useContext(CartContext)
  return (
    <>
      <div>
        <Card
          className="text-white text-center"
          variant="light"
          style={{
            width: "100%",
            height: "30vh",
            fontSize: "10vw",
            backgroundColor: "grey",
            justifyContent:'center'
          }}
        >
          The Generics
        </Card>
        <h3 style={{ textAlign: "center", fontWeight: "bold", padding: "20px 0" }}>PRODUCTS</h3>
        <Product />
        <Button variant="primary" className="d-flex  mx-auto mb-1rem" onClick={details.showCart}>
          SEE CART
        </Button>
      </div>
    </>

  );
};

export default Store;
