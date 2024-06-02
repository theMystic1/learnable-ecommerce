function DetailsNav() {
  return (
    <nav className="info-nav">
      <div className="callMail">
        <span>
          <img src="/assets/icn settings icn-xs.png" alt="phone" />

          <h1>(225) 555-0118</h1>
        </span>

        <span>
          <img src="/assets/icn settings icn-xs (6).png" alt="mail" />

          <h1>michelle.rivera@example.com</h1>
        </span>
      </div>

      <h2 className="discount">Follow Us and get a chance to win 80% off</h2>

      <div className="callMail">
        <h2 className="discount"> Follow Us :</h2>
        <img src="/assets/icn settings icn-xs (1).png" alt="social" />
        <img src="/assets/a.png" alt="social" />{" "}
        <img src="/assets/icn settings icn-xs (2).png" alt="social" />{" "}
        <img src="/assets/icn settings icn-xs (3).png" alt="social" />
      </div>
    </nav>
  );
}

export default DetailsNav;
