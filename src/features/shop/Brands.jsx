function Brands() {
  const brands = [
    "/assets/fa-brands-1.png",
    "/assets/fa-brands-2.png",
    "/assets/fa-brands-3.png",
    "/assets/fa-brands-4.png",
    "/assets/fa-brands-5.png",
  ];
  return (
    <div className="dlist brands">
      {brands.map((brand, i) => (
        <img src={brand} alt="brand" key={i} />
      ))}
    </div>
  );
}

export default Brands;
