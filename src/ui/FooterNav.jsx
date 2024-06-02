import Logo from "./Logo";

function FooterNav() {
  return (
    <div className="footer-nav">
      <Logo />
      <div className="socials">
        <img src="/assets/facebook.png" alt="" />
        <img src="/assets/instagram.png" alt="" />
        <img src="/assets/twitter.png" alt="" />
      </div>
    </div>
  );
}

export default FooterNav;
