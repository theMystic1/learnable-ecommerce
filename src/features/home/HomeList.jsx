import { Link } from "react-router-dom";
import {
  useAllProductsQuery,
  usePaginateProductsQuery,
} from "../../services/redux/reduxApi";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import HomeListItem from "./HomeListItem";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";

function HomeList() {
  const { data, isLoading: isLoadingDatas } = useAllProductsQuery();
  const { data: paginateData, isLoading: isLoadingData } =
    usePaginateProductsQuery();

  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    if (!isLoadingData) setDisplayData(paginateData);
  }, [isLoadingData, setDisplayData, paginateData]);

  const isLoading = isLoadingDatas || isLoadingData;

  if (isLoading) return <Spinner />;

  function handleAllData() {
    if (!isLoading && displayData !== data) setDisplayData(data);
    if (!isLoading && displayData === data) setDisplayData(paginateData);
  }

  // console.log(displayData);

  return (
    <div className="list">
      <Header
        h2="Featured Products"
        h1="Bestseller product"
        parag="Problems trying to resolve the conflict between"
      />

      <div className="dlist">
        {displayData?.products?.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id}>
            <HomeListItem item={item} />
          </Link>
        ))}
      </div>
      <div className="btn-div">
        <Button onClick={handleAllData} disabled={isLoading}>
          {isLoading ? (
            <Spinner type="small" />
          ) : displayData === paginateData ? (
            "Load all products"
          ) : (
            "load less products"
          )}
        </Button>
      </div>
    </div>
  );
}

export default HomeList;
