import FeaturedItem from "./FeaturedItem";

function FeaturedPost() {
  const imgUrl = [
    "/assets/new-1.png",
    "/assets/new-2.png",
    "/assets/new-3.png",
  ];
  return (
    <div className="featured">
      {imgUrl.map((url) => (
        <FeaturedItem key={url} imgUrl={url} />
      ))}
    </div>
  );
}

export default FeaturedPost;
