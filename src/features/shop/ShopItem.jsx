import { useState } from "react";
import Button from "../../ui/Button";
import StarRating from "../../ui/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../services/redux/cartSlice";
import Spinner from "../../ui/Spinner";

function ShopItem({ data, isLoading }) {
  const color = ["#23a6f0", "#2dc071", "#e77c40", "#252b42"];
  const [img, setImg] = useState(0);

  const { title, availabilityStatus, reviews, images, price, rating } = data;

  function setImgData() {
    const maxImgCount = images.length;

    if (img < maxImgCount - 1) {
      setImg(img + 1);
    } else {
      setImg(0);
    }
  }

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddItem = () => {
    dispatch(addItem(data));
  };

  function handleRemoveItem() {
    dispatch(removeItem(data.id));
  }

  // console.log(cart);

  const isInCart = cart.items.some((item) => item.id === data.id);

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="shoppit">
        <div className="shoppindet">
          <div className="images-coll">
            <img className="shp-btn" src={images[img]} alt="" />
            <button className="xcxc" onClick={setImgData}>
              <img src="/assets/ChevronRight.png" className="arroe" alt="" />
            </button>

            <div className="img-nxt">
              {images.map((image, i) => (
                <img
                  className={`${img === i ? "active" : ""}`}
                  src={image}
                  alt=""
                  key={image}
                  onClick={() => setImg(i)}
                />
              ))}
            </div>
          </div>

          <div className="details-shop">
            <div className="det--shop">
              <h3>{title}</h3>
              <div>
                <StarRating size={24} defaultRating={Math.round(rating)} />
                <p>{reviews.length} reviews</p>
              </div>

              <p>${price}</p>
              <span>
                <p>Availability :</p>
                <p>{availabilityStatus}</p>
              </span>
            </div>

            <div className="color-opts">
              <div>
                {color.map((itm, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: `${itm}`,
                      height: "3rem",
                      width: "3rem",
                      borderRadius: "50%",
                    }}
                  ></div>
                ))}
              </div>
              <div>
                <Button type="primary">select options</Button>

                <button className="img-btn">
                  <img src="/assets/like.png" alt="" />
                </button>
                <button
                  className={`img-btn ${isInCart ? "cartActive" : ""}`}
                  onClick={() => {
                    isInCart ? handleRemoveItem(data.id) : handleAddItem();
                  }}
                >
                  <img
                    src={isInCart ? "/assets/inCart.svg" : "/assets/cart-c.png"}
                    alt=""
                  />
                </button>
                <button className="img-btn">
                  <img src="/assets/eye.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopItem;
