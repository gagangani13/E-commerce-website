
import StorePage from "./StorePage";
import CartProvider from "../Context/CartProvider";
const STORE = () => {
  return (
    <CartProvider>
      <StorePage/>
    </CartProvider>
  );
};

export default STORE;
