function ShopNav({ data }) {
  const { reviews } = data;
  // console.log(data);
  return (
    <nav className="shop-nav">
      <ul>
        <li>Description</li>
        <li>Additional Information</li>
        <li>
          Reviews <span>({reviews.length})</span>
        </li>
      </ul>
    </nav>
  );
}

export default ShopNav;
