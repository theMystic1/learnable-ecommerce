import { useSelector } from "react-redux";
import Header from "./Header";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);

  const { items } = cart;

  return (
    <div className="header-cart">
      <Header />
      {items.map((item) => (
        <ShoppingCartItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ShoppingCart;
