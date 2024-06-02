function HomeListItem({ item, onclick }) {
  // console.log(item);
  const { title, category, price, discountPercentage, thumbnail } = item;

  const discountNum = discountPercentage / 100;
  const discount = price * discountNum;

  return (
    <>
      <div className="list-info" onClick={onclick}>
        <div>
          <img src={thumbnail} alt="" />
        </div>
        <div className="list-det">
          <h2>{title}</h2>
          <p>{category}</p>
          <span>
            <p>${price}</p>
            <p>${discount.toFixed(2)}</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default HomeListItem;
