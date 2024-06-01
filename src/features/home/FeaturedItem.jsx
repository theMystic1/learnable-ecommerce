function FeaturedItem({ imgUrl }) {
  return (
    <div className="featured-item">
      <img src={imgUrl} alt="" className="img" />
      <div className="feat--item">
        <ul>
          <li>Google</li>
          <li>Trending</li>
          <li>New</li>
        </ul>

        <h3>
          Loudest à la Madison #1 <br /> (L'integral)
        </h3>

        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>

        <span className="feat-span">
          <span>
            <img src="/assets/date.png" alt="" />
            <p> 22 April 2021</p>
          </span>

          <span>
            <img src="/assets/comment.png" alt="" />
            <p> 10 comments</p>
          </span>
        </span>

        <button>
          <span>Learn More</span>
          <img src="/assets/icon arrow-next.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default FeaturedItem;
