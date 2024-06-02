import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/redux/reduxApi";
import BestProducts from "./BestProducts";
import Brands from "./Brands";
import ShopDet from "./ShopDet";
import ShopItem from "./ShopItem";
import ShopNav from "./ShopNav";

function ShopWrapper() {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useGetProductByIdQuery(id);

  if (isError) return <p>{error?.message}</p>;

  if (isLoading) return <p>Loading....</p>;
  return (
    <div>
      <ShopItem data={data} />
      <ShopNav data={data} />
      <ShopDet data={data} />
      <BestProducts data={data} />
      <Brands />
    </div>
  );
}

export default ShopWrapper;
