import FurnitureDet from "./HeroTxt";

function Hero() {
  return (
    <div className="hero-section">
      <div className="single-img">
        <FurnitureDet />
      </div>

      <div className="multple-img">
        <div className="img-1">
          <FurnitureDet />
        </div>

        <div className="double-img">
          <div className="img-2">
            <FurnitureDet />
          </div>
          <div className="img-3">
            <FurnitureDet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
