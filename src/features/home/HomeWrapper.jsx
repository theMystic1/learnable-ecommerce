import RatingsSec from "./RatingsSec";
import FeaturedPost from "./FeaturedPost";
import Hero from "./Hero";
import HomeList from "./HomeList";
import ProblemsResolve from "./ProblemsResolve";
import Services from "./Services";

function HomeWrapper() {
  return (
    <>
      <div className="shit">
        <Hero />
        <HomeList />
        <Services />
        <FeaturedPost />
        <RatingsSec />
      </div>
      <ProblemsResolve />
    </>
  );
}

export default HomeWrapper;
