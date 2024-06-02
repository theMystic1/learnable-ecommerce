import { Link } from "react-router-dom";
import { useGetProductByCategoryQuery } from "../../services/redux/reduxApi";
import HomeListItem from "../home/HomeListItem";

function BestProducts({ data: cateData }) {
  const { data, isLoading } = useGetProductByCategoryQuery(cateData.category);

  if (isLoading) return <p>Loading data...</p>;
  return (
    <div className="best-prod">
      <h1>BestSELLER PRODUCT</h1>
      <div className="prod-grid">
        {data.products?.slice(0, 8).map((item) => (
          <Link to={`/products/${item.id}`} key={item.id}>
            <HomeListItem item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestProducts;
