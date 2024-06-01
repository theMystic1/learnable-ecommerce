import Header from "../../ui/Header";

function Services() {
  return (
    <div className="services">
      <Header
        h2="Featured Products"
        h1="THE BEST SERVICES
"
        parag="Problems trying to resolve the conflict between 
"
      />
      <div className="services-det">
        <div>
          <img src="/assets/icon-cool-icon-1153.svg" alt="" />
          <h1>easy wins</h1>
          <p>Get your best looking smile now!</p>
        </div>
        <div>
          <img src="/assets/icon-cool-icon-153.svg" alt="" />
          <h1>Concrete</h1>
          <p>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div>
          <img src="/assets/icon-cool-icon-125.svg" alt="" />
          <h1>Hack Growth</h1>
          <p>Overcame any hurdle or any other problem.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
