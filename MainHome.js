import React, { useContext } from "react";
import Header from "./Header";
import Store from "./Store/Store";
import Footer from "./Footer"
import CartDisplay from "./Store/CartDisplay";
import CartContext from "./Context/CartContext";
const MainHome = () => {
  const details=useContext(CartContext)
  return (
    <>
      <Header/>
      <Store/>
      { details.openCart && <CartDisplay/>}
      <Footer/>
      
    </>
  );
};

export default MainHome;
