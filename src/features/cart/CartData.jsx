import { useSelector } from "react-redux";
import { useAllProductsQuery } from "../../services/redux/reduxApi";
import HomeListItem from "../home/HomeListItem";

function CartData() {
  const { data, isLoading } = useAllProductsQuery();
  const cart = useSelector((state) => state.cart);
  // console.log(cart);

  const dataCategory = data?.products?.filter((item) => {
    if (cart.items.length > 0 && cart.items[0].category) {
      return item.category === cart.items[0].category;
    }
    return data?.products;
  });

  // console.log(data);

  // console.log(dataCategory);
  if (isLoading) return <p>Loading data...</p>;
  return (
    <div className="best-prod">
      <h1> PRODUCTs related to items in your cart</h1>
      <div className="prod-grid">
        {dataCategory?.slice(0, 8).map((item) => (
          <HomeListItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default CartData;
