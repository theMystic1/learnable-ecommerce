// import StarRating from "../ui/StarRating";

function RatingsSec() {
  const unsplash = [
    "/assets/unsplash-1.png",
    "/assets/unsplash-2.png",
    "/assets/unsplash-3.png",
    "/assets/unsplash-4.png",
    "/assets/unsplash-5.png",
    "/assets/unsplash-6.png",
    "/assets/unsplash-7.png",
    "/assets/unsplash-8.png",
    "/assets/unsplash-9.png",
  ];
  return (
    <div className="rating-sec">
      <div className="profile">
        <h1>What they say about us</h1>
        <img src="/assets/media.png" alt="" />
        <span className="ratings">
          <img src="/assets/star.png" alt="" />
          <img src="/assets/star.png" alt="" />
          <img src="/assets/star.png" alt="" />
          <img src="/assets/star.png" alt="" />
          <img src="/assets/empty-star.png" alt="" />
        </span>

        <p>
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>

        <h3>Regina Miles</h3>
        <span>Designer</span>
      </div>
      <div className="imgs">
        <div className="images">
          {unsplash.map((img) => (
            <div key={img}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RatingsSec;
