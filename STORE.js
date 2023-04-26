import StorePage from "./StorePage";
// import ProductDetail from "./ProductDetail";
// import { Route, } from "react-router-dom";
import CartProvider from "../Context/CartProvider";
const STORE = () => {
  return (
    <CartProvider>
      <StorePage />
      {/* <Switch>
        <Route path="/STORE/:Id" exact>
          <ProductDetail />
        </Route>
      </Switch> */}
    </CartProvider>
  );
};
export default STORE;
