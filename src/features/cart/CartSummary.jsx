import { useSelector } from "react-redux";
import Button from "../../ui/Button";

function CartSummary() {
  const cart = useSelector((state) => state.cart);

  const { totalQuantity, items } = cart;

  const totalPrice = items
    .map((item) => item.price)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  return (
    <div className=" cart-checkout">
      <div>
        <h1 className="order">Order Summary</h1>
        <p className="total-sub">{totalQuantity} items</p>
      </div>
      <div>
        <p className="total-sub">Delivery Charges</p>

        <p className="error">
          Add your delivery address to checkout to see delivery charges
        </p>
      </div>
      <div>
        <p className="total-sub">Subtotal</p>
        <p className="total-sub">${totalPrice.toFixed(2)}</p>
      </div>
      <div>
        <p className="total">Total</p>
        <p className="total">${totalPrice.toFixed(2)}</p>
      </div>

      <span>
        <p></p>
        <p className="error">excluding Delivery Charges</p>
      </span>

      <Button type="primary">Proceed to checkout</Button>

      <div>
        <img src="/assets/paystack.png" alt="" />
        <img src="/assets/master.png" alt="" />

        <img src="/assets/visa.png" alt="" />
      </div>
    </div>
  );
}

export default CartSummary;
