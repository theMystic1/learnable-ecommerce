import { useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../../services/redux/cartSlice";
import StarRating from "../../ui/StarRating";

function ShoppingCartItem({ item }) {
  const dispatch = useDispatch();
  const {
    title,
    thumbnail,
    availabilityStatus,
    reviews,
    id,
    price,
    quantity: totalQuantity,
    rating,
  } = item;

  // const { totalPrice,  } = cart;
  // console.log(item);

  function handleRemoveItem() {
    dispatch(removeItem(id));
  }

  function handleIncItems() {
    dispatch(incrementQuantity(id));
  }

  function handleDecItem() {
    dispatch(decrementQuantity(id));
  }
  return (
    <div className="cart-item">
      <div className="cart-product">
        <div className="itm-img">
          <img className="imgg" src={thumbnail} alt="" />

          <div>
            <button onClick={handleRemoveItem}>
              <img src="/assets/deleteicon.png" alt="" />
              <span>REMOVE</span>
            </button>
          </div>
        </div>
        <div>
          <div className="det-stock-shop">
            <h3>{title}</h3>
            <p>{availabilityStatus}</p>
            <div>
              <StarRating size={18} defaultRating={Math.round(rating)} />
              <p>{reviews.length} reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="addtocart">
        <button className="cart-rm" onClick={handleDecItem}>
          <img src="/assets/removeicon.png" alt="" />
        </button>
        <span>{totalQuantity}</span>
        <button className="add-cart" onClick={handleIncItems}>
          <img src="/assets/addicon.png" alt="" />
        </button>
      </div>
      <div className="pricing">
        <h1>${price.toFixed(1)}</h1>
        <p>
          <span>${price.toFixed(1)}</span> * <span>{totalQuantity} item</span>
        </p>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
