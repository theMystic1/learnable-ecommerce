import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../services/redux/reduxApi";
import BestProducts from "./BestProducts";
import Brands from "./Brands";
import ShopDet from "./ShopDet";
import ShopItem from "./ShopItem";
import ShopNav from "./ShopNav";
import Spinner from "../../ui/Spinner";

function ShopWrapper() {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useGetProductByIdQuery(id);

  if (isError) return <p>{error?.message}</p>;

  if (isLoading) return <Spinner />;
  return (
    <div>
      <ShopItem data={data} isLoading={isLoading} />
      <ShopNav data={data} />
      <ShopDet data={data} />
      <BestProducts data={data} />
      <Brands />
    </div>
  );
}

export default ShopWrapper;
