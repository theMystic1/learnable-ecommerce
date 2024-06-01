import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import ShoppingCart from "./ShoppingCart";
import CartData from "./CartData";

function CartWrapper() {
  const cart = useSelector((state) => state.cart);

  const { items } = cart;
  return (
    <div>
      {items.length > 0 ? (
        <div className="cart-summary">
          <ShoppingCart />

          <CartSummary />
        </div>
      ) : (
        <p className="cart-p">Cart is Empty</p>
      )}

      <CartData />
    </div>
  );
}

export default CartWrapper;
